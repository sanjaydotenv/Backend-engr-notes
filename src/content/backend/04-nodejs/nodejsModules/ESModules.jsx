import React from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const ESModules = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <header className="space-y-3">
        <span className="text-sm text-[var(--accent-color)] font-medium">
          NODE.JS / MODULES / 07
        </span>

        <h1 className="text-4xl font-bold">ES Modules (ESM)</h1>

        <p className="text-lg text-[var(--text-secondary)]">
          ES Modules provide a standard way to organize, export and import
          JavaScript code across different files.
        </p>
      </header>

      {/* Introduction */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What are ES Modules?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          ES Modules, also known as ESM, are the official JavaScript module
          system introduced in ECMAScript 2015 (ES6).
        </p>

        <p className="text-[var(--text-secondary)] leading-7">
          They allow us to split JavaScript code into separate files and share
          functions, variables, classes and objects using
          <strong> export </strong> and <strong> import</strong>.
        </p>

        <p className="text-[var(--text-secondary)] leading-7">
          Node.js supports ES Modules alongside its traditional CommonJS module
          system.
        </p>
      </section>

      {/* Enable ESM */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          How to Enable ES Modules in Node.js?
        </h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Node.js supports ES Modules using two common approaches.
        </p>

        <div className="space-y-3">
          <div className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] space-y-2">
            <h3 className="font-semibold text-[var(--accent-color)]">
              1. Using package.json
            </h3>

            <p className="text-sm text-[var(--text-secondary)]">
              Add "type": "module" inside package.json. Then Node.js treats .js
              files in that package scope as ES Modules.
            </p>

            <CodeBlock
              code={`{
  "name": "my-project",
  "version": "1.0.0",
  "type": "module"
}`}
            />
          </div>

          <div className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] space-y-2">
            <h3 className="font-semibold text-[var(--accent-color)]">
              2. Using .mjs Extension
            </h3>

            <p className="text-sm text-[var(--text-secondary)]">
              We can use the .mjs extension to explicitly identify a file as an
              ES Module.
            </p>

            <CodeBlock code={`app.mjs`} />
          </div>
        </div>
      </section>

      {/* Named Export */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Named Exports</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Named exports allow us to export multiple variables, functions or
          classes from a single module. We import them using their original
          names inside curly braces.
        </p>

        <div className="space-y-3">
          <div>
            <h3 className="font-medium mb-2">math.js</h3>
            <CodeBlock
              code={`export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export const PI = 3.14;`}
            />
          </div>

          <div>
            <h3 className="font-medium mb-2">app.js</h3>
            <CodeBlock
              code={`import { add, subtract, PI } from "./math.js";

console.log(add(10, 5));
console.log(subtract(10, 5));
console.log(PI);

// Output:
// 15
// 5
// 3.14`}
            />
          </div>
        </div>

        <p className="text-sm text-[var(--text-muted)]">
          Note: Named imports must match the exported names, unless you
          explicitly rename them using as.
        </p>
      </section>

      {/* Default Export */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Default Export</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          A default export allows a module to export one primary value. We can
          import it using any valid name without curly braces.
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
console.log(user.age);

// Output:
// Mayur
// 19`}
            />
          </div>
        </div>
      </section>

      {/* Rename Import */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Renaming Imports and Exports</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          We can rename named exports and imports using the
          <strong> as </strong> keyword.
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

      {/* Import Everything */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Import Everything</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          We can import all named exports from a module using the
          <strong> * as </strong> syntax. This creates a namespace object.
        </p>

        <CodeBlock
          code={`import * as math from "./math.js";

console.log(math.add(10, 20));
console.log(math.subtract(20, 10));`}
        />
      </section>

      {/* Features */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Key Features of ES Modules</h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              title: "Static Imports",
              desc: "Imports and exports are determined before module execution.",
            },
            {
              title: "Named Exports",
              desc: "A module can export multiple named values.",
            },
            {
              title: "Default Export",
              desc: "A module can have one default export.",
            },
            {
              title: "Strict Mode",
              desc: "ES Modules automatically run in JavaScript strict mode.",
            },
            {
              title: "Live Bindings",
              desc: "Imports reflect updates to the exported binding.",
            },
            {
              title: "Dynamic Import",
              desc: "import() can load modules dynamically when needed.",
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

      {/* Dynamic Import */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Dynamic Import</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Dynamic import allows us to load a module when required instead of
          importing it at the top of the file. It returns a Promise.
        </p>

        <CodeBlock
          code={`async function loadMath() {
  const math = await import("./math.js");

  console.log(math.add(10, 20));
}

loadMath();

// Output: 30`}
        />
      </section>

      {/* CommonJS vs ESM */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">CommonJS vs ES Modules</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm text-left">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="p-3">Feature</th>
                <th className="p-3">CommonJS</th>
                <th className="p-3">ES Modules</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)] text-[var(--text-secondary)]">
              {[
                ["Import", "require()", "import"],
                ["Export", "module.exports", "export"],
                [
                  "Loading",
                  "Synchronous",
                  "Static linking; dynamic import() is asynchronous",
                ],
                ["Strict Mode", "Not automatic", "Automatic"],
                ["File Extension", ".js / .cjs", ".js / .mjs"],
              ].map(([feature, commonjs, esm]) => (
                <tr key={feature}>
                  <td className="p-3 font-medium text-[var(--text-primary)]">
                    {feature}
                  </td>
                  <td className="p-3">{commonjs}</td>
                  <td className="p-3">{esm}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Summary */}
      <section className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] space-y-3">
        <h2 className="text-xl font-semibold">Key Takeaways</h2>

        <ul className="list-disc list-inside space-y-2 text-sm text-[var(--text-secondary)]">
          <li>ES Modules are the standard JavaScript module system.</li>
          <li>export is used to share code between modules.</li>
          <li>import is used to access exported values.</li>
          <li>ES Modules support named and default exports.</li>
          <li>Node.js enables ESM using "type": "module" or .mjs.</li>
          <li>Dynamic import() loads modules asynchronously.</li>
          <li>ES Modules automatically use strict mode.</li>
        </ul>
      </section>
    </div>
  );
};

export default ESModules;
