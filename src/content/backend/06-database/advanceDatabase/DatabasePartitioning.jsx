import CodeBlock from "../../../../components/common/CodeBlock";

function DatabasePartitioning() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          DATABASE PERFORMANCE / PARTITIONING
        </p>
        <h1 className="mt-2 text-3xl font-bold">Database Partitioning</h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          Database Partitioning is a technique of dividing a large table
          into smaller parts called partitions while keeping them logically
          as one table.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. How Partitioning Works</h2>
        <p className="text-[var(--text-secondary)]">
          Instead of managing one huge table, the database divides its
          data into smaller partitions based on a partition key.
        </p>

        <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-3 text-center">
          <div className="rounded-lg bg-[var(--bg-hover)] p-3 font-semibold">
            Orders Table
          </div>
          <div className="text-[var(--accent-color)]">↓</div>
          <div className="grid grid-cols-3 gap-2">
            {["Partition 1", "Partition 2", "Partition 3"].map((item) => (
              <div
                key={item}
                className="rounded-lg bg-[var(--bg-hover)] p-3 text-sm"
              >
                <p className="font-semibold">{item}</p>
                <p className="mt-1 text-xs text-[var(--text-secondary)]">
                  Subset of rows
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Types of Partitioning</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>
            <strong>Range Partitioning:</strong> Divides data based on ranges
            of values, such as dates or numbers.
          </li>
          <li>
            <strong>List Partitioning:</strong> Divides data based on specific
            values, such as country or category.
          </li>
          <li>
            <strong>Hash Partitioning:</strong> Uses a hash function to
            distribute rows across partitions.
          </li>
          <li>
            <strong>Composite Partitioning:</strong> Combines two partitioning
            methods, such as range and hash.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Example</h2>
        <p className="text-[var(--text-secondary)]">
          Suppose an orders table contains millions of records. We can
          partition it by order date.
        </p>

        <CodeBlock
          code={`Orders Table

Partition 1 → Orders from 2024
Partition 2 → Orders from 2025
Partition 3 → Orders from 2026`}
        />

        <p className="text-[var(--text-secondary)]">
          When a query searches for orders from 2026, the database may
          scan only the relevant partition. This is called partition pruning.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Benefits</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>Makes large tables easier to manage.</li>
          <li>Can improve queries that target specific partitions.</li>
          <li>Makes archiving and deleting old data easier.</li>
          <li>Can simplify maintenance operations.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Partitioning vs Sharding</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="p-3 text-left">Partitioning</th>
                <th className="p-3 text-left">Sharding</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Divides a table into smaller parts.</td>
                <td className="p-3">Distributes data across servers.</td>
              </tr>
              <tr>
                <td className="p-3">Usually within one database system.</td>
                <td className="p-3">Uses multiple database servers.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Interview Questions</h2>

        <details className="rounded-lg border border-[var(--border-color)] p-3">
          <summary className="cursor-pointer font-medium">
            What is Database Partitioning?
          </summary>
          <p className="mt-2 text-[var(--text-secondary)]">
            It is a technique of dividing a large table into smaller,
            manageable parts called partitions.
          </p>
        </details>

        <details className="rounded-lg border border-[var(--border-color)] p-3">
          <summary className="cursor-pointer font-medium">
            What is Partition Pruning?
          </summary>
          <p className="mt-2 text-[var(--text-secondary)]">
            It is an optimization where the database skips irrelevant
            partitions and scans only the required ones.
          </p>
        </details>

        <details className="rounded-lg border border-[var(--border-color)] p-3">
          <summary className="cursor-pointer font-medium">
            What is the difference between Partitioning and Sharding?
          </summary>
          <p className="mt-2 text-[var(--text-secondary)]">
            Partitioning divides data into smaller parts, while sharding
            distributes data across multiple database servers.
          </p>
        </details>
      </section>
    </div>
  );
}

export default DatabasePartitioning;