import CodeBlock from "../../../../components/common/CodeBlock";

const Relationships = () => {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">

      {/* Header */}
      <div className="space-y-2">
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          DATABASE FUNDAMENTALS / 12
        </p>
        <h1 className="text-3xl font-bold">Database Relationships</h1>
        <p className="text-base leading-7 text-[var(--text-secondary)]">
          Database relationships define how records in different tables or
          collections are connected. They help organize related data and
          avoid unnecessary duplication.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What Are Database Relationships?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          In a database, information is often stored in separate tables or
          collections. Relationships connect this information logically.
        </p>
        <p className="leading-7 text-[var(--text-secondary)]">
          For example, an e-commerce application may have separate Users,
          Orders, and Products tables. Relationships help us understand
          which user placed an order and which products belong to it.
        </p>

        <CodeBlock code={`Users
  id: 1
  name: "Mayur"

Orders
  id: 101
  user_id: 1
  total: 1500

Relationship:
Users.id -> Orders.user_id`} />
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Types of Database Relationships</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          There are three common types of relationships:
        </p>

        <div className="grid gap-3 sm:grid-cols-3">
          {[
            ["One-to-One", "1 : 1", "One record is related to at most one record in another table."],
            ["One-to-Many", "1 : N", "One record can be related to multiple records."],
            ["Many-to-Many", "M : N", "Multiple records can be related to multiple records."],
          ].map(([title, symbol, description]) => (
            <div key={title} className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
              <h3 className="font-semibold text-[var(--accent-color)]">{title}</h3>
              <p className="my-2 text-2xl font-bold">{symbol}</p>
              <p className="text-sm leading-6 text-[var(--text-secondary)]">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. One-to-One Relationship (1:1)</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          In a one-to-one relationship, one record in a table is related to
          at most one record in another table, and vice versa.
        </p>

        <p className="text-sm text-[var(--text-secondary)]">
          Example: One user has one profile.
        </p>

        <CodeBlock code={`Users
+----+--------+
| id | name   |
+----+--------+
| 1  | Mayur  |
| 2  | Rahul  |
+----+--------+

Profiles
+----+---------+-------------+
| id | user_id | bio         |
+----+---------+-------------+
| 1  | 1       | Developer   |
| 2  | 2       | Designer    |
+----+---------+-------------+`} />

        <h3 className="font-semibold">SQL Implementation</h3>
        <CodeBlock code={`CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE profiles (
  id INT PRIMARY KEY,
  user_id INT UNIQUE,
  bio VARCHAR(255),

  FOREIGN KEY (user_id)
  REFERENCES users(id)
);`} />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          The UNIQUE constraint ensures that the same user cannot be
          assigned to multiple profiles. If every user must have a profile,
          that requirement also needs to be enforced through application
          logic or an appropriate database design.
        </p>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. One-to-Many Relationship (1:N)</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          In a one-to-many relationship, one record in the parent table
          can be related to multiple records in the child table.
        </p>

        <p className="text-sm text-[var(--text-secondary)]">
          Example: One user can place multiple orders, but each order belongs
          to one user.
        </p>

        <CodeBlock code={`Users
+----+--------+
| id | name   |
+----+--------+
| 1  | Mayur  |
| 2  | Rahul  |
+----+--------+

Orders
+-----+---------+--------+
| id  | user_id | total  |
+-----+---------+--------+
| 101 | 1       | 1500   |
| 102 | 1       | 2000   |
| 103 | 2       | 1000   |
+-----+---------+--------+

One user -> Many orders`} />

        <h3 className="font-semibold">SQL Implementation</h3>
        <CodeBlock code={`CREATE TABLE orders (
  id INT PRIMARY KEY,
  user_id INT,
  total DECIMAL(10, 2),

  FOREIGN KEY (user_id)
  REFERENCES users(id)
);`} />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          The foreign key is stored on the many side, which is the orders
          table. Multiple orders can reference the same user.
        </p>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Many-to-Many Relationship (M:N)</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          In a many-to-many relationship, multiple records in one table
          can be related to multiple records in another table.
        </p>

        <p className="text-sm text-[var(--text-secondary)]">
          Example: A student can enroll in multiple courses, and each course
          can have multiple students.
        </p>

        <CodeBlock code={`Students                 Courses
+----+-------+           +----+------------+
| id | name  |           | id | title      |
+----+-------+           +----+------------+
| 1  | Mayur |           | 10 | React      |
| 2  | Rahul |           | 20 | Node.js    |
+----+-------+           +----+------------+

          Enrollments
       +------------+-----------+
       | student_id | course_id |
       +------------+-----------+
       | 1          | 10        |
       | 1          | 20        |
       | 2          | 10        |
       +------------+-----------+`} />

        <h3 className="font-semibold">SQL Implementation</h3>
        <CodeBlock code={`CREATE TABLE enrollments (
  student_id INT,
  course_id INT,

  PRIMARY KEY (student_id, course_id),

  FOREIGN KEY (student_id)
  REFERENCES students(id),

  FOREIGN KEY (course_id)
  REFERENCES courses(id)
);`} />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          We use a junction table (also called a bridge or mapping table)
          to implement a many-to-many relationship in a relational database.
          It stores the foreign keys of both related tables.
        </p>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Self-Referencing Relationship</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          A self-referencing relationship occurs when a table references
          another record in the same table.
        </p>

        <p className="text-sm text-[var(--text-secondary)]">
          Example: Employees and their managers.
        </p>

        <CodeBlock code={`CREATE TABLE employees (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  manager_id INT,

  FOREIGN KEY (manager_id)
  REFERENCES employees(id)
);`} />

        <CodeBlock code={`id   name       manager_id
1    Amit       NULL
2    Mayur      1
3    Rahul      1
4    Karan      2`} />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          Here, manager_id references the id column in the same employees
          table. Amit manages Mayur and Rahul, while Mayur manages Karan.
        </p>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Relationships in MongoDB</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB is a document database. Instead of SQL-style foreign key
          constraints, it commonly uses two approaches to represent
          relationships.
        </p>

        <div className="space-y-4">
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
            <h3 className="font-semibold">A. Embedded Documents</h3>
            <p className="text-sm leading-7 text-[var(--text-secondary)]">
              Related information is stored inside the same document.
            </p>
            <CodeBlock code={`{
  _id: 1,
  name: "Mayur",
  address: {
    city: "Bhopal",
    state: "Madhya Pradesh"
  }
}`} />
            <p className="text-sm text-[var(--text-secondary)]">
              Useful when related data is usually accessed together and
              its size remains manageable.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
            <h3 className="font-semibold">B. References</h3>
            <p className="text-sm leading-7 text-[var(--text-secondary)]">
              Related documents are stored separately and connected using
              their IDs.
            </p>
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
            <p className="text-sm text-[var(--text-secondary)]">
              Useful when related data is large, shared, or independently
              accessed and updated.
            </p>
          </div>
        </div>
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Embedding vs Referencing in MongoDB</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[460px] text-left text-sm">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="p-3 border-b border-[var(--border-color)]">Feature</th>
                <th className="p-3 border-b border-[var(--border-color)]">Embedding</th>
                <th className="p-3 border-b border-[var(--border-color)]">Referencing</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Storage", "Same document", "Separate documents"],
                ["Reading", "Often simpler", "May require another query"],
                ["Duplication", "Can duplicate data", "Can reduce duplication"],
                ["Best for", "Closely related data", "Large or shared data"],
                ["Updates", "Update embedded data", "Update referenced document separately"],
              ].map((row) => (
                <tr key={row[0]}>
                  {row.map((value, index) => (
                    <td key={index} className="p-3 border-b border-[var(--border-color)] text-[var(--text-secondary)]">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          Choose based on how your application reads, updates, and manages
          data. Neither approach is always better.
        </p>
      </section>

      {/* 9 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. How to Choose a Relationship?</h2>

        <div className="space-y-3">
          {[
            ["One-to-One", "One user has one profile."],
            ["One-to-Many", "One user has many orders."],
            ["Many-to-Many", "Many students enroll in many courses."],
            ["Self-Referencing", "An employee has another employee as a manager."],
          ].map(([type, example], index) => (
            <div key={type} className="flex gap-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-background)] font-semibold text-[var(--accent-color)]">
                {index + 1}
              </span>
              <div>
                <h3 className="font-semibold">{type}</h3>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">{example}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Important Points</h2>
        <div className="rounded-xl border border-[var(--accent-color)] bg-[var(--accent-background)] p-4">
          <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-[var(--text-secondary)]">
            <li>Relationships connect logically related records.</li>
            <li>One-to-one relationships can use a UNIQUE foreign key.</li>
            <li>One-to-many relationships store the foreign key on the many side.</li>
            <li>Many-to-many relationships use a junction table in relational databases.</li>
            <li>Self-referencing relationships connect records within the same table.</li>
            <li>MongoDB supports embedding and referencing.</li>
            <li>MongoDB references do not automatically enforce referential integrity.</li>
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
            q: "What is a database relationship?",
            a: "A database relationship defines how records in different tables or collections are connected."
          },
          {
            q: "What are the three main types of relationships?",
            a: "One-to-One, One-to-Many, and Many-to-Many."
          },
          {
            q: "What is a one-to-one relationship?",
            a: "It connects one record in a table to at most one record in another table, and vice versa."
          },
          {
            q: "How do you implement a one-to-one relationship?",
            a: "Use a foreign key with a UNIQUE constraint in the related table."
          },
          {
            q: "What is a one-to-many relationship?",
            a: "One parent record can be associated with multiple child records, such as one user having many orders."
          },
          {
            q: "Where is the foreign key stored in a one-to-many relationship?",
            a: "It is generally stored in the child table, which is the many side."
          },
          {
            q: "How do you implement a many-to-many relationship?",
            a: "Create a junction table containing foreign keys referencing both related tables."
          },
          {
            q: "What is a junction table?",
            a: "A junction table connects two tables in a many-to-many relationship by storing their related IDs."
          },
          {
            q: "What is a self-referencing relationship?",
            a: "It occurs when a table references another record in the same table, such as an employee referencing a manager."
          },
          {
            q: "What is the difference between embedding and referencing in MongoDB?",
            a: "Embedding stores related data inside the same document, while referencing stores related documents separately and connects them using IDs."
          },
          {
            q: "When should you use embedding in MongoDB?",
            a: "Use embedding when related data is commonly accessed together and its size remains manageable."
          },
          {
            q: "When should you use referencing in MongoDB?",
            a: "Use referencing when data is large, shared by multiple documents, or independently accessed and updated."
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

export default Relationships;