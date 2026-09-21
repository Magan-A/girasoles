import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Girasol detallado en SVG con animación de pulso/respiración en los pétalos
// Girasol vectorial realista con tres capas de pétalos y centro texturizado
// Girasol realista, con capas de pétalos estilizados y centro texturizado (sin fallos de rotación)
const Sunflower = ({
  className = "",
  style = {},
}: {
  className?: string;
  style?: React.CSSProperties;
}) => {
  // Cantidad de pétalos por capa
  const outerPetals = Array.from({ length: 22 });
  const midPetals = Array.from({ length: 20 });
  const innerPetals = Array.from({ length: 18 });

  // Trazados con forma natural de pétalo de girasol (base anclada en 100,100)
  // Pétalo largo exterior (llega hasta y=8)
  const outerPath =
    "M 100,8 C 111,28 113,58 105,78 C 102,82 98,82 95,78 C 87,58 89,28 100,8 Z";
  // Pétalo mediano (llega hasta y=18)
  const midPath =
    "M 100,18 C 109,36 111,62 104,78 C 102,82 98,82 96,78 C 89,62 91,36 100,18 Z";
  // Pétalo interior (llega hasta y=28)
  const innerPath =
    "M 100,28 C 107,44 109,65 104,78 C 102,81 98,81 96,78 C 91,65 93,44 100,28 Z";

  return (
    <div
      className={`relative w-40 h-40 md:w-44 md:h-44 flex items-center justify-center select-none ${className}`}
      style={style}
    >
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full drop-shadow-[0_6px_16px_rgba(245,158,11,0.4)]"
      >
        <defs>
          {/* Degradado pétalos exteriores: ámbar a amarillo intenso */}
          <linearGradient id="gfOuter" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#d97706" />
            <stop offset="45%" stopColor="#f59e0b" />
            <stop offset="85%" stopColor="#fde047" />
            <stop offset="100%" stopColor="#fef08a" />
          </linearGradient>

          {/* Degradado pétalos intermedios: dorado cálido */}
          <linearGradient id="gfMid" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#b45309" />
            <stop offset="50%" stopColor="#eab308" />
            <stop offset="100%" stopColor="#fde047" />
          </linearGradient>

          {/* Degradado pétalos interiores: tonos más profundos */}
          <linearGradient id="gfInner" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#92400e" />
            <stop offset="60%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#fef08a" />
          </linearGradient>

          {/* Núcleo de la flor con relieve y profundidad */}
          <radialGradient id="gfCenter" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1a0c02" />
            <stop offset="60%" stopColor="#2b1406" />
            <stop offset="85%" stopColor="#4a250a" />
            <stop offset="94%" stopColor="#78350f" />
            <stop offset="100%" stopColor="#ca8a04" />
          </radialGradient>
        </defs>

        {/* 1. Capa externa de pétalos largos */}
        <g>
          {outerPetals.map((_, i) => (
            <path
              key={`out-${i}`}
              d={outerPath}
              fill="url(#gfOuter)"
              transform={`rotate(${i * (360 / 22)}, 100, 100)`}
              opacity="0.97"
            />
          ))}
        </g>

        {/* 2. Capa intermedia intercalada */}
        <g>
          {midPetals.map((_, i) => (
            <path
              key={`mid-${i}`}
              d={midPath}
              fill="url(#gfMid)"
              transform={`rotate(${i * (360 / 20) + 9}, 100, 100)`}
              opacity="0.94"
            />
          ))}
        </g>

        {/* 3. Capa interior cerca del centro */}
        <g>
          {innerPetals.map((_, i) => (
            <path
              key={`in-${i}`}
              d={innerPath}
              fill="url(#gfInner)"
              transform={`rotate(${i * (360 / 18) + 4.5}, 100, 100)`}
              opacity="0.92"
            />
          ))}
        </g>

        {/* 4. Corona de polen dorado */}
        <circle
          cx="100"
          cy="100"
          r="34"
          fill="none"
          stroke="#eab308"
          strokeWidth="3.5"
          opacity="0.85"
          strokeDasharray="2 3"
        />

        {/* 5. Disco central de semillas */}
        <circle
          cx="100"
          cy="100"
          r="32"
          fill="url(#gfCenter)"
          stroke="#451a03"
          strokeWidth="1.5"
        />

        {/* Anillos concéntricos de semillas */}
        <circle
          cx="100"
          cy="100"
          r="24"
          fill="none"
          stroke="#a16207"
          strokeWidth="1.8"
          strokeDasharray="2.5 3"
          opacity="0.75"
        />
        <circle
          cx="100"
          cy="100"
          r="16"
          fill="none"
          stroke="#ca8a04"
          strokeWidth="1.6"
          strokeDasharray="2 2.5"
          opacity="0.65"
        />
        <circle
          cx="100"
          cy="100"
          r="8"
          fill="none"
          stroke="#eab308"
          strokeWidth="1.2"
          strokeDasharray="1.5 2"
          opacity="0.5"
        />
        <circle cx="100" cy="100" r="3" fill="#170a01" opacity="0.9" />
      </svg>
    </div>
  );
};

