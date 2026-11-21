import CodeBlock from "../../../../components/common/CodeBlock";

const TablesvsCollections = () => {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">

      {/* Header */}
      <div className="space-y-2">
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          DATABASE FUNDAMENTALS / 07
        </p>
        <h1 className="text-3xl font-bold">Tables vs Collections</h1>
        <p className="text-base leading-7 text-[var(--text-secondary)]">
          Tables and collections are used to organize data in databases.
          SQL databases use tables, while document databases like MongoDB
          use collections.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What Is a Table?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          A table is a structure in a relational database that stores related
          data in rows and columns.
        </p>
        <p className="leading-7 text-[var(--text-secondary)]">
          Each row represents one record, and each column represents an
          attribute of that record.
        </p>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)]">
          <table className="w-full min-w-[420px] text-sm text-left">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                {["id", "name", "email"].map((item) => (
                  <th key={item} className="border-b border-[var(--border-color)] p-3 font-semibold">{item}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                [1, "Mayur", "mayur@example.com"],
                [2, "Rahul", "rahul@example.com"],
                [3, "Aman", "aman@example.com"],
              ].map((row) => (
                <tr key={row[0]}>
                  {row.map((value, index) => (
                    <td key={index} className="border-b border-[var(--border-color)] p-3 text-[var(--text-secondary)]">{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-[var(--text-muted)]">
          Example: A users table in a SQL database.
        </p>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. What Is a Collection?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          A collection is a group of related documents in MongoDB. It is
          similar in purpose to a table, but it stores documents instead
          of rows.
        </p>
        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB documents use BSON format and contain fields with their
          corresponding values.
        </p>

        <h3 className="font-semibold">Example: users Collection</h3>
        <CodeBlock code={`[
  {
    _id: 1,
    name: "Mayur",
    email: "mayur@example.com"
  },
  {
    _id: 2,
    name: "Rahul",
    email: "rahul@example.com"
  },
  {
    _id: 3,
    name: "Aman",
    email: "aman@example.com"
  }
]`} />
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Table vs Collection Structure</h2>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-3">
            <h3 className="font-semibold text-[var(--accent-color)]">SQL Database</h3>
            <div className="rounded-lg bg-[var(--bg-hover)] p-3 text-center text-sm font-medium">Database</div>
            <div className="text-center text-[var(--accent-color)]">↓</div>
            <div className="rounded-lg bg-[var(--bg-hover)] p-3 text-center text-sm font-medium">Table</div>
            <div className="text-center text-[var(--accent-color)]">↓</div>
            <div className="rounded-lg bg-[var(--bg-hover)] p-3 text-center text-sm">Rows + Columns</div>
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-3">
            <h3 className="font-semibold text-[var(--accent-color)]">MongoDB</h3>
            <div className="rounded-lg bg-[var(--bg-hover)] p-3 text-center text-sm font-medium">Database</div>
            <div className="text-center text-[var(--accent-color)]">↓</div>
            <div className="rounded-lg bg-[var(--bg-hover)] p-3 text-center text-sm font-medium">Collection</div>
            <div className="text-center text-[var(--accent-color)]">↓</div>
            <div className="rounded-lg bg-[var(--bg-hover)] p-3 text-center text-sm">Documents + Fields</div>
          </div>
        </div>

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          A table and a collection serve similar purposes, but they are not
          exactly the same. Their data models and rules are different.
        </p>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Rows vs Documents</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          A row in SQL and a document in MongoDB both represent an individual
          record, but their structures are different.
        </p>

        <h3 className="font-semibold">SQL Row</h3>
        <CodeBlock code={`id | name  | email
1  | Mayur | mayur@example.com`} />

        <h3 className="font-semibold">MongoDB Document</h3>
        <CodeBlock code={`{
  _id: 1,
  name: "Mayur",
  email: "mayur@example.com"
}`} />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <p className="text-sm leading-7 text-[var(--text-secondary)]">
            Both represent the same user's information, but MongoDB stores
            it as a document containing fields and values.
          </p>
        </div>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Columns vs Fields</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          SQL uses columns to define the attributes of a table. MongoDB uses
          fields inside each document.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
            <h3 className="font-semibold">SQL Columns</h3>
            <CodeBlock code={`name VARCHAR(100)
email VARCHAR(150)
age INT`} />
          </div>
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
            <h3 className="font-semibold">MongoDB Fields</h3>
            <CodeBlock code={`{
  name: "Mayur",
  email: "mayur@example.com",
  age: 19
}`} />
          </div>
        </div>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Schema Differences</h2>

        <h3 className="font-semibold">SQL Table Structure</h3>
        <p className="leading-7 text-[var(--text-secondary)]">
          In a traditional relational database, a table has a defined set of
          columns and data types. Every row follows that table structure.
        </p>
        <CodeBlock code={`CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(150)
);`} />

        <h3 className="font-semibold">MongoDB Collection Structure</h3>
        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB supports flexible document structures. Documents in the
          same collection can have different fields.
        </p>
        <CodeBlock code={`// Document 1
{
  name: "Mayur",
  email: "mayur@example.com"
}

// Document 2
{
  name: "Rahul",
  age: 22,
  city: "Bhopal"
}`} />

        <div className="rounded-xl border border-[var(--accent-color)] bg-[var(--accent-background)] p-4">
          <p className="text-sm leading-7 text-[var(--text-secondary)]">
            <strong className="text-[var(--text-primary)]">Important:</strong>{" "}
            MongoDB's flexible schema does not mean there are no rules.
            You can enforce document structure using schema validation
            or Mongoose schemas.
          </p>
        </div>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Primary Key vs _id</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Both SQL and MongoDB provide a way to uniquely identify each record.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
            <h3 className="font-semibold">SQL Primary Key</h3>
            <CodeBlock code={`CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(100)
);`} />
            <p className="text-sm text-[var(--text-secondary)]">
              A primary key uniquely identifies each row.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
            <h3 className="font-semibold">MongoDB _id</h3>
            <CodeBlock code={`{
  _id: ObjectId("..."),
  name: "Mayur"
}`} />
            <p className="text-sm text-[var(--text-secondary)]">
              Every MongoDB document has a unique _id field. MongoDB
              automatically generates an ObjectId when one is not provided.
            </p>
          </div>
        </div>
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Relationships and References</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          SQL databases commonly connect tables using foreign keys.
          MongoDB can connect documents using references or store related
          data together using embedded documents.
        </p>

        <h3 className="font-semibold">SQL Foreign Key</h3>
        <CodeBlock code={`CREATE TABLE orders (
  id INT PRIMARY KEY,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);`} />

        <h3 className="font-semibold">MongoDB Reference</h3>
        <CodeBlock code={`{
  _id: ObjectId("order123"),
  userId: ObjectId("user123"),
  total: 1500
}`} />

        <h3 className="font-semibold">MongoDB Embedded Document</h3>
        <CodeBlock code={`{
  _id: ObjectId("order123"),
  total: 1500,
  user: {
    name: "Mayur",
    email: "mayur@example.com"
  }
}`} />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          MongoDB references are stored as values. Unlike SQL foreign keys,
          they do not automatically enforce referential integrity.
        </p>
      </section>

      {/* 9 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Main Differences</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[520px] text-sm text-left">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="p-3 border-b border-[var(--border-color)]">Feature</th>
                <th className="p-3 border-b border-[var(--border-color)]">SQL Table</th>
                <th className="p-3 border-b border-[var(--border-color)]">MongoDB Collection</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Database Type", "Relational", "Document"],
                ["Stores", "Rows", "Documents"],
                ["Structure", "Columns", "Fields"],
                ["Schema", "Usually predefined", "Flexible by default"],
                ["Unique Identifier", "Primary Key", "_id"],
                ["Relationships", "Foreign Keys", "References or Embedding"],
                ["Data Format", "Rows and Columns", "BSON Documents"],
              ].map((row) => (
                <tr key={row[0]}>
                  {row.map((value, index) => (
                    <td key={index} className="border-b border-[var(--border-color)] p-3 text-[var(--text-secondary)]">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 10 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. When to Use Tables or Collections?</h2>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
            <h3 className="font-semibold text-[var(--accent-color)]">Use SQL Tables When</h3>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-[var(--text-secondary)]">
              <li>Data has a well-defined structure.</li>
              <li>Relationships between entities are important.</li>
              <li>You need strong relational constraints.</li>
              <li>Transactions across related records are important.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
            <h3 className="font-semibold text-[var(--accent-color)]">Use MongoDB Collections When</h3>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-[var(--text-secondary)]">
              <li>Data naturally fits document structures.</li>
              <li>Documents need flexible fields.</li>
              <li>Related data is often read together.</li>
              <li>You need to model nested or changing data.</li>
            </ul>
          </div>
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
            q: "What is a table in SQL?",
            a: "A table is a structure in a relational database that stores related records in rows and columns."
          },
          {
            q: "What is a collection in MongoDB?",
            a: "A collection is a group of related BSON documents in a MongoDB database."
          },
          {
            q: "What is the main difference between a table and a collection?",
            a: "A table stores records in rows with a defined set of columns, while a collection stores documents that can have flexible fields."
          },
          {
            q: "What is the difference between a row and a document?",
            a: "Both represent individual records. A SQL row contains column values, while a MongoDB document contains fields and values."
          },
          {
            q: "What is the difference between a column and a field?",
            a: "A column defines an attribute in a SQL table. A field is an attribute stored inside a MongoDB document."
          },
          {
            q: "Can documents in the same MongoDB collection have different fields?",
            a: "Yes. MongoDB supports flexible document structures, although validation rules can enforce a consistent structure."
          },
          {
            q: "What is the _id field in MongoDB?",
            a: "The _id field uniquely identifies a document in a collection. MongoDB generates an ObjectId automatically if one is not provided."
          },
          {
            q: "Does MongoDB support foreign keys?",
            a: "MongoDB supports references between documents, but it does not automatically enforce foreign-key constraints like relational databases."
          },
          {
            q: "What is the difference between embedding and referencing?",
            a: "Embedding stores related data inside the same document. Referencing stores an identifier that points to another document."
          },
          {
            q: "Are tables and collections exactly the same?",
            a: "No. They serve similar organizational purposes, but their data structures, schema rules, and relationship mechanisms are different."
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

export default TablesvsCollections;