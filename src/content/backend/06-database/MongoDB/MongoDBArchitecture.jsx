import CodeBlock from "../../../../components/common/CodeBlock";

const MongoDBArchitecture = () => {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <div className="space-y-2">
        <p className="text-sm font-semibold tracking-wider text-[var(--primary-color)]">
          MONGODB / 02
        </p>
        <h1 className="text-3xl font-bold">MongoDB Architecture</h1>
        <p className="text-base leading-7 text-[var(--text-secondary)]">
          MongoDB architecture explains how applications communicate with
          MongoDB, how data is organized, and how MongoDB manages and stores
          data.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          1. Overview of MongoDB Architecture
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB follows a client-server architecture. The application sends
          database requests through a MongoDB driver, and the MongoDB server
          processes those requests.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-2">
          {[
            ["Client Application", "React / Frontend"],
            ["Backend Server", "Node.js + Express"],
            ["MongoDB Driver", "Communication with MongoDB"],
            ["MongoDB Server", "Processes database operations"],
            ["Database Storage", "Databases, Collections, Documents"],
          ].map(([title, description], index) => (
            <div key={title}>
              <div
                className={`rounded-lg border p-3 text-center ${
                  index === 3
                    ? "border-[var(--primary-color)] bg-[var(--primary-soft)]"
                    : "border-[var(--border-color)] bg-[var(--bg-tertiary)]"
                }`}
              >
                <h3 className="font-semibold">{title}</h3>
                <p className="text-xs text-[var(--text-secondary)]">
                  {description}
                </p>
              </div>

              {index !== 4 && (
                <div className="py-1 text-center text-[var(--primary-color)]">
                  ↓
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          The driver handles communication between the backend application and
          MongoDB server.
        </p>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. MongoDB Data Organization</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB organizes data using three main levels: Database, Collection,
          and Document.
        </p>

        <CodeBlock
          language="text"
          code={`MongoDB Server
      |
      |-- Database: myApp
              |
              |-- Collection: users
              |       |
              |       |-- Document 1
              |       |-- Document 2
              |       |-- Document 3
              |
              |-- Collection: products
                      |
                      |-- Document 1
                      |-- Document 2`}
        />

        <div className="grid gap-3 sm:grid-cols-3">
          {[
            ["Database", "Contains related collections."],
            ["Collection", "Contains related documents."],
            ["Document", "Contains actual data as field-value pairs."],
          ].map(([title, description]) => (
            <div
              key={title}
              className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-2"
            >
              <h3 className="font-semibold text-[var(--primary-color)]">
                {title}
              </h3>
              <p className="text-sm leading-6 text-[var(--text-secondary)]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. MongoDB Server Components</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB uses different internal components to process queries, manage
          storage, and maintain data.
        </p>

        <div className="space-y-3">
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-2">
            <h3 className="font-semibold">1. Query Processor</h3>
            <p className="text-sm leading-6 text-[var(--text-secondary)]">
              Handles incoming database queries, selects an appropriate query
              execution plan, and coordinates query execution.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-2">
            <h3 className="font-semibold">2. Storage Engine</h3>
            <p className="text-sm leading-6 text-[var(--text-secondary)]">
              Manages how data is stored, retrieved, and maintained on disk and
              in memory.
            </p>
            <p className="text-sm text-[var(--primary-color)]">
              Default Storage Engine: WiredTiger
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-2">
            <h3 className="font-semibold">3. Replication</h3>
            <p className="text-sm leading-6 text-[var(--text-secondary)]">
              Maintains multiple copies of data across different MongoDB servers
              using replica sets.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-2">
            <h3 className="font-semibold">4. Sharding</h3>
            <p className="text-sm leading-6 text-[var(--text-secondary)]">
              Distributes data across multiple machines to support horizontal
              scaling.
            </p>
          </div>
        </div>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. WiredTiger Storage Engine</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          WiredTiger is the default storage engine in MongoDB. It is responsible
          for managing how database data is stored and accessed.
        </p>

        <p className="font-medium">Important responsibilities:</p>

        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Manages data storage on disk.</li>
          <li>Uses memory caching to improve performance.</li>
          <li>Supports document-level concurrency control.</li>
          <li>Supports compression to reduce storage usage.</li>
          <li>Uses checkpoints and journaling for durability and recovery.</li>
        </ul>

        <CodeBlock
          language="text"
          code={`MongoDB Server
      |
      |-- Query Processing
      |
      |-- WiredTiger Storage Engine
              |
              |-- Memory Cache
              |
              |-- Data Files
              |
              |-- Journal Files
              |
              |-- Checkpoints`}
        />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          You do not need to manually manage these internal components during
          normal CRUD operations.
        </p>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          5. Replication and Replica Sets
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Replication means maintaining multiple copies of the same data across
          multiple MongoDB servers.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB uses a <strong>Replica Set</strong> to provide redundancy and
          automatic failover.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-3">
          <div className="rounded-lg border border-[var(--primary-color)] bg-[var(--primary-soft)] p-3 text-center">
            <h3 className="font-semibold">Primary Node</h3>
            <p className="text-xs text-[var(--text-secondary)]">
              Receives writes
            </p>
          </div>

          <div className="text-center text-[var(--primary-color)]">
            ↓ Replication
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-tertiary)] p-3 text-center">
              <h3 className="font-semibold">Secondary 1</h3>
              <p className="text-xs text-[var(--text-secondary)]">
                Replicated data
              </p>
            </div>
            <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-tertiary)] p-3 text-center">
              <h3 className="font-semibold">Secondary 2</h3>
              <p className="text-xs text-[var(--text-secondary)]">
                Replicated data
              </p>
            </div>
          </div>
        </div>

        <p className="leading-7 text-[var(--text-secondary)]">
          If the primary node fails, eligible secondary members can participate
          in an election to select a new primary.
        </p>

        <CodeBlock
          language="text"
          code={`Replica Set
    |
    |-- Primary
    |      |-- Handles writes
    |
    |-- Secondary 1
    |      |-- Replicates data
    |
    |-- Secondary 2
           |-- Replicates data`}
        />

        <p className="text-sm text-[var(--primary-color)]">
          Important: Replication provides high availability, not horizontal data
          distribution.
        </p>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Sharding</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Sharding is a technique used to distribute a large dataset across
          multiple machines called shards.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          Each shard stores a portion of the total data. MongoDB uses a shard
          key to distribute documents across shards.
        </p>

        <CodeBlock
          language="text"
          code={`MongoDB Sharded Cluster
          |
          |-- Shard 1
          |      |-- Part of the data
          |
          |-- Shard 2
          |      |-- Part of the data
          |
          |-- Shard 3
                 |-- Part of the data`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-2">
          <h3 className="font-semibold">Important Components</h3>

          <p className="text-sm leading-6 text-[var(--text-secondary)]">
            <strong className="text-[var(--text-primary)]">Shards:</strong>{" "}
            Store portions of the sharded data.
          </p>

          <p className="text-sm leading-6 text-[var(--text-secondary)]">
            <strong className="text-[var(--text-primary)]">mongos:</strong> Acts
            as a query router between applications and shards.
          </p>

          <p className="text-sm leading-6 text-[var(--text-secondary)]">
            <strong className="text-[var(--text-primary)]">
              Config Servers:
            </strong>{" "}
            Store metadata and configuration information about the cluster.
          </p>
        </div>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Replication vs Sharding</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[450px] text-sm text-left">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">Replication</th>
                <th className="p-3">Sharding</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              {[
                [
                  "Maintains multiple copies of data.",
                  "Distributes data across machines.",
                ],
                ["Provides redundancy.", "Provides horizontal scalability."],
                ["Uses replica sets.", "Uses sharded clusters."],
                ["Primary and secondary nodes.", "Multiple shards."],
              ].map(([replication, sharding]) => (
                <tr
                  key={replication}
                  className="border-t border-[var(--border-color)]"
                >
                  <td className="p-3">{replication}</td>
                  <td className="p-3">{sharding}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. How a MongoDB Query Works</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Let's understand what happens when a backend application requests user
          data from MongoDB.
        </p>

        <CodeBlock
          language="javascript"
          code={`const user = await db
  .collection("users")
  .findOne({ email: "mayur@example.com" });`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-2">
          {[
            "Backend sends a query through the MongoDB driver.",
            "MongoDB server receives the request.",
            "Query processor determines how to execute the query.",
            "Storage engine retrieves the required data.",
            "MongoDB returns the result to the backend.",
          ].map((step, index) => (
            <div key={step}>
              <div className="rounded-lg bg-[var(--bg-tertiary)] p-3 text-sm leading-6">
                <span className="mr-2 font-semibold text-[var(--primary-color)]">
                  {index + 1}.
                </span>
                {step}
              </div>
              {index !== 4 && (
                <div className="py-1 text-center text-[var(--primary-color)]">
                  ↓
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Interview Questions */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold">Interview Questions</h2>
          <p className="mt-1 text-sm text-[var(--text-secondary)]">
            Click a question to reveal its answer.
          </p>
        </div>

        {[
          {
            q: "What architecture does MongoDB follow?",
            a: "MongoDB follows a client-server architecture. Applications communicate with MongoDB through database drivers.",
          },
          {
            q: "What are the three main levels of MongoDB data organization?",
            a: "Database, Collection, and Document.",
          },
          {
            q: "What is a storage engine in MongoDB?",
            a: "A storage engine manages how MongoDB stores, retrieves, and maintains data.",
          },
          {
            q: "What is WiredTiger?",
            a: "WiredTiger is MongoDB's default storage engine. It supports caching, compression, concurrency control, and journaling.",
          },
          {
            q: "What is replication in MongoDB?",
            a: "Replication maintains multiple copies of data across MongoDB servers using replica sets.",
          },
          {
            q: "What is a Replica Set?",
            a: "A Replica Set is a group of MongoDB instances that maintain the same dataset. It typically contains one primary and multiple secondary members.",
          },
          {
            q: "What happens if the primary node fails?",
            a: "Eligible secondary members can participate in an election to select a new primary.",
          },
          {
            q: "What is sharding in MongoDB?",
            a: "Sharding distributes data across multiple machines to support horizontal scalability.",
          },
          {
            q: "What is the difference between replication and sharding?",
            a: "Replication creates multiple copies of data for redundancy, whereas sharding distributes different portions of data across multiple machines.",
          },
          {
            q: "What is mongos?",
            a: "mongos is a query router that directs application requests to the appropriate shards in a sharded cluster.",
          },
          {
            q: "What is a shard key?",
            a: "A shard key is a field or combination of fields used to distribute documents across shards.",
          },
          {
            q: "What are MongoDB Config Servers?",
            a: "Config Servers store metadata and configuration information about a sharded cluster.",
          },
        ].map((item, index) => (
          <details
            key={index}
            className="group overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)]"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 font-medium transition-colors hover:bg-[var(--bg-tertiary)]">
              <span>
                {index + 1}. {item.q}
              </span>
              <span className="shrink-0 text-lg text-[var(--primary-color)] transition-transform group-open:rotate-45">
                +
              </span>
            </summary>

            <div className="border-t border-[var(--border-color)] px-4 py-4 text-sm leading-7 text-[var(--text-secondary)]">
              {item.a}
            </div>
          </details>
        ))}
      </section>
    </div>
  );
};

export default MongoDBArchitecture;
