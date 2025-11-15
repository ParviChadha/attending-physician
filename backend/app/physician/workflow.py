"""
AI Attending Physician Agentic Workflow
Evaluates medical student case presentations based on 9 key metrics
"""

import anthropic
import json
from typing import Dict, List, Optional
from dataclasses import dataclass, asdict
from enum import Enum


class MetricStatus(Enum):
    MET = "met"
    PARTIAL = "partial"
    MISSING = "missing"
    MISCONCEPTION = "misconception"


@dataclass
class MetricEvaluation:
    metric_id: str
    metric_name: str
    status: MetricStatus
    confidence: float
    evidence: str
    gaps: Optional[str] = None


@dataclass
class ProbingQuestion:
    metric_target: str
    question: str
    follow_up_hint: str
    acceptable_criteria: str


@dataclass
class StudentResponse:
    metric: str
    status: MetricStatus
    strengths: List[str]
    weaknesses: List[str]
    next_action: str  # "met", "probe_deeper", "provide_hint"
    feedback: str


class Agent0_QuestionExtractor:
    """
    Extracts medical knowledge questions from student presentations.
    These questions are used to query a RAG system for contextual information.
    """

    def __init__(self, api_key: str):
        self.client = anthropic.Anthropic(api_key=api_key)

    def extract_questions(self, student_presentation: str) -> List[str]:
        """
        Extract medical knowledge questions from the student presentation.
        """

        prompt = f"""You are a medical knowledge extraction system. Analyze the following student case presentation and generate specific questions about medical information, conditions, diagnoses, treatments, and clinical knowledge mentioned or implied in the presentation.

Student's case presentation:
---
{student_presentation}
---

Generate 5-10 targeted questions that would help retrieve relevant medical knowledge about:
- Conditions and diseases mentioned
- Symptoms and their clinical significance
- Diagnostic tests and their interpretation
- Risk factors and their implications
- Treatment approaches
- Differential diagnoses considerations

CRITICAL: Return ONLY a valid JSON object without any markdown formatting.

Format:
{{
  "questions": [
    "What are the typical EKG findings in acute coronary syndrome?",
    "What is the sensitivity and specificity of troponin for diagnosing MI?",
    "How does smoking affect cardiovascular risk?"
  ]
}}"""

        response = self.client.messages.create(
            model="claude-sonnet-4-20250514",
            max_tokens=2000,
            messages=[{"role": "user", "content": prompt}]
        )

        response_text = response.content[0].text.strip()
        response_text = response_text.replace('```json', '').replace('```', '').strip()
        result = json.loads(response_text)

        return result["questions"]


class RAGSystemPlaceholder:
    """
    Placeholder for RAG (Retrieval-Augmented Generation) system.
    This will be replaced with actual RAG implementation later.
    """

    def query(self, questions: List[str]) -> Dict[str, str]:
        """Return empty context until a real RAG system is supplied."""
        return {question: "" for question in questions}

    def get_formatted_context(self, rag_results: Dict[str, str]) -> str:
        """Format RAG results into a readable context string for the evaluator."""
        if not rag_results or all(not v for v in rag_results.values()):
            return ""

        formatted_parts = []
        for question, context in rag_results.items():
            if context:
                formatted_parts.append(f"Q: {question}\nContext: {context}")

        return "\n\n".join(formatted_parts)


