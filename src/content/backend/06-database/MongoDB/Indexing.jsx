import CodeBlock from "../../../../components/common/CodeBlock";

export default function Indexing() {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--primary-color)]">
          MONGODB / 19
        </p>

        <h1 className="text-3xl font-bold">Indexing in MongoDB</h1>

        <p className="text-base leading-7 text-[var(--text-secondary)]">
          Indexing is a technique used to improve query performance in
          MongoDB. An index helps MongoDB find documents faster without
          scanning every document in a collection.
        </p>
      </div>

      {/* 1. What is Indexing */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">1. What Is Indexing?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          An index is a special data structure that stores information about
          selected fields in a collection. MongoDB uses this structure to
          locate matching documents efficiently.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          Without an index, MongoDB may need to examine every document to find
          matching results. This is called a collection scan.
        </p>

        <CodeBlock
          code={`db.users.find({
  email: "mayur@example.com"
})`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          If email is not indexed, MongoDB may scan the entire users
          collection to find the matching document.
        </p>
      </section>

      {/* 2. Real World Example */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">2. Real-World Example</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Imagine a library containing 10,000 books. If books are not arranged
          or indexed, finding one particular book may require checking every
          book.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          An index works like a book's index page. It helps us locate the
          required information quickly.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-2">
            <p className="font-semibold">Without Index</p>
            <p className="text-sm text-[var(--text-secondary)]">
              MongoDB may check every document one by one.
            </p>
            <p className="text-2xl font-bold text-[var(--primary-color)]">
              COLLSCAN
            </p>
            <p className="text-xs text-[var(--text-secondary)]">
              Collection Scan
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-2">
            <p className="font-semibold">With Index</p>
            <p className="text-sm text-[var(--text-secondary)]">
              MongoDB can use an index to locate matching documents.
            </p>
            <p className="text-2xl font-bold text-[var(--primary-color)]">
              IXSCAN
            </p>
            <p className="text-xs text-[var(--text-secondary)]">
              Index Scan
            </p>
          </div>
        </div>
      </section>

      {/* 3. How Indexing Works */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">3. How Indexing Works</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB commonly uses a B-tree-based index structure. The index keeps
          indexed values organized and stores references to the corresponding
          documents.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-4">
          <div className="rounded-lg border border-[var(--primary-color)] p-3 text-center">
            <p className="font-semibold">Query</p>
            <p className="text-sm text-[var(--text-secondary)]">
              Find user by email
            </p>
          </div>

          <div className="flex justify-center text-[var(--primary-color)] text-xl">
            ↓
          </div>

          <div className="rounded-lg border border-[var(--border-color)] p-3 text-center">
            <p className="font-semibold">Index Structure</p>
            <p className="text-sm text-[var(--text-secondary)]">
              Finds the indexed email value
            </p>
          </div>

          <div className="flex justify-center text-[var(--primary-color)] text-xl">
            ↓
          </div>

          <div className="rounded-lg border border-[var(--border-color)] p-3 text-center">
            <p className="font-semibold">Document Reference</p>
            <p className="text-sm text-[var(--text-secondary)]">
              Locates the matching document
            </p>
          </div>

          <div className="flex justify-center text-[var(--primary-color)] text-xl">
            ↓
          </div>

          <div className="rounded-lg bg-[var(--primary-soft)] border border-[var(--primary-color)] p-3 text-center">
            <p className="font-semibold text-[var(--primary-color)]">
              Result
            </p>
            <p className="text-sm text-[var(--text-secondary)]">
              Matching user document
            </p>
          </div>
        </div>
      </section>

      {/* 4. Without Index */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">4. Collection Scan (COLLSCAN)</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          When a query does not have a suitable index, MongoDB may perform a
          collection scan. It examines documents in the collection to find
          matching results.
        </p>

        <CodeBlock
          code={`db.users.find({
  email: "mayur@example.com"
})`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          If there is no suitable email index, MongoDB may examine all
          documents in the collection.
        </p>
      </section>

      {/* 5. Create Index */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">5. Creating an Index</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB provides the createIndex() method to create an index on a
          collection field.
        </p>

        <CodeBlock
          code={`db.users.createIndex({
  email: 1
})`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          This creates an ascending index on the email field.
        </p>

        <h3 className="font-medium">Ascending Index</h3>

        <CodeBlock
          code={`db.users.createIndex({
  age: 1
})`}
        />

        <h3 className="font-medium">Descending Index</h3>

        <CodeBlock
          code={`db.users.createIndex({
  age: -1
})`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          1 means ascending order, while -1 means descending order.
        </p>
      </section>

      {/* 6. Default Index */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">6. Default _id Index</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB automatically creates a unique index on the _id field of
          every standard collection.
        </p>

        <CodeBlock
          code={`db.users.getIndexes()`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          This command displays the indexes created on the users collection,
          including the default _id index.
        </p>

        <CodeBlock
          code={`[
  {
    v: 2,
    key: { _id: 1 },
    name: "_id_"
  }
]`}
        />
      </section>

      {/* 7. View Indexes */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">7. Viewing Indexes</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          We can use getIndexes() to see all indexes created on a collection.
        </p>

        <CodeBlock
          code={`db.users.getIndexes()`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          It returns index information such as index name, indexed fields,
          index version, and other options.
        </p>
      </section>

      {/* 8. Drop Index */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">8. Removing an Index</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          We can remove an index using dropIndex(). We can provide either the
          index name or its key specification.
        </p>

        <CodeBlock
          code={`// Remove using index name
db.users.dropIndex("email_1")

// Remove using index specification
db.users.dropIndex({
  email: 1
})`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          The default _id index cannot be dropped.
        </p>

        <h3 className="font-medium">Remove All Non-_id Indexes</h3>

        <CodeBlock
          code={`db.users.dropIndexes()`}
        />
      </section>

      {/* 9. Unique Index */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">9. Unique Index</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          A unique index ensures that the indexed field or combination of
          indexed fields does not contain duplicate index values.
        </p>

        <CodeBlock
          code={`db.users.createIndex(
  { email: 1 },
  { unique: true }
)`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          This prevents two documents from having the same indexed email
          value.
        </p>

        <p className="text-sm text-[var(--text-secondary)]">
          Unique Index has its own detailed topic later in this module.
        </p>
      </section>

      {/* 10. Compound Index */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">10. Compound Index</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          A compound index contains multiple fields in a single index. It is
          useful when queries frequently filter or sort using multiple fields.
        </p>

        <CodeBlock
          code={`db.users.createIndex({
  age: 1,
  city: 1
})`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          This creates a compound index on age and city, with age as the first
          indexed field.
        </p>

        <p className="text-sm text-[var(--text-secondary)]">
          Compound Index will be covered in detail in the next topic.
        </p>
      </section>

      {/* 11. Index Types */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">11. Types of Indexes</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[520px] text-left text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-4 font-semibold">Index Type</th>
                <th className="p-4 font-semibold">Purpose</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[var(--border-color)]">
              {[
                ["Single Field", "Indexes one field."],
                ["Compound", "Indexes multiple fields."],
                ["Multikey", "Indexes values inside arrays."],
                ["Geospatial", "Supports location-based queries."],
                ["Text", "Supports text search."],
                ["Hashed", "Indexes hashed field values."],
                ["Unique", "Prevents duplicate index keys."],
                ["TTL", "Automatically removes expired documents."],
                ["Wildcard", "Indexes fields dynamically across documents."],
              ].map(([type, purpose]) => (
                <tr key={type}>
                  <td className="p-4 font-medium text-[var(--primary-color)]">
                    {type}
                  </td>
                  <td className="p-4 text-[var(--text-secondary)]">{purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 12. Index Advantages */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">12. Advantages of Indexing</h2>

        <div className="space-y-3">
          {[
            "Improves query performance when a suitable index is used.",
            "Reduces the number of documents MongoDB needs to examine.",
            "Supports efficient sorting operations.",
            "Helps enforce uniqueness using unique indexes.",
            "Supports efficient filtering and range queries.",
            "Can improve performance in large collections.",
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

      {/* 13. Index Disadvantages */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">13. Disadvantages of Indexing</h2>

        <div className="space-y-3">
          {[
            "Indexes require additional storage space.",
            "Insert operations become more expensive because indexes must be maintained.",
            "Update operations may become slower when indexed fields change.",
            "Too many indexes increase memory and storage usage.",
            "Poorly designed indexes may not improve query performance.",
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

      {/* 14. Indexing Best Practices */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">14. Indexing Best Practices</h2>

        <div className="space-y-3">
          {[
            "Create indexes on fields frequently used in queries.",
            "Index fields used in sorting operations when beneficial.",
            "Avoid creating unnecessary indexes.",
            "Consider compound indexes for queries involving multiple fields.",
            "Check query performance using explain().",
            "Remember that indexes improve reads but add write overhead.",
            "Monitor index usage and remove indexes that are not needed.",
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

      {/* 15. Important Points */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">15. Important Points</h2>

        <div className="space-y-3">
          {[
            "An index is a data structure that helps MongoDB find documents efficiently.",
            "MongoDB commonly uses B-tree-based index structures.",
            "COLLSCAN means collection scan.",
            "IXSCAN means index scan.",
            "createIndex() creates an index.",
            "getIndexes() displays collection indexes.",
            "dropIndex() removes a specific index.",
            "dropIndexes() removes all non-_id indexes.",
            "Every standard collection automatically gets a unique _id index.",
            "Ascending index uses 1 and descending index uses -1.",
            "Indexes improve read performance but add write and storage overhead.",
            "A query does not always use an index just because one exists.",
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
        <h2 className="text-xl font-semibold">16. Interview Questions</h2>

        <div className="space-y-3">
          {[
            {
              q: "What is Indexing in MongoDB?",
              a: "Indexing is a technique that creates a special data structure to help MongoDB locate documents efficiently.",
            },
            {
              q: "Why do we use indexes?",
              a: "Indexes reduce the amount of data MongoDB needs to examine and can improve query and sorting performance.",
            },
            {
              q: "What is COLLSCAN?",
              a: "COLLSCAN means collection scan. MongoDB examines documents in a collection to find matching results.",
            },
            {
              q: "What is IXSCAN?",
              a: "IXSCAN means index scan. MongoDB uses an index to locate matching index entries.",
            },
            {
              q: "How do you create an index?",
              a: "Use db.collection.createIndex({ field: 1 }) to create an ascending index.",
            },
            {
              q: "What is the default index in MongoDB?",
              a: "MongoDB automatically creates a unique index on the _id field of every standard collection.",
            },
            {
              q: "What is the difference between 1 and -1 in indexing?",
              a: "1 creates an ascending index, while -1 creates a descending index.",
            },
            {
              q: "How do you view indexes?",
              a: "Use db.collection.getIndexes() to view all indexes on a collection.",
            },
            {
              q: "How do you delete an index?",
              a: "Use db.collection.dropIndex() to remove a specific index.",
            },
            {
              q: "Can we delete the default _id index?",
              a: "No. MongoDB does not allow dropping the default _id index.",
            },
            {
              q: "What are the disadvantages of indexing?",
              a: "Indexes require extra storage and add overhead to insert and update operations.",
            },
            {
              q: "Does every query use an index?",
              a: "No. MongoDB's query planner chooses an execution plan. Some queries use collection scans when an index is unavailable or not beneficial.",
            },
            {
              q: "What is a compound index?",
              a: "A compound index contains multiple fields in a single index.",
            },
            {
              q: "What is a multikey index?",
              a: "A multikey index is created when indexing a field that contains array values. It indexes the array elements.",
            },
            {
              q: "How can we check whether a query uses an index?",
              a: "Use explain() on a query and inspect its execution plan for stages such as IXSCAN or COLLSCAN.",
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