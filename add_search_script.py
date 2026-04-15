#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Script para agregar el script de búsqueda a archivos IPTV que lo necesitan"""

import os
import glob

# Directorio de trabajo
work_dir = r"c:\Users\JimmyPro\Desktop\DISEÑO WEB PAGINAS\DISEÑO WEB 8"
os.chdir(work_dir)

# Leer IPTV44.html como referencia - obtener solo el script de búsqueda
print("Leyendo script de busqueda de IPTV44.html...")
with open("IPTV44.html", "r", encoding="utf-8") as f:
    reference = f.read()

# Encontrar el script de búsqueda
script_start = reference.find("<script>") 
# Buscar hacia adelante desde ese punto para encontrar el comentario
comment_pos = reference.find("// ===== BUSQUEDA DE CANALES =====" , script_start)
if comment_pos == -1:
    # Intentar con acento
    comment_pos = reference.find("// ===== BÚSQUEDA DE CANALES =====" , script_start)

# Retroceder para encuentra el inicio de este script
script_tag_start = reference.rfind("<script>", 0, comment_pos)
script_tag_end = reference.find("</script>", comment_pos)
if script_tag_end != -1:
    script_tag_end += 9  # Incluir el </script>

script_full = reference[script_tag_start:script_tag_end]
print(f"OK: Script extraido ({len(script_full)} caracteres)")

# Actualizar archivos
files_to_update = ["IPTV.html"] + [f"IPTV{i}.html" for i in range(2, 44)]

count_added = 0
count_skipped = 0

for file in files_to_update:
    if not os.path.exists(file):
        continue
    
    try:
        with open(file, "r", encoding="utf-8") as f:
            content = f.read()
        
        # Verificar si el script de búsqueda ya existe
        if "// ===== B" in content or "channel-search-input" in content:
            # Si tiene el search input, verificar si tiene el script
            if "let debounceTimer;" not in content and "let currentSearchQuery" not in content:
                # No tiene el script, agregarlo
                if "</body>" in content:
                    content = content.replace("</body>", "\n    " + script_full + "\n" + "</body>")
                    print(f"ADDED: {file}")
                    count_added += 1
                else:
                    print(f"ERROR: {file} - </body> no encontrado")
            else:
                # Ya tiene el script
                print(f"SKIP: {file} - ya tiene el script")
                count_skipped += 1
                continue
            
            # Guardar
            with open(file, "w", encoding="utf-8") as f:
                f.write(content)
        else:
            print(f"SKIP: {file} - no tiene barra de búsqueda")
            
    except Exception as e:
        print(f"FAIL: {file} - Error: {str(e)}")

print("")
print(f"Scripts agregados: {count_added}")
print(f"Ya presentes: {count_skipped}")
