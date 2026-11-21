import CodeBlock from "../../../../components/common/CodeBlock";

const MongoDBCompass = () => {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <div className="space-y-2">
        <p className="text-sm font-semibold tracking-wider text-[var(--primary-color)]">
          MONGODB / 03
        </p>
        <h1 className="text-3xl font-bold">MongoDB Compass</h1>
        <p className="text-base leading-7 text-[var(--text-secondary)]">
          MongoDB Compass is an official graphical user interface (GUI) that
          allows developers to interact with MongoDB databases without writing
          every operation in the terminal.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What is MongoDB Compass?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB Compass is a desktop application used to visually explore and
          manage MongoDB databases.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          Instead of performing every operation using commands, we can use
          Compass's graphical interface to perform database operations.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ["View Documents", "See stored documents in a visual format."],
            ["Create Collections", "Create and manage collections."],
            ["Insert Documents", "Add new documents using a form or JSON."],
            ["Update Documents", "Modify existing document fields."],
            ["Delete Documents", "Remove documents from collections."],
            ["Run Queries", "Filter, sort, and explore documents."],
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

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Install MongoDB Compass</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          You can download MongoDB Compass from its official website.
        </p>

        <a
          href="https://www.mongodb.com/products/tools/compass"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-[var(--primary-soft)] px-4 py-3 text-sm font-semibold text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white transition-colors"
        >
          Download MongoDB Compass ↗
        </a>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-3">
          <h3 className="font-semibold">Installation Steps</h3>

          {[
            "Open the official MongoDB Compass download page.",
            "Select your operating system.",
            "Download the installer.",
            "Run the installer and complete installation.",
            "Open MongoDB Compass.",
          ].map((step, index) => (
            <div key={step} className="flex gap-3 text-sm leading-6">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--primary-soft)] text-xs font-semibold text-[var(--primary-color)]">
                {index + 1}
              </span>
              <p className="text-[var(--text-secondary)]">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Connect MongoDB Compass</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Before using Compass, we need to connect it to a MongoDB server. For
          local development, we can connect to our locally running MongoDB
          instance.
        </p>

        <h3 className="font-semibold">Local MongoDB Connection</h3>

        <CodeBlock language="text" code={`mongodb://127.0.0.1:27017`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          This is a MongoDB connection string.
        </p>

        <div className="space-y-2">
          {[
            ["mongodb://", "MongoDB connection protocol."],
            ["127.0.0.1", "Local machine (localhost)."],
            ["27017", "Default MongoDB server port."],
          ].map(([title, description]) => (
            <div
              key={title}
              className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-3"
            >
              <code className="font-semibold text-[var(--primary-color)]">
                {title}
              </code>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">
                {description}
              </p>
            </div>
          ))}
        </div>

        <h3 className="font-semibold">Connection Steps</h3>

        {[
          "Open MongoDB Compass.",
          "Click Add New Connection.",
          "Enter mongodb://127.0.0.1:27017.",
          "Click Connect.",
          "Your available databases will appear.",
        ].map((step, index) => (
          <div key={step} className="flex gap-3 text-sm leading-6">
            <span className="font-semibold text-[var(--primary-color)]">
              {index + 1}.
            </span>
            <p className="text-[var(--text-secondary)]">{step}</p>
          </div>
        ))}
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Create a Database</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          After connecting to MongoDB, we can create a database directly from
          Compass.
        </p>

        <h3 className="font-semibold">Steps</h3>

        {[
          "Click the Create Database button.",
          "Enter the Database Name: myApp.",
          "Enter the Collection Name: users.",
          "Click Create Database.",
        ].map((step, index) => (
          <div key={step} className="flex gap-3 text-sm leading-6">
            <span className="font-semibold text-[var(--primary-color)]">
              {index + 1}.
            </span>
            <p className="text-[var(--text-secondary)]">{step}</p>
          </div>
        ))}

        <CodeBlock
          language="text"
          code={`MongoDB
   |
   |-- myApp (Database)
          |
          |-- users (Collection)`}
        />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          MongoDB creates a database when data is first stored in it. In
          Compass, creating a database also requires specifying an initial
          collection.
        </p>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Insert Documents</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          We can insert documents into a collection using the Add Data option in
          MongoDB Compass.
        </p>

        <h3 className="font-semibold">Steps</h3>

        {[
          "Open the myApp database.",
          "Select the users collection.",
          "Click Add Data.",
          "Select Insert Document.",
          "Enter the document in JSON format.",
          "Click Insert.",
        ].map((step, index) => (
          <div key={step} className="flex gap-3 text-sm leading-6">
            <span className="font-semibold text-[var(--primary-color)]">
              {index + 1}.
            </span>
            <p className="text-[var(--text-secondary)]">{step}</p>
          </div>
        ))}

        <CodeBlock
          language="json"
          code={`{
  "name": "Mayur",
  "age": 19,
  "email": "mayur@example.com",
  "skills": ["JavaScript", "React", "Node.js"]
}`}
        />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          MongoDB automatically generates an ObjectId for the document if we do
          not provide an _id field.
        </p>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Filter Documents</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Compass provides a Filter field where we can write MongoDB query
          conditions to find specific documents.
        </p>

        <h3 className="font-semibold">Example: Find users whose age is 19</h3>

        <CodeBlock language="javascript" code={`{ age: 19 }`} />

        <h3 className="font-semibold">Example: Find users older than 18</h3>

        <CodeBlock language="javascript" code={`{ age: { $gt: 18 } }`} />

        <h3 className="font-semibold">
          Example: Find users from a specific city
        </h3>

        <CodeBlock language="javascript" code={`{ city: "Bhopal" }`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Enter the query in the Filter field and click Find to view matching
          documents.
        </p>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          7. Update and Delete Documents
        </h2>

        <h3 className="font-semibold">Update Document</h3>

        <p className="leading-7 text-[var(--text-secondary)]">
          Open a document, edit its fields, and save the changes. Compass also
          provides an update workflow.
        </p>

        <h3 className="font-semibold">Delete Document</h3>

        <p className="leading-7 text-[var(--text-secondary)]">
          Select a document and use its delete option to remove it from the
          collection.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-2">
          <p className="font-semibold">Important</p>
          <p className="text-sm leading-6 text-[var(--text-secondary)]">
            Update and delete operations can permanently modify or remove data.
            Always verify the selected document before confirming.
          </p>
        </div>
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          8. MongoDB Compass vs MongoDB Shell
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB Compass and MongoDB Shell both allow us to interact with
          MongoDB, but their interfaces are different.
        </p>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[450px] text-left text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">MongoDB Compass</th>
                <th className="p-3">MongoDB Shell</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              {[
                ["Graphical interface (GUI)", "Command-line interface (CLI)"],
                [
                  "Visual database management",
                  "Command-based database management",
                ],
                [
                  "Good for exploring documents",
                  "Good for scripting and commands",
                ],
                ["Less command writing", "Requires writing commands"],
              ].map(([compass, shell]) => (
                <tr
                  key={compass}
                  className="border-t border-[var(--border-color)]"
                >
                  <td className="p-3">{compass}</td>
                  <td className="p-3">{shell}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
            q: "What is MongoDB Compass?",
            a: "MongoDB Compass is an official graphical user interface (GUI) used to visually explore and manage MongoDB databases.",
          },
          {
            q: "Is MongoDB Compass a database?",
            a: "No. MongoDB Compass is a GUI application. MongoDB is the actual database system.",
          },
          {
            q: "What is the default MongoDB port?",
            a: "The default MongoDB server port is 27017.",
          },
          {
            q: "What is the local MongoDB connection string?",
            a: "mongodb://127.0.0.1:27017 is a commonly used connection string for a local MongoDB server.",
          },
          {
            q: "Can we insert documents using MongoDB Compass?",
            a: "Yes. We can use Add Data → Insert Document to insert documents into a collection.",
          },
          {
            q: "Can we execute MongoDB queries in Compass?",
            a: "Yes. We can use the Filter field to execute queries and find matching documents.",
          },
          {
            q: "What is the difference between MongoDB Compass and MongoDB Shell?",
            a: "Compass provides a graphical interface, whereas MongoDB Shell provides a command-line interface.",
          },
          {
            q: "Does MongoDB Compass require a running MongoDB server?",
            a: "Yes. Compass needs access to a MongoDB deployment, such as a local MongoDB server or a MongoDB Atlas cluster.",
          },
          {
            q: "Can MongoDB Compass connect to MongoDB Atlas?",
            a: "Yes. We can connect Compass to an Atlas cluster using its connection string and required authentication.",
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

export default MongoDBCompass;
