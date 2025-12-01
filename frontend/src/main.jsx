// src/main.jsx (or src/index.jsx)
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import FloatingLines from "./reactbits/FloatingLines.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* Fullscreen floating shader behind everything */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none", // keep UI interactive; remove to allow pointer events
        }}
        aria-hidden="true"
      >
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={[10, 15, 20]}
          lineDistance={[8, 6, 4]}
          bendRadius={5.0}
          bendStrength={-0.5}
          interactive={false} // set true if you want mouse interaction (then remove pointerEvents:none)
          parallax={true}
        />
      </div>

      {/* App content above the shader */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <App />
      </div>
    </div>
  </React.StrictMode>
);
