import CodeBlock from "../../../../components/common/CodeBlock";

function Sharding() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          MONGODB DATABASE / SHARDING
        </p>
        <h1 className="mt-2 text-3xl font-bold">Sharding</h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          Sharding is a technique used to distribute large amounts of
          data across multiple servers called shards. It helps MongoDB
          handle large datasets and high traffic.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. How Sharding Works</h2>
        <p className="text-[var(--text-secondary)]">
          Instead of storing all data on one server, MongoDB distributes
          data across multiple shards.
        </p>

        <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-3 text-center">
          <div className="rounded-lg bg-[var(--bg-hover)] p-3 font-semibold">
            Application
          </div>
          <div className="text-[var(--accent-color)]">↓</div>
          <div className="rounded-lg bg-[var(--bg-hover)] p-3 font-semibold">
            Mongos Router
          </div>
          <div className="text-[var(--accent-color)]">↓</div>
          <div className="grid grid-cols-3 gap-2">
            {["Shard 1", "Shard 2", "Shard 3"].map((shard) => (
              <div key={shard} className="rounded-lg bg-[var(--bg-hover)] p-3">
                <p className="font-semibold">{shard}</p>
                <p className="text-xs text-[var(--text-secondary)]">Data subset</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-[var(--text-secondary)]">
            Config servers maintain cluster metadata.
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Main Components</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li><strong>Shard:</strong> Stores a portion of the total data. In production, each shard is generally a replica set.</li>
          <li><strong>Mongos:</strong> Router that directs application requests to the correct shard or shards.</li>
          <li><strong>Config Servers:</strong> Store metadata about the sharded cluster.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Shard Key</h2>
        <p className="text-[var(--text-secondary)]">
          A shard key is a field or combination of fields used by MongoDB
          to distribute documents across shards.
        </p>
        <CodeBlock
          code={`// Example shard key
{ userId: "hashed" }

// Sharding is based on the userId field`}
        />
        <p className="text-sm text-[var(--text-secondary)]">
          Choosing a good shard key is important for balanced data
          distribution and efficient queries.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Types of Sharding</h2>
        <CodeBlock
          code={`1. Range-Based Sharding
   Distributes data according to shard key ranges.

2. Hashed Sharding
   Uses a hash of the shard key for distribution.`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Replication vs Sharding</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="p-3 text-left">Replication</th>
                <th className="p-3 text-left">Sharding</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Maintains data copies.</td>
                <td className="p-3">Distributes data across shards.</td>
              </tr>
              <tr>
                <td className="p-3">Improves availability.</td>
                <td className="p-3">Supports horizontal scaling.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Important Points</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>Sharding distributes data across multiple servers.</li>
          <li>It supports horizontal scaling.</li>
          <li>Shard key determines how data is distributed.</li>
          <li>Mongos routes queries to the appropriate shards.</li>
          <li>Config servers maintain cluster metadata.</li>
          <li>A poor shard key can cause unbalanced data distribution.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Interview Questions</h2>
        <details className="rounded-lg border border-[var(--border-color)] p-3">
          <summary className="cursor-pointer font-medium">
            What is Sharding?
          </summary>
          <p className="mt-2 text-[var(--text-secondary)]">
            Sharding distributes data across multiple servers to support
            large datasets and horizontal scaling.
          </p>
        </details>

        <details className="rounded-lg border border-[var(--border-color)] p-3">
          <summary className="cursor-pointer font-medium">
            What is a Shard Key?
          </summary>
          <p className="mt-2 text-[var(--text-secondary)]">
            It is a field or combination of fields used to distribute
            documents across shards.
          </p>
        </details>

        <details className="rounded-lg border border-[var(--border-color)] p-3">
          <summary className="cursor-pointer font-medium">
            What is the role of Mongos?
          </summary>
          <p className="mt-2 text-[var(--text-secondary)]">
            Mongos acts as a query router between applications and shards.
          </p>
        </details>
      </section>
    </div>
  );
}

export default Sharding;