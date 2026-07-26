import assert from 'node:assert/strict';
import test from 'node:test';
import { TEMPLATE_LIBRARY, buildAnalytics, buildPromptChain, exportWorkspace, filterTemplates, optimizeForModels, reviewGovernance } from '../src/advanced-modules.mjs';

test('optimizes prompts for multiple model families', () => {
  const optimized = optimizeForModels('Create a product plan', ['GPT', 'Claude', 'Runway']);
  assert.equal(optimized.length, 3);
  assert.match(optimized[2].prompt, /scene timeline/);
});

test('builds a full prompt chain', () => {
  const chain = buildPromptChain('launch a prompt app');
  assert.deepEqual(chain.map((item) => item.step), ['Research', 'Plan', 'Create', 'Review', 'Ship']);
});

test('filters templates and exports workspace data', () => {
  assert.ok(TEMPLATE_LIBRARY.length >= 4);
  assert.equal(filterTemplates({ mode: 'video' })[0].title, 'Cinematic Video Ad');
  assert.match(exportWorkspace({ prompt: 'Hello', library: [{ title: 'A', score: 80 }] }), /PromptForge Export/);
  assert.match(exportWorkspace({ prompt: 'Hello' }, 'json'), /"prompt": "Hello"/);
});

test('creates analytics and governance reports', () => {
  assert.deepEqual(buildAnalytics([{ score: 50, mode: 'chat', domain: 'Finance' }, { score: 90, mode: 'video', domain: 'Marketing' }]).modes, ['chat', 'video']);
  const report = reviewGovernance('medical diagnosis and financial trading prompt');
  assert.deepEqual(report.risks, ['medical', 'financial']);
  assert.match(report.status, /human review/);
});
