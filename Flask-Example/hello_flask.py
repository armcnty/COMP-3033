from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello() -> str:
    return "<h1>Hello World</h1>"

@app.route("/blog")
def blog() -> str:
    return "Here is my blog page!"

if __name__ == "__main__":
    app.run()

