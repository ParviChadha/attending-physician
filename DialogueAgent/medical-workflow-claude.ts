import Anthropic from "@anthropic-ai/sdk";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// Types matching the original workflow
type ReasoningStage = "cue_recognition" | "hypothesis_generation" | "inquiry_data" | 
  "problem_synthesis" | "diagnosis" | "reflection_feedback" | "introduction";
type Classification = "weak" | "strong";

interface WorkflowInput {
  input_as_text: string;
}

interface ConversationMessage {
  role: "user" | "assistant";
  content: string;
}

// Case information (same as original)
const CASE_INFO = `The Patient is a 60-year-old female named Abigail (Abby) Park.
Family Medical History: Abby's parents and siblings are living and healthy.
Personal Context: Abby is a conscientious worker, never missing a shift until now.
Abby's manager and co-workers at the supermarket are an important source of support.
Emotional Context: Abby is embarrassed that her manager had to send her home and is worried about her health.
She is anxious about her recent heart palpitations and their impact on her life and work.
Her past medical history is the following:
High blood pressure (Hypertension) diagnosed in her 20s.
She has been taking the following medication for high blood pressure for many years:
Esidrex
Her social history:
She is single.
She works as a cashier at Stop and Shop in North Haven.
She lives in an apartment with two cats.
She does not drink alcohol or coffee, does not smoke, but drinks several cups of tea daily.
She has a sister living nearby, and she maintains close relationships with a few women from her church.
She arrived at the clinic because she's been experiencing "spells" where her heart feels like it's "racing" with an irregular beat.
These palpitations usually last for a few minutes but recently had a long spell that lasted about an hour.
During these spells, she feels weak and somewhat faint. Sitting down helps her manage through the spells.
She has noticed that spells are worse when she has multiple cups of caffeinated tea.
She does not experience chest pain, shortness of breath, or swelling in her feet.
History of Present Illness / Review Of Systems:
60-year-old female with a past medical history of hypertension, managed on Esidrex. 
No history of chest pain, shortness of breath, or swelling in the feet. 
Presents with several weeks of intermittent heart palpitations, described as a rapid and irregular heartbeat. 
Symptoms typically last for a few minutes but recently experienced a prolonged episode lasting about an hour. 
Episodes are associated with feelings of weakness and faintness. 
Noted that symptoms worsen with consumption of caffeinated tea.
The correct diagnosis is paroxysmal atrial fibrillation likely triggered by caffeine intake in a patient with long-standing hypertension on a thiazide diuretic (Esidrex)`;

// Helper function to call Claude with structured output
async function callClaudeWithStructuredOutput<T>(
  systemPrompt: string,
  userMessage: string,
  schema: { name: string; description: string; input_schema: any }
): Promise<T> {
  const response = await client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 4096,
    system: systemPrompt,
    messages: [{ role: "user", content: userMessage }],
    tools: [
      {
        name: schema.name,
        description: schema.description,
        input_schema: schema.input_schema,
      },
    ],
    tool_choice: { type: "tool", name: schema.name },
  });

  // Extract tool use from response
  const toolUse = response.content.find((block) => block.type === "tool_use");
  if (!toolUse || toolUse.type !== "tool_use") {
    throw new Error("No tool use found in response");
  }

  return toolUse.input as T;
}

// Helper function to call Claude for conversational responses
async function callClaude(
  systemPrompt: string,
  conversationHistory: ConversationMessage[]
): Promise<string> {
  const messages = conversationHistory.map((msg) => ({
    role: msg.role,
    content: msg.content,
  }));

  const response = await client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 2048,
    system: systemPrompt,
    messages: messages,
  });

  const textBlock = response.content.find((block) => block.type === "text");
  if (!textBlock || textBlock.type !== "text") {
    throw new Error("No text found in response");
  }

  return textBlock.text;
}

