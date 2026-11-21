import CodeBlock from "../../../components/common/CodeBlock";

const APIEndpoints = () => {
  const endpoints = [
    ["GET", "/api/users", "Get all users"],
    ["GET", "/api/users/:id", "Get a specific user"],
    ["POST", "/api/users", "Create a new user"],
    ["PATCH", "/api/users/:id", "Update user details"],
    ["DELETE", "/api/users/:id", "Delete a user"],
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8 text-[var(--white-color)]">
      {/* Header */}
      <header className="space-y-3">
        <span className="text-sm text-[var(--primary-color)] font-medium">
          BACKEND NETWORKING / 08
        </span>

        <h1 className="text-4xl font-bold">API Endpoints</h1>

        <p className="text-lg text-[var(--muted-color)]">
          Understanding how clients communicate with specific resources through
          API endpoints.
        </p>
      </header>

      {/* Introduction */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What are API Endpoints?</h2>

        <p className="text-[var(--muted-color)] leading-7">
          An API Endpoint is a specific URL where a client sends an HTTP request
          to access or perform an operation on a resource provided by the
          server.
        </p>

        <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] space-y-2">
          <p className="text-sm text-[var(--muted-color)]">Example Endpoint</p>

          <code className="text-[var(--primary-color)] text-sm break-all">
            GET https://api.example.com/api/users
          </code>
        </div>
      </section>

      {/* Diagram */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">How API Endpoints Work</h2>

        <div className="p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="w-full max-w-xs p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-tertiary)]">
              <p className="font-semibold">Client</p>
              <p className="text-xs text-[var(--muted-color)]">
                Browser / React App
              </p>
            </div>

            <span className="text-2xl text-[var(--primary-color)]">↓</span>

            <div className="w-full max-w-xs p-4 rounded-xl border border-[var(--primary-color)] bg-[var(--primary-soft)]">
              <p className="font-semibold text-[var(--primary-color)]">
                API Endpoint
              </p>
              <code className="text-xs break-all">GET /api/users</code>
            </div>

            <span className="text-2xl text-[var(--primary-color)]">↓</span>

            <div className="w-full max-w-xs p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-tertiary)]">
              <p className="font-semibold">Backend Server</p>
              <p className="text-xs text-[var(--muted-color)]">
                Express.js / Business Logic
              </p>
            </div>

            <span className="text-2xl text-[var(--primary-color)]">↓</span>

            <div className="w-full max-w-xs p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-tertiary)]">
              <p className="font-semibold">Database</p>
              <p className="text-xs text-[var(--muted-color)]">
                MongoDB / Users Collection
              </p>
            </div>

            <span className="text-2xl text-[var(--primary-color)]">↓</span>

            <div className="w-full max-w-xs p-4 rounded-xl border border-[var(--primary-color)] bg-[var(--primary-soft)]">
              <p className="font-semibold text-[var(--primary-color)]">
                JSON Response
              </p>
              <code className="text-xs">{"{ users: [...] }"}</code>
            </div>
          </div>
        </div>

        <p className="text-sm text-[var(--muted-color)]">
          The client sends a request to an endpoint. The backend processes it
          and returns a response.
        </p>
      </section>

      {/* URL Structure */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Anatomy of an API Endpoint</h2>

        <div className="p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] space-y-4">
          <div className="overflow-x-auto">
            <code className="text-sm whitespace-nowrap">
              <span className="text-[var(--primary-color)]">GET</span>{" "}
              <span className="text-green-400">https://</span>
              <span className="text-blue-400">api.example.com</span>
              <span className="text-yellow-400">/api</span>
              <span className="text-purple-400">/users</span>
              <span className="text-orange-400">/123</span>
            </code>
          </div>

          <div className="space-y-3 text-sm">
            {[
              ["GET", "HTTP Method", "Defines the operation."],
              ["https://", "Protocol", "Defines secure communication."],
              ["api.example.com", "Domain", "Identifies the API server."],
              ["/api", "Base Path", "Identifies the API namespace."],
              ["/users", "Resource", "Identifies the resource."],
              ["/123", "Resource ID", "Identifies a specific user."],
            ].map(([value, label, description]) => (
              <div
                key={label}
                className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 border-b border-[var(--border-color)] pb-3"
              >
                <code className="text-[var(--primary-color)] sm:w-40">
                  {value}
                </code>

                <span className="font-semibold sm:w-32">{label}</span>

                <span className="text-[var(--muted-color)]">{description}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Endpoints */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Common API Endpoints</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm text-left">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">Method</th>
                <th className="p-3">Endpoint</th>
                <th className="p-3">Purpose</th>
              </tr>
            </thead>

            <tbody>
              {endpoints.map(([method, path, purpose]) => (
                <tr
                  key={method + path}
                  className="border-t border-[var(--border-color)]"
                >
                  <td className="p-3 font-semibold text-[var(--primary-color)]">
                    {method}
                  </td>

                  <td className="p-3 whitespace-nowrap">{path}</td>

                  <td className="p-3 text-[var(--muted-color)]">{purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-[var(--muted-color)]">
          Different HTTP methods can operate on the same resource endpoint. For
          example, GET and POST can both use /api/users.
        </p>
      </section>

      {/* Express Example */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Creating API Endpoints in Express.js
        </h2>

        <p className="text-[var(--muted-color)] leading-7">
          Express provides methods like get(), post(), patch() and delete() to
          define API endpoints.
        </p>

        <div className="rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-secondary)]">
          <div className="px-4 py-2 border-b border-[var(--border-color)] text-sm text-[var(--muted-color)]">
            server.js
          </div>

          <pre className="p-4 overflow-x-auto text-sm leading-7 text-[var(--muted-color)]">
            <CodeBlock code={`import express from "express";

const app = express();

app.use(express.json());

// GET endpoint
app.get("/api/users", (req, res) => {
  res.json({ message: "All users" });
});

// POST endpoint
app.post("/api/users", (req, res) => {
  res.status(201).json({
    message: "User created",
    user: req.body
  });
});

// GET endpoint with parameter
app.get("/api/users/:id", (req, res) => {
  res.json({
    userId: req.params.id
  });
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
          <li>An endpoint is a specific URL used to access an API resource.</li>
          <li>HTTP methods define what operation should be performed.</li>
          <li>One resource can have multiple endpoints.</li>
          <li>Endpoints can contain dynamic parameters like :id.</li>
          <li>Express uses route methods to create endpoints.</li>
          <li>Endpoints should follow consistent naming conventions.</li>
        </ul>
      </section>

      {/* Summary */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Quick Summary</h2>

        <div className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] text-sm text-[var(--muted-color)] leading-8">
          <strong className="text-[var(--white-color)]">API Endpoint:</strong> A
          specific URL used to communicate with an API.
          <br />
          <strong className="text-[var(--white-color)]">
            HTTP Method:
          </strong>{" "}
          Defines the operation to perform.
          <br />
          <strong className="text-[var(--white-color)]">Resource:</strong> The
          data or entity being accessed.
          <br />
          <strong className="text-[var(--white-color)]">
            Dynamic Parameter:
          </strong>{" "}
          Identifies a specific resource, such as a user ID.
        </div>
      </section>
    </div>
  );
};

export default APIEndpoints;
