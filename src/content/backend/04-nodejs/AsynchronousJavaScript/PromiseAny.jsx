import React from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const PromiseAny = () => {
  return (
    <div className="space-y-8">

      {/* Title */}
      <div>
        <h1 className="text-3xl font-bold text-[var(--white-color)]">
          Promise.any()
        </h1>

        <p className="mt-3 leading-7 text-[var(--muted-color)]">
          Promise.any() is a static method that fulfills as soon as
          the first input Promise fulfills. It ignores rejected
          Promises unless all input Promises reject.
        </p>
      </div>

      {/* What is Promise.any */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--primary-color)]">
          What is Promise.any()?
        </h2>

        <p className="leading-7 text-[var(--muted-color)]">
          Sometimes multiple asynchronous operations perform the same
          task. We only need one successful result. Promise.any()
          helps us get the first fulfilled result.
        </p>

        <CodeBlock
          code={`const promise1 = Promise.reject("Failed");

const promise2 = new Promise((resolve) => {
  setTimeout(() => resolve("Second Promise"), 2000);
});

const promise3 = new Promise((resolve) => {
  setTimeout(() => resolve("Third Promise"), 1000);
});

Promise.any([promise1, promise2, promise3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

// Output after approximately 1 second:
// Third Promise`}
        />
      </section>

      {/* How it works */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--primary-color)]">
          How does Promise.any() work?
        </h2>

        <ul className="list-disc space-y-2 pl-6 text-[var(--muted-color)]">
          <li>It accepts an iterable of Promises.</li>
          <li>It waits for a successful fulfillment.</li>
          <li>Rejected Promises do not stop the operation.</li>
          <li>The first fulfilled Promise determines the result.</li>
          <li>If every Promise rejects, the returned Promise rejects with an AggregateError.</li>
        </ul>

        <p className="leading-7 text-[var(--muted-color)]">
          Important: Promise.any() looks for the first successful
          result, not simply the first Promise to settle.
        </p>
      </section>

      {/* All Rejected */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--primary-color)]">
          What if All Promises Reject?
        </h2>

        <p className="leading-7 text-[var(--muted-color)]">
          If every input Promise rejects, Promise.any() rejects with
          an AggregateError containing all rejection reasons.
        </p>

        <CodeBlock
          code={`const promise1 = Promise.reject("Error 1");
const promise2 = Promise.reject("Error 2");
const promise3 = Promise.reject("Error 3");

Promise.any([promise1, promise2, promise3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error instanceof AggregateError);
    console.log(error.errors);
  });

// Output:
// true
// ["Error 1", "Error 2", "Error 3"]`}
        />
      </section>

      {/* Practical Example */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--primary-color)]">
          Practical Example: Multiple API Servers
        </h2>

        <p className="leading-7 text-[var(--muted-color)]">
          Imagine an application connected to multiple servers.
          If one server fails but another responds successfully,
          we can use the first successful response.
        </p>

        <CodeBlock
          code={`const server1 = fetch("/api/server-1/data");
const server2 = fetch("/api/server-2/data");
const server3 = fetch("/api/server-3/data");

Promise.any([server1, server2, server3])
  .then(async (response) => {
    if (!response.ok) {
      throw new Error("Server returned an error");
    }

    const data = await response.json();

    console.log("Data received:", data);
  })
  .catch((error) => {
    console.error("All servers failed:", error);
  });`}
        />

        <p className="leading-7 text-[var(--muted-color)]">
          Note: fetch() rejects for network failures, but HTTP error
          responses such as 404 or 500 do not automatically reject.
          That's why we check response.ok separately.
        </p>
      </section>

      {/* Empty Array */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--primary-color)]">
          Promise.any() with an Empty Array
        </h2>

        <CodeBlock
          code={`Promise.any([])
  .catch((error) => {
    console.log(error instanceof AggregateError);
    console.log(error.errors);
  });

// Output:
// true
// []`}
        />

        <p className="leading-7 text-[var(--muted-color)]">
          An empty iterable has no Promise that can fulfill, so
          Promise.any() immediately rejects with an AggregateError.
        </p>
      </section>

      {/* Comparison */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--primary-color)]">
          Promise.race() vs Promise.any()
        </h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[450px] text-left text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3 text-[var(--white-color)]">Feature</th>
                <th className="p-3 text-[var(--white-color)]">Promise.race()</th>
                <th className="p-3 text-[var(--white-color)]">Promise.any()</th>
              </tr>
            </thead>

            <tbody className="text-[var(--muted-color)]">
              <tr className="border-t border-[var(--border-color)]">
                <td className="p-3">Waits for</td>
                <td className="p-3">First settled Promise</td>
                <td className="p-3">First fulfilled Promise</td>
              </tr>

              <tr className="border-t border-[var(--border-color)]">
                <td className="p-3">First rejection</td>
                <td className="p-3">Rejects immediately</td>
                <td className="p-3">Ignores it</td>
              </tr>

              <tr className="border-t border-[var(--border-color)]">
                <td className="p-3">All rejected</td>
                <td className="p-3">Already rejects on first settlement</td>
                <td className="p-3">Rejects with AggregateError</td>
              </tr>

              <tr className="border-t border-[var(--border-color)]">
                <td className="p-3">Best use</td>
                <td className="p-3">First response wins</td>
                <td className="p-3">First successful response wins</td>
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
          <li>Promise.any() returns the first fulfilled result.</li>
          <li>It ignores individual rejections while waiting for fulfillment.</li>
          <li>If all inputs reject, it throws an AggregateError.</li>
          <li>AggregateError.errors contains all rejection reasons.</li>
          <li>It does not automatically cancel remaining operations.</li>
          <li>An empty iterable immediately produces an AggregateError rejection.</li>
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
              1. What is Promise.any()?
            </h3>
            <p className="mt-1 text-[var(--muted-color)]">
              It fulfills with the first fulfilled input Promise,
              ignoring individual rejections.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--white-color)]">
              2. What happens if all Promises reject?
            </h3>
            <p className="mt-1 text-[var(--muted-color)]">
              It rejects with an AggregateError containing all
              rejection reasons.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--white-color)]">
              3. What is AggregateError?
            </h3>
            <p className="mt-1 text-[var(--muted-color)]">
              It is an error object that groups multiple errors.
              Its errors property contains the individual rejection reasons.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--white-color)]">
              4. What is the difference between Promise.race() and Promise.any()?
            </h3>
            <p className="mt-1 text-[var(--muted-color)]">
              Promise.race() settles with the first settled Promise,
              while Promise.any() fulfills with the first fulfilled Promise.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--white-color)]">
              5. Does Promise.any() cancel other Promises?
            </h3>
            <p className="mt-1 text-[var(--muted-color)]">
              No. Other asynchronous operations continue unless
              cancellation is implemented separately.
            </p>
          </div>
        </div>
      </section>

      {/* Chapter Complete */}
      <div className="border-t border-[var(--border-color)] pt-5">
        <p className="text-sm text-green-500">
          CHAPTER COMPLETED
        </p>

        <h3 className="mt-1 text-lg font-semibold text-[var(--primary-color)]">
          Asynchronous JavaScript
        </h3>

        <p className="mt-2 text-sm text-[var(--muted-color)]">
          You have completed all topics in this chapter, from synchronous
          execution and the Event Loop to Promises and their static methods.
        </p>
      </div>

    </div>
  );
};

export default PromiseAny;