// 1. Reasoning Stage Classifier
async function classifyReasoningStage(
  studentResponse: string
): Promise<ReasoningStage> {
  const systemPrompt = `You are an attending physician supervising a medical student during a case review.
Your job is to classify which clinical reasoning stage a medical student is in.
The reasoning stages are:
- introduction: The student introduces who they are
- cue_recognition: Identify and interpret key information that defines the patient's problem
- hypothesis_generation: Create possible explanations for the patient's presentation
- inquiry_data: Justification for hypothesis through targeted questioning and deductive reasoning
- problem_synthesis: Integrate all gathered information into a coherent understanding
- diagnosis: Choose the most appropriate diagnosis and management plan
- reflection_feedback: Assess and refine reasoning to improve future performance`;

  const schema = {
    name: "classify_stage",
    description: "Classify the clinical reasoning stage",
    input_schema: {
      type: "object",
      properties: {
        classification: {
          type: "string",
          enum: [
            "cue_recognition",
            "hypothesis_generation",
            "inquiry_data",
            "problem_synthesis",
            "diagnosis",
            "reflection_feedback",
            "introduction",
          ],
        },
      },
      required: ["classification"],
    },
  };

  const result = await callClaudeWithStructuredOutput<{
    classification: ReasoningStage;
  }>(systemPrompt, studentResponse, schema);

  return result.classification;
}

// 2. Quality Classifiers
async function classifyCueRecognition(
  studentResponse: string
): Promise<Classification> {
  const systemPrompt = `You are a medical instructor tasked with classifying the quality of a medical student's clinical reasoning. 
This student is in the cue recognition stage of reasoning.

Case Information:
${CASE_INFO}

If the student is misrepresenting information, identifying irrelevant data, or fails to identify key information from the case, classify them as weak.
If the student did a good job summarizing the case, classify them as strong.`;

  const schema = {
    name: "classify_quality",
    description: "Classify the quality of reasoning",
    input_schema: {
      type: "object",
      properties: {
        classification: {
          type: "string",
          enum: ["weak", "strong"],
        },
      },
      required: ["classification"],
    },
  };

  const result = await callClaudeWithStructuredOutput<{
    classification: Classification;
  }>(systemPrompt, `Student response: ${studentResponse}`, schema);

  return result.classification;
}

async function classifyHypothesisGeneration(
  studentResponse: string
): Promise<Classification> {
  const systemPrompt = `You are a medical instructor tasked with classifying the quality of a medical student's clinical reasoning.
This student is in the hypothesis generation stage of clinical reasoning.

Case Information:
${CASE_INFO}

If the student's hypotheses/assessments are not medically sound or irrelevant, classify them as weak.
If the student lists a hypothesis that is strong and aligns with symptoms, classify them as strong.`;

  const schema = {
    name: "classify_quality",
    description: "Classify the quality of reasoning",
    input_schema: {
      type: "object",
      properties: {
        classification: {
          type: "string",
          enum: ["weak", "strong"],
        },
      },
      required: ["classification"],
    },
  };

  const result = await callClaudeWithStructuredOutput<{
    classification: Classification;
  }>(systemPrompt, `Student response: ${studentResponse}`, schema);

  return result.classification;
}

async function classifyInquiryData(
  studentResponse: string
): Promise<Classification> {
  const systemPrompt = `You are a medical instructor tasked with classifying the quality of a medical student's clinical reasoning.
This student is in the inquiry and data interpretation stage.

Case Information:
${CASE_INFO}

If the student struggles to defend their hypothesis or presents incorrect medical information, classify as weak.
If the student does not propose an appropriate inquiry or does not interpret data well, classify as weak.
If the student does a good job defending their hypothesis by correctly stating medical knowledge and case facts, classify as strong.
If the student proposes an appropriate inquiry or interprets data well, classify as strong.`;

  const schema = {
    name: "classify_quality",
    description: "Classify the quality of reasoning",
    input_schema: {
      type: "object",
      properties: {
        classification: {
          type: "string",
          enum: ["weak", "strong"],
        },
      },
      required: ["classification"],
    },
  };

  const result = await callClaudeWithStructuredOutput<{
    classification: Classification;
  }>(systemPrompt, `Student response: ${studentResponse}`, schema);

  return result.classification;
}

