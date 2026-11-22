import CodeBlock from "../../../components/common/CodeBlock";

function Helmet() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          BACKEND SECURITY / 10
        </p>
        <h1 className="mt-2 text-3xl font-bold">Helmet in Express.js</h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          Helmet is an Express.js middleware that sets HTTP security headers
          to help protect applications from common web vulnerabilities.
        </p>
      </div>

      {/* 1. Why Helmet? */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. Why Helmet?</h2>
        <p className="text-[var(--text-secondary)]">
          Browsers use HTTP response headers to apply security rules.
          Helmet configures several important headers automatically,
          reducing the need to set them manually.
        </p>
      </section>

      {/* 2. Installation */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Installation</h2>
        <CodeBlock code={`npm install helmet`} />
      </section>

      {/* 3. Configuration */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Configure Helmet in Express</h2>
        <p className="text-[var(--text-secondary)]">
          Import Helmet and register it as middleware before your routes.
        </p>

        <CodeBlock
          code={`import express from "express";
import helmet from "helmet";

const app = express();

app.use(helmet());

app.use(express.json());

// API routes
app.use("/api/users", userRoutes);`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Helmet automatically adds multiple security-related HTTP headers
          to server responses.
        </p>
      </section>

      {/* 4. Important Headers */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Important Security Headers</h2>

        <div className="space-y-3">
          {[
            {
              name: "Content-Security-Policy",
              desc: "Controls which sources are allowed to load scripts, styles, images, and other resources.",
            },
            {
              name: "X-Content-Type-Options",
              desc: "Helps prevent browsers from MIME-sniffing a response.",
            },
            {
              name: "X-Frame-Options",
              desc: "Controls whether a page can be displayed inside a frame.",
            },
            {
              name: "Strict-Transport-Security",
              desc: "Tells browsers to use HTTPS for future connections.",
            },
            {
              name: "Referrer-Policy",
              desc: "Controls how much referrer information is shared with other websites.",
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

      {/* 5. Custom Configuration */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Custom Configuration</h2>
        <p className="text-[var(--text-secondary)]">
          You can customize Helmet options according to your application's
          requirements.
        </p>

        <CodeBlock
          code={`app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'", "https:"],
      },
    },
  })
);`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          A strict Content Security Policy may block resources your frontend
          needs. Configure its directives according to your application.
        </p>
      </section>

      {/* 6. Important Points */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Important Points</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>Use Helmet in Express applications.</li>
          <li>Register it before application routes.</li>
          <li>Configure CSP according to your frontend resources.</li>
          <li>Use HTTPS in production.</li>
          <li>Helmet adds security headers but does not replace authentication, validation, or other security measures.</li>
        </ul>
      </section>

      {/* 7. Interview Questions */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Interview Questions</h2>

        {[
          {
            q: "What is Helmet in Express.js?",
            a: "Helmet is middleware that sets HTTP security headers to help protect Express applications.",
          },
          {
            q: "How do you install Helmet?",
            a: "Run npm install helmet and import it into your Express application.",
          },
          {
            q: "What is Content-Security-Policy?",
            a: "CSP controls which sources the browser is allowed to load resources from.",
          },
          {
            q: "Does Helmet prevent all security attacks?",
            a: "No. It adds security headers but does not replace other security practices.",
          },
          {
            q: "Where should Helmet middleware be registered?",
            a: "Usually before application routes so its headers are applied to route responses.",
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

export default Helmet;