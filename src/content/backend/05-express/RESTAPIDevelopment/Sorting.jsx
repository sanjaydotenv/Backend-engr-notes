import CodeBlock from "../../../../components/common/CodeBlock";

const Sorting = () => {
  const questions = [
    {
      question: "What is API Sorting?",
      answer:
        "Sorting arranges API results in a specific order, such as price low to high or newest to oldest.",
    },
    {
      question: "How do we pass sorting parameters in an API?",
      answer:
        "Sorting parameters are commonly passed through query strings, such as /products?sort=price.",
    },
    {
      question: "What is ascending order?",
      answer:
        "Ascending order arranges values from smallest to largest. In MongoDB, it is represented by 1.",
    },
    {
      question: "What is descending order?",
      answer:
        "Descending order arranges values from largest to smallest. In MongoDB, it is represented by -1.",
    },
    {
      question: "How does MongoDB sort() work?",
      answer:
        "The sort() method accepts a field and its sorting direction to arrange matching documents.",
    },
    {
      question: "Can we sort using multiple fields?",
      answer:
        "Yes. MongoDB can sort by multiple fields in sequence. The next field is used when the previous field has equal values.",
    },
    {
      question: "Why should we whitelist sorting fields?",
      answer:
        "Whitelisting prevents clients from sorting by unsupported or sensitive database fields.",
    },
  ];

  return (
    <div className="w-full space-y-8 text-[var(--text-primary)]">

      {/* HEADER */}
      <div className="space-y-3">
        <p className="text-sm font-semibold tracking-widest text-[var(--accent-color)]">
          EXPRESS.JS / REST API DEVELOPMENT / 07
        </p>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          API Sorting
        </h1>

        <p className="text-base leading-7 text-[var(--text-secondary)]">
          Sorting is the process of arranging API results in a specific order.
          For example, products can be sorted by price, name, or creation date.
        </p>
      </div>

      {/* SECTION 1 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          1. Why Do We Need Sorting?
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Imagine an application contains thousands of products. Users may
          want to see the cheapest products first or the newest products first.
          Sorting makes this possible.
        </p>

        <CodeBlock
          code={`// Sort by price
GET /api/products?sort=price

// Sort by newest products
GET /api/products?sort=createdAt

// Sort by highest price
GET /api/products?sort=-price`}
        />
      </section>

      {/* SECTION 2 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          2. Ascending and Descending Order
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB uses two values to define sorting direction.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
            <h3 className="mb-2 font-semibold text-[var(--accent-color)]">
              Ascending (1)
            </h3>

            <p className="mb-3 text-sm text-[var(--text-secondary)]">
              Smallest to largest.
            </p>

            <CodeBlock code={`Product.find().sort({ price: 1 });`} />

            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              Example: 100 → 200 → 300 → 400
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
            <h3 className="mb-2 font-semibold text-[var(--accent-color)]">
              Descending (-1)
            </h3>

            <p className="mb-3 text-sm text-[var(--text-secondary)]">
              Largest to smallest.
            </p>

            <CodeBlock code={`Product.find().sort({ price: -1 });`} />

            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              Example: 400 → 300 → 200 → 100
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          3. Sorting in MongoDB
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Mongoose provides the <code>sort()</code> method to arrange
          documents returned by a query.
        </p>

        <CodeBlock
          code={`// Price: Low to High
const products = await Product.find().sort({
  price: 1,
});

// Price: High to Low
const products = await Product.find().sort({
  price: -1,
});

// Newest products first
const products = await Product.find().sort({
  createdAt: -1,
});

// Alphabetical order
const products = await Product.find().sort({
  name: 1,
});`}
        />
      </section>

      {/* SECTION 4 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          4. Sorting by Multiple Fields
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Sometimes we need to sort records using more than one field.
          MongoDB applies sorting in the order the fields are specified.
        </p>

        <CodeBlock
          code={`const products = await Product.find().sort({
  category: 1,
  price: -1,
});`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <h3 className="mb-2 font-semibold">How it works</h3>

          <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-[var(--text-secondary)]">
            <li>First, sort products by category alphabetically.</li>
            <li>When categories are equal, sort by price from high to low.</li>
          </ul>
        </div>
      </section>

      {/* SECTION 5 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          5. Dynamic Sorting Using Query Parameters
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Instead of hardcoding sorting fields, we can allow clients to
          choose the sorting field through query parameters.
        </p>

        <CodeBlock
          code={`// Example URLs

GET /api/products?sort=price
GET /api/products?sort=-price
GET /api/products?sort=createdAt

// Controller

export const getProducts = async (req, res) => {
  try {
    const allowedSortFields = [
      "price",
      "name",
      "createdAt",
    ];

    const sortField = req.query.sort || "-createdAt";

    const field = sortField.startsWith("-")
      ? sortField.slice(1)
      : sortField;

    if (!allowedSortFields.includes(field)) {
      return res.status(400).json({
        success: false,
        message: "Invalid sorting field",
      });
    }

    const sortOrder = sortField.startsWith("-") ? -1 : 1;

    const products = await Product.find().sort({
      [field]: sortOrder,
      _id: 1,
    });

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
          Here, a minus sign means descending order. For example,
          <code> -price</code> sorts prices from high to low.
          The <code>_id</code> field provides a consistent tie-breaker
          when two products have the same primary sort value.
        </p>
      </section>

      {/* SECTION 6 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          6. Sorting with Filtering and Pagination
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Real-world APIs often combine filtering, sorting, and pagination
          in a single database query.
        </p>

        <CodeBlock
          code={`const products = await Product.find({
  category: "electronics",
})
  .sort({ price: 1, _id: 1 })
  .skip(0)
  .limit(10);`}
        />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          This query fetches electronics products, sorts them by price
          from low to high, and returns the first 10 records.
        </p>
      </section>

      {/* SECTION 7 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          7. Best Practices
        </h2>

        <ul className="list-disc space-y-2 pl-5 leading-7 text-[var(--text-secondary)]">
          <li>Use query parameters for dynamic sorting.</li>
          <li>Whitelist allowed sorting fields.</li>
          <li>Use 1 for ascending and -1 for descending.</li>
          <li>Use a stable tie-breaker such as _id when needed.</li>
          <li>Create indexes for frequently sorted fields when appropriate.</li>
          <li>Combine sorting with filtering and pagination.</li>
          <li>Avoid allowing clients to sort by sensitive or unsupported fields.</li>
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

export default Sorting;