import assert from 'node:assert/strict';
import test from 'node:test';
import { buildLoopLab, createMediaPrompt, createPromptRecord, createQualityReport, createSoftwareSpec, createWorkflowPlan, scorePrompt } from '../src/modules.mjs';

test('scores complete generated prompts', () => {
  const prompt = 'Goal:\nAudience:\nInstructions:\nLoop prompt sequence:\nFinal response format:';
  assert.equal(scorePrompt(prompt), 100);
});

test('builds bounded loop lab revisions', () => {
  const loops = buildLoopLab('Base prompt', 20);
  assert.equal(loops.length, 8);
  assert.match(loops[0].revisionPrompt, /Improve iteration 1/);
});

test('creates media, software, workflow, quality, and library outputs', () => {
  assert.match(createMediaPrompt({ type: 'video', subject: 'AI studio' }), /Output mode: video/);
  assert.match(createSoftwareSpec({ idea: 'PromptForge' }), /Software Spec: PromptForge/);
  assert.match(createWorkflowPlan({ team: 'QA team' }), /QA team/);
  assert.match(createQualityReport('Goal:\nAudience:'), /Quality score:/);
  assert.equal(createPromptRecord({ goal: 'Save me', mode: 'chat', model: 'GPT', domain: 'Software' }, 'Goal:').title, 'Save me');
});
