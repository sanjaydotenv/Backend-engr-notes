import CodeBlock from "../../../components/common/CodeBlock";

function CORSSecurity() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          BACKEND SECURITY / 02
        </p>
        <h1 className="mt-2 text-3xl font-bold">CORS Security</h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          CORS (Cross-Origin Resource Sharing) is a browser security mechanism
          that controls which origins are allowed to access resources from a
          server.
        </p>
      </div>

      {/* 1. What is CORS? */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What is CORS?</h2>
        <p className="text-[var(--text-secondary)]">
          An origin consists of three things: protocol, domain, and port.
          If any of these are different, the origins are considered different.
        </p>

        <CodeBlock
          code={`Frontend: http://localhost:5173
Backend:  http://localhost:3000

Different ports = Different origins`}
        />

        <p className="text-[var(--text-secondary)]">
          By default, browsers restrict frontend JavaScript from reading
          responses from a different origin. CORS allows the server to specify
          which origins can access its resources.
        </p>
      </section>

      {/* 2. How CORS Works */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. How CORS Works</h2>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-2 text-sm">
          <div className="rounded-lg border border-[var(--border-color)] p-3 text-center">
            Frontend sends an API request
          </div>
          <div className="text-center text-[var(--accent-color)]">↓</div>
          <div className="rounded-lg border border-[var(--border-color)] p-3 text-center">
            Backend checks the request origin
          </div>
          <div className="text-center text-[var(--accent-color)]">↓</div>
          <div className="rounded-lg border border-[var(--border-color)] p-3 text-center">
            Backend sends CORS response headers
          </div>
          <div className="text-center text-[var(--accent-color)]">↓</div>
          <div className="rounded-lg border border-[var(--border-color)] p-3 text-center">
            Browser allows or blocks frontend access to the response
          </div>
        </div>

        <p className="text-sm text-[var(--text-secondary)]">
          For some requests, the browser first sends a preflight request using
          the OPTIONS method to check whether the actual request is allowed.
        </p>
      </section>

      {/* 3. Configure CORS */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Configure CORS in Express</h2>
        <p className="text-[var(--text-secondary)]">
          Express applications commonly use the <code>cors</code> package to
          configure allowed origins.
        </p>

        <CodeBlock
          code={`npm install cors`}
        />

        <CodeBlock
          code={`import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);`}
        />

        <p className="text-[var(--text-secondary)]">
          Here, only the specified frontend origin is allowed. The
          <code> credentials: true </code> option allows credentialed requests
          such as requests containing cookies.
        </p>
      </section>

      {/* 4. Important Rules */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Important CORS Rules</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>Do not allow every origin in production unnecessarily.</li>
          <li>
            When using credentials, specify an exact origin instead of
            <code> *</code>.
          </li>
          <li>Allow only the HTTP methods your API needs.</li>
          <li>Allow only the required request headers.</li>
          <li>CORS is enforced by browsers, not a replacement for authentication or authorization.</li>
        </ul>
      </section>

      {/* 5. Interview Questions */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Interview Questions</h2>

        {[
          {
            q: "What is CORS?",
            a: "CORS is a browser security mechanism that controls cross-origin access to server resources.",
          },
          {
            q: "What is an origin?",
            a: "An origin consists of protocol, domain, and port.",
          },
          {
            q: "What is a preflight request?",
            a: "It is an OPTIONS request sent by the browser before certain cross-origin requests to check whether the actual request is allowed.",
          },
          {
            q: "What is the purpose of credentials: true?",
            a: "It allows the browser to include credentials such as cookies in cross-origin requests, when the server also permits them.",
          },
          {
            q: "Is CORS an authentication mechanism?",
            a: "No. CORS controls browser access to responses. Authentication verifies user identity.",
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

export default CORSSecurity;