import CodeBlock from "../../../components/common/CodeBlock";

const APIVersioning = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8 text-[var(--white-color)]">
      {/* Header */}
      <header className="space-y-3">
        <span className="text-sm text-[var(--primary-color)] font-medium">
          API FUNDAMENTALS / 08
        </span>

        <h1 className="text-4xl font-bold">API Versioning</h1>

        <p className="text-lg text-[var(--muted-color)]">
          Managing API updates while keeping older applications working.
        </p>
      </header>

      {/* Introduction */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What is API Versioning?</h2>

        <p className="text-[var(--muted-color)] leading-7">
          API Versioning is a technique used to manage different versions of an
          API. It allows developers to introduce new features or changes without
          breaking applications that use older versions.
        </p>

        <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
          <p className="text-sm text-[var(--muted-color)] mb-3">
            Example: Different API versions
          </p>

          <div className="grid md:grid-cols-2 gap-3">
            <div className="p-4 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-color)]">
              <span className="text-xs text-[var(--primary-color)]">
                OLD VERSION
              </span>
              <p className="font-semibold mt-1">/api/v1/users</p>
              <p className="text-xs text-[var(--muted-color)] mt-2">
                Existing applications
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-color)]">
              <span className="text-xs text-[var(--primary-color)]">
                NEW VERSION
              </span>
              <p className="font-semibold mt-1">/api/v2/users</p>
              <p className="text-xs text-[var(--muted-color)] mt-2">
                Updated applications
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Why API Versioning?</h2>

        <div className="grid md:grid-cols-2 gap-3">
          {[
            ["Backward Compatibility", "Older applications continue working."],
            ["New Features", "Introduce new functionality safely."],
            [
              "Breaking Changes",
              "Change response structures without affecting old clients.",
            ],
            [
              "Better Maintenance",
              "Manage and maintain multiple API versions.",
            ],
          ].map(([title, description]) => (
            <div
              key={title}
              className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]"
            >
              <h3 className="font-semibold text-[var(--primary-color)]">
                {title}
              </h3>
              <p className="text-sm text-[var(--muted-color)] mt-2">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Versioning Methods */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Versioning Methods</h2>

        {/* URL */}
        <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] space-y-3">
          <h3 className="font-semibold text-[var(--primary-color)]">
            1. URI / URL Versioning
          </h3>

          <p className="text-sm text-[var(--muted-color)]">
            Version is included directly in the API URL. This is a common and
            easy-to-understand approach.
          </p>

          <pre className="text-sm text-[var(--primary-color)] overflow-x-auto">
            {`GET /api/v1/users
GET /api/v2/users`}
          </pre>
        </div>

        {/* Header */}
        <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] space-y-3">
          <h3 className="font-semibold text-[var(--primary-color)]">
            2. Header Versioning
          </h3>

          <p className="text-sm text-[var(--muted-color)]">
            Version is passed through a custom HTTP request header.
          </p>

          <pre className="text-sm text-[var(--primary-color)] overflow-x-auto">
            {`GET /api/users

API-Version: 2`}
          </pre>
        </div>

        {/* Query */}
        <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] space-y-3">
          <h3 className="font-semibold text-[var(--primary-color)]">
            3. Query Parameter Versioning
          </h3>

          <p className="text-sm text-[var(--muted-color)]">
            Version is passed as a query parameter in the URL.
          </p>

          <pre className="text-sm text-[var(--primary-color)] overflow-x-auto">
            {`GET /api/users?version=1
GET /api/users?version=2`}
          </pre>
        </div>

        {/* Media Type */}
        <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] space-y-3">
          <h3 className="font-semibold text-[var(--primary-color)]">
            4. Media Type Versioning
          </h3>

          <p className="text-sm text-[var(--muted-color)]">
            Version is specified using a custom media type in the Accept header.
          </p>

          <pre className="text-sm text-[var(--primary-color)] overflow-x-auto">
            {`GET /api/users

Accept: application/vnd.myapp.v2+json`}
          </pre>
        </div>
      </section>

      {/* Diagram */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">How API Versioning Works</h2>

        <div className="p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
          <div className="flex justify-center">
            <div className="px-6 py-3 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-center">
              <p className="font-semibold">Client Application</p>
              <p className="text-xs text-[var(--muted-color)]">
                Sends API Request
              </p>
            </div>
          </div>

          <div className="text-center text-[var(--primary-color)] py-3">↓</div>

          <div className="p-4 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-center">
            <p className="font-semibold">API Version Router</p>
            <p className="text-xs text-[var(--muted-color)]">
              Checks requested version
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="text-center space-y-2">
              <span className="text-[var(--primary-color)]">↓ v1</span>
              <div className="p-3 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-color)]">
                <p className="font-semibold">API v1</p>
                <p className="text-xs text-[var(--muted-color)]">
                  Old Response
                </p>
              </div>
            </div>

            <div className="text-center space-y-2">
              <span className="text-[var(--primary-color)]">↓ v2</span>
              <div className="p-3 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-color)]">
                <p className="font-semibold">API v2</p>
                <p className="text-xs text-[var(--muted-color)]">
                  Updated Response
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Express Example */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">API Versioning in Express.js</h2>

        <p className="text-[var(--muted-color)] leading-7">
          A simple approach is to create separate routes for each API version.
        </p>

        <div className="rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-secondary)]">
          <div className="px-4 py-2 border-b border-[var(--border-color)] text-sm text-[var(--muted-color)]">
            server.js
          </div>

          <pre className="p-4 overflow-x-auto text-sm leading-7 text-[var(--muted-color)]">
           <CodeBlock code={`import express from "express";

const app = express();

// API Version 1
app.get("/api/v1/users", (req, res) => {
  res.json({
    name: "Mayur"
  });
});

// API Version 2
app.get("/api/v2/users", (req, res) => {
  res.json({
    firstName: "Mayur",
    lastName: "Bairagi"
  });
});

app.listen(3000);`} />
          </pre>
        </div>
      </section>

      {/* Breaking Changes */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">
          Breaking vs Non-Breaking Changes
        </h2>

        <div className="grid md:grid-cols-2 gap-3">
          <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
            <h3 className="font-semibold text-[var(--primary-color)]">
              Breaking Change
            </h3>
            <p className="text-sm text-[var(--muted-color)] mt-2">
              A change that can cause existing clients to stop working.
            </p>
            <pre className="text-xs text-[var(--muted-color)] mt-3 overflow-x-auto">
              <CodeBlock code={`// Before
{ "name": "Mayur" }

// After
{ "firstName": "Mayur" }`} />
            </pre>
          </div>

          <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
            <h3 className="font-semibold text-[var(--primary-color)]">
              Non-Breaking Change
            </h3>
            <p className="text-sm text-[var(--muted-color)] mt-2">
              A backward-compatible change that does not break existing clients.
            </p>
            <pre className="text-xs text-[var(--muted-color)] mt-3 overflow-x-auto">
             <CodeBlock code= {`// Before
{ "name": "Mayur" }

// After
{
  "name": "Mayur",
  "age": 19
}`} />
            </pre>
          </div>
        </div>
      </section>

      {/* Important Points */}
      <section className="p-5 rounded-xl bg-[var(--primary-soft)] border border-[var(--border-color)] space-y-3">
        <h2 className="text-lg font-semibold text-[var(--primary-color)]">
          Important Points
        </h2>

        <ul className="space-y-2 text-sm text-[var(--muted-color)] list-disc pl-5">
          <li>API versioning manages changes across API versions.</li>
          <li>It helps maintain backward compatibility.</li>
          <li>URL versioning is simple and commonly used.</li>
          <li>Header and query parameter versioning are alternatives.</li>
          <li>Breaking changes may require a new API version.</li>
          <li>Old versions should have a clear deprecation plan.</li>
        </ul>
      </section>

      {/* Summary */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Quick Summary</h2>

        <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] text-sm text-[var(--muted-color)] leading-8">
          <strong className="text-[var(--white-color)]">API Versioning:</strong>{" "}
          Manages different versions of an API.
          <br />
          <strong className="text-[var(--white-color)]">v1:</strong> Older API
          version.
          <br />
          <strong className="text-[var(--white-color)]">v2:</strong> Updated API
          version.
          <br />
          <strong className="text-[var(--white-color)]">Main Goal:</strong>{" "}
          Introduce changes without breaking existing applications.
        </div>
      </section>
    </div>
  );
};

export default APIVersioning;
