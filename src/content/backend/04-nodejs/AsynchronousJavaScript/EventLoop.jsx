import React from "react";
import CodeBlock from "../../../../components/common/CodeBlock";
import {
  FiRefreshCw,
  FiLayers,
  FiClock,
  FiArrowRight,
  FiCheckCircle,
  FiAlertCircle,
  FiCpu,
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
    className={`rounded-xl border p-4 text-center min-w-0 ${
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

const EventLoop = () => {
  return (
    <article className="max-w-4xl mx-auto pb-16">

      {/* HEADER */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-xs text-[var(--primary-color)] font-semibold mb-3">
          <FiRefreshCw />
          NODE.JS / ASYNCHRONOUS JAVASCRIPT
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
          Event Loop
        </h1>

        <p className="text-base text-[var(--text-secondary)] leading-relaxed">
          The Event Loop is a mechanism that allows JavaScript to handle
          asynchronous operations without blocking the main thread.
        </p>
      </div>

      {/* INTRODUCTION */}
      <section className="mb-12">
        <SectionHeading
          number="01"
          title="What is the Event Loop?"
          subtitle="Understanding how JavaScript executes asynchronous callbacks."
        />

        <p className="text-sm text-[var(--text-secondary)] leading-7 mb-4">
          JavaScript executes synchronous code using the Call Stack.
          But when asynchronous operations like timers or I/O operations
          are involved, their callbacks cannot execute immediately.
        </p>

        <p className="text-sm text-[var(--text-secondary)] leading-7 mb-4">
          The Event Loop continuously checks whether the Call Stack is
          empty. When it becomes empty, the Event Loop coordinates the
          execution of pending callbacks.
        </p>

        <div className="rounded-xl border border-[var(--primary-color)]/30 bg-[var(--primary-soft)] p-4">
          <div className="flex items-center gap-2 mb-2 text-[var(--primary-color)]">
            <FiCheckCircle />
            <h4 className="text-sm font-semibold">Remember</h4>
          </div>

          <p className="text-sm text-[var(--text-secondary)] leading-6">
            The Event Loop does not execute JavaScript functions itself.
            It coordinates when queued callbacks can be executed by the
            Call Stack.
          </p>
        </div>
      </section>

      {/* WHY */}
      <section className="mb-12">
        <SectionHeading
          number="02"
          title="Why do we need the Event Loop?"
        />

        <p className="text-sm text-[var(--text-secondary)] leading-7 mb-4">
          Consider a situation where JavaScript has to wait for a timer
          or an API response.
        </p>

        <p className="text-sm text-[var(--text-secondary)] leading-7 mb-4">
          If JavaScript blocks its main thread while waiting, other
          operations cannot execute. This would make applications slow
          and unresponsive.
        </p>

        <CodeBlock
          code={`console.log("Start");

setTimeout(() => {
  console.log("Timer completed");
}, 2000);

console.log("End");`}
        />

        <div className="mt-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] p-4">
          <p className="text-xs font-semibold text-[var(--primary-color)] mb-3">
            OUTPUT
          </p>

          <CodeBlock
            code={`Start
End
Timer completed`}
          />

          <p className="text-xs text-[var(--text-muted)] mt-3">
            JavaScript does not wait for the timer to finish before
            executing the next synchronous statement.
          </p>
        </div>
      </section>

      {/* WORKING */}
      <section className="mb-12">
        <SectionHeading
          number="03"
          title="How does the Event Loop work?"
          subtitle="Understand the relationship between the main components."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
          <FlowBox
            title="Call Stack"
            description="Executes JavaScript functions"
            active
          />

          <FlowBox
            title="Web APIs / Node.js APIs"
            description="Handle asynchronous operations"
          />

          <FlowBox
            title="Task Queues"
            description="Store callbacks waiting for execution"
          />

          <FlowBox
            title="Event Loop"
            description="Coordinates callback execution"
            active
          />
        </div>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3">
            Simplified execution flow
          </h4>

          <div className="flex flex-col items-center gap-2">
            <FlowBox
              title="1. Execute synchronous code"
              description="Functions enter the Call Stack"
            />

            <FiArrowRight className="rotate-90 text-[var(--primary-color)]" />

            <FlowBox
              title="2. Start asynchronous operation"
              description="Timer or I/O operation is initiated"
            />

            <FiArrowRight className="rotate-90 text-[var(--primary-color)]" />

            <FlowBox
              title="3. Callback enters a queue"
              description="After the operation completes"
            />

            <FiArrowRight className="rotate-90 text-[var(--primary-color)]" />

            <FlowBox
              title="4. Event Loop checks the Call Stack"
              description="Waits until JavaScript can execute another callback"
              active
            />

            <FiArrowRight className="rotate-90 text-[var(--primary-color)]" />

            <FlowBox
              title="5. Callback executes"
              description="The callback is pushed onto the Call Stack"
              active
            />
          </div>
        </div>

        <p className="text-xs text-[var(--text-muted)] mt-3">
          Note: This is a simplified model. Browsers and Node.js have
          different internal event-loop implementations.
        </p>
      </section>

      {/* DRY RUN */}
      <section className="mb-12">
        <SectionHeading
          number="04"
          title="Event Loop Dry Run"
          subtitle="Let's understand the execution order with a practical example."
        />

        <CodeBlock
          code={`console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

console.log("3");`}
        />

        <div className="mt-5 space-y-3">
          {[
            {
              step: "Step 1",
              title: 'console.log("1")',
              description: "Executes immediately from the Call Stack.",
              output: "1",
            },
            {
              step: "Step 2",
              title: "setTimeout()",
              description:
                "Registers a timer. Its callback becomes eligible after the timer expires.",
              output: "Timer registered",
            },
            {
              step: "Step 3",
              title: 'console.log("3")',
              description: "Executes immediately because it is synchronous.",
              output: "3",
            },
            {
              step: "Step 4",
              title: "Timer callback",
              description:
                "Once the Call Stack is empty, the callback can execute.",
              output: "2",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex gap-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4"
            >
              <div className="shrink-0 w-8 h-8 rounded-lg bg-[var(--primary-soft)] text-[var(--primary-color)] flex items-center justify-center text-xs font-bold">
                {index + 1}
              </div>

              <div className="min-w-0">
                <p className="text-xs text-[var(--primary-color)] font-semibold mb-1">
                  {item.step}
                </p>

                <h4 className="text-sm font-semibold text-[var(--text-primary)]">
                  {item.title}
                </h4>

                <p className="text-xs text-[var(--text-muted)] leading-6 mt-1">
                  {item.description}
                </p>

                <p className="text-xs text-[var(--text-secondary)] mt-2">
                  Result: {item.output}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-xl border border-[var(--primary-color)]/30 bg-[var(--primary-soft)] p-4">
          <p className="text-xs text-[var(--primary-color)] font-semibold mb-2">
            FINAL OUTPUT
          </p>

          <CodeBlock
            code={`1
3
2`}
          />
        </div>
      </section>

      {/* SET TIMEOUT */}
      <section className="mb-12">
        <SectionHeading
          number="05"
          title="Why setTimeout(fn, 0) does not execute immediately?"
        />

        <p className="text-sm text-[var(--text-secondary)] leading-7 mb-4">
          A common misconception is that setTimeout with 0 milliseconds
          executes its callback immediately.
        </p>

        <p className="text-sm text-[var(--text-secondary)] leading-7 mb-4">
          Actually, 0 milliseconds means the callback becomes eligible
          after the timer threshold. It still has to wait for the current
          synchronous execution to finish.
        </p>

        <CodeBlock
          code={`console.log("Start");

setTimeout(() => {
  console.log("Timer");
}, 0);

console.log("End");

// Output:
// Start
// End
// Timer`}
        />

        <div className="flex gap-3 mt-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] p-4">
          <FiAlertCircle className="text-[var(--primary-color)] shrink-0 mt-1" />

          <p className="text-xs text-[var(--text-muted)] leading-6">
            setTimeout specifies a minimum delay, not an exact execution
            time. A busy Call Stack can delay its callback further.
          </p>
        </div>
      </section>

      {/* NODE JS */}
      <section className="mb-12">
        <SectionHeading
          number="06"
          title="Event Loop in Node.js"
          subtitle="Node.js uses libuv to manage its event-loop and asynchronous I/O operations."
        />

        <p className="text-sm text-[var(--text-secondary)] leading-7 mb-4">
          In Node.js, the Event Loop is implemented with the help of
          libuv. It allows Node.js to handle timers, I/O callbacks,
          networking and other asynchronous operations.
        </p>

        <CodeBlock
          code={`const fs = require("fs");

console.log("Start");

fs.readFile("example.txt", "utf8", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }

  console.log("File reading completed");
});

console.log("End");`}
        />

        <div className="mt-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <p className="text-sm font-semibold text-[var(--text-primary)] mb-3">
            Expected output
          </p>

          <CodeBlock
            code={`Start
End
File reading completed`}
          />

          <p className="text-xs text-[var(--text-muted)] mt-3 leading-6">
            The file operation is handled asynchronously. Its callback
            runs after the I/O operation completes and JavaScript can
            execute it.
          </p>
        </div>
      </section>

      {/* IMPORTANT */}
      <section className="mb-12">
        <SectionHeading
          number="07"
          title="Important Points"
        />

        <div className="space-y-3">
          {[
            "JavaScript executes synchronous code using the Call Stack.",
            "The Event Loop coordinates asynchronous callback execution.",
            "Callbacks execute only when the Call Stack can accept them.",
            "setTimeout(fn, 0) does not mean immediate execution.",
            "Node.js uses libuv for its event-loop and asynchronous I/O operations.",
          ].map((point, index) => (
            <div
              key={index}
              className="flex gap-3 items-start rounded-lg bg-[var(--bg-secondary)] p-3"
            >
              <FiCheckCircle className="text-[var(--primary-color)] shrink-0 mt-0.5" />

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
          number="08"
          title="Important Interview Questions"
          subtitle="Frequently asked questions you should be able to answer."
        />

        <div className="space-y-4">
          {[
            {
              question: "What is the Event Loop in JavaScript?",
              answer:
                "The Event Loop coordinates the execution of asynchronous callbacks by checking whether the Call Stack is empty.",
            },
            {
              question: "Is JavaScript single-threaded?",
              answer:
                "JavaScript execution is generally single-threaded in its main execution context. However, the runtime can use other threads and APIs for asynchronous operations.",
            },
            {
              question: "Does the Event Loop execute callbacks?",
              answer:
                "No. It coordinates when callbacks can be executed. The callbacks themselves execute on the Call Stack.",
            },
            {
              question: "Why does setTimeout(fn, 0) not execute immediately?",
              answer:
                "Because the callback must wait until the current synchronous code finishes and the Call Stack becomes available.",
            },
            {
              question: "What is the role of libuv in Node.js?",
              answer:
                "libuv provides the event-loop implementation and supports asynchronous I/O operations, timers and thread-pool functionality in Node.js.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4"
            >
              <div className="flex gap-3">
                <span className="text-xs font-bold text-[var(--primary-color)]">
                  Q{index + 1}.
                </span>

                <h4 className="text-sm font-semibold text-[var(--text-primary)]">
                  {item.question}
                </h4>
              </div>

              <div className="ml-7 mt-3">
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
          Callback Queue
        </h3>

        <p className="text-sm text-[var(--text-muted)] mt-2 leading-6">
          Understand where asynchronous callbacks wait before they are
          executed by the Call Stack.
        </p>
      </div>
    </article>
  );
};

export default EventLoop;