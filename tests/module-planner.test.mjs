import assert from 'node:assert/strict';
import test from 'node:test';
import { BUILD_MODULES, createModulePlan, getModuleById } from '../src/module-planner.mjs';

test('defines a practical module roadmap', () => {
  assert.ok(BUILD_MODULES.length >= 6);
  assert.ok(BUILD_MODULES.some((module) => module.id === 'software-specs'));
  assert.ok(BUILD_MODULES.every((module) => module.deliverables.length >= 3));
});

test('falls back to the first module for unknown ids', () => {
  assert.equal(getModuleById('missing').id, BUILD_MODULES[0].id);
});

test('creates a one-by-one build plan with deliverables and acceptance criteria', () => {
  const plan = createModulePlan('quality-center');
  assert.match(plan, /Build one-by-one plan/);
  assert.match(plan, /functional tests/i);
  assert.match(plan, /Acceptance criteria/);
});
