import CodeBlock from "../../../components/common/CodeBlock";

const WhatIsRESTAPI = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8 text-[var(--white-color)]">
      {/* Header */}
      <header className="space-y-3">
        <span className="text-sm text-[var(--primary-color)] font-medium">
          API FUNDAMENTALS / 02
        </span>

        <h1 className="text-4xl font-bold">What is REST API?</h1>

        <p className="text-lg text-[var(--muted-color)]">
          Understanding how REST APIs organize resources and communicate through
          standard HTTP methods.
        </p>
      </header>

      {/* Introduction */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What is REST API?</h2>

        <p className="text-[var(--muted-color)] leading-7">
          REST (Representational State Transfer) is an architectural style used
          to design APIs. REST APIs allow clients to access and manipulate
          server resources using HTTP methods.
        </p>

        <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
          <p className="text-sm text-[var(--muted-color)] mb-2">Example</p>

          <code className="text-[var(--primary-color)] text-sm">
            GET /api/users
          </code>

          <p className="text-sm text-[var(--muted-color)] mt-2">
            Requests the list of users from the server.
          </p>
        </div>
      </section>

      {/* Diagram */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">How REST API Works</h2>

        <div className="p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="w-full max-w-xs p-4 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-color)]">
              <h3 className="font-semibold">Client</h3>
              <p className="text-xs text-[var(--muted-color)]">
                React / Browser
              </p>
            </div>

            <span className="text-[var(--primary-color)]">↓ HTTP Request</span>

            <div className="w-full max-w-xs p-4 rounded-xl bg-[var(--primary-soft)] border border-[var(--primary-color)]">
              <h3 className="font-semibold text-[var(--primary-color)]">
                REST API
              </h3>
              <p className="text-xs text-[var(--muted-color)]">
                GET /api/users
              </p>
            </div>

            <span className="text-[var(--primary-color)]">↓</span>

            <div className="w-full max-w-xs p-4 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-color)]">
              <h3 className="font-semibold">Backend Server</h3>
              <p className="text-xs text-[var(--muted-color)]">
                Node.js / Express
              </p>
            </div>

            <span className="text-[var(--primary-color)]">↓</span>

            <div className="w-full max-w-xs p-4 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-color)]">
              <h3 className="font-semibold">Database</h3>
              <p className="text-xs text-[var(--muted-color)]">MongoDB</p>
            </div>

            <span className="text-[var(--primary-color)]">↑ JSON Response</span>

            <p className="text-xs text-[var(--muted-color)]">
              Server returns the requested resource to the client.
            </p>
          </div>
        </div>
      </section>

      {/* HTTP Methods */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">REST API HTTP Methods</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm text-left">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">Method</th>
                <th className="p-3">Operation</th>
                <th className="p-3">Example</th>
              </tr>
            </thead>

            <tbody>
              {[
                ["GET", "Read data", "/api/users"],
                ["POST", "Create data", "/api/users"],
                ["PUT", "Replace resource", "/api/users/1"],
                ["PATCH", "Partially update", "/api/users/1"],
                ["DELETE", "Delete data", "/api/users/1"],
              ].map(([method, operation, example]) => (
                <tr
                  key={method}
                  className="border-t border-[var(--border-color)]"
                >
                  <td className="p-3 font-semibold text-[var(--primary-color)]">
                    {method}
                  </td>

                  <td className="p-3 text-[var(--muted-color)]">{operation}</td>

                  <td className="p-3 text-[var(--muted-color)] whitespace-nowrap">
                    {example}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* REST Principles */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          REST Architectural Constraints
        </h2>

        <div className="grid sm:grid-cols-2 gap-3">
          {[
            [
              "Client-Server",
              "Separates frontend and backend responsibilities.",
            ],
            [
              "Stateless",
              "Each request contains the information needed to process it.",
            ],
            ["Cacheable", "Responses can define whether they are cacheable."],
            [
              "Uniform Interface",
              "Uses consistent resource-based communication.",
            ],
            [
              "Layered System",
              "Communication can pass through multiple layers.",
            ],
            [
              "Code on Demand",
              "Optional: server can provide executable code to clients.",
            ],
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

      {/* Express Example */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">REST API with Express.js</h2>

        <p className="text-[var(--muted-color)] leading-7">
          Express allows us to create REST API routes using HTTP methods.
        </p>

        <div className="rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-secondary)]">
          <div className="px-4 py-2 border-b border-[var(--border-color)] text-sm text-[var(--muted-color)]">
            server.js
          </div>

          <CodeBlock
            language="javascript"
            code={`import express from "express";

const app = express();

app.use(express.json());

// Read users
app.get("/api/users", (req, res) => {
  res.json({ message: "All users" });
});

// Create user
app.post("/api/users", (req, res) => {
  res.status(201).json({
    message: "User created",
    user: req.body
  });
});

// Delete user
app.delete("/api/users/:id", (req, res) => {
  res.json({
    message: "User deleted",
    id: req.params.id
  });
});

app.listen(3000);`}
          />
        </div>
      </section>

      {/* Important Points */}
      <section className="p-5 rounded-xl bg-[var(--primary-soft)] border border-[var(--border-color)] space-y-3">
        <h2 className="text-lg font-semibold text-[var(--primary-color)]">
          Important Points
        </h2>

        <ul className="space-y-2 text-sm text-[var(--muted-color)] list-disc pl-5">
          <li>REST stands for Representational State Transfer.</li>
          <li>REST is an architectural style, not a protocol.</li>
          <li>REST APIs commonly use HTTP and JSON.</li>
          <li>Resources are identified using URLs.</li>
          <li>HTTP methods define operations on resources.</li>
          <li>REST APIs follow stateless communication.</li>
        </ul>
      </section>

      {/* Summary */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Quick Summary</h2>

        <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] text-sm text-[var(--muted-color)] leading-8">
          <strong className="text-[var(--white-color)]">REST:</strong> An
          architectural style for designing APIs.
          <br />
          <strong className="text-[var(--white-color)]">Resources:</strong> Data
          identified through URLs.
          <br />
          <strong className="text-[var(--white-color)]">
            HTTP Methods:
          </strong>{" "}
          Define operations on resources.
          <br />
          <strong className="text-[var(--white-color)]">Stateless:</strong> Each
          request is processed independently.
        </div>
      </section>
    </div>
  );
};

export default WhatIsRESTAPI;