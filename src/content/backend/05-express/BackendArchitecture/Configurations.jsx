import React, { useState } from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const Configurations = () => {
  const interviewQuestions = [
    {
      question: "What is Configuration in Backend Development?",
      answer:
        "Configuration defines the settings and options required to run and manage a backend application.",
    },
    {
      question: "Why do we separate configuration files?",
      answer:
        "It keeps application settings organized, reusable, maintainable, and easier to manage across environments.",
    },
    {
      question: "What is Environment Configuration?",
      answer:
        "Environment configuration manages settings that differ between development, testing, and production environments.",
    },
    {
      question: "What is the difference between app.js and server.js?",
      answer:
        "app.js configures the Express application, while server.js starts the HTTP server and handles server startup.",
    },
    {
      question: "What is dotenv?",
      answer:
        "dotenv is a package that loads environment variables from a .env file into process.env.",
    },
    {
      question: "Why should secrets not be hardcoded?",
      answer:
        "Hardcoded secrets can accidentally become exposed through source code, Git repositories, or application bundles.",
    },
    {
      question: "What is Database Configuration?",
      answer:
        "Database configuration contains the connection logic and settings required to connect the application to a database.",
    },
    {
      question: "What is CORS Configuration?",
      answer:
        "CORS configuration controls which browser origins are allowed to access resources from an API.",
    },
    {
      question: "What is Production Configuration?",
      answer:
        "Production configuration contains settings optimized for a live application, such as secure cookies, logging, and trusted origins.",
    },
    {
      question: "What is process.env?",
      answer:
        "process.env is a Node.js object containing environment variables available to the running process.",
    },
    {
      question: "Why do we validate Environment Variables?",
      answer:
        "Validation ensures required configuration values exist and have valid formats before the application starts.",
    },
    {
      question: "Should app.listen() be written inside app.js?",
      answer:
        "It is generally cleaner to export the Express app from app.js and start the server separately in server.js.",
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
          BACKEND ARCHITECTURE / 10
        </p>

        <h1 className="mt-2 text-3xl font-bold">
          Configurations in Backend Development
        </h1>

        <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">
          Configurations manage the settings and options required by a backend
          application. They help organize database connections, environment
          variables, security settings, middleware setup, and other
          application-level options.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">1. What are Configurations?</h2>

        <p>
          Configurations are settings that control how an application behaves
          and connects with external services.
        </p>

        <p>Examples include:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Database connection settings.</li>
          <li>Environment variables.</li>
          <li>CORS settings.</li>
          <li>Application port.</li>
          <li>JWT configuration.</li>
          <li>Cloud storage credentials.</li>
          <li>Email service settings.</li>
          <li>Logging and security settings.</li>
        </ul>

        <p>
          Instead of scattering these settings across multiple files, we
          organize them inside a dedicated config directory.
        </p>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">2. Why Do We Need Configurations?</h2>

        <p>
          Imagine that database connection logic, email credentials, JWT
          secrets, and CORS settings are written directly inside controllers and
          routes.
        </p>

        <p>
          This makes the application difficult to maintain. Configuration files
          solve this problem.
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Keep application settings organized.</li>
          <li>Avoid repeated configuration code.</li>
          <li>Separate settings from business logic.</li>
          <li>Manage development and production environments.</li>
          <li>Make application maintenance easier.</li>
          <li>Keep sensitive values outside source code.</li>
        </ul>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">3. Configuration Folder Structure</h2>

        <p>A common backend project structure looks like this:</p>

        <CodeBlock
          code={`src/
|
|-- config/
|   |
|   |-- database.js
|   |-- cors.js
|   |-- cloudinary.js
|   |-- mail.js
|   |-- environment.js
|
|-- controllers/
|-- services/
|-- repositories/
|-- models/
|-- middlewares/
|-- utils/
|-- routes/
|
|-- app.js
|-- server.js

.env
.env.example
.gitignore`}
        />

        <p>
          Each configuration file manages a specific application setting or
          external service.
        </p>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">4. Environment Variables</h2>

        <p>
          Environment variables store configuration values outside the
          application source code.
        </p>

        <p>
          For example, database URLs, API keys, JWT secrets, and application
          ports.
        </p>

        <h3 className="font-semibold text-orange-500">.env</h3>

        <CodeBlock
          code={`PORT=3000
NODE_ENV=development

MONGODB_URI=mongodb://127.0.0.1:27017/myapp

ACCESS_TOKEN_SECRET=my_secret_key
REFRESH_TOKEN_SECRET=my_refresh_secret

CLIENT_URL=http://localhost:5173`}
        />

        <h3 className="font-semibold text-orange-500">
          Loading Environment Variables
        </h3>

        <CodeBlock
          code={`// server.js

import "dotenv/config";

console.log(process.env.PORT);
console.log(process.env.NODE_ENV);`}
        />

        <p>
          The dotenv package loads values from the .env file into
          <code> process.env</code>.
        </p>

        <p>
          Never commit real secrets to Git. Add <code>.env</code>
          to <code>.gitignore</code> and provide an
          <code> .env.example</code> containing placeholder values.
        </p>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">5. Environment Configuration</h2>

        <p>
          We can centralize environment variables inside one configuration file.
        </p>

        <CodeBlock
          code={`// config/environment.js

const env = {
  PORT: process.env.PORT || 3000,

  NODE_ENV: process.env.NODE_ENV || "development",

  MONGODB_URI: process.env.MONGODB_URI,

  ACCESS_TOKEN_SECRET:
    process.env.ACCESS_TOKEN_SECRET,

  CLIENT_URL: process.env.CLIENT_URL,
};

export default env;`}
        />

        <p>Using environment configuration:</p>

        <CodeBlock
          code={`import env from "./config/environment.js";

console.log(env.PORT);
console.log(env.NODE_ENV);`}
        />

        <p>
          This gives the application a single place to access configuration
          values.
        </p>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">6. Database Configuration</h2>

        <p>
          Database configuration handles the connection between the backend
          application and the database.
        </p>

        <CodeBlock
          code={`// config/database.js

import mongoose from "mongoose";
import env from "./environment.js";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      env.MONGODB_URI
    );

    console.log(
      "MongoDB Connected:",
      connection.connection.host
    );

  } catch (error) {
    console.error("Database Connection Failed:", error);

    process.exit(1);
  }
};

export default connectDB;`}
        />

        <p>
          We can import this function into server.js and establish the database
          connection before starting the application server.
        </p>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">7. CORS Configuration</h2>

        <p>
          CORS stands for Cross-Origin Resource Sharing. It allows us to
          configure which browser origins can access our backend API.
        </p>

        <CodeBlock
          code={`// config/cors.js

import cors from "cors";
import env from "./environment.js";

const corsOptions = {
  origin: env.CLIENT_URL,

  credentials: true,

  methods: [
    "GET",
    "POST",
    "PUT",
    "PATCH",
    "DELETE",
  ],
};

export default cors(corsOptions);`}
        />

        <p>Using CORS configuration:</p>

        <CodeBlock
          code={`// app.js

import express from "express";
import corsConfig from "./config/cors.js";

const app = express();

app.use(corsConfig);`}
        />

        <p>
          CORS is a browser-enforced access mechanism, not a replacement for
          authentication or API security.
        </p>
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">8. Application Configuration</h2>

        <p>
          Application configuration organizes the Express app setup, including
          middleware, routes, and error handling.
        </p>

        <CodeBlock
          code={`// app.js

import express from "express";
import corsConfig from "./config/cors.js";
import userRoutes from "./routes/user.routes.js";
import errorMiddleware from "./middlewares/error.middleware.js";

const app = express();

// Application Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(corsConfig);

// Application Routes
app.use("/api/users", userRoutes);

// Error Handler
app.use(errorMiddleware);

export default app;`}
        />

        <p>
          Here, app.js creates and configures the Express application. It does
          not start the HTTP server.
        </p>
      </section>

      {/* 9 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">9. Server Configuration</h2>

        <p>
          server.js handles application startup, database connection, and HTTP
          server initialization.
        </p>

        <CodeBlock
          code={`// server.js

import "dotenv/config";

import app from "./app.js";
import connectDB from "./config/database.js";
import env from "./config/environment.js";

const startServer = async () => {
  try {
    await connectDB();

    app.listen(env.PORT, () => {
      console.log(
        \`Server running on port \${env.PORT}\`
      );
    });

  } catch (error) {
    console.error("Server Startup Failed:", error);

    process.exit(1);
  }
};

startServer();`}
        />

        <p>
          The database connection is established before the server starts
          accepting requests.
        </p>
      </section>

      {/* 10 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          10. Development vs Production Configuration
        </h2>

        <p>
          Different environments may require different configuration values and
          behavior.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[450px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="p-3">Development</th>
                <th className="p-3">Production</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Local database.</td>
                <td className="p-3">Production database.</td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Detailed debugging.</td>
                <td className="p-3">Controlled logging.</td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Local frontend origin.</td>
                <td className="p-3">Live frontend origin.</td>
              </tr>
              <tr>
                <td className="p-3">Development secrets.</td>
                <td className="p-3">Secure production secrets.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          We can identify the current environment using
          <code> process.env.NODE_ENV</code>.
        </p>

        <CodeBlock
          code={`if (process.env.NODE_ENV === "production") {
  console.log("Production Environment");
} else {
  console.log("Development Environment");
}`}
        />
      </section>

      {/* 11 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          11. Environment Variable Validation
        </h2>

        <p>
          Environment variables are often required for the application to work
          correctly. We should validate them during startup.
        </p>

        <CodeBlock
          code={`// config/environment.js

const requiredVariables = [
  "MONGODB_URI",
  "ACCESS_TOKEN_SECRET",
];

for (const variable of requiredVariables) {
  if (!process.env[variable]) {
    throw new Error(
      \`Missing environment variable: \${variable}\`
    );
  }
}

const env = {
  PORT: Number(process.env.PORT) || 3000,
  MONGODB_URI: process.env.MONGODB_URI,
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
};

export default env;`}
        />

        <p>
          This prevents the application from starting with missing required
          configuration values.
        </p>
      </section>

      {/* 12 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">12. Complete Configuration Flow</h2>

        <CodeBlock
          code={`.env
  |
  v
dotenv
  |
  v
environment.js
  |
  +-------------------+
  |                   |
  v                   v
database.js         cors.js
  |                   |
  v                   v
MongoDB             app.js
                      |
                      v
                  Middleware
                      |
                      v
                    Routes
                      |
                      v
               Error Middleware

server.js
  |
  +--> Connect Database
  |
  +--> Start HTTP Server`}
        />

        <p>
          This structure keeps configuration, application setup, and server
          startup responsibilities separate.
        </p>
      </section>

      {/* 13 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">13. Best Practices</h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Keep configuration files inside a dedicated config directory.</li>
          <li>Use environment variables for environment-specific values.</li>
          <li>Never commit real secrets to Git.</li>
          <li>Validate required environment variables at startup.</li>
          <li>Separate app.js and server.js responsibilities.</li>
          <li>Keep database connection logic in its own file.</li>
          <li>Use separate settings for development and production.</li>
          <li>
            Avoid scattering configuration values throughout the codebase.
          </li>
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

export default Configurations;
