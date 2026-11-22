import CodeBlock from "../../../components/common/CodeBlock";

function ContentSecurityPolicyCSP() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          BACKEND SECURITY / 12
        </p>
        <h1 className="mt-2 text-3xl font-bold">
          Content Security Policy (CSP)
        </h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          Content Security Policy (CSP) is a browser security mechanism that
          controls which sources are allowed to load resources such as
          JavaScript, CSS, images, and fonts.
        </p>
      </div>

      {/* 1. Why CSP? */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. Why CSP?</h2>
        <p className="text-[var(--text-secondary)]">
          If an attacker injects malicious JavaScript into a website,
          CSP can restrict the browser from executing scripts from
          unauthorized sources.
        </p>

        <CodeBlock
          code={`Without CSP:
Injected Script
      |
      v
Browser may execute malicious code

With CSP:
Injected Script
      |
      v
Browser checks CSP rules
      |
      v
Unauthorized script is blocked`}
        />
      </section>

      {/* 2. CSP Header */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Content-Security-Policy Header</h2>
        <p className="text-[var(--text-secondary)]">
          CSP rules are generally sent through the HTTP response header.
        </p>

        <CodeBlock
          code={`Content-Security-Policy: default-src 'self'; script-src 'self'`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Here, the browser is instructed to load resources from the same
          origin by default and allow scripts only from the same origin.
        </p>
      </section>

      {/* 3. Important Directives */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Important CSP Directives</h2>

        <div className="space-y-3">
          {[
            {
              name: "default-src",
              desc: "Default source for resource types without a specific directive.",
            },
            {
              name: "script-src",
              desc: "Controls allowed JavaScript sources.",
            },
            {
              name: "style-src",
              desc: "Controls allowed CSS sources.",
            },
            {
              name: "img-src",
              desc: "Controls allowed image sources.",
            },
            {
              name: "font-src",
              desc: "Controls allowed font sources.",
            },
            {
              name: "connect-src",
              desc: "Controls URLs used by fetch, XMLHttpRequest, WebSocket, and similar connections.",
            },
            {
              name: "object-src",
              desc: "Controls sources for plugins such as embedded objects.",
            },
            {
              name: "frame-src",
              desc: "Controls sources from which nested browsing contexts can load.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-lg border border-[var(--border-color)] p-4"
            >
              <h3 className="font-semibold">{item.name}</h3>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Common Source Values */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Common Source Values</h2>

        <CodeBlock
          code={`'self'       // Same origin
'none'       // No sources allowed
'https:'     // HTTPS sources
'unsafe-inline' // Allows inline scripts or styles
'unsafe-eval'   // Allows eval-like JavaScript execution`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Avoid unsafe-inline and unsafe-eval for scripts whenever possible.
          Nonces or hashes are safer ways to allow specific inline scripts.
        </p>
      </section>

      {/* 5. Configure CSP with Helmet */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Configure CSP with Helmet</h2>
        <p className="text-[var(--text-secondary)]">
          In Express, Helmet provides a convenient way to configure CSP.
        </p>

        <CodeBlock code={`npm install helmet`} />

        <CodeBlock
          code={`import express from "express";
import helmet from "helmet";

const app = express();

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'"],
        imgSrc: ["'self'", "data:"],
        connectSrc: ["'self'"],
        objectSrc: ["'none'"],
        frameAncestors: ["'none'"],
      },
    },
  })
);`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          This is a restrictive example. If your application uses external
          APIs, fonts, images, or other resources, add only the required
          trusted sources.
        </p>
      </section>

      {/* 6. Report Only Mode */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Report-Only Mode</h2>
        <p className="text-[var(--text-secondary)]">
          CSP Report-Only mode reports policy violations without blocking
          resources. It is useful for testing a policy before enforcing it.
        </p>

        <CodeBlock
          code={`app.use(
  helmet({
    contentSecurityPolicy: {
      reportOnly: true,
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
      },
    },
  })
);`}
        />
      </section>

      {/* 7. Important Points */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Important Points</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>CSP helps reduce the risk of XSS attacks.</li>
          <li>It controls which sources the browser can load resources from.</li>
          <li>It is commonly configured using the Content-Security-Policy header.</li>
          <li>Report-Only mode helps test policies before enforcement.</li>
          <li>CSP is an additional security layer, not a replacement for input validation and output encoding.</li>
        </ul>
      </section>

      {/* 8. Interview Questions */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Interview Questions</h2>

        {[
          {
            q: "What is Content Security Policy?",
            a: "CSP is a browser security mechanism that controls which sources can load resources on a webpage.",
          },
          {
            q: "How does CSP help prevent XSS?",
            a: "It restricts unauthorized scripts from executing according to the configured policy.",
          },
          {
            q: "What does 'self' mean in CSP?",
            a: "It allows resources from the same origin as the current document.",
          },
          {
            q: "What is default-src?",
            a: "It defines the default source policy for resource types that do not have a specific directive.",
          },
          {
            q: "What is CSP Report-Only mode?",
            a: "It reports policy violations without blocking the resources.",
          },
        ].map((item, index) => (
          <details
            key={index}
            className="group rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4"
          >
            <summary className="cursor-pointer font-medium">
              {index + 1}. {item.q}
            </summary>
            <p className="mt-3 text-sm text-[var(--text-secondary)]">
              {item.a}
            </p>
          </details>
        ))}
      </section>
    </div>
  );
}

export default ContentSecurityPolicyCSP;