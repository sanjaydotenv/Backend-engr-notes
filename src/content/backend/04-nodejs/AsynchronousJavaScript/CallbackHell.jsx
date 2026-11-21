import React from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const CallbackHell = () => {
  return (
    <div className="space-y-8">

      {/* Title */}
      <div>
        <h1 className="text-3xl font-bold text-[var(--white-color)]">
          Callback Hell
        </h1>

        <p className="mt-3 text-[var(--muted-color)] leading-7">
          Callback Hell is a situation where multiple asynchronous callbacks
          are nested inside one another, making code difficult to read,
          understand, and maintain.
        </p>
      </div>

      {/* What is Callback Hell */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--primary-color)]">
          What is Callback Hell?
        </h2>

        <p className="text-[var(--muted-color)] leading-7">
          When one asynchronous operation depends on the result of another,
          callbacks are often nested. As the number of dependent operations
          increases, the code becomes deeply nested.
        </p>

        <CodeBlock
          code={`getUser(userId, (user) => {
  getOrders(user.id, (orders) => {
    getPayment(orders[0].id, (payment) => {
      sendReceipt(payment, (receipt) => {
        console.log("Receipt sent:", receipt);
      });
    });
  });
});`}
        />

        <p className="text-[var(--muted-color)] leading-7">
          Each callback waits for the previous operation's result. This
          nested structure is commonly called the <strong>Callback Hell</strong>.
        </p>
      </section>

      {/* Problems */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--primary-color)]">
          Problems with Callback Hell
        </h2>

        <ul className="list-disc pl-6 space-y-2 text-[var(--muted-color)]">
          <li><strong>Readability:</strong> Deep nesting makes code difficult to read.</li>
          <li><strong>Maintainability:</strong> Updating nested logic becomes complicated.</li>
          <li><strong>Error Handling:</strong> Every callback may need separate error handling.</li>
          <li><strong>Inversion of Control:</strong> We depend on another function to execute our callback correctly.</li>
        </ul>
      </section>

      {/* Error Handling */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--primary-color)]">
          Error Handling in Nested Callbacks
        </h2>

        <p className="text-[var(--muted-color)] leading-7">
          With error-first callbacks, each asynchronous operation must check
          for errors before continuing.
        </p>

        <CodeBlock
          code={`getUser(userId, (err, user) => {
  if (err) return console.error(err);

  getOrders(user.id, (err, orders) => {
    if (err) return console.error(err);

    getPayment(orders[0].id, (err, payment) => {
      if (err) return console.error(err);

      console.log(payment);
    });
  });
});`}
        />

        <p className="text-[var(--muted-color)] leading-7">
          As more operations are added, managing these nested error checks
          becomes difficult.
        </p>
      </section>

      {/* Solutions */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--primary-color)]">
          How to Avoid Callback Hell?
        </h2>

        <p className="text-[var(--muted-color)] leading-7">
          There are two common approaches:
        </p>

        <div className="space-y-3">
          <div className="rounded-xl border border-[var(--border-color)] p-4">
            <h3 className="font-semibold text-[var(--white-color)]">
              1. Use Named Functions
            </h3>
            <p className="mt-2 text-[var(--muted-color)]">
              Move nested callback logic into separate functions to improve
              readability.
            </p>

            <CodeBlock
              code={`function handlePayment(err, payment) {
  if (err) return console.error(err);

  console.log(payment);
}

function handleOrders(err, orders) {
  if (err) return console.error(err);

  getPayment(orders[0].id, handlePayment);
}

function handleUser(err, user) {
  if (err) return console.error(err);

  getOrders(user.id, handleOrders);
}

getUser(userId, handleUser);`}
            />
          </div>

          <div className="rounded-xl border border-[var(--border-color)] p-4">
            <h3 className="font-semibold text-[var(--white-color)]">
              2. Use Promises and async/await
            </h3>
            <p className="mt-2 text-[var(--muted-color)]">
              Promises and async/await provide cleaner ways to handle
              dependent asynchronous operations.
            </p>
            <p className="mt-2 text-[var(--muted-color)]">
              We will learn these approaches in the upcoming topics.
            </p>
          </div>
        </div>
      </section>

      {/* Important Interview Questions */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[var(--primary-color)]">
          Important Interview Questions
        </h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-[var(--white-color)]">
              1. What is Callback Hell?
            </h3>
            <p className="mt-1 text-[var(--muted-color)]">
              Callback Hell is deeply nested callback code that makes
              asynchronous logic difficult to read and maintain.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--white-color)]">
              2. Why does Callback Hell occur?
            </h3>
            <p className="mt-1 text-[var(--muted-color)]">
              It occurs when multiple asynchronous operations depend on
              the results of previous operations and callbacks become nested.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--white-color)]">
              3. How can you avoid Callback Hell?
            </h3>
            <p className="mt-1 text-[var(--muted-color)]">
              By using named functions, Promises, and async/await.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--white-color)]">
              4. What is Inversion of Control in callbacks?
            </h3>
            <p className="mt-1 text-[var(--muted-color)]">
              It means giving control of callback execution to another
              function, relying on it to invoke the callback correctly.
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
          Promises
        </h3>
      </div>

    </div>
  );
};

export default CallbackHell;