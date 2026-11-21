import CodeBlock from "../../../../components/common/CodeBlock";

export default function ExplainExecutionPlan() {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--primary-color)]">
          MONGODB / 23
        </p>

        <h1 className="text-3xl font-bold">Explain Execution Plan</h1>

        <p className="text-base leading-7 text-[var(--text-secondary)]">
          Explain Execution Plan helps us understand how MongoDB executes a
          query. It shows whether MongoDB uses an index, scans the entire
          collection, how many documents it examines, and how efficiently the
          query runs.
        </p>
      </div>

      {/* 1. Introduction */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">1. What Is Explain Execution Plan?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB provides the explain() method to inspect the execution plan
          of a query.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          It helps developers understand how MongoDB searches for documents
          and whether the query is using an appropriate index.
        </p>

        <CodeBlock
          code={`db.users.find({
  age: 19
}).explain()`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          This returns information about how MongoDB plans and executes the
          query.
        </p>
      </section>

      {/* 2. Why Explain */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">2. Why Do We Need explain()?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Sometimes a query returns correct results but takes too much time.
          explain() helps us identify possible performance problems.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              title: "Index Usage",
              description: "Check whether MongoDB is using an index.",
            },
            {
              title: "Collection Scan",
              description: "Identify queries scanning the entire collection.",
            },
            {
              title: "Document Scanning",
              description: "See how many documents MongoDB examines.",
            },
            {
              title: "Query Optimization",
              description: "Find opportunities to improve query performance.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-2"
            >
              <h3 className="font-semibold text-[var(--primary-color)]">
                {item.title}
              </h3>
              <p className="text-sm leading-6 text-[var(--text-secondary)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Explain Syntax */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">3. explain() Syntax</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB supports three explain verbosity modes.
        </p>

        <CodeBlock
          code={`// Query planning information
db.users.find({ age: 19 })
  .explain("queryPlanner")

// Planning + execution statistics
db.users.find({ age: 19 })
  .explain("executionStats")

// Detailed execution information
db.users.find({ age: 19 })
  .explain("allPlansExecution")`}
        />

        <div className="space-y-3">
          {[
            {
              name: "queryPlanner",
              description:
                "Shows the selected execution plan and information about candidate plans without executing the query to completion.",
            },
            {
              name: "executionStats",
              description:
                "Executes the winning plan and returns execution statistics.",
            },
            {
              name: "allPlansExecution",
              description:
                "Returns execution statistics for the winning plan and available trial-period information for candidate plans.",
            },
          ].map((item, index) => (
            <div
              key={item.name}
              className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-2"
            >
              <p className="font-semibold text-[var(--primary-color)]">
                {index + 1}. {item.name}
              </p>
              <p className="text-sm leading-6 text-[var(--text-secondary)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. COLLSCAN */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">4. COLLSCAN (Collection Scan)</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          COLLSCAN means MongoDB scans documents in the collection to find
          matching results instead of using an index for the search.
        </p>

        <CodeBlock
          code={`db.users.find({
  age: 19
}).explain("executionStats")`}
        />

        <CodeBlock
          code={`{
  queryPlanner: {
    winningPlan: {
      stage: "COLLSCAN"
    }
  }
}`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          If a collection contains millions of documents, a collection scan
          may become expensive for selective queries.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-2">
          <p className="font-semibold text-[var(--primary-color)]">
            Important
          </p>
          <p className="text-sm leading-6 text-[var(--text-secondary)]">
            COLLSCAN is not always bad. For small collections or queries
            returning most documents, scanning the collection may be more
            efficient than using an index.
          </p>
        </div>
      </section>

      {/* 5. IXSCAN */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">5. IXSCAN (Index Scan)</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          IXSCAN means MongoDB uses an index to find matching documents.
        </p>

        <CodeBlock
          code={`// Create an index
db.users.createIndex({
  age: 1
})

// Execute query
db.users.find({
  age: 19
}).explain("executionStats")`}
        />

        <CodeBlock
          code={`{
  queryPlanner: {
    winningPlan: {
      stage: "FETCH",
      inputStage: {
        stage: "IXSCAN",
        keyPattern: {
          age: 1
        }
      }
    }
  }
}`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Here:
        </p>

        <ul className="list-disc space-y-2 pl-6 text-sm text-[var(--text-secondary)]">
          <li>IXSCAN means MongoDB searches through index entries.</li>
          <li>FETCH means MongoDB retrieves the actual matching documents.</li>
          <li>keyPattern identifies the indexed field.</li>
        </ul>
      </section>

      {/* 6. COLLSCAN vs IXSCAN */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">6. COLLSCAN vs IXSCAN</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[440px] text-left text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">Feature</th>
                <th className="p-3">COLLSCAN</th>
                <th className="p-3">IXSCAN</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              <tr>
                <td className="p-3">Meaning</td>
                <td className="p-3">Collection Scan</td>
                <td className="p-3">Index Scan</td>
              </tr>
              <tr>
                <td className="p-3">Search</td>
                <td className="p-3">Scans collection records</td>
                <td className="p-3">Searches index entries</td>
              </tr>
              <tr>
                <td className="p-3">Index</td>
                <td className="p-3">Not used for the scan</td>
                <td className="p-3">Uses an index</td>
              </tr>
              <tr>
                <td className="p-3">Performance</td>
                <td className="p-3">Can be expensive for selective queries</td>
                <td className="p-3">Can be efficient for suitable queries</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm text-[var(--text-secondary)]">
          The best execution plan depends on the query and collection data.
          IXSCAN is not automatically faster in every situation.
        </p>
      </section>

      {/* 7. Execution Stats */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">7. Understanding Execution Statistics</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          executionStats provides important metrics that help us understand
          how efficiently a query executes.
        </p>

        <CodeBlock
          code={`db.users.find({
  age: 19
}).explain("executionStats")`}
        />

        <h3 className="font-medium">Important Fields</h3>

        <div className="space-y-3">
          {[
            {
              name: "executionTimeMillis",
              description:
                "Approximate execution time of the winning plan in milliseconds.",
            },
            {
              name: "nReturned",
              description:
                "Number of documents returned by the winning plan.",
            },
            {
              name: "totalDocsExamined",
              description:
                "Total number of documents examined during execution.",
            },
            {
              name: "totalKeysExamined",
              description:
                "Total number of index entries examined during execution.",
            },
            {
              name: "winningPlan",
              description:
                "The execution plan selected by MongoDB's query planner.",
            },
          ].map((item, index) => (
            <div
              key={item.name}
              className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-2"
            >
              <p className="font-semibold text-[var(--primary-color)]">
                {index + 1}. {item.name}
              </p>
              <p className="text-sm leading-6 text-[var(--text-secondary)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Understanding Metrics */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">8. Understanding Query Metrics</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Consider this simplified execution statistics example.
        </p>

        <CodeBlock
          code={`{
  executionStats: {
    executionSuccess: true,
    nReturned: 5,
    executionTimeMillis: 2,
    totalKeysExamined: 5,
    totalDocsExamined: 5
  }
}`}
        />

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-left text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">Metric</th>
                <th className="p-3">Value</th>
                <th className="p-3">Meaning</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              <tr>
                <td className="p-3">nReturned</td>
                <td className="p-3">5</td>
                <td className="p-3">5 documents returned</td>
              </tr>
              <tr>
                <td className="p-3">totalKeysExamined</td>
                <td className="p-3">5</td>
                <td className="p-3">5 index entries checked</td>
              </tr>
              <tr>
                <td className="p-3">totalDocsExamined</td>
                <td className="p-3">5</td>
                <td className="p-3">5 documents checked</td>
              </tr>
              <tr>
                <td className="p-3">executionTimeMillis</td>
                <td className="p-3">2</td>
                <td className="p-3">2 milliseconds reported</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          These are illustrative values, not guaranteed performance targets.
          Execution time can vary depending on hardware, cache, data size, and
          system load.
        </p>
      </section>

      {/* 9. Examining Documents */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">9. totalDocsExamined vs nReturned</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Comparing these two values helps us understand how many documents
          MongoDB had to examine to return the required results.
        </p>

        <CodeBlock
          code={`{
  nReturned: 10,
  totalDocsExamined: 10000
}`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB examined 10,000 documents but returned only 10. This can
          indicate that the query is examining many unnecessary documents.
        </p>

        <h3 className="font-medium">A More Efficient Example</h3>

        <CodeBlock
          code={`{
  nReturned: 10,
  totalDocsExamined: 10
}`}
        />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Here, MongoDB examined 10 documents and returned 10. This is
          generally a better ratio for a selective query.
        </p>
      </section>

      {/* 10. totalKeysExamined */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">10. totalKeysExamined</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          This field tells us how many index entries MongoDB examined while
          executing the query.
        </p>

        <CodeBlock
          code={`{
  nReturned: 5,
  totalKeysExamined: 1000,
  totalDocsExamined: 5
}`}
        />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          MongoDB examined 1,000 index entries but fetched only 5 documents.
          This can happen when an index scan examines a broad range of keys.
        </p>
      </section>

      {/* 11. Covered Query */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">11. Covered Query</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          A Covered Query is a query where MongoDB can find all matching
          documents and return the requested fields using only the index,
          without fetching the original documents.
        </p>

        <p className="font-medium">Example:</p>

        <CodeBlock
          code={`// Create a compound index
db.users.createIndex({
  name: 1,
  age: 1
})

// Covered query
db.users.find(
  { name: "Mayur" },
  { _id: 0, name: 1, age: 1 }
).explain("executionStats")`}
        />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          The query filters using name and returns name and age. Both fields
          are available in the index, and _id is explicitly excluded.
        </p>

        <div className="rounded-xl border border-[var(--primary-color)] bg-[var(--primary-soft)] p-4 space-y-2">
          <p className="font-semibold text-[var(--primary-color)]">
            Important
          </p>
          <p className="text-sm leading-6 text-[var(--text-secondary)]">
            A fully covered query typically has totalDocsExamined equal to 0
            and does not require a FETCH stage. The query must also satisfy
            the requirements for index-only execution.
          </p>
        </div>
      </section>

      {/* 12. Winning Plan */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">12. Winning Plan</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB's query planner may consider multiple execution plans and
          selects one as the winning plan.
        </p>

        <CodeBlock
          code={`{
  queryPlanner: {
    winningPlan: {
      stage: "FETCH",
      inputStage: {
        stage: "IXSCAN",
        keyPattern: {
          age: 1
        }
      }
    }
  }
}`}
        />

        <p className="font-medium">Important terms:</p>

        <ul className="list-disc space-y-2 pl-6 text-sm text-[var(--text-secondary)]">
          <li><strong>winningPlan:</strong> The plan selected by the query planner.</li>
          <li><strong>IXSCAN:</strong> Reads index entries.</li>
          <li><strong>FETCH:</strong> Retrieves matching documents.</li>
          <li><strong>COLLSCAN:</strong> Scans the collection.</li>
        </ul>
      </section>

      {/* 13. Rejected Plans */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">13. Rejected Plans</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB may consider multiple candidate plans for a query. Plans
          that are not selected are called rejected plans.
        </p>

        <CodeBlock
          code={`db.users.find({
  age: 19
}).explain("allPlansExecution")`}
        />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          allPlansExecution provides information about the winning plan and
          trial-period execution statistics for candidate plans.
        </p>
      </section>

      {/* 14. Improving Performance */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">14. Improving Query Performance</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          If explain() shows that a query is examining too many documents or
          index entries, we should investigate the query and its indexes.
        </p>

        <h3 className="font-medium">Step 1: Check Query Without Index</h3>

        <CodeBlock
          code={`db.users.find({
  email: "mayur@gmail.com"
}).explain("executionStats")`}
        />

        <h3 className="font-medium">Step 2: Create an Index</h3>

        <CodeBlock
          code={`db.users.createIndex({
  email: 1
})`}
        />

        <h3 className="font-medium">Step 3: Check Again</h3>

        <CodeBlock
          code={`db.users.find({
  email: "mayur@gmail.com"
}).explain("executionStats")`}
        />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Compare the winning plan, totalKeysExamined, totalDocsExamined, and
          execution time. Make sure the new index actually benefits the
          workload before keeping it.
        </p>
      </section>

      {/* 15. Execution Stages */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">15. Common Execution Stages</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[460px] text-left text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">Stage</th>
                <th className="p-3">Meaning</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              {[
                ["COLLSCAN", "Scans documents in a collection."],
                ["IXSCAN", "Scans index entries."],
                ["FETCH", "Retrieves matching documents."],
                ["SORT", "Performs a sort operation."],
                ["LIMIT", "Limits the number of returned results."],
                ["PROJECTION", "Returns only requested fields."],
                ["SHARD_MERGE", "Merges results from multiple shards."],
              ].map(([stage, meaning]) => (
                <tr key={stage}>
                  <td className="p-3 font-semibold text-[var(--primary-color)]">
                    {stage}
                  </td>
                  <td className="p-3 text-[var(--text-secondary)]">
                    {meaning}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-[var(--text-secondary)]">
          Execution stages can differ depending on the query, MongoDB version,
          and execution engine.
        </p>
      </section>

      {/* 16. Node.js */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">16. explain() in Node.js</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The MongoDB Node.js driver also supports explain() on find queries.
        </p>

        <CodeBlock
          code={`import { MongoClient } from "mongodb";

const client = new MongoClient(
  process.env.MONGODB_URI
);

async function main() {
  await client.connect();

  const db = client.db("myDatabase");
  const users = db.collection("users");

  const result = await users
    .find({ age: 19 })
    .explain("executionStats");

  console.log(result);

  await client.close();
}

main().catch(console.error);`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          The result is a JavaScript object containing the query planner and
          execution statistics.
        </p>
      </section>

      {/* 17. Important Points */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">17. Important Points</h2>

        <div className="space-y-3">
          {[
            "explain() is used to inspect MongoDB query execution plans.",
            "queryPlanner shows the selected plan and planning information.",
            "executionStats executes the winning plan and returns execution statistics.",
            "allPlansExecution provides additional information about candidate plans.",
            "COLLSCAN means collection scan.",
            "IXSCAN means index scan.",
            "FETCH retrieves matching documents.",
            "nReturned tells how many documents were returned.",
            "totalDocsExamined tells how many documents were examined.",
            "totalKeysExamined tells how many index entries were examined.",
            "executionTimeMillis reports execution time in milliseconds.",
            "A covered query can return results using only an index.",
            "winningPlan is the execution plan selected by MongoDB.",
            "A high number of examined documents compared with returned documents can indicate an inefficient query.",
            "IXSCAN is not always faster than COLLSCAN.",
          ].map((point, index) => (
            <div
              key={index}
              className="flex gap-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-3"
            >
              <span className="font-semibold text-[var(--primary-color)]">
                {index + 1}.
              </span>
              <p className="text-sm leading-6 text-[var(--text-secondary)]">
                {point}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Interview Questions */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">18. Interview Questions</h2>

        <div className="space-y-3">
          {[
            {
              q: "What is Explain Execution Plan in MongoDB?",
              a: "It shows how MongoDB plans and executes a query, including index usage and execution statistics.",
            },
            {
              q: "What is explain()?",
              a: "explain() is a MongoDB method used to inspect the execution plan of a query.",
            },
            {
              q: "What are the three explain verbosity modes?",
              a: "queryPlanner, executionStats, and allPlansExecution.",
            },
            {
              q: "What is COLLSCAN?",
              a: "COLLSCAN means MongoDB scans documents in the collection to find matching results.",
            },
            {
              q: "What is IXSCAN?",
              a: "IXSCAN means MongoDB scans index entries to find matching documents.",
            },
            {
              q: "What is the difference between COLLSCAN and IXSCAN?",
              a: "COLLSCAN scans the collection, whereas IXSCAN searches through an index.",
            },
            {
              q: "What is FETCH?",
              a: "FETCH retrieves the actual matching documents after MongoDB finds their locations, often through an index.",
            },
            {
              q: "What is executionStats?",
              a: "It provides statistics about the execution of the winning query plan, including examined documents and keys.",
            },
            {
              q: "What is nReturned?",
              a: "It represents the number of documents returned by the winning execution plan.",
            },
            {
              q: "What is totalDocsExamined?",
              a: "It represents the total number of documents examined during query execution.",
            },
            {
              q: "What is totalKeysExamined?",
              a: "It represents the total number of index entries examined during query execution.",
            },
            {
              q: "What is executionTimeMillis?",
              a: "It reports the execution time of the winning plan in milliseconds.",
            },
            {
              q: "What is a Covered Query?",
              a: "A query that can find matching documents and return requested fields using only an index without fetching the original documents.",
            },
            {
              q: "What is winningPlan?",
              a: "It is the execution plan selected by MongoDB's query planner.",
            },
            {
              q: "What are rejected plans?",
              a: "They are candidate execution plans considered by the query planner but not selected as the winning plan.",
            },
            {
              q: "Does IXSCAN always mean a query is fast?",
              a: "No. MongoDB may examine many index entries, fetch many documents, or perform additional operations. The complete execution plan matters.",
            },
            {
              q: "How can we improve a slow MongoDB query?",
              a: "Use explain('executionStats'), inspect examined documents and keys, create suitable indexes, and test the query again.",
            },
          ].map((item, index) => (
            <details
              key={index}
              className="group rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 font-medium">
                <span>
                  <span className="mr-2 text-[var(--primary-color)]">
                    Q{index + 1}.
                  </span>
                  {item.q}
                </span>

                <span className="text-[var(--primary-color)] transition-transform group-open:rotate-180">
                  ↓
                </span>
              </summary>

              <div className="border-t border-[var(--border-color)] px-4 py-4 text-sm leading-7 text-[var(--text-secondary)]">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Module Completion */}
      <section className="rounded-xl border border-[var(--primary-color)] bg-[var(--primary-soft)] p-5 space-y-2">
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--primary-color)]">
          MODULE COMPLETED
        </p>

        <h2 className="text-xl font-bold">MongoDB Fundamentals & Indexing</h2>

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          You have completed all 23 topics in the MongoDB module, from
          Introduction to MongoDB to Explain Execution Plan.
        </p>
      </section>
    </div>
  );
}