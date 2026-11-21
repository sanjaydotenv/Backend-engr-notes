import React from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const Require = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <header className="space-y-3">
        <span className="text-sm text-[var(--accent-color)] font-medium">
          NODE.JS / MODULES / 05
        </span>

        <h1 className="text-4xl font-bold">require()</h1>

        <p className="text-lg text-[var(--text-secondary)]">
          require() is a built-in CommonJS function used to load modules and
          access their exported values in Node.js.
        </p>
      </header>

      {/* Introduction */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What is require()?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          In Node.js, require() allows one file to load and use code exported by
          another file. It is mainly used with the CommonJS module system.
        </p>

        <p className="text-[var(--text-secondary)] leading-7">
          When we call require(), Node.js resolves the module, loads and
          executes it if necessary, and returns its exported value.
        </p>
      </section>

      {/* Syntax */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Basic Syntax</h2>

        <CodeBlock code={`const moduleName = require("module-name");`} />

        <p className="text-sm text-[var(--text-secondary)]">
          The returned value is stored in a variable, which we can use
          throughout our file.
        </p>
      </section>

      {/* Custom Module */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Importing Custom Modules</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          We can use require() to import a module created in our own project.
          For local files, we provide a relative or absolute path.
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

      {/* Built-in Modules */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Importing Built-in Modules</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Node.js provides built-in modules that we can directly import using
          require(), without installing them separately.
        </p>

        <CodeBlock
          code={`const fs = require("node:fs");
const path = require("node:path");
const os = require("node:os");

console.log(os.platform());
console.log(path.basename("/users/app.js"));`}
        />

        <p className="text-sm text-[var(--text-muted)]">
          The node: prefix explicitly identifies a Node.js built-in module.
        </p>
      </section>

      {/* Third Party */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">
          Importing Third-party Modules
        </h2>

        <p className="text-[var(--text-secondary)] leading-7">
          We can also load packages installed through npm using require().
        </p>

        <CodeBlock
          code={`// Install the package first
// npm install express

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Node.js!");
});

app.listen(3000);`}
        />
      </section>

      {/* How it works */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          How Does require() Work Internally?
        </h2>

        <p className="text-[var(--text-secondary)] leading-7">
          When require() is called, Node.js performs several steps to load a
          CommonJS module.
        </p>

        <div className="space-y-3">
          {[
            {
              title: "1. Resolve",
              desc: "Node.js determines the actual file or package that needs to be loaded.",
            },
            {
              title: "2. Load",
              desc: "Node.js reads the module's source code.",
            },
            {
              title: "3. Wrap",
              desc: "The module code is wrapped inside a function with parameters such as exports, require, module, __filename and __dirname.",
            },
            {
              title: "4. Execute",
              desc: "Node.js executes the wrapped module code.",
            },
            {
              title: "5. Return",
              desc: "The value of module.exports is returned to the file that called require().",
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

        <div className="p-4 rounded-xl bg-[var(--accent-background)] border border-[var(--border-color)] space-y-2">
          <h3 className="font-semibold text-[var(--accent-color)]">
            Important
          </h3>
          <p className="text-sm text-[var(--text-secondary)] leading-6">
            The module wrapper is an internal CommonJS mechanism. It gives each
            module its own scope and provides access to CommonJS variables and
            functions.
          </p>
        </div>
      </section>

      {/* Module Resolution */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Module Resolution</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Module resolution is the process Node.js uses to find the module
          requested inside require().
        </p>

        <div className="space-y-3">
          <div className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)]">
            <h3 className="font-semibold mb-2">1. Core Modules</h3>
            <CodeBlock code={`const fs = require("node:fs");`} />
            <p className="text-sm text-[var(--text-secondary)] mt-2">
              Loads a built-in Node.js module.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)]">
            <h3 className="font-semibold mb-2">2. Local Modules</h3>
            <CodeBlock
              code={`const user = require("./user");
const config = require("../config");`}
            />
            <p className="text-sm text-[var(--text-secondary)] mt-2">
              Loads modules using relative or absolute file paths.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)]">
            <h3 className="font-semibold mb-2">3. Third-party Modules</h3>
            <CodeBlock code={`const express = require("express");`} />
            <p className="text-sm text-[var(--text-secondary)] mt-2">
              Searches for the package in node_modules directories.
            </p>
          </div>
        </div>
      </section>

      {/* Caching */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Module Caching</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Node.js caches a CommonJS module after its first successful load. When
          the same resolved module is required again, Node.js normally returns
          the cached exports instead of executing the module again.
        </p>

        <CodeBlock
          code={`// counter.js

console.log("Module Loaded");

module.exports = {
  count: 10
};

// app.js

const first = require("./counter");
const second = require("./counter");

console.log(first === second);

// Output:
// Module Loaded
// true`}
        />

        <p className="text-sm text-[var(--text-muted)]">
          Both variables receive the same cached export object in this example.
        </p>
      </section>

      {/* ESM Difference */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">require() vs import</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm text-left">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="p-3">Feature</th>
                <th className="p-3">require()</th>
                <th className="p-3">import</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)] text-[var(--text-secondary)]">
              {[
                ["Module System", "CommonJS", "ES Modules"],
                ["Loading", "Synchronous", "Static linking"],
                ["Syntax", "Function call", "Import declaration"],
                ["Dynamic Loading", "require()", "import()"],
                ["Export System", "module.exports", "export"],
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
          <li>require() is used in the CommonJS module system.</li>
          <li>It loads built-in, local and third-party modules.</li>
          <li>It returns the value of module.exports.</li>
          <li>CommonJS modules are loaded synchronously.</li>
          <li>Node.js wraps and executes CommonJS modules.</li>
          <li>Loaded modules are cached for future use.</li>
          <li>require() and import belong to different module systems.</li>
        </ul>
      </section>
    </div>
  );
};

export default Require;
