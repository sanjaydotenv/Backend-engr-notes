import React from "react";
import CodeBlock from "../../../components/common/CodeBlock";

const RouteParameters = () => {
  const examples = [
    {
      route: "/users/:id",
      actual: "/users/101",
      value: "101",
      purpose: "Get a specific user.",
    },
    {
      route: "/products/:productId",
      actual: "/products/501",
      value: "501",
      purpose: "Get a specific product.",
    },
    {
      route: "/users/:userId/posts/:postId",
      actual: "/users/101/posts/25",
      value: "userId = 101, postId = 25",
      purpose: "Get a specific post belonging to a user.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8 text-[var(--text-primary)]">
      {/* Header */}{" "}
      <header className="space-y-3">
        {" "}
        <span className="text-sm text-[var(--primary-color)] font-medium">
          BACKEND NETWORKING / 10{" "}
        </span>
        <h1 className="text-4xl font-bold">Route Parameters</h1>
        <p className="text-lg text-[var(--text-secondary)]">
          Understanding how dynamic URL segments identify specific resources in
          backend applications.
        </p>
      </header>
      {/* Introduction */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What are Route Parameters?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Route Parameters are dynamic values placed inside a URL path. They
          allow the server to identify a specific resource, such as a user,
          product or order.
        </p>

        <div className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-3">
          <p className="text-sm text-[var(--text-muted)]">Example Route</p>

          <div className="p-3 rounded-lg bg-[var(--bg-tertiary)] overflow-x-auto">
            <code className="text-sm whitespace-nowrap">/users/:id</code>
          </div>

          <p className="text-sm text-[var(--text-secondary)]">
            Here, <strong className="text-[var(--primary-color)]">:id</strong>{" "}
            is a dynamic parameter that can receive different values.
          </p>

          <div className="p-3 rounded-lg bg-[var(--primary-soft)]">
            <p className="text-sm text-[var(--text-secondary)]">Actual URL:</p>
            <code className="text-[var(--primary-color)]">/users/101</code>
          </div>
        </div>
      </section>
      {/* How It Works */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">How Route Parameters Work</h2>

        <div className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)]">
          <div className="flex flex-col items-center gap-3 text-center">
            {[
              ["01", "Client", "Requests /users/101"],
              ["02", "Express Router", "Matches the /users/:id route"],
              ["03", "req.params", "Extracts id = 101"],
              ["04", "Controller", "Finds the user using the ID"],
              ["05", "Response", "Returns the requested user"],
            ].map(([number, title, description], index) => (
              <React.Fragment key={number}>
                <div className="w-full max-w-md p-4 rounded-lg border border-[var(--border-color)] bg-[var(--bg-tertiary)]">
                  <span className="text-xs text-[var(--primary-color)]">
                    STEP {number}
                  </span>
                  <h3 className="font-semibold mt-1">{title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] mt-1">
                    {description}
                  </p>
                </div>

                {index !== 4 && (
                  <span className="text-xl text-[var(--primary-color)]">↓</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
      {/* Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Route Parameter Examples</h2>

        {examples.map((item, index) => (
          <div
            key={item.route}
            className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-3"
          >
            <h3 className="font-semibold text-[var(--primary-color)]">
              Example {index + 1}
            </h3>

            <div className="space-y-2">
              <p className="text-xs text-[var(--text-muted)]">Route</p>
              <code className="text-sm break-all">{item.route}</code>
            </div>

            <div className="space-y-2">
              <p className="text-xs text-[var(--text-muted)]">Actual URL</p>
              <code className="text-sm text-[var(--primary-color)] break-all">
                {item.actual}
              </code>
            </div>

            <p className="text-sm text-[var(--text-secondary)]">
              <strong className="text-[var(--text-primary)]">Value:</strong>{" "}
              {item.value}
            </p>

            <p className="text-sm text-[var(--text-secondary)]">
              {item.purpose}
            </p>
          </div>
        ))}
      </section>
      {/* Express Example */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">
          Accessing Route Parameters in Express.js
        </h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Express provides req.params to access dynamic values from the URL
          path.
        </p>
        <div className="rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-secondary)]">
          <div className="px-4 py-2 border-b border-[var(--border-color)] text-sm text-[var(--text-muted)]">
            server.js
          </div>
          <pre className="p-4 overflow-x-auto text-sm leading-7 text-[var(--text-secondary)]">
            <CodeBlock code={`app.get("/users/:id", (req, res) => {


const userId = req.params.id;

res.status(200).json({
message: "User fetched successfully",
userId
});
});`}/>
          </pre>{" "}
        </div>
        <div className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-2">
          <p className="text-sm text-[var(--text-muted)]">Request URL</p>
          <code className="text-sm text-[var(--primary-color)]">
            GET /users/101
          </code>
          <p className="text-sm text-[var(--text-muted)] mt-3">req.params</p>
          <pre className="text-sm text-[var(--text-secondary)]">
            {`{
  id: "101"
}`}{" "}
          </pre>{" "}
        </div>{" "}
      </section>
      {/* Multiple Parameters */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Multiple Route Parameters</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          A route can contain multiple dynamic parameters. Express extracts each
          value separately.
        </p>
        <div className="rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-secondary)]">
          <div className="px-4 py-2 border-b border-[var(--border-color)] text-sm text-[var(--text-muted)]">
            server.js
          </div>
          <pre className="p-4 overflow-x-auto text-sm leading-7 text-[var(--text-secondary)]">
            <CodeBlock code={`app.get(


"/users/:userId/posts/:postId",
(req, res) => {
const { userId, postId } = req.params;


res.json({
  userId,
  postId
});


}
);`} />
          </pre>{" "}
        </div>{" "}
      </section>
      {/* Route vs Query */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">
          Route Parameters vs Query Parameters
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-2">
            <h3 className="font-semibold text-[var(--primary-color)]">
              Route Parameters
            </h3>

            <code className="text-sm break-all">/users/101</code>

            <p className="text-sm text-[var(--text-secondary)]">
              Identify a specific resource.
            </p>

            <code className="text-sm text-[var(--text-muted)]">
              req.params.id
            </code>
          </div>

          <div className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-2">
            <h3 className="font-semibold text-[var(--primary-color)]">
              Query Parameters
            </h3>

            <code className="text-sm break-all">/users?page=2</code>

            <p className="text-sm text-[var(--text-secondary)]">
              Filter, search, sort or paginate resources.
            </p>

            <code className="text-sm text-[var(--text-muted)]">
              req.query.page
            </code>
          </div>
        </div>
      </section>
      {/* Important Points */}
      <section className="p-5 rounded-xl bg-[var(--primary-soft)] border border-[var(--border-color)] space-y-3">
        <h2 className="text-lg font-semibold text-[var(--primary-color)]">
          Important Points
        </h2>

        <ul className="space-y-2 text-[var(--text-secondary)] list-disc pl-5">
          <li>Route parameters are dynamic URL path segments.</li>
          <li>They are defined using a colon (:).</li>
          <li>Express accesses them through req.params.</li>
          <li>A route can contain multiple parameters.</li>
          <li>Parameter values are generally strings.</li>
          <li>Validate IDs before querying the database.</li>
          <li>Route parameters are commonly used to identify resources.</li>
        </ul>
      </section>
      {/* Summary */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Quick Summary</h2>

        <div className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)]">
          <p className="text-[var(--text-secondary)] leading-8">
            <strong className="text-[var(--text-primary)]">
              Route Parameters:
            </strong>{" "}
            Dynamic values inside URL paths.
            <br />
            <strong className="text-[var(--text-primary)]">:</strong> Defines a
            dynamic route parameter.
            <br />
            <strong className="text-[var(--text-primary)]">
              req.params:
            </strong>{" "}
            Accesses route parameters in Express.
            <br />
            <strong className="text-[var(--text-primary)]">
              Common Use:
            </strong>{" "}
            Fetching a specific user, product or resource.
          </p>
        </div>
      </section>
    </div>
  );
};

export default RouteParameters;
