# Next Modules to Build

This roadmap turns PromptForge 3D into a complete AI prompt operating system. Build these modules in order so each one adds value and reuses existing prompt, library, analytics, and governance logic.

## 1. User Project Workspaces

**Goal:** Let users create separate workspaces for clients, products, teams, or experiments.

**Build:**
- Workspace create/edit/delete flow.
- Workspace-scoped saved prompts, exports, analytics, and quality reports.
- Local-first persistence with a future backend-ready data shape.

**Acceptance criteria:**
- Users can switch workspaces without losing saved prompts.
- Export packages include workspace metadata.
- Tests cover workspace isolation and fallback behavior.

## 2. Prompt Version History

**Goal:** Track every generated, edited, optimized, and loop-refined prompt version.

**Build:**
- Version records with parent/child relationships.
- Diff-friendly summaries between versions.
- Restore and duplicate actions.

**Acceptance criteria:**
- Users can restore an older prompt.
- Loop Lab outputs can become saved versions.
- Tests verify version order and restoration.

## 3. Prompt Chain Runner

**Goal:** Turn the existing chain builder into an executable workflow simulator.

**Build:**
- Step-by-step runner UI.
- Input/output fields for each step.
- Validation result per step.
- Final combined export.

**Acceptance criteria:**
- Users can complete Research → Plan → Create → Review → Ship.
- Each step stores output and validation status.
- E2E test verifies the full chain path.

## 4. Template Builder Studio

**Goal:** Let users create custom reusable templates instead of only viewing curated templates.

**Build:**
- Template form for title, domain, model, mode, inputs, output schema, examples, and checks.
- Template preview renderer.
- Save-to-library and export actions.

**Acceptance criteria:**
- Users can create and reuse a custom template.
- Template filters include custom templates.
- Tests validate required fields and export format.

## 5. Evaluation Rubric Builder

**Goal:** Let users define scoring rubrics for accuracy, usefulness, safety, style, completeness, and domain fit.

**Build:**
- Rubric criteria editor.
- Weighted scoring function.
- Quality Center integration.

**Acceptance criteria:**
- Users can score prompts with a custom rubric.
- Scores include per-criterion explanations.
- Tests cover weighting and edge cases.

## 6. Import Center

**Goal:** Import prompt packs from Markdown, JSON, or CSV.

**Build:**
- File parsing helpers.
- Preview before import.
- Duplicate detection.
- Import validation report.

**Acceptance criteria:**
- Valid JSON and Markdown prompt packs import correctly.
- Invalid files return actionable errors.
- E2E smoke test covers import helpers as served assets.

## 7. Collaboration Notes

**Goal:** Add lightweight review notes for teams before a full backend exists.

**Build:**
- Comment records attached to prompts, versions, templates, and exports.
- Status labels: draft, needs review, approved, shipped.
- Reviewer checklist.

**Acceptance criteria:**
- Users can add notes to a prompt.
- Status changes appear in analytics.
- Tests cover note creation and status aggregation.

## 8. Deployment Readiness Module

**Goal:** Prepare the app for production deployment.

**Build:**
- Accessibility pass.
- SEO metadata.
- Error boundaries/fallbacks for missing browser APIs.
- Static hosting notes.
- Lighthouse-style manual checklist.

**Acceptance criteria:**
- App has metadata, keyboard-friendly controls, and readable mobile states.
- Local storage failures degrade gracefully.
- README includes deployment steps.

## Recommended Build Order

1. User Project Workspaces
2. Prompt Version History
3. Prompt Chain Runner
4. Template Builder Studio
5. Evaluation Rubric Builder
6. Import Center
7. Collaboration Notes
8. Deployment Readiness Module

## 9. AI Cost Estimator

**Goal:** Estimate token, image, video, and workflow costs before users run prompts in external AI tools.

**Build:**
- Local cost assumptions for text, image, and video workflows.
- Usage input fields for prompt size, expected outputs, runs, and variants.
- Optimization suggestions for reducing cost without losing quality.

**Acceptance criteria:**
- Users can produce a transparent estimate with assumptions.
- Estimates include a disclaimer that real vendor pricing may differ.
- Tests cover missing values, large values, and multi-run estimates.

## 10. Prompt A/B Testing Lab

**Goal:** Compare prompt variants and select winners with measurable rubrics.

**Build:**
- Variant editor for A/B prompts.
- Scoring rubric with weighted criteria.
- Winner recommendation and notes.

**Acceptance criteria:**
- Users can compare at least two variants.
- Winner calculation is deterministic.
- Tests cover ties, empty variants, and weighted scores.

## 11. Example Dataset Manager

**Goal:** Manage reusable examples, few-shot samples, references, and context snippets.

**Build:**
- Example records with input, expected output, source, tags, and notes.
- Few-shot prompt block generator.
- Search/filter by domain, mode, and tag.

**Acceptance criteria:**
- Users can convert examples into prompt-ready blocks.
- Examples can be filtered by metadata.
- Tests validate generated few-shot format.

## 12. API Integration Builder

**Goal:** Generate prompts and specs for API calls, webhooks, function schemas, and integrations.

**Build:**
- Integration brief fields for endpoint, auth, payload, response, errors, and tests.
- Function-schema prompt generator.
- Integration QA checklist.

