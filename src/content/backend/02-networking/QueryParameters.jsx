import CodeBlock from "../../../components/common/CodeBlock";

const QueryParameters = () => {
  const examples = [
    {
      name: "Search",
      url: "/api/products?search=phone",
      purpose: "Find products matching a search keyword.",
    },
    {
      name: "Pagination",
      url: "/api/products?page=2&limit=10",
      purpose: "Get the second page with 10 products.",
    },
    {
      name: "Filtering",
      url: "/api/products?category=electronics",
      purpose: "Get products from a specific category.",
    },
    {
      name: "Sorting",
      url: "/api/products?sort=price&order=asc",
      purpose: "Sort products by price in ascending order.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8 text-[var(--text-primary)]">
      {/* Header */}{" "}
      <header className="space-y-3">
        {" "}
        <span className="text-sm text-[var(--primary-color)] font-medium">
          BACKEND NETWORKING / 09{" "}
        </span>
        <h1 className="text-4xl font-bold">Query Parameters</h1>
        <p className="text-lg text-[var(--text-secondary)]">
          Understanding how clients pass additional information through URLs to
          filter, search, sort and paginate server data.
        </p>
      </header>
      {/* Introduction */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What are Query Parameters?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Query Parameters are key-value pairs added to the end of a URL after a
          question mark (?). They help the server understand which data the
          client wants.
        </p>

        <div className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-3">
          <p className="text-sm text-[var(--text-muted)]">Example URL</p>

          <div className="p-3 rounded-lg bg-[var(--bg-tertiary)] overflow-x-auto">
            <code className="text-sm whitespace-nowrap">
              /api/products?page=2&limit=10
            </code>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-xs text-[var(--text-muted)]">page</p>
              <p className="font-semibold text-[var(--primary-color)]">2</p>
              <p className="text-xs text-[var(--text-secondary)]">
                Parameter name and value
              </p>
            </div>

            <div>
              <p className="text-xs text-[var(--text-muted)]">limit</p>
              <p className="font-semibold text-[var(--primary-color)]">10</p>
              <p className="text-xs text-[var(--text-secondary)]">
                Parameter name and value
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* URL Structure */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Query Parameter Structure</h2>

        <div className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-4">
          <div className="flex flex-wrap items-center gap-1 text-sm font-semibold">
            <span className="text-[var(--text-secondary)]">/api/products</span>
            <span className="text-[var(--primary-color)]">?</span>
            <span className="text-[var(--accent-color)]">page=2</span>
            <span className="text-[var(--text-muted)]">&</span>
            <span className="text-[var(--accent-color)]">limit=10</span>
          </div>

          <div className="space-y-2 text-sm text-[var(--text-secondary)]">
            <p>
              <strong className="text-[var(--text-primary)]">?</strong> Starts
              the query string.
            </p>
            <p>
              <strong className="text-[var(--text-primary)]">=</strong>{" "}
              Separates a parameter name from its value.
            </p>
            <p>
              <strong className="text-[var(--text-primary)]">&</strong>{" "}
              Separates multiple query parameters.
            </p>
          </div>
        </div>
      </section>
      {/* Common Use Cases */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Common Use Cases</h2>

        <div className="space-y-3">
          {examples.map((item) => (
            <div
              key={item.name}
              className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-2"
            >
              <h3 className="font-semibold text-[var(--primary-color)]">
                {item.name}
              </h3>

              <div className="p-3 rounded-lg bg-[var(--bg-tertiary)] overflow-x-auto">
                <code className="text-sm whitespace-nowrap">{item.url}</code>
              </div>

              <p className="text-sm text-[var(--text-secondary)]">
                {item.purpose}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* Accessing Query Parameters */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">
          Accessing Query Parameters in Express.js
        </h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Express provides req.query to access query parameters from the
          incoming URL.
        </p>
        <div className="rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-secondary)]">
          <div className="px-4 py-2 border-b border-[var(--border-color)] text-sm text-[var(--text-muted)]">
            server.js
          </div>
          <pre className="p-4 overflow-x-auto text-sm leading-7 text-[var(--text-secondary)]">
            <CodeBlock
              code={`app.get("/products", (req, res) => {


const { page, limit, category } = req.query;

res.json({
page,
limit,
category
});
});`}
            />
          </pre>{" "}
        </div>
        <div className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-2">
          <p className="text-sm text-[var(--text-muted)]">Request URL</p>
          <code className="text-sm text-[var(--primary-color)] break-all">
            /products?page=2&limit=10&category=electronics
          </code>
          <p className="text-sm text-[var(--text-muted)] mt-3">req.query</p>
          <pre className="text-sm text-[var(--text-secondary)] overflow-x-auto">
            {`{
  page: "2",
  limit: "10",
  category: "electronics"
}`}
          </pre>{" "}
        </div>{" "}
      </section>
      {/* Practical Pagination */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">
          Practical Example: Pagination
        </h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Pagination divides large datasets into smaller pages instead of
          sending every record in a single response.
        </p>

        <div className="rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-secondary)]">
          <div className="px-4 py-2 border-b border-[var(--border-color)] text-sm text-[var(--text-muted)]">
            products.controller.js
          </div>
          <pre className="p-4 overflow-x-auto text-sm leading-7 text-[var(--text-secondary)]">
            <CodeBlock code={`const getProducts = async (req, res) => {


const page = Math.max(1, Number(req.query.page) || 1);
const limit = Math.min(
100,
Math.max(1, Number(req.query.limit) || 10)
);

const skip = (page - 1) * limit;

const products = await Product.find()
.skip(skip)
.limit(limit);

res.status(200).json({
page,
limit,
products
});
};`} />
          </pre>{" "}
        </div>

        <div className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-2">
          <h3 className="font-semibold text-[var(--primary-color)]">
            How skip works
          </h3>

          <p className="text-sm text-[var(--text-secondary)]">
            Formula: <strong>(page - 1) × limit</strong>
          </p>

          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="p-3 rounded-lg bg-[var(--bg-tertiary)]">
              <p className="text-[var(--text-muted)]">Page 1</p>
              <p className="font-semibold">skip = 0</p>
            </div>

            <div className="p-3 rounded-lg bg-[var(--bg-tertiary)]">
              <p className="text-[var(--text-muted)]">Page 2</p>
              <p className="font-semibold">skip = 10</p>
            </div>
          </div>
        </div>
      </section>
      {/* Query vs Route Parameters */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">
          Query Parameters vs Route Parameters
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-2">
            <h3 className="font-semibold text-[var(--primary-color)]">
              Query Parameters
            </h3>

            <code className="text-sm break-all">GET /products?page=2</code>

            <p className="text-sm text-[var(--text-secondary)]">
              Used for filtering, searching, sorting and pagination.
            </p>

            <code className="text-sm text-[var(--text-muted)]">
              req.query.page
            </code>
          </div>

          <div className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-2">
            <h3 className="font-semibold text-[var(--primary-color)]">
              Route Parameters
            </h3>

            <code className="text-sm break-all">GET /products/101</code>

            <p className="text-sm text-[var(--text-secondary)]">
              Used to identify a specific resource.
            </p>

            <code className="text-sm text-[var(--text-muted)]">
              req.params.id
            </code>
          </div>
        </div>
      </section>
      {/* Important Points */}
      <section className="p-5 rounded-xl bg-[var(--primary-soft)] border border-[var(--border-color)] space-y-3">
        <h2 className="text-lg font-semibold text-[var(--primary-color)]">
          Important Points
        </h2>

        <ul className="space-y-2 text-[var(--text-secondary)] list-disc pl-5">
          <li>Query parameters start after the ? symbol.</li>
          <li>Multiple parameters are separated using &.</li>
          <li>Express accesses them through req.query.</li>
          <li>Query parameter values are generally strings.</li>
          <li>Convert and validate values before using them.</li>
          <li>
            Common uses include search, filtering, sorting and pagination.
          </li>
          <li>
            Never use query parameters to send passwords or sensitive tokens.
          </li>
        </ul>
      </section>
      {/* Summary */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Quick Summary</h2>

        <div className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)]">
          <p className="text-[var(--text-secondary)] leading-8">
            <strong className="text-[var(--text-primary)]">
              Query Parameters:
            </strong>{" "}
            Data passed through a URL.
            <br />
            <strong className="text-[var(--text-primary)]">?</strong> Starts
            query parameters.
            <br />
            <strong className="text-[var(--text-primary)]">&</strong> Separates
            multiple parameters.
            <br />
            <strong className="text-[var(--text-primary)]">
              req.query:
            </strong>{" "}
            Accesses query parameters in Express.
            <br />
            <strong className="text-[var(--text-primary)]">
              Common Uses:
            </strong>{" "}
            Search, filtering, sorting and pagination.
          </p>
        </div>
      </section>
    </div>
  );
};

export default QueryParameters;
