#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Verificación final de la actualización de archivos IPTV"""

import os

work_dir = r"c:\Users\JimmyPro\Desktop\DISEÑO WEB PAGINAS\DISEÑO WEB 8"
os.chdir(work_dir)

files_to_check = ["IPTV.html"] + [f"IPTV{i}.html" for i in range(2, 44)]

print("Verificación Final de Actualización IPTV")
print("=" * 50)

all_good = True
for file in files_to_check:
    if not os.path.exists(file):
        continue
    
    with open(file, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Verificar componentes
    has_search_bar = "channel-search-input" in content
    has_progress = "catalog-progress" in content
    has_script = "let debounceTimer;" in content or "let currentSearchQuery" in content
    
    status = "✓" if (has_search_bar and has_progress and has_script) else "✗"
    
    if not (has_search_bar and has_progress and has_script):
        all_good = False
        print(f"{status} {file}")
        print(f"    - Barra: {has_search_bar}, Progreso: {has_progress}, Script: {has_script}")
    else:
        print(f"{status} {file}")

print("=" * 50)
if all_good:
    print("✅ TODOS LOS ARCHIVOS ACTUALIZADOS CORRECTAMENTE")
else:
    print("⚠️ ALGUNOS ARCHIVOS TIENEN PROBLEMAS")
