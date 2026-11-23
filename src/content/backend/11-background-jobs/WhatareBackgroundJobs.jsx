import CodeBlock from "../../../components/common/CodeBlock";

export default function WhatareBackgroundJobs() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">

      <div>
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          BACKGROUND JOBS / 01
        </p>
        <h1 className="mt-2 text-3xl font-bold">What Are Background Jobs?</h1>
        <p className="mt-3 leading-7 text-[var(--text-secondary)]">
          Background Jobs are tasks that run separately from the main
          request-response cycle. They allow applications to perform
          time-consuming or scheduled operations without making users
          wait for the task to finish.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What Are Background Jobs?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Normally, when a user sends a request, the server processes
          it and sends a response.
        </p>
        <p className="leading-7 text-[var(--text-secondary)]">
          But some tasks take a long time, such as sending emails,
          generating reports, processing images or sending notifications.
          Instead of executing these tasks during the request, we can
          move them to background workers.
        </p>
        <p className="leading-7 text-[var(--text-secondary)]">
          These separate tasks are called Background Jobs.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Why Do We Need Background Jobs?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Consider a user registering on your application. After
          registration, the server needs to:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Create the user account.</li>
          <li>Send a welcome email.</li>
          <li>Generate a welcome PDF.</li>
          <li>Send a notification.</li>
        </ul>
        <p className="leading-7 text-[var(--text-secondary)]">
          If the server performs every task before responding, the user
          may have to wait several seconds. Background Jobs allow the
          server to respond quickly while other tasks run separately.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Normal Processing vs Background Processing</h2>

        <h3 className="font-semibold">Normal Processing</h3>
        <CodeBlock code={`User Request
     |
     v
Express Server
     |
     v
Create Account
     |
     v
Send Email
     |
     v
Generate Report
     |
     v
Send Response to User`} />

        <p className="text-sm text-[var(--text-secondary)]">
          The user waits until all operations finish.
        </p>

        <h3 className="font-semibold">Background Processing</h3>
        <CodeBlock code={`User Request
     |
     v
Express Server
     |
     +------> Save User
     |             |
     |             v
     |         Send Response
     |
     v
Add Job to Queue
     |
     v
Background Worker
     |
     +------> Send Email
     |
     +------> Generate Report
     |
     +------> Send Notification`} />

        <p className="text-sm text-[var(--text-secondary)]">
          The server responds without waiting for background tasks
          to complete.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Common Use Cases</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ["Email Sending", "Send welcome emails, OTPs and password reset emails."],
            ["Image Processing", "Resize, compress and optimize uploaded images."],
            ["Report Generation", "Generate PDF and Excel reports."],
            ["Notifications", "Send notifications to users."],
            ["Data Processing", "Process large amounts of data."],
            ["Scheduled Tasks", "Execute tasks at specific times."],
            ["Video Processing", "Convert and process uploaded videos."],
            ["Payment Processing", "Perform follow-up operations after payment events."]
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
        <h2 className="text-xl font-semibold">5. How Do Background Jobs Work?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          In a queue-based system, the backend creates a job and adds it
          to a queue. A worker takes the job from the queue and processes it.
        </p>

        <div className="space-y-2">
          {[
            ["1. Producer", "Creates a job and adds it to the queue."],
            ["2. Queue", "Stores pending jobs until workers process them."],
            ["3. Worker", "Picks up jobs and executes their tasks."],
            ["4. Result", "The job is marked completed or failed."]
          ].map(([title, description]) => (
            <div key={title} className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
              <h3 className="font-semibold text-[var(--accent-color)]">{title}</h3>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Simple Example in Node.js</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          We can use setTimeout() to understand the basic idea of
          executing a task separately from the immediate response.
          However, setTimeout() is not a reliable production job queue.
        </p>

        <CodeBlock code={`import express from "express";

const app = express();

app.get("/register", (req, res) => {

  // Respond immediately
  res.send("Registration successful!");

  // Simulate background work
  setTimeout(() => {
    console.log("Welcome email sent!");
  }, 3000);

});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Here, the HTTP response is sent immediately while the callback
          runs later. But if the Node.js process crashes or restarts,
          this scheduled callback is lost.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Background Job Tools</h2>
        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3 text-left">Tool</th>
                <th className="p-3 text-left">Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              {[
                ["BullMQ", "Redis-based job and queue processing for Node.js."],
                ["Redis", "Fast in-memory data store commonly used by job queues."],
                ["Agenda", "MongoDB-backed job scheduling and processing."],
                ["node-cron", "Schedule recurring tasks using cron expressions."]
              ].map(([name, purpose]) => (
                <tr key={name}>
                  <td className="p-3 font-medium">{name}</td>
                  <td className="p-3 text-[var(--text-secondary)]">{purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Important Things to Remember</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Background Jobs run independently of the main request-response flow.</li>
          <li>They improve API response time for suitable long-running tasks.</li>
          <li>Queues store jobs until workers process them.</li>
          <li>Workers execute background tasks.</li>
          <li>Failed jobs can be retried using a retry mechanism.</li>
          <li>Production systems should use durable queues instead of relying on setTimeout().</li>
          <li>Background jobs may execute more than once, so important operations should be idempotent.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Interview Questions</h2>
        <div className="space-y-3">
          {[
            ["What are Background Jobs?", "Background Jobs are tasks executed separately from the main request-response cycle."],
            ["Why do we use Background Jobs?", "They prevent long-running operations from delaying API responses and help process tasks asynchronously."],
            ["What is a Job Queue?", "A Job Queue stores tasks that are waiting to be processed by workers."],
            ["What is a Worker?", "A Worker is a process that picks jobs from a queue and executes them."],
            ["What is the difference between setTimeout() and a Job Queue?", "setTimeout() schedules an in-process callback, while a persistent job queue can store jobs and process them across application restarts."],
            ["What is BullMQ?", "BullMQ is a Node.js queue library that uses Redis to manage and process background jobs."],
            ["What happens when a background job fails?", "The system can mark it as failed, retry it according to a configured policy, or move it to a failed-job or dead-letter workflow."],
            ["What is an Idempotent Job?", "An idempotent job can run multiple times without causing unintended duplicate effects."]
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