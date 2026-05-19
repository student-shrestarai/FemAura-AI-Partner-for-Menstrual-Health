from fastapi import FastAPI
import pickle
import pandas as pd
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

# CORS SETTINGS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # allow all frontend URLs
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Load all models and encoders
model = pickle.load(open("femaura_ai_model.pkl", "rb"))
stress_encoder = pickle.load(open("stress_encoder.pkl", "rb"))
label_encoder = pickle.load(open("label_encoder.pkl", "rb"))
symptom_columns = pickle.load(open("symptom_columns.pkl", "rb"))

app = FastAPI()

@app.get("/")
def home():
    return {"message": "FemAura AI Model is Running Successfully!"}

@app.post("/predict")
def predict(data: dict):
    # Extract inputs
    sleep = data["sleepHours"]
    stress = data["stress"]
    symptoms = data["symptoms"]  # list
    cycle_length=data["cycleLength"]
    
    # Stress encoding
    stress_val = stress_encoder.transform([stress])[0]

    # Symptom vector creation
    symptom_vector = {col: 0 for col in symptom_columns}
    for sym in symptoms:
        if sym in symptom_vector:
            symptom_vector[sym] = 1

    # Create final input row
    input_data = pd.DataFrame([{
        "sleepHours": sleep,
        "stress_encoded": stress_val,
         "cycle_length": cycle_length,
        **symptom_vector
    }])

    # Fix missing columns
    input_data = input_data.reindex(columns=model.feature_names_in_, fill_value=0)

    # Predict
    pred = model.predict(input_data)[0]
    label = label_encoder.inverse_transform([pred])[0]

    return {"prediction": label}