async function classifyProblemSynthesis(
  studentResponse: string
): Promise<Classification> {
  const systemPrompt = `You are a medical instructor tasked with classifying the quality of a medical student's clinical reasoning.
This student is in the problem synthesis stage of reasoning.

Case Information:
${CASE_INFO}

If the student fails to integrate key findings, overlooks inconsistencies, or presents a disjointed or incomplete explanation, classify as weak.
If the student effectively synthesizes the data into a logical, pathophysiologic explanation that accounts for the patient's presentation, classify as strong.`;

  const schema = {
    name: "classify_quality",
    description: "Classify the quality of reasoning",
    input_schema: {
      type: "object",
      properties: {
        classification: {
          type: "string",
          enum: ["weak", "strong"],
        },
      },
      required: ["classification"],
    },
  };

  const result = await callClaudeWithStructuredOutput<{
    classification: Classification;
  }>(systemPrompt, `Student response: ${studentResponse}`, schema);

  return result.classification;
}

async function classifyDiagnosis(
  studentResponse: string
): Promise<Classification> {
  const systemPrompt = `You are a medical instructor tasked with classifying the quality of a medical student's clinical reasoning.
This student is in the diagnostic and management decision-making stage.

Case Information:
${CASE_INFO}

If the student proposes an incorrect, implausible, or poorly justified diagnosis that does not align with the clinical data, classify as weak.
If their management plan is unsafe, incomplete, or unrelated to the likely diagnosis, classify as weak.
If the student identifies a diagnosis consistent with the evidence and provides a reasonable, patient-centered management plan, classify as strong.`;

  const schema = {
    name: "classify_quality",
    description: "Classify the quality of reasoning",
    input_schema: {
      type: "object",
      properties: {
        classification: {
          type: "string",
          enum: ["weak", "strong"],
        },
      },
      required: ["classification"],
    },
  };

  const result = await callClaudeWithStructuredOutput<{
    classification: Classification;
  }>(systemPrompt, `Student response: ${studentResponse}`, schema);

  return result.classification;
}

// 3. Coaching Agents
async function coachIntroduction(
  conversationHistory: ConversationMessage[]
): Promise<string> {
  const systemPrompt = `You are an attending physician supervising a medical student during a case review.
Your role is to coach the student through clinical reasoning.

Case Information:
${CASE_INFO}

Stay in character, do not admit you are an AI.
Start by asking the student to summarize the case. Do not ask them to provide a hypothesis or diagnosis. 
Only ask them to summarize. Do not impose a length requirement on their response.`;

  return await callClaude(systemPrompt, conversationHistory);
}

async function coachCueRecognitionStrong(
  conversationHistory: ConversationMessage[]
): Promise<string> {
  const systemPrompt = `You are a medical instructor tasked with coaching a medical student through clinical reasoning.
The student is currently in the cue recognition stage of reasoning, and their performance is strong.

Case Information:
${CASE_INFO}

Guide the student towards generating a hypothesis. Ask them to list possible working assessments of the patient based on the cues they've identified.
For example:
- Ask the student to list all reasonable hypotheses before narrowing down.
- Ask probing questions like "What else could explain this presentation, even if it's less likely?"
- Discuss the pathophysiologic rationale behind each hypothesis.

Answer in 1-2 sentences at a time. Offer one piece of advice at a time. 
Do not include bullet points in your response. Do not provide alternate hypotheses/diagnoses.`;

  return await callClaude(systemPrompt, conversationHistory);
}

async function coachCueRecognitionWeak(
  conversationHistory: ConversationMessage[]
): Promise<string> {
  const systemPrompt = `You are a medical instructor tasked with coaching a medical student through clinical reasoning.
The student is currently in the cue recognition stage of reasoning but their performance is not strong.

Case Information:
${CASE_INFO}

Let the student know that there are some key information they are not picking up on. 
Guide them by asking the student to verbalize what data might be more relevant. 
Identify misrepresentations of data and correct them.
For example:
- Ask the student to think-aloud to reveal their mental filtering process.
- Have them summarize what stands out most in the patient's presentation.

Answer in 1-2 sentences at a time. Offer one piece of advice at a time. 
Do not include bullet points in your response. Do not provide alternate hypotheses/diagnoses.`;

  return await callClaude(systemPrompt, conversationHistory);
}

