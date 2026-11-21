import React from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const PromiseAll = () => {
  return (
    <div className="space-y-8">

      {/* Title */}
      <div>
        <h1 className="text-3xl font-bold text-[var(--white-color)]">
          Promise.all()
        </h1>

        <p className="mt-3 leading-7 text-[var(--muted-color)]">
          Promise.all() is a static method that accepts an iterable of
          Promises and returns a single Promise. It fulfills when all
          input Promises fulfill, or rejects as soon as one rejects.
        </p>
      </div>

      {/* What is Promise.all */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--primary-color)]">
          What is Promise.all()?
        </h2>

        <p className="leading-7 text-[var(--muted-color)]">
          Sometimes we need data from multiple independent asynchronous
          operations. Instead of waiting for each operation one by one,
          we can start them together and use Promise.all().
        </p>

        <CodeBlock
          code={`const promise1 = Promise.resolve("User");
const promise2 = Promise.resolve("Orders");
const promise3 = Promise.resolve("Products");

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log(results);
  });

// Output:
// ["User", "Orders", "Products"]`}
        />
      </section>

      {/* How it works */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--primary-color)]">
          How does Promise.all() work?
        </h2>

        <ul className="list-disc space-y-2 pl-6 text-[var(--muted-color)]">
          <li>It accepts an iterable, commonly an array of Promises.</li>
          <li>It waits for all input Promises to fulfill.</li>
          <li>It returns their results in the original input order.</li>
          <li>If any input Promise rejects, the returned Promise rejects with that reason.</li>
        </ul>

        <p className="leading-7 text-[var(--muted-color)]">
          Important: Results maintain the input order, not the order
          in which Promises complete.
        </p>
      </section>

      {/* Practical Example */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--primary-color)]">
          Practical Example
        </h2>

        <p className="leading-7 text-[var(--muted-color)]">
          Imagine a dashboard that needs user information, orders, and
          notifications. These requests can run independently.
        </p>

        <CodeBlock
          code={`function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("User Data"), 1000);
  });
}

function getOrders() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Orders Data"), 2000);
  });
}

function getNotifications() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Notifications Data"), 1500);
  });
}

async function loadDashboard() {
  try {
    const results = await Promise.all([
      getUser(),
      getOrders(),
      getNotifications(),
    ]);

    console.log(results);
  } catch (error) {
    console.error("Request failed:", error);
  }
}

loadDashboard();`}
        />

        <p className="leading-7 text-[var(--muted-color)]">
          All three operations start without waiting for one another.
          Promise.all() fulfills after all three have fulfilled.
          Here, the total waiting time is approximately 2 seconds,
          not 4.5 seconds.
        </p>
      </section>

      {/* Rejection */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--primary-color)]">
          What happens if one Promise rejects?
        </h2>

        <p className="leading-7 text-[var(--muted-color)]">
          If even one input Promise rejects, Promise.all() immediately
          rejects with that rejection reason. Other operations are not
          automatically cancelled; they may continue running.
        </p>

        <CodeBlock
          code={`const promise1 = Promise.resolve("Success");

const promise2 = Promise.reject(
  new Error("Something went wrong")
);

const promise3 = Promise.resolve("Another Success");

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.error(error.message);
  });

// Output:
// Something went wrong`}
        />
      </section>

      {/* Empty Array */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--primary-color)]">
          Promise.all() with an Empty Array
        </h2>

        <p className="leading-7 text-[var(--muted-color)]">
          When Promise.all() receives an empty iterable, it returns
          an already fulfilled Promise containing an empty array.
        </p>

        <CodeBlock
          code={`Promise.all([])
  .then((results) => {
    console.log(results);
  });

// Output:
// []`}
        />
      </section>

      {/* Important Points */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--primary-color)]">
          Important Points
        </h2>

        <ul className="list-disc space-y-2 pl-6 text-[var(--muted-color)]">
          <li>Promise.all() is a static Promise method.</li>
          <li>It is useful for independent asynchronous operations.</li>
          <li>It preserves the original input order in its results.</li>
          <li>It rejects when any input Promise rejects.</li>
          <li>It does not automatically cancel remaining operations.</li>
          <li>It accepts any iterable, not just arrays.</li>
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
              1. What is Promise.all()?
            </h3>
            <p className="mt-1 text-[var(--muted-color)]">
              It accepts an iterable of Promises and returns a Promise
              that fulfills when all inputs fulfill.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--white-color)]">
              2. What happens if one Promise rejects?
            </h3>
            <p className="mt-1 text-[var(--muted-color)]">
              The returned Promise rejects immediately with that
              rejection reason.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--white-color)]">
              3. Does Promise.all() preserve result order?
            </h3>
            <p className="mt-1 text-[var(--muted-color)]">
              Yes. Results follow the original input order, regardless
              of completion order.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--white-color)]">
              4. Does Promise.all() cancel other Promises after rejection?
            </h3>
            <p className="mt-1 text-[var(--muted-color)]">
              No. It rejects its returned Promise, but other operations
              continue unless cancellation is handled separately.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--white-color)]">
              5. When should you use Promise.all()?
            </h3>
            <p className="mt-1 text-[var(--muted-color)]">
              When multiple independent asynchronous operations need
              to complete successfully before continuing.
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
          Promise.allSettled()
        </h3>
      </div>

    </div>
  );
};

export default PromiseAll;