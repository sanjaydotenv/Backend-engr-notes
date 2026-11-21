import CodeBlock from "../../../../components/common/CodeBlock";

const DataModeling = () => {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <div className="space-y-2">
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          MONGOOSE / 16
        </p>
        <h1 className="text-3xl font-bold">Data Modeling in MongoDB</h1>
        <p className="text-base leading-7 text-[var(--text-secondary)]">
          Data Modeling is the process of defining how data is organized,
          connected, and stored across MongoDB collections to represent
          real-world application requirements.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What is Data Modeling?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Data Modeling means deciding how different entities in an application
          relate to each other and how those relationships should be stored in
          MongoDB.
        </p>

        <p className="font-semibold">Example: Blog Application</p>

        <p className="leading-7 text-[var(--text-secondary)]">
          A blog application may contain:
        </p>

        <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--text-secondary)]">
          <li>Users</li>
          <li>Posts</li>
          <li>Comments</li>
          <li>Categories</li>
          <li>Likes</li>
        </ul>

        <p className="leading-7 text-[var(--text-secondary)]">
          Data Modeling defines how these collections are connected.
        </p>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Types of Relationships</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB applications commonly use three relationship types:
        </p>

        <div className="grid gap-3 sm:grid-cols-3">
          {[
            ["One-to-One", "1 : 1"],
            ["One-to-Many", "1 : N"],
            ["Many-to-Many", "N : N"],
          ].map(([name, symbol]) => (
            <div
              key={name}
              className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 text-center"
            >
              <p className="text-sm text-[var(--text-secondary)]">{name}</p>
              <p className="mt-2 text-2xl font-bold text-[var(--accent-color)]">
                {symbol}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. One-to-One Relationship</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          One-to-One means one document is associated with exactly one document
          from another collection.
        </p>

        <p className="font-semibold">Example: User and Profile</p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <div className="mx-auto max-w-xs rounded-lg bg-[var(--bg-hover)] p-3 text-center">
            <p className="font-semibold">User</p>
            <p className="text-xs text-[var(--text-secondary)]">Mayur</p>
          </div>
          <div className="py-2 text-center text-[var(--accent-color)]">
            ↓ 1 : 1
          </div>
          <div className="mx-auto max-w-xs rounded-lg bg-[var(--bg-hover)] p-3 text-center">
            <p className="font-semibold">Profile</p>
            <p className="text-xs text-[var(--text-secondary)]">
              Backend Developer
            </p>
          </div>
        </div>

        <p className="font-semibold">User Schema:</p>

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
});`}
        />

        <p className="font-semibold">Profile Schema:</p>

        <CodeBlock
          code={`const profileSchema = new mongoose.Schema({
  bio: String,

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
});`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          The Profile stores the User's ObjectId. The unique index ensures that
          one User cannot have multiple Profile documents.
        </p>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. One-to-Many Relationship</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          One-to-Many means one document is associated with multiple documents
          from another collection.
        </p>

        <p className="font-semibold">Example: User and Posts</p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <div className="mx-auto max-w-xs rounded-lg bg-[var(--bg-hover)] p-3 text-center font-semibold">
            User
          </div>
          <div className="py-2 text-center text-[var(--accent-color)]">
            ↓ 1 : N
          </div>
          <div className="grid grid-cols-3 gap-2">
            {["Post 1", "Post 2", "Post 3"].map((post) => (
              <div
                key={post}
                className="rounded-lg bg-[var(--bg-hover)] p-3 text-center text-sm"
              >
                {post}
              </div>
            ))}
          </div>
        </div>

        <p className="font-semibold">User Schema:</p>

        <CodeBlock
          code={`const userSchema = new mongoose.Schema({
  name: String,
});`}
        />

        <p className="font-semibold">Post Schema:</p>

        <CodeBlock
          code={`const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  content: String,

  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Every Post stores its author's ObjectId. Multiple Posts can reference
          the same User.
        </p>

        <p className="font-semibold">Get all Posts of a User:</p>

        <CodeBlock
          code={`const posts = await Post.find({
  author: userId,
});`}
        />

        <p className="font-semibold">Important:</p>

        <p className="leading-7 text-[var(--text-secondary)]">
          For large or continuously growing relationships, storing all child
          ObjectIds inside the parent document is usually not a good choice.
          Store the parent reference on each child document instead.
        </p>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Many-to-Many Relationship</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Many-to-Many means multiple documents from one collection can be
          associated with multiple documents from another collection.
        </p>

        <p className="font-semibold">Example: Students and Courses</p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <p className="text-center font-semibold">Students</p>
              {["Student 1", "Student 2"].map((item) => (
                <div
                  key={item}
                  className="rounded-lg bg-[var(--bg-hover)] p-3 text-center text-sm"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <p className="text-center font-semibold">Courses</p>
              {["Course 1", "Course 2"].map((item) => (
                <div
                  key={item}
                  className="rounded-lg bg-[var(--bg-hover)] p-3 text-center text-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <p className="mt-3 text-center text-sm text-[var(--accent-color)]">
            Each student can join multiple courses and each course can have
            multiple students.
          </p>
        </div>

        <p className="font-semibold">Student Schema:</p>

        <CodeBlock
          code={`const studentSchema = new mongoose.Schema({
  name: String,

  courses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  }],
});`}
        />

        <p className="font-semibold">Course Schema:</p>

        <CodeBlock
          code={`const courseSchema = new mongoose.Schema({
  title: String,

  students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
  }],
});`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Both collections store references to each other. However, maintaining
          both arrays requires updating both sides consistently.
        </p>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          6. Using a Junction Collection
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          For large Many-to-Many relationships, we can create a separate
          collection to represent the relationship itself.
        </p>

        <p className="font-semibold">Example: Enrollment</p>

        <p className="leading-7 text-[var(--text-secondary)]">
          Instead of storing large arrays in both Student and Course, create an
          Enrollment collection.
        </p>

        <CodeBlock
          language="json"
          code={`{
  "_id": "enrollment123",
  "student": "student123",
  "course": "course123",
  "enrolledAt": "2026-11-21",
  "status": "active"
}`}
        />

        <p className="font-semibold">Mongoose Schema:</p>

        <CodeBlock
          code={`const enrollmentSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },

  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },

  enrolledAt: {
    type: Date,
    default: Date.now,
  },

  status: {
    type: String,
    enum: ["active", "completed", "cancelled"],
    default: "active",
  },
});

// Prevent duplicate enrollments.
enrollmentSchema.index(
  { student: 1, course: 1 },
  { unique: true }
);`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          This approach also allows us to store extra information about the
          relationship, such as enrollment date, status, payment details, or
          grade.
        </p>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Parent-Child Data Modeling</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Parent-Child modeling represents hierarchical relationships where one
          document acts as a parent and other documents belong to it.
        </p>

        <p className="font-semibold">Example: Category and Products</p>

        <CodeBlock
          code={`const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const productSchema = new mongoose.Schema({
  name: String,

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Each Product references its Category. One Category can have many
          Products.
        </p>

        <p className="font-semibold">Get Products with Category:</p>

        <CodeBlock
          code={`const products = await Product.find()
  .populate("category", "name");`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Populate replaces the category ObjectId with the referenced Category
          document in the query result.
        </p>
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          8. Choosing the Right Relationship
        </h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead className="bg-[var(--bg-card)]">
              <tr>
                <th className="p-3">Relationship</th>
                <th className="p-3">Example</th>
                <th className="p-3">Common Approach</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr>
                <td className="p-3">One-to-One</td>
                <td className="p-3">User - Profile</td>
                <td className="p-3">Embed or Reference</td>
              </tr>
              <tr>
                <td className="p-3">One-to-Many</td>
                <td className="p-3">User - Posts</td>
                <td className="p-3">Reference from child</td>
              </tr>
              <tr>
                <td className="p-3">Many-to-Many</td>
                <td className="p-3">Students - Courses</td>
                <td className="p-3">References or Junction Collection</td>
              </tr>
              <tr>
                <td className="p-3">Parent-Child</td>
                <td className="p-3">Category - Products</td>
                <td className="p-3">Reference from child</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          These are common approaches, not strict rules. Embedding, referencing,
          or a separate relationship collection should be selected according to
          query patterns and data growth.
        </p>
      </section>

      {/* 9 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          9. Real-World E-commerce Data Model
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Let's understand how different collections connect in an e-commerce
          application.
        </p>

        <div className="space-y-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          {[
            ["User", "One User can create multiple Orders."],
            ["Order", "Each Order belongs to one User."],
            [
              "OrderItem",
              "Stores product reference, price snapshot, and quantity.",
            ],
            ["Product", "Products can appear in multiple Orders."],
            ["Category", "One Category can contain multiple Products."],
          ].map(([title, description]) => (
            <div key={title} className="rounded-lg bg-[var(--bg-hover)] p-3">
              <p className="font-semibold text-[var(--accent-color)]">
                {title}
              </p>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">
                {description}
              </p>
            </div>
          ))}
        </div>

        <p className="font-semibold">Order Schema:</p>

        <CodeBlock
          code={`const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  items: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },

      productName: String,
      price: Number,
      quantity: Number,
    },
  ],

  totalAmount: {
    type: Number,
    required: true,
  },

  status: {
    type: String,
    enum: ["pending", "shipped", "delivered", "cancelled"],
    default: "pending",
  },
}, {
  timestamps: true,
});`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Here, User is referenced because one User can create many Orders.
          Order items are embedded because they are part of a particular order
          and contain historical product information.
        </p>
      </section>

      {/* 10 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          10. Important Data Modeling Rules
        </h2>

        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-[var(--text-secondary)]">
          <li>Understand application queries before designing collections.</li>
          <li>Choose relationships based on real-world requirements.</li>
          <li>Embed small, bounded data that is accessed together.</li>
          <li>Reference large or independently growing data.</li>
          <li>
            Use junction collections for complex Many-to-Many relationships.
          </li>
          <li>
            Store historical snapshots when old values must remain unchanged.
          </li>
          <li>Avoid unbounded arrays.</li>
          <li>Use indexes to support common relationship queries.</li>
          <li>
            Maintain consistency when the same relationship is stored in
            multiple places.
          </li>
          <li>
            Use transactions when multiple database writes must succeed or fail
            together.
          </li>
        </ul>
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
            q: "What is Data Modeling in MongoDB?",
            a: "Data Modeling is the process of defining how application data and relationships are organized across MongoDB documents and collections.",
          },
          {
            q: "What are the three main types of relationships?",
            a: "One-to-One, One-to-Many, and Many-to-Many.",
          },
          {
            q: "How do you implement a One-to-One relationship?",
            a: "You can embed one document inside another or reference it using ObjectId. A unique index can enforce one-to-one cardinality.",
          },
          {
            q: "How do you implement a One-to-Many relationship?",
            a: "A common approach is storing the parent document's ObjectId in each child document. For bounded child data, embedding can also be appropriate.",
          },
          {
            q: "How do you implement a Many-to-Many relationship?",
            a: "You can store arrays of ObjectId references or use a separate junction collection when the relationship is large or has additional fields.",
          },
          {
            q: "What is a Junction Collection?",
            a: "A separate collection that stores references to documents participating in a Many-to-Many relationship, such as an Enrollment collection.",
          },
          {
            q: "What is the difference between Embedding and Referencing?",
            a: "Embedding stores related data inside one document. Referencing stores another document's ObjectId and keeps the data separate.",
          },
          {
            q: "Why should we avoid unbounded arrays?",
            a: "They can continuously increase document size, create performance issues, and eventually reach MongoDB's 16 MB document limit.",
          },
          {
            q: "What is a Parent-Child relationship?",
            a: "It is a hierarchical relationship where child documents belong to a parent document, such as Products belonging to a Category.",
          },
          {
            q: "Why do we store product price inside an Order?",
            a: "It preserves the historical purchase price even if the original Product price changes later.",
          },
          {
            q: "When should we use a Junction Collection?",
            a: "Use it for large Many-to-Many relationships or when the relationship itself needs additional information such as status, date, or grade.",
          },
          {
            q: "Does MongoDB automatically enforce referenced document relationships?",
            a: "No. Mongoose references describe relationships, but they do not automatically enforce foreign-key constraints. The application must handle validation and consistency.",
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

export default DataModeling;
