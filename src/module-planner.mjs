export const BUILD_MODULES = [
  {
    id: 'prompt-library',
    name: 'Prompt Library',
    phase: 'Foundation',
    description: 'Save reusable prompts by model, mode, domain, tags, and quality score.',
    deliverables: ['CRUD prompt cards', 'tag filters', 'favorite prompts', 'import/export JSON'],
    acceptance: ['Users can save a generated prompt', 'Users can filter by model, mode, and domain', 'Library data exports as valid JSON']
  },
  {
    id: 'loop-lab',
    name: 'Loop Lab',
    phase: 'Prompt optimization',
    description: 'Run iterative refinement loops that compare draft, critique, and improved prompts.',
    deliverables: ['loop templates', 'critique rubric', 'version comparison', 'best-version marker'],
    acceptance: ['Each loop produces a critique and revision', 'Users can compare versions side by side', 'A final winning prompt can be selected']
  },
  {
    id: 'media-studio',
    name: 'Image & Video Studio',
    phase: 'Creative generation',
    description: 'Specialized builders for visual composition, shot lists, camera movement, style, and negative prompts.',
    deliverables: ['image prompt builder', 'video scene timeline', 'negative prompt helper', 'aspect-ratio presets'],
    acceptance: ['Image prompts include visual style and constraints', 'Video prompts include timeline and motion', 'Negative prompts are generated safely']
  },
  {
    id: 'software-specs',
    name: 'Software Spec Generator',
    phase: 'Software industry',
    description: 'Convert an idea into PRDs, architecture notes, UI stories, APIs, data models, and testing plans.',
    deliverables: ['PRD generator', 'architecture brief', 'API checklist', 'test strategy', 'release plan'],
    acceptance: ['Specs include scope, non-goals, risks, and success metrics', 'Generated tasks are small enough for implementation', 'Testing plan covers unit, integration, UI/UX, and accessibility']
  },
  {
    id: 'team-workflows',
    name: 'Team Workflow Automations',
    phase: 'Operations',
    description: 'Create prompts for support, sales, HR, legal operations, finance, education, and data workflows.',
    deliverables: ['workflow map', 'role prompts', 'handoff checklist', 'KPI dashboard prompt'],
    acceptance: ['Workflow prompts define inputs and outputs', 'Escalation rules are explicit', 'KPIs are measurable']
  },
  {
    id: 'quality-center',
    name: 'Quality Center',
    phase: 'Validation',
    description: 'Functional, UI/UX, accessibility, safety, and hallucination-risk testing for generated prompts.',
    deliverables: ['functional test checklist', 'UI/UX review checklist', 'accessibility rubric', 'risk scoring'],
    acceptance: ['Every prompt has measurable checks', 'UI flows have responsive and keyboard checks', 'High-risk domains include disclaimers and escalation guidance']
  }
];

export function getModuleById(id) {
  return BUILD_MODULES.find((module) => module.id === id) ?? BUILD_MODULES[0];
}

export function createModulePlan(id) {
  const module = getModuleById(id);
  return `Module: ${module.name}
Phase: ${module.phase}

Purpose:
${module.description}

Build one-by-one plan:
1. Define user stories and success metrics.
2. Design the responsive UI state, empty state, and error state.
3. Build the data model and pure logic first.
4. Connect UI interactions and persistence.
5. Add functional tests for core behavior.
6. Add UI/UX checks for mobile, desktop, keyboard, readability, and copy clarity.
7. Review risks, polish microcopy, and prepare release notes.

Deliverables:
${module.deliverables.map((item) => `- ${item}`).join('\n')}

Acceptance criteria:
${module.acceptance.map((item) => `- ${item}`).join('\n')}`;
}
