from flask import Flask, render_template, request
from tensorflow.keras.models import load_model
from tensorflow.keras.utils import load_img, img_to_array
from keras.applications.vgg16 import preprocess_input
from keras.applications.vgg16 import decode_predictions
#from keras.applications.vgg16 import VGG16

app = Flask(__name__)
model = load_model('deepfake.h5')

@app.route('/', methods=['GET'])
def hello_word():
    return render_template('index.html')

@app.route('/', methods=['POST'])
def predict():
    imagefile= request.files['imagefile']
    image_path = "./images/" + imagefile.filename
    imagefile.save(image_path)

    image = load_img(image_path, target_size=(224, 224))
    image = img_to_array(image)
    image = image/225
    image = image.reshape((1, 224, 224, 3))
    #image = preprocess_input(image)
    print(image)
    yhat = model.predict(image)
    print(yhat[0][0])
    label = yhat
    # label = decode_predictions(yhat)
    label = label[0][0]

    if label > 0.5:
        classification = 'negative: ' + str(label) 
    else:
        classification = 'positive: ' + str(label)

    return render_template('index.html', prediction=classification)


if __name__ == '__main__':
    app.run(port=3000, debug=True)
