import CodeBlock from "../../../components/common/CodeBlock";

function SecretsManagement() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          BACKEND SECURITY / 15
        </p>
        <h1 className="mt-2 text-3xl font-bold">Secrets Management</h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          Secrets Management is the process of securely creating, storing,
          accessing, rotating, and revoking sensitive information such as
          API keys, database passwords, JWT secrets, and OAuth credentials.
        </p>
      </div>

      {/* 1. Why Secrets Management? */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. Why Secrets Management?</h2>
        <p className="text-[var(--text-secondary)]">
          Applications need sensitive credentials to communicate with
          databases, APIs, email services, and other systems. If these
          credentials are exposed, attackers may gain unauthorized access.
        </p>

        <CodeBlock
          code={`Common Secrets:

DATABASE_URL
JWT_SECRET
API_KEY
OAUTH_CLIENT_SECRET
EMAIL_PASSWORD`}
        />
      </section>

      {/* 2. Secrets Management Lifecycle */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Secrets Management Lifecycle</h2>

        <CodeBlock
          code={`Create Secret
     |
     v
Secure Storage
     |
     v
Controlled Access
     |
     v
Application Uses Secret
     |
     v
Rotate / Update
     |
     v
Revoke When No Longer Needed`}
        />
      </section>

      {/* 3. Common Storage Methods */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Common Secrets Storage Methods</h2>

        <div className="space-y-3">
          {[
            {
              name: "Environment Variables",
              desc: "Store secrets outside source code and provide them to the application at runtime.",
            },
            {
              name: "Cloud Secrets Manager",
              desc: "A managed service for storing, controlling access to, and rotating application secrets.",
            },
            {
              name: "HashiCorp Vault",
              desc: "A secrets management platform that can securely store and provide sensitive credentials.",
            },
            {
              name: "Encrypted Configuration",
              desc: "Stores configuration data in encrypted form and decrypts it when authorized.",
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

      {/* 4. Example with Environment Variables */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Example in Node.js</h2>
        <p className="text-[var(--text-secondary)]">
          For a simple Node.js application, environment variables can provide
          secrets at runtime.
        </p>

        <CodeBlock
          code={`// .env
DATABASE_URL=mongodb://127.0.0.1:27017/myapp
JWT_SECRET=your_generated_secret`}
        />

        <CodeBlock
          code={`import "dotenv/config";

const config = {
  databaseUrl: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET,
};

if (!config.databaseUrl || !config.jwtSecret) {
  throw new Error("Required secrets are missing");
}

export default config;`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          This example validates required secrets at startup instead of
          allowing the application to run with missing configuration.
        </p>
      </section>

      {/* 5. Production Secrets Manager */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Secrets Management in Production</h2>
        <p className="text-[var(--text-secondary)]">
          Production applications can use dedicated services instead of
          manually maintaining secret values on servers.
        </p>

        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>
            <strong>AWS Secrets Manager:</strong> Stores and manages secrets
            in AWS.
          </li>
          <li>
            <strong>Google Secret Manager:</strong> Stores and controls access
            to secrets in Google Cloud.
          </li>
          <li>
            <strong>Azure Key Vault:</strong> Manages secrets, keys, and
            certificates in Microsoft Azure.
          </li>
          <li>
            <strong>HashiCorp Vault:</strong> Provides centralized secrets
            storage and access management.
          </li>
        </ul>
      </section>

      {/* 6. Important Practices */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Important Security Practices</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>Never hardcode secrets in source code.</li>
          <li>Give each application only the secrets it needs.</li>
          <li>Use role-based access control and least privilege.</li>
          <li>Rotate credentials periodically and after suspected exposure.</li>
          <li>Revoke unused or compromised credentials.</li>
          <li>Never print secrets in application logs.</li>
          <li>Audit who accesses or changes sensitive credentials.</li>
          <li>Keep production secrets separate from development secrets.</li>
        </ul>
      </section>

      {/* 7. Environment Variables vs Secrets Manager */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          7. Environment Variables vs Secrets Manager
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="p-3 text-left">Environment Variables</th>
                <th className="p-3 text-left">Secrets Manager</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr>
                <td className="p-3">Provides configuration at runtime.</td>
                <td className="p-3">Centrally stores and manages secrets.</td>
              </tr>
              <tr>
                <td className="p-3">Simple to set up.</td>
                <td className="p-3">Provides advanced access controls and auditing.</td>
              </tr>
              <tr>
                <td className="p-3">Common in small applications.</td>
                <td className="p-3">Useful for larger production systems.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 8. Interview Questions */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Interview Questions</h2>

        {[
          {
            q: "What is Secrets Management?",
            a: "It is the process of securely storing, accessing, rotating, and revoking sensitive credentials.",
          },
          {
            q: "What are application secrets?",
            a: "Sensitive values such as API keys, database passwords, JWT secrets, and OAuth credentials.",
          },
          {
            q: "What is a Secrets Manager?",
            a: "A service that securely stores secrets and controls how applications and users access them.",
          },
          {
            q: "What is Secret Rotation?",
            a: "It is the process of replacing an existing secret with a new one to reduce the risk of long-term exposure.",
          },
          {
            q: "What is the principle of least privilege?",
            a: "Every user or application should receive only the minimum access required to perform its task.",
          },
          {
            q: "Why should secrets not be stored in GitHub?",
            a: "Because repository access or accidental exposure can reveal credentials and allow unauthorized access.",
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

export default SecretsManagement;