# Ferretería H — Sitio Web Oficial

Sitio web estático para **Ferretería H** (Ruta Provincial 26S km 2), desarrollado con **Astro**, **Tailwind CSS** y **TypeScript**, optimizado para despliegue continuo en **Netlify**.

## 🛠️ Tecnologías

- **Framework:** [Astro](https://astro.build/) (Modo `output: 'static'`)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/) con sistema de diseño industrial basado en Google Stitch
- **Tipografías:** Chivo, Space Grotesk y Work Sans (Google Fonts)
- **Despliegue:** [Netlify](https://www.netlify.com/) (`netlify.toml` integrado con publicación en `dist/`)

## 📁 Estructura del Proyecto

- `src/data/tienda.ts`: Única fuente de verdad para datos de contacto, horarios, producto destacado y catálogo.
- `src/components/`: Componentes modulares (Hero, Catálogo, Mostrador de Presupuestos, Ubicación, Barra móvil flotante).
- `public/`: Activos estáticos, imágenes de productos y favicon.

## 🚀 Comandos

```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Compilar para producción (genera carpeta dist/)
npm run build

# Previsualizar build de producción
npm run preview
```
