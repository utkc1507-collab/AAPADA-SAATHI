from backend.services.triage import classify_request


def test_trapped_request_is_critical():
    result = classify_request("We are trapped and need help")
    assert result.priority == "critical"


def test_injured_request_is_urgent():
    result = classify_request("My father is injured and we need evacuation")
    assert result.priority == "urgent"


def test_general_request_is_routine():
    result = classify_request("Please tell me where the nearest relief camp is")
    assert result.priority == "routine"
