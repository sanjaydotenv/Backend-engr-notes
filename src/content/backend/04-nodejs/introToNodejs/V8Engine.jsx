import React from "react";

const V8Engine = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <header className="space-y-3">
        <span className="text-sm font-medium text-[var(--accent-color)]">
          NODE.JS / 08
        </span>

        <h1 className="text-4xl font-bold">V8 Engine</h1>

        <p className="text-lg text-[var(--text-secondary)]">
          V8 is a JavaScript engine that executes JavaScript code by converting
          it into machine code.
        </p>
      </header>

      {/* What is V8 */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What is V8 Engine?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          V8 is an open-source JavaScript engine developed by Google. It is
          written in C++ and is used by Chrome and Node.js to execute JavaScript
          code.
        </p>

        <p className="text-[var(--text-secondary)] leading-7">
          A JavaScript engine is responsible for understanding and executing
          JavaScript code.
        </p>
      </section>

      {/* Why V8 */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Why Does Node.js Use V8?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Node.js uses V8 because it provides fast JavaScript execution. It
          allows developers to write JavaScript code and execute it outside the
          browser.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>Executes JavaScript efficiently.</li>
          <li>Converts JavaScript into machine code.</li>
          <li>Uses Just-In-Time compilation.</li>
          <li>Automatically manages memory.</li>
        </ul>
      </section>

      {/* How V8 Works */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">How Does V8 Work?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          When JavaScript code is executed, V8 processes it through several
          internal steps.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-5 space-y-3">
          {[
            ["1. JavaScript Code", "Your JavaScript source code."],
            [
              "2. Parser",
              "Checks the syntax and creates an internal representation called AST.",
            ],
            ["3. Ignition", "Generates and executes bytecode."],
            [
              "4. TurboFan",
              "Optimizes frequently executed code into machine code.",
            ],
            ["5. Execution", "The generated machine code runs on the CPU."],
          ].map(([title, description], index) => (
            <React.Fragment key={title}>
              <div className="rounded-lg bg-[var(--bg-hover)] p-4">
                <h3 className="font-semibold text-[var(--accent-color)]">
                  {title}
                </h3>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">
                  {description}
                </p>
              </div>

              {index !== 4 && (
                <div className="text-center text-[var(--text-muted)]">↓</div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* JIT */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">
          What is Just-In-Time (JIT) Compilation?
        </h2>

        <p className="text-[var(--text-secondary)] leading-7">
          JIT compilation is a technique where code is compiled into machine
          code while the program is running.
        </p>

        <p className="text-[var(--text-secondary)] leading-7">
          V8 initially executes JavaScript using bytecode. When it detects
          frequently executed code, it can optimize that code into machine code
          for faster execution.
        </p>
      </section>

      {/* Memory Management */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Memory Management</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          V8 manages memory automatically. It allocates memory for JavaScript
          objects and uses Garbage Collection to clean up objects that are no
          longer reachable.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--accent-background)] p-4">
          <h3 className="font-semibold text-[var(--accent-color)]">Example</h3>

          <pre className="mt-3 overflow-x-auto text-sm">
            <code>{`let user = {
  name: "Mayur"
};

user = null;`}</code>
          </pre>

          <p className="mt-3 text-sm text-[var(--text-secondary)]">
            When the object is no longer reachable, V8 can eventually reclaim
            its memory through Garbage Collection.
          </p>
        </div>
      </section>

      {/* V8 vs Node */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">V8 vs Node.js</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-left text-sm">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="p-3">V8 Engine</th>
                <th className="p-3">Node.js</th>
              </tr>
            </thead>

            <tbody className="text-[var(--text-secondary)]">
              <tr>
                <td className="p-3 border-t border-[var(--border-color)]">
                  Executes JavaScript.
                </td>
                <td className="p-3 border-t border-[var(--border-color)]">
                  Provides a runtime environment.
                </td>
              </tr>

              <tr>
                <td className="p-3 border-t border-[var(--border-color)]">
                  Converts JavaScript into executable machine code.
                </td>
                <td className="p-3 border-t border-[var(--border-color)]">
                  Provides APIs like fs, http and process.
                </td>
              </tr>

              <tr>
                <td className="p-3 border-t border-[var(--border-color)]">
                  Does not provide Node.js APIs.
                </td>
                <td className="p-3 border-t border-[var(--border-color)]">
                  Uses V8 to execute JavaScript.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-5 space-y-3">
        <h2 className="text-xl font-semibold">Key Takeaways</h2>

        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>V8 is a JavaScript engine developed by Google.</li>
          <li>It is written in C++.</li>
          <li>It converts JavaScript into executable machine code.</li>
          <li>Ignition generates bytecode and TurboFan optimizes code.</li>
          <li>V8 manages memory using Garbage Collection.</li>
          <li>Node.js uses V8 to execute JavaScript outside the browser.</li>
        </ul>
      </section>

      {/* Next Topic */}
      <div className="border-t border-[var(--border-color)] pt-5">
        <p className="text-sm text-[var(--text-muted)]">NEXT TOPIC</p>
        <h3 className="mt-1 text-lg font-semibold text-[var(--accent-color)]">
          libuv
        </h3>
      </div>
    </div>
  );
};

export default V8Engine;
