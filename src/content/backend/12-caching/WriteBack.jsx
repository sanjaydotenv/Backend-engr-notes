import CodeBlock from "../../../components/common/CodeBlock";

export default function WriteBack() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          CACHING / 06
        </p>
        <h1 className="text-3xl font-bold mt-2">Write Back Caching</h1>
        <p className="text-[var(--text-secondary)] mt-3 leading-7">
          Write Back (also called Write Behind) is a caching strategy where data
          is first written to the cache and the database is updated later in the
          background.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. How Write Back Works</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          When an application writes data, it first updates the cache. The cache
          confirms the write immediately, while the database update happens
          asynchronously.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-3 text-center">
          <div className="rounded-lg border border-[var(--accent-color)] p-3">
            Application
          </div>
          <div className="text-[var(--accent-color)]">↓ Write data</div>
          <div className="rounded-lg border border-[var(--accent-color)] p-3">
            Cache (Updated Immediately)
          </div>
          <div className="text-[var(--accent-color)]">↓ Background Update</div>
          <div className="rounded-lg border border-[var(--border-color)] p-3">
            Database (Updated Later)
          </div>
        </div>

        <p className="text-[var(--text-secondary)] leading-7">
          The application does not need to wait for the database update before
          responding to the user.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Real-World Example</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Imagine a website where users frequently update their view count.
          Instead of writing every view directly to MongoDB, the application
          increments the count in Redis and periodically saves it to MongoDB.
        </p>

        <CodeBlock
          code={`// Update count in Redis first
await redis.incr("post:123:views");

// Database update happens later
// A background worker periodically saves the count.`}
        />

        <p className="text-[var(--text-secondary)] leading-7">
          This reduces frequent database writes. However, the background worker
          must reliably transfer pending changes to the database.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Node.js Example</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          This simplified example updates Redis immediately and then schedules a
          database update in the background.
        </p>

        <CodeBlock
          code={`import express from "express";
import { createClient } from "redis";
import mongoose from "mongoose";
import Post from "./models/Post.js";

const app = express();

app.use(express.json());

const redis = createClient({
  url: process.env.REDIS_URL
});

await redis.connect();

app.post("/posts/:id/views", async (req, res) => {
  try {
    const postId = req.params.id;

    // 1. Update cache immediately
    const views = await redis.incr(
      \`post:\${postId}:views\`
    );

    // 2. Schedule database update
    setImmediate(async () => {
      try {
        await Post.updateOne(
          { _id: postId },
          { $inc: { views: 1 } }
        );
      } catch (error) {
        console.error("Database update failed:", error);
      }
    });

    // 3. Respond without waiting for DB update
    res.json({
      message: "View counted",
      views
    });

  } catch (error) {
    res.status(500).json({
      message: "Something went wrong"
    });
  }
});`}
        />

        <div className="rounded-lg border border-[var(--border-color)] p-4">
          <p className="font-semibold text-[var(--accent-color)]">Important</p>
          <p className="text-sm text-[var(--text-secondary)] mt-2 leading-6">
            This is only a simplified demonstration, not a production-ready
            Write Back implementation. It increments Redis and MongoDB
            independently, so failures can cause inconsistent counts. Production
            systems should use durable queues, retries, idempotent processing,
            and recovery mechanisms.
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Advantages of Write Back</h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>
            Faster write responses because the database is not updated
            immediately.
          </li>
          <li>Reduces frequent database write operations.</li>
          <li>Can combine multiple updates into fewer database writes.</li>
          <li>Useful for applications with heavy write traffic.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          5. Disadvantages of Write Back
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>
            Data can be lost if the cache fails before changes reach the
            database.
          </li>
          <li>Database data may temporarily be outdated.</li>
          <li>Background processing and retries are required.</li>
          <li>Handling failures and data consistency is more complicated.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          6. Write Back vs Write Through
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="text-left p-3">Write Through</th>
                <th className="text-left p-3">Write Back</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">
                  Cache and database are updated during the write operation.
                </td>
                <td className="p-3">
                  Cache is updated first; database is updated later.
                </td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Usually slower writes.</td>
                <td className="p-3">Usually faster writes.</td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">
                  Lower risk of losing acknowledged writes due to delayed
                  database updates.
                </td>
                <td className="p-3">
                  Higher risk of losing pending writes if they are not stored
                  durably.
                </td>
              </tr>
              <tr>
                <td className="p-3">Database is updated immediately.</td>
                <td className="p-3">
                  Database can temporarily contain older data.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. When to Use Write Back</h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>Analytics and view counters.</li>
          <li>High-volume event tracking.</li>
          <li>Applications with frequent updates.</li>
          <li>
            Systems where a short delay in database persistence is acceptable.
          </li>
        </ul>
        <p className="text-[var(--text-secondary)] leading-7">
          Avoid relying on volatile cache storage alone for critical financial
          or other data that must never be lost.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Interview Questions</h2>
        {[
          {
            q: "What is Write Back caching?",
            a: "Write Back is a caching strategy where data is first written to the cache and later persisted to the database.",
          },
          {
            q: "What is another name for Write Back?",
            a: "Write Behind caching.",
          },
          {
            q: "Why is Write Back faster for writes?",
            a: "Because the application does not need to wait for the database write to finish before responding.",
          },
          {
            q: "What is the biggest risk of Write Back caching?",
            a: "Pending changes can be lost if the cache fails before they are safely persisted.",
          },
          {
            q: "How can we make Write Back safer?",
            a: "Use durable queues or logs, retries, idempotent workers, monitoring, and recovery mechanisms.",
          },
          {
            q: "What is the difference between Write Through and Write Back?",
            a: "Write Through updates the cache and database during the write operation, while Write Back updates the cache first and the database later.",
          },
        ].map((item, index) => (
          <details
            key={index}
            className="group rounded-lg border border-[var(--border-color)] p-4"
          >
            <summary className="cursor-pointer font-medium">
              {index + 1}. {item.q}
            </summary>
            <p className="mt-3 text-sm text-[var(--text-secondary)] leading-6">
              {item.a}
            </p>
          </details>
        ))}
      </section>
    </div>
  );
}
