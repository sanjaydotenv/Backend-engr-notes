import React from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const WorkerThreads = () => {
  return (
    <div className="space-y-10 text-[var(--text-primary)]">
      {/* Header */}
      <div className="space-y-3">
        <p className="text-sm font-semibold tracking-widest text-[var(--primary-color)]">
          NODE.JS ADVANCED CONCEPTS / 04
        </p>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Worker Threads in Node.js
        </h1>

        <p className="text-lg leading-8 text-[var(--text-secondary)]">
          Understand how Node.js executes CPU-intensive JavaScript tasks
          using multiple threads within a single process without blocking
          the main event loop.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          1. What are Worker Threads?
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Worker Threads allow Node.js to execute JavaScript code in
          separate threads within the same process.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          By default, JavaScript application code runs on the main thread.
          If a CPU-intensive operation runs on this thread, it can block
          the event loop and delay other requests.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          Worker Threads solve this problem by moving CPU-intensive
          JavaScript operations to separate threads.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-5 space-y-3">
          <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-3 text-center">
            <p className="font-semibold">Main Thread</p>
            <p className="text-xs text-[var(--text-secondary)]">
              Handles application logic and event loop
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="text-center text-[var(--primary-color)] font-bold">
              ↓
            </div>
            <div className="text-center text-[var(--primary-color)] font-bold">
              ↓
            </div>
            <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-3 text-center">
              <p className="font-semibold">Worker 1</p>
              <p className="text-xs text-[var(--text-secondary)]">
                CPU Task A
              </p>
            </div>
            <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-3 text-center">
              <p className="font-semibold">Worker 2</p>
              <p className="text-xs text-[var(--text-secondary)]">
                CPU Task B
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          2. Why do we need Worker Threads?
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Node.js uses a single main JavaScript thread for application
          execution. A long-running synchronous CPU task can block that
          thread.
        </p>

        <CodeBlock
          code={`// Main thread

console.log("Start");

let result = 0;

for (let i = 0; i < 1_000_000_000; i++) {
  result += i;
}

console.log("Calculation completed");

console.log("Other request handling");`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          The loop blocks the main thread until the calculation finishes.
          During this time, the event loop cannot process other JavaScript
          callbacks.
        </p>

        <h3 className="text-lg font-semibold">
          Common Use Cases
        </h3>

        <ul className="list-disc pl-6 space-y-2 leading-7 text-[var(--text-secondary)]">
          <li>Large mathematical calculations.</li>
          <li>Image and video processing.</li>
          <li>Data compression and processing.</li>
          <li>CPU-intensive algorithms.</li>
          <li>Large data transformations.</li>
        </ul>
      </section>

      {/* 3 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          3. Creating a Worker Thread
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Node.js provides the built-in <code>worker_threads</code> module
          to create and manage worker threads.
        </p>

        <CodeBlock
          code={`import { Worker } from "node:worker_threads";

const worker = new Worker("./worker.js");`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code>Worker</code> class creates a new thread that executes
          the JavaScript file provided to it.
        </p>

        <h3 className="text-lg font-semibold">
          Basic Example
        </h3>

        <p className="text-sm font-semibold">main.js</p>

        <CodeBlock
          code={`import { Worker } from "node:worker_threads";

const worker = new Worker("./worker.js");

console.log("Main thread is running");`}
        />

        <p className="text-sm font-semibold">worker.js</p>

        <CodeBlock
          code={`import { parentPort } from "node:worker_threads";

console.log("Worker thread is running");`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Both files execute in separate threads within the same Node.js
          process.
        </p>
      </section>

      {/* 4 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          4. Communication Between Main and Worker Thread
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The main thread and worker thread have separate JavaScript
          execution contexts. They communicate using message passing.
        </p>

        <h3 className="text-lg font-semibold">
          Important APIs
        </h3>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm text-left">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">API</th>
                <th className="p-3">Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              <tr>
                <td className="p-3 font-mono text-[var(--primary-color)]">
                  worker.postMessage()
                </td>
                <td className="p-3">Sends data from main thread to worker.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-[var(--primary-color)]">
                  parentPort.postMessage()
                </td>
                <td className="p-3">Sends data from worker to parent.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-[var(--primary-color)]">
                  worker.on("message")
                </td>
                <td className="p-3">Receives messages in main thread.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-[var(--primary-color)]">
                  parentPort.on("message")
                </td>
                <td className="p-3">Receives messages inside worker.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold">
          Practical Example
        </h3>

        <p className="text-sm font-semibold">main.js</p>

        <CodeBlock
          code={`import { Worker } from "node:worker_threads";

const worker = new Worker("./worker.js");

worker.postMessage("Hello Worker");

worker.on("message", (message) => {
  console.log("Message from Worker:", message);
});`}
        />

        <p className="text-sm font-semibold">worker.js</p>

        <CodeBlock
          code={`import { parentPort } from "node:worker_threads";

parentPort.on("message", (message) => {
  console.log("Message from Main:", message);

  parentPort.postMessage("Hello Main Thread");
});`}
        />
      </section>

      {/* 5 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          5. Passing Data Using workerData
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          <code>workerData</code> allows us to pass initial data from the
          main thread to a worker when creating it.
        </p>

        <p className="text-sm font-semibold">main.js</p>

        <CodeBlock
          code={`import { Worker } from "node:worker_threads";

const worker = new Worker("./worker.js", {
  workerData: {
    number: 10,
    name: "Mayur"
  }
});`}
        />

        <p className="text-sm font-semibold">worker.js</p>

        <CodeBlock
          code={`import { workerData } from "node:worker_threads";

console.log(workerData.number);
console.log(workerData.name);`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <p className="font-semibold text-[var(--primary-color)]">
            Important Difference
          </p>
          <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
            <code>workerData</code> is used to pass initial data when creating
            a worker, whereas <code>postMessage()</code> is used for
            communication after the worker has been created.
          </p>
        </div>
      </section>

      {/* 6 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          6. Handling Worker Errors and Completion
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Worker Threads provide events to detect errors and track when a
          worker finishes execution.
        </p>

        <CodeBlock
          code={`import { Worker } from "node:worker_threads";

const worker = new Worker("./worker.js");

worker.on("message", (result) => {
  console.log("Result:", result);
});

worker.on("error", (error) => {
  console.error("Worker Error:", error);
});

worker.on("exit", (code) => {
  console.log("Worker exited:", code);
});`}
        />

        <ul className="list-disc pl-6 space-y-2 leading-7 text-[var(--text-secondary)]">
          <li>
            <code>message</code> — receives data from the worker.
          </li>
          <li>
            <code>error</code> — emitted when the worker throws an uncaught
            exception.
          </li>
          <li>
            <code>exit</code> — emitted when the worker thread exits.
          </li>
        </ul>
      </section>

      {/* 7 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          7. Terminating a Worker
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code>worker.terminate()</code> method stops a worker thread.
          It returns a Promise that resolves with the worker's exit code.
        </p>

        <CodeBlock
          code={`import { Worker } from "node:worker_threads";

const worker = new Worker("./worker.js");

await worker.terminate();

console.log("Worker terminated");`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Use this when a worker is no longer required or needs to be stopped.
          For graceful shutdown, you can also send a message asking the worker
          to finish its current task before exiting.
        </p>
      </section>

      {/* 8 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          8. Shared Memory (SharedArrayBuffer)
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          By default, data sent through worker messages is cloned using
          structured cloning. Worker Threads can also share memory using
          <code> SharedArrayBuffer</code>.
        </p>

        <CodeBlock
          code={`// main.js

import { Worker } from "node:worker_threads";

const sharedBuffer = new SharedArrayBuffer(4);

const sharedArray = new Int32Array(sharedBuffer);

const worker = new Worker("./worker.js", {
  workerData: sharedBuffer
});

worker.on("exit", () => {
  console.log("Value:", sharedArray[0]);
});`}
        />

        <CodeBlock
          code={`// worker.js

import {
  workerData
} from "node:worker_threads";

const sharedArray = new Int32Array(workerData);

sharedArray[0] = 100;`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Both threads access the same underlying memory. This can reduce
          data copying but requires careful synchronization.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          <code>Atomics</code> provides operations for safely coordinating
          access to shared memory between threads.
        </p>
      </section>

      {/* 9 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          9. Worker Threads vs Child Processes
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Both can execute work separately from the main JavaScript thread,
          but their architecture is different.
        </p>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm text-left">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">Worker Threads</th>
                <th className="p-3">Child Processes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              <tr>
                <td className="p-3">Separate threads.</td>
                <td className="p-3">Separate processes.</td>
              </tr>
              <tr>
                <td className="p-3">Same process.</td>
                <td className="p-3">Separate process.</td>
              </tr>
              <tr>
                <td className="p-3">Can share memory.</td>
                <td className="p-3">Normally communicate using IPC.</td>
              </tr>
              <tr>
                <td className="p-3">Useful for CPU-intensive JavaScript.</td>
                <td className="p-3">Useful for external programs and process isolation.</td>
              </tr>
              <tr>
                <td className="p-3">Lower process creation overhead.</td>
                <td className="p-3">Generally higher process creation overhead.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 10 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          10. When Should You Use Worker Threads?
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Worker Threads are useful when a task requires significant CPU
          computation and should not block the main event loop.
        </p>

        <div className="grid gap-3 md:grid-cols-2">
          {[
            {
              title: "Image Processing",
              desc: "Resize, transform, or process large images.",
            },
            {
              title: "Data Processing",
              desc: "Perform expensive calculations on large datasets.",
            },
            {
              title: "Encryption",
              desc: "Handle CPU-intensive cryptographic computations.",
            },
            {
              title: "Compression",
              desc: "Compress or process large amounts of data.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2"
            >
              <h3 className="font-semibold text-[var(--primary-color)]">
                {item.title}
              </h3>
              <p className="text-sm leading-6 text-[var(--text-secondary)]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
          <p className="font-semibold text-[var(--primary-color)]">
            Important
          </p>
          <p className="text-sm leading-7 text-[var(--text-secondary)]">
            Worker Threads are not necessary for every asynchronous task.
            Node.js already handles I/O operations efficiently using its
            event loop and underlying system mechanisms. Workers are primarily
            useful for CPU-intensive JavaScript operations.
          </p>
        </div>
      </section>

      {/* Interview */}
      <section className="space-y-5 border-t border-[var(--border-color)] pt-8">
        <div className="space-y-2">
          <p className="text-sm font-semibold tracking-widest text-[var(--primary-color)]">
            PREPARE FOR INTERVIEWS
          </p>
          <h2 className="text-2xl font-bold">
            11. Interview Questions
          </h2>
        </div>

        {[
          "What are Worker Threads in Node.js?",
          "Why do we need Worker Threads?",
          "What is the difference between the main thread and a worker thread?",
          "How do we create a Worker Thread in Node.js?",
          "How do parent and worker threads communicate?",
          "What is the difference between workerData and postMessage()?",
          "What is parentPort?",
          "What is SharedArrayBuffer?",
          "What is the difference between Worker Threads and Child Processes?",
          "Should Worker Threads be used for I/O-intensive tasks?",
        ].map((question, index) => (
          <div
            key={index}
            className="flex gap-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4"
          >
            <span className="font-bold text-[var(--primary-color)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="leading-7">{question}</p>
          </div>
        ))}
      </section>

      {/* Next Topic */}
      <div className="rounded-xl border border-[var(--border-color)] bg-[var(--primary-soft)] p-5 space-y-2">
        <p className="text-xs font-bold tracking-widest text-[var(--primary-color)]">
          NEXT TOPIC
        </p>
        <h3 className="text-xl font-bold">Cluster Module in Node.js</h3>
        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Learn how Node.js creates multiple worker processes to utilize
          multiple CPU cores and handle application traffic.
        </p>
      </div>
    </div>
  );
};

export default WorkerThreads;