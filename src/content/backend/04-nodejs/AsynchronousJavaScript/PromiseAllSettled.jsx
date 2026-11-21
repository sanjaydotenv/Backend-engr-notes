import React from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const PromiseAllSettled = () => {
  return (
    <div className="space-y-8">

      {/* Title */}
      <div>
        <h1 className="text-3xl font-bold text-[var(--white-color)]">
          Promise.allSettled()
        </h1>

        <p className="mt-3 leading-7 text-[var(--muted-color)]">
          Promise.allSettled() is a static method that waits for all
          input Promises to settle, regardless of whether they fulfill
          or reject.
        </p>
      </div>

      {/* What is Promise.allSettled */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--primary-color)]">
          What is Promise.allSettled()?
        </h2>

        <p className="leading-7 text-[var(--muted-color)]">
          Unlike Promise.all(), Promise.allSettled() does not reject
          just because one of the input Promises rejects. It waits for
          every Promise to finish and provides the outcome of each one.
        </p>

        <CodeBlock
          code={`const promise1 = Promise.resolve("Success");
const promise2 = Promise.reject("Failed");

Promise.allSettled([promise1, promise2])
  .then((results) => {
    console.log(results);
  });`}
        />
      </section>

      {/* Result Structure */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--primary-color)]">
          Result Structure
        </h2>

        <p className="leading-7 text-[var(--muted-color)]">
          Each result is an object containing a status and its
          corresponding value or rejection reason.
        </p>

        <CodeBlock
          code={`[
  {
    status: "fulfilled",
    value: "Success"
  },
  {
    status: "rejected",
    reason: "Failed"
  }
]`}
        />

        <ul className="list-disc space-y-2 pl-6 text-[var(--muted-color)]">
          <li>
            <strong>fulfilled:</strong> The Promise completed successfully.
            Its result is available in the value property.
          </li>
          <li>
            <strong>rejected:</strong> The Promise failed.
            Its error is available in the reason property.
          </li>
        </ul>
      </section>

      {/* Practical Example */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--primary-color)]">
          Practical Example
        </h2>

        <p className="leading-7 text-[var(--muted-color)]">
          Imagine an admin dashboard loading multiple independent
          reports. Even if one request fails, we still want the
          results of the remaining requests.
        </p>

        <CodeBlock
          code={`const getUsers = () => Promise.resolve("Users loaded");

const getOrders = () => Promise.reject(
  new Error("Orders request failed")
);

const getProducts = () => Promise.resolve("Products loaded");

async function loadReports() {
  const results = await Promise.allSettled([
    getUsers(),
    getOrders(),
    getProducts(),
  ]);

  results.forEach((result) => {
    if (result.status === "fulfilled") {
      console.log("Success:", result.value);
    } else {
      console.log("Error:", result.reason.message);
    }
  });
}

loadReports();`}
        />

        <p className="leading-7 text-[var(--muted-color)]">
          All three operations are allowed to finish. We can inspect
          each result separately without losing successful results
          because of one failure.
        </p>
      </section>

      {/* Empty Array */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--primary-color)]">
          Promise.allSettled() with an Empty Array
        </h2>

        <CodeBlock
          code={`Promise.allSettled([])
  .then((results) => {
    console.log(results);
  });

// Output:
// []`}
        />

        <p className="leading-7 text-[var(--muted-color)]">
          An empty iterable produces an already fulfilled Promise
          containing an empty array.
        </p>
      </section>

      {/* Comparison */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--primary-color)]">
          Promise.all() vs Promise.allSettled()
        </h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[450px] text-left text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3 text-[var(--white-color)]">Feature</th>
                <th className="p-3 text-[var(--white-color)]">Promise.all()</th>
                <th className="p-3 text-[var(--white-color)]">Promise.allSettled()</th>
              </tr>
            </thead>

            <tbody className="text-[var(--muted-color)]">
              <tr className="border-t border-[var(--border-color)]">
                <td className="p-3">Waits for</td>
                <td className="p-3">All fulfillments</td>
                <td className="p-3">All settlements</td>
              </tr>

              <tr className="border-t border-[var(--border-color)]">
                <td className="p-3">On rejection</td>
                <td className="p-3">Rejects immediately</td>
                <td className="p-3">Returns rejection result</td>
              </tr>

              <tr className="border-t border-[var(--border-color)]">
                <td className="p-3">Result</td>
                <td className="p-3">Array of values</td>
                <td className="p-3">Array of result objects</td>
              </tr>

              <tr className="border-t border-[var(--border-color)]">
                <td className="p-3">Best use</td>
                <td className="p-3">All operations must succeed</td>
                <td className="p-3">Need every operation's outcome</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Important Points */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--primary-color)]">
          Important Points
        </h2>

        <ul className="list-disc space-y-2 pl-6 text-[var(--muted-color)]">
          <li>It waits until every input Promise settles.</li>
          <li>It does not reject because an input Promise rejects.</li>
          <li>Each result contains a status property.</li>
          <li>Fulfilled results contain value; rejected results contain reason.</li>
          <li>Results maintain the original input order.</li>
        </ul>
      </section>

      {/* Interview Questions */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[var(--primary-color)]">
          Important Interview Questions
        </h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-[var(--white-color)]">
              1. What is Promise.allSettled()?
            </h3>
            <p className="mt-1 text-[var(--muted-color)]">
              It waits for all input Promises to settle and returns
              an array containing each Promise's outcome.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--white-color)]">
              2. Does Promise.allSettled() reject if one Promise fails?
            </h3>
            <p className="mt-1 text-[var(--muted-color)]">
              No. It returns the rejected Promise's status and reason
              as part of the results array.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--white-color)]">
              3. What is the difference between Promise.all() and Promise.allSettled()?
            </h3>
            <p className="mt-1 text-[var(--muted-color)]">
              Promise.all() rejects when an input rejects, whereas
              Promise.allSettled() waits for every input to settle.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--white-color)]">
              4. What properties are returned by Promise.allSettled()?
            </h3>
            <p className="mt-1 text-[var(--muted-color)]">
              Fulfilled results contain status and value. Rejected
              results contain status and reason.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--white-color)]">
              5. When should you use Promise.allSettled()?
            </h3>
            <p className="mt-1 text-[var(--muted-color)]">
              When you need the outcome of every asynchronous operation,
              even if some operations fail.
            </p>
          </div>
        </div>
      </section>

      {/* Next Topic */}
      <div className="border-t border-[var(--border-color)] pt-5">
        <p className="text-sm text-[var(--muted-color)]">
          NEXT TOPIC
        </p>

        <h3 className="mt-1 text-lg font-semibold text-[var(--primary-color)]">
          Promise.race()
        </h3>
      </div>

    </div>
  );
};

export default PromiseAllSettled;