# Script para actualizar archivos IPTV con barra de búsqueda e indicador de progreso

$workDir = "c:\Users\JimmyPro\Desktop\DISEÑO WEB PAGINAS\DISEÑO WEB 8"
Set-Location $workDir

# Leer IPTV44.html como referencia
Write-Host "Leyendo IPTV44.html..."
$reference = Get-Content "IPTV44.html" -Raw

# Extraer la barra de búsqueda completa
$barraSearchStart = "<!-- ===== BARRA DE BUSQUEDA DE CANALES =====" 
$barraSearchEnd = "<!-- ===== FIN BARRA DE BUSQUEDA =====" 
$barraStart = $reference.IndexOf($barraSearchStart)
$barraEnd = $reference.IndexOf($barraSearchEnd) + $barraSearchEnd.Length
$barra = $reference.Substring($barraStart, $barraEnd - $barraStart)

# Extraer el indicador de progreso
$progresStart = $reference.IndexOf('<div id="catalog-progress"')
$closeDiv = $reference.IndexOf("</div>", $progresStart)
$progres = $reference.Substring($progresStart, $closeDiv - $progresStart + 6)

# Extraer el script de búsqueda
$scriptSearchString = "// ===== BUSQUEDA DE CANALES =====" 
$scriptStart = $reference.LastIndexOf("<script>", $reference.IndexOf($scriptSearchString))
$scriptEnd = $reference.IndexOf("</script>", $scriptStart) + 9
$script = $reference.Substring($scriptStart, $scriptEnd - $scriptStart)

Write-Host "OK: Barra extraida" 
Write-Host "OK: Indicador extraido"
Write-Host "OK: Script extraido"

# Actualizar archivos IPTV.html a IPTV43.html
$files = @("IPTV.html") + (1..43 | ForEach-Object { "IPTV$_.html" })

$count = 0
$failed = 0

foreach ($file in $files) {
    $filePath = Join-Path $workDir $file
    
    if (-not (Test-Path $filePath)) {
        Write-Host "FAIL: No encontrado: $file"
        $failed++
        continue
    }
    
    $content = Get-Content $filePath -Raw
    
    try {
        # Insertar barra y progreso ANTES del botón "Cargar Catálogo"
        if ($content -like '*<div class="container mt-5 mb-3">*') {
            $newSection = '<div class="container mt-5 mb-3">' + "`r`n`r`n" + $barra + "`r`n`r`n" + $progres + "`r`n`r`n" + "                    "
            $content = $content.Replace('<div class="container mt-5 mb-3">', $newSection)
        }
        
        # Agregar el script antes de </body> si no existe
        if ($content -notmatch "BUSQUEDA DE CANALES") {
            $content = $content.Replace('</body>', "`r`n    " + $script + "`r`n" + '</body>')
        }
        
        # Guardar
        Set-Content $filePath $content -Encoding UTF8
        $count++
        Write-Host "OK: $file"
    } catch {
        Write-Host "FAIL: $file - Error: $_"
        $failed++
    }
}

Write-Host ""
Write-Host "COMPLETO: Procesados=$count, Errores=$failed"
