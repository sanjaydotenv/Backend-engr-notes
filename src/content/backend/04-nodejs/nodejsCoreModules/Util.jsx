import React from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const Util = () => {
  return (
    <div className="space-y-10 text-[var(--text-primary)]">
      {/* Introduction */}
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Node.js Util Module</h1>

        <p className="leading-7 text-[var(--text-secondary)]">
          The Util module provides utility functions that help developers
          perform common programming tasks in Node.js.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          It is commonly used for converting callback-based functions into
          Promise-based functions, debugging objects, formatting strings, and
          inspecting JavaScript values.
        </p>

        <CodeBlock code={`const util = require("node:util");`} />
      </section>

      {/* Import */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">1. Importing the Util Module</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The Util module is a built-in Node.js module. You do not need to
          install any external package.
        </p>

        <h3 className="text-lg font-semibold">CommonJS</h3>
        <CodeBlock code={`const util = require("node:util");`} />

        <h3 className="text-lg font-semibold">ES Modules</h3>
        <CodeBlock code={`import * as util from "node:util";`} />

        <p className="text-sm text-[var(--text-muted)]">
          The node: prefix explicitly identifies a built-in Node.js module.
        </p>
      </section>

      {/* Promisify */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">2. util.promisify()</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Many older Node.js APIs use callbacks to return results. However,
          modern JavaScript applications commonly use Promises and async/await.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          <span className="text-[var(--accent-color)]">promisify()</span>
          converts a callback-based function into a function that returns a
          Promise.
        </p>

        <h3 className="text-lg font-semibold">Callback-Based Function</h3>

        <CodeBlock
          code={`const fs = require("node:fs");

fs.readFile("data.txt", "utf8", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }

  console.log(data);
});`}
        />

        <h3 className="text-lg font-semibold">Convert Callback into Promise</h3>

        <CodeBlock
          code={`const fs = require("node:fs");
const util = require("node:util");

const readFileAsync = util.promisify(fs.readFile);

async function readData() {
  try {
    const data = await readFileAsync("data.txt", "utf8");

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

readData();`}
        />

        <h3 className="text-lg font-semibold">How Does It Work?</h3>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 text-center">
          <p className="font-medium">Callback-Based Function</p>
          <p className="my-2 text-[var(--accent-color)]">↓</p>
          <p className="font-medium">util.promisify()</p>
          <p className="my-2 text-[var(--accent-color)]">↓</p>
          <p className="font-medium">Promise-Based Function</p>
          <p className="my-2 text-[var(--accent-color)]">↓</p>
          <p className="font-medium">async / await</p>
        </div>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <p className="font-semibold text-[var(--accent-color)]">Important</p>
          <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
            promisify() expects the traditional error-first callback pattern:
            callback(error, result). It rejects the returned Promise when the
            callback receives an error and resolves it with the result.
          </p>
        </div>

        <p className="leading-7 text-[var(--text-secondary)]">
          Node.js already provides Promise-based APIs for many built-in modules.
          For example, you can directly use
          <span className="text-[var(--accent-color)]"> fs/promises</span>
          instead of promisifying fs.readFile().
        </p>

        <CodeBlock
          code={`const fs = require("node:fs/promises");

async function readData() {
  const data = await fs.readFile("data.txt", "utf8");

  console.log(data);
}

readData();`}
        />
      </section>

      {/* Callbackify */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">3. util.callbackify()</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          callbackify() does the opposite of promisify(). It converts a function
          that returns a Promise into a callback-based function.
        </p>

        <h3 className="text-lg font-semibold">Example</h3>

        <CodeBlock
          code={`const util = require("node:util");

async function getUser() {
  return {
    id: 1,
    name: "Mayur"
  };
}

const getUserWithCallback = util.callbackify(getUser);

getUserWithCallback((error, user) => {
  if (error) {
    console.log(error);
    return;
  }

  console.log(user);
});`}
        />

        <h3 className="text-lg font-semibold">How Does It Work?</h3>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 text-center">
          <p className="font-medium">Promise-Based Function</p>
          <p className="my-2 text-[var(--accent-color)]">↓</p>
          <p className="font-medium">util.callbackify()</p>
          <p className="my-2 text-[var(--accent-color)]">↓</p>
          <p className="font-medium">Callback-Based Function</p>
        </div>

        <p className="leading-7 text-[var(--text-secondary)]">
          This is useful when integrating modern Promise-based code with older
          APIs or libraries that expect callbacks.
        </p>
      </section>

      {/* Inspect */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">4. util.inspect()</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          inspect() converts a JavaScript value into a readable string
          representation. It is especially useful for debugging complex objects,
          nested data, and circular references.
        </p>

        <CodeBlock
          code={`const util = require("node:util");

const user = {
  name: "Mayur",
  age: 19,
  skills: {
    frontend: ["React", "JavaScript"],
    backend: ["Node.js", "Express"]
  }
};

console.log(util.inspect(user, {
  depth: null,
  colors: true
}));`}
        />

        <h3 className="text-lg font-semibold">Important Options</h3>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="p-3 text-left">Option</th>
                <th className="p-3 text-left">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["depth", "Controls how deeply nested objects are inspected."],
                ["colors", "Adds ANSI colors to the output."],
                [
                  "showHidden",
                  "Includes certain non-enumerable properties and symbols.",
                ],
                ["compact", "Controls how compactly the output is displayed."],
              ].map(([name, purpose]) => (
                <tr
                  key={name}
                  className="border-t border-[var(--border-color)]"
                >
                  <td className="p-3 font-medium text-[var(--accent-color)]">
                    {name}
                  </td>
                  <td className="p-3 text-[var(--text-secondary)]">
                    {purpose}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <p className="font-semibold text-[var(--accent-color)]">Remember</p>
          <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
            inspect() is intended for debugging and display. Its output is not a
            reliable data serialization format. Use JSON.stringify() when you
            need JSON serialization.
          </p>
        </div>
      </section>

      {/* Format */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">5. util.format()</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          format() creates a formatted string using placeholders. It is useful
          when combining text and values for logging.
        </p>

        <CodeBlock
          code={`const util = require("node:util");

const name = "Mayur";
const age = 19;

const message = util.format(
  "Name: %s, Age: %d",
  name,
  age
);

console.log(message);`}
        />

        <h3 className="text-lg font-semibold">Common Placeholders</h3>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="p-3 text-left">Placeholder</th>
                <th className="p-3 text-left">Meaning</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["%s", "String"],
                ["%d", "Number"],
                ["%i", "Integer"],
                ["%f", "Floating-point number"],
                ["%j", "JSON representation"],
                ["%o", "Object representation"],
                ["%%", "Literal percent sign"],
              ].map(([placeholder, meaning]) => (
                <tr
                  key={placeholder}
                  className="border-t border-[var(--border-color)]"
                >
                  <td className="p-3 font-medium text-[var(--accent-color)]">
                    {placeholder}
                  </td>
                  <td className="p-3 text-[var(--text-secondary)]">
                    {meaning}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-[var(--text-muted)]">
          Placeholders are useful for formatting logs. For more complex
          application logging, a dedicated logger can provide additional
          features.
        </p>
      </section>

      {/* Types */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">6. util.types</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          util.types provides functions for checking the internal type of
          certain JavaScript and Node.js values.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          It is useful when you need to distinguish specific built-in objects
          instead of relying only on typeof.
        </p>

        <CodeBlock
          code={`const { types } = require("node:util");

console.log(types.isDate(new Date()));
// true

console.log(types.isRegExp(/hello/));
// true

console.log(types.isNativeError(new Error("Something went wrong")));
// true

console.log(types.isPromise(Promise.resolve("Done")));
// true`}
        />

        <h3 className="text-lg font-semibold">Common Type Checks</h3>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="p-3 text-left">Method</th>
                <th className="p-3 text-left">Checks For</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["isDate()", "Date objects"],
                ["isRegExp()", "Regular expression objects"],
                ["isNativeError()", "Native Error objects"],
                ["isPromise()", "Promise objects"],
                ["isMap()", "Map objects"],
                ["isSet()", "Set objects"],
                ["isTypedArray()", "Typed array objects"],
                ["isArrayBuffer()", "ArrayBuffer objects"],
              ].map(([method, purpose]) => (
                <tr
                  key={method}
                  className="border-t border-[var(--border-color)]"
                >
                  <td className="p-3 font-medium text-[var(--accent-color)]">
                    {method}
                  </td>
                  <td className="p-3 text-[var(--text-secondary)]">
                    {purpose}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-[var(--text-muted)]">
          These methods return boolean values. Use Array.isArray() for normal
          array checking and typeof for basic JavaScript type checks.
        </p>
      </section>

      {/* Debuglog */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">7. util.debuglog()</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          debuglog() creates a debugging function that prints messages only when
          the corresponding debug category is enabled through the NODE_DEBUG
          environment variable.
        </p>

        <CodeBlock
          code={`const util = require("node:util");

const debug = util.debuglog("app");

debug("Application is starting...");
debug("Database connection initialized");`}
        />

        <h3 className="text-lg font-semibold">Enable Debug Messages</h3>

        <p className="text-sm text-[var(--text-secondary)]">
          On Windows PowerShell:
        </p>

        <CodeBlock
          code={`$env:NODE_DEBUG="app"
node index.js`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          On Linux or macOS:
        </p>

        <CodeBlock code={`NODE_DEBUG=app node index.js`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          When the app category is enabled, matching debug messages are printed.
          This is useful for development and troubleshooting.
        </p>
      </section>

      {/* Deprecate */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">8. util.deprecate()</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          deprecate() wraps a function and marks it as deprecated. When the
          wrapped function is called, Node.js emits a deprecation warning
          according to its deprecation settings.
        </p>

        <CodeBlock
          code={`const util = require("node:util");

function oldFunction() {
  console.log("Old function executed");
}

const deprecatedFunction = util.deprecate(
  oldFunction,
  "oldFunction() is deprecated. Use newFunction() instead."
);

deprecatedFunction();`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          This is useful when maintaining libraries or applications where an
          older API is being replaced with a newer one.
        </p>
      </section>

      {/* Practical Example */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          9. Practical Example: Callback to Async/Await
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Suppose an older library provides a callback-based function, but your
          backend code uses async/await. You can use promisify() to integrate
          both styles.
        </p>

        <CodeBlock
          code={`const util = require("node:util");

function getUserById(id, callback) {
  setTimeout(() => {
    if (!id) {
      return callback(new Error("User ID is required"));
    }

    callback(null, {
      id,
      name: "Mayur"
    });
  }, 500);
}

const getUserAsync = util.promisify(getUserById);

async function main() {
  try {
    const user = await getUserAsync(101);

    console.log(user);
  } catch (error) {
    console.error(error.message);
  }
}

main();`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Here, getUserById() follows the callback pattern. promisify() converts
          it into a Promise-based function, allowing us to use await and
          try/catch.
        </p>
      </section>

      {/* Summary */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">10. Summary</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="p-3 text-left">Utility</th>
                <th className="p-3 text-left">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["promisify()", "Callback → Promise"],
                ["callbackify()", "Promise → Callback"],
                ["inspect()", "Inspect complex values"],
                ["format()", "Format strings"],
                ["types", "Check specific JavaScript value types"],
                ["debuglog()", "Category-based debugging"],
                ["deprecate()", "Mark functions as deprecated"],
              ].map(([name, purpose]) => (
                <tr
                  key={name}
                  className="border-t border-[var(--border-color)]"
                >
                  <td className="p-3 font-medium text-[var(--accent-color)]">
                    {name}
                  </td>
                  <td className="p-3 text-[var(--text-secondary)]">
                    {purpose}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="leading-7 text-[var(--text-secondary)]">
          The Util module makes everyday Node.js development easier by providing
          reusable helpers for asynchronous programming, debugging, formatting,
          and type inspection.
        </p>
      </section>
    </div>
  );
};

export default Util;
