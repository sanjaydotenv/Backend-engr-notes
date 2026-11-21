import CodeBlock from "../../../../components/common/CodeBlock";

export default function CompoundIndex() {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--primary-color)]">
          MONGODB / 20
        </p>

        <h1 className="text-3xl font-bold">Compound Index</h1>

        <p className="text-base leading-7 text-[var(--text-secondary)]">
          A Compound Index is an index created on two or more fields in a
          collection. It helps MongoDB efficiently execute queries that filter
          or sort using multiple fields.
        </p>
      </div>

      {/* 1. Introduction */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">1. What Is a Compound Index?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          A normal index is created on a single field, whereas a compound index
          contains multiple fields in a specific order.
        </p>

        <CodeBlock
          code={`// Single Field Index
db.users.createIndex({
  age: 1
})

// Compound Index
db.users.createIndex({
  age: 1,
  city: 1
})`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          The second index contains both age and city fields. MongoDB maintains
          their order inside the index.
        </p>
      </section>

      {/* 2. Why Compound Index */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">2. Why Do We Need Compound Indexes?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          In real applications, queries often use multiple fields together.
          Creating a suitable compound index can help MongoDB avoid scanning
          large numbers of documents.
        </p>

        <CodeBlock
          code={`db.users.find({
  age: 19,
  city: "Bhopal"
})`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          This query filters users using both age and city. A compound index
          on these fields can support this query.
        </p>
      </section>

      {/* 3. Creating Compound Index */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">3. Creating a Compound Index</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          We use createIndex() and provide multiple fields with their sort
          directions.
        </p>

        <CodeBlock
          code={`db.users.createIndex({
  age: 1,
  city: 1
})`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Here:
        </p>

        <ul className="list-disc space-y-2 pl-6 text-sm text-[var(--text-secondary)]">
          <li><code>age: 1</code> creates an ascending index on age.</li>
          <li><code>city: 1</code> creates an ascending index on city.</li>
        </ul>

        <h3 className="font-medium">Descending and Mixed Order</h3>

        <CodeBlock
          code={`// Both descending
db.users.createIndex({
  age: -1,
  city: -1
})

// Mixed order
db.users.createIndex({
  age: 1,
  city: -1
})`}
        />
      </section>

      {/* 4. How it works */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">4. How Does a Compound Index Work?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB creates index keys using the values of all indexed fields.
          The keys are ordered according to the specified field sequence and
          sort directions.
        </p>

        <CodeBlock
          code={`// Compound Index
db.users.createIndex({
  age: 1,
  city: 1
})

// Example documents
{ name: "Mayur", age: 19, city: "Bhopal" }
{ name: "Rahul", age: 19, city: "Indore" }
{ name: "Aman", age: 20, city: "Bhopal" }`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Conceptually, MongoDB organizes the index keys like this:
        </p>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-left text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3 font-semibold">Age</th>
                <th className="p-3 font-semibold">City</th>
                <th className="p-3 font-semibold">Document</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              {[
                ["19", "Bhopal", "Mayur"],
                ["19", "Indore", "Rahul"],
                ["20", "Bhopal", "Aman"],
              ].map(([age, city, name]) => (
                <tr key={name}>
                  <td className="p-3">{age}</td>
                  <td className="p-3">{city}</td>
                  <td className="p-3 text-[var(--text-secondary)]">{name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-[var(--text-secondary)]">
          This is a simplified illustration of compound index ordering, not
          the complete internal BSON index representation.
        </p>
      </section>

      {/* 5. Field Order */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">5. Why Is Field Order Important?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The order of fields in a compound index matters because MongoDB
          organizes index keys according to that order. It affects which
          queries can efficiently use the index.
        </p>

        <CodeBlock
          code={`db.users.createIndex({
  age: 1,
  city: 1
})`}
        />

        <p className="font-medium">This index is ordered by:</p>

        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-lg bg-[var(--primary-soft)] px-4 py-2 font-semibold text-[var(--primary-color)]">
            1. age
          </span>
          <span className="text-[var(--text-secondary)]">→</span>
          <span className="rounded-lg bg-[var(--bg-tertiary)] px-4 py-2 font-semibold">
            2. city
          </span>
        </div>

        <p className="leading-7 text-[var(--text-secondary)]">
          Age is the first field, so the index is especially useful for queries
          that use age or age together with city.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          A query that uses only city generally cannot efficiently use this
          index to search city independently because age comes first.
        </p>
      </section>

      {/* 6. Prefix Rule */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">6. Compound Index Prefix Rule</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          A prefix is the first field or a sequence of fields from a compound
          index, starting from the beginning.
        </p>

        <CodeBlock
          code={`db.users.createIndex({
  age: 1,
  city: 1,
  status: 1
})`}
        />

        <p className="font-medium">Available index prefixes:</p>

        <div className="space-y-2">
          {[
            ["age", "Single-field prefix"],
            ["age + city", "Two-field prefix"],
            ["age + city + status", "Full index"],
          ].map(([fields, description]) => (
            <div
              key={fields}
              className="flex flex-col gap-1 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-3 sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="font-semibold text-[var(--primary-color)]">
                {fields}
              </span>
              <span className="text-sm text-[var(--text-secondary)]">
                {description}
              </span>
            </div>
          ))}
        </div>

        <p className="font-medium">Queries that can use these prefixes:</p>

        <CodeBlock
          code={`// Uses age prefix
db.users.find({
  age: 19
})

// Uses age + city prefix
db.users.find({
  age: 19,
  city: "Bhopal"
})

// Uses all three fields
db.users.find({
  age: 19,
  city: "Bhopal",
  status: "active"
})`}
        />

        <div className="rounded-xl border border-[var(--primary-color)] bg-[var(--primary-soft)] p-4 space-y-2">
          <p className="font-semibold text-[var(--primary-color)]">
            Important: Prefix Rule
          </p>
          <p className="text-sm leading-6 text-[var(--text-secondary)]">
            The index can efficiently support its leading prefixes. A query
            using only city or only status cannot efficiently use this index
            as a standalone search index for those fields.
          </p>
        </div>
      </section>

      {/* 7. Index Field Order Example */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">7. Field Order Example</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Consider two compound indexes with the same fields but different
          orders.
        </p>

        <CodeBlock
          code={`// Index 1
db.users.createIndex({
  age: 1,
  city: 1
})

// Index 2
db.users.createIndex({
  city: 1,
  age: 1
})`}
        />

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-4 font-semibold">Query</th>
                <th className="p-4 font-semibold">age, city</th>
                <th className="p-4 font-semibold">city, age</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              <tr>
                <td className="p-4">Filter by age</td>
                <td className="p-4 text-[var(--primary-color)]">Yes</td>
                <td className="p-4 text-[var(--text-secondary)]">No prefix</td>
              </tr>
              <tr>
                <td className="p-4">Filter by city</td>
                <td className="p-4 text-[var(--text-secondary)]">No prefix</td>
                <td className="p-4 text-[var(--primary-color)]">Yes</td>
              </tr>
              <tr>
                <td className="p-4">Filter by both</td>
                <td className="p-4 text-[var(--primary-color)]">Yes</td>
                <td className="p-4 text-[var(--primary-color)]">Yes</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm text-[var(--text-secondary)]">
          This table explains prefix support. Actual index selection depends on
          the query, sorting, selectivity, and MongoDB's query planner.
        </p>
      </section>

      {/* 8. Sorting */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">8. Compound Index for Sorting</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Compound indexes can also help MongoDB perform sorting operations
          efficiently.
        </p>

        <CodeBlock
          code={`db.users.createIndex({
  age: 1,
  city: -1
})

// Sorting using indexed fields
db.users.find().sort({
  age: 1,
  city: -1
})`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          The index order matches the requested sort order, so MongoDB can
          potentially return sorted results directly from the index.
        </p>

        <h3 className="font-medium">Reverse Sort Order</h3>

        <CodeBlock
          code={`db.users.find().sort({
  age: -1,
  city: 1
})`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          MongoDB can scan the same index in reverse to support the complete
          reverse sort pattern.
        </p>
      </section>

      {/* 9. ESR Rule */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">9. ESR Rule (Equality, Sort, Range)</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          ESR is a guideline for choosing the field order in compound indexes.
          It stands for Equality, Sort, and Range.
        </p>

        <div className="space-y-3">
          {[
            {
              title: "Equality (E)",
              description:
                "Fields matched using exact values, such as email or status.",
              example: "status: 'active'",
            },
            {
              title: "Sort (S)",
              description:
                "Fields used to sort query results.",
              example: "createdAt: -1",
            },
            {
              title: "Range (R)",
              description:
                "Fields matched using comparison or range conditions.",
              example: "age: { $gte: 18 }",
            },
          ].map((item, index) => (
            <div
              key={item.title}
              className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-2"
            >
              <p className="font-semibold text-[var(--primary-color)]">
                {index + 1}. {item.title}
              </p>
              <p className="text-sm leading-6 text-[var(--text-secondary)]">
                {item.description}
              </p>
              <code className="block rounded-lg bg-[var(--bg-tertiary)] p-3 text-sm">
                {item.example}
              </code>
            </div>
          ))}
        </div>

        <h3 className="font-medium">Example</h3>

        <CodeBlock
          code={`db.orders.createIndex({
  status: 1,
  createdAt: -1,
  total: 1
})

// Query
db.orders.find({
  status: "delivered",
  total: { $gte: 1000 }
}).sort({
  createdAt: -1
})`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Here, status is an equality field, createdAt is a sort field, and
          total is a range field.
        </p>

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          ESR is a useful starting guideline, not an absolute rule. Query
          selectivity and workload requirements can change the best index
          order. MongoDB also documents the alternative ERS pattern for some
          queries.
        </p>
      </section>

      {/* 10. Unique Compound Index */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">10. Unique Compound Index</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          We can create a unique compound index to prevent duplicate
          combinations of field values.
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

        <p className="text-sm text-[var(--text-secondary)]">
          This prevents two documents from having the same firstName and
          lastName combination. It does not require each field to be unique
          individually.
        </p>
      </section>

      {/* 11. View Compound Index */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">11. Viewing Compound Indexes</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Use getIndexes() to see the indexes created on a collection.
        </p>

        <CodeBlock
          code={`db.users.getIndexes()`}
        />

        <h3 className="font-medium">Example Index Information</h3>

        <CodeBlock
          code={`[
  {
    v: 2,
    key: {
      _id: 1
    },
    name: "_id_"
  },
  {
    v: 2,
    key: {
      age: 1,
      city: 1
    },
    name: "age_1_city_1"
  }
]`}
        />
      </section>

      {/* 12. Drop Compound Index */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">12. Removing a Compound Index</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          We can remove a compound index using its name or key specification.
        </p>

        <CodeBlock
          code={`// Using index name
db.users.dropIndex("age_1_city_1")

// Using key specification
db.users.dropIndex({
  age: 1,
  city: 1
})`}
        />
      </section>

      {/* 13. Limitations */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">13. Limitations of Compound Indexes</h2>

        <div className="space-y-3">
          {[
            "Field order affects which queries can efficiently use the index.",
            "Compound indexes require additional storage.",
            "Every insert and relevant update must maintain the index.",
            "Too many indexes can reduce write performance.",
            "A compound index may not help queries that only filter on non-prefix fields.",
            "MongoDB supports a maximum of 32 fields in a compound index.",
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

      {/* 14. Important Points */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">14. Important Points</h2>

        <div className="space-y-3">
          {[
            "A compound index contains two or more fields.",
            "createIndex() is used to create compound indexes.",
            "Field order is important in compound indexes.",
            "The first indexed field is called the leading field.",
            "A prefix contains one or more leading fields of an index.",
            "An index can support its leading prefixes.",
            "A query on only a non-prefix field may need another index.",
            "Compound indexes can support filtering and sorting.",
            "The ESR guideline means Equality, Sort, and Range.",
            "Unique compound indexes prevent duplicate combinations.",
            "MongoDB supports up to 32 fields in one compound index.",
            "Use explain() to inspect the execution plan.",
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
        <h2 className="text-xl font-semibold">15. Interview Questions</h2>

        <div className="space-y-3">
          {[
            {
              q: "What is a Compound Index in MongoDB?",
              a: "A compound index is an index created on two or more fields in a collection.",
            },
            {
              q: "Why do we use compound indexes?",
              a: "They help improve query performance when queries filter or sort using multiple fields.",
            },
            {
              q: "How do you create a compound index?",
              a: "Use db.collection.createIndex({ age: 1, city: 1 }).",
            },
            {
              q: "Why is field order important?",
              a: "Field order determines index key ordering and which query prefixes the index can support efficiently.",
            },
            {
              q: "What is the Prefix Rule?",
              a: "A compound index can efficiently support queries using its leading field or a sequence of leading fields.",
            },
            {
              q: "What is a leading field?",
              a: "The leading field is the first field specified in a compound index.",
            },
            {
              q: "Can an index on { age: 1, city: 1 } efficiently support a query on only city?",
              a: "It does not efficiently support city as an independent prefix because age comes first. A separate city index may be needed.",
            },
            {
              q: "Can compound indexes support sorting?",
              a: "Yes. They can support sorting when the query's sort pattern matches the index order or its complete reverse.",
            },
            {
              q: "What is the ESR Rule?",
              a: "ESR stands for Equality, Sort, and Range. It is a guideline for ordering fields in compound indexes.",
            },
            {
              q: "What is a unique compound index?",
              a: "It prevents duplicate combinations of values across the indexed fields.",
            },
            {
              q: "What is the maximum number of fields in a compound index?",
              a: "MongoDB supports a maximum of 32 fields in a compound index.",
            },
            {
              q: "Can a compound index improve every query?",
              a: "No. Its usefulness depends on the query fields, field order, sort pattern, and the query planner's decisions.",
            },
            {
              q: "How can we check whether a compound index is being used?",
              a: "Use explain() and inspect the winning execution plan for stages such as IXSCAN.",
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