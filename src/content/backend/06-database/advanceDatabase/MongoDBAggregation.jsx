import CodeBlock from "../../../../components/common/CodeBlock";

function MongoDBAggregation() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          MONGODB AGGREGATION / INTRODUCTION
        </p>
        <h1 className="mt-2 text-3xl font-bold">
          Aggregation Pipeline
        </h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          MongoDB Aggregation Pipeline is used to process documents and
          perform operations like filtering, grouping, sorting and
          calculating data.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What is Aggregation Pipeline?</h2>
        <p className="text-[var(--text-secondary)]">
          Aggregation Pipeline processes documents through multiple stages.
          Each stage performs a specific operation and passes its result
          to the next stage.
        </p>

        <CodeBlock
          code={`db.orders.aggregate([
  { $match: { status: "completed" } },
  { $group: { _id: "$userId", total: { $sum: "$amount" } } }
]);`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. How It Works</h2>
        <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] p-4 text-center space-y-2">
          <div className="font-medium">Collection</div>
          <div className="text-[var(--accent-color)]">↓</div>
          <div className="rounded-md bg-[var(--bg-hover)] p-3">$match Stage</div>
          <div className="text-[var(--accent-color)]">↓</div>
          <div className="rounded-md bg-[var(--bg-hover)] p-3">$group Stage</div>
          <div className="text-[var(--accent-color)]">↓</div>
          <div className="font-medium">Final Result</div>
        </div>
        <p className="text-sm text-[var(--text-secondary)]">
          Each stage receives the output of the previous stage and
          performs its operation.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Basic Syntax</h2>
        <CodeBlock
          code={`db.collection.aggregate([
  { stage1: { /* operation */ } },
  { stage2: { /* operation */ } },
  { stage3: { /* operation */ } }
]);`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Important Points</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>Aggregation processes documents in multiple stages.</li>
          <li>Every stage performs a specific operation.</li>
          <li>Stages execute in the order they are written.</li>
          <li>The output of one stage becomes the input of the next stage.</li>
          <li>Aggregation is useful for complex data analysis.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Interview Questions</h2>
        <details className="rounded-lg border border-[var(--border-color)] p-3">
          <summary className="cursor-pointer font-medium">
            What is Aggregation Pipeline?
          </summary>
          <p className="mt-2 text-[var(--text-secondary)]">
            It is a framework that processes documents through multiple
            stages to filter, transform and analyze data.
          </p>
        </details>

        <details className="rounded-lg border border-[var(--border-color)] p-3">
          <summary className="cursor-pointer font-medium">
            How does an Aggregation Pipeline work?
          </summary>
          <p className="mt-2 text-[var(--text-secondary)]">
            Each stage performs an operation and passes its output to
            the next stage.
          </p>
        </details>
      </section>
    </div>
  );
}

export default MongoDBAggregation;