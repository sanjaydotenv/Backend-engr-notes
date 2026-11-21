import CodeBlock from "../../../components/common/CodeBlock";

const WhatIsAnAPI = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8 text-[var(--white-color)]">
      {/* Header */}
      <header className="space-y-3">
        <span className="text-sm text-[var(--primary-color)] font-medium">
          API FUNDAMENTALS / 01
        </span>

        <h1 className="text-4xl font-bold">What is an API?</h1>

        <p className="text-lg text-[var(--muted-color)]">
          Understanding how different software applications communicate and
          exchange data using APIs.
        </p>
      </header>

      {/* Introduction */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What is an API?</h2>

        <p className="text-[var(--muted-color)] leading-7">
          API (Application Programming Interface) is a way for two software
          applications to communicate with each other. It allows one application
          to request data or services from another application without knowing
          its internal implementation.
        </p>

        <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
          <p className="text-sm text-[var(--muted-color)] mb-2">
            Simple Example
          </p>

          <p className="text-[var(--primary-color)] font-medium">
            React Frontend → API → Express Backend → Database
          </p>
        </div>
      </section>

      {/* Diagram */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">How an API Works</h2>

        <div className="p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="w-full max-w-xs p-4 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-color)]">
              <h3 className="font-semibold">Client Application</h3>
              <p className="text-xs text-[var(--muted-color)]">
                React / Browser
              </p>
            </div>

            <div className="text-[var(--primary-color)] text-xl">↓ Request</div>

            <div className="w-full max-w-xs p-4 rounded-xl bg-[var(--primary-soft)] border border-[var(--primary-color)]">
              <h3 className="font-semibold text-[var(--primary-color)]">API</h3>
              <p className="text-xs text-[var(--muted-color)]">
                Communication Interface
              </p>
            </div>

            <div className="text-[var(--primary-color)] text-xl">↓</div>

            <div className="w-full max-w-xs p-4 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-color)]">
              <h3 className="font-semibold">Backend Server</h3>
              <p className="text-xs text-[var(--muted-color)]">
                Node.js / Express
              </p>
            </div>

            <div className="text-[var(--primary-color)] text-xl">↓</div>

            <div className="w-full max-w-xs p-4 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-color)]">
              <h3 className="font-semibold">Database</h3>
              <p className="text-xs text-[var(--muted-color)]">MongoDB</p>
            </div>

            <div className="text-[var(--primary-color)] text-xl">
              ↑ Response
            </div>

            <p className="text-sm text-[var(--muted-color)]">
              Data returns to the client through the API.
            </p>
          </div>
        </div>
      </section>

      {/* Practical Example */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Practical Example</h2>

        <p className="text-[var(--muted-color)] leading-7">
          Suppose a React application needs to display users. It sends a request
          to the backend API, and the server returns user data.
        </p>

        <div className="rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-secondary)]">
          <div className="px-4 py-2 border-b border-[var(--border-color)] text-sm text-[var(--muted-color)]">
            client.js
          </div>

          <pre className="p-4 overflow-x-auto text-sm leading-7 text-[var(--muted-color)]">
            <CodeBlock language="javascript" code={`const response = await fetch("/api/users");

const users = await response.json();

console.log(users);`} />
          </pre>
        </div>

        <div className="rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-secondary)]">
          <div className="px-4 py-2 border-b border-[var(--border-color)] text-sm text-[var(--muted-color)]">
            server.js
          </div>

          <pre className="p-4 overflow-x-auto text-sm leading-7 text-[var(--muted-color)]">
            <CodeBlock
              language="javascript"
              code={`app.get("/api/users", (req, res) => {
  res.json([
    { name: "Rohan", age: 22 },
    { name: "Aman", age: 24 }
  ]);
});`}
            />
          </pre>
        </div>
      </section>

      {/* Types */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Common Types of APIs</h2>

        <div className="grid sm:grid-cols-2 gap-3">
          {[
            ["REST API", "Uses HTTP methods and resources."],
            ["GraphQL API", "Allows clients to request specific data."],
            ["SOAP API", "Uses XML-based messaging protocols."],
            ["WebSocket API", "Supports real-time, two-way communication."],
          ].map(([title, description]) => (
            <div
              key={title}
              className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] space-y-2"
            >
              <h3 className="font-semibold text-[var(--primary-color)]">
                {title}
              </h3>

              <p className="text-sm text-[var(--muted-color)]">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Important Points */}
      <section className="p-5 rounded-xl bg-[var(--primary-soft)] border border-[var(--border-color)] space-y-3">
        <h2 className="text-lg font-semibold text-[var(--primary-color)]">
          Important Points
        </h2>

        <ul className="space-y-2 text-sm text-[var(--muted-color)] list-disc pl-5">
          <li>API stands for Application Programming Interface.</li>
          <li>APIs allow applications to communicate.</li>
          <li>APIs can exchange data between frontend and backend.</li>
          <li>APIs hide internal implementation details.</li>
          <li>
            REST is one of the most commonly used API architectural styles.
          </li>
        </ul>
      </section>

      {/* Summary */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Quick Summary</h2>

        <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
          <p className="text-sm text-[var(--muted-color)] leading-7">
            <strong className="text-[var(--white-color)]">API:</strong> Allows
            software applications to communicate.
            <br />
            <strong className="text-[var(--white-color)]">Request:</strong>{" "}
            Client asks the server for data or an operation.
            <br />
            <strong className="text-[var(--white-color)]">
              Response:
            </strong>{" "}
            Server returns the requested result.
          </p>
        </div>
      </section>
    </div>
  );
};

export default WhatIsAnAPI;