class Agent1_MetricsEvaluator:
    """
    Evaluates student presentation against the 9 key metrics
    """
    
    METRICS_RUBRIC = """
    EVALUATION METRICS FOR MEDICAL CASE PRESENTATIONS:

    1. FOCUSED, RELEVANT INFORMATION SELECTION (MOST IMPORTANT)
       - Includes only details that support their diagnosis
       - Omits extraneous information that doesn't impact reasoning
       - Shows diagnostic thinking, not passive reporting
    
    2. CLEAR STATEMENT OF WORKING DIAGNOSIS
       - States hypothesis early in presentation
       - Justifies with structured data
       - Shows confidence and synthesis ability
    
    3. LOGICAL ORGANIZATION + CLINICAL REASONING
       - Explains how symptoms → reasoning → diagnosis connect
       - Uses "why" statements to connect findings to hypotheses
       - Demonstrates proper clinical reasoning flow
    
    4. INCLUSION OF PRIORITIZED DIFFERENTIAL DIAGNOSIS
       - Provides alternative diagnoses considered
       - Prioritizes differentials logically
       - Avoids unfocused long lists
    
    5. CONCISENESS + EFFICIENT DELIVERY
       - Presentation is short (few minutes)
       - Well-structured and purposeful
       - No wandering or unfocused content
    
    6. PRIORITIZED, RATIONAL DIAGNOSTIC WORKUP PLAN
       - Identifies which initial tests are needed first
       - Explains why tests matter and how they change management
       - Shows understanding of test prioritization
    
    7. PRIORITIZED MANAGEMENT PLAN AND DISPOSITION
       - Management is ordered and justified
       - Avoids unnecessary tests
       - Links decisions back to diagnosis
    
    8. EVIDENCE OF HYPOTHESIS-DRIVEN INQUIRY
       - Shows clear working hypothesis
       - Knows which information matters
       - Each piece of plan flows from hypothesis
    
    9. ABILITY TO SYNTHESIZE (NOT JUST REPORT)
       - Provides summary statements
       - Distills key clues
       - Shows clear pivot from data → meaning
    """
    
    def __init__(self, api_key: str):
        self.client = anthropic.Anthropic(api_key=api_key)
    
    def evaluate(self, student_presentation: str, rag_context: str = "") -> Dict:
        """
        Evaluates the student presentation and returns structured metrics status
        """

        context_section = ""
        if rag_context:
            context_section = f"""
ADDITIONAL MEDICAL KNOWLEDGE CONTEXT (from knowledge base):
---
{rag_context}
---

Use this context to better evaluate the student's presentation accuracy and completeness.
"""

        prompt = f"""You are an expert medical attending physician evaluating a student's case presentation.

{self.METRICS_RUBRIC}
{context_section}

Student's case presentation:
---
{student_presentation}
---

Evaluate this presentation against ALL 9 metrics above. For each metric, determine:
- status: "met", "partial", "missing", or "misconception"
- confidence: 0.0 to 1.0
- evidence: What in the presentation supports this assessment
- gaps: What is missing (if status is partial or missing)

CRITICAL: Return ONLY a valid JSON object. Do not include any markdown formatting or code blocks.

Return format:
{{
  "evaluations": [
    {{
      "metric_id": "1",
      "metric_name": "Focused, Relevant Information Selection",
      "status": "met|partial|missing|misconception",
      "confidence": 0.0-1.0,
      "evidence": "specific quote or observation",
      "gaps": "what is missing (if applicable)"
    }}
  ],
  "overall_assessment": "brief summary",
  "priority_gaps": ["list of most critical missing metrics"]
}}"""

        response = self.client.messages.create(
            model="claude-sonnet-4-20250514",
            max_tokens=4000,
            messages=[{"role": "user", "content": prompt}]
        )
        
        response_text = response.content[0].text.strip()
        # Remove any markdown formatting if present
        response_text = response_text.replace('```json', '').replace('```', '').strip()
        
        return json.loads(response_text)


class Agent2_QuestionGenerator:
    """
    Generates targeted Socratic questions for missing/partial metrics
    """
    
    def __init__(self, api_key: str):
        self.client = anthropic.Anthropic(api_key=api_key)
    
    def generate_questions(
        self, 
        missing_metrics: List[Dict],
        case_context: str,
        conversation_history: List[Dict]
    ) -> List[ProbingQuestion]:
        """
        Generate probing questions targeting specific gaps
        """
        
        # Focus on top 2-3 most critical gaps to avoid overwhelming
        priority_metrics = missing_metrics[:3]
        
        history_text = "\n".join([
            f"Q: {turn['question']}\nA: {turn['answer']}" 
            for turn in conversation_history[-3:]  # Last 3 turns for context
        ]) if conversation_history else "No prior questions yet."
        
        prompt = f"""You are a medical attending physician using the Socratic method to help a student improve their case presentation.

Missing/Partial Metrics to Address:
{json.dumps(priority_metrics, indent=2)}

Case Context:
{case_context}

Recent Conversation:
{history_text}

Generate 1-2 targeted Socratic questions that will help the student demonstrate understanding of the missing metrics.

Guidelines:
- Ask open-ended questions requiring clinical reasoning
- Avoid yes/no questions
- Don't repeat patterns from prior questions
- Questions should guide student to discover gaps themselves
- Be specific to the case details

CRITICAL: Return ONLY a valid JSON object without any markdown formatting.

Format:
{{
  "questions": [
    {{
      "metric_target": "metric name",
      "question": "the main question to ask",
      "follow_up_hint": "hint to provide if student is stuck",
      "acceptable_criteria": "what a good answer should include"
    }}
  ]
}}"""

        response = self.client.messages.create(
            model="claude-sonnet-4-20250514",
            max_tokens=2000,
            messages=[{"role": "user", "content": prompt}]
        )
        
        response_text = response.content[0].text.strip()
        response_text = response_text.replace('```json', '').replace('```', '').strip()
        result = json.loads(response_text)
        
        return [
            ProbingQuestion(
                metric_target=q["metric_target"],
                question=q["question"],
                follow_up_hint=q["follow_up_hint"],
                acceptable_criteria=q["acceptable_criteria"]
            )
            for q in result["questions"]
        ]


