import React from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const EnvironmentVariables = () => {
  return (
    <div className="space-y-10 text-[var(--text-primary)]">
      {/* Header */}
      <div className="space-y-3">
        <p className="text-sm font-semibold tracking-widest text-[var(--primary-color)]">
          NODE.JS ADVANCED CONCEPTS / 02
        </p>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Environment Variables in Node.js
        </h1>

        <p className="text-lg leading-8 text-[var(--text-secondary)]">
          Learn how to manage application configuration, protect sensitive
          information, and maintain different settings across development
          and production environments.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          1. What are Environment Variables?
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Environment variables are key-value pairs provided to an application
          by its operating environment. They allow us to configure an
          application without hardcoding values inside the source code.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          For example, database URLs, API keys, JWT secrets and server ports
          are commonly stored as environment variables.
        </p>

        <CodeBlock
          code={`PORT=3000
NODE_ENV=development
DATABASE_URL=mongodb://localhost:27017/mydb
JWT_SECRET=my_secret_key`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
          <p className="font-semibold text-[var(--primary-color)]">
            Why use them?
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm leading-6 text-[var(--text-secondary)]">
            <li>Keep sensitive values outside source code.</li>
            <li>Use different configurations for development and production.</li>
            <li>Change application settings without modifying code.</li>
            <li>Make deployment and configuration management easier.</li>
          </ul>
        </div>
      </section>

      {/* 2 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          2. Accessing Environment Variables (process.env)
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Node.js provides the global <code>process.env</code> object to access
          environment variables available to the current process.
        </p>

        <CodeBlock
          code={`console.log(process.env.PORT);
console.log(process.env.NODE_ENV);
console.log(process.env.DATABASE_URL);`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Environment variables are strings by default. If a numeric value is
          required, convert it explicitly.
        </p>

        <CodeBlock
          code={`const PORT = Number(process.env.PORT) || 3000;

console.log(PORT);`}
        />
      </section>

      {/* 3 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          3. Using the dotenv Package
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Node.js applications commonly use the <code>dotenv</code> package
          to load environment variables from a <code>.env</code> file into
          <code> process.env</code>.
        </p>

        <h3 className="text-lg font-semibold">Step 1: Install dotenv</h3>

        <CodeBlock code={`npm install dotenv`} />

        <h3 className="text-lg font-semibold">Step 2: Create a .env file</h3>

        <CodeBlock
          code={`PORT=3000
NODE_ENV=development
DATABASE_URL=mongodb://localhost:27017/mydb
JWT_SECRET=your_secret_key`}
        />

        <h3 className="text-lg font-semibold">Step 3: Load environment variables</h3>

        <CodeBlock
          code={`import dotenv from "dotenv";

dotenv.config();

console.log(process.env.PORT);`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
          <p className="font-semibold text-[var(--primary-color)]">
            Important
          </p>
          <p className="text-sm leading-7 text-[var(--text-secondary)]">
            Call <code>dotenv.config()</code> before accessing variables
            loaded from the <code>.env</code> file. Alternatively, modern
            Node.js versions support loading env files using the{" "}
            <code>--env-file</code> flag.
          </p>
        </div>
      </section>

      {/* 4 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          4. Environment Modes (NODE_ENV)
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          <code>NODE_ENV</code> is a commonly used environment variable that
          identifies the environment in which an application is running.
        </p>

        <div className="grid gap-3 md:grid-cols-3">
          {[
            {
              title: "development",
              desc: "Used during local development and debugging.",
            },
            {
              title: "production",
              desc: "Used when the application is deployed for real users.",
            },
            {
              title: "test",
              desc: "Used while running automated tests.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2"
            >
              <p className="font-semibold text-[var(--primary-color)]">
                {item.title}
              </p>
              <p className="text-sm leading-6 text-[var(--text-secondary)]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <CodeBlock
          code={`if (process.env.NODE_ENV === "production") {
  console.log("Production mode");
} else {
  console.log("Development mode");
}`}
        />
      </section>

      {/* 5 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          5. Protecting Environment Variables
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Environment variables often contain sensitive information.
          Accidentally pushing these values to a public GitHub repository can
          expose database credentials, API keys and authentication secrets.
        </p>

        <h3 className="text-lg font-semibold">
          Add .env to .gitignore
        </h3>

        <CodeBlock
          code={`# .gitignore

node_modules/
.env
.env.local`}
        />

        <h3 className="text-lg font-semibold">
          Create a .env.example file
        </h3>

        <p className="leading-7 text-[var(--text-secondary)]">
          Share the required variable names with other developers without
          exposing their actual values.
        </p>

        <CodeBlock
          code={`# .env.example

PORT=
NODE_ENV=
DATABASE_URL=
JWT_SECRET=`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
          <p className="font-semibold text-[var(--primary-color)]">
            Security Rules
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm leading-6 text-[var(--text-secondary)]">
            <li>Never commit real .env files to GitHub.</li>
            <li>Never expose backend secrets in frontend code.</li>
            <li>Use platform environment settings in production.</li>
            <li>Rotate secrets immediately if they are exposed.</li>
          </ul>
        </div>
      </section>

      {/* 6 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          6. Environment Variable Validation
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Applications should validate required environment variables during
          startup. Otherwise, missing configuration may cause unexpected
          errors later during application execution.
        </p>

        <CodeBlock
          code={`const requiredEnv = [
  "PORT",
  "DATABASE_URL",
  "JWT_SECRET",
];

for (const key of requiredEnv) {
  if (!process.env[key]) {
    throw new Error(\`Missing environment variable: \${key}\`);
  }
}

console.log("Environment configuration loaded");`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          This ensures that the application does not start with incomplete
          configuration.
        </p>
      </section>

      {/* 7 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          7. Complete Practical Example
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Let's create a simple Express server using environment variables.
        </p>

        <h3 className="text-lg font-semibold">.env</h3>

        <CodeBlock
          code={`PORT=3000
NODE_ENV=development`}
        />

        <h3 className="text-lg font-semibold">server.js</h3>

        <CodeBlock
          code={`import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = Number(process.env.PORT) || 3000;

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
  console.log(\`Environment: \${process.env.NODE_ENV}\`);
});`}
        />
      </section>

      {/* 8 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          8. dotenv vs Native Node.js Env File Support
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Modern Node.js versions support loading environment variables
          directly from a file using the <code>--env-file</code> CLI option.
          Therefore, installing dotenv is not always necessary.
        </p>

        <h3 className="text-lg font-semibold">Using Native Support</h3>

        <CodeBlock
          code={`node --env-file=.env server.js`}
        />

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm text-left">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">dotenv</th>
                <th className="p-3">Native Support</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              <tr>
                <td className="p-3">External npm package</td>
                <td className="p-3">Built into Node.js</td>
              </tr>
              <tr>
                <td className="p-3">Uses dotenv.config()</td>
                <td className="p-3">Uses --env-file flag</td>
              </tr>
              <tr>
                <td className="p-3">Requires installation</td>
                <td className="p-3">No package installation needed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Interview */}
      <section className="space-y-5 border-t border-[var(--border-color)] pt-8">
        <div className="space-y-2">
          <p className="text-sm font-semibold tracking-widest text-[var(--primary-color)]">
            PREPARE FOR INTERVIEWS
          </p>
          <h2 className="text-2xl font-bold">
            9. Interview Questions
          </h2>
        </div>

        {[
          "What are environment variables and why do we use them?",
          "What is process.env in Node.js?",
          "What is dotenv and how does it work?",
          "Why should we add .env to .gitignore?",
          "What is the purpose of NODE_ENV?",
          "Why are environment variable values strings by default?",
          "What is the difference between .env and .env.example?",
          "How can Node.js load environment variables without dotenv?",
          "Why should environment variables be validated during startup?",
        ].map((question, index) => (
          <div
            key={index}
            className="flex gap-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4"
          >
            <span className="font-bold text-[var(--primary-color)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="leading-7">{question}</p>
          </div>
        ))}
      </section>

      {/* Next Topic */}
      <div className="rounded-xl border border-[var(--border-color)] bg-[var(--primary-soft)] p-5 space-y-2">
        <p className="text-xs font-bold tracking-widest text-[var(--primary-color)]">
          NEXT TOPIC
        </p>
        <h3 className="text-xl font-bold">Memory Management in Node.js</h3>
        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Understand how Node.js manages memory, allocates objects, and
          handles memory usage during application execution.
        </p>
      </div>
    </div>
  );
};

export default EnvironmentVariables;