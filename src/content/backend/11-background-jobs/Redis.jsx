import CodeBlock from "../../../components/common/CodeBlock";

export default function Redis() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">

      <div>
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          BACKGROUND JOBS / 06
        </p>
        <h1 className="mt-2 text-3xl font-bold">Redis in Node.js</h1>
        <p className="mt-3 leading-7 text-[var(--text-secondary)]">
          Redis is an in-memory data store used for caching, queues,
          sessions, real-time messaging and fast data access. It stores
          data in memory, making many operations extremely fast.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What Is Redis?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Redis stands for Remote Dictionary Server. It is an open-source
          in-memory data structure store that supports different types
          of data, such as strings, lists, sets and hashes.
        </p>
        <p className="leading-7 text-[var(--text-secondary)]">
          Unlike traditional databases that commonly read data from
          disk, Redis primarily works with memory. This makes it useful
          when applications need very fast data access.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. How Does Redis Work?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Redis runs as a separate server. Your Node.js application
          connects to it through a Redis client and sends commands.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <div className="flex flex-col items-center gap-2 text-center text-sm">
            {[
              ["Node.js Application", "Sends Redis commands"],
              ["Redis Client", "Connects to Redis server"],
              ["Redis Server", "Reads or updates data in memory"],
              ["Response", "Returns the result"]
            ].map(([title, description], index) => (
              <div key={title} className="w-full">
                <div className="rounded-lg border border-[var(--border-color)] p-3">
                  <p className="font-semibold text-[var(--accent-color)]">{title}</p>
                  <p className="mt-1 text-[var(--text-secondary)]">{description}</p>
                </div>
                {index !== 3 && (
                  <div className="py-1 text-[var(--accent-color)]">↓</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Why Do We Use Redis?</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Cache frequently requested database results.</li>
          <li>Store temporary data with expiration times.</li>
          <li>Manage background job queues using BullMQ.</li>
          <li>Store user sessions and authentication-related data.</li>
          <li>Implement rate limiting.</li>
          <li>Support real-time messaging and event streaming.</li>
          <li>Maintain counters and other frequently updated values.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Install and Run Redis</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Redis server must be running before your Node.js application
          can connect to it.
        </p>

        <p className="font-medium">Option 1: Run Redis using Docker</p>
        <CodeBlock code={`docker run -d \\
  --name redis-server \\
  -p 6379:6379 \\
  redis`} />

        <p className="font-medium">Option 2: Install Redis on Linux</p>
        <CodeBlock code={`sudo apt update
sudo apt install redis-server
sudo systemctl start redis-server`} />

        <p className="font-medium">Test the Redis connection</p>
        <CodeBlock code={`redis-cli ping

# Expected output:
PONG`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Redis commonly uses port 6379 by default. Docker and Linux
          installation commands are examples; Windows users can run
          Redis through Docker or a suitable Linux environment such as WSL.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Connect Redis with Node.js</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Install the ioredis package to connect your Node.js application
          with Redis.
        </p>

        <CodeBlock code={`npm install ioredis`} />

        <p className="font-medium">Create a Redis connection</p>
        <CodeBlock code={`// config/redis.js
import Redis from "ioredis";

const redis = new Redis({
  host: "127.0.0.1",
  port: 6379
});

redis.on("connect", () => {
  console.log("Redis connected");
});

redis.on("error", (error) => {
  console.error("Redis error:", error.message);
});

export default redis;`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          This connection can be imported wherever your application
          needs to perform Redis operations. In production, configure
          the connection securely using environment variables.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Basic Redis Operations</h2>

        <p className="font-medium">SET and GET</p>
        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Store and retrieve string values.
        </p>
        <CodeBlock code={`import redis from "./config/redis.js";

// Store data
await redis.set("username", "Mayur");

// Get data
const username = await redis.get("username");

console.log(username); // Mayur`} />

        <p className="font-medium">DEL</p>
        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Delete a key from Redis.
        </p>
        <CodeBlock code={`await redis.del("username");`} />

        <p className="font-medium">EXPIRE and TTL</p>
        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Set an expiration time and check the remaining lifetime.
        </p>
        <CodeBlock code={`await redis.set("otp", "123456");

await redis.expire("otp", 300);

// Remaining time in seconds
const remainingTime = await redis.ttl("otp");`} />

        <p className="font-medium">INCR</p>
        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Atomically increment a numeric value.
        </p>
        <CodeBlock code={`await redis.incr("page-visits");

const visits = await redis.get("page-visits");

console.log(visits);`} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Redis Data Structures</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Redis supports different data structures for storing and
          managing information.
        </p>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[500px] text-left text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">Data Type</th>
                <th className="p-3">Purpose</th>
                <th className="p-3">Example</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-t border-[var(--border-color)]">
                <td className="p-3 font-medium">String</td>
                <td className="p-3">Stores simple values.</td>
                <td className="p-3">User name, OTP</td>
              </tr>
              <tr className="border-t border-[var(--border-color)]">
                <td className="p-3 font-medium">List</td>
                <td className="p-3">Stores ordered elements.</td>
                <td className="p-3">Task lists</td>
              </tr>
              <tr className="border-t border-[var(--border-color)]">
                <td className="p-3 font-medium">Set</td>
                <td className="p-3">Stores unique elements.</td>
                <td className="p-3">Unique user IDs</td>
              </tr>
              <tr className="border-t border-[var(--border-color)]">
                <td className="p-3 font-medium">Hash</td>
                <td className="p-3">Stores field-value pairs.</td>
                <td className="p-3">User profile</td>
              </tr>
              <tr className="border-t border-[var(--border-color)]">
                <td className="p-3 font-medium">Sorted Set</td>
                <td className="p-3">Stores unique elements with scores.</td>
                <td className="p-3">Leaderboards</td>
              </tr>
              <tr className="border-t border-[var(--border-color)]">
                <td className="p-3 font-medium">Stream</td>
                <td className="p-3">Stores ordered event records.</td>
                <td className="p-3">Event processing</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="font-medium">Example: Redis Hash</p>
        <CodeBlock code={`// Store user fields
await redis.hset("user:1", {
  name: "Mayur",
  email: "mayur@example.com"
});

// Get all user fields
const user = await redis.hgetall("user:1");

console.log(user);`} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Redis as a Cache</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Redis is commonly used to cache frequently requested data.
          Instead of querying MongoDB every time, the application
          checks Redis first.
        </p>

        <CodeBlock code={`const getUser = async (userId) => {
  const cacheKey = \`user:\${userId}\`;

  // Check Redis first
  const cachedUser = await redis.get(cacheKey);

  if (cachedUser) {
    return JSON.parse(cachedUser);
  }

  // Fetch from MongoDB if cache misses
  const user = await User.findById(userId);

  if (!user) return null;

  // Store in Redis for 5 minutes
  await redis.set(
    cacheKey,
    JSON.stringify(user),
    "EX",
    300
  );

  return user;
};`} />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <p className="font-semibold text-[var(--accent-color)]">Cache Flow</p>
          <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
            Request → Redis Check → Cache Hit: Return Data
            → Cache Miss: Fetch MongoDB → Save in Redis → Return Data
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Redis in Background Jobs (BullMQ)</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          BullMQ uses Redis to store and coordinate jobs. Producers
          add jobs, and workers retrieve and process them through
          the same Redis-backed queue.
        </p>

        <CodeBlock code={`import { Queue, Worker } from "bullmq";

const connection = {
  host: "127.0.0.1",
  port: 6379
};

// Create queue
const emailQueue = new Queue("email-queue", {
  connection
});

// Add a job
await emailQueue.add("send-email", {
  email: "user@example.com"
});

// Process jobs
const worker = new Worker(
  "email-queue",
  async (job) => {
    console.log("Processing:", job.data.email);
  },
  { connection }
);`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Redis acts as the storage and coordination layer. BullMQ
          manages job states, retries, scheduling and worker coordination.
          Redis itself is not the job-processing library.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Redis Pub/Sub vs Redis Streams</h2>

        <div className="space-y-3">
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
            <h3 className="font-semibold text-[var(--accent-color)]">Redis Pub/Sub</h3>
            <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">
              Allows publishers to send messages to channels and
              subscribers to receive them in real time. Messages are
              not stored for disconnected subscribers.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
            <h3 className="font-semibold text-[var(--accent-color)]">Redis Streams</h3>
            <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">
              Stores ordered messages in a stream. Consumers can read
              existing entries, use consumer groups and acknowledge
              processed messages.
            </p>
          </div>
        </div>

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Use Pub/Sub for live notifications where missed messages
          are acceptable. Use Streams when messages need to be retained
          and processed later.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">11. Redis Persistence</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Redis primarily stores data in memory, but it also supports
          persistence options to save data to disk.
        </p>

        <div className="space-y-3">
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
            <h3 className="font-semibold">RDB (Snapshotting)</h3>
            <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">
              Saves snapshots of Redis data at configured intervals.
              It is useful for backups, but changes made after the
              last snapshot may be lost if Redis crashes.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
            <h3 className="font-semibold">AOF (Append Only File)</h3>
            <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">
              Records write operations in a log so Redis can replay
              them during recovery. Its durability depends on the
              configured fsync policy.
            </p>
          </div>
        </div>

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Redis can use RDB, AOF, both, or neither depending on
          configuration. Persistence settings should match the
          application's data-loss requirements.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">12. Important Things to Remember</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Redis is an in-memory data store.</li>
          <li>Redis commonly runs on port 6379.</li>
          <li>It supports Strings, Lists, Sets, Hashes, Sorted Sets and Streams.</li>
          <li>TTL automatically expires keys after a configured time.</li>
          <li>Redis is widely used for caching and background queues.</li>
          <li>BullMQ uses Redis to manage jobs.</li>
          <li>Pub/Sub messages are not retained for offline subscribers.</li>
          <li>Streams retain entries and support consumer groups.</li>
          <li>RDB and AOF provide persistence options.</li>
          <li>Redis memory limits and eviction policies should be configured carefully.</li>
          <li>Do not treat Redis as a permanent database unless its persistence and recovery setup meets your requirements.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">13. Interview Questions</h2>

        {[
          ["What is Redis?", "Redis is an in-memory data store used for caching, messaging, sessions and other fast data operations."],
          ["Why is Redis fast?", "Redis primarily stores and processes data in memory, reducing disk access for normal operations."],
          ["Is Redis a database?", "Yes. Redis is an in-memory data store that supports persistence, although it is commonly used as a cache."],
          ["What is TTL in Redis?", "TTL stands for Time To Live. It defines how long a key remains before expiration."],
          ["What are Redis data structures?", "Redis supports Strings, Lists, Sets, Hashes, Sorted Sets, Streams and other structures."],
          ["What is Redis caching?", "Redis caching stores frequently accessed data so applications can retrieve it without repeatedly querying the primary database."],
          ["What is the difference between RDB and AOF?", "RDB saves point-in-time snapshots, while AOF records write operations for recovery."],
          ["What is Redis Pub/Sub?", "It is a messaging mechanism where publishers send messages to channels and subscribers receive them."],
          ["What is Redis Streams?", "Streams are an append-only log-like data structure that stores ordered messages and supports consumer groups."],
          ["How does BullMQ use Redis?", "BullMQ uses Redis to store jobs and coordinate job states, retries and worker processing."],
          ["What happens if Redis restarts?", "Recovery depends on persistence settings. Without persistence, in-memory data can be lost."],
          ["What is a Redis eviction policy?", "It defines which keys Redis removes when memory reaches its configured limit."]
        ].map(([question, answer], index) => (
          <details key={index} className="group rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
            <summary className="cursor-pointer font-medium">
              {index + 1}. {question}
            </summary>
            <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
              {answer}
            </p>
          </details>
        ))}
      </section>

    </div>
  );
}