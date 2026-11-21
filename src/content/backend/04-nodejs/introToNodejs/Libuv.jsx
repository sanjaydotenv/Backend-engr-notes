import React from "react";

const libuv = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <header className="space-y-3">
        <span className="text-sm font-medium text-[var(--accent-color)]">
          NODE.JS / 09
        </span>

        <h1 className="text-4xl font-bold">libuv</h1>

        <p className="text-lg text-[var(--text-secondary)]">
          libuv is a C library that provides asynchronous I/O operations, Event
          Loop and Thread Pool functionality to Node.js.
        </p>
      </header>

      {/* What is libuv */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What is libuv?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          libuv is a cross-platform library written in C. Node.js uses it to
          handle asynchronous operations such as file system operations,
          networking and timers.
        </p>

        <p className="text-[var(--text-secondary)] leading-7">
          It helps Node.js perform operations without blocking the main
          JavaScript execution thread.
        </p>
      </section>

      {/* Why libuv */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Why Does Node.js Use libuv?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          JavaScript executes on the main thread. If every operation had to wait
          for the previous operation to finish, Node.js applications would
          become slow.
        </p>

        <p className="text-[var(--text-secondary)] leading-7">
          libuv helps Node.js handle I/O operations asynchronously, allowing
          JavaScript to continue executing other tasks.
        </p>
      </section>

      {/* Main Responsibilities */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Main Responsibilities</h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              title: "Event Loop",
              description:
                "Coordinates asynchronous callbacks and manages different phases of event processing.",
            },
            {
              title: "Thread Pool",
              description:
                "Handles certain operations in background threads, such as filesystem and some cryptographic tasks.",
            },
            {
              title: "Asynchronous I/O",
              description:
                "Helps Node.js perform I/O operations without blocking JavaScript execution.",
            },
            {
              title: "Cross-Platform Support",
              description:
                "Provides a consistent asynchronous interface across Windows, Linux and macOS.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-5 space-y-2"
            >
              <h3 className="font-semibold text-[var(--accent-color)]">
                {item.title}
              </h3>
              <p className="text-sm leading-6 text-[var(--text-secondary)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Event Loop */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Event Loop</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          The Event Loop is one of the most important parts of libuv. It
          coordinates when asynchronous callbacks are executed.
        </p>

        <p className="text-[var(--text-secondary)] leading-7">
          When an asynchronous operation completes, its callback can be
          scheduled for execution. The Event Loop processes callbacks when
          JavaScript is ready to execute them.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-5 space-y-3">
          <h3 className="font-semibold">Simplified Flow</h3>

          {[
            "JavaScript starts an asynchronous operation.",
            "libuv coordinates the operation.",
            "The operation completes.",
            "Its callback becomes ready for execution.",
            "The Event Loop executes the callback when possible.",
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

      {/* Thread Pool */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Thread Pool</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          libuv provides a Thread Pool to execute certain tasks in background
          threads. This prevents those tasks from blocking the main JavaScript
          thread.
        </p>

        <p className="text-[var(--text-secondary)] leading-7">
          By default, the libuv Thread Pool contains 4 worker threads. Its size
          can be configured using the{" "}
          <code className="text-[var(--accent-color)]">UV_THREADPOOL_SIZE</code>{" "}
          environment variable.
        </p>

        <h3 className="font-semibold">Common Thread Pool Operations</h3>

        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>File system operations.</li>
          <li>Some cryptographic operations.</li>
          <li>DNS lookup using certain APIs.</li>
          <li>Some compression operations.</li>
        </ul>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--accent-background)] p-4">
          <p className="text-sm text-[var(--text-secondary)]">
            <strong className="text-[var(--accent-color)]">Important:</strong>{" "}
            Not every asynchronous operation uses the Thread Pool. Network I/O
            generally uses operating-system mechanisms such as epoll, kqueue or
            IOCP.
          </p>
        </div>
      </section>

      {/* Example */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Practical Example</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Consider reading a file using Node.js. The operation is asynchronous,
          so JavaScript can continue executing while the file is being read.
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
          The file operation runs asynchronously. JavaScript does not wait for
          it to finish and continues to execute the next statement.
        </p>
      </section>

      {/* Key Takeaways */}
      <section className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-5 space-y-3">
        <h2 className="text-xl font-semibold">Key Takeaways</h2>

        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>libuv is a C library used by Node.js.</li>
          <li>It provides the Event Loop and Thread Pool.</li>
          <li>It helps Node.js handle asynchronous I/O.</li>
          <li>Thread Pool handles certain background operations.</li>
          <li>Not all asynchronous operations use the Thread Pool.</li>
          <li>It provides cross-platform asynchronous functionality.</li>
        </ul>
      </section>
    </div>
  );
};

export default libuv;