// Mariposa interactiva con frases
interface ButterflyProps {
  phrase: string;
  color: string;
  secondaryColor: string;
  size?: number;
  flightClass: string;
  style?: React.CSSProperties;
}

const ButterflyWithPhrase = ({
  phrase,
  color,
  secondaryColor,
  size = 46,
  flightClass,
  style = {},
}: ButterflyProps) => {
  return (
    <div
      className={`absolute z-30 flex flex-col items-center cursor-pointer group select-none ${flightClass}`}
      style={style}
    >
      <div className="mb-1 px-2.5 py-0.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[11px] md:text-xs font-sans font-medium text-yellow-100/90 shadow-[0_0_12px_rgba(255,255,255,0.15)] group-hover:scale-110 group-hover:border-yellow-300/40 group-hover:text-yellow-200 transition-transform duration-300 whitespace-nowrap">
        {phrase}
      </div>

      <div className="animate-wing-beat">
        <svg
          width={size}
          height={size}
          viewBox="0 0 100 100"
          style={{
            filter: `drop-shadow(0 0 10px ${color}) drop-shadow(0 0 20px ${secondaryColor})`,
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
};

export default function Girasol() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  // Animación progresiva de armado del ramo
  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 500),
      setTimeout(() => setStep(2), 1600),
      setTimeout(() => setStep(3), 3000),
      setTimeout(() => setStep(4), 4300),
      setTimeout(() => setStep(5), 5500),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#080c16] overflow-hidden flex flex-col items-center justify-between py-10 font-serif text-white">
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 z-40 text-xs uppercase tracking-widest text-yellow-200/60 hover:text-yellow-200 transition-colors"
      >
        ← Volver
      </button>

      {/* Definición de Keyframes de movimiento continuo */}
      <style>{`
        /* Aleteo de mariposas */
        @keyframes wingBeat {
          0%, 100% { transform: scaleX(1); }
          50% { transform: scaleX(0.42) scaleY(1.05); }
        }

        /* Trayectorias de vuelo */
        @keyframes flight1 {
          0% { transform: translate(0px, 0px) rotate(0deg); }
          25% { transform: translate(50px, -35px) rotate(8deg); }
          50% { transform: translate(95px, 15px) rotate(-6deg); }
          75% { transform: translate(30px, 50px) rotate(4deg); }
          100% { transform: translate(0px, 0px) rotate(0deg); }
        }
        @keyframes flight2 {
          0% { transform: translate(0px, 0px) rotate(0deg); }
          30% { transform: translate(-50px, -45px) rotate(-10deg); }
          60% { transform: translate(-90px, 15px) rotate(6deg); }
          85% { transform: translate(-30px, 35px) rotate(-4deg); }
          100% { transform: translate(0px, 0px) rotate(0deg); }
        }
        @keyframes flight3 {
          0% { transform: translate(0px, 0px) rotate(2deg); }
          35% { transform: translate(60px, 40px) rotate(-8deg); }
          70% { transform: translate(-40px, -30px) rotate(10deg); }
          100% { transform: translate(0px, 0px) rotate(2deg); }
        }
        @keyframes flight4 {
          0% { transform: translate(0px, 0px) rotate(0deg); }
          40% { transform: translate(-60px, 45px) rotate(9deg); }
          75% { transform: translate(45px, -25px) rotate(-7deg); }
          100% { transform: translate(0px, 0px) rotate(0deg); }
        }

        /* Balanceo suave de girasoles por la brisa */
        @keyframes breezeSwayCenter {
          0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
          50% { transform: translateY(-7px) rotate(3deg) scale(1.02); }
        }
        @keyframes breezeSwayLeft {
          0%, 100% { transform: translate(0, 0) rotate(-12deg); }
          50% { transform: translate(-4px, -6px) rotate(-8deg) scale(1.02); }
        }
        @keyframes breezeSwayRight {
          0%, 100% { transform: translate(0, 0) rotate(12deg); }
          50% { transform: translate(4px, -6px) rotate(16deg) scale(1.02); }
        }
        @keyframes breezeSwayLowLeft {
          0%, 100% { transform: translate(0, 0) rotate(-6deg); }
          50% { transform: translate(-3px, -4px) rotate(-2deg); }
        }
        @keyframes breezeSwayLowRight {
          0%, 100% { transform: translate(0, 0) rotate(6deg); }
          50% { transform: translate(3px, -4px) rotate(10deg); }
        }

        /* Movimiento de tallos */
        @keyframes stemBreeze {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(1.8deg); }
        }

        /* Respiración sutil de pétalos */
        @keyframes petalBreathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.035); }
        }

        .animate-wing-beat { animation: wingBeat 0.38s ease-in-out infinite; }
        .flight-path-1 { animation: flight1 10s ease-in-out infinite; }
        .flight-path-2 { animation: flight2 12s ease-in-out infinite; }
        .flight-path-3 { animation: flight3 14s ease-in-out infinite; }
        .flight-path-4 { animation: flight4 11s ease-in-out infinite; }

        .sway-center { animation: breezeSwayCenter 5s ease-in-out infinite; }
        .sway-left { animation: breezeSwayLeft 5.6s ease-in-out infinite; }
        .sway-right { animation: breezeSwayRight 5.2s ease-in-out infinite; }
        .sway-low-left { animation: breezeSwayLowLeft 4.8s ease-in-out infinite; }
        .sway-low-right { animation: breezeSwayLowRight 5.4s ease-in-out infinite; }
        .animate-petal-breathe { animation: petalBreathe 4s ease-in-out infinite; }
        .animate-stem-sway {
          transform-origin: bottom center;
          animation: stemBreeze 6s ease-in-out infinite;
        }
      `}</style>

      {/* Polvo de estrellas de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 24 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-yellow-200/40 blur-[1px] animate-pulse"
            style={{
              width: `${(i % 3) + 2}px`,
              height: `${(i % 3) + 2}px`,
              top: `${(i * 17) % 100}%`,
              left: `${(i * 29) % 100}%`,
              animationDuration: `${3 + (i % 4)}s`,
            }}
          />
        ))}
      </div>

      {/* Mariposas voladoras con frases */}
      <ButterflyWithPhrase
        phrase="Gracias por tu amistad ✨"
        color="#38bdf8"
        secondaryColor="#818cf8"
        flightClass="flight-path-1"
        style={{ top: "14%", left: "8%" }}
      />
      <ButterflyWithPhrase
        phrase="Iluminas los días más grises 💛"
        color="#fb7185"
        secondaryColor="#f43f5e"
        flightClass="flight-path-2"
        style={{ top: "18%", right: "8%" }}
      />
      <ButterflyWithPhrase
        phrase="Una amistad que vale oro 🌻"
        color="#facc15"
        secondaryColor="#fb923c"
        flightClass="flight-path-3"
        style={{ top: "48%", left: "6%" }}
      />
      <ButterflyWithPhrase
        phrase="Siempre incondicional 🦋"
        color="#c084fc"
        secondaryColor="#a855f7"
        flightClass="flight-path-4"
        style={{ top: "44%", right: "6%" }}
      />
      <ButterflyWithPhrase
        phrase="Por mil risas más juntas 💫"
        color="#34d399"
        secondaryColor="#2dd4bf"
        flightClass="flight-path-1"
        style={{ bottom: "16%", left: "14%" }}
      />
      <ButterflyWithPhrase
        phrase="La mejor coincidencia 🌸"
        color="#fb923c"
        secondaryColor="#f43f5e"
        flightClass="flight-path-2"
        style={{ bottom: "18%", right: "14%" }}
      />

      {/* Encabezado */}
      <div className="z-20 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-300 to-yellow-100 drop-shadow-[0_0_25px_rgba(251,191,36,0.6)] italic">
          Feliz día de las flores amarillas
        </h1>
        <p className="mt-3 text-sm md:text-base text-yellow-100/80 font-light tracking-widest uppercase">
          Un detalle con mucho cariño para ti ✨
        </p>
      </div>

      {/* Ramo vivo con movimiento */}
      <div className="relative w-80 h-96 flex items-end justify-center z-10 mb-6">
        <div className="absolute bottom-12 w-48 h-48 bg-yellow-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Tallos con balanceo orgánico */}
        <div
          className={`absolute bottom-0 flex justify-center items-end w-full transition-all duration-1000 ${
            step >= 1
              ? "opacity-100 scale-y-100"
              : "opacity-0 scale-y-0 origin-bottom"
          } ${step >= 2 ? "animate-stem-sway" : ""}`}
        >
          <div className="w-2.5 h-64 bg-gradient-to-t from-emerald-900 to-green-700 rounded-full" />
          <div className="absolute w-2 h-56 bg-green-800 rounded-full -rotate-12 origin-bottom translate-x-[-15px]" />
          <div className="absolute w-2 h-56 bg-green-800 rounded-full rotate-12 origin-bottom translate-x-[15px]" />
          <div className="absolute w-1.5 h-44 bg-green-900 rounded-full -rotate-25 origin-bottom translate-x-[-28px]" />
          <div className="absolute w-1.5 h-44 bg-green-900 rounded-full rotate-25 origin-bottom translate-x-[28px]" />

          {step >= 3 && (
            <>
              <div className="absolute bottom-28 -left-6 w-10 h-5 bg-green-700 rounded-full -rotate-30 border-l border-green-400/40 animate-pulse" />
              <div className="absolute bottom-20 -right-6 w-10 h-5 bg-green-700 rounded-full rotate-30 border-r border-green-400/40 animate-pulse" />
            </>
          )}
        </div>

        {/* Flores con animación de entrada + balanceo continuo */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Girasol Central Superior */}
          <div
            className={`absolute top-4 transition-all duration-1000 ease-out transform ${
              step >= 2
                ? "scale-105 opacity-100"
                : "scale-0 opacity-0 -rotate-45"
            }`}
          >
            <div className={step >= 2 ? "sway-center" : ""}>
              <Sunflower />
            </div>
          </div>

          {/* Girasol Lateral Izquierdo */}
          <div
            className={`absolute top-20 left-4 transition-all duration-1000 ease-out delay-200 transform ${
              step >= 3 ? "scale-90 opacity-100" : "scale-0 opacity-0"
            }`}
          >
            <div className={step >= 3 ? "sway-left" : ""}>
              <Sunflower />
            </div>
          </div>

          {/* Girasol Lateral Derecho */}
          <div
            className={`absolute top-20 right-4 transition-all duration-1000 ease-out delay-300 transform ${
              step >= 3 ? "scale-90 opacity-100" : "scale-0 opacity-0"
            }`}
          >
            <div className={step >= 3 ? "sway-right" : ""}>
              <Sunflower />
            </div>
          </div>

          {/* Girasol Inferior Izquierdo */}
          <div
            className={`absolute top-36 left-12 transition-all duration-1000 ease-out delay-150 transform ${
              step >= 4 ? "scale-75 opacity-100" : "scale-0 opacity-0"
            }`}
          >
            <div className={step >= 4 ? "sway-low-left" : ""}>
              <Sunflower />
            </div>
          </div>

          {/* Girasol Inferior Derecho */}
          <div
            className={`absolute top-36 right-12 transition-all duration-1000 ease-out delay-250 transform ${
              step >= 4 ? "scale-75 opacity-100" : "scale-0 opacity-0"
            }`}
          >
            <div className={step >= 4 ? "sway-low-right" : ""}>
              <Sunflower />
            </div>
          </div>
        </div>

        {/* Envoltura del ramo */}
        <div
          className={`absolute -bottom-6 w-56 h-48 transition-all duration-1000 ease-out transform z-20 ${
            step >= 5
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-50 translate-y-12"
          }`}
        >
          <svg viewBox="0 0 200 180" className="w-full h-full drop-shadow-2xl">
            <polygon
              points="20,20 180,20 100,175"
              fill="rgba(244, 63, 94, 0.35)"
            />
            <polygon
              points="20,20 100,60 100,175"
              fill="rgba(225, 29, 72, 0.6)"
            />
            <polygon
              points="180,20 100,60 100,175"
              fill="rgba(190, 18, 60, 0.75)"
            />
            <ellipse cx="100" cy="140" rx="14" ry="6" fill="#fbbf24" />
            <path
              d="M 94 142 L 80 170 M 106 142 L 120 170"
              stroke="#fbbf24"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      <div className="text-xs text-yellow-200/50 tracking-widest uppercase">
        Hecho especialmente para ti
      </div>
    </div>
  );
}
