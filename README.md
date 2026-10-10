# Learnora — Student Performance Analytics

**An End-to-End Machine Learning Web Application for Student Performance Prediction**

Learnora is a machine learning-powered web application designed to predict student academic performance using relevant student attributes. It combines a trained ML model, a FastAPI backend, and an interactive frontend to turn student data into meaningful predictions and actionable insights.

## ✨ Features

- **Student Performance Prediction:** Predict academic performance using a trained machine learning model.
- **Interactive User Interface:** A polished, engaging, and responsive interface for entering student information.
- **Data-Driven Insights:** Present prediction results in an understandable format.
- **What-If Analysis:** Explore how changing input values may affect the predicted outcome, if enabled in the application.
- **FastAPI Integration:** Serve model predictions through backend API endpoints.
- **Docker Support:** Package the application for consistent deployment.
- **Modular Architecture:** Separate frontend, backend, data, and model components for maintainability.

## 🛠️ Tech Stack

| Component | Technologies |
|---|---|
| Programming Language | Python, JavaScript, HTML, CSS |
| Machine Learning | Pandas, NumPy, Scikit-learn |
| Backend | FastAPI |
| API Server | Uvicorn |
| Model Persistence | Pickle / serialized model |
| Frontend | HTML, CSS, JavaScript |
| Containerization | Docker |

## 📁 Project Structure

```text
student_performance_prediction/
│
├── data/
│   └── student_data.csv
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── models/
│   └── student_performance_model.pkl
│
├── notebooks/
│   └── student_prediction.ipynb
│
├── src/
├── main.py
├── requirements.txt
├── Dockerfile
├── .dockerignore
└── README.md
```

*Note: The structure above is illustrative. Keep the filenames consistent with your actual project.*

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd student_performance_prediction
```

### 2. Create a Virtual Environment

```bash
python -m venv venv
```

Activate it on Windows:

```bash
venv\Scripts\activate
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Start the Backend

```bash
uvicorn main:app --reload
```

The FastAPI server should be available at:

- Application API: http://127.0.0.1:8000
- Interactive API documentation: http://127.0.0.1:8000/docs

### 5. Open the Frontend

Open `frontend/index.html` using VS Code Live Server or your preferred local web server.

Ensure the frontend's API URL matches the running backend and that the backend permits requests from the frontend's origin.

## 🧠 Machine Learning Workflow

1. **Data Collection:** Load the student performance dataset.
2. **Data Preprocessing:** Inspect and prepare features for model training.
3. **Model Training:** Train a suitable classification or regression model based on the target variable.
4. **Model Evaluation:** Evaluate performance using appropriate metrics.
5. **Model Serialization:** Save the trained model for inference.
6. **API Development:** Load the saved model and expose prediction endpoints through FastAPI.
7. **Frontend Integration:** Collect user inputs and display predictions and insights.

## 🐳 Run with Docker

Build the Docker image:

```bash
docker build -t learnora .
```

Run the container:

```bash
docker run -p 8000:8000 learnora
```

Make sure your Dockerfile starts the FastAPI application and that all required model files and dependencies are included.

## 📊 Potential Applications

- Understanding patterns associated with student performance.
- Exploring how academic and behavioral attributes relate to predicted outcomes.
- Supporting data-informed academic planning.
- Demonstrating an end-to-end machine learning deployment workflow.

**Disclaimer:** Predictions are estimates based on the model and its training data. They should not be treated as definitive judgments about a student's ability or future.

## 🚀 Future Improvements

- Add model evaluation metrics and visualizations.
- Improve explainability with feature-importance analysis.
- Add automated tests for API endpoints and preprocessing.
- Integrate experiment tracking and model versioning.
- Deploy the application to a cloud platform.
- Improve accessibility and mobile responsiveness.

## 👩‍💻 Author

**Shreya Bose**



