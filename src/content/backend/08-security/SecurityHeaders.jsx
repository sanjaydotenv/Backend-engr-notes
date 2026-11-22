import CodeBlock from "../../../components/common/CodeBlock";

function SecurityHeaders() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          BACKEND SECURITY / 11
        </p>
        <h1 className="mt-2 text-3xl font-bold">Security Headers</h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          Security Headers are HTTP response headers that tell browsers how
          to handle website content securely and help protect applications
          against common web attacks.
        </p>
      </div>

      {/* 1. How Security Headers Work */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. How Security Headers Work</h2>
        <p className="text-[var(--text-secondary)]">
          When a server sends a response, it includes HTTP headers.
          The browser reads these headers and applies the specified security
          rules.
        </p>

        <CodeBlock
          code={`Client
  |
  |  HTTP Request
  v
Express Server
  |
  |  HTTP Response + Security Headers
  v
Browser applies security rules`}
        />
      </section>

      {/* 2. Important Headers */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Important Security Headers</h2>

        <div className="space-y-3">
          {[
            {
              name: "Content-Security-Policy (CSP)",
              desc: "Controls which sources are allowed to load scripts, styles, images, and other resources. Helps reduce XSS risks.",
            },
            {
              name: "Strict-Transport-Security (HSTS)",
              desc: "Tells browsers to use HTTPS for future connections to the website.",
            },
            {
              name: "X-Content-Type-Options",
              desc: "Using nosniff prevents browsers from guessing a response's MIME type.",
            },
            {
              name: "X-Frame-Options",
              desc: "Controls whether a page can be displayed inside frames. Helps protect against clickjacking.",
            },
            {
              name: "Referrer-Policy",
              desc: "Controls how much referrer information the browser sends to other websites.",
            },
            {
              name: "Permissions-Policy",
              desc: "Controls access to browser features such as camera, microphone, and geolocation.",
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

      {/* 3. Configure in Express */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Configure Security Headers in Express</h2>
        <p className="text-[var(--text-secondary)]">
          We can manually set security headers using Express middleware.
        </p>

        <CodeBlock
          code={`import express from "express";

const app = express();

app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");

  res.setHeader("X-Frame-Options", "DENY");

  res.setHeader(
    "Referrer-Policy",
    "strict-origin-when-cross-origin"
  );

  next();
});`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          This middleware adds the specified headers to responses that pass
          through it.
        </p>
      </section>

      {/* 4. Helmet */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Security Headers Using Helmet</h2>
        <p className="text-[var(--text-secondary)]">
          Instead of manually configuring multiple headers, we can use
          Helmet middleware.
        </p>

        <CodeBlock
          code={`npm install helmet`}
        />

        <CodeBlock
          code={`import helmet from "helmet";

app.use(helmet());`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Helmet sets several security headers with sensible defaults.
          You can customize its configuration according to your application.
        </p>
      </section>

      {/* 5. Helmet vs Security Headers */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Helmet vs Security Headers</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="p-3 text-left">Security Headers</th>
                <th className="p-3 text-left">Helmet</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr>
                <td className="p-3">HTTP security rules.</td>
                <td className="p-3">Express middleware.</td>
              </tr>
              <tr>
                <td className="p-3">Can be configured manually.</td>
                <td className="p-3">Sets multiple headers automatically.</td>
              </tr>
              <tr>
                <td className="p-3">Part of HTTP security.</td>
                <td className="p-3">Helps implement HTTP security headers.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 6. Important Points */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Important Points</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>Security headers are sent with HTTP responses.</li>
          <li>Use HTTPS and configure HSTS carefully in production.</li>
          <li>Configure CSP according to your application's resources.</li>
          <li>Avoid conflicting or duplicate header configurations.</li>
          <li>Security headers reduce risks but cannot prevent every attack.</li>
        </ul>
      </section>

      {/* 7. Interview Questions */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Interview Questions</h2>

        {[
          {
            q: "What are Security Headers?",
            a: "HTTP response headers that tell browsers how to handle website content securely.",
          },
          {
            q: "What is CSP?",
            a: "Content Security Policy controls which sources the browser can load resources from.",
          },
          {
            q: "What is HSTS?",
            a: "HTTP Strict Transport Security tells browsers to use HTTPS for future connections.",
          },
          {
            q: "What is X-Frame-Options?",
            a: "It controls whether a page can be embedded inside frames and helps prevent clickjacking.",
          },
          {
            q: "What is the relationship between Helmet and Security Headers?",
            a: "Security headers are HTTP headers, while Helmet is Express middleware that configures several of them.",
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

export default SecurityHeaders;