import CodeBlock from "../../../../components/common/CodeBlock";

const RelationalDatabase = () => {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">

      {/* Header */}
      <div className="space-y-2">
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          DATABASE FUNDAMENTALS / 04
        </p>
        <h1 className="text-3xl font-bold">Relational Database</h1>
        <p className="text-base leading-7 text-[var(--text-secondary)]">
          A relational database is a type of database that organizes data into
          tables and connects related tables using relationships.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What Is a Relational Database?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          A relational database stores data in tables. Each table contains
          rows and columns, and different tables can be connected using keys.
        </p>
        <p className="leading-7 text-[var(--text-secondary)]">
          For example, an e-commerce application can have separate tables for
          users, products, and orders. These tables are connected to represent
          how users place orders.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
          <p className="font-semibold text-sm">Relational Database Structure</p>
          <div className="grid gap-3 sm:grid-cols-3">
            {["Users Table", "Products Table", "Orders Table"].map((name) => (
              <div key={name} className="rounded-lg border border-[var(--accent-color)] bg-[var(--accent-background)] p-3 text-center text-sm font-medium">
                {name}
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-[var(--text-muted)]">
            Separate tables connected through relationships.
          </p>
        </div>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. What Is a Table?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          A table is a structure used to store related data in rows and
          columns. Each table usually represents one type of entity, such as
          users, products, or orders.
        </p>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[400px] text-sm text-left">
            <thead className="bg-[var(--bg-card)]">
              <tr>
                <th className="p-3">id</th>
                <th className="p-3">name</th>
                <th className="p-3">email</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              {[
                ["1", "Mayur", "mayur@example.com"],
                ["2", "Rahul", "rahul@example.com"],
                ["3", "Aman", "aman@example.com"],
              ].map((row) => (
                <tr key={row[0]} className="border-t border-[var(--border-color)]">
                  {row.map((cell) => (
                    <td key={cell} className="p-3">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-[var(--text-secondary)]">
          This is an example of a users table.
        </p>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Rows and Columns</h2>

        <div className="space-y-3">
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
            <h3 className="font-semibold">Row (Record)</h3>
            <p className="mt-1 text-sm leading-7 text-[var(--text-secondary)]">
              A row represents one complete record in a table.
            </p>
            <CodeBlock code={`1 | Mayur | mayur@example.com`} />
            <p className="text-xs text-[var(--text-muted)]">
              One row represents one user.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
            <h3 className="font-semibold">Column (Field)</h3>
            <p className="mt-1 text-sm leading-7 text-[var(--text-secondary)]">
              A column represents one particular attribute of all records.
            </p>
            <CodeBlock code={`id
1
2
3`} />
            <p className="text-xs text-[var(--text-muted)]">
              The id column stores the ID of each user.
            </p>
          </div>
        </div>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. What Are Keys?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Keys are columns or sets of columns used to identify records and
          establish relationships between tables.
        </p>

        <div className="space-y-3">
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
            <h3 className="font-semibold">Primary Key</h3>
            <p className="mt-1 text-sm leading-7 text-[var(--text-secondary)]">
              A primary key uniquely identifies each row in a table. It must
              contain unique, non-null values.
            </p>
            <CodeBlock code={`CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(100)
);`} />
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
            <h3 className="font-semibold">Foreign Key</h3>
            <p className="mt-1 text-sm leading-7 text-[var(--text-secondary)]">
              A foreign key references a candidate key, usually the primary
              key, in another table. It helps maintain relationships between
              records.
            </p>
            <CodeBlock code={`CREATE TABLE orders (
  id INT PRIMARY KEY,
  user_id INT,
  FOREIGN KEY (user_id)
    REFERENCES users(id)
);`} />
          </div>
        </div>

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          We will study Primary Key and Foreign Key separately in upcoming
          topics.
        </p>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. How Are Tables Connected?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Tables are connected using relationships. A foreign key is commonly
          used to connect a record in one table with a record in another.
        </p>

        <h3 className="font-semibold">Example: Users and Orders</h3>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-3">
            <p className="mb-2 font-semibold text-sm">Users Table</p>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--border-color)]">
                  <th className="p-2 text-left">id</th>
                  <th className="p-2 text-left">name</th>
                </tr>
              </thead>
              <tbody className="text-[var(--text-secondary)]">
                <tr><td className="p-2">1</td><td className="p-2">Mayur</td></tr>
                <tr><td className="p-2">2</td><td className="p-2">Rahul</td></tr>
              </tbody>
            </table>
            <p className="mt-2 text-xs text-[var(--accent-color)]">id = Primary Key</p>
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-3">
            <p className="mb-2 font-semibold text-sm">Orders Table</p>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--border-color)]">
                  <th className="p-2 text-left">id</th>
                  <th className="p-2 text-left">user_id</th>
                </tr>
              </thead>
              <tbody className="text-[var(--text-secondary)]">
                <tr><td className="p-2">101</td><td className="p-2">1</td></tr>
                <tr><td className="p-2">102</td><td className="p-2">1</td></tr>
                <tr><td className="p-2">103</td><td className="p-2">2</td></tr>
              </tbody>
            </table>
            <p className="mt-2 text-xs text-[var(--accent-color)]">user_id = Foreign Key</p>
          </div>
        </div>

        <div className="rounded-xl border border-[var(--accent-color)] bg-[var(--accent-background)] p-4">
          <p className="font-semibold text-sm">Relationship</p>
          <div className="mt-3 flex items-center justify-center gap-3 text-sm font-medium">
            <span>Users.id</span>
            <span className="text-[var(--accent-color)]">←</span>
            <span>Orders.user_id</span>
          </div>
          <p className="mt-3 text-xs leading-6 text-[var(--text-secondary)]">
            Mayur (user ID 1) has two orders: 101 and 102. Rahul (user ID 2)
            has one order: 103.
          </p>
        </div>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. What Is SQL?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          SQL stands for Structured Query Language. It is used to communicate
          with relational databases and perform operations such as inserting,
          reading, updating, and deleting data.
        </p>

        <CodeBlock code={`-- Read all users
SELECT * FROM users;

-- Insert a user
INSERT INTO users (id, name)
VALUES (3, 'Aman');

-- Update a user
UPDATE users
SET name = 'Mayur'
WHERE id = 1;

-- Delete a user
DELETE FROM users
WHERE id = 3;`} />
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. What Is a JOIN?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          A JOIN combines related rows from two or more tables based on a
          matching condition.
        </p>

        <CodeBlock code={`SELECT
  users.name,
  orders.id AS order_id
FROM users
INNER JOIN orders
ON users.id = orders.user_id;`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          In this query, the database connects users with their orders using
          the matching user ID.
        </p>
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Popular Relational Databases</h2>

        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ["MySQL", "A popular open-source relational database."],
            ["PostgreSQL", "An advanced open-source relational database."],
            ["SQLite", "A lightweight database commonly embedded in applications."],
            ["Microsoft SQL Server", "A relational database management system by Microsoft."],
            ["Oracle Database", "An enterprise relational database system."],
            ["MariaDB", "An open-source relational database system."],
          ].map(([name, description]) => (
            <div key={name} className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
              <h3 className="font-semibold">{name}</h3>
              <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Advantages of Relational Databases</h2>

        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ["Structured Data", "Organizes information into clearly defined tables."],
            ["Relationships", "Connects related records using keys."],
            ["Data Integrity", "Uses constraints to maintain valid data."],
            ["Transactions", "Supports reliable multi-step operations."],
            ["SQL Queries", "Provides a powerful language for querying data."],
            ["Consistency", "Helps maintain accurate and reliable records."],
          ].map(([title, description]) => (
            <div key={title} className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 10 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Important Points to Remember</h2>
        <div className="rounded-xl border border-[var(--accent-color)] bg-[var(--accent-background)] p-4">
          <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-[var(--text-secondary)]">
            <li>Relational databases organize data into tables.</li>
            <li>Rows represent records.</li>
            <li>Columns represent attributes.</li>
            <li>Primary keys uniquely identify rows.</li>
            <li>Foreign keys connect related tables.</li>
            <li>SQL is used to communicate with relational databases.</li>
            <li>JOINs retrieve related data from multiple tables.</li>
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
            q: "What is a relational database?",
            a: "A relational database stores data in tables and connects related tables using relationships."
          },
          {
            q: "What is a table?",
            a: "A table is a database structure that stores related data in rows and columns."
          },
          {
            q: "What is a row?",
            a: "A row represents one complete record in a table."
          },
          {
            q: "What is a column?",
            a: "A column represents a particular attribute or field of the records in a table."
          },
          {
            q: "What is a primary key?",
            a: "A primary key uniquely identifies each row in a table. It cannot contain NULL values or duplicates."
          },
          {
            q: "What is a foreign key?",
            a: "A foreign key is a column or group of columns that references a candidate key in another or the same table."
          },
          {
            q: "What is a relationship in a relational database?",
            a: "A relationship represents an association between records in different tables, commonly established using keys."
          },
          {
            q: "What is a JOIN?",
            a: "A JOIN combines related rows from multiple tables based on a matching condition."
          },
          {
            q: "Name some relational database systems.",
            a: "MySQL, PostgreSQL, SQLite, Oracle Database, SQL Server, and MariaDB."
          },
          {
            q: "Why are relational databases useful?",
            a: "They provide structured data storage, relationships, constraints, SQL queries, and transaction support."
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

export default RelationalDatabase;