import React from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const CustomModules = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <header className="space-y-3">
        <span className="text-sm text-[var(--accent-color)] font-medium">
          NODE.JS / MODULES / 04
        </span>

        <h1 className="text-4xl font-bold">Custom Modules</h1>

        <p className="text-lg text-[var(--text-secondary)]">
          Custom modules allow developers to create reusable functionality and
          organize application code into separate files.
        </p>
      </header>

      {/* Introduction */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What are Custom Modules?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Custom modules are JavaScript files created by developers to organize
          application-specific code. They can contain functions, variables,
          classes, objects and other reusable logic.
        </p>

        <p className="text-[var(--text-secondary)] leading-7">
          We can export functionality from one file and import it into another
          file whenever required.
        </p>
      </section>

      {/* Why Custom Modules */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Why Do We Need Custom Modules?
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              title: "Code Reusability",
              desc: "Create functionality once and reuse it in multiple files.",
            },
            {
              title: "Better Organization",
              desc: "Separate application logic into different files.",
            },
            {
              title: "Easy Maintenance",
              desc: "Update specific functionality without modifying unrelated code.",
            },
            {
              title: "Separation of Concerns",
              desc: "Keep authentication, database, validation and other logic separate.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] space-y-2"
            >
              <h3 className="font-semibold text-[var(--accent-color)]">
                {item.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CommonJS */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          1. Creating Custom Modules Using CommonJS
        </h2>

        <p className="text-[var(--text-secondary)] leading-7">
          In CommonJS, we use module.exports to export functionality and
          require() to import it into another file.
        </p>

        <div className="space-y-3">
          <div>
            <h3 className="font-medium mb-2">Step 1: Create a Module</h3>
            <p className="text-sm text-[var(--text-secondary)] mb-2">
              Create a file named math.js and define a function.
            </p>
            <CodeBlock
              code={`// math.js

function add(a, b) {
  return a + b;
}

module.exports = add;`}
            />
          </div>

          <div>
            <h3 className="font-medium mb-2">Step 2: Import the Module</h3>
            <p className="text-sm text-[var(--text-secondary)] mb-2">
              Create app.js and import the function using require().
            </p>
            <CodeBlock
              code={`// app.js

const add = require("./math");

console.log(add(10, 20));

// Output: 30`}
            />
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[var(--accent-background)] border border-[var(--border-color)] space-y-2">
          <h3 className="font-semibold text-[var(--accent-color)]">
            How does it work?
          </h3>
          <ul className="list-decimal list-inside space-y-2 text-sm text-[var(--text-secondary)]">
            <li>math.js contains the add() function.</li>
            <li>module.exports makes the function available to other files.</li>
            <li>app.js loads the module using require().</li>
            <li>Now app.js can execute the add() function.</li>
          </ul>
        </div>
      </section>

      {/* Multiple Exports */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">2. Exporting Multiple Values</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          We can export multiple functions, variables and objects together by
          assigning an object to module.exports.
        </p>

        <div className="space-y-3">
          <div>
            <h3 className="font-medium mb-2">math.js</h3>
            <CodeBlock
              code={`function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

module.exports = {
  add,
  subtract,
  multiply
};`}
            />
          </div>

          <div>
            <h3 className="font-medium mb-2">app.js</h3>
            <CodeBlock
              code={`const math = require("./math");

console.log(math.add(10, 5));
console.log(math.subtract(10, 5));
console.log(math.multiply(10, 5));

// Output:
// 15
// 5
// 50`}
            />
          </div>
        </div>
      </section>

      {/* ESM */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          3. Creating Custom Modules Using ES Modules
        </h2>

        <p className="text-[var(--text-secondary)] leading-7">
          ES Modules use export to share functionality and import to access that
          functionality in another file.
        </p>

        <p className="text-sm text-[var(--text-secondary)]">
          Make sure your package.json contains "type": "module" or use the .mjs
          file extension.
        </p>

        <div className="space-y-3">
          <div>
            <h3 className="font-medium mb-2">Step 1: Create a Module</h3>
            <CodeBlock
              code={`// math.js

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}`}
            />
          </div>

          <div>
            <h3 className="font-medium mb-2">Step 2: Import the Module</h3>
            <CodeBlock
              code={`// app.js

import { add, subtract } from "./math.js";

console.log(add(10, 20));
console.log(subtract(20, 10));

// Output:
// 30
// 10`}
            />
          </div>
        </div>
      </section>

      {/* Folder Structure */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">4. Organizing Custom Modules</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          In real-world applications, we create separate folders for different
          responsibilities. This keeps the project structured and easier to
          maintain.
        </p>

        <CodeBlock
          code={`my-project/
│
├── app.js
│
├── modules/
│   ├── math.js
│   ├── user.js
│   └── greeting.js
│
└── package.json`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Each module handles a specific responsibility, and app.js imports the
          required functionality.
        </p>
      </section>

      {/* Real World Example */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">5. Real-world Example</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Consider a backend application where authentication logic is
          maintained separately from the main application file.
        </p>

        <div className="space-y-3">
          <div>
            <h3 className="font-medium mb-2">modules/auth.js</h3>
            <CodeBlock
              code={`function login(email, password) {
  return {
    message: "Login successful",
    email
  };
}

function logout() {
  return "User logged out";
}

module.exports = {
  login,
  logout
};`}
            />
          </div>

          <div>
            <h3 className="font-medium mb-2">app.js</h3>
            <CodeBlock
              code={`const auth = require("./modules/auth");

const result = auth.login(
  "user@example.com",
  "password123"
);

console.log(result.message);

console.log(auth.logout());

// Output:
// Login successful
// User logged out`}
            />
          </div>
        </div>

        <p className="text-sm text-[var(--text-muted)]">
          This example demonstrates module organization only. Real
          authentication must securely verify credentials and hash passwords.
        </p>
      </section>

      {/* Best Practices */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Best Practices</h2>

        <div className="space-y-3">
          {[
            {
              title: "Single Responsibility",
              desc: "Keep each module focused on one main responsibility.",
            },
            {
              title: "Meaningful Names",
              desc: "Use descriptive file and function names.",
            },
            {
              title: "Avoid Unnecessary Exports",
              desc: "Export only the functionality that other modules need.",
            },
            {
              title: "Organize Folders",
              desc: "Group related modules into meaningful directories.",
            },
            {
              title: "Consistent Module System",
              desc: "Use CommonJS or ES Modules consistently within the project where practical.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] space-y-2"
            >
              <h3 className="font-semibold text-[var(--accent-color)]">
                {item.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Summary */}
      <section className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] space-y-3">
        <h2 className="text-xl font-semibold">Key Takeaways</h2>

        <ul className="list-disc list-inside space-y-2 text-sm text-[var(--text-secondary)]">
          <li>Custom modules are created by developers.</li>
          <li>They help organize and reuse application code.</li>
          <li>CommonJS uses module.exports and require().</li>
          <li>ES Modules use export and import.</li>
          <li>We can export single or multiple values.</li>
          <li>Modules can be organized into separate folders.</li>
          <li>
            Real-world backend applications use custom modules extensively.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default CustomModules;