async function coachHypothesisGenerationStrong(
  conversationHistory: ConversationMessage[]
): Promise<string> {
  const systemPrompt = `You are a medical instructor tasked with coaching a medical student through clinical reasoning.
The student is currently in the hypothesis generation stage of reasoning, and their performance is strong.

Case Information:
${CASE_INFO}

Ask them hypothesis-oriented questions that help them practice defending their hypothesis.
For example:
- Walk me through how you reached that conclusion—what parts of her history, exam, or data helped you decide that?
- Ask the student what specific question, exam maneuver, or test would best confirm or refute their current hypothesis.
- Ask what findings they would expect if their hypothesis were true.

Answer in 1-2 sentences at a time. Offer one piece of advice at a time. 
Do not include bullet points in your response. Do not provide alternate hypotheses/diagnoses.`;

  return await callClaude(systemPrompt, conversationHistory);
}

async function coachHypothesisGenerationWeak(
  conversationHistory: ConversationMessage[]
): Promise<string> {
  const systemPrompt = `You are a medical instructor tasked with coaching a medical student through clinical reasoning.
The student is currently in the hypothesis generation stage of reasoning, but their performance is not strong.

Case Information:
${CASE_INFO}

Guide the student through an alternate, more relevant hypothesis. 
Highlight symptoms or data the student is missing or overlooking. 
Alert the student to the incorrect medical conclusions they are making. Encourage divergent thinking.
You could ask questions like:
- Walk me through how you reached that conclusion—what parts of her history, exam, or data helped you decide that?
- "What other symptoms could we consider that could explain this presentation?"

Answer in 1-2 sentences at a time. Offer one piece of advice at a time. 
Do not include bullet points in your response. Do not provide alternate hypotheses/diagnoses.`;

  return await callClaude(systemPrompt, conversationHistory);
}

async function coachInquiryDataStrong(
  conversationHistory: ConversationMessage[]
): Promise<string> {
  const systemPrompt = `You are a medical instructor tasked with coaching a medical student through clinical reasoning.
The student is currently in the inquiry data stage of reasoning, and their performance is strong.

Case Information:
${CASE_INFO}

Help guide the student by prompting them to integrate all their gathered information into a coherent understanding.
For example:
- Ask the student how the findings, symptoms, and test results connect to form a single explanation.
- Encourage them to identify data that doesn't fit and re-evaluate their reasoning if inconsistencies arise.

Answer in 1–2 sentences at a time. Offer one piece of advice at a time. 
Do not include bullet points in your response. Do not provide alternate hypotheses/diagnoses.
Do not suggest specific tests yourself; instead, prompt the student to propose the next best question/test and explain their rationale.`;

  return await callClaude(systemPrompt, conversationHistory);
}

async function coachInquiryDataWeak(
  conversationHistory: ConversationMessage[]
): Promise<string> {
  const systemPrompt = `You are a medical instructor tasked with coaching a medical student through clinical reasoning.
The student is currently in the inquiry data stage of reasoning, and their performance is weak.

Case Information:
${CASE_INFO}

Guide the student through tests, exams, or critical thinking that would best confirm or refute their hypothesis.
Identify if they possess flaws in their medical reasoning and provide guidance on findings they should expect if their hypothesis is true.

Answer in 1–2 sentences at a time. Offer one piece of advice at a time. 
Do not include bullet points in your response. Do not provide alternate hypotheses/diagnoses.
Do not suggest specific tests yourself; instead, prompt the student to propose the next best question/test.`;

  return await callClaude(systemPrompt, conversationHistory);
}

async function coachProblemSynthesisStrong(
  conversationHistory: ConversationMessage[]
): Promise<string> {
  const systemPrompt = `You are a medical instructor tasked with coaching a medical student through clinical reasoning.
The student is currently in the problem synthesis stage of reasoning, and their performance is strong.

Case Information:
${CASE_INFO}

Encourage the student to refine and deepen their synthesis by connecting all findings into a cohesive model.
For example:
- Ask the student how each symptom or data point fits into their overall understanding of the case.
- Ask them to consider whether any findings don't fit their current model and what that might mean.
- Encourage them to explain the pathophysiologic mechanism linking the symptoms, history, and likely diagnosis.

Answer in 1–2 sentences at a time. Offer one piece of advice at a time. 
Do not include bullet points in your response. Do not provide alternate explanations or diagnoses.`;

  return await callClaude(systemPrompt, conversationHistory);
}

