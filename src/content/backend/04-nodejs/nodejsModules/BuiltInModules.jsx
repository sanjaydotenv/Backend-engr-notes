import React from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const BuiltInModules = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <header className="space-y-3">
        <span className="text-sm text-[var(--accent-color)] font-medium">
          NODE.JS / MODULES / 03
        </span>

        <h1 className="text-4xl font-bold">Built-in Modules</h1>

        <p className="text-lg text-[var(--text-secondary)]">
          Built-in modules are modules provided by Node.js that allow us to
          perform common operations without installing external packages.
        </p>
      </header>

      {/* Introduction */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What are Built-in Modules?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Built-in modules are pre-installed modules that come with Node.js.
          They provide functionality for working with files, directories,
          operating system information, HTTP servers, cryptography and more.
        </p>

        <p className="text-[var(--text-secondary)] leading-7">
          We can directly import these modules using require() in CommonJS or
          import in ES Modules. No separate npm installation is required.
        </p>

        <CodeBlock
          code={`// CommonJS
const fs = require("node:fs");

// ES Modules
import fs from "node:fs";`}
        />
      </section>

      {/* Why Built-in Modules */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Why Do We Need Built-in Modules?
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              title: "File Management",
              desc: "Read, write, update and delete files.",
            },
            {
              title: "Server Creation",
              desc: "Create HTTP servers and handle requests.",
            },
            {
              title: "System Information",
              desc: "Access operating system and process information.",
            },
            {
              title: "Security",
              desc: "Generate hashes, random values and perform cryptographic operations.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] space-y-2"
            >
              <h3 className="font-semibold text-[var(--accent-color)]">
                {item.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Import Methods */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">
          How to Import Built-in Modules?
        </h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Node.js supports both CommonJS and ES Module syntax for importing
          built-in modules.
        </p>

        <div className="space-y-3">
          <div>
            <h3 className="font-medium mb-2">CommonJS</h3>
            <CodeBlock
              code={`const fs = require("node:fs");
const path = require("node:path");`}
            />
          </div>

          <div>
            <h3 className="font-medium mb-2">ES Modules</h3>
            <CodeBlock
              code={`import fs from "node:fs";
import path from "node:path";`}
            />
          </div>
        </div>

        <p className="text-sm text-[var(--text-muted)]">
          The node: prefix explicitly identifies a Node.js built-in module.
        </p>
      </section>

      {/* FS Module */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">1. File System (fs)</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          The fs module allows us to interact with the file system. We can
          create, read, update, rename and delete files and directories.
        </p>

        <CodeBlock
          code={`const fs = require("node:fs");

// Create a file
fs.writeFileSync("hello.txt", "Hello Node.js");

// Read a file
const data = fs.readFileSync("hello.txt", "utf8");

console.log(data);

// Output: Hello Node.js`}
        />

        <p className="text-sm text-[var(--text-muted)]">
          Note: These are synchronous methods. Node.js also provides
          asynchronous methods such as fs.readFile() and fs.writeFile().
        </p>
      </section>

      {/* Path Module */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">2. Path Module</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          The path module provides utilities for working with file and directory
          paths. It helps us create and manipulate paths in a
          platform-independent way.
        </p>

        <CodeBlock
          code={`const path = require("node:path");

const filePath = "/users/mayur/app.js";

console.log(path.basename(filePath));
console.log(path.dirname(filePath));
console.log(path.extname(filePath));

// Output:
// app.js
// /users/mayur
// .js`}
        />

        <div className="p-4 rounded-xl bg-[var(--accent-background)] border border-[var(--border-color)] space-y-2">
          <h3 className="font-semibold text-[var(--accent-color)]">
            Important Methods
          </h3>
          <ul className="text-sm text-[var(--text-secondary)] space-y-1">
            <li>basename() - Returns the file name.</li>
            <li>dirname() - Returns the directory path.</li>
            <li>extname() - Returns the file extension.</li>
            <li>join() - Joins path segments.</li>
            <li>resolve() - Resolves a path into an absolute path.</li>
          </ul>
        </div>
      </section>

      {/* HTTP Module */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">3. HTTP Module</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          The http module allows us to create HTTP servers and handle incoming
          HTTP requests and outgoing responses.
        </p>

        <CodeBlock
          code={`const http = require("node:http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain"
  });

  res.end("Hello from Node.js Server!");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});`}
        />

        <p className="text-sm text-[var(--text-muted)]">
          After running this file, open http://localhost:3000 in your browser to
          see the response.
        </p>
      </section>

      {/* OS Module */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">4. Operating System (os)</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          The os module provides information about the operating system on which
          the Node.js application is running.
        </p>

        <CodeBlock
          code={`const os = require("node:os");

console.log(os.platform());
console.log(os.arch());
console.log(os.hostname());
console.log(os.totalmem());
console.log(os.freemem());`}
        />

        <p className="text-sm text-[var(--text-muted)]">
          These methods help us understand the system environment and available
          memory.
        </p>
      </section>

      {/* Events Module */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">5. Events Module</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          The events module allows us to create and handle custom events using
          the EventEmitter class.
        </p>

        <CodeBlock
          code={`const EventEmitter = require("node:events");

const emitter = new EventEmitter();

// Register an event listener
emitter.on("greet", (name) => {
  console.log(\`Hello, \${name}\`);
});

// Emit an event
emitter.emit("greet", "Mayur");

// Output: Hello, Mayur`}
        />

        <p className="text-sm text-[var(--text-muted)]">
          EventEmitter is widely used in Node.js for event-driven programming.
        </p>
      </section>

      {/* Crypto Module */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">6. Crypto Module</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          The crypto module provides cryptographic functionality such as
          hashing, encryption, decryption and secure random value generation.
        </p>

        <CodeBlock
          code={`const crypto = require("node:crypto");

// Generate a SHA-256 hash
const hash = crypto
  .createHash("sha256")
  .update("hello")
  .digest("hex");

console.log(hash);

// Generate random bytes
const randomValue = crypto
  .randomBytes(16)
  .toString("hex");

console.log(randomValue);`}
        />

        <p className="text-sm text-[var(--text-muted)]">
          Hashing and encryption are different operations. For password storage,
          use a dedicated password-hashing algorithm such as scrypt or Argon2
          rather than plain SHA-256.
        </p>
      </section>

      {/* URL Module */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">7. URL Module</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          The URL module provides utilities for parsing, constructing and
          manipulating URLs.
        </p>

        <CodeBlock
          code={`const { URL } = require("node:url");

const myURL = new URL(
  "https://example.com/products?id=10"
);

console.log(myURL.hostname);
console.log(myURL.pathname);
console.log(myURL.searchParams.get("id"));

// Output:
// example.com
// /products
// 10`}
        />

        <p className="text-sm text-[var(--text-muted)]">
          The URL class is also available globally in modern Node.js versions.
        </p>
      </section>

      {/* Process Module */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">8. Process</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          process is a global object in Node.js that provides information about
          and control over the current Node.js process. It does not need to be
          imported.
        </p>

        <CodeBlock
          code={`console.log(process.version);
console.log(process.platform);
console.log(process.arch);

// Read environment variables
console.log(process.env.NODE_ENV);

// Read command-line arguments
console.log(process.argv);`}
        />

        <p className="text-sm text-[var(--text-muted)]">
          process.env is commonly used to access environment variables such as
          PORT, NODE_ENV and database configuration.
        </p>
      </section>

      {/* Other Modules */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Other Useful Built-in Modules
        </h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm text-left">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="p-3">Module</th>
                <th className="p-3">Purpose</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[var(--border-color)] text-[var(--text-secondary)]">
              {[
                ["stream", "Work with streaming data."],
                ["buffer", "Handle binary data."],
                ["util", "Provides utility functions."],
                ["child_process", "Create and manage child processes."],
                ["worker_threads", "Run JavaScript in parallel threads."],
                ["zlib", "Compress and decompress data."],
                ["readline", "Read input line by line."],
                ["assert", "Write assertions for testing."],
                ["dns", "Perform DNS lookups."],
                ["timers", "Schedule callbacks and timers."],
              ].map(([module, purpose]) => (
                <tr key={module}>
                  <td className="p-3 font-medium text-[var(--text-primary)]">
                    {module}
                  </td>
                  <td className="p-3">{purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Summary */}
      <section className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] space-y-3">
        <h2 className="text-xl font-semibold">Key Takeaways</h2>

        <ul className="list-disc list-inside space-y-2 text-sm text-[var(--text-secondary)]">
          <li>Built-in modules come with Node.js.</li>
          <li>They do not require separate npm installation.</li>
          <li>fs is used for file system operations.</li>
          <li>path is used for file and directory paths.</li>
          <li>http is used to create HTTP servers.</li>
          <li>os provides operating system information.</li>
          <li>events provides EventEmitter functionality.</li>
          <li>crypto provides cryptographic operations.</li>
          <li>process is a globally available object.</li>
        </ul>
      </section>
    </div>
  );
};

export default BuiltInModules;
