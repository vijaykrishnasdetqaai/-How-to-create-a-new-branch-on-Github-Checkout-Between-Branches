export const TEMPLATE_LIBRARY = [
  { id: 'saas-launch', title: 'SaaS Launch Plan', domain: 'Product management', mode: 'workflow', difficulty: 'Intermediate' },
  { id: 'video-ad', title: 'Cinematic Video Ad', domain: 'Marketing', mode: 'video', difficulty: 'Beginner' },
  { id: 'api-spec', title: 'API Spec Builder', domain: 'Software engineering', mode: 'software', difficulty: 'Advanced' },
  { id: 'support-agent', title: 'Support Agent Playbook', domain: 'Customer support', mode: 'chat', difficulty: 'Beginner' }
];

const MODEL_RULES = {
  GPT: 'Use explicit role, context, constraints, examples, and structured output headings.',
  Claude: 'Use clear intent, long-context background, constitutional safety boundaries, and concise artifacts.',
  Gemini: 'Use multimodal context, concrete task framing, and comparison/analysis instructions.',
  Llama: 'Use direct instructions, compact context, examples, and strict output schema.',
  Midjourney: 'Use visual subject, style, lighting, lens, composition, aspect ratio, and negative cues.',
  Runway: 'Use scene timeline, motion, camera movement, duration, audio mood, and transition details.'
};

export function optimizeForModels(prompt, models = Object.keys(MODEL_RULES)) {
  return models.map((model) => ({
    model,
    prompt: `${MODEL_RULES[model] || MODEL_RULES.GPT}\n\n${prompt}`
  }));
}

export function buildPromptChain(goal) {
  return [
    { step: 'Research', instruction: `Gather assumptions, users, constraints, and risks for: ${goal}`, validates: 'Inputs and risks are explicit' },
    { step: 'Plan', instruction: `Create milestones, modules, owners, and acceptance criteria for: ${goal}`, validates: 'Plan has measurable outcomes' },
    { step: 'Create', instruction: `Generate the deliverable for: ${goal}`, validates: 'Deliverable follows requested format' },
    { step: 'Review', instruction: `Critique quality, safety, completeness, and usability for: ${goal}`, validates: 'Review finds gaps and fixes' },
    { step: 'Ship', instruction: `Prepare release notes, test checklist, and next iteration for: ${goal}`, validates: 'Release package is actionable' }
  ];
}

export function filterTemplates({ domain = 'All', mode = 'All' } = {}) {
  return TEMPLATE_LIBRARY.filter((template) => (domain === 'All' || template.domain === domain) && (mode === 'All' || template.mode === mode));
}

export function exportWorkspace({ prompt = '', library = [], quality = '' } = {}, format = 'markdown') {
  if (format === 'json') return JSON.stringify({ prompt, library, quality }, null, 2);
  return `# PromptForge Export\n\n## Prompt\n${prompt || 'No prompt generated yet.'}\n\n## Saved prompts\n${library.map((item) => `- ${item.title} (${item.score}/100)`).join('\n') || '- None'}\n\n## Quality\n${quality || 'No quality report yet.'}`;
}

export function buildAnalytics(library = []) {
  const total = library.length;
  const averageScore = total ? Math.round(library.reduce((sum, item) => sum + Number(item.score || 0), 0) / total) : 0;
  const modes = [...new Set(library.map((item) => item.mode).filter(Boolean))];
  const domains = [...new Set(library.map((item) => item.domain).filter(Boolean))];
  return { total, averageScore, modes, domains, readyForReview: total > 0 && averageScore >= 60 };
}

export function reviewGovernance(prompt) {
  const text = String(prompt || '').toLowerCase();
  const risks = [
    ['medical', /health|medical|diagnosis|treatment/],
    ['financial', /invest|finance|loan|tax|trading/],
    ['legal', /legal|contract|lawsuit|jurisdiction/],
    ['security', /password|exploit|malware|credential/],
    ['privacy', /personal data|pii|ssn|email address/]
  ].filter(([, pattern]) => pattern.test(text)).map(([name]) => name);
  return {
    risks,
    status: risks.length ? 'Needs human review and domain-specific disclaimers' : 'Low risk',
    checks: ['avoid unsupported claims', 'protect private data', 'add escalation guidance', 'state assumptions']
  };
}
