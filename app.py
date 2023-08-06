from flask import Flask, request, jsonify
from flask_restful import Resource, Api
import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
from tensorflow.keras.applications.resnet50 import preprocess_input
import sys
import os

app = Flask(__name__)
api = Api(app)
port = 5501

if sys.argv.__len__() > 1:
    port = sys.argv[1]
print("Api running on port : {} ".format(port))

# Load the trained CNN model
model = load_model('deepfake.h5')

# Define a function for image preprocessing
def preprocess_image(img):
    img = image.load_img(img, target_size=(224, 224))
    img = image.img_to_array(img)
    img = np.expand_dims(img, axis=0)
    img = preprocess_input(img)
    return img

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get the uploaded image from the request
        uploaded_file = request.files['file']
        
        # Preprocess the uploaded image
        img = preprocess_image(uploaded_file)
        
        # Make prediction using the model
        prediction = model.predict(img)
        prediction_label = 'Positive' if prediction[0][0] > 0.5 else 'Negative'
        
        return jsonify({'prediction': prediction_label})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=port, debug=True)