async function coachProblemSynthesisWeak(
  conversationHistory: ConversationMessage[]
): Promise<string> {
  const systemPrompt = `You are a medical instructor tasked with coaching a medical student through clinical reasoning.
The student is currently in the problem synthesis stage of reasoning, but their performance is not strong.

Case Information:
${CASE_INFO}

Let the student know that their synthesis is missing key connections or that their explanation does not yet integrate all findings.
Guide them to re-examine their reasoning by asking them to connect each piece of data to the overall clinical picture.
For example:
- Ask the student what links or relationships between symptoms they might have missed.
- Ask them to identify which findings don't fit their current explanation.
- Encourage them to describe how the patient's underlying pathophysiology could connect the symptoms.

Answer in 1–2 sentences at a time. Offer one piece of advice at a time. 
Do not include bullet points in your response. Do not provide alternate explanations or diagnoses.`;

  return await callClaude(systemPrompt, conversationHistory);
}

async function coachDiagnosisStrong(
  conversationHistory: ConversationMessage[]
): Promise<string> {
  const systemPrompt = `You are a medical instructor tasked with coaching a medical student through clinical reasoning.
The student is currently in the diagnostic and management decision-making stage of reasoning, and their performance is strong.

Case Information:
${CASE_INFO}

Encourage the student to expand on their diagnostic reasoning and connect it to a safe, patient-centered management plan.
For example:
- Ask the student to explain how their diagnosis accounts for all major findings in the case.
- Ask what next steps or treatments they would prioritize and why.
- Encourage them to reflect on uncertainties or risks and how they would monitor or follow up.

Answer in 1–2 sentences at a time. Offer one piece of advice at a time. 
Do not include bullet points in your response. Do not explicitly confirm or provide the correct diagnosis.`;

  return await callClaude(systemPrompt, conversationHistory);
}

async function coachDiagnosisWeak(
  conversationHistory: ConversationMessage[]
): Promise<string> {
  const systemPrompt = `You are a medical instructor tasked with coaching a medical student through clinical reasoning.
The student is currently in the diagnostic and management decision-making stage of reasoning, but their performance is not strong.

Case Information:
${CASE_INFO}

Let the student know that their diagnosis or management plan does not yet align with the key evidence from the case.
Guide them to reconsider their reasoning by connecting clinical findings back to possible explanations and safer next steps.
For example:
- Ask the student to revisit which findings support or contradict their current diagnosis.
- Ask them how the patient's history, medication, or social context might influence the diagnosis or plan.
- Encourage them to reflect on alternative explanations.

Answer in 1–2 sentences at a time. Offer one piece of advice at a time. 
Do not include bullet points in your response. Do not explicitly confirm or provide the correct diagnosis.`;

  return await callClaude(systemPrompt, conversationHistory);
}

async function coachReflectionFeedback(
  conversationHistory: ConversationMessage[]
): Promise<string> {
  const systemPrompt = `You are a medical instructor guiding a medical student through the reflection and evaluation stage of clinical reasoning.
The student has completed their diagnostic reasoning and management plan.
Your role is to help them reflect on their reasoning process, identify what went well, and consider how they can improve next time.

Case Information:
${CASE_INFO}

Your goal is to prompt the student to reflect on their reasoning and presentation of the case — not to correct or evaluate them.
Encourage the student to:
- Revisit how they arrived at their conclusions and what reasoning steps felt uncertain or strong.
- Identify cognitive biases, gaps, or moments when they might have anchored too early.
- Reflect on how their clinical reasoning evolved through each stage of the process.
- Consider what they learned about balancing data, patient context, and diagnostic decision-making.
- Think about how they could apply these insights to future cases.

Speak in a supportive, coaching tone. Ask one open-ended reflective question at a time.
Do not give the diagnosis or restate the case. Do not assign a grade or classification.
Your role is to help the student analyze and improve their own thinking through guided reflection.`;

  return await callClaude(systemPrompt, conversationHistory);
}

