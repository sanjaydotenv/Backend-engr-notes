import CodeBlock from "../../../../components/common/CodeBlock";

function ClusterModule() {
  return (
    <div className="space-y-10 text-[var(--text-primary)]">

      {/* Header */}
      <div className="space-y-3">
        <p className="text-sm font-semibold tracking-wider text-[var(--primary-color)]">
          NODE.JS ADVANCED CONCEPTS / 05
        </p>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Cluster Module in Node.js
        </h1>

        <p className="text-lg leading-7 text-[var(--text-secondary)]">
          Learn how to use multiple CPU cores to handle more requests
          in a Node.js application.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          1. What is Cluster Module?
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The Cluster module is a built-in Node.js module that allows us
          to create multiple Node.js processes called workers.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          Each worker runs its own instance of the Node.js event loop.
          This allows an application to use multiple CPU cores and handle
          more incoming requests.
        </p>

        <CodeBlock
          code={`import cluster from "node:cluster";
import os from "node:os";

console.log(cluster.isPrimary);`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
          <p className="font-semibold text-[var(--primary-color)]">
            Important
          </p>
          <p className="text-sm leading-6 text-[var(--text-secondary)]">
            Cluster creates separate processes, not threads. Each worker
            has its own memory and event loop.
          </p>
        </div>
      </section>

      {/* 2 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          2. Why Do We Need Cluster?
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          By default, a Node.js application runs JavaScript on a single
          main thread. On a multi-core CPU, a single Node.js process
          generally does not use all CPU cores for JavaScript execution.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          The Cluster module allows us to run multiple workers so that
          incoming requests can be handled by different processes.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
            <h3 className="font-semibold">Without Cluster</h3>
            <ul className="list-disc pl-5 text-sm leading-7 text-[var(--text-secondary)]">
              <li>One Node.js process</li>
              <li>One main JavaScript thread</li>
              <li>Limited CPU core utilization</li>
            </ul>
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
            <h3 className="font-semibold">With Cluster</h3>
            <ul className="list-disc pl-5 text-sm leading-7 text-[var(--text-secondary)]">
              <li>Multiple Node.js processes</li>
              <li>Separate event loop per worker</li>
              <li>Can utilize multiple CPU cores</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          3. How Cluster Works
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Cluster follows a Primary-Worker architecture.
        </p>

        <ul className="list-disc space-y-2 pl-6 leading-7 text-[var(--text-secondary)]">
          <li>
            <strong>Primary Process:</strong> Creates and manages worker
            processes.
          </li>
          <li>
            <strong>Worker Processes:</strong> Run the application code
            independently.
          </li>
          <li>
            <strong>Request Distribution:</strong> Workers can share a
            server port. Node.js distributes incoming connections among
            them.
          </li>
        </ul>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 space-y-3 text-center">
          <div className="mx-auto max-w-xs rounded-lg border border-[var(--primary-color)] bg-[var(--primary-soft)] p-3 font-semibold">
            Primary Process
          </div>

          <div className="text-[var(--primary-color)]">↓</div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {["Worker 1", "Worker 2", "Worker 3", "Worker 4"].map(
              (worker) => (
                <div
                  key={worker}
                  className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] p-3 text-sm font-medium"
                >
                  {worker}
                </div>
              )
            )}
          </div>

          <p className="text-xs text-[var(--text-muted)]">
            Multiple workers can handle incoming connections.
          </p>
        </div>
      </section>

      {/* 4 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          4. Creating a Cluster Server
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Let's create multiple workers based on the available CPU cores.
          Every worker will run an HTTP server on the same port.
        </p>

        <h3 className="text-lg font-semibold">
          cluster-server.js
        </h3>

        <CodeBlock
          code={`import cluster from "node:cluster";
import os from "node:os";
import http from "node:http";

const numCPUs = os.availableParallelism();

if (cluster.isPrimary) {
  console.log(\`Primary process: \${process.pid}\`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(\`Worker \${worker.process.pid} exited\`);
  });

} else {
  const server = http.createServer((req, res) => {
    res.end(\`Handled by worker: \${process.pid}\`);
  });

  server.listen(3000);

  console.log(\`Worker started: \${process.pid}\`);
}`}
        />

        <h3 className="text-lg font-semibold">
          Run the application
        </h3>

        <CodeBlock code={`node cluster-server.js`} />

        <h3 className="text-lg font-semibold">
          Example Output
        </h3>

        <CodeBlock
          code={`Primary process: 1200
Worker started: 1201
Worker started: 1202
Worker started: 1203
Worker started: 1204`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          When you send requests to port 3000, different workers may
          handle those requests. The actual number of workers depends
          on the available CPU parallelism.
        </p>
      </section>

      {/* 5 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          5. Important Cluster Properties & Methods
        </h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm text-left">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">Property / Method</th>
                <th className="p-3">Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              {[
                ["cluster.isPrimary", "Checks whether the process is primary."],
                ["cluster.isWorker", "Checks whether the process is a worker."],
                ["cluster.fork()", "Creates a new worker process."],
                ["cluster.workers", "Provides access to active workers."],
                ["cluster.on('exit')", "Listens when a worker exits."],
                ["worker.process.pid", "Gets the worker process ID."],
                ["worker.kill()", "Terminates a worker process."],
                ["worker.send()", "Sends a message to a worker."],
              ].map(([name, purpose]) => (
                <tr key={name}>
                  <td className="p-3 font-mono text-[var(--primary-color)]">
                    {name}
                  </td>
                  <td className="p-3 text-[var(--text-secondary)]">
                    {purpose}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 6 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          6. Worker Restart
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          If a worker crashes, the primary process can detect its exit
          and create a replacement worker.
        </p>

        <CodeBlock
          code={`cluster.on("exit", (worker, code, signal) => {
  console.log(\`Worker \${worker.process.pid} died\`);

  cluster.fork();
});`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
          <p className="font-semibold text-[var(--primary-color)]">
            Important
          </p>
          <p className="text-sm leading-6 text-[var(--text-secondary)]">
            Restarting workers does not automatically recover their
            in-memory data. Shared or persistent data should be stored
            in a database or another shared storage system.
          </p>
        </div>
      </section>

      {/* 7 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          7. Cluster vs Worker Threads
        </h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm text-left">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">Cluster</th>
                <th className="p-3">Worker Threads</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              <tr>
                <td className="p-3">Creates separate processes.</td>
                <td className="p-3">Creates separate threads.</td>
              </tr>
              <tr>
                <td className="p-3">Each worker has separate memory.</td>
                <td className="p-3">Can share memory using SharedArrayBuffer.</td>
              </tr>
              <tr>
                <td className="p-3">Useful for scaling server requests.</td>
                <td className="p-3">Useful for CPU-intensive JavaScript tasks.</td>
              </tr>
              <tr>
                <td className="p-3">Higher process overhead.</td>
                <td className="p-3">Generally lower overhead than processes.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 8 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          8. Important Points to Remember
        </h2>

        <ul className="list-disc space-y-2 pl-6 leading-7 text-[var(--text-secondary)]">
          <li>Cluster is a built-in Node.js module.</li>
          <li>It creates multiple worker processes.</li>
          <li>Each worker has its own event loop and memory.</li>
          <li>Workers can share the same server port.</li>
          <li>Primary process manages worker creation and lifecycle.</li>
          <li>Worker processes do not automatically share application memory.</li>
          <li>Cluster is useful for scaling network servers across CPU cores.</li>
        </ul>
      </section>

      {/* Interview Questions */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          9. Interview Questions
        </h2>

        <div className="space-y-4">
          {[
            [
              "What is the Cluster module in Node.js?",
              "It allows a Node.js application to create multiple worker processes to utilize multiple CPU cores."
            ],
            [
              "What is the difference between Primary and Worker processes?",
              "The Primary process manages workers, while worker processes execute the application code."
            ],
            [
              "Can multiple workers listen on the same port?",
              "Yes. Cluster supports sharing a server port among workers."
            ],
            [
              "Does Cluster share memory between workers?",
              "No. Each worker is a separate process with its own memory."
            ],
            [
              "What happens when a worker crashes?",
              "The Primary process can detect its exit and create a replacement worker."
            ],
            [
              "What is the difference between Cluster and Worker Threads?",
              "Cluster creates separate processes, whereas Worker Threads create separate threads within the same process."
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
          Node.js Performance Optimization
        </h3>
        <p className="text-sm text-[var(--text-secondary)]">
          Learn techniques to improve Node.js application performance.
        </p>
      </div>

    </div>
  );
}

export default ClusterModule;