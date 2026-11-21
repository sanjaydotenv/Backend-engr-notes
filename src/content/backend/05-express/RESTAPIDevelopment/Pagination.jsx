import CodeBlock from "../../../../components/common/CodeBlock";

const Pagination = () => {
  const questions = [
    {
      question: "What is API Pagination?",
      answer:
        "Pagination divides a large collection of records into smaller pages and returns only one page at a time.",
    },
    {
      question: "Why is Pagination important?",
      answer:
        "It reduces unnecessary data transfer, improves response times, and helps manage large datasets.",
    },
    {
      question: "What is the purpose of limit()?",
      answer:
        "limit() specifies the maximum number of documents returned by a database query.",
    },
    {
      question: "What is the purpose of skip()?",
      answer:
        "skip() skips a specified number of documents before returning the remaining results.",
    },
    {
      question: "How do we calculate skip?",
      answer:
        "skip = (page - 1) * limit. For example, page 3 with a limit of 10 skips the first 20 documents.",
    },
    {
      question: "What is totalPages?",
      answer:
        "totalPages represents the total number of pages and is calculated using Math.ceil(totalRecords / limit).",
    },
    {
      question: "What is Offset Pagination?",
      answer:
        "Offset pagination uses skip() and limit() to retrieve records from a particular position.",
    },
    {
      question: "What is Cursor Pagination?",
      answer:
        "Cursor pagination uses a reference value from the previous result to fetch the next set of records.",
    },
  ];

  return (
    <div className="w-full space-y-8 text-[var(--text-primary)]">

      {/* HEADER */}
      <div className="space-y-3">
        <p className="text-sm font-semibold tracking-widest text-[var(--accent-color)]">
          EXPRESS.JS / REST API DEVELOPMENT / 09
        </p>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          API Pagination
        </h1>

        <p className="text-base leading-7 text-[var(--text-secondary)]">
          Pagination is the process of dividing a large collection of
          records into smaller pages. Instead of returning thousands of
          records at once, an API returns a limited number of records
          for each request.
        </p>
      </div>

      {/* SECTION 1 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          1. Why Do We Need Pagination?
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Imagine an application has 10,000 products. Returning all
          products in one API response can increase response size,
          memory usage, and loading time.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          Pagination solves this problem by returning a smaller group
          of records at a time.
        </p>

        <CodeBlock
          code={`// First page
GET /api/products?page=1&limit=10

// Second page
GET /api/products?page=2&limit=10

// Third page
GET /api/products?page=3&limit=10`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <h3 className="mb-3 font-semibold">Example</h3>

          <div className="grid grid-cols-3 gap-2 text-center text-sm">
            {["Page 1", "Page 2", "Page 3"].map((page, index) => (
              <div
                key={page}
                className="rounded-lg border border-[var(--border-color)] p-3"
              >
                <p className="font-semibold text-[var(--accent-color)]">
                  {page}
                </p>
                <p className="mt-1 text-xs text-[var(--text-secondary)]">
                  Items {index * 10 + 1}–{index * 10 + 10}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          2. Understanding Page, Limit and Skip
        </h2>

        <div className="space-y-3">
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
            <h3 className="font-semibold text-[var(--accent-color)]">
              page
            </h3>
            <p className="mt-1 text-sm leading-7 text-[var(--text-secondary)]">
              Defines which page the client wants to retrieve.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
            <h3 className="font-semibold text-[var(--accent-color)]">
              limit
            </h3>
            <p className="mt-1 text-sm leading-7 text-[var(--text-secondary)]">
              Defines how many records should be returned per page.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
            <h3 className="font-semibold text-[var(--accent-color)]">
              skip
            </h3>
            <p className="mt-1 text-sm leading-7 text-[var(--text-secondary)]">
              Defines how many records should be skipped before fetching
              the requested page.
            </p>
          </div>
        </div>

        <h3 className="font-semibold">Skip Formula</h3>

        <CodeBlock
          code={`skip = (page - 1) * limit

// Example:
page = 3
limit = 10

skip = (3 - 1) * 10
skip = 20`}
        />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          Page 3 starts after skipping the first 20 records.
        </p>
      </section>

      {/* SECTION 3 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          3. Pagination Using MongoDB
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Mongoose provides <code>skip()</code> and <code>limit()</code>
          methods to implement offset-based pagination.
        </p>

        <CodeBlock
          code={`const page = 2;
const limit = 10;

const skip = (page - 1) * limit;

const products = await Product.find()
  .sort({ _id: 1 })
  .skip(skip)
  .limit(limit);`}
        />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          This query skips the first 10 products and returns the next
          10 products. Sorting provides a consistent order for pagination.
        </p>
      </section>

      {/* SECTION 4 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          4. Getting Total Records and Total Pages
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The frontend often needs to know how many records and pages
          are available to display pagination controls.
        </p>

        <CodeBlock
          code={`const totalRecords = await Product.countDocuments();

const totalPages = Math.ceil(totalRecords / limit);

console.log({
  totalRecords,
  totalPages,
});`}
        />

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[350px] text-left text-sm">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="px-4 py-3">Value</th>
                <th className="px-4 py-3">Example</th>
              </tr>
            </thead>

            <tbody>
              {[
                ["Total Records", "95"],
                ["Limit", "10"],
                ["Total Pages", "10"],
                ["Current Page", "2"],
              ].map((row) => (
                <tr key={row[0]} className="border-t border-[var(--border-color)]">
                  <td className="px-4 py-3 text-[var(--text-secondary)]">
                    {row[0]}
                  </td>
                  <td className="px-4 py-3 text-[var(--text-secondary)]">
                    {row[1]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 5 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          5. Complete Pagination API
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Let's create a complete pagination endpoint with page validation,
          a maximum limit, total records, and pagination metadata.
        </p>

        <CodeBlock
          code={`export const getProducts = async (req, res) => {
  try {
    const page = Number(req.query.page ?? 1);
    const limit = Number(req.query.limit ?? 10);

    // Validate pagination values
    if (
      !Number.isSafeInteger(page) ||
      !Number.isSafeInteger(limit) ||
      page < 1 ||
      limit < 1 ||
      limit > 100
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid pagination parameters",
      });
    }

    const skip = (page - 1) * limit;

    if (!Number.isSafeInteger(skip)) {
      return res.status(400).json({
        success: false,
        message: "Page value is too large",
      });
    }

    // Fetch records and total count
    const [products, totalRecords] = await Promise.all([
      Product.find()
        .sort({ _id: 1 })
        .skip(skip)
        .limit(limit),

      Product.countDocuments(),
    ]);

    const totalPages = Math.ceil(totalRecords / limit);

    return res.status(200).json({
      success: true,
      data: products,
      pagination: {
        currentPage: page,
        limit,
        totalRecords,
        totalPages,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1 && totalPages > 0,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch products",
    });
  }
};`}
        />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          <code>Promise.all()</code> executes the data query and count
          query concurrently. Both queries should use the same filters
          when implementing filtered pagination.
        </p>
      </section>

      {/* SECTION 6 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          6. Offset Pagination vs Cursor Pagination
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          There are two common pagination approaches. The right choice
          depends on the size of the dataset and the application.
        </p>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[450px] text-left text-sm">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="px-4 py-3">Offset Pagination</th>
                <th className="px-4 py-3">Cursor Pagination</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-t border-[var(--border-color)]">
                <td className="px-4 py-3 text-[var(--text-secondary)]">
                  Uses skip() and limit().
                </td>
                <td className="px-4 py-3 text-[var(--text-secondary)]">
                  Uses a cursor or reference value.
                </td>
              </tr>

              <tr className="border-t border-[var(--border-color)]">
                <td className="px-4 py-3 text-[var(--text-secondary)]">
                  Supports direct page navigation.
                </td>
                <td className="px-4 py-3 text-[var(--text-secondary)]">
                  Usually supports next/previous navigation.
                </td>
              </tr>

              <tr className="border-t border-[var(--border-color)]">
                <td className="px-4 py-3 text-[var(--text-secondary)]">
                  Large skips can become expensive.
                </td>
                <td className="px-4 py-3 text-[var(--text-secondary)]">
                  Efficient for large datasets with indexed cursors.
                </td>
              </tr>

              <tr className="border-t border-[var(--border-color)]">
                <td className="px-4 py-3 text-[var(--text-secondary)]">
                  Useful for ordinary listing pages.
                </td>
                <td className="px-4 py-3 text-[var(--text-secondary)]">
                  Useful for feeds and continuously growing data.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="font-semibold">Cursor Pagination Example</h3>

        <CodeBlock
          code={`// Fetch records after the last received ID

const products = await Product.find({
  _id: { $gt: lastId },
})
  .sort({ _id: 1 })
  .limit(10);`}
        />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          Here, <code>lastId</code> is the ID of the last product from
          the previous response. In production, validate the cursor and
          use a stable, indexed sort key. Compound cursors may be needed
          when sorting by non-unique fields.
        </p>
      </section>

      {/* SECTION 7 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          7. Best Practices
        </h2>

        <ul className="list-disc space-y-2 pl-5 leading-7 text-[var(--text-secondary)]">
          <li>Always set a default page and limit.</li>
          <li>Validate page and limit values.</li>
          <li>Set a maximum limit to prevent huge responses.</li>
          <li>Use consistent sorting for predictable results.</li>
          <li>Apply the same filters to data and count queries.</li>
          <li>Use indexes for frequently queried sort fields.</li>
          <li>Consider cursor pagination for large datasets.</li>
          <li>Return useful pagination metadata to the client.</li>
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

export default Pagination;