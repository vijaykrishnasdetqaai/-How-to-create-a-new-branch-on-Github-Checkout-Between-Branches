import assert from 'node:assert/strict';
import test from 'node:test';
import { PROMPT_TOOL_CATEGORIES, createCategoryPrompt, getCategory } from '../src/categories.mjs';

test('defines separate prompt tool categories', () => {
  assert.equal(PROMPT_TOOL_CATEGORIES.length, 6);
  assert.ok(PROMPT_TOOL_CATEGORIES.every((category) => category.tools.length >= 5));
});

test('creates category-specific prompts', () => {
  const prompt = createCategoryPrompt('video-tools', 'Create a product launch film');
  assert.match(prompt, /Video Prompt Tools/);
  assert.match(prompt, /Shot-list generator/);
  assert.match(prompt, /Create a product launch film/);
});

test('falls back to first category for unknown slug', () => {
  assert.equal(getCategory('missing').slug, PROMPT_TOOL_CATEGORIES[0].slug);
});
