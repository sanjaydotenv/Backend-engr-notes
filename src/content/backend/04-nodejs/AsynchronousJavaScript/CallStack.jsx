import React from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

import {
  FiLayers,
  FiArrowDown,
  FiArrowUp,
  FiZap,
  FiCode,
  FiAlertCircle,
  FiCheckCircle,
  FiTerminal,
  FiCpu,
  FiArrowRight,
} from "react-icons/fi";

const CallStack = () => {
  const executionSteps = [
    {
      title: "global()",
      description: "Global execution context is created.",
    },
    {
      title: "first()",
      description: "first() function is called.",
    },
    {
      title: "second()",
      description: "second() function is called inside first().",
    },
    {
      title: "second() completes",
      description: "second() is removed from the stack.",
    },
    {
      title: "first() completes",
      description: "first() is removed from the stack.",
    },
    {
      title: "global() completes",
      description: "Execution finishes.",
    },
  ];

  const stackItems = [
    { name: "global()", color: "opacity-50" },
    { name: "first()", color: "opacity-75" },
    { name: "second()", color: "" },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-12 pb-12 text-[var(--white-color)]">

      {/* HEADER */}

      <header className="relative overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-7 md:p-10">

        <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-[var(--primary-color)] opacity-[0.07] blur-3xl" />

        <div className="relative space-y-5">

          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[var(--primary-color)]">
            <FiLayers size={15} />
            NODE.JS / JAVASCRIPT RUNTIME
          </div>

          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Call Stack
            <span className="text-[var(--primary-color)]">.</span>
          </h1>

          <p className="max-w-2xl text-[var(--muted-color)] leading-8">
            Understand how JavaScript tracks function execution,
            manages function calls, and knows exactly where to
            continue when a function finishes.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {["Core JavaScript", "Execution Context", "Runtime"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full text-xs border border-[var(--border-color)] bg-[var(--bg-tertiary)] text-[var(--muted-color)]"
              >
                {tag}
              </span>
            ))}
          </div>

        </div>
      </header>


      {/* INTRODUCTION */}

      <section className="space-y-5">

        <SectionHeading number="01" title="What is Call Stack?" />

        <p className="text-[var(--muted-color)] leading-8">
          The <strong className="text-[var(--white-color)]">Call Stack</strong>
          {" "}is a data structure used by JavaScript to keep track of
          function calls during program execution.
        </p>

        <p className="text-[var(--muted-color)] leading-8">
          Whenever a function is called, JavaScript creates an
          Execution Context for that function and pushes it onto
          the Call Stack. When the function finishes executing,
          its Execution Context is removed from the stack.
        </p>

        <div className="grid md:grid-cols-3 gap-3">

          {[
            {
              icon: <FiArrowDown />,
              title: "Push",
              text: "A function call is added to the stack.",
            },
            {
              icon: <FiCode />,
              title: "Execute",
              text: "JavaScript executes the function.",
            },
            {
              icon: <FiArrowUp />,
              title: "Pop",
              text: "The completed function is removed.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-3"
            >
              <div className="text-xl text-[var(--primary-color)]">
                {item.icon}
              </div>

              <h3 className="font-semibold">{item.title}</h3>

              <p className="text-sm leading-6 text-[var(--muted-color)]">
                {item.text}
              </p>
            </div>
          ))}

        </div>

      </section>


      {/* STACK CONCEPT */}

      <section className="space-y-5">

        <SectionHeading number="02" title="How does Call Stack work?" />

        <p className="text-[var(--muted-color)] leading-8">
          The Call Stack follows a principle called
          <strong className="text-[var(--primary-color)]">
            {" "}LIFO (Last In, First Out).
          </strong>
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 md:p-7">

          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="font-semibold">Stack Visualization</h3>
              <p className="text-xs text-[var(--muted-color)] mt-1">
                Conceptual representation
              </p>
            </div>

            <span className="text-xs px-3 py-1.5 rounded-full bg-[var(--primary-soft)] text-[var(--primary-color)]">
              LIFO
            </span>
          </div>

          <div className="flex justify-center gap-8">

            <div className="flex flex-col items-center justify-end gap-2 w-full max-w-[260px] min-h-[260px]">

              <div className="text-xs text-[var(--primary-color)] font-semibold mb-2">
                TOP OF STACK
              </div>

              {stackItems.slice().reverse().map((item, index) => (
                <div
                  key={item.name}
                  className={`w-full rounded-lg border p-4 text-center transition-all ${
                    index === 0
                      ? "border-[var(--primary-color)] bg-[var(--primary-soft)] text-[var(--primary-color)]"
                      : "border-[var(--border-color)] bg-[var(--bg-tertiary)] text-[var(--muted-color)]"
                  }`}
                >
                  <span className="font-semibold">{item.name}</span>
                </div>
              ))}

              <div className="w-full border-t-2 border-dashed border-[var(--muted-color)] mt-2 pt-2 text-center text-xs text-[var(--muted-color)]">
                BOTTOM OF STACK
              </div>

            </div>

            <div className="hidden sm:flex flex-col justify-center gap-5 text-xs text-[var(--muted-color)]">
              <span>← Last added</span>
              <span>← Previous call</span>
              <span>← First context</span>
            </div>

          </div>

          <p className="text-center text-xs text-[var(--muted-color)] mt-6">
            The most recently pushed function executes and completes first.
          </p>

        </div>

        <div className="p-4 rounded-xl bg-[var(--primary-soft)] border border-[var(--primary-color)]/20">
          <p className="text-sm leading-7">
            <strong className="text-[var(--primary-color)]">LIFO means:</strong>
            {" "}The last function added to the stack is the first
            function removed from it.
          </p>
        </div>

      </section>


      {/* SIMPLE EXAMPLE */}

      <section className="space-y-5">

        <SectionHeading number="03" title="Your First Call Stack Example" />

        <CodeBlock
          code={`function first() {
  console.log("First function");
}

function second() {
  console.log("Second function");
}

first();
second();`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 space-y-4">

          <div className="flex items-center gap-2">
            <FiTerminal className="text-[var(--primary-color)]" />
            <h3 className="font-semibold">Console Output</h3>
          </div>

          <div className="rounded-lg bg-[#0d0d0d] p-4 font-mono text-sm space-y-2">
            <p className="text-green-400">First function</p>
            <p className="text-green-400">Second function</p>
          </div>

          <p className="text-sm text-[var(--muted-color)] leading-7">
            JavaScript executes first(), removes it from the stack,
            and then executes second().
          </p>

        </div>

      </section>


      {/* NESTED FUNCTION */}

      <section className="space-y-5">

        <SectionHeading number="04" title="Nested Function Calls" />

        <p className="text-[var(--muted-color)] leading-8">
          Now let's see what happens when one function calls another
          function. This is where the Call Stack becomes interesting.
        </p>

        <CodeBlock
          code={`function third() {
  console.log("Inside third");
}

function second() {
  console.log("Inside second");
  third();
}

function first() {
  console.log("Inside first");
  second();
}

first();`}
        />

        <h3 className="font-semibold">Output</h3>

        <CodeBlock
          code={`Inside first
Inside second
Inside third`}
        />

        <h3 className="font-semibold">Execution Dry Run</h3>

        <div className="space-y-3">

          {executionSteps.map((step, index) => (
            <div
              key={index}
              className="flex gap-4 items-start p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)]"
            >

              <div
                className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center text-xs font-bold ${
                  index === 2 || index === 3
                    ? "bg-[var(--primary-soft)] text-[var(--primary-color)]"
                    : "bg-[var(--bg-tertiary)] text-[var(--muted-color)]"
                }`}
              >
                {index + 1}
              </div>

              <div>
                <h4 className="font-semibold text-sm">{step.title}</h4>

                <p className="text-xs text-[var(--muted-color)] mt-1 leading-6">
                  {step.description}
                </p>
              </div>

            </div>
          ))}

        </div>

        <div className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-3">

          <h3 className="font-semibold text-[var(--primary-color)]">
            Actual Stack Formation
          </h3>

          <CodeBlock
            code={`1. global()

2. global()
   first()

3. global()
   first()
   second()

4. global()
   first()
   second()
   third()

5. global()
   first()
   second()

6. global()
   first()

7. global()`}
          />

          <p className="text-xs text-[var(--muted-color)] leading-6">
            Note: This is a simplified view of function execution
            contexts. The global context remains underneath the
            function calls.
          </p>

        </div>

      </section>


      {/* INTERACTIVE DRY RUN */}

      <section className="space-y-5">

        <SectionHeading number="05" title="Understand with a Real Dry Run" />

        <p className="text-[var(--muted-color)] leading-8">
          Let's execute a program step by step and understand
          exactly how the Call Stack changes.
        </p>

        <CodeBlock
          code={`function multiply() {
  return 5 * 2;
}

function calculate() {
  const result = multiply();
  console.log(result);
}

calculate();`}
        />

        <div className="space-y-3">

          {[
            {
              title: "Step 1",
              stack: ["global()"],
              explanation: "JavaScript starts executing the global code.",
            },
            {
              title: "Step 2",
              stack: ["global()", "calculate()"],
              explanation: "calculate() is called and pushed onto the stack.",
            },
            {
              title: "Step 3",
              stack: ["global()", "calculate()", "multiply()"],
              explanation: "multiply() is called inside calculate().",
            },
            {
              title: "Step 4",
              stack: ["global()", "calculate()"],
              explanation: "multiply() returns 10 and is removed from the stack.",
            },
            {
              title: "Step 5",
              stack: ["global()"],
              explanation: "calculate() prints 10 and finishes execution.",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4"
            >

              <div className="flex items-center justify-between gap-3 mb-3">

                <h4 className="font-semibold text-sm">{step.title}</h4>

                <span className="text-[10px] uppercase tracking-wider text-[var(--primary-color)]">
                  {index === 2 ? "Function called" : index === 3 ? "Function popped" : "Execution"}
                </span>

              </div>

              <div className="flex flex-wrap items-center gap-2 mb-3">

                {step.stack.map((item, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && (
                      <FiArrowRight className="text-[var(--muted-color)]" />
                    )}

                    <span className="px-3 py-2 text-xs font-mono rounded-lg border border-[var(--primary-color)]/30 bg-[var(--primary-soft)] text-[var(--primary-color)]">
                      {item}
                    </span>
                  </React.Fragment>
                ))}

              </div>

              <p className="text-xs text-[var(--muted-color)] leading-6">
                {step.explanation}
              </p>

            </div>
          ))}

        </div>

      </section>


      {/* STACK OVERFLOW */}

      <section className="space-y-5">

        <SectionHeading number="06" title="What is Stack Overflow?" />

        <p className="text-[var(--muted-color)] leading-8">
          Every JavaScript runtime has limits on how much execution
          context its Call Stack can hold.
        </p>

        <p className="text-[var(--muted-color)] leading-8">
          If functions keep calling themselves without stopping,
          the Call Stack continues growing until the runtime
          reaches its stack limit.
        </p>

        <CodeBlock
          code={`function recursiveFunction() {
  recursiveFunction();
}

recursiveFunction();`}
        />

        <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5 space-y-3">

          <div className="flex items-center gap-2 text-red-400 font-semibold">
            <FiAlertCircle />
            Error
          </div>

          <CodeBlock
            code={`RangeError: Maximum call stack size exceeded`}
          />

          <p className="text-sm text-[var(--muted-color)] leading-7">
            The function keeps calling itself without a termination
            condition. Eventually, the runtime cannot add another
            execution context to the stack.
          </p>

        </div>

        <h3 className="font-semibold">Correct Approach</h3>

        <CodeBlock
          code={`function recursiveFunction(count) {
  if (count === 0) {
    return;
  }

  console.log(count);

  recursiveFunction(count - 1);
}

recursiveFunction(5);`}
        />

        <p className="text-sm text-[var(--muted-color)] leading-7">
          Always provide a base condition when using recursion.
          It prevents infinite recursive calls.
        </p>

      </section>


      {/* CALL STACK AND ASYNC */}

      <section className="space-y-5">

        <SectionHeading number="07" title="Call Stack and Asynchronous JavaScript" />

        <p className="text-[var(--muted-color)] leading-8">
          The Call Stack also plays an important role in asynchronous
          JavaScript. However, asynchronous operations do not simply
          stay inside the Call Stack while waiting.
        </p>

        <CodeBlock
          code={`console.log("Start");

setTimeout(() => {
  console.log("Timer callback");
}, 0);

console.log("End");`}
        />

        <h3 className="font-semibold">Output</h3>

        <CodeBlock
          code={`Start
End
Timer callback`}
        />

        <div className="space-y-3">

          {[
            {
              title: "Start",
              text: "The first synchronous statement executes.",
            },
            {
              title: "setTimeout()",
              text: "The timer is registered. Its callback is scheduled for later execution.",
            },
            {
              title: "End",
              text: "JavaScript continues and executes the next synchronous statement.",
            },
            {
              title: "Timer Callback",
              text: "The callback executes when its timer has expired and the event loop reaches the appropriate callback phase.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex gap-3 p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]"
            >

              <div className="text-[var(--primary-color)] font-bold text-sm">
                0{index + 1}
              </div>

              <div>
                <h4 className="text-sm font-semibold">{item.title}</h4>
                <p className="text-xs text-[var(--muted-color)] mt-1 leading-6">
                  {item.text}
                </p>
              </div>

            </div>
          ))}

        </div>

        <div className="p-5 rounded-xl border border-[var(--primary-color)]/30 bg-[var(--primary-soft)]">

          <h3 className="font-semibold text-[var(--primary-color)] mb-2">
            Important Connection
          </h3>

          <p className="text-sm leading-7">
            The Call Stack handles synchronous JavaScript execution.
            The Event Loop coordinates when eligible asynchronous
            callbacks can execute. A callback cannot interrupt
            currently executing JavaScript on the same thread.
          </p>

        </div>

      </section>


      {/* IMPORTANT FACTS */}

      <section className="space-y-5">

        <SectionHeading number="08" title="Important Concepts to Remember" />

        <div className="grid sm:grid-cols-2 gap-3">

          {[
            "Call Stack follows LIFO.",
            "Function calls create execution contexts.",
            "New function calls are pushed onto the stack.",
            "Completed function calls are popped from the stack.",
            "JavaScript executes synchronous code on its main thread.",
            "Infinite recursion can cause Stack Overflow.",
            "The Call Stack is different from the Event Loop.",
            "Asynchronous callbacks execute only when scheduled and the stack is available.",
          ].map((item, index) => (
            <div
              key={index}
              className="flex gap-3 p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]"
            >
              <FiCheckCircle className="text-[var(--primary-color)] shrink-0 mt-1" />

              <p className="text-sm text-[var(--muted-color)] leading-6">
                {item}
              </p>
            </div>
          ))}

        </div>

      </section>


      {/* INTERVIEW QUESTIONS */}

      <section className="space-y-5">

        <SectionHeading number="09" title="Interview Questions" />

        <div className="space-y-3">

          {[
            {
              question: "What is the Call Stack in JavaScript?",
              answer: "It is a LIFO data structure that tracks function execution contexts."
            },
            {
              question: "What does LIFO mean?",
              answer: "Last In, First Out. The last function pushed onto the stack is the first one removed."
            },
            {
              question: "What happens when a function is called?",
              answer: "Its execution context is created and pushed onto the Call Stack."
            },
            {
              question: "What is Stack Overflow?",
              answer: "It occurs when the Call Stack exceeds its maximum supported size, commonly due to excessive recursion."
            },
            {
              question: "Can asynchronous callbacks interrupt synchronous execution?",
              answer: "No. A callback cannot interrupt currently running JavaScript on the same thread."
            },
            {
              question: "Is Call Stack the same as Event Loop?",
              answer: "No. The Call Stack tracks execution, while the Event Loop coordinates asynchronous callback scheduling."
            },
          ].map((item, index) => (
            <details
              key={index}
              className="group rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)]"
            >

              <summary className="cursor-pointer list-none p-4 flex items-center justify-between gap-4">

                <span className="text-sm font-semibold">
                  <span className="text-[var(--primary-color)] mr-2">
                    Q{index + 1}.
                  </span>

                  {item.question}
                </span>

                <span className="text-[var(--primary-color)] group-open:rotate-180 transition-transform">
                  <FiArrowDown />
                </span>

              </summary>

              <div className="px-4 pb-4 pt-2 border-t border-[var(--border-color)]">

                <p className="text-sm text-[var(--muted-color)] leading-7">
                  {item.answer}
                </p>

              </div>

            </details>
          ))}

        </div>

      </section>


      {/* SUMMARY */}

      <section className="rounded-2xl border border-[var(--primary-color)]/30 bg-[var(--primary-soft)] p-6 md:p-8 space-y-4">

        <div className="flex items-center gap-2 text-[var(--primary-color)]">
          <FiZap size={20} />
          <span className="text-xs font-bold tracking-widest">
            FINAL TAKEAWAY
          </span>
        </div>

        <h2 className="text-2xl font-bold">
          Understand the Stack, Understand JavaScript.
        </h2>

        <p className="text-sm leading-8">
          The Call Stack is one of the fundamental parts of JavaScript
          execution. It manages function calls using the LIFO principle.
          Every function call gets an execution context, and once that
          function finishes, its context is removed from the stack.
        </p>

        <div className="pt-4 border-t border-[var(--primary-color)]/20">

          <p className="text-xs font-semibold text-[var(--primary-color)] mb-2">
            NEXT TOPIC
          </p>

          <div className="flex items-center justify-between gap-3">

            <div>
              <h3 className="font-semibold text-lg">
                Event Loop
              </h3>

              <p className="text-xs text-[var(--muted-color)] mt-1">
                How JavaScript handles asynchronous execution.
              </p>
            </div>

            <FiArrowRight className="text-[var(--primary-color)] text-2xl shrink-0" />

          </div>

        </div>

      </section>

    </div>
  );
};


const SectionHeading = ({ number, title }) => {
  return (
    <div className="flex items-center gap-4">

      <span className="text-sm font-bold text-[var(--primary-color)]">
        {number}
      </span>

      <h2 className="text-xl md:text-2xl font-bold">
        {title}
      </h2>

      <div className="flex-1 h-px bg-[var(--border-color)]" />

    </div>
  );
};

export default CallStack;