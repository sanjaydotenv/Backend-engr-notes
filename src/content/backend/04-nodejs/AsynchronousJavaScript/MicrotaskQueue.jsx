import React from "react";
import CodeBlock from "../../../../components/common/CodeBlock";
import {
  FiLayers,
  FiArrowDown,
  FiCheckCircle,
  FiAlertCircle,
  FiZap,
} from "react-icons/fi";

const SectionHeading = ({ number, title, subtitle }) => (
  <div className="mb-5">
    <div className="flex items-center gap-3 mb-2">
      <span className="text-xs font-bold text-[var(--primary-color)]">
        {number}
      </span>

      <h2 className="text-xl font-bold text-[var(--text-primary)]">
        {title}
      </h2>
    </div>

    {subtitle && (
      <p className="text-sm text-[var(--text-muted)] leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);

const FlowBox = ({ title, description, active }) => (
  <div
    className={`rounded-xl border p-4 text-center ${
      active
        ? "border-[var(--primary-color)] bg-[var(--primary-soft)]"
        : "border-[var(--border-color)] bg-[var(--bg-secondary)]"
    }`}
  >
    <h4 className="text-sm font-semibold text-[var(--text-primary)]">
      {title}
    </h4>

    {description && (
      <p className="text-xs text-[var(--text-muted)] mt-1">
        {description}
      </p>
    )}
  </div>
);

const MicrotaskQueue = () => {
  const questions = [
    {
      question: "What is the Microtask Queue?",
      answer:
        "It is a queue that stores microtasks such as Promise .then(), .catch(), and .finally() callbacks until they can execute.",
    },
    {
      question: "Which has higher priority: Microtask Queue or Task Queue?",
      answer:
        "In browsers, after a task finishes, the microtask queue is processed before the next task begins.",
    },
    {
      question: "Are Promises synchronous or asynchronous?",
      answer:
        "Promise executors run synchronously, but their .then(), .catch(), and .finally() handlers execute asynchronously as microtasks.",
    },
    {
      question: "What is Microtask Starvation?",
      answer:
        "It happens when continuously adding microtasks prevents the runtime from moving on to other tasks, potentially delaying timers and rendering.",
    },
  ];

  return (
    <article className="max-w-4xl mx-auto pb-16">

      {/* HEADER */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-xs text-[var(--primary-color)] font-semibold mb-3">
          <FiLayers />
          NODE.JS / ASYNCHRONOUS JAVASCRIPT
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
          Microtask Queue
        </h1>

        <p className="text-base text-[var(--text-secondary)] leading-relaxed">
          The Microtask Queue stores high-priority asynchronous callbacks,
          especially Promise handlers, that are executed after the current
          JavaScript task finishes.
        </p>
      </div>

      {/* INTRODUCTION */}
      <section className="mb-12">
        <SectionHeading
          number="01"
          title="What is the Microtask Queue?"
          subtitle="Understanding how Promise callbacks are scheduled."
        />

        <p className="text-sm text-[var(--text-secondary)] leading-7 mb-4">
          JavaScript runtimes use different scheduling mechanisms for
          asynchronous operations. Promise handlers are scheduled as
          microtasks instead of regular tasks.
        </p>

        <p className="text-sm text-[var(--text-secondary)] leading-7">
          After the current synchronous code finishes, the runtime
          processes pending microtasks before moving to the next regular
          task.
        </p>

        <div className="mt-5 rounded-xl border border-[var(--primary-color)]/30 bg-[var(--primary-soft)] p-4">
          <div className="flex items-center gap-2 text-[var(--primary-color)] mb-2">
            <FiCheckCircle />
            <h4 className="text-sm font-semibold">Remember</h4>
          </div>

          <p className="text-sm text-[var(--text-secondary)] leading-6">
            Promise handlers such as .then(), .catch(), and .finally()
            are scheduled as microtasks.
          </p>
        </div>
      </section>

      {/* EXAMPLE */}
      <section className="mb-12">
        <SectionHeading
          number="02"
          title="Practical Example"
          subtitle="See how a Promise callback executes."
        />

        <CodeBlock
          code={`console.log("Start");

Promise.resolve().then(() => {
  console.log("Promise callback");
});

console.log("End");`}
        />

        <div className="mt-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <p className="text-xs font-semibold text-[var(--primary-color)] mb-3">
            OUTPUT
          </p>

          <CodeBlock
            code={`Start
End
Promise callback`}
          />

          <p className="text-xs text-[var(--text-muted)] mt-3 leading-6">
            The Promise handler waits until synchronous execution
            finishes. Then it executes as a microtask.
          </p>
        </div>
      </section>

      {/* WORKING */}
      <section className="mb-12">
        <SectionHeading
          number="03"
          title="How does the Microtask Queue work?"
          subtitle="Follow the execution flow."
        />

        <div className="flex flex-col items-center gap-2">
          <FlowBox
            title="Synchronous JavaScript"
            description="Executes on the Call Stack"
          />

          <FiArrowDown className="text-[var(--primary-color)]" />

          <FlowBox
            title="Promise Handler"
            description=".then(), .catch(), .finally()"
          />

          <FiArrowDown className="text-[var(--primary-color)]" />

          <FlowBox
            title="Microtask Queue"
            description="Stores pending microtasks"
            active
          />

          <FiArrowDown className="text-[var(--primary-color)]" />

          <FlowBox
            title="Microtask Checkpoint"
            description="Processes pending microtasks"
            active
          />

          <FiArrowDown className="text-[var(--primary-color)]" />

          <FlowBox
            title="Call Stack"
            description="Microtask callback executes"
          />
        </div>
      </section>

      {/* PRIORITY */}
      <section className="mb-12">
        <SectionHeading
          number="04"
          title="Microtask Queue vs Callback Queue"
          subtitle="Understand their execution priority in browsers."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
          <div className="rounded-xl border border-[var(--primary-color)]/40 bg-[var(--primary-soft)] p-4">
            <div className="flex items-center gap-2 text-[var(--primary-color)] mb-3">
              <FiZap />
              <h4 className="font-semibold text-sm">
                Microtask Queue
              </h4>
            </div>

            <p className="text-xs text-[var(--text-secondary)] leading-6">
              Promise handlers and queueMicrotask() callbacks.
            </p>

            <span className="inline-block mt-3 text-xs font-semibold text-[var(--primary-color)]">
              Processed first
            </span>
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
            <div className="flex items-center gap-2 text-[var(--text-primary)] mb-3">
              <FiLayers />
              <h4 className="font-semibold text-sm">
                Task Queue
              </h4>
            </div>

            <p className="text-xs text-[var(--text-muted)] leading-6">
              Timer callbacks and other scheduled tasks.
            </p>

            <span className="inline-block mt-3 text-xs font-semibold text-[var(--text-muted)]">
              Processed afterward
            </span>
          </div>
        </div>

        <CodeBlock
          code={`console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");`}
        />

        <div className="mt-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <p className="text-xs font-semibold text-[var(--primary-color)] mb-3">
            OUTPUT
          </p>

          <CodeBlock
            code={`Start
End
Promise
Timeout`}
          />

          <p className="text-xs text-[var(--text-muted)] mt-3 leading-6">
            Once synchronous execution finishes, the Promise microtask
            executes before the next timer task.
          </p>
        </div>
      </section>

      {/* MULTIPLE MICROTASKS */}
      <section className="mb-12">
        <SectionHeading
          number="05"
          title="Multiple Microtasks"
          subtitle="Microtasks added during execution are also processed."
        />

        <CodeBlock
          code={`console.log("Start");

Promise.resolve().then(() => {
  console.log("First");

  Promise.resolve().then(() => {
    console.log("Third");
  });
});

Promise.resolve().then(() => {
  console.log("Second");
});

console.log("End");`}
        />

        <div className="mt-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <p className="text-xs font-semibold text-[var(--primary-color)] mb-3">
            OUTPUT
          </p>

          <CodeBlock
            code={`Start
End
First
Second
Third`}
          />

          <p className="text-xs text-[var(--text-muted)] mt-3 leading-6">
            The first Promise schedules another microtask. That new
            microtask is added behind the already queued Second callback.
          </p>
        </div>
      </section>

      {/* MICROTASK STARVATION */}
      <section className="mb-12">
        <SectionHeading
          number="06"
          title="Microtask Starvation"
        />

        <p className="text-sm text-[var(--text-secondary)] leading-7 mb-4">
          Microtask Starvation occurs when microtasks continuously add
          more microtasks. The runtime may keep processing them without
          moving to the next task.
        </p>

        <CodeBlock
          code={`function repeat() {
  queueMicrotask(() => {
    console.log("Running microtask");
    repeat();
  });
}

repeat();

setTimeout(() => {
  console.log("Timer");
}, 0);`}
        />

        <div className="flex gap-3 mt-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <FiAlertCircle className="text-[var(--primary-color)] shrink-0 mt-1" />

          <p className="text-xs text-[var(--text-muted)] leading-6">
            This example continuously schedules microtasks and can
            prevent the timer from executing. Do not run it in normal
            application code.
          </p>
        </div>
      </section>

      {/* NODE JS NOTE */}
      <section className="mb-12">
        <SectionHeading
          number="07"
          title="Microtask Queue in Node.js"
        />

        <p className="text-sm text-[var(--text-secondary)] leading-7">
          Node.js also processes Promise handlers as microtasks.
          However, Node.js has additional scheduling behavior,
          including the process.nextTick() queue.
        </p>

        <CodeBlock
          code={`console.log("Start");

process.nextTick(() => {
  console.log("Next Tick");
});

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");`}
        />

        <div className="mt-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <p className="text-xs font-semibold text-[var(--primary-color)] mb-3">
            OUTPUT IN COMMONJS
          </p>

          <CodeBlock
            code={`Start
End
Next Tick
Promise`}
          />

          <p className="text-xs text-[var(--text-muted)] mt-3 leading-6">
            In this CommonJS example, process.nextTick() callbacks run
            before Promise microtasks at the end of the current
            JavaScript operation.
          </p>
        </div>
      </section>

      {/* IMPORTANT POINTS */}
      <section className="mb-12">
        <SectionHeading
          number="08"
          title="Important Points"
        />

        <div className="space-y-3">
          {[
            "Promise handlers execute as microtasks.",
            "queueMicrotask() directly schedules a microtask.",
            "In browsers, microtasks are processed before the next regular task.",
            "Microtasks are processed until the queue is empty.",
            "Continuous microtasks can delay timers and rendering.",
            "Node.js also has the process.nextTick() queue.",
          ].map((point, index) => (
            <div
              key={index}
              className="flex gap-3 items-start p-3 rounded-lg bg-[var(--bg-secondary)]"
            >
              <FiCheckCircle className="text-[var(--primary-color)] shrink-0 mt-1" />

              <p className="text-sm text-[var(--text-secondary)] leading-6">
                {point}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* INTERVIEW QUESTIONS */}
      <section className="mb-12">
        <SectionHeading
          number="09"
          title="Important Interview Questions"
          subtitle="Focus on these commonly asked questions."
        />

        <div className="space-y-4">
          {questions.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4"
            >
              <h4 className="text-sm font-semibold text-[var(--text-primary)]">
                <span className="text-[var(--primary-color)] mr-2">
                  Q{index + 1}.
                </span>
                {item.question}
              </h4>

              <div className="mt-3 ml-7">
                <p className="text-xs font-semibold text-[var(--primary-color)] mb-1">
                  Answer
                </p>

                <p className="text-sm text-[var(--text-secondary)] leading-7">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NEXT TOPIC */}
      <div className="rounded-xl border border-[var(--primary-color)]/30 bg-[var(--primary-soft)] p-5">
        <div className="flex items-center gap-2 text-[var(--primary-color)] mb-2">
          <FiLayers />
          <span className="text-xs font-bold tracking-wider">
            NEXT TOPIC
          </span>
        </div>

        <h3 className="text-lg font-bold text-[var(--text-primary)]">
          Callback Hell
        </h3>

        <p className="text-sm text-[var(--text-muted)] mt-2 leading-6">
          Understand how deeply nested callbacks make asynchronous
          code difficult to read, maintain and debug.
        </p>
      </div>
    </article>
  );
};

export default MicrotaskQueue;