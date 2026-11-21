import CodeBlock from "../../../../components/common/CodeBlock";

const Fields = () => {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">

      {/* Header */}
      <div className="space-y-2">
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          DATABASE FUNDAMENTALS / 09
        </p>
        <h1 className="text-3xl font-bold">Fields in MongoDB</h1>
        <p className="text-base leading-7 text-[var(--text-secondary)]">
          Fields are key-value pairs inside a MongoDB document. They define
          what information a document stores, such as name, email, age,
          address, and skills.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What Is a Field?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          A field is a named attribute inside a MongoDB document. Every field
          contains a key and its corresponding value.
        </p>

        <CodeBlock code={`{
  name: "Mayur",
  age: 19,
  email: "mayur@example.com"
}`} />

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
            <h3 className="font-semibold text-[var(--accent-color)]">Field Names (Keys)</h3>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              name, age, email
            </p>
          </div>
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
            <h3 className="font-semibold text-[var(--accent-color)]">Field Values</h3>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              "Mayur", 19, "mayur@example.com"
            </p>
          </div>
        </div>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Types of Field Values</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB fields can store different BSON data types. The value type
          depends on the information you want to store.
        </p>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[450px] text-sm text-left">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="p-3 border-b border-[var(--border-color)]">Type</th>
                <th className="p-3 border-b border-[var(--border-color)]">Example</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["String", '"Mayur"'],
                ["Int", "19"],
                ["Double", "99.5"],
                ["Boolean", "true"],
                ["Array", '["Node.js", "React"]'],
                ["Object", '{ city: "Bhopal" }'],
                ["Date", "new Date()"],
                ["Null", "null"],
                ["ObjectId", "ObjectId(...)"],
              ].map((row) => (
                <tr key={row[0]}>
                  {row.map((value, index) => (
                    <td key={index} className="p-3 border-b border-[var(--border-color)] text-[var(--text-secondary)]">{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Field Names and Naming Rules</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB field names are strings. Good field names make documents
          easier to read and maintain.
        </p>

        <h3 className="font-semibold">Good Field Names</h3>
        <CodeBlock code={`{
  firstName: "Mayur",
  emailAddress: "mayur@example.com",
  createdAt: new Date(),
  isActive: true
}`} />

        <h3 className="font-semibold">Important Naming Rules</h3>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-[var(--text-secondary)]">
          <li>Field names are strings.</li>
          <li>Field names cannot contain the null character.</li>
          <li>The <code>_id</code> field is reserved for the document identifier.</li>
          <li>Using clear and consistent names makes queries easier to understand.</li>
          <li>Avoid unnecessary special characters in field names.</li>
        </ul>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Nested Fields</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          A field can contain an embedded document. Fields inside that
          embedded document are called nested fields.
        </p>

        <CodeBlock code={`{
  name: "Mayur",
  address: {
    city: "Bhopal",
    state: "Madhya Pradesh",
    country: "India"
  }
}`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          Here, address is an object field. The city, state, and country
          fields are nested inside it.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
          <p className="font-semibold text-sm">Field Hierarchy</p>
          <div className="space-y-2 text-sm">
            <div className="rounded-lg bg-[var(--bg-hover)] p-3">name</div>
            <div className="rounded-lg bg-[var(--bg-hover)] p-3">
              address
              <div className="ml-4 mt-2 space-y-2 border-l-2 border-[var(--accent-color)] pl-3">
                <div>city</div>
                <div>state</div>
                <div>country</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Accessing Nested Fields</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB uses dot notation to access fields inside embedded documents.
        </p>

        <h3 className="font-semibold">Find by Nested Field</h3>
        <CodeBlock code={`// Find users whose city is Bhopal
db.users.find({
  "address.city": "Bhopal"
});`} />

        <h3 className="font-semibold">Find by Multiple Nested Fields</h3>
        <CodeBlock code={`db.users.find({
  "address.city": "Bhopal",
  "address.country": "India"
});`} />

        <div className="rounded-xl border border-[var(--accent-color)] bg-[var(--accent-background)] p-4">
          <p className="text-sm leading-7 text-[var(--text-secondary)]">
            <strong className="text-[var(--text-primary)]">Remember:</strong>{" "}
            Use quotes around a dotted field path, such as
            <code> "address.city" </code>, because it represents one field path.
          </p>
        </div>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Accessing Array Fields</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB fields can contain arrays. You can query array fields
          directly or access specific positions using dot notation.
        </p>

        <CodeBlock code={`{
  name: "Mayur",
  skills: ["HTML", "CSS", "JavaScript"]
}`} />

        <h3 className="font-semibold">Find Documents Containing a Value</h3>
        <CodeBlock code={`// Find users having JavaScript in their skills
db.users.find({
  skills: "JavaScript"
});`} />

        <h3 className="font-semibold">Access an Array Element by Index</h3>
        <CodeBlock code={`// Find users whose first skill is HTML
db.users.find({
  "skills.0": "HTML"
});`} />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          Array indexes start from 0, so <code>skills.0</code> accesses the
          first element.
        </p>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Adding and Updating Fields</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB provides update operators to add new fields or modify
          existing field values.
        </p>

        <h3 className="font-semibold">Add a New Field Using $set</h3>
        <CodeBlock code={`db.users.updateOne(
  { name: "Mayur" },
  {
    $set: {
      city: "Bhopal"
    }
  }
);`} />

        <h3 className="font-semibold">Update a Nested Field</h3>
        <CodeBlock code={`db.users.updateOne(
  { name: "Mayur" },
  {
    $set: {
      "address.city": "Indore"
    }
  }
);`} />

        <h3 className="font-semibold">Remove a Field Using $unset</h3>
        <CodeBlock code={`db.users.updateOne(
  { name: "Mayur" },
  {
    $unset: {
      age: ""
    }
  }
);`} />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          <code>$set</code> adds or changes a field. <code>$unset</code>{" "}
          removes a field from the document.
        </p>
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Selecting Specific Fields</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Sometimes you do not need every field from a document. MongoDB
          supports projection to return only the fields you need.
        </p>

        <h3 className="font-semibold">Include Specific Fields</h3>
        <CodeBlock code={`db.users.find(
  {},
  {
    name: 1,
    email: 1
  }
);`} />

        <h3 className="font-semibold">Exclude Specific Fields</h3>
        <CodeBlock code={`db.users.find(
  {},
  {
    password: 0
  }
);`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          By default, MongoDB includes <code>_id</code> in query results.
          You can explicitly exclude it using <code>_id: 0</code>.
        </p>

        <CodeBlock code={`db.users.find(
  {},
  {
    name: 1,
    email: 1,
    _id: 0
  }
);`} />

        <div className="rounded-xl border border-[var(--accent-color)] bg-[var(--accent-background)] p-4">
          <p className="text-sm leading-7 text-[var(--text-secondary)]">
            <strong className="text-[var(--text-primary)]">Important:</strong>{" "}
            In a projection, you generally cannot mix inclusion and exclusion
            for regular fields. The exception is the <code>_id</code> field.
          </p>
        </div>
      </section>

      {/* 9 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Missing Fields vs Null Values</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          A missing field and a field containing null are different in MongoDB.
        </p>

        <h3 className="font-semibold">Document 1: Field Is Missing</h3>
        <CodeBlock code={`{
  name: "Mayur"
}`} />

        <h3 className="font-semibold">Document 2: Field Contains Null</h3>
        <CodeBlock code={`{
  name: "Rahul",
  age: null
}`} />

        <h3 className="font-semibold">Check Whether a Field Exists</h3>
        <CodeBlock code={`// Find documents where age exists
db.users.find({
  age: { $exists: true }
});

// Find documents where age does not exist
db.users.find({
  age: { $exists: false }
});`} />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          <code>$exists</code> checks whether a field is present, not whether
          its value is non-null.
        </p>
      </section>

      {/* 10 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Important Points to Remember</h2>
        <div className="rounded-xl border border-[var(--accent-color)] bg-[var(--accent-background)] p-4">
          <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-[var(--text-secondary)]">
            <li>A field is a key-value pair inside a document.</li>
            <li>Fields can store strings, numbers, arrays, objects, dates, and more.</li>
            <li>Nested fields can be accessed using dot notation.</li>
            <li>Array elements can be accessed using their indexes.</li>
            <li><code>$set</code> adds or updates fields.</li>
            <li><code>$unset</code> removes fields.</li>
            <li>Projection selects which fields are returned.</li>
            <li>A missing field is different from a field containing null.</li>
          </ul>
        </div>
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
            q: "What is a field in MongoDB?",
            a: "A field is a key-value pair inside a MongoDB document. For example, name: 'Mayur' is a field."
          },
          {
            q: "What are the different types of field values?",
            a: "MongoDB supports strings, integers, doubles, booleans, arrays, embedded documents, dates, ObjectIds, null, and other BSON types."
          },
          {
            q: "What is a nested field?",
            a: "A nested field is a field inside an embedded document. For example, address.city is a nested field."
          },
          {
            q: "What is dot notation in MongoDB?",
            a: "Dot notation is used to access or query nested fields, such as 'address.city'."
          },
          {
            q: "How do you add a new field to a document?",
            a: "Use the $set update operator to add a field or update its existing value."
          },
          {
            q: "What is the difference between $set and $unset?",
            a: "$set adds or updates a field, while $unset removes a field from a document."
          },
          {
            q: "What is projection in MongoDB?",
            a: "Projection controls which fields are included or excluded in query results."
          },
          {
            q: "What is the difference between a missing field and null?",
            a: "A missing field does not exist in the document, while a null field exists but has a null value."
          },
          {
            q: "How do you check whether a field exists?",
            a: "Use the $exists operator, such as { age: { $exists: true } }."
          },
          {
            q: "How do you access the first element of an array field?",
            a: "Use dot notation with index 0, such as 'skills.0'."
          },
        ].map((item, index) => (
          <details key={index} className="group overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)]">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 font-medium transition-colors hover:bg-[var(--bg-hover)]">
              <span>{index + 1}. {item.q}</span>
              <span className="shrink-0 text-lg text-[var(--accent-color)] transition-transform group-open:rotate-45">+</span>
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

export default Fields;