"""Web API wrapper for the AI Attending Physician workflow."""

from __future__ import annotations

import json
import os
from copy import deepcopy
from dataclasses import asdict
from typing import Any, Dict, Optional

from .workflow import Agent4_Orchestrator, MetricStatus, ProbingQuestion, StudentResponse


class AttendingPhysicianAPI:
    """
    API wrapper for the attending physician workflow
    Returns JSON responses suitable for web chat UI integration
    """

    def __init__(self, api_key: Optional[str] = None):
        """
        Initialize the API

        Args:
            api_key: Anthropic API key. If not provided, reads from ANTHROPIC_API_KEY env var
        """
        self.api_key = api_key or os.environ.get("ANTHROPIC_API_KEY")
        if not self.api_key:
            raise ValueError("ANTHROPIC_API_KEY environment variable not set and no API key provided")

        # Initialize orchestrator with JSON output format
        self.orchestrator = Agent4_Orchestrator(self.api_key, output_format="json")

    # --------------------------------------------------------------------- #
    # Session lifecycle helpers
    # --------------------------------------------------------------------- #
    def load_state(self, state: Dict[str, Any]) -> None:
        """Load a previously serialized session state."""

        if not state:
            return

        # Ensure conversation history is rehydrated into dataclasses
        history = []
        for turn in state.get("conversation_history", []):
            question_obj = None
            if turn.get("question_obj"):
                question_obj = ProbingQuestion(**turn["question_obj"])

            evaluation_obj = None
            if turn.get("evaluation"):
                evaluation_payload = turn["evaluation"]
                status_value = evaluation_payload.get("status")
                try:
                    status = MetricStatus(status_value)
                except ValueError:
                    status = MetricStatus.MISSING
                evaluation_obj = StudentResponse(
                    metric=evaluation_payload.get("metric", ""),
                    status=status,
                    strengths=evaluation_payload.get("strengths", []),
                    weaknesses=evaluation_payload.get("weaknesses", []),
                    next_action=evaluation_payload.get("next_action", ""),
                    feedback=evaluation_payload.get("feedback", ""),
                )

            history.append(
                {
                    "question": turn.get("question"),
                    "question_obj": question_obj,
                    "answer": turn.get("answer"),
                    "evaluation": evaluation_obj,
                }
            )

        hydrated_state = deepcopy(state)
        hydrated_state["conversation_history"] = history
        self.orchestrator.session_state = hydrated_state

    def export_state(self) -> Dict[str, Any]:
        """Return a JSON-serializable snapshot of the orchestrator state."""

        session_state = deepcopy(self.orchestrator.session_state)
        serialized_history = []
        for turn in session_state.get("conversation_history", []):
            question_obj = turn.get("question_obj")
            evaluation_obj = turn.get("evaluation")

            serialized_history.append(
                {
                    "question": turn.get("question"),
                    "question_obj": asdict(question_obj) if question_obj else None,
                    "answer": turn.get("answer"),
                    "evaluation": self._serialize_evaluation(evaluation_obj),
                }
            )

        session_state["conversation_history"] = serialized_history
        return session_state

    @staticmethod
    def _serialize_evaluation(evaluation: Optional[StudentResponse]) -> Optional[Dict[str, Any]]:
        """Convert a StudentResponse dataclass into plain JSON."""

        if not evaluation:
            return None

        payload = asdict(evaluation)
        payload["status"] = evaluation.status.value
        return payload

    def start_session(self, student_presentation: str) -> Dict[str, Any]:
        """
        Start a new evaluation session with student's initial presentation

        Args:
            student_presentation: The student's case presentation text

        Returns:
            JSON response containing:
            - type: "initial_evaluation"
            - message: Introductory message
            - questions: List of probing questions
            - metrics_summary: Summary of met/partial/missing metrics
            - metrics_status: Detailed status of all metrics
            - interaction_count: Current interaction count
        """
        try:
            response = self.orchestrator.start_session(student_presentation)
            return {
                "success": True,
                "data": response
            }
        except Exception as e:
            return {
                "success": False,
                "error": str(e),
                "error_type": type(e).__name__
            }

    def process_response(self, student_answer: str) -> Dict[str, Any]:
        """
        Process student's answer to a question

        Args:
            student_answer: The student's answer text

        Returns:
            JSON response containing either:
            - Response evaluation with next questions (if session continues)
            - Session completion message (if all metrics met or timeout)
            - Error message (if something went wrong)
        """
        try:
            response = self.orchestrator.process_student_response(student_answer)
            return {
                "success": True,
                "data": response
            }
        except Exception as e:
            return {
                "success": False,
                "error": str(e),
                "error_type": type(e).__name__
            }

    def get_session_summary(self) -> Dict[str, Any]:
        """
        Get complete session summary

        Returns:
            JSON response containing:
            - total_interactions: Number of interactions
            - metrics_status: Status of all metrics
            - conversation_history: Full conversation history
        """
        try:
            summary = self.orchestrator.get_session_summary()
            return {
                "success": True,
                "data": summary
            }
        except Exception as e:
            return {
                "success": False,
                "error": str(e),
                "error_type": type(e).__name__
            }

    def get_current_state(self) -> Dict[str, Any]:
        """
        Get current session state without full history

        Returns:
            JSON response with current metrics status and interaction count
        """
        try:
            return {
                "success": True,
                "data": {
                    "metrics_status": self.orchestrator.session_state["metrics_status"],
                    "interaction_count": self.orchestrator.session_state["interaction_count"],
                    "max_interactions": self.orchestrator.session_state["max_interactions"]
                }
            }
        except Exception as e:
            return {
                "success": False,
                "error": str(e),
                "error_type": type(e).__name__
            }


# Example usage for testing
if __name__ == "__main__":
    # Initialize API
    api = AttendingPhysicianAPI()

    # Sample student presentation
    sample_presentation = """
    This is a 65-year-old male presenting with chest pain.

    The patient reports substernal chest pressure that started 2 hours ago while watching TV.
    He describes it as a heavy pressure, 7/10 severity. The pain radiates to his left arm.
    He also reports some shortness of breath and diaphoresis.

    Past medical history includes hypertension and hyperlipidemia.
    He takes lisinopril and atorvastatin. He smokes 1 pack per day for 30 years.
    Family history is significant for father with MI at age 60.

    On exam: BP 150/90, HR 95, RR 20, O2 sat 94% on RA.
    He appears diaphoretic and anxious.
    Heart sounds are regular without murmurs.
    Lungs are clear bilaterally.

    I think this could be acute coronary syndrome given his risk factors and presentation.
    I would like to get an EKG, troponin, and chest x-ray.
    """

    print("=" * 80)
    print("WEB API TEST - JSON Output")
    print("=" * 80)

    # Start session
    print("\n1. Starting session...")
    initial_response = api.start_session(sample_presentation)
    print(json.dumps(initial_response, indent=2))

    print("\n" + "=" * 80)
    print("\n2. Getting current state...")
    state = api.get_current_state()
    print(json.dumps(state, indent=2))

    print("\n" + "=" * 80)
    print("\nAPI is ready for web integration!")
    print("\nTo integrate with your web app:")
    print("1. Import: from web_api import AttendingPhysicianAPI")
    print("2. Initialize: api = AttendingPhysicianAPI()")
    print("3. Start session: response = api.start_session(presentation)")
    print("4. Process answers: response = api.process_response(answer)")
    print("5. All responses are JSON-formatted dictionaries")
