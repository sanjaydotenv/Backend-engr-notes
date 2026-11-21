import CodeBlock from "../../../../components/common/CodeBlock";

const AggregationPipeline = () => {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <div className="space-y-2">
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          MONGOOSE / 13
        </p>
        <h1 className="text-3xl font-bold">Mongoose Aggregation Pipeline</h1>
        <p className="text-base leading-7 text-[var(--text-secondary)]">
          Aggregation Pipeline is used to process documents through multiple
          stages to filter, group, calculate, transform, and analyze data in
          MongoDB.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          1. What is Aggregation Pipeline?
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Aggregation Pipeline processes documents through a sequence of stages.
          Each stage performs a specific operation and passes its output to the
          next stage.
        </p>

        <p className="font-semibold">Example: Orders Collection</p>

        <CodeBlock
          language="json"
          code={`[
  {
    "product": "Laptop",
    "price": 50000,
    "quantity": 2,
    "status": "completed"
  },
  {
    "product": "Mobile",
    "price": 20000,
    "quantity": 3,
    "status": "completed"
  },
  {
    "product": "Tablet",
    "price": 15000,
    "quantity": 1,
    "status": "pending"
  }
]`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          We can use aggregation to calculate total revenue, count orders, group
          products, and generate reports.
        </p>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. How Aggregation Works</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          An aggregation pipeline contains multiple stages. Each stage receives
          documents, performs an operation, and passes the resulting documents
          forward.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <div className="space-y-2 text-center text-sm font-medium">
            <div className="rounded-lg bg-[var(--bg-hover)] p-3">
              MongoDB Collection
            </div>
            <div className="text-[var(--accent-color)]">↓</div>
            <div className="rounded-lg bg-[var(--bg-hover)] p-3">
              $match — Filter Documents
            </div>
            <div className="text-[var(--accent-color)]">↓</div>
            <div className="rounded-lg bg-[var(--bg-hover)] p-3">
              $group — Group Documents
            </div>
            <div className="text-[var(--accent-color)]">↓</div>
            <div className="rounded-lg bg-[var(--bg-hover)] p-3">
              $sort — Sort Results
            </div>
            <div className="text-[var(--accent-color)]">↓</div>
            <div className="rounded-lg bg-[var(--bg-hover)] p-3">
              $project — Select Fields
            </div>
            <div className="text-[var(--accent-color)]">↓</div>
            <div className="rounded-lg border border-[var(--accent-color)] p-3 text-[var(--accent-color)]">
              Final Result
            </div>
          </div>
        </div>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          3. Creating an Aggregation Pipeline
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          In Mongoose, we use the aggregate() method to execute an aggregation
          pipeline.
        </p>

        <CodeBlock
          code={`const result = await Order.aggregate([
  {
    $match: {
      status: "completed",
    },
  },
]);`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          aggregate() accepts an array of stages. Every stage is an object
          containing an aggregation operator.
        </p>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. $match</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          $match filters documents based on specified conditions. It works
          similarly to find().
        </p>

        <CodeBlock
          code={`const orders = await Order.aggregate([
  {
    $match: {
      status: "completed",
    },
  },
]);`}
        />

        <p className="font-semibold">Using Comparison Operators:</p>

        <CodeBlock
          code={`const orders = await Order.aggregate([
  {
    $match: {
      price: { $gte: 1000 },
    },
  },
]);`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          This returns documents where price is greater than or equal to 1000.
        </p>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. $project</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          $project selects, excludes, renames, or creates fields in the output
          documents.
        </p>

        <CodeBlock
          code={`const result = await Order.aggregate([
  {
    $project: {
      product: 1,
      price: 1,
      _id: 0,
    },
  },
]);`}
        />

        <p className="font-semibold">Creating a Calculated Field:</p>

        <CodeBlock
          code={`const result = await Order.aggregate([
  {
    $project: {
      product: 1,
      totalPrice: {
        $multiply: ["$price", "$quantity"],
      },
    },
  },
]);`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          The $ sign before a field name refers to its value in the current
          document.
        </p>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. $group</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          $group combines documents based on a specified expression and allows
          us to perform calculations using accumulator operators.
        </p>

        <p className="font-semibold">Group Orders by Status:</p>

        <CodeBlock
          code={`const result = await Order.aggregate([
  {
    $group: {
      _id: "$status",
      totalOrders: {
        $sum: 1,
      },
    },
  },
]);`}
        />

        <p className="font-semibold">Example Output:</p>

        <CodeBlock
          language="json"
          code={`[
  {
    "_id": "completed",
    "totalOrders": 10
  },
  {
    "_id": "pending",
    "totalOrders": 5
  }
]`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          The _id field represents the grouping key. Here, documents are grouped
          according to their status.
        </p>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Accumulator Operators</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Accumulator operators perform calculations on grouped documents. They
          are commonly used inside $group.
        </p>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[450px] text-left text-sm">
            <thead className="bg-[var(--bg-card)]">
              <tr>
                <th className="p-3">Operator</th>
                <th className="p-3">Purpose</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr>
                <td className="p-3 font-medium">$sum</td>
                <td className="p-3">Calculates the sum.</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">$avg</td>
                <td className="p-3">Calculates the average.</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">$min</td>
                <td className="p-3">Finds the minimum value.</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">$max</td>
                <td className="p-3">Finds the maximum value.</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">$push</td>
                <td className="p-3">Collects values into an array.</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">$addToSet</td>
                <td className="p-3">Collects unique values into an array.</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">$first</td>
                <td className="p-3">Returns the first value in a group.</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">$last</td>
                <td className="p-3">Returns the last value in a group.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="font-semibold">Example:</p>

        <CodeBlock
          code={`const result = await Order.aggregate([
  {
    $group: {
      _id: "$status",
      totalRevenue: {
        $sum: {
          $multiply: ["$price", "$quantity"],
        },
      },
      averagePrice: {
        $avg: "$price",
      },
      highestPrice: {
        $max: "$price",
      },
    },
  },
]);`}
        />
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. $sort</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          $sort arranges documents in ascending or descending order.
        </p>

        <CodeBlock
          code={`const result = await Order.aggregate([
  {
    $sort: {
      price: -1,
    },
  },
]);`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          1 = Ascending, -1 = Descending.
        </p>
      </section>

      {/* 9 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. $limit and $skip</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          These stages are used to control how many documents are returned and
          which documents are skipped.
        </p>

        <CodeBlock
          code={`const result = await Order.aggregate([
  {
    $skip: 10,
  },
  {
    $limit: 5,
  },
]);`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          This skips the first 10 documents and returns the next 5.
        </p>
      </section>

      {/* 10 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. $unwind</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          $unwind deconstructs an array field and creates a separate output
          document for each array element.
        </p>

        <p className="font-semibold">Input:</p>

        <CodeBlock
          language="json"
          code={`{
  "_id": 1,
  "name": "Mayur",
  "skills": ["React", "Node.js", "MongoDB"]
}`}
        />

        <p className="font-semibold">Aggregation:</p>

        <CodeBlock
          code={`const result = await User.aggregate([
  {
    $unwind: "$skills",
  },
]);`}
        />

        <p className="font-semibold">Output:</p>

        <CodeBlock
          language="json"
          code={`[
  { "_id": 1, "name": "Mayur", "skills": "React" },
  { "_id": 1, "name": "Mayur", "skills": "Node.js" },
  { "_id": 1, "name": "Mayur", "skills": "MongoDB" }
]`}
        />
      </section>

      {/* 11 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">11. $lookup</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          $lookup performs a left outer join between collections. It retrieves
          matching documents from another collection.
        </p>

        <p className="font-semibold">Example: Users and Orders</p>

        <CodeBlock
          code={`const result = await User.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "userId",
      as: "orders",
    },
  },
]);`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">Here:</p>

        <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--text-secondary)]">
          <li>
            <strong>from:</strong> Collection to join.
          </li>
          <li>
            <strong>localField:</strong> Field from the current collection.
          </li>
          <li>
            <strong>foreignField:</strong> Matching field from the other
            collection.
          </li>
          <li>
            <strong>as:</strong> Name of the output array field.
          </li>
        </ul>

        <p className="text-sm text-[var(--text-secondary)]">
          Note: from expects the actual MongoDB collection name, not the
          Mongoose model name.
        </p>
      </section>

      {/* 12 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">12. $addFields</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          $addFields adds new fields to documents or replaces existing fields
          while preserving other fields.
        </p>

        <CodeBlock
          code={`const result = await Order.aggregate([
  {
    $addFields: {
      totalPrice: {
        $multiply: ["$price", "$quantity"],
      },
    },
  },
]);`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Unlike $project, $addFields keeps existing fields unless they are
          explicitly overwritten.
        </p>
      </section>

      {/* 13 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">13. $count</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          $count counts the documents entering that stage and returns the result
          in a field with the specified name.
        </p>

        <CodeBlock
          code={`const result = await Order.aggregate([
  {
    $match: {
      status: "completed",
    },
  },
  {
    $count: "totalOrders",
  },
]);`}
        />

        <p className="font-semibold">Output:</p>

        <CodeBlock
          language="json"
          code={`[
  {
    "totalOrders": 10
  }
]`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          If no documents reach $count, the result is an empty array.
        </p>
      </section>

      {/* 14 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          14. Complete Aggregation Example
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Let's calculate total revenue for completed orders, grouped by
          product.
        </p>

        <CodeBlock
          code={`const result = await Order.aggregate([
  // 1. Filter completed orders
  {
    $match: {
      status: "completed",
    },
  },

  // 2. Group orders by product
  {
    $group: {
      _id: "$product",

      totalQuantity: {
        $sum: "$quantity",
      },

      totalRevenue: {
        $sum: {
          $multiply: ["$price", "$quantity"],
        },
      },
    },
  },

  // 3. Sort by revenue
  {
    $sort: {
      totalRevenue: -1,
    },
  },

  // 4. Return only required fields
  {
    $project: {
      _id: 0,
      product: "$_id",
      totalQuantity: 1,
      totalRevenue: 1,
    },
  },
]);

console.log(result);`}
        />

        <p className="font-semibold">Pipeline Flow:</p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <div className="space-y-2 text-center text-sm font-medium">
            <div className="rounded-lg bg-[var(--bg-hover)] p-3">
              All Orders
            </div>
            <div className="text-[var(--accent-color)]">↓</div>
            <div className="rounded-lg bg-[var(--bg-hover)] p-3">
              $match — Completed Orders
            </div>
            <div className="text-[var(--accent-color)]">↓</div>
            <div className="rounded-lg bg-[var(--bg-hover)] p-3">
              $group — Group by Product
            </div>
            <div className="text-[var(--accent-color)]">↓</div>
            <div className="rounded-lg bg-[var(--bg-hover)] p-3">
              $sort — Highest Revenue First
            </div>
            <div className="text-[var(--accent-color)]">↓</div>
            <div className="rounded-lg bg-[var(--bg-hover)] p-3">
              $project — Format Output
            </div>
            <div className="text-[var(--accent-color)]">↓</div>
            <div className="rounded-lg border border-[var(--accent-color)] p-3 text-[var(--accent-color)]">
              Revenue Report
            </div>
          </div>
        </div>
      </section>

      {/* 15 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">15. Aggregate vs Find</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[440px] text-left text-sm">
            <thead className="bg-[var(--bg-card)]">
              <tr>
                <th className="p-3">find()</th>
                <th className="p-3">aggregate()</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr>
                <td className="p-3">Retrieves documents.</td>
                <td className="p-3">Processes documents through stages.</td>
              </tr>
              <tr>
                <td className="p-3">Supports basic filtering.</td>
                <td className="p-3">Supports complex data processing.</td>
              </tr>
              <tr>
                <td className="p-3">Returns Mongoose documents.</td>
                <td className="p-3">Returns plain JavaScript objects.</td>
              </tr>
              <tr>
                <td className="p-3">Supports populate().</td>
                <td className="p-3">Uses $lookup for joins.</td>
              </tr>
              <tr>
                <td className="p-3">Supports document methods.</td>
                <td className="p-3">Does not return hydrated documents.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 16 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">16. Important Rules</h2>

        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-[var(--text-secondary)]">
          <li>Use Model.aggregate() to create an aggregation pipeline.</li>
          <li>Every pipeline stage performs a specific operation.</li>
          <li>$match filters documents.</li>
          <li>$project selects or transforms fields.</li>
          <li>$group groups documents and performs calculations.</li>
          <li>$sort sorts documents.</li>
          <li>$unwind converts array elements into separate documents.</li>
          <li>$lookup joins data from another collection.</li>
          <li>
            Aggregation results are plain JavaScript objects, not hydrated
            Mongoose documents.
          </li>
          <li>
            Mongoose does not automatically cast aggregation pipeline values in
            the same way as normal queries. Use the correct BSON types, such as
            mongoose.Types.ObjectId.
          </li>
          <li>
            Place selective $match stages early when possible to reduce the
            number of documents processed.
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
            q: "What is Aggregation Pipeline in MongoDB?",
            a: "It is a framework that processes documents through multiple stages to filter, group, calculate, and transform data.",
          },
          {
            q: "How do you use Aggregation in Mongoose?",
            a: "We use Model.aggregate() and pass an array of pipeline stages.",
          },
          {
            q: "What is the purpose of $match?",
            a: "$match filters documents based on specified conditions.",
          },
          {
            q: "What is the difference between $project and $addFields?",
            a: "$project controls the output fields, while $addFields adds or replaces fields and keeps the other existing fields.",
          },
          {
            q: "What is $group?",
            a: "$group combines documents based on a grouping expression and supports calculations using accumulator operators.",
          },
          {
            q: "What is the purpose of $unwind?",
            a: "$unwind deconstructs an array and creates a separate document for each array element.",
          },
          {
            q: "What is $lookup?",
            a: "$lookup performs a left outer join with another collection and adds matching documents to an array field.",
          },
          {
            q: "What is the difference between $sum and $avg?",
            a: "$sum calculates the total, while $avg calculates the average.",
          },
          {
            q: "What is the difference between populate() and $lookup?",
            a: "populate() is a Mongoose feature that generally uses separate queries. $lookup is a MongoDB aggregation stage that joins collections within the aggregation pipeline.",
          },
          {
            q: "Does aggregation return Mongoose documents?",
            a: "No. Aggregation returns plain JavaScript objects, so document methods and normal document change tracking are not available.",
          },
          {
            q: "Why should $match be placed early in a pipeline?",
            a: "It reduces the number of documents passed to later stages, which can improve performance.",
          },
          {
            q: "Does Mongoose automatically cast aggregation values?",
            a: "No. Aggregation pipeline values are not automatically cast like normal Mongoose query filters. We should provide the correct types.",
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

export default AggregationPipeline;
