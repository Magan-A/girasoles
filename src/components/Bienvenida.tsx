import { useNavigate } from "react-router-dom";

export default function Bienvenida() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-[#080c16] text-white flex flex-col items-center justify-center px-4 overflow-hidden select-none font-serif">
      {/* Destellos de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-yellow-200/40 blur-[1px] animate-pulse"
            style={{
              width: `${(i % 3) + 2}px`,
              height: `${(i % 3) + 2}px`,
              top: `${(i * 17) % 100}%`,
              left: `${(i * 23) % 100}%`,
              animationDuration: `${3 + (i % 3)}s`,
            }}
          />
        ))}
      </div>

      {/* Resplandor central */}
      <div className="absolute w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="z-10 text-center max-w-md">
        <span className="text-4xl mb-4 inline-block animate-bounce">🌻</span>
        <h1 className="text-3xl md:text-5xl font-bold italic tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-300 to-yellow-100 drop-shadow-[0_0_20px_rgba(251,191,36,0.5)]">
          Un detalle para ti
        </h1>
        <p className="mt-3 text-sm md:text-base text-yellow-100/75 font-sans font-light">
          Tengo algo preparado especialmente para alegrarte el día. Elige por
          dónde empezar:
        </p>

        {/* Los 2 Botones */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center font-sans">
          {/* Botón 1: Carta y Foto */}
          <button
            onClick={() => navigate("/carta")}
            className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-400/40 hover:border-pink-300 hover:bg-pink-500/30 text-pink-200 shadow-[0_0_20px_rgba(236,72,153,0.25)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>💌</span>
            <span className="font-medium tracking-wide">Palabras para ti</span>
          </button>

          {/* Botón 2: El Ramo de Girasoles */}
          <button
            onClick={() => navigate("/girasol")}
            className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-yellow-400/40 hover:border-yellow-300 hover:bg-yellow-500/30 text-yellow-200 shadow-[0_0_20px_rgba(250,204,21,0.25)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>🌻</span>
            <span className="font-medium tracking-wide">
              Tu ramo de girasoles
            </span>
          </button>
          {/* Botón 3: Tulipanes y Música */}
          <button
            onClick={() => navigate("/tulipanes")}
            className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-rose-500/20 to-pink-500/20 border border-pink-400/40 hover:border-pink-300 hover:bg-pink-500/30 text-rose-200 shadow-[0_0_20px_rgba(244,63,94,0.25)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>🌷</span>
            <span className="font-medium tracking-wide">
              Jardín de Tulipanes
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
