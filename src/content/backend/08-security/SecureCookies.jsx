import CodeBlock from "../../../components/common/CodeBlock";

function SecureCookies() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          BACKEND SECURITY / 13
        </p>
        <h1 className="mt-2 text-3xl font-bold">Secure Cookies</h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          Secure Cookies are HTTP cookies configured with security attributes
          that help protect sensitive information such as authentication
          tokens from unauthorized access and misuse.
        </p>
      </div>

      {/* 1. Why Secure Cookies? */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. Why Secure Cookies?</h2>
        <p className="text-[var(--text-secondary)]">
          Cookies are commonly used to store session IDs and authentication
          tokens. If they are not configured properly, attackers may steal
          or misuse them.
        </p>
      </section>

      {/* 2. Important Cookie Flags */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Important Cookie Security Flags</h2>

        <div className="space-y-3">
          {[
            {
              name: "HttpOnly",
              desc: "Prevents JavaScript from reading the cookie through document.cookie. Helps reduce token theft through XSS.",
            },
            {
              name: "Secure",
              desc: "Tells the browser to send the cookie only over HTTPS connections.",
            },
            {
              name: "SameSite",
              desc: "Controls when cookies are sent with cross-site requests. Helps protect against CSRF.",
            },
            {
              name: "Max-Age / Expires",
              desc: "Controls how long a cookie remains valid in the browser.",
            },
            {
              name: "Path",
              desc: "Controls the URL paths for which the browser sends the cookie.",
            },
            {
              name: "Domain",
              desc: "Controls which hosts can receive the cookie. Avoid setting it unnecessarily.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-lg border border-[var(--border-color)] p-4"
            >
              <h3 className="font-semibold">{item.name}</h3>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SameSite Values */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. SameSite Values</h2>

        <div className="space-y-3">
          <div className="rounded-lg border border-[var(--border-color)] p-4">
            <h3 className="font-semibold">Strict</h3>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">
              Cookie is sent only in same-site contexts. Provides strong
              cross-site request protection but can affect external navigation.
            </p>
          </div>

          <div className="rounded-lg border border-[var(--border-color)] p-4">
            <h3 className="font-semibold">Lax</h3>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">
              Allows cookies in same-site requests and certain cross-site
              top-level navigations using safe methods.
            </p>
          </div>

          <div className="rounded-lg border border-[var(--border-color)] p-4">
            <h3 className="font-semibold">None</h3>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">
              Allows cookies in cross-site contexts. Requires Secure in
              modern browsers.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Express Implementation */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Set Secure Cookie in Express</h2>
        <p className="text-[var(--text-secondary)]">
          After successful login, the server can store an authentication
          token in a secure HTTP-only cookie.
        </p>

        <CodeBlock
          code={`import express from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());

app.post("/login", async (req, res) => {
  // Verify user credentials first

  const token = "generated-auth-token";

  res.cookie("accessToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 15 * 60 * 1000,
    path: "/",
  });

  res.json({ message: "Login successful" });
});`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          The token above is a placeholder. In a real application, generate
          and sign the token after verifying the user's credentials.
        </p>
      </section>

      {/* 5. Read and Clear Cookie */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Read and Clear Cookie</h2>

        <CodeBlock
          code={`// Read cookie
app.get("/profile", (req, res) => {
  const token = req.cookies.accessToken;

  res.json({ hasToken: Boolean(token) });
});

// Clear cookie
app.post("/logout", (req, res) => {
  res.clearCookie("accessToken", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });

  res.json({ message: "Logged out successfully" });
});`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Cookie clearing should use the same relevant Path and Domain
          attributes used when setting the cookie.
        </p>
      </section>

      {/* 6. Important Security Rules */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Important Security Rules</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>Use HttpOnly for sensitive authentication cookies.</li>
          <li>Use Secure in production with HTTPS.</li>
          <li>Choose SameSite according to your application requirements.</li>
          <li>Never store passwords directly inside cookies.</li>
          <li>Use short-lived access tokens and manage refresh tokens securely.</li>
          <li>Use CSRF protection when your cookie-based authentication requires it.</li>
        </ul>
      </section>

      {/* 7. Important Difference */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. HttpOnly vs Secure</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="p-3 text-left">HttpOnly</th>
                <th className="p-3 text-left">Secure</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr>
                <td className="p-3">Blocks JavaScript access to the cookie.</td>
                <td className="p-3">Restricts cookie transmission to HTTPS.</td>
              </tr>
              <tr>
                <td className="p-3">Helps reduce cookie theft through XSS.</td>
                <td className="p-3">Protects cookie transmission over insecure HTTP.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 8. Interview Questions */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Interview Questions</h2>

        {[
          {
            q: "What are Secure Cookies?",
            a: "Cookies configured with security attributes such as HttpOnly, Secure, and SameSite.",
          },
          {
            q: "What does HttpOnly do?",
            a: "It prevents JavaScript from accessing the cookie through document.cookie.",
          },
          {
            q: "What does the Secure flag do?",
            a: "It tells the browser to send the cookie only over HTTPS.",
          },
          {
            q: "What is SameSite?",
            a: "It controls when cookies are sent with cross-site requests and helps reduce CSRF risks.",
          },
          {
            q: "Does HttpOnly prevent CSRF?",
            a: "No. HttpOnly prevents JavaScript from reading the cookie, but browsers can still automatically send it with requests.",
          },
        ].map((item, index) => (
          <details
            key={index}
            className="group rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4"
          >
            <summary className="cursor-pointer font-medium">
              {index + 1}. {item.q}
            </summary>
            <p className="mt-3 text-sm text-[var(--text-secondary)]">
              {item.a}
            </p>
          </details>
        ))}
      </section>
    </div>
  );
}

export default SecureCookies;