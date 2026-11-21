import CodeBlock from "../../../../components/common/CodeBlock";

function NodejsPerformance() {
  return (
    <div className="space-y-10 text-[var(--text-primary)]">
      {/* Header */}
      <div className="space-y-3">
        <p className="text-sm font-semibold tracking-wider text-[var(--primary-color)]">
          NODE.JS ADVANCED CONCEPTS / 10
        </p>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Node.js Performance Optimization
        </h1>

        <p className="text-lg leading-7 text-[var(--text-secondary)]">
          Learn how to identify performance bottlenecks and improve the speed,
          scalability, and efficiency of Node.js applications.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          1. What is Performance Optimization?
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Performance Optimization is the process of improving an application's
          execution speed, response time, memory usage, and ability to handle
          multiple requests efficiently.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          In Node.js, performance depends on multiple factors such as event loop
          blocking, database queries, memory usage, network operations, and
          application architecture.
        </p>

        <h3 className="text-lg font-semibold">Important Performance Metrics</h3>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm text-left">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">Metric</th>
                <th className="p-3">Meaning</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              {[
                ["Response Time", "Time taken to respond to a request."],
                [
                  "Throughput",
                  "Number of requests processed per unit of time.",
                ],
                ["Latency", "Delay before a request receives a response."],
                ["CPU Usage", "Amount of CPU resources consumed."],
                ["Memory Usage", "Amount of memory used by the application."],
                ["Event Loop Lag", "Delay in processing event loop callbacks."],
              ].map(([metric, meaning]) => (
                <tr key={metric}>
                  <td className="p-3 font-semibold text-[var(--primary-color)]">
                    {metric}
                  </td>
                  <td className="p-3 text-[var(--text-secondary)]">
                    {meaning}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 2 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">2. Avoid Blocking the Event Loop</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Node.js executes JavaScript callbacks on a single main thread. If a
          CPU-intensive operation blocks this thread, other callbacks and
          incoming request handlers may be delayed.
        </p>

        <h3 className="text-lg font-semibold">Blocking Code</h3>

        <CodeBlock
          code={`import express from "express";

const app = express();

app.get("/calculate", (req, res) => {
  let total = 0;

  for (let i = 0; i < 1e9; i++) {
    total += i;
  }

  res.json({ total });
});

app.listen(3000);`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          The large loop blocks the main JavaScript thread until calculation
          finishes. During this time, other JavaScript callbacks cannot execute
          on that thread.
        </p>

        <h3 className="text-lg font-semibold">Better Approach</h3>

        <p className="leading-7 text-[var(--text-secondary)]">
          Move CPU-intensive JavaScript calculations to Worker Threads instead
          of performing them directly on the main thread.
        </p>

        <CodeBlock
          code={`// worker.js

import { parentPort } from "node:worker_threads";

let total = 0;

for (let i = 0; i < 1e9; i++) {
  total += i;
}

parentPort.postMessage(total);`}
        />

        <CodeBlock
          code={`// app.js

import { Worker } from "node:worker_threads";
import { fileURLToPath } from "node:url";
import express from "express";

const app = express();

const workerPath = fileURLToPath(
  new URL("./worker.js", import.meta.url)
);

app.get("/calculate", (req, res) => {
  const worker = new Worker(workerPath);

  worker.once("message", (result) => {
    res.json({ result });
  });

  worker.once("error", (error) => {
    res.status(500).json({ error: error.message });
  });

  worker.once("exit", (code) => {
    if (code !== 0) {
      console.error("Worker stopped with exit code:", code);
    }
  });
});

app.listen(3000);`}
        />

        <p className="text-sm text-[var(--text-muted)]">
          For production applications, consider reusing a worker pool instead of
          creating a new worker for every request.
        </p>
      </section>

      {/* 3 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">3. Use Asynchronous Operations</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Node.js provides asynchronous APIs that allow I/O operations to
          complete without blocking the main JavaScript thread.
        </p>

        <h3 className="text-lg font-semibold">Synchronous Approach</h3>

        <CodeBlock
          code={`import fs from "node:fs";

const data = fs.readFileSync("data.txt", "utf8");

console.log(data);`}
        />

        <h3 className="text-lg font-semibold">Asynchronous Approach</h3>

        <CodeBlock
          code={`import fs from "node:fs/promises";

async function readFile() {
  const data = await fs.readFile("data.txt", "utf8");

  console.log(data);
}

readFile();`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          The asynchronous version avoids blocking JavaScript while waiting for
          file I/O to complete.
        </p>
      </section>

      {/* 4 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">4. Database Query Optimization</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Database queries can become a major performance bottleneck when they
          retrieve unnecessary data or scan large collections.
        </p>

        <h3 className="text-lg font-semibold">Select Only Required Fields</h3>

        <CodeBlock
          code={`// Fetching unnecessary fields
const users = await User.find();

// Fetch only required fields
const users = await User.find()
  .select("name email");`}
        />

        <h3 className="text-lg font-semibold">Use Pagination</h3>

        <CodeBlock
          code={`const page = 1;
const limit = 10;

const users = await User.find()
  .skip((page - 1) * limit)
  .limit(limit);`}
        />

        <h3 className="text-lg font-semibold">Use Indexes</h3>

        <CodeBlock
          code={`// Create an index on email
UserSchema.index({ email: 1 });

// Search using the indexed field
const user = await User.findOne({
  email: "user@example.com"
});`}
        />

        <h3 className="text-lg font-semibold">Avoid N+1 Queries</h3>

        <p className="leading-7 text-[var(--text-secondary)]">
          N+1 occurs when an application executes one query to fetch a list and
          then executes another query for every item. This can create
          unnecessary database requests.
        </p>

        <p className="text-sm text-[var(--text-muted)]">
          Use appropriate population, aggregation, joins, or batched queries
          depending on your database and data requirements.
        </p>
      </section>

      {/* 5 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">5. Caching</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Caching stores frequently accessed data temporarily so that future
          requests can retrieve it faster without repeatedly performing
          expensive operations.
        </p>

        <h3 className="text-lg font-semibold">In-Memory Caching</h3>

        <CodeBlock
          code={`const cache = new Map();

async function getUser(id) {
  if (cache.has(id)) {
    return cache.get(id);
  }

  const user = await User.findById(id);

  cache.set(id, user);

  return user;
}`}
        />

        <h3 className="text-lg font-semibold">Redis Caching</h3>

        <p className="leading-7 text-[var(--text-secondary)]">
          Redis is an external in-memory data store that can be used for shared
          caching across multiple Node.js processes.
        </p>

        <CodeBlock
          code={`// Conceptual example

const cachedUser = await redis.get(\`user:\${id}\`);

if (cachedUser) {
  return JSON.parse(cachedUser);
}

const user = await User.findById(id);

if (user) {
  await redis.set(
    \`user:\${id}\`,
    JSON.stringify(user),
    { EX: 300 }
  );
}

return user;`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
          <p className="font-semibold text-[var(--primary-color)]">Important</p>
          <p className="text-sm leading-6 text-[var(--text-secondary)]">
            Caching requires an expiration and invalidation strategy. Otherwise,
            users may receive outdated data.
          </p>
        </div>
      </section>

      {/* 6 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">6. Use Streams for Large Data</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Loading a large file completely into memory can increase memory
          consumption. Streams process data in smaller chunks.
        </p>

        <h3 className="text-lg font-semibold">Without Streams</h3>

        <CodeBlock
          code={`import fs from "node:fs/promises";

const data = await fs.readFile("large-file.txt");

console.log(data);`}
        />

        <h3 className="text-lg font-semibold">With Streams</h3>

        <CodeBlock
          code={`import fs from "node:fs";
import { pipeline } from "node:stream/promises";

await pipeline(
  fs.createReadStream("large-file.txt"),
  fs.createWriteStream("copy.txt")
);

console.log("File copied successfully");`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Streams reduce the need to hold the entire file in memory and support
          backpressure during data transfer.
        </p>
      </section>

      {/* 7 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          7. Use Cluster for Multi-Core Processing
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          By default, one Node.js process executes JavaScript callbacks on its
          main thread. The Cluster module allows multiple worker processes to
          share server ports and handle incoming connections.
        </p>

        <CodeBlock
          code={`import cluster from "node:cluster";
import os from "node:os";
import http from "node:http";

if (cluster.isPrimary) {
  const cpuCount = os.availableParallelism();

  for (let i = 0; i < cpuCount; i++) {
    cluster.fork();
  }
} else {
  const server = http.createServer((req, res) => {
    res.end(\`Worker: \${process.pid}\`);
  });

  server.listen(3000);
}`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Cluster can improve server throughput by distributing connections
          across multiple processes.
        </p>
      </section>

      {/* 8 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">8. Memory Optimization</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Unnecessary memory usage and memory leaks can reduce application
          performance, especially in long-running servers.
        </p>

        <ul className="list-disc space-y-2 pl-6 leading-7 text-[var(--text-secondary)]">
          <li>Remove unnecessary event listeners.</li>
          <li>Clear unused timers.</li>
          <li>Limit cache size.</li>
          <li>Avoid unnecessary global references.</li>
          <li>Use streams for large files.</li>
          <li>Monitor heap usage and memory growth.</li>
        </ul>

        <h3 className="text-lg font-semibold">Monitor Memory Usage</h3>

        <CodeBlock
          code={`const memory = process.memoryUsage();

console.log({
  heapUsed: (memory.heapUsed / 1024 / 1024).toFixed(2) + " MB",
  heapTotal: (memory.heapTotal / 1024 / 1024).toFixed(2) + " MB",
  rss: (memory.rss / 1024 / 1024).toFixed(2) + " MB"
});`}
        />
      </section>

      {/* 9 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">9. Performance Profiling</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Profiling helps identify which parts of an application consume
          excessive CPU time or memory.
        </p>

        <h3 className="text-lg font-semibold">Node.js Built-in Profiler</h3>

        <CodeBlock code={`node --prof app.js`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          This generates a V8 profiling log that can be processed to inspect
          where CPU time is spent.
        </p>

        <h3 className="text-lg font-semibold">CPU Profiling</h3>

        <CodeBlock code={`node --cpu-prof app.js`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          This generates a CPU profile that can be opened in Chrome DevTools for
          performance analysis.
        </p>

        <h3 className="text-lg font-semibold">Heap Snapshot</h3>

        <CodeBlock code={`node --inspect app.js`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          Connect Chrome DevTools to the Node.js inspector and use the Memory
          tab to capture and compare heap snapshots.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
          <p className="font-semibold text-[var(--primary-color)]">Important</p>
          <p className="text-sm leading-6 text-[var(--text-secondary)]">
            Heap snapshots can temporarily require significant memory. Capture
            them carefully, especially in production environments.
          </p>
        </div>
      </section>

      {/* 10 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">10. Event Loop Monitoring</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Event Loop Lag measures how much later a scheduled event-loop callback
          executes than expected. High lag can indicate blocking JavaScript or
          other event-loop delays.
        </p>

        <CodeBlock
          code={`import { monitorEventLoopDelay } from "node:perf_hooks";

const histogram = monitorEventLoopDelay({
  resolution: 20
});

histogram.enable();

setInterval(() => {
  console.log({
    mean: (histogram.mean / 1e6).toFixed(2) + " ms",
    max: (histogram.max / 1e6).toFixed(2) + " ms"
  });

  histogram.reset();
}, 5000);`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          The monitorEventLoopDelay() API measures event-loop delay using a
          histogram. Its values are reported in nanoseconds, so the example
          converts them into milliseconds.
        </p>
      </section>

      {/* 11 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          11. Important Performance Best Practices
        </h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm text-left">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">Area</th>
                <th className="p-3">Best Practice</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              {[
                ["Event Loop", "Avoid CPU-intensive blocking operations."],
                ["I/O", "Prefer asynchronous APIs."],
                ["Database", "Use indexes and optimize queries."],
                ["Caching", "Cache frequently accessed data."],
                ["Memory", "Prevent memory leaks and limit caches."],
                ["Large Files", "Use Streams and pipeline()."],
                ["CPU Tasks", "Use Worker Threads or worker pools."],
                ["Scaling", "Use Cluster or multiple application instances."],
                [
                  "Monitoring",
                  "Measure latency, throughput, and event-loop delay.",
                ],
                ["Profiling", "Identify bottlenecks before optimizing."],
              ].map(([area, practice]) => (
                <tr key={area}>
                  <td className="p-3 font-semibold text-[var(--primary-color)]">
                    {area}
                  </td>
                  <td className="p-3 text-[var(--text-secondary)]">
                    {practice}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 12 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">12. Interview Questions</h2>

        <div className="space-y-4">
          {[
            [
              "What is Performance Optimization in Node.js?",
              "It is the process of improving application speed, response time, throughput, and resource utilization.",
            ],
            [
              "Why should we avoid blocking the Event Loop?",
              "Blocking the event loop delays other callbacks and request handlers, reducing application responsiveness.",
            ],
            [
              "How do Worker Threads improve performance?",
              "They execute CPU-intensive JavaScript tasks on separate threads so the main event loop remains responsive.",
            ],
            [
              "What is the difference between Cluster and Worker Threads?",
              "Cluster creates separate processes for scaling server workloads, while Worker Threads create separate threads for parallel JavaScript execution.",
            ],
            [
              "How does caching improve performance?",
              "It reduces repeated expensive operations by storing frequently accessed data for faster retrieval.",
            ],
            [
              "What is database query optimization?",
              "It involves reducing unnecessary database work using indexes, projections, pagination, and efficient queries.",
            ],
            [
              "What is Event Loop Lag?",
              "It measures the delay in executing scheduled event-loop callbacks.",
            ],
            [
              "What is Profiling?",
              "Profiling measures application resource usage to identify CPU, memory, and execution bottlenecks.",
            ],
            [
              "How can you monitor Node.js memory usage?",
              "Use process.memoryUsage() to inspect RSS, heapUsed, heapTotal, external, and arrayBuffers.",
            ],
            [
              "Why are Streams useful for large files?",
              "They process data in chunks and reduce the need to load the entire file into memory.",
            ],
          ].map(([question, answer], index) => (
            <div
              key={index}
              className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2"
            >
              <h3 className="font-semibold">
                {index + 1}. {question}
              </h3>
              <p className="text-sm leading-6 text-[var(--text-secondary)]">
                {answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Next Topic */}
      <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 space-y-2">
        <p className="text-xs font-semibold tracking-wider text-[var(--primary-color)]">
          NEXT TOPIC
        </p>
        <h3 className="text-xl font-bold">
          Node.js Advanced Concepts - Revision
        </h3>
        <p className="text-sm text-[var(--text-secondary)]">
          Review Node.js internals, process management, memory, streams, and
          performance optimization.
        </p>
      </div>
    </div>
  );
}

export default NodejsPerformance;
