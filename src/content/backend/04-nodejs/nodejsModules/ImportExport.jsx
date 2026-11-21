import React from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const ImportExport = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <header className="space-y-3">
        <span className="text-sm text-[var(--accent-color)] font-medium">
          NODE.JS / MODULES / 06
        </span>

        <h1 className="text-4xl font-bold">Import and Export</h1>

        <p className="text-lg text-[var(--text-secondary)]">
          Import and Export allow JavaScript modules to share and reuse code
          across different files.
        </p>
      </header>

      {/* Introduction */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What are Import and Export?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          In JavaScript, export is used to make variables, functions, classes or
          objects available outside their current module. Import is used to
          access those exported values in another module.
        </p>

        <p className="text-[var(--text-secondary)] leading-7">
          These keywords belong to the ES Modules (ESM) system and help us
          divide applications into smaller, reusable files.
        </p>
      </section>

      {/* Named Export */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">1. Named Export</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Named export allows us to export multiple values from a single file.
          We can export values directly or export them together at the end of
          the file.
        </p>

        <div className="space-y-3">
          <div>
            <h3 className="font-medium mb-2">math.js</h3>
            <CodeBlock
              code={`// Export directly

export function add(a, b) {
  return a + b;
}

export const PI = 3.14;`}
            />
          </div>

          <div>
            <h3 className="font-medium mb-2">Alternative syntax</h3>
            <CodeBlock
              code={`function add(a, b) {
  return a + b;
}

const PI = 3.14;

export { add, PI };`}
            />
          </div>
        </div>
      </section>

      {/* Named Import */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">2. Named Import</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          To import named exports, we use curly braces and provide the exact
          names of the exported values.
        </p>

        <CodeBlock
          code={`import { add, PI } from "./math.js";

console.log(add(10, 20));
console.log(PI);

// Output:
// 30
// 3.14`}
        />

        <div className="p-4 rounded-xl bg-[var(--accent-background)] border border-[var(--border-color)]">
          <p className="text-sm text-[var(--text-secondary)] leading-6">
            Important: Named imports must match their exported names, unless we
            use an alias with the <strong>as</strong> keyword.
          </p>
        </div>
      </section>

      {/* Default Export */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">3. Default Export</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Default export is used when a module has one primary value that it
          wants to expose. A module can have only one default export.
        </p>

        <div className="space-y-3">
          <div>
            <h3 className="font-medium mb-2">user.js</h3>
            <CodeBlock
              code={`const user = {
  name: "Mayur",
  age: 19
};

export default user;`}
            />
          </div>

          <div>
            <h3 className="font-medium mb-2">app.js</h3>
            <CodeBlock
              code={`import user from "./user.js";

console.log(user.name);

// Output: Mayur`}
            />
          </div>
        </div>
      </section>

      {/* Default Function Export */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">
          4. Default Export with Functions
        </h2>

        <p className="text-[var(--text-secondary)] leading-7">
          We can also export a function or class as the default export.
        </p>

        <CodeBlock
          code={`// greet.js

export default function greet(name) {
  return \`Hello, \${name}\`;
}

// app.js

import greet from "./greet.js";

console.log(greet("Mayur"));

// Output: Hello, Mayur`}
        />
      </section>

      {/* Aliases */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">5. Import and Export Aliases</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          The <strong>as</strong> keyword allows us to rename an exported value
          while importing or exporting it.
        </p>

        <div className="space-y-3">
          <div>
            <h3 className="font-medium mb-2">math.js</h3>
            <CodeBlock
              code={`function add(a, b) {
  return a + b;
}

export { add as sum };`}
            />
          </div>

          <div>
            <h3 className="font-medium mb-2">app.js</h3>
            <CodeBlock
              code={`import { sum as addition } from "./math.js";

console.log(addition(10, 20));

// Output: 30`}
            />
          </div>
        </div>
      </section>

      {/* Namespace Import */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">6. Namespace Import</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Namespace import allows us to import all named exports from a module
          into a single object using <strong>* as</strong>.
        </p>

        <CodeBlock
          code={`// math.js

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

// app.js

import * as math from "./math.js";

console.log(math.add(10, 5));
console.log(math.subtract(10, 5));

// Output:
// 15
// 5`}
        />
      </section>

      {/* Mixed Import */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">
          7. Importing Default and Named Exports Together
        </h2>

        <p className="text-[var(--text-secondary)] leading-7">
          We can import a default export and named exports from the same module
          in a single import statement.
        </p>

        <CodeBlock
          code={`// user.js

const user = {
  name: "Mayur"
};

export function getAge() {
  return 19;
}

export default user;

// app.js

import user, { getAge } from "./user.js";

console.log(user.name);
console.log(getAge());

// Output:
// Mayur
// 19`}
        />
      </section>

      {/* Side Effect Import */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">8. Side-effect Import</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Sometimes we want to execute a module without importing any specific
          values from it. This is called a side-effect import.
        </p>

        <CodeBlock
          code={`// setup.js

console.log("Application setup completed");

// app.js

import "./setup.js";

// Output:
// Application setup completed`}
        />

        <p className="text-sm text-[var(--text-muted)]">
          The module executes for its side effects, even though no exported
          value is imported.
        </p>
      </section>

      {/* Dynamic Import */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">9. Dynamic Import</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Dynamic import allows us to load a module when needed instead of
          loading it through a static import declaration. It returns a Promise.
        </p>

        <CodeBlock
          code={`async function loadMath() {
  const math = await import("./math.js");

  console.log(math.add(10, 20));
}

loadMath();

// Output: 30`}
        />

        <p className="text-sm text-[var(--text-muted)]">
          Dynamic imports are useful for lazy loading and loading functionality
          only when required.
        </p>
      </section>

      {/* Important Rules */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Important Rules</h2>

        <div className="space-y-3">
          {[
            {
              title: "Named Exports",
              desc: "A module can have multiple named exports.",
            },
            {
              title: "Default Export",
              desc: "A module can have only one default export.",
            },
            {
              title: "Named Import",
              desc: "Use curly braces and match the exported name.",
            },
            {
              title: "Default Import",
              desc: "Does not require curly braces and can use a different local name.",
            },
            {
              title: "File Extensions",
              desc: "In Node.js ESM, relative imports generally need the file extension, such as .js.",
            },
            {
              title: "Dynamic Import",
              desc: "import() returns a Promise and can be used when loading a module conditionally.",
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
          <li>export makes values available outside a module.</li>
          <li>import allows us to use exported values.</li>
          <li>Named exports support multiple exported values.</li>
          <li>Default export provides one primary exported value.</li>
          <li>The as keyword is used for aliases.</li>
          <li>Namespace imports collect named exports into one object.</li>
          <li>Dynamic import() loads modules asynchronously.</li>
        </ul>
      </section>
    </div>
  );
};

export default ImportExport;
