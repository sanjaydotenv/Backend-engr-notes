import React from "react";
import CodeBlock from "../../../components/common/CodeBlock";

const WhatisCaching = () => {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <div className="space-y-2">
        <p className="text-sm font-medium tracking-wider text-[var(--accent-color)]">
          CACHING / 01
        </p>

        <h1 className="text-3xl font-bold">What is Caching?</h1>

        <p className="text-base text-[var(--text-secondary)]">
          Caching is a technique of temporarily storing frequently used data so
          that it can be accessed faster without repeatedly fetching it from the
          original source.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What is Caching?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Caching means storing a copy of data in a faster storage system. When
          the same data is requested again, the application can return it from
          the cache instead of accessing the database or another slower source.
        </p>

        <p className="text-[var(--text-secondary)] leading-7">
          The stored copy is called <strong>Cache</strong>, and the system that
          stores it is called a <strong>Cache Layer</strong>.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-2">
          <p className="font-semibold text-[var(--accent-color)]">
            Simple Example
          </p>
          <p className="text-sm text-[var(--text-secondary)] leading-6">
            Imagine you visit a website and open your profile. The server
            fetches your profile from MongoDB and stores a copy in Redis. When
            you open the same profile again, the server can return the data from
            Redis instead of querying MongoDB again.
          </p>
        </div>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. How Caching Works</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          When a request arrives, the application first checks whether the
          requested data exists in the cache.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <div className="flex flex-col items-center gap-2 text-center text-sm">
            <div className="w-full rounded-lg border border-[var(--border-color)] p-3">
              Client Request
            </div>
            <span className="text-[var(--accent-color)]">↓</span>
            <div className="w-full rounded-lg border border-[var(--accent-color)] p-3">
              Check Cache
            </div>
            <div className="grid w-full grid-cols-2 gap-3">
              <div className="space-y-2">
                <p className="font-semibold text-green-500">Cache Hit</p>
                <div className="rounded-lg border border-green-500/30 p-3">
                  Data Found
                </div>
                <span className="text-green-500">↓</span>
                <div className="rounded-lg border border-green-500/30 p-3">
                  Return Cached Data
                </div>
              </div>

              <div className="space-y-2">
                <p className="font-semibold text-orange-500">Cache Miss</p>
                <div className="rounded-lg border border-orange-500/30 p-3">
                  Data Not Found
                </div>
                <span className="text-orange-500">↓</span>
                <div className="rounded-lg border border-orange-500/30 p-3">
                  Fetch from Database
                </div>
                <span className="text-orange-500">↓</span>
                <div className="rounded-lg border border-orange-500/30 p-3">
                  Store in Cache
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <p className="font-semibold">Two important terms:</p>

          <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
            <li>
              <strong>Cache Hit:</strong> Requested data is already available in
              the cache.
            </li>
            <li>
              <strong>Cache Miss:</strong> Requested data is not available in
              the cache, so the application fetches it from the original data
              source.
            </li>
          </ul>
        </div>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          3. Without Cache vs With Cache
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-[var(--border-color)] p-4 space-y-2">
            <h3 className="font-semibold text-red-400">Without Cache</h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Every request goes directly to the database.
            </p>
            <div className="rounded-lg bg-[var(--bg-secondary)] p-3 text-center text-sm">
              Client
              <div className="my-2">↓</div>
              Database
              <div className="my-2">↓</div>
              Response
            </div>
          </div>

          <div className="rounded-xl border border-[var(--border-color)] p-4 space-y-2">
            <h3 className="font-semibold text-green-500">With Cache</h3>
            <p className="text-sm text-[var(--text-secondary)]">
              The application checks the cache before querying the database.
            </p>
            <div className="rounded-lg bg-[var(--bg-secondary)] p-3 text-center text-sm">
              Client
              <div className="my-2">↓</div>
              Cache
              <div className="my-2">↓</div>
              Database (only on cache miss)
            </div>
          </div>
        </div>

        <p className="text-sm text-[var(--text-secondary)]">
          Caching can reduce database queries, response time and database
          workload, especially when the same data is requested frequently.
        </p>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          4. Simple Node.js Caching Example
        </h2>

        <p className="text-[var(--text-secondary)] leading-7">
          We can understand caching using a JavaScript Map. It stores data in
          application memory and allows us to reuse previously fetched results.
        </p>

        <CodeBlock
          code={`const cache = new Map();

async function getUser(userId) {
  // 1. Check cache
  if (cache.has(userId)) {
    console.log("Cache Hit");
    return cache.get(userId);
  }

  // 2. Fetch from database
  console.log("Cache Miss");

  const user = await User.findById(userId);

  if (!user) {
    return null;
  }

  // 3. Store data in cache
  cache.set(userId, user);

  return user;
}

// First request: Cache Miss
const firstUser = await getUser("123");

// Second request: Cache Hit
const secondUser = await getUser("123");`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-2">
          <p className="font-semibold text-[var(--accent-color)]">Important</p>
          <p className="text-sm text-[var(--text-secondary)] leading-6">
            JavaScript Map is only an educational example. It does not
            automatically expire data, share data across multiple Node.js
            processes, or persist data after a restart. Production applications
            commonly use Redis or another dedicated cache.
          </p>
        </div>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          5. Common Caching Technologies
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-[var(--bg-secondary)]">
                <th className="border border-[var(--border-color)] p-3 text-left">
                  Technology
                </th>
                <th className="border border-[var(--border-color)] p-3 text-left">
                  Purpose
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Redis", "In-memory data store commonly used as a cache."],
                ["Memcached", "Distributed in-memory caching system."],
                ["Node.js Map", "Simple application-level in-memory cache."],
                ["Browser Cache", "Stores resources in the user's browser."],
                ["CDN Cache", "Stores content closer to users geographically."],
              ].map(([name, purpose]) => (
                <tr key={name}>
                  <td className="border border-[var(--border-color)] p-3 font-medium">
                    {name}
                  </td>
                  <td className="border border-[var(--border-color)] p-3 text-[var(--text-secondary)]">
                    {purpose}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Where is Caching Used?</h2>

        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Storing frequently accessed user profiles.</li>
          <li>Caching product lists and product details.</li>
          <li>Reducing repeated database queries.</li>
          <li>Storing API responses for a limited time.</li>
          <li>Serving images, CSS and JavaScript files through a CDN.</li>
          <li>Storing temporary authentication or session-related data.</li>
        </ul>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Important Caching Terms</h2>

        <div className="space-y-3">
          {[
            ["Cache Hit", "Data is found in the cache and returned directly."],
            [
              "Cache Miss",
              "Data is not found in the cache and must be fetched from the original source.",
            ],
            [
              "Cache Expiration",
              "The time after which cached data becomes expired.",
            ],
            [
              "TTL (Time To Live)",
              "The duration for which cached data remains valid.",
            ],
            [
              "Cache Invalidation",
              "Removing or updating cached data when the original data changes.",
            ],
          ].map(([term, description]) => (
            <div
              key={term}
              className="rounded-lg border border-[var(--border-color)] p-3"
            >
              <h3 className="font-semibold">{term}</h3>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Interview Questions */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Interview Questions</h2>

        {[
          {
            q: "What is caching?",
            a: "Caching is a technique of storing frequently accessed data in faster storage so that future requests can be served quickly.",
          },
          {
            q: "Why do we use caching?",
            a: "To reduce response time, avoid repeated database queries and reduce the workload on the original data source.",
          },
          {
            q: "What is a cache hit?",
            a: "A cache hit occurs when the requested data is available in the cache.",
          },
          {
            q: "What is a cache miss?",
            a: "A cache miss occurs when the requested data is not available in the cache, so it must be fetched from the original source.",
          },
          {
            q: "What is TTL?",
            a: "TTL stands for Time To Live. It defines how long cached data should remain valid.",
          },
          {
            q: "What is the difference between Redis and JavaScript Map?",
            a: "Map stores data inside one Node.js process. Redis is a separate data store that can be shared by multiple application instances and supports persistence options.",
          },
          {
            q: "Does caching always improve performance?",
            a: "No. Cache lookup, storage and invalidation also have costs. Caching is most useful for frequently accessed data that is expensive to fetch.",
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

export default WhatisCaching;
