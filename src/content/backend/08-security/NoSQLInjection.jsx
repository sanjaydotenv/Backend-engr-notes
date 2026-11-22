import CodeBlock from "../../../components/common/CodeBlock";

function NoSQLInjection() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          BACKEND SECURITY / 05
        </p>
        <h1 className="mt-2 text-3xl font-bold">NoSQL Injection</h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          NoSQL Injection is a security vulnerability in which an attacker
          manipulates NoSQL database queries by providing malicious input.
          It commonly affects applications using MongoDB.
        </p>
      </div>

      {/* 1. How It Works */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. How NoSQL Injection Works</h2>
        <p className="text-[var(--text-secondary)]">
          MongoDB queries use JavaScript objects. If an application directly
          accepts user-controlled objects as query conditions, an attacker
          may inject MongoDB operators such as <code>$ne</code> or
          <code> $gt</code>.
        </p>

        <CodeBlock
          code={`// Unsafe login query
const user = await User.findOne({
  email: req.body.email,
  password: req.body.password,
});`}
        />

        <p className="text-[var(--text-secondary)]">
          If the backend does not check input types, an attacker may send an
          object instead of a normal string.
        </p>
      </section>

      {/* 2. Example Attack */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Example of NoSQL Injection</h2>
        <p className="text-[var(--text-secondary)]">
          An attacker may send this kind of JSON input:
        </p>

        <CodeBlock
          code={`{
  "email": "user@example.com",
  "password": {
    "$ne": null
  }
}`}
        />

        <p className="text-[var(--text-secondary)]">
          The <code>$ne</code> operator means "not equal". If the application
          passes this object directly into a query, it may match a document
          with a password field that is not null instead of checking the
          actual password.
        </p>

        <p className="text-sm text-[var(--text-secondary)]">
          This example demonstrates an unsafe query. A real login system
          should never authenticate users by directly querying a plaintext
          password field.
        </p>
      </section>

      {/* 3. Prevent NoSQL Injection */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. How to Prevent NoSQL Injection</h2>
        <p className="text-[var(--text-secondary)]">
          Always validate input types and build database queries using
          trusted values instead of accepting complete query objects from
          users.
        </p>

        <CodeBlock
          code={`// Validate input
const { email, password } = req.body;

if (
  typeof email !== "string" ||
  typeof password !== "string"
) {
  return res.status(400).json({
    message: "Invalid input",
  });
}

// Safe query structure
const user = await User.findOne({
  email: email,
});

// Verify password separately using bcrypt
const isMatch = await bcrypt.compare(
  password,
  user.password
);`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Also check that <code>user</code> exists before accessing
          <code> user.password</code>.
        </p>
      </section>

      {/* 4. Security Practices */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Security Practices</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>Never trust user input.</li>
          <li>Accept expected data types only.</li>
          <li>Never pass <code>req.body</code> directly into database queries.</li>
          <li>Build queries using explicitly selected fields.</li>
          <li>Use proper password hashing and verification.</li>
          <li>Use least-privilege database permissions.</li>
          <li>Validate and restrict user-controlled query operators.</li>
        </ul>
      </section>

      {/* 5. Interview Questions */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Interview Questions</h2>

        {[
          {
            q: "What is NoSQL Injection?",
            a: "It is an attack where malicious input manipulates a NoSQL database query.",
          },
          {
            q: "What is the $ne operator in MongoDB?",
            a: "$ne means not equal. It matches values that are not equal to the specified value.",
          },
          {
            q: "How can NoSQL Injection happen?",
            a: "It can happen when an application accepts user-controlled objects or operators directly in database queries.",
          },
          {
            q: "How do you prevent NoSQL Injection?",
            a: "Validate input types, build queries using trusted values, and never pass complete user input objects directly into queries.",
          },
          {
            q: "Does Mongoose automatically prevent NoSQL Injection?",
            a: "Mongoose provides some protections, but developers must still validate input and avoid unsafe query construction.",
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

export default NoSQLInjection;