class Agent3_UnderstandingEvaluator:
    """
    Evaluates student responses to probing questions
    """
    
    def __init__(self, api_key: str):
        self.client = anthropic.Anthropic(api_key=api_key)
    
    def evaluate_response(
        self,
        question: ProbingQuestion,
        student_answer: str,
        original_presentation: str
    ) -> StudentResponse:
        """
        Evaluate if student's answer demonstrates understanding
        """
        
        prompt = f"""You are evaluating a medical student's response to a probing question.

Target Metric: {question.metric_target}

Question Asked: {question.question}

Acceptable Answer Criteria: {question.acceptable_criteria}

Student's Answer:
---
{student_answer}
---

Original Case Presentation Context:
---
{original_presentation[:500]}...
---

Evaluate the student's response:
1. Did they demonstrate understanding of the metric?
2. What did they do well?
3. What gaps remain?
4. Should we move on, probe deeper, or provide a hint?

CRITICAL: Return ONLY a valid JSON object without markdown formatting.

Format:
{{
  "metric": "metric name",
  "status": "met|improved|insufficient|misconception_detected",
  "strengths": ["list specific good points"],
  "weaknesses": ["list remaining gaps"],
  "next_action": "met|probe_deeper|provide_hint",
  "feedback": "constructive feedback to give student"
}}"""

        response = self.client.messages.create(
            model="claude-sonnet-4-20250514",
            max_tokens=2000,
            messages=[{"role": "user", "content": prompt}]
        )
        
        response_text = response.content[0].text.strip()
        response_text = response_text.replace('```json', '').replace('```', '').strip()
        result = json.loads(response_text)
        
        return StudentResponse(
            metric=result["metric"],
            status=MetricStatus(result["status"]) if result["status"] in [s.value for s in MetricStatus] else MetricStatus.MISSING,
            strengths=result["strengths"],
            weaknesses=result["weaknesses"],
            next_action=result["next_action"],
            feedback=result["feedback"]
        )


