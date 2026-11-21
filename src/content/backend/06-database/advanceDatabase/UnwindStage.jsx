import CodeBlock from "../../../../components/common/CodeBlock";

function UnwindStage() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          MONGODB AGGREGATION / 05
        </p>
        <h1 className="mt-2 text-3xl font-bold">$unwind Stage</h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          The `$unwind` stage is used to break an array field into
          multiple documents. Each output document contains one
          element from the original array.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. Example</h2>
        <p className="text-[var(--text-secondary)]">Original document:</p>
        <CodeBlock
          code={`{
  name: "Mayur",
  skills: ["JavaScript", "React", "Node.js"]
}`}
        />

        <p className="text-[var(--text-secondary)]">
          Apply `$unwind`:
        </p>
        <CodeBlock
          code={`db.users.aggregate([
  {
    $unwind: "$skills"
  }
]);`}
        />

        <p className="text-[var(--text-secondary)]">Output:</p>
        <CodeBlock
          code={`[
  { name: "Mayur", skills: "JavaScript" },
  { name: "Mayur", skills: "React" },
  { name: "Mayur", skills: "Node.js" }
]`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. preserveNullAndEmptyArrays</h2>
        <p className="text-[var(--text-secondary)]">
          By default, documents with missing, null or empty array fields
          are not included in the output. Set this option to
          <code> true </code> to preserve them.
        </p>
        <CodeBlock
          code={`db.users.aggregate([
  {
    $unwind: {
      path: "$skills",
      preserveNullAndEmptyArrays: true
    }
  }
]);`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. includeArrayIndex</h2>
        <p className="text-[var(--text-secondary)]">
          It adds a new field containing the original array element's index.
        </p>
        <CodeBlock
          code={`db.users.aggregate([
  {
    $unwind: {
      path: "$skills",
      includeArrayIndex: "skillIndex"
    }
  }
]);`}
        />
        <p className="text-sm text-[var(--text-secondary)]">
          The first array element gets index 0, the second gets index 1,
          and so on.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Important Points</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>Each array element produces a separate document.</li>
          <li>Other document fields are preserved.</li>
          <li>By default, missing, null and empty arrays produce no output.</li>
          <li><code>preserveNullAndEmptyArrays: true</code> keeps those documents.</li>
          <li>It is useful when filtering or grouping individual array elements.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Interview Questions</h2>
        <details className="rounded-lg border border-[var(--border-color)] p-3">
          <summary className="cursor-pointer font-medium">
            What is the use of $unwind?
          </summary>
          <p className="mt-2 text-[var(--text-secondary)]">
            It deconstructs an array field and creates a separate output
            document for each array element.
          </p>
        </details>

        <details className="rounded-lg border border-[var(--border-color)] p-3">
          <summary className="cursor-pointer font-medium">
            What does preserveNullAndEmptyArrays do?
          </summary>
          <p className="mt-2 text-[var(--text-secondary)]">
            It preserves documents whose array field is missing, null
            or empty.
          </p>
        </details>
      </section>
    </div>
  );
}

export default UnwindStage;