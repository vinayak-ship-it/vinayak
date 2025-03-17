from flask import Flask, request, send_file
import pyttsx3
import PyPDF2
import os

app = Flask(__name__)

@app.route('/convert', methods=['POST'])
def convert():
    if 'file' not in request.files:
        return "No file uploaded", 400

    file = request.files['file']
    if file.filename == '':
        return "No file selected", 400

    # Save the uploaded PDF file
    pdf_path = "uploaded_file.pdf"
    file.save(pdf_path)

    # Convert PDF to text
    pdf_reader = PyPDF2.PdfFileReader(pdf_path)
    text = ""
    for page_num in range(pdf_reader.numPages):
        text += pdf_reader.getPage(page_num).extract_text()

    # Convert text to MP3
    mp3_path = "output.mp3"
    engine = pyttsx3.init()
    engine.save_to_file(text, mp3_path)
    engine.runAndWait()

    # Return the MP3 file
    return send_file(mp3_path, as_attachment=True)

if __name__ == '__main__':
    app.run(debug=True)
