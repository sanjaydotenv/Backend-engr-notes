import CodeBlock from "../../../../components/common/CodeBlock";

const SchemaDesign = () => {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <div className="space-y-2">
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          MONGOOSE / 15
        </p>
        <h1 className="text-3xl font-bold">MongoDB Schema Design</h1>
        <p className="text-base leading-7 text-[var(--text-secondary)]">
          Schema Design is the process of organizing documents, fields,
          relationships, and indexes in MongoDB to build efficient, scalable,
          and maintainable applications.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What is Schema Design?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Schema Design means deciding how application data should be structured
          and stored in MongoDB.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          Before creating a Schema, we should understand:
        </p>

        <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--text-secondary)]">
          <li>What data does the application need?</li>
          <li>Which fields belong together?</li>
          <li>Which documents are related?</li>
          <li>How frequently is data read or updated?</li>
          <li>Should data be embedded or referenced?</li>
          <li>Which fields need indexes?</li>
        </ul>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          2. Understand Your Application Queries
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB Schema Design should start with application requirements and
          common query patterns, not just with individual entities.
        </p>

        <p className="font-semibold">Example: E-commerce Application</p>

        <p className="leading-7 text-[var(--text-secondary)]">
          Suppose our application needs:
        </p>

        <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--text-secondary)]">
          <li>Get a user's profile.</li>
          <li>Get all products of a category.</li>
          <li>Get all orders of a user.</li>
          <li>Get order details with product information.</li>
          <li>Calculate total order amount.</li>
        </ul>

        <p className="leading-7 text-[var(--text-secondary)]">
          We should design collections and relationships around these frequently
          used operations.
        </p>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Embedding</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Embedding means storing related data inside the same document instead
          of creating a separate collection for it.
        </p>

        <p className="font-semibold">Example:</p>

        <CodeBlock
          language="json"
          code={`{
  "_id": "user123",
  "name": "Mayur",
  "email": "mayur@example.com",
  "address": {
    "city": "Bhopal",
    "state": "Madhya Pradesh",
    "country": "India"
  }
}`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Here, address is embedded inside the User document.
        </p>

        <p className="font-semibold">Mongoose Schema:</p>

        <CodeBlock
          code={`const userSchema = new mongoose.Schema({
  name: String,
  email: String,

  address: {
    city: String,
    state: String,
    country: String,
  },
});`}
        />

        <p className="font-semibold">When to use Embedding?</p>

        <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--text-secondary)]">
          <li>When related data is usually accessed together.</li>
          <li>When child data belongs to the parent.</li>
          <li>When the embedded data is relatively small and bounded.</li>
          <li>When we want to retrieve related data in one document read.</li>
        </ul>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Referencing</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Referencing means storing another document's ObjectId instead of
          embedding its complete data.
        </p>

        <p className="font-semibold">Users Collection:</p>

        <CodeBlock
          language="json"
          code={`{
  "_id": "user123",
  "name": "Mayur"
}`}
        />

        <p className="font-semibold">Orders Collection:</p>

        <CodeBlock
          language="json"
          code={`{
  "_id": "order123",
  "total": 5000,
  "user": "user123"
}`}
        />

        <p className="font-semibold">Mongoose Schema:</p>

        <CodeBlock
          code={`const orderSchema = new mongoose.Schema({
  total: Number,

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});`}
        />

        <p className="font-semibold">When to use Referencing?</p>

        <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--text-secondary)]">
          <li>When related documents are large.</li>
          <li>When data is shared by multiple documents.</li>
          <li>When child documents grow independently.</li>
          <li>When relationships are many-to-many.</li>
          <li>When data needs independent updates.</li>
        </ul>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Embedding vs Referencing</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[450px] text-left text-sm">
            <thead className="bg-[var(--bg-card)]">
              <tr>
                <th className="p-3">Embedding</th>
                <th className="p-3">Referencing</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr>
                <td className="p-3">Stores related data together.</td>
                <td className="p-3">Stores ObjectId references.</td>
              </tr>
              <tr>
                <td className="p-3">Usually requires fewer queries.</td>
                <td className="p-3">
                  May require populate or additional queries.
                </td>
              </tr>
              <tr>
                <td className="p-3">Good for bounded related data.</td>
                <td className="p-3">Good for independently growing data.</td>
              </tr>
              <tr>
                <td className="p-3">Can duplicate data.</td>
                <td className="p-3">Reduces unnecessary duplication.</td>
              </tr>
              <tr>
                <td className="p-3">Document size can grow.</td>
                <td className="p-3">Relationships are stored separately.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm text-[var(--text-secondary)]">
          Neither approach is always better. Choose based on access patterns,
          data size, update frequency, and relationship type.
        </p>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. One-to-One Relationship</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          One-to-One means one document is associated with one other document.
        </p>

        <p className="font-semibold">Example: User and Profile</p>

        <CodeBlock
          language="json"
          code={`// User
{
  "_id": "user123",
  "name": "Mayur"
}

// Profile
{
  "_id": "profile123",
  "user": "user123",
  "bio": "Backend Developer"
}`}
        />

        <p className="font-semibold">Mongoose Schema:</p>

        <CodeBlock
          code={`const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    unique: true,
  },

  bio: String,
});`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          The unique constraint ensures that a User can have only one Profile
          document for this relationship.
        </p>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. One-to-Many Relationship</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          One-to-Many means one document is associated with multiple documents.
        </p>

        <p className="font-semibold">Example: User and Posts</p>

        <CodeBlock
          code={`const postSchema = new mongoose.Schema({
  title: String,

  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Each Post stores the User's ObjectId. One User can have multiple
          Posts.
        </p>

        <p className="font-semibold">Relationship:</p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 text-center text-sm">
          <div className="rounded-lg bg-[var(--bg-hover)] p-3 font-medium">
            User
          </div>
          <div className="py-2 text-[var(--accent-color)]">↓</div>
          <div className="grid grid-cols-3 gap-2">
            {["Post 1", "Post 2", "Post 3"].map((post) => (
              <div key={post} className="rounded-lg bg-[var(--bg-hover)] p-3">
                {post}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Many-to-Many Relationship</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Many-to-Many means multiple documents can be associated with multiple
          documents.
        </p>

        <p className="font-semibold">Example: Students and Courses</p>

        <CodeBlock
          code={`const studentSchema = new mongoose.Schema({
  name: String,

  courses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  }],
});

