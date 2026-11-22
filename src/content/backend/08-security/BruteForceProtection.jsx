import CodeBlock from "../../../components/common/CodeBlock";

function BruteForceProtection() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          BACKEND SECURITY / 09
        </p>
        <h1 className="mt-2 text-3xl font-bold">Brute Force Protection</h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          Brute Force Protection refers to security techniques that prevent
          attackers from repeatedly guessing passwords or authentication
          credentials until they find the correct combination.
        </p>
      </div>

      {/* 1. What is Brute Force Attack? */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What is a Brute Force Attack?</h2>
        <p className="text-[var(--text-secondary)]">
          In this attack, an attacker tries multiple password combinations
          against a login system to gain unauthorized access.
        </p>

        <CodeBlock
          code={`Attempt 1: password123
Attempt 2: admin123
Attempt 3: welcome123
Attempt 4: correct-password`}
        />

        <p className="text-[var(--text-secondary)]">
          If the attacker guesses the correct password, they may gain access
          to the user's account.
        </p>
      </section>

      {/* 2. Types */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Common Types</h2>

        <div className="space-y-3">
          <div className="rounded-lg border border-[var(--border-color)] p-4">
            <h3 className="font-semibold">Simple Brute Force</h3>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">
              Tries many possible password combinations.
            </p>
          </div>

          <div className="rounded-lg border border-[var(--border-color)] p-4">
            <h3 className="font-semibold">Dictionary Attack</h3>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">
              Tries passwords from a predefined list of commonly used words
              and passwords.
            </p>
          </div>

          <div className="rounded-lg border border-[var(--border-color)] p-4">
            <h3 className="font-semibold">Credential Stuffing</h3>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">
              Uses leaked username and password combinations from other
              websites to attempt logins.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Protection Methods */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. How to Prevent Brute Force Attacks</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li><strong>Rate Limiting:</strong> Restrict repeated login attempts.</li>
          <li><strong>Temporary Lockout:</strong> Temporarily block login attempts after repeated failures.</li>
          <li><strong>Strong Passwords:</strong> Encourage long and unique passwords.</li>
          <li><strong>MFA:</strong> Require an additional authentication factor.</li>
          <li><strong>Monitoring:</strong> Detect suspicious login activity.</li>
          <li><strong>CAPTCHA:</strong> Add challenges when suspicious behavior is detected.</li>
        </ul>
      </section>

      {/* 4. Express Example */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Implement Protection in Express</h2>
        <p className="text-[var(--text-secondary)]">
          We can use <code>express-rate-limit</code> to restrict repeated
          login attempts.
        </p>

        <CodeBlock code={`npm install express-rate-limit`} />

        <CodeBlock
          code={`import rateLimit from "express-rate-limit";

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  message: {
    message: "Too many login attempts. Try again later.",
  },
  standardHeaders: "draft-8",
  legacyHeaders: false,
});

// Apply before the login controller
app.use("/api/auth/login", loginLimiter);`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          This limits each client to 5 login requests within 15 minutes.
          For production, consider a shared Redis store and account-based
          protections as well.
        </p>
      </section>

      {/* 5. Important Difference */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Rate Limiting vs Brute Force Protection</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="p-3 text-left">Rate Limiting</th>
                <th className="p-3 text-left">Brute Force Protection</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr>
                <td className="p-3">Controls request frequency.</td>
                <td className="p-3">Prevents repeated credential guessing.</td>
              </tr>
              <tr>
                <td className="p-3">Applies to different API routes.</td>
                <td className="p-3">Focuses on authentication attempts.</td>
              </tr>
              <tr>
                <td className="p-3">General protection technique.</td>
                <td className="p-3">Uses multiple protection techniques.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 6. Interview Questions */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Interview Questions</h2>

        {[
          {
            q: "What is a Brute Force Attack?",
            a: "It is an attack where someone repeatedly tries different passwords to gain unauthorized access.",
          },
          {
            q: "What is a Dictionary Attack?",
            a: "It tries passwords from a predefined list of commonly used passwords.",
          },
          {
            q: "What is Credential Stuffing?",
            a: "It uses leaked username and password combinations from other websites to attempt logins.",
          },
          {
            q: "How can we prevent Brute Force Attacks?",
            a: "Use rate limiting, temporary lockouts, MFA, strong passwords, and suspicious activity monitoring.",
          },
          {
            q: "Is Rate Limiting enough to prevent Brute Force Attacks?",
            a: "No. It is one layer of protection. Account-based monitoring, MFA, and other controls are also useful.",
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

export default BruteForceProtection;