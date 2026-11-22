import CodeBlock from "../../../components/common/CodeBlock";

function RateLimiting() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          BACKEND SECURITY / 08
        </p>
        <h1 className="mt-2 text-3xl font-bold">Rate Limiting</h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          Rate Limiting is a security technique that restricts how many
          requests a client can make to an API within a specific time period.
          It helps protect servers from abuse and excessive traffic.
        </p>
      </div>

      {/* 1. Why Rate Limiting? */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. Why Rate Limiting?</h2>
        <p className="text-[var(--text-secondary)]">
          Without request limits, attackers or misbehaving clients can send
          thousands of requests and consume server resources.
        </p>

        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>Protects APIs from excessive requests.</li>
          <li>Reduces brute-force login attempts.</li>
          <li>Helps prevent API abuse.</li>
          <li>Protects server resources.</li>
        </ul>
      </section>

      {/* 2. How It Works */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. How Rate Limiting Works</h2>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-2 text-sm">
          <div className="rounded-lg border border-[var(--border-color)] p-3 text-center">
            Client sends API requests
          </div>
          <div className="text-center text-[var(--accent-color)]">↓</div>
          <div className="rounded-lg border border-[var(--border-color)] p-3 text-center">
            Server checks request count
          </div>
          <div className="text-center text-[var(--accent-color)]">↓</div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-[var(--border-color)] p-3 text-center">
              Within limit
              <p className="mt-1 text-green-500">Allow request</p>
            </div>
            <div className="rounded-lg border border-[var(--border-color)] p-3 text-center">
              Limit exceeded
              <p className="mt-1 text-red-500">Reject request</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Express Implementation */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Rate Limiting in Express</h2>
        <p className="text-[var(--text-secondary)]">
          We can use the <code>express-rate-limit</code> package to limit
          requests from clients.
        </p>

        <CodeBlock code={`npm install express-rate-limit`} />

        <CodeBlock
          code={`import express from "express";
import rateLimit from "express-rate-limit";

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100,               // 100 requests
  message: {
    message: "Too many requests. Try again later.",
  },
  standardHeaders: "draft-8",
  legacyHeaders: false,
});

app.use("/api", limiter);`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Here, each client can make up to 100 requests within a 15-minute
          window. After that, the server returns HTTP 429 (Too Many Requests).
        </p>
      </section>

      {/* 4. Different Limits */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Different Limits for Different Routes</h2>
        <p className="text-[var(--text-secondary)]">
          Sensitive routes like login and OTP verification should have
          stricter limits than normal API routes.
        </p>

        <CodeBlock
          code={`const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  message: "Too many login attempts. Try later.",
});

app.use("/api/auth/login", loginLimiter);`}
        />
      </section>

      {/* 5. Important Practices */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Important Practices</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>Use stricter limits for login, OTP, and password reset routes.</li>
          <li>Return HTTP 429 when the limit is exceeded.</li>
          <li>Use a shared store like Redis in multi-server deployments.</li>
          <li>Configure trusted proxy settings correctly when behind a proxy.</li>
          <li>Monitor unusual request patterns.</li>
        </ul>
      </section>

      {/* 6. Interview Questions */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Interview Questions</h2>

        {[
          {
            q: "What is Rate Limiting?",
            a: "It restricts the number of requests a client can make within a specific time period.",
          },
          {
            q: "Why is Rate Limiting important?",
            a: "It helps prevent API abuse, brute-force attempts, and excessive server load.",
          },
          {
            q: "Which HTTP status code is used when the rate limit is exceeded?",
            a: "429 Too Many Requests.",
          },
          {
            q: "What is a time window in Rate Limiting?",
            a: "It is the period during which the server counts requests, such as 15 minutes.",
          },
          {
            q: "Why use Redis for Rate Limiting?",
            a: "Redis provides shared request counters across multiple server instances.",
          },
          {
            q: "What is the difference between Rate Limiting and Brute Force Protection?",
            a: "Rate Limiting controls request frequency, while brute-force protection specifically prevents repeated attempts to guess credentials.",
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

export default RateLimiting;