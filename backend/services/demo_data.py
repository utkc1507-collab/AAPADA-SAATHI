from datetime import datetime, timezone


HAZARDS = [
    {
        "id": "flood",
        "name": "Flood",
        "level": "high",
        "status": "monitoring",
        "signal": "Water level rising",
        "description": (
            "Simulated flood conditions. Review the situation and "
            "report if assistance is needed."
        ),
    },
    {
        "id": "landslide",
        "name": "Landslide",
        "level": "medium",
        "status": "monitoring",
        "signal": "Terrain risk elevated",
        "description": (
            "Simulated rainfall and terrain-related landslide risk."
        ),
    },
    {
        "id": "cyclone",
        "name": "Cyclone / Storm",
        "level": "high",
        "status": "prepared",
        "signal": "Wind risk elevated",
        "description": (
            "Simulated storm conditions for demonstration purposes."
        ),
    },
    {
        "id": "earthquake",
        "name": "Earthquake",
        "level": "medium",
        "status": "prepared",
        "signal": "Preparedness mode",
        "description": (
            "Simulated earthquake preparedness information. "
            "No live seismic feed is connected."
        ),
    },
    {
        "id": "heatwave",
        "name": "Heatwave",
        "level": "high",
        "status": "monitoring",
        "signal": "Heat level elevated",
        "description": (
            "Simulated high-temperature conditions."
        ),
    },
    {
        "id": "lightning",
        "name": "Lightning",
        "level": "medium",
        "status": "monitoring",
        "signal": "Weather risk elevated",
        "description": (
            "Simulated lightning risk for demonstration purposes."
        ),
    },
]


SAFE_PLACES = [
    {
        "id": "safe-01",
        "name": "Community Relief Centre",
        "type": "Relief centre",
        "distance": "0.8 km",
        "capacity": "Available",
    },
    {
        "id": "safe-02",
        "name": "District School Shelter",
        "type": "Shelter",
        "distance": "1.4 km",
        "capacity": "Available",
    },
    {
        "id": "safe-03",
        "name": "Community Hall",
        "type": "Emergency shelter",
        "distance": "2.1 km",
        "capacity": "Limited",
    },
]


def demo_status():
    return {
        "mode": "demo",
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "system": "operational",
        "message": "All simulated demo services are available.",
    }
