import CodeBlock from "../../../components/common/CodeBlock";


function PasswordSecurity() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          AUTHENTICATION / 02
        </p>
        <h1 className="mt-2 text-3xl font-bold">Password Security</h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          Password security means protecting user passwords from unauthorized
          access, theft, and misuse throughout the authentication process.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. Common Password Security Mistakes</h2>
        <p className="text-[var(--text-secondary)]">
          Never handle passwords carelessly. These are common mistakes in
          backend applications:
        </p>

        <CodeBlock code={`// ❌ 1. Storing plain-text passwords
const user = {
  email: "user@gmail.com",
  password: "mypassword123"
};

// ❌ 2. Sending passwords in URL
// POST /login?password=mypassword123

// ❌ 3. Logging passwords
console.log(req.body.password);

// ❌ 4. Returning passwords in API response
res.json({ user });

// ❌ 5. Using weak hashing algorithms like MD5 or SHA1
`} />

        <p className="text-[var(--text-secondary)]">
          These practices can expose user credentials through database leaks,
          logs, browser history, or network traffic.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Password Security Best Practices</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Use HTTPS to protect credentials during transmission.</li>
          <li>Never store plain-text passwords.</li>
          <li>Use password hashing algorithms such as bcrypt or Argon2id.</li>
          <li>Validate password length and apply reasonable password rules.</li>
          <li>Never log passwords or expose them in API responses.</li>
          <li>Use rate limiting to reduce brute-force login attempts.</li>
          <li>Use generic login errors to avoid revealing whether an account exists.</li>
          <li>Keep password reset tokens short-lived and single-use.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Password Validation in Node.js</h2>
        <p className="text-[var(--text-secondary)]">
          Before storing a password, validate it on the backend. Frontend
          validation alone is not sufficient because API requests can be sent
          directly.
        </p>

        <CodeBlock code={`function validatePassword(password) {
  if (typeof password !== "string") {
    return "Password is required";
  }

  if (password.length < 12) {
    return "Password must be at least 12 characters";
  }

  if (password.length > 128) {
    return "Password is too long";
  }

  return null;
}

// Usage
const error = validatePassword(req.body.password);

if (error) {
  return res.status(400).json({ message: error });
}`} />

        <p className="text-[var(--text-secondary)]">
          Prefer allowing long passphrases and password managers. Avoid
          unnecessarily forcing users to include specific combinations of
          uppercase letters, numbers, and symbols.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Never Store Plain-Text Passwords</h2>
        <p className="text-[var(--text-secondary)]">
          When a user registers, never save their original password directly
          into MongoDB. Instead, convert it into a secure password hash.
        </p>

        <CodeBlock code={`// Registration flow

User Password
      |
      v
Password Validation
      |
      v
Password Hashing
      |
      v
Store Hash in MongoDB

// Database example
{
  email: "user@gmail.com",
  password: "$2b$12$hashedPasswordExample..."
}`} />

        <p className="text-[var(--text-secondary)]">
          A password hash is one-way: you cannot normally convert it back into
          the original password. During login, you compare the submitted
          password with the stored hash.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Protect Login Endpoints</h2>
        <p className="text-[var(--text-secondary)]">
          Attackers may repeatedly try passwords against a login endpoint.
          This is called a brute-force attack.
        </p>

        <p className="font-medium">Install express-rate-limit:</p>
        <CodeBlock code={`npm install express-rate-limit`} />

        <p className="font-medium">Configure rate limiting:</p>
        <CodeBlock code={`import rateLimit from "express-rate-limit";

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 5,
  message: {
    message: "Too many login attempts. Try again later."
  },
  standardHeaders: "draft-8",
  legacyHeaders: false
});

// Apply only to login route
app.use("/api/auth/login", loginLimiter);`} />

        <p className="text-[var(--text-secondary)]">
          This example allows five requests per IP address within 15 minutes.
          For production applications behind proxies, configure Express
          proxy trust correctly and consider distributed rate limiting.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Avoid Revealing Account Information</h2>
        <p className="text-[var(--text-secondary)]">
          Do not reveal whether an email exists during login. Use a generic
          error message for invalid credentials.
        </p>

        <CodeBlock code={`// ❌ Bad
if (!user) {
  return res.status(404).json({
    message: "User does not exist"
  });
}

// ❌ Bad
if (!isPasswordCorrect) {
  return res.status(401).json({
    message: "Wrong password"
  });
}

// ✅ Better
return res.status(401).json({
  message: "Invalid email or password"
});`} />

        <p className="text-[var(--text-secondary)]">
          This makes account enumeration more difficult. Keep response
          behavior reasonably consistent for both cases.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Important Security Checklist</h2>
        <div className="space-y-2">
          {[
            "Use HTTPS in production.",
            "Hash passwords with bcrypt or Argon2id.",
            "Never store or log plain-text passwords.",
            "Validate passwords on the backend.",
            "Apply login rate limiting.",
            "Use generic authentication error messages.",
            "Never return password hashes in API responses.",
            "Use secure, single-use password reset tokens.",
          ].map((item, index) => (
            <div key={index} className="flex gap-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] p-3">
              <span className="text-[var(--accent-color)]">✓</span>
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Interview Questions</h2>
        {[
          ["Why should passwords never be stored in plain text?", "A database leak would expose every user's original password."],
          ["What is password hashing?", "It converts a password into a one-way hash that can be verified later without storing the original password."],
          ["What is a brute-force attack?", "An attack where someone repeatedly tries different passwords to gain unauthorized access."],
          ["What is rate limiting?", "It restricts how many requests a client can make within a specific time window."],
          ["Why should we use HTTPS?", "HTTPS encrypts communication between the client and server, protecting credentials during transmission."],
          ["Why use generic login errors?", "They make it harder for attackers to discover which email addresses have registered accounts."],
          ["Should frontend validation be enough?", "No. Backend validation is mandatory because clients can bypass frontend checks."],
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

export default PasswordSecurity;