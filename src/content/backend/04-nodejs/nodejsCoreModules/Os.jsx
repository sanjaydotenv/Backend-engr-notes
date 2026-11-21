import React from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const Os = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <header className="space-y-3">
        <span className="text-sm text-[var(--accent-color)] font-medium">
          NODE.JS CORE MODULES / 03
        </span>

        <h1 className="text-4xl font-bold">OS Module in Node.js</h1>

        <p className="text-lg text-[var(--text-secondary)]">
          Learn how to access operating system information using Node.js.
        </p>
      </header>

      {/* What is OS */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What is the OS Module?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          The OS module is a built-in Node.js module that provides information
          about the operating system and the machine on which a Node.js
          application is running.
        </p>

        <p className="text-[var(--text-secondary)] leading-7">
          It allows us to access information such as operating system type, CPU
          details, memory usage, hostname, uptime and network interfaces.
        </p>

        <CodeBlock
          code={`const os = require("node:os");

console.log(os.platform());
console.log(os.arch());
console.log(os.hostname());`}
        />
      </section>

      {/* Why OS */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">
          Why do we need the OS Module?
        </h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Backend applications sometimes need information about the machine
          where they are running. The OS module provides access to this
          information.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            [
              "System Information",
              "Identify the operating system and architecture.",
            ],
            ["Memory Monitoring", "Check available and total system memory."],
            [
              "CPU Information",
              "Get processor details and CPU core information.",
            ],
            ["System Monitoring", "Monitor uptime and system resources."],
            ["Network Information", "Inspect available network interfaces."],
            [
              "System Configuration",
              "Access hostname, temporary directory and home directory.",
            ],
          ].map(([title, description]) => (
            <div
              key={title}
              className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] space-y-2"
            >
              <h3 className="font-semibold text-[var(--accent-color)]">
                {title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Import */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Importing the OS Module</h2>

        <p className="text-[var(--text-secondary)]">
          OS is a built-in module. No npm installation is required.
        </p>

        <CodeBlock
          code={`// CommonJS
const os = require("node:os");

// ES Modules
import os from "node:os";`}
        />
      </section>

      {/* Platform */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">1. os.platform()</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Returns the operating system platform on which Node.js is running.
        </p>

        <CodeBlock
          code={`const os = require("node:os");

console.log(os.platform());

// Common outputs:
// win32  -> Windows
// linux  -> Linux
// darwin -> macOS`}
        />

        <p className="text-sm text-[var(--text-muted)]">
          Note: Windows returns "win32" even on 64-bit Windows systems.
        </p>
      </section>

      {/* Architecture */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">2. os.arch()</h2>

        <p className="text-[var(--text-secondary)]">
          Returns the CPU architecture for which the Node.js binary was
          compiled.
        </p>

        <CodeBlock
          code={`const os = require("node:os");

console.log(os.arch());

// Common outputs:
// x64
// arm64
// ia32`}
        />
      </section>

      {/* Hostname */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">3. os.hostname()</h2>

        <p className="text-[var(--text-secondary)]">
          Returns the hostname of the operating system.
        </p>

        <CodeBlock
          code={`const os = require("node:os");

console.log(os.hostname());

// Example output:
// DESKTOP-ABC123`}
        />
      </section>

      {/* Type and Release */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">
          4. os.type() and os.release()
        </h2>

        <p className="text-[var(--text-secondary)]">
          These methods provide additional operating system information.
        </p>

        <CodeBlock
          code={`const os = require("node:os");

console.log(os.type());
console.log(os.release());

// Example outputs:
// Windows_NT
// 10.0.26100`}
        />

        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>
            <strong>os.type():</strong> Returns the operating system name.
          </li>
          <li>
            <strong>os.release():</strong> Returns the operating system release
            version.
          </li>
        </ul>
      </section>

      {/* CPU */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">5. os.cpus()</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Returns an array containing information about each logical CPU core
          available to Node.js.
        </p>

        <CodeBlock
          code={`const os = require("node:os");

const cpus = os.cpus();

console.log(cpus.length); 
// Number of logical CPU cores

console.log(cpus[0]);

// Example structure:
// {
//   model: "Intel(R) Core(TM) ...",
//   speed: 2500,
//   times: {
//     user: 1000,
//     nice: 0,
//     sys: 500,
//     idle: 2000,
//     irq: 0
//   }
// }`}
        />

        <p className="text-[var(--text-secondary)]">
          Each CPU object contains its model, speed and time spent in different
          CPU states.
        </p>

        <div className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--accent-background)]">
          <p className="font-semibold text-[var(--accent-color)] mb-1">
            Important
          </p>
          <p className="text-sm text-[var(--text-secondary)]">
            os.cpus().length reports logical CPU cores, not necessarily physical
            processor cores. It is also not a direct measurement of current CPU
            utilization.
          </p>
        </div>
      </section>

      {/* Total Memory */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">6. os.totalmem()</h2>

        <p className="text-[var(--text-secondary)]">
          Returns the total amount of system memory (RAM) in bytes.
        </p>

        <CodeBlock
          code={`const os = require("node:os");

const totalMemory = os.totalmem();

console.log(totalMemory);

// Convert bytes to GB
const totalGB = totalMemory / (1024 ** 3);

console.log(totalGB.toFixed(2), "GB");`}
        />
      </section>

      {/* Free Memory */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">7. os.freemem()</h2>

        <p className="text-[var(--text-secondary)]">
          Returns the amount of free system memory in bytes.
        </p>

        <CodeBlock
          code={`const os = require("node:os");

const freeMemory = os.freemem();

const freeGB = freeMemory / (1024 ** 3);

console.log(freeGB.toFixed(2), "GB");`}
        />
      </section>

      {/* Memory Example */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">
          Practical Example: System Memory
        </h2>

        <p className="text-[var(--text-secondary)]">
          We can combine totalmem() and freemem() to calculate used memory.
        </p>

        <CodeBlock
          code={`const os = require("node:os");

const totalMemory = os.totalmem();
const freeMemory = os.freemem();

const usedMemory = totalMemory - freeMemory;

const toGB = (bytes) => (bytes / (1024 ** 3)).toFixed(2);

console.log("Total RAM:", toGB(totalMemory), "GB");
console.log("Free RAM:", toGB(freeMemory), "GB");
console.log("Used RAM:", toGB(usedMemory), "GB");

// Example output:
// Total RAM: 16.00 GB
// Free RAM: 5.00 GB
// Used RAM: 11.00 GB`}
        />

        <p className="text-sm text-[var(--text-muted)]">
          These values describe system memory, not memory used exclusively by
          your Node.js application.
        </p>
      </section>

      {/* Uptime */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">8. os.uptime()</h2>

        <p className="text-[var(--text-secondary)]">
          Returns the number of seconds the operating system has been running.
        </p>

        <CodeBlock
          code={`const os = require("node:os");

const uptime = os.uptime();

console.log(uptime);

// Convert seconds into hours
const hours = (uptime / 3600).toFixed(2);

console.log("System Uptime:", hours, "hours");`}
        />

        <p className="text-sm text-[var(--text-muted)]">
          This is system uptime, not the uptime of your Node.js application.
        </p>
      </section>

      {/* User Info */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">9. os.userInfo()</h2>

        <p className="text-[var(--text-secondary)]">
          Returns information about the current operating system user account
          running the Node.js process.
        </p>

        <CodeBlock
          code={`const os = require("node:os");

const user = os.userInfo();

console.log(user);

// Example structure:
// {
//   uid: -1,
//   gid: -1,
//   username: "Mayur",
//   homedir: "C:\\\\Users\\\\Mayur",
//   shell: null
// }`}
        />

        <p className="text-sm text-[var(--text-muted)]">
          Some fields, such as uid and gid, may have platform-specific values.
          Do not expose user information unnecessarily in public APIs or logs.
        </p>
      </section>

      {/* Home and Temp */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">
          10. os.homedir() and os.tmpdir()
        </h2>

        <p className="text-[var(--text-secondary)]">
          These methods return commonly needed system directories.
        </p>

        <CodeBlock
          code={`const os = require("node:os");

console.log(os.homedir());
console.log(os.tmpdir());

// Example outputs:
// C:\\Users\\Mayur
// C:\\Users\\Mayur\\AppData\\Local\\Temp`}
        />

        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>
            <strong>os.homedir():</strong> Returns the current user's home
            directory.
          </li>
          <li>
            <strong>os.tmpdir():</strong> Returns the default temporary
            directory.
          </li>
        </ul>
      </section>

      {/* Network Interfaces */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">11. os.networkInterfaces()</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Returns information about the network interfaces available on the
          system, including their IP addresses and address families.
        </p>

        <CodeBlock
          code={`const os = require("node:os");

const interfaces = os.networkInterfaces();

console.log(interfaces);`}
        />

        <p className="text-[var(--text-secondary)]">
          It is useful when inspecting local network configuration or
          discovering network addresses.
        </p>

        <div className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--accent-background)]">
          <p className="font-semibold text-[var(--accent-color)] mb-1">
            Security Note
          </p>
          <p className="text-sm text-[var(--text-secondary)]">
            Network interface information can reveal private IP addresses and
            network details. Avoid exposing this information through public
            endpoints.
          </p>
        </div>
      </section>

      {/* Endianness */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">12. os.endianness()</h2>

        <p className="text-[var(--text-secondary)]">
          Returns the byte order used by the CPU architecture.
        </p>

        <CodeBlock
          code={`const os = require("node:os");

console.log(os.endianness());

// Common outputs:
// LE -> Little Endian
// BE -> Big Endian`}
        />

        <p className="text-sm text-[var(--text-muted)]">
          This is mainly useful in low-level binary data processing and
          interoperability scenarios.
        </p>
      </section>

      {/* Practical Example */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">
          Practical Backend Example: System Information API
        </h2>

        <p className="text-[var(--text-secondary)] leading-7">
          We can use the OS module with Express to create an endpoint that
          returns basic server information. This is useful for internal
          diagnostics and monitoring.
        </p>

        <CodeBlock
          code={`const express = require("express");
const os = require("node:os");

const app = express();

app.get("/system-info", (req, res) => {
  const totalMemory = os.totalmem();
  const freeMemory = os.freemem();

  res.json({
    platform: os.platform(),
    architecture: os.arch(),
    hostname: os.hostname(),
    cpuCores: os.cpus().length,

    memory: {
      total: totalMemory,
      free: freeMemory,
      used: totalMemory - freeMemory,
    },

    uptime: os.uptime(),
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});`}
        />

        <p className="text-sm text-[var(--text-muted)]">
          This example is intended for local or protected internal monitoring.
          Do not expose detailed infrastructure information publicly.
        </p>
      </section>

      {/* Important Methods */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Commonly Used OS Methods</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm text-left">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="p-3">Method</th>
                <th className="p-3">Purpose</th>
              </tr>
            </thead>

            <tbody>
              {[
                ["os.platform()", "Operating system platform."],
                ["os.arch()", "CPU architecture."],
                ["os.hostname()", "Machine hostname."],
                ["os.cpus()", "Logical CPU information."],
                ["os.totalmem()", "Total system RAM in bytes."],
                ["os.freemem()", "Free system RAM in bytes."],
                ["os.uptime()", "System uptime in seconds."],
                ["os.homedir()", "User home directory."],
                ["os.tmpdir()", "Temporary directory."],
                ["os.userInfo()", "Current OS user information."],
                ["os.networkInterfaces()", "Network interface information."],
                ["os.type()", "Operating system name."],
                ["os.release()", "Operating system release."],
              ].map(([method, description]) => (
                <tr
                  key={method}
                  className="border-t border-[var(--border-color)]"
                >
                  <td className="p-3 font-mono text-[var(--accent-color)]">
                    {method}
                  </td>
                  <td className="p-3 text-[var(--text-secondary)]">
                    {description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* OS vs Process */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">OS Module vs Process Object</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Both provide system-related information, but their purposes are
          different.
        </p>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm text-left">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="p-3">OS Module</th>
                <th className="p-3">Process Object</th>
              </tr>
            </thead>

            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-t border-[var(--border-color)]">
                <td className="p-3">Provides operating system information.</td>
                <td className="p-3">
                  Provides information about the running Node.js process.
                </td>
              </tr>
              <tr className="border-t border-[var(--border-color)]">
                <td className="p-3">os.totalmem()</td>
                <td className="p-3">process.memoryUsage()</td>
              </tr>
              <tr className="border-t border-[var(--border-color)]">
                <td className="p-3">os.uptime()</td>
                <td className="p-3">process.uptime()</td>
              </tr>
              <tr className="border-t border-[var(--border-color)]">
                <td className="p-3">os.platform()</td>
                <td className="p-3">process.platform</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Important Notes */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Important Things to Remember</h2>

        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>OS is a built-in Node.js module.</li>
          <li>No npm installation is required.</li>
          <li>os.platform() identifies the operating system platform.</li>
          <li>os.arch() returns the Node.js binary architecture.</li>
          <li>os.cpus() provides logical CPU information.</li>
          <li>os.totalmem() and os.freemem() return bytes.</li>
          <li>os.uptime() returns system uptime in seconds.</li>
          <li>OS information is different from Node.js process information.</li>
          <li>Avoid exposing sensitive system details through public APIs.</li>
        </ul>
      </section>

      {/* Summary */}
      <section className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] space-y-3">
        <h2 className="text-2xl font-semibold">Summary</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          The Node.js OS module provides information about the machine running
          our application. It is commonly used for system diagnostics, resource
          monitoring, environment detection and server management.
        </p>
      </section>
    </div>
  );
};

export default Os;
