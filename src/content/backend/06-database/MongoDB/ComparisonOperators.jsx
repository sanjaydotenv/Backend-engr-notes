import CodeBlock from "../../../../components/common/CodeBlock";

export default function ComparisonOperators() {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--primary-color)]">
          MONGODB / 11
        </p>

        <h1 className="text-3xl font-bold">Comparison Operators</h1>

        <p className="text-base leading-7 text-[var(--text-secondary)]">
          Comparison operators are used to compare field values with specific
          values. They help us filter documents based on conditions like equal,
          greater than, less than, and matching multiple values.
        </p>
      </div>

      {/* 1. Introduction */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">1. What Are Comparison Operators?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Comparison operators check whether a field value matches a given
          condition. They are commonly used inside the <code>find()</code>{" "}
          method to retrieve specific documents.
        </p>

        <CodeBlock
          code={`db.users.find({
  age: { $gt: 18 }
})`}
        />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          This query returns all users whose age is greater than 18.
        </p>
      </section>

      {/* 2. Operators Table */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">2. Types of Comparison Operators</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[550px] text-left text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-4 font-semibold">Operator</th>
                <th className="p-4 font-semibold">Meaning</th>
                <th className="p-4 font-semibold">Condition</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[var(--border-color)]">
              {[
                ["$eq", "Equal to", "age = 20"],
                ["$ne", "Not equal to", "age ≠ 20"],
                ["$gt", "Greater than", "age > 20"],
                ["$gte", "Greater than or equal to", "age ≥ 20"],
                ["$lt", "Less than", "age < 20"],
                ["$lte", "Less than or equal to", "age ≤ 20"],
                ["$in", "Matches any value in an array", "age is 18 or 20"],
                ["$nin", "Does not match any value in an array", "age is not 18 or 20"],
              ].map(([operator, meaning, condition]) => (
                <tr key={operator}>
                  <td className="p-4 font-mono text-[var(--primary-color)]">
                    {operator}
                  </td>
                  <td className="p-4 text-[var(--text-secondary)]">{meaning}</td>
                  <td className="p-4 text-[var(--text-secondary)]">{condition}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Sample Data */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">3. Sample Collection</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Consider the following documents inside the <code>users</code>{" "}
          collection. We will use this data for all examples.
        </p>

        <CodeBlock
          code={`[
  { name: "Mayur", age: 19, city: "Bhopal" },
  { name: "Rahul", age: 22, city: "Indore" },
  { name: "Aman", age: 25, city: "Delhi" },
  { name: "Rohit", age: 17, city: "Bhopal" },
  { name: "Priya", age: 22, city: "Mumbai" }
]`}
        />
      </section>

      {/* 4. $eq */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">4. $eq — Equal To</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code>$eq</code> operator matches documents where a field is equal
          to the specified value.
        </p>

        <CodeBlock
          code={`db.users.find({
  age: { $eq: 22 }
})`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Returns Rahul and Priya because their age is 22.
        </p>

        <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <p className="text-sm text-[var(--text-secondary)]">
            You can also write equality queries without using{" "}
            <code>$eq</code>.
          </p>

          <CodeBlock
            code={`db.users.find({
  age: 22
})`}
          />
        </div>
      </section>

      {/* 5. $ne */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">5. $ne — Not Equal To</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code>$ne</code> operator matches documents where a field is not
          equal to the specified value. It can also match documents where the
          field does not exist.
        </p>

        <CodeBlock
          code={`db.users.find({
  age: { $ne: 22 }
})`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Returns users whose age is not 22.
        </p>
      </section>

      {/* 6. $gt */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">6. $gt — Greater Than</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code>$gt</code> operator matches documents where a field value is
          greater than the specified value.
        </p>

        <CodeBlock
          code={`db.users.find({
  age: { $gt: 20 }
})`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Returns users whose age is greater than 20.
        </p>
      </section>

      {/* 7. $gte */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          7. $gte — Greater Than or Equal To
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code>$gte</code> operator matches documents where a field value
          is greater than or equal to the specified value.
        </p>

        <CodeBlock
          code={`db.users.find({
  age: { $gte: 22 }
})`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Returns users whose age is 22 or greater.
        </p>
      </section>

      {/* 8. $lt */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">8. $lt — Less Than</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code>$lt</code> operator matches documents where a field value is
          less than the specified value.
        </p>

        <CodeBlock
          code={`db.users.find({
  age: { $lt: 20 }
})`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Returns users whose age is less than 20.
        </p>
      </section>

      {/* 9. $lte */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          9. $lte — Less Than or Equal To
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code>$lte</code> operator matches documents where a field value
          is less than or equal to the specified value.
        </p>

        <CodeBlock
          code={`db.users.find({
  age: { $lte: 22 }
})`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Returns users whose age is 22 or less.
        </p>
      </section>

      {/* 10. $in */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">10. $in — Match Any Value</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code>$in</code> operator matches documents where a field value
          matches any value from the specified array.
        </p>

        <CodeBlock
          code={`db.users.find({
  age: { $in: [19, 22] }
})`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Returns users whose age is either 19 or 22.
        </p>

        <CodeBlock
          code={`db.users.find({
  city: { $in: ["Bhopal", "Indore"] }
})`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Returns users from Bhopal or Indore.
        </p>
      </section>

      {/* 11. $nin */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">11. $nin — Match None of the Values</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code>$nin</code> operator matches documents where a field value
          does not match any value from the specified array. It can also match
          documents where the field does not exist.
        </p>

        <CodeBlock
          code={`db.users.find({
  age: { $nin: [19, 22] }
})`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Returns users whose age is neither 19 nor 22.
        </p>
      </section>

      {/* 12. Combining Conditions */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">12. Combining Comparison Conditions</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          You can use multiple comparison conditions on the same field or
          different fields to filter documents more precisely.
        </p>

        <h3 className="font-medium">Example 1: Range Query</h3>

        <p className="text-sm text-[var(--text-secondary)]">
          Find users whose age is between 18 and 25 (inclusive).
        </p>

        <CodeBlock
          code={`db.users.find({
  age: {
    $gte: 18,
    $lte: 25
  }
})`}
        />

        <h3 className="font-medium">Example 2: Multiple Fields</h3>

        <p className="text-sm text-[var(--text-secondary)]">
          Find users older than 18 who live in Bhopal.
        </p>

        <CodeBlock
          code={`db.users.find({
  age: { $gt: 18 },
  city: "Bhopal"
})`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          When multiple field conditions are provided in the same query,
          MongoDB applies an implicit AND condition.
        </p>
      </section>

      {/* 13. Node.js Example */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">13. Using Comparison Operators in Node.js</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Comparison operators work the same way when querying MongoDB through
          the MongoDB Node.js driver.
        </p>

        <CodeBlock
          code={`const users = await db.collection("users").find({
  age: {
    $gte: 18,
    $lte: 25
  }
}).toArray();

console.log(users);`}
        />
      </section>

      {/* 14. Important Points */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">14. Important Points</h2>

        <div className="space-y-3">
          {[
            "Comparison operators are commonly used inside find() queries.",
            "$eq checks equality, while $ne checks inequality.",
            "$gt and $gte are used for greater-than comparisons.",
            "$lt and $lte are used for less-than comparisons.",
            "$in checks whether a value matches any item in an array.",
            "$nin excludes matching values from an array.",
            "$ne and $nin can also match documents where the field is missing.",
            "Multiple conditions on different fields are combined using implicit AND.",
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
              q: "What are comparison operators in MongoDB?",
              a: "Comparison operators compare field values with specified values and help filter documents based on conditions.",
            },
            {
              q: "What is the difference between $gt and $gte?",
              a: "$gt matches values greater than the given value, while $gte also includes the given value.",
            },
            {
              q: "What is the difference between $lt and $lte?",
              a: "$lt matches values less than the given value, while $lte also includes the given value.",
            },
            {
              q: "What is the difference between $eq and $ne?",
              a: "$eq matches equal values, while $ne matches values that are not equal. $ne can also match documents where the field is missing.",
            },
            {
              q: "What is the difference between $in and $nin?",
              a: "$in matches any value from the given array, while $nin excludes those values. $nin can also match documents where the field is missing.",
            },
            {
              q: "How do you find users whose age is between 18 and 25?",
              a: "Use db.users.find({ age: { $gte: 18, $lte: 25 } }).",
            },
            {
              q: "Can we use multiple comparison operators on the same field?",
              a: "Yes. For example, { age: { $gte: 18, $lte: 25 } } finds documents where age is between 18 and 25, inclusive.",
            },
            {
              q: "Can comparison operators work with strings?",
              a: "Yes. Comparison operators can compare strings, numbers, dates, and other supported BSON values. Comparisons follow BSON type and value comparison rules.",
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