const courseSchema = new mongoose.Schema({
  title: String,

  students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
  }],
});`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Here, one student can enroll in multiple courses, and one course can
          have multiple students.
        </p>

        <p className="text-sm text-[var(--text-secondary)]">
          For large relationships or when enrollment needs additional
          information such as date, status, or grade, a separate Enrollment
          collection is often a better design.
        </p>
      </section>

      {/* 9 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Avoid Unbounded Arrays</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          An unbounded array is an array that can grow continuously without a
          practical limit.
        </p>

        <p className="font-semibold">Bad Design:</p>

        <CodeBlock
          language="json"
          code={`{
  "_id": "user123",
  "name": "Mayur",
  "posts": [
    "post1",
    "post2",
    "post3",
    "... thousands of posts"
  ]
}`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          If a User creates thousands of Posts, the User document keeps growing.
        </p>

        <p className="font-semibold">Better Design:</p>

        <CodeBlock
          language="json"
          code={`// Users Collection
{
  "_id": "user123",
  "name": "Mayur"
}

// Posts Collection
{
  "_id": "post123",
  "title": "MongoDB Guide",
  "author": "user123"
}`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Store Posts separately and keep the User's ObjectId inside each Post.
        </p>
      </section>

      {/* 10 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Data Duplication</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Sometimes duplicating a small amount of data is useful because it
          reduces the need for additional queries.
        </p>

        <p className="font-semibold">Example: Order Item Snapshot</p>

        <CodeBlock
          language="json"
          code={`{
  "_id": "order123",
  "items": [
    {
      "product": "product123",
      "productName": "Laptop",
      "price": 50000,
      "quantity": 1
    }
  ]
}`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Here, productName and price are copied into the Order. Even if the
          original Product price changes later, the historical order price
          remains unchanged.
        </p>

        <p className="text-sm text-[var(--text-secondary)]">
          This is intentional denormalization. The application must decide how
          duplicated fields are maintained when needed.
        </p>
      </section>

      {/* 11 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          11. Schema Validation and Constraints
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          A good Schema Design should protect data quality using validation
          rules and database constraints.
        </p>

        <CodeBlock
          code={`const userSchema = new mongoose.Schema({
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

  age: {
    type: Number,
    min: 18,
  },
});`}
        />

        <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--text-secondary)]">
          <li>required prevents missing required values.</li>
          <li>trim removes unnecessary whitespace.</li>
          <li>lowercase normalizes email values.</li>
          <li>min validates minimum numeric values.</li>
          <li>
            unique creates a unique index; it is not a normal Mongoose
            validator.
          </li>
        </ul>
      </section>

      {/* 12 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          12. Indexing for Query Performance
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Indexes help MongoDB find documents efficiently without scanning every
          document in a collection.
        </p>

        <CodeBlock
          code={`userSchema.index({
  email: 1,
});

