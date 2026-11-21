import CodeBlock from "../../../../components/common/CodeBlock";

function IndexPerformance() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          MONGODB INDEXING / PERFORMANCE
        </p>
        <h1 className="mt-2 text-3xl font-bold">Index Performance</h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          Index Performance describes how efficiently indexes help
          MongoDB search, sort and retrieve documents without scanning
          the entire collection.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. Index vs Collection Scan</h2>
        <CodeBlock
          code={`// Without a suitable index
db.users.find({ email: "mayur@gmail.com" });

// Create index
db.users.createIndex({ email: 1 });

// Query can now use the index
db.users.find({ email: "mayur@gmail.com" });`}
        />
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li><code>COLLSCAN</code> – MongoDB scans documents in the collection.</li>
          <li><code>IXSCAN</code> – MongoDB scans an index to find matching documents.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Check Index Performance</h2>
        <p className="text-[var(--text-secondary)]">
          Use <code>explain("executionStats")</code> to analyze how
          MongoDB executes a query.
        </p>
        <CodeBlock
          code={`db.users.find({
  email: "mayur@gmail.com"
}).explain("executionStats");`}
        />
        <p className="text-[var(--text-secondary)]">Important fields:</p>
        <CodeBlock
          code={`{
  "nReturned": 1,
  "totalKeysExamined": 1,
  "totalDocsExamined": 1,
  "executionTimeMillis": 2
}`}
        />
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li><code>nReturned</code> – Documents returned.</li>
          <li><code>totalKeysExamined</code> – Index keys examined.</li>
          <li><code>totalDocsExamined</code> – Documents examined.</li>
          <li><code>executionTimeMillis</code> – Execution time in milliseconds.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Covered Queries</h2>
        <p className="text-[var(--text-secondary)]">
          A covered query is a query where all required filter and
          returned fields are available in an index, so MongoDB does
          not need to fetch documents from the collection.
        </p>
        <CodeBlock
          code={`db.users.createIndex({
  email: 1,
  name: 1
});

db.users.find(
  { email: "mayur@gmail.com" },
  { _id: 0, email: 1, name: 1 }
);`}
        />
        <p className="text-sm text-[var(--text-secondary)]">
          The query can be covered by this index because both the
          filter and projected fields are present in it.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Index Size and Storage</h2>
        <p className="text-[var(--text-secondary)]">
          Indexes consume disk and memory. Too many or oversized indexes
          can increase storage usage and write overhead.
        </p>
        <CodeBlock
          code={`// Check collection and index sizes
db.users.stats();

// Check all indexes
db.users.getIndexes();`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Important Points</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>Indexes can reduce the number of documents examined.</li>
          <li><code>IXSCAN</code> indicates an index scan.</li>
          <li><code>COLLSCAN</code> indicates a collection scan.</li>
          <li>Covered queries can avoid fetching collection documents.</li>
          <li>Too many indexes increase storage and write costs.</li>
          <li>Use execution statistics to compare query performance.</li>
          <li>Low execution time alone does not guarantee a good query plan; examine keys and documents scanned too.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Interview Questions</h2>
        <details className="rounded-lg border border-[var(--border-color)] p-3">
          <summary className="cursor-pointer font-medium">
            What is IXSCAN?
          </summary>
          <p className="mt-2 text-[var(--text-secondary)]">
            IXSCAN means MongoDB is scanning an index to find matching data.
          </p>
        </details>

        <details className="rounded-lg border border-[var(--border-color)] p-3">
          <summary className="cursor-pointer font-medium">
            What is a Covered Query?
          </summary>
          <p className="mt-2 text-[var(--text-secondary)]">
            A query where all required fields are available in an index,
            avoiding document fetches from the collection.
          </p>
        </details>

        <details className="rounded-lg border border-[var(--border-color)] p-3">
          <summary className="cursor-pointer font-medium">
            How can we analyze index performance?
          </summary>
          <p className="mt-2 text-[var(--text-secondary)]">
            By using explain("executionStats") and checking keys examined,
            documents examined and execution time.
          </p>
        </details>
      </section>
    </div>
  );
}

export default IndexPerformance;