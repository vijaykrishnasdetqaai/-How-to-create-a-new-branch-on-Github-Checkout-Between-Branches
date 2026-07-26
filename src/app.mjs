import { DOMAINS, MODEL_FAMILIES, generatePrompt } from './prompt-engine.mjs';
import { BUILD_MODULES, createModulePlan } from './module-planner.mjs';
import { buildLoopLab, createMediaPrompt, createPromptRecord, createQualityReport, createSoftwareSpec, createWorkflowPlan, loadLibrary, saveLibrary } from './modules.mjs';
import { NEXT_BUILD_MODULES, createNextBuildBrief } from './next-builds.mjs';
import { buildAnalytics, buildPromptChain, exportWorkspace, filterTemplates, optimizeForModels, reviewGovernance } from './advanced-modules.mjs';

const form = document.querySelector('#prompt-form');
const output = document.querySelector('#output');
const copyButton = document.querySelector('#copy');
const modelSelect = document.querySelector('#model');
const domainSelect = document.querySelector('#domain');
const moduleSelect = document.querySelector('#module-select');
const modulePlan = document.querySelector('#module-plan');
const nextBuildSelect = document.querySelector('#next-build-select');
const nextBuildOutput = document.querySelector('#next-build-output');

function fillSelect(select, values) {
  select.innerHTML = values.map((value) => `<option value="${value}">${value}</option>`).join('');
}

fillSelect(modelSelect, MODEL_FAMILIES);
fillSelect(domainSelect, DOMAINS);
fillSelect(moduleSelect, BUILD_MODULES.map((module) => module.name));
moduleSelect.innerHTML = BUILD_MODULES.map((module) => `<option value="${module.id}">${module.name}</option>`).join('');
modulePlan.textContent = createModulePlan(moduleSelect.value);

moduleSelect.addEventListener('change', () => {
  modulePlan.textContent = createModulePlan(moduleSelect.value);
});

nextBuildSelect.innerHTML = NEXT_BUILD_MODULES.map((module) => `<option value="${module.id}">${module.priority} · ${module.name}</option>`).join('');
nextBuildOutput.textContent = createNextBuildBrief(nextBuildSelect.value);
nextBuildSelect.addEventListener('change', () => {
  nextBuildOutput.textContent = createNextBuildBrief(nextBuildSelect.value);
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  data.includeTests = document.querySelector('#includeTests').checked;
  output.textContent = generatePrompt(data);
});

copyButton.addEventListener('click', async () => {
  await navigator.clipboard.writeText(output.textContent);
  copyButton.textContent = 'Copied!';
  setTimeout(() => {
    copyButton.textContent = 'Copy';
  }, 1400);
});


const libraryList = document.querySelector('#library-list');
const savePromptButton = document.querySelector('#save-prompt');
const loopLabButton = document.querySelector('#run-loop-lab');
const loopLabOutput = document.querySelector('#loop-lab-output');
const mediaType = document.querySelector('#media-type');
const mediaSubject = document.querySelector('#media-subject');
const mediaOutput = document.querySelector('#media-output');
const specOutput = document.querySelector('#spec-output');
const workflowOutput = document.querySelector('#workflow-output');
const qualityOutput = document.querySelector('#quality-output');

function currentFormData() {
  const data = Object.fromEntries(new FormData(form).entries());
  data.includeTests = document.querySelector('#includeTests').checked;
  return data;
}

function renderLibrary() {
  const items = loadLibrary();
  libraryList.innerHTML = items.length
    ? items.map((item) => `<li><strong>${item.title}</strong><br>${item.model} · ${item.mode} · ${item.domain} · ${item.score}/100</li>`).join('')
    : '<li>No saved prompts yet.</li>';
}

savePromptButton.addEventListener('click', () => {
  const data = currentFormData();
  const generated = output.textContent.includes('Goal:') ? output.textContent : generatePrompt(data);
  output.textContent = generated;
  const nextItems = [createPromptRecord(data, generated), ...loadLibrary()].slice(0, 8);
  saveLibrary(nextItems);
  renderLibrary();
});

loopLabButton.addEventListener('click', () => {
  const data = currentFormData();
  const generated = output.textContent.includes('Goal:') ? output.textContent : generatePrompt(data);
  output.textContent = generated;
  loopLabOutput.textContent = buildLoopLab(generated, data.loopCount).map((item) => `${item.critique}\n${item.revisionPrompt}`).join('\n\n---\n\n');
});

document.querySelector('#create-media').addEventListener('click', () => {
  mediaOutput.textContent = createMediaPrompt({ type: mediaType.value, subject: mediaSubject.value });
});

document.querySelector('#create-spec').addEventListener('click', () => {
  specOutput.textContent = createSoftwareSpec({ idea: document.querySelector('#software-idea').value });
});

document.querySelector('#create-workflow').addEventListener('click', () => {
  workflowOutput.textContent = createWorkflowPlan({ team: document.querySelector('#workflow-team').value });
});

document.querySelector('#run-quality').addEventListener('click', () => {
  qualityOutput.textContent = createQualityReport(output.textContent);
});

renderLibrary();


function activePrompt() {
  const data = currentFormData();
  const generated = output.textContent.includes('Goal:') ? output.textContent : generatePrompt(data);
  output.textContent = generated;
  return generated;
}

document.querySelector('#run-model-optimizer').addEventListener('click', () => {
  document.querySelector('#model-optimizer-output').textContent = optimizeForModels(activePrompt()).map((item) => `## ${item.model}
${item.prompt}`).join('

');
});

document.querySelector('#build-chain').addEventListener('click', () => {
  const goal = currentFormData().goal || 'Build a better AI workflow';
  document.querySelector('#chain-output').textContent = buildPromptChain(goal).map((item) => `${item.step}: ${item.instruction}
Validation: ${item.validates}`).join('

');
});

document.querySelector('#show-templates').addEventListener('click', () => {
  document.querySelector('#template-output').innerHTML = filterTemplates().map((template) => `<li><strong>${template.title}</strong><br>${template.domain} · ${template.mode} · ${template.difficulty}</li>`).join('');
});

document.querySelector('#export-workspace').addEventListener('click', () => {
  document.querySelector('#export-output').textContent = exportWorkspace({ prompt: activePrompt(), library: loadLibrary(), quality: document.querySelector('#quality-output').textContent }, document.querySelector('#export-format').value);
});

document.querySelector('#run-analytics').addEventListener('click', () => {
  document.querySelector('#analytics-output').textContent = JSON.stringify(buildAnalytics(loadLibrary()), null, 2);
});

document.querySelector('#run-governance').addEventListener('click', () => {
  document.querySelector('#governance-output').textContent = JSON.stringify(reviewGovernance(activePrompt()), null, 2);
});
