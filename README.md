# WellAware AI

A smart healthcare solution integrating machine learning and AI-driven chat interaction for medical guidance and disease predictions.

## 🌟 Features

- **AI Doctor Chat**: Get instant medical guidance through an AI-powered chat interface powered by Google's Gemini API
- **Disease Predictions**: Machine learning models for disease prediction (currently supporting diabetes)
- **Beautiful UI**: Modern, responsive interface with animated visual effects
- **Real-time Processing**: Fast API-based backend for seamless user experience

## 🏗️ Project Structure

```
WellAware AI/
├── frontend/                 # React + Vite frontend application
│   ├── src/
│   │   ├── App.jsx          # Main application component
│   │   ├── index.css        # Global styles
│   │   ├── main.jsx         # Entry point
│   │   └── reactbits/       # Animated visual components
│   │       ├── Hyperspeed.jsx
│   │       ├── Threads.jsx
│   │       ├── Prism.jsx
│   │       ├── GridScan.jsx
│   │       └── [other effects]
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── backend/                  # FastAPI Python backend
│   ├── main.py              # FastAPI application & endpoints
│   ├── ml_models.py         # Machine learning prediction models
│   ├── requirements.txt      # Python dependencies
│   └── models/
│       └── diabetes.csv     # Training data
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn
- Python 3.8+
- Google Gemini API key

### Backend Setup

1. **Install Python dependencies**:
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

2. **Set up environment variables**:
   ```bash
   export GEMINI_API_KEY="your-gemini-api-key-here"
   ```

3. **Run the backend server**:
   ```bash
   uvicorn main:app --reload --host 0.0.0.0 --port 8000
   ```

   The backend will be available at `http://localhost:8000`

### Frontend Setup

1. **Install dependencies**:
   ```bash
   cd frontend
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

   The frontend will be available at `http://localhost:5173`

## 📋 API Endpoints

### Health Check
- **GET** `/health` - Check backend status
  - Response: `{ "status": "ok" }`

### Chat with AI Doctor
- **POST** `/chat`
  - Request: `{ "message": "Your medical question" }`
  - Response: `{ "reply": "AI Doctor's response" }`

### Diabetes Prediction
- **POST** `/predict/diabetes`
  - Request:
    ```json
    {
      "pregnancies": 2,
      "glucose": 120,
      "blood_pressure": 70,
      "skin_thickness": 25,
      "insulin": 100,
      "bmi": 25.5,
      "dpf": 0.5,
      "age": 30
    }
    ```
  - Response:
    ```json
    {
      "result": 0,
      "message": "Not likely to have Diabetes",
      "probability": 25.5
    }
    ```

## 🧠 Features in Detail

### AI Doctor Chat
- Powered by Google's Gemini 2.5 Flash model
- Medical-focused system prompts
- Supports English and Hinglish responses
- Text-to-speech capability for responses
- CORS enabled for frontend communication

### Disease Predictions
- **Diabetes Prediction**: Uses machine learning models trained on the diabetes dataset
- Input validation with bounds checking
- Probability scoring for predictions
- Extensible architecture for adding more disease models

### Visual Components
The frontend includes beautiful animated effects:
- **Hyperspeed**: 3D highway visualization for chat section
- **Threads**: Animated thread patterns for disease prediction section
- **Additional Effects**: Prism, GridScan, and more

## 🛠️ Technology Stack

### Frontend
- **React** 18+
- **Vite** - Fast build tool
- **CSS3** - Modern styling with animations

### Backend
- **FastAPI** - Modern Python web framework
- **Python 3.8+**
- **scikit-learn** - Machine learning models
- **Google Generative AI** - Gemini API integration
- **Pydantic** - Data validation

## 📝 Development

### Running Both Services Locally

**Terminal 1 - Backend**:
```bash
cd backend
export GEMINI_API_KEY="your-key"
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

**Terminal 2 - Frontend**:
```bash
cd frontend
npm run dev
```

Then open `http://localhost:5173` in your browser.

## ⚕️ Important Disclaimer

**This application provides AI-based medical guidance following standard medical guidelines. It is NOT a substitute for professional medical advice. Always consult a qualified healthcare provider for:**
- Final diagnosis
- Treatment recommendations
- Emergency medical situations
- Any serious health concerns

## 🔮 Coming Soon

- ❤️ Heart Disease Prediction
- 🫁 Lung Disease Prediction
- 🧠 Mental Health Assessment

## 👨‍💻 Author

Powered by **Shahe Aalam**

## 📄 License

This project is open source and available under the MIT License.
