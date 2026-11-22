import CodeBlock from "../../../components/common/CodeBlock";

function SQLInjection() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          BACKEND SECURITY / 04
        </p>
        <h1 className="mt-2 text-3xl font-bold">SQL Injection</h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          SQL Injection is a security vulnerability in which an attacker
          inserts malicious SQL code into application inputs to manipulate
          database queries.
        </p>
      </div>

      {/* 1. How SQL Injection Works */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. How SQL Injection Works</h2>
        <p className="text-[var(--text-secondary)]">
          It happens when an application directly combines user input with
          an SQL query without safely handling that input.
        </p>

        <CodeBlock
          code={`const username = req.body.username;

const query =
  "SELECT * FROM users WHERE username = '" +
  username +
  "'";`}
        />

        <p className="text-[var(--text-secondary)]">
          An attacker can provide specially crafted input that changes the
          intended meaning of the SQL query.
        </p>
      </section>

      {/* 2. Example Attack */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Example of SQL Injection</h2>
        <p className="text-[var(--text-secondary)]">
          Consider a login query that directly inserts user input:
        </p>

        <CodeBlock
          code={`SELECT * FROM users
WHERE username = 'admin'
AND password = 'user_input';`}
        />

        <p className="text-[var(--text-secondary)]">
          If input is directly inserted into the query, an attacker may use
          SQL syntax to change its conditions, potentially bypassing login
          checks or accessing unauthorized data.
        </p>
      </section>

      {/* 3. Prevent SQL Injection */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. How to Prevent SQL Injection</h2>
        <p className="text-[var(--text-secondary)]">
          The most important prevention method is using parameterized queries
          instead of concatenating user input into SQL statements.
        </p>

        <CodeBlock
          code={`// Unsafe query
const query = \`SELECT * FROM users WHERE email = '\${email}'\`;

// Safe query using parameters
const result = await db.query(
  "SELECT * FROM users WHERE email = $1",
  [email]
);`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          The database treats the parameter as data, not as executable SQL
          syntax.
        </p>
      </section>

      {/* 4. Other Security Practices */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Other Security Practices</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>Use parameterized queries or prepared statements.</li>
          <li>Use trusted ORM or query-builder methods correctly.</li>
          <li>Validate input types and allowed values.</li>
          <li>Give database users only the permissions they need.</li>
          <li>Never expose database errors or query details to users.</li>
        </ul>
      </section>

      {/* 5. Interview Questions */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Interview Questions</h2>

        {[
          {
            q: "What is SQL Injection?",
            a: "It is an attack where malicious SQL input changes the intended database query.",
          },
          {
            q: "How does SQL Injection happen?",
            a: "It commonly happens when applications concatenate untrusted user input directly into SQL queries.",
          },
          {
            q: "What are parameterized queries?",
            a: "They separate SQL query structure from user-supplied values, preventing those values from being interpreted as SQL code.",
          },
          {
            q: "Can input validation alone prevent SQL Injection?",
            a: "No. Parameterized queries are the primary defense. Validation is an additional security layer.",
          },
          {
            q: "Can an ORM prevent SQL Injection?",
            a: "ORMs help when their parameterized query methods are used correctly, but unsafe raw SQL can still introduce SQL Injection.",
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

export default SQLInjection;