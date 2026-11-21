import CodeBlock from "../../../../components/common/CodeBlock";

function DatabaseIndexingStrategy() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          MONGODB INDEXING / STRATEGY
        </p>
        <h1 className="mt-2 text-3xl font-bold">
          Database Indexing Strategy
        </h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          Indexing Strategy means choosing the right indexes for
          frequently used queries to improve database performance.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. Create Indexes on Frequently Queried Fields</h2>
        <p className="text-[var(--text-secondary)]">
          Create indexes on fields commonly used in filtering, sorting
          and searching.
        </p>
        <CodeBlock
          code={`db.users.createIndex({ email: 1 });

// Efficient lookup
db.users.find({ email: "mayur@gmail.com" });`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Use Compound Indexes</h2>
        <p className="text-[var(--text-secondary)]">
          When queries frequently use multiple fields together, a
          compound index can improve performance.
        </p>
        <CodeBlock
          code={`db.users.createIndex({
  status: 1,
  age: -1
});`}
        />
        <p className="text-sm text-[var(--text-secondary)]">
          Field order matters. MongoDB can efficiently use compound
          indexes for queries on the index's leading fields.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Follow ESR Rule</h2>
        <p className="text-[var(--text-secondary)]">
          ESR stands for Equality, Sort and Range. It is a useful
          guideline for arranging fields in compound indexes.
        </p>
        <CodeBlock
          code={`db.orders.createIndex({
  status: 1,      // Equality
  createdAt: -1,  // Sort
  total: 1        // Range
});`}
        />
        <p className="text-sm text-[var(--text-secondary)]">
          This is a general guideline. The best field order depends
          on the actual query and data distribution.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Avoid Too Many Indexes</h2>
        <p className="text-[var(--text-secondary)]">
          Indexes improve read performance, but every additional index
          consumes storage and increases the cost of insert, update
          and delete operations.
        </p>
        <CodeBlock
          code={`// Check existing indexes
db.users.getIndexes();

// Remove an unnecessary index
db.users.dropIndex("age_1");`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Analyze Queries with explain()</h2>
        <p className="text-[var(--text-secondary)]">
          Use <code>explain()</code> to understand how MongoDB executes
          a query and whether an index is being used.
        </p>
        <CodeBlock
          code={`db.users.find({
  email: "mayur@gmail.com"
}).explain("executionStats");`}
        />
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li><code>IXSCAN</code> – Index scan.</li>
          <li><code>COLLSCAN</code> – Collection scan.</li>
          <li><code>totalDocsExamined</code> – Documents examined.</li>
          <li><code>executionTimeMillis</code> – Execution time in milliseconds.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Important Points</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>Index frequently queried fields.</li>
          <li>Use compound indexes for common multi-field queries.</li>
          <li>Follow the ESR guideline when designing compound indexes.</li>
          <li>Avoid unnecessary indexes.</li>
          <li>Use <code>explain()</code> to analyze query performance.</li>
          <li>Choose indexes based on real query patterns and test results.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Interview Questions</h2>

        <details className="rounded-lg border border-[var(--border-color)] p-3">
          <summary className="cursor-pointer font-medium">
            What is an Indexing Strategy?
          </summary>
          <p className="mt-2 text-[var(--text-secondary)]">
            It is the process of selecting and designing indexes
            according to application query patterns.
          </p>
        </details>

        <details className="rounded-lg border border-[var(--border-color)] p-3">
          <summary className="cursor-pointer font-medium">
            What is the ESR rule?
          </summary>
          <p className="mt-2 text-[var(--text-secondary)]">
            ESR stands for Equality, Sort and Range. It helps arrange
            fields in compound indexes.
          </p>
        </details>

        <details className="rounded-lg border border-[var(--border-color)] p-3">
          <summary className="cursor-pointer font-medium">
            Why should we avoid too many indexes?
          </summary>
          <p className="mt-2 text-[var(--text-secondary)]">
            Because indexes consume storage and increase write-operation
            overhead.
          </p>
        </details>
      </section>
    </div>
  );
}

export default DatabaseIndexingStrategy;