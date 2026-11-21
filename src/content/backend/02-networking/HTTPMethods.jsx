import CodeBlock from "../../../components/common/CodeBlock";

const HTTPMethods = () => {
  const methods = [
    {
      name: "GET",
      purpose: "Retrieve data from the server.",
      example: "GET /api/users",
      description: "Fetches all users without modifying server data.",
      color: "text-[var(--primary-color)]",
    },
    {
      name: "POST",
      purpose: "Create a new resource.",
      example: "POST /api/users",
      description: "Sends user information to create a new user.",
      color: "text-[var(--primary-color)]",
    },
    {
      name: "PUT",
      purpose: "Replace an existing resource.",
      example: "PUT /api/users/101",
      description: "Replaces the existing user representation with new data.",
      color: "text-[var(--primary-color)]",
    },
    {
      name: "PATCH",
      purpose: "Partially update a resource.",
      example: "PATCH /api/users/101",
      description: "Updates only the specified fields of an existing user.",
      color: "text-[var(--primary-color)]",
    },
    {
      name: "DELETE",
      purpose: "Remove a resource.",
      example: "DELETE /api/users/101",
      description: "Deletes the specified user from the server.",
      color: "text-[var(--primary-color)]",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8 text-[var(--text-primary)]">
      {/* Header */}{" "}
      <header className="space-y-3">
        {" "}
        <span className="text-sm text-[var(--primary-color)] font-medium">
          BACKEND NETWORKING / 05{" "}
        </span>
        <h1 className="text-4xl font-bold">HTTP Methods</h1>
        <p className="text-[var(--text-secondary)] text-lg">
          Understanding how HTTP methods define the actions a client wants to
          perform on server resources.
        </p>
      </header>
      {/* Introduction */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What are HTTP Methods?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          HTTP Methods are request methods that tell the server what action the
          client wants to perform on a particular resource.
        </p>

        <p className="text-[var(--text-secondary)] leading-7">
          For example, a client can use GET to retrieve users, POST to create a
          user, PATCH to update user information and DELETE to remove a user.
        </p>
      </section>
      {/* Main Methods */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Common HTTP Methods</h2>

        <div className="space-y-3">
          {methods.map((method, index) => (
            <div
              key={method.name}
              className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-3"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className={`text-xl font-bold ${method.color}`}>
                  {index + 1}. {method.name}
                </h3>

                <span className="text-xs px-3 py-1 rounded-full bg-[var(--primary-soft)] text-[var(--primary-color)]">
                  HTTP Method
                </span>
              </div>

              <p className="text-[var(--text-secondary)]">{method.purpose}</p>

              <div className="p-3 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-color)]">
                <code className="text-sm text-[var(--primary-color)]">
                  {method.example}
                </code>
              </div>

              <p className="text-sm text-[var(--text-muted)]">
                {method.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* PUT vs PATCH */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">PUT vs PATCH</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Both methods update resources, but they have different purposes.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-2">
            <h3 className="text-xl font-semibold text-[var(--primary-color)]">
              PUT
            </h3>

            <p className="text-[var(--text-secondary)] leading-7">
              Replaces the resource with the new representation.
            </p>

            <pre className="p-3 rounded-lg bg-[var(--bg-tertiary)] text-sm overflow-x-auto text-[var(--text-secondary)]">
             <CodeBlock code= {`{
  "name": "Mayur",
  "email": "mayur@example.com"
}`} />
            </pre>

            <p className="text-sm text-[var(--text-muted)]">
              Typically sends the complete resource representation.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-2">
            <h3 className="text-xl font-semibold text-[var(--primary-color)]">
              PATCH
            </h3>

            <p className="text-[var(--text-secondary)] leading-7">
              Updates only the specified part of a resource.
            </p>

            <pre className="p-3 rounded-lg bg-[var(--bg-tertiary)] text-sm overflow-x-auto text-[var(--text-secondary)]">
              <CodeBlock code={`{
  "name": "Mayur Bairagi"
}`} />
            </pre>

            <p className="text-sm text-[var(--text-muted)]">
              Only the name field needs to be updated.
            </p>
          </div>
        </div>
      </section>
      {/* CRUD Mapping */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">HTTP Methods and CRUD</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          In backend development, HTTP methods are commonly mapped to CRUD
          operations.
        </p>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-left text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">CRUD</th>
                <th className="p-3">HTTP Method</th>
                <th className="p-3">Operation</th>
              </tr>
            </thead>

            <tbody className="text-[var(--text-secondary)]">
              {[
                ["Create", "POST", "Create new data"],
                ["Read", "GET", "Retrieve data"],
                ["Update", "PUT / PATCH", "Modify data"],
                ["Delete", "DELETE", "Remove data"],
              ].map(([crud, method, operation]) => (
                <tr
                  key={crud}
                  className="border-t border-[var(--border-color)]"
                >
                  <td className="p-3 font-semibold text-[var(--text-primary)]">
                    {crud}
                  </td>
                  <td className="p-3 text-[var(--primary-color)] font-medium">
                    {method}
                  </td>
                  <td className="p-3">{operation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      {/* Express Example */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">HTTP Methods in Express.js</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Express provides methods like get(), post(), put(), patch() and
          delete() to define API routes.
        </p>
        <div className="rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-secondary)]">
          <div className="px-4 py-2 border-b border-[var(--border-color)] text-sm text-[var(--text-muted)]">
            server.js
          </div>
          <pre className="p-4 overflow-x-auto text-sm leading-7 text-[var(--text-secondary)]">
            <CodeBlock code={`import express from "express";


const app = express();

app.use(express.json());

// Read
app.get("/users", (req, res) => {
res.send("Get users");
});

// Create
app.post("/users", (req, res) => {
res.send("Create user");
});

// Replace
app.put("/users/:id", (req, res) => {
res.send("Replace user");
});

// Partial Update
app.patch("/users/:id", (req, res) => {
res.send("Update user");
});

// Delete
app.delete("/users/:id", (req, res) => {
res.send("Delete user");
});

app.listen(3000);`} />
          </pre>{" "}
        </div>{" "}
      </section>
      {/* Important Properties */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Important HTTP Properties</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-2">
            <h3 className="font-semibold text-[var(--primary-color)]">
              Safe Methods
            </h3>

            <p className="text-[var(--text-secondary)] leading-7">
              Safe methods are intended to retrieve information without changing
              server state.
            </p>

            <p className="text-sm text-[var(--text-muted)]">
              Examples: GET, HEAD, OPTIONS.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-2">
            <h3 className="font-semibold text-[var(--primary-color)]">
              Idempotent Methods
            </h3>

            <p className="text-[var(--text-secondary)] leading-7">
              Repeating the same request produces the same intended server state
              as making it once.
            </p>

            <p className="text-sm text-[var(--text-muted)]">
              Examples: GET, PUT, DELETE.
            </p>
          </div>
        </div>

        <p className="text-sm text-[var(--text-muted)]">
          Note: DELETE is idempotent in terms of intended server state, even
          though repeated requests may return different status codes.
        </p>
      </section>
      {/* Important Points */}
      <section className="p-5 rounded-xl bg-[var(--primary-soft)] border border-[var(--border-color)] space-y-2">
        <h2 className="text-lg font-semibold text-[var(--primary-color)]">
          Important Points
        </h2>

        <ul className="space-y-2 text-[var(--text-secondary)] list-disc pl-5">
          <li>HTTP methods define the action of a request.</li>
          <li>GET retrieves resources.</li>
          <li>POST creates resources.</li>
          <li>PUT replaces a resource.</li>
          <li>PATCH partially updates a resource.</li>
          <li>DELETE removes a resource.</li>
          <li>HTTP methods are commonly used to implement CRUD operations.</li>
        </ul>
      </section>
      {/* Summary */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Quick Summary</h2>

        <div className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)]">
          <p className="text-[var(--text-secondary)] leading-7">
            <strong className="text-[var(--text-primary)]">GET:</strong>{" "}
            Retrieve data.
            <br />
            <strong className="text-[var(--text-primary)]">POST:</strong> Create
            data.
            <br />
            <strong className="text-[var(--text-primary)]">PUT:</strong> Replace
            data.
            <br />
            <strong className="text-[var(--text-primary)]">PATCH:</strong>{" "}
            Partially update data.
            <br />
            <strong className="text-[var(--text-primary)]">DELETE:</strong>{" "}
            Remove data.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HTTPMethods;
