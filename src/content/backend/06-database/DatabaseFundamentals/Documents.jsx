import CodeBlock from "../../../../components/common/CodeBlock";

const Documents = () => {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">

      {/* Header */}
      <div className="space-y-2">
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          DATABASE FUNDAMENTALS / 08
        </p>
        <h1 className="text-3xl font-bold">Documents in MongoDB</h1>
        <p className="text-base leading-7 text-[var(--text-secondary)]">
          A document is the basic unit of data in MongoDB. It stores information
          as key-value pairs and uses BSON format internally.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What Is a Document?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          A document is a data structure that stores information using
          key-value pairs. It is similar to a JSON object.
        </p>
        <p className="leading-7 text-[var(--text-secondary)]">
          In MongoDB, documents are stored inside collections. Each document
          represents an individual record.
        </p>

        <h3 className="font-semibold">Example</h3>
        <CodeBlock code={`{
  _id: ObjectId("65a123456789abcdef123456"),
  name: "Mayur",
  age: 19,
  email: "mayur@example.com"
}`} />

        <div className="rounded-xl border border-[var(--accent-color)] bg-[var(--accent-background)] p-4">
          <p className="text-sm leading-7 text-[var(--text-secondary)]">
            <strong className="text-[var(--text-primary)]">Remember:</strong>{" "}
            In MongoDB, one document represents one record, just as one row
            represents one record in a relational database.
          </p>
        </div>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Document Structure</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          A MongoDB document contains fields. Each field has a name (key)
          and a value.
        </p>

        <CodeBlock code={`{
  name: "Mayur",
  age: 19,
  isStudent: true
}`} />

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
            <h3 className="font-semibold text-[var(--accent-color)]">Keys</h3>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              The names of fields, such as name, age, and isStudent.
            </p>
          </div>
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
            <h3 className="font-semibold text-[var(--accent-color)]">Values</h3>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              The information stored in fields, such as "Mayur", 19, and true.
            </p>
          </div>
        </div>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. BSON (Binary JSON)</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB stores documents internally in BSON (Binary JSON) format.
          BSON is a binary-encoded serialization format inspired by JSON.
        </p>
        <p className="leading-7 text-[var(--text-secondary)]">
          BSON supports additional data types that standard JSON does not
          represent directly, such as ObjectId, Date, and Binary Data.
        </p>

        <h3 className="font-semibold">Example</h3>
        <CodeBlock code={`{
  _id: ObjectId("65a123456789abcdef123456"),
  name: "Mayur",
  createdAt: ISODate("2026-11-16T10:00:00Z"),
  isActive: true
}`} />

        <h3 className="font-semibold">JSON vs BSON</h3>
        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[420px] text-sm text-left">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="p-3 border-b border-[var(--border-color)]">JSON</th>
                <th className="p-3 border-b border-[var(--border-color)]">BSON</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Text-based format", "Binary-encoded format"],
                ["Common data types", "Additional data types"],
                ["Human-readable", "Not directly human-readable"],
                ["Used for data exchange", "Used internally by MongoDB"],
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

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Data Types in Documents</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB supports different BSON data types for storing different
          kinds of information.
        </p>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[480px] text-sm text-left">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="p-3 border-b border-[var(--border-color)]">Data Type</th>
                <th className="p-3 border-b border-[var(--border-color)]">Example</th>
                <th className="p-3 border-b border-[var(--border-color)]">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["String", '"Mayur"', "Text"],
                ["Int", "25", "Integer values"],
                ["Double", "99.5", "Decimal values"],
                ["Boolean", "true", "True or false"],
                ["ObjectId", "ObjectId(...)", "Unique identifier"],
                ["Date", "new Date()", "Date and time"],
                ["Array", '["Node", "React"]', "Multiple values"],
                ["Object", '{ city: "Bhopal" }', "Nested data"],
                ["Null", "null", "Empty or unknown value"],
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

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Nested Documents</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          A document can contain another document inside it. This is called
          a nested document or embedded document.
        </p>

        <CodeBlock code={`{
  name: "Mayur",
  email: "mayur@example.com",

  address: {
    city: "Bhopal",
    state: "Madhya Pradesh",
    country: "India"
  }
}`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          Here, address is a nested document containing city, state, and
          country fields.
        </p>

        <p className="text-sm text-[var(--text-muted)]">
          Nested documents help store related information together.
        </p>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Arrays Inside Documents</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB documents can contain arrays. An array can store multiple
          values or multiple nested documents.
        </p>

        <h3 className="font-semibold">Array of Values</h3>
        <CodeBlock code={`{
  name: "Mayur",
  skills: ["HTML", "CSS", "JavaScript", "Node.js"]
}`} />

        <h3 className="font-semibold">Array of Objects</h3>
        <CodeBlock code={`{
  name: "Mayur",

  projects: [
    {
      title: "Portfolio",
      status: "Completed"
    },
    {
      title: "Backend Notes",
      status: "In Progress"
    }
  ]
}`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          In the second example, projects is an array containing multiple
          documents.
        </p>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. The _id Field</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Every MongoDB document must have a unique <code>_id</code> field.
          It identifies a document inside its collection.
        </p>

        <CodeBlock code={`{
  _id: ObjectId("65a123456789abcdef123456"),
  name: "Mayur",
  age: 19
}`} />

        <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-[var(--text-secondary)]">
          <li>MongoDB automatically generates an ObjectId if you do not provide an _id.</li>
          <li>The _id field must be unique within its collection.</li>
          <li>You can also provide your own supported unique identifier.</li>
          <li>MongoDB creates a unique index on _id by default.</li>
        </ul>
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Maximum Document Size</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB has a maximum BSON document size of 16 MiB (16 mebibytes).
          A single document cannot exceed this limit.
        </p>

        <div className="rounded-xl border border-[var(--accent-color)] bg-[var(--accent-background)] p-4">
          <h3 className="font-semibold">Important</h3>
          <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
            If a document becomes too large, consider storing large files
            separately using GridFS or external object storage and keeping
            their references in the document.
          </p>
        </div>
      </section>

      {/* 9 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Creating and Reading Documents</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB provides methods to insert and retrieve documents from
          a collection.
        </p>

        <h3 className="font-semibold">Insert One Document</h3>
        <CodeBlock code={`db.users.insertOne({
  name: "Mayur",
  age: 19,
  email: "mayur@example.com"
});`} />

        <h3 className="font-semibold">Insert Multiple Documents</h3>
        <CodeBlock code={`db.users.insertMany([
  {
    name: "Rahul",
    age: 22
  },
  {
    name: "Aman",
    age: 21
  }
]);`} />

        <h3 className="font-semibold">Find Documents</h3>
        <CodeBlock code={`// Find all documents
db.users.find();

// Find documents matching a condition
db.users.find({ age: 19 });

// Find one matching document
db.users.findOne({ name: "Mayur" });`} />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          These examples use MongoDB Shell syntax. They can be executed
          in mongosh when connected to a database.
        </p>
      </section>

      {/* 10 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Important Points to Remember</h2>
        <div className="rounded-xl border border-[var(--accent-color)] bg-[var(--accent-background)] p-4">
          <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-[var(--text-secondary)]">
            <li>A document is the basic unit of data in MongoDB.</li>
            <li>Documents contain key-value pairs called fields.</li>
            <li>MongoDB stores documents internally in BSON format.</li>
            <li>Documents can contain nested objects and arrays.</li>
            <li>Every document must have a unique _id field.</li>
            <li>The maximum BSON document size is 16 MiB.</li>
            <li>Documents are stored inside collections.</li>
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
            q: "What is a document in MongoDB?",
            a: "A document is the basic unit of data in MongoDB. It stores information as key-value pairs."
          },
          {
            q: "What format does MongoDB use to store documents?",
            a: "MongoDB stores documents internally in BSON, which is a binary-encoded serialization format."
          },
          {
            q: "What is BSON?",
            a: "BSON stands for Binary JSON. It is a binary-encoded format that supports additional data types such as ObjectId and Date."
          },
          {
            q: "What is the difference between JSON and BSON?",
            a: "JSON is a text-based data format, while BSON is binary-encoded and supports additional data types."
          },
          {
            q: "What are fields in MongoDB?",
            a: "Fields are key-value pairs inside a MongoDB document. For example, name: 'Mayur' is a field."
          },
          {
            q: "Can a MongoDB document contain another document?",
            a: "Yes. MongoDB supports nested or embedded documents."
          },
          {
            q: "Can a MongoDB document contain arrays?",
            a: "Yes. Arrays can contain multiple values or multiple embedded documents."
          },
          {
            q: "What is the purpose of the _id field?",
            a: "The _id field uniquely identifies each document within a collection."
          },
          {
            q: "What is the maximum size of a MongoDB document?",
            a: "The maximum BSON document size is 16 MiB."
          },
          {
            q: "What happens if we do not provide an _id field?",
            a: "MongoDB automatically generates an ObjectId for the document."
          },
          {
            q: "What is an embedded document?",
            a: "An embedded document is a document stored inside another document as a field value."
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

export default Documents;