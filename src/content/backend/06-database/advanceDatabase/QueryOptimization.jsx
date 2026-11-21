import CodeBlock from "../../../../components/common/CodeBlock";

function QueryOptimization() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          MONGODB PERFORMANCE / OPTIMIZATION
        </p>
        <h1 className="mt-2 text-3xl font-bold">Query Optimization</h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          Query Optimization is the process of improving database queries
          to reduce execution time, unnecessary document scans and
          resource usage.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. Use Indexes</h2>
        <p className="text-[var(--text-secondary)]">
          Create indexes on frequently queried fields to avoid scanning
          the entire collection.
        </p>
        <CodeBlock
          code={`db.users.createIndex({ email: 1 });

db.users.find({
  email: "mayur@gmail.com"
});`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Return Only Required Fields</h2>
        <p className="text-[var(--text-secondary)]">
          Use projection to retrieve only the fields your application needs.
        </p>
        <CodeBlock
          code={`// Avoid fetching unnecessary fields
db.users.find(
  { status: "active" },
  { name: 1, email: 1, _id: 0 }
);`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Use Limit and Pagination</h2>
        <p className="text-[var(--text-secondary)]">
          Avoid fetching thousands of documents when only a small
          number are required.
        </p>
        <CodeBlock
          code={`db.users.find()
  .sort({ _id: 1 })
  .limit(10);`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Avoid Unnecessary Queries</h2>
        <p className="text-[var(--text-secondary)]">
          Fetch related data efficiently instead of executing repeated
          queries inside loops (N+1 query problem).
        </p>
        <CodeBlock
          code={`// Instead of querying separately for every user,
// fetch related data using one suitable query
// or use $lookup when appropriate.`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Optimize Aggregation Pipelines</h2>
        <p className="text-[var(--text-secondary)]">
          Filter documents early and avoid unnecessary processing.
        </p>
        <CodeBlock
          code={`db.orders.aggregate([
  { $match: { status: "completed" } },
  { $project: { amount: 1, userId: 1 } },
  { $sort: { amount: -1 } },
  { $limit: 10 }
]);`}
        />
        <p className="text-sm text-[var(--text-secondary)]">
          An early `$match` can reduce the number of documents passed
          to later stages. MongoDB can also optimize eligible pipelines
          automatically.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Analyze Queries with explain()</h2>
        <p className="text-[var(--text-secondary)]">
          Use execution statistics to identify slow queries and
          unnecessary scans.
        </p>
        <CodeBlock
          code={`db.users.find({
  status: "active"
}).explain("executionStats");`}
        />
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li><code>IXSCAN</code> – Index scan.</li>
          <li><code>COLLSCAN</code> – Collection scan.</li>
          <li><code>totalDocsExamined</code> – Documents examined.</li>
          <li><code>executionTimeMillis</code> – Execution time.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Important Points</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>Create indexes for common query patterns.</li>
          <li>Use projection to return only required fields.</li>
          <li>Use pagination and limits for large datasets.</li>
          <li>Avoid unnecessary repeated database queries.</li>
          <li>Optimize aggregation pipelines.</li>
          <li>Use <code>explain()</code> before changing indexes.</li>
          <li>Measure performance with realistic data and workloads.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Interview Questions</h2>
        <details className="rounded-lg border border-[var(--border-color)] p-3">
          <summary className="cursor-pointer font-medium">
            What is Query Optimization?
          </summary>
          <p className="mt-2 text-[var(--text-secondary)]">
            It is the process of improving queries to reduce execution
            time and resource usage.
          </p>
        </details>

        <details className="rounded-lg border border-[var(--border-color)] p-3">
          <summary className="cursor-pointer font-medium">
            Why should we use projection?
          </summary>
          <p className="mt-2 text-[var(--text-secondary)]">
            Projection returns only required fields and avoids transferring
            unnecessary data.
          </p>
        </details>

        <details className="rounded-lg border border-[var(--border-color)] p-3">
          <summary className="cursor-pointer font-medium">
            How do you identify a slow MongoDB query?
          </summary>
          <p className="mt-2 text-[var(--text-secondary)]">
            Use explain("executionStats") and inspect documents examined,
            index usage and execution time.
          </p>
        </details>
      </section>
    </div>
  );
}

export default QueryOptimization;