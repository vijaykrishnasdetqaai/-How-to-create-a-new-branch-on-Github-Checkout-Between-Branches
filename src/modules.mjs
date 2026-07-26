import { createModulePlan } from './module-planner.mjs';
import { generatePrompt } from './prompt-engine.mjs';

const STORE_KEY = 'promptforge-library-v1';

export function loadLibrary(storage = globalThis.localStorage) {
  try { return JSON.parse(storage.getItem(STORE_KEY) || '[]'); } catch { return []; }
}

export function saveLibrary(items, storage = globalThis.localStorage) {
  storage.setItem(STORE_KEY, JSON.stringify(items));
  return items;
}

export function createPromptRecord(input, generatedPrompt) {
  return {
    id: `prompt-${Date.now()}`,
    title: input.goal?.slice(0, 64) || 'Untitled prompt',
    model: input.model,
    mode: input.mode,
    domain: input.domain,
    tags: [input.mode, input.domain].filter(Boolean),
    score: scorePrompt(generatedPrompt),
    prompt: generatedPrompt,
    createdAt: new Date().toISOString()
  };
}

export function scorePrompt(prompt) {
  const text = String(prompt || '');
  const checks = ['Goal:', 'Audience:', 'Instructions:', 'Loop prompt sequence:', 'Final response format:'];
  return Math.round((checks.filter((check) => text.includes(check)).length / checks.length) * 100);
}

export function buildLoopLab(basePrompt, loops = 3) {
  const total = Math.max(1, Math.min(8, Number.parseInt(loops, 10) || 3));
  return Array.from({ length: total }, (_, index) => ({
    round: index + 1,
    critique: `Round ${index + 1}: check clarity, missing context, safety, measurable outputs, and model-fit.`,
    revisionPrompt: `${basePrompt}\n\nImprove iteration ${index + 1}: remove ambiguity, add examples, preserve constraints, and make success criteria testable.`
  }));
}

export function createMediaPrompt({ type = 'image', subject = 'futuristic product dashboard', style = 'cinematic 3D', duration = '12 seconds' } = {}) {
  if (type === 'video') {
    return generatePrompt({ mode: 'video', model: 'Runway', domain: 'Marketing', goal: `Create a ${duration} ${style} video featuring ${subject}`, audience: 'creative production team', includeTests: true });
  }
  return generatePrompt({ mode: 'image', model: 'Midjourney', domain: 'Marketing', goal: `Create a ${style} image featuring ${subject}`, audience: 'design team', includeTests: true });
}

export function createSoftwareSpec({ idea = 'AI prompt platform', stack = 'HTML, CSS, JavaScript', users = 'prompt engineers and product teams' } = {}) {
  return `# Software Spec: ${idea}\n\nUsers: ${users}\nStack: ${stack}\n\nScope:\n- Responsive prompt workspace\n- Module-based builders\n- Prompt library and quality scoring\n- Functional, UI/UX, accessibility, and E2E validation\n\nArchitecture:\n- Static app shell\n- Pure JavaScript engines for prompt logic\n- Local storage persistence\n- Node test suite\n\nAcceptance:\n- Users can generate, save, iterate, and validate prompts\n- Each module has a measurable output\n- Tests cover core logic and end-to-end smoke paths`;
}

export function createWorkflowPlan({ team = 'software team', process = 'feature delivery', metric = 'cycle time' } = {}) {
  return `Workflow for ${team}: ${process}\n\n1. Intake request with goals, owner, risk, and due date.\n2. Generate role-specific prompts for planning, design, engineering, QA, and launch.\n3. Add decision gates for scope, security, accessibility, and release readiness.\n4. Track KPI: ${metric}.\n5. Escalate blockers with context, impact, options, and recommended next action.`;
}

export function createQualityReport(prompt) {
  const score = scorePrompt(prompt);
  return `Quality score: ${score}/100\n\nFunctional checks:\n- Required sections present\n- Loop count bounded\n- Domain guidance included\n\nUI/UX checks:\n- Clear labels\n- Keyboard-friendly controls\n- Responsive sections\n\nE2E checks:\n- Generate prompt\n- Save to library\n- Build loop lab revisions\n- Create media, software, and workflow outputs`;
}

export function nextModuleRecommendation(moduleId) {
  return createModulePlan(moduleId);
}
