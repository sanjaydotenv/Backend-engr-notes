import React from "react";
import CodeBlock from "../../../components/common/CodeBlock";

const WriteThrough = () => {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <div className="space-y-2">
        <p className="text-sm font-medium tracking-wider text-[var(--accent-color)]">
          CACHING / 05
        </p>

        <h1 className="text-3xl font-bold">Write Through Cache</h1>

        <p className="text-base leading-7 text-[var(--text-secondary)]">
          Write Through is a caching strategy in which every write operation
          updates both the cache and the database before the operation is
          considered successful.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What is Write Through?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          In the Write Through pattern, the application writes data to the
          cache, and the cache layer also writes that data to the database. The
          write operation is considered successful only after both updates
          succeed.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          Unlike Cache Aside, where data is loaded into the cache only after a
          cache miss, Write Through updates the cache whenever data is written.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-3">
          <p className="font-semibold">Write Through Architecture</p>

          <div className="flex flex-col items-center gap-2 text-center text-sm">
            <div className="w-full rounded-lg border border-[var(--border-color)] p-3">
              Client Write Request
            </div>
            <span className="text-[var(--accent-color)]">↓</span>
            <div className="w-full rounded-lg border border-[var(--accent-color)] p-3">
              Application / Cache Layer
            </div>
            <span className="text-[var(--accent-color)]">↓</span>
            <div className="grid w-full grid-cols-2 gap-3">
              <div className="rounded-lg border border-green-500/40 p-3">
                Update Cache
              </div>
              <div className="rounded-lg border border-orange-500/40 p-3">
                Update Database
              </div>
            </div>
            <span className="text-[var(--accent-color)]">↓</span>
            <div className="w-full rounded-lg border border-green-500/40 p-3">
              Return Success After Both Writes Succeed
            </div>
          </div>
        </div>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. How Write Through Works</h2>

        <ol className="list-decimal space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Client sends a create or update request.</li>
          <li>Application sends the new data to the cache layer.</li>
          <li>The cache layer writes the data to the database.</li>
          <li>
            After successful writes to both systems, the operation succeeds.
          </li>
          <li>
            Future read requests can retrieve the updated data from cache.
          </li>
        </ol>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-2">
          <p className="font-semibold text-[var(--accent-color)]">
            Simple Example
          </p>
          <p className="text-sm leading-6 text-[var(--text-secondary)]">
            Suppose a user updates their profile name. In Write Through, the
            updated profile is written to the database and cache. The next read
            request can immediately receive the updated profile from the cache.
          </p>
        </div>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          3. Write Through vs Cache Aside
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-[var(--bg-secondary)]">
                <th className="border border-[var(--border-color)] p-3 text-left">
                  Feature
                </th>
                <th className="border border-[var(--border-color)] p-3 text-left">
                  Write Through
                </th>
                <th className="border border-[var(--border-color)] p-3 text-left">
                  Cache Aside
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Write Operation",
                  "Updates cache and database",
                  "Usually updates database, then invalidates cache",
                ],
                ["Cache Loading", "During writes", "On cache miss"],
                [
                  "Read Operation",
                  "Often served from cache",
                  "Checks cache first",
                ],
                ["Write Latency", "Usually higher", "Usually lower"],
                [
                  "Complexity",
                  "Requires coordinated writes",
                  "Application manages cache loading",
                ],
              ].map(([feature, through, aside]) => (
                <tr key={feature}>
                  <td className="border border-[var(--border-color)] p-3 font-medium">
                    {feature}
                  </td>
                  <td className="border border-[var(--border-color)] p-3 text-[var(--text-secondary)]">
                    {through}
                  </td>
                  <td className="border border-[var(--border-color)] p-3 text-[var(--text-secondary)]">
                    {aside}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          4. Implementing Write Through with Redis
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Let's implement a simplified Write Through approach using Node.js,
          Express, MongoDB and Redis.
        </p>

        <p className="font-semibold">Step 1: Install Dependencies</p>

        <CodeBlock code={`npm install express mongoose redis dotenv`} />

        <p className="font-semibold">Step 2: Redis Connection</p>

        <CodeBlock
          code={`// config/redis.js

import { createClient } from "redis";

const redis = createClient({
  url: process.env.REDIS_URL,
});

redis.on("error", (error) => {
  console.error("Redis Error:", error);
});

await redis.connect();

export default redis;`}
        />

        <p className="font-semibold">Step 3: Create Write Through Controller</p>

        <CodeBlock
          code={`// controllers/productController.js

import Product from "../models/Product.js";
import redis from "../config/redis.js";

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    // 1. Update MongoDB
    const product = await Product.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    ).lean();

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    // 2. Update Redis cache
    await redis.set(
      \`product:\${id}\`,
      JSON.stringify(product),
      { EX: 300 }
    );

    // 3. Return success
    return res.json({
      message: "Product updated successfully",
      data: product,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Update failed",
    });
  }
};`}
        />

        <p className="font-semibold">Step 4: Read Product from Cache</p>

        <CodeBlock
          code={`export const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const cacheKey = \`product:\${id}\`;

    // Check Redis first
    const cachedProduct = await redis.get(cacheKey);

    if (cachedProduct) {
      return res.json({
        source: "cache",
        data: JSON.parse(cachedProduct),
      });
    }

    // Cache miss
    const product = await Product.findById(id).lean();

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    // Populate cache
    await redis.set(
      cacheKey,
      JSON.stringify(product),
      { EX: 300 }
    );

    return res.json({
      source: "database",
      data: product,
    });

  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};`}
        />

        <div className="rounded-xl border border-orange-500/30 bg-[var(--bg-secondary)] p-4 space-y-2">
          <p className="font-semibold text-orange-400">
            Important Implementation Note
          </p>
          <p className="text-sm leading-6 text-[var(--text-secondary)]">
            The example writes to MongoDB first and Redis second. This is a
            simplified application-managed write-through approach. It is not an
            atomic transaction across MongoDB and Redis. If MongoDB succeeds but
            Redis fails, the database contains the new value while the cache may
            still contain old data.
          </p>
        </div>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          5. What Happens If Cache Update Fails?
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Redis and MongoDB are separate systems. A successful database update
          does not guarantee that the cache update will also succeed.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-2">
          <div className="rounded-lg border border-green-500/40 p-3 text-center text-sm">
            MongoDB Update Successful
          </div>
          <span className="block text-center text-[var(--accent-color)]">
            ↓
          </span>
          <div className="rounded-lg border border-red-500/40 p-3 text-center text-sm">
            Redis Update Failed
          </div>
          <span className="block text-center text-[var(--accent-color)]">
            ↓
          </span>
          <div className="rounded-lg border border-orange-500/40 p-3 text-center text-sm">
            Cache May Contain Stale Data
          </div>
        </div>

        <p className="font-semibold">Possible Solutions</p>

        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Retry the cache update.</li>
          <li>Delete the old cache entry if updating it fails.</li>
          <li>Use a short TTL as a fallback against stale entries.</li>
          <li>
            Use reliable background events or an outbox pattern for important
            workflows.
          </li>
        </ul>

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          A cache deletion can also fail, so production systems need monitoring
          and a reliable recovery strategy.
        </p>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Advantages</h2>

        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>
            Frequently read data is already available in cache after writes.
          </li>
          <li>Reduces cache misses for recently written data.</li>
          <li>Helps keep the cache updated during normal write operations.</li>
          <li>
            Useful for applications with frequent reads and predictable writes.
          </li>
        </ul>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Disadvantages</h2>

        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Write operations take additional time.</li>
          <li>Cache may contain data that is never requested.</li>
          <li>Database and cache updates can fail independently.</li>
          <li>Requires error handling and recovery mechanisms.</li>
          <li>Maintaining consistency across separate systems is difficult.</li>
        </ul>
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          8. When Should We Use Write Through?
        </h2>

        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Applications where recently written data is read frequently.</li>
          <li>User profile and product information systems.</li>
          <li>Applications that need the cache updated during writes.</li>
          <li>
            Workloads where read performance is more important than write
            latency.
          </li>
        </ul>
      </section>

      {/* Interview Questions */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Interview Questions</h2>

        {[
          {
            q: "What is Write Through caching?",
            a: "Write Through is a caching strategy where every write operation updates both the cache and the database before success is reported.",
          },
          {
            q: "How does Write Through work?",
            a: "The application sends data through the cache layer, which updates the database and cache as part of the write operation.",
          },
          {
            q: "What is the main advantage of Write Through?",
            a: "Recently written data is already available in the cache, which can improve subsequent read performance.",
          },
          {
            q: "What is the main disadvantage of Write Through?",
            a: "Write operations can be slower because both the cache and database must be updated.",
          },
          {
            q: "What happens if the cache update fails?",
            a: "The database may contain the new data while the cache contains old data. The application needs retry, invalidation or another recovery strategy.",
          },
          {
            q: "Is Write Through atomic across Redis and MongoDB?",
            a: "No. They are separate systems, so a normal application-level write does not create one atomic transaction across both.",
          },
          {
            q: "What is the difference between Cache Aside and Write Through?",
            a: "Cache Aside loads data into cache on a cache miss, while Write Through updates the cache as part of the write operation.",
          },
        ].map((item, index) => (
          <details
            key={index}
            className="group rounded-xl border border-[var(--border-color)] p-4"
          >
            <summary className="cursor-pointer font-medium">
              <span className="mr-2 text-[var(--accent-color)]">
                Q{index + 1}.
              </span>
              {item.q}
            </summary>

            <p className="mt-3 border-t border-[var(--border-color)] pt-3 text-sm leading-6 text-[var(--text-secondary)]">
              {item.a}
            </p>
          </details>
        ))}
      </section>
    </div>
  );
};

export default WriteThrough;
