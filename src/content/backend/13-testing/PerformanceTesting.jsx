import CodeBlock from "../../../components/common/CodeBlock";

export default function PerformanceTesting() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          SOFTWARE TESTING / 14
        </p>
        <h1 className="text-3xl font-bold mt-2">Performance Testing</h1>
        <p className="text-[var(--text-secondary)] mt-3 leading-7">
          Performance Testing is a type of software testing used to measure an
          application's speed, responsiveness, stability and scalability under
          different workloads. It helps identify performance bottlenecks before
          they affect users.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          1. What Is Performance Testing?
        </h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Imagine your backend API takes 100 milliseconds to respond to a
          request. After adding more users, database queries and features, the
          response time increases to 5 seconds.
        </p>
        <p className="text-[var(--text-secondary)] leading-7">
          Performance Testing helps us understand how fast and stable our
          application is under different conditions.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-3">
          <p className="font-semibold text-center">Performance Testing Flow</p>
          <div className="rounded-lg border border-[var(--border-color)] p-3 text-center">
            Virtual Users / Requests
          </div>
          <div className="text-center text-[var(--accent-color)]">↓</div>
          <div className="rounded-lg border border-[var(--accent-color)] p-3 text-center">
            Performance Testing Tool
          </div>
          <div className="text-center text-[var(--accent-color)]">↓</div>
          <div className="rounded-lg border border-[var(--border-color)] p-3 text-center">
            Backend API + Database
          </div>
          <div className="text-center text-[var(--accent-color)]">↓</div>
          <div className="rounded-lg border border-green-500 p-3 text-center">
            Performance Metrics and Report
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          2. Why Do We Need Performance Testing?
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>Measure application response time.</li>
          <li>Identify slow API endpoints.</li>
          <li>Find database query bottlenecks.</li>
          <li>Check application stability under load.</li>
          <li>Understand server resource consumption.</li>
          <li>Find memory leaks and performance problems.</li>
          <li>
            Check whether the application can scale with increasing traffic.
          </li>
          <li>Improve user experience and application reliability.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          3. Types of Performance Testing
        </h2>
        <div className="space-y-3">
          {[
            [
              "Load Testing",
              "Checks application performance under expected or normal workloads.",
            ],
            [
              "Stress Testing",
              "Pushes the system beyond its expected capacity to find its limits.",
            ],
            [
              "Spike Testing",
              "Checks how the application handles sudden traffic increases or decreases.",
            ],
            [
              "Endurance Testing",
              "Checks application stability under continuous load for a long period.",
            ],
            [
              "Volume Testing",
              "Checks how the application behaves when processing large amounts of data.",
            ],
            [
              "Scalability Testing",
              "Checks how well the system handles increasing workloads when resources or infrastructure are scaled.",
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
          4. Important Performance Metrics
        </h2>
        <div className="space-y-3">
          {[
            [
              "Response Time",
              "Total time taken for a request to receive a response.",
            ],
            [
              "Latency",
              "The delay before a request begins receiving a response.",
            ],
            [
              "Throughput",
              "The number of requests or operations processed per unit of time.",
            ],
            [
              "Requests Per Second (RPS)",
              "The number of HTTP requests handled every second.",
            ],
            ["Error Rate", "The percentage of requests that fail."],
            [
              "CPU Usage",
              "The amount of processor capacity consumed by the application.",
            ],
            ["Memory Usage", "The amount of RAM used by the application."],
            [
              "Percentiles (p95 / p99)",
              "Response time values below which 95% or 99% of measured requests completed.",
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
        <h2 className="text-xl font-semibold">5. Performance Testing Tools</h2>
        <div className="space-y-3">
          {[
            [
              "k6",
              "A developer-friendly tool that uses JavaScript to create load and performance testing scripts.",
            ],
            [
              "Apache JMeter",
              "A GUI-based tool for testing application performance under different workloads.",
            ],
            [
              "Artillery",
              "A tool for testing APIs and applications under simulated traffic.",
            ],
            [
              "Locust",
              "A Python-based tool for simulating user behavior and generating load.",
            ],
            [
              "Gatling",
              "A performance testing tool designed for high-performance load testing.",
            ],
            [
              "New Relic",
              "An application performance monitoring platform for observing application behavior.",
            ],
            [
              "Datadog",
              "A monitoring and observability platform for analyzing application and infrastructure performance.",
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
        <h2 className="text-xl font-semibold">
          6. Performance Testing Using k6
        </h2>
        <p className="text-[var(--text-secondary)] leading-7">
          We can use k6 to simulate multiple users accessing our backend APIs
          and measure their performance.
        </p>

        <h3 className="font-semibold text-[var(--accent-color)]">
          Step 1: Install k6
        </h3>
        <p className="text-[var(--text-secondary)] leading-7">
          On Windows, install k6 using Chocolatey:
        </p>
        <CodeBlock code={`choco install k6`} />
        <p className="text-sm text-[var(--text-secondary)]">
          You can also install k6 using its official Windows installation
          instructions.
        </p>

        <h3 className="font-semibold text-[var(--accent-color)]">
          Step 2: Create Backend API
        </h3>
        <CodeBlock
          code={`// app.js

import express from "express";

const app = express();

app.get("/api/products", (req, res) => {
  res.status(200).json({
    success: true,
    products: [
      { id: 1, name: "Laptop" },
      { id: 2, name: "Mobile" },
      { id: 3, name: "Keyboard" }
    ]
  });
});

export default app;`}
        />

        <h3 className="font-semibold text-[var(--accent-color)]">
          Step 3: Start Server
        </h3>
        <CodeBlock
          code={`// server.js

import app from "./app.js";

const PORT = 3000;

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`}
        />

        <h3 className="font-semibold text-[var(--accent-color)]">
          Step 4: Create Performance Test
        </h3>
        <p className="text-[var(--text-secondary)] leading-7">
          Create a file named <strong>performance-test.js</strong>.
        </p>
        <CodeBlock
          code={`// performance-test.js

import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 20,
  duration: "1m"
};

export default function () {
  const response = http.get(
    "http://localhost:3000/api/products"
  );

  check(response, {
    "status is 200": (r) => r.status === 200,
    "response is valid": (r) =>
      JSON.parse(r.body).success === true
  });

  sleep(1);
}`}
        />

        <h3 className="font-semibold text-[var(--accent-color)]">
          Step 5: Run Performance Test
        </h3>
        <CodeBlock code={`k6 run performance-test.js`} />

        <p className="text-[var(--text-secondary)] leading-7">
          This test simulates 20 virtual users for one minute. Each virtual user
          repeatedly requests the products API and waits one second between
          iterations.
        </p>

        <h3 className="font-semibold text-[var(--accent-color)]">
          Step 6: Set Performance Thresholds
        </h3>
        <p className="text-[var(--text-secondary)] leading-7">
          Thresholds define acceptable performance limits. k6 can fail the test
          when those limits are not satisfied.
        </p>
        <CodeBlock
          code={`export const options = {
  vus: 20,
  duration: "1m",

  thresholds: {
    http_req_duration: ["p(95)<500"],
    http_req_failed: ["rate<0.01"]
  }
};`}
        />

        <p className="text-[var(--text-secondary)] leading-7">Here:</p>
        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>
            p(95)&lt;500 means 95% of HTTP requests should complete in less than
            500 milliseconds.
          </li>
          <li>
            rate&lt;0.01 means the failed HTTP request rate should stay below
            1%.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          7. Understanding Performance Bottlenecks
        </h2>
        <p className="text-[var(--text-secondary)] leading-7">
          A performance bottleneck is a part of the system that limits overall
          performance.
        </p>
        <div className="space-y-3">
          {[
            [
              "Slow Database Queries",
              "Unoptimized queries or missing indexes can increase response time.",
            ],
            [
              "CPU Intensive Tasks",
              "Heavy calculations can block Node.js event loop execution.",
            ],
            [
              "Memory Leaks",
              "Unused objects that remain in memory can gradually increase RAM usage.",
            ],
            [
              "External API Delays",
              "Slow third-party services can delay backend responses.",
            ],
            [
              "Network Latency",
              "Network delays can increase the time required to communicate with services.",
            ],
            [
              "Connection Pool Limits",
              "Insufficient database connections can cause requests to wait.",
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
        <h2 className="text-xl font-semibold">
          8. How to Improve Backend Performance?
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>Use proper database indexes.</li>
          <li>Optimize slow database queries.</li>
          <li>Use caching for frequently accessed data.</li>
          <li>Use pagination for large datasets.</li>
          <li>Avoid unnecessary database queries.</li>
          <li>Use streams for large file processing.</li>
          <li>Move CPU-intensive tasks to workers or background jobs.</li>
          <li>Monitor CPU, memory and event loop performance.</li>
          <li>Use horizontal or vertical scaling when needed.</li>
          <li>Optimize external API communication.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          9. Load Testing vs Performance Testing
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="text-left p-3">Load Testing</th>
                <th className="text-left p-3">Performance Testing</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">A specific type of performance testing.</td>
                <td className="p-3">A broader testing category.</td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Focuses on expected workload.</td>
                <td className="p-3">
                  Focuses on overall speed, stability and scalability.
                </td>
              </tr>
              <tr>
                <td className="p-3">
                  Measures behavior under expected traffic.
                </td>
                <td className="p-3">
                  Can include load, stress, spike and endurance testing.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Best Practices</h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>Define performance goals before testing.</li>
          <li>Use realistic traffic patterns.</li>
          <li>Measure p95 and p99 response times, not only averages.</li>
          <li>Monitor server and database resources during tests.</li>
          <li>Test critical APIs separately.</li>
          <li>Run tests in an environment similar to production.</li>
          <li>Compare results after every major optimization.</li>
          <li>
            Use controlled test environments and avoid unauthorized production
            load tests.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">11. Interview Questions</h2>
        {[
          {
            q: "What is Performance Testing?",
            a: "Performance Testing measures an application's speed, responsiveness, stability and scalability under different workloads.",
          },
          {
            q: "What are the types of Performance Testing?",
            a: "Common types include Load Testing, Stress Testing, Spike Testing, Endurance Testing, Volume Testing and Scalability Testing.",
          },
          {
            q: "What is a Performance Bottleneck?",
            a: "It is a part of the system that limits overall performance, such as a slow database query or CPU-intensive operation.",
          },
          {
            q: "What is Throughput?",
            a: "Throughput measures the number of requests or operations processed in a given amount of time.",
          },
          {
            q: "What is Latency?",
            a: "Latency is the delay before a request begins receiving a response.",
          },
          {
            q: "What is p95 Response Time?",
            a: "p95 is the response time below which 95% of measured requests completed.",
          },
          {
            q: "What is the difference between Load Testing and Performance Testing?",
            a: "Load Testing is one type of Performance Testing, while Performance Testing covers a broader range of performance checks.",
          },
          {
            q: "What is k6?",
            a: "k6 is a performance and load testing tool that allows developers to write test scenarios using JavaScript.",
          },
          {
            q: "How can we improve Node.js backend performance?",
            a: "Optimize database queries, use caching, avoid blocking the event loop, use streams and monitor application resources.",
          },
          {
            q: "What is a Performance Threshold?",
            a: "It defines an acceptable performance limit, such as requiring 95% of requests to complete within 500 milliseconds.",
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
