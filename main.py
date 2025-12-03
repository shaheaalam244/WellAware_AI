import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from dotenv import load_dotenv
from ml_models import predict_diabetes

from google import genai
from google.genai.types import Content, Part


# ========== Load .env ==========
load_dotenv()

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
if not GEMINI_API_KEY:
    raise RuntimeError("GEMINI_API_KEY missing in environment")

client = genai.Client(api_key=GEMINI_API_KEY)

app = FastAPI(title="WellAware AI Backend")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "WellAware AI Backend Running"}


@app.get("/health")
def health():
    return {"status": "ok"}


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


# ===== Diabetes Prediction =====
@app.post("/predict/diabetes")
def diabetes_route(data: DiabetesInput):
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
def chat_route(req: ChatRequest):
    user_input = req.message.strip()

    if not user_input:
        return ChatResponse(reply="Please enter a valid medical question.")

    system_instruction = (
        "You are AI Doctor, created by Team ALBATROSS. "
        "Provide medical advice based on standard medical guidelines. "
        "Always stay short, clear & professional."
    )

    contents = [
        Content(role="model", parts=[Part(text=system_instruction)]),
        Content(role="user", parts=[Part(text=user_input)]),
    ]

    response = client.generate_content(
        model="gemini-2.5-flash",
        contents=contents,
    )

    reply = getattr(response, "text", "").strip()
    if not reply:
        reply = "Unable to answer. Please consult a real doctor."

    return ChatResponse(reply=reply)
