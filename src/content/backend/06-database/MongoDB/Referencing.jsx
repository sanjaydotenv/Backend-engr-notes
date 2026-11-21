import CodeBlock from "../../../../components/common/CodeBlock";

export default function Referencing() {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--primary-color)]">
          MONGODB / 17
        </p>

        <h1 className="text-3xl font-bold">Referencing in MongoDB</h1>

        <p className="text-base leading-7 text-[var(--text-secondary)]">
          Referencing is a way to connect documents stored in different
          collections using their unique identifiers. Instead of embedding
          related data, we store references to other documents.
        </p>
      </div>

      {/* 1. What is Referencing */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">1. What Is Referencing?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          In MongoDB, referencing means storing the _id of one document inside
          another document. This creates a relationship between documents
          without storing the complete related document.
        </p>

        <CodeBlock
          code={`// users collection
{
  _id: ObjectId("111111111111111111111111"),
  name: "Mayur",
  email: "mayur@example.com"
}

// orders collection
{
  _id: ObjectId("222222222222222222222222"),
  product: "Laptop",
  price: 50000,
  userId: ObjectId("111111111111111111111111")
}`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Here, userId stores the _id of a user document. This connects the
          order to its user.
        </p>
      </section>

      {/* 2. How Referencing Works */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">2. How Referencing Works</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Referencing separates related data into different collections.
          Documents are connected using their IDs.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-4">
          <div className="rounded-lg border border-[var(--primary-color)] p-4">
            <p className="mb-2 text-xs font-semibold uppercase text-[var(--primary-color)]">
              Users Collection
            </p>
            <p className="font-medium">User Document</p>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">
              _id: 101
              <br />
              name: "Mayur"
            </p>
          </div>

          <div className="flex flex-col items-center gap-1">
            <span className="text-sm font-medium text-[var(--primary-color)]">
              userId → 101
            </span>
            <div className="h-7 w-px bg-[var(--primary-color)]" />
            <span className="text-xs text-[var(--text-secondary)]">
              Reference
            </span>
            <div className="h-7 w-px bg-[var(--primary-color)]" />
          </div>

          <div className="rounded-lg border border-[var(--border-color)] p-4">
            <p className="mb-2 text-xs font-semibold uppercase text-[var(--primary-color)]">
              Orders Collection
            </p>
            <p className="font-medium">Order Document</p>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">
              _id: 201
              <br />
              product: "Laptop"
              <br />
              userId: 101
            </p>
          </div>
        </div>

        <p className="text-sm text-[var(--text-secondary)]">
          The orders collection stores only the user's ID, not the entire user
          document.
        </p>
      </section>

      {/* 3. Types */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">3. Types of Referencing</h2>

        <h3 className="font-medium">3.1 Manual Referencing</h3>

        <p className="leading-7 text-[var(--text-secondary)]">
          In manual referencing, we store another document's ID in a field.
          We retrieve the related document separately using that ID.
        </p>

        <CodeBlock
          code={`// users collection
{
  _id: 101,
  name: "Mayur"
}

// orders collection
{
  _id: 201,
  product: "Laptop",
  userId: 101
}`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          MongoDB does not automatically fetch the referenced user. We must
          query the users collection separately or use aggregation with
          $lookup.
        </p>

        <h3 className="font-medium">3.2 DBRef</h3>

        <p className="leading-7 text-[var(--text-secondary)]">
          DBRef is a special BSON convention that stores a reference to
          another document along with its collection name and optionally its
          database name.
        </p>

        <CodeBlock
          code={`{
  product: "Laptop",

  user: {
    $ref: "users",
    $id: ObjectId("111111111111111111111111")
  }
}`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          DBRef does not automatically perform a join. Manual references are
          generally simpler and more commonly used in application design.
        </p>
      </section>

      {/* 4. Creating References */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">4. Creating References</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          We can create references by first inserting a document and then
          storing its _id in another document.
        </p>

        <CodeBlock
          code={`// Step 1: Insert a user
db.users.insertOne({
  name: "Mayur",
  email: "mayur@example.com"
})

// Step 2: Get the inserted user's ID
const userId = db.users.findOne({
  name: "Mayur"
})._id

// Step 3: Create an order using that ID
db.orders.insertOne({
  product: "Laptop",
  price: 50000,
  userId: userId
})`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          The order document now contains a reference to the user document.
        </p>
      </section>

      {/* 5. Fetching Referenced Documents */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">5. Fetching Referenced Documents</h2>

        <h3 className="font-medium">5.1 Using Separate Queries</h3>

        <p className="leading-7 text-[var(--text-secondary)]">
          We can first find an order, then use its userId to find the
          corresponding user.
        </p>

        <CodeBlock
          code={`// Find an order
const order = db.orders.findOne({
  product: "Laptop"
})

// Find its user
db.users.findOne({
  _id: order.userId
})`}
        />

        <h3 className="font-medium">5.2 Using $lookup</h3>

        <p className="leading-7 text-[var(--text-secondary)]">
          The $lookup aggregation stage performs a left outer join between
          collections. It combines matching documents from another collection
          into an array.
        </p>

        <CodeBlock
          code={`db.orders.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "userId",
      foreignField: "_id",
      as: "userDetails"
    }
  }
])`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Here:
        </p>

        <ul className="list-disc space-y-2 pl-6 text-sm text-[var(--text-secondary)]">
          <li>
            <code>from</code> — collection to join.
          </li>
          <li>
            <code>localField</code> — field in the current collection.
          </li>
          <li>
            <code>foreignField</code> — matching field in the other collection.
          </li>
          <li>
            <code>as</code> — name of the output array.
          </li>
        </ul>

        <h3 className="font-medium">Example Output</h3>

        <CodeBlock
          code={`{
  _id: 201,
  product: "Laptop",
  price: 50000,
  userId: ObjectId("111111111111111111111111"),

  userDetails: [
    {
      _id: ObjectId("111111111111111111111111"),
      name: "Mayur",
      email: "mayur@example.com"
    }
  ]
}`}
        />
      </section>

      {/* 6. One-to-One */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">6. One-to-One Relationship</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          In a one-to-one relationship, one document is associated with
          exactly one related document.
        </p>

        <CodeBlock
          code={`// users collection
{
  _id: 101,
  name: "Mayur"
}

// profiles collection
{
  _id: 201,
  userId: 101,
  bio: "Backend Developer",
  website: "example.com"
}`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          One user has one separate profile document. A unique index on
          userId can enforce one profile per user.
        </p>
      </section>

      {/* 7. One-to-Many */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">7. One-to-Many Relationship</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          In a one-to-many relationship, one document is related to multiple
          documents in another collection.
        </p>

        <CodeBlock
          code={`// users collection
{
  _id: 101,
  name: "Mayur"
}

// orders collection
{
  _id: 201,
  product: "Laptop",
  userId: 101
}

{
  _id: 202,
  product: "Mouse",
  userId: 101
}

{
  _id: 203,
  product: "Keyboard",
  userId: 101
}`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          One user can have multiple orders. Each order stores the user's ID.
        </p>
      </section>

      {/* 8. Many-to-Many */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">8. Many-to-Many Relationship</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          In a many-to-many relationship, multiple documents in one collection
          can be related to multiple documents in another collection.
        </p>

        <p className="text-sm text-[var(--text-secondary)]">
          Example: A student can enroll in multiple courses, and each course
          can have multiple students.
        </p>

        <CodeBlock
          code={`// students collection
{
  _id: 101,
  name: "Mayur"
}

// courses collection
{
  _id: 201,
  title: "Node.js"
}

{
  _id: 202,
  title: "MongoDB"
}

// enrollments collection
{
  studentId: 101,
  courseId: 201
}

{
  studentId: 101,
  courseId: 202
}`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          The enrollments collection connects students and courses using
          references.
        </p>
      </section>

      {/* 9. Node.js Example */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">9. Referencing with Node.js</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Using the MongoDB Node.js driver, we can insert a document and use
          its returned insertedId as a reference in another collection.
        </p>

        <CodeBlock
          code={`import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URI);

async function createOrder() {
  try {
    await client.connect();

    const db = client.db("ecommerce");

    const users = db.collection("users");
    const orders = db.collection("orders");

    // Create a user
    const user = await users.insertOne({
      name: "Mayur",
      email: "mayur@example.com"
    });

    // Create an order with user reference
    await orders.insertOne({
      product: "Laptop",
      price: 50000,
      userId: user.insertedId
    });

    console.log("Order created successfully");
  } finally {
    await client.close();
  }
}

createOrder();`}
        />
      </section>

      {/* 10. Advantages */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">10. Advantages of Referencing</h2>

        <div className="space-y-3">
          {[
            "Keeps documents smaller by storing references instead of complete related data.",
            "Reduces unnecessary data duplication.",
            "Allows related data to be maintained independently.",
            "Works well for large relationships and frequently changing data.",
            "Useful when multiple documents share the same related document.",
            "Supports flexible relationships between collections.",
          ].map((point, index) => (
            <div
              key={index}
              className="flex gap-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-3"
            >
              <span className="font-semibold text-[var(--primary-color)]">
                {index + 1}.
              </span>
              <p className="text-sm leading-6 text-[var(--text-secondary)]">
                {point}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 11. Disadvantages */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">11. Disadvantages of Referencing</h2>

        <div className="space-y-3">
          {[
            "May require multiple database queries to fetch related data.",
            "$lookup can make aggregation pipelines more complex.",
            "Fetching related data may require additional processing.",
            "MongoDB does not automatically maintain referential integrity.",
            "Deleting a referenced document does not automatically delete documents that reference it.",
          ].map((point, index) => (
            <div
              key={index}
              className="flex gap-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-3"
            >
              <span className="font-semibold text-[var(--primary-color)]">
                {index + 1}.
              </span>
              <p className="text-sm leading-6 text-[var(--text-secondary)]">
                {point}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 12. Embedding vs Referencing */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">12. Embedding vs Referencing</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[550px] text-left text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-4 font-semibold">Feature</th>
                <th className="p-4 font-semibold">Embedding</th>
                <th className="p-4 font-semibold">Referencing</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[var(--border-color)]">
              {[
                ["Storage", "Same document", "Separate documents"],
                ["Relationship", "Nested data", "ID-based connection"],
                ["Queries", "Usually simpler", "May need multiple queries or $lookup"],
                ["Data Duplication", "Can happen", "Usually reduced"],
                ["Document Size", "Can grow", "Documents stay separate"],
                ["Best For", "Related data accessed together", "Large or shared relationships"],
              ].map(([feature, embedding, referencing]) => (
                <tr key={feature}>
                  <td className="p-4 font-medium">{feature}</td>
                  <td className="p-4 text-[var(--text-secondary)]">{embedding}</td>
                  <td className="p-4 text-[var(--text-secondary)]">{referencing}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rounded-xl border border-[var(--primary-color)] bg-[var(--primary-soft)] p-4">
          <p className="font-semibold text-[var(--primary-color)]">
            Remember
          </p>
          <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
            Use embedding when related data is frequently accessed together.
            Use referencing when data is large, shared, or independently
            managed.
          </p>
        </div>
      </section>

      {/* 13. Important Points */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">13. Important Points</h2>

        <div className="space-y-3">
          {[
            "Referencing connects documents using their unique IDs.",
            "Referenced documents are stored in separate collections.",
            "Manual references are commonly implemented using ObjectId values.",
            "MongoDB does not automatically fetch referenced documents.",
            "$lookup performs a left outer join in aggregation.",
            "One-to-one, one-to-many, and many-to-many relationships can be modeled using references.",
            "DBRef stores reference metadata but does not automatically fetch documents.",
            "MongoDB does not automatically enforce referential integrity.",
            "A unique index can enforce uniqueness on a reference field.",
            "Choose embedding or referencing based on data access patterns.",
          ].map((point, index) => (
            <div
              key={index}
              className="flex gap-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-3"
            >
              <span className="font-semibold text-[var(--primary-color)]">
                {index + 1}.
              </span>
              <p className="text-sm leading-6 text-[var(--text-secondary)]">
                {point}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Interview Questions */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">14. Interview Questions</h2>

        <div className="space-y-3">
          {[
            {
              q: "What is referencing in MongoDB?",
              a: "Referencing is a way to connect documents in different collections by storing the ID of one document inside another document.",
            },
            {
              q: "Why do we use referencing?",
              a: "We use referencing when related data is large, shared across documents, or needs to be managed independently.",
            },
            {
              q: "What is manual referencing?",
              a: "Manual referencing means storing another document's ID in a field and retrieving that document separately when needed.",
            },
            {
              q: "What is DBRef?",
              a: "DBRef is a BSON convention that stores a reference using collection information, an ID, and optionally a database name.",
            },
            {
              q: "Does MongoDB automatically fetch referenced documents?",
              a: "No. We must fetch them using separate queries or an aggregation pipeline with $lookup.",
            },
            {
              q: "What is $lookup?",
              a: "$lookup is an aggregation stage that performs a left outer join between collections.",
            },
            {
              q: "What are the four important fields of $lookup?",
              a: "from, localField, foreignField, and as.",
            },
            {
              q: "What is a one-to-many relationship?",
              a: "It is a relationship where one document is associated with multiple documents in another collection, such as one user having multiple orders.",
            },
            {
              q: "What is a many-to-many relationship?",
              a: "It is a relationship where multiple documents in one collection can be related to multiple documents in another collection, such as students and courses.",
            },
            {
              q: "What is the difference between embedding and referencing?",
              a: "Embedding stores related data inside the same document, while referencing stores related data separately and connects it using IDs.",
            },
            {
              q: "Does MongoDB provide automatic referential integrity?",
              a: "No. The application must handle consistency, such as checking references and managing related deletions.",
            },
            {
              q: "Can we use a unique index on a reference field?",
              a: "Yes. A unique index can ensure that a reference value appears only once, which is useful for enforcing one-to-one relationships.",
            },
          ].map((item, index) => (
            <details
              key={index}
              className="group rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 font-medium">
                <span>
                  <span className="mr-2 text-[var(--primary-color)]">
                    Q{index + 1}.
                  </span>
                  {item.q}
                </span>

                <span className="text-[var(--primary-color)] transition-transform group-open:rotate-180">
                  ↓
                </span>
              </summary>

              <div className="border-t border-[var(--border-color)] px-4 py-4 text-sm leading-7 text-[var(--text-secondary)]">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}