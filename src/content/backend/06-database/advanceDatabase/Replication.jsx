import CodeBlock from "../../../../components/common/CodeBlock";

function Replication() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          MONGODB DATABASE / REPLICATION
        </p>
        <h1 className="mt-2 text-3xl font-bold">Replication</h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          Replication is the process of maintaining multiple copies of
          the same data across different MongoDB servers to provide
          high availability and data redundancy.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What is Replica Set?</h2>
        <p className="text-[var(--text-secondary)]">
          A Replica Set is a group of MongoDB servers that maintain
          the same dataset. One node acts as Primary and other nodes
          act as Secondaries.
        </p>

        <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] p-4 text-center space-y-3">
          <div className="mx-auto w-fit rounded-lg bg-[var(--bg-hover)] px-5 py-3">
            <p className="font-semibold">Primary Node</p>
            <p className="text-sm text-[var(--text-secondary)]">Handles writes</p>
          </div>
          <div className="text-[var(--accent-color)]">↓ Replication</div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg bg-[var(--bg-hover)] p-3">
              <p className="font-semibold">Secondary 1</p>
              <p className="text-sm text-[var(--text-secondary)]">Data copy</p>
            </div>
            <div className="rounded-lg bg-[var(--bg-hover)] p-3">
              <p className="font-semibold">Secondary 2</p>
              <p className="text-sm text-[var(--text-secondary)]">Data copy</p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. How Replication Works</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>Applications normally send write operations to the Primary.</li>
          <li>Primary records changes in its <code>oplog</code>.</li>
          <li>Secondary nodes copy and apply those changes.</li>
          <li>All members work to maintain the same dataset.</li>
          <li>If the Primary fails, an eligible Secondary can be elected as the new Primary.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Types of Replica Set Members</h2>
        <CodeBlock
          code={`Primary    -> Accepts writes
Secondary  -> Replicates data
Arbiter    -> Votes in elections
              but does not store data`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Failover</h2>
        <p className="text-[var(--text-secondary)]">
          Failover happens when the Primary becomes unavailable.
          The remaining eligible members hold an election to choose
          a new Primary.
        </p>
        <CodeBlock
          code={`Primary Node Fails
        ↓
Election Starts
        ↓
Eligible Secondary Selected
        ↓
New Primary Becomes Active`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Important Points</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>Replication provides high availability and redundancy.</li>
          <li>A Replica Set maintains multiple copies of data.</li>
          <li>Only the Primary accepts writes by default.</li>
          <li>Secondaries replicate changes using the oplog.</li>
          <li>Automatic elections help recover from Primary failure.</li>
          <li>Replication is not a replacement for backups.</li>
          <li>Secondary reads may return slightly outdated data.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Interview Questions</h2>

        <details className="rounded-lg border border-[var(--border-color)] p-3">
          <summary className="cursor-pointer font-medium">
            What is MongoDB Replication?
          </summary>
          <p className="mt-2 text-[var(--text-secondary)]">
            It maintains multiple copies of data across MongoDB servers
            for high availability and redundancy.
          </p>
        </details>

        <details className="rounded-lg border border-[var(--border-color)] p-3">
          <summary className="cursor-pointer font-medium">
            What is a Replica Set?
          </summary>
          <p className="mt-2 text-[var(--text-secondary)]">
            A group of MongoDB instances that maintain the same dataset.
          </p>
        </details>

        <details className="rounded-lg border border-[var(--border-color)] p-3">
          <summary className="cursor-pointer font-medium">
            What happens when the Primary node fails?
          </summary>
          <p className="mt-2 text-[var(--text-secondary)]">
            Eligible remaining members hold an election to select a new Primary.
          </p>
        </details>
      </section>
    </div>
  );
}

export default Replication;