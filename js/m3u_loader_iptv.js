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
      .video-grid-responsive li {
        min-width: 0;
        cursor: pointer;
        text-align: center;
      }
      .video-grid-responsive .video-card-image {
        width: 100%;
        aspect-ratio: 16 / 9;
        object-fit: cover;
      }
      .video-grid-responsive .video-card-title {
        display: block;
        margin-top: 6px;
        color: #e5e7eb;
        font-size: 0.9rem;
        overflow-wrap: anywhere;
      }
      .video-grid-responsive .video-card-no-image .video-card-title {
        display: flex;
        min-height: 90px;
        align-items: center;
        justify-content: center;
        margin-top: 0;
        padding: 10px;
        border-radius: 6px;
        background: linear-gradient(145deg, rgba(245,158,11,.2), rgba(20,24,44,.95));
        color: #fbbf24;
        font-weight: 700;
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
let _shakaInstance = null;
let _hlsReady     = false;
let _playbackRequest = 0;
const _libraryPromises = Object.create(null);

function _loadLibrary(globalName, src) {
    if (window[globalName]) return Promise.resolve(window[globalName]);
    if (_libraryPromises[globalName]) return _libraryPromises[globalName];

    _libraryPromises[globalName] = new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => {
            if (window[globalName]) resolve(window[globalName]);
            else reject(new Error(`No se pudo inicializar ${globalName}`));
        };
        script.onerror = () => reject(new Error(`No se pudo cargar ${globalName}`));
        document.head.appendChild(script);
    }).catch(error => {
        delete _libraryPromises[globalName];
        throw error;
    });

    return _libraryPromises[globalName];
}

function _loadHlsJs() {
    if (_hlsReady && window.Hls) return Promise.resolve(window.Hls);
    return _loadLibrary('Hls', 'https://cdn.jsdelivr.net/npm/hls.js@1.5.13/dist/hls.min.js').then(HlsLibrary => {
        _hlsReady = true;
        return HlsLibrary;
    });
}

function _loadShakaJs() {
    return _loadLibrary('shaka', 'https://cdn.jsdelivr.net/npm/shaka-player@4.14.20/dist/shaka-player.compiled.js');
}

