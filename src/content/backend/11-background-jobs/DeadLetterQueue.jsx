import CodeBlock from "../../../components/common/CodeBlock";

export default function DeadLetterQueue() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">

      <div>
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          BACKGROUND JOBS / 10
        </p>
        <h1 className="mt-2 text-3xl font-bold">Dead Letter Queue (DLQ)</h1>
        <p className="mt-3 leading-7 text-[var(--text-secondary)]">
          A Dead Letter Queue is a separate queue used to store messages
          or jobs that cannot be processed successfully after normal
          processing and retry attempts. It helps developers investigate
          failures without losing track of problematic jobs.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What Is a Dead Letter Queue?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          A Dead Letter Queue (DLQ) stores jobs or messages that have
          repeatedly failed or cannot be processed.
        </p>
        <p className="leading-7 text-[var(--text-secondary)]">
          For example, suppose an application sends welcome emails.
          If an email job fails after all configured retries, it can
          be moved to a DLQ for investigation or later reprocessing.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. How Does a Dead Letter Queue Work?</h2>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <div className="flex flex-col items-center gap-2 text-center text-sm">
            {[
              ["Producer", "Creates a job"],
              ["Main Queue", "Stores the job"],
              ["Worker", "Processes the job"],
              ["Retry Mechanism", "Retries failed attempts"],
              ["Dead Letter Queue", "Stores permanently failed jobs"],
              ["Investigation", "Developer checks and fixes the issue"]
            ].map(([title, description], index) => (
              <div key={title} className="w-full">
                <div className="rounded-lg border border-[var(--border-color)] p-3">
                  <p className="font-semibold text-[var(--accent-color)]">{title}</p>
                  <p className="mt-1 text-[var(--text-secondary)]">{description}</p>
                </div>
                {index !== 5 && (
                  <div className="py-1 text-[var(--accent-color)]">↓</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Why Do We Need a DLQ?</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Prevent problematic jobs from being forgotten.</li>
          <li>Keep failed jobs separate from normal processing.</li>
          <li>Investigate errors without blocking other jobs.</li>
          <li>Store failure information for debugging.</li>
          <li>Allow manual or automated reprocessing.</li>
          <li>Improve reliability in distributed systems.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Common Reasons for DLQ Messages</h2>

        {[
          ["Invalid Data", "The message contains missing, incorrect or invalid information."],
          ["Repeated Network Errors", "An external service remains unavailable after retries."],
          ["External API Failure", "A third-party API continuously returns errors."],
          ["Processing Errors", "The worker cannot complete the required operation."],
          ["Permanent Business Errors", "The operation cannot succeed because of business rules."]
        ].map(([title, description]) => (
          <div key={title} className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
            <h3 className="font-semibold">{title}</h3>
            <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">{description}</p>
          </div>
        ))}
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Retry Mechanism vs Dead Letter Queue</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">Retry Mechanism</th>
                <th className="p-3">Dead Letter Queue</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-t border-[var(--border-color)]">
                <td className="p-3">Attempts a failed job again.</td>
                <td className="p-3">Stores jobs that cannot be processed successfully.</td>
              </tr>
              <tr className="border-t border-[var(--border-color)]">
                <td className="p-3">Handles temporary failures.</td>
                <td className="p-3">Handles jobs requiring separate investigation.</td>
              </tr>
              <tr className="border-t border-[var(--border-color)]">
                <td className="p-3">Uses attempts and backoff.</td>
                <td className="p-3">Uses a separate queue or failure storage.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Create a Dead Letter Queue Using BullMQ</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          BullMQ does not automatically move every failed job into
          a separate DLQ. We can implement this behavior using a
          separate queue and a QueueEvents listener.
        </p>

        <p className="font-medium">Step 1: Create both queues</p>
        <CodeBlock code={`// queues/emailQueues.js

import { Queue } from "bullmq";

const connection = {
  host: "127.0.0.1",
  port: 6379
};

export const emailQueue = new Queue("email-queue", {
  connection
});

export const deadLetterQueue = new Queue("email-dlq", {
  connection
});`} />

        <p className="font-medium">Step 2: Add a job with retry options</p>
        <CodeBlock code={`import { emailQueue } from "./queues/emailQueues.js";

await emailQueue.add(
  "send-email",
  {
    email: "user@example.com",
    subject: "Welcome"
  },
  {
    attempts: 3,
    backoff: {
      type: "exponential",
      delay: 2000
    },
    removeOnFail: false
  }
);`} />

        <p className="font-medium">Step 3: Create a worker</p>
        <CodeBlock code={`// workers/emailWorker.js

import { Worker } from "bullmq";

const worker = new Worker(
  "email-queue",
  async (job) => {
    const { email, subject } = job.data;

    // Send email
    await sendEmail(email, subject);

    return {
      success: true
    };
  },
  {
    connection: {
      host: "127.0.0.1",
      port: 6379
    }
  }
);`} />

        <p className="font-medium">Step 4: Move exhausted jobs to DLQ</p>
        <CodeBlock code={`// events/emailQueueEvents.js

import { QueueEvents } from "bullmq";
import { emailQueue, deadLetterQueue } from "../queues/emailQueues.js";

const queueEvents = new QueueEvents("email-queue", {
  connection: {
    host: "127.0.0.1",
    port: 6379
  }
});

queueEvents.on("retries-exhausted", async ({ jobId }) => {
  const job = await emailQueue.getJob(jobId);

  if (!job) return;

  await deadLetterQueue.add(
    "failed-email",
    {
      originalJobId: job.id,
      originalName: job.name,
      originalData: job.data,
      failedReason: job.failedReason,
      attemptsMade: job.attemptsMade,
      failedAt: new Date().toISOString()
    },
    {
      jobId: \`dlq-\${job.id}\`
    }
  );
});`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          BullMQ emits the retries-exhausted event when a job has
          exhausted its configured attempts. The example copies
          its information into a separate queue for investigation.
          Keep the original failed job until the DLQ copy is safely
          stored and your retention policy allows cleanup.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Process DLQ Jobs</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          A separate worker can process failed jobs after developers
          investigate and decide that they are safe to retry.
        </p>

        <CodeBlock code={`// workers/dlqWorker.js

import { Worker } from "bullmq";

const dlqWorker = new Worker(
  "email-dlq",
  async (job) => {
    console.log("Failed job:", job.data.originalJobId);

    console.log("Reason:", job.data.failedReason);

    // Perform investigation or alert an administrator

    return {
      reviewed: true
    };
  },
  {
    connection: {
      host: "127.0.0.1",
      port: 6379
    }
  }
);`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          A DLQ worker does not have to retry the original operation.
          It can notify administrators, save failure details or
          initiate a controlled recovery workflow.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Reprocess a Failed Job</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          After fixing the underlying issue, a developer can
          manually move a failed job back into the main queue.
        </p>

        <CodeBlock code={`// Retry a retained failed job

const job = await emailQueue.getJob("123");

if (job) {
  await job.retry("failed");
}`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          This example retries a retained BullMQ job from its failed
          state. The job must exist and be in the appropriate state.
          For a job already copied into a separate DLQ, validate and
          re-enqueue its data into the original queue instead.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Important Production Practices</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Store the original job ID and failure reason.</li>
          <li>Keep failed job data secure and avoid unnecessary sensitive information.</li>
          <li>Set retention and cleanup policies.</li>
          <li>Notify administrators about important failures.</li>
          <li>Investigate the root cause before reprocessing.</li>
          <li>Make reprocessing idempotent.</li>
          <li>Use unique IDs or deduplication to avoid duplicate DLQ entries.</li>
          <li>Monitor DLQ size and age of failed messages.</li>
          <li>Use reliable transfer logic so a crash does not lose a failed job between queues.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Important Things to Remember</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>DLQ stands for Dead Letter Queue.</li>
          <li>It stores jobs or messages that cannot be processed successfully.</li>
          <li>It is commonly used after retry attempts are exhausted.</li>
          <li>BullMQ requires an explicit DLQ workflow.</li>
          <li>QueueEvents can detect exhausted retries.</li>
          <li>Failed jobs can be investigated and reprocessed.</li>
          <li>DLQ is useful for debugging and failure recovery.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">11. Interview Questions</h2>

        {[
          ["What is a Dead Letter Queue?", "A DLQ is a separate queue used to store messages or jobs that cannot be processed successfully."],
          ["Why do we need a DLQ?", "It helps isolate failed jobs, investigate errors and recover problematic messages."],
          ["When is a job moved to a DLQ?", "Usually after all configured retries are exhausted or when the application explicitly routes an unrecoverable message there."],
          ["Does BullMQ automatically create a DLQ?", "No. A separate queue and failure-handling workflow must be implemented."],
          ["What is the difference between Retry and DLQ?", "Retry attempts the operation again, while DLQ stores jobs that need separate investigation or recovery."],
          ["What information should a DLQ store?", "Original job ID, payload, failure reason, attempt count and failure timestamp."],
          ["Can DLQ jobs be processed again?", "Yes. After fixing the problem, jobs can be safely re-enqueued or retried."],
          ["What is retries-exhausted in BullMQ?", "It is a QueueEvents event emitted when a job has exhausted its configured retry attempts."],
          ["Why is idempotency important in DLQ processing?", "A job may be reprocessed, so idempotency prevents duplicate business operations."],
          ["How do you monitor a DLQ?", "Track its job count, failure reasons, message age and recovery status."]
        ].map(([question, answer], index) => (
          <details key={index} className="group rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
            <summary className="cursor-pointer font-medium">
              {index + 1}. {question}
            </summary>
            <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
              {answer}
            </p>
          </details>
        ))}
      </section>

    </div>
  );
}