import CodeBlock from "../../../../components/common/CodeBlock";

export default function UniqueIndex() {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--primary-color)]">
          MONGODB / 21
        </p>

        <h1 className="text-3xl font-bold">Unique Index</h1>

        <p className="text-base leading-7 text-[var(--text-secondary)]">
          A Unique Index ensures that the indexed field does not contain
          duplicate values across documents. It helps maintain data integrity
          by enforcing uniqueness at the database level.
        </p>
      </div>

      {/* 1. Introduction */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">1. What Is a Unique Index?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          A Unique Index is an index that prevents two or more documents from
          having the same indexed value.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          For example, in a users collection, every user should have a unique
          email address.
        </p>

        <CodeBlock
          code={`// Create a unique index on email
db.users.createIndex(
  { email: 1 },
  { unique: true }
)`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Now MongoDB will not allow two documents to have the same email
          value.
        </p>
      </section>

      {/* 2. Why Unique Index */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">2. Why Do We Need a Unique Index?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Without a unique index, duplicate values can accidentally enter a
          collection.
        </p>

        <h3 className="font-medium">Example Without Unique Index</h3>

        <CodeBlock
          code={`// Both documents can exist without a unique index
{
  name: "Mayur",
  email: "mayur@gmail.com"
}

{
  name: "Rahul",
  email: "mayur@gmail.com"
}`}
        />

        <h3 className="font-medium">Example With Unique Index</h3>

        <CodeBlock
          code={`db.users.createIndex(
  { email: 1 },
  { unique: true }
)

// First insert: Successful
db.users.insertOne({
  name: "Mayur",
  email: "mayur@gmail.com"
})

// Second insert: Duplicate key error
db.users.insertOne({
  name: "Rahul",
  email: "mayur@gmail.com"
})`}
        />

        <div className="rounded-xl border border-[var(--primary-color)] bg-[var(--primary-soft)] p-4">
          <p className="font-semibold text-[var(--primary-color)]">
            Important
          </p>
          <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
            MongoDB generates a duplicate key error with code 11000 when an
            insert or update violates a unique index.
          </p>
        </div>
      </section>

      {/* 3. Creating Unique Index */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">3. Creating a Unique Index</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          We create a unique index using createIndex() with the unique option
          set to true.
        </p>

        <CodeBlock
          code={`// Ascending unique index
db.users.createIndex(
  { email: 1 },
  { unique: true }
)

// Descending unique index
db.users.createIndex(
  { username: -1 },
  { unique: true }
)`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          The value 1 means ascending order, and -1 means descending order.
          Both can enforce uniqueness.
        </p>
      </section>

      {/* 4. Unique Index on Multiple Fields */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">4. Unique Compound Index</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          We can also create a unique index on multiple fields. In this case,
          MongoDB prevents duplicate combinations of their values.
        </p>

        <CodeBlock
          code={`db.users.createIndex(
  {
    firstName: 1,
    lastName: 1
  },
  {
    unique: true
  }
)`}
        />

        <p className="font-medium">Example:</p>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-left text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">First Name</th>
                <th className="p-3">Last Name</th>
                <th className="p-3">Allowed?</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              <tr>
                <td className="p-3">Mayur</td>
                <td className="p-3">Bairagi</td>
                <td className="p-3 text-green-500">Yes</td>
              </tr>
              <tr>
                <td className="p-3">Rahul</td>
                <td className="p-3">Sharma</td>
                <td className="p-3 text-green-500">Yes</td>
              </tr>
              <tr>
                <td className="p-3">Mayur</td>
                <td className="p-3">Bairagi</td>
                <td className="p-3 text-red-500">No</td>
              </tr>
              <tr>
                <td className="p-3">Mayur</td>
                <td className="p-3">Sharma</td>
                <td className="p-3 text-green-500">Yes</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Notice that Mayur can appear more than once. Only the complete
          firstName and lastName combination must be unique.
        </p>
      </section>

      {/* 5. Unique Index and _id */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">5. Unique Index on _id</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB automatically creates a unique index on the _id field of
          every standard collection.
        </p>

        <CodeBlock
          code={`// MongoDB automatically maintains this index
db.users.getIndexes()

// Example _id index
{
  key: { _id: 1 },
  name: "_id_",
  unique: true
}`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Therefore, two documents in the same collection cannot have the
          same _id value.
        </p>
      </section>

      {/* 6. Unique Index with Null */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">6. Unique Index and Null Values</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          A normal unique single-field index treats missing fields and null
          values as an index entry with a null value.
        </p>

        <CodeBlock
          code={`db.users.createIndex(
  { email: 1 },
  { unique: true }
)

// First document: Allowed
db.users.insertOne({
  name: "Mayur",
  email: null
})

// Another null email: Duplicate key error
db.users.insertOne({
  name: "Rahul",
  email: null
})

// Missing email: Also conflicts with that null entry
db.users.insertOne({
  name: "Aman"
})`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-2">
          <p className="font-semibold text-[var(--primary-color)]">
            Remember
          </p>
          <p className="text-sm leading-6 text-[var(--text-secondary)]">
            A unique single-field index generally permits only one null or
            missing value entry. If you need multiple documents without an
            email, consider a partial unique index.
          </p>
        </div>
      </section>

      {/* 7. Partial Unique Index */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">7. Partial Unique Index</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          A Partial Unique Index enforces uniqueness only for documents that
          match a specified filter condition.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          For example, we want email addresses to be unique when the email
          field exists and contains a string.
        </p>

        <CodeBlock
          code={`db.users.createIndex(
  { email: 1 },
  {
    unique: true,
    partialFilterExpression: {
      email: { $type: "string" }
    }
  }
)`}
        />

        <p className="font-medium">What happens?</p>

        <ul className="list-disc space-y-2 pl-6 text-sm text-[var(--text-secondary)]">
          <li>Documents with string email values must be unique.</li>
          <li>Documents without email are not included in this index.</li>
          <li>Documents with null email are not included.</li>
          <li>Duplicate string email values are rejected.</li>
        </ul>

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Partial indexes are useful when only a specific group of documents
          needs uniqueness enforcement.
        </p>
      </section>

      {/* 8. Sparse Unique Index */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">8. Sparse Unique Index</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          A Sparse Index only includes documents that contain the indexed
          field. When combined with unique: true, it enforces uniqueness only
          for documents where that field exists.
        </p>

        <CodeBlock
          code={`db.users.createIndex(
  { phone: 1 },
  {
    unique: true,
    sparse: true
  }
)`}
        />

        <p className="font-medium">Example:</p>

        <CodeBlock
          code={`// Allowed: phone field is missing
db.users.insertOne({
  name: "Mayur"
})

// Allowed: another document without phone
db.users.insertOne({
  name: "Rahul"
})

// Allowed: first phone number
db.users.insertOne({
  name: "Aman",
  phone: "9876543210"
})

// Duplicate key error
db.users.insertOne({
  name: "Ravi",
  phone: "9876543210"
})`}
        />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Unlike a partial index, a sparse index includes documents based on
          field existence rather than a custom filter condition.
        </p>
      </section>

      {/* 9. Unique vs Partial */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">9. Unique vs Partial Unique Index</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">Feature</th>
                <th className="p-3">Unique Index</th>
                <th className="p-3">Partial Unique Index</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              <tr>
                <td className="p-3">Purpose</td>
                <td className="p-3">Prevent duplicates</td>
                <td className="p-3">Prevent selected duplicates</td>
              </tr>
              <tr>
                <td className="p-3">Documents</td>
                <td className="p-3">All documents</td>
                <td className="p-3">Only matching documents</td>
              </tr>
              <tr>
                <td className="p-3">Filter</td>
                <td className="p-3">Not required</td>
                <td className="p-3">Required for partial behavior</td>
              </tr>
              <tr>
                <td className="p-3">Use case</td>
                <td className="p-3">Unique email</td>
                <td className="p-3">Optional unique email</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 10. Node.js */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">10. Creating Unique Index in Node.js</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Using the MongoDB Node.js driver, we can create a unique index with
          the createIndex() method.
        </p>

        <CodeBlock
          code={`import { MongoClient } from "mongodb";

const client = new MongoClient(
  process.env.MONGODB_URI
);

async function main() {
  await client.connect();

  const db = client.db("myDatabase");
  const users = db.collection("users");

  await users.createIndex(
    { email: 1 },
    { unique: true }
  );

  console.log("Unique index created");
  
  await client.close();
}

main().catch(console.error);`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Once the index exists, MongoDB automatically checks uniqueness
          whenever documents are inserted or updated.
        </p>
      </section>

      {/* 11. Managing Unique Index */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">11. Viewing and Removing Unique Indexes</h2>

        <h3 className="font-medium">View Indexes</h3>

        <CodeBlock
          code={`db.users.getIndexes()`}
        />

        <h3 className="font-medium">Remove an Index</h3>

        <CodeBlock
          code={`// Remove by index name
db.users.dropIndex("email_1")

// Remove by key specification
db.users.dropIndex({
  email: 1
})`}
        />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          The default _id index cannot be dropped. Other indexes can be
          removed using their names or key specifications.
        </p>
      </section>

      {/* 12. Important Points */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">12. Important Points</h2>

        <div className="space-y-3">
          {[
            "A Unique Index prevents duplicate indexed values.",
            "Use unique: true inside createIndex().",
            "MongoDB automatically creates a unique index on _id.",
            "Duplicate key violations produce error code 11000.",
            "A unique compound index prevents duplicate field combinations.",
            "A unique single-field index generally allows only one null or missing value entry.",
            "Partial unique indexes enforce uniqueness only for matching documents.",
            "Sparse unique indexes enforce uniqueness only for documents containing the indexed field.",
            "You cannot create a unique index if existing documents already violate its uniqueness constraint.",
            "Unique indexes help maintain data integrity at the database level.",
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
              q: "What is a Unique Index in MongoDB?",
              a: "A Unique Index prevents duplicate values in the indexed field across documents.",
            },
            {
              q: "How do you create a Unique Index?",
              a: "Use db.users.createIndex({ email: 1 }, { unique: true }).",
            },
            {
              q: "What happens when we insert a duplicate value?",
              a: "MongoDB rejects the operation and returns a duplicate key error with code 11000.",
            },
            {
              q: "Does MongoDB automatically create a Unique Index?",
              a: "Yes. MongoDB automatically creates a unique index on the _id field of every standard collection.",
            },
            {
              q: "What is a Unique Compound Index?",
              a: "It prevents duplicate combinations of values across multiple indexed fields.",
            },
            {
              q: "Can a Unique Compound Index make each field individually unique?",
              a: "No. It enforces uniqueness on the complete combination, not on each field separately.",
            },
            {
              q: "Can a Unique Index contain null values?",
              a: "Yes, but a unique single-field index generally permits only one null or missing value entry.",
            },
            {
              q: "What is a Partial Unique Index?",
              a: "It enforces uniqueness only for documents that match the partialFilterExpression.",
            },
            {
              q: "What is a Sparse Unique Index?",
              a: "It enforces uniqueness only for documents containing the indexed field.",
            },
            {
              q: "What is the difference between Sparse and Partial Indexes?",
              a: "Sparse indexes include documents based on field existence, while partial indexes include documents matching a specified filter.",
            },
            {
              q: "Can we create a Unique Index if duplicate data already exists?",
              a: "No. MongoDB cannot create the index while existing documents violate the uniqueness constraint. Duplicate data must be resolved first.",
            },
            {
              q: "Can we remove a Unique Index?",
              a: "Yes. Use dropIndex() with its name or key specification, except for the mandatory _id index.",
            },
            {
              q: "Why should we use Unique Indexes instead of only checking duplicates in application code?",
              a: "Database-level uniqueness protects data integrity even when multiple requests attempt to insert the same value concurrently.",
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