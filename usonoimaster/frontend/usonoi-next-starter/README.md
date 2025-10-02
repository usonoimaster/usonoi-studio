# USONOI — Next.js + Tailwind starter

Estructura de proyecto lista para editar, subir a GitHub y desplegar (ideal en Vercel).

## Cómo arrancar
```bash
npm install
npm run dev
# abrir http://localhost:3000
```

## Páginas incluidas
- Inicio (`/`)
- Metodología PPA (`/metodologia`)
- Sobre Nosotros (`/sobre-nosotros`)
- Login / Acceso (`/login`)
- Store / Marketplace (`/store`)
- Contacto (`/contacto`)

### Secciones de servicios
- USO_REC (`/servicios/uso-rec`)
- USO_TEC (`/servicios/uso-tec`)
- USO_WEB (`/servicios/uso-web`)

Cada página trae contenido base editable y componentes reutilizables (Navbar, Footer, CTA).

## Subir a GitHub (rápido)
```bash
git init
git add .
git commit -m "choreo inicial: usonoi starter"
git branch -M main
git remote add origin <tu_repo_url.git>
git push -u origin main
```

## Desplegar en Vercel
1. Crear cuenta en Vercel y "Import Project" desde tu repo.
2. Framework: Next.js (auto).
3. Variables: no se necesitan por ahora.
4. Deploy y listo.

---

> Paleta base: blanco, negro y beige. Diseño minimalista.
