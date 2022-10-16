from flask import Flask
from pdf_to_json import *
from flask import Flask, request, json
from waitress import serve

app = Flask(__name__)

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() == "pdf"

@app.route('/', methods=['POST','GET'])
def index():
    return app.response_class(
                        response=json.dumps({"message": "Hello! This is a PDF to JSON converter API, from Minha GRADE UFRB. "+
                        "Do POST to /convert passing a PDF file to receive the content information extracted."}),
                        status=200,
                        mimetype='application/json'
                    )

@app.route('/convert', methods=['POST'])
def upload_file():

    # check if the post request has the file part
    if 'file' not in request.files:

        return app.response_class(
                    response=json.dumps({"message": "File not received."}),
                    status=406,
                    mimetype='application/json'
                )

    file = request.files['file']
    # If the user does not select a file, the browser submits an
    # empty file without a filename.
    print(file)
    if file.filename == '':
        return app.response_class(
                    response=json.dumps({"message": "Not selected file."}),
                    status=406,
                    mimetype='application/json'
                )

    if file and allowed_file(file.filename):
        content_information = pdf_to_json(file)

        return app.response_class(
            response=json.dumps(content_information),
            status=200,
            mimetype='application/json'
        )

    return app.response_class(
                response=json.dumps({"message": "File not allowed"}),
                status=406,
                mimetype='application/json'
            )

if __name__ == "__main__":
    #app.run(host="localhost", port=8000) only to test
    serve(app, listen='*:8000') #on production environment
