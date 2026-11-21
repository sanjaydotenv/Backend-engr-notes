import React from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const WhatareModules = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <header className="space-y-3">
        <span className="text-sm text-[var(--accent-color)] font-medium">
          NODE.JS / MODULES / 01
        </span>

        <h1 className="text-4xl font-bold">What are Modules?</h1>

        <p className="text-lg text-[var(--text-secondary)]">
          Modules help us organize code into separate, reusable and maintainable
          files.
        </p>
      </header>

      {/* Introduction */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What is a Module?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          A module is a separate file that contains specific code, such as
          functions, variables, classes or objects. We can export code from one
          module and use it in another module.
        </p>

        <p className="text-[var(--text-secondary)] leading-7">
          In Node.js, modules allow us to divide a large application into
          smaller and manageable parts instead of writing everything in a single
          file.
        </p>
      </section>

      {/* Why Modules */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Why Do We Need Modules?</h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              title: "Code Reusability",
              desc: "Write code once and use it in multiple files.",
            },
            {
              title: "Code Organization",
              desc: "Keep related functionality in separate files.",
            },
            {
              title: "Maintainability",
              desc: "Make applications easier to understand and update.",
            },
            {
              title: "Separation of Concerns",
              desc: "Keep different responsibilities in different modules.",
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

      {/* Example */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Practical Example</h2>

        <p className="text-[var(--text-secondary)]">
          Suppose we have two files. One file contains a function, and another
          file uses that function.
        </p>

        <div className="space-y-3">
          <div className="rounded-xl overflow-hidden border border-[var(--border-color)]">
            <div className="px-4 py-2 bg-[var(--bg-hover)] text-sm font-medium">
              math.js
            </div>
            <pre className="p-4 overflow-x-auto text-sm bg-[var(--bg-card)]">
              <CodeBlock code={`export function add(a, b) {
  return a + b;
}`} />
            </pre>
          </div>

          <div className="rounded-xl overflow-hidden border border-[var(--border-color)]">
            <div className="px-4 py-2 bg-[var(--bg-hover)] text-sm font-medium">
              app.js
            </div>
            <pre className="p-4 overflow-x-auto text-sm bg-[var(--bg-card)]">
              <CodeBlock code={`import { add } from "./math.js";

console.log(add(10, 20));

// Output: 30`} />
            </pre>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[var(--accent-background)] border border-[var(--border-color)] space-y-2">
          <h3 className="font-semibold text-[var(--accent-color)]">
            How does it work?
          </h3>
          <ol className="list-decimal list-inside space-y-2 text-sm text-[var(--text-secondary)]">
            <li>
              <strong>math.js</strong> contains the add() function.
            </li>
            <li>
              The <strong>export</strong> keyword makes the function available
              to other modules.
            </li>
            <li>
              <strong>app.js</strong> imports the function using import.
            </li>
            <li>Now app.js can use the add() function.</li>
          </ol>
        </div>
      </section>

      {/* Types */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Types of Modules in Node.js</h2>

        <div className="space-y-3">
          {[
            {
              title: "Built-in Modules",
              desc: "Modules provided by Node.js, such as fs, path, http and os.",
            },
            {
              title: "Custom Modules",
              desc: "Modules created by developers for their own applications.",
            },
            {
              title: "Third-party Modules",
              desc: "Modules created by other developers and installed using package managers like npm.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)]"
            >
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-[var(--text-secondary)] mt-1">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Module Systems */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Module Systems</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Node.js supports two main module systems:
        </p>

        <ul className="space-y-2 text-[var(--text-secondary)]">
          <li>
            <strong className="text-[var(--text-primary)]">CommonJS:</strong>{" "}
            Uses require() and module.exports.
          </li>
          <li>
            <strong className="text-[var(--text-primary)]">
              ES Modules (ESM):
            </strong>{" "}
            Uses import and export.
          </li>
        </ul>
      </section>

      {/* Summary */}
      <section className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] space-y-3">
        <h2 className="text-xl font-semibold">Key Takeaways</h2>

        <ul className="list-disc list-inside space-y-2 text-sm text-[var(--text-secondary)]">
          <li>A module is a separate file containing reusable code.</li>
          <li>Modules help organize large applications.</li>
          <li>We can share code between files using export and import.</li>
          <li>Node.js supports CommonJS and ES Modules.</li>
          <li>Modules make code easier to maintain and reuse.</li>
        </ul>
      </section>
    </div>
  );
};

export default WhatareModules;
