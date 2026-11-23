import CodeBlock from "../../../components/common/CodeBlock";

export default function RetryrMechanism() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">

      <div>
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          BACKGROUND JOBS / 09
        </p>
        <h1 className="mt-2 text-3xl font-bold">Retry Mechanism in Node.js</h1>
        <p className="mt-3 leading-7 text-[var(--text-secondary)]">
          A Retry Mechanism automatically attempts to execute a failed
          job again. It helps applications recover from temporary errors
          such as network failures, service timeouts and temporary
          database unavailability.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What Is a Retry Mechanism?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          A Retry Mechanism is a technique that repeats an operation
          when it fails. Instead of immediately giving up, the system
          tries the operation again according to a configured policy.
        </p>
        <p className="leading-7 text-[var(--text-secondary)]">
          For example, if an email service is temporarily unavailable,
          BullMQ can retry the email job instead of permanently
          abandoning it after the first failure.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. How Does Retry Mechanism Work?</h2>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <div className="flex flex-col items-center gap-2 text-center text-sm">
            {[
              ["Job Created", "Producer adds a job"],
              ["Worker Processes", "Worker executes the job"],
              ["Job Failed", "An error occurs"],
              ["Retry Check", "Check retry attempts"],
              ["Try Again", "Execute the job again"],
              ["Final Result", "Completed or permanently failed"]
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
        <h2 className="text-xl font-semibold">3. Why Do We Need Retry Mechanism?</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Recover from temporary network failures.</li>
          <li>Handle external API timeouts.</li>
          <li>Recover from temporary database errors.</li>
          <li>Improve background job reliability.</li>
          <li>Reduce manual intervention.</li>
          <li>Handle temporary service unavailability.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Retry Attempts</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Retry attempts define how many times a failed job can
          be executed again.
        </p>

        <CodeBlock code={`await emailQueue.add(
  "send-email",
  {
    email: "user@example.com"
  },
  {
    attempts: 3
  }
);`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          Here, attempts: 3 means the job can have a maximum of
          three processing attempts in total, including the first
          execution.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <p className="font-semibold text-[var(--accent-color)]">Example</p>
          <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
            Attempt 1 → Failed<br />
            Attempt 2 → Failed<br />
            Attempt 3 → Failed<br />
            Final State → Failed
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Fixed Backoff Strategy</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Fixed Backoff waits for the same amount of time before
          every retry.
        </p>

        <CodeBlock code={`await emailQueue.add(
  "send-email",
  {
    email: "user@example.com"
  },
  {
    attempts: 3,
    backoff: {
      type: "fixed",
      delay: 5000
    }
  }
);`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          Here, BullMQ waits approximately five seconds before
          each retry.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Exponential Backoff Strategy</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Exponential Backoff increases the waiting time after
          every failed attempt. This prevents repeatedly hitting
          an unavailable service too quickly.
        </p>

        <CodeBlock code={`await emailQueue.add(
  "send-email",
  {
    email: "user@example.com"
  },
  {
    attempts: 4,
    backoff: {
      type: "exponential",
      delay: 2000
    }
  }
);`} />

        <p className="font-medium">Retry timing</p>
        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <p className="text-sm leading-7 text-[var(--text-secondary)]">
            First retry → 2 seconds<br />
            Second retry → 4 seconds<br />
            Third retry → 8 seconds
          </p>
        </div>

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          BullMQ uses the initial delay multiplied by powers of two
          for exponential backoff. Actual execution may happen later
          depending on worker availability and scheduling.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Custom Backoff Strategy</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Sometimes fixed or exponential delays are not enough.
          BullMQ supports custom backoff strategies through worker
          settings.
        </p>

        <CodeBlock code={`const worker = new Worker(
  "email-queue",
  async (job) => {
    await sendEmail(job.data.email);
  },
  {
    connection,

    settings: {
      backoffStrategy: (attemptsMade) => {
        return attemptsMade * 3000;
      }
    }
  }
);`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          The custom strategy returns the delay in milliseconds.
          The strategy must be configured on the worker that processes
          the queue. Returning -1 fails the job without another retry,
          while returning -2 uses BullMQ's default strategy.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Handle Failed Jobs</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          BullMQ provides worker events to monitor failed jobs.
        </p>

        <CodeBlock code={`worker.on("failed", (job, error) => {
  console.log("Job ID:", job?.id);
  console.log("Attempt:", job?.attemptsMade);
  console.log("Error:", error.message);
});

worker.on("completed", (job) => {
  console.log("Job completed:", job.id);
});`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          The failed event can fire after each unsuccessful attempt.
          Check the job's attempt count and configured limit to
          determine whether another retry is possible.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Retry Only Temporary Errors</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Not every error should be retried. For example, a temporary
          network timeout may succeed later, but invalid user data
          will usually fail again.
        </p>

        <CodeBlock code={`const worker = new Worker(
  "payment-queue",
  async (job) => {
    try {
      await processPayment(job.data);
    } catch (error) {
      if (error.code === "NETWORK_TIMEOUT") {
        throw error; // Allow retry
      }

      if (error.code === "INVALID_PAYMENT_DATA") {
        throw new UnrecoverableError(
          "Invalid payment data"
        );
      }

      throw error;
    }
  },
  { connection }
);`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          BullMQ's UnrecoverableError marks a job as failed without
          retrying it, even if attempts remain. Choose retry rules
          according to the type of error and business requirements.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Retry Mechanism vs Dead Letter Queue</h2>

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
                <td className="p-3">Attempts to process a failed job again.</td>
                <td className="p-3">Stores jobs that cannot be processed successfully.</td>
              </tr>
              <tr className="border-t border-[var(--border-color)]">
                <td className="p-3">Used to recover from temporary errors.</td>
                <td className="p-3">Used for investigation and later recovery.</td>
              </tr>
              <tr className="border-t border-[var(--border-color)]">
                <td className="p-3">Runs according to retry configuration.</td>
                <td className="p-3">Keeps failed messages for separate handling.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">11. Important Production Practices</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Set a reasonable maximum number of attempts.</li>
          <li>Use exponential backoff for temporary service failures.</li>
          <li>Do not retry permanent validation errors.</li>
          <li>Make job processors idempotent.</li>
          <li>Use timeouts for external API calls.</li>
          <li>Log every failed attempt with useful context.</li>
          <li>Use jitter where appropriate to prevent retry spikes.</li>
          <li>Move permanently failed jobs to a dead-letter workflow when needed.</li>
          <li>Avoid infinite retry loops.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">12. Important Things to Remember</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Retry Mechanism repeats failed operations.</li>
          <li>attempts controls the maximum total processing attempts.</li>
          <li>Fixed Backoff uses the same delay.</li>
          <li>Exponential Backoff increases the delay after each failure.</li>
          <li>Custom Backoff allows custom retry timing.</li>
          <li>UnrecoverableError stops further retries.</li>
          <li>Not every error should be retried.</li>
          <li>Idempotency prevents duplicate side effects.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">13. Interview Questions</h2>

        {[
          ["What is a Retry Mechanism?", "It automatically attempts to execute a failed operation again."],
          ["Why do we need retries?", "Retries help recover from temporary errors such as network failures and service timeouts."],
          ["What is the attempts option in BullMQ?", "It defines the maximum total processing attempts, including the first attempt."],
          ["What is Fixed Backoff?", "It waits for the same configured duration before each retry."],
          ["What is Exponential Backoff?", "It increases the waiting time exponentially after each failed attempt."],
          ["What is Custom Backoff?", "It allows developers to define their own retry delay strategy."],
          ["What is UnrecoverableError?", "It marks a job as failed without allowing further retries."],
          ["Should every error be retried?", "No. Temporary errors may be retried, but permanent errors such as invalid input usually should not be."],
          ["What is the difference between Retry and Dead Letter Queue?", "Retry attempts to process a failed job again, while a dead-letter workflow stores jobs that have exhausted their retries or cannot be processed."],
          ["Why is idempotency important in retries?", "A retried job may repeat an operation, so idempotency prevents duplicate business effects."]
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