**Acceptance criteria:**
- Users can create an integration prompt from structured fields.
- Generated output includes auth, payload, error, and test sections.
- Tests validate required integration fields.

## 13. Prompt Security Sandbox

**Goal:** Red-team prompts for injection, data leakage, unsafe tool use, and policy bypass attempts.

**Build:**
- Prompt-injection test cases.
- Safe expected response guidance.
- Risk report and safer rewrite output.

**Acceptance criteria:**
- Users can run adversarial checks against a prompt.
- Reports identify injection and data-exfiltration risks.
- Tests cover known attack phrases and safe rewrites.

## 14. Voice Prompt Studio

**Goal:** Create prompts for voice agents, narration, podcasts, call flows, and speech-style tuning.

**Build:**
- Voice persona fields for tone, pacing, language, and pronunciation notes.
- Conversation flow and interruption handling rules.
- Escalation, fallback, and sample dialogue sections.

**Acceptance criteria:**
- Users can create voice-agent prompts with sample dialogue.
- Prompts include interruption handling and escalation rules.
- Tests cover missing persona fields and generated dialogue format.

## 15. Multimodal Brief Builder

**Goal:** Combine text, image, video, audio, and document context into one structured prompt brief.

**Build:**
- Reference slots for media type, purpose, constraints, and expected output.
- Multimodal prompt brief generator.
- Validation for missing reference descriptions.

**Acceptance criteria:**
- Users can explain how each reference should influence the output.
- Generated briefs separate facts, style references, and constraints.
- Tests validate multiple media-reference combinations.

## 16. Localization & Translation Studio

**Goal:** Adapt prompts and outputs for languages, regions, cultures, reading levels, and brand voice.

**Build:**
- Locale, audience, tone, terminology, and cultural sensitivity fields.
- Translation and transcreation prompt variants.
- Inclusive language checklist.

**Acceptance criteria:**
- Users can localize a prompt without losing intent or constraints.
- Output includes terminology and cultural notes.
- Tests cover locale fallback and required fields.

## 17. Compliance Audit Center

**Goal:** Audit prompts against policy, privacy, accessibility, regulated-domain, and internal review requirements.

**Build:**
- Audit checklist builder with evidence fields.
- Pass/fail status and reviewer notes.
- Remediation action generator.

**Acceptance criteria:**
- Users can produce an audit report for a prompt.
- Reports include evidence, status, and remediation steps.
- Tests cover high-risk domains and missing evidence.

## 18. Prompt API Simulator

**Goal:** Mock API-style prompt requests and responses before integrating real AI model providers.

**Build:**
- Request and response schema builder.
- Mock latency, mock errors, and fixture outputs.
- Logging and debugging notes.

**Acceptance criteria:**
- Users can simulate request/response payloads locally.
- Error fixtures cover auth, rate-limit, validation, and timeout cases.
- Tests validate generated schemas and error fixtures.

## 19. Prompt Benchmark Suite

**Goal:** Run repeatable prompt benchmarks across tasks, domains, models, and evaluation rubrics.

**Build:**
- Benchmark cases with task, expected behavior, scoring criteria, and failure modes.
- Repeatable test runs for prompt variants.
- Summary report for strengths, weaknesses, and regressions.

**Acceptance criteria:**
- Users can compare prompt versions against the same benchmark cases.
- Reports show scores, failures, and recommended fixes.
- Tests cover benchmark scoring and regression detection.

## 20. Team Roles & Permissions

**Goal:** Plan owner, editor, reviewer, and viewer permissions for collaborative prompt workspaces.

**Build:**
- Role definitions and permission matrix.
- Restricted UI state plan for protected actions.
- Audit notes for permission-sensitive changes.

**Acceptance criteria:**
- Each action maps to allowed roles.
- Restricted actions show clear UI messaging.
- Tests cover role permission lookups.

## 21. Browser Extension Companion

**Goal:** Capture context from web pages and send it into PromptForge as prompt-ready notes.

**Build:**
- Capture, summarize, cite, transform, and send actions.
- Source citation and privacy warning flow.
- Import format for captured page context.

**Acceptance criteria:**
- Captured content becomes structured prompt context.
- Source URLs and timestamps are preserved.
- Tests validate capture payload format.

## 22. No-Code Automation Builder

**Goal:** Convert prompts into automation recipes for forms, webhooks, spreadsheets, and task trackers.

**Build:**
- Automation step records with trigger, action, prompt, output, validation, and retry policy.
- Recipe export for common no-code platforms.
- Failure and handoff handling instructions.

**Acceptance criteria:**
- Users can generate a multi-step automation recipe.
- Recipes include validation and retry rules.
- Tests validate required trigger/action/output fields.

## 23. Marketplace Publishing Kit

**Goal:** Prepare prompt packs for publishing with metadata, previews, licenses, pricing notes, and changelogs.

**Build:**
- Package metadata, preview snippets, quality proof, license fields, and release checklist.
- Marketplace listing prompt generator.
- Changelog and version notes builder.

**Acceptance criteria:**
- Users can package saved prompts into a publish-ready listing.
- Listings include examples, license, quality notes, and changelog.
- Tests cover required marketplace metadata.
