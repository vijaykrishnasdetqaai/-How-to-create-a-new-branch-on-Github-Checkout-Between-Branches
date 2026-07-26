import { PROMPT_TOOL_CATEGORIES, createCategoryPrompt, getCategory } from '../src/categories.mjs';

const slug = document.body.dataset.category;
const category = getCategory(slug);
const title = document.querySelector('#category-title');
const summary = document.querySelector('#category-summary');
const list = document.querySelector('#tool-list');
const output = document.querySelector('#category-output');
const goal = document.querySelector('#category-goal');

title.textContent = category.title;
summary.textContent = category.summary;
list.innerHTML = category.tools.map((tool) => `<li>${tool}</li>`).join('');
output.textContent = createCategoryPrompt(slug, goal.value);

document.querySelector('#generate-category-prompt').addEventListener('click', () => {
  output.textContent = createCategoryPrompt(slug, goal.value);
});

document.querySelector('#category-nav').innerHTML = PROMPT_TOOL_CATEGORIES.map((item) => `<a href="${item.slug}.html">${item.title}</a>`).join('');
