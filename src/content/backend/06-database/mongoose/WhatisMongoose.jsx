import CodeBlock from "../../../../components/common/CodeBlock";

const WhatisMongoose = () => {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <div className="space-y-2">
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          MONGOOSE / 01
        </p>
        <h1 className="text-3xl font-bold">What is Mongoose?</h1>
        <p className="text-base leading-7 text-[var(--text-secondary)]">
          Mongoose is an ODM (Object Data Modeling) library for MongoDB and
          Node.js. It helps us interact with MongoDB using JavaScript objects,
          schemas, and models.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What is Mongoose?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Mongoose is a Node.js library that makes working with MongoDB easier.
          It provides a structured way to define data using schemas and interact
          with database collections using models.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          Without Mongoose, we can use the official MongoDB Node.js driver.
          Mongoose provides additional features like validation, middleware,
          relationships, and query helpers.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
          <p className="font-semibold">Important</p>
          <p className="text-sm leading-6 text-[var(--text-secondary)]">
            Mongoose is an ODM, not a database. MongoDB actually stores our
            data, while Mongoose helps our Node.js application interact with it.
          </p>
        </div>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. How Does Mongoose Work?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Mongoose works between our Node.js application and MongoDB. It
          converts our application-level operations into database operations.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
          {[
            ["Node.js Application", "Our backend application"],
            ["Mongoose", "Handles schemas, models and queries"],
            ["MongoDB Driver", "Communicates with MongoDB"],
            ["MongoDB Database", "Stores actual documents"],
          ].map(([title, description], index) => (
            <div key={title}>
              <div
                className={`rounded-lg p-3 text-center ${
                  index === 1
                    ? "border border-[var(--accent-color)] bg-[var(--accent-background)]"
                    : "bg-[var(--bg-hover)]"
                }`}
              >
                <p className="font-semibold">{title}</p>
                <p className="text-xs text-[var(--text-secondary)] mt-1">
                  {description}
                </p>
              </div>

              {index !== 3 && (
                <div className="py-1 text-center text-[var(--accent-color)]">
                  ↓
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="leading-7 text-[var(--text-secondary)]">
          When our Node.js application performs a database operation, Mongoose
          uses the MongoDB driver to communicate with MongoDB and returns the
          result.
        </p>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Installing Mongoose</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          First, create a Node.js project and install Mongoose using npm.
        </p>

        <CodeBlock
          language="bash"
          code={`npm init -y
npm install mongoose`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          After installation, import Mongoose into your application.
        </p>

        <CodeBlock code={`import mongoose from "mongoose";`} />
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          4. Creating a MongoDB Connection
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Mongoose provides the <strong>connect()</strong> method to establish a
          connection with MongoDB.
        </p>

        <CodeBlock
          code={`import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("Database Connection Failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;`}
        />

        <div className="space-y-2">
          <h3 className="font-semibold">Understanding the Code</h3>

          <ul className="space-y-2 text-sm leading-6 text-[var(--text-secondary)] list-disc pl-5">
            <li>
              <strong>mongoose.connect()</strong> establishes a MongoDB
              connection.
            </li>
            <li>
              <strong>process.env.MONGO_URI</strong> contains the database
              connection string.
            </li>
            <li>
              <strong>await</strong> waits until the connection operation
              completes.
            </li>
            <li>
              <strong>try-catch</strong> handles connection errors.
            </li>
            <li>
              <strong>process.exit(1)</strong> terminates the application with
              an error status.
            </li>
          </ul>
        </div>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          5. Creating a Schema and Model
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Mongoose uses two important concepts to work with MongoDB:
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
            <h3 className="font-semibold text-[var(--accent-color)]">Schema</h3>
            <p className="text-sm leading-6 text-[var(--text-secondary)]">
              Defines the structure, data types, and validation rules of
              documents.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
            <h3 className="font-semibold text-[var(--accent-color)]">Model</h3>
            <p className="text-sm leading-6 text-[var(--text-secondary)]">
              Provides an interface to create, read, update, and delete
              documents.
            </p>
          </div>
        </div>

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

        <p className="leading-7 text-[var(--text-secondary)]">
          Here, we created a User model using userSchema. We can use this model
          to perform database operations.
        </p>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          6. Performing Database Operations
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Once a model is created, we can perform CRUD operations using Mongoose
          methods.
        </p>

        <CodeBlock
          code={`// CREATE
const user = await User.create({
  name: "Mayur",
  email: "mayur@example.com",
  age: 19,
});

// READ
const users = await User.find();

// UPDATE
await User.findByIdAndUpdate(user._id, {
  age: 20,
});

// DELETE
await User.findByIdAndDelete(user._id);`}
        />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          These operations interact with the actual MongoDB collection through
          the Mongoose model.
        </p>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Mongoose vs MongoDB Driver</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[450px] text-sm text-left">
            <thead className="bg-[var(--bg-card)]">
              <tr>
                <th className="p-3">Mongoose</th>
                <th className="p-3">MongoDB Driver</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              {[
                ["ODM library", "Official database driver"],
                ["Uses schemas and models", "Works directly with collections"],
                ["Built-in schema validation", "Manual validation is needed"],
                ["Provides middleware/hooks", "No Mongoose-style middleware"],
                ["Higher-level abstraction", "More direct database control"],
              ].map((row, index) => (
                <tr
                  key={index}
                  className="border-t border-[var(--border-color)]"
                >
                  <td className="p-3">{row[0]}</td>
                  <td className="p-3">{row[1]}</td>
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
            q: "What is Mongoose?",
            a: "Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js. It provides schemas, models, validation, middleware, and query helpers.",
          },
          {
            q: "Is Mongoose a database?",
            a: "No. Mongoose is an ODM library. MongoDB is the actual database where documents are stored.",
          },
          {
            q: "What is ODM?",
            a: "ODM stands for Object Data Modeling. It provides a way to work with document databases using application-level objects and models.",
          },
          {
            q: "Why do we use Mongoose?",
            a: "We use Mongoose to define schemas, validate data, create models, use middleware, and simplify MongoDB operations.",
          },
          {
            q: "What is the difference between Mongoose and MongoDB?",
            a: "MongoDB is a NoSQL database that stores documents, whereas Mongoose is a Node.js ODM library that helps applications interact with MongoDB.",
          },
          {
            q: "What is the difference between Schema and Model?",
            a: "A Schema defines the structure and rules of documents. A Model is created from a Schema and provides methods to perform database operations.",
          },
          {
            q: "How do you connect MongoDB using Mongoose?",
            a: "We use mongoose.connect() with a MongoDB connection string to establish a database connection.",
          },
          {
            q: "Can we use MongoDB without Mongoose?",
            a: "Yes. We can use the official MongoDB Node.js driver directly without using Mongoose.",
          },
          {
            q: "Which method is used to create a Mongoose model?",
            a: "mongoose.model() is used to create a model from a schema.",
          },
          {
            q: "Does Mongoose support CRUD operations?",
            a: "Yes. Mongoose models provide methods such as create(), find(), findByIdAndUpdate(), and findByIdAndDelete().",
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

export default WhatisMongoose;
