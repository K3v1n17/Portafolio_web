import { useState } from "react";

interface SplashScreenProps {
  onEnter: () => void;
}

export const SplashScreen = ({ onEnter }: SplashScreenProps) => {
  const [leaving, setLeaving] = useState(false);

  const handleClick = () => {
    setLeaving(true);
    setTimeout(onEnter, 700);
  };

  return (
    <div
      onClick={handleClick}
      className="fixed inset-0 z-50 flex items-center justify-center cursor-pointer overflow-hidden"
      style={{
        animation: leaving ? "splashUp 0.8s cubic-bezier(0.7,0,0.3,1) forwards" : undefined,
      }}
    >
      {/* ── Foto de setup de fondo ── */}
      <img
        src="/setup.jpeg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ filter: "brightness(0.35) saturate(1.2)" }}
      />

      {/* ── Overlay radial para oscurecer bordes ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.78) 100%)",
        }}
      />

      {/* ── Overlay animación apertura (removida temporalmente) */}
      {/* <div
        className="absolute inset-0 bg-black z-[100]"
        style={{
          transformOrigin: "center",
          transform: leaving ? "scaleX(0)" : "scaleX(1)",
          transition: "transform 0.7s cubic-bezier(0.7,0,0.3,1)",
          pointerEvents: "none"
        }}
      /> */}


      {/* Logo grande centrado con rectángulo animado */}
      <div
        className="absolute inset-0 flex items-center justify-center z-10"
        style={{ pointerEvents: "none" }}
      >
        <div
          className="relative flex items-center justify-center"
          style={{
            width: "min(820px, 95vw)",
            height: "min(420px, 55vw)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Rectángulo animado */}
          <div
            className="absolute z-20 animate-borderPulse"
            style={{
              width: "65%",
              height: "65%",
              border: "4px solid #00bcd4",
              borderRadius: "32px",
              boxSizing: "border-box",
              pointerEvents: "none",
            }}
          />
          <img
            src="/Adevin2.png"
            alt="ADEVIN Software Engineer"
            style={{ width: "min(800px, 90vw)", height: "auto", zIndex: 30 }}
            className="drop-shadow-2xl relative"
          />
        </div>
      </div>

      {/* ── Hint ── */}
      <p
        className="absolute bottom-8 z-10"
        style={{
          fontFamily: "'Courier New', monospace",
          fontSize: 11, color: "rgba(255,255,255,0.25)",
          letterSpacing: 3, animation: "hintPulse 2.5s ease-in-out infinite",
        }}
      >
        click anywhere to enter
      </p>
    </div>
  );
};