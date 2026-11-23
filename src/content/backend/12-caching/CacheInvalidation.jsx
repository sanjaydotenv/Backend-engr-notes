import CodeBlock from "../../../components/common/CodeBlock";

export default function CacheInvalidation() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          CACHING / 07
        </p>
        <h1 className="text-3xl font-bold mt-2">Cache Invalidation</h1>
        <p className="text-[var(--text-secondary)] mt-3 leading-7">
          Cache Invalidation is the process of removing or updating outdated
          data from a cache when the original data changes. It helps an
          application avoid serving stale or incorrect information.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. Why Cache Invalidation Is Needed</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          A cache stores a copy of database data. When the original database
          record changes, the cached copy may still contain the old value.
          This outdated information is called <strong>Stale Data</strong>.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-3">
          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="rounded-lg border border-[var(--border-color)] p-3">
              <p className="text-sm text-[var(--text-secondary)]">Database</p>
              <p className="font-semibold mt-1">Price: ₹1500</p>
              <p className="text-xs text-green-500 mt-1">Updated</p>
            </div>
            <div className="rounded-lg border border-red-500/40 p-3">
              <p className="text-sm text-[var(--text-secondary)]">Cache</p>
              <p className="font-semibold mt-1">Price: ₹1200</p>
              <p className="text-xs text-red-500 mt-1">Stale Data</p>
            </div>
          </div>
          <p className="text-center text-sm text-[var(--text-secondary)]">
            Without invalidation, users may receive the old price.
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Common Cache Invalidation Strategies</h2>

        <h3 className="font-semibold text-[var(--accent-color)]">A. Time-Based Invalidation (TTL)</h3>
        <p className="text-[var(--text-secondary)] leading-7">
          TTL (Time To Live) defines how long cached data remains valid. After
          the specified time, the cache entry expires automatically.
        </p>
        <CodeBlock code={`// Store product data for 5 minutes
await redis.set(
  "product:123",
  JSON.stringify(product),
  { EX: 300 }
);`} />
        <p className="text-sm text-[var(--text-secondary)]">
          Example: After 300 seconds, Redis expires the key.
        </p>

        <h3 className="font-semibold text-[var(--accent-color)]">B. Manual Invalidation</h3>
        <p className="text-[var(--text-secondary)] leading-7">
          The application manually deletes a cache entry whenever the related
          database record is updated or deleted.
        </p>
        <CodeBlock code={`// Remove product from cache
await redis.del("product:123");`} />

        <h3 className="font-semibold text-[var(--accent-color)]">C. Update-Based Invalidation</h3>
        <p className="text-[var(--text-secondary)] leading-7">
          Instead of deleting the cache entry, the application updates the
          cached value with the latest database data.
        </p>
        <CodeBlock code={`await redis.set(
  "product:123",
  JSON.stringify(updatedProduct),
  { EX: 300 }
);`} />

        <h3 className="font-semibold text-[var(--accent-color)]">D. Event-Based Invalidation</h3>
        <p className="text-[var(--text-secondary)] leading-7">
          When data changes, an event is published. A cache invalidation
          handler listens for that event and removes or updates the relevant
          cache entry.
        </p>
        <CodeBlock code={`// After a product is updated
await redis.publish(
  "product-updated",
  JSON.stringify({ productId: "123" })
);

// A subscriber listens for this event
// and deletes the related cache key.`} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Cache Invalidation with Node.js, Express and Redis</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Consider an API that updates a product in MongoDB. After a successful
          database update, we delete its old cached value.
        </p>

        <CodeBlock code={`import express from "express";
import { createClient } from "redis";
import Product from "./models/Product.js";

const app = express();

app.use(express.json());

const redis = createClient({
  url: process.env.REDIS_URL
});

await redis.connect();

// Update product
app.put("/products/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!product) {
      return res.status(404).json({
        message: "Product not found"
      });
    }

    // Invalidate old cached data
    await redis.del(\`product:\${req.params.id}\`);

    res.json({
      message: "Product updated successfully",
      product
    });

  } catch (error) {
    res.status(500).json({
      message: "Something went wrong"
    });
  }
});`} />

        <p className="text-[var(--text-secondary)] leading-7">
          When the database update succeeds, Redis deletes the old cache entry.
          The next read request will fetch fresh data from MongoDB and can
          store it in Redis again.
        </p>

        <div className="rounded-lg border border-[var(--border-color)] p-4 space-y-2">
          <p className="font-semibold text-[var(--accent-color)]">Important: Failure Handling</p>
          <p className="text-sm text-[var(--text-secondary)] leading-6">
            MongoDB and Redis are separate systems. If MongoDB updates
            successfully but Redis deletion fails, stale data may remain.
            Production applications should handle this using retries,
            monitoring, reliable event delivery or an outbox pattern, and
            appropriate TTL values.
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Cache Invalidation Flow</h2>
        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 text-center space-y-3">
          <div className="rounded-lg border border-[var(--border-color)] p-3">
            User updates product
          </div>
          <div className="text-[var(--accent-color)]">↓</div>
          <div className="rounded-lg border border-[var(--border-color)] p-3">
            Update MongoDB
          </div>
          <div className="text-[var(--accent-color)]">↓</div>
          <div className="rounded-lg border border-[var(--accent-color)] p-3">
            Delete old Redis cache
          </div>
          <div className="text-[var(--accent-color)]">↓</div>
          <div className="rounded-lg border border-[var(--border-color)] p-3">
            Next request fetches fresh data
          </div>
          <div className="text-[var(--accent-color)]">↓</div>
          <div className="rounded-lg border border-[var(--border-color)] p-3">
            Store fresh data in Redis
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Common Challenges</h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>
            <strong>Stale Data:</strong> Old data may be served if invalidation
            fails or is delayed.
          </li>
          <li>
            <strong>Cache Stampede:</strong> Many requests may try to reload
            the same expired or deleted data simultaneously.
          </li>
          <li>
            <strong>Race Conditions:</strong> Concurrent database updates and
            cache operations can produce inconsistent results.
          </li>
          <li>
            <strong>Complexity:</strong> Applications with many related cache
            keys need a reliable invalidation strategy.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Best Practices</h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>Set appropriate TTL values for cached data.</li>
          <li>Invalidate cache after successful database updates.</li>
          <li>Use consistent cache key naming conventions.</li>
          <li>Use retries and reliable event processing for important updates.</li>
          <li>Monitor cache errors and stale data issues.</li>
          <li>Invalidate related cache keys when dependent data changes.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Interview Questions</h2>
        {[
          {
            q: "What is Cache Invalidation?",
            a: "It is the process of removing or updating outdated data from a cache when the original data changes."
          },
          {
            q: "What is stale data?",
            a: "Stale data is cached information that no longer matches the latest source data."
          },
          {
            q: "What is TTL-based invalidation?",
            a: "It automatically expires cached data after a configured amount of time."
          },
          {
            q: "What is the difference between cache deletion and cache update?",
            a: "Cache deletion removes the old entry so it can be loaded again. Cache update replaces the old cached value with fresh data."
          },
          {
            q: "What happens if database update succeeds but cache invalidation fails?",
            a: "The cache may continue serving stale data until it is invalidated or expires."
          },
          {
            q: "What is event-based cache invalidation?",
            a: "It uses events to notify cache handlers when data changes so they can invalidate or refresh related entries."
          },
          {
            q: "Why is cache invalidation difficult in distributed systems?",
            a: "Multiple application instances and cache nodes may hold copies of the same data, making synchronization and reliable invalidation more complicated."
          }
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