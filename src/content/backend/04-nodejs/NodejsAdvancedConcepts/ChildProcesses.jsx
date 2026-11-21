import React from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const ChildProcesses = () => {
  return (
    <div className="space-y-10 text-[var(--text-primary)]">
      {/* Header */}
      <div className="space-y-3">
        <p className="text-sm font-semibold tracking-widest text-[var(--primary-color)]">
          NODE.JS ADVANCED CONCEPTS / 03
        </p>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Child Processes in Node.js
        </h1>

        <p className="text-lg leading-8 text-[var(--text-secondary)]">
          Understand how Node.js creates and manages separate processes to
          execute external commands, handle CPU-intensive work, and perform
          multiple operations independently.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          1. What are Child Processes?
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          A child process is a separate process created by a parent process
          to perform a specific task.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          Node.js provides the built-in <code>child_process</code> module
          to create and manage child processes.
        </p>

        <CodeBlock
          code={`import { exec } from "node:child_process";

exec("node --version", (error, stdout, stderr) => {
  if (error) {
    console.error(error.message);
    return;
  }

  console.log(stdout);
});`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
          <p className="font-semibold text-[var(--primary-color)]">
            Why use Child Processes?
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm leading-6 text-[var(--text-secondary)]">
            <li>Execute system commands from Node.js.</li>
            <li>Run external programs and scripts.</li>
            <li>Move CPU-intensive work into separate processes.</li>
            <li>Run independent tasks without blocking the main process.</li>
          </ul>
        </div>
      </section>

      {/* 2 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          2. Child Process Module
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Node.js provides the <code>node:child_process</code> module with
          different methods for creating child processes.
        </p>

        <CodeBlock
          code={`import {
  exec,
  execFile,
  spawn,
  fork
} from "node:child_process";`}
        />

        <h3 className="text-lg font-semibold">Important Methods</h3>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm text-left">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">Method</th>
                <th className="p-3">Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              <tr>
                <td className="p-3 font-mono text-[var(--primary-color)]">exec()</td>
                <td className="p-3">Executes a command using a shell and buffers its output.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-[var(--primary-color)]">execFile()</td>
                <td className="p-3">Executes an executable directly without a shell by default.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-[var(--primary-color)]">spawn()</td>
                <td className="p-3">Starts a process and streams its output.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-[var(--primary-color)]">fork()</td>
                <td className="p-3">Creates a new Node.js process with IPC communication.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 3 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          3. exec() Method
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code>exec()</code> method executes a command inside a shell
          and collects its output in a buffer.
        </p>

        <CodeBlock
          code={`import { exec } from "node:child_process";

exec("node --version", (error, stdout, stderr) => {
  if (error) {
    console.error("Error:", error.message);
    return;
  }

  console.log("Output:", stdout);
});`}
        />

        <h3 className="text-lg font-semibold">Important Points</h3>

        <ul className="list-disc pl-6 space-y-2 leading-7 text-[var(--text-secondary)]">
          <li>Executes commands through a shell.</li>
          <li>Buffers command output before passing it to the callback.</li>
          <li>Useful for commands that produce limited output.</li>
          <li>Large output can exceed the default maxBuffer limit.</li>
        </ul>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
          <p className="font-semibold text-[var(--primary-color)]">
            Security Warning
          </p>
          <p className="text-sm leading-7 text-[var(--text-secondary)]">
            Never directly insert untrusted user input into an exec command.
            Shell metacharacters can lead to command injection.
          </p>
        </div>
      </section>

      {/* 4 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          4. spawn() Method
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code>spawn()</code> method starts a new process and provides
          its output through streams instead of collecting everything in
          memory.
        </p>

        <CodeBlock
          code={`import { spawn } from "node:child_process";

const child = spawn("node", ["--version"]);

child.stdout.on("data", (data) => {
  console.log("Output:", data.toString());
});

child.stderr.on("data", (data) => {
  console.error("Error:", data.toString());
});

child.on("close", (code) => {
  console.log("Process closed:", code);
});`}
        />

        <h3 className="text-lg font-semibold">Important Points</h3>

        <ul className="list-disc pl-6 space-y-2 leading-7 text-[var(--text-secondary)]">
          <li>Uses streams to handle output.</li>
          <li>Suitable for large or continuous output.</li>
          <li>Does not use a shell by default.</li>
          <li>Returns a ChildProcess object.</li>
        </ul>
      </section>

      {/* 5 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          5. exec() vs spawn()
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Both methods execute external commands, but their output handling
          and use cases are different.
        </p>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm text-left">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">exec()</th>
                <th className="p-3">spawn()</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              <tr>
                <td className="p-3">Buffers output.</td>
                <td className="p-3">Streams output.</td>
              </tr>
              <tr>
                <td className="p-3">Uses a shell by default.</td>
                <td className="p-3">Does not use a shell by default.</td>
              </tr>
              <tr>
                <td className="p-3">Good for small outputs.</td>
                <td className="p-3">Good for large or continuous outputs.</td>
              </tr>
              <tr>
                <td className="p-3">Callback-based output.</td>
                <td className="p-3">Stream-based output.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 6 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          6. execFile() Method
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code>execFile()</code> method executes an executable directly
          without creating a shell by default.
        </p>

        <CodeBlock
          code={`import { execFile } from "node:child_process";

execFile("node", ["--version"], (error, stdout, stderr) => {
  if (error) {
    console.error(error.message);
    return;
  }

  console.log(stdout);
});`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          It is useful when we want to execute a specific program with
          arguments without shell command parsing.
        </p>
      </section>

      {/* 7 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          7. fork() Method
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code>fork()</code> method creates a new Node.js process to
          execute a JavaScript file. It also establishes an IPC channel
          between the parent and child processes.
        </p>

        <h3 className="text-lg font-semibold">Parent Process</h3>

        <CodeBlock
          code={`// parent.js

import { fork } from "node:child_process";

const child = fork("./child.js");

child.send("Hello from Parent");

child.on("message", (message) => {
  console.log("Child says:", message);
});`}
        />

        <h3 className="text-lg font-semibold">Child Process</h3>

        <CodeBlock
          code={`// child.js

process.on("message", (message) => {
  console.log("Parent says:", message);

  process.send("Hello from Child");
});`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          The parent and child can exchange messages using{" "}
          <code>child.send()</code> and <code>process.send()</code>.
        </p>
      </section>

      {/* 8 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          8. IPC (Inter-Process Communication)
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          IPC is a communication mechanism that allows separate processes
          to exchange data and coordinate their work.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          In Node.js, the <code>fork()</code> method provides an IPC channel
          that allows parent and child processes to send messages to each
          other.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-5 space-y-3">
          <div className="rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] p-3 text-center">
            <p className="font-semibold">Parent Process</p>
            <p className="text-xs text-[var(--text-secondary)]">parent.js</p>
          </div>

          <div className="text-center text-[var(--primary-color)] font-bold">
            ↕ IPC Messages
          </div>

          <div className="rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] p-3 text-center">
            <p className="font-semibold">Child Process</p>
            <p className="text-xs text-[var(--text-secondary)]">child.js</p>
          </div>
        </div>

        <p className="leading-7 text-[var(--text-secondary)]">
          IPC is useful when different processes need to exchange results,
          send instructions, or coordinate tasks.
        </p>
      </section>

      {/* 9 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          9. Child Process Events
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          A ChildProcess object emits events that help us track the
          execution and lifecycle of a child process.
        </p>

        <div className="space-y-3">
          {[
            {
              name: "exit",
              desc: "Emitted when the child process exits.",
            },
            {
              name: "close",
              desc: "Emitted when the process has ended and its stdio streams have closed.",
            },
            {
              name: "error",
              desc: "Emitted when the process cannot be spawned, killed, or otherwise managed.",
            },
            {
              name: "message",
              desc: "Emitted when the child process receives an IPC message.",
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

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <p className="font-semibold text-[var(--primary-color)]">
            Important Difference
          </p>
          <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
            <code>exit</code> indicates that the process has ended, while{" "}
            <code>close</code> indicates that its standard input, output,
            and error streams have closed. The close event generally occurs
            after exit.
          </p>
        </div>
      </section>

      {/* 10 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          10. When to Use Child Processes?
        </h2>

        <div className="grid gap-3 md:grid-cols-2">
          {[
            {
              title: "System Commands",
              desc: "Execute commands such as git, npm, or other system utilities.",
            },
            {
              title: "Background Tasks",
              desc: "Run independent scripts separately from the main application.",
            },
            {
              title: "External Programs",
              desc: "Execute Python scripts, shell utilities, or other executables.",
            },
            {
              title: "CPU-Intensive Tasks",
              desc: "Run expensive computations in a separate process to avoid blocking the main event loop.",
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
          "What are child processes in Node.js?",
          "Why do we use the child_process module?",
          "What is the difference between exec() and spawn()?",
          "What is the difference between spawn() and execFile()?",
          "What is the fork() method?",
          "What is IPC and how does Node.js implement it?",
          "What is the difference between exit and close events?",
          "How can we execute a Python script from Node.js?",
          "How do child processes help prevent event-loop blocking?",
          "Why is using exec() with untrusted user input dangerous?",
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
        <h3 className="text-xl font-bold">Worker Threads in Node.js</h3>
        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Learn how Node.js executes CPU-intensive JavaScript tasks using
          multiple threads within a single process.
        </p>
      </div>
    </div>
  );
};

export default ChildProcesses;