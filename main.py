from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import joblib
from pydantic import BaseModel
from pathlib import Path


class StudentData(BaseModel):
    sex: str
    age: int
    address: str
    famsize: str
    Pstatus: str
    Medu: int
    Fedu: int
    Mjob: str
    Fjob: str
    reason: str
    guardian: str
    traveltime: int
    studytime: int
    failures: int
    schoolsup: str
    famsup: str
    paid: str
    activities: str
    nursery: str
    higher: str
    internet: str
    romantic: str
    famrel: int
    freetime: int
    goout: int
    Dalc: int
    Walc: int
    health: int
    absences: int


app = FastAPI(
    title="Student Performance Prediction API",
    description="Predicts a student's final grade using a machine learning model."
)


# Load trained ML model
MODEL_PATH = (
    Path(__file__).resolve().parent
    / "models"
    / "student_performance_model.pkl"
)

model = joblib.load(MODEL_PATH)


# Feature importance
rf_model = model.named_steps["model"]
preprocessor = model.named_steps["preprocessor"]

feature_names = preprocessor.get_feature_names_out()
importances = rf_model.feature_importances_

feature_importance = sorted(
    zip(feature_names, importances),
    key=lambda x: x[1],
    reverse=True
)


# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://127.0.0.1:5500",
        "http://localhost:5500"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "message": "Student Performance Prediction API is running!"
    }


@app.post("/predict")
def predict(data: StudentData):

    student = data.model_dump()

    student_df = pd.DataFrame([student])

    prediction = model.predict(student_df)

    # Get top 5 important features
    top_features = feature_importance[:5]

    insights = []

    for feature, importance in top_features:

        clean_name = feature.replace("numerical__", "")
        clean_name = clean_name.replace("categorical__", "")

        insights.append({
            "feature": clean_name,
            "importance": round(float(importance), 4)
        })

    return {
        "predicted_final_grade": round(float(prediction[0]), 2),
        "model_insights": insights
    }