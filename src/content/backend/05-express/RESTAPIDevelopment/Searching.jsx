import CodeBlock from "../../../../components/common/CodeBlock";

const Searching = () => {
  const questions = [
    {
      question: "What is API Searching?",
      answer:
        "Searching allows clients to find records that match a particular keyword or search term.",
    },
    {
      question: "How do we pass search keywords in an API?",
      answer:
        "Search keywords are commonly passed through query parameters, such as /products?search=phone.",
    },
    {
      question: "What is MongoDB $regex?",
      answer:
        "$regex is a MongoDB operator used to match documents against a regular expression pattern.",
    },
    {
      question: "What does the i option do in $regex?",
      answer:
        "The i option makes the search case-insensitive, so Phone and phone can match.",
    },
    {
      question: "What is the difference between Searching and Filtering?",
      answer:
        "Searching finds records using keywords, while filtering selects records using specific conditions.",
    },
    {
      question: "What is the difference between exact and partial search?",
      answer:
        "Exact search matches a complete value, while partial search matches records containing a particular part of a value.",
    },
    {
      question: "Why can regex searching become slow?",
      answer:
        "Unanchored regex searches may scan many documents, especially on large collections. Indexes and dedicated search solutions can improve performance.",
    },
    {
      question: "What is MongoDB Atlas Search?",
      answer:
        "Atlas Search is a full-text search feature that provides advanced search capabilities such as relevance scoring, autocomplete, and fuzzy matching.",
    },
  ];

  return (
    <div className="w-full space-y-8 text-[var(--text-primary)]">

      {/* HEADER */}
      <div className="space-y-3">
        <p className="text-sm font-semibold tracking-widest text-[var(--accent-color)]">
          EXPRESS.JS / REST API DEVELOPMENT / 08
        </p>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          API Searching
        </h1>

        <p className="text-base leading-7 text-[var(--text-secondary)]">
          Searching allows users to find specific records by entering
          keywords. For example, users can search products by name,
          users by email, or articles by title.
        </p>
      </div>

      {/* SECTION 1 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          1. Why Do We Need Searching?
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Imagine an application contains thousands of products.
          Instead of manually finding a product, users can enter a
          keyword and get matching results.
        </p>

        <CodeBlock
          code={`// Search products
GET /api/products?search=phone

// Search users
GET /api/users?search=mayur

// Search articles
GET /api/articles?search=nodejs`}
        />
      </section>

      {/* SECTION 2 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          2. Reading Search Query Parameters
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Express provides <code>req.query</code> to access search
          keywords from the URL.
        </p>

        <CodeBlock
          code={`// Request
GET /api/products?search=phone

// Controller
export const searchProducts = (req, res) => {
  const { search } = req.query;

  return res.json({
    search,
  });
};

// Output
{
  "search": "phone"
}`}
        />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          Query parameters are user-controlled input. Always validate
          their type and length before using them.
        </p>
      </section>

      {/* SECTION 3 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          3. Searching with MongoDB $regex
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB provides the <code>$regex</code> operator to find
          documents that match a regular expression pattern.
        </p>

        <CodeBlock
          code={`// Find products whose names contain "phone"
const products = await Product.find({
  name: {
    $regex: "phone",
    $options: "i",
  },
});`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <h3 className="mb-3 font-semibold">Understanding the options</h3>

          <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-[var(--text-secondary)]">
            <li><code>$regex</code> defines the search pattern.</li>
            <li><code>$options: "i"</code> makes the search case-insensitive.</li>
          </ul>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          4. Searching Across Multiple Fields
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Sometimes users should be able to search using multiple fields,
          such as product name, description, or category.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB's <code>$or</code> operator allows us to match a
          document when at least one condition is true.
        </p>

        <CodeBlock
          code={`const products = await Product.find({
  $or: [
    {
      name: {
        $regex: "phone",
        $options: "i",
      },
    },
    {
      description: {
        $regex: "phone",
        $options: "i",
      },
    },
    {
      category: {
        $regex: "phone",
        $options: "i",
      },
    },
  ],
});`}
        />
      </section>

      {/* SECTION 5 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          5. Dynamic Search API
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          We can create a reusable search endpoint that accepts a keyword
          and searches across multiple fields.
        </p>

        <CodeBlock
          code={`export const searchProducts = async (req, res) => {
  try {
    const search = req.query.search;

    if (typeof search !== "string" || search.trim().length === 0) {
      return res.status(400).json({
        success: false,
        message: "Search keyword is required",
      });
    }

    const keyword = search.trim();

    if (keyword.length > 100) {
      return res.status(400).json({
        success: false,
        message: "Search keyword is too long",
      });
    }

    // Escape regex special characters
    const escapedKeyword = keyword.replace(
      /[.*+?^\${}()|[\\]\\\\]/g,
      "\\\\$&"
    );

    const products = await Product.find({
      $or: [
        { name: { $regex: escapedKeyword, $options: "i" } },
        { description: { $regex: escapedKeyword, $options: "i" } },
      ],
    });

    return res.status(200).json({
      success: true,
      message: "Search results fetched successfully",
      data: products,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Search failed",
    });
  }
};`}
        />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          Escaping special regex characters ensures that user input is
          treated as a literal search keyword instead of an arbitrary
          regular expression pattern.
        </p>
      </section>

      {/* SECTION 6 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          6. Regex Search vs Full-Text Search
        </h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[440px] text-left text-sm">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="px-4 py-3">Regex Search</th>
                <th className="px-4 py-3">Full-Text Search</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-t border-[var(--border-color)]">
                <td className="px-4 py-3 text-[var(--text-secondary)]">
                  Matches text patterns.
                </td>
                <td className="px-4 py-3 text-[var(--text-secondary)]">
                  Searches text using words and terms.
                </td>
              </tr>

              <tr className="border-t border-[var(--border-color)]">
                <td className="px-4 py-3 text-[var(--text-secondary)]">
                  Supports regular expressions.
                </td>
                <td className="px-4 py-3 text-[var(--text-secondary)]">
                  Supports text indexing and relevance.
                </td>
              </tr>

              <tr className="border-t border-[var(--border-color)]">
                <td className="px-4 py-3 text-[var(--text-secondary)]">
                  Useful for simple pattern matching.
                </td>
                <td className="px-4 py-3 text-[var(--text-secondary)]">
                  Useful for larger text-search requirements.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB also provides text indexes and Atlas Search for
          more advanced search requirements.
        </p>
      </section>

      {/* SECTION 7 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          7. Best Practices
        </h2>

        <ul className="list-disc space-y-2 pl-5 leading-7 text-[var(--text-secondary)]">
          <li>Use query parameters for search keywords.</li>
          <li>Validate search input and limit its length.</li>
          <li>Escape special regex characters in user input.</li>
          <li>Search only approved fields.</li>
          <li>Use indexes or dedicated search solutions for large datasets.</li>
          <li>Combine searching with filtering and pagination when needed.</li>
          <li>Avoid unrestricted regex patterns on large collections.</li>
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

export default Searching;