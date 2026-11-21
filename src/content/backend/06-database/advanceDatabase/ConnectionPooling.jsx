import CodeBlock from "../../../../components/common/CodeBlock";

function ConnectionPooling() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          DATABASE PERFORMANCE / CONNECTION POOLING
        </p>
        <h1 className="mt-2 text-3xl font-bold">Connection Pooling</h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          Connection Pooling is a technique that maintains a pool of
          reusable database connections instead of creating a new
          connection for every request.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. Why Connection Pooling?</h2>
        <p className="text-[var(--text-secondary)]">
          Creating a new database connection for every request takes
          time and consumes resources. Connection pooling solves this
          by reusing existing connections.
        </p>

        <CodeBlock
          code={`Without Pooling:

Request 1 → Create Connection → Query → Close
Request 2 → Create Connection → Query → Close
Request 3 → Create Connection → Query → Close

With Pooling:

Request 1 ─┐
Request 2 ─┼→ Reusable Connection Pool → Database
Request 3 ─┘`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. How It Works</h2>
        <ol className="list-decimal space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>Application requests a database connection.</li>
          <li>Pool provides an available connection.</li>
          <li>Application executes database queries.</li>
          <li>After use, the connection returns to the pool.</li>
          <li>Another request can reuse that connection.</li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Example in Node.js</h2>
        <p className="text-[var(--text-secondary)]">
          Mongoose maintains a connection pool to reuse MongoDB
          connections.
        </p>
        <CodeBlock
          code={`import mongoose from "mongoose";

await mongoose.connect(process.env.MONGO_URI, {
  maxPoolSize: 10,
  minPoolSize: 2,
});`}
        />
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li><strong>maxPoolSize:</strong> Maximum number of connections in the pool.</li>
          <li><strong>minPoolSize:</strong> Minimum number of connections the driver tries to maintain.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Benefits</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>Reduces connection creation overhead.</li>
          <li>Improves application performance.</li>
          <li>Reuses existing database connections.</li>
          <li>Helps manage database resources efficiently.</li>
          <li>Limits excessive simultaneous connections.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Important Points</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>Connections are reused instead of recreated for every request.</li>
          <li>If all connections are busy, new requests may wait for an available connection.</li>
          <li>A very large pool can overload the database.</li>
          <li>Connections should be released back to the pool after use.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Interview Questions</h2>

        <details className="rounded-lg border border-[var(--border-color)] p-3">
          <summary className="cursor-pointer font-medium">
            What is Connection Pooling?
          </summary>
          <p className="mt-2 text-[var(--text-secondary)]">
            It is a technique that maintains reusable database connections
            to avoid creating a new connection for every request.
          </p>
        </details>

        <details className="rounded-lg border border-[var(--border-color)] p-3">
          <summary className="cursor-pointer font-medium">
            What is maxPoolSize?
          </summary>
          <p className="mt-2 text-[var(--text-secondary)]">
            It defines the maximum number of connections allowed in a
            connection pool.
          </p>
        </details>

        <details className="rounded-lg border border-[var(--border-color)] p-3">
          <summary className="cursor-pointer font-medium">
            What happens when all connections are busy?
          </summary>
          <p className="mt-2 text-[var(--text-secondary)]">
            New requests generally wait until a connection becomes
            available or a timeout occurs.
          </p>
        </details>
      </section>
    </div>
  );
}

export default ConnectionPooling;