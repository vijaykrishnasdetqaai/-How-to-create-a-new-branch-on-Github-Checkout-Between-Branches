export const PROMPT_TOOL_CATEGORIES = [
  {
    slug: 'chat-tools',
    title: 'Chat & Agent Prompt Tools',
    summary: 'Design assistants, agents, tutors, support bots, sales reps, and role-based copilots.',
    tools: ['Role prompt builder', 'System prompt generator', 'Conversation flow planner', 'Agent memory checklist', 'Tone adapter']
  },
  {
    slug: 'image-tools',
    title: 'Image Prompt Tools',
    summary: 'Create visual prompts for product shots, concept art, thumbnails, ads, brand assets, and 3D scenes.',
    tools: ['Composition builder', 'Style mixer', 'Lighting planner', 'Negative prompt helper', 'Aspect-ratio presets']
  },
  {
    slug: 'video-tools',
    title: 'Video Prompt Tools',
    summary: 'Plan cinematic clips, product demos, social ads, explainer videos, motion graphics, and scene timelines.',
    tools: ['Shot-list generator', 'Camera movement planner', 'Scene timeline builder', 'Audio mood guide', 'Transition prompt helper']
  },
  {
    slug: 'software-tools',
    title: 'Software Prompt Tools',
    summary: 'Turn ideas into PRDs, architecture briefs, API specs, tests, deployment plans, and code review prompts.',
    tools: ['PRD generator', 'Architecture prompt', 'API contract prompt', 'Test-plan generator', 'Code review rubric']
  },
  {
    slug: 'business-tools',
    title: 'Business Workflow Prompt Tools',
    summary: 'Build prompts for marketing, sales, operations, HR, education, finance, legal ops, and customer support.',
    tools: ['Campaign planner', 'Sales sequence builder', 'SOP generator', 'Policy assistant', 'KPI review prompt']
  },
  {
    slug: 'quality-tools',
    title: 'Quality, Safety & Governance Tools',
    summary: 'Evaluate prompt quality, hallucination risk, privacy, compliance, accessibility, and domain-specific safety.',
    tools: ['Quality scorer', 'Risk reviewer', 'Accessibility checklist', 'Compliance prompt', 'Human escalation guide']
  }
];

export function getCategory(slug) {
  return PROMPT_TOOL_CATEGORIES.find((category) => category.slug === slug) ?? PROMPT_TOOL_CATEGORIES[0];
}

export function createCategoryPrompt(slug, goal = 'Create a high-quality AI workflow') {
  const category = getCategory(slug);
  return `Category: ${category.title}\nGoal: ${goal}\n\nUse these tools:\n${category.tools.map((tool) => `- ${tool}`).join('\n')}\n\nInstructions:\n1. Clarify the user outcome.\n2. Choose the best tool for the task.\n3. Generate a structured prompt with constraints, examples, and acceptance checks.\n4. Add functional, UI/UX, and safety validation steps.`;
}
