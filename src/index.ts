import { Hono } from 'hono'

const app = new Hono()

// ───────────────── SHELL ─────────────────

const htmlShell = (title: string, body: string) => `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>${title}</title>
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <style>
      :root {
        color-scheme: dark;
        --bg: #050505;
        --card: #0f0f10;
        --border: #222;
        --text: #f5f5f5;
        --muted: #9ca3af;
        --accent: #e5e5e5;
      }
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body {
        min-height: 100vh;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif;
        background: radial-gradient(circle at top, #111 0, #050505 55%);
        color: var(--text);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem 1.5rem;
      }
      .card {
        width: 100%;
        max-width: 720px;
        border-radius: 1.25rem;
        border: 1px solid var(--border);
        background: radial-gradient(circle at top left, #151515 0, var(--card) 50%, #050505 100%);
        padding: 1.75rem 1.75rem 1.5rem;
      }
      .eyebrow {
        font-size: 0.7rem;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        color: var(--muted);
        margin-bottom: 0.75rem;
      }
      h1 {
        font-size: 1.6rem;
        line-height: 1.2;
        margin-bottom: 0.75rem;
      }
      p {
        font-size: 0.9rem;
        line-height: 1.6;
        color: var(--muted);
      }
      .grid {
        display: grid;
        grid-template-columns: 1.1fr 1fr;
        gap: 1.5rem;
      }
      @media (max-width: 640px) {
        .grid { grid-template-columns: 1fr; }
      }
      .pill-row {
        display: flex;
        flex-wrap: wrap;
        gap: 0.4rem;
        margin: 1.25rem 0 0.75rem;
      }
      .pill {
        font-size: 0.7rem;
        text-transform: uppercase;
        letter-spacing: 0.16em;
        padding: 0.25rem 0.6rem;
        border-radius: 999px;
        border: 1px solid var(--border);
        color: var(--muted);
      }
      .pill strong {
        color: var(--accent);
        font-weight: 600;
      }
      .links {
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
        margin-top: 0.5rem;
        font-size: 0.8rem;
      }
      .links a {
        color: var(--accent);
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 0.3rem;
      }
      .links a span {
        font-size: 0.75rem;
        color: var(--muted);
      }
      .links a:hover {
        text-decoration: underline;
      }
      .meta {
        margin-top: 1.5rem;
        padding-top: 0.75rem;
        border-top: 1px solid var(--border);
        display: flex;
        justify-content: space-between;
        gap: 0.75rem;
        font-size: 0.75rem;
        color: var(--muted);
      }
      .badge {
        padding: 0.1rem 0.55rem;
        border-radius: 999px;
        border: 1px solid var(--border);
        font-size: 0.7rem;
        text-transform: uppercase;
        letter-spacing: 0.14em;
      }
      .back {
        font-size: 0.8rem;
        margin-bottom: 1rem;
      }
      .back a {
        color: var(--muted);
        text-decoration: none;
      }
      .back a:hover {
        color: var(--accent);
        text-decoration: underline;
      }
      ul {
        padding-left: 1rem;
        margin-top: 0.6rem;
        font-size: 0.85rem;
        color: var(--muted);
      }
      code {
        font-family: SFMono-Regular, ui-monospace, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        font-size: 0.8rem;
      }
    </style>
  </head>
  <body>
    <div class="card">
      ${body}
    </div>
  </body>
</html>`

// ───────────────── HTML ROUTES ─────────────────

app.get('/', (c) => {
  const body = `
    <div class="grid">
      <div>
        <div class="eyebrow">Forgeon · Hono + Bun playground</div>
        <h1>Hono boilerplate, ready for deploy tests.</h1>
        <p>
          This service is a small <strong>Hono</strong> app running on <strong>Bun</strong>
          that you can use to test routing, health checks, JSON APIs, and HTML responses
          inside Forgeon or on your local machine.
        </p>

        <div class="pill-row">
          <div class="pill"><strong>GET</strong> /</div>
          <div class="pill">Hono · Bun</div>
          <div class="pill">Playground mode (no DB required)</div>
        </div>
      </div>

      <div>
        <div class="links">
          <a href="/info">
            /info
            <span>– service overview & Forgeon context</span>
          </a>
          <a href="/about">
            /about
            <span>– what this boilerplate is for</span>
          </a>
          <a href="/framework">
            /framework
            <span>– stack: Hono, Bun, TypeScript</span>
          </a>
          <a href="/status">
            /status
            <span>– JSON health endpoint</span>
          </a>
          <a href="/v1">
            /v1
            <span>– JSON API index</span>
          </a>
        </div>
      </div>
    </div>

    <div class="meta">
      <span>Try deploying this to Forgeon as a simple Hono+Bun playground.</span>
      <span class="badge">localhost:3000 · Bun ${process.versions.bun}</span>
    </div>
  `
  return c.html(htmlShell('Forgeon Hono + Bun playground', body))
})

