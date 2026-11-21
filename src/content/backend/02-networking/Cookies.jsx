import CodeBlock from "../../../components/common/CodeBlock";

const Cookies = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <header className="space-y-3">
        <p className="text-sm font-semibold tracking-widest text-[var(--primary-color)]">
          BACKEND NETWORKING / 11
        </p>

        <h1 className="text-4xl font-bold">Cookies</h1>

        <p className="text-lg text-[var(--text-secondary)]">
          Cookies are small pieces of data stored in the browser and
          automatically sent to the server with matching HTTP requests.
        </p>
      </header>

      {/* Introduction */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What are Cookies?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Cookies are small key-value data stored by the browser. They help
          websites remember information such as login sessions, user preferences
          and shopping cart details.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5">
          <p className="text-sm text-[var(--text-muted)] mb-2">
            Example Cookie
          </p>
          <code className="text-[var(--primary-color)] break-all">
            sessionId = abc123xyz
          </code>
        </div>
      </section>

      {/* How Cookies Work */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">How Cookies Work</h2>

        <div className="grid gap-3 md:grid-cols-3">
          {[
            {
              title: "1. Server",
              desc: "Server sends a cookie using the Set-Cookie header.",
            },
            {
              title: "2. Browser",
              desc: "Browser stores the cookie.",
            },
            {
              title: "3. Next Request",
              desc: "Browser automatically sends the cookie back.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5"
            >
              <h3 className="font-semibold text-[var(--primary-color)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Flow Diagram */}
        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 space-y-3 text-center">
          <div className="mx-auto max-w-xs rounded-lg bg-[var(--bg-tertiary)] p-3">
            Browser
          </div>

          <div className="text-sm text-[var(--primary-color)]">
            Request: No Cookie (first visit) ↓
          </div>

          <div className="mx-auto max-w-xs rounded-lg border border-[var(--primary-color)] p-3">
            Server
          </div>

          <div className="text-sm text-[var(--primary-color)]">
            Response: Set-Cookie ↓
          </div>

          <div className="mx-auto max-w-xs rounded-lg bg-[var(--bg-tertiary)] p-3">
            Browser stores Cookie
          </div>

          <div className="text-sm text-[var(--primary-color)]">
            Next Request: Cookie header ↓
          </div>

          <div className="mx-auto max-w-xs rounded-lg border border-[var(--primary-color)] p-3">
            Server reads Cookie
          </div>
        </div>
      </section>

      {/* Important Headers */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Cookie Headers</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5">
            <h3 className="font-semibold text-[var(--primary-color)]">
              Set-Cookie
            </h3>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              Server uses this response header to create or update a cookie.
            </p>
            <pre className="mt-3 overflow-x-auto rounded-lg bg-[var(--bg-tertiary)] p-3 text-sm">
              {`Set-Cookie: sessionId=abc123`}
            </pre>
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5">
            <h3 className="font-semibold text-[var(--primary-color)]">
              Cookie
            </h3>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              Browser sends this request header containing stored cookies.
            </p>
            <pre className="mt-3 overflow-x-auto rounded-lg bg-[var(--bg-tertiary)] p-3 text-sm">
              {`Cookie: sessionId=abc123`}
            </pre>
          </div>
        </div>
      </section>

      {/* Cookie Options */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Important Cookie Options</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm text-left">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">Option</th>
                <th className="p-3">Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              {[
                ["httpOnly", "Prevents JavaScript from accessing the cookie."],
                ["secure", "Sends cookie only over HTTPS."],
                ["sameSite", "Controls cross-site cookie sending."],
                ["maxAge", "Sets cookie lifetime in milliseconds."],
                ["path", "Controls which URL paths receive the cookie."],
                ["domain", "Controls which domain can receive the cookie."],
              ].map(([option, purpose]) => (
                <tr key={option}>
                  <td className="p-3 font-medium text-[var(--primary-color)]">
                    {option}
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

      {/* Express Example */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Cookies in Express.js</h2>
        <p className="text-[var(--text-secondary)]">
          Express can create cookies using <code>res.cookie()</code>. To read
          incoming cookies easily, use the <code>cookie-parser</code>{" "}
          middleware.
        </p>
        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 space-y-3">
          <p className="text-sm font-semibold text-[var(--primary-color)]">
            Install
          </p>
          <pre className="overflow-x-auto text-sm">
            <code>npm install cookie-parser</code>
          </pre>
          <div className="h-px bg-[var(--border-color)]" />
          <p className="text-sm font-semibold text-[var(--primary-color)]">
            Server Code
          </p>
          <pre className="overflow-x-auto rounded-lg bg-[var(--bg-tertiary)] p-4 text-sm leading-6">
            <CodeBlock code={`import express from "express";


import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());

// Create Cookie
app.get("/login", (req, res) => {
res.cookie("sessionId", "abc123", {
httpOnly: true,
secure: true,
sameSite: "strict",
maxAge: 24 * 60 * 60 * 1000,
});

res.send("Cookie created");
});

// Read Cookie
app.get("/profile", (req, res) => {
const sessionId = req.cookies.sessionId;

res.json({ sessionId });
});

// Delete Cookie
app.get("/logout", (req, res) => {
res.clearCookie("sessionId");

res.send("Logged out");
});`} />
          </pre>{" "}
        </div>{" "}
      </section>

      {/* Security */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Cookie Security</h2>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 space-y-3">
          <p className="text-[var(--text-secondary)]">
            Cookies are commonly used for authentication, but they must be
            configured carefully.
          </p>

          <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
            <li>• Use httpOnly to protect cookies from JavaScript access.</li>
            <li>• Use secure in production with HTTPS.</li>
            <li>• Configure sameSite to reduce CSRF risks.</li>
            <li>
              • Never store passwords or sensitive data directly in cookies.
            </li>
            <li>• Validate sessions or tokens on the server.</li>
          </ul>
        </div>
      </section>

      {/* Important Note */}
      <section className="rounded-xl border border-[var(--primary-color)] bg-[var(--primary-soft)] p-5 space-y-2">
        <h3 className="font-semibold text-[var(--primary-color)]">Important</h3>
        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          httpOnly cookies cannot be read through JavaScript, but the browser
          can still send them with matching requests. Cookies are different from
          localStorage because the browser automatically attaches eligible
          cookies to HTTP requests.
        </p>
      </section>

      {/* Summary */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Quick Summary</h2>

        <ul className="space-y-2 text-[var(--text-secondary)]">
          <li>• Cookies store small pieces of data in the browser.</li>
          <li>• Set-Cookie creates or updates cookies.</li>
          <li>• Cookie header sends cookies with requests.</li>
          <li>• Cookies are commonly used for authentication and sessions.</li>
          <li>• httpOnly, secure and sameSite improve cookie security.</li>
        </ul>
      </section>
    </div>
  );
};

export default Cookies;
