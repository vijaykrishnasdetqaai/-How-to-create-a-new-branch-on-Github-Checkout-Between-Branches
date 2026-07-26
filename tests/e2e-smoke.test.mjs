import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join } from 'node:path';
import test from 'node:test';

const types = { '.html': 'text/html', '.css': 'text/css', '.mjs': 'text/javascript' };

test('e2e smoke serves app shell and all module scripts', async () => {
  const root = process.cwd();
  const server = createServer(async (req, res) => {
    const path = req.url === '/' ? 'index.html' : req.url.slice(1);
    try {
      const file = await readFile(join(root, path));
      res.writeHead(200, { 'content-type': types[extname(path)] || 'text/plain' });
      res.end(file);
    } catch {
      res.writeHead(404);
      res.end('not found');
    }
  });
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const { port } = server.address();
  try {
    for (const path of ['/', '/pages/chat-tools.html', '/pages/image-tools.html', '/pages/video-tools.html', '/pages/software-tools.html', '/pages/business-tools.html', '/pages/quality-tools.html', '/pages/category.js', '/src/categories.mjs', '/src/app.mjs', '/src/modules.mjs', '/src/advanced-modules.mjs', '/src/next-builds.mjs', '/src/module-planner.mjs', '/src/prompt-engine.mjs', '/src/styles.css']) {
      const response = await fetch(`http://127.0.0.1:${port}${path}`);
      assert.equal(response.status, 200, path);
      const body = await response.text();
      assert.ok(body.length > 100, path);
    }
  } finally {
    server.close();
  }
});
