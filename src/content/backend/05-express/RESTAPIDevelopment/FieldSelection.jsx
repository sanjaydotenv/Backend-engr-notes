import CodeBlock from "../../../../components/common/CodeBlock";

const FieldSelection = () => {
  const questions = [
    {
      question: "What is Field Selection?",
      answer:
        "Field Selection allows an API to return only specific fields from database documents instead of returning every field.",
    },
    {
      question: "Why is Field Selection important?",
      answer:
        "It reduces unnecessary data transfer, improves response efficiency, and helps prevent sensitive information from being exposed.",
    },
    {
      question: "What is Projection in MongoDB?",
      answer:
        "Projection defines which fields should be included or excluded in query results.",
    },
    {
      question: "How do we include fields in Mongoose?",
      answer:
        "We can use select('name email') or select({ name: 1, email: 1 }) to include specific fields.",
    },
    {
      question: "How do we exclude fields in Mongoose?",
      answer:
        "We can use select('-password') or select({ password: 0 }) to exclude specific fields.",
    },
    {
      question: "Can we use inclusion and exclusion together?",
      answer:
        "Generally, MongoDB does not allow mixing inclusion and exclusion projections, except for excluding the _id field.",
    },
    {
      question: "Why should passwords be excluded from API responses?",
      answer:
        "Passwords and password hashes are sensitive information and should never be exposed to clients.",
    },
  ];

  return (
    <div className="w-full space-y-8 text-[var(--text-primary)]">

      {/* HEADER */}
      <div className="space-y-3">
        <p className="text-sm font-semibold tracking-widest text-[var(--accent-color)]">
          EXPRESS.JS / REST API DEVELOPMENT / 10
        </p>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          API Field Selection
        </h1>

        <p className="text-base leading-7 text-[var(--text-secondary)]">
          Field Selection is the process of choosing specific database
          fields that should be returned in an API response. It helps
          avoid sending unnecessary or sensitive information.
        </p>
      </div>

      {/* SECTION 1 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          1. Why Do We Need Field Selection?
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Imagine a user document contains name, email, password,
          address, and other information. A profile API may only need
          to return the name and email.
        </p>

        <CodeBlock
          code={`// Without Field Selection

{
  "_id": "123",
  "name": "Mayur",
  "email": "mayur@example.com",
  "password": "hashed_password",
  "address": "Bhopal"
}

// With Field Selection

{
  "_id": "123",
  "name": "Mayur",
  "email": "mayur@example.com"
}`}
        />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          The second response contains only the required fields.
          Sensitive information should never be exposed unnecessarily.
        </p>
      </section>

      {/* SECTION 2 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          2. Field Selection Using Mongoose select()
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Mongoose provides the <code>select()</code> method to control
          which fields are returned from a database query.
        </p>

        <CodeBlock
          code={`// Select specific fields

const users = await User.find()
  .select("name email age");

// Result contains:
// _id, name, email, age`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          By default, MongoDB includes the <code>_id</code> field even
          when we select other fields.
        </p>
      </section>

      {/* SECTION 3 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          3. Inclusion and Exclusion
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB supports two common projection approaches.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
            <h3 className="mb-2 font-semibold text-[var(--accent-color)]">
              Inclusion (1)
            </h3>

            <p className="mb-3 text-sm text-[var(--text-secondary)]">
              Returns only the selected fields.
            </p>

            <CodeBlock
              code={`User.find().select({
  name: 1,
  email: 1,
});`}
            />
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
            <h3 className="mb-2 font-semibold text-[var(--accent-color)]">
              Exclusion (0)
            </h3>

            <p className="mb-3 text-sm text-[var(--text-secondary)]">
              Returns all fields except the excluded fields.
            </p>

            <CodeBlock
              code={`User.find().select({
  password: 0,
  __v: 0,
});`}
            />
          </div>
        </div>

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          Important: Inclusion and exclusion cannot normally be mixed
          in the same projection. The exception is excluding
          <code> _id</code> from an inclusion projection.
        </p>
      </section>

      {/* SECTION 4 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          4. Excluding Sensitive Fields
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Some database fields should never be sent to the client,
          such as password hashes or internal security information.
        </p>

        <CodeBlock
          code={`// Exclude sensitive fields

const users = await User.find()
  .select("-password -refreshToken -__v");`}
        />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          This excludes the specified fields from the query results.
          For sensitive data, explicitly selecting safe fields is
          generally a better approach.
        </p>
      </section>

      {/* SECTION 5 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          5. Dynamic Field Selection Using Query Parameters
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Sometimes clients need different fields depending on their
          requirements. We can allow clients to request specific
          fields through query parameters.
        </p>

        <CodeBlock
          code={`// Request

GET /api/users?fields=name,email

// Controller

export const getUsers = async (req, res) => {
  try {
    const allowedFields = [
      "name",
      "email",
      "age",
      "role",
    ];

    const requestedFields = req.query.fields
      ? req.query.fields.split(",")
      : ["name", "email"];

    // Validate requested fields
    const isValid = requestedFields.every((field) =>
      allowedFields.includes(field)
    );

    if (!isValid) {
      return res.status(400).json({
        success: false,
        message: "Invalid field selection",
      });
    }

    // Build projection
    const projection = requestedFields.join(" ");

    const users = await User.find()
      .select(projection);

    return res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch users",
    });
  }
};`}
        />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          Whitelisting ensures that clients can request only approved
          fields. Never allow arbitrary database field selection.
        </p>
      </section>

      {/* SECTION 6 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          6. Field Selection with Pagination
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          We can combine field selection with pagination to return
          only the required fields from a limited number of records.
        </p>

        <CodeBlock
          code={`const users = await User.find()
  .select("name email role")
  .sort({ _id: 1 })
  .skip(0)
  .limit(10);`}
        />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          This query returns only name, email, and role for the first
          10 users.
        </p>
      </section>

      {/* SECTION 7 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          7. Best Practices
        </h2>

        <ul className="list-disc space-y-2 pl-5 leading-7 text-[var(--text-secondary)]">
          <li>Return only the fields required by the client.</li>
          <li>Never expose passwords, tokens, or private information.</li>
          <li>Use Mongoose select() for database-level projection.</li>
          <li>Whitelist fields when implementing dynamic selection.</li>
          <li>Prefer explicitly selecting safe fields for sensitive models.</li>
          <li>Combine field selection with filtering and pagination.</li>
          <li>Use response DTOs or serializers when API output needs a separate structure.</li>
        </ul>
      </section>

      {/* INTERVIEW QUESTIONS */}
      <section className="space-y-5 border-t border-[var(--border-color)] pt-7">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">
            Interview Questions
          </h2>

          <p className="text-sm text-[var(--text-muted)]">
            Click any question to reveal its answer.
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

export default FieldSelection;