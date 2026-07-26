export const NEXT_BUILD_MODULES = [
  {
    id: 'model-optimizer',
    name: 'Model Optimizer',
    priority: 'P1',
    outcome: 'Tune one prompt for GPT, Claude, Gemini, Llama, image models, and video models.',
    firstTask: 'Create a comparison table of model strengths, context limits, output style, and prompt syntax.',
    prompt: 'Rewrite this prompt for each selected AI model while preserving goal, constraints, safety, and output format.'
  },
  {
    id: 'prompt-chain-builder',
    name: 'Prompt Chain Builder',
    priority: 'P1',
    outcome: 'Connect prompts into multi-step workflows for research, planning, creation, review, and delivery.',
    firstTask: 'Add chain steps with input, instruction, expected output, validation rule, and next-step mapping.',
    prompt: 'Build a prompt chain that turns an idea into a validated deliverable with review and improvement loops.'
  },
  {
    id: 'template-marketplace',
    name: 'Template Marketplace',
    priority: 'P2',
    outcome: 'Browse reusable templates by domain, role, model, task, and difficulty.',
    firstTask: 'Create curated template cards with filters, ratings, tags, and copy actions.',
    prompt: 'Create a marketplace-ready prompt template with title, use case, inputs, output format, examples, and quality checks.'
  },
  {
    id: 'export-center',
    name: 'Export Center',
    priority: 'P2',
    outcome: 'Export prompts and plans as Markdown, JSON, CSV, or implementation tickets.',
    firstTask: 'Build pure export functions for Markdown and JSON before adding UI download buttons.',
    prompt: 'Convert this prompt workspace into a clean export package with metadata, prompt text, tests, and release notes.'
  },
  {
    id: 'analytics-dashboard',
    name: 'Analytics Dashboard',
    priority: 'P3',
    outcome: 'Measure prompt quality, domain coverage, reuse, loop depth, and testing readiness.',
    firstTask: 'Define metrics and derive them from saved prompts without a backend.',
    prompt: 'Analyze these prompts and summarize quality, coverage gaps, repeated patterns, risks, and next improvements.'
  },
  {
    id: 'governance-guardrails',
    name: 'Governance Guardrails',
    priority: 'P1',
    outcome: 'Add safety, privacy, legal, medical, finance, and security review rules for high-risk prompts.',
    firstTask: 'Create risk categories, required disclaimers, escalation rules, and blocked-content checks.',
    prompt: 'Review this prompt for safety, privacy, compliance, hallucination risk, and required escalation guidance.'
  }
  ,{
    id: 'cost-estimator',
    name: 'AI Cost Estimator',
    priority: 'P2',
    outcome: 'Estimate token, image, video, and workflow costs before users run prompts in external AI tools.',
    firstTask: 'Add local cost assumptions, usage inputs, and clear estimate disclaimers.',
    prompt: 'Estimate the likely AI usage cost for this prompt workflow using transparent assumptions and optimization suggestions.'
  },
  {
    id: 'ab-testing-lab',
    name: 'Prompt A/B Testing Lab',
    priority: 'P1',
    outcome: 'Compare prompt variants with scoring rubrics, winner selection, and notes.',
    firstTask: 'Create variant records, scoring criteria, and a winner calculation function.',
    prompt: 'Create two prompt variants, define evaluation criteria, score both, and recommend the stronger version.'
  },
  {
    id: 'example-manager',
    name: 'Example Dataset Manager',
    priority: 'P2',
    outcome: 'Store examples, few-shot samples, references, and reusable context snippets for prompts.',
    firstTask: 'Build example records with input, expected output, tags, source, and quality notes.',
    prompt: 'Turn these examples into a few-shot prompt block with concise explanations and validation criteria.'
  },
  {
    id: 'api-integration-builder',
    name: 'API Integration Builder',
    priority: 'P2',
    outcome: 'Generate API request shapes, webhook prompts, function schemas, and integration checklists.',
    firstTask: 'Create an integration brief format covering endpoint, auth, payload, response, errors, and tests.',
    prompt: 'Design an API integration prompt with endpoint details, payload schema, error handling, tests, and deployment notes.'
  },
  {
    id: 'security-sandbox',
    name: 'Prompt Security Sandbox',
    priority: 'P1',
    outcome: 'Test prompts for injection, data leakage, unsafe tool use, and policy bypass attempts.',
    firstTask: 'Add adversarial test cases and safe expected responses for prompt-injection attempts.',
    prompt: 'Red-team this prompt for injection, data exfiltration, unsafe instructions, and tool misuse, then suggest safer wording.'
  }
  ,{
    id: 'voice-prompt-studio',
    name: 'Voice Prompt Studio',
    priority: 'P2',
    outcome: 'Create prompts for voice agents, narration, podcasts, call flows, and speech-style tuning.',
    firstTask: 'Define voice persona, speaking pace, pronunciation notes, interruption rules, and fallback responses.',
    prompt: 'Create a voice-agent prompt with persona, conversation flow, interruption handling, escalation rules, and sample dialogue.'
  },
  {
    id: 'multimodal-brief-builder',
    name: 'Multimodal Brief Builder',
    priority: 'P1',
    outcome: 'Combine text, image, video, audio, and document context into one structured prompt brief.',
    firstTask: 'Create context slots for media type, reference purpose, constraints, and expected model output.',
    prompt: 'Build a multimodal prompt brief that explains each reference, its role, constraints, and final output requirements.'
  },
  {
    id: 'localization-studio',
    name: 'Localization & Translation Studio',
    priority: 'P2',
    outcome: 'Adapt prompts and outputs for languages, regions, cultures, reading levels, and brand voice.',
    firstTask: 'Add locale, audience, tone, terminology, and cultural sensitivity fields.',
    prompt: 'Localize this prompt for the selected region while preserving intent, constraints, terminology, and inclusive tone.'
  },
  {
    id: 'compliance-audit-center',
    name: 'Compliance Audit Center',
    priority: 'P1',
    outcome: 'Audit prompts against policy, privacy, accessibility, regulated-domain, and internal review requirements.',
    firstTask: 'Create audit checklists with evidence fields, reviewer notes, pass/fail status, and remediation steps.',
    prompt: 'Audit this prompt for compliance risks, missing disclaimers, privacy exposure, accessibility gaps, and remediation actions.'
  },
  {
    id: 'prompt-api-simulator',
    name: 'Prompt API Simulator',
    priority: 'P3',
    outcome: 'Mock API-style prompt requests and responses before integrating real AI model providers.',
    firstTask: 'Create request/response schemas, mock latency, mock errors, and fixture outputs.',
    prompt: 'Simulate an AI API response for this prompt, including request payload, response body, error cases, and logging notes.'
  }

  ,{
    id: 'benchmark-suite',
    name: 'Prompt Benchmark Suite',
    priority: 'P1',
    outcome: 'Run repeatable prompt benchmarks across tasks, domains, models, and evaluation rubrics.',
    firstTask: 'Define benchmark cases with task, expected behavior, scoring criteria, and failure modes.',
    prompt: 'Create a benchmark plan for this prompt with test cases, expected outputs, scoring rubric, and failure analysis.'
  },
  {
    id: 'team-role-permissions',
    name: 'Team Roles & Permissions',
    priority: 'P2',
    outcome: 'Plan owner, editor, reviewer, and viewer permissions for collaborative prompt workspaces.',
    firstTask: 'Create role definitions, permission matrix, and local UI states for restricted actions.',
    prompt: 'Design a role-permission model for this prompt workspace with owners, editors, reviewers, viewers, and audit notes.'
  },
  {
    id: 'browser-extension-companion',
    name: 'Browser Extension Companion',
    priority: 'P3',
    outcome: 'Capture context from web pages and send it into PromptForge as prompt-ready notes.',
    firstTask: 'Define extension actions for capture, summarize, cite, transform, and send to workspace.',
    prompt: 'Create a browser-extension workflow that captures page context, summarizes it safely, cites sources, and prepares a prompt.'
  },
  {
    id: 'no-code-automation-builder',
    name: 'No-Code Automation Builder',
    priority: 'P2',
    outcome: 'Convert prompts into automation recipes for forms, webhooks, spreadsheets, and task trackers.',
    firstTask: 'Create automation step records with trigger, action, prompt, output, validation, and retry policy.',
    prompt: 'Turn this prompt workflow into a no-code automation recipe with triggers, actions, validations, retries, and handoffs.'
  },
  {
    id: 'marketplace-publishing-kit',
    name: 'Marketplace Publishing Kit',
    priority: 'P3',
    outcome: 'Prepare prompt packs for publishing with metadata, previews, licenses, pricing notes, and changelogs.',
    firstTask: 'Define package metadata, preview snippets, quality checks, license fields, and release checklist.',
    prompt: 'Package this prompt collection for a marketplace listing with metadata, examples, quality proof, license, and changelog.'
  }


];

export function getNextBuild(id) {
  return NEXT_BUILD_MODULES.find((module) => module.id === id) ?? NEXT_BUILD_MODULES[0];
}

export function createNextBuildBrief(id) {
  const module = getNextBuild(id);
  return `Next module: ${module.name}\nPriority: ${module.priority}\n\nOutcome:\n${module.outcome}\n\nBuild first:\n${module.firstTask}\n\nImplementation steps:\n1. Build pure data/functions.\n2. Add responsive UI controls.\n3. Connect the module to current prompt output and saved library data.\n4. Add unit tests for edge cases.\n5. Add E2E smoke coverage for the new asset and user path.\n6. Add UI/UX checks for mobile, keyboard, labels, empty states, and copy clarity.\n\nStarter prompt:\n${module.prompt}`;
}
