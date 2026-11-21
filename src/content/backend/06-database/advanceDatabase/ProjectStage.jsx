import CodeBlock from "../../../../components/common/CodeBlock";

function ProjectStage() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          MONGODB AGGREGATION / 02
        </p>
        <h1 className="mt-2 text-3xl font-bold">$project Stage</h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          The `$project` stage is used to select specific fields, hide
          unnecessary fields, and create calculated fields in documents.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. Basic Syntax</h2>
        <CodeBlock
          code={`{
  $project: {
    fieldName: 1,  // Include field
    anotherField: 0 // Exclude field
  }
}`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Example</h2>
        <p className="text-[var(--text-secondary)]">
          Suppose we have these documents in the users collection:
        </p>
        <CodeBlock
          code={`{
  _id: 1,
  name: "Mayur",
  age: 20,
  password: "12345"
}`}
        />

        <p className="text-[var(--text-secondary)]">
          Include only name and age:
        </p>
        <CodeBlock
          code={`db.users.aggregate([
  {
    $project: {
      name: 1,
      age: 1
    }
  }
]);`}
        />

        <p className="text-[var(--text-secondary)]">Output:</p>
        <CodeBlock
          code={`{
  _id: 1,
  name: "Mayur",
  age: 20
}`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Exclude Fields</h2>
        <p className="text-[var(--text-secondary)]">
          Use <code>0</code> to exclude a field. By default, `_id` is
          included, so you can hide it explicitly.
        </p>
        <CodeBlock
          code={`db.users.aggregate([
  {
    $project: {
      password: 0,
      _id: 0
    }
  }
]);`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Create Calculated Fields</h2>
        <p className="text-[var(--text-secondary)]">
          `$project` can also create new fields using expressions.
        </p>
        <CodeBlock
          code={`db.products.aggregate([
  {
    $project: {
      name: 1,
      price: 1,
      totalPrice: { $multiply: ["$price", 2] }
    }
  }
]);`}
        />
        <p className="text-sm text-[var(--text-secondary)]">
          Here, `totalPrice` is calculated by multiplying price by 2.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Important Points</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li><code>1</code> means include a field.</li>
          <li><code>0</code> means exclude a field.</li>
          <li>`_id` is included by default.</li>
          <li>You can create new calculated fields.</li>
          <li>You generally cannot mix inclusion and exclusion in the same projection, except for excluding `_id`.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Interview Questions</h2>
        <details className="rounded-lg border border-[var(--border-color)] p-3">
          <summary className="cursor-pointer font-medium">
            What is the use of $project?
          </summary>
          <p className="mt-2 text-[var(--text-secondary)]">
            It selects, excludes, renames or calculates fields in
            aggregation output.
          </p>
        </details>
        <details className="rounded-lg border border-[var(--border-color)] p-3">
          <summary className="cursor-pointer font-medium">
            Is _id included by default in $project?
          </summary>
          <p className="mt-2 text-[var(--text-secondary)]">
            Yes. You must explicitly set `_id: 0` to exclude it.
          </p>
        </details>
      </section>
    </div>
  );
}

export default ProjectStage;