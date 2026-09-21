import React from "react";
import { useNavigate } from "react-router-dom";

// Mariposa flotante personalizable en tamaño, color y vuelo
const FloatingButterfly = ({
  color,
  secondaryColor,
  size = 75,
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
    className={`absolute pointer-events-none z-10 ${flightClass}`}
    style={style}
  >
    <div className="animate-wing-beat">
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        style={{
          filter: `drop-shadow(0 0 14px ${color}) drop-shadow(0 0 25px ${secondaryColor})`,
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
        <ellipse cx="50" cy="52" rx="3" ry="16" fill="#ffffff" />
      </svg>
    </div>
  </div>
);

export default function Carta() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full bg-[#080c16] text-white flex flex-col items-center justify-start py-12 px-6 overflow-x-hidden font-serif">
      <style>{`
        @keyframes wingBeat {
          0%, 100% { transform: scaleX(1); }
          50% { transform: scaleX(0.38) scaleY(1.06); }
        }
        @keyframes flightWide1 {
          0% { transform: translate(0px, 0px) rotate(0deg); }
          30% { transform: translate(75px, -50px) rotate(14deg); }
          65% { transform: translate(-40px, 65px) rotate(-10deg); }
          100% { transform: translate(0px, 0px) rotate(0deg); }
        }
        @keyframes flightWide2 {
          0% { transform: translate(0px, 0px) rotate(0deg); }
          35% { transform: translate(-85px, 55px) rotate(-15deg); }
          70% { transform: translate(50px, -35px) rotate(12deg); }
          100% { transform: translate(0px, 0px) rotate(0deg); }
        }
        @keyframes flightWide3 {
          0% { transform: translate(0px, 0px) rotate(3deg); }
          25% { transform: translate(60px, 45px) rotate(-10deg); }
          60% { transform: translate(-65px, -30px) rotate(8deg); }
          85% { transform: translate(25px, -45px) rotate(-4deg); }
          100% { transform: translate(0px, 0px) rotate(3deg); }
        }
        @keyframes flightWide4 {
          0% { transform: translate(0px, 0px) rotate(-4deg); }
          30% { transform: translate(-55px, -40px) rotate(12deg); }
          65% { transform: translate(70px, 50px) rotate(-8deg); }
          100% { transform: translate(0px, 0px) rotate(-4deg); }
        }

        .animate-wing-beat { animation: wingBeat 0.36s ease-in-out infinite; }
        .flight-wide-1 { animation: flightWide1 13s ease-in-out infinite; }
        .flight-wide-2 { animation: flightWide2 15s ease-in-out infinite; }
        .flight-wide-3 { animation: flightWide3 14s ease-in-out infinite; }
        .flight-wide-4 { animation: flightWide4 16s ease-in-out infinite; }
      `}</style>

      {/* --- COLECCIÓN DE MARIPOSAS FLOTANTES --- */}

      {/* 1. Azul brillante - Superior izquierda */}
      <FloatingButterfly
        color="#38bdf8"
        secondaryColor="#818cf8"
        size={88}
        flightClass="flight-wide-1"
        style={{ top: "6%", left: "4%" }}
      />

      {/* 2. Rosa neón - Superior derecha */}
      <FloatingButterfly
        color="#fb7185"
        secondaryColor="#f43f5e"
        size={94}
        flightClass="flight-wide-2"
        style={{ top: "12%", right: "5%" }}
      />

      {/* 3. Violeta mágica - Lateral junto a la foto (Izquierda) */}
      <FloatingButterfly
        color="#c084fc"
        secondaryColor="#a855f7"
        size={82}
        flightClass="flight-wide-3"
        style={{ top: "28%", left: "8%" }}
      />

      {/* 4. Ámbar dorado - Lateral junto a la foto (Derecha) */}
      <FloatingButterfly
        color="#facc15"
        secondaryColor="#fb923c"
        size={90}
        flightClass="flight-wide-4"
        style={{ top: "26%", right: "8%" }}
      />

      {/* 5. Turquesa / Esmeralda - Nivel medio (Izquierda) */}
      <FloatingButterfly
        color="#2dd4bf"
        secondaryColor="#06b6d4"
        size={78}
        flightClass="flight-wide-2"
        style={{ top: "52%", left: "5%" }}
      />

      {/* 6. Fucsia profundo - Nivel medio (Derecha) */}
      <FloatingButterfly
        color="#f43f5e"
        secondaryColor="#ec4899"
        size={84}
        flightClass="flight-wide-1"
        style={{ top: "56%", right: "6%" }}
      />

      {/* 7. Dorado girasol - Inferior izquierda */}
      <FloatingButterfly
        color="#facc15"
        secondaryColor="#eab308"
        size={86}
        flightClass="flight-wide-4"
        style={{ bottom: "10%", left: "7%" }}
      />

      {/* 8. Púrpura cósmico - Inferior derecha */}
      <FloatingButterfly
        color="#a855f7"
        secondaryColor="#6366f1"
        size={96}
        flightClass="flight-wide-3"
        style={{ bottom: "12%", right: "8%" }}
      />

      {/* Botón Volver y acceso directo al ramo */}
      <div className="w-full max-w-xl flex justify-between items-center mb-8 z-40">
        <button
          onClick={() => navigate("/")}
          className="text-xs uppercase tracking-widest text-yellow-200/60 hover:text-yellow-200 transition-colors flex items-center gap-1.5"
        >
          ← Volver
        </button>
        <button
          onClick={() => navigate("/girasol")}
          className="text-xs font-sans px-3.5 py-1.5 rounded-full border border-yellow-400/40 bg-yellow-400/10 hover:bg-yellow-400/20 text-yellow-200 transition-all"
        >
          Ver Ramo 🌻
        </button>
      </div>

      {/* Tarjeta de contenido */}
      <div className="z-20 max-w-xl w-full flex flex-col items-center text-center">
        {/* Foto con marco luminoso */}
        <div className="relative mb-8 group w-full max-w-md md:max-w-xl">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-yellow-400 via-pink-400 to-amber-300 rounded-3xl blur-md opacity-75 group-hover:opacity-100 transition duration-500" />
          <div className="relative w-full h-64 md:h-72 rounded-2xl overflow-hidden border-2 border-yellow-200/50 shadow-2xl bg-neutral-900">
            <img
              src="/Ella.jpeg"
              alt="Persona especial"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Título de la dedicatoria */}
        <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-amber-300 italic mb-6">
          Para alguien muy especial ✨
        </h2>

        {/* Dedicatoria */}
        <div className="space-y-5 text-neutral-200/90 font-sans text-sm md:text-base leading-relaxed bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.37)]">
          <p className="text-yellow-200 font-medium italic font-serif">
            Perdón por tomar esa foto 😁 pero se ve demasiado linda durmiendo "y
            roncando 😅" es un honor verla quedarse dormida 💛
          </p>
          <p>
            Hay personas que llegan a tu vida y tienen la magia de hacer que
            todo sea más ligero, divertido y bonito. Tu forma de ser, tus
            sonrisas y la energía tan linda que transmites hacen que cualquier
            día normal se sienta especial.
          </p>

          <p>
            Gracias por estar siempre ahí, por cada risa compartida, por
            escucharme y por ofrecer siempre tu apoyo sincero. Una amistad como
            la tuya es un regalo de esos que no se encuentran todos los días y
            que realmente valen oro.
          </p>

          <p className="text-yellow-200 font-medium italic font-serif">
            Que la vida te devuelva multiplicado todo el brillo y la alegría que
            siempre regalas a los demás. ¡Gracias de corazón por ser tú y por tu
            hermosa amistad! 💛
          </p>
        </div>
      </div>
    </div>
  );
}
