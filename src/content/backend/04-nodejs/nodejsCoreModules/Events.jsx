import React from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const Events = () => {
  return (
    <div className="space-y-10 text-[var(--text-primary)]">
      {/* Introduction */}
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Node.js Events Module</h1>

        <p className="leading-7 text-[var(--text-secondary)]">
          Node.js uses an event-driven architecture. Events allow different
          parts of an application to communicate with each other when something
          happens.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          The Events module provides the EventEmitter class, which allows
          developers to create, listen for, emit and manage custom events.
        </p>
      </section>

      {/* What is Event */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">1. What is an Event?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          An event is an action or occurrence that happens inside an
          application. Other parts of the application can listen for that event
          and execute code when it occurs.
        </p>

        <h3 className="text-lg font-semibold">Common Examples</h3>

        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>A user registers successfully.</li>
          <li>A user places an order.</li>
          <li>A file finishes reading.</li>
          <li>A server starts listening.</li>
          <li>A database connection is established.</li>
        </ul>

        <CodeBlock
          code={`// An event happens
// Other code listens and responds

User Registered
       |
       v
Registration Event
       |
       v
Send Welcome Email`}
        />
      </section>

      {/* EventEmitter */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">2. What is EventEmitter?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          EventEmitter is a class provided by the Node.js Events module. It
          allows us to create custom events and attach listener functions that
          execute when those events are emitted.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          We create an EventEmitter object and use its methods to manage events.
        </p>

        <CodeBlock
          code={`const EventEmitter = require("node:events");

const eventEmitter = new EventEmitter();`}
        />

        <h3 className="text-lg font-semibold">ES Modules</h3>

        <CodeBlock
          code={`import EventEmitter from "node:events";

const eventEmitter = new EventEmitter();`}
        />
      </section>

      {/* Basic Event */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          3. Creating and Emitting an Event
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The basic event workflow has two steps:
        </p>

        <ol className="list-decimal space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Register a listener for an event.</li>
          <li>Emit that event to execute the listener.</li>
        </ol>

        <CodeBlock
          code={`const EventEmitter = require("node:events");

const eventEmitter = new EventEmitter();

// Register listener
eventEmitter.on("welcome", () => {
  console.log("Welcome to Node.js!");
});

// Emit event
eventEmitter.emit("welcome");`}
        />

        <p className="text-[var(--text-secondary)]">Output:</p>

        <CodeBlock code={`Welcome to Node.js!`} />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <p className="font-semibold text-[var(--accent-color)]">Important</p>
          <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
            Register the listener before emitting the event. EventEmitter does
            not store an event for listeners that are registered later.
          </p>
        </div>
      </section>

      {/* on */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">4. on() Method</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The on() method registers a listener for a specific event. The
          listener executes every time that event is emitted.
        </p>

        <CodeBlock
          code={`const EventEmitter = require("node:events");

const emitter = new EventEmitter();

emitter.on("orderPlaced", () => {
  console.log("Order received!");
});

emitter.emit("orderPlaced");
emitter.emit("orderPlaced");
emitter.emit("orderPlaced");`}
        />

        <p className="text-[var(--text-secondary)]">Output:</p>

        <CodeBlock
          code={`Order received!
Order received!
Order received!`}
        />
      </section>

      {/* emit */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">5. emit() Method</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The emit() method triggers an event. It can also pass arguments to the
          registered listener functions.
        </p>

        <CodeBlock
          code={`const EventEmitter = require("node:events");

const emitter = new EventEmitter();

emitter.on("userRegistered", (username, email) => {
  console.log("Username:", username);
  console.log("Email:", email);
});

emitter.emit(
  "userRegistered",
  "Mayur",
  "mayur@example.com"
);`}
        />

        <p className="text-[var(--text-secondary)]">Output:</p>

        <CodeBlock
          code={`Username: Mayur
Email: mayur@example.com`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Arguments passed to emit() are received by the listener in the same
          order.
        </p>
      </section>

      {/* once */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">6. once() Method</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The once() method registers a listener that executes only one time.
          After its first execution, Node.js automatically removes that
          listener.
        </p>

        <CodeBlock
          code={`const EventEmitter = require("node:events");

const emitter = new EventEmitter();

emitter.once("login", () => {
  console.log("User logged in!");
});

emitter.emit("login");
emitter.emit("login");
emitter.emit("login");`}
        />

        <p className="text-[var(--text-secondary)]">Output:</p>

        <CodeBlock code={`User logged in!`} />
      </section>

      {/* off */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">7. off() Method</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The off() method removes a previously registered listener from an
          event. It is an alias of removeListener().
        </p>

        <CodeBlock
          code={`const EventEmitter = require("node:events");

const emitter = new EventEmitter();

function welcome() {
  console.log("Welcome!");
}

// Register listener
emitter.on("welcome", welcome);

// Remove listener
emitter.off("welcome", welcome);

// This listener will not execute
emitter.emit("welcome");`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          We must pass the same function reference that was used when
          registering the listener.
        </p>
      </section>

      {/* removeAllListeners */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          8. removeAllListeners() Method
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          removeAllListeners() removes all listeners registered for a particular
          event. If no event name is provided, it removes all listeners from
          that EventEmitter instance.
        </p>

        <CodeBlock
          code={`const EventEmitter = require("node:events");

const emitter = new EventEmitter();

emitter.on("login", () => {
  console.log("Login listener 1");
});

emitter.on("login", () => {
  console.log("Login listener 2");
});

// Remove all login listeners
emitter.removeAllListeners("login");

emitter.emit("login");`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Use this carefully because it can remove listeners registered by other
          parts of your application.
        </p>
      </section>

      {/* Multiple Listeners */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">9. Multiple Event Listeners</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Multiple listeners can be registered for the same event. When the
          event is emitted, they execute in registration order.
        </p>

        <CodeBlock
          code={`const EventEmitter = require("node:events");

const emitter = new EventEmitter();

emitter.on("orderPlaced", () => {
  console.log("Save order in database");
});

emitter.on("orderPlaced", () => {
  console.log("Send confirmation email");
});

emitter.on("orderPlaced", () => {
  console.log("Notify seller");
});

emitter.emit("orderPlaced");`}
        />

        <p className="text-[var(--text-secondary)]">Output:</p>

        <CodeBlock
          code={`Save order in database
Send confirmation email
Notify seller`}
        />
      </section>

      {/* Listener Count */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">10. Listener Management</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          EventEmitter provides methods to inspect registered listeners. These
          are useful for debugging and managing event subscriptions.
        </p>

        <CodeBlock
          code={`const EventEmitter = require("node:events");

const emitter = new EventEmitter();

function firstListener() {
  console.log("First listener");
}

function secondListener() {
  console.log("Second listener");
}

emitter.on("test", firstListener);
emitter.on("test", secondListener);

// Count listeners
console.log(emitter.listenerCount("test"));

// Get listeners
console.log(emitter.listeners("test"));

// Get event names
console.log(emitter.eventNames());`}
        />

        <h3 className="text-lg font-semibold">Common Methods</h3>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="p-3 text-left">Method</th>
                <th className="p-3 text-left">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["on()", "Register a listener"],
                ["addListener()", "Alias of on()"],
                ["emit()", "Trigger an event"],
                ["once()", "Register a one-time listener"],
                ["off()", "Remove a listener"],
                ["removeListener()", "Remove a specific listener"],
                ["removeAllListeners()", "Remove event listeners"],
                ["listenerCount()", "Count listeners for an event"],
                ["listeners()", "Get registered listener functions"],
                ["eventNames()", "Get event names with registered listeners"],
              ].map(([method, purpose]) => (
                <tr
                  key={method}
                  className="border-t border-[var(--border-color)]"
                >
                  <td className="p-3 font-medium text-[var(--accent-color)]">
                    {method}
                  </td>
                  <td className="p-3 text-[var(--text-secondary)]">
                    {purpose}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Error Event */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">11. Special error Event</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          EventEmitter treats the error event specially. If an EventEmitter
          emits an error event without a registered error listener, Node.js
          throws the error and may terminate the process.
        </p>

        <CodeBlock
          code={`const EventEmitter = require("node:events");

const emitter = new EventEmitter();

// Register error listener
emitter.on("error", (error) => {
  console.error("Something went wrong:", error.message);
});

// Emit error
emitter.emit("error", new Error("Database connection failed"));`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <p className="font-semibold text-[var(--accent-color)]">Important</p>
          <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
            Always handle error events when using EventEmitter APIs that may
            emit them. An unhandled error event can crash your application.
          </p>
        </div>
      </section>

      {/* Synchronous */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          12. Are EventEmitter Listeners Asynchronous?
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          No. EventEmitter listeners execute synchronously by default. They run
          immediately when emit() is called.
        </p>

        <CodeBlock
          code={`const EventEmitter = require("node:events");

const emitter = new EventEmitter();

emitter.on("message", () => {
  console.log("Listener executed");
});

console.log("Before emit");

emitter.emit("message");

console.log("After emit");`}
        />

        <p className="text-[var(--text-secondary)]">Output:</p>

        <CodeBlock
          code={`Before emit
Listener executed
After emit`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          If a listener performs a time-consuming synchronous operation, it can
          block the event loop. Registering an event does not automatically make
          its listener asynchronous.
        </p>
      </section>

      {/* Practical Example */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          13. Practical Example – User Registration
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Imagine a backend application where a user registers successfully.
          After registration, multiple tasks need to happen:
        </p>

        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Send a welcome email.</li>
          <li>Notify the admin.</li>
          <li>Record the registration activity.</li>
        </ul>

        <CodeBlock
          code={`const EventEmitter = require("node:events");

const emitter = new EventEmitter();

// Email listener
emitter.on("userRegistered", (user) => {
  console.log(\`Welcome email sent to \${user.email}\`);
});

// Admin notification listener
emitter.on("userRegistered", (user) => {
  console.log(\`Admin notified about \${user.name}\`);
});

// Activity listener
emitter.on("userRegistered", (user) => {
  console.log(\`Registration activity recorded for \${user.name}\`);
});

// Registration function
function registerUser(name, email) {
  const user = { name, email };

  console.log("User registered successfully");

  emitter.emit("userRegistered", user);
}

registerUser("Mayur", "mayur@example.com");`}
        />

        <p className="text-[var(--text-secondary)]">Output:</p>

        <CodeBlock
          code={`User registered successfully
Welcome email sent to mayur@example.com
Admin notified about Mayur
Registration activity recorded for Mayur`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          This separates the registration logic from the tasks that should
          happen after registration. In a real application, email delivery and
          other slow operations should be handled asynchronously using suitable
          services or background job queues.
        </p>
      </section>

      {/* EventEmitter vs Event Loop */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          14. EventEmitter vs Event Loop
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          These two concepts are related to Node.js event-driven programming,
          but they are not the same thing.
        </p>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="p-3 text-left">EventEmitter</th>
                <th className="p-3 text-left">Event Loop</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-[var(--border-color)]">
                <td className="p-3 text-[var(--text-secondary)]">
                  A mechanism for creating and handling application events.
                </td>
                <td className="p-3 text-[var(--text-secondary)]">
                  A mechanism that coordinates execution of JavaScript and
                  asynchronous callbacks.
                </td>
              </tr>
              <tr className="border-t border-[var(--border-color)]">
                <td className="p-3 text-[var(--text-secondary)]">
                  Uses methods like on() and emit().
                </td>
                <td className="p-3 text-[var(--text-secondary)]">
                  Works with timers, I/O callbacks and other asynchronous tasks.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Summary */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">15. Summary</h2>

        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Events represent actions or occurrences in an application.</li>
          <li>EventEmitter is used to create and manage custom events.</li>
          <li>on() registers a listener.</li>
          <li>emit() triggers an event.</li>
          <li>once() executes a listener only one time.</li>
          <li>off() removes a specific listener.</li>
          <li>removeAllListeners() removes registered listeners.</li>
          <li>EventEmitter listeners execute synchronously by default.</li>
          <li>Unhandled error events can terminate the Node.js process.</li>
        </ul>
      </section>
    </div>
  );
};

export default Events;
