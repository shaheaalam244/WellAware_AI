import { useState } from "react";
import "./index.css";

const API_BASE = "http://localhost:8000";

function App() {
  const [mode, setMode] = useState("chat");

  return (
    <div className="app-container">
      {/* Animated Background Elements */}
      <div className="bg-animation">
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
        <div className="bg-circle bg-circle-3"></div>
      </div>

      <div className="content-wrapper">
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
          <p className="team-name">Team ALBATROSS</p>
        </div>
      </div>
    </div>
  );
}

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
      setAiResponse(
        "Error contacting AI Doctor. Please try again later or consult a real doctor."
      );
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
    <div className="section-content">
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
              <span className="spinner"></span>
              AI Doctor is thinking...
            </>
          ) : (
            "📨 Send Message"
          )}
        </button>
        <button
          className="button-secondary"
          onClick={handleSpeak}
          disabled={!aiResponse}
        >
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
  );
}

function DiseaseSection() {
  return (
    <div className="section-content">
      <DiabetesSection />
      <ComingSoonSection />
    </div>
  );
}

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
    <div>
      <h2 className="section-title">🩸 Diabetes Prediction</h2>

      <div className="form-grid">
        <NumberField
          label="Pregnancies"
          value={pregnancies}
          onChange={setPregnancies}
          min={0}
          max={17}
        />
        <NumberField
          label="Glucose"
          value={glucose}
          onChange={setGlucose}
          min={0}
          max={200}
        />
        <NumberField
          label="Blood Pressure"
          value={bloodPressure}
          onChange={setBloodPressure}
          min={0}
          max={180}
        />
        <NumberField
          label="Skin Thickness"
          value={skinThickness}
          onChange={setSkinThickness}
          min={0}
          max={99}
        />
        <NumberField
          label="Insulin"
          value={insulin}
          onChange={setInsulin}
          min={0}
          max={900}
        />
        <NumberField
          label="BMI"
          value={bmi}
          onChange={setBmi}
          min={0}
          max={50}
          step="0.1"
        />
        <NumberField
          label="Diabetes Pedigree Function"
          value={dpf}
          onChange={setDpf}
          min={0}
          max={2.5}
          step="0.01"
        />
        <NumberField
          label="Age"
          value={age}
          onChange={setAge}
          min={10}
          max={100}
        />
      </div>

      <div className="button-row">
        <button
          className="button-primary"
          onClick={handlePredict}
          disabled={loading}
        >
          {loading ? (
            <>
              <span className="spinner"></span>
              Predicting...
            </>
          ) : (
            "🔍 Predict Diabetes"
          )}
        </button>
      </div>

      {message && (
        <div
          className={`result-box animate-scale-in ${
            result === null
              ? ""
              : isPositive
              ? "result-positive"
              : "result-negative"
          }`}
        >
          <h3>{message}</h3>
          {probability != null && probability !== "N/A" && (
            <p className="probability-text">
              Probability: {Number(probability).toFixed(2)}%
            </p>
          )}
        </div>
      )}
    </div>
  );
}

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

function NumberField({ label, value, onChange, min, max, step = 1 }) {
  return (
    <div className="form-field">
      <label>
        {label}{" "}
        <span className="field-range">
          ({min}–{max})
        </span>
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