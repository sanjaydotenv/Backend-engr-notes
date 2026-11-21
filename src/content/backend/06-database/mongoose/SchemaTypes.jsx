import CodeBlock from "../../../../components/common/CodeBlock";

const SchemaTypes = () => {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <div className="space-y-2">
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          MONGOOSE / 05
        </p>
        <h1 className="text-3xl font-bold">Mongoose Schema Types</h1>
        <p className="text-base leading-7 text-[var(--text-secondary)]">
          Schema Types define the type of values that fields can store in
          Mongoose documents. They also provide options to configure how
          individual fields behave.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What are Schema Types?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Mongoose provides different Schema Types such as String, Number,
          Boolean, Date, Array, ObjectId, and more.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          We use these types when defining fields inside a Schema.
        </p>

        <CodeBlock
          code={`const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  isActive: Boolean,
  createdAt: Date,
  skills: [String],
});`}
        />
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. String</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          String is used to store text values such as names, emails, passwords,
          and descriptions.
        </p>

        <CodeBlock
          code={`const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});`}
        />

        <p className="font-semibold">Useful String Options</p>

        <CodeBlock
          code={`const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },

  email: {
    type: String,
    lowercase: true,
  },

  username: {
    type: String,
    uppercase: true,
  },
});`}
        />

        <ul className="list-disc pl-5 space-y-2 text-sm leading-6 text-[var(--text-secondary)]">
          <li>
            <strong>trim:</strong> Removes whitespace from both ends.
          </li>
          <li>
            <strong>lowercase:</strong> Converts text to lowercase.
          </li>
          <li>
            <strong>uppercase:</strong> Converts text to uppercase.
          </li>
        </ul>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Number</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Number is used to store numeric values such as age, price, quantity,
          and salary.
        </p>

        <CodeBlock
          code={`const productSchema = new mongoose.Schema({
  price: {
    type: Number,
    min: 0,
  },

  quantity: {
    type: Number,
    default: 1,
  },

  discount: {
    type: Number,
    min: 0,
    max: 100,
  },
});`}
        />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Important options: min, max, and default.
        </p>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Boolean</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Boolean stores true or false values. It is commonly used for status
          fields, permissions, and account settings.
        </p>

        <CodeBlock
          code={`const userSchema = new mongoose.Schema({
  isActive: {
    type: Boolean,
    default: true,
  },

  isVerified: {
    type: Boolean,
    default: false,
  },
});`}
        />
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Date</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Date is used to store date and time values. It is useful for
          birthdays, joining dates, and scheduled events.
        </p>

        <CodeBlock
          code={`const userSchema = new mongoose.Schema({
  dateOfBirth: Date,

  joinedAt: {
    type: Date,
    default: Date.now,
  },
});`}
        />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Date.now is passed as a function reference, so Mongoose calculates the
          current date when a default value is needed.
        </p>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Array</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Array is used when a field needs to store multiple values. We can
          define arrays of strings, numbers, or other data types.
        </p>

        <CodeBlock
          code={`const userSchema = new mongoose.Schema({
  skills: [String],

  scores: [Number],

  hobbies: [String],
});`}
        />

        <p className="font-semibold">Example Document</p>

        <CodeBlock
          language="json"
          code={`{
  "skills": ["React", "Node.js", "MongoDB"],
  "scores": [80, 90, 95],
  "hobbies": ["Coding", "Reading"]
}`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          We can also create arrays containing embedded objects.
        </p>

        <CodeBlock
          code={`const userSchema = new mongoose.Schema({
  addresses: [
    {
      city: String,
      country: String,
    }
  ],
});`}
        />
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. ObjectId</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          ObjectId is a special BSON type commonly used to identify MongoDB
          documents and reference documents from other collections.
        </p>

        <CodeBlock
          code={`const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department",
  },
});`}
        />

        <p className="font-semibold">Example Document</p>

        <CodeBlock
          language="json"
          code={`{
  "name": "Mayur",
  "department": "674a1234567890abcdef1234"
}`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Here, department stores the ObjectId of a document from the Department
          collection.
        </p>

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          We will explore ObjectId references and populate() in detail in the
          Populate topic.
        </p>
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Mixed</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Mixed is used when a field can contain values of different types
          without a fixed structure.
        </p>

        <CodeBlock
          code={`const userSchema = new mongoose.Schema({
  metadata: mongoose.Schema.Types.Mixed,
});`}
        />

        <p className="font-semibold">Example Values</p>

        <CodeBlock
          language="json"
          code={`{
  "metadata": {
    "theme": "dark",
    "notifications": true,
    "score": 95
  }
}`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Mixed provides flexibility, but Mongoose does not automatically detect
          all changes made inside nested Mixed objects. We may need to call
          markModified() before saving.
        </p>

        <CodeBlock
          code={`const user = await User.findById(userId);

user.metadata.theme = "light";

user.markModified("metadata");

await user.save();`}
        />
      </section>

      {/* 9 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Buffer</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Buffer is used to store binary data, such as raw file content or other
          binary information.
        </p>

        <CodeBlock
          code={`const fileSchema = new mongoose.Schema({
  fileName: String,

  fileData: Buffer,
});`}
        />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          For large files, MongoDB GridFS or external object storage is
          generally a better choice.
        </p>
      </section>

      {/* 10 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Map</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Map stores key-value pairs where keys are strings and values follow a
          specified Schema Type.
        </p>

        <CodeBlock
          code={`const userSchema = new mongoose.Schema({
  socialLinks: {
    type: Map,
    of: String,
  },
});`}
        />

        <p className="font-semibold">Example Document</p>

        <CodeBlock
          language="json"
          code={`{
  "socialLinks": {
    "github": "https://github.com/mayur",
    "linkedin": "https://linkedin.com/in/mayur"
  }
}`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Here, every value inside socialLinks must follow the String type.
        </p>
      </section>

      {/* 11 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          11. Complete Schema Types Reference
        </h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[450px] text-sm text-left">
            <thead className="bg-[var(--bg-card)]">
              <tr>
                <th className="p-3">Schema Type</th>
                <th className="p-3">Purpose</th>
                <th className="p-3">Example</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              {[
                ["String", "Text values", '"Mayur"'],
                ["Number", "Numeric values", "19"],
                ["Boolean", "True / False", "true"],
                ["Date", "Date and time", "new Date()"],
                ["Array", "Multiple values", '["React", "Node"]'],
                ["ObjectId", "Document references", "mongoose.Types.ObjectId"],
                ["Mixed", "Flexible values", "{ theme: 'dark' }"],
                ["Buffer", "Binary data", "Buffer.from('Hello')"],
                ["Map", "Key-value pairs", "new Map()"],
                ["Decimal128", "Precise decimal values", "Decimal128"],
              ].map(([type, purpose, example]) => (
                <tr
                  key={type}
                  className="border-t border-[var(--border-color)]"
                >
                  <td className="p-3 font-medium text-[var(--accent-color)]">
                    {type}
                  </td>
                  <td className="p-3">{purpose}</td>
                  <td className="p-3">{example}</td>
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
            q: "What are Schema Types in Mongoose?",
            a: "Schema Types define the type of values that individual fields can store in Mongoose documents.",
          },
          {
            q: "Name some common Mongoose Schema Types.",
            a: "String, Number, Boolean, Date, Array, ObjectId, Mixed, Buffer, Map, and Decimal128.",
          },
          {
            q: "What is the difference between ObjectId and String?",
            a: "String stores text values, whereas ObjectId is a special BSON type commonly used for document identifiers and references.",
          },
          {
            q: "What is Mixed Schema Type?",
            a: "Mixed is a flexible Schema Type that allows a field to contain values of different types without a fixed structure.",
          },
          {
            q: "What is Buffer in Mongoose?",
            a: "Buffer is used to store binary data such as raw file content.",
          },
          {
            q: "What is Map in Mongoose?",
            a: "Map stores key-value pairs with string keys and values of a specified Schema Type.",
          },
          {
            q: "How do you define an array of strings?",
            a: "We use skills: [String] inside a Mongoose Schema.",
          },
          {
            q: "How do you define an ObjectId reference?",
            a: "We use mongoose.Schema.Types.ObjectId with the ref option to specify the referenced model.",
          },
          {
            q: "What is Decimal128?",
            a: "Decimal128 is a BSON type designed to store decimal numbers with high precision, useful for financial values.",
          },
          {
            q: "What is the difference between Date.now and Date.now()?",
            a: "Date.now passes the function as a reference, allowing it to execute when needed. Date.now() executes immediately and passes its current numeric timestamp.",
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

export default SchemaTypes;
