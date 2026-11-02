# Portafolio kcrs.cl

Sitio estático (HTML + CSS + JS). No necesita build ni dependencias.

## Antes de publicar: edita estos 3 puntos en `index.html`

1. **Redes**: busca `data-social="github"` y `data-social="linkedin"` y cambia `href="#"` por tus URLs.
2. **Correo**: busca `tu-correo@ejemplo.cl` (aparece 2 veces: en `href="mailto:..."` y en `data-email="..."`).
3. **Fechas** (opcional): en la sección Experiencia hay un comentario `EDITA` donde puedes agregar el periodo de cada cargo.

## Publicar en Cloudflare Pages

**Opción A: subir la carpeta**
1. Cloudflare → Workers & Pages → tu proyecto kcrs.cl → *Upload assets* (o crea uno nuevo con *Direct Upload*).
2. Sube esta carpeta completa (o el .zip descomprimido).

**Opción B: Git**
1. Pon estos archivos en la raíz de tu repo (o reemplaza el contenido de `public/` si usas Astro).
2. Framework preset: *None*. Build command: vacío. Output directory: `/` (o la carpeta donde estén).

Luego, en *Custom domains*, asocia `kcrs.cl`.

## Estructura

```
index.html   contenido y secciones
styles.css   estilos y tema
main.js      terminal del hero, cielo, menú, copiar correo
favicon.svg
_headers     cabeceras de seguridad para Cloudflare Pages
```

## Personalizar

- Colores: variables al inicio de `styles.css` (`--amber` es el acento).
- Texto de la terminal: arreglo `script` en `main.js`.
- Nuevo proyecto: copia un `<article class="project">` dentro de `.projects`.
