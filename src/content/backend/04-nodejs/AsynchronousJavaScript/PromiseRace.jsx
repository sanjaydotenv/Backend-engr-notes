import React from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const PromiseRace = () => {
  return (
    <div className="space-y-8">

      {/* Title */}
      <div>
        <h1 className="text-3xl font-bold text-[var(--white-color)]">
          Promise.race()
        </h1>

        <p className="mt-3 leading-7 text-[var(--muted-color)]">
          Promise.race() is a static method that accepts an iterable of
          Promises and settles as soon as the first input Promise settles.
        </p>
      </div>

      {/* What is Promise.race */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--primary-color)]">
          What is Promise.race()?
        </h2>

        <p className="leading-7 text-[var(--muted-color)]">
          Promise.race() returns a Promise that adopts the outcome of
          the first input Promise to settle. That outcome can be either
          fulfilled or rejected.
        </p>

        <CodeBlock
          code={`const promise1 = new Promise((resolve) => {
  setTimeout(() => resolve("First Promise"), 1000);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => resolve("Second Promise"), 2000);
});

Promise.race([promise1, promise2])
  .then((result) => {
    console.log(result);
  });

// Output after approximately 1 second:
// First Promise`}
        />
      </section>

      {/* How it works */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--primary-color)]">
          How does Promise.race() work?
        </h2>

        <ul className="list-disc space-y-2 pl-6 text-[var(--muted-color)]">
          <li>It accepts an iterable of Promises.</li>
          <li>It observes all input Promises.</li>
          <li>The first Promise to settle determines the returned Promise's outcome.</li>
          <li>That first result can be either fulfillment or rejection.</li>
          <li>Other operations are not automatically cancelled.</li>
        </ul>

        <p className="leading-7 text-[var(--muted-color)]">
          Important: Promise.race() considers the first settled Promise,
          not necessarily the first successfully fulfilled Promise.
        </p>
      </section>

      {/* Rejection Example */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--primary-color)]">
          What if the First Promise Rejects?
        </h2>

        <p className="leading-7 text-[var(--muted-color)]">
          If the first Promise to settle is rejected, the Promise returned
          by Promise.race() also rejects.
        </p>

        <CodeBlock
          code={`const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Request failed")), 1000);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => resolve("Request successful"), 2000);
});

Promise.race([promise1, promise2])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error.message);
  });

// Output:
// Request failed`}
        />
      </section>

      {/* Practical Example */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--primary-color)]">
          Practical Example: Request Timeout
        </h2>

        <p className="leading-7 text-[var(--muted-color)]">
          Promise.race() can be used to implement a timeout. If an API
          request takes too long, a timeout Promise can reject first.
        </p>

        <CodeBlock
          code={`function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("API data received");
    }, 5000);
  });
}

function timeout() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Request timed out"));
    }, 3000);
  });
}

Promise.race([fetchData(), timeout()])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error.message);
  });

// Output after approximately 3 seconds:
// Request timed out`}
        />

        <p className="leading-7 text-[var(--muted-color)]">
          Here, the timeout Promise rejects before the API operation
          finishes. However, the original API operation continues running.
          Promise.race() does not cancel it automatically.
        </p>
      </section>

      {/* Empty Array */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--primary-color)]">
          Promise.race() with an Empty Array
        </h2>

        <CodeBlock
          code={`const result = Promise.race([]);

console.log(result);

// Output:
// Promise { <pending> }`}
        />

        <p className="leading-7 text-[var(--muted-color)]">
          An empty iterable means there is no Promise to settle the race.
          Therefore, the returned Promise remains pending forever.
        </p>
      </section>

      {/* Comparison */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--primary-color)]">
          Promise.all() vs Promise.race()
        </h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[450px] text-left text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3 text-[var(--white-color)]">Feature</th>
                <th className="p-3 text-[var(--white-color)]">Promise.all()</th>
                <th className="p-3 text-[var(--white-color)]">Promise.race()</th>
              </tr>
            </thead>

            <tbody className="text-[var(--muted-color)]">
              <tr className="border-t border-[var(--border-color)]">
                <td className="p-3">Waits for</td>
                <td className="p-3">All to fulfill</td>
                <td className="p-3">First to settle</td>
              </tr>

              <tr className="border-t border-[var(--border-color)]">
                <td className="p-3">Rejection</td>
                <td className="p-3">Rejects if any input rejects</td>
                <td className="p-3">Adopts first settled outcome</td>
              </tr>

              <tr className="border-t border-[var(--border-color)]">
                <td className="p-3">Result</td>
                <td className="p-3">Array of values</td>
                <td className="p-3">Single outcome</td>
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
          <li>Promise.race() settles with the first input to settle.</li>
          <li>The first result can be fulfilled or rejected.</li>
          <li>It does not automatically cancel other operations.</li>
          <li>It is useful for implementing timeout logic.</li>
          <li>An empty iterable produces a permanently pending Promise.</li>
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
              1. What is Promise.race()?
            </h3>
            <p className="mt-1 text-[var(--muted-color)]">
              It returns a Promise that adopts the outcome of the first
              input Promise to settle.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--white-color)]">
              2. Does Promise.race() return the first fulfilled Promise?
            </h3>
            <p className="mt-1 text-[var(--muted-color)]">
              No. It returns the outcome of the first settled Promise,
              whether fulfilled or rejected.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--white-color)]">
              3. What happens if the first Promise rejects?
            </h3>
            <p className="mt-1 text-[var(--muted-color)]">
              The Promise returned by Promise.race() rejects with the
              same rejection reason.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--white-color)]">
              4. Does Promise.race() cancel remaining Promises?
            </h3>
            <p className="mt-1 text-[var(--muted-color)]">
              No. Other asynchronous operations continue unless
              cancellation is implemented separately.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--white-color)]">
              5. What happens when Promise.race() receives an empty array?
            </h3>
            <p className="mt-1 text-[var(--muted-color)]">
              It returns a Promise that remains pending forever.
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
          Promise.any()
        </h3>
      </div>

    </div>
  );
};

export default PromiseRace;