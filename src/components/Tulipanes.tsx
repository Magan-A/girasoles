import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Componente Tulipan Vectorial Realista con copa envolvente y hojas naturales
const Tulip = ({
  colorTheme = "pink",
  swayClass = "animate-tulip-sway-1",
  className = "",
  style = {},
}: {
  colorTheme?: "pink" | "red" | "yellow" | "purple";
  swayClass?: string;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const palettes = {
    pink: {
      gradStart: "#be185d",
      gradMid: "#f43f5e",
      gradEnd: "#fecdd3",
      shadow: "#831843",
      glow: "rgba(244, 63, 94, 0.45)",
    },
    red: {
      gradStart: "#991b1b",
      gradMid: "#ef4444",
      gradEnd: "#fef08a",
      shadow: "#450a0a",
      glow: "rgba(239, 68, 68, 0.45)",
    },
    yellow: {
      gradStart: "#d97706",
      gradMid: "#f59e0b",
      gradEnd: "#fef08a",
      shadow: "#78350f",
      glow: "rgba(245, 158, 11, 0.45)",
    },
    purple: {
      gradStart: "#6b21a8",
      gradMid: "#a855f7",
      gradEnd: "#fbcfe8",
      shadow: "#3b0764",
      glow: "rgba(168, 85, 247, 0.45)",
    },
  };

  const p = palettes[colorTheme];
  const id = `tulip-${colorTheme}`;

  return (
    <div
      className={`relative w-28 h-64 flex flex-col items-center select-none origin-bottom ${swayClass} ${className}`}
      style={style}
    >
      <svg
        viewBox="0 0 100 240"
        className="w-full h-full overflow-visible"
        style={{ filter: `drop-shadow(0 8px 18px ${p.glow})` }}
      >
        <defs>
          <linearGradient
            id={`gradMain-${id}`}
            x1="0%"
            y1="100%"
            x2="0%"
            y2="0%"
          >
            <stop offset="0%" stopColor={p.gradStart} />
            <stop offset="50%" stopColor={p.gradMid} />
            <stop offset="100%" stopColor={p.gradEnd} />
          </linearGradient>

          <linearGradient
            id={`gradBack-${id}`}
            x1="0%"
            y1="100%"
            x2="0%"
            y2="0%"
          >
            <stop offset="0%" stopColor={p.shadow} />
            <stop offset="100%" stopColor={p.gradStart} />
          </linearGradient>

          <linearGradient
            id={`stemGrad-${id}`}
            x1="0%"
            y1="100%"
            x2="0%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#064e3b" />
            <stop offset="50%" stopColor="#15803d" />
            <stop offset="100%" stopColor="#4ade80" />
          </linearGradient>

          <linearGradient
            id={`leafGrad-${id}`}
            x1="0%"
            y1="100%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#064e3b" />
            <stop offset="60%" stopColor="#16a34a" />
            <stop offset="100%" stopColor="#86efac" />
          </linearGradient>
        </defs>

        {/* Hoja izquierda */}
        <path
          d="M 50,230 C 25,200 15,145 35,115 C 38,135 44,185 50,230 Z"
          fill={`url(#leafGrad-${id})`}
          opacity="0.95"
        />

        {/* Hoja derecha */}
        <path
          d="M 50,230 C 72,195 85,135 68,95 C 65,120 58,175 50,230 Z"
          fill={`url(#leafGrad-${id})`}
          opacity="0.9"
        />

        {/* Tallo */}
        <path
          d="M 50,235 Q 47,150 50,65"
          fill="none"
          stroke={`url(#stemGrad-${id})`}
          strokeWidth="4.5"
          strokeLinecap="round"
        />

        {/* Cáliz */}
        <ellipse cx="50" cy="65" rx="5" ry="3" fill="#15803d" />

        {/* Flor del tulipán */}
        <path
          d="M 50,64 C 36,54 36,26 44,14 C 47,9 53,9 56,14 C 64,26 64,54 50,64 Z"
          fill={`url(#gradBack-${id})`}
        />
        <path
          d="M 50,65 C 28,62 20,38 29,18 C 34,8 45,18 48,34 C 50,45 50,56 50,65 Z"
          fill={`url(#gradMain-${id})`}
          opacity="0.97"
        />
        <path
          d="M 50,65 C 72,62 80,38 71,18 C 66,8 55,18 52,34 C 50,45 50,56 50,65 Z"
          fill={`url(#gradMain-${id})`}
          opacity="0.97"
        />
        <path
          d="M 50,65 C 38,62 35,42 42,24 C 46,15 54,15 58,24 C 65,42 62,62 50,65 Z"
          fill={`url(#gradMain-${id})`}
        />

        {/* Reflejo */}
        <ellipse
          cx="48"
          cy="38"
          rx="5"
          ry="12"
          fill="#ffffff"
          opacity="0.22"
          transform="rotate(-8 48 38)"
        />
      </svg>
    </div>
  );
};

// Mariposa
const Butterfly = ({
  color,
  secondaryColor,
  size = 50,
  flightClass,
  style = {},
}: {
  color: string;
  secondaryColor: string;
  size?: number;
  flightClass: string;
  style?: React.CSSProperties;
}) => (
  <div
    className={`absolute pointer-events-none z-20 ${flightClass}`}
    style={style}
  >
    <div className="animate-wing-beat">
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        style={{
          filter: `drop-shadow(0 0 10px ${color}) drop-shadow(0 0 18px ${secondaryColor})`,
        }}
      >
        <path
          d="M 50 50 C 20 10, 5 30, 15 65 C 22 75, 45 65, 50 50 Z"
          fill={color}
          opacity="0.88"
        />
        <path
          d="M 50 50 C 25 55, 10 75, 30 90 C 45 95, 48 65, 50 50 Z"
          fill={secondaryColor}
          opacity="0.8"
        />
        <path
          d="M 50 50 C 80 10, 95 30, 85 65 C 78 75, 55 65, 50 50 Z"
          fill={color}
          opacity="0.88"
        />
        <path
          d="M 50 50 C 75 55, 90 75, 70 90 C 55 95, 52 65, 50 50 Z"
          fill={secondaryColor}
          opacity="0.8"
        />
        <ellipse cx="50" cy="52" rx="2.8" ry="16" fill="#ffffff" />
      </svg>
    </div>
  </div>
);

export default function Tulipanes() {
  const navigate = useNavigate();
  const [youtubeId] = useState("ECAeUl6kKVk");

  return (
    <div className="relative min-h-screen w-full bg-[#070a13] text-white flex flex-col items-center justify-between py-10 px-4 overflow-x-hidden font-serif">
      <style>{`
        @keyframes wingBeat {
          0%, 100% { transform: scaleX(1); }
          50% { transform: scaleX(0.4) scaleY(1.05); }
        }
        @keyframes flight1 {
          0% { transform: translate(0, 0) rotate(0deg); }
          30% { transform: translate(60px, -40px) rotate(8deg); }
          70% { transform: translate(-45px, 35px) rotate(-6deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        @keyframes flight2 {
          0% { transform: translate(0, 0) rotate(0deg); }
          35% { transform: translate(-70px, 45px) rotate(-10deg); }
          75% { transform: translate(50px, -30px) rotate(8deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        @keyframes tulipSway1 {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(3deg); }
        }
        @keyframes tulipSway2 {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-3.5deg); }
        }

        .animate-wing-beat { animation: wingBeat 0.38s ease-in-out infinite; }
        .flight-1 { animation: flight1 11s ease-in-out infinite; }
        .flight-2 { animation: flight2 13s ease-in-out infinite; }
        .animate-tulip-sway-1 { animation: tulipSway1 5s ease-in-out infinite; }
        .animate-tulip-sway-2 { animation: tulipSway2 6s ease-in-out infinite; }
      `}</style>

      {/* Mariposas flotantes */}
      <Butterfly
        color="#f472b6"
        secondaryColor="#fb7185"
        size={60}
        flightClass="flight-1"
        style={{ top: "8%", left: "6%" }}
      />
      <Butterfly
        color="#38bdf8"
        secondaryColor="#818cf8"
        size={55}
        flightClass="flight-2"
        style={{ top: "14%", right: "8%" }}
      />
      <Butterfly
        color="#fde047"
        secondaryColor="#fb923c"
        size={64}
        flightClass="flight-1"
        style={{ top: "35%", left: "10%" }}
      />
      <Butterfly
        color="#c084fc"
        secondaryColor="#e879f9"
        size={70}
        flightClass="flight-2"
        style={{ top: "42%", right: "12%" }}
      />

      {/* Navegación superior */}
      <div className="w-full max-w-xl flex justify-between items-center mb-6 z-40">
        <button
          onClick={() => navigate("/")}
          className="text-xs uppercase tracking-widest text-pink-200/60 hover:text-pink-200 transition-colors"
        >
          &larr; Menú
        </button>
        <div className="flex gap-2">
          <button
            onClick={() => navigate("/carta")}
            className="text-xs font-sans px-3 py-1.5 rounded-full border border-pink-400/30 bg-pink-400/10 hover:bg-pink-400/20 text-pink-200 transition-all"
          >
            Ver Foto 💌
          </button>
          <button
            onClick={() => navigate("/girasol")}
            className="text-xs font-sans px-3 py-1.5 rounded-full border border-yellow-400/30 bg-yellow-400/10 hover:bg-yellow-400/20 text-yellow-200 transition-all"
          >
            Ver Ramo 🌻
          </button>
        </div>
      </div>

      {/* Título principal */}
      <div className="z-10 text-center max-w-lg mb-6">
        <h1 className="text-3xl md:text-4xl font-bold italic tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-rose-300 to-amber-200 drop-shadow-[0_0_20px_rgba(244,63,94,0.4)]">
          Un jardín de tulipanes para ti 🌷
        </h1>
        <p className="mt-2 text-xs md:text-sm text-pink-100/70 font-sans tracking-wider uppercase">
          Porque te mereces todas las flores del mundo
        </p>
      </div>

      {/* Reproductor de YouTube */}
      <div className="w-full max-w-md z-30 mb-8 px-2">
        <div className="p-3 bg-white/5 border border-pink-300/20 rounded-2xl backdrop-blur-md shadow-[0_4px_25px_rgba(244,63,94,0.15)] flex flex-col items-center">
          <span className="text-xs font-sans text-pink-200/80 mb-2 flex items-center gap-1.5">
            <span>🎵</span> Dale play para escuchar mientras lees:
          </span>
          <div className="w-full aspect-video rounded-xl overflow-hidden border border-white/10 shadow-lg">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${youtubeId}?rel=0`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* Frases */}
      <div className="w-full max-w-lg z-20 space-y-4 mb-10 font-sans text-sm md:text-base">
        <div className="p-5 rounded-2xl bg-white/5 border border-pink-400/20 backdrop-blur-sm text-neutral-200 shadow-md">
          <p className="leading-relaxed">
            🌸 <strong>Tu esencia:</strong> Tienes esa calma bonita que contagia
            y una autenticidad que es imposible no querer cuidar y celebrar
            siempre.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white/5 border border-pink-400/20 backdrop-blur-sm text-neutral-200 shadow-md">
          <p className="leading-relaxed">
            🌷 <strong>Los tulipanes:</strong> Dicen que los tulipanes
            simbolizan los lazos más puros y sinceros. Por eso hoy florecen para
            ti, como recordatorio de lo mucho que se valora tu presencia.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-gradient-to-r from-pink-500/10 to-amber-500/10 border border-amber-300/30 backdrop-blur-sm text-amber-100 shadow-md italic font-serif">
          <p className="leading-relaxed">
            &ldquo;Que nunca te falten motivos para sonreír, días bonitos que
            recordar y personas que sepan apreciar la maravilla de ser humano
            que eres.&rdquo; 💫
          </p>
        </div>
      </div>

      {/* Jardín inferior */}
      <div className="relative w-full max-w-lg h-64 flex justify-center items-end gap-1 md:gap-3 z-20 pointer-events-none">
        <Tulip
          colorTheme="pink"
          swayClass="animate-tulip-sway-1"
          style={{ transform: "scale(0.88)" }}
        />
        <Tulip
          colorTheme="red"
          swayClass="animate-tulip-sway-2"
          style={{ transform: "scale(1.08) translateY(-10px)" }}
        />
        <Tulip
          colorTheme="yellow"
          swayClass="animate-tulip-sway-1"
          style={{ transform: "scale(0.98)" }}
        />
        <Tulip
          colorTheme="purple"
          swayClass="animate-tulip-sway-2"
          style={{ transform: "scale(0.9) translateY(-4px)" }}
        />
      </div>
    </div>
  );
}
