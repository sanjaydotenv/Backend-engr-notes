import React from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

import {
  FiClock,
  FiArrowRight,
  FiCheckCircle,
  FiAlertCircle,
  FiZap,
} from "react-icons/fi";

const SynchronousvsAsynchronous = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-10 text-[var(--white-color)]">
      {/* HEADER */}
      <header className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[var(--primary-color)]">
          <span>NODE.JS</span>
          <span>/</span>
          <span>ASYNCHRONOUS PROGRAMMING</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Synchronous vs Asynchronous
        </h1>

        <p className="text-[var(--muted-color)] leading-8 text-base">
          Understand how JavaScript executes code synchronously and
          asynchronously, how operations are handled, and why asynchronous
          programming is important in Node.js.
        </p>

        <div className="flex flex-wrap gap-3 text-xs">
          <span className="px-3 py-1.5 rounded-full bg-[var(--primary-soft)] text-[var(--primary-color)]">
            Beginner
          </span>

          <span className="px-3 py-1.5 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--muted-color)]">
            12-15 min read
          </span>
        </div>
      </header>

      {/* INTRODUCTION */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">1. Introduction</h2>

        <p className="text-[var(--muted-color)] leading-8">
          When JavaScript executes a program, it handles instructions one by
          one. But not every operation takes the same amount of time. Some
          operations finish immediately, while others may take time, such as
          reading files, requesting data from a server, or accessing a database.
        </p>

        <p className="text-[var(--muted-color)] leading-8">
          To handle these operations efficiently, JavaScript supports two
          important execution approaches:
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-3">
            <div className="flex items-center gap-3">
              <FiClock className="text-xl text-[var(--primary-color)]" />

              <h3 className="font-semibold text-lg">Synchronous</h3>
            </div>

            <p className="text-sm text-[var(--muted-color)] leading-7">
              Executes instructions one after another. The next operation waits
              until the current operation finishes.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-3">
            <div className="flex items-center gap-3">
              <FiZap className="text-xl text-[var(--primary-color)]" />

              <h3 className="font-semibold text-lg">Asynchronous</h3>
            </div>

            <p className="text-sm text-[var(--muted-color)] leading-7">
              Allows certain operations to complete later without blocking the
              execution of other code.
            </p>
          </div>
        </div>
      </section>

      {/* SYNCHRONOUS */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          2. What is Synchronous Programming?
        </h2>

        <p className="text-[var(--muted-color)] leading-8">
          Synchronous programming means executing code in a sequential manner.
          Each instruction must complete before the next instruction starts
          executing.
        </p>

        <p className="text-[var(--muted-color)] leading-8">
          In synchronous execution, JavaScript follows a simple rule: complete
          the current task first, then move to the next task.
        </p>

        <h3 className="font-semibold text-lg">Example:</h3>

        <CodeBlock
          code={`console.log("First");

console.log("Second");

console.log("Third");`}
        />

        <h3 className="font-semibold">Output:</h3>

        <CodeBlock
          code={`First
Second
Third`}
        />

        <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] space-y-2">
          <h3 className="font-semibold text-[var(--primary-color)]">
            Execution Explanation
          </h3>

          <ol className="space-y-3 text-sm text-[var(--muted-color)] list-decimal pl-5 leading-7">
            <li>JavaScript executes the first console.log() statement.</li>

            <li>
              After completing it, JavaScript moves to the second statement.
            </li>

            <li>
              After completing the second statement, it executes the third.
            </li>
          </ol>
        </div>

        <p className="text-[var(--muted-color)] leading-8">
          Every statement waits for the previous statement to finish. This is
          synchronous execution.
        </p>
      </section>

      {/* BLOCKING */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">3. What is Blocking?</h2>

        <p className="text-[var(--muted-color)] leading-8">
          Blocking means an operation prevents other JavaScript code from
          executing until that operation finishes.
        </p>

        <p className="text-[var(--muted-color)] leading-8">
          When a synchronous operation takes a long time, the JavaScript
          execution thread must wait for it to complete.
        </p>

        <h3 className="font-semibold">Example: Blocking Code</h3>

        <CodeBlock
          code={`console.log("Task 1 started");

function blockingTask() {
  const start = Date.now();

  while (Date.now() - start < 5000) {
    // Blocking the main thread for 5 seconds
  }
}

blockingTask();

console.log("Task 2 started");`}
        />

        <h3 className="font-semibold">Output:</h3>

        <CodeBlock
          code={`Task 1 started

// Waits for approximately 5 seconds

Task 2 started`}
        />

        <div className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-2">
          <div className="flex items-center gap-2 text-[var(--primary-color)] font-semibold">
            <FiAlertCircle />
            Important
          </div>

          <p className="text-sm text-[var(--muted-color)] leading-7">
            During those five seconds, the JavaScript main thread cannot execute
            other JavaScript callbacks. This can make an application
            unresponsive.
          </p>
        </div>
      </section>

      {/* ASYNCHRONOUS */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          4. What is Asynchronous Programming?
        </h2>

        <p className="text-[var(--muted-color)] leading-8">
          Asynchronous programming allows JavaScript to start certain operations
          and continue executing other code without waiting for those operations
          to finish.
        </p>

        <p className="text-[var(--muted-color)] leading-8">
          When an asynchronous operation completes, its result can be handled
          later through callbacks, Promises, or async/await.
        </p>

        <h3 className="font-semibold">Example:</h3>

        <CodeBlock
          code={`console.log("First");

setTimeout(() => {
  console.log("Second");
}, 2000);

console.log("Third");`}
        />

        <h3 className="font-semibold">Output:</h3>

        <CodeBlock
          code={`First
Third
Second`}
        />

        <div className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-3">
          <h3 className="font-semibold text-[var(--primary-color)]">
            Execution Explanation
          </h3>

          <ol className="list-decimal pl-5 space-y-3 text-sm text-[var(--muted-color)] leading-7">
            <li>JavaScript executes console.log("First").</li>

            <li>
              JavaScript encounters setTimeout() and registers its callback with
              the timer system.
            </li>

            <li>
              JavaScript does not wait for the timer to finish. It continues
              executing the remaining code.
            </li>

            <li>console.log("Third") executes immediately.</li>

            <li>
              After approximately 2 seconds, the timer callback becomes eligible
              to execute.
            </li>

            <li>
              The callback executes when the Call Stack is available and the
              Event Loop allows it to run.
            </li>
          </ol>
        </div>
      </section>

      {/* NON BLOCKING */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">5. What is Non-Blocking?</h2>

        <p className="text-[var(--muted-color)] leading-8">
          Non-blocking means an operation does not force the JavaScript
          execution thread to wait while that operation is being completed.
        </p>

        <p className="text-[var(--muted-color)] leading-8">
          Instead of waiting, JavaScript can continue executing other available
          code.
        </p>

        <h3 className="font-semibold">Example:</h3>

        <CodeBlock
          code={`const fs = require("fs");

console.log("Program started");

fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data);
});

console.log("Program continues");`}
        />

        <h3 className="font-semibold">Possible Output:</h3>

        <CodeBlock
          code={`Program started
Program continues
Content of example.txt`}
        />

        <p className="text-[var(--muted-color)] leading-8">
          The file reading operation starts, but JavaScript does not wait for
          the file to be read. It continues executing the remaining statements.
        </p>

        <div className="p-4 rounded-xl bg-[var(--primary-soft)] border border-[var(--primary-color)]/20">
          <p className="text-sm leading-7 text-[var(--white-color)]">
            <strong className="text-[var(--primary-color)]">Remember:</strong>{" "}
            Non-blocking operations are important in Node.js because they allow
            a server to handle other incoming requests while waiting for I/O
            operations.
          </p>
        </div>
      </section>

      {/* REAL WORLD EXAMPLE */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">6. Real-World Example</h2>

        <p className="text-[var(--muted-color)] leading-8">
          Let's understand synchronous and asynchronous execution using a
          real-world example.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {/* SYNCHRONOUS */}
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 space-y-4">
            <h3 className="font-semibold text-lg">Synchronous Restaurant</h3>

            <p className="text-sm text-[var(--muted-color)] leading-7">
              Imagine a restaurant where one employee handles every customer.
            </p>

            <div className="space-y-2">
              {[
                "Customer 1 orders food",
                "Employee waits until food is ready",
                "Customer 2 must wait",
                "Employee serves Customer 1",
                "Employee handles Customer 2",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex gap-3 items-start text-sm text-[var(--muted-color)]"
                >
                  <span className="text-[var(--primary-color)] font-bold">
                    {index + 1}.
                  </span>

                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="text-xs text-[var(--primary-color)] font-semibold">
              One task waits for another.
            </div>
          </div>

          {/* ASYNCHRONOUS */}
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 space-y-4">
            <h3 className="font-semibold text-lg">Asynchronous Restaurant</h3>

            <p className="text-sm text-[var(--muted-color)] leading-7">
              Imagine an employee who takes an order and gives it to the
              kitchen.
            </p>

            <div className="space-y-2">
              {[
                "Customer 1 orders food",
                "Order goes to the kitchen",
                "Employee takes Customer 2's order",
                "Kitchen prepares Customer 1's food",
                "Employee serves the food when ready",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex gap-3 items-start text-sm text-[var(--muted-color)]"
                >
                  <span className="text-[var(--primary-color)] font-bold">
                    {index + 1}.
                  </span>

                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="text-xs text-[var(--primary-color)] font-semibold">
              Other work continues while waiting.
            </div>
          </div>
        </div>

        <p className="text-sm text-[var(--muted-color)] leading-7">
          This example helps us understand the difference between waiting for a
          task to finish and continuing other work while the task is being
          processed.
        </p>
      </section>

      {/* FILE SYSTEM COMPARISON */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          7. Synchronous vs Asynchronous File Operations in Node.js
        </h2>

        <p className="text-[var(--muted-color)] leading-8">
          Node.js provides synchronous and asynchronous methods for performing
          file system operations.
        </p>

        <h3 className="font-semibold">Synchronous File Reading</h3>

        <CodeBlock
          code={`const fs = require("fs");

console.log("Start");

const data = fs.readFileSync("example.txt", "utf8");

console.log(data);

console.log("End");`}
        />

        <p className="text-sm text-[var(--muted-color)] leading-7">
          readFileSync() blocks the JavaScript thread until the file reading
          operation finishes.
        </p>

        <h3 className="font-semibold">Asynchronous File Reading</h3>

        <CodeBlock
          code={`const fs = require("fs");

console.log("Start");

fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data);
});

console.log("End");`}
        />

        <p className="text-sm text-[var(--muted-color)] leading-7">
          readFile() starts the file reading operation and returns control
          without making the JavaScript thread wait for the file operation to
          complete.
        </p>

        <h3 className="font-semibold">Using Promises and Async/Await</h3>

        <CodeBlock
          code={`const fs = require("fs/promises");

console.log("Start");

async function readFileData() {
  const data = await fs.readFile("example.txt", "utf8");

  console.log(data);
}

readFileData();

console.log("End");`}
        />

        <p className="text-sm text-[var(--muted-color)] leading-7">
          async/await provides a cleaner way to write asynchronous code. The
          await keyword pauses the execution of the surrounding async function
          until the Promise settles. It does not block the entire JavaScript
          thread.
        </p>
      </section>

      {/* INTERNAL WORKING */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          8. How Asynchronous Code Works Internally
        </h2>

        <p className="text-[var(--muted-color)] leading-8">
          JavaScript uses several components to manage asynchronous operations.
          In Node.js, these include the Call Stack, Node.js APIs, the Event
          Loop, and task queues.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 space-y-4">
          <h3 className="font-semibold">Basic Execution Flow</h3>

          <div className="space-y-2 text-center text-sm">
            {[
              "JavaScript Code",
              "Call Stack",
              "Asynchronous Operation",
              "Timer / I/O Completion",
              "Callback Queue or Microtask Queue",
              "Event Loop",
              "Call Stack Executes Callback",
            ].map((item, index) => (
              <React.Fragment key={index}>
                <div
                  className={`p-3 rounded-lg border ${
                    index === 5
                      ? "border-[var(--primary-color)] bg-[var(--primary-soft)] text-[var(--primary-color)]"
                      : "border-[var(--border-color)] bg-[var(--bg-tertiary)] text-[var(--white-color)]"
                  }`}
                >
                  {item}
                </div>

                {index !== 6 && (
                  <div className="flex justify-center text-[var(--primary-color)]">
                    <FiArrowRight className="rotate-90" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          <p className="text-xs text-[var(--muted-color)] leading-6">
            Simplified conceptual flow. The exact scheduling mechanism depends
            on the operation and whether it uses timers, I/O callbacks, or
            Promise microtasks.
          </p>
        </div>

        <h3 className="font-semibold text-lg">Important Components</h3>

        <div className="space-y-3">
          {[
            {
              title: "Call Stack",
              description:
                "The Call Stack keeps track of currently executing JavaScript functions.",
            },
            {
              title: "Node.js APIs",
              description:
                "Node.js provides APIs for operations such as file handling, timers, and networking.",
            },
            {
              title: "libuv",
              description:
                "libuv provides the event loop and manages asynchronous I/O operations, including a worker thread pool for certain tasks.",
            },
            {
              title: "Callback Queue",
              description:
                "Completed asynchronous callbacks are scheduled for execution according to their respective queues and phases.",
            },
            {
              title: "Event Loop",
              description:
                "The Event Loop coordinates callback execution when the Call Stack is available.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-2"
            >
              <h4 className="font-semibold text-[var(--primary-color)]">
                {index + 1}. {item.title}
              </h4>

              <p className="text-sm text-[var(--muted-color)] leading-7">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARISON */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          9. Synchronous vs Asynchronous: Key Differences
        </h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm text-left">
            <thead className="bg-[var(--bg-tertiary)]">
              <tr>
                <th className="p-4 font-semibold">Basis</th>
                <th className="p-4 font-semibold">Synchronous</th>
                <th className="p-4 font-semibold">Asynchronous</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[var(--border-color)]">
              {[
                ["Execution", "Sequential", "Can continue without waiting"],
                [
                  "Waiting",
                  "Waits for current operation",
                  "Does not block while waiting",
                ],
                [
                  "Blocking",
                  "Can block execution",
                  "Usually non-blocking for async I/O",
                ],
                [
                  "Performance",
                  "Can reduce responsiveness",
                  "Improves I/O concurrency",
                ],
                [
                  "Complexity",
                  "Generally simpler",
                  "Requires handling completion",
                ],
                ["Examples", "readFileSync()", "readFile(), fetch()"],
                [
                  "Use Cases",
                  "Small scripts, startup tasks",
                  "Servers, APIs, I/O operations",
                ],
              ].map((row, index) => (
                <tr key={index} className="bg-[var(--bg-secondary)]">
                  {row.map((cell, i) => (
                    <td
                      key={i}
                      className={`p-4 ${
                        i === 0
                          ? "font-semibold text-[var(--white-color)]"
                          : "text-[var(--muted-color)]"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ADVANTAGES AND DISADVANTAGES */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          10. Advantages and Disadvantages
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] space-y-4">
            <h3 className="font-semibold text-lg">Synchronous</h3>

            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-semibold text-[var(--primary-color)]">
                  Advantages
                </h4>

                <ul className="list-disc pl-5 text-sm text-[var(--muted-color)] space-y-2 mt-2">
                  <li>Easy to understand.</li>
                  <li>Simple execution flow.</li>
                  <li>Easier to debug in many cases.</li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-red-400">
                  Disadvantages
                </h4>

                <ul className="list-disc pl-5 text-sm text-[var(--muted-color)] space-y-2 mt-2">
                  <li>Can block the main thread.</li>
                  <li>Long operations delay other work.</li>
                  <li>Can reduce server responsiveness.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] space-y-4">
            <h3 className="font-semibold text-lg">Asynchronous</h3>

            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-semibold text-[var(--primary-color)]">
                  Advantages
                </h4>

                <ul className="list-disc pl-5 text-sm text-[var(--muted-color)] space-y-2 mt-2">
                  <li>Does not block during asynchronous I/O.</li>
                  <li>Better I/O concurrency.</li>
                  <li>Suitable for backend servers.</li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-red-400">
                  Disadvantages
                </h4>

                <ul className="list-disc pl-5 text-sm text-[var(--muted-color)] space-y-2 mt-2">
                  <li>Can be harder to understand initially.</li>
                  <li>Requires proper error handling.</li>
                  <li>Incorrect handling can create race conditions.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPORTANT CONCEPTS */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          11. Important Things to Remember
        </h2>

        <div className="space-y-3">
          {[
            "JavaScript normally executes synchronous code on a single main thread.",
            "Synchronous code executes one statement after another.",
            "Synchronous operations can block the JavaScript thread.",
            "Asynchronous operations allow JavaScript to continue other work while waiting.",
            "Asynchronous does not automatically mean parallel execution.",
            "The Event Loop coordinates asynchronous callback execution.",
            "Promises and async/await are important tools for writing asynchronous JavaScript.",
            "Node.js uses libuv for its event loop and asynchronous I/O infrastructure.",
          ].map((item, index) => (
            <div
              key={index}
              className="flex gap-3 p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)]"
            >
              <FiCheckCircle className="text-[var(--primary-color)] shrink-0 mt-1" />

              <p className="text-sm text-[var(--muted-color)] leading-7">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* KEY TAKEAWAYS */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">12. Key Takeaways</h2>

        <div className="p-6 rounded-xl border border-[var(--primary-color)]/30 bg-[var(--primary-soft)] space-y-3">
          <p className="leading-8 text-sm text-[var(--white-color)]">
            Synchronous programming executes operations sequentially, where the
            next operation waits for the current one to finish.
          </p>

          <p className="leading-8 text-sm text-[var(--white-color)]">
            Asynchronous programming allows certain operations to complete later
            while JavaScript continues executing other available code.
          </p>

          <p className="leading-8 text-sm text-[var(--white-color)]">
            Node.js uses asynchronous, non-blocking I/O to handle multiple
            operations efficiently without blocking its JavaScript main thread.
          </p>
        </div>
      </section>

      {/* NEXT TOPIC */}
      <section className="pt-6 border-t border-[var(--border-color)]">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-2">
            <p className="text-xs tracking-widest text-[var(--primary-color)] font-semibold">
              NEXT TOPIC
            </p>

            <h3 className="text-lg font-semibold">
              Blocking vs Non-Blocking I/O
            </h3>

            <p className="text-sm text-[var(--muted-color)]">
              Understand how Node.js handles I/O operations.
            </p>
          </div>

          <div className="p-3 rounded-full bg-[var(--primary-soft)] text-[var(--primary-color)]">
            <FiArrowRight size={22} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SynchronousvsAsynchronous;
