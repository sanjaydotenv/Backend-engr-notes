import React from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const ModuleCaching = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <header className="space-y-3">
        <span className="text-sm text-[var(--accent-color)] font-medium">
          NODE.JS / MODULES / 08
        </span>

        <h1 className="text-4xl font-bold">Module Caching</h1>

        <p className="text-lg text-[var(--text-secondary)]">
          Module caching allows Node.js to reuse previously loaded modules
          instead of executing the same module repeatedly.
        </p>
      </header>

      {/* What is Module Caching */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What is Module Caching?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Module caching is a mechanism in Node.js where a module is stored in
          memory after its first successful load.
        </p>

        <p className="text-[var(--text-secondary)] leading-7">
          When the same module is required again using the same resolved
          filename, Node.js normally returns the cached exports instead of
          loading and executing the module again.
        </p>
      </section>

      {/* Why Caching */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Why Does Node.js Use Module Caching?
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              title: "Performance",
              desc: "Avoids repeatedly loading and executing the same module.",
            },
            {
              title: "Memory Reuse",
              desc: "Reuses the already loaded module and its exported values.",
            },
            {
              title: "Less Repeated Work",
              desc: "Prevents unnecessary module initialization.",
            },
            {
              title: "Shared State",
              desc: "Multiple files can access the same cached module instance.",
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

      {/* How it works */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          How Does Module Caching Work?
        </h2>

        <p className="text-[var(--text-secondary)] leading-7">
          When a CommonJS module is loaded for the first time, Node.js resolves
          its path, executes it and stores its module object in the module
          cache.
        </p>

        <div className="space-y-3">
          {[
            {
              title: "1. First require()",
              desc: "Node.js checks whether the requested module is already cached. If not, it starts loading the module.",
            },
            {
              title: "2. Module Execution",
              desc: "Node.js executes the module code and creates its exported values.",
            },
            {
              title: "3. Store in Cache",
              desc: "The loaded module is stored in require.cache using its resolved filename.",
            },
            {
              title: "4. Next require()",
              desc: "Node.js finds the cached module and returns its existing exports instead of executing it again.",
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

      {/* Practical Example */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Practical Example</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Let's create a module and import it multiple times from the same
          application.
        </p>

        <div className="space-y-3">
          <div>
            <h3 className="font-medium mb-2">counter.js</h3>
            <CodeBlock
              code={`console.log("Counter module executed");

let count = 0;

count++;

module.exports = count;`}
            />
          </div>

          <div>
            <h3 className="font-medium mb-2">app.js</h3>
            <CodeBlock
              code={`const first = require("./counter");
const second = require("./counter");
const third = require("./counter");

console.log(first);
console.log(second);
console.log(third);

// Output:
// Counter module executed
// 1
// 1
// 1`}
            />
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[var(--accent-background)] border border-[var(--border-color)] space-y-2">
          <h3 className="font-semibold text-[var(--accent-color)]">
            Why is the output 1 every time?
          </h3>
          <p className="text-sm text-[var(--text-secondary)] leading-6">
            The counter module executes only once. Its exported value (1) is
            cached, so subsequent require() calls return the same cached value
            instead of running the module again.
          </p>
        </div>
      </section>

      {/* Shared State */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Module Caching and Shared State
        </h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Because CommonJS modules are cached, different files can access the
          same exported object. Changes to that shared object can be visible to
          other files.
        </p>

        <div className="space-y-3">
          <div>
            <h3 className="font-medium mb-2">user.js</h3>
            <CodeBlock
              code={`module.exports = {
  name: "Mayur",
  age: 19
};`}
            />
          </div>

          <div>
            <h3 className="font-medium mb-2">app.js</h3>
            <CodeBlock
              code={`const user1 = require("./user");
const user2 = require("./user");

user1.age = 20;

console.log(user2.age);

// Output: 20

console.log(user1 === user2);

// Output: true`}
            />
          </div>
        </div>

        <p className="text-sm text-[var(--text-muted)]">
          Both variables reference the same cached exported object in this
          example.
        </p>
      </section>

      {/* require.cache */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">What is require.cache?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          require.cache is an object that stores loaded CommonJS modules. Each
          entry is associated with the module's resolved filename.
        </p>

        <CodeBlock
          code={`const path = require("node:path");

const modulePath = require.resolve("./user");

console.log(require.cache[modulePath]);`}
        />

        <p className="text-[var(--text-secondary)] leading-7">
          If the module has already been loaded, its cached Module object can be
          accessed using this path.
        </p>
      </section>

      {/* Clearing Cache */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">How to Clear Module Cache?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          We can remove a CommonJS module from require.cache using the delete
          operator. The next require() call will load and execute that module
          again.
        </p>

        <CodeBlock
          code={`const modulePath = require.resolve("./counter");

// Load module
const first = require("./counter");

// Remove it from cache
delete require.cache[modulePath];

// Load it again
const second = require("./counter");`}
        />

        <div className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--accent-background)] space-y-2">
          <h3 className="font-semibold text-[var(--accent-color)]">
            Important
          </h3>
          <p className="text-sm text-[var(--text-secondary)] leading-6">
            Clearing the cache does not automatically update references that
            were already imported by other files. It only affects future module
            loads.
          </p>
        </div>
      </section>

      {/* ESM Caching */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Module Caching in ES Modules</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          ES Modules also have caching. Node.js loads and evaluates an ES Module
          once per resolved module identity, then reuses its module instance for
          subsequent imports.
        </p>

        <CodeBlock
          code={`// user.js

console.log("ES Module executed");

export const user = {
  name: "Mayur"
};

// app.js

import { user as first } from "./user.js";
import { user as second } from "./user.js";

console.log(first === second);

// Output:
// ES Module executed
// true`}
        />

        <p className="text-sm text-[var(--text-muted)]">
          Unlike CommonJS, ES Modules do not expose the require.cache object.
          Their module loading and caching are handled by the ESM loader.
        </p>
      </section>

      {/* CommonJS vs ESM */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          CommonJS vs ES Module Caching
        </h2>

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
                ["Caching", "Yes", "Yes"],
                ["Cache Access", "require.cache", "Managed by ESM loader"],
                [
                  "Repeated Loading",
                  "Reuses cached exports",
                  "Reuses module instance",
                ],
                [
                  "Manual Cache Removal",
                  "Possible using require.cache",
                  "No equivalent public API",
                ],
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
          <li>Node.js caches successfully loaded CommonJS modules.</li>
          <li>The first require() loads and executes the module.</li>
          <li>Subsequent require() calls reuse cached exports.</li>
          <li>require.cache stores loaded CommonJS module objects.</li>
          <li>delete require.cache can remove a module from the cache.</li>
          <li>ES Modules also cache their loaded module instances.</li>
          <li>Module caching helps avoid repeated module execution.</li>
        </ul>
      </section>
    </div>
  );
};

export default ModuleCaching;
