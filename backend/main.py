import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from dotenv import load_dotenv
from ml_models import predict_diabetes

from google import genai
from google.genai import types


# ===== Load .env =====
load_dotenv()

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

if not GEMINI_API_KEY:
    raise RuntimeError("GEMINI_API_KEY not set in environment")

client = genai.Client(api_key=GEMINI_API_KEY)


# ===== Create FastAPI App =====
app = FastAPI(title="WellAware AI Backend")


# ===== Root Route =====
@app.get("/")
def root():
    return {"message": "WellAware AI Backend Running"}


# ===== CORS =====
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ===== Request Models =====
class DiabetesInput(BaseModel):
    pregnancies: int = Field(ge=0, le=20)
    glucose: float = Field(ge=0, le=300)
    blood_pressure: float = Field(ge=0, le=250)
    skin_thickness: float = Field(ge=0, le=100)
    insulin: int = Field(ge=0, le=1000)
    bmi: float = Field(ge=0, le=80)
    dpf: float = Field(ge=0, le=5)
    age: int = Field(ge=10, le=120)


class ChatRequest(BaseModel):
    message: str


class ChatResponse(BaseModel):
    reply: str


# ===== Health Check =====
@app.get("/health")
def health():
    return {"status": "ok"}


# ===== Diabetes Prediction =====
@app.post("/predict/diabetes")
def predict_diabetes_route(data: DiabetesInput):
    result, prob = predict_diabetes(
        pregnancies=data.pregnancies,
        glucose=data.glucose,
        blood_pressure=data.blood_pressure,
        skin_thickness=data.skin_thickness,
        insulin=data.insulin,
        bmi=data.bmi,
        dpf=data.dpf,
        age=data.age,
    )

    msg = "Likely to have Diabetes" if result == 1 else "Not likely to have Diabetes"

    return {
        "result": result,
        "message": msg,
        "probability": prob,
    }


# ===== AI Doctor Chat =====
@app.post("/chat", response_model=ChatResponse)
def chat_with_ai_doctor_route(req: ChatRequest):
    user_input = req.message.strip()
    if not user_input:
        return ChatResponse(reply="Please enter a valid medical question.")

    system_instruction = (
        "You are AI Doctor, created by Team ALBATROSS. "
        "Provide medical advice only based on standard medical guidelines. "
        "Refuse non-medical questions politely. "
        "Keep responses short, clear, and professional in English or Hinglish. "
        "Always remind users to consult a real doctor for confirmation."
    )

    contents = [
        types.Content(role="model", parts=[types.Part(text=system_instruction)]),
        types.Content(role="user", parts=[types.Part(text=user_input)]),
    ]

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=contents,
    )

    reply_text = getattr(response, "text", "").strip()
    if not reply_text:
        reply_text = (
            "I'm unable to generate a detailed answer right now. "
            "Please consult a real doctor for proper medical advice."
        )

    return ChatResponse(reply=reply_text)
