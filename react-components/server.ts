/* eslint-disable no-console */
import fs from 'node:fs/promises';
import express from 'express';

// Constants
const port = process.env.PORT || 5173;
const base = process.env.BASE || '/';

// Create http server
const app = express();

app.use('/static', express.static('static'));

const { createServer } = await import('vite');
const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
  base,
});
app.use(vite.middlewares);

app.use('*', async (req, res) => {
  try {
    const url = req.originalUrl;

    let template = await fs.readFile('./index.html', 'utf-8');
    template = await vite.transformIndexHtml(url, template);
    const entryServer = await vite.ssrLoadModule('/src/entry-server.tsx');

    // To create store
    const storeModule = await vite.ssrLoadModule('/src/redux/store.ts');
    const store = storeModule.setupStore({});
    const preloadedState = store.getState();
    const storeTemplate = renderStoreTemplate(preloadedState);

    // Serve HTML
    const parts = template.split('<!--split-->');
    res.write(parts[0]);
    const stream = await entryServer.render(url, {
      onShellReady() {
        stream.pipe(res);
      },
      onAllReady() {
        res.write(parts[1]);
        res.write(storeTemplate);
        res.write(parts[2]);
        res.end();
      },
      onError(err: Error) {
        console.error(err);
      },
    });
  } catch (e) {
    const err = e as Error;
    vite?.ssrFixStacktrace(err);
    console.log(err.stack);
    res.status(500).end(err.stack);
  }
});

// Start http server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

// Helper function
function renderStoreTemplate(preloadedState: unknown) {
  return `
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // https://redux.js.org/usage/server-rendering#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
    `;
}
