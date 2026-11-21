import CodeBlock from "../../../components/common/CodeBlock";

function HTTPonlyCookies() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          AUTHENTICATION / 07
        </p>
        <h1 className="mt-2 text-3xl font-bold">HTTP-only Cookies</h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          An HTTP-only cookie is a browser cookie that JavaScript cannot
          access through document.cookie. It is commonly used to protect
          authentication tokens from being read by injected JavaScript.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What is HttpOnly?</h2>
        <p className="text-[var(--text-secondary)]">
          Normally, JavaScript can read cookies that do not have the
          HttpOnly flag. But when a cookie is marked as HttpOnly, browser
          JavaScript cannot read or modify its value.
        </p>

        <CodeBlock code={`// Normal cookie
document.cookie = "token=abc123";

// JavaScript can read it
console.log(document.cookie);

// HTTP-only cookie
// JavaScript cannot read its value
// document.cookie will not show it.`} />

        <p className="text-[var(--text-secondary)]">
          Important: HttpOnly prevents JavaScript access to the cookie.
          It does not prevent the browser from automatically sending that
          cookie with eligible HTTP requests.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Why Use HTTP-only Cookies?</h2>
        <p className="text-[var(--text-secondary)]">
          Suppose an attacker manages to inject JavaScript into your website
          through an XSS vulnerability.
        </p>

        <CodeBlock code={`// Without HttpOnly
const token = document.cookie;

// Attacker's injected JavaScript
// may be able to read and steal the token.


// With HttpOnly
// document.cookie cannot access
// the HTTP-only token cookie.`} />

        <p className="text-[var(--text-secondary)]">
          HttpOnly reduces the risk of authentication cookies being stolen
          through JavaScript-based cookie theft. However, it does not stop
          XSS from performing actions as the logged-in user.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Important Cookie Options</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-[var(--bg-card)]">
                <th className="border border-[var(--border-color)] p-3 text-left">Option</th>
                <th className="border border-[var(--border-color)] p-3 text-left">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["httpOnly", "Prevents JavaScript access to the cookie."],
                ["secure", "Sends the cookie only over HTTPS."],
                ["sameSite", "Controls when cookies are sent with cross-site requests."],
                ["maxAge", "Sets cookie lifetime in milliseconds."],
                ["expires", "Sets the cookie expiration date."],
                ["path", "Controls which URL paths receive the cookie."],
              ].map(([option, purpose]) => (
                <tr key={option}>
                  <td className="border border-[var(--border-color)] p-3 font-medium">{option}</td>
                  <td className="border border-[var(--border-color)] p-3 text-[var(--text-secondary)]">{purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Create HTTP-only Cookie in Express</h2>
        <p className="text-[var(--text-secondary)]">
          Express provides <code>res.cookie()</code> to send cookies to the
          browser.
        </p>

        <CodeBlock code={`import express from "express";

const app = express();

app.get("/set-cookie", (req, res) => {
  res.cookie("token", "example-token-value", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 15 * 60 * 1000,
    path: "/"
  });

  res.json({
    message: "HTTP-only cookie created"
  });
});`} />

        <p className="text-[var(--text-secondary)]">
          The browser receives a Set-Cookie response header and stores the
          cookie according to its options.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Read HTTP-only Cookies</h2>
        <p className="text-[var(--text-secondary)]">
          JavaScript cannot read HTTP-only cookies, but the backend can read
          them from incoming request headers.
        </p>

        <p className="font-medium">Install cookie-parser:</p>
        <CodeBlock code={`npm install cookie-parser`} />

        <p className="font-medium">Configure middleware:</p>
        <CodeBlock code={`import cookieParser from "cookie-parser";

app.use(cookieParser());`} />

        <p className="font-medium">Read cookie on backend:</p>
        <CodeBlock code={`app.get("/read-cookie", (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Cookie not found"
    });
  }

  res.json({
    message: "Cookie received successfully"
  });
});`} />

        <p className="text-[var(--text-secondary)]">
          <code>cookie-parser</code> parses the Cookie request header and
          makes cookie values available through <code>req.cookies</code>.
          Express Session already manages its own session cookie, so
          cookie-parser is not required just to use express-session.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Clear HTTP-only Cookie</h2>
        <p className="text-[var(--text-secondary)]">
          During logout, clear the authentication cookie using
          <code>res.clearCookie()</code>.
        </p>

        <CodeBlock code={`app.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/"
  });

  res.json({
    message: "Cookie cleared"
  });
});`} />

        <p className="text-[var(--text-secondary)]">
          Cookie name, path and domain must match the original cookie
          configuration where applicable. Clearing a cookie does not
          automatically revoke a JWT or invalidate a server-side session;
          handle that separately when required.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Frontend with Axios</h2>
        <p className="text-[var(--text-secondary)]">
          The frontend does not need to manually read or attach an HTTP-only
          cookie. The browser handles it automatically when cookie rules
          allow it.
        </p>

        <CodeBlock code={`import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true
});

// Login
await api.post("/auth/login", {
  email: "user@gmail.com",
  password: "mypassword123"
});

// Browser automatically sends eligible cookies
const response = await api.get("/auth/profile");`} />

        <p className="text-[var(--text-secondary)]">
          When frontend and backend are on different origins, configure
          backend CORS with the exact allowed frontend origin and
          <code> credentials: true</code>. Cross-site cookies may require
          <code> sameSite: "none"</code> and <code>secure: true</code>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Important Security Points</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Use HttpOnly for authentication cookies.</li>
          <li>Use Secure in production with HTTPS.</li>
          <li>Choose SameSite according to your frontend/backend deployment.</li>
          <li>Use CSRF protection for cookie-based authentication.</li>
          <li>Never expose authentication tokens in API responses unnecessarily.</li>
          <li>HttpOnly does not prevent XSS attacks themselves.</li>
          <li>Cookie expiration and token expiration are separate things.</li>
          <li>Use appropriate cookie Path and Domain settings.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Interview Questions</h2>
        {[
          ["What is an HTTP-only cookie?", "A cookie that JavaScript cannot access through document.cookie."],
          ["Why do we use HttpOnly?", "To reduce the risk of authentication cookie theft through injected JavaScript."],
          ["Can the backend read HTTP-only cookies?", "Yes. The browser sends eligible cookies in the Cookie request header."],
          ["Can JavaScript send HTTP-only cookies manually?", "No. JavaScript cannot read their values, but the browser can automatically attach them to eligible requests."],
          ["What is the difference between HttpOnly and Secure?", "HttpOnly restricts JavaScript access; Secure restricts cookie transmission to HTTPS."],
          ["What does SameSite do?", "It controls whether cookies are sent with cross-site requests."],
          ["Does HttpOnly prevent CSRF?", "No. CSRF protection must be handled separately."],
          ["Does clearing a JWT cookie invalidate the JWT?", "No. It removes the browser cookie, but a copied JWT can remain valid until expiry or revocation."],
        ].map(([question, answer], index) => (
          <details key={index} className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
            <summary className="cursor-pointer font-medium">{question}</summary>
            <p className="mt-3 text-sm text-[var(--text-secondary)]">{answer}</p>
          </details>
        ))}
      </section>
    </div>
  );
}

export default HTTPonlyCookies;