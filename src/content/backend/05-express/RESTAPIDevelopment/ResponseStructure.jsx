import CodeBlock from "../../../../components/common/CodeBlock";

const ResponseStructure = () => {
  const questions = [
    {
      question: "What is API Response Structure?",
      answer:
        "It is a consistent format used by an API to send data, messages, status, and errors to clients.",
    },
    {
      question: "Why should API responses be consistent?",
      answer:
        "Consistency makes APIs easier to understand, maintain, debug, and integrate with frontend applications.",
    },
    {
      question: "What is the difference between status and message?",
      answer:
        "Status indicates whether the operation succeeded or failed. Message provides a human-readable explanation.",
    },
    {
      question: "What is the purpose of the data field?",
      answer:
        "The data field contains the actual resource or result returned by the API.",
    },
    {
      question: "What is metadata in an API response?",
      answer:
        "Metadata contains additional information such as pagination details, total records, or current page.",
    },
    {
      question: "Should API responses contain sensitive information?",
      answer:
        "No. Never expose passwords, access tokens, private keys, or other sensitive information in API responses.",
    },
    {
      question: "Can HTTP status codes replace response messages?",
      answer:
        "No. HTTP status codes communicate the result at the protocol level, while response messages provide additional context.",
    },
  ];

  return (
    <div className="w-full space-y-8 text-[var(--text-primary)]">

      {/* HEADER */}
      <div className="space-y-3">
        <p className="text-sm font-semibold tracking-widest text-[var(--accent-color)]">
          EXPRESS.JS / REST API DEVELOPMENT / 05
        </p>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          API Response Structure
        </h1>

        <p className="text-base leading-7 text-[var(--text-secondary)]">
          API Response Structure defines how a server sends results back to
          clients. A consistent response format makes APIs predictable and
          easier to work with.
        </p>
      </div>

      {/* SECTION 1 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          1. Why Response Structure Matters
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Imagine an API returns different response formats for every
          endpoint. The frontend would need different logic to handle each
          response.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          A standard structure solves this problem by keeping responses
          consistent across the application.
        </p>

        <CodeBlock
          code={`// Inconsistent responses

{ "user": { "name": "Mayur" } }

{ "success": false, "error": "User not found" }

{ "message": "Product created" }

// Consistent responses

{
  "success": true,
  "message": "User fetched successfully",
  "data": {
    "name": "Mayur"
  }
}`}
        />
      </section>

      {/* SECTION 2 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          2. Standard Success Response
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          A success response is returned when the requested operation
          completes successfully.
        </p>

        <CodeBlock
          code={`{
  "success": true,
  "message": "User fetched successfully",
  "data": {
    "_id": "123",
    "name": "Mayur",
    "email": "mayur@example.com"
  }
}`}
        />

        <div className="space-y-2">
          <h3 className="font-semibold">Common Fields</h3>

          <ul className="list-disc space-y-2 pl-5 leading-7 text-[var(--text-secondary)]">
            <li><strong className="text-[var(--text-primary)]">success:</strong> Indicates whether the operation succeeded.</li>
            <li><strong className="text-[var(--text-primary)]">message:</strong> Describes the result.</li>
            <li><strong className="text-[var(--text-primary)]">data:</strong> Contains the returned resource or result.</li>
          </ul>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          3. Standard Error Response
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          An error response is returned when the server cannot complete
          the requested operation.
        </p>

        <CodeBlock
          code={`{
  "success": false,
  "message": "User not found",
  "error": {
    "code": "USER_NOT_FOUND"
  }
}`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          The error code helps frontend applications identify specific
          errors without depending on message text.
        </p>
      </section>

      {/* SECTION 4 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          4. HTTP Status Codes
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          HTTP status codes communicate the result of an HTTP request.
          They should match the actual operation result.
        </p>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[450px] text-left text-sm">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="px-4 py-3">Code</th>
                <th className="px-4 py-3">Meaning</th>
                <th className="px-4 py-3">Example</th>
              </tr>
            </thead>

            <tbody>
              {[
                ["200", "OK", "Data fetched"],
                ["201", "Created", "User created"],
                ["204", "No Content", "Resource deleted"],
                ["400", "Bad Request", "Invalid input"],
                ["401", "Unauthorized", "Authentication required"],
                ["403", "Forbidden", "Permission denied"],
                ["404", "Not Found", "User not found"],
                ["409", "Conflict", "Email already exists"],
                ["500", "Internal Server Error", "Unexpected server error"],
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

        <p className="text-sm leading-7 text-[var(--text-muted)]">
          Note: A 204 response must not contain a response body.
        </p>
      </section>

      {/* SECTION 5 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          5. Pagination Response Structure
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          When an API returns paginated data, metadata helps the client
          understand the current page and total available records.
        </p>

        <CodeBlock
          code={`{
  "success": true,
  "message": "Users fetched successfully",
  "data": [
    {
      "_id": "101",
      "name": "Mayur"
    },
    {
      "_id": "102",
      "name": "Rahul"
    }
  ],
  "pagination": {
    "currentPage": 1,
    "limit": 10,
    "totalRecords": 50,
    "totalPages": 5
  }
}`}
        />
      </section>

      {/* SECTION 6 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          6. Creating a Reusable Response Utility
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Instead of writing the same response structure in every
          controller, we can create reusable utility functions.
        </p>

        <CodeBlock
          code={`// utils/apiResponse.js

export const sendSuccess = (
  res,
  message,
  data = {},
  statusCode = 200
) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

export const sendError = (
  res,
  message,
  statusCode = 500,
  code = "INTERNAL_SERVER_ERROR"
) => {
  return res.status(statusCode).json({
    success: false,
    message,
    error: {
      code,
    },
  });
};`}
        />

        <h3 className="font-semibold">Using the Utility</h3>

        <CodeBlock
          code={`import { sendSuccess, sendError } from "../utils/apiResponse.js";

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return sendError(
        res,
        "User not found",
        404,
        "USER_NOT_FOUND"
      );
    }

    return sendSuccess(
      res,
      "User fetched successfully",
      user
    );
  } catch (error) {
    return sendError(
      res,
      "Something went wrong",
      500
    );
  }
};`}
        />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          In production, avoid returning raw database documents if they
          contain sensitive fields. Return only the data the client needs.
        </p>
      </section>

      {/* SECTION 7 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          7. Best Practices
        </h2>

        <ul className="list-disc space-y-2 pl-5 leading-7 text-[var(--text-secondary)]">
          <li>Keep response formats consistent across endpoints.</li>
          <li>Use appropriate HTTP status codes.</li>
          <li>Return clear and meaningful messages.</li>
          <li>Use stable error codes for frontend handling.</li>
          <li>Return only required data.</li>
          <li>Never expose stack traces or internal server details.</li>
          <li>Include pagination metadata when returning paginated data.</li>
          <li>Do not send a JSON body with HTTP 204 responses.</li>
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

export default ResponseStructure;