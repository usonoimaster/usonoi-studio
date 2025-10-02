import "./globals.css";

export const metadata = {
  title: "USONOI",
  description: "Soluciones con drones y servicios digitales",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen antialiased">
        <header className="px-4 py-3 border-b flex items-center justify-between">
          <a href="/" className="font-bold">USONOI</a>
          <nav className="hidden md:flex gap-4 text-sm">
            <a href="/uso-web">USO_WEB</a>
            <a href="/uso-tec">USO_TEC</a>
            <a href="/uso-rec">USO_REC</a>
            <a href="/uso-3d">USO_3D</a>
            <a href="/academia">Academia</a>
            <a href="/store">Tienda</a>
            <a href="/galeria">Galería</a>
            <a href="/contacto">Contacto</a>
            <a href="/login">Login</a>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="px-4 py-8 text-center text-sm text-gray-500 border-t">
          © {new Date().getFullYear()} USONOI -- info@usonoi.com
        </footer>
      </body>
    </html>
  );
}
