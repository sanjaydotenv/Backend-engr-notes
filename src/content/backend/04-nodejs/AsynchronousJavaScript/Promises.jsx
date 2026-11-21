import React from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const Promises = () => {
  return (
    <div className="space-y-8">

      {/* Title */}
      <div>
        <h1 className="text-3xl font-bold text-[var(--white-color)]">
          Promises
        </h1>

        <p className="mt-3 leading-7 text-[var(--muted-color)]">
          A Promise is a JavaScript object that represents the eventual
          completion or failure of an asynchronous operation.
        </p>
      </div>

      {/* What is Promise */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--primary-color)]">
          What is a Promise?
        </h2>

        <p className="leading-7 text-[var(--muted-color)]">
          When an asynchronous operation starts, we may not get its result
          immediately. A Promise represents a result that will be available
          in the future.
        </p>

        <CodeBlock
          code={`const promise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Operation successful");
  } else {
    reject("Operation failed");
  }
});

console.log(promise);`}
        />

        <p className="leading-7 text-[var(--muted-color)]">
          The Promise constructor receives an executor function that runs
          immediately. It provides two functions: <strong>resolve</strong>
          and <strong>reject</strong>.
        </p>
      </section>

      {/* States */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--primary-color)]">
          States of a Promise
        </h2>

        <p className="leading-7 text-[var(--muted-color)]">
          A Promise has three possible states:
        </p>

        <div className="grid gap-3 sm:grid-cols-3">
          {[
            {
              title: "Pending",
              desc: "The asynchronous operation is still in progress.",
              color: "text-yellow-400",
            },
            {
              title: "Fulfilled",
              desc: "The operation completed successfully.",
              color: "text-green-400",
            },
            {
              title: "Rejected",
              desc: "The operation failed.",
              color: "text-red-400",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[var(--border-color)] p-4"
            >
              <h3 className={`font-semibold ${item.color}`}>
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted-color)]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="leading-7 text-[var(--muted-color)]">
          Once a Promise becomes fulfilled or rejected, it is settled.
          Its state cannot change again.
        </p>
      </section>

      {/* Resolve Reject */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--primary-color)]">
          resolve() and reject()
        </h2>

        <ul className="list-disc space-y-2 pl-6 text-[var(--muted-color)]">
          <li>
            <strong>resolve(value):</strong> Fulfills the Promise with a value.
          </li>
          <li>
            <strong>reject(error):</strong> Rejects the Promise with a reason.
          </li>
        </ul>

        <CodeBlock
          code={`const promise = new Promise((resolve, reject) => {
  const age = 20;

  if (age >= 18) {
    resolve("You are eligible");
  } else {
    reject("You are not eligible");
  }
});`}
        />
      </section>

      {/* Then Catch Finally */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--primary-color)]">
          then(), catch() and finally()
        </h2>

        <p className="leading-7 text-[var(--muted-color)]">
          These methods handle the result of a Promise.
        </p>

        <CodeBlock
          code={`const promise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Data loaded successfully");
  } else {
    reject(new Error("Something went wrong"));
  }
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error.message);
  })
  .finally(() => {
    console.log("Operation finished");
  });`}
        />

        <div className="space-y-2 text-[var(--muted-color)]">
          <p>
            <strong>then():</strong> Runs when the Promise is fulfilled.
          </p>
          <p>
            <strong>catch():</strong> Handles Promise rejection or errors
            propagated through the chain.
          </p>
          <p>
            <strong>finally():</strong> Runs when the Promise settles,
            whether fulfilled or rejected.
          </p>
        </div>
      </section>

      {/* Practical Example */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--primary-color)]">
          Practical Example: Simulating an API Request
        </h2>

        <p className="leading-7 text-[var(--muted-color)]">
          setTimeout() can simulate an asynchronous operation such as
          waiting for an API response.
        </p>

        <CodeBlock
          code={`function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = {
        id: 1,
        name: "Mayur",
      };

      resolve(user);
    }, 2000);
  });
}

fetchUser()
  .then((user) => {
    console.log("User:", user);
  })
  .catch((error) => {
    console.error(error);
  });`}
        />

        <p className="leading-7 text-[var(--muted-color)]">
          The function returns a Promise immediately. After approximately
          2 seconds, the Promise is fulfilled with the user object.
        </p>
      </section>

      {/* Promise Chaining */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--primary-color)]">
          Promise Chaining
        </h2>

        <p className="leading-7 text-[var(--muted-color)]">
          Promise chaining allows us to perform multiple asynchronous
          operations in sequence. Each then() can return a value or another
          Promise for the next then() to handle.
        </p>

        <CodeBlock
          code={`Promise.resolve(10)
  .then((value) => {
    console.log(value); // 10
    return value * 2;
  })
  .then((value) => {
    console.log(value); // 20
    return value + 5;
  })
  .then((value) => {
    console.log(value); // 25
  })
  .catch((error) => {
    console.error(error);
  });`}
        />

        <p className="leading-7 text-[var(--muted-color)]">
          Important: Every then() returns a new Promise, which makes
          chaining possible.
        </p>
      </section>

      {/* Important Interview Questions */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[var(--primary-color)]">
          Important Interview Questions
        </h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-[var(--white-color)]">
              1. What is a Promise in JavaScript?
            </h3>
            <p className="mt-1 text-[var(--muted-color)]">
              A Promise is an object representing the eventual success or
              failure of an asynchronous operation.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--white-color)]">
              2. What are the three states of a Promise?
            </h3>
            <p className="mt-1 text-[var(--muted-color)]">
              Pending, Fulfilled, and Rejected.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--white-color)]">
              3. What is the difference between resolve() and reject()?
            </h3>
            <p className="mt-1 text-[var(--muted-color)]">
              resolve() fulfills a Promise, while reject() rejects it.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--white-color)]">
              4. What is Promise chaining?
            </h3>
            <p className="mt-1 text-[var(--muted-color)]">
              It is the process of connecting multiple then() methods to
              execute operations sequentially.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--white-color)]">
              5. What is the difference between then(), catch(), and finally()?
            </h3>
            <p className="mt-1 text-[var(--muted-color)]">
              then() handles fulfillment, catch() handles rejection, and
              finally() runs after the Promise settles.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--white-color)]">
              6. Can a settled Promise change its state?
            </h3>
            <p className="mt-1 text-[var(--muted-color)]">
              No. Once fulfilled or rejected, its state is permanent.
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
          async / await
        </h3>
      </div>

    </div>
  );
};

export default Promises;