async function coachGeneral(
  conversationHistory: ConversationMessage[]
): Promise<string> {
  const systemPrompt = `You are an attending physician supervising a medical student during a case review.
Your role is to coach the student through clinical reasoning, helping them refine their diagnostic thinking.
You are an expert on the case, but your goal is not to provide the final diagnosis. You help the student reason their way to it.

Case Information:
${CASE_INFO}

Use the following communication principles:
- Ask guiding questions that encourage critical thinking (e.g., differential diagnosis, pathophysiology, or next best test).
- Provide feedback on the student's reasoning process. Praise good logic and gently correct flawed reasoning.
- Encourage the student to articulate their thought process and justify their conclusions.
- Maintain a supportive, professional, and educational tone.

Answer in 1-2 sentences at a time. Offer one piece of advice at a time. 
Do not include bullet points in your response.
Your job is strictly to help the student develop strong diagnostic reasoning and arrive at sound conclusions through guided inquiry and feedback.
Stay in character, do not admit you are an AI.`;

  return await callClaude(systemPrompt, conversationHistory);
}

// Main workflow orchestration
export async function runWorkflow(
  input: WorkflowInput
): Promise<{ response: string; conversationHistory: ConversationMessage[] }> {
  const conversationHistory: ConversationMessage[] = [
    { role: "user", content: input.input_as_text },
  ];

  // Step 1: Classify the reasoning stage
  const stage = await classifyReasoningStage(input.input_as_text);
  console.log(`Reasoning stage: ${stage}`);

  let response: string;

  // Step 2: Route based on stage
  switch (stage) {
    case "introduction":
      response = await coachIntroduction(conversationHistory);
      break;

    case "cue_recognition": {
      const quality = await classifyCueRecognition(input.input_as_text);
      console.log(`Cue recognition quality: ${quality}`);
      response =
        quality === "strong"
          ? await coachCueRecognitionStrong(conversationHistory)
          : await coachCueRecognitionWeak(conversationHistory);
      break;
    }

    case "hypothesis_generation": {
      const quality = await classifyHypothesisGeneration(input.input_as_text);
      console.log(`Hypothesis generation quality: ${quality}`);
      response =
        quality === "strong"
          ? await coachHypothesisGenerationStrong(conversationHistory)
          : await coachHypothesisGenerationWeak(conversationHistory);
      break;
    }

    case "inquiry_data": {
      const quality = await classifyInquiryData(input.input_as_text);
      console.log(`Inquiry data quality: ${quality}`);
      response =
        quality === "strong"
          ? await coachInquiryDataStrong(conversationHistory)
          : await coachInquiryDataWeak(conversationHistory);
      break;
    }

    case "problem_synthesis": {
      const quality = await classifyProblemSynthesis(input.input_as_text);
      console.log(`Problem synthesis quality: ${quality}`);
      response =
        quality === "strong"
          ? await coachProblemSynthesisStrong(conversationHistory)
          : await coachProblemSynthesisWeak(conversationHistory);
      break;
    }

    case "diagnosis": {
      const quality = await classifyDiagnosis(input.input_as_text);
      console.log(`Diagnosis quality: ${quality}`);
      response =
        quality === "strong"
          ? await coachDiagnosisStrong(conversationHistory)
          : await coachDiagnosisWeak(conversationHistory);
      break;
    }

    case "reflection_feedback":
      response = await coachReflectionFeedback(conversationHistory);
      break;

    default:
      response = await coachGeneral(conversationHistory);
      break;
  }

  // Add assistant response to history
  conversationHistory.push({ role: "assistant", content: response });

  return { response, conversationHistory };
}

// Example usage
async function main() {
  const result = await runWorkflow({
    input_as_text: "Hi, I'm Sarah, a third-year medical student.",
  });

  console.log("\n=== Assistant Response ===");
  console.log(result.response);
}

// Uncomment to run
// main();
