import CodeBlock from "../../../../components/common/CodeBlock";

function MemoryManagement() {
  return (
    <div className="space-y-10 text-[var(--text-primary)]">

      {/* Header */}
      <div className="space-y-3">
        <p className="text-sm font-semibold tracking-wider text-[var(--primary-color)]">
          NODE.JS ADVANCED CONCEPTS / 06
        </p>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Memory Management in Node.js
        </h1>

        <p className="text-lg leading-7 text-[var(--text-secondary)]">
          Understand how Node.js allocates, uses, manages, and releases memory.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">1. What is Memory Management?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Memory Management is the process of allocating, using, and releasing
          memory while an application is running.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          Node.js uses the V8 JavaScript engine, which automatically manages
          memory allocation and garbage collection.
        </p>

        <CodeBlock
          code={`const username = "Mayur";
const age = 19;

const user = {
  name: username,
  age: age
};`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          When variables and objects are created, memory is used to store their
          values. When objects are no longer reachable, the garbage collector
          can reclaim their memory.
        </p>
      </section>

      {/* 2 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">2. Memory Areas in JavaScript</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          JavaScript memory is commonly explained using Stack and Heap.
          These describe different ways memory is used by the engine.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
            <h3 className="font-semibold text-[var(--primary-color)]">
              Stack Memory
            </h3>
            <ul className="list-disc pl-5 text-sm leading-7 text-[var(--text-secondary)]">
              <li>Manages function execution contexts.</li>
              <li>Stores local execution information.</li>
              <li>Works in a last-in, first-out manner.</li>
              <li>Function calls create stack frames.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
            <h3 className="font-semibold text-[var(--primary-color)]">
              Heap Memory
            </h3>
            <ul className="list-disc pl-5 text-sm leading-7 text-[var(--text-secondary)]">
              <li>Stores dynamically allocated objects.</li>
              <li>Used for objects, arrays, and functions.</li>
              <li>Managed by the JavaScript engine.</li>
              <li>Garbage collection reclaims unused objects.</li>
            </ul>
          </div>
        </div>

        <CodeBlock
          code={`function createUser() {
  const name = "Mayur";

  const user = {
    age: 19
  };

  return user;
}

const result = createUser();`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          The function's execution context is removed after it returns.
          However, the returned object remains reachable through
          <code className="mx-1 text-[var(--primary-color)]">result</code>,
          so it cannot be garbage-collected.
        </p>

        <p className="text-sm text-[var(--text-muted)]">
          Note: Stack and Heap are useful conceptual models. Actual memory
          representation and allocation details are implementation-dependent.
        </p>
      </section>

      {/* 3 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">3. V8 Memory Structure</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          V8 manages JavaScript memory using different memory spaces. The
          JavaScript heap is one of its important memory areas.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 space-y-3">
          <div className="rounded-lg border border-[var(--primary-color)] bg-[var(--primary-soft)] p-3 text-center font-semibold">
            V8 Memory
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] p-3 text-center">
              <p className="font-semibold">Stack</p>
              <p className="text-xs text-[var(--text-muted)]">
                Function execution
              </p>
            </div>

            <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] p-3 text-center space-y-2">
              <p className="font-semibold">Heap</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <span className="rounded bg-[var(--bg-tertiary)] p-2">
                  Young Generation
                </span>
                <span className="rounded bg-[var(--bg-tertiary)] p-2">
                  Old Generation
                </span>
                <span className="rounded bg-[var(--bg-tertiary)] p-2">
                  Large Objects
                </span>
                <span className="rounded bg-[var(--bg-tertiary)] p-2">
                  Other Spaces
                </span>
              </div>
            </div>
          </div>
        </div>

        <p className="leading-7 text-[var(--text-secondary)]">
          V8 uses generational garbage collection. Newly created objects
          generally start in the Young Generation. Objects that survive
          garbage collection may be promoted to the Old Generation.
        </p>
      </section>

      {/* 4 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">4. Memory Allocation</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Memory allocation means reserving memory to store data while
          executing a program.
        </p>

        <CodeBlock
          code={`// Primitive values
const age = 19;
const name = "Mayur";

// Reference values
const user = {
  name: "Mayur",
  age: 19
};

const skills = ["Node.js", "React"];`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Primitive values and objects are handled differently by JavaScript.
          Variables hold values or references according to the language's
          semantics. Objects are dynamically allocated and accessed through
          references.
        </p>
      </section>

      {/* 5 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">5. Memory Usage in Node.js</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Node.js provides the <code className="text-[var(--primary-color)]">process.memoryUsage()</code>
          method to inspect memory consumption.
        </p>

        <CodeBlock
          code={`const memory = process.memoryUsage();

console.log(memory);`}
        />

        <h3 className="text-lg font-semibold">Important Properties</h3>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm text-left">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">Property</th>
                <th className="p-3">Meaning</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              {[
                ["rss", "Total memory occupied by the process in RAM."],
                ["heapTotal", "Total memory allocated for the V8 heap."],
                ["heapUsed", "Memory currently used in the V8 heap."],
                ["external", "Memory used by C++ objects bound to JavaScript objects."],
                ["arrayBuffers", "Memory used by ArrayBuffer and SharedArrayBuffer."],
              ].map(([name, description]) => (
                <tr key={name}>
                  <td className="p-3 font-mono text-[var(--primary-color)]">
                    {name}
                  </td>
                  <td className="p-3 text-[var(--text-secondary)]">
                    {description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold">Convert Memory into MB</h3>

        <CodeBlock
          code={`const memory = process.memoryUsage();

for (const [key, value] of Object.entries(memory)) {
  console.log(
    \`\${key}: \${(value / 1024 / 1024).toFixed(2)} MB\`
  );
}`}
        />
      </section>

      {/* 6 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">6. Memory Leak</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          A Memory Leak occurs when an application unnecessarily keeps
          references to objects that are no longer needed. Because those
          objects remain reachable, garbage collection cannot reclaim them.
        </p>

        <h3 className="text-lg font-semibold">Common Causes</h3>

        <ul className="list-disc space-y-2 pl-6 leading-7 text-[var(--text-secondary)]">
          <li>Unnecessary global variables.</li>
          <li>Event listeners that are never removed.</li>
          <li>Timers that continue running unnecessarily.</li>
          <li>Closures retaining unused data.</li>
          <li>Unbounded caches or collections.</li>
        </ul>

        <h3 className="text-lg font-semibold">Example: Memory Leak</h3>

        <CodeBlock
          code={`const users = [];

function addUser(user) {
  users.push(user);
}

// Every call keeps adding data.
// The array continues growing.
setInterval(() => {
  addUser({
    name: "Mayur",
    data: new Array(10000).fill("data")
  });
}, 1000);`}
        />

        <h3 className="text-lg font-semibold">Better Approach</h3>

        <CodeBlock
          code={`const users = new Map();
const MAX_USERS = 100;

function addUser(id, user) {
  users.set(id, user);

  if (users.size > MAX_USERS) {
    const oldestKey = users.keys().next().value;
    users.delete(oldestKey);
  }
}`}
        />

        <p className="text-sm text-[var(--text-muted)]">
          This example limits collection growth. A real application should
          choose an eviction strategy according to its caching requirements.
        </p>
      </section>

      {/* 7 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">7. Memory Optimization</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Memory optimization helps reduce unnecessary memory usage and
          prevents memory leaks in long-running applications.
        </p>

        <ul className="list-disc space-y-2 pl-6 leading-7 text-[var(--text-secondary)]">
          <li>Remove unnecessary event listeners.</li>
          <li>Clear unused timers using clearInterval or clearTimeout.</li>
          <li>Limit cache size instead of storing unlimited data.</li>
          <li>Use streams when processing large files.</li>
          <li>Avoid keeping unnecessary references to large objects.</li>
          <li>Monitor memory usage in production.</li>
        </ul>
      </section>

      {/* 8 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">8. Increase V8 Heap Limit</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Node.js allows us to increase the maximum V8 heap size using
          the <code className="text-[var(--primary-color)]">--max-old-space-size</code>
          flag.
        </p>

        <CodeBlock
          code={`node --max-old-space-size=4096 app.js`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          The value is specified in megabytes. In this example, the
          Old Generation heap limit is configured to approximately 4 GB.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
          <p className="font-semibold text-[var(--primary-color)]">
            Important
          </p>
          <p className="text-sm leading-6 text-[var(--text-secondary)]">
            Increasing the heap limit does not fix memory leaks. It only
            allows the application to use more heap memory before reaching
            the configured limit.
          </p>
        </div>
      </section>

      {/* Interview */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">9. Interview Questions</h2>

        <div className="space-y-4">
          {[
            [
              "What is Memory Management in Node.js?",
              "It is the process of allocating, using, and releasing memory. V8 manages JavaScript memory automatically."
            ],
            [
              "What is the difference between Stack and Heap?",
              "Stack manages function execution contexts, while Heap is used for dynamically allocated objects."
            ],
            [
              "What is a Memory Leak?",
              "A memory leak occurs when unnecessary references keep objects reachable, preventing garbage collection."
            ],
            [
              "What is process.memoryUsage()?",
              "It returns memory statistics such as RSS, heapTotal, heapUsed, external, and arrayBuffers."
            ],
            [
              "What is the difference between heapTotal and heapUsed?",
              "heapTotal is the total V8 heap memory allocated, while heapUsed is the portion currently being used."
            ],
            [
              "How can you prevent memory leaks?",
              "Remove unused listeners, clear timers, limit caches, and avoid unnecessary object references."
            ],
            [
              "How can you increase the V8 heap limit?",
              "Use the --max-old-space-size flag when starting Node.js."
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
          Garbage Collection in Node.js
        </h3>
        <p className="text-sm text-[var(--text-secondary)]">
          Understand how V8 identifies and removes unreachable objects.
        </p>
      </div>

    </div>
  );
}

export default MemoryManagement;