import CodeBlock from "../../../../components/common/CodeBlock";

const ACIDProperties = () => {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">

      {/* Header */}
      <div className="space-y-2">
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          DATABASE FUNDAMENTALS / 14
        </p>
        <h1 className="text-3xl font-bold">ACID Properties</h1>
        <p className="text-base leading-7 text-[var(--text-secondary)]">
          ACID properties are a set of principles that ensure reliable
          database transactions. They help maintain data accuracy and
          consistency, even when errors or system failures occur.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What Is a Database Transaction?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          A transaction is a group of database operations treated as one
          logical unit of work.
        </p>
        <p className="leading-7 text-[var(--text-secondary)]">
          For example, when transferring money from one bank account to
          another, two operations are required:
        </p>

        <CodeBlock code={`Account A = ₹5000
Account B = ₹2000

Transfer ₹1000:

1. Deduct ₹1000 from Account A.
2. Add ₹1000 to Account B.

Final Balance:
Account A = ₹4000
Account B = ₹3000`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          Both operations must succeed together. If money is deducted
          but not added to the second account, the transaction must be
          rolled back.
        </p>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. What Are ACID Properties?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          ACID represents four properties that make database transactions
          reliable.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ["A", "Atomicity", "All operations succeed or none do."],
            ["C", "Consistency", "Transactions preserve database rules."],
            ["I", "Isolation", "Concurrent transactions do not interfere incorrectly."],
            ["D", "Durability", "Committed changes survive failures."],
          ].map(([letter, title, description]) => (
            <div key={letter} className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--accent-background)] text-2xl font-bold text-[var(--accent-color)]">
                  {letter}
                </span>
                <h3 className="font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Atomicity</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Atomicity means a transaction is treated as one indivisible unit.
          Either all its operations succeed, or none of them take effect.
        </p>

        <h3 className="font-semibold">Example: Money Transfer</h3>
        <CodeBlock code={`BEGIN TRANSACTION;

UPDATE accounts
SET balance = balance - 1000
WHERE id = 1;

UPDATE accounts
SET balance = balance + 1000
WHERE id = 2;

COMMIT;`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          If an operation fails, the application or database can roll back
          the transaction instead of leaving only part of the transfer
          applied.
        </p>

        <CodeBlock code={`BEGIN TRANSACTION;

UPDATE accounts
SET balance = balance - 1000
WHERE id = 1;

-- Suppose the next operation fails.

ROLLBACK;`} />

        <div className="rounded-xl border border-[var(--accent-color)] bg-[var(--accent-background)] p-4">
          <p className="text-sm leading-7 text-[var(--text-secondary)]">
            <strong className="text-[var(--text-primary)]">Remember:</strong>{" "}
            Atomicity = All or Nothing.
          </p>
        </div>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Consistency</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Consistency means a transaction must preserve the database's
          defined rules and constraints. A successful transaction takes
          the database from one valid state to another valid state.
        </p>

        <h3 className="font-semibold">Example: Account Balance</h3>
        <CodeBlock code={`CREATE TABLE accounts (
  id INT PRIMARY KEY,
  balance DECIMAL(10, 2)
    CHECK (balance >= 0)
);`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          The CHECK constraint prevents a negative account balance.
          If an operation violates this rule, the database rejects it.
        </p>

        <CodeBlock code={`UPDATE accounts
SET balance = -500
WHERE id = 1;

-- Rejected because balance cannot be negative.`} />

        <div className="rounded-xl border border-[var(--accent-color)] bg-[var(--accent-background)] p-4">
          <p className="text-sm leading-7 text-[var(--text-secondary)]">
            <strong className="text-[var(--text-primary)]">Remember:</strong>{" "}
            Consistency = Valid Data Before and After a Transaction.
          </p>
        </div>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Isolation</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Isolation means concurrent transactions should behave correctly
          without exposing intermediate changes in a way that causes
          incorrect results.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          Imagine two users trying to book the last available seat at the
          same time. Without proper concurrency control, both transactions
          might incorrectly book the same seat.
        </p>

        <CodeBlock code={`Transaction A:
Check seat availability -> Available

Transaction B:
Check seat availability -> Available

Transaction A:
Book seat

Transaction B:
Book the same seat

Problem:
Two users may get the same seat.`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          Database isolation mechanisms, such as locks and multiversion
          concurrency control (MVCC), help manage concurrent operations.
          Unique constraints can also prevent duplicate bookings.
        </p>

        <h3 className="font-semibold">SQL Isolation Levels</h3>
        <div className="space-y-3">
          {[
            ["READ UNCOMMITTED", "Can allow dirty reads. It provides the weakest isolation."],
            ["READ COMMITTED", "Prevents dirty reads, but repeated reads may return different committed values."],
            ["REPEATABLE READ", "Provides stronger consistency for repeated reads. Exact behavior depends on the database."],
            ["SERIALIZABLE", "Strongest standard isolation level. Concurrent transactions behave as if executed serially."],
          ].map(([title, description], index) => (
            <div key={title} className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
              <h3 className="font-semibold text-[var(--accent-color)]">
                {index + 1}. {title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Common Isolation Problems</h2>

        <div className="space-y-3">
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
            <h3 className="font-semibold">A. Dirty Read</h3>
            <p className="text-sm leading-7 text-[var(--text-secondary)]">
              A transaction reads data written by another transaction
              that has not yet committed.
            </p>
            <CodeBlock code={`Transaction A:
UPDATE accounts
SET balance = 5000
WHERE id = 1;
-- Not committed yet.

Transaction B:
SELECT balance
FROM accounts
WHERE id = 1;
-- Reads the uncommitted value.`} />
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
            <h3 className="font-semibold">B. Non-Repeatable Read</h3>
            <p className="text-sm leading-7 text-[var(--text-secondary)]">
              A transaction reads the same row twice but gets different
              committed values because another transaction updated it
              between the reads.
            </p>
            <CodeBlock code={`Transaction A:
SELECT balance FROM accounts WHERE id = 1;
-- Result: 1000

Transaction B:
UPDATE accounts SET balance = 2000 WHERE id = 1;
COMMIT;

Transaction A:
SELECT balance FROM accounts WHERE id = 1;
-- Result may now be 2000.`} />
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
            <h3 className="font-semibold">C. Phantom Read</h3>
            <p className="text-sm leading-7 text-[var(--text-secondary)]">
              A transaction runs the same query twice but gets a different
              set of rows because another transaction inserted or deleted
              matching rows.
            </p>
            <CodeBlock code={`Transaction A:
SELECT * FROM orders WHERE total > 1000;
-- Returns 3 rows.

Transaction B:
INSERT INTO orders (id, total)
VALUES (101, 1500);
COMMIT;

Transaction A:
SELECT * FROM orders WHERE total > 1000;
-- May now return 4 rows.`} />
          </div>
        </div>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Durability</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Durability means that once a transaction is successfully
          committed, its changes remain saved even if the database
          crashes or the system loses power.
        </p>

        <h3 className="font-semibold">Example</h3>
        <CodeBlock code={`BEGIN TRANSACTION;

UPDATE accounts
SET balance = balance - 1000
WHERE id = 1;

COMMIT;

-- Transaction is committed.
-- Its changes should survive a system crash.`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          Databases use mechanisms such as transaction logs, write-ahead
          logging, and recovery procedures to provide durability.
        </p>

        <div className="rounded-xl border border-[var(--accent-color)] bg-[var(--accent-background)] p-4">
          <p className="text-sm leading-7 text-[var(--text-secondary)]">
            <strong className="text-[var(--text-primary)]">Remember:</strong>{" "}
            Durability = Committed Changes Are Persisted.
          </p>
        </div>
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. COMMIT vs ROLLBACK</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          These commands control the result of a transaction.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
            <h3 className="font-semibold text-[var(--accent-color)]">COMMIT</h3>
            <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
              Permanently commits the transaction's changes according to
              the database's durability guarantees.
            </p>
            <CodeBlock code={`COMMIT;`} />
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
            <h3 className="font-semibold text-[var(--accent-color)]">ROLLBACK</h3>
            <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
              Cancels uncommitted changes made within the current
              transaction.
            </p>
            <CodeBlock code={`ROLLBACK;`} />
          </div>
        </div>
      </section>

      {/* 9 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Complete ACID Example</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Let's understand all four properties using a bank transfer.
        </p>

        <CodeBlock code={`BEGIN TRANSACTION;

-- Deduct money from sender
UPDATE accounts
SET balance = balance - 1000
WHERE id = 1;

-- Add money to receiver
UPDATE accounts
SET balance = balance + 1000
WHERE id = 2;

COMMIT;`} />

        <div className="space-y-3">
          {[
            ["Atomicity", "Both balance updates succeed together, or the transaction is rolled back."],
            ["Consistency", "Database constraints and business rules remain valid."],
            ["Isolation", "Concurrent transfers are controlled to prevent incorrect results."],
            ["Durability", "After COMMIT, the changes survive a system failure."],
          ].map(([title, description]) => (
            <div key={title} className="flex gap-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
              <span className="h-8 w-8 shrink-0 rounded-lg bg-[var(--accent-background)] text-center leading-8 font-bold text-[var(--accent-color)]">
                {title[0]}
              </span>
              <div>
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. ACID Properties in MongoDB</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB supports ACID transactions. Multi-document transactions
          allow multiple operations across documents and collections to
          commit or abort together.
        </p>

        <h3 className="font-semibold">MongoDB Transaction Example</h3>
        <CodeBlock code={`const session = await mongoose.startSession();

try {
  await session.withTransaction(async () => {
    await Account.updateOne(
      { _id: senderId },
      { $inc: { balance: -1000 } },
      { session }
    );

    await Account.updateOne(
      { _id: receiverId },
      { $inc: { balance: 1000 } },
      { session }
    );
  });
} finally {
  await session.endSession();
}`} />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          With <code>withTransaction()</code>, successful operations are
          committed together. If the transaction fails, it is aborted.
          MongoDB transactions require a replica set or sharded cluster;
          they are not supported on standalone deployments.
        </p>
      </section>

      {/* 11 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">11. Important Points</h2>
        <div className="rounded-xl border border-[var(--accent-color)] bg-[var(--accent-background)] p-4">
          <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-[var(--text-secondary)]">
            <li>ACID stands for Atomicity, Consistency, Isolation, and Durability.</li>
            <li>Atomicity follows the all-or-nothing principle.</li>
            <li>Consistency keeps database rules and constraints valid.</li>
            <li>Isolation controls the effects of concurrent transactions.</li>
            <li>Durability protects committed changes from system failures.</li>
            <li>COMMIT saves a transaction; ROLLBACK cancels uncommitted changes.</li>
            <li>MongoDB supports multi-document ACID transactions.</li>
          </ul>
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
            q: "What are ACID properties?",
            a: "ACID stands for Atomicity, Consistency, Isolation, and Durability. These properties help ensure reliable database transactions."
          },
          {
            q: "What is a database transaction?",
            a: "A transaction is a group of database operations treated as one logical unit of work."
          },
          {
            q: "What is Atomicity?",
            a: "Atomicity means all operations in a transaction succeed together, or none of them take effect."
          },
          {
            q: "What is Consistency?",
            a: "Consistency ensures that a successful transaction preserves the database's defined rules and constraints."
          },
          {
            q: "What is Isolation?",
            a: "Isolation ensures that concurrent transactions do not interfere in ways that produce incorrect results."
          },
          {
            q: "What is Durability?",
            a: "Durability means committed transaction changes survive system crashes and failures."
          },
          {
            q: "What is the difference between COMMIT and ROLLBACK?",
            a: "COMMIT successfully finishes a transaction and saves its changes. ROLLBACK cancels uncommitted changes."
          },
          {
            q: "What is a Dirty Read?",
            a: "A dirty read happens when a transaction reads data written by another transaction that has not yet committed."
          },
          {
            q: "What is a Non-Repeatable Read?",
            a: "It happens when the same row is read twice in one transaction but returns different committed values."
          },
          {
            q: "What is a Phantom Read?",
            a: "It happens when repeating a query returns a different set of rows because another transaction changed matching records."
          },
          {
            q: "What are SQL isolation levels?",
            a: "The standard isolation levels are Read Uncommitted, Read Committed, Repeatable Read, and Serializable."
          },
          {
            q: "How does a database provide Durability?",
            a: "Databases use mechanisms such as transaction logs, write-ahead logging, and recovery procedures to preserve committed changes."
          },
          {
            q: "Does MongoDB support ACID transactions?",
            a: "Yes. MongoDB supports ACID transactions, including multi-document transactions on replica sets and sharded clusters."
          },
        ].map((item, index) => (
          <details key={index} className="group overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)]">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 font-medium transition-colors hover:bg-[var(--bg-hover)]">
              <span>{index + 1}. {item.q}</span>
              <span className="shrink-0 text-lg text-[var(--accent-color)] transition-transform group-open:rotate-45">+</span>
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

export default ACIDProperties;