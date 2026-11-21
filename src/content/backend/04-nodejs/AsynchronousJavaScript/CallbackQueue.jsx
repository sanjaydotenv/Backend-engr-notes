import React from "react";
import CodeBlock from "../../../../components/common/CodeBlock";
import {
  FiLayers,
  FiArrowDown,
  FiCheckCircle,
  FiAlertCircle,
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

const CallbackQueue = () => {
  const questions = [
    {
      question: "What is the Callback Queue?",
      answer:
        "The Callback Queue is a queue where eligible asynchronous callbacks wait until the Call Stack is available for execution.",
    },
    {
      question: "Who manages the Callback Queue?",
      answer:
        "The JavaScript runtime manages callback queues, while the Event Loop coordinates when queued callbacks can execute.",
    },
    {
      question: "Does setTimeout(fn, 0) execute immediately?",
      answer:
        "No. Its callback becomes eligible after the timer threshold and waits until synchronous execution finishes.",
    },
    {
      question: "Does the Callback Queue follow FIFO?",
      answer:
        "Within a standard task queue, tasks are generally processed in queue order. However, browser and Node.js scheduling have additional rules.",
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
          Callback Queue
        </h1>

        <p className="text-base text-[var(--text-secondary)] leading-relaxed">
          The Callback Queue is a queue where asynchronous callbacks wait
          until they can be executed by the JavaScript Call Stack.
        </p>
      </div>

      {/* INTRODUCTION */}
      <section className="mb-12">
        <SectionHeading
          number="01"
          title="What is the Callback Queue?"
          subtitle="Understanding where asynchronous callbacks wait."
        />

        <p className="text-sm text-[var(--text-secondary)] leading-7 mb-4">
          When an asynchronous operation completes, its callback does not
          necessarily execute immediately. It becomes eligible for
          execution and waits in an appropriate task queue.
        </p>

        <p className="text-sm text-[var(--text-secondary)] leading-7">
          The Event Loop checks whether the Call Stack is available.
          When it is safe to execute another task, the runtime schedules
          the callback for execution.
        </p>

        <div className="mt-5 rounded-xl border border-[var(--primary-color)]/30 bg-[var(--primary-soft)] p-4">
          <div className="flex items-center gap-2 text-[var(--primary-color)] mb-2">
            <FiCheckCircle />
            <h4 className="text-sm font-semibold">Remember</h4>
          </div>

          <p className="text-sm text-[var(--text-secondary)] leading-6">
            A callback does not enter the Call Stack directly while
            synchronous JavaScript is still executing.
          </p>
        </div>
      </section>

      {/* WORKING */}
      <section className="mb-12">
        <SectionHeading
          number="02"
          title="How does the Callback Queue work?"
          subtitle="Follow the execution flow."
        />

        <div className="flex flex-col items-center gap-2">
          <FlowBox
            title="Asynchronous Operation"
            description="Example: setTimeout()"
          />

          <FiArrowDown className="text-[var(--primary-color)]" />

          <FlowBox
            title="Operation Completes"
            description="Callback becomes eligible"
          />

          <FiArrowDown className="text-[var(--primary-color)]" />

          <FlowBox
            title="Callback Queue"
            description="Callback waits for execution"
            active
          />

          <FiArrowDown className="text-[var(--primary-color)]" />

          <FlowBox
            title="Event Loop"
            description="Coordinates callback execution"
            active
          />

          <FiArrowDown className="text-[var(--primary-color)]" />

          <FlowBox
            title="Call Stack"
            description="Callback executes"
          />
        </div>

        <p className="text-xs text-[var(--text-muted)] mt-4 leading-6">
          This is a simplified browser-style task execution flow.
          Node.js uses a more detailed event-loop phase system.
        </p>
      </section>

      {/* EXAMPLE */}
      <section className="mb-12">
        <SectionHeading
          number="03"
          title="Practical Example"
          subtitle="Let's understand the execution order."
        />

        <CodeBlock
          code={`console.log("Start");

setTimeout(() => {
  console.log("Callback executed");
}, 1000);

console.log("End");`}
        />

        <div className="mt-5 space-y-3">
          {[
            {
              title: "Start executes",
              description: "Synchronous code executes on the Call Stack.",
            },
            {
              title: "setTimeout registers the timer",
              description:
                "The runtime handles the timer. JavaScript continues executing.",
            },
            {
              title: "End executes",
              description: "The next synchronous statement executes.",
            },
            {
              title: "Callback becomes eligible",
              description:
                "After the timer threshold, the callback waits for execution.",
            },
            {
              title: "Callback executes",
              description:
                "When the runtime schedules it and the Call Stack is available, it executes.",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="flex gap-3 p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)]"
            >
              <span className="w-7 h-7 shrink-0 rounded-lg bg-[var(--primary-soft)] text-[var(--primary-color)] flex items-center justify-center text-xs font-bold">
                {index + 1}
              </span>

              <div>
                <h4 className="text-sm font-semibold text-[var(--text-primary)]">
                  {step.title}
                </h4>

                <p className="text-xs text-[var(--text-muted)] mt-1 leading-6">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <p className="text-xs font-semibold text-[var(--primary-color)] mb-3">
            OUTPUT
          </p>

          <CodeBlock
            code={`Start
End
Callback executed`}
          />
        </div>
      </section>

      {/* IMPORTANT RULE */}
      <section className="mb-12">
        <SectionHeading
          number="04"
          title="Important Rules"
        />

        <div className="space-y-3">
          {[
            "Callbacks wait until they are eligible for execution.",
            "The Event Loop coordinates when callbacks can execute.",
            "Synchronous code runs before queued callbacks.",
            "setTimeout delay is a minimum threshold, not an exact execution time.",
            "JavaScript callbacks execute on the Call Stack.",
          ].map((item, index) => (
            <div
              key={index}
              className="flex gap-3 items-start p-3 rounded-lg bg-[var(--bg-secondary)]"
            >
              <FiCheckCircle className="text-[var(--primary-color)] shrink-0 mt-1" />

              <p className="text-sm text-[var(--text-secondary)] leading-6">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* NOTE */}
      <section className="mb-12">
        <div className="flex gap-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <FiAlertCircle className="text-[var(--primary-color)] shrink-0 mt-1" />

          <div>
            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2">
              Important Distinction
            </h4>

            <p className="text-sm text-[var(--text-muted)] leading-7">
              The Callback Queue is commonly used as a simplified
              explanation of task scheduling. Browsers also have
              microtask queues, and Node.js has multiple event-loop
              phases. These scheduling mechanisms are not all one
              single queue.
            </p>
          </div>
        </div>
      </section>

      {/* INTERVIEW QUESTIONS */}
      <section className="mb-12">
        <SectionHeading
          number="05"
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
          Microtask Queue
        </h3>

        <p className="text-sm text-[var(--text-muted)] mt-2 leading-6">
          Understand how Promise callbacks are scheduled and why
          microtasks have priority over regular tasks.
        </p>
      </div>
    </article>
  );
};

export default CallbackQueue;