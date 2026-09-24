from pathlib import Path

from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS

from backend.routes.requests import requests_bp

PROJECT_ROOT = Path(__file__).resolve().parent.parent
FRONTEND_DIR = PROJECT_ROOT / "frontend"

app = Flask(__name__)
CORS(app)

app.register_blueprint(requests_bp)


@app.get("/")
def home():
    return send_from_directory(FRONTEND_DIR, "index.html")


@app.get("/api/health")
def health():
    return jsonify(
        {
            "status": "ok",
            "service": "Aapda Saathi",
            "mode": "demo",
        }
    )


@app.get("/api/hazards")
def hazards():
    return jsonify(
        {
            "hazards": [
                {"id": "flood", "name": "Flood", "status": "monitor"},
                {"id": "landslide", "name": "Landslide", "status": "monitor"},
                {"id": "cyclone", "name": "Cyclone / Storm", "status": "monitor"},
                {"id": "earthquake", "name": "Earthquake", "status": "preparedness"},
                {"id": "heatwave", "name": "Heatwave", "status": "monitor"},
                {"id": "lightning", "name": "Lightning", "status": "monitor"},
            ]
        }
    )


@app.get("/css/<path:filename>")
def css(filename):
    return send_from_directory(FRONTEND_DIR / "css", filename)


@app.get("/js/<path:filename>")
def js(filename):
    return send_from_directory(FRONTEND_DIR / "js", filename)


if __name__ == "__main__":
    app.run(debug=True)
