import { useEffect, useRef } from "react";
import ParticleEngine from "./engine/ParticleEngine.js";

export default function IntroScreen() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const engine = new ParticleEngine(canvasRef.current);

    return () => {
      engine.destroy();
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#020812",
        overflow: "hidden",
        zIndex: 9999,
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />

      {/* Overlay Text */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          pointerEvents: "none",
          textAlign: "center",
          zIndex: 2,
        }}
      >
        {/* <h1
          style={{
            color: "#ffffff",
            fontSize: "1rem",
            fontWeight: "700",
            letterSpacing: "4px",
            margin: 0,
            textShadow: "0 0 20px rgba(0,180,255,.6)",
          }}
        >
          BRODIGY
        </h1> */}

        {/* <h2
          style={{
            color: "#d6e7f3",
            fontWeight: 300,
            marginTop: "15px",
          }}
        >
          Emergency Responders Initiative
        </h2> */}

        {/* <p
          style={{
            marginTop: "25px",
            color: "#63d5ff",
            letterSpacing: "5px",
            fontSize: "1rem",
          }}
        >
          UNITED • TO • SAVE • LIVES
        </p> */}
      </div>
    </div>
  );
}