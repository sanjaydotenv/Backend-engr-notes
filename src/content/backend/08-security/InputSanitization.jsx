import CodeBlock from "../../../components/common/CodeBlock";

function InputSanitization() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          BACKEND SECURITY / 03
        </p>
        <h1 className="mt-2 text-3xl font-bold">Input Sanitization</h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          Input Sanitization is the process of cleaning user input before
          using or storing it. It helps prevent malicious or unexpected data
          from causing security problems in an application.
        </p>
      </div>

      {/* 1. Why Input Sanitization? */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. Why Input Sanitization?</h2>
        <p className="text-[var(--text-secondary)]">
          Users can send unexpected or malicious data through forms, API
          requests, and query parameters. If the server trusts this input
          blindly, attackers may exploit the application.
        </p>

        <CodeBlock
          code={`// User input
{
  "name": "<script>alert('Hello')</script>"
}`}
        />

        <p className="text-[var(--text-secondary)]">
          If this input is rendered as HTML without proper handling, it may
          execute JavaScript in the browser.
        </p>
      </section>

      {/* 2. Validation vs Sanitization */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Validation vs Sanitization</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="p-3 text-left">Validation</th>
                <th className="p-3 text-left">Sanitization</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Checks whether input is valid.</td>
                <td className="p-3">Cleans or transforms input.</td>
              </tr>
              <tr>
                <td className="p-3">Rejects invalid data.</td>
                <td className="p-3">Removes or encodes unwanted content.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <CodeBlock
          code={`// Validation
if (typeof username !== "string") {
  throw new Error("Invalid username");
}

// Sanitization
const cleanUsername = username.trim();`}
        />
      </section>

      {/* 3. Common Sanitization Techniques */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Common Sanitization Techniques</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li><strong>trim():</strong> Removes extra spaces from the beginning and end.</li>
          <li><strong>Normalize:</strong> Converts data into a consistent format.</li>
          <li><strong>HTML Encoding:</strong> Displays HTML special characters as text instead of executing them.</li>
          <li><strong>Allowlist:</strong> Accepts only expected characters or values.</li>
          <li><strong>Type Checking:</strong> Ensures input has the expected data type.</li>
        </ul>
      </section>

      {/* 4. Express Example */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Input Sanitization in Express</h2>
        <p className="text-[var(--text-secondary)]">
          We can use libraries like <code>express-validator</code> to validate
          and sanitize incoming request data.
        </p>

        <CodeBlock
          code={`npm install express-validator`}
        />

        <CodeBlock
          code={`import express from "express";
import { body, validationResult } from "express-validator";

const app = express();

app.use(express.json());

app.post(
  "/register",
  [
    body("name")
      .trim()
      .notEmpty()
      .withMessage("Name is required"),

    body("email")
      .trim()
      .isEmail()
      .withMessage("Invalid email")
      .normalizeEmail(),
  ],
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    res.json({
      message: "Input is valid",
      data: req.body,
    });
  }
);`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Here, <code>trim()</code> removes extra spaces and
          <code> normalizeEmail()</code> normalizes the email address.
          Validation checks whether the input is acceptable.
        </p>
      </section>

      {/* 5. Important Security Practices */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Security Practices</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>Never trust user input.</li>
          <li>Validate data on the backend.</li>
          <li>Sanitize data according to where it will be used.</li>
          <li>Use parameterized queries to prevent SQL injection.</li>
          <li>Use context-aware output encoding to prevent XSS.</li>
          <li>Limit input length and accepted data types.</li>
        </ul>
      </section>

      {/* 6. Interview Questions */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Interview Questions</h2>

        {[
          {
            q: "What is Input Sanitization?",
            a: "It is the process of cleaning or transforming user input to make it safe for a particular use.",
          },
          {
            q: "What is the difference between validation and sanitization?",
            a: "Validation checks whether data is acceptable, while sanitization cleans or transforms the data.",
          },
          {
            q: "Why should we never trust user input?",
            a: "Because users can send unexpected or malicious data that may exploit application vulnerabilities.",
          },
          {
            q: "Can sanitization alone prevent XSS?",
            a: "No. Proper context-aware output encoding and safe rendering are also necessary.",
          },
          {
            q: "Which library can help with validation and sanitization in Express?",
            a: "express-validator provides validation and sanitization methods for request data.",
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

export default InputSanitization;