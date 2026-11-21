import React from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

import {
  FiArrowRight,
  FiCode,
  FiLayers,
  FiZap,
  FiCheckCircle,
  FiAlertCircle,
  FiTerminal,
  FiGitBranch,
  FiCpu,
  FiClock,
} from "react-icons/fi";

const Callbacks = () => {
  const callbackSteps = [
    {
      title: "Function Definition",
      description: "A function is created that accepts another function as an argument.",
    },
    {
      title: "Function Call",
      description: "We call the main function and pass another function as its argument.",
    },
    {
      title: "Callback Execution",
      description: "The main function executes the passed function when required.",
    },
    {
      title: "Result",
      description: "The callback executes and performs its assigned task.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-12 pb-12 text-[var(--white-color)]">

      {/* HEADER */}

      <header className="relative overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-7 md:p-10">

        <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-[var(--primary-color)] opacity-[0.07] blur-3xl" />

        <div className="relative space-y-5">

          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[var(--primary-color)]">
            <FiGitBranch size={15} />
            JAVASCRIPT / ASYNCHRONOUS PROGRAMMING
          </div>

          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Callbacks
            <span className="text-[var(--primary-color)]">.</span>
          </h1>

          <p className="max-w-2xl text-[var(--muted-color)] leading-8">
            Learn how functions can be passed as arguments to other functions,
            how callbacks work, and how JavaScript uses them to handle
            asynchronous operations.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {["Functions", "Higher-Order Functions", "Async JavaScript"].map((tag) => (
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

        <SectionHeading number="01" title="What is a Callback Function?" />

        <p className="text-[var(--muted-color)] leading-8">
          A <strong className="text-[var(--white-color)]">Callback Function</strong>
          {" "}is a function that is passed as an argument to another function
          and is executed by that function.
        </p>

        <p className="text-[var(--muted-color)] leading-8">
          In JavaScript, functions are first-class citizens. This means
          we can store functions in variables, pass them as arguments,
          and return them from other functions.
        </p>

        <div className="p-5 rounded-xl border border-[var(--primary-color)]/30 bg-[var(--primary-soft)]">

          <div className="flex items-center gap-2 text-[var(--primary-color)] font-semibold mb-3">
            <FiZap />
            Simple Definition
          </div>

          <p className="text-sm leading-7">
            A callback is simply a function that we give to another
            function so that it can execute it when needed.
          </p>

        </div>

      </section>


      {/* BASIC EXAMPLE */}

      <section className="space-y-5">

        <SectionHeading number="02" title="Your First Callback Example" />

        <p className="text-[var(--muted-color)] leading-8">
          Let's understand callbacks with a very simple example.
        </p>

        <CodeBlock
          code={`function greet() {
  console.log("Hello Developer!");
}

function process(callback) {
  callback();
}

process(greet);`}
        />

        <h3 className="font-semibold">Output</h3>

        <CodeBlock
          code={`Hello Developer!`}
        />

        <h3 className="font-semibold">Understanding the Code</h3>

        <div className="space-y-3">

          {[
            "We create a function named greet().",
            "We create another function named process() that accepts a parameter called callback.",
            "We pass greet as an argument to process().",
            "Inside process(), callback() executes greet().",
            "The message is printed to the console.",
          ].map((item, index) => (
            <StepItem key={index} index={index + 1} text={item} />
          ))}

        </div>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 space-y-3">

          <h3 className="font-semibold text-[var(--primary-color)]">
            Important Difference
          </h3>

          <CodeBlock
            code={`process(greet);`}
          />

          <p className="text-sm text-[var(--muted-color)] leading-7">
            Here, we pass the function itself. We do not execute it
            immediately.
          </p>

          <CodeBlock
            code={`process(greet());`}
          />

          <p className="text-sm text-[var(--muted-color)] leading-7">
            Here, greet() executes immediately, and its return value
            is passed to process(). This is generally not what we want
            when passing a callback.
          </p>

        </div>

      </section>


      {/* FUNCTION FLOW */}

      <section className="space-y-5">

        <SectionHeading number="03" title="How Does a Callback Work?" />

        <p className="text-[var(--muted-color)] leading-8">
          Let's visualize how one function passes another function
          and executes it.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 md:p-7">

          <div className="flex flex-col items-center gap-3">

            <FlowBox title="process(greet)" subtitle="Main function call" />

            <FiArrowRight className="rotate-90 text-[var(--primary-color)] text-xl" />

            <FlowBox title="callback = greet" subtitle="Function received as argument" />

            <FiArrowRight className="rotate-90 text-[var(--primary-color)] text-xl" />

            <FlowBox title="callback()" subtitle="Callback function is executed" active />

            <FiArrowRight className="rotate-90 text-[var(--primary-color)] text-xl" />

            <FlowBox title="greet()" subtitle="Hello Developer!" />

          </div>

        </div>

        <p className="text-sm text-[var(--muted-color)] leading-7">
          Remember: A callback is not a special JavaScript keyword.
          It is simply a normal function passed to another function.
        </p>

      </section>


      {/* CALLBACK WITH PARAMETERS */}

      <section className="space-y-5">

        <SectionHeading number="04" title="Callbacks with Parameters" />

        <p className="text-[var(--muted-color)] leading-8">
          We can also pass data to a callback function.
          This makes callbacks useful for performing calculations,
          processing data, and handling results.
        </p>

        <CodeBlock
          code={`function calculate(a, b, callback) {
  const result = a + b;

  callback(result);
}

function display(value) {
  console.log("Result:", value);
}

calculate(10, 20, display);`}
        />

        <h3 className="font-semibold">Output</h3>

        <CodeBlock
          code={`Result: 30`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 space-y-3">

          <h3 className="font-semibold">Execution Breakdown</h3>

          <div className="grid sm:grid-cols-2 gap-3">

            <div className="rounded-lg bg-[var(--bg-tertiary)] p-4">
              <p className="text-xs text-[var(--muted-color)]">INPUT</p>
              <p className="text-xl font-bold mt-2">10 + 20</p>
            </div>

            <div className="rounded-lg bg-[var(--bg-tertiary)] p-4">
              <p className="text-xs text-[var(--muted-color)]">RESULT</p>
              <p className="text-xl font-bold text-[var(--primary-color)] mt-2">30</p>
            </div>

          </div>

          <p className="text-sm text-[var(--muted-color)] leading-7">
            calculate() performs the addition and passes the result
            to the display() callback.
          </p>

        </div>

      </section>


      {/* ANONYMOUS CALLBACK */}

      <section className="space-y-5">

        <SectionHeading number="05" title="Anonymous Callback Functions" />

        <p className="text-[var(--muted-color)] leading-8">
          We do not always need to create a separate named function.
          We can directly pass an anonymous function as a callback.
        </p>

        <CodeBlock
          code={`function process(callback) {
  callback();
}

process(function () {
  console.log("Anonymous callback executed");
});`}
        />

        <h3 className="font-semibold">Using Arrow Function</h3>

        <CodeBlock
          code={`function process(callback) {
  callback();
}

process(() => {
  console.log("Arrow function callback executed");
});`}
        />

        <p className="text-sm text-[var(--muted-color)] leading-7">
          Arrow functions are commonly used when callbacks are short
          and do not need a separate function declaration.
        </p>

      </section>


      {/* SYNCHRONOUS CALLBACK */}

      <section className="space-y-5">

        <SectionHeading number="06" title="Synchronous Callbacks" />

        <p className="text-[var(--muted-color)] leading-8">
          A synchronous callback executes immediately during the
          execution of the function that receives it.
        </p>

        <CodeBlock
          code={`console.log("Start");

function process(callback) {
  console.log("Processing...");
  callback();
}

process(() => {
  console.log("Callback executed");
});

console.log("End");`}
        />

        <h3 className="font-semibold">Output</h3>

        <CodeBlock
          code={`Start
Processing...
Callback executed
End`}
        />

        <div className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-3">

          <h3 className="font-semibold text-[var(--primary-color)]">
            Execution Order
          </h3>

          {[
            "Start is printed.",
            "process() is called.",
            "Processing is printed.",
            "The callback executes immediately.",
            "End is printed.",
          ].map((item, index) => (
            <StepItem key={index} index={index + 1} text={item} />
          ))}

        </div>

      </section>


      {/* ASYNCHRONOUS CALLBACK */}

      <section className="space-y-5">

        <SectionHeading number="07" title="Asynchronous Callbacks" />

        <p className="text-[var(--muted-color)] leading-8">
          An asynchronous callback is executed later, after an
          asynchronous operation completes or its callback becomes
          eligible for execution.
        </p>

        <p className="text-[var(--muted-color)] leading-8">
          JavaScript commonly uses asynchronous callbacks for timers,
          file operations, and network-related operations.
        </p>

        <h3 className="font-semibold">Example: setTimeout()</h3>

        <CodeBlock
          code={`console.log("Start");

setTimeout(() => {
  console.log("Callback executed");
}, 2000);

console.log("End");`}
        />

        <h3 className="font-semibold">Output</h3>

        <CodeBlock
          code={`Start
End

// After approximately 2 seconds
Callback executed`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 space-y-4">

          <div className="flex items-center gap-2">
            <FiClock className="text-[var(--primary-color)]" />
            <h3 className="font-semibold">Execution Timeline</h3>
          </div>

          <div className="space-y-4">

            <TimelineItem
              time="0ms"
              title="Start"
              description="Synchronous code executes."
            />

            <TimelineItem
              time="0ms"
              title="setTimeout()"
              description="Timer is registered."
            />

            <TimelineItem
              time="0ms"
              title="End"
              description="JavaScript continues execution."
            />

            <TimelineItem
              time="~2000ms"
              title="Callback"
              description="Callback becomes eligible and executes when the event loop can run it."
              last
            />

          </div>

        </div>

        <div className="p-4 rounded-xl bg-[var(--primary-soft)] border border-[var(--primary-color)]/20">

          <p className="text-sm leading-7">
            <strong className="text-[var(--primary-color)]">
              Remember:
            </strong>{" "}
            setTimeout(callback, 2000) does not guarantee that
            the callback executes at exactly 2000 milliseconds.
            It specifies a minimum delay before the callback becomes eligible.
          </p>

        </div>

      </section>


      {/* NODE JS CALLBACK */}

      <section className="space-y-5">

        <SectionHeading number="08" title="Callbacks in Node.js" />

        <p className="text-[var(--muted-color)] leading-8">
          Node.js extensively uses callbacks to handle asynchronous
          operations. One common example is reading files using
          the File System module.
        </p>

        <h3 className="font-semibold">Example: fs.readFile()</h3>

        <CodeBlock
          code={`const fs = require("fs");

console.log("Program Started");

fs.readFile("example.txt", "utf8", (error, data) => {
  if (error) {
    console.log("Error:", error.message);
    return;
  }

  console.log("File Content:", data);
});

console.log("Program Continues");`}
        />

        <h3 className="font-semibold">Possible Output</h3>

        <CodeBlock
          code={`Program Started
Program Continues
File Content: Hello from Node.js!`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 space-y-4">

          <h3 className="font-semibold">How It Works</h3>

          {[
            {
              title: "Start Reading",
              text: "fs.readFile() starts the file reading operation.",
            },
            {
              title: "Continue Execution",
              text: "JavaScript executes the next available statement.",
            },
            {
              title: "File Operation Completes",
              text: "Node.js receives the result of the file operation.",
            },
            {
              title: "Callback Executes",
              text: "The callback receives either an error or the file data.",
            },
          ].map((item, index) => (
            <StepItem
              key={index}
              index={index + 1}
              text={`${item.title}: ${item.text}`}
            />
          ))}

        </div>

      </section>


      {/* ERROR FIRST CALLBACK */}

      <section className="space-y-5">

        <SectionHeading number="09" title="Error-First Callback Pattern" />

        <p className="text-[var(--muted-color)] leading-8">
          Node.js commonly follows an error-first callback pattern.
          In this pattern, the first argument of the callback represents
          an error, and the second argument usually contains the result.
        </p>

        <CodeBlock
          code={`function getUser(callback) {
  const error = null;

  const user = {
    name: "Mayur",
    role: "Developer"
  };

  callback(error, user);
}

getUser((error, user) => {
  if (error) {
    console.log(error);
    return;
  }

  console.log(user);
});`}
        />

        <h3 className="font-semibold">Output</h3>

        <CodeBlock
          code={`{
  name: "Mayur",
  role: "Developer"
}`}
        />

        <div className="p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] space-y-3">

          <h3 className="font-semibold text-[var(--primary-color)]">
            Important Convention
          </h3>

          <CodeBlock
            code={`callback(error, result);`}
          />

          <ul className="space-y-2 text-sm text-[var(--muted-color)]">
            <li>• First argument: Error, or null when there is no error.</li>
            <li>• Second argument: Successful result.</li>
          </ul>

        </div>

      </section>


      {/* CALLBACK HELL */}

      <section className="space-y-5">

        <SectionHeading number="10" title="What is Callback Hell?" />

        <p className="text-[var(--muted-color)] leading-8">
          Callback Hell occurs when multiple asynchronous operations
          are nested inside one another, creating deeply nested
          and difficult-to-maintain code.
        </p>

        <p className="text-[var(--muted-color)] leading-8">
          It is also commonly called the Pyramid of Doom because
          the code starts moving further and further to the right.
        </p>

        <h3 className="font-semibold">Example: Callback Hell</h3>

        <CodeBlock
          code={`getUser(userId, (error, user) => {
  if (error) return console.log(error);

  getOrders(user.id, (error, orders) => {
    if (error) return console.log(error);

    getOrderDetails(orders[0].id, (error, details) => {
      if (error) return console.log(error);

      getPayment(details.paymentId, (error, payment) => {
        if (error) return console.log(error);

        console.log(payment);
      });
    });
  });
});`}
        />

        <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5 space-y-3">

          <div className="flex items-center gap-2 text-red-400 font-semibold">
            <FiAlertCircle />
            Problems with Callback Hell
          </div>

          {[
            "Code becomes deeply nested.",
            "Difficult to read and understand.",
            "Error handling becomes complicated.",
            "Code becomes difficult to maintain.",
            "Reusing and testing logic becomes harder.",
          ].map((item, index) => (
            <div key={index} className="flex gap-3 text-sm text-[var(--muted-color)]">
              <span className="text-red-400">✕</span>
              {item}
            </div>
          ))}

        </div>

      </section>


      {/* SOLUTION */}

      <section className="space-y-5">

        <SectionHeading number="11" title="How to Avoid Callback Hell?" />

        <p className="text-[var(--muted-color)] leading-8">
          JavaScript provides modern asynchronous programming
          techniques that help us write cleaner and more maintainable code.
        </p>

        <div className="space-y-4">

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 space-y-3">

            <div className="flex items-center gap-2">
              <FiLayers className="text-[var(--primary-color)]" />
              <h3 className="font-semibold">1. Promises</h3>
            </div>

            <p className="text-sm text-[var(--muted-color)] leading-7">
              Promises represent the eventual completion or failure
              of an asynchronous operation.
            </p>

            <CodeBlock
              code={`getUser()
  .then((user) => getOrders(user.id))
  .then((orders) => getOrderDetails(orders[0].id))
  .then((details) => console.log(details))
  .catch((error) => console.log(error));`}
            />

          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 space-y-3">

            <div className="flex items-center gap-2">
              <FiZap className="text-[var(--primary-color)]" />
              <h3 className="font-semibold">2. Async / Await</h3>
            </div>

            <p className="text-sm text-[var(--muted-color)] leading-7">
              Async/await allows us to write Promise-based asynchronous
              code in a cleaner, sequential-looking style.
            </p>

            <CodeBlock
              code={`async function getData() {
  try {
    const user = await getUser();

    const orders = await getOrders(user.id);

    const details = await getOrderDetails(orders[0].id);

    console.log(details);
  } catch (error) {
    console.log(error);
  }
}

getData();`}
            />

          </div>

        </div>

      </section>


      {/* IMPORTANT DIFFERENCE */}

      <section className="space-y-5">

        <SectionHeading number="12" title="Important Things to Remember" />

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">

          <table className="w-full text-sm text-left">

            <thead className="bg-[var(--bg-tertiary)]">
              <tr>
                <th className="p-4">Concept</th>
                <th className="p-4">Meaning</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[var(--border-color)]">

              {[
                ["Callback", "Function passed to another function."],
                ["Synchronous Callback", "Executes immediately during the calling function."],
                ["Asynchronous Callback", "Executes later after an asynchronous event or operation."],
                ["Error-First Callback", "Callback convention where the first parameter represents an error."],
                ["Callback Hell", "Deeply nested callback structure."],
                ["Higher-Order Function", "A function that accepts another function or returns a function."],
              ].map((row, index) => (
                <tr key={index} className="bg-[var(--bg-secondary)]">
                  <td className="p-4 font-semibold">{row[0]}</td>
                  <td className="p-4 text-[var(--muted-color)]">{row[1]}</td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </section>


      {/* INTERVIEW QUESTIONS */}

      <section className="space-y-5">

        <SectionHeading number="13" title="Interview Questions" />

        <div className="space-y-3">

          {[
            {
              question: "What is a callback function?",
              answer: "A function passed as an argument to another function and executed by that function."
            },
            {
              question: "Are all callbacks asynchronous?",
              answer: "No. Callbacks can be synchronous or asynchronous depending on when and how they are executed."
            },
            {
              question: "What is an error-first callback?",
              answer: "A Node.js callback convention where the first argument represents an error and the second argument contains the result."
            },
            {
              question: "What is Callback Hell?",
              answer: "A situation where deeply nested callbacks make code difficult to read and maintain."
            },
            {
              question: "What is the difference between callback and Promise?",
              answer: "A callback is a function passed to another function. A Promise is an object representing the eventual result of an asynchronous operation."
            },
            {
              question: "Why do we use callbacks in Node.js?",
              answer: "They allow Node.js APIs to notify our code when asynchronous operations complete."
            },
            {
              question: "What is a higher-order function?",
              answer: "A function that accepts another function as an argument or returns a function."
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

                <FiArrowRight className="text-[var(--primary-color)] group-open:rotate-90 transition-transform shrink-0" />

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
          Functions Can Work Together.
        </h2>

        <p className="text-sm leading-8">
          Callbacks allow us to pass functions to other functions
          and control when certain operations should execute.
          They are fundamental to JavaScript and Node.js,
          especially when working with asynchronous operations.
        </p>

        <div className="pt-4 border-t border-[var(--primary-color)]/20">

          <p className="text-xs font-semibold text-[var(--primary-color)] mb-2">
            NEXT TOPIC
          </p>

          <div className="flex items-center justify-between gap-3">

            <div>
              <h3 className="font-semibold text-lg">Callback Hell</h3>
              <p className="text-xs text-[var(--muted-color)] mt-1">
                Understanding deeply nested callbacks and their problems.
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


const StepItem = ({ index, text }) => {
  return (
    <div className="flex gap-3 items-start">

      <span className="w-7 h-7 shrink-0 flex items-center justify-center rounded-lg bg-[var(--primary-soft)] text-[var(--primary-color)] text-xs font-bold">
        {index}
      </span>

      <p className="text-sm text-[var(--muted-color)] leading-7">
        {text}
      </p>

    </div>
  );
};


const FlowBox = ({ title, subtitle, active }) => {
  return (
    <div
      className={`w-full max-w-sm p-4 rounded-xl border text-center ${
        active
          ? "border-[var(--primary-color)] bg-[var(--primary-soft)]"
          : "border-[var(--border-color)] bg-[var(--bg-tertiary)]"
      }`}
    >
      <h4 className={`font-semibold ${active ? "text-[var(--primary-color)]" : ""}`}>
        {title}
      </h4>

      <p className="text-xs text-[var(--muted-color)] mt-1">
        {subtitle}
      </p>
    </div>
  );
};


const TimelineItem = ({ time, title, description, last }) => {
  return (
    <div className="flex gap-4">

      <div className="flex flex-col items-center">

        <div className="w-3 h-3 rounded-full bg-[var(--primary-color)]" />

        {!last && (
          <div className="w-px flex-1 min-h-10 bg-[var(--border-color)]" />
        )}

      </div>

      <div className="flex-1 pb-4">

        <div className="flex flex-wrap items-center justify-between gap-2">

          <h4 className="font-semibold text-sm">{title}</h4>

          <span className="text-xs text-[var(--primary-color)]">
            {time}
          </span>

        </div>

        <p className="text-xs text-[var(--muted-color)] mt-1 leading-6">
          {description}
        </p>

      </div>

    </div>
  );
};

export default Callbacks;