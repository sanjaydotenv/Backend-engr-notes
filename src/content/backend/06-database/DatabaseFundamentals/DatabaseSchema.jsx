import CodeBlock from "../../../../components/common/CodeBlock";

const DatabaseSchema = () => {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">

      {/* Header */}
      <div className="space-y-2">
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          DATABASE FUNDAMENTALS / 06
        </p>
        <h1 className="text-3xl font-bold">Database Schema</h1>
        <p className="text-base leading-7 text-[var(--text-secondary)]">
          A database schema defines how data is organized inside a database,
          including tables, columns, data types, relationships, and constraints.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What Is a Database Schema?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          A database schema is the logical structure or blueprint of a
          database. It describes what data will be stored and how different
          pieces of data are organized.
        </p>
        <p className="leading-7 text-[var(--text-secondary)]">
          Before creating a database for an application, developers usually
          design its schema to decide which tables or collections are needed,
          what fields they contain, and how they are connected.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-3">
          <p className="font-semibold text-sm">Example: E-commerce Database Schema</p>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ["Users", "id, name, email"],
              ["Products", "id, name, price"],
              ["Orders", "id, user_id, total"],
            ].map(([title, fields]) => (
              <div key={title} className="rounded-lg border border-[var(--accent-color)] bg-[var(--accent-background)] p-3">
                <p className="font-semibold text-sm">{title}</p>
                <p className="mt-2 text-xs leading-5 text-[var(--text-secondary)]">{fields}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-[var(--text-muted)]">
            These table definitions and their relationships are part of the database schema.
          </p>
        </div>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. What Does a Database Schema Define?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          A schema describes different parts of the database structure.
        </p>

        <div className="space-y-3">
          {[
            ["Tables", "Define where related records are stored."],
            ["Columns", "Define the attributes or fields of a table."],
            ["Data Types", "Define what kind of values a column can store, such as INT, VARCHAR, or DATE."],
            ["Keys", "Define how records are uniquely identified and connected."],
            ["Relationships", "Describe how different tables are associated."],
            ["Constraints", "Define rules that data must follow, such as NOT NULL and UNIQUE."],
          ].map(([title, description], index) => (
            <div key={title} className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
              <h3 className="font-semibold">
                <span className="mr-2 text-[var(--accent-color)]">{index + 1}.</span>
                {title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Example of a SQL Database Schema</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Consider a student management application. We need to store student
          information and the courses they enroll in.
        </p>

        <h3 className="font-semibold">Students Table</h3>
        <CodeBlock code={`CREATE TABLE students (
  id INT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) UNIQUE,
  age INT
);`} />

        <h3 className="font-semibold">Courses Table</h3>
        <CodeBlock code={`CREATE TABLE courses (
  id INT PRIMARY KEY,
  course_name VARCHAR(100) NOT NULL,
  duration INT
);`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          These SQL statements define the structure of two tables. They do
          not represent the actual student or course records.
        </p>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Schema vs Data</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Schema and data are different concepts. Schema defines the structure,
          while data represents the actual values stored inside that structure.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
            <h3 className="font-semibold">Schema (Structure)</h3>
            <CodeBlock code={`CREATE TABLE users (
  id INT,
  name VARCHAR(100),
  email VARCHAR(150)
);`} />
            <p className="text-xs text-[var(--text-muted)]">
              Defines the table and its columns.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
            <h3 className="font-semibold">Data (Actual Records)</h3>
            <CodeBlock code={`id: 1
name: "Mayur"
email: "mayur@example.com"`} />
            <p className="text-xs text-[var(--text-muted)]">
              Contains actual stored values.
            </p>
          </div>
        </div>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Database Schema in MongoDB</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB is a document database. It stores data in collections
          containing BSON documents.
        </p>
        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB allows flexible document structures, so documents in the
          same collection do not always need identical fields. However,
          developers can still define and enforce a schema using Mongoose
          or MongoDB validation rules.
        </p>

        <h3 className="font-semibold">Example: Mongoose Schema</h3>
        <CodeBlock code={`import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  age: {
    type: Number,
  },
});

const User = mongoose.model("User", userSchema);

export default User;`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          Here, <code>userSchema</code> defines the expected structure and
          validation rules for user documents. Mongoose uses this schema
          when creating and updating documents through the model.
        </p>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Types of Database Schemas</h2>

        <div className="space-y-3">
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
            <h3 className="font-semibold">A. Conceptual Schema</h3>
            <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
              Describes the high-level structure of the database. It focuses
              on entities, relationships, and business requirements without
              going into implementation details.
            </p>
            <p className="mt-2 text-xs text-[var(--accent-color)]">
              Example: Users place Orders.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
            <h3 className="font-semibold">B. Logical Schema</h3>
            <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
              Describes tables, columns, data types, keys, and relationships.
              It focuses on how data is logically organized.
            </p>
            <p className="mt-2 text-xs text-[var(--accent-color)]">
              Example: users(id, name, email).
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
            <h3 className="font-semibold">C. Physical Schema</h3>
            <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
              Describes how data is physically stored and accessed, including
              storage structures, indexes, and file organization.
            </p>
            <p className="mt-2 text-xs text-[var(--accent-color)]">
              Example: Database indexes and storage files.
            </p>
          </div>
        </div>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. What Is Schema Design?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Schema design is the process of planning how an application's
          information will be stored and connected in a database.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <div className="space-y-2 text-center text-sm">
            {[
              "Understand application requirements",
              "Identify entities and their data",
              "Define tables or collections",
              "Choose fields and data types",
              "Define keys and relationships",
              "Add constraints and indexes",
            ].map((step, index) => (
              <div key={step}>
                <div className="rounded-lg bg-[var(--bg-hover)] p-3">
                  <span className="mr-2 text-[var(--accent-color)]">{index + 1}.</span>
                  {step}
                </div>
                {index !== 5 && (
                  <div className="py-1 text-[var(--accent-color)]">↓</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Why Is Database Schema Important?</h2>

        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ["Better Organization", "Keeps application data structured and understandable."],
            ["Data Integrity", "Helps prevent invalid or inconsistent records."],
            ["Clear Relationships", "Defines how different records are connected."],
            ["Maintainability", "Makes database structure easier to understand and modify."],
            ["Performance Planning", "Helps developers plan suitable indexes and access patterns."],
            ["Reduced Duplication", "Good schema design can reduce unnecessary repeated data."],
          ].map(([title, description]) => (
            <div key={title} className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Important Points to Remember</h2>
        <div className="rounded-xl border border-[var(--accent-color)] bg-[var(--accent-background)] p-4">
          <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-[var(--text-secondary)]">
            <li>Database schema defines the structure of a database.</li>
            <li>It describes tables, columns, data types, and relationships.</li>
            <li>Schema is different from actual stored data.</li>
            <li>MongoDB supports flexible document structures.</li>
            <li>Mongoose can define application-level schemas for MongoDB documents.</li>
            <li>Conceptual, logical, and physical schemas describe different levels of database design.</li>
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
            q: "What is a database schema?",
            a: "A database schema is the logical blueprint that defines how data is organized, including tables, columns, data types, keys, relationships, and constraints."
          },
          {
            q: "What is the difference between schema and data?",
            a: "Schema defines the structure of a database, while data represents the actual values stored inside it."
          },
          {
            q: "What are the three levels of database schema?",
            a: "Conceptual schema, logical schema, and physical schema."
          },
          {
            q: "What is a conceptual schema?",
            a: "It describes the high-level entities and relationships of a database based on business requirements."
          },
          {
            q: "What is a logical schema?",
            a: "It describes the logical organization of data, including tables, columns, data types, keys, and relationships."
          },
          {
            q: "What is a physical schema?",
            a: "It describes how database data is physically stored and accessed, including storage structures and indexes."
          },
          {
            q: "Does MongoDB have a schema?",
            a: "MongoDB supports flexible document structures, but schema validation can still be enforced using MongoDB validators or application tools such as Mongoose."
          },
          {
            q: "What is a Mongoose schema?",
            a: "A Mongoose schema defines the structure, data types, defaults, and validation rules for documents managed through a Mongoose model."
          },
          {
            q: "Why is database schema design important?",
            a: "It helps organize data, maintain integrity, define relationships, and plan efficient data access."
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

export default DatabaseSchema;