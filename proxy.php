<?php
/**
 * proxy.php — Proxy universal de streams HLS/M3U8
 * Uso: proxy.php?url=https://example.com/stream.m3u8
 */

// Seguridad: solo permitir URLs de video/stream
$allowed_types = ['application/vnd.apple.mpegurl', 'application/x-mpegurl',
                  'video/mp2t', 'video/mp4', 'text/plain', 'application/octet-stream'];

$url = isset($_GET['url']) ? trim($_GET['url']) : '';

if (empty($url)) {
    http_response_code(400);
    exit('Error: URL requerida (?url=...)');
}

// Validar que sea una URL válida
if (!filter_var($url, FILTER_VALIDATE_URL)) {
    http_response_code(400);
    exit('Error: URL inválida');
}

// Bloquear URLs locales/privadas
$host = parse_url($url, PHP_URL_HOST);
if (in_array($host, ['localhost', '127.0.0.1', '0.0.0.0']) ||
    preg_match('/^(10\.|172\.(1[6-9]|2[0-9]|3[01])\.|192\.168\.)/', $host)) {
    http_response_code(403);
    exit('Error: URL no permitida');
}

$ch = curl_init();
curl_setopt_array($ch, [
    CURLOPT_URL            => $url,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_MAXREDIRS      => 5,
    CURLOPT_TIMEOUT        => 20,
    CURLOPT_CONNECTTIMEOUT => 10,
    CURLOPT_SSL_VERIFYPEER => false,
    CURLOPT_SSL_VERIFYHOST => false,
    // Sin Referer — bypassa hotlink protection
    CURLOPT_REFERER        => '',
    CURLOPT_HTTPHEADER     => [
        'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36',
        'Accept: */*',
        'Accept-Language: en-US,en;q=0.9',
        'Origin: ',
        'Referer: ',
    ],
    CURLOPT_HEADER         => false,
]);

$body       = curl_exec($ch);
$httpCode   = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$contentType= curl_getinfo($ch, CURLINFO_CONTENT_TYPE);
curl_close($ch);

if ($body === false || $httpCode >= 400) {
    http_response_code(502);
    exit('Error: No se pudo obtener el stream (HTTP ' . $httpCode . ')');
}

// Reescribir URLs relativas en manifests M3U8 para que pasen por este proxy
$isM3u8 = strpos($contentType, 'mpegurl') !== false ||
           strpos($url, '.m3u8') !== false ||
           strpos($url, '.m3u') !== false;

if ($isM3u8) {
    $baseUrl = dirname($url) . '/';
    $lines   = explode("\n", $body);
    $rewritten = [];
    foreach ($lines as $line) {
        $line = rtrim($line);
        if ($line === '' || strpos($line, '#') === 0) {
            // Reescribir URI dentro de tags EXT-X-KEY y EXT-X-MAP
            if (preg_match('/(URI=")([^"]+)(")/', $line, $m)) {
                $segUrl = (strpos($m[2], 'http') === 0) ? $m[2] : $baseUrl . $m[2];
                $line   = str_replace($m[0], $m[1] . '/proxy.php?url=' . urlencode($segUrl) . $m[3], $line);
            }
            $rewritten[] = $line;
        } else {
            // Línea de segmento
            $segUrl = (strpos($line, 'http') === 0) ? $line : $baseUrl . $line;
            $rewritten[] = '/proxy.php?url=' . urlencode($segUrl);
        }
    }
    $body = implode("\n", $rewritten);
    $contentType = 'application/vnd.apple.mpegurl';
}

// Headers CORS para que el browser acepte la respuesta
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Content-Type: ' . ($contentType ?: 'application/octet-stream'));
header('Cache-Control: no-cache');

echo $body;
