import CodeBlock from "../../../../components/common/CodeBlock";

const IntroductiontoMongoDB = () => {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <div className="space-y-2">
        <p className="text-sm font-semibold tracking-wider text-[var(--primary-color)]">
          MONGODB / 01
        </p>
        <h1 className="text-3xl font-bold">Introduction to MongoDB</h1>
        <p className="text-base leading-7 text-[var(--text-secondary)]">
          MongoDB is a NoSQL document database that stores data in flexible,
          JSON-like documents instead of traditional rows and columns.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What is MongoDB?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          <strong>MongoDB</strong> is a popular NoSQL database used to store,
          manage, and retrieve application data. It stores information in
          documents that contain key-value pairs.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          Unlike relational databases such as MySQL, MongoDB does not primarily
          organize data into tables and rows. Instead, it uses collections and
          documents.
        </p>

        <CodeBlock
          language="json"
          code={`{
  "_id": 1,
  "name": "Mayur",
  "age": 19,
  "email": "mayur@example.com",
  "skills": ["JavaScript", "React", "Node.js"]
}`}
        />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          This is an example of a MongoDB document representing a user. It
          stores different types of information together.
        </p>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. What is NoSQL?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          NoSQL stands for <strong>Not Only SQL</strong>. It refers to databases
          that use data models other than the traditional relational table-based
          model.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          NoSQL databases are useful when applications need flexible data
          structures and handle different types of information.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-2">
            <h3 className="font-semibold">SQL Database</h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Stores data in tables, rows, and columns.
            </p>
            <CodeBlock
              language="text"
              code={`users
----------------
id | name | age
1  | Mayur| 19
2  | Rahul| 20`}
            />
            <p className="text-sm text-[var(--muted-color)]">
              Examples: MySQL, PostgreSQL
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-2">
            <h3 className="font-semibold">NoSQL Database</h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Stores data using documents, key-value pairs, graphs, etc.
            </p>
            <CodeBlock
              language="json"
              code={`{
  "name": "Mayur",
  "age": 19
}`}
            />
            <p className="text-sm text-[var(--muted-color)]">
              Examples: MongoDB, Redis
            </p>
          </div>
        </div>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. SQL vs MongoDB</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB and SQL databases both store application data, but they
          organize and manage that data differently.
        </p>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[450px] text-sm text-left">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">SQL</th>
                <th className="p-3">MongoDB</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              {[
                ["Database", "Database"],
                ["Table", "Collection"],
                ["Row", "Document"],
                ["Column", "Field"],
                ["SQL", "MongoDB Query Language"],
                ["Fixed schema (typically)", "Flexible schema (by default)"],
              ].map(([sql, mongo]) => (
                <tr key={sql} className="border-t border-[var(--border-color)]">
                  <td className="p-3">{sql}</td>
                  <td className="p-3">{mongo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Why Use MongoDB?</h2>

        <div className="grid gap-3 sm:grid-cols-2">
          {[
            [
              "Flexible Schema",
              "Documents can have different fields and structures.",
            ],
            [
              "JSON-Like Documents",
              "Data is stored in a developer-friendly structure.",
            ],
            ["Scalability", "Supports horizontal scaling using sharding."],
            [
              "High Performance",
              "Supports indexes for efficient data retrieval.",
            ],
            [
              "Rich Queries",
              "Supports filtering, sorting, aggregation, and more.",
            ],
            [
              "Developer Friendly",
              "Works naturally with JavaScript and Node.js applications.",
            ],
          ].map(([title, description]) => (
            <div
              key={title}
              className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-1"
            >
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm leading-6 text-[var(--text-secondary)]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Where is MongoDB Used?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB is commonly used in applications where flexible document-based
          data storage is useful.
        </p>

        <div className="space-y-2">
          {[
            ["E-commerce", "Products, orders, customers, and shopping carts."],
            ["Social Media", "User profiles, posts, comments, and likes."],
            ["Real-Time Applications", "Chat messages and activity data."],
            ["Content Management", "Blogs, articles, and dynamic content."],
            ["Task Management", "Users, projects, tasks, and their details."],
          ].map(([title, description]) => (
            <div
              key={title}
              className="flex flex-col gap-1 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-3 sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="font-medium">{title}</span>
              <span className="text-sm text-[var(--text-secondary)]">
                {description}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          6. How Does MongoDB Work with Node.js?
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          In a MERN stack application, the frontend sends requests to the
          backend. The backend communicates with MongoDB to perform database
          operations.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-2">
          {[
            ["Frontend", "React application"],
            ["Backend", "Node.js + Express.js"],
            ["Database", "MongoDB"],
          ].map(([title, description], index) => (
            <div key={title}>
              <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-tertiary)] p-3 text-center">
                <h3 className="font-semibold">{title}</h3>
                <p className="text-xs text-[var(--text-secondary)]">
                  {description}
                </p>
              </div>

              {index !== 2 && (
                <div className="py-2 text-center text-[var(--primary-color)]">
                  ↓
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="leading-7 text-[var(--text-secondary)]">
          For example, when a user registers, the backend receives the
          registration data and stores the user document in MongoDB.
        </p>

        <CodeBlock
          language="javascript"
          code={`// Example: Node.js with MongoDB

import { MongoClient } from "mongodb";

const client = new MongoClient(
  "mongodb://127.0.0.1:27017"
);

await client.connect();

const db = client.db("myApp");

const users = db.collection("users");

await users.insertOne({
  name: "Mayur",
  age: 19
});

console.log("User inserted successfully");

await client.close();`}
        />

        <p className="text-sm leading-6 text-[var(--muted-color)]">
          This is a basic example using the official MongoDB Node.js driver. We
          will study database connections and CRUD operations in detail in
          upcoming topics.
        </p>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Important MongoDB Features</h2>

        <CodeBlock
          language="text"
          code={`MongoDB
   |
   |-- Document-Based Storage
   |
   |-- Flexible Schema
   |
   |-- Indexing
   |
   |-- Aggregation
   |
   |-- Replication
   |
   |-- Sharding`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          These are some of the important capabilities of MongoDB. We will
          understand each relevant feature in its dedicated topic.
        </p>
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
            q: "What is MongoDB?",
            a: "MongoDB is a NoSQL, document-oriented database that stores data in flexible, JSON-like BSON documents.",
          },
          {
            q: "What is NoSQL?",
            a: "NoSQL stands for Not Only SQL. It refers to databases that use non-relational data models such as documents, key-value pairs, and graphs.",
          },
          {
            q: "Is MongoDB a SQL or NoSQL database?",
            a: "MongoDB is a NoSQL database.",
          },
          {
            q: "What is the main difference between SQL and MongoDB?",
            a: "SQL databases primarily store data in tables with rows and columns, whereas MongoDB stores data in collections containing documents.",
          },
          {
            q: "What format does MongoDB use to store data?",
            a: "MongoDB stores documents in BSON (Binary JSON), a binary-encoded serialization format.",
          },
          {
            q: "Is MongoDB schema-less?",
            a: "MongoDB has a flexible schema by default. Documents in the same collection can have different structures, but schema validation can enforce rules.",
          },
          {
            q: "Can we use MongoDB with Node.js?",
            a: "Yes. We can use the official MongoDB Node.js driver or Mongoose ODM to connect Node.js applications with MongoDB.",
          },
          {
            q: "What are the advantages of MongoDB?",
            a: "Flexible schema, document-based storage, rich queries, indexing, replication, and horizontal scaling.",
          },
          {
            q: "What is the difference between MongoDB and Mongoose?",
            a: "MongoDB is a database. Mongoose is an ODM library for Node.js that provides schemas, models, validation, and other features to work with MongoDB.",
          },
        ].map((item, index) => (
          <details
            key={index}
            className="group overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)]"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 font-medium transition-colors hover:bg-[var(--bg-tertiary)]">
              <span>
                {index + 1}. {item.q}
              </span>
              <span className="shrink-0 text-lg text-[var(--primary-color)] transition-transform group-open:rotate-45">
                +
              </span>
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

export default IntroductiontoMongoDB;
