import React from "react";
import CodeBlock from "../../../components/common/CodeBlock";

const InMemoryCache = () => {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <div className="space-y-2">
        <p className="text-sm font-medium tracking-wider text-[var(--accent-color)]">
          CACHING / 03
        </p>

        <h1 className="text-3xl font-bold">In-Memory Cache</h1>

        <p className="text-base leading-7 text-[var(--text-secondary)]">
          In-memory caching stores frequently accessed data directly in RAM so
          that applications can retrieve it quickly without repeatedly accessing
          slower storage systems.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What is In-Memory Cache?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          In-memory cache is a caching technique where data is stored in the
          main memory (RAM) instead of fetching it repeatedly from a database or
          disk.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          RAM provides very fast access to data, which makes it useful for
          frequently requested information.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-3">
          <p className="font-semibold">Basic Architecture</p>

          <div className="flex flex-col items-center gap-2 text-center text-sm">
            <div className="w-full rounded-lg border border-[var(--border-color)] p-3">
              Client Request
            </div>
            <span className="text-[var(--accent-color)]">↓</span>
            <div className="w-full rounded-lg border border-[var(--accent-color)] p-3">
              Node.js Application
            </div>
            <span className="text-[var(--accent-color)]">↓</span>
            <div className="w-full rounded-lg border border-green-500/40 p-3">
              In-Memory Cache (RAM)
            </div>
            <span className="text-[var(--accent-color)]">↓ Cache Miss</span>
            <div className="w-full rounded-lg border border-[var(--border-color)] p-3">
              Database
            </div>
          </div>
        </div>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. How Does It Work?</h2>

        <ol className="list-decimal space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Client sends a request to the server.</li>
          <li>Application checks whether the data exists in RAM.</li>
          <li>If found, cached data is returned immediately.</li>
          <li>If not found, data is fetched from the database.</li>
          <li>Fetched data is stored in memory for future requests.</li>
        </ol>

        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl border border-green-500/30 p-4 space-y-2">
            <h3 className="font-semibold text-green-500">Cache Hit</h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Data exists in memory. Application returns it without querying the
              database.
            </p>
          </div>

          <div className="rounded-xl border border-orange-500/30 p-4 space-y-2">
            <h3 className="font-semibold text-orange-500">Cache Miss</h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Data is not available in memory. Application fetches it from the
              original data source.
            </p>
          </div>
        </div>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          3. In-Memory Cache Using JavaScript Map
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          JavaScript provides the Map data structure, which can store key-value
          pairs in application memory.
        </p>

        <CodeBlock
          code={`const cache = new Map();

// Store data
cache.set("username", "Mayur");

// Read data
console.log(cache.get("username"));

// Check data
console.log(cache.has("username"));

// Delete data
cache.delete("username");

// Remove all data
cache.clear();`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          In this example, the key is used to identify the cached value. The
          data remains in memory while the Node.js process is running, unless it
          is deleted or the process stops.
        </p>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Practical Node.js Example</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Let's create a simple user caching system. The first request fetches
          the user from MongoDB and stores the result in memory. Later requests
          reuse the cached result.
        </p>

        <CodeBlock
          code={`import express from "express";
import User from "./models/User.js";

const app = express();

const cache = new Map();

app.get("/users/:id", async (req, res) => {
  try {
    const userId = req.params.id;

    // Check cache
    if (cache.has(userId)) {
      console.log("Cache Hit");

      return res.json({
        source: "cache",
        data: cache.get(userId),
      });
    }

    // Cache Miss: Fetch from MongoDB
    console.log("Cache Miss");

    const user = await User.findById(userId).lean();

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // Store in memory
    cache.set(userId, user);

    res.json({
      source: "database",
      data: user,
    });

  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
});

app.listen(3000);`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-2">
          <p className="font-semibold text-[var(--accent-color)]">Execution</p>

          <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--text-secondary)]">
            <li>First request: Cache Miss → MongoDB → Store in Map.</li>
            <li>Second request: Cache Hit → Return data from Map.</li>
            <li>After server restart: Map becomes empty.</li>
          </ul>
        </div>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          5. Adding TTL to In-Memory Cache
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          TTL (Time To Live) defines how long cached data should remain valid.
          We can store an expiration timestamp along with the data.
        </p>

        <CodeBlock
          code={`const cache = new Map();

function setCache(key, value, ttl) {
  const expiresAt = Date.now() + ttl;

  cache.set(key, {
    value,
    expiresAt,
  });
}

function getCache(key) {
  const item = cache.get(key);

  if (!item) {
    return null;
  }

  // Check expiration
  if (Date.now() > item.expiresAt) {
    cache.delete(key);
    return null;
  }

  return item.value;
}

// Store data for 5 minutes
setCache("username", "Mayur", 5 * 60 * 1000);

// Read cached data
console.log(getCache("username"));`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          This implementation checks expiration when data is accessed. Expired
          entries that are never accessed again can remain in memory until
          another cleanup mechanism removes them.
        </p>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Advantages</h2>

        <div className="space-y-3">
          {[
            ["Very Fast Access", "Data is retrieved directly from RAM."],
            [
              "Simple Implementation",
              "JavaScript Map can implement basic in-memory caching.",
            ],
            [
              "No Network Overhead",
              "Local memory access does not require a network request to another cache server.",
            ],
            [
              "Reduced Database Queries",
              "Repeated requests can reuse previously fetched data.",
            ],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="rounded-lg border border-[var(--border-color)] p-3"
            >
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Limitations</h2>

        <div className="space-y-3">
          {[
            {
              title: "1. Data Lost on Restart",
              desc: "When the Node.js process stops, its in-memory cache is lost.",
            },
            {
              title: "2. Not Shared Across Processes",
              desc: "Each Node.js process has its own memory. Other processes cannot automatically access its Map.",
            },
            {
              title: "3. Limited RAM",
              desc: "Storing too much data can consume memory and cause performance problems or out-of-memory errors.",
            },
            {
              title: "4. Cache Invalidation",
              desc: "When database data changes, the cached copy must also be updated or removed.",
            },
            {
              title: "5. Manual Expiration",
              desc: "JavaScript Map does not automatically support TTL or memory eviction policies.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-[var(--border-color)] p-3 space-y-1"
            >
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          8. In-Memory Cache vs Distributed Cache
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-[var(--bg-secondary)]">
                <th className="border border-[var(--border-color)] p-3 text-left">
                  Feature
                </th>
                <th className="border border-[var(--border-color)] p-3 text-left">
                  In-Memory
                </th>
                <th className="border border-[var(--border-color)] p-3 text-left">
                  Distributed
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Storage", "Application RAM", "Separate cache service"],
                ["Sharing", "Single process", "Multiple application instances"],
                ["Network", "No network needed", "Network communication"],
                [
                  "Restart",
                  "Data is lost",
                  "Depends on persistence configuration",
                ],
                ["Example", "JavaScript Map", "Redis"],
              ].map(([feature, local, distributed]) => (
                <tr key={feature}>
                  <td className="border border-[var(--border-color)] p-3 font-medium">
                    {feature}
                  </td>
                  <td className="border border-[var(--border-color)] p-3 text-[var(--text-secondary)]">
                    {local}
                  </td>
                  <td className="border border-[var(--border-color)] p-3 text-[var(--text-secondary)]">
                    {distributed}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 9 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. When Should We Use It?</h2>

        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Small applications running in a single Node.js process.</li>
          <li>Frequently accessed configuration data.</li>
          <li>Temporary application-level data.</li>
          <li>Expensive calculations whose results can be reused.</li>
          <li>Small caches where sharing across servers is not required.</li>
        </ul>

        <p className="leading-7 text-[var(--text-secondary)]">
          For multiple Node.js instances, a shared cache such as Redis is
          generally a better choice.
        </p>
      </section>

      {/* Interview Questions */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Interview Questions</h2>

        {[
          {
            q: "What is in-memory caching?",
            a: "It is a caching technique where frequently accessed data is stored directly in RAM for faster retrieval.",
          },
          {
            q: "How can we implement in-memory caching in Node.js?",
            a: "We can use JavaScript Map or an in-memory caching library to store key-value data inside the Node.js process.",
          },
          {
            q: "What happens to in-memory cache when the server restarts?",
            a: "The data stored in the process memory is lost.",
          },
          {
            q: "Can multiple Node.js processes share the same Map cache?",
            a: "No. Each process has its own memory space. A shared cache service such as Redis can be used instead.",
          },
          {
            q: "What is the biggest limitation of in-memory caching?",
            a: "It is limited by the RAM of the application process and is not automatically shared across multiple processes.",
          },
          {
            q: "How can we implement TTL in a JavaScript Map?",
            a: "Store an expiration timestamp with each value and check that timestamp whenever the cached value is accessed.",
          },
          {
            q: "What is the difference between in-memory caching and Redis?",
            a: "A JavaScript Map stores data inside one application process, whereas Redis is a separate data store that can be shared across multiple application instances.",
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

export default InMemoryCache;