async function _activatePlanB(url) {
    const playerDiv = document.getElementById('player');
    if (!playerDiv) return;

    const requestId = ++_playbackRequest;
    let streamUrl;
    try {
        streamUrl = new URL(url, window.location.href);
        if (streamUrl.protocol !== 'http:' && streamUrl.protocol !== 'https:') {
            throw new Error('Protocolo no permitido');
        }
    } catch (error) {
        console.error('URL de stream inválida:', error);
        return;
    }

    if (window.player && typeof window.player.destroy === 'function') {
        try { window.player.destroy(); } catch (error) { console.warn('No se pudo cerrar el reproductor anterior:', error); }
        window.player = null;
    }
    if (_hlsInstance) { _hlsInstance.destroy(); _hlsInstance = null; }
    if (_shakaInstance) {
        const previousPlayer = _shakaInstance;
        _shakaInstance = null;
        previousPlayer.destroy().catch(error => console.warn('No se pudo cerrar Shaka Player:', error));
    }

    playerDiv.innerHTML = '';

    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'position:relative;width:100%;background:#000;';

    const badge = document.createElement('div');
    badge.id = 'planb-badge';
    badge.textContent = '▶ Reproductor web';

    const video = document.createElement('video');
    video.controls   = true;
    video.autoplay   = true;
    video.setAttribute('playsinline', '');
    video.style.cssText = 'width:100%;max-height:480px;display:block;';

    const status = document.createElement('p');
    status.setAttribute('role', 'status');
    status.style.cssText = 'color:#e5e7eb;padding:8px;margin:0;';

    wrapper.appendChild(badge);
    wrapper.appendChild(video);
    wrapper.appendChild(status);
    playerDiv.appendChild(wrapper);
    playerDiv.scrollIntoView({ behavior: 'smooth' });

    const addDirectLink = () => {
        const link = document.createElement('a');
        link.href = streamUrl.href;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = 'Abrir enlace original';
        link.style.cssText = 'display:inline-block;margin-left:8px;color:#fbbf24;';
        status.appendChild(link);
    };
    const showError = message => {
        if (requestId === _playbackRequest) {
            status.textContent = message;
            badge.textContent = '⚠ No se pudo reproducir';
            addDirectLink();
        }
    };
    const playNative = () => {
        video.onerror = () => showError('El navegador no pudo reproducir este enlace o el formato no es compatible.');
        video.onloadedmetadata = () => { status.textContent = ''; };
        video.src = streamUrl.href;
        video.play().catch(() => { status.textContent = 'Presiona reproducir para iniciar el stream.'; });
    };
    const path = streamUrl.pathname.toLowerCase();

    if (path.endsWith('.mpd')) {
        status.textContent = 'Cargando stream DASH...';
        try {
            const shaka = await _loadShakaJs();
            if (requestId !== _playbackRequest) return;
            shaka.polyfill.installAll();
            if (!shaka.Player.isBrowserSupported()) {
                showError('Este navegador no es compatible con DASH.');
                return;
            }

            const shakaPlayer = new shaka.Player(video);
            _shakaInstance = shakaPlayer;
            shakaPlayer.addEventListener('error', event => {
                const error = event.detail;
                showError(`Error DASH${error && error.code ? ` (${error.code})` : ''}.`);
            });
            await shakaPlayer.load(streamUrl.href);
            if (requestId !== _playbackRequest) return;
            status.textContent = '';
            video.play().catch(() => { status.textContent = 'Presiona reproducir para iniciar el stream.'; });
        } catch (error) {
            console.error('Error al iniciar el stream DASH:', error);
            showError('No se pudo cargar el stream DASH (.mpd).');
        }
        return;
    }

    if (!path.endsWith('.m3u8')) {
        playNative();
        return;
    }

    status.textContent = 'Cargando stream HLS...';
    let triedProxy = false;
    let recoveredMediaError = false;

    const startHls = (src, HlsLibrary) => {
        if (requestId !== _playbackRequest) return;
        if (_hlsInstance) { _hlsInstance.destroy(); }

        const hls = new HlsLibrary({
            enableWorker: true,
            lowLatencyMode: true,
            xhrSetup: xhr => { xhr.referrerPolicy = 'no-referrer'; }
        });
        _hlsInstance = hls;
        hls.loadSource(src);
        hls.attachMedia(video);
        hls.on(HlsLibrary.Events.MANIFEST_PARSED, () => {
            if (requestId !== _playbackRequest) return;
            status.textContent = '';
            video.play().catch(() => { status.textContent = 'Presiona reproducir para iniciar el stream.'; });
        });
        hls.on(HlsLibrary.Events.ERROR, (_, data) => {
            if (requestId !== _playbackRequest || _hlsInstance !== hls || !data.fatal) return;
            if (data.type === HlsLibrary.ErrorTypes.MEDIA_ERROR && !recoveredMediaError) {
                recoveredMediaError = true;
                hls.recoverMediaError();
                return;
            }
            if (!triedProxy) {
                triedProxy = true;
                badge.textContent = '▶ Reintentando stream HLS';
                startHls('/proxy.php?url=' + encodeURIComponent(streamUrl.href), HlsLibrary);
                return;
            }

            badge.textContent = '▶ Probando reproductor alternativo';
            status.textContent = 'Si tampoco reproduce en el reproductor alternativo:';
            addDirectLink();
            hls.destroy();
            _hlsInstance = null;
            video.style.display = 'none';
            const iframe = document.createElement('iframe');
            iframe.src = 'reproductor.html?src=' + encodeURIComponent(streamUrl.href);
            iframe.style.cssText = 'width:100%;height:480px;border:none;display:block;';
            iframe.setAttribute('allowfullscreen', '');
            iframe.setAttribute('allow', 'autoplay; fullscreen');
            wrapper.appendChild(iframe);
        });
    };

    try {
        const HlsLibrary = await _loadHlsJs();
        if (requestId !== _playbackRequest) return;
        if (HlsLibrary.isSupported()) {
            startHls(streamUrl.href, HlsLibrary);
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            playNative();
        } else {
            showError('Este navegador no admite HLS en este dispositivo.');
        }
    } catch (error) {
        console.error('No se pudo cargar hls.js:', error);
        if (requestId !== _playbackRequest) return;
        if (video.canPlayType('application/vnd.apple.mpegurl')) playNative();
        else showError('No se pudo cargar el reproductor HLS para este stream.');
    }
}

// Función global expuesta para los HTML
// Va directo a hls.js — más compatible que Clappr para streams m3u arbitrarios
window.playChannelWithFallback = function (url) {
    _activatePlanB(url);
};

