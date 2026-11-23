import CodeBlock from "../../../components/common/CodeBlock";

export default function JobScheduling() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">

      <div>
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          BACKGROUND JOBS / 12
        </p>
        <h1 className="mt-2 text-3xl font-bold">Job Scheduling in Node.js</h1>
        <p className="mt-3 leading-7 text-[var(--text-secondary)]">
          Job Scheduling is the process of automatically executing
          background jobs at a specific time, after a delay, or
          according to a recurring schedule. It helps applications
          perform tasks without requiring manual execution.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What Is Job Scheduling?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Job Scheduling allows developers to define when a background
          task should execute.
        </p>
        <p className="leading-7 text-[var(--text-secondary)]">
          For example, an application can schedule a reminder email
          for tomorrow, generate a report every night, or delete
          expired data every week.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Types of Job Scheduling</h2>

        {[
          ["One-Time Jobs", "Execute a job once at a specific future time.", "Example: Send a birthday email."],
          ["Delayed Jobs", "Execute a job after a configured delay.", "Example: Send a reminder after 10 minutes."],
          ["Recurring Jobs", "Execute a job repeatedly according to a schedule.", "Example: Generate a daily report."],
          ["Cron-Based Jobs", "Execute jobs using cron expressions.", "Example: Run cleanup every midnight."]
        ].map(([title, description, example]) => (
          <div key={title} className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
            <h3 className="font-semibold text-[var(--accent-color)]">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{description}</p>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">{example}</p>
          </div>
        ))}
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. How Does Job Scheduling Work?</h2>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <div className="flex flex-col items-center gap-2 text-center text-sm">
            {[
              ["Schedule Created", "Define when the job should execute"],
              ["Scheduler", "Checks the scheduled time"],
              ["Queue", "Makes the job available for processing"],
              ["Worker", "Executes the job"],
              ["Result", "Job completes or fails"]
            ].map(([title, description], index) => (
              <div key={title} className="w-full">
                <div className="rounded-lg border border-[var(--border-color)] p-3">
                  <p className="font-semibold text-[var(--accent-color)]">{title}</p>
                  <p className="mt-1 text-[var(--text-secondary)]">{description}</p>
                </div>
                {index !== 4 && (
                  <div className="py-1 text-[var(--accent-color)]">↓</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Job Scheduling Using setTimeout()</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          JavaScript provides setTimeout() to execute a callback
          after a specified delay.
        </p>

        <CodeBlock code={`setTimeout(() => {
  console.log("Reminder sent!");
}, 5000);`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          This example executes the callback after approximately
          five seconds.
        </p>

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Important: setTimeout() is not a durable job scheduler.
          If the Node.js process stops, the scheduled callback is lost.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Delayed Jobs Using BullMQ</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          BullMQ allows us to schedule a job to become available
          after a specific delay.
        </p>

        <CodeBlock code={`import { Queue } from "bullmq";

const connection = {
  host: "127.0.0.1",
  port: 6379
};

const reminderQueue = new Queue("reminder-queue", {
  connection
});

await reminderQueue.add(
  "send-reminder",
  {
    email: "user@example.com",
    message: "Your subscription expires soon"
  },
  {
    delay: 60000
  }
);`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          The job becomes eligible for processing after approximately
          60 seconds. A worker must be running to process it.
        </p>

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Delay is not an exact execution guarantee. Worker availability,
          load and scheduling can cause additional waiting time.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Create a Worker for Scheduled Jobs</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          A worker processes the delayed job after it becomes available.
        </p>

        <CodeBlock code={`import { Worker } from "bullmq";

const worker = new Worker(
  "reminder-queue",
  async (job) => {
    console.log("Sending reminder to:", job.data.email);

    // Send reminder email here

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
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Recurring Jobs Using BullMQ</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Recurring jobs execute repeatedly according to a defined
          schedule. Recent BullMQ versions provide Job Schedulers
          through upsertJobScheduler().
        </p>

        <CodeBlock code={`import { Queue } from "bullmq";

const reportQueue = new Queue("report-queue", {
  connection: {
    host: "127.0.0.1",
    port: 6379
  }
});

await reportQueue.upsertJobScheduler(
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

        <p className="leading-7 text-[var(--text-secondary)]">
          This creates a recurring job scheduler using a cron
          expression. The expression represents midnight every day
          in the scheduler's configured timezone.
        </p>

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Job Schedulers are available in modern BullMQ versions.
          Check your installed version before using this API.
          Older tutorials may use the previous repeatable-job API.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Cron Expressions</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Cron expressions define when recurring jobs should execute.
          A standard five-field cron expression contains:
        </p>

        <CodeBlock code={`* * * * *
│ │ │ │ │
│ │ │ │ └── Day of week
│ │ │ └──── Month
│ │ └────── Day of month
│ └──────── Hour
└────────── Minute`} />

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[420px] text-left text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">Expression</th>
                <th className="p-3">Meaning</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              {[
                ["* * * * *", "Every minute"],
                ["0 * * * *", "Every hour"],
                ["0 0 * * *", "Every day at midnight"],
                ["0 9 * * *", "Every day at 9 AM"],
                ["0 0 * * 0", "Every Sunday at midnight"],
                ["0 0 1 * *", "First day of every month"]
              ].map(([expression, meaning]) => (
                <tr key={expression} className="border-t border-[var(--border-color)]">
                  <td className="p-3 font-mono text-[var(--accent-color)]">{expression}</td>
                  <td className="p-3">{meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Schedule a Job at a Specific Date and Time</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Sometimes we need to schedule a job for a particular
          future date rather than using a recurring cron expression.
          We can calculate the delay and add a delayed job.
        </p>

        <CodeBlock code={`const scheduledTime = new Date(
  "2026-12-01T10:00:00+05:30"
);

const delay = scheduledTime.getTime() - Date.now();

if (delay > 0) {
  await reminderQueue.add(
    "scheduled-reminder",
    {
      email: "user@example.com"
    },
    {
      delay
    }
  );
}`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Always validate the scheduled date. For long-term scheduling,
          consider persisting the schedule in your database and
          maintaining a recovery process if jobs are lost or need
          to be recreated.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Job Scheduling vs Cron Jobs</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[460px] text-left text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">Job Scheduling</th>
                <th className="p-3">Cron Jobs</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-t border-[var(--border-color)]">
                <td className="p-3">A broad scheduling concept.</td>
                <td className="p-3">A scheduling technique using cron expressions.</td>
              </tr>
              <tr className="border-t border-[var(--border-color)]">
                <td className="p-3">Supports one-time, delayed and recurring jobs.</td>
                <td className="p-3">Typically defines recurring execution times.</td>
              </tr>
              <tr className="border-t border-[var(--border-color)]">
                <td className="p-3">Can use BullMQ or other schedulers.</td>
                <td className="p-3">Can use node-cron or cron-based schedulers.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">11. Important Production Practices</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Use a persistent scheduler for important jobs.</li>
          <li>Store important schedules in a database.</li>
          <li>Configure the correct timezone.</li>
          <li>Validate scheduled dates and delays.</li>
          <li>Make recurring jobs idempotent.</li>
          <li>Monitor failed and delayed jobs.</li>
          <li>Use retries for temporary processing failures.</li>
          <li>Prevent duplicate scheduling when multiple API requests arrive.</li>
          <li>Keep Redis and workers available in production.</li>
          <li>Plan recovery for missed or recreated schedules.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">12. Important Things to Remember</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Job Scheduling controls when background jobs execute.</li>
          <li>One-time jobs execute once.</li>
          <li>Delayed jobs become eligible after a specified delay.</li>
          <li>Recurring jobs execute repeatedly.</li>
          <li>Cron expressions define recurring schedules.</li>
          <li>BullMQ supports delayed jobs and Job Schedulers.</li>
          <li>A worker is required to process queued jobs.</li>
          <li>Scheduled execution is not always exact to the millisecond.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">13. Interview Questions</h2>

        {[
          ["What is Job Scheduling?", "It is the process of executing background jobs at a specified time or according to a recurring schedule."],
          ["What are the types of scheduled jobs?", "One-time, delayed, recurring and cron-based jobs."],
          ["What is a delayed job?", "A job that becomes eligible for processing after a specified delay."],
          ["What is a recurring job?", "A job that executes repeatedly according to a defined schedule."],
          ["What is a cron expression?", "A string containing time fields that defines when a recurring task should execute."],
          ["What is upsertJobScheduler()?", "A BullMQ API used to create or update a recurring Job Scheduler."],
          ["What is the difference between Job Scheduling and Cron Jobs?", "Job Scheduling is a broader concept, while Cron Jobs use cron expressions for recurring execution."],
          ["Can setTimeout() replace a production job scheduler?", "No. Its timer is lost when the process stops and it does not provide durable job storage."],
          ["Does a delayed job execute at the exact scheduled time?", "Not necessarily. It becomes eligible after the delay and executes when a worker can process it."],
          ["Why is idempotency important for recurring jobs?", "It prevents duplicate business effects if a scheduled job runs more than once."]
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