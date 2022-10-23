from flask import Flask, jsonify, render_template
import os

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/engel-vitale')
def engel():
    return render_template('engel.html')

@app.route('/wisconsin-yoder')
def wisconsin():
    return render_template('wisconsin.html')

@app.route('/tinker-desmoines')
def tinker():
    return render_template('tinker.html')

@app.route('/schenck-us')
def schenck():
    return render_template('schenck.html')

@app.route('/nytc-us')
def nytc():
    return render_template('nytc.html')

@app.route('/mcdonald-chicago')
def mcdonald():
    return render_template('mcdonald.html')

@app.route('/gideon-wainwright')
def gideon():
    return render_template('gideon.html')

@app.route('/roe-wade')
def roe():
    return render_template('roe.html')

@app.route('/brown-board')
def brown():
    return render_template('brown.html')

if __name__ == '__main__':
    app.run(debug=True, port=os.getenv("PORT", default=5000))