app.get('/info', (c) => {
  const body = `
    <div class="back">
      <a href="/">← Back to home</a>
    </div>

    <div class="grid">
      <div>
        <div class="eyebrow">Service info</div>
        <h1>hono-bun-playground · Forgeon-ready microservice</h1>
        <p>
          This instance exposes a couple of HTML & JSON endpoints so you can
          quickly verify that traffic is reaching the runtime correctly.
        </p>

        <ul>
          <li>Check that the function boots and responds under Bun.</li>
          <li>Wire health checks to <code>/status</code>.</li>
          <li>Inspect logs and latency from Forgeon.</li>
        </ul>
      </div>

      <div>
        <div class="links">
          <a href="/">
            / <span>– landing page</span>
          </a>
          <a href="/v1">
            /v1 <span>– JSON index for API v1</span>
          </a>
          <a href="https://forgeon.io" target="_blank" rel="noreferrer">
            forgeon.io <span>– learn more about the platform</span>
          </a>
        </div>
      </div>
    </div>
  `
  return c.html(htmlShell('Forgeon · Hono + Bun · Info', body))
})

app.get('/about', (c) => {
  const body = `
    <div class="back">
      <a href="/">← Back to home</a>
    </div>

    <div>
      <div class="eyebrow">About this playground</div>
      <h1>Hono + Bun app wired for Forgeon.</h1>
      <p>
        This tiny service is a <strong>Hono</strong> playground running on <strong>Bun</strong>,
        used to test how Forgeon talks to containers and runtimes: health checks, routes,
        timeouts, and log streaming.
      </p>
      <p>
        It's not a production app – just a safe sandbox you can deploy, poke, and
        then replace with your real service once everything feels right.
      </p>

      <ul>
        <li>Boots fast with no database configured.</li>
        <li>Has HTML endpoints for visual checks.</li>
        <li>Has JSON endpoints for programmatic checks.</li>
      </ul>
    </div>
  `
  return c.html(htmlShell('Forgeon · About this Hono + Bun demo', body))
})

app.get('/framework', (c) => {
  const body = `
    <div class="back">
      <a href="/">← Back to home</a>
    </div>

    <div class="grid">
      <div>
        <div class="eyebrow">Stack</div>
        <h1>Built with Hono & Bun.</h1>
        <p>
          The service uses <strong>Hono</strong> as a lightweight HTTP framework and
          <strong>Bun</strong> as the JS runtime. In playground mode it runs without
          any database or extra dependencies.
        </p>
      </div>

      <div>
        <div class="links">
          <a href="/status">
            /status <span>– health JSON</span>
          </a>
          <a href="/info">
            /info <span>– service overview</span>
          </a>
          <a href="/v1">
            /v1 <span>– API index</span>
          </a>
        </div>
      </div>
    </div>
  `
  return c.html(htmlShell('Forgeon · Hono + Bun stack', body))
})

// ───────────────── JSON ROUTES ─────────────────

app.get('/status', (c) => {
  return c.json({
    status: 'ok',
    service: 'hono-bun-playground',
    runtime: 'bun',
    bunVersion: process.versions.bun,
    timestamp: new Date().toISOString(),
  })
})

app.get('/v1', (c) => {
  return c.json({
    message: 'Hono + Bun API v1 index',
    service: 'hono-bun-playground',
    routes: {
      html: ['/', '/info', '/about', '/framework'],
      health: ['/status'],
      api: ['/v1'],
    },
  })
})

// ───────────────── BUN SERVER ─────────────────

const PORT = Number(process.env.PORT || '3000')

const server = Bun.serve({
  port: PORT,
  fetch: app.fetch,
})

console.log(`🚀 Hono + Bun playground listening on http://localhost:${server.port}`)
