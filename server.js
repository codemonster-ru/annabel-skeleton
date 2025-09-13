import express from 'express';
import { createServer as createViteServer } from 'vite';

async function createServer() {
    const app = express();
    const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: 'custom',
    });

    app.use(express.json());
    app.use(vite.middlewares);
    app.post('/render', async (req, res) => {
        try {
            const { component, props } = req.body;
            const { render } = await vite.ssrLoadModule('/resources/js/entry-server.js');
            const html = await render(component, props || {});

            const stateScript = `<script>window.__COMPONENT__=${JSON.stringify(
                component,
            )};window.__PROPS__=${JSON.stringify(props || {})}</script>`;

            const template = `<!doctype html>
<html lang="ru">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Annabel — ${component}</title>
  </head>
  <body>
    <div id="app">${html}</div>
    ${stateScript}
    <script type="module" src="http://localhost:3001/@vite/client"></script>
    <script type="module" src="http://localhost:3001/resources/js/entry-client.js"></script>
  </body>
</html>`;

            res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
        } catch (e) {
            vite.ssrFixStacktrace(e);
            res.status(500).end(e.message);
        }
    });

    app.listen(3001, () => {
        console.log('🚀 SSR server is running on http://localhost:3001');
    });
}

createServer();
