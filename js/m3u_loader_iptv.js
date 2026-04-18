// Inject Responsive Styles
if (!document.getElementById('responsive-grid-style')) {
    const style = document.createElement('style');
    style.id = 'responsive-grid-style';
    style.textContent = `
      .video-grid-responsive {
        list-style-type: none;
        display: grid;
        grid-template-columns: repeat(3, 1fr); /* Mobile default */
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
    `;
    document.head.appendChild(style);
}

document.addEventListener('DOMContentLoaded', () => {
    const M3U_URL = 'https://raw.githubusercontent.com/TVPRO20/Megatv23/master/tv23.m3u';
    const ITEMS_PER_PAGE = 27; 
    let allVideos = [];
    let currentIndex = 0;
    let isFetched = false;

    const galleryContainer = document.getElementById('dynamic-gallery-container');
    const loadMoreBtn = document.getElementById('load-more-btn');
    const toggleBtn = document.getElementById('toggle-dynamic-gallery');
    const wrapper = document.getElementById('dynamic-gallery-wrapper');

    // Create Grid Container with Responsive Class
    const gridList = document.createElement('ul');
    gridList.id = 'video_navigation_dynamic';
    gridList.className = 'video-grid-responsive'; // Use the responsive class
    
    if (galleryContainer) {
        galleryContainer.appendChild(gridList);
    }

    async function fetchAndParseM3U() {
        if (isFetched) return;
        
        if (toggleBtn) {
            toggleBtn.textContent = '⏳ Cargando...';
            toggleBtn.disabled = true;
        }

        const progressText = document.getElementById('progress-text');
        if (progressText) {
            progressText.textContent = '⏳ Descargando catálogo...';
        }

        try {
            let text;
            try {
                const response = await fetch(M3U_URL);
                if (!response.ok) throw new Error('Network response was not ok');
                text = await response.text();
            } catch (errorA) {
                console.warn('Falló el Plan A (URL principal). Intentando Plan B...', errorA);
                if (progressText) progressText.textContent = '⏳ Intentando Plan B...';
                
                // Plan B: proxy
                const M3U_URL_PLAN_B = 'https://api.allorigins.win/raw?url=' + encodeURIComponent(M3U_URL);
                const responseB = await fetch(M3U_URL_PLAN_B);
                if (!responseB.ok) throw new Error('Network response was not ok en Plan B');
                text = await responseB.text();
            }
            
            parseM3U(text);
            isFetched = true;
            if (toggleBtn) {
                toggleBtn.textContent = '📂 Ocultar Catálogo';
                toggleBtn.disabled = false;
            }
        } catch (error) {
            console.error('Error fetching M3U:', error);
            if (galleryContainer) {
                galleryContainer.innerHTML = '<p class="text-white text-center">Error al cargar la lista de películas (Plan A y B fallaron).</p>';
            }
            if (toggleBtn) {
                toggleBtn.textContent = '❌ Error';
            }
            if (progressText) {
                progressText.textContent = '❌ Error al cargar el catálogo';
            }
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
                if (titleParts.length > 1) {
                    currentVideo.title = titleParts.slice(1).join(',').trim();
                }
            } else if (line.length > 0 && !line.startsWith('#')) {
                currentVideo.url = line;
                if (currentVideo.url && currentVideo.title) {
                    allVideos.push(currentVideo);
                }
                currentVideo = {}; 
            }
        });

        // Expose catalog globally for search bar integration
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
            const li = document.createElement('li');
            li.className = 'cursor-pointer';
            
            const img = document.createElement('img');
            img.src = video.logo || 'https://via.placeholder.com/150x225?text=No+Image';
            img.alt = video.title;
            img.className = 'img_video_nav img-thumbnail w-100'; // w-100 to fill the grid cell
            
            // Optional: Maintain aspect ratio if needed, though w-100 usually handles it in grid
            // img.style.aspectRatio = '2/3'; 
            
            li.onclick = () => {
                if (typeof videoUrl === 'function') {
                    videoUrl(video.url);
                    document.getElementById('player')?.scrollIntoView({behavior: 'smooth'});
                } else {
                    console.error('videoUrl function not found');
                }
            };
            
            li.appendChild(img);
            gridList.appendChild(li);
        });

        currentIndex += ITEMS_PER_PAGE;
        updateProgress();

        if (currentIndex >= allVideos.length) {
            if (loadMoreBtn) loadMoreBtn.style.display = 'none';
        }
    }

    function updateProgress() {
        const progressText = document.getElementById('progress-text');
        if (progressText) {
            const loaded = Math.min(currentIndex, allVideos.length);
            const total = allVideos.length;
            const percentage = total > 0 ? Math.round((loaded / total) * 100) : 0;
            
            if (currentIndex >= allVideos.length) {
                progressText.innerHTML = `✅ ${total} canales cargados <br> <small style="color: #9ca3af;">100% completado</small>`;
            } else {
                progressText.innerHTML = `📺 ${loaded} / ${total} canales <br> <small style="color: #9ca3af;">${percentage}% cargado</small>`;
            }
        }
    }

    // Toggle Logic
    if (toggleBtn && wrapper) {
        toggleBtn.addEventListener('click', () => {
            if (wrapper.style.display === 'none') {
                wrapper.style.display = 'block';
                if (!isFetched) {
                    fetchAndParseM3U();
                } else {
                    toggleBtn.textContent = '📂 Ocultar Catálogo';
                    updateProgress(); // Show current progress
                }
            } else {
                wrapper.style.display = 'none';
                toggleBtn.textContent = '📂 Mostrar Catálogo Completo';
                // Keep progress visible when hidden
            }
        });
    }

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreVideos);
    }
});
