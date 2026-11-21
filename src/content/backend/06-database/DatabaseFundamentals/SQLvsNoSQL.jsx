import CodeBlock from "../../../../components/common/CodeBlock";

const SQLvsNoSQL = () => {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">

      {/* Header */}
      <div className="space-y-2">
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          DATABASE FUNDAMENTALS / 03
        </p>
        <h1 className="text-3xl font-bold">SQL vs NoSQL</h1>
        <p className="text-base leading-7 text-[var(--text-secondary)]">
          SQL and NoSQL are two common approaches to storing and managing data.
          They differ in data structure, relationships, querying, and
          flexibility.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What Is SQL?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          SQL stands for <strong>Structured Query Language</strong>. It is a
          language used to communicate with relational database management
          systems.
        </p>
        <p className="leading-7 text-[var(--text-secondary)]">
          SQL databases organize data into tables containing rows and columns.
          Relationships between tables can be created using keys.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-3">
          <h3 className="font-semibold">Example: Users Table</h3>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[350px] text-sm text-left">
              <thead>
                <tr className="border-b border-[var(--border-color)] text-[var(--text-muted)]">
                  <th className="p-3">id</th>
                  <th className="p-3">name</th>
                  <th className="p-3">email</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["1", "Mayur", "mayur@example.com"],
                  ["2", "Rahul", "rahul@example.com"],
                  ["3", "Aman", "aman@example.com"],
                ].map((row) => (
                  <tr key={row[0]} className="border-b border-[var(--border-color)] last:border-0">
                    {row.map((cell) => (
                      <td key={cell} className="p-3">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <h3 className="font-semibold">Popular SQL Databases</h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {["MySQL", "PostgreSQL", "SQLite", "SQL Server"].map((name) => (
            <div key={name} className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] p-3 text-center text-sm font-medium">
              {name}
            </div>
          ))}
        </div>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. What Is NoSQL?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          NoSQL commonly means <strong>Not Only SQL</strong>. It refers to
          non-relational databases that store data using different structures
          instead of relying only on traditional tables.
        </p>
        <p className="leading-7 text-[var(--text-secondary)]">
          Depending on the database, data can be stored as documents,
          key-value pairs, graphs, or wide-column records.
        </p>

        <h3 className="font-semibold">Example: MongoDB Document</h3>
        <CodeBlock code={`{
  "_id": "101",
  "name": "Mayur",
  "email": "mayur@example.com",
  "address": {
    "city": "Bhopal",
    "state": "Madhya Pradesh"
  },
  "skills": ["JavaScript", "React", "Node.js"]
}`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          This is a JSON-like document. It can contain nested objects and
          arrays, making it convenient to represent certain kinds of data.
        </p>

        <h3 className="font-semibold">Popular NoSQL Databases</h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {["MongoDB", "Redis", "Cassandra", "Neo4j"].map((name) => (
            <div key={name} className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] p-3 text-center text-sm font-medium">
              {name}
            </div>
          ))}
        </div>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Types of NoSQL Databases</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          NoSQL is not a single database structure. It includes different
          database models.
        </p>

        <div className="space-y-3">
          {[
            {
              title: "Document Database",
              description: "Stores data in documents, usually JSON-like structures.",
              example: "MongoDB"
            },
            {
              title: "Key-Value Database",
              description: "Stores data as key-value pairs. Each key points to a value.",
              example: "Redis"
            },
            {
              title: "Wide-Column Database",
              description: "Organizes data into rows and flexible column families.",
              example: "Apache Cassandra"
            },
            {
              title: "Graph Database",
              description: "Stores entities as nodes and their connections as relationships.",
              example: "Neo4j"
            },
          ].map((item, index) => (
            <div key={item.title} className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
              <h3 className="font-semibold">
                <span className="mr-2 text-[var(--accent-color)]">{index + 1}.</span>
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                {item.description}
              </p>
              <p className="mt-2 text-xs text-[var(--accent-color)]">
                Example: {item.example}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. SQL vs NoSQL: Key Differences</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[500px] text-sm text-left">
            <thead className="bg-[var(--bg-card)]">
              <tr>
                <th className="p-3">Feature</th>
                <th className="p-3">SQL</th>
                <th className="p-3">NoSQL</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              {[
                ["Data Model", "Tables", "Documents, key-value, graph, etc."],
                ["Schema", "Usually predefined", "Often flexible"],
                ["Relationships", "Commonly uses foreign keys and JOINs", "Often uses embedding or references"],
                ["Query Language", "SQL", "Depends on database"],
                ["Data Structure", "Rows and columns", "Depends on database model"],
                ["Transactions", "Strong transaction support is common", "Depends on database; many support transactions"],
                ["Scaling", "Can scale vertically and horizontally", "Many are designed for distributed scaling"],
                ["Examples", "MySQL, PostgreSQL", "MongoDB, Redis, Cassandra"],
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

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          Important: These are general differences, not strict rules. Modern
          SQL and NoSQL databases share many capabilities.
        </p>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Schema: SQL vs NoSQL</h2>

        <h3 className="font-semibold">SQL: Usually Predefined Schema</h3>
        <p className="leading-7 text-[var(--text-secondary)]">
          In a relational database, we generally define the table structure
          and column types before inserting records.
        </p>
        <CodeBlock code={`CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(150)
);

INSERT INTO users (id, name, email)
VALUES (1, 'Mayur', 'mayur@example.com');`} />

        <h3 className="font-semibold">NoSQL: Often Flexible Schema</h3>
        <p className="leading-7 text-[var(--text-secondary)]">
          In a document database such as MongoDB, different documents in the
          same collection can have different fields, unless validation rules
          enforce a particular structure.
        </p>
        <CodeBlock code={`// Document 1
{
  name: "Mayur",
  email: "mayur@example.com"
}

// Document 2
{
  name: "Rahul",
  email: "rahul@example.com",
  age: 20
}`} />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          Flexible schema does not mean there is no structure. Applications
          can still enforce validation using Mongoose or MongoDB schema
          validation.
        </p>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Relationships: SQL vs NoSQL</h2>

        <h3 className="font-semibold">SQL: Foreign Keys and JOINs</h3>
        <p className="leading-7 text-[var(--text-secondary)]">
          Relational databases commonly store related information in separate
          tables and connect them using keys.
        </p>
        <CodeBlock code={`-- Users table
id | name
1  | Mayur

-- Orders table
id | user_id | product
101| 1       | Laptop

-- Get user with their orders
SELECT users.name, orders.product
FROM users
JOIN orders
ON users.id = orders.user_id;`} />

        <h3 className="font-semibold">NoSQL: Embedding and References</h3>
        <p className="leading-7 text-[var(--text-secondary)]">
          In document databases, related data can be embedded inside a document
          or stored separately and connected using references.
        </p>
        <CodeBlock code={`// Embedded document example
{
  name: "Mayur",
  orders: [
    {
      product: "Laptop",
      price: 50000
    },
    {
      product: "Mouse",
      price: 1000
    }
  ]
}`} />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          Embedding can make related data easier to retrieve together.
          References are useful when data is shared or independently managed.
        </p>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. When Should We Use SQL?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          SQL databases are a good choice when data has clear relationships
          and the application needs reliable transactions and structured
          queries.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ["Banking Systems", "Accounts and financial transactions."],
            ["E-commerce", "Orders, payments, and inventory."],
            ["ERP Systems", "Connected business records."],
            ["Reservation Systems", "Bookings and availability."],
          ].map(([title, description]) => (
            <div key={title} className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. When Should We Use NoSQL?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          NoSQL databases can be useful when the data model needs flexibility,
          the application works with document-like data, or a specialized
          database model fits the problem better.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ["Content Management", "Flexible content documents."],
            ["Real-Time Applications", "Fast-changing application data and caching."],
            ["IoT Applications", "Large volumes of device data."],
            ["Social Networks", "Some use cases involving flexible data or graph relationships."],
          ].map(([title, description]) => (
            <div key={title} className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Which One Should You Choose?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          There is no universal winner. Choose a database based on your
          application's data, relationships, queries, consistency needs,
          and scaling requirements.
        </p>

        <div className="rounded-xl border border-[var(--accent-color)] bg-[var(--accent-background)] p-4 space-y-3">
          <p className="font-semibold">Quick Decision Guide</p>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-[var(--text-secondary)]">
            <li>Need structured relational data and complex JOINs? Consider SQL.</li>
            <li>Need flexible document storage? Consider a document database like MongoDB.</li>
            <li>Need fast key-value access or caching? Consider Redis.</li>
            <li>Need complex connected-data queries? Consider a graph database.</li>
            <li>Need reliable financial transactions? Consider a database with strong transaction guarantees.</li>
          </ul>
        </div>
      </section>

      {/* 10 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Important Points to Remember</h2>
        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-[var(--text-secondary)]">
            <li>SQL is a query language, not a database itself.</li>
            <li>Relational databases commonly use SQL.</li>
            <li>NoSQL includes document, key-value, wide-column, and graph databases.</li>
            <li>SQL databases generally use structured schemas.</li>
            <li>Many NoSQL databases support flexible data structures.</li>
            <li>Both SQL and NoSQL databases can support transactions.</li>
            <li>The best choice depends on application requirements.</li>
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
            q: "What is SQL?",
            a: "SQL stands for Structured Query Language. It is used to communicate with relational databases."
          },
          {
            q: "What is NoSQL?",
            a: "NoSQL refers to non-relational database systems that use models such as documents, key-value pairs, wide columns, and graphs."
          },
          {
            q: "What is the main difference between SQL and NoSQL?",
            a: "SQL databases commonly organize data into related tables, while NoSQL databases support different data models such as documents and key-value pairs."
          },
          {
            q: "Is MongoDB a SQL or NoSQL database?",
            a: "MongoDB is a NoSQL document database. It stores data in BSON documents."
          },
          {
            q: "Does NoSQL mean there is no schema?",
            a: "No. Many NoSQL databases support flexible schemas, but applications can still enforce data validation and structure."
          },
          {
            q: "Can NoSQL databases support transactions?",
            a: "Yes. Many NoSQL databases support transactions, although their capabilities and guarantees differ."
          },
          {
            q: "What are the four main types of NoSQL databases?",
            a: "Document, key-value, wide-column, and graph databases."
          },
          {
            q: "Which is faster: SQL or NoSQL?",
            a: "Neither is always faster. Performance depends on the database, data model, queries, indexes, workload, and configuration."
          },
          {
            q: "Can we use SQL and NoSQL together in one application?",
            a: "Yes. An application can use different databases for different requirements, such as PostgreSQL for transactions and Redis for caching."
          },
          {
            q: "Which database should we choose for a project?",
            a: "Choose based on data relationships, query patterns, consistency requirements, scalability, and application needs."
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

export default SQLvsNoSQL;