import CodeBlock from "../../../components/common/CodeBlock";

export default function ScheduledTasks() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">

      <div>
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          BACKGROUND JOBS / 03
        </p>
        <h1 className="mt-2 text-3xl font-bold">Scheduled Tasks in Node.js</h1>
        <p className="mt-3 leading-7 text-[var(--text-secondary)]">
          Scheduled Tasks are operations configured to execute at a
          specific time, after a delay, or repeatedly at fixed intervals.
          They help automate tasks without requiring manual execution.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What Are Scheduled Tasks?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          A Scheduled Task is a task that runs automatically according
          to a predefined execution time or schedule.
        </p>
        <p className="leading-7 text-[var(--text-secondary)]">
          For example, an application can schedule a reminder email
          for tomorrow at 9 AM or automatically generate a report
          every Sunday.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Common Use Cases</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ["Reminder Emails", "Send reminders at a specific date and time."],
            ["Subscription Expiry", "Notify users before their subscriptions expire."],
            ["Report Generation", "Generate reports daily, weekly or monthly."],
            ["Database Cleanup", "Remove expired or unnecessary records."],
            ["Appointment Reminders", "Send automatic appointment notifications."],
            ["Scheduled Notifications", "Deliver notifications at a future time."]
          ].map(([title, description]) => (
            <div key={title} className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Types of Scheduled Tasks</h2>

        <h3 className="font-semibold">1. One-Time Scheduling</h3>
        <p className="leading-7 text-[var(--text-secondary)]">
          Executes a task only once at a specific future time.
        </p>
        <CodeBlock code={`// Example:
// Send an appointment reminder tomorrow at 9 AM.`} />

        <h3 className="font-semibold">2. Recurring Scheduling</h3>
        <p className="leading-7 text-[var(--text-secondary)]">
          Executes a task repeatedly according to a predefined schedule.
        </p>
        <CodeBlock code={`// Example:
// Generate a report every day at midnight.`} />

        <h3 className="font-semibold">3. Delayed Scheduling</h3>
        <p className="leading-7 text-[var(--text-secondary)]">
          Executes a task after a specified amount of time.
        </p>
        <CodeBlock code={`// Example:
// Send a reminder 30 minutes after booking.`} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. setTimeout() for Simple Scheduling</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Node.js provides setTimeout() to execute a callback after
          a specified delay.
        </p>

        <CodeBlock code={`setTimeout(() => {
  console.log("Scheduled task executed!");
}, 5000);`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          This callback runs after approximately five seconds.
          However, setTimeout() is not suitable for reliable production
          scheduling because the task is lost if the process stops.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Schedule One-Time Jobs with BullMQ</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          BullMQ is a Redis-based job queue library. It supports delayed
          jobs, which execute after a specified delay.
        </p>

        <h3 className="font-semibold">Install Packages</h3>
        <CodeBlock code={`npm install bullmq ioredis`} />

        <h3 className="font-semibold">Create a Queue</h3>
        <CodeBlock code={`// reminderQueue.js
import { Queue } from "bullmq";

const connection = {
  host: "127.0.0.1",
  port: 6379
};

export const reminderQueue = new Queue("reminders", {
  connection
});`} />

        <h3 className="font-semibold">Add a Delayed Job</h3>
        <CodeBlock code={`import { reminderQueue } from "./reminderQueue.js";

// Execute after 30 minutes
await reminderQueue.add(
  "send-reminder",
  {
    userId: "user123",
    message: "Your appointment is coming soon!"
  },
  {
    delay: 30 * 60 * 1000
  }
);`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          BullMQ stores the delayed job in Redis. A worker processes it
          after the delay has elapsed and the job becomes eligible to run.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Create a Worker</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          A Worker picks up scheduled jobs and performs the actual task.
        </p>

        <CodeBlock code={`// reminderWorker.js
import { Worker } from "bullmq";

const connection = {
  host: "127.0.0.1",
  port: 6379
};

const worker = new Worker(
  "reminders",
  async (job) => {
    if (job.name === "send-reminder") {
      const { userId, message } = job.data;

      console.log("Sending reminder to:", userId);
      console.log(message);

      // Send email or notification here
    }
  },
  { connection }
);

worker.on("completed", (job) => {
  console.log("Job completed:", job.id);
});

worker.on("failed", (job, error) => {
  console.error("Job failed:", job?.id, error.message);
});`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Run the worker as a separate Node.js process. The API server
          adds jobs to the queue, while the worker executes them.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Recurring Tasks with BullMQ</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          BullMQ supports recurring jobs using Job Schedulers.
          A scheduler can automatically create jobs at regular intervals.
        </p>

        <CodeBlock code={`import { Queue } from "bullmq";

const queue = new Queue("reports", {
  connection: {
    host: "127.0.0.1",
    port: 6379
  }
});

// Run a report every day
await queue.upsertJobScheduler(
  "daily-report",
  {
    pattern: "0 0 * * *"
  },
  {
    name: "generate-report",
    data: {
      type: "daily"
    },
    opts: {
      removeOnComplete: 100,
      removeOnFail: 500
    }
  }
);`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          This uses BullMQ's Job Scheduler API and a Cron pattern.
          It requires a compatible BullMQ version and a running Redis server.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Cron Jobs vs Scheduled Tasks</h2>
        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3 text-left">Cron Jobs</th>
                <th className="p-3 text-left">Scheduled Tasks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              <tr>
                <td className="p-3 text-[var(--text-secondary)]">Usually recurring schedules.</td>
                <td className="p-3 text-[var(--text-secondary)]">One-time, delayed or recurring execution.</td>
              </tr>
              <tr>
                <td className="p-3 text-[var(--text-secondary)]">Commonly uses Cron Expressions.</td>
                <td className="p-3 text-[var(--text-secondary)]">Can use delays, dates, intervals or Cron Expressions.</td>
              </tr>
              <tr>
                <td className="p-3 text-[var(--text-secondary)]">Often implemented using node-cron.</td>
                <td className="p-3 text-[var(--text-secondary)]">Can use BullMQ, Agenda or scheduling services.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Important Things to Remember</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Scheduled Tasks automate operations at predefined times.</li>
          <li>setTimeout() is useful for simple in-process delays.</li>
          <li>node-cron is useful for recurring Cron-based tasks.</li>
          <li>BullMQ supports delayed and recurring jobs using Redis.</li>
          <li>Workers execute jobs independently from API request handling.</li>
          <li>Persist scheduled jobs when they must survive server restarts.</li>
          <li>Use idempotency to prevent duplicate side effects.</li>
          <li>Handle failed jobs, retries and monitoring properly.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Interview Questions</h2>
        <div className="space-y-3">
          {[
            ["What are Scheduled Tasks?", "Tasks configured to execute automatically at a specific time, after a delay or repeatedly."],
            ["What is the difference between one-time and recurring scheduling?", "One-time scheduling executes a task once, while recurring scheduling executes it repeatedly according to a schedule."],
            ["What is a delayed job?", "A delayed job is a job that becomes eligible for processing after a specified amount of time."],
            ["How do you schedule a delayed job in BullMQ?", "Use queue.add() with the delay option specified in milliseconds."],
            ["What is a BullMQ Worker?", "A Worker processes jobs stored in a BullMQ queue."],
            ["What is a Job Scheduler in BullMQ?", "It is a mechanism for creating recurring jobs based on an interval or Cron pattern."],
            ["Why should we use Redis for scheduled jobs?", "Redis stores queue data and scheduling information so jobs can be processed by separate workers."],
            ["What happens when the server restarts?", "In-memory timers are lost, while persisted queue jobs can be processed after the service restarts."],
            ["How can duplicate scheduled tasks be prevented?", "Use stable scheduler identifiers, distributed coordination where needed, and idempotent job handlers."]
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