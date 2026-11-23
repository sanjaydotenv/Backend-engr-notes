import CodeBlock from "../../../components/common/CodeBlock";

export default function LoadTesting() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          SOFTWARE TESTING / 13
        </p>
        <h1 className="text-3xl font-bold mt-2">Load Testing</h1>
        <p className="text-[var(--text-secondary)] mt-3 leading-7">
          Load Testing is a type of performance testing used to measure how an
          application behaves under an expected number of users or requests. It
          helps identify performance issues before they affect real users.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What Is Load Testing?</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Imagine your application normally handles 100 users. What happens when
          1,000 or 10,000 users access it at the same time?
        </p>
        <p className="text-[var(--text-secondary)] leading-7">
          Load Testing helps us understand whether the application can handle
          its expected workload without becoming slow, unstable or unavailable.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-3">
          <p className="font-semibold text-center">Load Testing Flow</p>
          <div className="grid grid-cols-3 gap-2 text-center text-sm">
            {["User 1", "User 2", "User 3"].map((user) => (
              <div
                key={user}
                className="rounded-lg border border-[var(--border-color)] p-3"
              >
                {user}
              </div>
            ))}
          </div>
          <div className="text-center text-[var(--accent-color)]">
            ↓ Requests
          </div>
          <div className="rounded-lg border border-[var(--accent-color)] p-3 text-center">
            Load Testing Tool
          </div>
          <div className="text-center text-[var(--accent-color)]">
            ↓ Many Requests
          </div>
          <div className="rounded-lg border border-[var(--border-color)] p-3 text-center">
            Backend API Server
          </div>
          <div className="text-center text-[var(--accent-color)]">↓</div>
          <div className="rounded-lg border border-green-500 p-3 text-center">
            Performance Results
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          2. Why Do We Need Load Testing?
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>Check how many users the application can handle.</li>
          <li>Identify slow API endpoints.</li>
          <li>Find database bottlenecks.</li>
          <li>Measure API response time under load.</li>
          <li>Identify server resource problems.</li>
          <li>Prevent crashes during high traffic.</li>
          <li>Plan server capacity and infrastructure requirements.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          3. Types of Performance Testing
        </h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Load Testing is one category of performance testing. Other types help
          us understand different performance conditions.
        </p>

        <div className="space-y-3">
          {[
            [
              "Load Testing",
              "Checks application performance under expected or normal workloads.",
            ],
            [
              "Stress Testing",
              "Pushes the system beyond its expected capacity to find its breaking point.",
            ],
            [
              "Spike Testing",
              "Checks how the system handles sudden increases or decreases in traffic.",
            ],
            [
              "Endurance Testing",
              "Checks system stability under continuous load for a long period.",
            ],
            [
              "Volume Testing",
              "Checks how the system behaves when handling large amounts of data.",
            ],
          ].map((item, index) => (
            <div
              key={item[0]}
              className="rounded-lg border border-[var(--border-color)] p-4"
            >
              <h3 className="font-semibold text-[var(--accent-color)]">
                {index + 1}. {item[0]}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mt-2 leading-6">
                {item[1]}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          4. Important Load Testing Metrics
        </h2>
        <div className="space-y-3">
          {[
            [
              "Response Time",
              "The time taken by the server to respond to a request.",
            ],
            [
              "Throughput",
              "The number of requests processed per unit of time, commonly requests per second.",
            ],
            [
              "Concurrent Users",
              "The number of virtual users performing activities at the same time.",
            ],
            [
              "Error Rate",
              "The percentage of requests that fail during testing.",
            ],
            [
              "Latency",
              "The delay before a request begins receiving a response.",
            ],
            ["CPU Usage", "How much processor capacity the application uses."],
            ["Memory Usage", "How much RAM the application consumes."],
          ].map((item) => (
            <div
              key={item[0]}
              className="rounded-lg border border-[var(--border-color)] p-4"
            >
              <h3 className="font-semibold text-[var(--accent-color)]">
                {item[0]}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mt-2 leading-6">
                {item[1]}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Common Load Testing Tools</h2>
        <div className="space-y-3">
          {[
            [
              "k6",
              "A developer-friendly load testing tool that uses JavaScript to define test scenarios.",
            ],
            [
              "Apache JMeter",
              "A popular GUI-based tool for load and performance testing.",
            ],
            [
              "Artillery",
              "A tool for testing the performance and reliability of APIs and applications.",
            ],
            [
              "Locust",
              "An open-source load testing tool that uses Python to define user behavior.",
            ],
            [
              "Gatling",
              "A performance testing tool designed for high-performance load testing.",
            ],
          ].map((item) => (
            <div
              key={item[0]}
              className="rounded-lg border border-[var(--border-color)] p-4"
            >
              <h3 className="font-semibold text-[var(--accent-color)]">
                {item[0]}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mt-2 leading-6">
                {item[1]}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Load Testing Using k6</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          k6 is a popular load testing tool. We can write test scripts in
          JavaScript and use them to generate virtual user traffic against our
          APIs.
        </p>

        <h3 className="font-semibold text-[var(--accent-color)]">
          Step 1: Install k6
        </h3>
        <p className="text-[var(--text-secondary)] leading-7">
          On Windows, you can install k6 using Chocolatey:
        </p>
        <CodeBlock code={`choco install k6`} />
        <p className="text-sm text-[var(--text-secondary)]">
          Alternatively, install it using the official k6 Windows installation
          instructions.
        </p>

        <h3 className="font-semibold text-[var(--accent-color)]">
          Step 2: Create an API
        </h3>
        <p className="text-[var(--text-secondary)] leading-7">
          First, make sure your Express backend has an API endpoint to test.
        </p>
        <CodeBlock
          code={`// app.js

import express from "express";

const app = express();

app.get("/api/users", (req, res) => {
  res.status(200).json({
    success: true,
    users: [
      {
        id: 1,
        name: "Mayur"
      },
      {
        id: 2,
        name: "Rahul"
      }
    ]
  });
});

export default app;`}
        />

        <h3 className="font-semibold text-[var(--accent-color)]">
          Step 3: Start Backend Server
        </h3>
        <CodeBlock
          code={`// server.js

import app from "./app.js";

const PORT = 3000;

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`}
        />
        <p className="text-sm text-[var(--text-secondary)]">
          Run your backend using your normal development command. Confirm that
          the API is accessible at localhost:3000.
        </p>

        <h3 className="font-semibold text-[var(--accent-color)]">
          Step 4: Create k6 Test File
        </h3>
        <p className="text-[var(--text-secondary)] leading-7">
          Create a file named <strong>load-test.js</strong> in your project.
        </p>
        <CodeBlock
          code={`// load-test.js

import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 10,
  duration: "30s"
};

export default function () {
  const response = http.get(
    "http://localhost:3000/api/users"
  );

  check(response, {
    "status is 200": (r) => r.status === 200,
    "response has users": (r) =>
      JSON.parse(r.body).users.length > 0
  });

  sleep(1);
}`}
        />

        <h3 className="font-semibold text-[var(--accent-color)]">
          Step 5: Run Load Test
        </h3>
        <CodeBlock code={`k6 run load-test.js`} />

        <p className="text-[var(--text-secondary)] leading-7">
          k6 starts 10 virtual users and runs the scenario for 30 seconds. Each
          virtual user repeatedly sends requests and waits for one second
          between iterations.
        </p>

        <h3 className="font-semibold text-[var(--accent-color)]">
          Step 6: Understand Results
        </h3>
        <p className="text-[var(--text-secondary)] leading-7">
          After the test completes, k6 displays a summary containing metrics
          such as:
        </p>
        <CodeBlock
          code={`checks.........................: 100.00%
http_req_duration..............: avg=25ms
http_reqs......................: 250
http_req_failed................: 0.00%
vus............................: 10
iterations.....................: 250`}
        />
        <p className="text-sm text-[var(--text-secondary)]">
          These are illustrative results, not guaranteed output. Actual results
          depend on your machine, network and application.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          7. Understanding Virtual Users (VUs)
        </h2>
        <p className="text-[var(--text-secondary)] leading-7">
          A Virtual User (VU) represents a simulated user executing a test
          scenario. It repeatedly runs the default function in a k6 script.
        </p>

        <CodeBlock
          code={`export const options = {
  vus: 50,
  duration: "1m"
};`}
        />

        <p className="text-[var(--text-secondary)] leading-7">
          This configuration runs 50 virtual users for one minute. It does not
          mean exactly 50 requests per second. The number of requests depends on
          response times, script execution and sleep intervals.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          8. Load Testing vs Stress Testing
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="text-left p-3">Load Testing</th>
                <th className="text-left p-3">Stress Testing</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Tests expected workload.</td>
                <td className="p-3">Tests beyond expected capacity.</td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Measures normal performance.</td>
                <td className="p-3">
                  Finds system limits and failure behavior.
                </td>
              </tr>
              <tr>
                <td className="p-3">
                  Checks whether the system handles normal demand.
                </td>
                <td className="p-3">
                  Checks how the system behaves under extreme demand.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Best Practices</h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>Define realistic user traffic before testing.</li>
          <li>Start with a small number of virtual users.</li>
          <li>Gradually increase the load.</li>
          <li>Monitor CPU, RAM and database performance.</li>
          <li>Measure response time and error rate.</li>
          <li>Test important API endpoints separately.</li>
          <li>Run tests in an environment similar to production.</li>
          <li>
            Never run heavy tests against production without authorization and a
            controlled plan.
          </li>
          <li>Compare results after performance improvements.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Interview Questions</h2>
        {[
          {
            q: "What is Load Testing?",
            a: "Load Testing measures how an application behaves under an expected workload or number of concurrent users.",
          },
          {
            q: "Why do we perform Load Testing?",
            a: "To identify performance bottlenecks, measure response time, understand server capacity and prevent failures under expected traffic.",
          },
          {
            q: "What is a Virtual User (VU)?",
            a: "A Virtual User is a simulated user that executes a test scenario and generates requests against an application.",
          },
          {
            q: "What is Throughput?",
            a: "Throughput measures how many requests or operations a system processes in a given amount of time.",
          },
          {
            q: "What is Response Time?",
            a: "Response Time is the time taken for a request to receive a response from the server.",
          },
          {
            q: "What is Stress Testing?",
            a: "Stress Testing pushes an application beyond its expected capacity to identify its breaking point and failure behavior.",
          },
          {
            q: "What is Spike Testing?",
            a: "Spike Testing checks how an application handles sudden increases or decreases in traffic.",
          },
          {
            q: "What is Endurance Testing?",
            a: "Endurance Testing checks whether an application remains stable under continuous load for an extended period.",
          },
          {
            q: "What is k6?",
            a: "k6 is a load testing tool that uses JavaScript to define test scenarios and generate virtual user traffic.",
          },
          {
            q: "Does 50 VUs mean 50 requests per second?",
            a: "No. VUs represent concurrent virtual users. Requests per second depend on response time, script execution and waiting intervals.",
          },
        ].map((item, index) => (
          <details
            key={index}
            className="group rounded-lg border border-[var(--border-color)] p-4"
          >
            <summary className="cursor-pointer font-medium">
              {index + 1}. {item.q}
            </summary>
            <p className="mt-3 text-sm text-[var(--text-secondary)] leading-6">
              {item.a}
            </p>
          </details>
        ))}
      </section>
    </div>
  );
}
