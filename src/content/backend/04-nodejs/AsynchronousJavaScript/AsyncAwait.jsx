import React from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const AsyncAwait = () => {
  return (
    <div className="space-y-8">

      {/* Title */}
      <div>
        <h1 className="text-3xl font-bold text-[var(--white-color)]">
          async / await
        </h1>

        <p className="mt-3 leading-7 text-[var(--muted-color)]">
          async and await are JavaScript keywords that make asynchronous
          code easier to write and understand. They provide a cleaner way
          to work with Promises.
        </p>
      </div>

      {/* What is Async */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--primary-color)]">
          What is async?
        </h2>

        <p className="leading-7 text-[var(--muted-color)]">
          The async keyword is used before a function declaration. An async
          function always returns a Promise, even if you return a normal value.
        </p>

        <CodeBlock
          code={`async function getData() {
  return "Hello World";
}

const result = getData();

console.log(result);

// Output:
// Promise { "Hello World" }`}
        />

        <p className="leading-7 text-[var(--muted-color)]">
          JavaScript automatically wraps the returned value inside a
          fulfilled Promise.
        </p>
      </section>

      {/* What is Await */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--primary-color)]">
          What is await?
        </h2>

        <p className="leading-7 text-[var(--muted-color)]">
          The await keyword is used to wait for a Promise to settle.
          If the Promise is fulfilled, await gives its resolved value.
          If it is rejected, await throws the rejection reason.
        </p>

        <CodeBlock
          code={`async function getData() {
  const promise = Promise.resolve("Data received");

  const result = await promise;

  console.log(result);
}

getData();

// Output:
// Data received`}
        />

        <p className="leading-7 text-[var(--muted-color)]">
          await pauses the execution of the async function until the
          Promise settles. It does not block the JavaScript main thread.
        </p>
      </section>

      {/* Without Async Await */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--primary-color)]">
          Promise vs async / await
        </h2>

        <p className="leading-7 text-[var(--muted-color)]">
          The same asynchronous operation can be written using Promise
          chaining or async/await.
        </p>

        <div className="space-y-4">
          <div className="rounded-xl border border-[var(--border-color)] p-4">
            <h3 className="mb-3 font-semibold text-[var(--white-color)]">
              Using Promises
            </h3>

            <CodeBlock
              code={`function getUser() {
  return Promise.resolve({
    id: 1,
    name: "Mayur",
  });
}

getUser()
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.error(error);
  });`}
            />
          </div>

          <div className="rounded-xl border border-[var(--border-color)] p-4">
            <h3 className="mb-3 font-semibold text-[var(--white-color)]">
              Using async / await
            </h3>

            <CodeBlock
              code={`function getUser() {
  return Promise.resolve({
    id: 1,
    name: "Mayur",
  });
}

async function displayUser() {
  try {
    const user = await getUser();

    console.log(user);
  } catch (error) {
    console.error(error);
  }
}

displayUser();`}
            />
          </div>
        </div>
      </section>

      {/* Error Handling */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--primary-color)]">
          Error Handling with try / catch
        </h2>

        <p className="leading-7 text-[var(--muted-color)]">
          When an awaited Promise is rejected, await throws an error.
          We can handle it using try/catch.
        </p>

        <CodeBlock
          code={`function fetchUser() {
  return Promise.reject(new Error("User not found"));
}

async function getUser() {
  try {
    const user = await fetchUser();

    console.log(user);
  } catch (error) {
    console.error(error.message);
  } finally {
    console.log("Request completed");
  }
}

getUser();

// Output:
// User not found
// Request completed`}
        />

        <p className="leading-7 text-[var(--muted-color)]">
          The catch block handles the rejection, while finally runs
          whether the operation succeeds or fails.
        </p>
      </section>

      {/* Sequential Execution */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--primary-color)]">
          Sequential Execution
        </h2>

        <p className="leading-7 text-[var(--muted-color)]">
          When multiple await expressions are written one after another,
          each operation waits for the previous one to settle.
        </p>

        <CodeBlock
          code={`const getUser = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve("User loaded"), 1000);
  });

const getOrders = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve("Orders loaded"), 1000);
  });

async function loadData() {
  const user = await getUser();
  console.log(user);

  const orders = await getOrders();
  console.log(orders);
}

loadData();`}
        />

        <p className="leading-7 text-[var(--muted-color)]">
          Here, getOrders() starts only after getUser() resolves.
          This is useful when the second operation depends on the first.
        </p>
      </section>

      {/* Important Notes */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--primary-color)]">
          Important Points
        </h2>

        <ul className="list-disc space-y-2 pl-6 text-[var(--muted-color)]">
          <li>An async function always returns a Promise.</li>
          <li>await can be used inside async functions.</li>
          <li>In modern JavaScript, top-level await is also supported in ES modules.</li>
          <li>await pauses its surrounding async function, not the entire JavaScript thread.</li>
          <li>async/await is built on top of Promises; it does not replace them.</li>
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
              1. What is async/await?
            </h3>
            <p className="mt-1 text-[var(--muted-color)]">
              It is a syntax for working with Promises that makes
              asynchronous code easier to read and write.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--white-color)]">
              2. What does an async function return?
            </h3>
            <p className="mt-1 text-[var(--muted-color)]">
              An async function always returns a Promise.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--white-color)]">
              3. Does await block the JavaScript main thread?
            </h3>
            <p className="mt-1 text-[var(--muted-color)]">
              No. It suspends the execution of its surrounding async
              function while other JavaScript work can continue.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--white-color)]">
              4. How do you handle errors in async/await?
            </h3>
            <p className="mt-1 text-[var(--muted-color)]">
              Use try/catch to handle errors from awaited Promises.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--white-color)]">
              5. Can we use await without async?
            </h3>
            <p className="mt-1 text-[var(--muted-color)]">
              Normally, await is used inside async functions. However,
              top-level await is supported in JavaScript ES modules.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--white-color)]">
              6. Does async/await replace Promises?
            </h3>
            <p className="mt-1 text-[var(--muted-color)]">
              No. async/await is built on Promises and provides a
              cleaner syntax for handling them.
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
          Promise.all()
        </h3>
      </div>

    </div>
  );
};

export default AsyncAwait;