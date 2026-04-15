#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Agregar indicador de progreso a archivos IPTV que lo necesitan"""

import os

work_dir = r"c:\Users\JimmyPro\Desktop\DISEÑO WEB PAGINAS\DISEÑO WEB 8"
os.chdir(work_dir)

# Leer el indicador de progreso de IPTV44.html
with open("IPTV44.html", "r", encoding="utf-8") as f:
    reference = f.read()

progres_start = reference.find('<div id="catalog-progress"')
progres_end = reference.find("</div>", progres_start) + 6
progres = reference[progres_start:progres_end]

print(f"Indicador de progreso extraido ({len(progres)} caracteres)")

# Archivos que necesitan el indicador
files_to_fix = [f"IPTV{i}.html" for i in range(22, 44)]

count = 0

for file in files_to_fix:
    if not os.path.exists(file):
        continue
    
    try:
        with open(file, "r", encoding="utf-8") as f:
            content = f.read()
        
        # Verificar que NO tiene el indicador
        if "catalog-progress" not in content:
            # Encontrar la posición del botón toggle
            button_pos = content.find('<button id="toggle-dynamic-gallery"')
            if button_pos != -1:
                # Encontrar el final del botón (</button>)
                button_end = content.find("</button>", button_pos) + 9
                
                # Insertar el indicador después del botón
                new_content = (content[:button_end] + "\n                    " + progres + "\n                    " + 
                               content[button_end:])
                
                with open(file, "w", encoding="utf-8") as f:
                    f.write(new_content)
                
                print(f"OK: {file}")
                count += 1
            else:
                print(f"SKIP: {file} - boton no encontrado")
        else:
            print(f"SKIP: {file} - ya tiene el indicador")
            
    except Exception as e:
        print(f"FAIL: {file} - {str(e)}")

print("")
print(f"Indicadores agregados: {count}")