postSchema.index({
  author: 1,
  createdAt: -1,
});`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          The first index supports email lookups. The compound index supports
          queries that filter by author and sort by creation date.
        </p>

        <p className="text-sm text-[var(--text-secondary)]">
          Indexes improve read performance but require storage and add overhead
          to writes. Create indexes based on actual query patterns.
        </p>
      </section>

      {/* 13 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          13. MongoDB Document Size Limit
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB has a maximum BSON document size of 16 MB.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          If a document grows too large, it can cause storage and performance
          problems. Large or continuously growing data should usually be stored
          in separate documents or collections.
        </p>

        <p className="text-sm text-[var(--text-secondary)]">
          This is another reason to avoid unlimited embedded arrays.
        </p>
      </section>

      {/* 14 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          14. Important Design Principles
        </h2>

        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-[var(--text-secondary)]">
          <li>Design Schema according to application query patterns.</li>
          <li>
            Embed data that is frequently accessed together and has bounded
            growth.
          </li>
          <li>Reference data that grows independently or is shared.</li>
          <li>Avoid unbounded arrays inside documents.</li>
          <li>Use indexes for frequently queried and sorted fields.</li>
          <li>Use validation to maintain data quality.</li>
          <li>
            Denormalize data when it improves read performance and historical
            consistency.
          </li>
          <li>Consider the 16 MB BSON document size limit.</li>
          <li>
            Keep frequently updated data in suitable documents to reduce
            unnecessary write contention.
          </li>
          <li>
            Choose relationships according to real application requirements.
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
            q: "What is Schema Design in MongoDB?",
            a: "Schema Design is the process of organizing documents, fields, relationships, and indexes according to application requirements and query patterns.",
          },
          {
            q: "What is Embedding?",
            a: "Embedding means storing related data inside the same MongoDB document.",
          },
          {
            q: "What is Referencing?",
            a: "Referencing means storing the ObjectId of another document instead of storing its complete data.",
          },
          {
            q: "When should we use Embedding?",
            a: "Use embedding when related data is accessed together, belongs to the parent, and has relatively small and bounded growth.",
          },
          {
            q: "When should we use Referencing?",
            a: "Use referencing when data is large, shared, independently updated, or grows continuously.",
          },
          {
            q: "What is the difference between Normalization and Denormalization?",
            a: "Normalization separates data into multiple documents to reduce duplication. Denormalization duplicates selected data to improve read performance or preserve historical snapshots.",
          },
          {
            q: "What is an Unbounded Array?",
            a: "An unbounded array is an array that can grow continuously without a practical limit, potentially making its parent document too large.",
          },
          {
            q: "What is a One-to-Many relationship?",
            a: "It is a relationship where one document is associated with multiple documents, such as one User having multiple Posts.",
          },
          {
            q: "What is a Many-to-Many relationship?",
            a: "It is a relationship where multiple documents from one collection can be associated with multiple documents from another collection.",
          },
          {
            q: "What is Denormalization?",
            a: "Denormalization means intentionally duplicating selected data to reduce additional reads and improve query performance.",
          },
          {
            q: "What is the maximum MongoDB document size?",
            a: "The maximum BSON document size in MongoDB is 16 MB.",
          },
          {
            q: "Why are indexes important in Schema Design?",
            a: "Indexes help MongoDB retrieve matching documents efficiently, although they require extra storage and increase write overhead.",
          },
          {
            q: "Should we always use Embedding instead of Referencing?",
            a: "No. The choice depends on data size, growth, relationships, update frequency, and application query patterns.",
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

export default SchemaDesign;
