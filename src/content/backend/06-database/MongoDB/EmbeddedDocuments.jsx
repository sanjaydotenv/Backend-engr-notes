import CodeBlock from "../../../../components/common/CodeBlock";

export default function EmbeddedDocuments() {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--primary-color)]">
          MONGODB / 16
        </p>

        <h1 className="text-3xl font-bold">Embedded Documents</h1>

        <p className="text-base leading-7 text-[var(--text-secondary)]">
          Embedded documents allow us to store one document inside another
          document. They help us represent related data together in a single
          MongoDB document.
        </p>
      </div>

      {/* 1. Introduction */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">1. What Are Embedded Documents?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          In MongoDB, a document can contain other documents as field values.
          These inner documents are called embedded documents or nested
          documents.
        </p>

        <CodeBlock
          code={`{
  _id: 1,
  name: "Mayur",
  age: 19,
  address: {
    city: "Bhopal",
    state: "Madhya Pradesh",
    pincode: 462001
  }
}`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Here, address is an embedded document inside the user document.
          It contains city, state, and pincode fields.
        </p>
      </section>

      {/* 2. Structure */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">2. Document Structure</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          An embedded document follows the same BSON document structure as a
          normal MongoDB document. It can contain strings, numbers, arrays,
          dates, and even other embedded documents.
        </p>

        <CodeBlock
          code={`{
  name: "Mayur",

  address: {
    city: "Bhopal",

    location: {
      area: "MP Nagar",
      pincode: 462001
    }
  },

  skills: ["JavaScript", "React", "Node.js"]
}`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-2">
          <p className="font-semibold">Important</p>
          <p className="text-sm leading-6 text-[var(--text-secondary)]">
            Embedded documents can also contain other embedded documents. This
            creates a nested document structure.
          </p>
        </div>
      </section>

      {/* 3. Real World Example */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">3. Real-World Example</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Consider an e-commerce application. A customer document can contain
          personal details and address information together.
        </p>

        <CodeBlock
          code={`{
  _id: 101,
  name: "Mayur",
  email: "mayur@example.com",

  address: {
    street: "MP Nagar",
    city: "Bhopal",
    state: "Madhya Pradesh"
  },

  preferences: {
    language: "English",
    notifications: true
  }
}`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Customer details, address, and preferences are stored together
          inside one document.
        </p>
      </section>

      {/* 4. Arrays of Embedded Documents */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">4. Arrays of Embedded Documents</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB also allows us to store multiple embedded documents inside
          an array. This is useful when one document contains multiple related
          records.
        </p>

        <CodeBlock
          code={`{
  _id: 101,
  name: "Mayur",

  orders: [
    {
      orderId: 1,
      product: "Laptop",
      price: 50000
    },
    {
      orderId: 2,
      product: "Keyboard",
      price: 1500
    }
  ]
}`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Here, orders is an array containing multiple embedded documents.
          Each order has its own orderId, product, and price.
        </p>
      </section>

      {/* 5. Creating Embedded Documents */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">5. Creating Embedded Documents</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          We can create embedded documents directly while inserting a document
          using <code>insertOne()</code>.
        </p>

        <CodeBlock
          code={`db.users.insertOne({
  name: "Mayur",
  age: 19,

  address: {
    city: "Bhopal",
    state: "Madhya Pradesh"
  }
})`}
        />

        <h3 className="font-medium">Insert Multiple Documents</h3>

        <CodeBlock
          code={`db.users.insertMany([
  {
    name: "Mayur",
    address: {
      city: "Bhopal"
    }
  },
  {
    name: "Rahul",
    address: {
      city: "Indore"
    }
  }
])`}
        />
      </section>

      {/* 6. Querying Embedded Documents */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">6. Querying Embedded Documents</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB provides two common ways to query embedded documents:
          dot notation and exact embedded document matching.
        </p>

        <h3 className="font-medium">6.1 Using Dot Notation</h3>

        <p className="text-sm text-[var(--text-secondary)]">
          Dot notation allows us to access individual fields inside an
          embedded document.
        </p>

        <CodeBlock
          code={`db.users.find({
  "address.city": "Bhopal"
})`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Returns users whose embedded address.city field is Bhopal.
        </p>

        <h3 className="font-medium">6.2 Matching the Entire Embedded Document</h3>

        <p className="text-sm text-[var(--text-secondary)]">
          We can also match an entire embedded document by providing the exact
          document value.
        </p>

        <CodeBlock
          code={`db.users.find({
  address: {
    city: "Bhopal",
    state: "Madhya Pradesh"
  }
})`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          This requires the embedded document to match the specified document
          exactly, including its fields and field order.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-2">
          <p className="font-semibold text-[var(--primary-color)]">
            Important Difference
          </p>
          <p className="text-sm leading-6 text-[var(--text-secondary)]">
            Dot notation checks a particular nested field. Exact embedded
            document matching checks the complete embedded document.
          </p>
        </div>
      </section>

      {/* 7. Querying Arrays of Embedded Documents */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">7. Querying Arrays of Embedded Documents</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          When an array contains embedded documents, we can use dot notation
          or <code>$elemMatch</code> to find matching records.
        </p>

        <h3 className="font-medium">7.1 Using Dot Notation</h3>

        <CodeBlock
          code={`db.users.find({
  "orders.product": "Laptop"
})`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Finds users whose orders array contains a document with product set
          to Laptop.
        </p>

        <h3 className="font-medium">7.2 Using $elemMatch</h3>

        <p className="text-sm text-[var(--text-secondary)]">
          Use <code>$elemMatch</code> when multiple conditions must match the
          same embedded array element.
        </p>

        <CodeBlock
          code={`db.users.find({
  orders: {
    $elemMatch: {
      product: "Laptop",
      price: { $gte: 40000 }
    }
  }
})`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Finds users who have at least one order where the product is Laptop
          and its price is at least 40000.
        </p>
      </section>

      {/* 8. Updating Embedded Documents */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">8. Updating Embedded Documents</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          We can update individual fields inside an embedded document using
          dot notation with update operators.
        </p>

        <h3 className="font-medium">8.1 Update a Nested Field</h3>

        <CodeBlock
          code={`db.users.updateOne(
  { name: "Mayur" },
  {
    $set: {
      "address.city": "Indore"
    }
  }
)`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Updates only the city field inside address.
        </p>

        <h3 className="font-medium">8.2 Add a Nested Field</h3>

        <CodeBlock
          code={`db.users.updateOne(
  { name: "Mayur" },
  {
    $set: {
      "address.pincode": 462001
    }
  }
)`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Creates pincode inside address if it does not already exist.
        </p>

        <h3 className="font-medium">8.3 Remove a Nested Field</h3>

        <CodeBlock
          code={`db.users.updateOne(
  { name: "Mayur" },
  {
    $unset: {
      "address.state": ""
    }
  }
)`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Removes the state field from the embedded address document.
        </p>
      </section>

      {/* 9. Updating Array Embedded Documents */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">9. Updating Arrays of Embedded Documents</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          We can update specific elements inside an array of embedded documents
          using positional operators.
        </p>

        <h3 className="font-medium">9.1 Using the $ Operator</h3>

        <p className="text-sm text-[var(--text-secondary)]">
          Updates the first array element that matches the query condition.
        </p>

        <CodeBlock
          code={`db.users.updateOne(
  {
    name: "Mayur",
    "orders.product": "Laptop"
  },
  {
    $set: {
      "orders.$.price": 45000
    }
  }
)`}
        />

        <h3 className="font-medium">9.2 Using $[identifier]</h3>

        <p className="text-sm text-[var(--text-secondary)]">
          Updates all array elements that match the specified array filter.
        </p>

        <CodeBlock
          code={`db.users.updateOne(
  { name: "Mayur" },
  {
    $set: {
      "orders.$[order].price": 45000
    }
  },
  {
    arrayFilters: [
      { "order.product": "Laptop" }
    ]
  }
)`}
        />
      </section>

      {/* 10. Advantages */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">10. Advantages of Embedded Documents</h2>

        <div className="space-y-3">
          {[
            "Related data can be stored together in one document.",
            "Frequently accessed related data can be retrieved in a single query.",
            "No separate collection lookup is required for embedded data.",
            "Updates to a single document are atomic.",
            "Useful for one-to-one and one-to-few relationships.",
            "Supports nested documents and arrays of documents.",
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
        <h2 className="text-xl font-semibold">11. Disadvantages of Embedded Documents</h2>

        <div className="space-y-3">
          {[
            "Large embedded documents can become difficult to manage.",
            "Frequently growing arrays can increase document size.",
            "Duplicated data may need to be updated in multiple documents.",
            "MongoDB documents have a maximum BSON size of 16 MB.",
            "Deeply nested structures can make queries and updates more complex.",
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

      {/* 12. When to Use */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">12. When Should We Use Embedded Documents?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Embedded documents are a good choice when related data is usually
          accessed together and has a manageable size.
        </p>

        <CodeBlock
          code={`// Good example: User with one address

{
  name: "Mayur",
  email: "mayur@example.com",
  address: {
    city: "Bhopal",
    state: "Madhya Pradesh"
  }
}

// Good example: Order with its items

{
  orderId: 101,
  customer: "Mayur",
  items: [
    { product: "Laptop", quantity: 1 },
    { product: "Mouse", quantity: 2 }
  ]
}`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          These examples keep closely related information together.
        </p>
      </section>

      {/* 13. Embedded vs Referencing */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">13. Embedded Documents vs Referencing</h2>

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
                ["Storage", "Inside the same document", "In separate documents"],
                ["Relationship", "Stores related data together", "Connects documents using references"],
                ["Querying", "Usually simpler for related data", "May require multiple queries or $lookup"],
                ["Document Size", "Can grow with embedded data", "Keeps documents separate"],
                ["Best For", "One-to-one or one-to-few", "Large or frequently shared relationships"],
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

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          Both approaches are useful. The correct choice depends on how data
          is accessed, updated, and related.
        </p>
      </section>

      {/* 14. Important Points */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">14. Important Points</h2>

        <div className="space-y-3">
          {[
            "An embedded document is a document stored inside another document.",
            "Embedded documents can contain nested documents and arrays.",
            "Dot notation is used to access nested fields.",
            "Exact embedded document matching checks the complete document, including field order.",
            "$elemMatch is useful for matching multiple conditions on the same array element.",
            "Dot notation with $set can update individual nested fields.",
            "Positional operators can update specific array elements.",
            "MongoDB documents have a maximum BSON size of 16 MB.",
            "Embedding is useful when related data is frequently accessed together.",
            "Referencing is often better for large or frequently shared relationships.",
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
        <h2 className="text-xl font-semibold">15. Interview Questions</h2>

        <div className="space-y-3">
          {[
            {
              q: "What are embedded documents in MongoDB?",
              a: "Embedded documents are documents stored inside another document as field values.",
            },
            {
              q: "What is the purpose of embedded documents?",
              a: "They allow related data to be stored together, making it easier to retrieve related information in a single query.",
            },
            {
              q: "How do you access nested fields in MongoDB?",
              a: "Use dot notation. For example, { 'address.city': 'Bhopal' }.",
            },
            {
              q: "What is the difference between dot notation and exact embedded document matching?",
              a: "Dot notation matches a specific nested field. Exact embedded document matching checks the complete embedded document, including its field order.",
            },
            {
              q: "Can we store arrays of embedded documents?",
              a: "Yes. MongoDB supports arrays containing multiple embedded documents, such as an orders array containing multiple order objects.",
            },
            {
              q: "What is $elemMatch used for?",
              a: "$elemMatch matches documents where at least one array element satisfies all specified conditions.",
            },
            {
              q: "How do you update a nested field?",
              a: "Use dot notation with an update operator, such as { $set: { 'address.city': 'Indore' } }.",
            },
            {
              q: "What is the maximum BSON document size in MongoDB?",
              a: "The maximum BSON document size is 16 MB.",
            },
            {
              q: "What are the disadvantages of embedded documents?",
              a: "Large embedded documents can become difficult to manage, increase document size, and may cause data duplication.",
            },
            {
              q: "When should we use embedded documents instead of referencing?",
              a: "Use embedding when related data is usually accessed together, has a manageable size, and belongs naturally inside one document.",
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