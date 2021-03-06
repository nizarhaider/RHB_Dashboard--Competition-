from flask import Flask
from flask import render_template
from sys import exit
from decouple import config

app = Flask(__name__)

@app.route("/")
def home():
    return render_template('home/index.html', segment='index')

@app.route("/model_performance")
def model():
    return render_template('home/model_performance.html', segment='index')

@app.route("/bank_dashboard")
def bank():
    return render_template('home/bank_dashboard.html', segment='index')
if __name__ == "__main__":
    app.run()
