from flask import Blueprint, jsonify, request

from backend.services.triage import classify_request

requests_bp = Blueprint("requests", __name__)


@requests_bp.post("/api/requests")
def create_request():
    payload = request.get_json(silent=True) or {}
    message = str(payload.get("message", "")).strip()

    if not message:
        return jsonify({"error": "message is required"}), 400

    triage = classify_request(message)

    return jsonify(
        {
            "status": "accepted",
            "mode": "demo",
            "request": {
                "message": message,
                "priority": triage.priority,
                "reason": triage.reason,
            },
        }
    ), 201
