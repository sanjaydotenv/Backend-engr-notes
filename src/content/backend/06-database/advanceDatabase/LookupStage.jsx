import CodeBlock from "../../../../components/common/CodeBlock";

function LookupStage() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          MONGODB AGGREGATION / 06
        </p>
        <h1 className="mt-2 text-3xl font-bold">$lookup Stage</h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          The `$lookup` stage is used to join documents from another
          collection in the same database. It performs a left outer join
          and stores matching documents in an array.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. Basic Syntax</h2>
        <CodeBlock
          code={`{
  $lookup: {
    from: "collectionName",
    localField: "fieldName",
    foreignField: "fieldName",
    as: "result"
  }
}`}
        />
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li><code>from</code> – Collection to join.</li>
          <li><code>localField</code> – Field from the current collection.</li>
          <li><code>foreignField</code> – Matching field from the other collection.</li>
          <li><code>as</code> – Name of the output array field.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Example</h2>
        <p className="text-[var(--text-secondary)]">Users collection:</p>
        <CodeBlock
          code={`{
  _id: 1,
  name: "Mayur"
}`}
        />

        <p className="text-[var(--text-secondary)]">Orders collection:</p>
        <CodeBlock
          code={`{
  _id: 101,
  userId: 1,
  product: "Laptop"
}`}
        />

        <p className="text-[var(--text-secondary)]">
          Join orders with users:
        </p>
        <CodeBlock
          code={`db.users.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "userId",
      as: "userOrders"
    }
  }
]);`}
        />

        <p className="text-[var(--text-secondary)]">Output:</p>
        <CodeBlock
          code={`{
  _id: 1,
  name: "Mayur",
  userOrders: [
    {
      _id: 101,
      userId: 1,
      product: "Laptop"
    }
  ]
}`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Important Points</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>$lookup performs a left outer join.</li>
          <li>It joins collections from the same database.</li>
          <li>Matching documents are stored in an array.</li>
          <li>If no document matches, the result array is empty.</li>
          <li>Use `$unwind` after `$lookup` when you want to convert the joined array into separate documents.</li>
          <li>Indexing the foreign field can improve join performance.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Interview Questions</h2>
        <details className="rounded-lg border border-[var(--border-color)] p-3">
          <summary className="cursor-pointer font-medium">
            What is the use of $lookup?
          </summary>
          <p className="mt-2 text-[var(--text-secondary)]">
            It joins documents from another collection based on matching fields.
          </p>
        </details>

        <details className="rounded-lg border border-[var(--border-color)] p-3">
          <summary className="cursor-pointer font-medium">
            Which type of join does $lookup perform?
          </summary>
          <p className="mt-2 text-[var(--text-secondary)]">
            It performs a left outer join.
          </p>
        </details>

        <details className="rounded-lg border border-[var(--border-color)] p-3">
          <summary className="cursor-pointer font-medium">
            What is the purpose of the as field?
          </summary>
          <p className="mt-2 text-[var(--text-secondary)]">
            It specifies the name of the array field that stores matching documents.
          </p>
        </details>
      </section>
    </div>
  );
}

export default LookupStage;