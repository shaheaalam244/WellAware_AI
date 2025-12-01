import pickle
import numpy as np
from functools import lru_cache


@lru_cache(maxsize=4)
def load_diabetes_model():
    """
    Load diabetes model from models/diabetes.pkl
    File format: either plain model OR dict with
    { "model": ..., "scaler": ..., "accuracy": ..., "f1": ... }
    """
    with open("models/diabetes.pkl", "rb") as f:
        data = pickle.load(f)

    if isinstance(data, dict):
        model = data.get("model")
        scaler = data.get("scaler")
        acc = data.get("accuracy")
        f1 = data.get("f1")
    else:
        model = data
        scaler = None
        acc = None
        f1 = None

    return model, scaler, acc, f1


def predict_diabetes(
    pregnancies: int,
    glucose: float,
    blood_pressure: float,
    skin_thickness: float,
    insulin: int,
    bmi: float,
    dpf: float,
    age: int,
):
    model, scaler, _, _ = load_diabetes_model()

    input_data = np.array(
        [
            pregnancies,
            glucose,
            blood_pressure,
            skin_thickness,
            insulin,
            bmi,
            dpf,
            age,
        ],
        dtype=float,
    ).reshape(1, -1)

    if scaler is not None:
        input_data = scaler.transform(input_data)

    result = int(model.predict(input_data)[0])

    prob = None
    if hasattr(model, "predict_proba"):
        prob = float(model.predict_proba(input_data)[0][1] * 100.0)

    return result, prob
