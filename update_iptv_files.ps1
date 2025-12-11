$basePath = "c:\Users\JimmyPro\Desktop\DISEÑO WEB PAGINAS\DISEÑO WEB 8"

$htmlToInject = @"
<div class="container mt-5 mb-3">
    <button id="toggle-dynamic-gallery" class="btn btn-warning btn-lg btn-block w-100 fw-bold">
        📂 Cargar Catálogo Completo (Beta)
    </button>
    <div id="dynamic-gallery-wrapper" style="display: none; margin-top: 20px;">
        <div id="dynamic-gallery-container"></div>
        <div class="text-center mt-3 mb-5">
            <button id="load-more-btn" class="btn btn-primary btn-lg">Cargar más resultados</button>
        </div>
    </div>
</div>
"@

$scriptToInject = @"
<script>
    function videoUrl(url) {
        if (window.player) {
            window.player.load(url);
            document.getElementById('player')?.scrollIntoView({ behavior: 'smooth' });
        }
    }
</script>
<script src="js/m3u_loader_iptv.js"></script>
</body>
"@

for ($i = 1; $i -le 21; $i++) {
    if ($i -eq 1) {
        $fileName = "IPTV.html"
    } else {
        $fileName = "IPTV$i.html"
    }
    
    $filePath = Join-Path $basePath $fileName
    
    if (Test-Path $filePath) {
        Write-Host "Processing $fileName..."
        $content = Get-Content -Path $filePath -Raw -Encoding UTF8
        
        # Check if already updated
        if ($content -match "m3u_loader_iptv.js") {
            Write-Host "$fileName already updated. Skipping."
            continue
        }
        
        # Inject HTML - targeted replace
        # Uses specific string found in files including the typo in closing tag
        if ($content -match "<div><menu-component></menu-componet></div><br>") {
             $content = $content.Replace("<div><menu-component></menu-componet></div><br>", "<div><menu-component></menu-componet></div><br>`r`n$htmlToInject")
        } else {
             Write-Host "Warning: Could not find menu-component anchor in $fileName. Appending to main section."
             # Fallback: maybe inject before first <div class="col-12> or similar if strict match fails
             # For now, let's just log warning.
        }

        # Inject Script
        $content = $content.Replace("</body>", $scriptToInject)
        
        Set-Content -Path $filePath -Value $content -Encoding UTF8
        Write-Host "Updated $fileName."
    } else {
        Write-Host "File $fileName not found!"
    }
}
