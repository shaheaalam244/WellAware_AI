// src/App.jsx
import React, { useState } from "react";
import "./index.css";
import Hyperspeed from "./reactbits/Hyperspeed.jsx";
import Threads from "./reactbits/Threads.jsx";

const API_BASE = "http://localhost:8000";

function App() {
  const [mode, setMode] = useState("chat");

  return (
    <div className="app-container">
      {/* Decorative circles (kept) */}
      <div className="bg-animation" aria-hidden="true">
        <div className="bg-circle bg-circle-1" />
        <div className="bg-circle bg-circle-2" />
        <div className="bg-circle bg-circle-3" />
      </div>

      {/* Main content */}
      <div className="content-wrapper" style={{ position: "relative", zIndex: 2 }}>
        {/* Header */}
        <div className="header animate-fade-in">
          <div className="logo-container">
            <span className="logo-icon">⚕️</span>
          </div>
          <h1 className="main-title">WellAware AI</h1>
          <p className="subtitle">
            A Smart Healthcare Solution Integrating Machine Learning and AI-Driven Chat Interaction
          </p>
        </div>

        {/* Mode Toggle */}
        <div className="section-toggle animate-slide-up">
          <button
            className={mode === "chat" ? "toggle-btn active" : "toggle-btn"}
            onClick={() => setMode("chat")}
          >
            💬 AI Doctor Chat
          </button>
          <button
            className={mode === "disease" ? "toggle-btn active" : "toggle-btn"}
            onClick={() => setMode("disease")}
          >
            🩺 Disease Predictions
          </button>
        </div>

        {/* Main Card */}
        <div className="card animate-slide-up">
          {mode === "chat" ? <ChatSection /> : <DiseaseSection />}
        </div>

        {/* Footer */}
        <div className="footer-text animate-fade-in">
          <p>⚕️ This app provides AI-based medical guidance following standard medical guidelines.</p>
          <p>Always consult a qualified doctor for final diagnosis.</p>
          <p className="team-name">Powered by Shahe Aalam</p>
        </div>
      </div>
    </div>
  );
}

