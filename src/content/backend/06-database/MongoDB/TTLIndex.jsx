import CodeBlock from "../../../../components/common/CodeBlock";

export default function TTLIndex() {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--primary-color)]">
          MONGODB / 22
        </p>

        <h1 className="text-3xl font-bold">TTL Index</h1>

        <p className="text-base leading-7 text-[var(--text-secondary)]">
          A TTL (Time To Live) Index is a special type of index that
          automatically removes documents from a MongoDB collection after a
          specified amount of time.
        </p>
      </div>

      {/* 1. Introduction */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">1. What Is a TTL Index?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          TTL stands for Time To Live. It defines how long a document should
          remain in a collection before it becomes eligible for deletion.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB uses a background process called the TTL Monitor to
          automatically delete expired documents.
        </p>

        <CodeBlock
          code={`// Create a TTL Index
db.sessions.createIndex(
  { createdAt: 1 },
  { expireAfterSeconds: 3600 }
)`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Here, documents become eligible for deletion 3600 seconds (1 hour)
          after their createdAt time.
        </p>
      </section>

      {/* 2. Why TTL */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">2. Why Do We Need TTL Indexes?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Many applications store temporary data that should not remain in
          the database forever.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              title: "OTP Records",
              description: "Automatically remove expired OTP documents.",
            },
            {
              title: "Sessions",
              description: "Delete old or expired session records.",
            },
            {
              title: "Verification Tokens",
              description: "Remove expired email verification tokens.",
            },
            {
              title: "Temporary Logs",
              description: "Clean up old logs after a retention period.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-2"
            >
              <h3 className="font-semibold text-[var(--primary-color)]">
                {item.title}
              </h3>
              <p className="text-sm leading-6 text-[var(--text-secondary)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. How TTL Works */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">3. How Does a TTL Index Work?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB checks indexed documents in the background. When a document
          reaches its expiration time, it becomes eligible for deletion.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-4">
          <div className="rounded-lg bg-[var(--bg-tertiary)] p-3 text-center">
            <p className="font-semibold">Document Created</p>
            <p className="text-xs text-[var(--text-secondary)]">
              createdAt: 10:00 AM
            </p>
          </div>

          <div className="text-center text-[var(--primary-color)]">↓</div>

          <div className="rounded-lg bg-[var(--bg-tertiary)] p-3 text-center">
            <p className="font-semibold">TTL Index Applied</p>
            <p className="text-xs text-[var(--text-secondary)]">
              expireAfterSeconds: 3600
            </p>
          </div>

          <div className="text-center text-[var(--primary-color)]">↓</div>

          <div className="rounded-lg bg-[var(--bg-tertiary)] p-3 text-center">
            <p className="font-semibold">Expiration Time Reached</p>
            <p className="text-xs text-[var(--text-secondary)]">
              11:00 AM
            </p>
          </div>

          <div className="text-center text-[var(--primary-color)]">↓</div>

          <div className="rounded-lg border border-[var(--primary-color)] bg-[var(--primary-soft)] p-3 text-center">
            <p className="font-semibold text-[var(--primary-color)]">
              TTL Monitor Deletes Document
            </p>
            <p className="text-xs text-[var(--text-secondary)]">
              Deletion happens in the background.
            </p>
          </div>
        </div>

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Important: TTL deletion is not immediate. MongoDB's background
          monitor checks expired documents periodically, so a document may
          remain in the collection for some time after its expiration.
        </p>
      </section>

      {/* 4. Creating TTL Index */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">4. Creating a TTL Index</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          We use createIndex() with the expireAfterSeconds option to create a
          TTL Index.
        </p>

        <CodeBlock
          code={`db.sessions.createIndex(
  { createdAt: 1 },
  {
    expireAfterSeconds: 3600
  }
)`}
        />

        <p className="font-medium">Understanding the options:</p>

        <div className="space-y-2">
          {[
            ["createdAt", "The Date field used to calculate expiration."],
            ["1", "TTL indexes require an ascending index."],
            ["expireAfterSeconds", "Number of seconds before expiration."],
            ["3600", "One hour in seconds."],
          ].map(([key, value]) => (
            <div
              key={key}
              className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-3"
            >
              <p className="font-semibold text-[var(--primary-color)]">
                {key}
              </p>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">
                {value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. expireAfterSeconds */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">5. Understanding expireAfterSeconds</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          expireAfterSeconds specifies how many seconds after the indexed
          document's date value it becomes eligible for deletion.
        </p>

        <CodeBlock
          code={`// 5 minutes
db.otps.createIndex(
  { createdAt: 1 },
  { expireAfterSeconds: 300 }
)

// 1 hour
db.sessions.createIndex(
  { createdAt: 1 },
  { expireAfterSeconds: 3600 }
)

// 1 day
db.logs.createIndex(
  { createdAt: 1 },
  { expireAfterSeconds: 86400 }
)`}
        />

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-left text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">Duration</th>
                <th className="p-3">Seconds</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              {[
                ["1 Minute", "60"],
                ["5 Minutes", "300"],
                ["10 Minutes", "600"],
                ["1 Hour", "3,600"],
                ["1 Day", "86,400"],
                ["7 Days", "604,800"],
                ["30 Days", "2,592,000"],
              ].map(([duration, seconds]) => (
                <tr key={duration}>
                  <td className="p-3">{duration}</td>
                  <td className="p-3 text-[var(--text-secondary)]">
                    {seconds}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 6. Document Example */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">6. Document Example with TTL</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          A TTL index works with a field containing a BSON Date value.
        </p>

        <CodeBlock
          code={`// Insert a session document
db.sessions.insertOne({
  userId: 101,
  token: "abc123",
  createdAt: new Date()
})

// Create TTL Index
db.sessions.createIndex(
  { createdAt: 1 },
  { expireAfterSeconds: 3600 }
)`}
        />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          MongoDB calculates the expiration time using createdAt plus 3600
          seconds. The document becomes eligible for deletion after that time.
        </p>
      </section>

      {/* 7. expireAt Pattern */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">7. Expiring Documents at a Specific Time</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Sometimes we want a document to expire at a specific date and time,
          instead of a fixed duration after creation.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          We can use expireAfterSeconds: 0 with a Date field containing the
          exact expiration time.
        </p>

        <CodeBlock
          code={`// Create TTL Index
db.otps.createIndex(
  { expireAt: 1 },
  { expireAfterSeconds: 0 }
)

// Insert OTP with expiration time
db.otps.insertOne({
  email: "mayur@gmail.com",
  otp: "123456",
  expireAt: new Date(
    Date.now() + 5 * 60 * 1000
  )
})`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Here, the OTP becomes eligible for deletion five minutes after
          insertion.
        </p>
      </section>

      {/* 8. Node.js Example */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">8. TTL Index in Node.js</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          We can create TTL indexes using the MongoDB Node.js driver's
          createIndex() method.
        </p>

        <CodeBlock
          code={`import { MongoClient } from "mongodb";

const client = new MongoClient(
  process.env.MONGODB_URI
);

async function main() {
  await client.connect();

  const db = client.db("myDatabase");
  const otps = db.collection("otps");

  // Create TTL Index
  await otps.createIndex(
    { expireAt: 1 },
    { expireAfterSeconds: 0 }
  );

  // Insert OTP
  await otps.insertOne({
    email: "mayur@gmail.com",
    otp: "123456",
    expireAt: new Date(
      Date.now() + 5 * 60 * 1000
    )
  });

  console.log("OTP created with expiration");

  await client.close();
}

main().catch(console.error);`}
        />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          The TTL index automatically handles expiration. You do not need to
          manually delete the document using setTimeout().
        </p>
      </section>

      {/* 9. TTL Restrictions */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">9. TTL Index Restrictions</h2>

        <div className="space-y-3">
          {[
            "TTL indexes work only on single fields, not compound indexes.",
            "The indexed field must contain BSON Date values for expiration.",
            "TTL indexes must use ascending order (1).",
            "A collection can have only one TTL index.",
            "The _id field cannot be used as a TTL index.",
            "TTL deletion happens in the background, not immediately.",
            "The expireAfterSeconds value must be a non-negative number.",
            "TTL indexes cannot be created on capped collections.",
          ].map((point, index) => (
            <div
              key={index}
              className="flex gap-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-3"
            >
              <span className="font-semibold text-[var(--primary-color)]">
                {index + 1}.
              </span>
              <p className="text-sm leading-6 text-[var(--text-secondary)]">
                {point}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 10. TTL vs Normal Index */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">10. TTL Index vs Normal Index</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[460px] text-left text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">Feature</th>
                <th className="p-3">Normal Index</th>
                <th className="p-3">TTL Index</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              <tr>
                <td className="p-3">Purpose</td>
                <td className="p-3">Faster queries</td>
                <td className="p-3">Automatic expiration</td>
              </tr>
              <tr>
                <td className="p-3">Deletion</td>
                <td className="p-3">No automatic deletion</td>
                <td className="p-3">Deletes expired documents</td>
              </tr>
              <tr>
                <td className="p-3">Date field</td>
                <td className="p-3">Not required</td>
                <td className="p-3">Required for expiration</td>
              </tr>
              <tr>
                <td className="p-3">Background process</td>
                <td className="p-3">No TTL monitor</td>
                <td className="p-3">Uses TTL monitor</td>
              </tr>
              <tr>
                <td className="p-3">Index type</td>
                <td className="p-3">Various types</td>
                <td className="p-3">Single-field index</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 11. View and Drop */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">11. Viewing and Removing TTL Indexes</h2>

        <h3 className="font-medium">View Indexes</h3>

        <CodeBlock
          code={`db.sessions.getIndexes()`}
        />

        <h3 className="font-medium">Example TTL Index</h3>

        <CodeBlock
          code={`{
  v: 2,
  key: {
    createdAt: 1
  },
  name: "createdAt_1",
  expireAfterSeconds: 3600
}`}
        />

        <h3 className="font-medium">Remove TTL Index</h3>

        <CodeBlock
          code={`db.sessions.dropIndex("createdAt_1")`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Removing the TTL index stops automatic expiration through that index.
          It does not restore documents that have already been deleted.
        </p>
      </section>

      {/* 12. Important Points */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">12. Important Points</h2>

        <div className="space-y-3">
          {[
            "TTL stands for Time To Live.",
            "TTL indexes automatically delete expired documents.",
            "MongoDB uses a background TTL Monitor.",
            "Use expireAfterSeconds to define a fixed expiration duration.",
            "Use expireAfterSeconds: 0 for a specific expiration date stored in a Date field.",
            "TTL indexes work on single Date fields.",
            "TTL indexes must use ascending order (1).",
            "A collection can have only one TTL index.",
            "TTL deletion is not immediate.",
            "TTL indexes cannot be created on capped collections.",
            "TTL indexes are useful for OTPs, sessions, tokens, and temporary data.",
          ].map((point, index) => (
            <div
              key={index}
              className="flex gap-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-3"
            >
              <span className="font-semibold text-[var(--primary-color)]">
                {index + 1}.
              </span>
              <p className="text-sm leading-6 text-[var(--text-secondary)]">
                {point}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Interview Questions */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">13. Interview Questions</h2>

        <div className="space-y-3">
          {[
            {
              q: "What is a TTL Index in MongoDB?",
              a: "A TTL (Time To Live) Index automatically deletes documents after a specified expiration period.",
            },
            {
              q: "Why do we use TTL Indexes?",
              a: "They automatically clean up temporary or expired data such as OTPs, sessions, tokens, and logs.",
            },
            {
              q: "What is the TTL Monitor?",
              a: "It is a background process in MongoDB that periodically checks TTL indexes and deletes expired documents.",
            },
            {
              q: "How do you create a TTL Index?",
              a: "Use db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 }).",
            },
            {
              q: "What is expireAfterSeconds?",
              a: "It specifies the number of seconds after the indexed Date value when a document becomes eligible for deletion.",
            },
            {
              q: "What does expireAfterSeconds: 0 mean?",
              a: "It means the indexed Date field contains the exact expiration time. The document becomes eligible for deletion at that time.",
            },
            {
              q: "Does a TTL Index delete documents immediately?",
              a: "No. The TTL Monitor runs periodically, so deletion can happen after the expiration time.",
            },
            {
              q: "Can we create a TTL Index on multiple fields?",
              a: "No. TTL indexes support only a single indexed field.",
            },
            {
              q: "What data type should the TTL field use?",
              a: "It should contain BSON Date values for expiration.",
            },
            {
              q: "Can a collection have multiple TTL indexes?",
              a: "No. A collection can have only one TTL index.",
            },
            {
              q: "Can we create a TTL Index on the _id field?",
              a: "No. MongoDB does not allow TTL indexes on the _id field.",
            },
            {
              q: "Can TTL indexes be created on capped collections?",
              a: "No. MongoDB does not support TTL indexes on capped collections.",
            },
            {
              q: "What is the difference between a normal index and a TTL index?",
              a: "A normal index mainly improves query performance, while a TTL index automatically removes expired documents.",
            },
            {
              q: "Can we use TTL indexes for OTP expiration?",
              a: "Yes. Store an expireAt Date field in each OTP document and create a TTL index with expireAfterSeconds: 0.",
            },
          ].map((item, index) => (
            <details
              key={index}
              className="group rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 font-medium">
                <span>
                  <span className="mr-2 text-[var(--primary-color)]">
                    Q{index + 1}.
                  </span>
                  {item.q}
                </span>

                <span className="text-[var(--primary-color)] transition-transform group-open:rotate-180">
                  ↓
                </span>
              </summary>

              <div className="border-t border-[var(--border-color)] px-4 py-4 text-sm leading-7 text-[var(--text-secondary)]">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}