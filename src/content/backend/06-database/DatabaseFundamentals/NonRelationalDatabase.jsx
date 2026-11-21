import CodeBlock from "../../../../components/common/CodeBlock";

const NonRelationalDatabase = () => {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">

      {/* Header */}
      <div className="space-y-2">
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          DATABASE FUNDAMENTALS / 05
        </p>
        <h1 className="text-3xl font-bold">Non-Relational Database</h1>
        <p className="text-base leading-7 text-[var(--text-secondary)]">
          A non-relational database stores data using models other than
          traditional relational tables, such as documents, key-value pairs,
          graphs, and wide-column structures.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What Is a Non-Relational Database?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          A non-relational database is a database that does not require data
          to be organized into traditional tables with fixed relationships.
        </p>
        <p className="leading-7 text-[var(--text-secondary)]">
          It can store information in different formats depending on the
          database model. These databases are commonly known as NoSQL
          databases.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-3">
          <p className="font-semibold text-sm">Different Data Models</p>
          <div className="grid grid-cols-2 gap-3">
            {[
              ["Document", "{ name, age }"],
              ["Key-Value", "user:101 → Mayur"],
              ["Wide-Column", "Rows + Column Families"],
              ["Graph", "Nodes + Relationships"],
            ].map(([title, value]) => (
              <div key={title} className="rounded-lg bg-[var(--bg-hover)] p-3">
                <p className="font-semibold text-sm">{title}</p>
                <p className="mt-2 text-xs text-[var(--text-secondary)]">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Why Do We Need Non-Relational Databases?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Some applications work with flexible, rapidly changing, or
          highly distributed data. A non-relational database can provide a
          data model that fits these requirements.
        </p>

        <div className="space-y-3">
          {[
            ["Flexible Data Structure", "Different documents can contain different fields when the database allows it."],
            ["Horizontal Scaling", "Many NoSQL systems support distributing data across multiple servers."],
            ["Different Data Models", "Choose document, key-value, graph, or wide-column storage based on the problem."],
            ["Application-Friendly Data", "Document databases can store nested objects and arrays similar to application data."],
            ["High-Volume Workloads", "Some systems are designed to handle large distributed workloads."],
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
        <h2 className="text-xl font-semibold">3. Types of Non-Relational Databases</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          There are four commonly discussed types of NoSQL databases.
          Each type stores and accesses data differently.
        </p>

        {/* Document */}
        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-3">
          <h3 className="font-semibold">A. Document Database</h3>
          <p className="text-sm leading-7 text-[var(--text-secondary)]">
            A document database stores data as documents, usually in
            JSON-like structures. Documents can contain nested objects
            and arrays.
          </p>
          <CodeBlock code={`{
  "_id": "101",
  "name": "Mayur",
  "email": "mayur@example.com",
  "address": {
    "city": "Bhopal"
  },
  "skills": ["JavaScript", "Node.js"]
}`} />
          <p className="text-xs text-[var(--accent-color)]">
            Example: MongoDB
          </p>
        </div>

        {/* Key Value */}
        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-3">
          <h3 className="font-semibold">B. Key-Value Database</h3>
          <p className="text-sm leading-7 text-[var(--text-secondary)]">
            A key-value database stores information as pairs. Each unique key
            is associated with a value.
          </p>
          <CodeBlock code={`Key              Value
user:101         Mayur
user:102         Rahul
session:abc123   { "userId": 101 }`} />
          <p className="text-xs text-[var(--accent-color)]">
            Example: Redis
          </p>
        </div>

        {/* Wide Column */}
        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-3">
          <h3 className="font-semibold">C. Wide-Column Database</h3>
          <p className="text-sm leading-7 text-[var(--text-secondary)]">
            A wide-column database organizes data into rows and column
            families. Different rows can have different columns.
          </p>
          <CodeBlock code={`Row Key: user:101

Profile:
  name: Mayur
  city: Bhopal

Activity:
  lastLogin: 2026-11-16`} />
          <p className="text-xs text-[var(--accent-color)]">
            Example: Apache Cassandra
          </p>
        </div>

        {/* Graph */}
        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-3">
          <h3 className="font-semibold">D. Graph Database</h3>
          <p className="text-sm leading-7 text-[var(--text-secondary)]">
            A graph database stores data as nodes and relationships.
            It is useful when connections between entities are important.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 py-3 text-sm">
            <div className="rounded-lg border border-[var(--accent-color)] bg-[var(--accent-background)] px-4 py-3 font-semibold">
              Mayur
            </div>
            <div className="text-center">
              <div className="text-[var(--accent-color)]">→</div>
              <p className="text-xs text-[var(--text-muted)]">Follows</p>
            </div>
            <div className="rounded-lg border border-[var(--accent-color)] bg-[var(--accent-background)] px-4 py-3 font-semibold">
              Rahul
            </div>
          </div>

          <p className="text-xs text-[var(--accent-color)]">
            Example: Neo4j
          </p>
        </div>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. How Does MongoDB Store Data?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB is a document-oriented NoSQL database. It stores records
          as BSON documents inside collections.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-3">
          <div className="rounded-lg bg-[var(--bg-hover)] p-3 text-center">
            <p className="font-semibold">Database</p>
            <p className="text-xs text-[var(--text-muted)]">myApp</p>
          </div>
          <div className="text-center text-[var(--accent-color)]">↓</div>
          <div className="rounded-lg border border-[var(--accent-color)] bg-[var(--accent-background)] p-3 text-center">
            <p className="font-semibold">Collection</p>
            <p className="text-xs text-[var(--text-secondary)]">users</p>
          </div>
          <div className="text-center text-[var(--accent-color)]">↓</div>
          <div className="grid gap-2 sm:grid-cols-2">
            {["Document 1: Mayur", "Document 2: Rahul"].map((name) => (
              <div key={name} className="rounded-lg bg-[var(--bg-hover)] p-3 text-center text-sm">
                {name}
              </div>
            ))}
          </div>
        </div>

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          MongoDB hierarchy:
          <strong> Database → Collection → Document → Fields</strong>.
        </p>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Collection vs Document</h2>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-3">
          <div>
            <h3 className="font-semibold">Collection</h3>
            <p className="mt-1 text-sm leading-7 text-[var(--text-secondary)]">
              A collection is a group of documents. It is roughly comparable
              to a table in a relational database.
            </p>
          </div>
          <div className="border-t border-[var(--border-color)] pt-3">
            <h3 className="font-semibold">Document</h3>
            <p className="mt-1 text-sm leading-7 text-[var(--text-secondary)]">
              A document is an individual record stored inside a collection.
              It is roughly comparable to a row in a relational database.
            </p>
          </div>
        </div>

        <CodeBlock code={`// users collection

{
  "_id": 1,
  "name": "Mayur"
}

{
  "_id": 2,
  "name": "Rahul"
}`} />
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Flexible Schema</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          In many document databases, documents inside the same collection
          do not have to contain exactly the same fields.
        </p>

        <CodeBlock code={`// First document
{
  name: "Mayur",
  email: "mayur@example.com"
}

// Second document
{
  name: "Rahul",
  email: "rahul@example.com",
  age: 20
}`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          Both documents can exist in the same MongoDB collection. However,
          flexible schema does not mean we should store random or invalid data.
          We can enforce validation using MongoDB validators or Mongoose.
        </p>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Advantages of Non-Relational Databases</h2>

        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ["Flexible Structure", "Supports different data models and, in many systems, flexible schemas."],
            ["Horizontal Scaling", "Many systems support distributing workloads across servers."],
            ["Nested Data", "Document databases can store nested objects and arrays."],
            ["Specialized Models", "Different models solve different data-access problems."],
            ["Distributed Storage", "Some systems replicate and distribute data across multiple nodes."],
            ["High Throughput", "Some databases are optimized for specific high-volume workloads."],
          ].map(([title, description]) => (
            <div key={title} className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Limitations of Non-Relational Databases</h2>

        <div className="space-y-3">
          {[
            ["Data Duplication", "Some data models duplicate information to make reads easier."],
            ["Complex Relationships", "Some relationship-heavy queries may require extra application logic or specialized database queries."],
            ["Database-Specific Queries", "Different NoSQL databases use different query interfaces and APIs."],
            ["Consistency Trade-offs", "Distributed systems may offer different consistency guarantees depending on configuration and design."],
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

      {/* 9 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. When Should We Use Non-Relational Databases?</h2>

        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ["Content Management", "Store flexible articles, pages, and metadata."],
            ["Caching", "Store frequently accessed data using key-value storage."],
            ["IoT Systems", "Handle large volumes of device-related data."],
            ["Social Networks", "Represent connections and relationships using graph databases."],
            ["Real-Time Applications", "Support workloads that need fast data access."],
            ["Distributed Systems", "Store and distribute data across multiple servers."],
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
        <h2 className="text-xl font-semibold">10. SQL vs NoSQL Quick Comparison</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[450px] text-sm text-left">
            <thead className="bg-[var(--bg-card)]">
              <tr>
                <th className="p-3">Feature</th>
                <th className="p-3">Relational</th>
                <th className="p-3">Non-Relational</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              {[
                ["Structure", "Tables", "Different data models"],
                ["Records", "Rows", "Documents, key-value, etc."],
                ["Schema", "Usually predefined", "Often flexible"],
                ["Relationships", "Keys and JOINs", "Embedding, references, graph edges, etc."],
                ["Examples", "MySQL, PostgreSQL", "MongoDB, Redis, Neo4j"],
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
      </section>

      {/* 11 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">11. Important Points to Remember</h2>
        <div className="rounded-xl border border-[var(--accent-color)] bg-[var(--accent-background)] p-4">
          <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-[var(--text-secondary)]">
            <li>NoSQL commonly means Not Only SQL.</li>
            <li>Non-relational databases use different data models.</li>
            <li>Document databases store JSON-like documents.</li>
            <li>Key-value databases store data as key-value pairs.</li>
            <li>Wide-column databases organize data using column families.</li>
            <li>Graph databases store nodes and relationships.</li>
            <li>MongoDB is a document-oriented database.</li>
            <li>NoSQL databases can also support transactions and validation.</li>
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
            q: "What is a non-relational database?",
            a: "A non-relational database stores data using models such as documents, key-value pairs, wide columns, or graphs instead of relying on traditional relational tables."
          },
          {
            q: "What does NoSQL mean?",
            a: "NoSQL commonly means Not Only SQL. It refers to a broad group of non-relational database systems."
          },
          {
            q: "What are the four main types of NoSQL databases?",
            a: "Document, key-value, wide-column, and graph databases."
          },
          {
            q: "What is a document database?",
            a: "A document database stores records as documents, often using JSON-like structures. MongoDB is an example."
          },
          {
            q: "What is a key-value database?",
            a: "It stores data as key-value pairs, where each key identifies its associated value. Redis is an example."
          },
          {
            q: "What is a graph database?",
            a: "A graph database represents entities as nodes and their connections as relationships. Neo4j is an example."
          },
          {
            q: "What is a wide-column database?",
            a: "It organizes data into rows and column families, allowing different rows to have different columns. Apache Cassandra is an example."
          },
          {
            q: "Does NoSQL have a schema?",
            a: "Many NoSQL databases support flexible schemas, but they can still enforce validation and data rules."
          },
          {
            q: "What is the difference between a collection and a document in MongoDB?",
            a: "A collection is a group of documents, while a document is an individual record inside that collection."
          },
          {
            q: "Can NoSQL databases support transactions?",
            a: "Yes. Many NoSQL databases support transactions, but their capabilities differ between database systems."
          },
          {
            q: "Is MongoDB a relational database?",
            a: "No. MongoDB is a non-relational, document-oriented database that stores data in BSON documents."
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

export default NonRelationalDatabase;