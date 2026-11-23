import CodeBlock from "../../../components/common/CodeBlock";

export default function JobQueues() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">

      <div>
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          BACKGROUND JOBS / 04
        </p>
        <h1 className="mt-2 text-3xl font-bold">Job Queues in Node.js</h1>
        <p className="mt-3 leading-7 text-[var(--text-secondary)]">
          A Job Queue is a system that stores tasks until they are ready
          to be processed by background workers. It helps applications
          handle time-consuming operations without blocking API responses.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What Is a Job Queue?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          A Job Queue is a place where background tasks are stored
          before execution. Instead of processing every task immediately,
          the application adds jobs to a queue and workers process them.
        </p>
        <p className="leading-7 text-[var(--text-secondary)]">
          For example, when 1,000 users register at the same time,
          the application can add 1,000 welcome-email jobs to a queue.
          Workers process those jobs in the background.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. How Does a Job Queue Work?</h2>
        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <div className="flex flex-col items-center gap-2 text-center text-sm">
            {[
              ["Producer", "Creates and adds jobs"],
              ["Job Queue", "Stores pending jobs"],
              ["Worker", "Fetches and processes jobs"],
              ["Result", "Completed or failed"]
            ].map(([title, description], index) => (
              <div key={title} className="w-full">
                <div className="rounded-lg border border-[var(--border-color)] p-3">
                  <p className="font-semibold text-[var(--accent-color)]">{title}</p>
                  <p className="mt-1 text-[var(--text-secondary)]">{description}</p>
                </div>
                {index !== 3 && (
                  <div className="py-1 text-[var(--accent-color)]">↓</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Main Components of a Job Queue</h2>

        <div className="space-y-3">
          {[
            ["1. Producer", "The producer creates jobs and adds them to the queue. Usually, an API server acts as the producer."],
            ["2. Queue", "The queue stores jobs until workers are ready to process them."],
            ["3. Worker", "The worker retrieves jobs from the queue and executes the required task."],
            ["4. Job Status", "Tracks whether a job is waiting, active, completed, delayed or failed."]
          ].map(([title, description]) => (
            <div key={title} className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Why Do We Need Job Queues?</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Process time-consuming tasks in the background.</li>
          <li>Handle a large number of tasks efficiently.</li>
          <li>Control how many jobs run simultaneously.</li>
          <li>Retry jobs when temporary failures occur.</li>
          <li>Schedule and delay jobs.</li>
          <li>Separate API servers from background workers.</li>
          <li>Track completed and failed jobs.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Install BullMQ and Redis Client</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          BullMQ is a popular Node.js job queue library that uses Redis
          to store and manage jobs.
        </p>
        <CodeBlock code={`npm install bullmq ioredis`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          Redis must also be running and accessible to your Node.js
          application.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Create a Job Queue</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          First, create a queue that stores email jobs.
        </p>

        <CodeBlock code={`// queues/emailQueue.js
import { Queue } from "bullmq";

export const emailQueue = new Queue("email-queue", {
  connection: {
    host: "127.0.0.1",
    port: 6379
  }
});`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          The queue is connected to Redis. Jobs added to this queue
          are stored and can be processed by separate workers.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Add Jobs to the Queue (Producer)</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Whenever a user registers, the API can add a welcome-email
          job instead of sending the email directly.
        </p>

        <CodeBlock code={`import { emailQueue } from "./queues/emailQueue.js";

export const registerUser = async (req, res) => {
  // Create user in database
  const user = await User.create(req.body);

  // Add email job to queue
  await emailQueue.add("welcome-email", {
    email: user.email,
    name: user.name
  });

  res.status(201).json({
    success: true,
    message: "Registration successful"
  });
};`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          The API adds the job to Redis and returns a response.
          The email is processed separately by a worker.
          In production, ensure the job is reliably enqueued when
          the database operation succeeds, for example by using an
          outbox pattern when stronger consistency is required.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Process Jobs Using a Worker</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          A worker listens to the queue and processes jobs as they
          become available.
        </p>

        <CodeBlock code={`// workers/emailWorker.js
import { Worker } from "bullmq";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

const worker = new Worker(
  "email-queue",
  async (job) => {
    if (job.name === "welcome-email") {
      const { email, name } = job.data;

      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: email,
        subject: "Welcome!",
        text: \`Hello \${name}, welcome to our application!\`
      });
    }
  },
  {
    connection: {
      host: "127.0.0.1",
      port: 6379
    },
    concurrency: 5
  }
);

worker.on("completed", (job) => {
  console.log("Job completed:", job.id);
});

worker.on("failed", (job, error) => {
  console.error("Job failed:", job?.id, error.message);
});`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Here, concurrency: 5 means this worker can process up to
          five jobs simultaneously. It does not mean five separate
          worker processes are created.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Job States</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          A job moves through different states during its lifecycle.
        </p>

        <div className="space-y-2">
          {[
            ["Waiting", "The job is waiting to be processed."],
            ["Active", "A worker is currently processing the job."],
            ["Completed", "The job has finished successfully."],
            ["Failed", "The job could not be processed successfully."],
            ["Delayed", "The job is scheduled to become available later."]
          ].map(([title, description]) => (
            <div key={title} className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-3">
              <h3 className="font-semibold text-[var(--accent-color)]">{title}</h3>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Add Job Options</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          BullMQ supports options that control how jobs behave.
        </p>

        <CodeBlock code={`await emailQueue.add(
  "welcome-email",
  {
    email: "user@example.com",
    name: "Mayur"
  },
  {
    attempts: 3,
    backoff: {
      type: "exponential",
      delay: 2000
    },
    removeOnComplete: 100,
    removeOnFail: 500
  }
);`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          This job can be attempted up to three times. Exponential
          backoff increases the delay between retries. Completed and
          failed job records are retained according to the configured
          cleanup options.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">11. Important Things to Remember</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Producer adds jobs to a queue.</li>
          <li>Queue stores jobs until workers process them.</li>
          <li>Workers execute background tasks.</li>
          <li>BullMQ uses Redis to manage queue data.</li>
          <li>Concurrency controls how many jobs a worker processes at once.</li>
          <li>Retries help recover from temporary failures.</li>
          <li>Job handlers should be idempotent to handle repeated execution safely.</li>
          <li>Use graceful shutdown to let active jobs finish safely.</li>
          <li>Monitor queue health and failed jobs in production.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">12. Interview Questions</h2>
        <div className="space-y-3">
          {[
            ["What is a Job Queue?", "A Job Queue stores background tasks until workers are ready to process them."],
            ["What is a Producer?", "A Producer creates jobs and adds them to a queue."],
            ["What is a Worker?", "A Worker retrieves jobs from a queue and executes their processing logic."],
            ["Why is Redis used with BullMQ?", "Redis stores and manages job queue data, allowing workers to process jobs independently."],
            ["What is Job Concurrency?", "Concurrency defines how many jobs a worker can process simultaneously."],
            ["What are Job States?", "Common BullMQ job states include waiting, active, completed, failed and delayed."],
            ["What is the difference between a Queue and a Worker?", "A Queue stores and manages jobs, while a Worker processes them."],
            ["What happens if a job fails?", "The job can be retried according to its retry configuration and eventually remain in the failed state."],
            ["Why should jobs be idempotent?", "A job may execute more than once, so idempotency prevents duplicate or unintended effects."],
            ["Can workers run on separate servers?", "Yes. Multiple workers can connect to the same Redis-backed queue and process jobs."]
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
        </div>
      </section>

    </div>
  );
}