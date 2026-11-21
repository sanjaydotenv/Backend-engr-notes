import React from "react";

const AsynchronousProgramming = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <header className="space-y-3">
        <span className="text-sm font-medium text-[var(--accent-color)]">
          NODE.JS / 07
        </span>

        <h1 className="text-4xl font-bold">Asynchronous Programming</h1>

        <p className="text-lg text-[var(--text-secondary)]">
          Asynchronous programming allows JavaScript to start time-consuming
          operations and continue executing other code without waiting for them
          to finish.
        </p>
      </header>

      {/* What is Async */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">
          What is Asynchronous Programming?
        </h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Asynchronous programming is a programming approach where certain
          operations can complete later while the program continues doing other
          work.
        </p>

        <p className="text-[var(--text-secondary)] leading-7">
          In Node.js, it is commonly used for file operations, database queries,
          API requests and timers.
        </p>
      </section>

      {/* Sync vs Async */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Synchronous vs Asynchronous</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-5 space-y-3">
            <h3 className="font-semibold">Synchronous</h3>

            <p className="text-sm text-[var(--text-secondary)]">
              Each operation waits for the previous operation to finish.
            </p>

            <div className="rounded-lg bg-[var(--bg-hover)] p-3 space-y-2 text-sm">
              <div>Task 1</div>
              <div className="text-center text-[var(--text-muted)]">↓</div>
              <div>Wait for Task 1</div>
              <div className="text-center text-[var(--text-muted)]">↓</div>
              <div>Task 2</div>
            </div>
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-5 space-y-3">
            <h3 className="font-semibold text-[var(--accent-color)]">
              Asynchronous
            </h3>

            <p className="text-sm text-[var(--text-secondary)]">
              The program can continue executing while an operation is in
              progress.
            </p>

            <div className="rounded-lg bg-[var(--bg-hover)] p-3 space-y-2 text-sm">
              <div>Start Task 1</div>
              <div className="text-center text-[var(--text-muted)]">↓</div>
              <div>Execute Task 2</div>
              <div className="text-center text-[var(--text-muted)]">↓</div>
              <div className="text-[var(--accent-color)]">
                Handle Task 1 result later
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Callback */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">1. Callbacks</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          A callback is a function passed as an argument to another function. It
          can be executed later when an operation completes.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--accent-background)] p-4">
          <pre className="overflow-x-auto text-sm">
            <code>{`console.log("Start");

setTimeout(() => {
  console.log("Callback executed");
}, 2000);

console.log("End");`}</code>
          </pre>

          <p className="mt-4 text-sm font-semibold text-[var(--accent-color)]">
            Output
          </p>

          <pre className="mt-2 text-sm text-[var(--text-secondary)]">
            {`Start
End
Callback executed`}
          </pre>
        </div>

        <p className="text-sm text-[var(--text-secondary)]">
          The callback executes after the timer expires and the Event Loop can
          process it.
        </p>
      </section>

      {/* Callback Hell */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Callback Hell</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Callback Hell happens when multiple callbacks are nested inside each
          other. It makes code difficult to read, maintain and debug.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--accent-background)] p-4">
          <pre className="overflow-x-auto text-sm">
            <code>{`getUser((user) => {
  getOrders(user.id, (orders) => {
    getPayment(orders[0].id, (payment) => {
      console.log(payment);
    });
  });
});`}</code>
          </pre>
        </div>
      </section>

      {/* Promises */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">2. Promises</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          A Promise is an object that represents the eventual success or failure
          of an asynchronous operation.
        </p>

        <h3 className="font-semibold">Three States of a Promise</h3>

        <div className="grid sm:grid-cols-3 gap-3">
          {[
            {
              title: "Pending",
              description: "The operation is still in progress.",
            },
            {
              title: "Fulfilled",
              description: "The operation completed successfully.",
            },
            {
              title: "Rejected",
              description: "The operation failed.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4"
            >
              <h3 className="font-semibold text-[var(--accent-color)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <h3 className="font-semibold">Promise Example</h3>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--accent-background)] p-4">
          <pre className="overflow-x-auto text-sm">
            <code>{`const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Operation successful");
  } else {
    reject("Operation failed");
  }
});

myPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));`}</code>
          </pre>
        </div>

        <p className="text-sm text-[var(--text-secondary)]">
          <code className="text-[var(--accent-color)]">resolve()</code> fulfills
          the Promise, while{" "}
          <code className="text-[var(--accent-color)]">reject()</code> rejects
          it. <code>.then()</code> handles success and <code>.catch()</code>{" "}
          handles errors.
        </p>
      </section>

      {/* Async Await */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">3. Async / Await</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Async/Await is a cleaner way to write Promise-based asynchronous code.
          It makes asynchronous code easier to read and understand.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--accent-background)] p-4">
          <pre className="overflow-x-auto text-sm">
            <code>{`const getData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received");
    }, 2000);
  });
};

async function fetchData() {
  console.log("Start");

  const result = await getData();

  console.log(result);
  console.log("End");
}

fetchData();`}</code>
          </pre>

          <p className="mt-4 text-sm font-semibold text-[var(--accent-color)]">
            Output
          </p>

          <pre className="mt-2 text-sm text-[var(--text-secondary)]">
            {`Start
Data received
End`}
          </pre>
        </div>

        <ul className="list-disc pl-6 space-y-2 text-sm text-[var(--text-secondary)]">
          <li>
            <code className="text-[var(--accent-color)]">async</code> makes a
            function return a Promise.
          </li>
          <li>
            <code className="text-[var(--accent-color)]">await</code> waits for
            a Promise to settle inside an async function.
          </li>
          <li>
            It pauses that async function, not the entire JavaScript thread.
          </li>
        </ul>
      </section>

      {/* Error Handling */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Error Handling</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          We can use try/catch with async/await to handle errors from
          asynchronous operations.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--accent-background)] p-4">
          <pre className="overflow-x-auto text-sm">
            <code>{`async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/users");

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

fetchData();`}</code>
          </pre>
        </div>
      </section>

      {/* Comparison */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">
          Callbacks vs Promises vs Async/Await
        </h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-left text-sm">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="p-3">Callbacks</th>
                <th className="p-3">Promises</th>
                <th className="p-3">Async/Await</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr>
                <td className="p-3 border-t border-[var(--border-color)]">
                  Uses callback functions.
                </td>
                <td className="p-3 border-t border-[var(--border-color)]">
                  Uses Promise objects.
                </td>
                <td className="p-3 border-t border-[var(--border-color)]">
                  Uses async functions and await.
                </td>
              </tr>
              <tr>
                <td className="p-3 border-t border-[var(--border-color)]">
                  Deep nesting can happen.
                </td>
                <td className="p-3 border-t border-[var(--border-color)]">
                  Supports chaining.
                </td>
                <td className="p-3 border-t border-[var(--border-color)]">
                  Looks like sequential code.
                </td>
              </tr>
              <tr>
                <td className="p-3 border-t border-[var(--border-color)]">
                  Traditional approach.
                </td>
                <td className="p-3 border-t border-[var(--border-color)]">
                  Supports async composition.
                </td>
                <td className="p-3 border-t border-[var(--border-color)]">
                  Built on Promises.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-5 space-y-3">
        <h2 className="text-xl font-semibold">Key Takeaways</h2>

        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>Asynchronous programming avoids unnecessary waiting.</li>
          <li>Callbacks are functions executed later.</li>
          <li>Promises represent future operation results.</li>
          <li>Promises have Pending, Fulfilled and Rejected states.</li>
          <li>Async/Await makes Promise-based code easier to read.</li>
          <li>Try/Catch helps handle asynchronous errors.</li>
        </ul>
      </section>

      {/* Next Topic */}
      <div className="border-t border-[var(--border-color)] pt-5">
        <p className="text-sm text-[var(--text-muted)]">NEXT TOPIC</p>
        <h3 className="mt-1 text-lg font-semibold text-[var(--accent-color)]">
          Event Loop
        </h3>
      </div>
    </div>
  );
};

export default AsynchronousProgramming;
