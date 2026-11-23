import React from "react";
import CodeBlock from "../../../components/common/CodeBlock";

const WhyCaching = () => {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <div className="space-y-2">
        <p className="text-sm font-medium tracking-wider text-[var(--accent-color)]">
          CACHING / 02
        </p>

        <h1 className="text-3xl font-bold">Why Caching?</h1>

        <p className="text-base leading-7 text-[var(--text-secondary)]">
          Caching improves application performance by reducing repeated database
          queries, lowering response time and decreasing the load on backend
          services.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. Why Do We Need Caching?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Imagine an e-commerce application where thousands of users frequently
          request the same product list.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          Without caching, every request may execute the same database query.
          This creates unnecessary database workload and can increase response
          time.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-3">
          <p className="font-semibold">Without Caching</p>

          <div className="space-y-2 text-center text-sm">
            {["User 1", "User 2", "User 3", "User 4"].map((user) => (
              <div
                key={user}
                className="rounded-lg border border-[var(--border-color)] p-2"
              >
                {user} → Database Query
              </div>
            ))}
            <p className="text-[var(--accent-color)]">
              ↓ Repeated database queries
            </p>
            <div className="rounded-lg border border-red-500/40 p-3">
              Database handles every request
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-3">
          <p className="font-semibold">With Caching</p>

          <div className="space-y-2 text-center text-sm">
            <div className="rounded-lg border border-[var(--border-color)] p-2">
              User Requests
            </div>
            <span className="text-[var(--accent-color)]">↓</span>
            <div className="rounded-lg border border-green-500/40 p-3">
              Cache (Redis)
            </div>
            <span className="text-[var(--accent-color)]">↓</span>
            <div className="rounded-lg border border-[var(--border-color)] p-3">
              Return cached data when available
            </div>
            <p className="text-xs text-[var(--text-secondary)]">
              Database is queried when the cache misses.
            </p>
          </div>
        </div>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Benefits of Caching</h2>

        <div className="space-y-3">
          {[
            {
              title: "1. Faster Response Time",
              desc: "Cached data is usually available faster than fetching it from a database or external API.",
            },
            {
              title: "2. Reduced Database Load",
              desc: "Repeated requests can be served from the cache, reducing unnecessary database queries.",
            },
            {
              title: "3. Better Scalability",
              desc: "Caching helps applications handle more requests without increasing database workload at the same rate.",
            },
            {
              title: "4. Reduced Infrastructure Cost",
              desc: "Fewer database operations and external API calls can reduce resource consumption and infrastructure costs.",
            },
            {
              title: "5. Improved User Experience",
              desc: "Faster responses make pages and features feel more responsive to users.",
            },
            {
              title: "6. Protection from Repeated External Calls",
              desc: "Frequently requested external API data can be cached to reduce unnecessary requests and avoid some rate limits.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[var(--border-color)] p-4 space-y-2"
            >
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm leading-6 text-[var(--text-secondary)]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          3. Caching Reduces Database Load
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Suppose 1,000 users request the same product list. Without caching,
          the application might execute 1,000 database queries.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          With caching, the first request can fetch data from the database and
          store it in Redis. Subsequent requests can reuse that cached result
          while it remains valid.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-3">
          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="rounded-lg border border-red-500/40 p-3">
              <p className="text-2xl font-bold text-red-400">1000</p>
              <p className="text-xs text-[var(--text-secondary)]">
                Potential DB queries without cache
              </p>
            </div>

            <div className="rounded-lg border border-green-500/40 p-3">
              <p className="text-2xl font-bold text-green-500">1</p>
              <p className="text-xs text-[var(--text-secondary)]">
                DB query in an idealized cache-warm scenario
              </p>
            </div>
          </div>

          <p className="text-xs leading-5 text-[var(--text-secondary)]">
            This is a simplified example. Actual database query count depends on
            cache expiration, concurrent requests, invalidation and cache
            misses.
          </p>
        </div>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Real-World Example</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Consider a social media application. Thousands of users open the same
          popular post.
        </p>

        <CodeBlock
          code={`// Without caching

app.get("/posts/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);

  res.json(post);
});

// Every request queries MongoDB.`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Now, use Redis to cache frequently accessed posts.
        </p>

        <CodeBlock
          code={`import { createClient } from "redis";

const redis = createClient({
  url: process.env.REDIS_URL,
});

await redis.connect();

app.get("/posts/:id", async (req, res) => {
  const postId = req.params.id;
  const cacheKey = \`post:\${postId}\`;

  // Check Redis first
  const cachedPost = await redis.get(cacheKey);

  if (cachedPost) {
    return res.json({
      source: "cache",
      data: JSON.parse(cachedPost),
    });
  }

  // Fetch from MongoDB on cache miss
  const post = await Post.findById(postId).lean();

  if (!post) {
    return res.status(404).json({
      message: "Post not found",
    });
  }

  // Store in Redis for 5 minutes
  await redis.set(
    cacheKey,
    JSON.stringify(post),
    { EX: 300 }
  );

  res.json({
    source: "database",
    data: post,
  });
});`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-2">
          <p className="font-semibold text-[var(--accent-color)]">
            How It Works
          </p>

          <ol className="list-decimal space-y-2 pl-5 text-sm leading-6 text-[var(--text-secondary)]">
            <li>First request checks Redis.</li>
            <li>If data is missing, MongoDB is queried.</li>
            <li>The result is stored in Redis for 300 seconds.</li>
            <li>Next requests can receive the result from Redis.</li>
            <li>After expiration, the next cache miss fetches fresh data.</li>
          </ol>
        </div>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          5. When Should We Use Caching?
        </h2>

        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Frequently requested product details.</li>
          <li>Public user profiles and frequently accessed posts.</li>
          <li>Dashboard statistics and reports.</li>
          <li>Expensive database query results.</li>
          <li>External API responses that do not change frequently.</li>
          <li>Static assets such as images, CSS and JavaScript files.</li>
        </ul>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          6. When Should We Avoid Caching?
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Caching is not suitable for every type of data. Incorrect caching can
          return stale or sensitive information.
        </p>

        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Highly dynamic data that changes on every request.</li>
          <li>
            Financial transactions that require authoritative current data.
          </li>
          <li>Private user data without proper user-specific cache keys.</li>
          <li>Data that is rarely requested and inexpensive to fetch.</li>
        </ul>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <p className="font-semibold text-[var(--accent-color)]">Important</p>
          <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
            Never assume cached data is always fresh. Choose an appropriate TTL
            and invalidation strategy. For sensitive operations, use the
            authoritative data source and proper consistency checks.
          </p>
        </div>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Important Points</h2>

        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Caching improves read performance.</li>
          <li>Redis is commonly used for backend caching.</li>
          <li>Cache hits reduce repeated database queries.</li>
          <li>TTL controls how long cached data remains valid.</li>
          <li>Cache invalidation helps keep cached data consistent.</li>
          <li>
            Caching adds another layer that must be monitored and maintained.
          </li>
        </ul>
      </section>

      {/* Interview Questions */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Interview Questions</h2>

        {[
          {
            q: "Why do we use caching in backend applications?",
            a: "Caching reduces response time, repeated database queries and workload on backend services.",
          },
          {
            q: "How does caching improve performance?",
            a: "It stores frequently accessed data in faster storage so that future requests can avoid expensive database or external API operations.",
          },
          {
            q: "How does caching reduce database load?",
            a: "When data is available in the cache, the application returns it without querying the database again.",
          },
          {
            q: "Does caching always improve performance?",
            a: "No. Cache lookup, maintenance and invalidation have costs. Caching is most useful for frequently accessed or expensive-to-fetch data.",
          },
          {
            q: "What is stale data?",
            a: "Stale data is cached data that no longer matches the latest data in the original source.",
          },
          {
            q: "Should we cache sensitive user data?",
            a: "It can be cached only with proper access control, user-specific cache keys, suitable expiration and secure storage. Sensitive data should never be exposed through shared cache entries.",
          },
          {
            q: "What happens when a cache expires?",
            a: "The expired entry is no longer considered valid. The application generally fetches fresh data from the original source and may cache it again.",
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

export default WhyCaching;
