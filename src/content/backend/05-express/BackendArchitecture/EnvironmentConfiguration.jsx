import React, { useState } from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const EnvironmentConfiguration = () => {
  const interviewQuestions = [
    {
      question: "What is Environment Configuration?",
      answer:
        "It is the process of managing application settings such as database URLs, API keys, ports, and secrets according to the running environment.",
    },
    {
      question: "What is an Environment Variable?",
      answer:
        "An environment variable is a key-value pair provided to an application from its external environment.",
    },
    {
      question: "What is a .env file?",
      answer:
        "A .env file stores environment variables in key-value format, which can be loaded into the Node.js process using dotenv.",
    },
    {
      question: "What is process.env in Node.js?",
      answer:
        "process.env is an object that provides access to environment variables available to the Node.js process.",
    },
    {
      question: "What is dotenv?",
      answer:
        "dotenv is a package that loads variables from a .env file into process.env.",
    },
    {
      question: "Why should we not push .env to GitHub?",
      answer:
        "It may contain sensitive information such as database credentials, API keys, and JWT secrets.",
    },
    {
      question: "What is NODE_ENV?",
      answer:
        "NODE_ENV is a commonly used environment variable that identifies the application environment, such as development, production, or test.",
    },
    {
      question: "What is the difference between Development and Production?",
      answer:
        "Development is used while building and debugging an application. Production is the live environment used by real users.",
    },
    {
      question: "Are environment variables always strings?",
      answer:
        "Yes. Values accessed through process.env are strings or undefined, so they must be converted when numbers or booleans are required.",
    },
    {
      question: "Should we hardcode secrets in source code?",
      answer:
        "No. Secrets should be provided through secure environment variables or a secrets manager.",
    },
    {
      question: "What happens if an environment variable is missing?",
      answer:
        "The application may behave incorrectly or fail. Important variables should be validated during application startup.",
    },
    {
      question: "Is .env automatically available in Node.js?",
      answer:
        "Not in every Node.js setup. You need a loader such as dotenv or Node.js environment-file support.",
    },
    {
      question: "Can we use multiple environment files?",
      answer:
        "Yes. Different files can be used for development, testing, and other environments, provided they are loaded intentionally and securely.",
    },
    {
      question: "What is the difference between .env and config files?",
      answer:
        ".env stores external environment-specific values, while config files organize application configuration and may read values from process.env.",
    },
  ];

  const [openQuestions, setOpenQuestions] = useState({});

  const toggleQuestion = (index) => {
    setOpenQuestions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <p className="text-sm font-semibold tracking-wider text-orange-500">
          BACKEND ARCHITECTURE / 12
        </p>

        <h1 className="mt-2 text-3xl font-bold">Environment Configuration</h1>

        <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">
          Environment Configuration is the process of managing application
          settings such as database URLs, API keys, passwords, ports, and
          secrets outside the main source code. It allows an application to run
          with different settings in development, testing, and production
          environments.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          1. What is Environment Configuration?
        </h2>

        <p>
          Imagine your backend application needs a MongoDB URL, JWT secret, and
          server port.
        </p>

        <p>
          You could directly write these values inside your code, but this
          creates security and maintenance problems.
        </p>

        <CodeBlock
          code={`// Bad Practice

const PORT = 3000;

const MONGO_URI =
  "mongodb://localhost:27017/myDatabase";

const JWT_SECRET = "my-secret-key";`}
        />

        <p>
          Instead, we store these values outside our source code and access them
          when the application starts.
        </p>

        <CodeBlock
          code={`// Better Practice

const PORT = process.env.PORT;

const MONGO_URI = process.env.MONGO_URI;

const JWT_SECRET = process.env.JWT_SECRET;`}
        />
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          2. What are Environment Variables?
        </h2>

        <p>
          Environment variables are key-value pairs provided to an application
          by its running environment.
        </p>

        <p>Example:</p>

        <CodeBlock
          code={`PORT=3000
NODE_ENV=development
JWT_SECRET=my-secret
MONGO_URI=mongodb://localhost:27017/myDatabase`}
        />

        <p>Here:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>PORT:</strong> Server port number.
          </li>
          <li>
            <strong>NODE_ENV:</strong> Current application environment.
          </li>
          <li>
            <strong>JWT_SECRET:</strong> Secret used for signing tokens.
          </li>
          <li>
            <strong>MONGO_URI:</strong> MongoDB connection string.
          </li>
        </ul>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">3. What is a .env File?</h2>

        <p>
          A <code>.env</code> file is a text file used to store environment
          variables in key-value format.
        </p>

        <p>Example project structure:</p>

        <CodeBlock
          code={`backend/
|
|-- src/
|   |-- config/
|   |-- models/
|   |-- routes/
|   |-- app.js
|   |-- server.js
|
|-- .env
|-- .gitignore
|-- package.json`}
        />

        <p>
          The application reads the values from this file and makes them
          available through <code>process.env</code>.
        </p>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">4. Installing dotenv</h2>

        <p>
          In a traditional Node.js setup, we use the
          <code> dotenv </code> package to load environment variables.
        </p>

        <CodeBlock code={`npm install dotenv`} />

        <p>Import and configure dotenv:</p>

        <CodeBlock
          code={`// server.js

import dotenv from "dotenv";

dotenv.config();

console.log(process.env.PORT);`}
        />

        <p>
          <code>dotenv.config()</code> reads the default
          <code> .env </code> file and loads its values into
          <code> process.env</code>.
        </p>

        <p>
          Important: Load environment variables before importing modules that
          depend on them.
        </p>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">5. Understanding process.env</h2>

        <p>
          Node.js provides <code>process.env</code> to access environment
          variables.
        </p>

        <CodeBlock
          code={`console.log(process.env.PORT);

console.log(process.env.NODE_ENV);

console.log(process.env.MONGO_URI);`}
        />

        <p>
          One important thing: environment variable values are strings by
          default.
        </p>

        <CodeBlock
          code={`PORT=3000

const port = process.env.PORT;

console.log(typeof port);

// Output:
// string`}
        />

        <p>If you need a number, convert it explicitly.</p>

        <CodeBlock code={`const PORT = Number(process.env.PORT) || 3000;`} />
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          6. Using Environment Variables in Backend
        </h2>

        <p>
          Let's create a centralized configuration file so different parts of
          the application can access configuration values consistently.
        </p>

        <CodeBlock
          code={`// src/config/env.js

const requiredVariables = [
  "MONGO_URI",
  "JWT_SECRET",
];

for (const variable of requiredVariables) {
  if (!process.env[variable]) {
    throw new Error(
      \`Missing environment variable: \${variable}\`
    );
  }
}

export const env = {
  PORT: Number(process.env.PORT) || 3000,

  NODE_ENV:
    process.env.NODE_ENV || "development",

  MONGO_URI: process.env.MONGO_URI,

  JWT_SECRET: process.env.JWT_SECRET,
};`}
        />

        <p>Now other files can import the centralized configuration.</p>

        <CodeBlock
          code={`// server.js

import { env } from "./config/env.js";

console.log(env.PORT);
console.log(env.NODE_ENV);`}
        />

        <p>
          This example validates required values and converts the port into a
          number.
        </p>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          7. Development vs Production Environment
        </h2>

        <p>Backend applications usually run in different environments.</p>

        <div className="space-y-3">
          <div className="rounded-lg border border-[var(--border-color)] p-4">
            <h3 className="font-semibold text-orange-500">Development</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[var(--text-secondary)]">
              <li>Used while developing the application.</li>
              <li>Debugging and detailed logs are enabled.</li>
              <li>Usually connects to a development database.</li>
            </ul>
          </div>

          <div className="rounded-lg border border-[var(--border-color)] p-4">
            <h3 className="font-semibold text-orange-500">Production</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[var(--text-secondary)]">
              <li>Used by real users.</li>
              <li>Uses production database credentials.</li>
              <li>Detailed internal errors should not be exposed.</li>
              <li>Secrets are provided through deployment configuration.</li>
            </ul>
          </div>
        </div>

        <p>Example:</p>

        <CodeBlock code={`NODE_ENV=development`} />

        <p>In code:</p>

        <CodeBlock
          code={`if (process.env.NODE_ENV === "production") {
  console.log("Production environment");
} else {
  console.log("Development environment");
}`}
        />
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          8. Protecting .env with .gitignore
        </h2>

        <p>
          Environment files can contain sensitive information. We should never
          push real secrets to a public GitHub repository.
        </p>

        <p>
          Add this to your <code>.gitignore</code>:
        </p>

        <CodeBlock
          code={`# Environment files
.env
.env.*
!.env.example`}
        />

        <p>
          This ignores actual environment files while allowing a safe example
          file to be committed.
        </p>

        <p>
          Create <code>.env.example</code>:
        </p>

        <CodeBlock
          code={`PORT=
NODE_ENV=
MONGO_URI=
JWT_SECRET=`}
        />

        <p>
          The example file documents which variables are required. Never put
          actual passwords or secret values inside it.
        </p>

        <div className="rounded-lg border border-orange-500/30 bg-orange-500/10 p-4">
          <p className="font-semibold text-orange-500">
            Important Security Rule
          </p>
          <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
            If a secret has already been pushed to GitHub, simply deleting the
            file is not enough. Rotate the exposed credential because it may
            remain in Git history.
          </p>
        </div>
      </section>

      {/* 9 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          9. Using Environment Variables in MongoDB Connection
        </h2>

        <p>
          A common use case is storing the MongoDB connection string inside the
          environment configuration.
        </p>

        <CodeBlock
          code={`// config/database.js

import mongoose from "mongoose";
import { env } from "./env.js";

const connectDatabase = async () => {
  try {
    await mongoose.connect(env.MONGO_URI);

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error.message);

    throw error;
  }
};

export default connectDatabase;`}
        />

        <p>
          Now the database connection string is not hardcoded inside the
          database configuration file.
        </p>
      </section>

      {/* 10 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          10. Complete Server Configuration Flow
        </h2>

        <CodeBlock
          code={`.env
 |
 v
dotenv.config()
 |
 v
process.env
 |
 v
config/env.js
 |
 |-- Validate variables
 |-- Convert required values
 |
 v
Application
 |
 |-- Database connection
 |-- JWT configuration
 |-- Server port
 |-- Other settings`}
        />

        <p>
          This approach keeps configuration centralized and makes the
          application easier to maintain.
        </p>
      </section>

      {/* 11 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">11. Common Mistakes</h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Forgetting to load dotenv before using environment variables.</li>
          <li>Pushing the real .env file to GitHub.</li>
          <li>Hardcoding database credentials in source code.</li>
          <li>Assuming process.env values are numbers or booleans.</li>
          <li>Not validating required environment variables.</li>
          <li>Using development secrets in production.</li>
          <li>Exposing private backend secrets through frontend variables.</li>
        </ul>

        <p>
          Remember: environment variables are configuration, not a replacement
          for proper application security.
        </p>
      </section>

      {/* 12 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">12. Best Practices</h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Keep sensitive configuration outside source code.</li>
          <li>Use dotenv where required.</li>
          <li>Create a centralized environment configuration module.</li>
          <li>Validate required variables when the server starts.</li>
          <li>Maintain a safe .env.example file.</li>
          <li>Add actual environment files to .gitignore.</li>
          <li>Use separate credentials for development and production.</li>
          <li>Use deployment secrets or a secrets manager in production.</li>
          <li>Never expose backend secrets in frontend code.</li>
        </ul>
      </section>

      {/* Interview Questions */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-bold text-orange-500">
            Interview Questions
          </h2>

          <p className="mt-2 text-sm text-[var(--text-secondary)]">
            Click any question to reveal its short answer.
          </p>
        </div>

        <div className="space-y-3">
          {interviewQuestions.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border border-[var(--border-color)]"
            >
              <button
                type="button"
                onClick={() => toggleQuestion(index)}
                aria-expanded={!!openQuestions[index]}
                className="flex w-full items-center justify-between gap-4 p-4 text-left transition-colors hover:bg-[var(--bg-secondary)]"
              >
                <span className="font-medium">
                  <span className="mr-2 text-orange-500">{index + 1}.</span>
                  {item.question}
                </span>

                <span className="shrink-0 text-xl text-orange-500">
                  {openQuestions[index] ? "−" : "+"}
                </span>
              </button>

              {openQuestions[index] && (
                <div className="border-t border-[var(--border-color)] bg-[var(--bg-secondary)] px-4 py-4">
                  <p className="text-sm leading-7 text-[var(--text-secondary)]">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EnvironmentConfiguration;
