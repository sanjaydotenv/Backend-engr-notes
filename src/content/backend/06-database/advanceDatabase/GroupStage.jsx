import CodeBlock from "../../../../components/common/CodeBlock";

function GroupStage() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          MONGODB AGGREGATION / 03
        </p>
        <h1 className="mt-2 text-3xl font-bold">$group Stage</h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          The `$group` stage groups documents based on a specified field
          and performs calculations like sum, average, minimum, maximum
          and count.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. Basic Syntax</h2>
        <CodeBlock
          code={`{
  $group: {
    _id: "$fieldName",
    result: { $sum: "$amount" }
  }
}`}
        />
        <p className="text-sm text-[var(--text-secondary)]">
          `_id` defines the grouping key. Use <code>null</code> to group
          all documents together.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Example</h2>
        <p className="text-[var(--text-secondary)]">
          Suppose we have an orders collection:
        </p>
        <CodeBlock
          code={`[
  { user: "Mayur", amount: 500 },
  { user: "Rahul", amount: 300 },
  { user: "Mayur", amount: 200 }
]`}
        />

        <p className="text-[var(--text-secondary)]">
          Calculate total amount for each user:
        </p>
        <CodeBlock
          code={`db.orders.aggregate([
  {
    $group: {
      _id: "$user",
      totalAmount: { $sum: "$amount" }
    }
  }
]);`}
        />

        <p className="text-[var(--text-secondary)]">Output:</p>
        <CodeBlock
          code={`[
  { _id: "Mayur", totalAmount: 700 },
  { _id: "Rahul", totalAmount: 300 }
]`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Important Accumulators</h2>
        <CodeBlock
          code={`$sum       // Calculates total
$avg       // Calculates average
$min       // Finds minimum value
$max       // Finds maximum value
$first     // Returns first value
$last      // Returns last value
$push      // Creates an array (duplicates allowed)
$addToSet  // Creates an array of unique values`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Count Documents</h2>
        <p className="text-[var(--text-secondary)]">
          Use <code>$sum: 1</code> to count documents in each group.
        </p>
        <CodeBlock
          code={`db.orders.aggregate([
  {
    $group: {
      _id: "$user",
      totalOrders: { $sum: 1 }
    }
  }
]);`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Group All Documents</h2>
        <p className="text-[var(--text-secondary)]">
          Use <code>_id: null</code> when you want calculations on the
          entire collection.
        </p>
        <CodeBlock
          code={`db.orders.aggregate([
  {
    $group: {
      _id: null,
      totalSales: { $sum: "$amount" },
      averageSales: { $avg: "$amount" }
    }
  }
]);`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Important Points</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>`_id` defines how documents are grouped.</li>
          <li>`_id: null` groups all documents together.</li>
          <li>Accumulator operators perform calculations.</li>
          <li>`$push` allows duplicate values; `$addToSet` keeps unique values.</li>
          <li>Use `$sort` before `$group` when `$first` or `$last` needs a specific order.</li>
          <li>Output order is not guaranteed; use `$sort` after `$group` if needed.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Interview Questions</h2>
        <details className="rounded-lg border border-[var(--border-color)] p-3">
          <summary className="cursor-pointer font-medium">
            What is the use of $group?
          </summary>
          <p className="mt-2 text-[var(--text-secondary)]">
            It groups documents based on a key and performs calculations
            using accumulator operators.
          </p>
        </details>

        <details className="rounded-lg border border-[var(--border-color)] p-3">
          <summary className="cursor-pointer font-medium">
            What does _id: null mean?
          </summary>
          <p className="mt-2 text-[var(--text-secondary)]">
            It groups all input documents into a single group.
          </p>
        </details>

        <details className="rounded-lg border border-[var(--border-color)] p-3">
          <summary className="cursor-pointer font-medium">
            Difference between $push and $addToSet?
          </summary>
          <p className="mt-2 text-[var(--text-secondary)]">
            `$push` keeps duplicate values, while `$addToSet` keeps
            only unique values.
          </p>
        </details>
      </section>
    </div>
  );
}

export default GroupStage;