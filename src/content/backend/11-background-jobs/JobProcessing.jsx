import CodeBlock from "../../../components/common/CodeBlock";

export default function JobProcessing() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">

      <div>
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          BACKGROUND JOBS / 08
        </p>
        <h1 className="mt-2 text-3xl font-bold">Job Processing in Node.js</h1>
        <p className="mt-3 leading-7 text-[var(--text-secondary)]">
          Job Processing is the process of executing tasks that are
          stored in a job queue. A background worker picks up a job,
          performs the required operation and reports whether it
          completed or failed.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What Is Job Processing?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Job Processing means executing background tasks outside
          the main request-response cycle of an application.
        </p>
        <p className="leading-7 text-[var(--text-secondary)]">
          For example, when a user uploads a video, the API can
          create a job. A worker processes the video in the background
          without making the user wait for the entire operation.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. How Does Job Processing Work?</h2>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <div className="flex flex-col items-center gap-2 text-center text-sm">
            {[
              ["Producer", "Creates a job"],
              ["Queue", "Stores the job"],
              ["Worker", "Fetches the job"],
              ["Processing", "Executes the task"],
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
        <h2 className="text-xl font-semibold">3. Main Components</h2>

        {[
          ["Producer", "Creates jobs and adds them to the queue."],
          ["Queue", "Stores pending jobs until workers can process them."],
          ["Worker", "Retrieves jobs and executes their processing logic."],
          ["Processor", "The function containing the actual task logic."],
          ["Result", "The output returned when processing succeeds."],
          ["Job State", "Tracks whether a job is waiting, active, completed, failed or delayed."]
        ].map(([title, description]) => (
          <div key={title} className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
            <h3 className="font-semibold">{title}</h3>
            <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">{description}</p>
          </div>
        ))}
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Create a Job Queue</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          We will use BullMQ and Redis to demonstrate job processing.
          First, create a queue.
        </p>

        <CodeBlock code={`// queues/reportQueue.js

import { Queue } from "bullmq";

export const reportQueue = new Queue("report-queue", {
  connection: {
    host: "127.0.0.1",
    port: 6379
  }
});`} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Add a Job (Producer)</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          The producer adds a job containing the data required
          by the worker.
        </p>

        <CodeBlock code={`// controllers/reportController.js

import { reportQueue } from "../queues/reportQueue.js";

export const generateReport = async (req, res) => {
  const job = await reportQueue.add("generate-report", {
    userId: req.user.id,
    reportType: "monthly"
  });

  res.status(202).json({
    success: true,
    message: "Report generation started",
    jobId: job.id
  });
};`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          HTTP 202 Accepted indicates that the request has been
          accepted for processing. It does not mean the report
          has already been generated.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Process Jobs Using Worker</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          The worker receives jobs and runs the processor function.
        </p>

        <CodeBlock code={`// workers/reportWorker.js

import { Worker } from "bullmq";

const worker = new Worker(
  "report-queue",
  async (job) => {
    console.log("Processing job:", job.id);

    const { userId, reportType } = job.data;

    // Perform report generation
    const report = await generateReportFile(
      userId,
      reportType
    );

    return {
      success: true,
      reportPath: report.path
    };
  },
  {
    connection: {
      host: "127.0.0.1",
      port: 6379
    },
    concurrency: 3
  }
);`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          The processor function contains the actual business logic.
          Its returned value becomes the job's return value when
          processing completes successfully.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Job Lifecycle</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          A job moves through different states during its lifecycle.
        </p>

        <CodeBlock code={`Waiting
   |
   v
Active
   |
   +------ Success ------> Completed
   |
   +------ Failure ------> Failed
   |
   +------ Retry --------> Waiting again

Delayed jobs become eligible for processing later.`} />

        <div className="space-y-2">
          {[
            ["Waiting", "Job is waiting for a worker."],
            ["Active", "A worker is processing the job."],
            ["Completed", "The job finished successfully."],
            ["Failed", "The job could not be completed."],
            ["Delayed", "The job is scheduled for later processing."]
          ].map(([title, description]) => (
            <div key={title} className="rounded-lg border border-[var(--border-color)] p-3">
              <h3 className="font-semibold text-[var(--accent-color)]">{title}</h3>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Handle Job Success and Failure</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          BullMQ workers provide events to monitor job execution.
        </p>

        <CodeBlock code={`worker.on("completed", (job, result) => {
  console.log("Job completed:", job.id);
  console.log("Result:", result);
});

worker.on("failed", (job, error) => {
  console.log("Job failed:", job?.id);
  console.log("Error:", error.message);
});

worker.on("error", (error) => {
  console.error("Worker error:", error);
});`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          A failed job may be retried if retry options are configured.
          The failed event is emitted for each failed processing attempt,
          not only after all retries are exhausted.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Track Job Progress</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          For long-running tasks, workers can report progress.
          This helps applications show users how much work is complete.
        </p>

        <CodeBlock code={`const worker = new Worker(
  "report-queue",
  async (job) => {
    await job.updateProgress(25);

    // Fetch data
    await fetchReportData();

    await job.updateProgress(50);

    // Generate report
    await generatePDF();

    await job.updateProgress(100);

    return {
      message: "Report generated successfully"
    };
  },
  { connection }
);`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          You can retrieve a job's progress using its Job object
          or listen for progress events through QueueEvents.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Control Job Concurrency</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Concurrency defines how many jobs a worker can process
          simultaneously.
        </p>

        <CodeBlock code={`const worker = new Worker(
  "email-queue",
  async (job) => {
    await sendEmail(job.data.email);
  },
  {
    connection,
    concurrency: 5
  }
);`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          Here, one worker can process up to five jobs concurrently.
          Increasing concurrency can improve throughput for
          asynchronous tasks, but it can also increase resource usage
          and pressure on external services.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">11. Handle Long-Running Jobs</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Long-running jobs should be divided into manageable steps
          where possible. Progress updates help track execution.
        </p>

        <CodeBlock code={`const worker = new Worker(
  "video-queue",
  async (job) => {
    const video = job.data.videoPath;

    await job.updateProgress(10);

    await extractAudio(video);

    await job.updateProgress(40);

    await processVideo(video);

    await job.updateProgress(80);

    await uploadVideo(video);

    await job.updateProgress(100);

    return {
      message: "Video processing completed"
    };
  },
  { connection }
);`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          For CPU-intensive work, use separate processes or worker
          threads instead of blocking the Node.js event loop. Configure
          suitable lock durations and stalled-job recovery for
          long-running processors.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">12. Job Processing Best Practices</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Keep processor functions focused and manageable.</li>
          <li>Validate job data before processing.</li>
          <li>Use retries for temporary failures.</li>
          <li>Make jobs idempotent to handle repeated execution safely.</li>
          <li>Use suitable concurrency limits.</li>
          <li>Track job progress for long-running tasks.</li>
          <li>Log job IDs and useful error details.</li>
          <li>Do not store large files directly in job payloads; store file references instead.</li>
          <li>Use graceful shutdown to finish active jobs safely.</li>
          <li>Monitor stalled, failed and delayed jobs.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">13. Important Things to Remember</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Producer creates jobs.</li>
          <li>Queue stores jobs.</li>
          <li>Worker processes jobs.</li>
          <li>Processor contains the task logic.</li>
          <li>Job progress can be tracked using updateProgress().</li>
          <li>Worker events help monitor execution.</li>
          <li>Concurrency controls simultaneous processing.</li>
          <li>Failed jobs can be retried.</li>
          <li>Idempotency protects against duplicate execution.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">14. Interview Questions</h2>

        {[
          ["What is Job Processing?", "Job Processing is the execution of background tasks by workers outside the main request-response cycle."],
          ["What is a Processor?", "A Processor is the function containing the actual logic that executes a job."],
          ["What is a Worker?", "A Worker retrieves jobs from a queue and runs their processor functions."],
          ["What is a Job Lifecycle?", "It describes the states a job moves through, such as waiting, active, completed, failed and delayed."],
          ["How do you track job progress in BullMQ?", "Use job.updateProgress() inside the processor and listen for progress events."],
          ["What is Worker Concurrency?", "It defines how many jobs a worker can process simultaneously."],
          ["What happens when a job fails?", "The job enters a failed state for that attempt and may be retried if retry options are configured."],
          ["What is a stalled job?", "A stalled job is an active job whose worker fails to renew its processing lock in time. BullMQ can detect and recover it."],
          ["Why should job processors be idempotent?", "A job may be executed more than once, so idempotency prevents duplicate side effects."],
          ["How do you process CPU-intensive jobs?", "Use separate processes or worker threads so CPU-heavy work does not block the main event loop."],
          ["Can multiple workers process the same queue?", "Yes. Multiple workers can connect to the same queue and share job processing."]
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