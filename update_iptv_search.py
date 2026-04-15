#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Script para actualizar archivos IPTV con barra de búsqueda e indicador de progreso"""

import os
import glob

# Directorio de trabajo
work_dir = r"c:\Users\JimmyPro\Desktop\DISEÑO WEB PAGINAS\DISEÑO WEB 8"
os.chdir(work_dir)

# Leer IPTV44.html como referencia
print("Leyendo IPTV44.html...")
with open("IPTV44.html", "r", encoding="utf-8") as f:
    reference = f.read()

# Extraer la barra de búsqueda
barra_start_marker = "<!-- ===== BARRA DE BÚSQUEDA DE CANALES =====" 
barra_end_marker = "<!-- ===== FIN BARRA DE BÚSQUEDA =====" 
barra_start = reference.find(barra_start_marker)
barra_end = reference.find(barra_end_marker) + len(barra_end_marker)
barra = reference[barra_start:barra_end]
print(f"OK: Barra extraida ({len(barra)} caracteres)")

# Extraer indicador de progreso
progres_start = reference.find('<div id="catalog-progress"')
progres_end = reference.find("</div>", progres_start) + 6
progres = reference[progres_start:progres_end]
print(f"OK: Indicador extraido ({len(progres)} caracteres)")

# Extraer script de búsqueda
script_marker = "// ===== BÚSQUEDA DE CANALES =====" 
script_content_start = reference.find(script_marker)
script_tag_start = reference.rfind("<script>", 0, script_content_start)
script_tag_end = reference.find("</script>", script_tag_start) + 9
script = reference[script_tag_start:script_tag_end]
print(f"OK: Script extraido ({len(script)} caracteres)")

# Actualizar archivos
files_to_update = ["IPTV.html"] + [f"IPTV{i}.html" for i in range(1, 44)]

count = 0
failed = 0

for file in files_to_update:
    if not os.path.exists(file):
        print(f"FAIL: No encontrado: {file}")
        failed += 1
        continue
    
    try:
        with open(file, "r", encoding="utf-8") as f:
            content = f.read()
        
        # Insertar barra y progreso antes del botón "Cargar Catálogo"
        search_div = '<div class="container mt-5 mb-3">'
        if search_div in content:
            new_section = search_div + "\n\n" + barra + "\n\n" + progres + "\n\n" + "                    "
            content = content.replace(search_div, new_section)
        
        # Agregar script antes de </body> si no existe
        if "BÚSQUEDA DE CANALES" not in content:
            content = content.replace("</body>", "\n    " + script + "\n" + "</body>")
        
        # Guardar
        with open(file, "w", encoding="utf-8") as f:
            f.write(content)
        
        count += 1
        print(f"OK: {file}")
    except Exception as e:
        print(f"FAIL: {file} - Error: {str(e)}")
        failed += 1

print("")
print(f"COMPLETO: Procesados={count}, Errores={failed}")
