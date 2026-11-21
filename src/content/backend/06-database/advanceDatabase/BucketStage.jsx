import CodeBlock from "../../../../components/common/CodeBlock";

function BucketStage() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          MONGODB AGGREGATION / 08
        </p>
        <h1 className="mt-2 text-3xl font-bold">$bucket Stage</h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          The `$bucket` stage groups documents into fixed ranges based
          on a specified field. Each range is defined using boundaries.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. Basic Syntax</h2>
        <CodeBlock
          code={`{
  $bucket: {
    groupBy: "$fieldName",
    boundaries: [0, 100, 200, 300],
    default: "Other",
    output: {
      count: { $sum: 1 }
    }
  }
}`}
        />
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li><code>groupBy</code> – Field used for grouping.</li>
          <li><code>boundaries</code> – Defines the bucket ranges.</li>
          <li><code>default</code> – Optional bucket for values outside all ranges.</li>
          <li><code>output</code> – Calculates values for each bucket.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Example</h2>
        <p className="text-[var(--text-secondary)]">
          Group students by marks:
        </p>
        <CodeBlock
          code={`db.students.aggregate([
  {
    $bucket: {
      groupBy: "$marks",
      boundaries: [0, 40, 70, 100],
      default: "Other",
      output: {
        totalStudents: { $sum: 1 },
        averageMarks: { $avg: "$marks" }
      }
    }
  }
]);`}
        />
        <p className="text-[var(--text-secondary)]">Possible output:</p>
        <CodeBlock
          code={`[
  {
    _id: 0,
    totalStudents: 5,
    averageMarks: 25
  },
  {
    _id: 40,
    totalStudents: 10,
    averageMarks: 55
  },
  {
    _id: 70,
    totalStudents: 8,
    averageMarks: 85
  }
]`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. How Boundaries Work</h2>
        <CodeBlock
          code={`boundaries: [0, 40, 70, 100]

// 0  to less than 40
// 40 to less than 70
// 70 to less than 100`}
        />
        <p className="text-sm text-[var(--text-secondary)]">
          The lower boundary is included, but the upper boundary is
          excluded. The final boundary is also excluded.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Important Points</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>Used to group documents into fixed ranges.</li>
          <li>Boundaries must be in ascending order.</li>
          <li>At least two boundaries are required.</li>
          <li>Lower boundary is inclusive; upper boundary is exclusive.</li>
          <li>Values outside the ranges cause an error unless a `default` bucket is provided.</li>
          <li>Each bucket's `_id` contains its lower boundary.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Interview Questions</h2>
        <details className="rounded-lg border border-[var(--border-color)] p-3">
          <summary className="cursor-pointer font-medium">
            What is the use of $bucket?
          </summary>
          <p className="mt-2 text-[var(--text-secondary)]">
            It groups documents into fixed ranges using specified boundaries.
          </p>
        </details>

        <details className="rounded-lg border border-[var(--border-color)] p-3">
          <summary className="cursor-pointer font-medium">
            What is the purpose of default in $bucket?
          </summary>
          <p className="mt-2 text-[var(--text-secondary)]">
            It groups documents whose values do not belong to any
            defined bucket range.
          </p>
        </details>
      </section>
    </div>
  );
}

export default BucketStage;