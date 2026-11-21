import CodeBlock from "../../../components/common/CodeBlock";

const StatelessvsStateful = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8 text-[var(--white-color)]">
      {/* Header */}
      <header className="space-y-3">
        <span className="text-sm text-[var(--primary-color)] font-medium">
          API FUNDAMENTALS / 10
        </span>

        <h1 className="text-4xl font-bold">Stateless vs Stateful</h1>

        <p className="text-lg text-[var(--muted-color)]">
          Understanding how servers manage client information between requests.
        </p>
      </header>

      {/* Introduction */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What is Stateless?</h2>

        <p className="text-[var(--muted-color)] leading-7">
          In a stateless system, the server does not store client session
          information between requests. Every request must contain the
          information needed to process it independently.
        </p>

        <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] space-y-2">
          <p className="text-sm text-[var(--muted-color)]">Example</p>

          <pre className="text-sm text-[var(--primary-color)] overflow-x-auto">
            {`GET /api/profile

Authorization: Bearer <access_token>`}
          </pre>

          <p className="text-sm text-[var(--muted-color)]">
            The client sends its authentication token with every protected
            request.
          </p>
        </div>
      </section>

      {/* Stateless Diagram */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Stateless Architecture</h2>

        <div className="p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-center">
              <p className="font-semibold">Request 1</p>
              <p className="text-xs text-[var(--muted-color)]">Token + Data</p>
            </div>

            <div className="p-3 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-center">
              <p className="font-semibold">Request 2</p>
              <p className="text-xs text-[var(--muted-color)]">Token + Data</p>
            </div>
          </div>

          <div className="text-center text-[var(--primary-color)] py-3">↓</div>

          <div className="p-4 rounded-xl bg-[var(--primary-soft)] border border-[var(--primary-color)] text-center">
            <h3 className="font-semibold text-[var(--primary-color)]">
              Server
            </h3>
            <p className="text-xs text-[var(--muted-color)]">
              Processes each request independently
            </p>
          </div>

          <p className="text-xs text-[var(--muted-color)] text-center mt-3">
            Server does not depend on stored client session state.
          </p>
        </div>
      </section>

      {/* Stateful */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What is Stateful?</h2>

        <p className="text-[var(--muted-color)] leading-7">
          In a stateful system, the server maintains information about a
          client's previous interactions. Future requests can depend on that
          stored session information.
        </p>

        <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] space-y-2">
          <p className="text-sm text-[var(--muted-color)]">Example</p>

          <pre className="text-sm text-[var(--primary-color)] overflow-x-auto">
            {`// User logs in
POST /login

// Server creates and stores a session
Session ID: abc123

// Later requests use that session
GET /dashboard
Cookie: sessionId=abc123`}
          </pre>
        </div>
      </section>

      {/* Stateful Diagram */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Stateful Architecture</h2>

        <div className="p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
          <div className="p-4 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-center">
            <h3 className="font-semibold">Client</h3>
            <p className="text-xs text-[var(--muted-color)]">
              Sends Session ID
            </p>
          </div>

          <div className="text-center text-[var(--primary-color)] py-3">↓</div>

          <div className="p-4 rounded-xl bg-[var(--primary-soft)] border border-[var(--primary-color)] text-center">
            <h3 className="font-semibold text-[var(--primary-color)]">
              Server
            </h3>
            <p className="text-xs text-[var(--muted-color)]">
              Reads and updates session information
            </p>
          </div>

          <div className="text-center text-[var(--primary-color)] py-3">↓</div>

          <div className="p-4 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-center">
            <h3 className="font-semibold">Session Store</h3>
            <p className="text-xs text-[var(--muted-color)]">
              Stores user session data
            </p>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Stateless vs Stateful</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm text-left">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">Feature</th>
                <th className="p-3">Stateless</th>
                <th className="p-3">Stateful</th>
              </tr>
            </thead>

            <tbody className="text-[var(--muted-color)]">
              {[
                [
                  "Session Storage",
                  "Not required on server",
                  "Maintained by server",
                ],
                ["Requests", "Independent", "Can depend on previous requests"],
                [
                  "Scalability",
                  "Generally easier",
                  "Requires session management",
                ],
                [
                  "Server Memory",
                  "No client session required",
                  "May store session data",
                ],
                ["Example", "JWT-based API", "Session-based login"],
              ].map(([feature, stateless, stateful]) => (
                <tr
                  key={feature}
                  className="border-t border-[var(--border-color)]"
                >
                  <td className="p-3 font-semibold text-[var(--white-color)]">
                    {feature}
                  </td>
                  <td className="p-3">{stateless}</td>
                  <td className="p-3">{stateful}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Practical Example */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Practical Backend Examples</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] space-y-3">
            <h3 className="font-semibold text-[var(--primary-color)]">
              Stateless - JWT
            </h3>

            <pre className="text-xs text-[var(--muted-color)] overflow-x-auto">
              <CodeBlock code={`app.get("/profile", authMiddleware, (req, res) => {
  res.json({
    user: req.user
  });
});`} />
            </pre>

            <p className="text-sm text-[var(--muted-color)]">
              The client sends a token with each request. The server verifies it
              instead of looking up a login session.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] space-y-3">
            <h3 className="font-semibold text-[var(--primary-color)]">
              Stateful - Session
            </h3>

            <pre className="text-xs text-[var(--muted-color)] overflow-x-auto">
              <CodeBlock code={`app.get("/profile", (req, res) => {
  if (!req.session.user) {
    return res.sendStatus(401);
  }

  res.json({
    user: req.session.user
  });
});`} />
            </pre>

            <p className="text-sm text-[var(--muted-color)]">
              The server reads the user's information from the previously
              created session.
            </p>
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] space-y-2">
        <h3 className="font-semibold text-[var(--primary-color)]">
          Important Note
        </h3>

        <p className="text-sm text-[var(--muted-color)] leading-7">
          Stateless does not mean the server stores no data at all. It means the
          server does not rely on stored client session state between requests.
          User data can still exist in a database. Also, JWT authentication is
          not automatically stateless if the server maintains session or token
          state.
        </p>
      </section>

      {/* Important Points */}
      <section className="p-5 rounded-xl bg-[var(--primary-soft)] border border-[var(--border-color)] space-y-3">
        <h2 className="text-lg font-semibold text-[var(--primary-color)]">
          Important Points
        </h2>

        <ul className="space-y-2 text-sm text-[var(--muted-color)] list-disc pl-5">
          <li>Stateless servers do not maintain client session state.</li>
          <li>Each stateless request carries the required information.</li>
          <li>Stateful servers maintain client session information.</li>
          <li>JWT-based APIs are commonly designed to be stateless.</li>
          <li>Session-based authentication is commonly stateful.</li>
          <li>REST architecture requires stateless communication.</li>
        </ul>
      </section>

      {/* Summary */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Quick Summary</h2>

        <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] text-sm text-[var(--muted-color)] leading-8">
          <strong className="text-[var(--white-color)]">Stateless:</strong>{" "}
          Server does not maintain client session state between requests.
          <br />
          <strong className="text-[var(--white-color)]">Stateful:</strong>{" "}
          Server maintains client session information.
          <br />
          <strong className="text-[var(--white-color)]">JWT:</strong> Commonly
          used for stateless authentication.
          <br />
          <strong className="text-[var(--white-color)]">Session:</strong>{" "}
          Commonly used for stateful authentication.
        </div>
      </section>
    </div>
  );
};

export default StatelessvsStateful;
