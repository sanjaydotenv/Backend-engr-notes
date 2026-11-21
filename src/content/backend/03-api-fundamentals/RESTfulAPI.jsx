import CodeBlock from "../../../components/common/CodeBlock";

const RESTfulAPI = () => {
  const conventions = [
    ["/api/users", "Get all users"],
    ["/api/users/101", "Get a specific user"],
    ["/api/users/101/orders", "Get user's orders"],
    ["/api/products", "Get all products"],
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8 text-[var(--white-color)]">
      {/* Header */}
      <header className="space-y-3">
        <span className="text-sm text-[var(--primary-color)] font-medium">
          API FUNDAMENTALS / 04
        </span>

        <h1 className="text-4xl font-bold">RESTful API</h1>

        <p className="text-lg text-[var(--muted-color)]">
          Understanding how to design APIs that follow REST architectural
          principles and conventions.
        </p>
      </header>

      {/* Introduction */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What is a RESTful API?</h2>

        <p className="text-[var(--muted-color)] leading-7">
          A RESTful API is an API that follows REST architectural constraints to
          provide a consistent way for clients to access and manipulate server
          resources.
        </p>

        <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
          <p className="text-sm text-[var(--muted-color)] mb-2">Example</p>

          <code className="text-[var(--primary-color)] text-sm">
            GET /api/users/101
          </code>

          <p className="text-sm text-[var(--muted-color)] mt-2">
            Retrieves the user whose ID is 101.
          </p>
        </div>
      </section>

      {/* Diagram */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">How a RESTful API Works</h2>

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
                RESTful API
              </h3>
              <code className="text-xs">GET /api/users/101</code>
            </div>

            <span className="text-[var(--primary-color)]">↓</span>

            <div className="w-full max-w-xs p-4 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-color)]">
              <h3 className="font-semibold">Server</h3>
              <p className="text-xs text-[var(--muted-color)]">
                Process Request
              </p>
            </div>

            <span className="text-[var(--primary-color)]">↓</span>

            <div className="w-full max-w-xs p-4 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-color)]">
              <h3 className="font-semibold">Database</h3>
              <p className="text-xs text-[var(--muted-color)]">MongoDB</p>
            </div>

            <span className="text-[var(--primary-color)]">↑ JSON Response</span>
          </div>
        </div>
      </section>

      {/* RESTful Conventions */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          RESTful API Naming Conventions
        </h2>

        <p className="text-[var(--muted-color)] leading-7">
          RESTful APIs generally use resource-based URLs with nouns instead of
          action-based URLs.
        </p>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm text-left">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">Endpoint</th>
                <th className="p-3">Purpose</th>
              </tr>
            </thead>

            <tbody>
              {conventions.map(([endpoint, purpose]) => (
                <tr
                  key={endpoint}
                  className="border-t border-[var(--border-color)]"
                >
                  <td className="p-3 text-[var(--primary-color)] whitespace-nowrap">
                    {endpoint}
                  </td>

                  <td className="p-3 text-[var(--muted-color)]">{purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Good vs Bad */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Good vs Bad API Design</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] space-y-3">
            <h3 className="font-semibold text-green-400">Good Design</h3>

            <code className="block text-sm text-[var(--muted-color)]">
              GET /api/users
              <br />
              POST /api/users
              <br />
              DELETE /api/users/101
            </code>

            <p className="text-xs text-[var(--muted-color)]">
              Uses resources and HTTP methods to define operations.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] space-y-3">
            <h3 className="font-semibold text-red-400">Bad Design</h3>

            <code className="block text-sm text-[var(--muted-color)]">
              /api/getUsers
              <br />
              /api/createUser
              <br />
              /api/deleteUser/101
            </code>

            <p className="text-xs text-[var(--muted-color)]">
              Uses action names directly in URLs instead of HTTP methods.
            </p>
          </div>
        </div>
      </section>

      {/* HTTP Methods */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">HTTP Methods in RESTful APIs</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm text-left">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">Method</th>
                <th className="p-3">Operation</th>
                <th className="p-3">Endpoint</th>
              </tr>
            </thead>

            <tbody>
              {[
                ["GET", "Read", "/api/users"],
                ["POST", "Create", "/api/users"],
                ["PUT", "Replace", "/api/users/101"],
                ["PATCH", "Update", "/api/users/101"],
                ["DELETE", "Delete", "/api/users/101"],
              ].map(([method, operation, endpoint]) => (
                <tr
                  key={method}
                  className="border-t border-[var(--border-color)]"
                >
                  <td className="p-3 font-semibold text-[var(--primary-color)]">
                    {method}
                  </td>
                  <td className="p-3 text-[var(--muted-color)]">{operation}</td>
                  <td className="p-3 text-[var(--muted-color)] whitespace-nowrap">
                    {endpoint}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Express Example */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">
          Creating RESTful Routes in Express
        </h2>

        <div className="rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-secondary)]">
          <div className="px-4 py-2 border-b border-[var(--border-color)] text-sm text-[var(--muted-color)]">
            server.js
          </div>

          <pre className="p-4 overflow-x-auto text-sm leading-7 text-[var(--muted-color)]">
            <CodeBlock code={`import express from "express";

const app = express();

app.use(express.json());

// Get users
app.get("/api/users", (req, res) => {
  res.json({ message: "All users" });
});

// Create user
app.post("/api/users", (req, res) => {
  res.status(201).json({
    message: "User created"
  });
});

// Get single user
app.get("/api/users/:id", (req, res) => {
  res.json({ userId: req.params.id });
});

// Delete user
app.delete("/api/users/:id", (req, res) => {
  res.json({ message: "User deleted" });
});

app.listen(3000);`} />
          </pre>
        </div>
      </section>

      {/* Important Points */}
      <section className="p-5 rounded-xl bg-[var(--primary-soft)] border border-[var(--border-color)] space-y-3">
        <h2 className="text-lg font-semibold text-[var(--primary-color)]">
          Important Points
        </h2>

        <ul className="space-y-2 text-sm text-[var(--muted-color)] list-disc pl-5">
          <li>RESTful APIs follow REST architectural constraints.</li>
          <li>URLs identify resources, not actions.</li>
          <li>HTTP methods define resource operations.</li>
          <li>Resource names are generally plural nouns.</li>
          <li>RESTful APIs commonly exchange JSON data.</li>
          <li>Stateless communication is an important REST constraint.</li>
        </ul>
      </section>

      {/* Summary */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Quick Summary</h2>

        <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] text-sm text-[var(--muted-color)] leading-8">
          <strong className="text-[var(--white-color)]">RESTful API:</strong> An
          API that follows REST architectural constraints.
          <br />
          <strong className="text-[var(--white-color)]">Resource:</strong> Data
          identified through URLs.
          <br />
          <strong className="text-[var(--white-color)]">
            HTTP Methods:
          </strong>{" "}
          Define operations on resources.
          <br />
          <strong className="text-[var(--white-color)]">Naming:</strong> Prefer
          resource-based URLs instead of action-based URLs.
        </div>
      </section>
    </div>
  );
};

export default RESTfulAPI;
