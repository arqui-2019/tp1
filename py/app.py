from flask import Flask
from time import sleep, time
app = Flask(__name__)

@app.route("/ping")
def ping():
    return "python - pong", 200

@app.route("/timeout")
def timeout():
    sleep(5)
    return "python - timeout", 200
    
@app.route("/intensive")
def intensive():
    startTime = time() # en segundos, flotante
    while time() - startTime < 5.0: pass
    return "python - intensive", 200

if __name__ == "__main__":
    app.run()