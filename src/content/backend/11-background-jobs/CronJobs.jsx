import CodeBlock from "../../../components/common/CodeBlock";

export default function CronJobs() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">

      <div>
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          BACKGROUND JOBS / 02
        </p>
        <h1 className="mt-2 text-3xl font-bold">Cron Jobs in Node.js</h1>
        <p className="mt-3 leading-7 text-[var(--text-secondary)]">
          Cron Jobs are scheduled tasks that automatically execute at
          specific times or recurring intervals. They are commonly used
          for database cleanup, scheduled emails, backups and reports.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What Are Cron Jobs?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          A Cron Job is a task that runs automatically according to a
          predefined schedule without requiring a user request.
        </p>
        <p className="leading-7 text-[var(--text-secondary)]">
          For example, if you want to delete expired OTP records every
          day at midnight, you can create a Cron Job for that task.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Common Use Cases</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ["Database Cleanup", "Delete expired OTPs and temporary records."],
            ["Email Scheduling", "Send daily or weekly email reports."],
            ["Database Backup", "Create automatic backups at scheduled times."],
            ["Subscription Management", "Check and update expired subscriptions."],
            ["Report Generation", "Generate daily, weekly or monthly reports."],
            ["Data Synchronization", "Synchronize data between services."]
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
        <h2 className="text-xl font-semibold">3. Cron Expression</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          A Cron Expression defines when a scheduled task should run.
          The traditional five-field format contains minute, hour,
          day of month, month and day of week.
        </p>

        <CodeBlock code={`* * * * *
| | | | |
| | | | └── Day of week (0 - 7)
| | | └──── Month (1 - 12)
| | └────── Day of month (1 - 31)
| └──────── Hour (0 - 23)
└────────── Minute (0 - 59)`} />

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3 text-left">Expression</th>
                <th className="p-3 text-left">Meaning</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              {[
                ["* * * * *", "Every minute"],
                ["0 * * * *", "Every hour"],
                ["0 0 * * *", "Every day at midnight"],
                ["0 9 * * *", "Every day at 9 AM"],
                ["0 0 * * 0", "Every Sunday at midnight"],
                ["0 0 1 * *", "First day of every month at midnight"],
                ["*/5 * * * *", "Every 5 minutes"]
              ].map(([expression, meaning]) => (
                <tr key={expression}>
                  <td className="p-3 font-mono text-[var(--accent-color)]">{expression}</td>
                  <td className="p-3 text-[var(--text-secondary)]">{meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Note: Some scheduling libraries support additional fields,
          such as seconds. Always check the expression format supported
          by your selected library.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Install node-cron</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          In Node.js, we can use the <code>node-cron</code> package
          to schedule recurring tasks.
        </p>
        <CodeBlock code={`npm install node-cron`} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Create Your First Cron Job</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Let's create a task that runs every minute.
        </p>

        <CodeBlock code={`import cron from "node-cron";

cron.schedule("* * * * *", () => {
  console.log("Cron Job executed!");
});`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          The callback executes automatically every minute while
          the Node.js process is running.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Schedule Tasks with Different Times</h2>

        <h3 className="font-semibold">Daily Task</h3>
        <CodeBlock code={`// Runs every day at midnight
cron.schedule("0 0 * * *", () => {
  console.log("Daily task executed");
});`} />

        <h3 className="font-semibold">Weekly Task</h3>
        <CodeBlock code={`// Runs every Sunday at 9 AM
cron.schedule("0 9 * * 0", () => {
  console.log("Weekly report generated");
});`} />

        <h3 className="font-semibold">Every Five Minutes</h3>
        <CodeBlock code={`cron.schedule("*/5 * * * *", () => {
  console.log("Task executed every 5 minutes");
});`} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Cron Job with MongoDB</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Suppose your application stores OTP records in MongoDB.
          You can automatically delete expired OTP records every day.
        </p>

        <CodeBlock code={`import cron from "node-cron";
import OTP from "./models/OTP.js";

cron.schedule("0 0 * * *", async () => {
  try {
    const result = await OTP.deleteMany({
      expiresAt: { $lte: new Date() }
    });

    console.log("Expired OTPs deleted:", result.deletedCount);

  } catch (error) {
    console.error("OTP cleanup failed:", error);
  }
}, {
  timezone: "Asia/Kolkata"
});`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          This task runs every day at midnight in Indian Standard Time.
          For OTP expiration, database TTL indexes are often a better
          automatic cleanup option; Cron Jobs are useful for more
          complex scheduled operations.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Timezone in Cron Jobs</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Cron Jobs depend on timezones. A task scheduled for 9 AM may
          execute at a different local time if the server uses another
          timezone.
        </p>

        <CodeBlock code={`cron.schedule("0 9 * * *", () => {
  console.log("Good morning!");
}, {
  timezone: "Asia/Kolkata"
});`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Use an explicit timezone when a task must run according to
          a particular region's local time.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Important Things to Remember</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Cron Jobs execute tasks according to a predefined schedule.</li>
          <li>They do not require a user request to execute.</li>
          <li>node-cron is a popular scheduling package for Node.js.</li>
          <li>The five-field Cron Expression defines the execution schedule.</li>
          <li>The Node.js process must be running for an in-process Cron Job to execute.</li>
          <li>Multiple server instances can execute the same Cron Job multiple times unless execution is coordinated.</li>
          <li>Use distributed locks or a dedicated scheduler for coordinated production execution.</li>
          <li>Handle errors and monitor scheduled tasks.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Interview Questions</h2>
        <div className="space-y-3">
          {[
            ["What are Cron Jobs?", "Cron Jobs are scheduled tasks that automatically execute at predefined times or recurring intervals."],
            ["Why do we use Cron Jobs?", "They automate repetitive tasks such as database cleanup, backups, reports and scheduled emails."],
            ["What is a Cron Expression?", "It is a time-based expression that defines when a scheduled task should execute."],
            ["What does * * * * * mean?", "It means the task runs every minute in the traditional five-field Cron format."],
            ["What is node-cron?", "node-cron is a Node.js package used to schedule and execute recurring tasks."],
            ["What happens if the Node.js server stops?", "An in-process Cron Job cannot execute while its Node.js process is stopped."],
            ["How do you set a timezone in node-cron?", "Pass a timezone option, such as timezone: 'Asia/Kolkata', to cron.schedule()."],
            ["What is the difference between Cron Jobs and Background Jobs?", "Cron Jobs define when tasks should run, while Background Jobs describe tasks executed separately from the main request-response flow."],
            ["Can Cron Jobs run twice in multiple server instances?", "Yes. Each instance may run its own scheduled task. Use distributed coordination or a dedicated scheduler to prevent duplicate execution."]
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