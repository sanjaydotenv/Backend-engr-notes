import CodeBlock from "../../../../components/common/CodeBlock";

const MongoDBOperators = () => {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">

      {/* Header */}
      <div className="space-y-2">
        <p className="text-sm font-semibold tracking-wider text-[var(--primary-color)]">
          MONGODB / 10
        </p>
        <h1 className="text-3xl font-bold">MongoDB Operators</h1>
        <p className="text-base leading-7 text-[var(--text-secondary)]">
          MongoDB operators are special keywords used to perform operations
          on documents, compare values, filter data, update fields, and
          work with arrays.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What are MongoDB Operators?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Operators are special symbols or keywords that tell MongoDB
          what operation to perform on a document or field.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          For example, suppose we have a users collection and want to
          find users whose age is greater than 18.
        </p>

        <CodeBlock language="javascript" code={`db.users.find({
  age: { $gt: 18 }
})`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Here, <code>$gt</code> is an operator that matches values
          greater than the specified value.
        </p>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Why Do We Use Operators?</h2>

        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ["Filter Documents", "Find documents based on specific conditions."],
            ["Compare Values", "Compare numbers, strings, and other values."],
            ["Combine Conditions", "Apply multiple conditions using logical operators."],
            ["Update Documents", "Modify existing fields without replacing the entire document."],
            ["Work with Arrays", "Search and modify array elements."],
            ["Perform Calculations", "Use expressions and aggregation operators to process data."],
          ].map(([title, description]) => (
            <div
              key={title}
              className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-2"
            >
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm leading-6 text-[var(--text-secondary)]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Types of MongoDB Operators</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB provides different operator categories depending on
          the type of operation we want to perform.
        </p>

        <div className="space-y-3">
          {[
            {
              title: "1. Comparison Operators",
              description: "Compare field values with specified values.",
              examples: "$eq, $ne, $gt, $gte, $lt, $lte, $in, $nin",
              color: "Comparison",
            },
            {
              title: "2. Logical Operators",
              description: "Combine multiple query conditions.",
              examples: "$and, $or, $not, $nor",
              color: "Logical",
            },
            {
              title: "3. Update Operators",
              description: "Modify document fields and values.",
              examples: "$set, $unset, $inc, $mul, $rename",
              color: "Update",
            },
            {
              title: "4. Array Operators",
              description: "Query and update array fields.",
              examples: "$in, $all, $elemMatch, $push, $pull, $pop",
              color: "Array",
            },
            {
              title: "5. Element Operators",
              description: "Check whether fields exist and identify their BSON types.",
              examples: "$exists, $type",
              color: "Element",
            },
            {
              title: "6. Evaluation Operators",
              description: "Evaluate expressions, patterns, and conditions.",
              examples: "$regex, $expr, $jsonSchema, $mod",
              color: "Evaluation",
            },
            {
              title: "7. Bitwise Operators",
              description: "Match numeric values using bit-level conditions.",
              examples: "$bitsAllSet, $bitsAnySet, $bitsAllClear, $bitsAnyClear",
              color: "Bitwise",
            },
            {
              title: "8. Geospatial Operators",
              description: "Query location-based and geographical data.",
              examples: "$near, $geoWithin, $geoIntersects",
              color: "Geospatial",
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
              <div className="flex flex-wrap gap-2">
                {item.examples.split(", ").map((example) => (
                  <code
                    key={example}
                    className="rounded-md bg-[var(--bg-tertiary)] px-2 py-1 text-xs text-[var(--text-primary)]"
                  >
                    {example}
                  </code>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Basic Example of Operators</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Let's understand how operators work using a users collection.
        </p>

        <h3 className="font-semibold">Sample Documents</h3>

        <CodeBlock language="javascript" code={`// Document 1
{
  name: "Mayur",
  age: 19,
  city: "Bhopal",
  isActive: true
}

// Document 2
{
  name: "Rahul",
  age: 25,
  city: "Indore",
  isActive: false
}

// Document 3
{
  name: "Aman",
  age: 17,
  city: "Bhopal",
  isActive: true
}`} />

        <h3 className="font-semibold">Example 1: Comparison Operator</h3>

        <CodeBlock language="javascript" code={`// Find users older than 18

db.users.find({
  age: { $gt: 18 }
})`} />

        <p className="text-sm text-[var(--text-secondary)]">
          Returns Mayur and Rahul.
        </p>

        <h3 className="font-semibold">Example 2: Logical Operator</h3>

        <CodeBlock language="javascript" code={`// Find active users who are older than 18

db.users.find({
  $and: [
    { age: { $gt: 18 } },
    { isActive: true }
  ]
})`} />

        <p className="text-sm text-[var(--text-secondary)]">
          Returns Mayur because both conditions must be true.
        </p>

        <h3 className="font-semibold">Example 3: Update Operator</h3>

        <CodeBlock language="javascript" code={`// Increase Mayur's age by 1

db.users.updateOne(
  { name: "Mayur" },
  { $inc: { age: 1 } }
)`} />

        <p className="text-sm text-[var(--text-secondary)]">
          The age field increases from 19 to 20.
        </p>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Query Operators vs Update Operators</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          One important distinction is that query operators are used
          to find documents, whereas update operators are used to
          modify document fields.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-3">
            <h3 className="font-semibold">Query Operators</h3>
            <CodeBlock language="javascript" code={`db.users.find({
  age: { $gt: 18 }
})`} />
            <p className="text-sm text-[var(--text-secondary)]">
              Finds matching documents.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-3">
            <h3 className="font-semibold">Update Operators</h3>
            <CodeBlock language="javascript" code={`db.users.updateOne(
  { name: "Mayur" },
  { $set: { age: 20 } }
)`} />
            <p className="text-sm text-[var(--text-secondary)]">
              Updates matching documents.
            </p>
          </div>
        </div>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Important Operator Syntax</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Most MongoDB operators start with the dollar sign
          (<code>$</code>). They are written inside query or update
          documents depending on their purpose.
        </p>

        <CodeBlock language="javascript" code={`// Query operator
db.users.find({
  age: { $gte: 18 }
})

// Logical operator
db.users.find({
  $or: [
    { city: "Bhopal" },
    { city: "Indore" }
  ]
})

// Update operator
db.users.updateOne(
  { name: "Mayur" },
  {
    $set: {
      city: "Bhopal"
    }
  }
)`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          The dollar sign helps identify MongoDB operators, but not
          every field beginning with a dollar sign is necessarily an
          operator in every context.
        </p>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. MongoDB Operators Learning Order</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Learn operators category by category. Understanding their
          purpose first makes complex queries easier to write.
        </p>

        <CodeBlock language="text" code={`MongoDB Operators
       |
       |-- Comparison Operators
       |      |-- $eq, $ne
       |      |-- $gt, $gte
       |      |-- $lt, $lte
       |      |-- $in, $nin
       |
       |-- Logical Operators
       |      |-- $and, $or
       |      |-- $not, $nor
       |
       |-- Update Operators
       |      |-- $set, $unset
       |      |-- $inc, $mul
       |      |-- $rename
       |
       |-- Array Operators
       |      |-- $push, $pull
       |      |-- $pop, $all
       |      |-- $elemMatch`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          We will study comparison, logical, update, and array operators
          in separate topics with practical examples.
        </p>
      </section>

      {/* Interview Questions */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold">Interview Questions</h2>
          <p className="mt-1 text-sm text-[var(--text-secondary)]">
            Click a question to reveal its answer.
          </p>
        </div>

        {[
          {
            q: "What are MongoDB operators?",
            a: "MongoDB operators are special keywords or symbols used to perform operations such as filtering, comparing, updating, and manipulating documents."
          },
          {
            q: "Why do we use MongoDB operators?",
            a: "They help us filter documents, compare values, combine conditions, update fields, and work with arrays."
          },
          {
            q: "What is the $gt operator?",
            a: "$gt means greater than. It matches values greater than the specified value."
          },
          {
            q: "What is the difference between query and update operators?",
            a: "Query operators select documents based on conditions, while update operators modify fields in matching documents."
          },
          {
            q: "What are comparison operators?",
            a: "Comparison operators compare field values with specified values. Examples include $eq, $ne, $gt, $gte, $lt, and $lte."
          },
          {
            q: "What are logical operators?",
            a: "Logical operators combine or modify query conditions. Examples include $and, $or, $not, and $nor."
          },
          {
            q: "What are update operators?",
            a: "Update operators modify document fields. Examples include $set, $unset, $inc, and $mul."
          },
          {
            q: "What are array operators?",
            a: "Array operators are used to query or modify array fields. Examples include $push, $pull, $pop, and $all."
          },
          {
            q: "Why do most MongoDB operators start with $?",
            a: "The dollar sign is the standard prefix used to identify MongoDB operators and certain special field references."
          },
          {
            q: "What does the $set operator do?",
            a: "$set assigns a specified value to a field. It creates the field if it does not exist."
          },
        ].map((item, index) => (
          <details
            key={index}
            className="group overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)]"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 font-medium transition-colors hover:bg-[var(--bg-tertiary)]">
              <span>{index + 1}. {item.q}</span>
              <span className="shrink-0 text-lg text-[var(--primary-color)] transition-transform group-open:rotate-45">
                +
              </span>
            </summary>

            <div className="border-t border-[var(--border-color)] px-4 py-4 text-sm leading-7 text-[var(--text-secondary)]">
              {item.a}
            </div>
          </details>
        ))}
      </section>

    </div>
  );
};

export default MongoDBOperators;