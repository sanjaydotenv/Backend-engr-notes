import CodeBlock from "../../../components/common/CodeBlock";

export default function BullMQ() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">

      <div>
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          BACKGROUND JOBS / 07
        </p>
        <h1 className="mt-2 text-3xl font-bold">BullMQ in Node.js</h1>
        <p className="mt-3 leading-7 text-[var(--text-secondary)]">
          BullMQ is a Node.js library used to manage background jobs
          and message queues. It uses Redis by default to store jobs
          and coordinate workers. It supports retries, delayed jobs,
          scheduling, priorities and job monitoring.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What Is BullMQ?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          BullMQ is a distributed job queue library for Node.js.
          It allows applications to add tasks to a queue and process
          them separately using workers.
        </p>
        <p className="leading-7 text-[var(--text-secondary)]">
          For example, when a user registers, the API can add a
          welcome-email job to BullMQ. A separate worker processes
          that job and sends the email in the background.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Why Do We Use BullMQ?</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Process background tasks without blocking API responses.</li>
          <li>Automatically retry failed jobs.</li>
          <li>Schedule jobs for later execution.</li>
          <li>Set job priorities.</li>
          <li>Control worker concurrency.</li>
          <li>Track completed, failed and active jobs.</li>
          <li>Run workers on separate processes or servers.</li>
          <li>Handle large numbers of background tasks.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. How Does BullMQ Work?</h2>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <div className="flex flex-col items-center gap-2 text-center text-sm">
            {[
              ["Node.js API", "Creates a job"],
              ["Queue", "Adds the job to BullMQ"],
              ["Redis", "Stores and coordinates job data"],
              ["Worker", "Processes the job"],
              ["Result", "Completed or failed"]
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
        <h2 className="text-xl font-semibold">4. Main Components of BullMQ</h2>

        {[
          ["1. Queue", "Creates and manages queues. It is used to add jobs and inspect queue information."],
          ["2. Worker", "Fetches jobs from a queue and executes the processing function."],
          ["3. QueueEvents", "Listens to job events across workers, such as completed, failed and progress."],
          ["4. FlowProducer", "Creates parent-child job workflows where parent jobs depend on child jobs."]
        ].map(([title, description]) => (
          <div key={title} className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
            <h3 className="font-semibold">{title}</h3>
            <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">{description}</p>
          </div>
        ))}
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Install BullMQ and Redis Client</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          First, make sure Redis is running. Then install BullMQ and
          its Redis client dependency.
        </p>

        <CodeBlock code={`npm install bullmq ioredis`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          BullMQ's default backend is Redis. It supports Redis 6.2+
          as the recommended version. Recent BullMQ versions also
          support PostgreSQL as an alternative backend.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Create Redis Connection</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Create a connection configuration that your Queue and Worker
          can use.
        </p>

        <CodeBlock code={`// config/redis.js

export const connection = {
  host: process.env.REDIS_HOST || "127.0.0.1",
  port: Number(process.env.REDIS_PORT || 6379)
};`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          BullMQ can create its own Redis connections from this
          configuration. Keep Redis credentials in environment
          variables when connecting to a remote server.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Create a Queue</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Queue is responsible for adding jobs to BullMQ.
        </p>

        <CodeBlock code={`// queues/emailQueue.js

import { Queue } from "bullmq";
import { connection } from "../config/redis.js";

export const emailQueue = new Queue("email-queue", {
  connection
});`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          Here, email-queue is the queue name. The same name must
          be used by the worker that processes its jobs.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Add Jobs to the Queue</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Use the add() method to create and store a job in the queue.
        </p>

        <CodeBlock code={`// controllers/userController.js

import { emailQueue } from "../queues/emailQueue.js";

export const registerUser = async (req, res) => {
  const user = await User.create(req.body);

  await emailQueue.add("welcome-email", {
    email: user.email,
    name: user.name
  });

  res.status(201).json({
    success: true,
    message: "User registered successfully"
  });
};`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          The first argument is the job name, and the second argument
          is the data passed to the worker. The job is stored before
          the add() call resolves.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Create a Worker</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          A Worker listens to the queue and executes the job-processing
          function.
        </p>

        <CodeBlock code={`// workers/emailWorker.js

import { Worker } from "bullmq";
import { connection } from "../config/redis.js";

const worker = new Worker(
  "email-queue",
  async (job) => {
    if (job.name === "welcome-email") {
      const { email, name } = job.data;

      console.log("Sending email to:", email);

      // Send email using Nodemailer here

      return {
        success: true,
        email
      };
    }
  },
  {
    connection,
    concurrency: 5
  }
);

worker.on("completed", (job) => {
  console.log("Completed:", job.id);
});

worker.on("failed", (job, error) => {
  console.log("Failed:", job?.id, error.message);
});`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          The worker uses the same queue name. The concurrency value
          of 5 allows this worker to process up to five jobs
          simultaneously.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Job Options</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          BullMQ provides options to control how jobs are executed.
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

    delay: 5000,

    priority: 1,

    removeOnComplete: 100,
    removeOnFail: 500
  }
);`} />

        <div className="space-y-2">
          {[
            ["attempts", "Maximum number of processing attempts."],
            ["backoff", "Controls the delay between retries."],
            ["delay", "Makes a job eligible for processing after a delay in milliseconds."],
            ["priority", "Controls job processing priority. Lower positive numbers mean higher priority."],
            ["removeOnComplete", "Controls removal of completed job records."],
            ["removeOnFail", "Controls removal of failed job records."]
          ].map(([title, description]) => (
            <div key={title} className="rounded-lg border border-[var(--border-color)] p-3">
              <p className="font-semibold text-[var(--accent-color)]">{title}</p>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">11. Handle Job Events Using QueueEvents</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          QueueEvents allows an application to listen to events
          generated by workers across the queue.
        </p>

        <CodeBlock code={`// events/queueEvents.js

import { QueueEvents } from "bullmq";
import { connection } from "../config/redis.js";

const queueEvents = new QueueEvents(
  "email-queue",
  { connection }
);

queueEvents.on("completed", ({ jobId, returnvalue }) => {
  console.log("Job completed:", jobId);
  console.log("Result:", returnvalue);
});

queueEvents.on("failed", ({ jobId, failedReason }) => {
  console.log("Job failed:", jobId);
  console.log("Reason:", failedReason);
});`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          QueueEvents uses Redis Streams internally to communicate
          queue events. It is useful when you want to monitor jobs
          from a separate process.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">12. Track Job Progress</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          A worker can report progress while processing a long-running
          task.
        </p>

        <CodeBlock code={`const worker = new Worker(
  "report-queue",
  async (job) => {
    for (let progress = 0; progress <= 100; progress += 25) {
      await job.updateProgress(progress);

      console.log("Progress:", progress);
    }

    return {
      message: "Report generated"
    };
  },
  { connection }
);`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          Progress can be monitored through the Job object or
          corresponding progress events.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">13. Job Scheduling</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          BullMQ supports recurring jobs through Job Schedulers.
          Use upsertJobScheduler() to create or update a scheduler.
        </p>

        <CodeBlock code={`await emailQueue.upsertJobScheduler(
  "daily-report",
  {
    pattern: "0 0 * * *"
  },
  {
    name: "generate-report",
    data: {
      type: "daily"
    }
  }
);`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          This example creates a scheduler that generates a job
          according to the cron pattern. The worker must still be
          running to process generated jobs. Job production can
          happen later than the exact interval if workers are busy.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">14. Run Queue and Worker Separately</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          In a real application, the API server and worker can run
          as separate processes.
        </p>

        <CodeBlock code={`// package.json

{
  "scripts": {
    "dev": "nodemon server.js",
    "worker": "node workers/emailWorker.js"
  }
}`} />

        <p className="font-medium">Terminal 1: Start API server</p>
        <CodeBlock code={`npm run dev`} />

        <p className="font-medium">Terminal 2: Start worker</p>
        <CodeBlock code={`npm run worker`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Both processes connect to the same Redis server and use
          the same queue name. You can also run multiple worker
          processes to increase processing capacity.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">15. Important Production Practices</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Keep Redis credentials in environment variables.</li>
          <li>Make job processors idempotent because jobs can run more than once.</li>
          <li>Configure retries and backoff for temporary failures.</li>
          <li>Use concurrency carefully to avoid overloading external services.</li>
          <li>Handle failed and stalled jobs.</li>
          <li>Close workers and queues gracefully during shutdown.</li>
          <li>Monitor queue size, job duration and failure rates.</li>
          <li>Use Redis persistence and backups according to your recovery requirements.</li>
          <li>Use Redis maxmemory-policy=noeviction for BullMQ to avoid eviction of queue keys.</li>
          <li>Never store sensitive information unnecessarily inside job payloads.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">16. Important Things to Remember</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Queue adds and manages jobs.</li>
          <li>Worker processes jobs.</li>
          <li>QueueEvents monitors job events.</li>
          <li>FlowProducer manages parent-child job workflows.</li>
          <li>Redis is the default storage backend.</li>
          <li>add() creates a job.</li>
          <li>attempts controls retry attempts.</li>
          <li>backoff controls retry delays.</li>
          <li>updateProgress() reports job progress.</li>
          <li>upsertJobScheduler() creates or updates recurring job schedules.</li>
          <li>BullMQ provides at-least-once delivery, so processors should be idempotent.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">17. Interview Questions</h2>

        {[
          ["What is BullMQ?", "BullMQ is a distributed job and message queue library used to manage background processing in Node.js."],
          ["Why does BullMQ use Redis?", "Redis acts as the default backend to store jobs and coordinate workers."],
          ["What is a Queue in BullMQ?", "Queue is the component used to add and manage jobs."],
          ["What is a Worker?", "A Worker retrieves jobs from a queue and executes the processing function."],
          ["What is QueueEvents?", "QueueEvents listens to job lifecycle events generated by workers across a queue."],
          ["What is concurrency?", "Concurrency controls how many jobs a worker can process simultaneously."],
          ["What is the attempts option?", "It defines the maximum number of processing attempts for a job."],
          ["What is backoff?", "Backoff defines the delay strategy between failed job retries."],
          ["What is a delayed job?", "A delayed job becomes eligible for processing after a specified delay."],
          ["What is Job Scheduler?", "It creates jobs repeatedly according to a fixed interval or cron pattern."],
          ["Can multiple workers process the same queue?", "Yes. Multiple workers can connect to the same queue and distribute job processing."],
          ["Does BullMQ guarantee exactly-once processing?", "No. It provides at-least-once delivery, so a job may be processed again in certain failure situations."],
          ["What is FlowProducer?", "FlowProducer creates parent-child job workflows where a parent waits for its child jobs to complete."],
          ["How can you monitor job progress?", "Use job.updateProgress() inside the worker and listen for progress events."]
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