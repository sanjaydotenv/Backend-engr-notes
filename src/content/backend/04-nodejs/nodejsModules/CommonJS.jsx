import React from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const CommonJS = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <header className="space-y-3">
        <span className="text-sm text-[var(--accent-color)] font-medium">
          NODE.JS / MODULES / 02
        </span>

        <h1 className="text-4xl font-bold">CommonJS</h1>

        <p className="text-lg text-[var(--text-secondary)]">
          CommonJS is a module system used by Node.js to organize and share code
          between different files.
        </p>
      </header>

      {/* What is CommonJS */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What is CommonJS?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          CommonJS is the traditional module system of Node.js. It allows us to
          export functions, variables, objects and classes from one file and
          import them into another file.
        </p>

        <p className="text-[var(--text-secondary)] leading-7">
          CommonJS uses <strong>module.exports</strong> to export code and
          <strong> require()</strong> to import code.
        </p>
      </section>

      {/* Syntax */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Basic Syntax</h2>

        <div className="space-y-3">
          <div>
            <h3 className="font-semibold mb-2 text-[var(--accent-color)]">
              Exporting
            </h3>
            <CodeBlock
              code={`module.exports = {
  name: "Mayur",
  age: 19
};`}
            />
          </div>

          <div>
            <h3 className="font-semibold mb-2 text-[var(--accent-color)]">
              Importing
            </h3>
            <CodeBlock
              code={`const user = require("./user");

console.log(user.name);
console.log(user.age);`}
            />
          </div>
        </div>
      </section>

      {/* Practical Example */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Practical Example</h2>

        <p className="text-[var(--text-secondary)]">
          Suppose we have two files. We want to create a function in one file
          and use it in another file.
        </p>

        <div className="space-y-3">
          <div>
            <h3 className="font-medium mb-2">math.js</h3>
            <CodeBlock
              code={`function add(a, b) {
  return a + b;
}

module.exports = add;`}
            />
          </div>

          <div>
            <h3 className="font-medium mb-2">app.js</h3>
            <CodeBlock
              code={`const add = require("./math");

console.log(add(10, 20));

// Output: 30`}
            />
          </div>
        </div>
      </section>

      {/* Multiple Exports */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Exporting Multiple Values</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          We can export multiple functions, variables or objects together using
          module.exports.
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

module.exports = {
  add,
  subtract
};`}
            />
          </div>

          <div>
            <h3 className="font-medium mb-2">app.js</h3>
            <CodeBlock
              code={`const math = require("./math");

console.log(math.add(10, 5));
console.log(math.subtract(10, 5));

// Output:
// 15
// 5`}
            />
          </div>
        </div>
      </section>

      {/* Exports vs module.exports */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">exports vs module.exports</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          In CommonJS, exports is a shortcut reference to module.exports. Both
          can be used to add properties to the exported object.
        </p>

        <CodeBlock
          code={`// Using exports
exports.name = "Mayur";
exports.age = 19;

// Using module.exports
module.exports = {
  name: "Mayur",
  age: 19
};`}
        />

        <div className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--accent-background)] space-y-2">
          <h3 className="font-semibold text-[var(--accent-color)]">
            Important Difference
          </h3>
          <p className="text-sm text-[var(--text-secondary)] leading-6">
            You can add properties using exports, but assigning a completely new
            value to exports does not replace module.exports. To replace the
            exported value, always use module.exports.
          </p>
          <CodeBlock
            code={`// Correct
module.exports = add;

// Incorrect for replacing the exported value
exports = add;`}
          />
        </div>
      </section>

      {/* How require works */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">How require() Works</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          When require() loads a CommonJS module, Node.js executes that module
          and returns its exported value.
        </p>

        <ol className="list-decimal list-inside space-y-2 text-[var(--text-secondary)]">
          <li>Node.js resolves the requested module path.</li>
          <li>It loads and executes the module if needed.</li>
          <li>The module's exported value is returned.</li>
          <li>Node.js caches the loaded module for future use.</li>
        </ol>

        <p className="text-sm text-[var(--text-muted)]">
          Module caching is why a CommonJS module is normally executed only once
          per resolved filename within a Node.js process.
        </p>
      </section>

      {/* Features */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Key Features</h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              title: "require()",
              desc: "Used to import modules.",
            },
            {
              title: "module.exports",
              desc: "Used to export values from a module.",
            },
            {
              title: "Synchronous Loading",
              desc: "CommonJS require() loads modules synchronously.",
            },
            {
              title: "Module Caching",
              desc: "Loaded modules are cached and reused.",
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
          <li>CommonJS is a traditional Node.js module system.</li>
          <li>require() is used to import modules.</li>
          <li>module.exports is used to export values.</li>
          <li>exports is a shortcut reference to module.exports.</li>
          <li>CommonJS modules are loaded synchronously.</li>
          <li>Node.js caches loaded CommonJS modules.</li>
        </ul>
      </section>
    </div>
  );
};

export default CommonJS;
