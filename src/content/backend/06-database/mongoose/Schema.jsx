import CodeBlock from "../../../../components/common/CodeBlock";

const Schema = () => {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <div className="space-y-2">
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          MONGOOSE / 03
        </p>
        <h1 className="text-3xl font-bold">Mongoose Schema</h1>
        <p className="text-base leading-7 text-[var(--text-secondary)]">
          A Schema in Mongoose defines the structure of documents, including
          their fields, data types, default values, and validation rules.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What is a Schema?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          A Schema is a blueprint that defines how documents should look inside
          a MongoDB collection when working through Mongoose.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          For example, if we are creating a User collection, we can define
          fields like name, email, password, and age in its schema.
        </p>

        <CodeBlock
          code={`{
  name: "Mayur",
  email: "mayur@example.com",
  password: "secret123",
  age: 19
}`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          We define these fields in a schema so that our application follows a
          consistent data structure.
        </p>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Creating a Schema</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Mongoose provides the <strong>mongoose.Schema()</strong> constructor
          to create a schema.
        </p>

        <CodeBlock
          code={`import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});`}
        />

        <div className="space-y-2">
          <h3 className="font-semibold">Understanding the Code</h3>

          <ul className="list-disc pl-5 space-y-2 text-sm leading-6 text-[var(--text-secondary)]">
            <li>
              <strong>mongoose.Schema()</strong> creates a new schema.
            </li>
            <li>
              <strong>name</strong> defines a field with String type.
            </li>
            <li>
              <strong>email</strong> defines a field with String type.
            </li>
            <li>
              <strong>age</strong> defines a field with Number type.
            </li>
            <li>
              <strong>userSchema</strong> stores the created schema.
            </li>
          </ul>
        </div>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          3. Schema Fields and Data Types
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Every field in a schema can have a specific data type. Mongoose
          provides different schema types to define the kind of values a field
          can store.
        </p>

        <CodeBlock
          code={`const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  isActive: Boolean,
  email: String,
  createdAt: Date,
  skills: [String],
});`}
        />

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[400px] text-sm text-left">
            <thead className="bg-[var(--bg-card)]">
              <tr>
                <th className="p-3">Field</th>
                <th className="p-3">Type</th>
                <th className="p-3">Example</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              {[
                ["name", "String", '"Mayur"'],
                ["age", "Number", "19"],
                ["isActive", "Boolean", "true"],
                ["createdAt", "Date", "new Date()"],
                ["skills", "[String]", '["React", "Node.js"]'],
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

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          We will explore all important Schema Types in the next topic.
        </p>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Schema Field Options</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          We can configure individual fields using an object instead of directly
          providing a data type.
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
    default: 18,
  },
});`}
        />

        <p className="font-semibold">Important Field Options</p>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[400px] text-sm text-left">
            <thead className="bg-[var(--bg-card)]">
              <tr>
                <th className="p-3">Option</th>
                <th className="p-3">Purpose</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              {[
                ["type", "Defines the field's data type."],
                ["required", "Makes the field mandatory during validation."],
                ["default", "Provides a default value."],
                ["unique", "Creates a unique index for the field."],
                ["enum", "Restricts values to a predefined list."],
                ["min / max", "Defines minimum and maximum numeric values."],
              ].map(([option, description]) => (
                <tr
                  key={option}
                  className="border-t border-[var(--border-color)]"
                >
                  <td className="p-3 font-medium text-[var(--accent-color)]">
                    {option}
                  </td>
                  <td className="p-3">{description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Schema-Level Options</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Apart from field options, we can also pass a second argument to the
          Schema constructor to configure the entire schema.
        </p>

        <CodeBlock
          code={`const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
  },
  {
    timestamps: true,
  }
);`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Here, <strong>timestamps: true</strong> automatically adds two fields:
        </p>

        <CodeBlock
          code={`{
  name: "Mayur",
  email: "mayur@example.com",
  createdAt: "2026-11-21T10:00:00.000Z",
  updatedAt: "2026-11-21T10:00:00.000Z"
}`}
        />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          createdAt stores when the document was created, while updatedAt stores
          when it was last updated.
        </p>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          6. Creating a Real-World User Schema
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Let's create a practical User Schema that can be used in a Node.js
          backend application.
        </p>

        <CodeBlock
          code={`import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
    },

    age: {
      type: Number,
      min: 18,
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default userSchema;`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          This schema defines the structure of our users and provides different
          rules for each field.
        </p>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Schema vs Document</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[400px] text-sm text-left">
            <thead className="bg-[var(--bg-card)]">
              <tr>
                <th className="p-3">Schema</th>
                <th className="p-3">Document</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-t border-[var(--border-color)]">
                <td className="p-3">Defines data structure.</td>
                <td className="p-3">Contains actual data.</td>
              </tr>
              <tr className="border-t border-[var(--border-color)]">
                <td className="p-3">Acts as a blueprint.</td>
                <td className="p-3">Represents a record.</td>
              </tr>
              <tr className="border-t border-[var(--border-color)]">
                <td className="p-3">Created using mongoose.Schema().</td>
                <td className="p-3">Stored in MongoDB.</td>
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
            q: "What is a Schema in Mongoose?",
            a: "A Schema defines the structure of documents, including fields, data types, default values, and validation rules.",
          },
          {
            q: "How do you create a Schema in Mongoose?",
            a: "We use the mongoose.Schema() constructor and pass an object containing the required fields and their types.",
          },
          {
            q: "Is Schema the same as a MongoDB collection?",
            a: "No. A Schema defines the document structure in Mongoose, whereas a collection stores documents in MongoDB.",
          },
          {
            q: "What is the purpose of the type option?",
            a: "The type option defines the data type of a particular schema field.",
          },
          {
            q: "What does required: true do?",
            a: "It makes a field mandatory during Mongoose document validation.",
          },
          {
            q: "What is the purpose of default in a Schema?",
            a: "The default option assigns a predefined value when a field is not provided.",
          },
          {
            q: "What does timestamps: true do?",
            a: "It automatically adds createdAt and updatedAt fields to documents.",
          },
          {
            q: "What is the difference between field options and schema options?",
            a: "Field options configure individual fields, while schema options configure the entire schema.",
          },
          {
            q: "What is unique in Mongoose Schema?",
            a: "It is an option that creates a unique index to prevent duplicate values. It is not a regular validator.",
          },
          {
            q: "Can we define multiple fields in one Schema?",
            a: "Yes. We can define multiple fields with different data types and options inside one Schema.",
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

export default Schema;
