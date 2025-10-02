import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="bg-black text-white py-4 px-8 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <Image src="/logo_light.png" alt="Usonoi Logo" width={40} height={40} />
          <span className="text-xl font-bold">Usonoi</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#inicio" className="hover:text-gray-300">Inicio</a>
          <a href="#metodologia" className="hover:text-gray-300">Metodología</a>
          <a href="#nosotros" className="hover:text-gray-300">Nosotros</a>
          <a href="#store" className="hover:text-gray-300">Store</a>
          <a href="#contacto" className="hover:text-gray-300">Contacto</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="flex flex-col items-center justify-center py-24 bg-gray-100">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">Bienvenido a Usonoi</h1>
        <p className="text-lg md:text-xl text-center max-w-2xl mb-10">
          Servicios con drones, web y soluciones digitales innovadoras.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <iframe
            className="rounded-lg shadow-lg"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/aqz-KE-bpKQ"
            title="YouTube video"
            allowFullScreen
          ></iframe>
          <iframe
            className="rounded-lg shadow-lg"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Tn6-PIqc4UM"
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Metodología */}
      <section id="metodologia" className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Nuestra Metodología</h2>
        <p className="max-w-3xl mx-auto text-lg">
          Trabajamos bajo el enfoque <strong>PPA</strong>: Planificación, Procesamiento y Análisis.
          Aseguramos resultados precisos y adaptados a cada proyecto con drones y soluciones digitales.
        </p>
      </section>

      {/* Sobre Nosotros */}
      <section id="nosotros" className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre Nosotros</h2>
        <p className="max-w-3xl mx-auto text-lg mb-8">
          Usonoi es un equipo especializado en drones, fotogrametría, inspecciones técnicas,
          modelado 3D y soluciones web. Nuestra misión es crear impacto positivo mediante
          innovación tecnológica y sostenibilidad ambiental.
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 shadow rounded-lg">
            <h3 className="font-bold text-xl mb-2">USO_REC</h3>
            <p>Grabaciones aéreas con drones compactos, FPV y profesionales de video.</p>
          </div>
          <div className="bg-white p-6 shadow rounded-lg">
            <h3 className="font-bold text-xl mb-2">USO_TEC</h3>
            <p>Trabajos técnicos, inspecciones, modelado 3D y agricultura.</p>
          </div>
          <div className="bg-white p-6 shadow rounded-lg">
            <h3 className="font-bold text-xl mb-2">USO_WEB</h3>
            <p>Servicios de backend, frontend y APIs.</p>
          </div>
        </div>
      </section>

      {/* Store / Marketplace */}
      <section id="store" className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Store / Marketplace</h2>
        <p className="max-w-3xl mx-auto text-lg mb-8">
          Venta de equipos, accesorios y asesoramiento personalizado para proyectos con drones y tecnología.
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-6 border rounded-lg hover:shadow-lg transition">
            <Image src="/logo_dark.png" alt="Equipo 1" width={80} height={80} className="mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Accesorios</h3>
            <p>Accesorios esenciales para maximizar el uso de drones.</p>
          </div>
          <div className="p-6 border rounded-lg hover:shadow-lg transition">
            <Image src="/logo_dark.png" alt="Equipo 2" width={80} height={80} className="mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Software</h3>
            <p>Herramientas de análisis, planificación y procesamiento.</p>
          </div>
          <div className="p-6 border rounded-lg hover:shadow-lg transition">
            <Image src="/logo_dark.png" alt="Equipo 3" width={80} height={80} className="mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Consultoría</h3>
            <p>Asesoramiento técnico y configuración de sistemas personalizados.</p>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Contacto</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          Reserva de vuelos, solicitud de permisos y contacto directo con nuestro equipo.
        </p>
        <form className="max-w-xl mx-auto grid gap-4">
          <input type="text" placeholder="Nombre" className="p-3 border rounded" required />
          <input type="email" placeholder="Email" className="p-3 border rounded" required />
          <textarea placeholder="Mensaje" rows={5} className="p-3 border rounded" required></textarea>
          <button type="submit" className="bg-black text-white py-3 rounded hover:bg-gray-800 transition">
            Enviar
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-6 text-center">
        <p>© 2025 Usonoi - Todos los derechos reservados</p>
      </footer>
    </main>
  );
}
