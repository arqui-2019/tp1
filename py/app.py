from flask import Flask
from time import sleep
app = Flask(__name__)

@app.route("/ping")
def ping():
    return "python pong"

@app.route("/timeout")
def timeout():
    sleep(5)
    return "Ok", 200
    
@app.route("/intensive")
def intensive():
    fact = 1
    for i in range(1,90):
        fact = fact * i
    return "Ok", 200

if __name__ == "__main__":
    app.run()