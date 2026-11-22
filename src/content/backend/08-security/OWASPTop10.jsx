import CodeBlock from "../../../components/common/CodeBlock";

function OWASPTop10() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          BACKEND SECURITY / 19
        </p>
        <h1 className="mt-2 text-3xl font-bold">OWASP Top 10</h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          OWASP Top 10 is a regularly updated awareness document that
          highlights major security risks in web applications. It helps
          developers understand common vulnerabilities and build more
          secure applications.
        </p>
      </div>

      {/* 1. What is OWASP? */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What is OWASP?</h2>
        <p className="text-[var(--text-secondary)]">
          OWASP stands for Open Worldwide Application Security Project.
          It is a nonprofit organization focused on improving software
          security through open-source projects, tools, and educational
          resources.
        </p>
      </section>

      {/* 2. OWASP Top 10 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. OWASP Top 10 Security Risks</h2>

        <div className="space-y-3">
          {[
            {
              id: "A01",
              name: "Broken Access Control",
              desc: "Users can access resources or perform actions beyond their permissions.",
              prevention: "Implement server-side authorization and verify resource ownership.",
              example: "A user accesses another user's profile by changing the ID in the URL.",
            },
            {
              id: "A02",
              name: "Cryptographic Failures",
              desc: "Sensitive information is exposed because of weak or missing cryptographic protection.",
              prevention: "Use HTTPS, strong encryption, secure key management, and proper password hashing.",
              example: "Storing passwords as plain text.",
            },
            {
              id: "A03",
              name: "Injection",
              desc: "Untrusted input is interpreted as commands or queries by an application.",
              prevention: "Use parameterized queries, safe query construction, and input validation.",
              example: "SQL Injection and NoSQL Injection.",
            },
            {
              id: "A04",
              name: "Insecure Design",
              desc: "Security weaknesses exist because security was not considered during application design.",
              prevention: "Use threat modeling, secure design patterns, and security requirements.",
              example: "A money transfer system has no transaction limits or fraud controls.",
            },
            {
              id: "A05",
              name: "Security Misconfiguration",
              desc: "Incorrect security settings expose application functionality or sensitive information.",
              prevention: "Use secure defaults, disable unnecessary features, and configure security headers.",
              example: "Running production with debug mode enabled.",
            },
            {
              id: "A06",
              name: "Vulnerable and Outdated Components",
              desc: "Using dependencies with known vulnerabilities can expose an application to attacks.",
              prevention: "Update dependencies, run security audits, and remove unused packages.",
              example: "Using an outdated npm package with a known security vulnerability.",
            },
            {
              id: "A07",
              name: "Identification and Authentication Failures",
              desc: "Weak authentication or session management allows attackers to compromise user accounts.",
              prevention: "Use strong password hashing, MFA, secure sessions, and login rate limiting.",
              example: "Allowing unlimited password attempts.",
            },
            {
              id: "A08",
              name: "Software and Data Integrity Failures",
              desc: "Software updates, dependencies, or critical data are trusted without proper integrity verification.",
              prevention: "Verify software sources, signatures, and CI/CD pipeline integrity.",
              example: "Installing an untrusted package that contains malicious code.",
            },
            {
              id: "A09",
              name: "Security Logging and Alerting Failures",
              desc: "Security events are not properly recorded or monitored, delaying attack detection.",
              prevention: "Log important security events, monitor suspicious activity, and configure alerts.",
              example: "Repeated failed login attempts are never monitored.",
            },
            {
              id: "A10",
              name: "Mishandling of Exceptional Conditions",
              desc: "Unexpected errors or failure conditions are handled insecurely, causing data exposure or system problems.",
              prevention: "Handle errors safely, fail securely, and test unusual failure conditions.",
              example: "An unhandled exception exposes internal database details.",
            },
          ].map((item) => (
            <div
              key={item.id}
              className="rounded-lg border border-[var(--border-color)] p-4 space-y-2"
            >
              <p className="text-xs font-semibold text-[var(--accent-color)]">
                {item.id}
              </p>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                {item.desc}
              </p>
              <p className="text-sm">
                <strong>Example:</strong>{" "}
                <span className="text-[var(--text-secondary)]">
                  {item.example}
                </span>
              </p>
              <p className="text-sm">
                <strong>Prevention:</strong>{" "}
                <span className="text-[var(--text-secondary)]">
                  {item.prevention}
                </span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Practical Example */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Practical Example: Broken Access Control</h2>
        <p className="text-[var(--text-secondary)]">
          Never trust a user ID received from the frontend to decide which
          user's data can be accessed. Check ownership on the backend.
        </p>

        <CodeBlock
          code={`// Unsafe approach
app.get("/users/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

// Safer approach
app.get("/users/:id", authMiddleware, async (req, res) => {
  if (req.user.id !== req.params.id) {
    return res.status(403).json({
      message: "Access denied",
    });
  }

  const user = await User.findById(req.params.id);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  res.json(user);
});`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          This example allows users to access only their own profile.
          Admin access should be handled through a separate authorization
          rule.
        </p>
      </section>

      {/* 4. Why Developers Should Learn OWASP */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Why Should Developers Learn OWASP?</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>Understand common web application vulnerabilities.</li>
          <li>Build secure authentication and authorization systems.</li>
          <li>Protect sensitive user information.</li>
          <li>Identify security problems during development.</li>
          <li>Follow industry-recognized security practices.</li>
        </ul>
      </section>

      {/* 5. Interview Questions */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Interview Questions</h2>

        {[
          {
            q: "What is OWASP?",
            a: "OWASP is the Open Worldwide Application Security Project, an organization focused on improving software security.",
          },
          {
            q: "What is OWASP Top 10?",
            a: "It is an awareness document describing major security risk categories in web applications.",
          },
          {
            q: "What is Broken Access Control?",
            a: "It occurs when users can access resources or perform actions beyond their permissions.",
          },
          {
            q: "What is Injection?",
            a: "It occurs when untrusted input is interpreted as commands or queries by an application.",
          },
          {
            q: "What is Security Misconfiguration?",
            a: "It means application or infrastructure security settings are configured incorrectly.",
          },
          {
            q: "How can developers prevent OWASP vulnerabilities?",
            a: "Use secure coding practices, proper authorization, input validation, secure authentication, dependency auditing, and security testing.",
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

export default OWASPTop10;