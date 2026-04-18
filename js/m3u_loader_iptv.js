// Inject Responsive Styles
if (!document.getElementById('responsive-grid-style')) {
    const style = document.createElement('style');
    style.id = 'responsive-grid-style';
    style.textContent = `
      .video-grid-responsive {
        list-style-type: none;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
        padding: 0;
      }
      @media (min-width: 768px) {
        .video-grid-responsive {
          grid-template-columns: repeat(4, 1fr);
        }
      }
      @media (min-width: 992px) {
        .video-grid-responsive {
          grid-template-columns: repeat(6, 1fr);
        }
      }
      #planb-badge {
        position: absolute;
        top: 6px;
        left: 10px;
        z-index: 10;
        background: rgba(245,158,11,0.92);
        color: #1a1a2e;
        font-size: 0.72rem;
        font-weight: bold;
        padding: 2px 10px;
        border-radius: 4px;
        pointer-events: none;
      }
    `;
    document.head.appendChild(style);
}

// ── Plan B: hls.js fallback ──────────────────────────────────────────────────

let _hlsInstance  = null;
let _hlsReady     = false;
let _hlsLoading   = false;

function _loadHlsJs(cb) {
    if (_hlsReady)   { cb(); return; }
    if (_hlsLoading) {
        const t = setInterval(() => { if (_hlsReady) { clearInterval(t); cb(); } }, 100);
        return;
    }
    _hlsLoading = true;
    const s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/hls.js@1.5.13/dist/hls.min.js';
    s.onload  = () => { _hlsReady = true; _hlsLoading = false; cb(); };
    s.onerror = () => { _hlsLoading = false; cb(); }; // llamar igual para usar video nativo
    document.head.appendChild(s);
}

function _activatePlanB(url) {
    const playerDiv = document.getElementById('player');
    if (!playerDiv) return;

    // 1. Destruir Clappr INMEDIATAMENTE (síncrono)
    if (window.player && typeof window.player.destroy === 'function') {
        try { window.player.destroy(); } catch (e) {}
        window.player = null;
    }
    if (_hlsInstance) { try { _hlsInstance.destroy(); } catch (e) {} _hlsInstance = null; }

    // 2. Crear el video element INMEDIATAMENTE — sin esperar hls.js
    playerDiv.innerHTML = '';

    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'position:relative;width:100%;background:#000;';

    const badge = document.createElement('div');
    badge.id = 'planb-badge';
    badge.textContent = '▶ hls.js player';

    const video = document.createElement('video');
    video.controls   = true;
    video.autoplay   = true;
    video.setAttribute('playsinline', '');
    video.style.cssText = 'width:100%;max-height:480px;display:block;';

    wrapper.appendChild(badge);
    wrapper.appendChild(video);
    playerDiv.appendChild(wrapper);
    playerDiv.scrollIntoView({ behavior: 'smooth' });

    // 3. Cargar hls.js y attachar al video ya visible
    _loadHlsJs(() => {
        if (typeof Hls !== 'undefined' && Hls.isSupported()) {
            let triedProxy = false;

            function startHls(src) {
                if (_hlsInstance) { try { _hlsInstance.destroy(); } catch(e) {} }
                _hlsInstance = new Hls({ enableWorker: true, lowLatencyMode: true });
                _hlsInstance.loadSource(src);
                _hlsInstance.attachMedia(video);
                _hlsInstance.on(Hls.Events.MANIFEST_PARSED, () => video.play().catch(() => {}));
                _hlsInstance.on(Hls.Events.ERROR, (_, data) => {
                    if (data.fatal && !triedProxy) {
                        triedProxy = true;
                        badge.textContent = '▶ hls.js + proxy CORS';
                        // Reintentar con proxy CORS
                        const proxyUrl = 'https://corsproxy.io/?' + encodeURIComponent(url);
                        startHls(proxyUrl);
                    } else if (data.fatal && triedProxy) {
                        badge.textContent = '❌ Stream no disponible';
                        video.style.display = 'none';
                        const msg = document.createElement('p');
                        msg.style.cssText = 'color:#f87171;text-align:center;padding:40px 20px;font-size:1rem;';
                        msg.textContent = '⚠️ Este canal no está disponible: el stream requiere proxy de servidor o está offline.';
                        wrapper.appendChild(msg);
                    }
                });
            }

            startHls(url);
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = url;
            video.play().catch(() => {});
        } else {
            video.src = url;
            video.play().catch(() => {});
        }
    });
}

// Función global expuesta para los HTML
// Va directo a hls.js — más compatible que Clappr para streams m3u arbitrarios
window.playChannelWithFallback = function (url) {
    _activatePlanB(url);
};

