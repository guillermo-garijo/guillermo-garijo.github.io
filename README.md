# guillermo-garijo.github.io

Portfolio personal.

## Tecnologías

React 19 · TypeScript · Vite · Tailwind CSS · React Router

## Comandos

```bash
npm install       # instalar dependencias
npm run dev        # servidor de desarrollo (localhost)
npm run build       # compilar a dist/
npm run lint        # linter
npm run deploy       # compilar y publicar en GitHub Pages
```

## Despliegue (GitHub Pages)

`npm run deploy` compila el proyecto y usa el paquete `gh-pages` para subir el contenido de `dist/` a la rama `gh-pages`, que es la que GitHub Pages sirve (configurado en Settings → Pages del repo). El código fuente vive en `dev`; `gh-pages` es solo el build generado y no se toca a mano.
