import React from "react";

const SingleThreadedArchitecture = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <header className="space-y-3">
        <span className="text-sm font-medium text-[var(--accent-color)]">
          NODE.JS / 05
        </span>

        <h1 className="text-4xl font-bold">Single-Threaded Architecture</h1>

        <p className="text-lg text-[var(--text-secondary)]">
          Node.js uses a single main JavaScript thread to execute JavaScript
          code, while handling certain asynchronous operations in the
          background.
        </p>
      </header>

      {/* What is Single Threaded */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">
          What is Single-Threaded Architecture?
        </h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Single-threaded architecture means that JavaScript code runs on one
          main thread. This thread executes one JavaScript operation at a time.
        </p>

        <p className="text-[var(--text-secondary)] leading-7">
          Node.js uses this model to execute JavaScript without creating a
          separate JavaScript thread for every incoming request.
        </p>
      </section>

      {/* How it works */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">How Does It Work?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          The main JavaScript thread executes synchronous code. When it
          encounters certain asynchronous operations, Node.js delegates their
          handling to the operating system or libuv.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-5 space-y-3">
          {[
            ["Main Thread", "Executes JavaScript code."],
            [
              "Background Operations",
              "Handles certain I/O operations without blocking JavaScript.",
            ],
            ["Event Loop", "Coordinates when completed callbacks can execute."],
            [
              "Callback Execution",
              "The main thread executes callbacks when it is available.",
            ],
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

              {index !== 3 && (
                <div className="text-center text-[var(--text-muted)]">↓</div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Example */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Practical Example</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Let's understand how the main JavaScript thread executes code.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--accent-background)] p-4">
          <pre className="overflow-x-auto text-sm">
            <code>{`console.log("Task 1");

console.log("Task 2");

console.log("Task 3");`}</code>
          </pre>

          <div className="mt-4 space-y-2">
            <p className="text-sm font-semibold text-[var(--accent-color)]">
              Output
            </p>
            <pre className="text-sm text-[var(--text-secondary)]">
              {`Task 1
Task 2
Task 3`}
            </pre>
          </div>
        </div>

        <p className="text-[var(--text-secondary)] leading-7">
          All three statements execute one by one on the same main JavaScript
          thread.
        </p>
      </section>

      {/* Async Example */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">
          Single Thread with Asynchronous Operations
        </h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Even though JavaScript runs on one main thread, Node.js can handle
          asynchronous operations without waiting for them to finish.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--accent-background)] p-4">
          <pre className="overflow-x-auto text-sm">
            <code>{`console.log("Start");

setTimeout(() => {
  console.log("Timer Completed");
}, 2000);

console.log("End");`}</code>
          </pre>

          <div className="mt-4 space-y-2">
            <p className="text-sm font-semibold text-[var(--accent-color)]">
              Output
            </p>
            <pre className="text-sm text-[var(--text-secondary)]">
              {`Start
End
Timer Completed`}
            </pre>
          </div>
        </div>

        <p className="text-[var(--text-secondary)] leading-7">
          Node.js registers the timer and continues executing JavaScript. After
          the timer expires, its callback is scheduled and eventually executed
          by the main thread.
        </p>
      </section>

      {/* Advantages */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Advantages</h2>

        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>Less complexity in managing JavaScript threads.</li>
          <li>Efficient handling of I/O-heavy applications.</li>
          <li>No need to create a JavaScript thread for every request.</li>
          <li>Works well with asynchronous programming.</li>
        </ul>
      </section>

      {/* Limitations */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Limitations</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Since JavaScript runs on one main thread, a CPU-intensive task can
          block that thread and prevent other JavaScript callbacks from
          executing.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--accent-background)] p-4 space-y-2">
          <h3 className="font-semibold text-[var(--accent-color)]">Example</h3>

          <pre className="overflow-x-auto text-sm">
            <code>{`console.log("Start");

const end = Date.now() + 5000;

while (Date.now() < end) {
  // Blocking the main thread
}

console.log("End");`}</code>
          </pre>

          <p className="text-sm text-[var(--text-secondary)]">
            This loop blocks the main JavaScript thread for approximately five
            seconds. During this time, other JavaScript callbacks cannot
            execute.
          </p>
        </div>
      </section>

      {/* Important Note */}
      <section className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-5 space-y-3">
        <h2 className="text-xl font-semibold">Important Note</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Single-threaded does not mean Node.js uses only one thread in its
          entire runtime. Node.js can use background threads through libuv's
          Thread Pool and other mechanisms. The main JavaScript execution thread
          is single-threaded by default.
        </p>
      </section>

      {/* Key Takeaways */}
      <section className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-5 space-y-3">
        <h2 className="text-xl font-semibold">Key Takeaways</h2>

        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>JavaScript executes on one main thread by default.</li>
          <li>Synchronous code executes one operation at a time.</li>
          <li>Asynchronous operations allow JavaScript to continue working.</li>
          <li>The Event Loop coordinates callback execution.</li>
          <li>CPU-intensive tasks can block the main thread.</li>
          <li>Node.js can use background threads for certain operations.</li>
        </ul>
      </section>

      {/* Next Topic */}
      <div className="border-t border-[var(--border-color)] pt-5">
        <p className="text-sm text-[var(--text-muted)]">NEXT TOPIC</p>
        <h3 className="mt-1 text-lg font-semibold text-[var(--accent-color)]">
          Non-Blocking I/O
        </h3>
      </div>
    </div>
  );
};

export default SingleThreadedArchitecture;
