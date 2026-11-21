import CodeBlock from "../../../../components/common/CodeBlock";

const PrimaryKey = () => {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">

      {/* Header */}
      <div className="space-y-2">
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          DATABASE FUNDAMENTALS / 10
        </p>
        <h1 className="text-3xl font-bold">Primary Key</h1>
        <p className="text-base leading-7 text-[var(--text-secondary)]">
          A primary key is a column or combination of columns that uniquely
          identifies each record in a database table.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What Is a Primary Key?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          A primary key is used to uniquely identify every row in a database
          table. No two rows can have the same primary key value.
        </p>

        <h3 className="font-semibold">Example: Students Table</h3>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[400px] text-sm text-left">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="p-3 border-b border-[var(--border-color)] text-[var(--accent-color)]">id (PK)</th>
                <th className="p-3 border-b border-[var(--border-color)]">name</th>
                <th className="p-3 border-b border-[var(--border-color)]">email</th>
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
                    <td key={index} className="p-3 border-b border-[var(--border-color)] text-[var(--text-secondary)]">{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          Here, <code>id</code> is the primary key. Every student has a
          different ID, so we can identify each student uniquely.
        </p>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Rules of a Primary Key</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          A primary key follows important rules to maintain the identity
          of every record.
        </p>

        {[
          ["Unique", "Every row must have a different primary key value."],
          ["NOT NULL", "A primary key cannot contain NULL values."],
          ["One Primary Key", "A table can have only one primary key constraint."],
          ["Stable", "Primary key values should not change unnecessarily."],
          ["Minimal", "Use only the columns needed to identify a record uniquely."],
        ].map(([title, description], index) => (
          <div key={title} className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
            <h3 className="font-semibold">
              <span className="mr-2 text-[var(--accent-color)]">{index + 1}.</span>
              {title}
            </h3>
            <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">{description}</p>
          </div>
        ))}
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Creating a Primary Key in SQL</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          You can define a primary key while creating a table using the
          <code> PRIMARY KEY </code> constraint.
        </p>

        <CodeBlock code={`CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(150)
);`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          In this example, the <code>id</code> column is the primary key.
          The database automatically enforces its uniqueness and non-null
          requirement.
        </p>

        <h3 className="font-semibold">Adding a Primary Key to an Existing Table</h3>
        <CodeBlock code={`ALTER TABLE users
ADD CONSTRAINT pk_users
PRIMARY KEY (id);`} />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          This works when the existing data satisfies the primary key rules.
          Duplicate or NULL values must be resolved first.
        </p>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Types of Primary Keys</h2>

        <div className="space-y-3">
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
            <h3 className="font-semibold">A. Natural Primary Key</h3>
            <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
              A natural key uses an existing real-world attribute that
              uniquely identifies a record.
            </p>
            <CodeBlock code={`CREATE TABLE countries (
  country_code CHAR(2) PRIMARY KEY,
  country_name VARCHAR(100)
);`} />
            <p className="text-xs text-[var(--text-muted)]">
              Example: A country code such as IN.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
            <h3 className="font-semibold">B. Surrogate Primary Key</h3>
            <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
              A surrogate key is an artificially generated identifier
              that has no direct business meaning.
            </p>
            <CodeBlock code={`CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100)
);`} />
            <p className="text-xs text-[var(--text-muted)]">
              Example: Auto-generated numeric IDs.
            </p>
          </div>
        </div>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Composite Primary Key</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          A composite primary key uses two or more columns together to
          uniquely identify a record.
        </p>

        <h3 className="font-semibold">Example: Student Course Enrollment</h3>
        <CodeBlock code={`CREATE TABLE enrollments (
  student_id INT,
  course_id INT,
  enrollment_date DATE,

  PRIMARY KEY (student_id, course_id)
);`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          Here, neither <code>student_id</code> nor <code>course_id</code>
          needs to be unique individually. But their combination must be
          unique.
        </p>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[400px] text-sm text-left">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="p-3 border-b border-[var(--border-color)]">student_id (PK)</th>
                <th className="p-3 border-b border-[var(--border-color)]">course_id (PK)</th>
              </tr>
            </thead>
            <tbody>
              {[
                [1, 101],
                [1, 102],
                [2, 101],
              ].map((row) => (
                <tr key={`${row[0]}-${row[1]}`}>
                  {row.map((value, index) => (
                    <td key={index} className="p-3 border-b border-[var(--border-color)] text-[var(--text-secondary)]">{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Primary Key vs Unique Key</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Both primary key and unique constraints prevent duplicate values,
          but they have some important differences.
        </p>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[450px] text-sm text-left">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="p-3 border-b border-[var(--border-color)]">Feature</th>
                <th className="p-3 border-b border-[var(--border-color)]">Primary Key</th>
                <th className="p-3 border-b border-[var(--border-color)]">Unique Key</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Duplicate Values", "Not allowed", "Not allowed"],
                ["NULL Values", "Not allowed", "Depends on database"],
                ["Per Table", "One constraint", "Multiple constraints"],
                ["Purpose", "Main row identifier", "Enforce uniqueness"],
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

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          Note: How UNIQUE constraints handle NULL values depends on the
          database system. For example, MySQL and PostgreSQL have different
          default behaviors.
        </p>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Primary Key and Foreign Key</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          A primary key identifies a record in its own table. A foreign key
          connects a record to a primary or unique key in another table.
        </p>

        <CodeBlock code={`CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE orders (
  id INT PRIMARY KEY,
  user_id INT,
  total DECIMAL(10, 2),

  FOREIGN KEY (user_id) REFERENCES users(id)
);`} />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-3">
          <div className="rounded-lg bg-[var(--bg-hover)] p-3 text-center">
            <p className="font-semibold">users Table</p>
            <p className="text-sm text-[var(--text-secondary)]">id (Primary Key)</p>
          </div>
          <div className="text-center text-[var(--accent-color)]">↓</div>
          <div className="rounded-lg bg-[var(--bg-hover)] p-3 text-center">
            <p className="font-semibold">orders Table</p>
            <p className="text-sm text-[var(--text-secondary)]">user_id (Foreign Key)</p>
          </div>
          <p className="text-xs text-[var(--text-muted)]">
            Each order can reference the user who placed it.
          </p>
        </div>
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Primary Key in MongoDB (_id)</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB does not use SQL-style primary key constraints. Instead,
          every document must contain a unique <code>_id</code> field.
          This field serves as the document's primary identifier.
        </p>

        <CodeBlock code={`{
  _id: ObjectId("65a123456789abcdef123456"),
  name: "Mayur",
  email: "mayur@example.com"
}`} />

        <h3 className="font-semibold">Important Points</h3>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-[var(--text-secondary)]">
          <li>Every document must have an _id field.</li>
          <li>MongoDB automatically generates an ObjectId if you do not provide one.</li>
          <li>The _id value must be unique within its collection.</li>
          <li>MongoDB creates a unique index on the _id field by default.</li>
          <li>You can provide your own supported unique _id value.</li>
        </ul>

        <h3 className="font-semibold">Custom _id Example</h3>
        <CodeBlock code={`db.users.insertOne({
  _id: "USER-101",
  name: "Mayur",
  email: "mayur@example.com"
});`} />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          Here, we provide our own string identifier instead of allowing
          MongoDB to generate an ObjectId.
        </p>
      </section>

      {/* 9 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Why Is a Primary Key Important?</h2>

        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ["Unique Identification", "Identifies every record without confusion."],
            ["Data Integrity", "Prevents duplicate or missing primary key values."],
            ["Relationships", "Allows other tables to reference records."],
            ["Data Retrieval", "Helps locate a specific record efficiently through its index."],
            ["Record Management", "Makes updating and deleting specific records easier."],
            ["Consistency", "Provides a stable identifier for each record."],
          ].map(([title, description]) => (
            <div key={title} className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 10 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Best Practices</h2>
        <div className="rounded-xl border border-[var(--accent-color)] bg-[var(--accent-background)] p-4">
          <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-[var(--text-secondary)]">
            <li>Choose a primary key that uniquely identifies each record.</li>
            <li>Prefer stable values that do not change frequently.</li>
            <li>Use surrogate keys when natural identifiers can change or are unsuitable.</li>
            <li>Keep composite keys only when multiple columns are genuinely needed for uniqueness.</li>
            <li>Avoid using sensitive personal information as a primary key.</li>
            <li>Use foreign keys to maintain relationships in relational databases.</li>
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
            q: "What is a primary key?",
            a: "A primary key is a column or combination of columns that uniquely identifies every row in a table."
          },
          {
            q: "What are the main properties of a primary key?",
            a: "A primary key must be unique and cannot contain NULL values. It should also be stable and minimal."
          },
          {
            q: "Can a table have multiple primary keys?",
            a: "A table can have only one primary key constraint, but that constraint can contain multiple columns."
          },
          {
            q: "What is a composite primary key?",
            a: "A composite primary key uses two or more columns together to uniquely identify a record."
          },
          {
            q: "What is a natural primary key?",
            a: "A natural key uses an existing real-world attribute, such as a country code, to identify a record."
          },
          {
            q: "What is a surrogate primary key?",
            a: "A surrogate key is an artificially generated identifier, such as an auto-incremented ID."
          },
          {
            q: "What is the difference between a primary key and a unique key?",
            a: "Both prevent duplicate values. A primary key also cannot contain NULL values, and a table can have only one primary key constraint but multiple unique constraints."
          },
          {
            q: "What is the difference between a primary key and a foreign key?",
            a: "A primary key uniquely identifies a record in its own table. A foreign key references a key in another table to establish a relationship."
          },
          {
            q: "What is the primary key equivalent in MongoDB?",
            a: "MongoDB uses the _id field as the unique identifier for every document."
          },
          {
            q: "What happens if we do not provide _id in MongoDB?",
            a: "MongoDB automatically generates an ObjectId for the document."
          },
          {
            q: "Why should primary key values be stable?",
            a: "Stable primary keys prevent unnecessary changes to references and relationships that depend on those identifiers."
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

export default PrimaryKey;