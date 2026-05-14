import Image from "next/image";
import VideoPlayer from "@/components/VideoPlayer";
import ContextMenuBlocker from "@/components/ContextMenuBlocker";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background:
          "linear-gradient(160deg, #0a2a2a 0%, #0d3b3b 40%, #112d2d 70%, #0d1f1f 100%)",
      }}
    >
      <ContextMenuBlocker />

      {/* ─── HEADER ─── */}
      <header className="w-full border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center flex-1 min-w-0 mr-6">
            <Image
              src="/header.png"
              alt="Encabezado institucional"
              width={900}
              height={80}
              className="object-contain object-left w-full h-auto"
              draggable={false}
              priority
            />
          </div>

          <span className="hidden sm:inline-flex items-center gap-2 bg-gold-400/10 border border-gold-400/30 text-gold-300 text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            Acceso Educativo
          </span>
        </div>
      </header>

      {/* ─── MAIN ─── */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-12 flex flex-col gap-12">

        {/* Event title block */}
        <section className="text-center flex flex-col items-center gap-6">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white/60 text-xs uppercase tracking-widest px-4 py-2 rounded-full">
            II Semestre 2025
          </div>

          <h1 className="font-serif text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
            XIII Jornada de{" "}
            <span className="text-gold-400">Nutrición Clínica</span>
          </h1>

          <hr className="divider-gold" />

          <p className="text-white/70 text-lg sm:text-xl max-w-2xl leading-relaxed font-light">
            Manejo Nutricional de la Nefropatía y la Prevención de la
            Nefropatía Diabética
          </p>
        </section>

        {/* Info cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="glass-card rounded-2xl p-6 flex flex-col gap-2">
            <p className="text-gold-400 text-xs uppercase tracking-widest font-semibold mb-1">
              Charla
            </p>
            <h2 className="text-white text-base sm:text-lg font-serif font-semibold leading-snug">
              Manejo Nutricional de la Nefropatía y Nefropatía Diabética
            </h2>
          </div>

          <div className="glass-card rounded-2xl p-6 flex flex-col gap-2">
            <p className="text-gold-400 text-xs uppercase tracking-widest font-semibold mb-1">
              Expositora
            </p>
            <h3 className="text-white text-lg font-serif font-semibold">
              Dra. Laura Maroto
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Licenciada en Nutrición
              <br />
              Especialista en Nutrición Clínica Renal
              <br />
              Servicio de Nefrología, Hospital Calderón Guardia
              <br />
              Consulta privada
            </p>
          </div>
        </section>

        {/* ─── VIDEO ─── */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-white/40 text-xs uppercase tracking-widest">
              Grabación del evento
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <VideoPlayer />

          {/* Expiry notice */}
          <div className="flex items-center justify-center gap-2 mt-1">
            <svg
              className="w-4 h-4 text-gold-400 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-white/50 text-sm">
              Este video estará disponible hasta el{" "}
              <span className="text-gold-300 font-medium">
                15 de julio de 2026
              </span>
            </p>
          </div>

          {/* Legal disclaimer */}
          <div className="glass-card rounded-xl px-5 py-4 mt-2 flex items-start gap-3">
            <svg
              className="w-5 h-5 text-white/30 flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-white/40 text-xs leading-relaxed">
              Material educativo de acceso restringido. Prohibida su descarga,
              copia o distribución no autorizada. Este contenido es de uso
              exclusivo para el estudiantado y personal autorizado de la
              actividad académica.
            </p>
          </div>
        </section>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="w-full border-t border-white/10 mt-8">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col items-center gap-4">
          <div className="text-center">
            <p className="text-white/70 text-sm font-serif font-semibold">
              Laura Milena Andrade Perez
            </p>
            <p className="text-white/40 text-xs mt-0.5">
              Nutricionista MBA &nbsp;·&nbsp; Cód. CPN 201-10
            </p>
          </div>
          <Image
            src="/footer.png"
            alt="Logo footer"
            width={260}
            height={80}
            className="object-contain opacity-80"
            draggable={false}
          />
          <p className="text-white/25 text-xs text-center">
            © {new Date().getFullYear()} Todos los derechos reservados. Material de uso académico restringido.
          </p>
        </div>
      </footer>
    </div>
  );
}
