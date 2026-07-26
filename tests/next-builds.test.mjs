import assert from 'node:assert/strict';
import test from 'node:test';
import { NEXT_BUILD_MODULES, createNextBuildBrief, getNextBuild } from '../src/next-builds.mjs';

test('defines advanced next-build modules', () => {
  assert.ok(NEXT_BUILD_MODULES.length >= 21);
  assert.ok(NEXT_BUILD_MODULES.some((module) => module.id === 'prompt-chain-builder'));
  assert.ok(NEXT_BUILD_MODULES.some((module) => module.id === 'security-sandbox'));
  assert.ok(NEXT_BUILD_MODULES.some((module) => module.id === 'ab-testing-lab'));
  assert.ok(NEXT_BUILD_MODULES.some((module) => module.id === 'voice-prompt-studio'));
  assert.ok(NEXT_BUILD_MODULES.some((module) => module.id === 'prompt-api-simulator'));
  assert.ok(NEXT_BUILD_MODULES.some((module) => module.id === 'benchmark-suite'));
  assert.ok(NEXT_BUILD_MODULES.some((module) => module.id === 'marketplace-publishing-kit'));
  assert.ok(NEXT_BUILD_MODULES.every((module) => module.prompt.includes('prompt') || module.prompt.includes('Prompt')));
});

test('creates a build brief with e2e and uiux instructions', () => {
  const brief = createNextBuildBrief('governance-guardrails');
  assert.match(brief, /Governance Guardrails/);
  assert.match(brief, /E2E smoke coverage/);
  assert.match(brief, /UI\/UX checks/);
});

test('falls back for unknown next-build ids', () => {
  assert.equal(getNextBuild('unknown').id, NEXT_BUILD_MODULES[0].id);
});
