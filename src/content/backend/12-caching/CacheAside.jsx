import React from "react";
import CodeBlock from "../../../components/common/CodeBlock";

const CacheAside = () => {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <div className="space-y-2">
        <p className="text-sm font-medium tracking-wider text-[var(--accent-color)]">
          CACHING / 04
        </p>

        <h1 className="text-3xl font-bold">Cache Aside Pattern</h1>

        <p className="text-base leading-7 text-[var(--text-secondary)]">
          Cache Aside is a caching strategy where the application checks the
          cache first. If data is missing, it fetches data from the database and
          stores a copy in the cache for future requests.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What is Cache Aside?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Cache Aside is also called <strong>Lazy Loading</strong>. In this
          pattern, the application is responsible for loading data into the
          cache whenever it needs data that is not already cached.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          The application does not load all database records into the cache in
          advance. It only caches data when that data is requested.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-3">
          <p className="font-semibold">Cache Aside Architecture</p>

          <div className="flex flex-col items-center gap-2 text-center text-sm">
            <div className="w-full rounded-lg border border-[var(--border-color)] p-3">
              Client Request
            </div>
            <span className="text-[var(--accent-color)]">↓</span>
            <div className="w-full rounded-lg border border-[var(--accent-color)] p-3">
              Application
            </div>
            <span className="text-[var(--accent-color)]">↓</span>
            <div className="w-full rounded-lg border border-green-500/40 p-3">
              Check Redis Cache
            </div>
            <div className="grid w-full grid-cols-2 gap-3">
              <div className="space-y-2">
                <p className="font-semibold text-green-500">Cache Hit</p>
                <div className="rounded-lg border border-green-500/30 p-3">
                  Return Cached Data
                </div>
              </div>

              <div className="space-y-2">
                <p className="font-semibold text-orange-500">Cache Miss</p>
                <div className="rounded-lg border border-orange-500/30 p-3">
                  Fetch from Database
                </div>
                <span className="text-orange-500">↓</span>
                <div className="rounded-lg border border-orange-500/30 p-3">
                  Store in Redis
                </div>
                <span className="text-orange-500">↓</span>
                <div className="rounded-lg border border-orange-500/30 p-3">
                  Return Data
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. How Cache Aside Works</h2>

        <ol className="list-decimal space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Client requests some data.</li>
          <li>Application checks whether the data exists in Redis.</li>
          <li>If found, the application returns cached data.</li>
          <li>If missing, the application fetches data from the database.</li>
          <li>Application stores the fetched data in Redis.</li>
          <li>Application returns the data to the client.</li>
        </ol>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-2">
          <p className="font-semibold text-[var(--accent-color)]">Example</p>
          <p className="text-sm leading-6 text-[var(--text-secondary)]">
            Suppose a user requests product ID 101 for the first time. Redis
            does not have that product, so the application fetches it from
            MongoDB and stores it in Redis. The next request for product ID 101
            can be served directly from Redis.
          </p>
        </div>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Cache Hit vs Cache Miss</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-green-500/30 p-4 space-y-2">
            <h3 className="font-semibold text-green-500">Cache Hit</h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Requested data already exists in Redis.
            </p>
            <CodeBlock
              code={`const cachedData = await redis.get("product:101");

if (cachedData) {
  return JSON.parse(cachedData);
}`}
            />
          </div>

          <div className="rounded-xl border border-orange-500/30 p-4 space-y-2">
            <h3 className="font-semibold text-orange-500">Cache Miss</h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Requested data is not available in Redis.
            </p>
            <CodeBlock
              code={`const product = await Product.findById("101");

await redis.set(
  "product:101",
  JSON.stringify(product)
);`}
            />
          </div>
        </div>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          4. Implement Cache Aside with Redis
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Let's implement Cache Aside using Node.js, Express, MongoDB and Redis.
        </p>

        <p className="font-semibold">Step 1: Install Dependencies</p>

        <CodeBlock code={`npm install express mongoose redis dotenv`} />

        <p className="font-semibold">Step 2: Connect Redis</p>

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

        <p className="font-semibold">Step 3: Create Cache Aside Controller</p>

        <CodeBlock
          code={`// controllers/productController.js

import Product from "../models/Product.js";
import redis from "../config/redis.js";

export const getProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const cacheKey = \`product:\${id}\`;

    // 1. Check Redis
    const cachedProduct = await redis.get(cacheKey);

    if (cachedProduct) {
      console.log("Cache Hit");

      return res.json({
        source: "cache",
        data: JSON.parse(cachedProduct),
      });
    }

    // 2. Cache Miss: Fetch from MongoDB
    console.log("Cache Miss");

    const product = await Product.findById(id).lean();

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    // 3. Store in Redis for 5 minutes
    await redis.set(
      cacheKey,
      JSON.stringify(product),
      { EX: 300 }
    );

    // 4. Return data
    return res.json({
      source: "database",
      data: product,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Internal server error",
    });
  }
};`}
        />

        <p className="font-semibold">Step 4: Create Route</p>

        <CodeBlock
          code={`// routes/productRoutes.js

import express from "express";
import { getProduct } from "../controllers/productController.js";

const router = express.Router();

router.get("/:id", getProduct);

export default router;`}
        />

        <p className="font-semibold">Step 5: Register Route</p>

        <CodeBlock
          code={`import productRoutes from "./routes/productRoutes.js";

app.use("/api/products", productRoutes);`}
        />
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          5. Cache Invalidation on Update
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Suppose a product is updated in MongoDB. Redis may still contain the
          old product data. This is called stale cache data.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          A common Cache Aside solution is to update the database first and then
          delete the corresponding cache entry.
        </p>

        <CodeBlock
          code={`export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    // 1. Update MongoDB first
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

    // 2. Invalidate cache
    await redis.del(\`product:\${id}\`);

    res.json({
      message: "Product updated successfully",
      data: product,
    });

  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-2">
          <p className="font-semibold text-[var(--accent-color)]">
            Why Delete Instead of Updating Cache?
          </p>
          <p className="text-sm leading-6 text-[var(--text-secondary)]">
            Deleting the old cache entry is simple. When the next request
            arrives, the application gets fresh data from MongoDB and stores it
            in Redis again.
          </p>
        </div>

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Important: Database update and Redis deletion are two separate
          operations. If Redis deletion fails, stale data may remain until
          expiration. Production systems may use retries, short TTLs or reliable
          invalidation mechanisms.
        </p>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Advantages</h2>

        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Simple and easy to implement.</li>
          <li>Only requested data gets loaded into the cache.</li>
          <li>Frequently accessed data can be served quickly.</li>
          <li>Reduces repeated database queries.</li>
          <li>
            Cache can be rebuilt from the database after expiration or loss.
          </li>
        </ul>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Disadvantages</h2>

        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>First request usually has to fetch data from the database.</li>
          <li>Cached data can become stale if invalidation fails.</li>
          <li>
            Frequently requested missing keys can cause repeated database
            queries.
          </li>
          <li>
            Concurrent cache misses can send multiple queries for the same key.
          </li>
          <li>Cache and database do not update atomically.</li>
        </ul>
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Important Best Practices</h2>

        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Always use suitable TTL values.</li>
          <li>Use consistent and unique cache keys.</li>
          <li>Invalidate cache after successful database updates.</li>
          <li>Do not cache sensitive data without proper access controls.</li>
          <li>Handle Redis failures and set appropriate timeouts.</li>
          <li>
            Use request coalescing or locking when cache stampedes are a
            concern.
          </li>
          <li>Monitor cache hit rate and memory usage.</li>
        </ul>
      </section>

      {/* 9 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          9. Cache Aside vs Write Through
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-[var(--bg-secondary)]">
                <th className="border border-[var(--border-color)] p-3 text-left">
                  Feature
                </th>
                <th className="border border-[var(--border-color)] p-3 text-left">
                  Cache Aside
                </th>
                <th className="border border-[var(--border-color)] p-3 text-left">
                  Write Through
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Data Loading", "On cache miss", "During write operation"],
                [
                  "Cache Update",
                  "Application manages it",
                  "Write path updates cache",
                ],
                ["First Read", "May cause cache miss", "May already be cached"],
                [
                  "Complexity",
                  "Relatively simple",
                  "More coordination required",
                ],
              ].map(([feature, aside, through]) => (
                <tr key={feature}>
                  <td className="border border-[var(--border-color)] p-3 font-medium">
                    {feature}
                  </td>
                  <td className="border border-[var(--border-color)] p-3 text-[var(--text-secondary)]">
                    {aside}
                  </td>
                  <td className="border border-[var(--border-color)] p-3 text-[var(--text-secondary)]">
                    {through}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Interview Questions */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Interview Questions</h2>

        {[
          {
            q: "What is the Cache Aside pattern?",
            a: "Cache Aside is a caching strategy where the application checks the cache first and fetches data from the database only when the cache misses.",
          },
          {
            q: "Why is Cache Aside also called Lazy Loading?",
            a: "Because data is loaded into the cache only when the application requests it and finds that it is missing.",
          },
          {
            q: "What happens during a cache miss?",
            a: "The application fetches data from the database, stores it in the cache and returns it to the client.",
          },
          {
            q: "How do you handle cache invalidation in Cache Aside?",
            a: "A common approach is to update the database first and then delete the corresponding cache entry.",
          },
          {
            q: "What is stale cache data?",
            a: "It is cached data that no longer matches the latest data in the database.",
          },
          {
            q: "What is a cache stampede?",
            a: "It occurs when many requests simultaneously miss the same cache key and all try to fetch the same data from the database.",
          },
          {
            q: "What is the biggest advantage of Cache Aside?",
            a: "It is simple to implement and only loads data into the cache when that data is actually requested.",
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

export default CacheAside;
