import CodeBlock from "../../../components/common/CodeBlock";

const CORS = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <header className="space-y-3">
        <p className="text-sm font-semibold tracking-widest text-[var(--primary-color)]">
          BACKEND NETWORKING / 12
        </p>

        <h1 className="text-4xl font-bold">CORS</h1>

        <p className="text-lg text-[var(--text-secondary)]">
          CORS (Cross-Origin Resource Sharing) is a browser security mechanism
          that controls whether a website can access resources from another
          origin.
        </p>
      </header>

      {/* Introduction */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What is CORS?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Browsers follow the Same-Origin Policy (SOP), which restricts
          JavaScript from accessing resources from a different origin. CORS
          allows a server to specify which origins are permitted.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 space-y-2">
          <p className="text-sm text-[var(--text-muted)]">Example</p>
          <p className="text-sm">
            Frontend:{" "}
            <code className="text-[var(--primary-color)]">
              http://localhost:5173
            </code>
          </p>
          <p className="text-sm">
            Backend:{" "}
            <code className="text-[var(--primary-color)]">
              http://localhost:3000
            </code>
          </p>
          <p className="text-sm text-[var(--text-secondary)]">
            Different ports mean different origins, even though the hostname is
            the same.
          </p>
        </div>
      </section>

      {/* Origin */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">What is an Origin?</h2>

        <p className="text-[var(--text-secondary)]">
          An origin consists of three parts:
        </p>

        <div className="grid grid-cols-3 gap-3">
          {[
            ["Protocol", "https://"],
            ["Domain", "example.com"],
            ["Port", ":3000"],
          ].map(([title, value]) => (
            <div
              key={title}
              className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 text-center"
            >
              <h3 className="text-sm text-[var(--text-muted)]">{title}</h3>
              <p className="mt-2 font-semibold text-[var(--primary-color)]">
                {value}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] p-4">
          <code className="text-[var(--primary-color)]">
            https://example.com:3000
          </code>
          <p className="mt-2 text-sm text-[var(--text-secondary)]">
            Changing the protocol, domain or port creates a different origin.
          </p>
        </div>
      </section>

      {/* How CORS Works */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">How CORS Works</h2>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 space-y-4 text-center">
          <div className="mx-auto max-w-xs rounded-lg bg-[var(--bg-tertiary)] p-3">
            Frontend
            <p className="text-xs text-[var(--text-muted)]">localhost:5173</p>
          </div>

          <p className="text-sm text-[var(--primary-color)]">
            1. HTTP Request ↓
          </p>

          <div className="mx-auto max-w-xs rounded-lg border border-[var(--primary-color)] p-3">
            Backend Server
            <p className="text-xs text-[var(--text-muted)]">localhost:3000</p>
          </div>

          <p className="text-sm text-[var(--primary-color)]">
            2. Server sends CORS headers ↓
          </p>

          <div className="mx-auto max-w-xs rounded-lg bg-[var(--bg-tertiary)] p-3">
            Browser checks CORS headers
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-green-500/40 p-3">
              <p className="font-semibold text-green-500">Allowed</p>
              <p className="mt-1 text-xs text-[var(--text-secondary)]">
                JavaScript can access the response.
              </p>
            </div>

            <div className="rounded-lg border border-red-500/40 p-3">
              <p className="font-semibold text-red-500">Blocked</p>
              <p className="mt-1 text-xs text-[var(--text-secondary)]">
                Browser blocks JavaScript from accessing the response.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORS Headers */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Important CORS Headers</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm text-left">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">Header</th>
                <th className="p-3">Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              {[
                ["Access-Control-Allow-Origin", "Specifies allowed origins."],
                [
                  "Access-Control-Allow-Methods",
                  "Specifies allowed HTTP methods.",
                ],
                [
                  "Access-Control-Allow-Headers",
                  "Specifies allowed request headers.",
                ],
                [
                  "Access-Control-Allow-Credentials",
                  "Allows credentials such as cookies.",
                ],
                ["Access-Control-Max-Age", "Caches preflight permission."],
              ].map(([header, purpose]) => (
                <tr key={header}>
                  <td className="p-3 font-medium text-[var(--primary-color)] break-all">
                    {header}
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

      {/* Preflight */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What is a Preflight Request?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          For certain cross-origin requests, the browser first sends an OPTIONS
          request to check whether the actual request is allowed. This is called
          a preflight request.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 space-y-3">
          <div>
            <p className="text-sm text-[var(--text-muted)]">
              Step 1: Preflight
            </p>
            <pre className="mt-2 overflow-x-auto rounded-lg bg-[var(--bg-tertiary)] p-3 text-sm">
              <CodeBlock code={`OPTIONS /api/users HTTP/1.1


Origin: http://localhost:5173
Access-Control-Request-Method: PUT`}/>{" "}
            </pre>{" "}
          </div>

          <div>
            <p className="text-sm text-[var(--text-muted)]">
              Step 2: Server Response
            </p>
            <pre className="mt-2 overflow-x-auto rounded-lg bg-[var(--bg-tertiary)] p-3 text-sm">
              <CodeBlock code={`HTTP/1.1 204 No Content


Access-Control-Allow-Origin: http://localhost:5173
Access-Control-Allow-Methods: GET, POST, PUT`} />
            </pre>{" "}
          </div>

          <div>
            <p className="text-sm text-[var(--text-muted)]">
              Step 3: Actual Request
            </p>
            <p className="text-sm text-[var(--text-secondary)]">
              If permission is granted, the browser sends the actual PUT
              request.
            </p>
          </div>
        </div>

        <p className="text-sm text-[var(--text-muted)]">
          Note: Simple requests may not need a preflight. Not every cross-origin
          request sends OPTIONS first.
        </p>
      </section>

      {/* Express Example */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">CORS in Express.js</h2>
        <p className="text-[var(--text-secondary)]">
          Express applications commonly use the <code>cors</code> package to
          configure CORS headers.
        </p>
        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 space-y-3">
          <p className="text-sm font-semibold text-[var(--primary-color)]">
            Install
          </p>
          <pre className="overflow-x-auto text-sm">
            <code>npm install cors</code>
          </pre>
          <div className="h-px bg-[var(--border-color)]" />
          <p className="text-sm font-semibold text-[var(--primary-color)]">
            Server Code
          </p>
          <pre className="overflow-x-auto rounded-lg bg-[var(--bg-tertiary)] p-4 text-sm leading-6">
            <CodeBlock code={`import express from "express";


import cors from "cors";

const app = express();

app.use(
cors({
origin: "http://localhost:5173",
methods: ["GET", "POST", "PUT", "DELETE"],
credentials: true,
})
);

app.get("/api/users", (req, res) => {
res.json({ message: "CORS is working!" });
});

app.listen(3000);`} />
          </pre>{" "}
        </div>{" "}
      </section>

      {/* Credentials */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">CORS with Cookies</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          If your frontend sends cookies to another origin, both frontend and
          backend must allow credentials.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 space-y-3">
          <p className="font-semibold text-[var(--primary-color)]">
            Frontend (Axios)
          </p>
          <pre className="overflow-x-auto rounded-lg bg-[var(--bg-tertiary)] p-3 text-sm">
            <CodeBlock code={`axios.get("http://localhost:3000/api/users", {


withCredentials: true,
});`} />
          </pre>
          <p className="font-semibold text-[var(--primary-color)]">
            Backend (Express)
          </p>
          <pre className="overflow-x-auto rounded-lg bg-[var(--bg-tertiary)] p-3 text-sm">
           <CodeBlock code={`app.use(cors({


origin: "http://localhost:5173",
credentials: true,
}));`} />
          </pre>{" "}
        </div>

        <div className="rounded-xl border border-[var(--primary-color)] bg-[var(--primary-soft)] p-4">
          <p className="text-sm text-[var(--text-secondary)]">
            Important: When credentials are enabled, you cannot use{" "}
            <code>origin: "*"</code>. Specify the exact allowed origin.
          </p>
        </div>
      </section>

      {/* Important Note */}
      <section className="rounded-xl border border-[var(--primary-color)] bg-[var(--primary-soft)] p-5 space-y-2">
        <h3 className="font-semibold text-[var(--primary-color)]">Important</h3>
        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          CORS is enforced by browsers, not a replacement for backend
          authentication or authorization. Tools like Postman and curl generally
          do not enforce browser CORS restrictions.
        </p>
      </section>

      {/* Summary */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Quick Summary</h2>

        <ul className="space-y-2 text-[var(--text-secondary)]">
          <li>• CORS stands for Cross-Origin Resource Sharing.</li>
          <li>• It controls cross-origin access in browsers.</li>
          <li>• Origin consists of protocol, domain and port.</li>
          <li>• Server uses CORS headers to allow specific origins.</li>
          <li>• Preflight requests use the OPTIONS method.</li>
          <li>• Credentials require explicit origin configuration.</li>
        </ul>
      </section>
    </div>
  );
};

export default CORS;
