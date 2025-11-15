import { runWorkflow } from "./medical-workflow-claude";

/**
 * Example: Multi-turn conversation with medical student coaching
 * 
 * This demonstrates how the workflow:
 * 1. Classifies which reasoning stage the student is in
 * 2. Evaluates the quality of their reasoning
 * 3. Provides appropriate coaching based on stage and quality
 */

async function simulateConversation() {
  console.log("=== Medical Education Workflow Demo ===\n");

  // Turn 1: Introduction
  console.log("Turn 1: Student introduces themselves");
  const turn1 = await runWorkflow({
    input_as_text: "Hi, I'm Sarah, a third-year medical student.",
  });
  console.log("Coach:", turn1.response);
  console.log("\n---\n");

  // Turn 2: Student summarizes the case (cue recognition stage)
  console.log("Turn 2: Student summarizes the case");
  const turn2 = await runWorkflow({
    input_as_text:
      "Okay, so we have a 60-year-old woman who works as a cashier. She's been having heart palpitations for several weeks, and they've been getting worse. She recently had an episode that lasted about an hour.",
  });
  console.log("Coach:", turn2.response);
  console.log("\n---\n");

  // Turn 3: Student generates hypotheses
  console.log("Turn 3: Student generates hypotheses");
  const turn3 = await runWorkflow({
    input_as_text:
      "Based on the palpitations and her age, I'm thinking this could be atrial fibrillation, maybe supraventricular tachycardia, or possibly anxiety-related palpitations given her work stress.",
  });
  console.log("Coach:", turn3.response);
  console.log("\n---\n");

  // Turn 4: Student defends hypothesis with data
  console.log("Turn 4: Student provides supporting evidence");
  const turn4 = await runWorkflow({
    input_as_text:
      "I think atrial fibrillation is most likely because she describes an irregular, rapid heartbeat. She has hypertension which is a risk factor, and she's been on Esidrex for years. I also noticed she drinks caffeinated tea and the symptoms worsen with tea consumption, which could be a trigger.",
  });
  console.log("Coach:", turn4.response);
  console.log("\n---\n");

  // Turn 5: Student synthesizes the problem
  console.log("Turn 5: Student synthesizes the case");
  const turn5 = await runWorkflow({
    input_as_text:
      "So putting it all together: she has long-standing hypertension treated with a thiazide diuretic, which can cause electrolyte imbalances. The caffeine from her tea likely triggers episodes of atrial fibrillation. The irregular rapid heartbeat, the episodic nature, and the caffeine connection all point to paroxysmal atrial fibrillation.",
  });
  console.log("Coach:", turn5.response);
  console.log("\n---\n");

  // Turn 6: Student proposes diagnosis and management
  console.log("Turn 6: Student provides diagnosis and plan");
  const turn6 = await runWorkflow({
    input_as_text:
      "My diagnosis is paroxysmal atrial fibrillation triggered by caffeine in a patient with hypertension. I would recommend getting an EKG, checking her electrolytes, and discussing caffeine reduction. We should also assess her stroke risk and consider anticoagulation if needed.",
  });
  console.log("Coach:", turn6.response);
  console.log("\n---\n");

  // Turn 7: Reflection
  console.log("Turn 7: Student reflects on their reasoning");
  const turn7 = await runWorkflow({
    input_as_text:
      "Looking back, I think I did well connecting the caffeine trigger to the symptoms. I'm most confident about recognizing the risk factors. I could have explored the medication side effects earlier, especially with the thiazide.",
  });
  console.log("Coach:", turn7.response);
  console.log("\n---\n");
}

// Run the simulation
simulateConversation().catch(console.error);
