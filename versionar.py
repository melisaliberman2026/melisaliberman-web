#!/usr/bin/env python3
"""
versionar.py — le sube el número de versión a todos los archivos del sitio.

PARA QUÉ SIRVE
--------------
Los navegadores guardan una copia de las imágenes, del CSS y del JavaScript
para no bajarlos cada vez. El problema aparece cuando vos cambiás uno de esos
archivos: como se sigue llamando igual (styles.css, hero.jpg), el navegador
cree que ya lo tiene y sigue mostrando la versión vieja.

La solución es que la dirección del archivo cambie cuando cambia el contenido.
Este script le agrega un "?v=3" al final de cada referencia:

    css/styles.css        →   css/styles.css?v=3
    assets/img/hero.jpg   →   assets/img/hero.jpg?v=3

Para el navegador eso es una dirección nueva, así que lo baja de cero.
El archivo en el disco no se toca: solo cambian las referencias.

CUÁNDO USARLO
-------------
Cada vez que cambies una imagen, el CSS o el JavaScript, antes de subir:

    python versionar.py
    git add .
    git commit -m "Lo que hayas cambiado"
    git push

Si solo cambiaste texto dentro de un .html, no hace falta correrlo.
"""

import re
import sys
from pathlib import Path

RAIZ = Path(__file__).parent

# Archivos donde hay que buscar referencias
A_REVISAR = [
    *RAIZ.glob("*.html"),
    *RAIZ.glob("css/*.css"),
    *RAIZ.glob("js/*.js"),
]

# Referencias del tipo  css/styles.css  ·  assets/img/hero.jpg  ·  ../assets/img/cta-fondo.jpg
RUTA = re.compile(
    r'((?:\.{1,2}/)?(?:css|js|assets)/[\w./-]+\.(?:css|js|svg|jpg|jpeg|png|webp))(\?v=\d+)?'
)
# Imports internos de JavaScript:  from "./datos.js"
IMPORT_JS = re.compile(r'(from\s+"\./[\w-]+\.js)(\?v=\d+)?(")')


def version_actual() -> int:
    """Lee la versión más alta que ya esté puesta en el proyecto."""
    encontradas = []
    for archivo in A_REVISAR:
        encontradas += [int(n) for n in re.findall(r'\?v=(\d+)', archivo.read_text(encoding="utf-8"))]
    return max(encontradas) if encontradas else 0


def main() -> None:
    nueva = version_actual() + 1
    total = 0
    tocados = []

    for archivo in A_REVISAR:
        texto = original = archivo.read_text(encoding="utf-8")
        texto, n1 = RUTA.subn(lambda m: f"{m.group(1)}?v={nueva}", texto)
        texto, n2 = IMPORT_JS.subn(lambda m: f"{m.group(1)}?v={nueva}{m.group(3)}", texto)
        if texto != original:
            archivo.write_text(texto, encoding="utf-8")
            tocados.append((archivo.relative_to(RAIZ), n1 + n2))
            total += n1 + n2

    if not total:
        print("No se encontró ninguna referencia para versionar.")
        sys.exit(1)

    print(f"Versión nueva: v={nueva}\n")
    for ruta, n in tocados:
        print(f"  {str(ruta):<24} {n} referencias")
    print(f"\nListo: {total} referencias actualizadas.")
    print("Ahora subí los cambios con git add . && git commit && git push")


if __name__ == "__main__":
    main()
