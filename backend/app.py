from flask import Flask, request, jsonify
import joblib
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes


# Load the trained model using joblib
model = joblib.load("pcos2.joblib")


@app.route("/")
def home():
    return "Welcome to the PCOS Prediction API!"


@app.route("/predict", methods=["POST"])
def predict():
    # Get the data from the POST request
    data = request.json
    print(data)


    # Extract the features from the JSON data
    I_beta_HCG = float(data["I_beta_HCG"])
    II_beta_HCG = float(data["II_beta_HCG"])
    AMH = float(data["AMH"])

    # Create an input array for the model
    input_data = np.array([[I_beta_HCG, II_beta_HCG, AMH]])

    # Make a prediction
    prediction = model.predict(input_data)

    # Return the result as a JSON response
    result = {
        "prediction": int(prediction[0]),  # Assuming prediction is binary (0 or 1)
        "PCOS": "Yes, The patient has PCOS" if prediction[0] == 1 else "No symptoms of PCOS",
    }

    return jsonify(result)


if __name__ == "_main_":
    app.run(debug=True)
