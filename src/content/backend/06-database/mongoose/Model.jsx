import CodeBlock from "../../../../components/common/CodeBlock";

const Model = () => {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <div className="space-y-2">
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          MONGOOSE / 04
        </p>
        <h1 className="text-3xl font-bold">Mongoose Model</h1>
        <p className="text-base leading-7 text-[var(--text-secondary)]">
          A Model in Mongoose is a constructor created from a Schema. It
          provides methods to create, read, update, and delete documents in a
          MongoDB collection.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What is a Model?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          A Model is an interface between our Node.js application and a MongoDB
          collection. We use models to perform database operations.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          We create a Model using a Schema. The Schema defines the document
          structure, while the Model provides methods to work with documents.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
          <div className="rounded-lg bg-[var(--bg-hover)] p-3 text-center">
            <p className="font-semibold">Schema</p>
            <p className="text-xs text-[var(--text-secondary)]">
              Defines document structure
            </p>
          </div>

          <div className="text-center text-[var(--accent-color)]">↓</div>

          <div className="rounded-lg border border-[var(--accent-color)] bg-[var(--accent-background)] p-3 text-center">
            <p className="font-semibold">Model</p>
            <p className="text-xs text-[var(--text-secondary)]">
              Provides database operations
            </p>
          </div>

          <div className="text-center text-[var(--accent-color)]">↓</div>

          <div className="rounded-lg bg-[var(--bg-hover)] p-3 text-center">
            <p className="font-semibold">MongoDB Collection</p>
            <p className="text-xs text-[var(--text-secondary)]">
              Stores documents
            </p>
          </div>
        </div>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Creating a Model</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Mongoose provides the <strong>mongoose.model()</strong> method to
          create a Model from a Schema.
        </p>

        <CodeBlock
          code={`import mongoose from "mongoose";

// Create Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

// Create Model
const User = mongoose.model("User", userSchema);`}
        />

        <p className="font-semibold">Understanding mongoose.model()</p>

        <CodeBlock code={`mongoose.model("User", userSchema);`} />

        <ul className="list-disc pl-5 space-y-2 text-sm leading-6 text-[var(--text-secondary)]">
          <li>
            <strong>"User"</strong> is the model name.
          </li>
          <li>
            <strong>userSchema</strong> defines the document structure.
          </li>
          <li>
            <strong>User</strong> is the Model we use for database operations.
          </li>
        </ul>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          3. Model Name and Collection Name
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          By default, Mongoose converts the model name into a lowercase,
          pluralized collection name.
        </p>

        <CodeBlock
          code={`const User = mongoose.model("User", userSchema);

// Model Name: User
// Collection Name: users`}
        />

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[350px] text-sm text-left">
            <thead className="bg-[var(--bg-card)]">
              <tr>
                <th className="p-3">Model Name</th>
                <th className="p-3">Collection Name</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              {[
                ["User", "users"],
                ["Product", "products"],
                ["Category", "categories"],
                ["Person", "people"],
              ].map(([model, collection]) => (
                <tr
                  key={model}
                  className="border-t border-[var(--border-color)]"
                >
                  <td className="p-3">{model}</td>
                  <td className="p-3">{collection}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Mongoose pluralizes model names automatically. You can also provide a
          custom collection name using the third argument of mongoose.model().
        </p>

        <CodeBlock
          code={`const User = mongoose.model(
  "User",
  userSchema,
  "my_custom_users"
);`}
        />
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          4. Creating Documents Using a Model
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          We can use the Model to create and save new documents in MongoDB.
          There are two common approaches.
        </p>

        <h3 className="font-semibold">Method 1: Using create()</h3>

        <CodeBlock
          code={`const user = await User.create({
  name: "Mayur",
  email: "mayur@example.com",
  age: 19,
});

console.log(user);`}
        />

        <h3 className="font-semibold">Method 2: Using new and save()</h3>

        <CodeBlock
          code={`const user = new User({
  name: "Mayur",
  email: "mayur@example.com",
  age: 19,
});

await user.save();`}
        />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Both approaches create and save a document. The second approach gives
          us a document instance before saving it.
        </p>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Reading Documents</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Models provide different methods to retrieve documents from MongoDB
          collections.
        </p>

        <CodeBlock
          code={`// Find all users
const users = await User.find();

// Find one user
const user = await User.findOne({
  email: "mayur@example.com",
});

// Find user by ID
const userById = await User.findById(userId);`}
        />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          find() returns matching documents, findOne() returns one matching
          document, and findById() searches using the document's _id.
        </p>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Updating Documents</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          We can update existing documents using Model methods.
        </p>

        <CodeBlock
          code={`// Update one user by ID
const updatedUser = await User.findByIdAndUpdate(
  userId,
  {
    age: 20,
  },
  {
    new: true,
    runValidators: true,
  }
);

// Update one matching user
await User.updateOne(
  { email: "mayur@example.com" },
  { $set: { age: 21 } }
);`}
        />

        <ul className="list-disc pl-5 space-y-2 text-sm leading-6 text-[var(--text-secondary)]">
          <li>
            <strong>new: true</strong> returns the updated document.
          </li>
          <li>
            <strong>runValidators: true</strong> runs schema validators on the
            update.
          </li>
          <li>
            <strong>updateOne()</strong> updates the first matching document.
          </li>
        </ul>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Deleting Documents</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Mongoose provides methods to delete documents from a collection.
        </p>

        <CodeBlock
          code={`// Delete user by ID
await User.findByIdAndDelete(userId);

// Delete one matching user
await User.deleteOne({
  email: "mayur@example.com",
});

// Delete all matching users
await User.deleteMany({
  age: { $lt: 18 },
});`}
        />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Use deleteMany() carefully because it can delete multiple documents.
        </p>
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Model vs Document</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[400px] text-sm text-left">
            <thead className="bg-[var(--bg-card)]">
              <tr>
                <th className="p-3">Model</th>
                <th className="p-3">Document</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-t border-[var(--border-color)]">
                <td className="p-3">Created from a Schema.</td>
                <td className="p-3">Created using a Model.</td>
              </tr>
              <tr className="border-t border-[var(--border-color)]">
                <td className="p-3">Works with a collection.</td>
                <td className="p-3">Represents one record.</td>
              </tr>
              <tr className="border-t border-[var(--border-color)]">
                <td className="p-3">Provides CRUD methods.</td>
                <td className="p-3">Contains actual field values.</td>
              </tr>
              <tr className="border-t border-[var(--border-color)]">
                <td className="p-3">Example: User</td>
                <td className="p-3">Example: One user record</td>
              </tr>
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
            q: "What is a Model in Mongoose?",
            a: "A Model is a constructor created from a Schema. It provides methods to perform database operations on a MongoDB collection.",
          },
          {
            q: "How do you create a Model in Mongoose?",
            a: "We use mongoose.model() and pass a model name and a Schema.",
          },
          {
            q: "What is the difference between Schema and Model?",
            a: "Schema defines the structure and rules of documents, whereas Model provides methods to interact with a MongoDB collection.",
          },
          {
            q: "How does Mongoose determine the collection name?",
            a: "By default, Mongoose converts the model name into a lowercase, pluralized collection name.",
          },
          {
            q: "Can we define a custom collection name?",
            a: "Yes. We can pass the custom collection name as the third argument to mongoose.model().",
          },
          {
            q: "What is the difference between create() and save()?",
            a: "create() creates and saves a document in one operation. save() is called on a document instance created using new Model().",
          },
          {
            q: "What does find() return?",
            a: "find() returns an array of matching documents. If no documents match, it returns an empty array.",
          },
          {
            q: "What is the difference between findOne() and findById()?",
            a: "findOne() searches using a query object, whereas findById() searches using a document's _id.",
          },
          {
            q: "What does new: true do in findByIdAndUpdate()?",
            a: "It makes Mongoose return the updated document instead of the original document.",
          },
          {
            q: "What is the purpose of runValidators: true?",
            a: "It enables schema validation during supported update operations. Update validators are disabled by default.",
          },
          {
            q: "What is deleteMany()?",
            a: "deleteMany() deletes all documents matching the given filter.",
          },
        ].map((item, index) => (
          <details
            key={index}
            className="group overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)]"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 font-medium transition-colors hover:bg-[var(--bg-hover)]">
              <span>
                {index + 1}. {item.q}
              </span>
              <span className="shrink-0 text-lg text-[var(--accent-color)] transition-transform group-open:rotate-45">
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

export default Model;
