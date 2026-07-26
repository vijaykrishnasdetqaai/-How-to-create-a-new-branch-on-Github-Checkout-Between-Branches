import assert from 'node:assert/strict';
import test from 'node:test';
import { DOMAINS, MODEL_FAMILIES, generatePrompt, normalizeInput } from '../src/prompt-engine.mjs';

test('exports broad model and domain coverage', () => {
  assert.ok(MODEL_FAMILIES.includes('ChatGPT / GPT'));
  assert.ok(MODEL_FAMILIES.includes('Stable Diffusion'));
  assert.ok(DOMAINS.includes('Software engineering'));
  assert.ok(DOMAINS.includes('Healthcare'));
});

test('normalizes empty input to fallback', () => {
  assert.equal(normalizeInput('  ', 'fallback'), 'fallback');
  assert.equal(normalizeInput(' value ', 'fallback'), 'value');
});

test('generates image prompts with loop and testing instructions', () => {
  const prompt = generatePrompt({
    mode: 'image',
    model: 'Midjourney',
    domain: 'Marketing',
    goal: 'Create a campaign hero image',
    audience: 'creative directors',
    loopCount: 2,
    includeTests: true
  });

  assert.match(prompt, /Midjourney/);
  assert.match(prompt, /visual composition/);
  assert.match(prompt, /functional tests, UI\/UX checks/);
  assert.match(prompt, /1\. Review/);
  assert.match(prompt, /2\. Review/);
  assert.doesNotMatch(prompt, /3\. Review/);
});

test('caps loop prompts at eight iterations', () => {
  const prompt = generatePrompt({ loopCount: 100 });
  assert.match(prompt, /8\. Review/);
  assert.doesNotMatch(prompt, /9\. Review/);
});