// ── M3U Loader ───────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
    const M3U_URL = 'https://raw.githubusercontent.com/TVPRO20/Megatv23/master/tv23.m3u';
    const ITEMS_PER_PAGE = 27;
    let allVideos    = [];
    let currentIndex = 0;
    let isFetched    = false;

    const galleryContainer = document.getElementById('dynamic-gallery-container');
    const loadMoreBtn      = document.getElementById('load-more-btn');
    const toggleBtn        = document.getElementById('toggle-dynamic-gallery');
    const wrapper          = document.getElementById('dynamic-gallery-wrapper');

    const gridList = document.createElement('ul');
    gridList.id        = 'video_navigation_dynamic';
    gridList.className = 'video-grid-responsive';
    if (galleryContainer) galleryContainer.appendChild(gridList);

    async function fetchAndParseM3U() {
        if (isFetched) return;

        if (toggleBtn) { toggleBtn.textContent = '⏳ Cargando...'; toggleBtn.disabled = true; }

        const progressText = document.getElementById('progress-text');
        if (progressText) progressText.textContent = '⏳ Descargando catálogo...';

        try {
            let text;
            try {
                const response = await fetch(M3U_URL);
                if (!response.ok) throw new Error('Network response was not ok');
                text = await response.text();
            } catch (errorA) {
                console.warn('Falló Plan A (URL principal). Intentando Plan B proxy...', errorA);
                if (progressText) progressText.textContent = '⏳ Intentando proxy...';
                const M3U_URL_PLAN_B = 'https://api.allorigins.win/raw?url=' + encodeURIComponent(M3U_URL);
                const responseB = await fetch(M3U_URL_PLAN_B);
                if (!responseB.ok) throw new Error('Network response was not ok en Plan B');
                text = await responseB.text();
            }

            parseM3U(text);
            isFetched = true;
            if (toggleBtn) { toggleBtn.textContent = '📂 Ocultar Catálogo'; toggleBtn.disabled = false; }
        } catch (error) {
            console.error('Error fetching M3U:', error);
            if (galleryContainer) galleryContainer.innerHTML = '<p class="text-white text-center">Error al cargar la lista (Plan A y B fallaron).</p>';
            if (toggleBtn) toggleBtn.textContent = '❌ Error';
            if (progressText) progressText.textContent = '❌ Error al cargar el catálogo';
        }
    }

    function parseM3U(data) {
        const lines = data.split('\n');
        let currentVideo = {};

        lines.forEach(line => {
            line = line.trim();
            if (line.startsWith('#EXTINF:')) {
                const logoMatch = line.match(/tvg-logo="([^"]*)"/);
                if (logoMatch) currentVideo.logo = logoMatch[1];
                const titleParts = line.split(',');
                if (titleParts.length > 1) currentVideo.title = titleParts.slice(1).join(',').trim();
            } else if (line.length > 0 && !line.startsWith('#')) {
                currentVideo.url = line;
                if (currentVideo.url && currentVideo.title) allVideos.push(currentVideo);
                currentVideo = {};
            }
        });

        window._iptvCatalog = allVideos;
        updateProgress();
        loadMoreVideos();
    }

    function loadMoreVideos() {
        const nextBatch = allVideos.slice(currentIndex, currentIndex + ITEMS_PER_PAGE);

        if (nextBatch.length === 0) {
            if (loadMoreBtn) loadMoreBtn.style.display = 'none';
            updateProgress();
            return;
        }

        nextBatch.forEach(video => {
            const li  = document.createElement('li');
            li.className = 'cursor-pointer';

            const img = document.createElement('img');
            img.src       = video.logo || 'https://via.placeholder.com/150x225?text=No+Image';
            img.alt       = video.title;
            img.className = 'img_video_nav img-thumbnail w-100';

            li.onclick = () => window.playChannelWithFallback(video.url);
            li.appendChild(img);
            gridList.appendChild(li);
        });

        currentIndex += ITEMS_PER_PAGE;
        updateProgress();

        if (currentIndex >= allVideos.length && loadMoreBtn) loadMoreBtn.style.display = 'none';
    }

    function updateProgress() {
        const progressText = document.getElementById('progress-text');
        if (!progressText) return;
        const loaded     = Math.min(currentIndex, allVideos.length);
        const total      = allVideos.length;
        const percentage = total > 0 ? Math.round((loaded / total) * 100) : 0;

        if (currentIndex >= allVideos.length) {
            progressText.innerHTML = `✅ ${total} canales cargados <br><small style="color:#9ca3af;">100% completado</small>`;
        } else {
            progressText.innerHTML = `📺 ${loaded} / ${total} canales <br><small style="color:#9ca3af;">${percentage}% cargado</small>`;
        }
    }

    if (toggleBtn && wrapper) {
        toggleBtn.addEventListener('click', () => {
            if (wrapper.style.display === 'none') {
                wrapper.style.display = 'block';
                if (!isFetched) {
                    fetchAndParseM3U();
                } else {
                    toggleBtn.textContent = '📂 Ocultar Catálogo';
                    updateProgress();
                }
            } else {
                wrapper.style.display = 'none';
                toggleBtn.textContent = '📂 Mostrar Catálogo Completo';
            }
        });
    }

    if (loadMoreBtn) loadMoreBtn.addEventListener('click', loadMoreVideos);
});