/* -------------------- ChatSection (Hyperspeed behind the chat) -------------------- */
function ChatSection() {
  const [message, setMessage] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    const trimmed = message.trim();
    if (!trimmed) {
      alert("Please type your question first.");
      return;
    }

    setLoading(true);
    setAiResponse("");

    try {
      const res = await fetch(`${API_BASE}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });

      if (!res.ok) throw new Error("Request failed");

      const data = await res.json();
      setAiResponse(data.reply || "No response from AI.");
    } catch (err) {
      console.error(err);
      setAiResponse("Error contacting AI Doctor. Please try again later or consult a real doctor.");
    } finally {
      setLoading(false);
    }
  };

  const handleSpeak = () => {
    if (!aiResponse) return;
    if (!("speechSynthesis" in window)) {
      alert("Speech synthesis is not supported in this browser.");
      return;
    }
    const utterance = new SpeechSynthesisUtterance(aiResponse);
    utterance.rate = 1;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="section-content" style={{ position: "relative", minHeight: 360 }}>
      {/* Background effects container — absolute and non-interactive */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 360, // fits the chat area; change if needed
          zIndex: 0,
          pointerEvents: "none",
          borderRadius: 12,
          overflow: "hidden",
        }}
        aria-hidden="true"
      >
        <Hyperspeed
          effectOptions={{
            onSpeedUp: () => {},
            onSlowDown: () => {},
            distortion: "turbulentDistortion",
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0xFFFFFF,
              brokenLines: 0xFFFFFF,
              leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
              rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
              sticks: 0x03B3C3,
            },
          }}
        />
      </div>

      {/* Foreground content — chat UI */}
      <div style={{ position: "relative", zIndex: 1, paddingTop: 12 }}>
        <h2 className="section-title">💬 Chat with AI Doctor</h2>

        <div className="form-field">
          <label>Your Question</label>
          <textarea
            rows={4}
            placeholder="Ask your health-related question..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="input-field"
          />
        </div>

        <div className="button-row">
          <button className="button-primary" onClick={handleSend} disabled={loading}>
            {loading ? (
              <>
                <span className="spinner" />
                AI Doctor is thinking...
              </>
            ) : (
              "📨 Send Message"
            )}
          </button>

          <button className="button-secondary" onClick={handleSpeak} disabled={!aiResponse}>
            🔊 Speak
          </button>
        </div>

        {aiResponse && (
          <div className="response-container animate-fade-in">
            <div className="info-box response-box">
              <strong>🧠 AI Doctor's Response:</strong>
              <div className="response-text">{aiResponse}</div>
            </div>
            <div className="info-box warning-box">
              ⚕️ This is general medical guidance. Please consult a real doctor for confirmation.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* -------------------- DiseaseSection (Threads behind disease UI) -------------------- */
function DiseaseSection() {
  return (
    <div className="section-content" style={{ position: "relative", minHeight: 600 }}>
      {/* Threads background for the disease area */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 420,
          zIndex: 0,
          pointerEvents: "none",
          borderRadius: 12,
          overflow: "hidden",
        }}
        aria-hidden="true"
      >
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <Threads amplitude={2} distance={0} enableMouseInteraction={false} />
        </div>
      </div>

      {/* Foreground forms/content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <DiabetesSection />
        <ComingSoonSection />
      </div>
    </div>
  );
}

/* -------------------- DiabetesSection -------------------- */
function DiabetesSection() {
  const [pregnancies, setPregnancies] = useState(0);
  const [glucose, setGlucose] = useState(99);
  const [bloodPressure, setBloodPressure] = useState(72);
  const [skinThickness, setSkinThickness] = useState(20);
  const [insulin, setInsulin] = useState(50);
  const [bmi, setBmi] = useState(24.9);
  const [dpf, setDpf] = useState(0.5);
  const [age, setAge] = useState(25);

  const [result, setResult] = useState(null);
  const [probability, setProbability] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePredict = async () => {
    setLoading(true);
    setResult(null);
    setProbability(null);
    setMessage("");

    try {
      const res = await fetch(`${API_BASE}/predict/diabetes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pregnancies,
          glucose: Number(glucose),
          blood_pressure: Number(bloodPressure),
          skin_thickness: Number(skinThickness),
          insulin: Number(insulin),
          bmi: Number(bmi),
          dpf: Number(dpf),
          age,
        }),
      });

      if (!res.ok) throw new Error("Prediction failed");

      const data = await res.json();
      setResult(data.result);
      setProbability(data.probability);
      setMessage(data.message);
    } catch (err) {
      console.error(err);
      setMessage("Error while predicting diabetes. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const isPositive = result === 1;

  return (
    <div className="section-content" style={{ position: "relative", minHeight: 360 }}>
      <h2 className="section-title">🩸 Diabetes Prediction</h2>

      <div className="form-grid">
        <SliderField label="Pregnancies" value={pregnancies} onChange={setPregnancies} min={0} max={17} />
        <SliderField label="Glucose" value={glucose} onChange={setGlucose} min={0} max={200} />
        <SliderField label="Blood Pressure" value={bloodPressure} onChange={setBloodPressure} min={0} max={180} />
        <SliderField label="Skin Thickness" value={skinThickness} onChange={setSkinThickness} min={0} max={99} />
        <SliderField label="Insulin" value={insulin} onChange={setInsulin} min={0} max={900} />
        <SliderField label="BMI" value={bmi} onChange={setBmi} min={0} max={50} step={0.1} />
        <SliderField label="Diabetes Pedigree Function" value={dpf} onChange={setDpf} min={0} max={2.5} step={0.01} />
        <SliderField label="Age" value={age} onChange={setAge} min={10} max={100} />
      </div>

      <div className="button-row">
        <button className="button-primary" onClick={handlePredict} disabled={loading}>
          {loading ? (
            <>
              <span className="spinner" />
              Predicting...
            </>
          ) : (
            "🔍 Predict Diabetes"
          )}
        </button>
      </div>

      {message && (
        <div className={`result-box animate-scale-in ${result === null ? "" : isPositive ? "result-positive" : "result-negative"}`}>
          <h3>{message}</h3>
          {probability != null && probability !== "N/A" && (
            <p className="probability-text">Probability: {Number(probability).toFixed(2)}%</p>
          )}
        </div>
      )}
    </div>
  );
}

/* -------------------- ComingSoonSection -------------------- */
function ComingSoonSection() {
  return (
    <div className="coming-soon-section">
      <h2 className="section-title">More Predictions</h2>

      <div className="coming-soon-grid">
        <div className="coming-soon-card">
          <div className="coming-soon-icon">❤️</div>
          <strong>Heart Disease Prediction</strong>
          <p>🚧 Coming Soon — This feature will be available in future updates.</p>
        </div>

        <div className="coming-soon-card">
          <div className="coming-soon-icon">🫁</div>
          <strong>Lung Disease Prediction</strong>
          <p>🚧 Coming Soon — This feature will be available in future updates.</p>
        </div>

        <div className="coming-soon-card">
          <div className="coming-soon-icon">🧠</div>
          <strong>Mental Health Assessment</strong>
          <p>🚧 Coming Soon — This feature will be available in future updates.</p>
        </div>
      </div>
    </div>
  );
}

/* -------------------- SliderField (reusable) -------------------- */
function SliderField({ label, value, onChange, min, max, step = 1 }) {
  return (
    <div className="form-field">
      <label>
        {label} <span className="field-range">({min} – {max})</span>
      </label>

      <input
        type="range"
        className="input-slider"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(e) => onChange(Number(e.target.value))}
      />

      {/* Show current selected value */}
      <div className="slider-value">{value}</div>
    </div>
  );
}

/* -------------------- NumberField (kept if you need it) -------------------- */
function NumberField({ label, value, onChange, min, max, step = 1 }) {
  return (
    <div className="form-field">
      <label>
        {label} <span className="field-range">({min}–{max})</span>
      </label>
      <input
        type="number"
        className="input-field"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(e) => {
          const v = e.target.value;
          onChange(v === "" ? "" : Number(v));
        }}
      />
    </div>
  );
}

export default App;
