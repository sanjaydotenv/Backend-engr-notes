import React from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const ProcessObject = () => {
  return (
    <div className="space-y-10 text-[var(--text-primary)]">
      {/* Header */}
      <div className="space-y-3">
        <p className="text-sm font-semibold tracking-widest text-[var(--primary-color)]">
          NODE.JS ADVANCED CONCEPTS / 01
        </p>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Process Object in Node.js
        </h1>

        <p className="text-lg leading-8 text-[var(--text-secondary)]">
          Understand how Node.js provides information about the current process,
          manages environment variables, handles command-line arguments, and
          controls process execution.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">1. What is the Process Object?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code>process</code> object is a global object in Node.js that
          provides information about and control over the currently running
          Node.js process.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          A process is an instance of a running program. Whenever we execute a
          Node.js application, the operating system creates a process to run
          that application.
        </p>

        <CodeBlock
          code={`console.log(process);

console.log("Process ID:", process.pid);
console.log("Node Version:", process.version);
console.log("Platform:", process.platform);`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
          <p className="font-semibold text-[var(--primary-color)]">Important</p>
          <p className="text-sm leading-7 text-[var(--text-secondary)]">
            The process object is globally available. You do not need to import
            or require it.
          </p>
        </div>
      </section>

      {/* 2 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">2. Process ID (process.pid)</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code>process.pid</code> property returns the Process ID assigned
          by the operating system to the currently running Node.js application.
        </p>

        <CodeBlock
          code={`console.log("Process ID:", process.pid);

// Example Output:
// Process ID: 12450`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Every running process generally has its own unique process ID within
          the operating system.
        </p>
      </section>

      {/* 3 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">3. Process Version Information</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Node.js provides properties to identify the runtime version and
          underlying runtime environment.
        </p>

        <h3 className="text-lg font-semibold">process.version</h3>
        <p className="text-[var(--text-secondary)] leading-7">
          Returns the version of Node.js currently running.
        </p>

        <CodeBlock
          code={`console.log(process.version);

// Example Output:
// v22.21.0`}
        />

        <h3 className="text-lg font-semibold">process.versions</h3>
        <p className="text-[var(--text-secondary)] leading-7">
          Returns an object containing versions of Node.js and its underlying
          dependencies, such as V8, OpenSSL, and libuv.
        </p>

        <CodeBlock
          code={`console.log(process.versions.node);
console.log(process.versions.v8);
console.log(process.versions.openssl);
console.log(process.versions.uv);`}
        />
      </section>

      {/* 4 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">4. Process Platform Information</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          These properties provide information about the operating system on
          which the Node.js process is running.
        </p>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm text-left">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3 font-semibold">Property</th>
                <th className="p-3 font-semibold">Description</th>
                <th className="p-3 font-semibold">Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              <tr>
                <td className="p-3 font-mono text-[var(--primary-color)]">
                  process.platform
                </td>
                <td className="p-3">Operating system platform</td>
                <td className="p-3">win32, linux, darwin</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-[var(--primary-color)]">
                  process.arch
                </td>
                <td className="p-3">CPU architecture</td>
                <td className="p-3">x64, arm64</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-[var(--primary-color)]">
                  process.title
                </td>
                <td className="p-3">Process title</td>
                <td className="p-3">node</td>
              </tr>
            </tbody>
          </table>
        </div>

        <CodeBlock
          code={`console.log(process.platform);
console.log(process.arch);
console.log(process.title);`}
        />
      </section>

      {/* 5 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          5. Environment Variables (process.env)
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          <code>process.env</code> provides access to environment variables
          available to the current Node.js process.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          Environment variables are commonly used to store configuration values
          such as database URLs, API keys, application ports, and authentication
          secrets.
        </p>

        <CodeBlock
          code={`// Access an environment variable

console.log(process.env.PORT);
console.log(process.env.NODE_ENV);
console.log(process.env.DATABASE_URL);`}
        />

        <h3 className="text-lg font-semibold">Setting Environment Variables</h3>

        <CodeBlock
          code={`// Set an environment variable at runtime

process.env.APP_NAME = "Provity";

console.log(process.env.APP_NAME);

// Output:
// Provity`}
        />

        <h3 className="text-lg font-semibold">
          Using Environment Variables with dotenv
        </h3>

        <p className="leading-7 text-[var(--text-secondary)]">
          In backend applications, we commonly use the dotenv package to load
          variables from a <code>.env</code> file into <code>process.env</code>.
        </p>

        <CodeBlock
          code={`// .env

PORT=3000
DATABASE_URL=mongodb://localhost:27017/mydb`}
        />

        <CodeBlock
          code={`// server.js

import dotenv from "dotenv";

dotenv.config();

console.log(process.env.PORT);
console.log(process.env.DATABASE_URL);`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
          <p className="font-semibold text-[var(--primary-color)]">Important</p>
          <p className="text-sm leading-7 text-[var(--text-secondary)]">
            Values accessed through <code>process.env</code> are strings by
            default. Convert them when you need numbers or booleans.
          </p>
        </div>
      </section>

      {/* 6 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          6. Command-Line Arguments (process.argv)
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          <code>process.argv</code> returns an array containing the command-line
          arguments passed when starting a Node.js application.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          The first two elements are generally:
        </p>

        <ul className="list-disc space-y-2 pl-6 leading-7 text-[var(--text-secondary)]">
          <li>
            <strong>Index 0:</strong> Path of the Node.js executable.
          </li>
          <li>
            <strong>Index 1:</strong> Path of the JavaScript file being
            executed.
          </li>
          <li>
            <strong>Index 2 onwards:</strong> Arguments provided by the user.
          </li>
        </ul>

        <CodeBlock
          code={`// app.js

console.log(process.argv);`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Run the application:
        </p>

        <CodeBlock code={`node app.js Mayur 19`} />

        <p className="text-sm font-semibold">Example Output Structure:</p>

        <CodeBlock
          code={`[
  '/path/to/node',
  '/path/to/app.js',
  'Mayur',
  '19'
]`}
        />

        <h3 className="text-lg font-semibold">Accessing Custom Arguments</h3>

        <CodeBlock
          code={`const name = process.argv[2];
const age = process.argv[3];

console.log("Name:", name);
console.log("Age:", age);`}
        />

        <p className="text-sm text-[var(--text-secondary)]">Output:</p>

        <CodeBlock
          code={`Name: Mayur
Age: 19`}
        />
      </section>

      {/* 7 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          7. Current Working Directory (process.cwd())
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code>process.cwd()</code> method returns the current working
          directory from which the Node.js process was started.
        </p>

        <CodeBlock
          code={`console.log(process.cwd());

// Example Output:
// C:\\Users\\acer\\Desktop\\project`}
        />

        <h3 className="text-lg font-semibold">process.cwd() vs __dirname</h3>

        <p className="leading-7 text-[var(--text-secondary)]">
          These two are not the same. <code>process.cwd()</code> returns the
          directory from which the process was launched, whereas{" "}
          <code>__dirname</code> in CommonJS returns the directory containing
          the current module.
        </p>

        <CodeBlock
          code={`// CommonJS

console.log("Working Directory:", process.cwd());
console.log("Current File Directory:", __dirname);`}
        />

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm text-left">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">Method</th>
                <th className="p-3">Meaning</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              <tr>
                <td className="p-3 font-mono text-[var(--primary-color)]">
                  process.cwd()
                </td>
                <td className="p-3">Process working directory</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-[var(--primary-color)]">
                  __dirname
                </td>
                <td className="p-3">Current module directory (CommonJS)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 8 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          8. Process Memory Usage (process.memoryUsage())
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code>process.memoryUsage()</code> method returns an object
          containing memory usage information about the current Node.js process.
        </p>

        <CodeBlock
          code={`const memory = process.memoryUsage();

console.log(memory);`}
        />

        <h3 className="text-lg font-semibold">Important Properties</h3>

        <div className="space-y-3">
          {[
            {
              name: "rss",
              desc: "Total memory allocated for the process in RAM.",
            },
            {
              name: "heapTotal",
              desc: "Total memory allocated to the V8 JavaScript heap.",
            },
            {
              name: "heapUsed",
              desc: "Memory currently being used in the V8 JavaScript heap.",
            },
            {
              name: "external",
              desc: "Memory used by C++ objects bound to JavaScript objects.",
            },
            {
              name: "arrayBuffers",
              desc: "Memory allocated for ArrayBuffer and SharedArrayBuffer.",
            },
          ].map((item) => (
            <div
              key={item.name}
              className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4"
            >
              <p className="font-mono font-semibold text-[var(--primary-color)]">
                {item.name}
              </p>
              <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <h3 className="text-lg font-semibold">Converting Memory into MB</h3>

        <CodeBlock
          code={`const memory = process.memoryUsage();

const toMB = (bytes) => {
  return (bytes / 1024 / 1024).toFixed(2);
};

console.log("RSS:", toMB(memory.rss), "MB");
console.log("Heap Total:", toMB(memory.heapTotal), "MB");
console.log("Heap Used:", toMB(memory.heapUsed), "MB");
console.log("External:", toMB(memory.external), "MB");`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <p className="font-semibold text-[var(--primary-color)]">Remember</p>
          <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
            <code>heapUsed</code> represents JavaScript heap usage, while{" "}
            <code>rss</code> represents the overall resident memory used by the
            process. They measure different things.
          </p>
        </div>
      </section>

      {/* 9 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          9. Process Uptime (process.uptime())
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code>process.uptime()</code> method returns the number of seconds
          the current Node.js process has been running.
        </p>

        <CodeBlock
          code={`console.log("Uptime:", process.uptime(), "seconds");`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          This method is useful for monitoring application uptime and debugging
          long-running backend services.
        </p>
      </section>

      {/* 10 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          10. Process Exit (process.exit())
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code>process.exit()</code> method terminates the current Node.js
          process immediately.
        </p>

        <CodeBlock
          code={`console.log("Application Started");

process.exit(0);

console.log("This line will not execute");`}
        />

        <h3 className="text-lg font-semibold">Exit Codes</h3>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm text-left">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">Exit Code</th>
                <th className="p-3">Meaning</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              <tr>
                <td className="p-3 font-mono text-[var(--primary-color)]">0</td>
                <td className="p-3">Successful execution</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-[var(--primary-color)]">1</td>
                <td className="p-3">General error / unsuccessful execution</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
          <p className="font-semibold text-[var(--primary-color)]">Important</p>
          <p className="text-sm leading-7 text-[var(--text-secondary)]">
            Avoid calling <code>process.exit()</code> unnecessarily. It can
            terminate pending asynchronous operations, including unfinished I/O.
            Prefer setting <code>process.exitCode</code> when you want Node.js
            to exit naturally with a specific status code.
          </p>
        </div>

        <CodeBlock
          code={`process.exitCode = 1;

// Node.js will exit naturally after
// pending event loop work is completed.`}
        />
      </section>

      {/* 11 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">11. Process Events</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The process object is an EventEmitter. It emits events during the
          lifecycle of a Node.js application, allowing us to respond to
          important process-level situations.
        </p>

        <h3 className="text-lg font-semibold">beforeExit</h3>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code>beforeExit</code> event is emitted when Node.js has no more
          work scheduled in the event loop and is about to exit naturally.
        </p>

        <CodeBlock
          code={`process.on("beforeExit", (code) => {
  console.log("Process is about to exit:", code);
});`}
        />

        <h3 className="text-lg font-semibold">exit</h3>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code>exit</code> event is emitted when the process is about to
          exit. Its listeners must perform synchronous operations because
          asynchronous operations will not be completed.
        </p>

        <CodeBlock
          code={`process.on("exit", (code) => {
  console.log("Process exited with code:", code);
});`}
        />

        <h3 className="text-lg font-semibold">uncaughtException</h3>

        <p className="leading-7 text-[var(--text-secondary)]">
          This event is emitted when an exception reaches the event loop without
          being caught by application code.
        </p>

        <CodeBlock
          code={`process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error.message);

  process.exitCode = 1;
});`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
          <p className="font-semibold text-[var(--primary-color)]">
            Production Warning
          </p>
          <p className="text-sm leading-7 text-[var(--text-secondary)]">
            Do not treat <code>uncaughtException</code> as a way to safely
            continue running an application. After an uncaught exception,
            application state may be inconsistent. Perform synchronous cleanup
            if needed and let the process terminate; use an external process
            manager to restart it.
          </p>
        </div>

        <h3 className="text-lg font-semibold">unhandledRejection</h3>

        <p className="leading-7 text-[var(--text-secondary)]">
          This event is emitted when a Promise is rejected and no rejection
          handler is attached within an event-loop turn.
        </p>

        <CodeBlock
          code={`process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection:", reason);
});`}
        />

        <h3 className="text-lg font-semibold">SIGINT</h3>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code>SIGINT</code> signal is commonly sent when a user presses
          Ctrl + C in the terminal.
        </p>

        <CodeBlock
          code={`process.on("SIGINT", () => {
  console.log("Application shutting down...");

  process.exit(0);
});`}
        />
      </section>

      {/* 12 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          12. Process Next Tick (process.nextTick())
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          <code>process.nextTick()</code> schedules a callback to run after the
          current operation completes, before the event loop continues to its
          next phase.
        </p>

        <CodeBlock
          code={`console.log("Start");

process.nextTick(() => {
  console.log("Next Tick Callback");
});

console.log("End");`}
        />

        <p className="text-sm font-semibold">Output:</p>

        <CodeBlock
          code={`Start
End
Next Tick Callback`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Even though the callback is registered before the final console
          statement, it executes after the current synchronous JavaScript
          operation finishes.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
          <p className="font-semibold text-[var(--primary-color)]">Important</p>
          <p className="text-sm leading-7 text-[var(--text-secondary)]">
            Recursive or excessive use of <code>process.nextTick()</code> can
            starve the event loop by preventing it from moving forward.
          </p>
        </div>
      </section>

      {/* 13 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          13. Other Important Process Properties and Methods
        </h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm text-left">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">Property / Method</th>
                <th className="p-3">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              {[
                [
                  "process.execPath",
                  "Absolute path of the Node.js executable.",
                ],
                [
                  "process.argv0",
                  "Original value of argv[0] when Node.js started.",
                ],
                [
                  "process.execArgv",
                  "Node.js-specific command-line arguments.",
                ],
                ["process.stdin", "Standard input stream."],
                ["process.stdout", "Standard output stream."],
                ["process.stderr", "Standard error stream."],
                [
                  "process.exitCode",
                  "Exit code used when the process exits naturally.",
                ],
                [
                  "process.hrtime.bigint()",
                  "High-resolution time measurement in nanoseconds.",
                ],
                [
                  "process.getuid()",
                  "Returns the user ID on supported Unix systems.",
                ],
                [
                  "process.getgid()",
                  "Returns the group ID on supported Unix systems.",
                ],
              ].map(([name, desc]) => (
                <tr key={name}>
                  <td className="p-3 font-mono text-[var(--primary-color)]">
                    {name}
                  </td>
                  <td className="p-3 text-[var(--text-secondary)]">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 14 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          14. Practical Example: Process Information
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Let's create a small utility that displays important information about
          the currently running Node.js application.
        </p>

        <CodeBlock
          code={`const memory = process.memoryUsage();

const toMB = (bytes) => {
  return (bytes / 1024 / 1024).toFixed(2);
};

const processInfo = {
  pid: process.pid,
  nodeVersion: process.version,
  platform: process.platform,
  architecture: process.arch,
  workingDirectory: process.cwd(),
  uptime: process.uptime().toFixed(2),
  memory: {
    rss: toMB(memory.rss) + " MB",
    heapUsed: toMB(memory.heapUsed) + " MB",
    heapTotal: toMB(memory.heapTotal) + " MB",
  },
};

console.log(processInfo);`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          This type of information is useful when building backend monitoring,
          debugging tools, and health-check utilities.
        </p>
      </section>

      {/* Interview */}
      <section className="space-y-5 border-t border-[var(--border-color)] pt-8">
        <div className="space-y-2">
          <p className="text-sm font-semibold tracking-widest text-[var(--primary-color)]">
            PREPARE FOR INTERVIEWS
          </p>
          <h2 className="text-2xl font-bold">15. Interview Questions</h2>
        </div>

        {[
          "What is the process object in Node.js?",
          "Why is the process object globally available?",
          "What is the difference between process.argv and process.env?",
          "What is the difference between process.cwd() and __dirname?",
          "What information does process.memoryUsage() return?",
          "What is the difference between process.exit() and process.exitCode?",
          "What is the difference between beforeExit and exit events?",
          "What is the purpose of the uncaughtException event?",
          "What is an unhandled Promise rejection?",
          "What is process.nextTick() and when does its callback execute?",
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
        <h3 className="text-xl font-bold">Environment Variables in Node.js</h3>
        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Learn how to manage application configuration, environment-specific
          settings, and sensitive values in backend applications.
        </p>
      </div>
    </div>
  );
};

export default ProcessObject;
