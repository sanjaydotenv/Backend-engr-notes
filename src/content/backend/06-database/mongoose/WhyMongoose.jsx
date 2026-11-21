import CodeBlock from "../../../../components/common/CodeBlock";

const WhyMongoose = () => {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <div className="space-y-2">
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          MONGOOSE / 02
        </p>
        <h1 className="text-3xl font-bold">Why Do We Use Mongoose?</h1>
        <p className="text-base leading-7 text-[var(--text-secondary)]">
          Mongoose provides a structured and convenient way to work with MongoDB
          in Node.js. It helps us manage data, enforce rules, and simplify
          database operations.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. Why Do We Need Mongoose?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB allows us to store documents without a fixed structure. This
          flexibility is useful, but in real-world applications, we often need
          to maintain consistent data structures and validation rules.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          For example, a user should have a name, email, and password. We don't
          want different parts of our application to accidentally store
          different types of data.
        </p>

        <CodeBlock
          code={`// Document 1
{
  name: "Mayur",
  email: "mayur@example.com",
  age: 19
}

// Document 2
{
  username: "Rahul",
  email: 12345,
  isAdmin: true
}`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB can store documents with different structures in the same
          collection. Mongoose helps us define a consistent application-level
          structure using schemas.
        </p>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Advantages of Mongoose</h2>

        <div className="grid gap-3 sm:grid-cols-2">
          {[
            [
              "Schema Structure",
              "Define the structure and data types of documents.",
            ],
            [
              "Validation",
              "Prevent invalid data from being saved through Mongoose.",
            ],
            [
              "Middleware / Hooks",
              "Execute functions before or after database operations.",
            ],
            [
              "Easy Queries",
              "Use convenient methods like find(), findById(), and create().",
            ],
            [
              "Relationships",
              "Connect related documents using references and populate().",
            ],
            [
              "Reusable Models",
              "Create reusable models for different database operations.",
            ],
          ].map(([title, description]) => (
            <div
              key={title}
              className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2"
            >
              <h3 className="font-semibold text-[var(--accent-color)]">
                {title}
              </h3>
              <p className="text-sm leading-6 text-[var(--text-secondary)]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          3. Schema and Data Consistency
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Mongoose allows us to define a schema that describes how our documents
          should look.
        </p>

        <CodeBlock
          code={`import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Now our application has a defined structure for user documents. We can
          also add required fields, default values, and other rules.
        </p>

        <CodeBlock
          code={`const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  age: {
    type: Number,
    default: 18,
  },
});`}
        />
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Built-in Validation</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Mongoose provides built-in validators that help us check data before
          saving it to MongoDB.
        </p>

        <CodeBlock
          code={`const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  age: {
    type: Number,
    min: 18,
    max: 60,
  },
});`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          For example, if age is less than 18, Mongoose validation will fail
          when the document is validated or saved.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
          <p className="font-semibold">Important Difference</p>
          <p className="text-sm leading-6 text-[var(--text-secondary)]">
            Mongoose's unique option creates a unique index. It is not a normal
            validator. MongoDB enforces uniqueness through that index.
          </p>
        </div>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Easy Database Operations</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Mongoose provides simple methods to perform CRUD operations without
          manually working with collection commands.
        </p>

        <CodeBlock
          code={`// CREATE
await User.create({
  name: "Mayur",
  email: "mayur@example.com",
});

// READ
const users = await User.find();

// UPDATE
await User.findByIdAndUpdate(
  userId,
  { name: "Rahul" }
);

// DELETE
await User.findByIdAndDelete(userId);`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          These methods make database operations easier to write and maintain.
        </p>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Middleware / Hooks</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Mongoose middleware allows us to execute custom functions at specific
          stages of database operations.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          For example, we can hash a user's password before saving a document.
        </p>

        <CodeBlock
          code={`userSchema.pre("save", async function () {
  console.log("Before saving user");
});`}
        />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          We will explore middleware in detail in the Middleware / Hooks topic.
        </p>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          7. Mongoose vs Native MongoDB Driver
        </h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[450px] text-sm text-left">
            <thead className="bg-[var(--bg-card)]">
              <tr>
                <th className="p-3">Feature</th>
                <th className="p-3">Mongoose</th>
                <th className="p-3">MongoDB Driver</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              {[
                ["Schema", "Built-in", "Not built-in"],
                ["Validation", "Built-in", "Manual"],
                ["Middleware", "Supported", "Not built-in"],
                ["Models", "Supported", "Collections"],
                ["Query Methods", "Mongoose API", "Driver API"],
                ["Control", "Higher abstraction", "More direct control"],
              ].map((row, index) => (
                <tr
                  key={index}
                  className="border-t border-[var(--border-color)]"
                >
                  {row.map((value, i) => (
                    <td key={i} className="p-3">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          8. When Should We Use Mongoose?
        </h2>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-3">
          <div className="space-y-1">
            <h3 className="font-semibold text-[var(--accent-color)]">
              Use Mongoose When
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-sm leading-6 text-[var(--text-secondary)]">
              <li>You want structured documents.</li>
              <li>You need schema-based validation.</li>
              <li>You want middleware and model methods.</li>
              <li>You are building a Node.js application with MongoDB.</li>
            </ul>
          </div>

          <div className="border-t border-[var(--border-color)] pt-3 space-y-1">
            <h3 className="font-semibold text-[var(--accent-color)]">
              Use Native MongoDB Driver When
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-sm leading-6 text-[var(--text-secondary)]">
              <li>You need direct control over database operations.</li>
              <li>You don't need Mongoose's schema and model abstraction.</li>
              <li>You prefer working directly with MongoDB collections.</li>
            </ul>
          </div>
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
            q: "Why do we use Mongoose in Node.js?",
            a: "We use Mongoose to simplify MongoDB operations and get features like schemas, validation, middleware, models, and query helpers.",
          },
          {
            q: "Can we use MongoDB without Mongoose?",
            a: "Yes. We can use the official MongoDB Node.js driver directly without Mongoose.",
          },
          {
            q: "What is the biggest advantage of Mongoose?",
            a: "It provides schema-based data modeling and validation, making application data easier to structure and manage.",
          },
          {
            q: "Does MongoDB require a schema?",
            a: "No. MongoDB is schema-flexible. Mongoose provides an application-level schema to structure documents.",
          },
          {
            q: "What is the difference between Mongoose and MongoDB Driver?",
            a: "Mongoose is an ODM that provides schemas, models, validation, and middleware. The MongoDB driver provides direct access to MongoDB operations.",
          },
          {
            q: "Does Mongoose automatically validate data?",
            a: "Mongoose runs schema validation during document validation and save operations. Update validators are not enabled by default for update queries.",
          },
          {
            q: "Is unique a validator in Mongoose?",
            a: "No. Unique is an index option. MongoDB uses a unique index to prevent duplicate values.",
          },
          {
            q: "Can Mongoose work with middleware?",
            a: "Yes. Mongoose supports middleware such as pre and post hooks for specific operations.",
          },
          {
            q: "Does Mongoose replace MongoDB?",
            a: "No. Mongoose only provides an abstraction for interacting with MongoDB. MongoDB stores the actual data.",
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

export default WhyMongoose;
