import CodeBlock from "../../../components/common/CodeBlock";

const RESTArchitecture = () => {
  const constraints = [
    ["Client-Server", "Separates client and server responsibilities."],
    [
      "Stateless",
      "Every request contains the information needed to process it.",
    ],
    ["Cacheable", "Responses specify whether they can be cached."],
    [
      "Uniform Interface",
      "Provides a consistent way to interact with resources.",
    ],
    ["Layered System", "Allows communication through multiple server layers."],
    [
      "Code on Demand",
      "Optionally allows servers to send executable code to clients.",
    ],
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8 text-[var(--white-color)]">
      {/* Header */}
      <header className="space-y-3">
        <span className="text-sm text-[var(--primary-color)] font-medium">
          API FUNDAMENTALS / 03
        </span>

        <h1 className="text-4xl font-bold">REST Architecture</h1>

        <p className="text-lg text-[var(--muted-color)]">
          Understanding the architectural principles and constraints behind
          RESTful APIs.
        </p>
      </header>

      {/* Introduction */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What is REST Architecture?</h2>

        <p className="text-[var(--muted-color)] leading-7">
          REST Architecture is a set of architectural constraints used to design
          scalable, maintainable and reliable web APIs. It defines how clients
          and servers communicate using resources and standard HTTP methods.
        </p>

        <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
          <p className="text-sm text-[var(--muted-color)] mb-2">
            Basic Communication
          </p>

          <code className="text-sm text-[var(--primary-color)]">
            Client → HTTP Request → Server → HTTP Response
          </code>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">REST Architecture Diagram</h2>

        <div className="p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center text-center">
            <div className="p-4 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-color)]">
              <h3 className="font-semibold">Client</h3>
              <p className="text-xs text-[var(--muted-color)] mt-1">
                React / Browser
              </p>
            </div>

            <div className="text-[var(--primary-color)] font-semibold">
              <span className="hidden md:block">HTTP Request ↔</span>
              <span className="md:hidden">↕ HTTP Request / Response</span>
            </div>

            <div className="p-4 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-color)]">
              <h3 className="font-semibold">Server</h3>
              <p className="text-xs text-[var(--muted-color)] mt-1">
                Node.js / Express
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 mt-5">
            <span className="text-[var(--primary-color)]">↓</span>

            <div className="w-full max-w-xs p-4 text-center rounded-xl bg-[var(--primary-soft)] border border-[var(--primary-color)]">
              <h3 className="font-semibold text-[var(--primary-color)]">
                Business Logic
              </h3>
              <p className="text-xs text-[var(--muted-color)]">
                Process request and apply rules
              </p>
            </div>

            <span className="text-[var(--primary-color)]">↓</span>

            <div className="w-full max-w-xs p-4 text-center rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-color)]">
              <h3 className="font-semibold">Database</h3>
              <p className="text-xs text-[var(--muted-color)]">
                MongoDB / PostgreSQL
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Constraints */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Six REST Architectural Constraints
        </h2>

        <div className="grid sm:grid-cols-2 gap-3">
          {constraints.map(([title, description], index) => (
            <div
              key={title}
              className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] space-y-2"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-[var(--primary-soft)] text-[var(--primary-color)] font-semibold text-sm">
                  0{index + 1}
                </span>

                <h3 className="font-semibold">{title}</h3>
              </div>

              <p className="text-sm text-[var(--muted-color)] leading-6">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Practical Example */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Practical REST API Example</h2>

        <p className="text-[var(--muted-color)] leading-7">
          A client requests user data. The server processes the request and
          returns a JSON response without depending on previous requests.
        </p>

        <div className="rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-secondary)]">
          <div className="px-4 py-2 border-b border-[var(--border-color)] text-sm text-[var(--muted-color)]">
            Request
          </div>

          <pre className="p-4 text-sm text-[var(--primary-color)] overflow-x-auto">
            {`GET /api/users/101
Authorization: Bearer access_token`}
          </pre>
        </div>

        <div className="rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-secondary)]">
          <div className="px-4 py-2 border-b border-[var(--border-color)] text-sm text-[var(--muted-color)]">
            Response
          </div>

          <pre className="p-4 text-sm text-[var(--muted-color)] overflow-x-auto">
            <CodeBlock code={`{
  "success": true,
  "user": {
    "id": 101,
    "name": "Rohan"
  }
}`}/>
          </pre>
        </div>
      </section>

      {/* Express Example */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">
          Implementing REST Architecture in Express
        </h2>

        <div className="rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-secondary)]">
          <div className="px-4 py-2 border-b border-[var(--border-color)] text-sm text-[var(--muted-color)]">
            server.js
          </div>

          <pre className="p-4 overflow-x-auto text-sm leading-7 text-[var(--muted-color)]">
            <CodeBlock code={`import express from "express";

const app = express();

app.use(express.json());

app.get("/api/users/:id", (req, res) => {
  res.status(200).json({
    id: req.params.id,
    name: "Rohan"
  });
});

app.listen(3000);`}/>
          </pre>
        </div>
      </section>

      {/* Important Points */}
      <section className="p-5 rounded-xl bg-[var(--primary-soft)] border border-[var(--border-color)] space-y-3">
        <h2 className="text-lg font-semibold text-[var(--primary-color)]">
          Important Points
        </h2>

        <ul className="space-y-2 text-sm text-[var(--muted-color)] list-disc pl-5">
          <li>REST is an architectural style, not a protocol.</li>
          <li>REST defines six architectural constraints.</li>
          <li>Client and server work independently.</li>
          <li>Statelessness means requests are independently processed.</li>
          <li>Code on Demand is an optional constraint.</li>
          <li>REST APIs commonly use HTTP and JSON.</li>
        </ul>
      </section>

      {/* Summary */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Quick Summary</h2>

        <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] text-sm text-[var(--muted-color)] leading-8">
          <strong className="text-[var(--white-color)]">
            REST Architecture:
          </strong>{" "}
          Rules and constraints for designing APIs.
          <br />
          <strong className="text-[var(--white-color)]">Stateless:</strong> Each
          request carries the information needed for processing.
          <br />
          <strong className="text-[var(--white-color)]">
            Uniform Interface:
          </strong>{" "}
          Consistent communication between client and server.
          <br />
          <strong className="text-[var(--white-color)]">
            Code on Demand:
          </strong>{" "}
          Optional executable code sent by the server.
        </div>
      </section>
    </div>
  );
};

export default RESTArchitecture;
