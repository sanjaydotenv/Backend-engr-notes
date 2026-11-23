import CodeBlock from "../../../components/common/CodeBlock";

export default function EmailQueues() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">

      <div>
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          BACKGROUND JOBS / 11
        </p>
        <h1 className="mt-2 text-3xl font-bold">Email Queues in Node.js</h1>
        <p className="mt-3 leading-7 text-[var(--text-secondary)]">
          Email Queues allow applications to send emails through background
          workers instead of sending them directly during an API request.
          They improve application performance, reliability and scalability.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What Are Email Queues?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          An Email Queue is a background job queue that stores email
          sending tasks until a worker processes them.
        </p>
        <p className="leading-7 text-[var(--text-secondary)]">
          For example, when a user registers, the application adds a
          welcome email job to the queue. A background worker processes
          that job and sends the email using Nodemailer or an email service.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Why Do We Need Email Queues?</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>API requests return faster.</li>
          <li>Email sending happens in the background.</li>
          <li>Failed emails can be retried automatically.</li>
          <li>Multiple emails can be processed using workers.</li>
          <li>Email processing can be scaled independently.</li>
          <li>Temporary email service failures can be handled.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. How Does Email Queue Work?</h2>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <div className="flex flex-col items-center gap-2 text-center text-sm">
            {[
              ["User Registration", "User creates an account"],
              ["Express API", "Receives registration request"],
              ["Email Queue", "Stores the email job in Redis"],
              ["Background Worker", "Fetches and processes the job"],
              ["Nodemailer", "Sends the email"],
              ["Email Delivered", "Email service accepts the message"]
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
        <h2 className="text-xl font-semibold">4. Install Required Packages</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          We will use BullMQ for queue management, Redis for storing
          jobs and Nodemailer for sending emails.
        </p>

        <CodeBlock code={`npm install bullmq ioredis nodemailer dotenv`} />

        <p className="font-medium">Start Redis using Docker</p>
        <CodeBlock code={`docker run -d \\
  --name redis \\
  -p 6379:6379 \\
  redis`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Make sure Redis is running before starting the API and worker.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Configure Environment Variables</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Store email credentials and Redis connection details in
          environment variables.
        </p>

        <CodeBlock code={`# .env

REDIS_HOST=127.0.0.1
REDIS_PORT=6379

EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          For Gmail, use an App Password where supported, or use
          OAuth2. Never expose email credentials in frontend code
          or commit your .env file to Git.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Create Redis Connection</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          BullMQ uses Redis to store queue data and coordinate
          background job processing.
        </p>

        <CodeBlock code={`// config/redis.js

export const connection = {
  host: process.env.REDIS_HOST || "127.0.0.1",
  port: Number(process.env.REDIS_PORT) || 6379
};`} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Create Email Queue</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Create a Queue instance. The API will use it to add
          email jobs.
        </p>

        <CodeBlock code={`// queues/emailQueue.js

import { Queue } from "bullmq";
import { connection } from "../config/redis.js";

export const emailQueue = new Queue("email-queue", {
  connection
});`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          The queue stores email jobs until a worker is ready to
          process them.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Add Email Jobs from Express API</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Instead of sending an email directly, add an email job
          to the queue.
        </p>

        <CodeBlock code={`// controllers/authController.js

import { emailQueue } from "../queues/emailQueue.js";

export const registerUser = async (req, res) => {
  try {
    const { email, name } = req.body;

    // Create and save user in database
    const user = await User.create({
      email,
      name
    });

    // Add email job to queue
    await emailQueue.add(
      "welcome-email",
      {
        email: user.email,
        name: user.name
      },
      {
        attempts: 3,
        backoff: {
          type: "exponential",
          delay: 2000
        }
      }
    );

    return res.status(201).json({
      success: true,
      message: "User registered successfully"
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          The API adds the job and responds without waiting for the
          email to be sent. The example assumes a User model is
          already configured.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Configure Nodemailer</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Nodemailer creates a transporter that connects to an
          email service and sends messages.
        </p>

        <CodeBlock code={`// config/mailer.js

import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});`} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Create Background Email Worker</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          The worker continuously checks the queue and sends
          emails whenever jobs are available.
        </p>

        <CodeBlock code={`// workers/emailWorker.js

import { Worker } from "bullmq";
import { connection } from "../config/redis.js";
import { transporter } from "../config/mailer.js";

const emailWorker = new Worker(
  "email-queue",

  async (job) => {
    const { email, name } = job.data;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Welcome to Our Application",
      html: \`
        <h2>Hello \${name}!</h2>
        <p>Welcome to our application.</p>
      \`
    });

    console.log("Email sent:", email);

    return {
      success: true,
      email
    };
  },

  {
    connection,
    concurrency: 5
  }
);

emailWorker.on("completed", (job) => {
  console.log("Email job completed:", job.id);
});

emailWorker.on("failed", (job, error) => {
  console.log("Email job failed:", job?.id);
  console.log(error.message);
});`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Concurrency 5 means the worker can process up to five
          jobs concurrently. Actual email sending limits depend
          on your email provider.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">11. Run API and Worker Separately</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          In production, the API server and email worker can run
          as separate processes. Both connect to the same Redis
          instance and queue.
        </p>

        <CodeBlock code={`# Terminal 1 - Start Express API
npm run dev

# Terminal 2 - Start Email Worker
node workers/emailWorker.js`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          This separation allows you to scale API servers and
          background workers independently.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">12. Email Queue Best Practices</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Use retry attempts with exponential backoff.</li>
          <li>Validate email addresses before creating jobs.</li>
          <li>Keep email credentials on the backend.</li>
          <li>Use unique job IDs when duplicate jobs must be prevented.</li>
          <li>Make email processing safe against duplicate execution.</li>
          <li>Monitor completed and failed jobs.</li>
          <li>Configure worker concurrency according to provider limits.</li>
          <li>Use a Dead Letter Queue or failure workflow for exhausted jobs.</li>
          <li>Use a transactional outbox pattern when user creation and job creation must not get out of sync.</li>
          <li>Remember that successful SMTP submission does not guarantee inbox delivery.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">13. Important Things to Remember</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Email Queues send emails through background workers.</li>
          <li>BullMQ manages email jobs.</li>
          <li>Redis stores and coordinates queue jobs.</li>
          <li>Nodemailer sends the actual emails.</li>
          <li>The API does not need to wait for email sending.</li>
          <li>Failed jobs can be retried automatically.</li>
          <li>Workers can run separately from the Express server.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">14. Interview Questions</h2>

        {[
          ["What is an Email Queue?", "It is a background queue that stores email-sending jobs until workers process them."],
          ["Why use Email Queues?", "They prevent API requests from waiting for email delivery and provide retry and scaling capabilities."],
          ["Which tools can be used for Email Queues?", "BullMQ, Redis and Nodemailer are a common Node.js combination."],
          ["What is the role of Redis?", "Redis stores queue data and coordinates job processing."],
          ["What is the role of BullMQ?", "BullMQ manages queues, jobs, workers, retries and job states."],
          ["What is the role of Nodemailer?", "Nodemailer connects to an email transport and sends email messages."],
          ["Why run workers separately?", "Workers can process background jobs independently and scale without increasing API server workload."],
          ["How are failed emails handled?", "They can be retried using attempts and backoff, then moved to a failure-handling workflow if retries are exhausted."],
          ["Does a completed email job guarantee inbox delivery?", "No. It generally means the email transport accepted the message, not that it reached the recipient's inbox."],
          ["What is the transactional outbox pattern?", "It stores an event or job record in the same database transaction as the business data, then publishes it to the queue reliably."]
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