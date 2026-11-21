import CodeBlock from "../../../../components/common/CodeBlock";

export default function Projection() {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--primary-color)]">
          MONGODB / 15
        </p>

        <h1 className="text-3xl font-bold">Projection</h1>

        <p className="text-base leading-7 text-[var(--text-secondary)]">
          Projection in MongoDB allows us to control which fields are returned
          from a query. Instead of retrieving every field, we can select only
          the fields required by our application.
        </p>
      </div>

      {/* 1. Introduction */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">1. What Is Projection?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          By default, MongoDB returns all fields of matching documents.
          Projection allows us to include specific fields or exclude unwanted
          fields from the query result.
        </p>

        <CodeBlock
          code={`db.users.find(
  { age: { $gte: 18 } },
  { name: 1, age: 1 }
)`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          This query finds users whose age is at least 18 and returns only
          their name and age fields, along with _id by default.
        </p>
      </section>

      {/* 2. Sample Data */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">2. Sample Collection</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Consider the following documents inside the <code>users</code>{" "}
          collection.
        </p>

        <CodeBlock
          code={`[
  {
    _id: 1,
    name: "Mayur",
    age: 19,
    email: "mayur@example.com",
    city: "Bhopal",
    password: "secret123"
  },
  {
    _id: 2,
    name: "Rahul",
    age: 22,
    email: "rahul@example.com",
    city: "Indore",
    password: "secret456"
  }
]`}
        />
      </section>

      {/* 3. Syntax */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">3. Projection Syntax</h2>

        <CodeBlock
          code={`db.collection.find(
  filter,
  projection
)`}
        />

        <div className="space-y-2">
          <p className="font-medium">Parameters</p>

          <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-2">
            <p className="text-sm text-[var(--text-secondary)]">
              <code>filter</code> — Defines which documents should match.
            </p>
            <p className="text-sm text-[var(--text-secondary)]">
              <code>projection</code> — Defines which fields should be returned.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Inclusion */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">4. Inclusion Projection</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Inclusion projection returns only the fields that are explicitly
          selected using <code>1</code>.
        </p>

        <CodeBlock
          code={`db.users.find(
  {},
  {
    name: 1,
    age: 1
  }
)`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Returns only name, age, and _id.
        </p>

        <h3 className="font-medium">Example Result</h3>

        <CodeBlock
          code={`[
  {
    _id: 1,
    name: "Mayur",
    age: 19
  },
  {
    _id: 2,
    name: "Rahul",
    age: 22
  }
]`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Fields such as email, city, and password are not included.
        </p>
      </section>

      {/* 5. Exclusion */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">5. Exclusion Projection</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Exclusion projection removes selected fields from the result using{" "}
          <code>0</code>. All other fields are returned.
        </p>

        <CodeBlock
          code={`db.users.find(
  {},
  {
    password: 0,
    email: 0
  }
)`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Returns all fields except password and email.
        </p>
      </section>

      {/* 6. _id */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">6. Excluding the _id Field</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB includes the <code>_id</code> field by default, even when we
          use inclusion projection. To hide it, explicitly set it to{" "}
          <code>0</code>.
        </p>

        <CodeBlock
          code={`db.users.find(
  {},
  {
    name: 1,
    age: 1,
    _id: 0
  }
)`}
        />

        <h3 className="font-medium">Example Result</h3>

        <CodeBlock
          code={`[
  {
    name: "Mayur",
    age: 19
  },
  {
    name: "Rahul",
    age: 22
  }
]`}
        />
      </section>

      {/* 7. Inclusion vs Exclusion */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">7. Inclusion vs Exclusion</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[500px] text-left text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-4 font-semibold">Feature</th>
                <th className="p-4 font-semibold">Inclusion</th>
                <th className="p-4 font-semibold">Exclusion</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[var(--border-color)]">
              {[
                ["Value", "1", "0"],
                ["Purpose", "Select fields", "Hide fields"],
                ["Default", "Other fields hidden", "Other fields returned"],
                ["_id", "Included by default", "Included by default unless excluded"],
              ].map(([feature, inclusion, exclusion]) => (
                <tr key={feature}>
                  <td className="p-4 font-medium">{feature}</td>
                  <td className="p-4 text-[var(--text-secondary)]">{inclusion}</td>
                  <td className="p-4 text-[var(--text-secondary)]">{exclusion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <p className="font-semibold text-[var(--primary-color)]">
            Important Rule
          </p>
          <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
            You cannot normally mix inclusion and exclusion fields in the same
            projection. The only exception is excluding the _id field from an
            inclusion projection.
          </p>
        </div>

        <CodeBlock
          code={`// Valid: Inclusion + _id exclusion
db.users.find(
  {},
  { name: 1, age: 1, _id: 0 }
);

// Valid: Exclusion
db.users.find(
  {},
  { password: 0, email: 0 }
);

// Invalid: Mixing inclusion and exclusion
db.users.find(
  {},
  { name: 1, password: 0 }
);`}
        />
      </section>

      {/* 8. Nested Fields */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">8. Projection on Nested Fields</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB supports dot notation to include or exclude specific fields
          inside embedded documents.
        </p>

        <h3 className="font-medium">Sample Document</h3>

        <CodeBlock
          code={`{
  name: "Mayur",
  address: {
    city: "Bhopal",
    state: "Madhya Pradesh",
    pincode: 462001
  }
}`}
        />

        <h3 className="font-medium">Include Nested Field</h3>

        <CodeBlock
          code={`db.users.find(
  {},
  {
    name: 1,
    "address.city": 1
  }
)`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Returns the name and only the city field inside address.
        </p>

        <h3 className="font-medium">Exclude Nested Field</h3>

        <CodeBlock
          code={`db.users.find(
  {},
  {
    "address.pincode": 0
  }
)`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Returns all fields except address.pincode.
        </p>
      </section>

      {/* 9. Array Projection */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">9. Projection on Array Fields</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB provides special projection operators to control which array
          elements are returned.
        </p>

        <h3 className="font-medium">9.1 $ — Positional Projection</h3>

        <p className="text-sm text-[var(--text-secondary)]">
          Returns the first array element that matches the query condition.
          This projection form is limited to specific query situations.
        </p>

        <CodeBlock
          code={`db.users.find(
  { marks: { $gte: 80 } },
  { "marks.$": 1 }
)`}
        />

        <h3 className="font-medium">9.2 $elemMatch — Return Matching Element</h3>

        <p className="text-sm text-[var(--text-secondary)]">
          Returns only the first array element that satisfies the specified
          condition.
        </p>

        <CodeBlock
          code={`db.users.find(
  {},
  {
    marks: {
      $elemMatch: {
        $gte: 80
      }
    }
  }
)`}
        />

        <h3 className="font-medium">9.3 $slice — Limit Array Elements</h3>

        <p className="text-sm text-[var(--text-secondary)]">
          Returns a specified number of elements from an array.
        </p>

        <CodeBlock
          code={`// First 2 elements
db.users.find(
  {},
  {
    skills: { $slice: 2 }
  }
);

// Last 2 elements
db.users.find(
  {},
  {
    skills: { $slice: -2 }
  }
)`}
        />
      </section>

      {/* 10. Aggregation Projection */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">10. $project in Aggregation</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB also provides the <code>$project</code> aggregation stage.
          It controls which fields are included, excluded, or calculated in
          aggregation results.
        </p>

        <CodeBlock
          code={`db.users.aggregate([
  {
    $project: {
      name: 1,
      age: 1,
      _id: 0
    }
  }
])`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Returns only name and age without the _id field.
        </p>

        <h3 className="font-medium">Creating a New Field</h3>

        <p className="text-sm text-[var(--text-secondary)]">
          We can also create calculated fields using expressions.
        </p>

        <CodeBlock
          code={`db.users.aggregate([
  {
    $project: {
      name: 1,
      age: 1,
      isAdult: {
        $gte: ["$age", 18]
      },
      _id: 0
    }
  }
])`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Creates a new isAdult field based on whether the user's age is at
          least 18.
        </p>
      </section>

      {/* 11. find vs aggregate */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">11. find() Projection vs $project</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[500px] text-left text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-4 font-semibold">Feature</th>
                <th className="p-4 font-semibold">find() Projection</th>
                <th className="p-4 font-semibold">$project</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[var(--border-color)]">
              {[
                ["Usage", "find() query", "Aggregation pipeline"],
                ["Purpose", "Select or exclude fields", "Select, exclude, or calculate fields"],
                ["New Fields", "Limited projection expressions", "Supports aggregation expressions"],
                ["Filtering", "Uses query filter", "Can be combined with $match"],
              ].map(([feature, find, project]) => (
                <tr key={feature}>
                  <td className="p-4 font-medium">{feature}</td>
                  <td className="p-4 text-[var(--text-secondary)]">{find}</td>
                  <td className="p-4 text-[var(--text-secondary)]">{project}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 12. Node.js */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">12. Using Projection in Node.js</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          With the MongoDB Node.js driver, projection can be passed through the
          options object as the second argument to <code>find()</code>.
        </p>

        <CodeBlock
          code={`const users = await db.collection("users")
  .find(
    { age: { $gte: 18 } },
    {
      projection: {
        name: 1,
        age: 1,
        _id: 0
      }
    }
  )
  .toArray();

console.log(users);`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          The projection option controls which fields are returned by the
          query.
        </p>
      </section>

      {/* 13. Benefits */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">13. Benefits of Projection</h2>

        <div className="space-y-3">
          {[
            "Returns only the fields required by the application.",
            "Reduces unnecessary data transfer between MongoDB and the application.",
            "Helps avoid returning sensitive fields such as passwords.",
            "Makes query results easier to work with.",
            "Supports nested document and array field selection.",
            "Allows calculated fields through aggregation $project.",
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
        <h2 className="text-xl font-semibold">14. Interview Questions</h2>

        <div className="space-y-3">
          {[
            {
              q: "What is projection in MongoDB?",
              a: "Projection controls which fields are returned from a query. It allows us to include required fields or exclude unwanted fields.",
            },
            {
              q: "What is the difference between inclusion and exclusion projection?",
              a: "Inclusion returns only selected fields using 1, while exclusion removes selected fields using 0.",
            },
            {
              q: "Why is _id returned by default?",
              a: "MongoDB includes _id by default in query results, even when using inclusion projection. We must explicitly set _id: 0 to exclude it.",
            },
            {
              q: "Can we mix inclusion and exclusion projection?",
              a: "Generally, no. The exception is excluding _id from an inclusion projection.",
            },
            {
              q: "How do you exclude the password field?",
              a: "Use db.users.find({}, { password: 0 }).",
            },
            {
              q: "How do you select only name and email?",
              a: "Use db.users.find({}, { name: 1, email: 1 }). The _id field is also included by default.",
            },
            {
              q: "What is the difference between find() projection and $project?",
              a: "find() projection selects or excludes fields in a normal query, while $project is an aggregation stage that also supports calculated fields and expressions.",
            },
            {
              q: "Can projection work with nested fields?",
              a: "Yes. Dot notation can be used, such as { 'address.city': 1 }.",
            },
            {
              q: "What does $slice do in projection?",
              a: "$slice returns a specified number of elements from an array instead of returning the complete array.",
            },
            {
              q: "Does projection improve query performance?",
              a: "Projection can reduce the amount of data returned and transferred. However, it does not automatically make every query faster; indexes and query execution also matter.",
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