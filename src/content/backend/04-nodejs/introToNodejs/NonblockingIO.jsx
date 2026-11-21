import React from "react";

const NonblockingIO = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <header className="space-y-3">
        <span className="text-sm font-medium text-[var(--accent-color)]">
          NODE.JS / 06
        </span>

        <h1 className="text-4xl font-bold">Non-Blocking I/O</h1>

        <p className="text-lg text-[var(--text-secondary)]">
          Non-Blocking I/O allows Node.js to perform input and output operations
          without stopping the execution of other JavaScript code.
        </p>
      </header>

      {/* What is I/O */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What is I/O?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          I/O stands for Input/Output. It refers to operations where an
          application communicates with external resources.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>Reading or writing files.</li>
          <li>Communicating with a database.</li>
          <li>Sending HTTP requests.</li>
          <li>Receiving data from a network.</li>
        </ul>
      </section>

      {/* What is Non Blocking */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What is Non-Blocking I/O?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Non-Blocking I/O means that when an I/O operation starts, JavaScript
          does not have to wait for that operation to finish. It can continue
          executing other code.
        </p>

        <p className="text-[var(--text-secondary)] leading-7">
          When the operation completes, its callback or other completion handler
          can be scheduled for execution.
        </p>
      </section>

      {/* Blocking vs Non Blocking */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Blocking vs Non-Blocking I/O</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-5 space-y-3">
            <h3 className="text-lg font-semibold text-[var(--text-primary)]">
              Blocking I/O
            </h3>

            <p className="text-sm text-[var(--text-secondary)]">
              JavaScript waits for the operation to complete before continuing.
            </p>

            <div className="rounded-lg bg-[var(--bg-hover)] p-3 space-y-2 text-sm">
              <div>Start operation</div>
              <div className="text-center text-[var(--text-muted)]">↓</div>
              <div className="text-[var(--accent-color)]">
                Wait for completion
              </div>
              <div className="text-center text-[var(--text-muted)]">↓</div>
              <div>Execute next statement</div>
            </div>
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-5 space-y-3">
            <h3 className="text-lg font-semibold text-[var(--accent-color)]">
              Non-Blocking I/O
            </h3>

            <p className="text-sm text-[var(--text-secondary)]">
              JavaScript continues executing while the operation is in progress.
            </p>

            <div className="rounded-lg bg-[var(--bg-hover)] p-3 space-y-2 text-sm">
              <div>Start operation</div>
              <div className="text-center text-[var(--text-muted)]">↓</div>
              <div className="text-[var(--accent-color)]">
                Continue other code
              </div>
              <div className="text-center text-[var(--text-muted)]">↓</div>
              <div>Handle completion later</div>
            </div>
          </div>
        </div>
      </section>

      {/* Blocking Example */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Blocking I/O Example</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Node.js provides synchronous file operations that block JavaScript
          execution until the operation finishes.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--accent-background)] p-4">
          <pre className="overflow-x-auto text-sm">
            <code>{`const fs = require("fs");

console.log("Start");

const data = fs.readFileSync("data.txt", "utf8");

console.log("File Content:", data);

console.log("End");`}</code>
          </pre>

          <div className="mt-4 space-y-2">
            <p className="text-sm font-semibold text-[var(--accent-color)]">
              Execution Order
            </p>

            <pre className="text-sm text-[var(--text-secondary)]">
              {`Start
File Content: Hello Node.js
End`}
            </pre>
          </div>
        </div>

        <p className="text-sm text-[var(--text-secondary)] leading-6">
          readFileSync blocks the main JavaScript thread until the file has been
          read.
        </p>
      </section>

      {/* Non Blocking Example */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Non-Blocking I/O Example</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Now let's use readFile instead of readFileSync. It reads the file
          asynchronously and allows JavaScript to continue executing.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--accent-background)] p-4">
          <pre className="overflow-x-auto text-sm">
            <code>{`const fs = require("fs");

console.log("Start");

fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) return console.log(err);

  console.log("File Content:", data);
});

console.log("End");`}</code>
          </pre>

          <div className="mt-4 space-y-2">
            <p className="text-sm font-semibold text-[var(--accent-color)]">
              Typical Output
            </p>

            <pre className="text-sm text-[var(--text-secondary)]">
              {`Start
End
File Content: Hello Node.js`}
            </pre>
          </div>
        </div>

        <p className="text-sm text-[var(--text-secondary)] leading-6">
          The file operation starts, but JavaScript does not wait for it. The
          main thread executes console.log("End"). Once the file is read, the
          callback is executed when the Event Loop can process it.
        </p>
      </section>

      {/* How Node Handles */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">
          How Does Node.js Handle Non-Blocking I/O?
        </h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Node.js uses its runtime components, including libuv, to coordinate
          asynchronous operations.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-5 space-y-3">
          {[
            "JavaScript starts an asynchronous I/O operation.",
            "Node.js delegates the operation to the operating system or libuv.",
            "JavaScript continues executing other statements.",
            "The operation completes and its callback becomes ready.",
            "The Event Loop allows the callback to execute on the main thread.",
          ].map((step, index) => (
            <React.Fragment key={step}>
              <div className="rounded-lg bg-[var(--bg-hover)] p-3 text-sm text-[var(--text-secondary)]">
                <span className="mr-2 font-semibold text-[var(--accent-color)]">
                  {index + 1}.
                </span>
                {step}
              </div>

              {index !== 4 && (
                <div className="text-center text-[var(--text-muted)]">↓</div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Benefits of Non-Blocking I/O</h2>

        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>Handles many I/O operations efficiently.</li>
          <li>Reduces unnecessary waiting in JavaScript execution.</li>
          <li>Improves responsiveness of applications.</li>
          <li>
            Works well for APIs, chat applications and real-time services.
          </li>
        </ul>
      </section>

      {/* Important Note */}
      <section className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-5 space-y-3">
        <h2 className="text-xl font-semibold">Important Note</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Non-blocking does not mean the operation finishes immediately or that
          everything runs in parallel. It means JavaScript does not have to wait
          synchronously for the I/O operation to complete.
        </p>

        <p className="text-[var(--text-secondary)] leading-7">
          CPU-intensive JavaScript code can still block the main thread, even in
          a non-blocking I/O application.
        </p>
      </section>

      {/* Key Takeaways */}
      <section className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-5 space-y-3">
        <h2 className="text-xl font-semibold">Key Takeaways</h2>

        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>I/O means Input/Output operations.</li>
          <li>Blocking I/O makes JavaScript wait for an operation.</li>
          <li>Non-Blocking I/O allows JavaScript to continue executing.</li>
          <li>Node.js uses libuv and OS mechanisms for asynchronous I/O.</li>
          <li>The Event Loop coordinates callback execution.</li>
          <li>Non-blocking I/O is useful for I/O-heavy applications.</li>
        </ul>
      </section>

      {/* Next Topic */}
      <div className="border-t border-[var(--border-color)] pt-5">
        <p className="text-sm text-[var(--text-muted)]">NEXT TOPIC</p>
        <h3 className="mt-1 text-lg font-semibold text-[var(--accent-color)]">
          Asynchronous Programming
        </h3>
      </div>
    </div>
  );
};

export default NonblockingIO;
