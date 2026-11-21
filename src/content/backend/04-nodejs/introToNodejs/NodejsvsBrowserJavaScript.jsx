import React from "react";

const NodejsvsBrowserJavaScript = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <header className="space-y-3">
        <span className="text-sm font-medium text-[var(--accent-color)]">
          NODE.JS / 03
        </span>

        <h1 className="text-4xl font-bold">Node.js vs Browser JavaScript</h1>

        <p className="text-lg text-[var(--text-secondary)]">
          JavaScript is the same language in both environments, but the
          available APIs and execution environments are different.
        </p>
      </header>

      {/* Introduction */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Introduction</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          JavaScript was originally created to run inside web browsers. Later,
          Node.js made it possible to execute JavaScript outside the browser,
          such as on servers and local machines.
        </p>

        <p className="text-[var(--text-secondary)] leading-7">
          Both use JavaScript engines to execute code, but they provide
          different built-in APIs depending on their purpose.
        </p>
      </section>

      {/* Browser JavaScript */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What is Browser JavaScript?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Browser JavaScript runs inside a web browser such as Chrome, Firefox
          or Edge. It is mainly used to make websites interactive and handle
          user interactions.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-5 space-y-3">
          <h3 className="font-semibold text-[var(--accent-color)]">
            Common Browser APIs
          </h3>

          <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
            <li>window – Represents the browser window.</li>
            <li>document – Provides access to the HTML document.</li>
            <li>localStorage – Stores data in the browser.</li>
            <li>DOM API – Allows JavaScript to modify HTML elements.</li>
            <li>navigator – Provides browser and device information.</li>
          </ul>
        </div>

        <h3 className="font-semibold">Example</h3>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--accent-background)] p-4">
          <pre className="overflow-x-auto text-sm">
            <code>{`const heading = document.querySelector("h1");

heading.textContent = "Hello Browser!";`}</code>
          </pre>
        </div>

        <p className="text-sm text-[var(--text-secondary)]">
          This code accesses an HTML element and changes its text using the DOM
          API provided by the browser.
        </p>
      </section>

      {/* Node.js */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What is Node.js?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Node.js is a JavaScript runtime environment that allows JavaScript to
          run outside the browser. It is commonly used for backend development,
          APIs, file operations and server-side applications.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-5 space-y-3">
          <h3 className="font-semibold text-[var(--accent-color)]">
            Common Node.js APIs
          </h3>

          <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
            <li>fs – Reads and writes files.</li>
            <li>http – Creates HTTP servers.</li>
            <li>path – Works with file and directory paths.</li>
            <li>process – Provides information about the current process.</li>
            <li>os – Provides operating system information.</li>
          </ul>
        </div>

        <h3 className="font-semibold">Example</h3>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--accent-background)] p-4">
          <pre className="overflow-x-auto text-sm">
            <code>{`const fs = require("fs");

fs.writeFileSync("hello.txt", "Hello Node.js!");

console.log("File created successfully");`}</code>
          </pre>
        </div>

        <p className="text-sm text-[var(--text-secondary)]">
          This code uses Node.js's fs module to create a file on the filesystem.
        </p>
      </section>

      {/* Comparison */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">
          Node.js vs Browser JavaScript
        </h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-left text-sm">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="p-3">Browser JavaScript</th>
                <th className="p-3">Node.js</th>
              </tr>
            </thead>

            <tbody className="text-[var(--text-secondary)]">
              {[
                ["Runs inside a browser.", "Runs outside the browser."],
                [
                  "Used mainly for frontend development.",
                  "Used mainly for backend development.",
                ],
                [
                  "Provides DOM and window APIs.",
                  "Provides fs, http and process APIs.",
                ],
                [
                  "Can access browser storage.",
                  "Can access the filesystem with permissions.",
                ],
                [
                  "Browser controls its environment.",
                  "Runs as a process on the operating system.",
                ],
                ["Uses browser-provided APIs.", "Uses Node.js-provided APIs."],
              ].map(([browser, node]) => (
                <tr key={browser}>
                  <td className="p-3 border-t border-[var(--border-color)]">
                    {browser}
                  </td>
                  <td className="p-3 border-t border-[var(--border-color)]">
                    {node}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Common JavaScript */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What is Common in Both?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Both environments execute JavaScript and support its core language
          features.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-5 space-y-3">
          <h3 className="font-semibold text-[var(--accent-color)]">
            Common JavaScript Features
          </h3>

          <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
            <li>Variables: let, const and var.</li>
            <li>Functions and arrow functions.</li>
            <li>Arrays and objects.</li>
            <li>Classes and modules.</li>
            <li>Promises and async/await.</li>
            <li>JavaScript data types and operators.</li>
          </ul>
        </div>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--accent-background)] p-4">
          <p className="text-sm text-[var(--text-secondary)]">
            <strong className="text-[var(--accent-color)]">Remember:</strong>{" "}
            JavaScript is the language. Browser and Node.js provide different
            environments and APIs to execute it.
          </p>
        </div>
      </section>

      {/* Fetch API */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Do Both Support fetch()?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Yes. Modern browsers and modern Node.js versions support the fetch()
          API for making HTTP requests.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--accent-background)] p-4">
          <pre className="overflow-x-auto text-sm">
            <code>{`const response = await fetch("https://api.example.com/users");

const data = await response.json();

console.log(data);`}</code>
          </pre>
        </div>

        <p className="text-sm text-[var(--text-secondary)]">
          However, browser security rules such as CORS apply to browser
          requests. Node.js fetch does not enforce browser CORS restrictions.
        </p>
      </section>

      {/* Use Cases */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Use Cases</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-5">
            <h3 className="font-semibold text-[var(--accent-color)]">
              Browser JavaScript
            </h3>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-sm text-[var(--text-secondary)]">
              <li>Interactive websites.</li>
              <li>Form validation.</li>
              <li>DOM manipulation.</li>
              <li>Frontend applications.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-5">
            <h3 className="font-semibold text-[var(--accent-color)]">
              Node.js
            </h3>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-sm text-[var(--text-secondary)]">
              <li>Backend APIs.</li>
              <li>Database operations.</li>
              <li>Authentication systems.</li>
              <li>File handling and server applications.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-5 space-y-3">
        <h2 className="text-xl font-semibold">Key Takeaways</h2>

        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>JavaScript is the same language in both environments.</li>
          <li>Browser JavaScript runs inside web browsers.</li>
          <li>Node.js runs JavaScript outside the browser.</li>
          <li>Browser provides APIs like window and document.</li>
          <li>Node.js provides APIs like fs, http and process.</li>
          <li>Both support modern JavaScript features.</li>
        </ul>
      </section>

      {/* Next Topic */}
      <div className="border-t border-[var(--border-color)] pt-5">
        <p className="text-sm text-[var(--text-muted)]">NEXT TOPIC</p>
        <h3 className="mt-1 text-lg font-semibold text-[var(--accent-color)]">
          Node.js Architecture
        </h3>
      </div>
    </div>
  );
};

export default NodejsvsBrowserJavaScript;