// ── M3U Loader ───────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
    const M3U_URL = 'https://raw.githubusercontent.com/TVPRO20/Megatv23/master/tv23.m3u';
    let allVideos = [];
    let isFetched    = false;

    const galleryContainer = document.getElementById('dynamic-gallery-container');
    const loadMoreBtn      = document.getElementById('load-more-btn');
    const toggleBtn        = document.getElementById('toggle-dynamic-gallery');
    const wrapper          = document.getElementById('dynamic-gallery-wrapper');

    const gridList = document.createElement('ul');
    gridList.id        = 'video_navigation_dynamic';
    gridList.className = 'video-grid-responsive';
    if (galleryContainer) galleryContainer.appendChild(gridList);

    function addAuthorizedPlaylistActions() {
        if (!wrapper || !wrapper.parentElement || document.getElementById('authorized-playlist-actions')) return;

        const playlistUrl = new URL('canales-autorizados.m3u', window.location.href).href;
        const section = document.createElement('section');
        section.id = 'authorized-playlist-actions';
        section.className = 'my-3 p-3 rounded text-center';
        section.style.cssText = 'background:rgba(20,24,44,.95);color:#e5e7eb;border:1px solid rgba(245,158,11,.45);';

        const heading = document.createElement('h5');
        heading.textContent = 'Lista autorizada para VLC y apps IPTV';

        const description = document.createElement('p');
        description.textContent = 'Descarga la lista o compártela con una app compatible. En móviles, pulsa el botón y elige VLC o tu app IPTV; la reproducción web requiere streams HTTPS que permitan CORS.';

        const actions = document.createElement('div');
        actions.className = 'd-flex flex-wrap justify-content-center gap-2';

        const urlInput = document.createElement('input');
        urlInput.type = 'url';
        urlInput.readOnly = true;
        urlInput.value = playlistUrl;
        urlInput.className = 'form-control mt-2';
        urlInput.setAttribute('aria-label', 'URL de la lista M3U');

        const downloadLink = document.createElement('a');
        downloadLink.href = playlistUrl;
        downloadLink.download = 'canales-autorizados.m3u';
        downloadLink.className = 'btn btn-warning fw-bold';
        downloadLink.textContent = '⬇️ Descargar lista M3U';

        const shareButton = document.createElement('button');
        shareButton.type = 'button';
        shareButton.className = 'btn btn-outline-light';
        shareButton.textContent = 'Compartir con VLC / app IPTV';

        const copyButton = document.createElement('button');
        copyButton.type = 'button';
        copyButton.className = 'btn btn-outline-light';
        copyButton.textContent = 'Copiar enlace';

        const status = document.createElement('span');
        status.className = 'd-block mt-2';
        status.setAttribute('role', 'status');

        async function copyPlaylistUrl() {
            try {
                await navigator.clipboard.writeText(playlistUrl);
                status.textContent = 'Enlace de la lista copiado.';
            } catch (error) {
                console.error('No se pudo copiar el enlace de la lista:', error);
                urlInput.focus();
                urlInput.select();
                status.textContent = 'Enlace seleccionado; cópialo para abrirlo en tu app IPTV.';
            }
        }

        shareButton.addEventListener('click', async () => {
            if (!navigator.share) {
                await copyPlaylistUrl();
                return;
            }

            try {
                await navigator.share({
                    title: 'Lista M3U autorizada',
                    text: 'Abrir esta lista en VLC o una app IPTV compatible',
                    url: playlistUrl
                });
                status.textContent = 'Lista compartida.';
            } catch (error) {
                if (error.name !== 'AbortError') {
                    console.error('No se pudo compartir la lista:', error);
                    status.textContent = 'No se pudo compartir la lista. Puedes descargarla o copiar el enlace.';
                }
            }
        });
        copyButton.addEventListener('click', copyPlaylistUrl);

        actions.appendChild(downloadLink);
        actions.appendChild(shareButton);
        actions.appendChild(copyButton);
        section.appendChild(heading);
        section.appendChild(description);
        section.appendChild(actions);
        section.appendChild(urlInput);
        section.appendChild(status);
        wrapper.parentElement.insertBefore(section, wrapper);
    }

    addAuthorizedPlaylistActions();

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

            if (!text.trimStart().startsWith('#EXTM3U')) {
                throw new Error('La respuesta recibida no parece ser una lista M3U válida.');
            }
            parseM3U(text);
            isFetched = true;
            if (toggleBtn) { toggleBtn.textContent = '📂 Ocultar Catálogo'; toggleBtn.disabled = false; }
        } catch (error) {
            console.error('Error fetching M3U:', error);
            if (wrapper) wrapper.style.display = 'none';
            if (toggleBtn) {
                toggleBtn.textContent = '🔄 Reintentar catálogo';
                toggleBtn.disabled = false;
            }
            if (progressText) progressText.textContent = `❌ ${error.message || 'Error al cargar el catálogo'}`;
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
        loadAllVideos();
    }

    function loadAllVideos() {
        const fragment = document.createDocumentFragment();

        allVideos.forEach(video => {
            const li = document.createElement('li');
            const title = document.createElement('span');
            title.className = 'video-card-title';
            title.textContent = video.title;

            if (video.logo) {
                const img = document.createElement('img');
                img.src = video.logo;
                img.alt = video.title;
                img.loading = 'lazy';
                img.className = 'video-card-image img_video_nav img-thumbnail w-100';
                img.onerror = () => {
                    img.remove();
                    li.classList.add('video-card-no-image');
                };
                li.appendChild(img);
            } else {
                li.classList.add('video-card-no-image');
            }

            li.addEventListener('click', () => window.playChannelWithFallback(video.url));
            li.appendChild(title);
            fragment.appendChild(li);
        });

        gridList.appendChild(fragment);
        if (loadMoreBtn) loadMoreBtn.style.display = 'none';
        updateProgress();
    }

    function updateProgress() {
        const progressText = document.getElementById('progress-text');
        if (!progressText) return;
        const total      = allVideos.length;
        progressText.textContent = `✅ ${total} canales cargados (100%)`;
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

});
