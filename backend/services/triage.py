from dataclasses import dataclass


@dataclass(frozen=True)
class TriageResult:
    priority: str
    reason: str


CRITICAL_KEYWORDS = (
    "trapped",
    "drowning",
    "unconscious",
    "bleeding",
    "collapsed",
    "missing child",
    "can't breathe",
    "cannot breathe",
)

URGENT_KEYWORDS = (
    "stranded",
    "injured",
    "pregnant",
    "elderly",
    "child",
    "water inside",
    "evacuate",
    "evacuation",
)


def classify_request(message: str) -> TriageResult:
    normalized = " ".join(message.lower().split())

    if any(keyword in normalized for keyword in CRITICAL_KEYWORDS):
        return TriageResult(
            priority="critical",
            reason="Message contains a critical safety indicator.",
        )

    if any(keyword in normalized for keyword in URGENT_KEYWORDS):
        return TriageResult(
            priority="urgent",
            reason="Message contains an urgent assistance indicator.",
        )

    return TriageResult(
        priority="routine",
        reason="No critical or urgent safety indicator detected.",
    )
