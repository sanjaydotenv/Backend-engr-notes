import CodeBlock from "../../../../components/common/CodeBlock";

const RESTAPIDesign = () => {
  const questions = [
    {
      question: "What is REST API Design?",
      answer:
        "REST API Design is the process of creating APIs using REST principles, standard HTTP methods, and resource-based URLs.",
    },
    {
      question: "What is a Resource in REST?",
      answer:
        "A resource is any data or entity exposed through an API, such as users, products, or orders.",
    },
    {
      question: "Why should we use nouns in API endpoints?",
      answer:
        "Nouns represent resources, while HTTP methods describe the operations performed on them.",
    },
    {
      question: "What is the difference between PUT and PATCH?",
      answer:
        "PUT generally replaces a complete resource, whereas PATCH updates specific fields.",
    },
    {
      question: "What is a Stateless API?",
      answer:
        "A stateless API does not store client session state between requests. Each request contains the information needed to process it.",
    },
    {
      question: "Why is API versioning important?",
      answer:
        "Versioning allows developers to introduce changes without breaking existing API clients.",
    },
    {
      question: "What is the purpose of HTTP status codes?",
      answer:
        "Status codes tell the client whether a request succeeded, failed, or requires further action.",
    },
    {
      question: "Why should APIs use consistent response structures?",
      answer:
        "Consistent responses make APIs easier to understand, maintain, and consume.",
    },
  ];

  return (
    <div className="w-full space-y-8 text-[var(--text-primary)]">

      {/* HEADER */}
      <div className="space-y-3">
        <p className="text-sm font-semibold tracking-widest text-[var(--accent-color)]">
          EXPRESS.JS / REST API DEVELOPMENT / 02
        </p>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          REST API Design
        </h1>

        <p className="text-base leading-7 text-[var(--text-secondary)]">
          REST API Design is the process of creating APIs using REST
          principles, standard HTTP methods, and resource-based URLs.
          A well-designed API is predictable, consistent, and easy to use.
        </p>
      </div>

      {/* SECTION 1 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          1. Use Resource-Based URLs
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Use nouns to represent resources instead of verbs. HTTP methods
          describe what operation should be performed.
        </p>

        <CodeBlock
          code={`// Bad API Design
GET    /getUsers
POST   /createUser
DELETE /deleteUser/10

// Good API Design
GET    /users
POST   /users
GET    /users/10
DELETE /users/10`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Use plural nouns like <code>/users</code>, <code>/products</code>,
          and <code>/orders</code> for resource collections.
        </p>
      </section>

      {/* SECTION 2 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          2. Use Correct HTTP Methods
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Every HTTP method should represent the correct operation.
        </p>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[450px] text-left text-sm">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="px-4 py-3">Method</th>
                <th className="px-4 py-3">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["GET", "Retrieve resources"],
                ["POST", "Create resources"],
                ["PUT", "Replace a resource"],
                ["PATCH", "Partially update a resource"],
                ["DELETE", "Delete a resource"],
              ].map(([method, purpose]) => (
                <tr key={method} className="border-t border-[var(--border-color)]">
                  <td className="px-4 py-3 font-semibold text-[var(--accent-color)]">
                    {method}
                  </td>
                  <td className="px-4 py-3 text-[var(--text-secondary)]">
                    {purpose}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          3. Use Proper HTTP Status Codes
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Always return meaningful HTTP status codes according to the
          request result.
        </p>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[450px] text-left text-sm">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Meaning</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["200", "OK - Request successful"],
                ["201", "Created - Resource created"],
                ["204", "No Content - Successful request without response body"],
                ["400", "Bad Request"],
                ["401", "Unauthorized"],
                ["403", "Forbidden"],
                ["404", "Not Found"],
                ["500", "Internal Server Error"],
              ].map(([code, meaning]) => (
                <tr key={code} className="border-t border-[var(--border-color)]">
                  <td className="px-4 py-3 font-semibold text-[var(--accent-color)]">
                    {code}
                  </td>
                  <td className="px-4 py-3 text-[var(--text-secondary)]">
                    {meaning}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          4. Maintain Consistent Response Structure
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Keep API responses consistent so clients can easily understand
          the returned data.
        </p>

        <CodeBlock
          code={`// Successful Response

{
  "success": true,
  "message": "User fetched successfully",
  "data": {
    "id": "101",
    "name": "Mayur"
  }
}

// Error Response

{
  "success": false,
  "message": "User not found",
  "data": null
}`}
        />
      </section>

      {/* SECTION 5 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          5. Use Query Parameters
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Use query parameters for filtering, sorting, searching, and
          pagination.
        </p>

        <CodeBlock
          code={`// Filtering
GET /api/products?category=mobile

// Searching
GET /api/products?search=iphone

// Sorting
GET /api/products?sort=price

// Pagination
GET /api/products?page=1&limit=10`}
        />
      </section>

      {/* SECTION 6 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          6. Use Nested Resources Carefully
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Nested resources represent relationships between resources.
          Keep nesting simple and avoid unnecessarily deep URLs.
        </p>

        <CodeBlock
          code={`// Get orders of a user
GET /api/users/101/orders

// Get a specific order of a user
GET /api/users/101/orders/501`}
        />
      </section>

      {/* SECTION 7 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          7. REST API Design Best Practices
        </h2>

        <ul className="list-disc space-y-2 pl-5 leading-7 text-[var(--text-secondary)]">
          <li>Use resource-based URLs with nouns.</li>
          <li>Use appropriate HTTP methods and status codes.</li>
          <li>Keep response structures consistent.</li>
          <li>Use pagination for large collections.</li>
          <li>Validate incoming request data.</li>
          <li>Protect sensitive endpoints with authentication and authorization.</li>
          <li>Version APIs when introducing breaking changes.</li>
          <li>Use HTTPS for secure communication.</li>
          <li>Document your API endpoints.</li>
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

export default RESTAPIDesign;