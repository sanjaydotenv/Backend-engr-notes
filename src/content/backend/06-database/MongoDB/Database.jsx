import CodeBlock from "../../../../components/common/CodeBlock";

const Database = () => {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">

      {/* Header */}
      <div className="space-y-2">
        <p className="text-sm font-semibold tracking-wider text-[var(--primary-color)]">
          MONGODB / 05
        </p>
        <h1 className="text-3xl font-bold">Database in MongoDB</h1>
        <p className="text-base leading-7 text-[var(--text-secondary)]">
          A database is a logical container used to organize and store related
          collections. In MongoDB, a database contains collections, and
          collections contain documents.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What is a Database?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          A database is an organized collection of data. It provides a place
          where an application can store and manage its information.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          In MongoDB, a database contains multiple collections. Each
          collection stores related documents.
        </p>

        <CodeBlock language="text" code={`MongoDB Server
      |
      |-- Database: ecommerce
      |       |
      |       |-- users
      |       |-- products
      |       |-- orders
      |
      |-- Database: blog
              |
              |-- posts
              |-- comments
              |-- authors`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Example: An ecommerce application can have a database named
          ecommerce containing users, products, and orders collections.
        </p>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Database Hierarchy</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB organizes data using three main levels:
        </p>

        <div className="space-y-3">
          {[
            ["1. Database", "A logical container for collections."],
            ["2. Collection", "A group of related documents."],
            ["3. Document", "A single record stored in BSON format."],
          ].map(([title, description]) => (
            <div
              key={title}
              className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4"
            >
              <h3 className="font-semibold text-[var(--primary-color)]">
                {title}
              </h3>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">
                {description}
              </p>
            </div>
          ))}
        </div>

        <CodeBlock language="javascript" code={`Database: ecommerce

Collection: users

Document:
{
  name: "Mayur",
  email: "mayur@example.com",
  age: 19
}`} />
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Create or Switch Database</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB provides the <code>use</code> command to switch to an
          existing database or select a new database name.
        </p>

        <CodeBlock language="javascript" code={`use ecommerce`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          This selects the ecommerce database. If it does not exist,
          MongoDB switches to that database context, but the database
          is not physically created yet.
        </p>

        <h3 className="font-semibold">When is a database actually created?</h3>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB creates the database when you first store data in it
          or explicitly create a collection.
        </p>

        <CodeBlock language="javascript" code={`use ecommerce

db.users.insertOne({
  name: "Mayur",
  email: "mayur@example.com"
})`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Here, MongoDB creates the ecommerce database and users
          collection when the document is inserted, if they do not
          already exist.
        </p>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Show All Databases</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Use <code>show dbs</code> to display databases that contain
          data and are visible to your current database user.
        </p>

        <CodeBlock language="javascript" code={`show dbs`} />

        <h3 className="font-semibold">Example Output</h3>

        <CodeBlock language="text" code={`admin       40.00 KiB
config      72.00 KiB
ecommerce   80.00 KiB
local       72.00 KiB`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          The output shows database names and their approximate storage
          sizes. System databases such as admin, config, and local are
          created for MongoDB's internal purposes.
        </p>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Get Current Database</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Use the <code>db</code> command to check which database is
          currently selected.
        </p>

        <CodeBlock language="javascript" code={`db`} />

        <h3 className="font-semibold">Example Output</h3>

        <CodeBlock language="text" code={`ecommerce`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          If you have selected the ecommerce database, the command
          returns ecommerce.
        </p>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Switch Between Databases</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          You can switch between databases using the <code>use</code> command.
        </p>

        <CodeBlock language="javascript" code={`// Select ecommerce database
use ecommerce

// Select blog database
use blog

// Check current database
db`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          The last command returns blog because it is the currently
          selected database.
        </p>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Drop a Database</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code>dropDatabase()</code> method deletes the currently
          selected database and its collections.
        </p>

        <CodeBlock language="javascript" code={`use ecommerce

db.dropDatabase()`} />

        <h3 className="font-semibold">Example Output</h3>

        <CodeBlock language="json" code={`{
  "ok": 1,
  "dropped": "ecommerce"
}`} />

        <div className="rounded-xl border border-[var(--primary-color)] bg-[var(--primary-soft)] p-4 space-y-2">
          <h3 className="font-semibold text-[var(--primary-color)]">
            Warning
          </h3>
          <p className="text-sm leading-6 text-[var(--text-secondary)]">
            Dropping a database permanently removes its data. Always
            verify the currently selected database before running
            this command.
          </p>
        </div>
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Important Database Commands</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[450px] text-left text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">Command</th>
                <th className="p-3">Purpose</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              {[
                ["show dbs", "Displays available databases."],
                ["use databaseName", "Selects or switches a database."],
                ["db", "Returns the current database."],
                ["db.getName()", "Returns the current database name."],
                ["db.dropDatabase()", "Deletes the current database."],
                ["db.stats()", "Returns statistics about the current database."],
                ["db.getCollectionNames()", "Returns collection names in the current database."],
              ].map(([command, purpose]) => (
                <tr key={command} className="border-t border-[var(--border-color)]">
                  <td className="p-3">
                    <code className="text-[var(--primary-color)]">
                      {command}
                    </code>
                  </td>
                  <td className="p-3">{purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 9 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Database in MongoDB Compass</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB Compass provides a graphical interface to create and
          manage databases without writing shell commands.
        </p>

        <h3 className="font-semibold">Steps to Create a Database</h3>

        {[
          "Open MongoDB Compass.",
          "Connect to your MongoDB server or Atlas cluster.",
          "Click the Create Database button.",
          "Enter a database name.",
          "Enter the first collection name.",
          "Click Create Database.",
        ].map((step, index) => (
          <div key={step} className="flex gap-3 text-sm leading-6">
            <span className="font-semibold text-[var(--primary-color)]">
              {index + 1}.
            </span>
            <p className="text-[var(--text-secondary)]">{step}</p>
          </div>
        ))}

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Compass asks for the first collection name because MongoDB
          databases are created when a collection or data is stored.
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
            q: "What is a database in MongoDB?",
            a: "A database is a logical container that stores collections. Each collection contains related documents."
          },
          {
            q: "How do you create or switch to a database?",
            a: "Use the command use databaseName. It selects an existing database or switches to a new database context."
          },
          {
            q: "Does the use command immediately create a database?",
            a: "No. MongoDB creates the database when data is first stored or a collection is explicitly created."
          },
          {
            q: "How do you display all databases?",
            a: "Use show dbs in mongosh. It displays databases visible to the current user that contain data."
          },
          {
            q: "How do you check the current database?",
            a: "Use the db command or db.getName() in mongosh."
          },
          {
            q: "How do you delete a database?",
            a: "Select the database using use databaseName and execute db.dropDatabase()."
          },
          {
            q: "What is the difference between a database and a collection?",
            a: "A database contains collections, while a collection contains documents."
          },
          {
            q: "What does db.stats() do?",
            a: "It returns statistics about the currently selected database, including storage and object information."
          },
          {
            q: "Can a MongoDB database contain multiple collections?",
            a: "Yes. A database can contain multiple collections, such as users, products, and orders."
          },
          {
            q: "Why might a newly selected database not appear in show dbs?",
            a: "Because selecting a database with use does not create it immediately. It generally appears after a collection or data is created."
          },
        ].map((item, index) => (
          <details
            key={index}
            className="group overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)]"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 font-medium transition-colors hover:bg-[var(--bg-tertiary)]">
              <span>{index + 1}. {item.q}</span>
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

export default Database;