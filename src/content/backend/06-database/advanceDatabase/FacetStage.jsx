import CodeBlock from "../../../../components/common/CodeBlock";

function FacetStage() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          MONGODB AGGREGATION / 07
        </p>
        <h1 className="mt-2 text-3xl font-bold">$facet Stage</h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          The `$facet` stage allows multiple aggregation pipelines to
          process the same input documents independently. Each pipeline
          produces its own result array.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. Basic Syntax</h2>
        <CodeBlock
          code={`{
  $facet: {
    result1: [ /* pipeline stages */ ],
    result2: [ /* pipeline stages */ ]
  }
}`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Example</h2>
        <p className="text-[var(--text-secondary)]">
          Suppose we have a products collection:
        </p>
        <CodeBlock
          code={`[
  { name: "Laptop", category: "Electronics", price: 50000 },
  { name: "Phone", category: "Electronics", price: 20000 },
  { name: "Shirt", category: "Clothing", price: 1000 }
]`}
        />

        <p className="text-[var(--text-secondary)]">
          Get products, total count and average price together:
        </p>
        <CodeBlock
          code={`db.products.aggregate([
  {
    $facet: {
      allProducts: [
        { $project: { name: 1, price: 1 } }
      ],
      totalCount: [
        { $count: "count" }
      ],
      averagePrice: [
        {
          $group: {
            _id: null,
            average: { $avg: "$price" }
          }
        }
      ]
    }
  }
]);`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Output Structure</h2>
        <p className="text-[var(--text-secondary)]">
          Each facet name becomes a field containing that pipeline's
          result as an array.
        </p>
        <CodeBlock
          code={`{
  allProducts: [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 20000 },
    { name: "Shirt", price: 1000 }
  ],
  totalCount: [
    { count: 3 }
  ],
  averagePrice: [
    { _id: null, average: 23666.67 }
  ]
}`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Real-World Use</h2>
        <p className="text-[var(--text-secondary)]">
          `$facet` is useful for product listing pages where you need
          multiple results together, such as:
        </p>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>Total product count.</li>
          <li>Products grouped by category.</li>
          <li>Minimum and maximum prices.</li>
          <li>Paginated product results.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Important Points</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>All facet pipelines receive the same input documents.</li>
          <li>Each pipeline runs independently.</li>
          <li>Each result is stored in an array.</li>
          <li>One facet pipeline cannot directly use another facet's output.</li>
          <li>The resulting document has a 16 MB BSON size limit.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Interview Questions</h2>
        <details className="rounded-lg border border-[var(--border-color)] p-3">
          <summary className="cursor-pointer font-medium">
            What is the use of $facet?
          </summary>
          <p className="mt-2 text-[var(--text-secondary)]">
            It runs multiple independent aggregation pipelines on the
            same input documents.
          </p>
        </details>

        <details className="rounded-lg border border-[var(--border-color)] p-3">
          <summary className="cursor-pointer font-medium">
            Where are $facet results stored?
          </summary>
          <p className="mt-2 text-[var(--text-secondary)]">
            Each pipeline's result is stored in an array under its
            corresponding facet name.
          </p>
        </details>
      </section>
    </div>
  );
}

export default FacetStage;