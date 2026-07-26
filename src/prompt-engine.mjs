export const MODEL_FAMILIES = [
  'ChatGPT / GPT',
  'Claude',
  'Gemini',
  'Llama',
  'Mistral',
  'Midjourney',
  'Stable Diffusion',
  'Runway',
  'Pika',
  'Custom model'
];

export const DOMAINS = [
  'Software engineering',
  'Product management',
  'Marketing',
  'Sales',
  'Education',
  'Healthcare',
  'Finance',
  'Legal operations',
  'E-commerce',
  'Game development',
  'Cybersecurity',
  'Data science',
  'Human resources',
  'Customer support'
];

const MODE_GUIDANCE = {
  image: 'Describe visual composition, subject, materials, lighting, camera angle, style references, aspect ratio, and negative constraints.',
  video: 'Describe timeline, motion, camera moves, scene transitions, pacing, audio mood, style, duration, and safety constraints.',
  chat: 'Define role, audience, task, context, reasoning format, answer style, constraints, and follow-up behavior.',
  workflow: 'Break the work into ordered stages, inputs, outputs, decision gates, automation opportunities, and acceptance criteria.',
  software: 'Specify architecture, stack, data model, APIs, UX, security, testing, deployment, and maintainability requirements.'
};

const DOMAIN_HINTS = {
  'Software engineering': 'include code quality, architecture tradeoffs, CI/CD, observability, and documentation',
  'Product management': 'include customer persona, problem framing, prioritization, metrics, risks, and launch plan',
  Marketing: 'include audience segment, brand voice, channel, offer, CTA, experiment plan, and performance metrics',
  Sales: 'include buyer pain points, qualification, objection handling, personalization, and next-step CTA',
  Education: 'include learning objective, grade level, scaffolding, examples, assessment, and accessibility',
  Healthcare: 'include clinical safety disclaimers, evidence level, privacy, accessibility, and escalation guidance',
  Finance: 'include assumptions, risk level, regulatory caveats, scenarios, metrics, and auditability',
  'Legal operations': 'include jurisdiction caveats, document type, review checklist, risk flags, and escalation points',
  'E-commerce': 'include product details, customer intent, conversion goals, SEO, inventory signals, and trust elements',
  'Game development': 'include gameplay loop, mechanics, art direction, level goals, balance, and player feedback',
  Cybersecurity: 'include threat model, controls, attack surface, detection, response, and compliance mapping',
  'Data science': 'include dataset assumptions, methodology, validation, bias checks, metrics, and reproducibility',
  'Human resources': 'include role context, fairness, policy alignment, tone, privacy, and evaluation criteria',
  'Customer support': 'include empathy, troubleshooting flow, escalation, policy boundaries, and resolution criteria'
};

export function normalizeInput(value, fallback = '') {
  return String(value ?? '').trim() || fallback;
}

export function generatePrompt(options = {}) {
  const mode = normalizeInput(options.mode, 'chat');
  const model = normalizeInput(options.model, 'Any capable AI model');
  const domain = normalizeInput(options.domain, 'Software engineering');
  const goal = normalizeInput(options.goal, 'Create a high-quality deliverable');
  const audience = normalizeInput(options.audience, 'technical and non-technical stakeholders');
  const tone = normalizeInput(options.tone, 'clear, practical, and professional');
  const constraints = normalizeInput(options.constraints, 'be accurate, concise, safe, and actionable');
  const loopCount = Math.max(1, Math.min(8, Number.parseInt(options.loopCount ?? 3, 10) || 3));
  const includeTests = Boolean(options.includeTests);
  const modeGuidance = MODE_GUIDANCE[mode] ?? MODE_GUIDANCE.chat;
  const domainHint = DOMAIN_HINTS[domain] ?? 'include domain-specific constraints, risks, success metrics, and examples';

  const prompt = `You are an expert ${domain} prompt architect optimizing for ${model}.

Goal: ${goal}
Audience: ${audience}
Output mode: ${mode}
Tone: ${tone}
Core constraints: ${constraints}

Instructions:
1. ${modeGuidance}
2. For the ${domain} domain, ${domainHint}.
3. Ask up to 3 clarifying questions only if required; otherwise proceed with stated assumptions.
4. Produce a polished final answer with headings, examples, edge cases, and measurable success criteria.${includeTests ? '\n5. Add functional tests, UI/UX checks, accessibility checks, and validation criteria.' : ''}

Loop prompt sequence:
${Array.from({ length: loopCount }, (_, index) => `${index + 1}. Review the previous output for gaps, ambiguity, hallucination risk, missing constraints, and user value. Improve it without losing important context.`).join('\n')}

Final response format:
- Brief strategy
- Main deliverable
- Quality checklist
- Next-step suggestions`;

  return prompt;
}
