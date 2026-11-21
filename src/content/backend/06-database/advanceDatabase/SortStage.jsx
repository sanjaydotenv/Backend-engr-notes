import CodeBlock from "../../../../components/common/CodeBlock";

function SortStage() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          MONGODB AGGREGATION / 04
        </p>
        <h1 className="mt-2 text-3xl font-bold">$sort Stage</h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          The `$sort` stage is used to arrange documents in ascending or
          descending order based on one or more fields.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. Basic Syntax</h2>
        <CodeBlock
          code={`{
  $sort: {
    fieldName: 1
  }
}`}
        />
        <ul className="list-disc space-y-1 pl-5 text-[var(--text-secondary)]">
          <li>
            <code>1</code> = Ascending order (A-Z, 0-9).
          </li>
          <li>
            <code>-1</code> = Descending order (Z-A, 9-0).
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Example</h2>
        <p className="text-[var(--text-secondary)]">
          Sort users by age in ascending order:
        </p>
        <CodeBlock
          code={`db.users.aggregate([
  {
    $sort: { age: 1 }
  }
]);`}
        />

        <p className="text-[var(--text-secondary)]">
          Sort users by age in descending order:
        </p>
        <CodeBlock
          code={`db.users.aggregate([
  {
    $sort: { age: -1 }
  }
]);`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Sort by Multiple Fields</h2>
        <p className="text-[var(--text-secondary)]">
          You can sort using multiple fields. MongoDB applies the next field
          when the previous field has equal values.
        </p>
        <CodeBlock
          code={`db.users.aggregate([
  {
    $sort: {
      age: -1,
      name: 1
    }
  }
]);`}
        />
        <p className="text-sm text-[var(--text-secondary)]">
          First, age is sorted from highest to lowest. If ages are equal, names
          are sorted alphabetically.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Important Points</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>
            <code>1</code> means ascending order.
          </li>
          <li>
            <code>-1</code> means descending order.
          </li>
          <li>You can sort by multiple fields.</li>
          <li>Use `$sort` after `$group` to sort grouped results.</li>
          <li>
            For consistent pagination, include a unique field like `_id` as a
            tie-breaker.
          </li>
          <li>
            Indexes can help MongoDB perform sorting efficiently when the query
            and index are compatible.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Interview Questions</h2>
        <details className="rounded-lg border border-[var(--border-color)] p-3">
          <summary className="cursor-pointer font-medium">
            What is the use of $sort?
          </summary>
          <p className="mt-2 text-[var(--text-secondary)]">
            It sorts documents in ascending or descending order.
          </p>
        </details>

        <details className="rounded-lg border border-[var(--border-color)] p-3">
          <summary className="cursor-pointer font-medium">
            What is the difference between 1 and -1 in $sort?
          </summary>
          <p className="mt-2 text-[var(--text-secondary)]">
            1 represents ascending order, while -1 represents descending order.
          </p>
        </details>
      </section>
    </div>
  );
}

export default SortStage;
