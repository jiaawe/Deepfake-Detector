from flask import Flask, request, jsonify
from flask_cors import CORS
import os

# Importing deps for image prediction
from tensorflow.keras.preprocessing import image
from PIL import Image
import numpy as np
from tensorflow.keras.models import load_model

app = Flask(__name__, static_folder='./build', static_url_path='/')
CORS(app, resources={
     r"/*": {"origins": "http://localhost:3000"}})


@app.route("/")
def home():
    return {"message": "Test Backend Server"}


@app.route("/upload", methods=['POST'])
def upload():
    print(request.files)
    print(request.form)
    img_path = None

    if 'file' not in request.files:
        print('No file part.')
        # Handle the case for sample image
        if 'filepath' in request.form:
            img_path = f"./static/{request.form['filepath'].split('/')[-1]}"
        else:
            return jsonify({"error": "No file part in the request."}), 400
    else:
        file = request.files['file']
        if file.filename == '':
            print('No file selected.')
            return jsonify({"error": "No file selected."}), 400

        try:
            file.save('uploads/' + file.filename)
            img_path = f"./uploads/{file.filename}"
        except Exception as e:
            print(e)
            return jsonify({"error": str(e)}), 500

    if img_path:
        try:
            # Load the image to predict
            img = image.load_img(img_path, target_size=(224, 224))
            x = image.img_to_array(img)
            x = np.expand_dims(x, axis=0)
            x /= 255

            loaded_model = load_model('./model/cnn_model2.h5')

            # Make the prediction
            prediction = loaded_model.predict(x)
            if 'filepath' not in request.form and os.path.exists(f"./uploads/{file.filename}"):
                os.remove(f"uploads/{file.filename}")
            print(prediction)
            if prediction < 0.5:
                return jsonify({"message": "Human Generated"})
            else:
                return jsonify({"message": "AI Generated"})
        except Exception as e:
            print(e)
            return jsonify({"error": str(e)}), 500
    else:
        return jsonify({"error": "Unexpected error occurred."}), 500


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)
