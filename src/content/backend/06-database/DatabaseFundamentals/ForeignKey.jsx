import CodeBlock from "../../../../components/common/CodeBlock";

const ForeignKey = () => {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">

      {/* Header */}
      <div className="space-y-2">
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          DATABASE FUNDAMENTALS / 11
        </p>
        <h1 className="text-3xl font-bold">Foreign Key</h1>
        <p className="text-base leading-7 text-[var(--text-secondary)]">
          A foreign key is a column or group of columns that references a
          primary key or a suitable unique key in another table. It helps
          establish relationships between tables.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What Is a Foreign Key?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          A foreign key is used to connect two tables in a relational database.
          It creates a relationship by referencing a key in another table.
        </p>
        <p className="leading-7 text-[var(--text-secondary)]">
          For example, a user can place multiple orders. Instead of storing
          all user information inside every order, we can store the user's
          ID in the orders table.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
            <h3 className="font-semibold text-[var(--accent-color)]">Users Table</h3>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">id (Primary Key)</p>
            <div className="mt-3 space-y-2 text-sm">
              <div className="rounded-lg bg-[var(--bg-hover)] p-2">1 — Mayur</div>
              <div className="rounded-lg bg-[var(--bg-hover)] p-2">2 — Rahul</div>
            </div>
          </div>
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
            <h3 className="font-semibold text-[var(--accent-color)]">Orders Table</h3>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">user_id (Foreign Key)</p>
            <div className="mt-3 space-y-2 text-sm">
              <div className="rounded-lg bg-[var(--bg-hover)] p-2">101 — User 1</div>
              <div className="rounded-lg bg-[var(--bg-hover)] p-2">102 — User 1</div>
              <div className="rounded-lg bg-[var(--bg-hover)] p-2">103 — User 2</div>
            </div>
          </div>
        </div>
        <p className="text-sm text-[var(--text-muted)]">
          Here, orders.user_id references users.id.
        </p>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. How Does a Foreign Key Work?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          When a foreign key is defined, the database checks whether a
          referenced value exists in the parent table.
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

        <p className="leading-7 text-[var(--text-secondary)]">
          In this example:
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-[var(--text-secondary)]">
          <li><code>users.id</code> is the primary key.</li>
          <li><code>orders.user_id</code> is the foreign key.</li>
          <li>Every non-NULL user_id value must match an existing users.id.</li>
          <li>The same user can have multiple orders.</li>
        </ul>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Referential Integrity</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Referential integrity is a database rule that keeps relationships
          between tables valid.
        </p>
        <p className="leading-7 text-[var(--text-secondary)]">
          A foreign key helps maintain this rule by preventing references
          to records that do not exist in the referenced table.
        </p>

        <h3 className="font-semibold">Valid Foreign Key</h3>
        <CodeBlock code={`-- User with id 1 exists
INSERT INTO users (id, name)
VALUES (1, 'Mayur');

-- This order is valid
INSERT INTO orders (id, user_id, total)
VALUES (101, 1, 1500);`} />

        <h3 className="font-semibold">Invalid Foreign Key</h3>
        <CodeBlock code={`-- User with id 99 does not exist
INSERT INTO orders (id, user_id, total)
VALUES (102, 99, 2000);`} />

        <div className="rounded-xl border border-[var(--accent-color)] bg-[var(--accent-background)] p-4">
          <p className="text-sm leading-7 text-[var(--text-secondary)]">
            <strong className="text-[var(--text-primary)]">Result:</strong>{" "}
            The second insert fails because user ID 99 does not exist in
            the users table.
          </p>
        </div>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Foreign Key Rules</h2>

        {[
          ["Referenced Key", "A foreign key must reference a primary key or a suitable unique key."],
          ["Matching Values", "A non-NULL foreign key value must match an existing referenced key value."],
          ["Duplicate Values", "Foreign key values can be repeated. Multiple orders can belong to one user."],
          ["NULL Values", "A foreign key can contain NULL if the column allows it."],
          ["Data Types", "The referencing and referenced columns must have compatible data types."],
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

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Types of Foreign Key Relationships</h2>

        <div className="space-y-3">
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
            <h3 className="font-semibold">A. One-to-One (1:1)</h3>
            <p className="text-sm leading-7 text-[var(--text-secondary)]">
              One record in a table is related to at most one record in
              another table. A UNIQUE constraint on the foreign key helps
              enforce this relationship.
            </p>
            <CodeBlock code={`CREATE TABLE user_profiles (
  id INT PRIMARY KEY,
  user_id INT UNIQUE,
  bio VARCHAR(255),
  FOREIGN KEY (user_id) REFERENCES users(id)
);`} />
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
            <h3 className="font-semibold">B. One-to-Many (1:N)</h3>
            <p className="text-sm leading-7 text-[var(--text-secondary)]">
              One record in a parent table can be related to multiple records
              in a child table.
            </p>
            <CodeBlock code={`CREATE TABLE orders (
  id INT PRIMARY KEY,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);`} />
            <p className="text-xs text-[var(--text-muted)]">
              Example: One user can place multiple orders.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
            <h3 className="font-semibold">C. Many-to-Many (M:N)</h3>
            <p className="text-sm leading-7 text-[var(--text-secondary)]">
              Multiple records in one table can be related to multiple
              records in another table. A junction table stores the
              relationship using foreign keys.
            </p>
            <CodeBlock code={`CREATE TABLE enrollments (
  student_id INT,
  course_id INT,

  PRIMARY KEY (student_id, course_id),

  FOREIGN KEY (student_id) REFERENCES students(id),
  FOREIGN KEY (course_id) REFERENCES courses(id)
);`} />
            <p className="text-xs text-[var(--text-muted)]">
              Example: A student can enroll in multiple courses, and a course
              can have multiple students.
            </p>
          </div>
        </div>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. ON DELETE and ON UPDATE</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Foreign keys support actions that define what happens to related
          records when a referenced value is deleted or updated.
        </p>

        <div className="space-y-3">
          {[
            ["CASCADE", "Automatically deletes or updates matching child rows when the referenced parent key is deleted or updated."],
            ["SET NULL", "Sets the foreign key value in child rows to NULL when the referenced parent row is deleted or updated."],
            ["RESTRICT", "Prevents the parent row from being deleted or updated while matching child rows exist."],
            ["NO ACTION", "Does not automatically modify child rows. The database checks the constraint according to its rules."],
            ["SET DEFAULT", "Sets the foreign key to its default value when the referenced parent row is deleted or updated, if supported by the database."],
          ].map(([title, description]) => (
            <div key={title} className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
              <h3 className="font-semibold text-[var(--accent-color)]">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">{description}</p>
            </div>
          ))}
        </div>

        <h3 className="font-semibold">Example: ON DELETE CASCADE</h3>
        <CodeBlock code={`CREATE TABLE orders (
  id INT PRIMARY KEY,
  user_id INT,

  FOREIGN KEY (user_id)
  REFERENCES users(id)
  ON DELETE CASCADE
);`} />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          If a user is deleted, the database automatically deletes that
          user's related orders. Use CASCADE carefully because it can
          delete multiple records.
        </p>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Adding a Foreign Key to an Existing Table</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          You can add a foreign key constraint after creating a table
          using ALTER TABLE.
        </p>

        <CodeBlock code={`ALTER TABLE orders
ADD CONSTRAINT fk_orders_users
FOREIGN KEY (user_id)
REFERENCES users(id);`} />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          Existing values in user_id must satisfy the foreign key constraint
          before it can be added.
        </p>
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Foreign Key vs Primary Key</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[450px] text-sm text-left">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="p-3 border-b border-[var(--border-color)]">Feature</th>
                <th className="p-3 border-b border-[var(--border-color)]">Primary Key</th>
                <th className="p-3 border-b border-[var(--border-color)]">Foreign Key</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Purpose", "Identifies records", "Connects tables"],
                ["Uniqueness", "Must be unique", "Can contain duplicates"],
                ["NULL", "Not allowed", "Allowed if column permits"],
                ["Per Table", "One primary key constraint", "Multiple foreign keys possible"],
                ["References", "Identifies its own row", "References another table's key"],
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

      {/* 9 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Foreign Keys in MongoDB</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB does not provide SQL-style foreign key constraints.
          Instead, developers commonly use references or embedded documents
          to represent relationships.
        </p>

        <h3 className="font-semibold">Reference Example</h3>
        <CodeBlock code={`// users collection
{
  _id: ObjectId("user123"),
  name: "Mayur"
}

// orders collection
{
  _id: ObjectId("order123"),
  userId: ObjectId("user123"),
  total: 1500
}`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          Here, <code>userId</code> stores the user's identifier. However,
          MongoDB does not automatically check whether that user exists.
          The application must manage this relationship.
        </p>

        <h3 className="font-semibold">Mongoose Reference Example</h3>
        <CodeBlock code={`import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  total: {
    type: Number,
    required: true,
  },
});

const Order = mongoose.model("Order", orderSchema);`} />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          Mongoose's <code>ref</code> tells Mongoose which model a reference
          points to. It does not create a database-enforced foreign key.
          Mongoose can use <code>populate()</code> to retrieve referenced
          documents.
        </p>
      </section>

      {/* 10 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Best Practices</h2>
        <div className="rounded-xl border border-[var(--accent-color)] bg-[var(--accent-background)] p-4">
          <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-[var(--text-secondary)]">
            <li>Use foreign keys to maintain valid relationships between tables.</li>
            <li>Choose compatible data types for referencing columns.</li>
            <li>Index foreign key columns when query patterns benefit from it.</li>
            <li>Use ON DELETE CASCADE only when child records should genuinely be deleted with the parent.</li>
            <li>Choose SET NULL only when the foreign key column allows NULL.</li>
            <li>Clean up invalid references when working with MongoDB relationships.</li>
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
            q: "What is a foreign key?",
            a: "A foreign key is a column or group of columns that references a primary key or suitable unique key in another table."
          },
          {
            q: "What is referential integrity?",
            a: "Referential integrity ensures that relationships between tables remain valid and foreign key values reference existing records."
          },
          {
            q: "Can a foreign key contain duplicate values?",
            a: "Yes. Multiple child records can reference the same parent record."
          },
          {
            q: "Can a foreign key contain NULL values?",
            a: "Yes, if the foreign key column allows NULL. A NULL value does not reference a parent record."
          },
          {
            q: "What is the difference between a primary key and a foreign key?",
            a: "A primary key uniquely identifies a row, while a foreign key references a key in another table."
          },
          {
            q: "What is a one-to-many relationship?",
            a: "It means one parent record can be associated with multiple child records, such as one user having many orders."
          },
          {
            q: "How do you implement a many-to-many relationship?",
            a: "Use a junction table containing foreign keys referencing both related tables."
          },
          {
            q: "What is ON DELETE CASCADE?",
            a: "It automatically deletes matching child records when the referenced parent record is deleted."
          },
          {
            q: "What is the difference between RESTRICT and CASCADE?",
            a: "RESTRICT prevents deletion when related child records exist, while CASCADE automatically deletes those child records."
          },
          {
            q: "Does MongoDB support foreign key constraints?",
            a: "No. MongoDB supports references between documents, but it does not automatically enforce SQL-style foreign key constraints."
          },
          {
            q: "What is the purpose of ref in Mongoose?",
            a: "The ref option identifies the model that a referenced ObjectId belongs to. It can be used with populate() to retrieve related documents."
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

export default ForeignKey;