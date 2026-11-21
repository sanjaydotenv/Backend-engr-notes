import CodeBlock from "../../../../components/common/CodeBlock";

const Transactions = () => {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <div className="space-y-2">
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          MONGOOSE / 14
        </p>
        <h1 className="text-3xl font-bold">Mongoose Transactions</h1>
        <p className="text-base leading-7 text-[var(--text-secondary)]">
          Transactions allow us to execute multiple database operations as a
          single atomic unit. Either all operations succeed or none of their
          changes are committed.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What are Transactions?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          A transaction is a group of database operations that must succeed or
          fail together.
        </p>

        <p className="font-semibold">Example: Money Transfer</p>

        <p className="leading-7 text-[var(--text-secondary)]">
          Suppose User A transfers ₹1,000 to User B. We need two operations:
        </p>

        <CodeBlock
          code={`// Operation 1
User A balance = User A balance - 1000;

// Operation 2
User B balance = User B balance + 1000;`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          What if User A's money is deducted successfully, but adding money to
          User B fails?
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          Without a transaction, the database may contain an incomplete
          transfer. Transactions prevent this by committing all changes together
          or rolling them all back.
        </p>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. ACID Properties</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Database transactions follow four important ACID properties.
        </p>

        <div className="space-y-3">
          {[
            {
              title: "A — Atomicity",
              desc: "All operations succeed together or all are rolled back.",
            },
            {
              title: "C — Consistency",
              desc: "A transaction takes the database from one valid state to another valid state, preserving defined rules and constraints.",
            },
            {
              title: "I — Isolation",
              desc: "Concurrent transactions are isolated according to the configured transaction isolation behavior.",
            },
            {
              title: "D — Durability",
              desc: "Once a transaction is successfully committed, its changes are persisted according to the database's durability guarantees.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4"
            >
              <h3 className="font-semibold text-[var(--accent-color)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Transaction Workflow</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          A transaction generally follows these steps:
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <div className="space-y-2 text-center text-sm font-medium">
            <div className="rounded-lg bg-[var(--bg-hover)] p-3">
              Start Transaction
            </div>
            <div className="text-[var(--accent-color)]">↓</div>
            <div className="rounded-lg bg-[var(--bg-hover)] p-3">
              Execute Database Operations
            </div>
            <div className="text-[var(--accent-color)]">↓</div>
            <div className="rounded-lg bg-[var(--bg-hover)] p-3">
              All Operations Successful?
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <p className="text-green-500">YES</p>
                <div className="rounded-lg border border-green-500/40 p-3">
                  Commit Transaction
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-red-500">NO</p>
                <div className="rounded-lg border border-red-500/40 p-3">
                  Abort Transaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. What is a Session?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          A session represents a sequence of database operations. MongoDB uses
          sessions to manage transactions.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          In Mongoose, we create a session using startSession().
        </p>

        <CodeBlock code={`const session = await mongoose.startSession();`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          We pass this session to database operations so MongoDB knows which
          transaction those operations belong to.
        </p>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Starting a Transaction</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          After creating a session, use startTransaction() to begin a
          transaction.
        </p>

        <CodeBlock
          code={`const session = await mongoose.startSession();

session.startTransaction();

try {
  // Database operations

  await session.commitTransaction();
} catch (error) {
  await session.abortTransaction();
} finally {
  await session.endSession();
}`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Always end the session in finally so it is cleaned up whether the
          transaction succeeds or fails.
        </p>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Commit Transaction</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          commitTransaction() permanently commits the changes made inside the
          transaction.
        </p>

        <CodeBlock code={`await session.commitTransaction();`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          After a successful commit, all transaction operations become visible
          as committed database changes.
        </p>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Abort Transaction</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          abortTransaction() cancels the active transaction and discards its
          uncommitted changes.
        </p>

        <CodeBlock code={`await session.abortTransaction();`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          If an operation fails, we can abort the transaction so earlier
          operations are not partially committed.
        </p>
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Passing Session to Queries</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Every database operation that should participate in a transaction must
          use the same session.
        </p>

        <CodeBlock
          code={`const session = await mongoose.startSession();

session.startTransaction();

try {
  await User.updateOne(
    { _id: userId },
    { $set: { isActive: true } },
    { session }
  );

  await Order.create(
    [{
      user: userId,
      total: 5000,
    }],
    { session }
  );

  await session.commitTransaction();
} catch (error) {
  await session.abortTransaction();
  throw error;
} finally {
  await session.endSession();
}`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Notice that both operations receive the same session. Without passing
          the session, an operation does not automatically become part of that
          transaction.
        </p>
      </section>

      {/* 9 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          9. Complete Real-World Example
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Let's create a money transfer API where one user's balance decreases
          and another user's balance increases.
        </p>

        <CodeBlock
          code={`import mongoose from "mongoose";
import User from "../models/user.model.js";

export const transferMoney = async (req, res) => {
  const { senderId, receiverId, amount } = req.body;

  const session = await mongoose.startSession();

  try {
    if (amount <= 0) {
      return res.status(400).json({
        message: "Invalid transfer amount",
      });
    }

    session.startTransaction();

    // Deduct money from sender
    const sender = await User.findOneAndUpdate(
      {
        _id: senderId,
        balance: { $gte: amount },
      },
      {
        $inc: { balance: -amount },
      },
      {
        new: true,
        session,
      }
    );

    if (!sender) {
      throw new Error("Insufficient balance or sender not found");
    }

    // Add money to receiver
    const receiver = await User.findByIdAndUpdate(
      receiverId,
      {
        $inc: { balance: amount },
      },
      {
        new: true,
        session,
      }
    );

    if (!receiver) {
      throw new Error("Receiver not found");
    }

    // Commit both operations
    await session.commitTransaction();

    return res.status(200).json({
      message: "Money transferred successfully",
      senderBalance: sender.balance,
      receiverBalance: receiver.balance,
    });

  } catch (error) {
    if (session.inTransaction()) {
      await session.abortTransaction();
    }

    return res.status(400).json({
      message: error.message,
    });

  } finally {
    await session.endSession();
  }
};`}
        />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          This example demonstrates the transaction flow. A production payment
          system also needs authentication, authorization, idempotency, proper
          currency handling, and transaction reconciliation.
        </p>
      </section>

      {/* 10 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Using withTransaction()</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Mongoose also supports withTransaction(), which manages transaction
          commit, abort, and session cleanup.
        </p>

        <CodeBlock
          code={`const session = await mongoose.startSession();

try {
  await session.withTransaction(async () => {

    await User.updateOne(
      { _id: senderId },
      { $inc: { balance: -1000 } },
      { session }
    );

    await User.updateOne(
      { _id: receiverId },
      { $inc: { balance: 1000 } },
      { session }
    );

  });
} finally {
  await session.endSession();
}`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          withTransaction() commits when the callback succeeds and aborts when
          it fails. It can also retry certain transient transaction errors
          automatically.
        </p>

        <p className="text-sm text-[var(--text-secondary)]">
          Important: Because the callback can be retried, avoid sending emails,
          charging external payment providers, or performing other
          non-transactional side effects directly inside it.
        </p>
      </section>

      {/* 11 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">11. Transaction Requirements</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB transactions require a supported deployment configuration.
        </p>

        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-[var(--text-secondary)]">
          <li>Transactions are supported on replica sets.</li>
          <li>Transactions are supported on sharded clusters.</li>
          <li>
            A standalone MongoDB server does not support multi-document
            transactions.
          </li>
          <li>
            For local development, configure MongoDB as a single-node replica
            set.
          </li>
          <li>All operations in a transaction must use the same session.</li>
          <li>Transactions should be kept short to reduce resource usage.</li>
        </ul>

        <p className="font-semibold">Local Replica Set Connection Example:</p>

        <CodeBlock
          code={`mongodb://127.0.0.1:27017/myDatabase?replicaSet=rs0`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          The replica set must actually be initialized and running with the name
          rs0. Adding the connection parameter alone does not configure a
          replica set.
        </p>
      </section>

      {/* 12 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          12. Transactions vs Normal Queries
        </h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[440px] text-left text-sm">
            <thead className="bg-[var(--bg-card)]">
              <tr>
                <th className="p-3">Normal Queries</th>
                <th className="p-3">Transactions</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr>
                <td className="p-3">Operations execute independently.</td>
                <td className="p-3">Operations execute as one transaction.</td>
              </tr>
              <tr>
                <td className="p-3">
                  Partial changes may remain after failure.
                </td>
                <td className="p-3">
                  Uncommitted changes are aborted together.
                </td>
              </tr>
              <tr>
                <td className="p-3">No explicit commit required.</td>
                <td className="p-3">Requires commit or abort.</td>
              </tr>
              <tr>
                <td className="p-3">No transaction session required.</td>
                <td className="p-3">Uses a MongoDB session.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 13 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">13. Important Methods</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[420px] text-left text-sm">
            <thead className="bg-[var(--bg-card)]">
              <tr>
                <th className="p-3">Method</th>
                <th className="p-3">Purpose</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              {[
                ["startSession()", "Creates a MongoDB session."],
                ["startTransaction()", "Starts a transaction."],
                ["commitTransaction()", "Commits transaction changes."],
                ["abortTransaction()", "Aborts uncommitted changes."],
                ["endSession()", "Ends the session."],
                [
                  "withTransaction()",
                  "Manages transaction execution and retries.",
                ],
                ["inTransaction()", "Checks whether a transaction is active."],
              ].map(([method, purpose]) => (
                <tr key={method}>
                  <td className="p-3 font-medium">{method}</td>
                  <td className="p-3">{purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
            q: "What are Transactions in MongoDB?",
            a: "Transactions allow multiple database operations to execute as one atomic unit. All changes are committed together or aborted together.",
          },
          {
            q: "What are ACID properties?",
            a: "ACID stands for Atomicity, Consistency, Isolation, and Durability.",
          },
          {
            q: "What is a MongoDB Session?",
            a: "A session represents a sequence of database operations and provides the context used to manage transactions.",
          },
          {
            q: "How do you start a transaction in Mongoose?",
            a: "Create a session using mongoose.startSession() and call session.startTransaction().",
          },
          {
            q: "What is commitTransaction()?",
            a: "It commits all successful operations performed inside the active transaction.",
          },
          {
            q: "What is abortTransaction()?",
            a: "It aborts the active transaction and discards its uncommitted changes.",
          },
          {
            q: "Why do we pass a session to every query?",
            a: "Passing the same session ensures that the operations participate in the same transaction.",
          },
          {
            q: "What is withTransaction()?",
            a: "It is a helper that manages transaction commit, abort, and retries for certain transaction errors.",
          },
          {
            q: "Does MongoDB standalone support multi-document transactions?",
            a: "No. Multi-document transactions require a replica set or a sharded cluster.",
          },
          {
            q: "What happens if one operation fails inside a transaction?",
            a: "The transaction should be aborted, so its uncommitted database changes are not committed.",
          },
          {
            q: "Why should transactions be short?",
            a: "Long-running transactions consume resources, can increase contention, and may increase the chance of transaction failures.",
          },
          {
            q: "What is the difference between commit and abort?",
            a: "Commit saves all transaction changes, while abort discards the uncommitted changes.",
          },
        ].map((item, index) => (
          <details
            key={index}
            className="group overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)]"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 font-medium transition-colors hover:bg-[var(--bg-hover)]">
              <span>
                {index + 1}. {item.q}
              </span>
              <span className="shrink-0 text-lg text-[var(--accent-color)] transition-transform group-open:rotate-45">
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

export default Transactions;