class Agent4_Orchestrator:
    """
    Main orchestrator that manages the conversation flow
    """

    def __init__(self, api_key: str, output_format: str = "json", rag_system: Optional[object] = None):
        """
        Initialize orchestrator

        Args:
            api_key: Anthropic API key
            output_format: "json" for structured JSON output, "terminal" for formatted text
        """
        self.api_key = api_key
        self.output_format = output_format  # "json" or "terminal"
        self.evaluator = Agent1_MetricsEvaluator(api_key)
        self.question_extractor = Agent0_QuestionExtractor(api_key)
        self.question_generator = Agent2_QuestionGenerator(api_key)
        self.understanding_evaluator = Agent3_UnderstandingEvaluator(api_key)
        self.rag_system = rag_system or RAGSystemPlaceholder()

        self.session_state = {
            "original_presentation": "",
            "initial_evaluation": None,
            "conversation_history": [],
            "metrics_status": {},
            "interaction_count": 0,
            "max_interactions": 15,
            "medical_questions": [],
            "rag_context": "",
            "rag_context_available": False,
            "rag_results": {}
        }
    
    def start_session(self, student_presentation: str):
        """
        Initialize session with student's initial presentation

        Returns:
            Dict if output_format="json", str if output_format="terminal"
        """
        self.session_state["original_presentation"] = student_presentation
        self.session_state["interaction_count"] = 0
        self.session_state["conversation_history"] = []
        self.session_state["metrics_status"] = {}
        self.session_state["medical_questions"] = []
        self.session_state["rag_context"] = ""
        self.session_state["rag_results"] = {}
        self.session_state["rag_context_available"] = False

        medical_questions: List[str] = []
        try:
            medical_questions = self.question_extractor.extract_questions(student_presentation)
        except Exception:
            medical_questions = []
        self.session_state["medical_questions"] = medical_questions

        rag_context = ""
        rag_results: Dict[str, str] = {}
        if self.rag_system and medical_questions:
            try:
                rag_results = self.rag_system.query(medical_questions)
                rag_context = self.rag_system.get_formatted_context(rag_results)
            except Exception:
                rag_results = {}
                rag_context = ""
        self.session_state["rag_results"] = rag_results
        self.session_state["rag_context"] = rag_context
        self.session_state["rag_context_available"] = bool(rag_context.strip())

        if self.output_format == "terminal":
            print("🔍 Evaluating initial presentation...")

        evaluation = self.evaluator.evaluate(student_presentation, rag_context=rag_context)
        self.session_state["initial_evaluation"] = evaluation

        # Build metrics status tracking
        for eval_item in evaluation["evaluations"]:
            metric_id = eval_item["metric_id"]
            self.session_state["metrics_status"][metric_id] = {
                "name": eval_item["metric_name"],
                "status": eval_item["status"],
                "confidence": eval_item["confidence"]
            }

        # Categorize metrics
        met_metrics = []
        partial_metrics = []
        missing_metrics = []

        for eval_item in evaluation["evaluations"]:
            if eval_item["status"] == "met":
                met_metrics.append(eval_item['metric_name'])
            elif eval_item["status"] == "partial":
                partial_metrics.append(eval_item['metric_name'])
            else:
                missing_metrics.append(eval_item['metric_name'])

        # Terminal output only
        if self.output_format == "terminal":
            print("\n" + "="*80)
            print("📊 INITIAL METRICS EVALUATION")
            print("="*80)

            for eval_item in evaluation["evaluations"]:
                status_emoji = {
                    "met": "✅",
                    "partial": "⚠️",
                    "missing": "❌",
                    "misconception": "🔴"
                }.get(eval_item["status"], "❓")

                print(f"\n{status_emoji} Metric {eval_item['metric_id']}: {eval_item['metric_name']}")
                print(f"   Status: {eval_item['status'].upper()}")
                print(f"   Confidence: {eval_item['confidence']:.2f}")
                print(f"   Evidence: {eval_item['evidence'][:150]}...")
                if eval_item.get('gaps'):
                    print(f"   Gaps: {eval_item['gaps'][:150]}...")

            print("\n" + "="*80)
            print(f"📈 SUMMARY: {len(met_metrics)} Met | {len(partial_metrics)} Partial | {len(missing_metrics)} Missing")
            print("="*80 + "\n")

        # Check if any metrics are missing/partial
        gaps = [
            eval_item for eval_item in evaluation["evaluations"]
            if eval_item["status"] in ["missing", "partial"]
        ]

        if not gaps:
            return self._generate_completion_message()

        # Generate first questions
        if self.output_format == "terminal":
            print("❓ Generating initial probing questions...")

        questions = self.question_generator.generate_questions(
            missing_metrics=gaps,
            case_context=student_presentation,
            conversation_history=[]
        )

        # Terminal output only
        if self.output_format == "terminal":
            print("\n" + "-"*80)
            print("🎯 GENERATED QUESTIONS")
            print("-"*80)
            for i, q in enumerate(questions, 1):
                print(f"\nQuestion {i}:")
                print(f"  Target Metric: {q.metric_target}")
                print(f"  Question: {q.question}")
                print(f"  Acceptable Criteria: {q.acceptable_criteria[:100]}...")
            print("-"*80 + "\n")

        # Format questions for student
        return self._format_questions(questions, met_metrics, partial_metrics, missing_metrics)
    
    def process_student_response(self, student_answer: str):
        """
        Process student's answer and determine next step

        Returns:
            Dict if output_format="json", str if output_format="terminal"
        """
        self.session_state["interaction_count"] += 1

        if self.session_state["interaction_count"] >= self.session_state["max_interactions"]:
            return self._generate_timeout_message()

        # Get the last question asked
        if not self.session_state["conversation_history"]:
            error_msg = "Error: No question was asked yet."
            if self.output_format == "json":
                return {"type": "error", "message": error_msg}
            return error_msg

        last_question = self.session_state["conversation_history"][-1]["question_obj"]

        # Evaluate the response
        if self.output_format == "terminal":
            print(f"\n📊 Evaluating response to: {last_question.metric_target}...")

        evaluation = self.understanding_evaluator.evaluate_response(
            question=last_question,
            student_answer=student_answer,
            original_presentation=self.session_state["original_presentation"]
        )

        # Terminal output only
        if self.output_format == "terminal":
            print("\n" + "-"*80)
            print("🔍 RESPONSE EVALUATION")
            print("-"*80)
            print(f"Metric: {evaluation.metric}")
            print(f"Status: {evaluation.status.value.upper()}")
            print(f"Next Action: {evaluation.next_action}")
            if evaluation.strengths:
                print(f"✅ Strengths: {', '.join(evaluation.strengths)}")
            if evaluation.weaknesses:
                print(f"⚠️ Weaknesses: {', '.join(evaluation.weaknesses)}")
            print("-"*80 + "\n")

        # Update conversation history
        self.session_state["conversation_history"][-1]["answer"] = student_answer
        self.session_state["conversation_history"][-1]["evaluation"] = evaluation

        # Update metrics status if improved
        metric_updated = None
        if evaluation.status in [MetricStatus.MET, MetricStatus.PARTIAL]:
            # Find and update the metric
            for metric_id, metric_info in self.session_state["metrics_status"].items():
                if last_question.metric_target.lower() in metric_info["name"].lower():
                    old_status = metric_info["status"]
                    if evaluation.status == MetricStatus.MET:
                        metric_info["status"] = "met"
                        metric_updated = {"metric": metric_info['name'], "old_status": old_status, "new_status": "met"}
                        if self.output_format == "terminal":
                            print(f"✨ Metric Updated: '{metric_info['name']}' → MET ✅")
                    elif evaluation.status == MetricStatus.PARTIAL:
                        metric_info["status"] = "partial"
                        metric_updated = {"metric": metric_info['name'], "old_status": old_status, "new_status": "partial"}
                        if self.output_format == "terminal":
                            print(f"📈 Metric Updated: '{metric_info['name']}' → PARTIAL ⚠️")
                    break

        # Count metrics
        met_count = 0
        partial_count = 0
        missing_count = 0

        for metric_id, metric_info in self.session_state["metrics_status"].items():
            if metric_info["status"] == "met":
                met_count += 1
            elif metric_info["status"] == "partial":
                partial_count += 1
            else:
                missing_count += 1

        # Terminal output only
        if self.output_format == "terminal":
            print("\n" + "="*80)
            print("📊 CURRENT METRICS STATUS")
            print("="*80)

            for metric_id, metric_info in self.session_state["metrics_status"].items():
                status_emoji = {
                    "met": "✅",
                    "partial": "⚠️",
                    "missing": "❌",
                    "misconception": "🔴"
                }.get(metric_info["status"], "❓")

                print(f"{status_emoji} [{metric_id}] {metric_info['name']}: {metric_info['status'].upper()}")

            print("="*80)
            print(f"📈 PROGRESS: {met_count} Met | {partial_count} Partial | {missing_count} Missing")
            print("="*80 + "\n")

        # Check if all metrics are now met
        remaining_gaps = [
            {"metric_id": mid, **minfo}
            for mid, minfo in self.session_state["metrics_status"].items()
            if minfo["status"] in ["missing", "partial"]
        ]

        if not remaining_gaps:
            return self._generate_completion_message(met_count, partial_count, missing_count, evaluation, metric_updated)

        # Generate next questions if gaps remain
        if self.output_format == "terminal":
            print("❓ Generating next probing questions...")

        questions = self.question_generator.generate_questions(
            missing_metrics=remaining_gaps,
            case_context=self.session_state["original_presentation"],
            conversation_history=self.session_state["conversation_history"]
        )

        # Terminal output only
        if self.output_format == "terminal":
            print("\n" + "-"*80)
            print("🎯 GENERATED QUESTIONS")
            print("-"*80)
            for i, q in enumerate(questions, 1):
                print(f"\nQuestion {i}:")
                print(f"  Target Metric: {q.metric_target}")
                print(f"  Question: {q.question}")
                print(f"  Acceptable Criteria: {q.acceptable_criteria[:100]}...")
            print("-"*80 + "\n")

        return self._format_response_with_questions(questions, evaluation, metric_updated, met_count, partial_count, missing_count)
    
    def _format_questions(self, questions: List[ProbingQuestion], met_metrics=None, partial_metrics=None, missing_metrics=None):
        """Format questions for presentation to student"""
        # Store questions in history
        for q in questions:
            self.session_state["conversation_history"].append({
                "question": q.question,
                "question_obj": q,
                "answer": None,
                "evaluation": None
            })

        if self.output_format == "json":
            return {
                "type": "initial_evaluation",
                "message": "Let's explore your clinical reasoning:",
                "questions": [
                    {
                        "question_number": i + 1,
                        "metric_target": q.metric_target,
                        "question": q.question,
                        "follow_up_hint": q.follow_up_hint,
                        "acceptable_criteria": q.acceptable_criteria
                    }
                    for i, q in enumerate(questions)
                ],
                "metrics_summary": {
                    "met": len(met_metrics) if met_metrics else 0,
                    "partial": len(partial_metrics) if partial_metrics else 0,
                    "missing": len(missing_metrics) if missing_metrics else 0,
                    "total": len(self.session_state["metrics_status"])
                },
                "metrics_status": self.session_state["metrics_status"],
                "interaction_count": self.session_state["interaction_count"],
                "medical_questions_extracted": self.session_state.get("medical_questions", []),
                "rag_context_available": self.session_state.get("rag_context_available", False)
            }
        else:
            formatted = "\n\n".join([
                f"**Question {i+1}:** {q.question}"
                for i, q in enumerate(questions)
            ])
            return f"📋 Let's explore your clinical reasoning:\n\n{formatted}"

    def _format_response_with_questions(self, questions, evaluation, metric_updated, met_count, partial_count, missing_count):
        """Format response with evaluation feedback and next questions"""
        if self.output_format == "json":
            return {
                "type": "response_evaluation",
                "evaluation": {
                    "metric": evaluation.metric,
                    "status": evaluation.status.value,
                    "strengths": evaluation.strengths,
                    "weaknesses": evaluation.weaknesses,
                    "next_action": evaluation.next_action,
                    "feedback": evaluation.feedback
                },
                "metric_updated": metric_updated,
                "questions": [
                    {
                        "question_number": i + 1,
                        "metric_target": q.metric_target,
                        "question": q.question,
                        "follow_up_hint": q.follow_up_hint,
                        "acceptable_criteria": q.acceptable_criteria
                    }
                    for i, q in enumerate(questions)
                ],
                "metrics_summary": {
                    "met": met_count,
                    "partial": partial_count,
                    "missing": missing_count,
                    "total": len(self.session_state["metrics_status"])
                },
                "metrics_status": self.session_state["metrics_status"],
                "interaction_count": self.session_state["interaction_count"],
                "medical_questions_extracted": self.session_state.get("medical_questions", []),
                "rag_context_available": self.session_state.get("rag_context_available", False)
            }
        else:
            formatted = "\n\n".join([
                f"**Question {i+1}:** {q.question}"
                for i, q in enumerate(questions)
            ])
            return f"💭 {evaluation.feedback}\n\n📋 Let's continue:\n\n{formatted}"

    def _generate_completion_message(self, met_count=None, partial_count=None, missing_count=None, evaluation=None, metric_updated=None):  # noqa: ARG002
        """Generate completion message when all metrics are met"""
        if met_count is None:
            met_count = sum(
                1 for m in self.session_state["metrics_status"].values()
                if m["status"] == "met"
            )
        total_count = len(self.session_state["metrics_status"])

        if self.output_format == "json":
            result = {
                "type": "session_complete",
                "status": "success",
                "message": "Excellent work! You've successfully addressed all key components of a strong case presentation.",
                "summary": {
                    "metrics_demonstrated": f"{met_count}/{total_count}",
                    "total_interactions": self.session_state["interaction_count"],
                    "all_metrics_met": True
                },
                "metrics_status": self.session_state["metrics_status"],
                "interaction_count": self.session_state["interaction_count"],
                "medical_questions_extracted": self.session_state.get("medical_questions", []),
                "rag_context_available": self.session_state.get("rag_context_available", False),
                "rag_context": self.session_state.get("rag_context", "")
            }
            if evaluation:
                result["final_evaluation"] = {
                    "metric": evaluation.metric,
                    "status": evaluation.status.value,
                    "strengths": evaluation.strengths,
                    "weaknesses": evaluation.weaknesses,
                    "feedback": evaluation.feedback
                }
            if metric_updated:
                result["metric_updated"] = metric_updated
            return result
        else:
            return f"""
✅ **Excellent work!** You've successfully addressed all key components of a strong case presentation.

**Summary:**
- Metrics demonstrated: {met_count}/{total_count}
- Total interactions: {self.session_state["interaction_count"]}

You've shown strong clinical reasoning and the ability to synthesize information effectively.
Your presentation now demonstrates the diagnostic thinking and prioritization that attendings look for.

Keep up the great work! 🎉
"""

    def _generate_timeout_message(self):
        """Generate message when max interactions reached"""
        met_count = sum(
            1 for m in self.session_state["metrics_status"].values()
            if m["status"] == "met"
        )
        total_count = len(self.session_state["metrics_status"])

        remaining = [
            m["name"] for m in self.session_state["metrics_status"].values()
            if m["status"] != "met"
        ]

        if self.output_format == "json":
            return {
                "type": "session_complete",
                "status": "timeout",
                "message": "We've reached our interaction limit.",
                "summary": {
                    "metrics_demonstrated": f"{met_count}/{total_count}",
                    "total_interactions": self.session_state["interaction_count"],
                    "all_metrics_met": False
                },
                "remaining_gaps": remaining,
                "metrics_status": self.session_state["metrics_status"],
                "interaction_count": self.session_state["interaction_count"],
                "medical_questions_extracted": self.session_state.get("medical_questions", []),
                "rag_context_available": self.session_state.get("rag_context_available", False),
                "rag_context": self.session_state.get("rag_context", "")
            }
        else:
            return f"""
⏱️ **Session Complete**

We've reached our interaction limit. Here's where you stand:

**Progress:**
- Metrics demonstrated: {met_count}/{total_count}
- Total interactions: {self.session_state["interaction_count"]}

**Areas still needing work:**
{chr(10).join([f"- {name}" for name in remaining])}

**Next Steps:**
Consider reviewing these areas and practice incorporating them into your next presentation.
Great effort today! 💪
"""
    
    def get_session_summary(self) -> Dict:
        """Get detailed session summary"""
        return {
            "total_interactions": self.session_state["interaction_count"],
            "metrics_status": self.session_state["metrics_status"],
             "medical_questions": self.session_state.get("medical_questions", []),
             "rag_context": self.session_state.get("rag_context", ""),
             "rag_context_available": self.session_state.get("rag_context_available", False),
            "conversation_history": [
                {
                    "question": turn["question"],
                    "answer": turn["answer"],
                    "evaluation": asdict(turn["evaluation"]) if turn["evaluation"] else None
                }
                for turn in self.session_state["conversation_history"]
            ]
        }


# Example usage
if __name__ == "__main__":
    import os
    
    # Initialize with your API key
    API_KEY = os.environ.get("ANTHROPIC_API_KEY", "your-api-key-here")
    
    orchestrator = Agent4_Orchestrator(API_KEY)
    
    # Example student presentation
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
    print("AI ATTENDING PHYSICIAN - Case Presentation Evaluation")
    print("=" * 80)
    print("\n📝 Student Presentation Received\n")
    
    # Start session
    initial_response = orchestrator.start_session(sample_presentation)
    print(initial_response)
    
    print("\n" + "=" * 80)
    print("\nSimulation complete. In a real scenario, you would:")
    print("1. Present the questions to the student")
    print("2. Collect their responses")
    print("3. Call orchestrator.process_student_response(answer)")
    print("4. Repeat until completion")
    print("\n" + "=" * 80)
