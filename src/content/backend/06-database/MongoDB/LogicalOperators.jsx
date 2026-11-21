import CodeBlock from "../../../../components/common/CodeBlock";

export default function LogicalOperators() {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--primary-color)]">
          MONGODB / 12
        </p>

        <h1 className="text-3xl font-bold">Logical Operators</h1>

        <p className="text-base leading-7 text-[var(--text-secondary)]">
          Logical operators are used to combine multiple query conditions or
          reverse a condition. They help us retrieve documents based on
          conditions such as AND, OR, NOT, and NOR.
        </p>
      </div>

      {/* 1. Introduction */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">1. What Are Logical Operators?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Logical operators allow us to apply multiple conditions in a single
          MongoDB query. They decide whether a document should match all
          conditions, at least one condition, or none of the conditions.
        </p>

        <CodeBlock
          code={`db.users.find({
  $or: [
    { age: { $gt: 20 } },
    { city: "Bhopal" }
  ]
})`}
        />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          This query returns users whose age is greater than 20 OR whose city
          is Bhopal.
        </p>
      </section>

      {/* 2. Operators */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">2. Types of Logical Operators</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[500px] text-left text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-4 font-semibold">Operator</th>
                <th className="p-4 font-semibold">Meaning</th>
                <th className="p-4 font-semibold">Purpose</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[var(--border-color)]">
              {[
                ["$and", "AND", "All conditions must be true."],
                ["$or", "OR", "At least one condition must be true."],
                ["$not", "NOT", "Reverses the result of a condition."],
                ["$nor", "NOR", "None of the conditions should be true."],
              ].map(([operator, meaning, purpose]) => (
                <tr key={operator}>
                  <td className="p-4 font-mono text-[var(--primary-color)]">
                    {operator}
                  </td>
                  <td className="p-4">{meaning}</td>
                  <td className="p-4 text-[var(--text-secondary)]">{purpose}</td>
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
          collection.
        </p>

        <CodeBlock
          code={`[
  { name: "Mayur", age: 19, city: "Bhopal", active: true },
  { name: "Rahul", age: 22, city: "Indore", active: true },
  { name: "Aman", age: 25, city: "Delhi", active: false },
  { name: "Rohit", age: 17, city: "Bhopal", active: false },
  { name: "Priya", age: 22, city: "Mumbai", active: true }
]`}
        />
      </section>

      {/* 4. $and */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">4. $and — AND Operator</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code>$and</code> operator returns documents only when all
          specified conditions are true.
        </p>

        <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <p className="font-medium">Logic</p>
          <p className="mt-2 text-sm text-[var(--text-secondary)]">
            Condition 1 AND Condition 2 = Both must be true.
          </p>
        </div>

        <CodeBlock
          code={`db.users.find({
  $and: [
    { age: { $gt: 18 } },
    { city: "Bhopal" }
  ]
})`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Returns users whose age is greater than 18 AND whose city is Bhopal.
        </p>

        <h3 className="font-medium">Implicit AND</h3>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB automatically applies AND when multiple field conditions are
          written in the same query object. Therefore, using <code>$and</code>{" "}
          is not always necessary.
        </p>

        <CodeBlock
          code={`// Explicit AND
db.users.find({
  $and: [
    { age: { $gt: 18 } },
    { city: "Bhopal" }
  ]
});

// Implicit AND
db.users.find({
  age: { $gt: 18 },
  city: "Bhopal"
});`}
        />
      </section>

      {/* 5. $or */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">5. $or — OR Operator</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code>$or</code> operator returns documents when at least one of
          the specified conditions is true.
        </p>

        <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <p className="font-medium">Logic</p>
          <p className="mt-2 text-sm text-[var(--text-secondary)]">
            Condition 1 OR Condition 2 = At least one must be true.
          </p>
        </div>

        <CodeBlock
          code={`db.users.find({
  $or: [
    { age: { $gt: 20 } },
    { city: "Bhopal" }
  ]
})`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Returns users whose age is greater than 20 OR whose city is Bhopal.
          Both conditions can also be true.
        </p>

        <h3 className="font-medium">Multiple OR Conditions</h3>

        <CodeBlock
          code={`db.users.find({
  $or: [
    { city: "Bhopal" },
    { city: "Indore" },
    { city: "Delhi" }
  ]
})`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Returns users who live in Bhopal, Indore, or Delhi.
        </p>
      </section>

      {/* 6. $not */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">6. $not — NOT Operator</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code>$not</code> operator reverses the result of a condition.
          It is applied to another operator, not directly as a standalone
          top-level query condition.
        </p>

        <CodeBlock
          code={`db.users.find({
  age: {
    $not: {
      $gt: 20
    }
  }
})`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Returns users whose age does not satisfy the greater-than-20
          condition. It can also match documents where the age field is
          missing.
        </p>

        <h3 className="font-medium">Another Example</h3>

        <CodeBlock
          code={`db.users.find({
  age: {
    $not: {
      $eq: 22
    }
  }
})`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Returns users whose age is not equal to 22, including documents where
          the age field is missing.
        </p>
      </section>

      {/* 7. $nor */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">7. $nor — NOR Operator</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code>$nor</code> operator returns documents that fail all the
          specified conditions. In other words, none of the conditions should
          be true.
        </p>

        <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <p className="font-medium">Logic</p>
          <p className="mt-2 text-sm text-[var(--text-secondary)]">
            Condition 1 NOR Condition 2 = Both must be false.
          </p>
        </div>

        <CodeBlock
          code={`db.users.find({
  $nor: [
    { city: "Bhopal" },
    { age: { $gt: 20 } }
  ]
})`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Returns users who are not from Bhopal AND whose age is not greater
          than 20.
        </p>

        <p className="text-sm text-[var(--text-secondary)]">
          A document with a missing field can also match a $nor query if it
          does not satisfy any listed condition.
        </p>
      </section>

      {/* 8. Comparison */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">8. Difference Between Logical Operators</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[550px] text-left text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-4">Operator</th>
                <th className="p-4">Condition Result</th>
                <th className="p-4">Example</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[var(--border-color)]">
              {[
                ["$and", "All true", "true AND true"],
                ["$or", "At least one true", "true OR false"],
                ["$not", "Reverse condition", "NOT true = false"],
                ["$nor", "All false", "false NOR false"],
              ].map(([operator, result, example]) => (
                <tr key={operator}>
                  <td className="p-4 font-mono text-[var(--primary-color)]">
                    {operator}
                  </td>
                  <td className="p-4">{result}</td>
                  <td className="p-4 text-[var(--text-secondary)]">{example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 9. Combining */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">9. Combining Logical Operators</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Logical operators can be nested inside one another to build complex
          queries.
        </p>

        <h3 className="font-medium">Example: AND + OR</h3>

        <p className="text-sm text-[var(--text-secondary)]">
          Find active users who are older than 18 and live in either Bhopal or
          Indore.
        </p>

        <CodeBlock
          code={`db.users.find({
  active: true,
  age: { $gt: 18 },
  $or: [
    { city: "Bhopal" },
    { city: "Indore" }
  ]
})`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Here, MongoDB applies AND between the top-level conditions, while
          $or matches either city condition.
        </p>

        <h3 className="font-medium">Example: Nested Logical Operators</h3>

        <CodeBlock
          code={`db.users.find({
  $or: [
    {
      $and: [
        { age: { $gte: 18 } },
        { city: "Bhopal" }
      ]
    },
    {
      active: true
    }
  ]
})`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Returns users who are at least 18 and from Bhopal, OR users whose
          active field is true.
        </p>
      </section>

      {/* 10. Node.js */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">10. Using Logical Operators in Node.js</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          You can use logical operators with the MongoDB Node.js driver in the
          same way as MongoDB Shell.
        </p>

        <CodeBlock
          code={`const users = await db.collection("users").find({
  $or: [
    { age: { $lt: 18 } },
    { city: "Bhopal" }
  ]
}).toArray();

console.log(users);`}
        />
      </section>

      {/* 11. Important Points */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">11. Important Points</h2>

        <div className="space-y-3">
          {[
            "$and requires all specified conditions to match.",
            "$or requires at least one specified condition to match.",
            "$not reverses the result of a field condition.",
            "$nor matches documents where none of the specified conditions match.",
            "$and and $or accept arrays of query expressions.",
            "$not is used with another query operator on a field.",
            "MongoDB supports implicit AND when multiple conditions are written in the same query object.",
            "Logical operators can be nested to create complex queries.",
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
        <h2 className="text-xl font-semibold">12. Interview Questions</h2>

        <div className="space-y-3">
          {[
            {
              q: "What are logical operators in MongoDB?",
              a: "Logical operators combine multiple query conditions or reverse a condition. MongoDB provides $and, $or, $not, and $nor.",
            },
            {
              q: "What is the difference between $and and $or?",
              a: "$and requires all conditions to match, while $or requires at least one condition to match.",
            },
            {
              q: "What is the difference between $or and $nor?",
              a: "$or matches documents when at least one condition is true. $nor matches documents when none of the conditions are true.",
            },
            {
              q: "What does $not do in MongoDB?",
              a: "$not reverses the result of a field query expression. It is used with another query operator.",
            },
            {
              q: "What is implicit AND in MongoDB?",
              a: "When multiple conditions are specified in the same query object, MongoDB automatically combines them using AND.",
            },
            {
              q: "Can we use multiple logical operators in one query?",
              a: "Yes. You can combine and nest operators such as $and, $or, and $nor to create complex queries.",
            },
            {
              q: "Does $not match documents where a field is missing?",
              a: "Yes. Depending on the condition, $not can also match documents where the field does not exist.",
            },
            {
              q: "When should we use $and explicitly?",
              a: "Use explicit $and when you need to combine query expressions that cannot be represented as separate keys in the same query object, such as multiple conditions on the same field using the same operator.",
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