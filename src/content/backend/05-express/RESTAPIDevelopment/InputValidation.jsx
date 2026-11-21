import CodeBlock from "../../../../components/common/CodeBlock";

const InputValidation = () => {
  const questions = [
    {
      question: "What is Input Validation?",
      answer:
        "Input Validation checks whether user-provided data follows the expected rules before an application processes it.",
    },
    {
      question: "Why is Input Validation important?",
      answer:
        "It prevents invalid data, reduces errors, and protects applications from unexpected input.",
    },
    {
      question: "What is Type Validation?",
      answer:
        "Type Validation checks whether a value has the expected data type, such as string, number, or boolean.",
    },
    {
      question: "What is Range Validation?",
      answer:
        "Range Validation ensures that a numeric value falls within an allowed minimum and maximum range.",
    },
    {
      question: "What is Length Validation?",
      answer:
        "Length Validation checks whether a string contains an allowed number of characters.",
    },
    {
      question: "What is Sanitization?",
      answer:
        "Sanitization cleans or transforms input data, such as removing extra spaces or normalizing email addresses.",
    },
    {
      question: "Is Input Validation enough to prevent SQL Injection?",
      answer:
        "No. Use parameterized queries or safe database operations along with proper validation.",
    },
    {
      question: "Should passwords be sanitized?",
      answer:
        "Passwords should generally not be trimmed or normalized because changing them can alter the user's intended password.",
    },
  ];

  return (
    <div className="w-full space-y-8 text-[var(--text-primary)]">

      {/* HEADER */}
      <div className="space-y-3">
        <p className="text-sm font-semibold tracking-widest text-[var(--accent-color)]">
          EXPRESS.JS / REST API DEVELOPMENT / 04
        </p>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Input Validation in Backend Development
        </h1>

        <p className="text-base leading-7 text-[var(--text-secondary)]">
          Input Validation is the process of checking user-provided data
          against predefined rules before processing or storing it.
          It ensures that the application receives expected and valid input.
        </p>
      </div>

      {/* SECTION 1 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          1. Types of Input Validation
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Different validation rules are used depending on the type of input.
        </p>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="px-4 py-3">Validation</th>
                <th className="px-4 py-3">Purpose</th>
                <th className="px-4 py-3">Example</th>
              </tr>
            </thead>

            <tbody>
              {[
                ["Required", "Checks empty values", "Name is required"],
                ["Type", "Checks data type", "Age must be a number"],
                ["Length", "Checks string length", "Password min 8 characters"],
                ["Format", "Checks input format", "Valid email"],
                ["Range", "Checks numeric limits", "Age between 1–100"],
                ["Enum", "Checks allowed values", "Role: user or admin"],
              ].map((row) => (
                <tr key={row[0]} className="border-t border-[var(--border-color)]">
                  {row.map((value) => (
                    <td key={value} className="px-4 py-3 text-[var(--text-secondary)]">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          2. Common Input Validation Rules
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Let's understand some common validation rules using express-validator.
        </p>

        <CodeBlock
          code={`import { body } from "express-validator";

export const validateUser = [
  // Required field
  body("name")
    .notEmpty()
    .withMessage("Name is required"),

  // Email validation
  body("email")
    .isEmail()
    .withMessage("Invalid email"),

  // Minimum and maximum length
  body("password")
    .isLength({ min: 8, max: 20 })
    .withMessage("Password must be 8-20 characters"),

  // Numeric range
  body("age")
    .isInt({ min: 18, max: 100 })
    .withMessage("Age must be between 18 and 100"),

  // Allowed values
  body("role")
    .isIn(["user", "admin"])
    .withMessage("Invalid role"),
];`}
        />
      </section>

      {/* SECTION 3 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          3. Type Validation
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Type Validation ensures that input values have the expected
          data types. For example, age should be a number instead of a string.
        </p>

        <CodeBlock
          code={`// JavaScript type validation

if (typeof req.body.name !== "string") {
  return res.status(400).json({
    message: "Name must be a string",
  });
}

if (typeof req.body.age !== "number") {
  return res.status(400).json({
    message: "Age must be a number",
  });
}`}
        />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          Note: JSON numeric values and string values are different.
          For example, <code>25</code> is a number, while <code>"25"</code> is a string.
        </p>
      </section>

      {/* SECTION 4 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          4. Input Sanitization
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Sanitization cleans or transforms input data before using it.
          It is different from validation.
        </p>

        <CodeBlock
          code={`import { body } from "express-validator";

export const validateEmail = [
  body("email")
    .trim()
    .normalizeEmail()
    .isEmail()
    .withMessage("Invalid email address"),
];`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <h3 className="mb-2 font-semibold">Example</h3>

          <CodeBlock
            code={`// Before sanitization
"  MAYUR@GMAIL.COM  "

// After trim() and normalizeEmail()
"mayur@gmail.com"`}
          />
        </div>

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          Always be careful when transforming passwords or other
          sensitive input. Do not modify them unexpectedly.
        </p>
      </section>

      {/* SECTION 5 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          5. Validation vs Sanitization
        </h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[400px] text-left text-sm">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="px-4 py-3">Validation</th>
                <th className="px-4 py-3">Sanitization</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-t border-[var(--border-color)]">
                <td className="px-4 py-3 text-[var(--text-secondary)]">
                  Checks input correctness.
                </td>
                <td className="px-4 py-3 text-[var(--text-secondary)]">
                  Cleans or transforms input.
                </td>
              </tr>

              <tr className="border-t border-[var(--border-color)]">
                <td className="px-4 py-3 text-[var(--text-secondary)]">
                  isEmail()
                </td>
                <td className="px-4 py-3 text-[var(--text-secondary)]">
                  trim()
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 6 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          6. Best Practices
        </h2>

        <ul className="list-disc space-y-2 pl-5 leading-7 text-[var(--text-secondary)]">
          <li>Validate all user-provided input on the backend.</li>
          <li>Check required fields and expected data types.</li>
          <li>Apply length, range, and format restrictions.</li>
          <li>Use allowlists for fields with fixed values.</li>
          <li>Sanitize input where appropriate.</li>
          <li>Never trust frontend validation alone.</li>
          <li>Reject unexpected fields when necessary.</li>
          <li>Use parameterized database queries to prevent injection attacks.</li>
        </ul>
      </section>

      {/* INTERVIEW QUESTIONS */}
      <section className="space-y-5 border-t border-[var(--border-color)] pt-7">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">
            Interview Questions
          </h2>

          <p className="text-sm text-[var(--text-muted)]">
            Click any question to reveal its short answer.
          </p>
        </div>

        <div className="space-y-3">
          {questions.map((item, index) => (
            <details
              key={item.question}
              className="group overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 font-medium transition-colors hover:bg-[var(--bg-hover)]">
                <span className="text-sm sm:text-base">
                  {index + 1}. {item.question}
                </span>

                <span className="shrink-0 text-lg text-[var(--accent-color)] transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>

              <div className="border-t border-[var(--border-color)] px-4 py-4 text-sm leading-7 text-[var(--text-secondary)]">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </section>

    </div>
  );
};

export default InputValidation;