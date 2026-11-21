import CodeBlock from "../../../../components/common/CodeBlock";

const Collections = () => {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">

      {/* Header */}
      <div className="space-y-2">
        <p className="text-sm font-semibold tracking-wider text-[var(--primary-color)]">
          MONGODB / 06
        </p>
        <h1 className="text-3xl font-bold">Collections in MongoDB</h1>
        <p className="text-base leading-7 text-[var(--text-secondary)]">
          A collection is a group of MongoDB documents. It is similar to a
          table in relational databases, but it stores flexible BSON documents
          instead of rows.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What is a Collection?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          A collection is a container inside a database that stores related
          documents.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          For example, an ecommerce application can have separate collections
          for users, products, and orders.
        </p>

        <CodeBlock language="text" code={`MongoDB
  |
  |-- Database: ecommerce
          |
          |-- Collection: users
          |       |
          |       |-- Document 1
          |       |-- Document 2
          |       |-- Document 3
          |
          |-- Collection: products
          |       |
          |       |-- Document 1
          |       |-- Document 2
          |
          |-- Collection: orders
                  |
                  |-- Document 1`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Each collection stores documents related to a particular purpose.
        </p>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Collection vs Table</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          In SQL databases, data is organized into tables. In MongoDB,
          data is organized into collections.
        </p>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[450px] text-left text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">SQL Database</th>
                <th className="p-3">MongoDB</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              {[
                ["Database", "Database"],
                ["Table", "Collection"],
                ["Row", "Document"],
                ["Column", "Field"],
                ["Primary Key", "_id field"],
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

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Create a Collection</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB provides the <code>createCollection()</code> method
          to explicitly create a collection.
        </p>

        <CodeBlock language="javascript" code={`use ecommerce

db.createCollection("users")`} />

        <h3 className="font-semibold">Example Output</h3>

        <CodeBlock language="json" code={`{
  "ok": 1
}`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Here, MongoDB creates a collection named users inside the
          currently selected ecommerce database.
        </p>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Automatic Collection Creation</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB can automatically create a collection when we insert
          the first document into a collection that does not exist.
        </p>

        <CodeBlock language="javascript" code={`use ecommerce

db.products.insertOne({
  name: "Laptop",
  price: 50000
})`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          If the products collection does not exist, MongoDB creates it
          automatically and inserts the document.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <p className="text-sm leading-6 text-[var(--text-secondary)]">
            <strong className="text-[var(--text-primary)]">Remember:</strong>{" "}
            You do not always need createCollection(). MongoDB can create
            collections automatically when data is inserted.
          </p>
        </div>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Show All Collections</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Use <code>show collections</code> to display all collections
          in the current database.
        </p>

        <CodeBlock language="javascript" code={`use ecommerce

show collections`} />

        <h3 className="font-semibold">Example Output</h3>

        <CodeBlock language="text" code={`orders
products
users`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          This command lists the collections available in the selected
          database.
        </p>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Get Collection Names</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          We can also get collection names using the
          <code> getCollectionNames()</code> method.
        </p>

        <CodeBlock language="javascript" code={`db.getCollectionNames()`} />

        <h3 className="font-semibold">Example Output</h3>

        <CodeBlock language="javascript" code={`[
  "users",
  "products",
  "orders"
]`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          It returns an array containing the names of collections
          in the current database.
        </p>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Access a Collection</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Use <code>db.collectionName</code> to access a collection
          from the current database.
        </p>

        <CodeBlock language="javascript" code={`// Access users collection
db.users

// Access products collection
db.products

// Access orders collection
db.orders`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          Once we access a collection, we can perform operations such
          as inserting, reading, updating, and deleting documents.
        </p>

        <CodeBlock language="javascript" code={`// Insert a document
db.users.insertOne({
  name: "Mayur",
  age: 19
})

// Read documents
db.users.find()`} />
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Rename a Collection</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB provides the <code>renameCollection()</code> method
          to change the name of an existing collection.
        </p>

        <CodeBlock language="javascript" code={`db.users.renameCollection("customers")`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          This renames the users collection to customers.
          Existing documents remain in the renamed collection.
        </p>
      </section>

      {/* 9 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Delete a Collection</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Use the <code>drop()</code> method to delete a collection
          and all its documents.
        </p>

        <CodeBlock language="javascript" code={`db.users.drop()`} />

        <h3 className="font-semibold">Example Output</h3>

        <CodeBlock language="javascript" code={`true`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          It returns true when the collection is successfully dropped.
          If the collection does not exist, it returns false.
        </p>

        <div className="rounded-xl border border-[var(--primary-color)] bg-[var(--primary-soft)] p-4 space-y-2">
          <h3 className="font-semibold text-[var(--primary-color)]">
            Warning
          </h3>
          <p className="text-sm leading-6 text-[var(--text-secondary)]">
            Dropping a collection permanently deletes its documents
            and associated indexes. Verify the collection name before
            executing this operation.
          </p>
        </div>
      </section>

      {/* 10 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Collection Options</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB allows us to configure additional options when creating
          collections.
        </p>

        <h3 className="font-semibold">Example: Capped Collection</h3>

        <p className="leading-7 text-[var(--text-secondary)]">
          A capped collection is a fixed-size collection that maintains
          documents in insertion order. When it reaches its configured
          size, MongoDB removes older documents to make room for new ones.
        </p>

        <CodeBlock language="javascript" code={`db.createCollection("logs", {
  capped: true,
  size: 100000,
  max: 1000
})`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Here:
        </p>

        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-[var(--text-secondary)]">
          <li><code>capped: true</code> enables capped collection behavior.</li>
          <li><code>size: 100000</code> sets the maximum size in bytes.</li>
          <li><code>max: 1000</code> sets the maximum number of documents.</li>
        </ul>

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Capped collections are useful for certain logging and
          event-streaming use cases.
        </p>
      </section>

      {/* 11 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">11. Important Collection Methods</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[470px] text-left text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">Method / Command</th>
                <th className="p-3">Purpose</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              {[
                ["db.createCollection()", "Creates a collection explicitly."],
                ["show collections", "Lists collections in the current database."],
                ["db.getCollectionNames()", "Returns collection names as an array."],
                ["db.collectionName", "Accesses a collection."],
                ["db.collection.renameCollection()", "Renames a collection."],
                ["db.collection.drop()", "Deletes a collection."],
                ["db.collection.stats()", "Returns collection statistics."],
              ].map(([method, purpose]) => (
                <tr key={method} className="border-t border-[var(--border-color)]">
                  <td className="p-3">
                    <code className="text-[var(--primary-color)]">{method}</code>
                  </td>
                  <td className="p-3">{purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Note: These are MongoDB Shell (mongosh) commands and methods.
          Some commands have different APIs when used through Node.js drivers.
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
            q: "What is a collection in MongoDB?",
            a: "A collection is a group of related documents stored inside a database."
          },
          {
            q: "What is the difference between a collection and a table?",
            a: "A SQL table stores rows and columns, while a MongoDB collection stores flexible BSON documents."
          },
          {
            q: "How do you create a collection in MongoDB?",
            a: "Use db.createCollection('users') in mongosh."
          },
          {
            q: "Does MongoDB create collections automatically?",
            a: "Yes. MongoDB can automatically create a collection when the first document is inserted into it."
          },
          {
            q: "How do you list all collections?",
            a: "Use show collections or db.getCollectionNames() in mongosh."
          },
          {
            q: "How do you rename a collection?",
            a: "Use db.users.renameCollection('customers') to rename users to customers."
          },
          {
            q: "How do you delete a collection?",
            a: "Use db.users.drop(). It deletes the collection and its documents."
          },
          {
            q: "What is a capped collection?",
            a: "A capped collection is a fixed-size collection that maintains insertion order and automatically removes older documents when space is needed."
          },
          {
            q: "Can a database contain multiple collections?",
            a: "Yes. A database can contain multiple collections, such as users, products, and orders."
          },
          {
            q: "What happens when we drop a collection?",
            a: "MongoDB deletes the collection, its documents, and its associated indexes."
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

export default Collections;