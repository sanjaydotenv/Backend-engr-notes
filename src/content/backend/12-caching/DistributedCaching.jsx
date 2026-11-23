import CodeBlock from "../../../components/common/CodeBlock";

export default function DistributedCaching() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          CACHING / 09
        </p>
        <h1 className="text-3xl font-bold mt-2">Distributed Caching</h1>
        <p className="text-[var(--text-secondary)] mt-3 leading-7">
          Distributed Caching is a caching approach where multiple application
          servers share data through a common cache system. It helps
          applications access cached data consistently and reduces repeated
          database queries.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. Why Distributed Caching?</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          In a large application, multiple backend servers may handle user
          requests. If every server maintains its own in-memory cache, the
          cached data can become different across servers.
        </p>

        <h3 className="font-semibold text-[var(--accent-color)]">
          Without Distributed Cache
        </h3>
        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-3 text-center">
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-[var(--border-color)] p-3">
              Server 1
              <div className="mt-2 rounded-md border border-[var(--accent-color)] p-2 text-sm">
                Local Cache
              </div>
            </div>
            <div className="rounded-lg border border-[var(--border-color)] p-3">
              Server 2
              <div className="mt-2 rounded-md border border-[var(--accent-color)] p-2 text-sm">
                Local Cache
              </div>
            </div>
          </div>
          <div className="text-[var(--accent-color)]">↓ Separate Requests</div>
          <div className="rounded-lg border border-[var(--border-color)] p-3">
            Database
          </div>
          <p className="text-sm text-[var(--text-secondary)]">
            Each server maintains its own cache, which can contain different
            data.
          </p>
        </div>

        <h3 className="font-semibold text-[var(--accent-color)]">
          With Distributed Cache
        </h3>
        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-3 text-center">
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-[var(--border-color)] p-3">
              Server 1
            </div>
            <div className="rounded-lg border border-[var(--border-color)] p-3">
              Server 2
            </div>
          </div>
          <div className="text-[var(--accent-color)]">↓ ↓</div>
          <div className="rounded-lg border border-[var(--accent-color)] p-3">
            Shared Redis Cache
          </div>
          <div className="text-[var(--accent-color)]">↓</div>
          <div className="rounded-lg border border-[var(--border-color)] p-3">
            Database
          </div>
          <p className="text-sm text-[var(--text-secondary)]">
            Both servers access the same shared cache.
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          2. How Distributed Caching Works
        </h2>
        <ol className="list-decimal pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>A user sends a request to the application.</li>
          <li>A load balancer forwards it to an available server.</li>
          <li>The server checks the shared cache.</li>
          <li>If data exists, the server returns the cached result.</li>
          <li>
            If data does not exist, the server fetches it from the database.
          </li>
          <li>
            The server stores the result in the shared cache for future
            requests.
          </li>
        </ol>

        <div className="rounded-lg border border-[var(--border-color)] p-4">
          <p className="font-semibold text-[var(--accent-color)]">Cache Hit</p>
          <p className="text-sm text-[var(--text-secondary)] mt-1">
            Requested data exists in Redis, so the application returns it
            without querying the database.
          </p>
          <p className="font-semibold text-[var(--accent-color)] mt-4">
            Cache Miss
          </p>
          <p className="text-sm text-[var(--text-secondary)] mt-1">
            Requested data does not exist in Redis, so the application fetches
            it from the database and stores it in Redis.
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          3. Redis as a Distributed Cache
        </h2>
        <p className="text-[var(--text-secondary)] leading-7">
          <strong>Redis</strong> is commonly used as a distributed cache because
          it stores data in memory and allows multiple application servers to
          connect to the same Redis deployment.
        </p>

        <p className="text-[var(--text-secondary)] leading-7">
          Instead of storing cached data separately inside each Node.js process,
          all servers can communicate with a shared Redis instance.
        </p>

        <CodeBlock
          code={`// Server 1 and Server 2 can use the same Redis deployment.

import { createClient } from "redis";

const redis = createClient({
  url: process.env.REDIS_URL
});

await redis.connect();

// Store shared data
await redis.set(
  "user:101",
  JSON.stringify({
    name: "Mayur",
    role: "Developer"
  }),
  { EX: 300 }
);

// Read shared data
const user = await redis.get("user:101");

console.log(JSON.parse(user));`}
        />

        <p className="text-[var(--text-secondary)] leading-7">
          Both servers must connect to the same Redis deployment and use
          compatible cache keys to access the same entry.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          4. Distributed Caching with Express and MongoDB
        </h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Let's create a simple API where multiple Express servers can read
          product data from the same Redis cache.
        </p>

        <CodeBlock
          code={`import express from "express";
import { createClient } from "redis";
import Product from "./models/Product.js";

const app = express();

const redis = createClient({
  url: process.env.REDIS_URL
});

await redis.connect();

app.get("/products/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const cacheKey = \`product:\${productId}\`;

    // 1. Check shared Redis cache
    const cachedProduct = await redis.get(cacheKey);

    if (cachedProduct) {
      return res.json({
        source: "Redis Cache",
        product: JSON.parse(cachedProduct)
      });
    }

    // 2. Fetch from MongoDB
    const product = await Product.findById(productId).lean();

    if (!product) {
      return res.status(404).json({
        message: "Product not found"
      });
    }

    // 3. Save data in shared cache
    await redis.set(
      cacheKey,
      JSON.stringify(product),
      { EX: 300 }
    );

    // 4. Return product
    res.json({
      source: "MongoDB",
      product
    });

  } catch (error) {
    res.status(500).json({
      message: "Something went wrong"
    });
  }
});`}
        />

        <p className="text-[var(--text-secondary)] leading-7">
          If Server 1 fetches a product from MongoDB and stores it in Redis,
          Server 2 can reuse the same cached product without making another
          database query.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          5. Advantages of Distributed Caching
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>
            <strong>Shared Data:</strong> Multiple servers access common cached
            data.
          </li>
          <li>
            <strong>Scalability:</strong> Supports applications running across
            multiple servers.
          </li>
          <li>
            <strong>Reduced Database Load:</strong> Avoids repeated database
            queries for cached data.
          </li>
          <li>
            <strong>Better Performance:</strong> Frequently requested data can
            be served quickly.
          </li>
          <li>
            <strong>Centralized Cache Management:</strong> Cache data can be
            managed through a shared system.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          6. Challenges of Distributed Caching
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>
            <strong>Network Latency:</strong> Application servers communicate
            with a remote cache over the network.
          </li>
          <li>
            <strong>Cache Failure:</strong> If Redis becomes unavailable,
            applications may need to fall back to the database.
          </li>
          <li>
            <strong>Data Consistency:</strong> Cache entries must be updated or
            invalidated when source data changes.
          </li>
          <li>
            <strong>Cache Stampede:</strong> Many requests may fetch the same
            missing data simultaneously.
          </li>
          <li>
            <strong>Operational Complexity:</strong> Monitoring, backups,
            scaling and securing the cache require additional work.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          7. Popular Distributed Caching Technologies
        </h2>
        <div className="space-y-3">
          <div className="rounded-lg border border-[var(--border-color)] p-4">
            <h3 className="font-semibold">Redis</h3>
            <p className="text-sm text-[var(--text-secondary)] mt-1">
              An in-memory data store commonly used for caching, sessions,
              counters and real-time data.
            </p>
          </div>
          <div className="rounded-lg border border-[var(--border-color)] p-4">
            <h3 className="font-semibold">Memcached</h3>
            <p className="text-sm text-[var(--text-secondary)] mt-1">
              A distributed in-memory key-value caching system designed for
              simple, fast data storage.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Best Practices</h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>Use meaningful and consistent cache key names.</li>
          <li>Set suitable TTL values for cached data.</li>
          <li>Invalidate cache entries when source data changes.</li>
          <li>Configure connection timeouts and error handling.</li>
          <li>Monitor cache hit rate, latency and memory usage.</li>
          <li>Protect Redis with authentication and network restrictions.</li>
          <li>Plan a fallback strategy for Redis outages.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Interview Questions</h2>
        {[
          {
            q: "What is Distributed Caching?",
            a: "It is a caching approach where multiple application servers share cached data through a common cache system.",
          },
          {
            q: "Why do we need Distributed Caching?",
            a: "It provides shared cache access across multiple servers, reduces repeated database queries and supports scalability.",
          },
          {
            q: "Why is Redis commonly used for Distributed Caching?",
            a: "Redis is an in-memory data store that supports fast operations and allows multiple application servers to connect to a shared deployment.",
          },
          {
            q: "What is the difference between In-Memory Cache and Distributed Cache?",
            a: "An in-memory cache is often stored inside one application process, while a distributed cache is accessed through a separate shared caching system.",
          },
          {
            q: "What happens if Redis goes down?",
            a: "Applications may experience cache failures and should have a suitable fallback strategy, such as fetching data from the database.",
          },
          {
            q: "How do multiple servers access the same Redis cache?",
            a: "They connect to the same Redis deployment using its connection URL and use compatible cache keys.",
          },
          {
            q: "Does Distributed Caching automatically guarantee data consistency?",
            a: "No. Applications still need proper cache invalidation, expiration and failure-handling strategies.",
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
