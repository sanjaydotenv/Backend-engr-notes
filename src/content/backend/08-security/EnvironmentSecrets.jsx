import CodeBlock from "../../../components/common/CodeBlock";

function EnvironmentSecrets() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          BACKEND SECURITY / 14
        </p>
        <h1 className="mt-2 text-3xl font-bold">Environment Secrets</h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          Environment Secrets are sensitive values such as API keys,
          database credentials, JWT secrets, and OAuth credentials.
          They should be stored securely instead of hardcoding them
          directly into source code.
        </p>
      </div>

      {/* 1. Why Environment Secrets? */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. Why Environment Secrets?</h2>
        <p className="text-[var(--text-secondary)]">
          Hardcoding secrets in source code can expose them when code is
          shared, uploaded to GitHub, or accessed by unauthorized people.
        </p>

        <CodeBlock
          code={`// Bad Practice
const DB_PASSWORD = "myDatabasePassword";
const JWT_SECRET = "mySecret123";`}
        />

        <p className="text-[var(--text-secondary)]">
          Instead, store these values in environment variables and access
          them when your application runs.
        </p>
      </section>

      {/* 2. Install dotenv */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Install dotenv</h2>
        <CodeBlock code={`npm install dotenv`} />
        <p className="text-sm text-[var(--text-secondary)]">
          The dotenv package loads variables from a .env file into
          process.env.
        </p>
      </section>

      {/* 3. Create .env */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Create a .env File</h2>
        <p className="text-[var(--text-secondary)]">
          Create a <code>.env</code> file in your backend project root.
        </p>

        <CodeBlock
          code={`PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/myapp
JWT_SECRET=your_long_random_secret
EMAIL_USER=your_email@example.com
EMAIL_PASSWORD=your_email_password`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          These are example values. Use your actual credentials locally
          and never commit them to Git.
        </p>
      </section>

      {/* 4. Load Environment Variables */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Load Environment Variables</h2>

        <CodeBlock
          code={`// server.js
import "dotenv/config";
import express from "express";

const app = express();

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
const JWT_SECRET = process.env.JWT_SECRET;

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Environment variables are accessed through
          <code> process.env </code>.
        </p>
      </section>

      {/* 5. Add .env to gitignore */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Protect Secrets with .gitignore</h2>
        <p className="text-[var(--text-secondary)]">
          Add sensitive environment files to .gitignore so Git does not
          track them.
        </p>

        <CodeBlock
          code={`# .gitignore

.env
.env.local
.env.production
node_modules/`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          If a secret was already committed, adding .env to .gitignore
          does not remove it from Git history. Revoke or rotate the
          exposed credential.
        </p>
      </section>

      {/* 6. Create .env.example */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Create .env.example</h2>
        <p className="text-[var(--text-secondary)]">
          Share the required variable names with other developers without
          sharing actual secret values.
        </p>

        <CodeBlock
          code={`# .env.example

PORT=
MONGO_URI=
JWT_SECRET=
EMAIL_USER=
EMAIL_PASSWORD=`}
        />
      </section>

      {/* 7. Generate Strong Secrets */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Generate Strong Secrets</h2>
        <p className="text-[var(--text-secondary)]">
          Use cryptographically secure random values for secrets such as
          JWT signing keys.
        </p>

        <CodeBlock
          code={`import { randomBytes } from "node:crypto";

const secret = randomBytes(32).toString("hex");

console.log(secret);`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Generate the secret once, store it securely, and use the same
          value across the application instances that need to verify tokens.
        </p>
      </section>

      {/* 8. Important Security Rules */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Important Security Rules</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>Never hardcode passwords, API keys, or JWT secrets.</li>
          <li>Never upload real .env files to GitHub.</li>
          <li>Never expose backend secrets through frontend environment variables.</li>
          <li>Validate required environment variables when the server starts.</li>
          <li>Use different secrets for development, testing, and production.</li>
          <li>Rotate secrets immediately if they are exposed.</li>
          <li>Use a dedicated secrets manager for production applications when appropriate.</li>
        </ul>
      </section>

      {/* 9. Interview Questions */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Interview Questions</h2>

        {[
          {
            q: "What are Environment Variables?",
            a: "They are values provided to an application through its runtime environment, commonly used for configuration and secrets.",
          },
          {
            q: "What is dotenv?",
            a: "dotenv is a Node.js package that loads variables from a .env file into process.env.",
          },
          {
            q: "Why should we add .env to .gitignore?",
            a: "To prevent Git from tracking sensitive environment files and accidentally exposing credentials.",
          },
          {
            q: "What is process.env?",
            a: "It is a Node.js object that provides access to environment variables.",
          },
          {
            q: "What should we do if an API key is exposed on GitHub?",
            a: "Revoke or rotate the exposed key immediately and remove the secret from the repository history where appropriate.",
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

export default EnvironmentSecrets;