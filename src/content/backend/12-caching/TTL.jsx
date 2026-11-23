import CodeBlock from "../../../components/common/CodeBlock";

export default function TTL() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          CACHING / 08
        </p>
        <h1 className="text-3xl font-bold mt-2">TTL (Time To Live)</h1>
        <p className="text-[var(--text-secondary)] mt-3 leading-7">
          TTL (Time To Live) defines how long cached data remains available
          before it automatically expires. It helps prevent outdated data from
          staying in the cache for too long.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. How TTL Works</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          When we store data in a cache, we can assign an expiration time. After
          that time, the cache automatically removes the entry.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-3 text-center">
          <div className="rounded-lg border border-[var(--border-color)] p-3">
            Store Data in Cache
          </div>
          <div className="text-[var(--accent-color)]">↓</div>
          <div className="rounded-lg border border-[var(--accent-color)] p-3">
            TTL = 300 Seconds
          </div>
          <div className="text-[var(--accent-color)]">↓</div>
          <div className="rounded-lg border border-[var(--border-color)] p-3">
            Data remains available for 5 minutes
          </div>
          <div className="text-[var(--accent-color)]">↓</div>
          <div className="rounded-lg border border-red-500/40 p-3">
            Entry expires automatically
          </div>
        </div>

        <p className="text-[var(--text-secondary)] leading-7">
          For example, if we set TTL to 300 seconds, the cache entry expires
          after 5 minutes.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. TTL in Redis</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Redis supports expiration directly. We can set TTL while storing a key
          or add expiration to an existing key.
        </p>

        <h3 className="font-semibold text-[var(--accent-color)]">
          A. EX - Expiration in Seconds
        </h3>
        <CodeBlock code={`SET user:1 "Mayur" EX 300`} />
        <p className="text-[var(--text-secondary)]">
          The key expires after 300 seconds (5 minutes).
        </p>

        <h3 className="font-semibold text-[var(--accent-color)]">
          B. PX - Expiration in Milliseconds
        </h3>
        <CodeBlock code={`SET otp:123456 "verified" PX 30000`} />
        <p className="text-[var(--text-secondary)]">
          The key expires after 30,000 milliseconds (30 seconds).
        </p>

        <h3 className="font-semibold text-[var(--accent-color)]">
          C. EXPIRE - Set Expiration on an Existing Key
        </h3>
        <CodeBlock
          code={`SET session:101 "active"

EXPIRE session:101 600`}
        />
        <p className="text-[var(--text-secondary)]">
          The existing key will expire after 600 seconds (10 minutes).
        </p>

        <h3 className="font-semibold text-[var(--accent-color)]">
          D. PEXPIRE - Expiration in Milliseconds
        </h3>
        <CodeBlock code={`PEXPIRE session:101 30000`} />
        <p className="text-[var(--text-secondary)]">
          Sets the existing key's expiration to 30 seconds.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Check Remaining TTL</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Redis provides commands to check how much time remains before a key
          expires.
        </p>

        <CodeBlock
          code={`SET user:1 "Mayur" EX 300

TTL user:1

// Example output:
// 245`}
        />

        <p className="text-[var(--text-secondary)] leading-7">
          The <code className="text-[var(--accent-color)]">TTL</code> command
          returns the remaining time in seconds.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="text-left p-3">Result</th>
                <th className="text-left p-3">Meaning</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Positive number</td>
                <td className="p-3">Remaining TTL in seconds.</td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">-1</td>
                <td className="p-3">Key exists but has no expiration.</td>
              </tr>
              <tr>
                <td className="p-3">-2</td>
                <td className="p-3">Key does not exist or has expired.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-[var(--text-secondary)] leading-7">
          Redis also provides{" "}
          <code className="text-[var(--accent-color)]">PTTL</code>, which
          returns the remaining TTL in milliseconds.
        </p>
        <CodeBlock
          code={`PTTL user:1

// Example output:
// 245000`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Remove Expiration</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          If we want a key to remain in Redis without an expiration time, we can
          use the PERSIST command.
        </p>
        <CodeBlock
          code={`SET user:1 "Mayur" EX 300

PERSIST user:1

TTL user:1

// Output:
// -1`}
        />
        <p className="text-[var(--text-secondary)]">
          PERSIST removes the expiration from an existing key.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. TTL with Node.js and Redis</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Using the Redis Node.js client, we can set expiration while storing
          cached data.
        </p>

        <CodeBlock
          code={`import { createClient } from "redis";

const redis = createClient({
  url: process.env.REDIS_URL
});

await redis.connect();

// Store data with 5-minute TTL
await redis.set(
  "user:1",
  JSON.stringify({
    name: "Mayur",
    role: "Developer"
  }),
  {
    EX: 300
  }
);

// Get cached data
const user = await redis.get("user:1");

// Check remaining TTL
const remainingTime = await redis.ttl("user:1");

console.log(user);
console.log(remainingTime);`}
        />

        <p className="text-[var(--text-secondary)] leading-7">
          Here, Redis automatically expires the user data after 5 minutes. The
          application does not need to manually delete it.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Choosing the Right TTL</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          TTL depends on how frequently data changes and how much outdated
          information the application can tolerate.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="text-left p-3">Data</th>
                <th className="text-left p-3">Example TTL</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">OTP</td>
                <td className="p-3">30-300 seconds</td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">API response</td>
                <td className="p-3">1-5 minutes</td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Product details</td>
                <td className="p-3">5-30 minutes</td>
              </tr>
              <tr>
                <td className="p-3">Public configuration</td>
                <td className="p-3">Several hours</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-[var(--text-secondary)]">
          These are example values, not fixed rules. Choose TTL according to
          freshness requirements and application behavior.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Important Points</h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>TTL prevents cached data from staying forever.</li>
          <li>Redis supports automatic key expiration.</li>
          <li>EX uses seconds, while PX uses milliseconds.</li>
          <li>
            TTL checks remaining time in seconds; PTTL checks milliseconds.
          </li>
          <li>PERSIST removes an existing key's expiration.</li>
          <li>
            TTL alone does not guarantee that cached data is always fresh.
            Updates may still require cache invalidation.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Interview Questions</h2>
        {[
          {
            q: "What is TTL in caching?",
            a: "TTL (Time To Live) defines how long cached data remains available before it expires.",
          },
          {
            q: "How do you set TTL in Redis?",
            a: "Use EX for seconds or PX for milliseconds with the SET command.",
          },
          {
            q: "What is the difference between EX and PX?",
            a: "EX sets expiration in seconds, while PX sets expiration in milliseconds.",
          },
          {
            q: "What is the difference between TTL and PTTL?",
            a: "TTL returns the remaining expiration time in seconds, while PTTL returns it in milliseconds.",
          },
          {
            q: "What does TTL return when a key has no expiration?",
            a: "It returns -1.",
          },
          {
            q: "What does TTL return when a key does not exist?",
            a: "It returns -2.",
          },
          {
            q: "What is the PERSIST command?",
            a: "PERSIST removes the expiration time from an existing Redis key.",
          },
          {
            q: "Does TTL guarantee fresh data?",
            a: "No. TTL limits how long data stays cached, but database updates may require explicit cache invalidation.",
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
