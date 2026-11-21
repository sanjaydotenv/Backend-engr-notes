import CodeBlock from "../../../../components/common/CodeBlock";

const Filtering = () => {
  const questions = [
    {
      question: "What is API Filtering?",
      answer:
        "Filtering is the process of returning only those records that match specific conditions provided by the client.",
    },
    {
      question: "How do we pass filters in a REST API?",
      answer:
        "Filters are commonly passed through URL query parameters, such as /products?category=electronics.",
    },
    {
      question: "What is the difference between Filtering and Searching?",
      answer:
        "Filtering selects records based on specific conditions, while searching finds records matching a search term.",
    },
    {
      question: "What are comparison operators in MongoDB?",
      answer:
        "They are operators like $gt, $gte, $lt, $lte, and $ne used to compare field values.",
    },
    {
      question: "What is the purpose of $in?",
      answer:
        "$in matches documents where a field contains any value from a specified list.",
    },
    {
      question: "Why should we whitelist filter fields?",
      answer:
        "Whitelisting prevents clients from filtering by unexpected or sensitive database fields.",
    },
    {
      question: "Can multiple filters be applied together?",
      answer:
        "Yes. Multiple filter conditions can be combined to return records matching all specified conditions.",
    },
  ];

  return (
    <div className="w-full space-y-8 text-[var(--text-primary)]">

      {/* HEADER */}
      <div className="space-y-3">
        <p className="text-sm font-semibold tracking-widest text-[var(--accent-color)]">
          EXPRESS.JS / REST API DEVELOPMENT / 06
        </p>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          API Filtering
        </h1>

        <p className="text-base leading-7 text-[var(--text-secondary)]">
          Filtering allows clients to retrieve specific records from a
          collection based on conditions such as category, price, status,
          or availability.
        </p>
      </div>

      {/* SECTION 1 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          1. Why Do We Need Filtering?
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Imagine an application has thousands of products. A client may
          want only products belonging to a particular category or products
          within a specific price range.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          Instead of returning every product, filtering returns only
          matching records.
        </p>

        <CodeBlock
          code={`// Get all products
GET /api/products

// Filter by category
GET /api/products?category=electronics

// Filter by price
GET /api/products?price=500

// Multiple filters
GET /api/products?category=electronics&inStock=true`}
        />
      </section>

      {/* SECTION 2 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          2. Reading Query Parameters in Express
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Express provides <code>req.query</code> to access query parameters
          sent through the URL.
        </p>

        <CodeBlock
          code={`// Request
GET /api/products?category=electronics&inStock=true

// Controller
export const getProducts = (req, res) => {
  const { category, inStock } = req.query;

  return res.json({
    category,
    inStock,
  });
};

// Output
{
  "category": "electronics",
  "inStock": "true"
}`}
        />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          Important: Query parameter values are generally received as
          strings. Convert and validate them before using them in database queries.
        </p>
      </section>

      {/* SECTION 3 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          3. Basic MongoDB Filtering
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          We can pass filter conditions to MongoDB's <code>find()</code>
          method to retrieve matching documents.
        </p>

        <CodeBlock
          code={`// Find products by category
const products = await Product.find({
  category: "electronics",
});

// Find products by availability
const products = await Product.find({
  inStock: true,
});

// Multiple conditions
const products = await Product.find({
  category: "electronics",
  inStock: true,
});`}
        />
      </section>

      {/* SECTION 4 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          4. Comparison Operators
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB provides comparison operators to filter documents
          using conditions such as greater than, less than, or not equal.
        </p>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[420px] text-left text-sm">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="px-4 py-3">Operator</th>
                <th className="px-4 py-3">Meaning</th>
                <th className="px-4 py-3">Example</th>
              </tr>
            </thead>

            <tbody>
              {[
                ["$gt", "Greater than", "price > 500"],
                ["$gte", "Greater than or equal", "price >= 500"],
                ["$lt", "Less than", "price < 1000"],
                ["$lte", "Less than or equal", "price <= 1000"],
                ["$ne", "Not equal", "status != inactive"],
                ["$in", "Matches any listed value", "category in a list"],
                ["$nin", "Matches none of listed values", "category not in a list"],
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

        <CodeBlock
          code={`// Price greater than 500
Product.find({
  price: { $gt: 500 },
});

// Price between 500 and 2000
Product.find({
  price: {
    $gte: 500,
    $lte: 2000,
  },
});

// Multiple allowed categories
Product.find({
  category: {
    $in: ["electronics", "accessories"],
  },
});`}
        />
      </section>

      {/* SECTION 5 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          5. Building Dynamic Filters
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          In real applications, clients decide which filters they want to
          apply. We can build a MongoDB filter object dynamically.
        </p>

        <CodeBlock
          code={`export const getProducts = async (req, res) => {
  try {
    const { category, minPrice, maxPrice, inStock } = req.query;

    const filter = {};

    // Category filter
    if (category) {
      filter.category = category;
    }

    // Price range filter
    if (minPrice !== undefined || maxPrice !== undefined) {
      filter.price = {};

      if (minPrice !== undefined) {
        filter.price.$gte = Number(minPrice);
      }

      if (maxPrice !== undefined) {
        filter.price.$lte = Number(maxPrice);
      }
    }

    // Availability filter
    if (inStock !== undefined) {
      if (!["true", "false"].includes(inStock)) {
        return res.status(400).json({
          success: false,
          message: "Invalid inStock value",
        });
      }

      filter.inStock = inStock === "true";
    }

    const products = await Product.find(filter);

    return res.status(200).json({
      success: true,
      data: products,
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
          This example assumes <code>minPrice</code> and <code>maxPrice</code>
          are valid numbers. In production, validate that they are finite,
          non-negative values and that the minimum does not exceed the maximum.
        </p>
      </section>

      {/* SECTION 6 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          6. Filter Whitelisting
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Never allow clients to directly control arbitrary MongoDB query
          fields or operators. Only allow predefined fields that your API
          supports.
        </p>

        <CodeBlock
          code={`const allowedFilters = [
  "category",
  "inStock",
];

const filter = {};

for (const key of allowedFilters) {
  if (req.query[key] !== undefined) {
    filter[key] = req.query[key];
  }
}

// Use only approved filters
const products = await Product.find(filter);`}
        />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          For fields such as <code>inStock</code>, convert and validate
          the value instead of passing its query string directly.
        </p>
      </section>

      {/* SECTION 7 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          7. Best Practices
        </h2>

        <ul className="list-disc space-y-2 pl-5 leading-7 text-[var(--text-secondary)]">
          <li>Use query parameters for optional filters.</li>
          <li>Validate and convert query parameter values.</li>
          <li>Whitelist allowed filter fields.</li>
          <li>Use MongoDB comparison operators when needed.</li>
          <li>Reject invalid ranges and unexpected values.</li>
          <li>Use indexes for frequently filtered fields when appropriate.</li>
          <li>Combine filtering with pagination for large datasets.</li>
          <li>Never pass raw user-controlled objects directly into MongoDB queries.</li>
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

export default Filtering;