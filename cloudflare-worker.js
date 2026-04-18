/**
 * CLOUDFLARE WORKER — Proxy HLS Universal
 *
 * INSTRUCCIONES (5 minutos):
 * 1. Ve a https://workers.cloudflare.com → Sign Up gratis
 * 2. Create Worker → pega TODO este código → Save & Deploy
 * 3. Copia tu URL: https://tu-worker.TU-USUARIO.workers.dev
 * 4. Abre reproductor.html y reemplaza CF_WORKER_URL con esa URL
 *
 * Uso: https://tu-worker.workers.dev/?url=https://stream.m3u8
 */

const CDN_REFERERS = {
  'tubi.video':         'https://tubitv.com/',
  'warnermediacdn.com': 'https://www.cnn.com/',
  'turnerlive':         'https://www.cnn.com/',
  'foxnews':            'https://www.foxnews.com/',
  'akamaized.net':      '',
  'cloudfront.net':     '',
  'wurl.tv':            'https://www.samsung.com/',
  'uplynk.com':         'https://abc7news.com/',
  'peacocktv.com':      'https://www.peacocktv.com/',
  'nbcsports':          'https://www.nbcsports.com/',
};

function getReferer(url) {
  for (const [pattern, ref] of Object.entries(CDN_REFERERS)) {
    if (url.includes(pattern)) return ref;
  }
  return '';
}

function rewriteM3U8(body, targetUrl, workerBase) {
  const baseUrl = targetUrl.substring(0, targetUrl.lastIndexOf('/') + 1);
  return body.split('\n').map(line => {
    const trimmed = line.trim();
    if (!trimmed) return '';
    // Reescribir URI en tags EXT-X-KEY, EXT-X-MAP
    if (trimmed.startsWith('#')) {
      return trimmed.replace(/URI="([^"]+)"/g, (_, uri) => {
        const abs = uri.startsWith('http') ? uri : baseUrl + uri;
        return `URI="${workerBase}/?url=${encodeURIComponent(abs)}"`;
      });
    }
    // Línea de segmento o sub-playlist
    const abs = trimmed.startsWith('http') ? trimmed : baseUrl + trimmed;
    return `${workerBase}/?url=${encodeURIComponent(abs)}`;
  }).join('\n');
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url  = new URL(request.url);
  const target = url.searchParams.get('url');

  // CORS preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin':  '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Max-Age':       '86400',
      }
    });
  }

  if (!target) {
    return new Response('Uso: /?url=https://stream.m3u8', { status: 400 });
  }

  // Bloquear IPs locales
  if (/localhost|127\.0\.0\.1|0\.0\.0\.0|192\.168\.|10\.|172\.(1[6-9]|2[0-9]|3[01])\./.test(target)) {
    return new Response('URL no permitida', { status: 403 });
  }

  const referer = getReferer(target);
  const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124.0.0.0 Safari/537.36',
    'Accept': '*/*',
    'Accept-Language': 'en-US,en;q=0.9',
  };
  if (referer) {
    headers['Referer'] = referer;
    headers['Origin']  = new URL(referer).origin;
  }

  let response;
  try {
    response = await fetch(target, { headers, redirect: 'follow' });
  } catch (e) {
    return new Response('Error al conectar: ' + e.message, { status: 502 });
  }

  if (!response.ok) {
    return new Response('HTTP ' + response.status + ' desde CDN', { status: response.status });
  }

  const contentType = response.headers.get('content-type') || '';
  const isM3U8 = contentType.includes('mpegurl') ||
                 target.includes('.m3u8') || target.includes('.m3u');

  let body;
  if (isM3U8) {
    const text = await response.text();
    const workerBase = url.origin;
    body = rewriteM3U8(text, target, workerBase);
  } else {
    body = response.body; // stream binario (segmentos .ts)
  }

  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type':                 isM3U8 ? 'application/vnd.apple.mpegurl' : (contentType || 'video/mp2t'),
      'Access-Control-Allow-Origin':  '*',
      'Cache-Control':                'no-cache',
    }
  });
}
