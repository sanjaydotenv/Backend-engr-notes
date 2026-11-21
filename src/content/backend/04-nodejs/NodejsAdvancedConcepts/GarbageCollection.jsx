import CodeBlock from "../../../../components/common/CodeBlock";

function GarbageCollection() {
  return (
    <div className="space-y-10 text-[var(--text-primary)]">

      {/* Header */}
      <div className="space-y-3">
        <p className="text-sm font-semibold tracking-wider text-[var(--primary-color)]">
          NODE.JS ADVANCED CONCEPTS / 07
        </p>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Garbage Collection in Node.js
        </h1>

        <p className="text-lg leading-7 text-[var(--text-secondary)]">
          Understand how V8 automatically identifies and removes unused
          objects to manage memory efficiently.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          1. What is Garbage Collection?
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Garbage Collection (GC) is an automatic memory management
          process that identifies objects that are no longer reachable
          and reclaims their memory.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          Node.js uses the V8 JavaScript engine, which automatically
          performs garbage collection. Developers generally don't need
          to manually free object memory.
        </p>

        <CodeBlock
          code={`let user = {
  name: "Mayur",
  age: 19
};

// Object is reachable through user

user = null;

// Original object is now eligible
// for garbage collection`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
          <p className="font-semibold text-[var(--primary-color)]">
            Important
          </p>
          <p className="text-sm leading-6 text-[var(--text-secondary)]">
            An object becomes eligible for garbage collection when it
            is no longer reachable. It does not mean its memory is
            released immediately.
          </p>
        </div>
      </section>

      {/* 2 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          2. How Garbage Collection Works
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Garbage collectors determine whether objects can still be
          accessed by following references from known starting points
          called GC roots.
        </p>

        <h3 className="text-lg font-semibold">
          GC Roots
        </h3>

        <p className="leading-7 text-[var(--text-secondary)]">
          GC Roots are starting references from which the garbage
          collector checks object reachability.
        </p>

        <ul className="list-disc space-y-2 pl-6 leading-7 text-[var(--text-secondary)]">
          <li>Active function execution contexts.</li>
          <li>Global variables and references.</li>
          <li>References maintained by the JavaScript engine.</li>
          <li>Other active runtime references.</li>
        </ul>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 space-y-3">
          <div className="rounded-lg border border-[var(--primary-color)] bg-[var(--primary-soft)] p-3 text-center font-semibold">
            GC Roots
          </div>

          <div className="text-center text-[var(--primary-color)]">
            ↓
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] p-3 text-center">
              <p className="font-semibold">Reachable Object</p>
              <p className="text-xs text-[var(--text-muted)]">
                Memory retained
              </p>
            </div>

            <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] p-3 text-center">
              <p className="font-semibold">Unreachable Object</p>
              <p className="text-xs text-[var(--text-muted)]">
                Eligible for GC
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          3. Mark-and-Sweep Algorithm
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Mark-and-Sweep is a fundamental garbage collection technique.
          It identifies reachable objects and reclaims memory occupied
          by unreachable objects.
        </p>

        <h3 className="text-lg font-semibold">
          Step 1: Mark
        </h3>

        <p className="leading-7 text-[var(--text-secondary)]">
          The garbage collector starts from GC Roots and marks all
          reachable objects.
        </p>

        <h3 className="text-lg font-semibold">
          Step 2: Sweep
        </h3>

        <p className="leading-7 text-[var(--text-secondary)]">
          It identifies unmarked objects and reclaims their memory.
        </p>

        <CodeBlock
          code={`let user = {
  name: "Mayur"
};

let product = {
  title: "Laptop"
};

// Both objects are reachable

user = null;

// User object becomes unreachable
// Product object is still reachable`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
          <p className="font-semibold text-[var(--primary-color)]">
            Remember
          </p>
          <p className="text-sm leading-6 text-[var(--text-secondary)]">
            Mark identifies reachable objects. Sweep reclaims
            unreachable objects.
          </p>
        </div>
      </section>

      {/* 4 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          4. Generational Garbage Collection
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          V8 uses generational garbage collection. It divides the
          JavaScript heap into different spaces based on object lifetime.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          The main idea is that most newly created objects become
          unreachable quickly, while some objects survive for a longer
          time.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
            <h3 className="font-semibold text-[var(--primary-color)]">
              Young Generation
            </h3>
            <ul className="list-disc pl-5 text-sm leading-7 text-[var(--text-secondary)]">
              <li>Stores newly created objects.</li>
              <li>Objects are collected frequently.</li>
              <li>Short-lived objects are reclaimed here.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
            <h3 className="font-semibold text-[var(--primary-color)]">
              Old Generation
            </h3>
            <ul className="list-disc pl-5 text-sm leading-7 text-[var(--text-secondary)]">
              <li>Stores longer-lived objects.</li>
              <li>Contains promoted objects.</li>
              <li>Collected using major GC techniques.</li>
            </ul>
          </div>
        </div>

        <p className="leading-7 text-[var(--text-secondary)]">
          Objects that survive young-generation collections may be
          promoted to the old generation.
        </p>
      </section>

      {/* 5 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          5. Minor GC and Major GC
        </h2>

        <div className="space-y-4">
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
            <h3 className="text-lg font-semibold">
              Minor GC
            </h3>
            <p className="text-sm leading-7 text-[var(--text-secondary)]">
              Minor GC primarily collects garbage from the Young
              Generation. It generally runs more frequently and is
              designed to handle short-lived objects efficiently.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
            <h3 className="text-lg font-semibold">
              Major GC
            </h3>
            <p className="text-sm leading-7 text-[var(--text-secondary)]">
              Major GC collects garbage from the Old Generation.
              It handles longer-lived objects and can involve more
              expensive memory management work.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm text-left">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">Minor GC</th>
                <th className="p-3">Major GC</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              <tr>
                <td className="p-3">Primarily Young Generation.</td>
                <td className="p-3">Primarily Old Generation.</td>
              </tr>
              <tr>
                <td className="p-3">Generally more frequent.</td>
                <td className="p-3">Generally less frequent.</td>
              </tr>
              <tr>
                <td className="p-3">Usually handles smaller object sets.</td>
                <td className="p-3">Can involve more extensive heap work.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 6 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          6. Stop-the-World and Incremental GC
        </h2>

        <h3 className="text-lg font-semibold">
          Stop-the-World
        </h3>

        <p className="leading-7 text-[var(--text-secondary)]">
          During some garbage collection phases, JavaScript execution
          is paused so the garbage collector can safely perform its work.
          These pauses are called Stop-the-World pauses.
        </p>

        <h3 className="text-lg font-semibold">
          Incremental Garbage Collection
        </h3>

        <p className="leading-7 text-[var(--text-secondary)]">
          Instead of doing all the work in one long operation, the
          garbage collector divides some tasks into smaller steps.
          This helps reduce long execution pauses.
        </p>

        <h3 className="text-lg font-semibold">
          Concurrent Garbage Collection
        </h3>

        <p className="leading-7 text-[var(--text-secondary)]">
          Some garbage collection work can run concurrently with
          JavaScript execution using background threads.
        </p>

        <p className="text-sm text-[var(--text-muted)]">
          V8 uses a combination of techniques to reduce garbage
          collection pauses. Not every GC phase is incremental or concurrent.
        </p>
      </section>

      {/* 7 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          7. Memory Leak and Garbage Collection
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Garbage Collection cannot remove an object if it is still
          reachable, even when the application no longer needs it.
          This is one of the main reasons memory leaks occur.
        </p>

        <h3 className="text-lg font-semibold">
          Example
        </h3>

        <CodeBlock
          code={`const cache = [];

function storeData(data) {
  cache.push(data);
}

storeData({ name: "Mayur" });
storeData({ name: "Rahul" });
storeData({ name: "Aman" });

// Cache keeps references to all objects.
// GC cannot collect these objects while
// they remain reachable through cache.`}
        />

        <h3 className="text-lg font-semibold">
          Solution
        </h3>

        <CodeBlock
          code={`const cache = [];

function storeData(data) {
  cache.push(data);

  if (cache.length > 100) {
    cache.shift();
  }
}`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          By limiting the cache, old references are removed and
          their objects can become eligible for garbage collection
          if no other references exist.
        </p>
      </section>

      {/* 8 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          8. Can We Manually Trigger Garbage Collection?
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Normally, V8 decides when garbage collection should run.
          Developers do not need to trigger it manually.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          For debugging and testing, Node.js can expose the garbage
          collector using the <code className="text-[var(--primary-color)]">--expose-gc</code> flag.
        </p>

        <CodeBlock
          code={`node --expose-gc app.js`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Inside the application:
        </p>

        <CodeBlock
          code={`if (global.gc) {
  global.gc();
}`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
          <p className="font-semibold text-[var(--primary-color)]">
            Important
          </p>
          <p className="text-sm leading-6 text-[var(--text-secondary)]">
            Manual GC is mainly useful for controlled testing and
            debugging. Avoid using it as a normal memory management
            strategy in production.
          </p>
        </div>
      </section>

      {/* 9 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          9. Important Points to Remember
        </h2>

        <ul className="list-disc space-y-2 pl-6 leading-7 text-[var(--text-secondary)]">
          <li>V8 automatically manages JavaScript memory.</li>
          <li>GC identifies objects that are no longer reachable.</li>
          <li>GC Roots are starting points for reachability checks.</li>
          <li>Mark-and-Sweep marks reachable objects and reclaims unreachable ones.</li>
          <li>Young Generation stores newly allocated objects.</li>
          <li>Long-lived objects may be promoted to Old Generation.</li>
          <li>Minor GC primarily handles Young Generation.</li>
          <li>Major GC primarily handles Old Generation.</li>
          <li>Garbage Collection does not automatically fix memory leaks.</li>
        </ul>
      </section>

      {/* Interview */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          10. Interview Questions
        </h2>

        <div className="space-y-4">
          {[
            [
              "What is Garbage Collection in Node.js?",
              "It is an automatic process in V8 that identifies unreachable objects and reclaims their memory."
            ],
            [
              "What is Mark-and-Sweep?",
              "It is a garbage collection technique that marks reachable objects and reclaims memory occupied by unmarked objects."
            ],
            [
              "What are GC Roots?",
              "They are starting references used by the garbage collector to determine which objects are reachable."
            ],
            [
              "What is Generational Garbage Collection?",
              "It divides heap objects into generations based on their lifetime, mainly Young and Old Generation."
            ],
            [
              "What is the difference between Minor GC and Major GC?",
              "Minor GC primarily collects the Young Generation, while Major GC primarily collects the Old Generation."
            ],
            [
              "What is Stop-the-World?",
              "It is a pause during which JavaScript execution is stopped while certain garbage collection work is performed."
            ],
            [
              "Can Garbage Collection prevent memory leaks?",
              "No. GC cannot reclaim objects that remain reachable, even if the application no longer needs them."
            ],
            [
              "Can we manually trigger Garbage Collection?",
              "Yes, for debugging and testing, using --expose-gc and global.gc()."
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
          Learn how to identify bottlenecks and improve application performance.
        </p>
      </div>

    </div>
  );
}

export default GarbageCollection;