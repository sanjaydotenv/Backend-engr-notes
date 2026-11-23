import CodeBlock from "../../../components/common/CodeBlock";

export default function APITesting() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          SOFTWARE TESTING / 12
        </p>
        <h1 className="text-3xl font-bold mt-2">API Testing</h1>
        <p className="text-[var(--text-secondary)] mt-3 leading-7">
          API Testing is a software testing technique used to verify that an API
          works correctly. It checks HTTP requests, responses, status codes,
          response data, authentication, validation and error handling.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What Is API Testing?</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          An API allows different applications to communicate with each other.
          API Testing checks whether this communication works as expected.
        </p>
        <p className="text-[var(--text-secondary)] leading-7">
          For example, when a client sends a request to a login API, we verify
          whether the API returns the correct response for valid and invalid
          credentials.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-3">
          <p className="font-semibold text-center">API Testing Flow</p>
          <div className="rounded-lg border border-[var(--border-color)] p-3 text-center">
            Client / Testing Tool
          </div>
          <div className="text-center text-[var(--accent-color)]">
            ↓ HTTP Request
          </div>
          <div className="rounded-lg border border-[var(--border-color)] p-3 text-center">
            Backend API (Express)
          </div>
          <div className="text-center text-[var(--accent-color)]">
            ↓ HTTP Response
          </div>
          <div className="rounded-lg border border-[var(--border-color)] p-3 text-center">
            Testing Assertions
          </div>
          <div className="text-center text-[var(--accent-color)]">↓</div>
          <div className="rounded-lg border border-green-500 p-3 text-center">
            Test Passed or Failed
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          2. Why Do We Need API Testing?
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>Verify that API endpoints work correctly.</li>
          <li>Check HTTP status codes and response data.</li>
          <li>Test request validation and error handling.</li>
          <li>Verify authentication and authorization.</li>
          <li>Find backend bugs before deployment.</li>
          <li>Ensure APIs work correctly with databases and other services.</li>
          <li>Prevent existing functionality from breaking after changes.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. What Do We Test in an API?</h2>
        <div className="space-y-3">
          {[
            [
              "HTTP Methods",
              "Check GET, POST, PUT, PATCH and DELETE operations.",
            ],
            [
              "Status Codes",
              "Verify responses such as 200, 201, 400, 401, 404 and 500.",
            ],
            [
              "Response Body",
              "Check whether returned JSON contains the expected data.",
            ],
            [
              "Headers",
              "Verify headers such as Content-Type and Authorization.",
            ],
            [
              "Request Validation",
              "Check how the API handles missing or invalid input.",
            ],
            [
              "Authentication",
              "Verify that protected routes reject unauthenticated requests.",
            ],
            [
              "Authorization",
              "Verify that users cannot access resources they are not allowed to access.",
            ],
            ["Performance", "Measure response time and behavior under load."],
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
        <h2 className="text-xl font-semibold">4. Types of API Testing</h2>
        <div className="space-y-3">
          {[
            [
              "Functional Testing",
              "Checks whether API features produce the expected results.",
            ],
            [
              "Integration Testing",
              "Checks whether the API works correctly with databases and other services.",
            ],
            [
              "Security Testing",
              "Checks authentication, authorization and common security vulnerabilities.",
            ],
            [
              "Performance Testing",
              "Checks API response time and behavior under different workloads.",
            ],
            [
              "Negative Testing",
              "Checks how the API handles invalid input and unexpected requests.",
            ],
            [
              "Regression Testing",
              "Checks whether new changes have broken previously working API functionality.",
            ],
          ].map((item, index) => (
            <div
              key={item[0]}
              className="rounded-lg border border-[var(--border-color)] p-4"
            >
              <h3 className="font-semibold">
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
        <h2 className="text-xl font-semibold">5. API Testing Tools</h2>
        <div className="space-y-3">
          {[
            [
              "Postman",
              "A GUI tool for sending HTTP requests, checking responses and creating automated API tests.",
            ],
            [
              "Supertest",
              "A JavaScript library for testing HTTP endpoints, commonly used with Express.",
            ],
            [
              "Jest",
              "A JavaScript testing framework used to write and run automated tests.",
            ],
            [
              "Vitest",
              "A fast testing framework commonly used with modern JavaScript projects.",
            ],
            ["REST Assured", "A Java library for testing REST APIs."],
            ["k6", "A tool for load and performance testing APIs."],
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
          6. Manual API Testing Using Postman
        </h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Postman allows us to send HTTP requests manually and inspect the
          server response without writing test code.
        </p>

        <h3 className="font-semibold text-[var(--accent-color)]">
          Step 1: Open Postman
        </h3>
        <p className="text-[var(--text-secondary)] leading-7">
          Install and open Postman. Create a new HTTP request.
        </p>

        <h3 className="font-semibold text-[var(--accent-color)]">
          Step 2: Enter API URL
        </h3>
        <CodeBlock code={`http://localhost:3000/api/users`} />

        <h3 className="font-semibold text-[var(--accent-color)]">
          Step 3: Select HTTP Method
        </h3>
        <p className="text-[var(--text-secondary)] leading-7">
          Select GET from the method dropdown and click Send.
        </p>

        <h3 className="font-semibold text-[var(--accent-color)]">
          Step 4: Check Response
        </h3>
        <CodeBlock
          code={`Status: 200 OK

Response Body:

[
  {
    "_id": "123",
    "name": "Mayur",
    "email": "mayur@example.com"
  }
]`}
        />

        <p className="text-[var(--text-secondary)] leading-7">
          Verify the status code, response body, headers and response time. For
          a POST request, select POST and provide JSON data in the Body tab with
          raw JSON format.
        </p>

        <CodeBlock
          code={`{
  "name": "Mayur",
  "email": "mayur@example.com"
}`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          7. Automated API Testing Using Supertest + Vitest
        </h2>
        <p className="text-[var(--text-secondary)] leading-7">
          We can automate API testing using Supertest and Vitest. Supertest
          sends HTTP requests to our Express application, while Vitest executes
          test cases and checks the results.
        </p>

        <h3 className="font-semibold text-[var(--accent-color)]">
          Step 1: Install Dependencies
        </h3>
        <CodeBlock
          code={`npm install express
npm install -D vitest supertest`}
        />

        <h3 className="font-semibold text-[var(--accent-color)]">
          Step 2: Create Express App
        </h3>
        <p className="text-[var(--text-secondary)] leading-7">
          Create <strong>app.js</strong>. We export the Express app without
          starting the server. This makes it easy to test.
        </p>
        <CodeBlock
          code={`// app.js

import express from "express";

const app = express();

app.use(express.json());

const users = [
  {
    id: 1,
    name: "Mayur",
    email: "mayur@example.com"
  }
];

app.get("/api/users", (req, res) => {
  res.status(200).json({
    success: true,
    users
  });
});

app.post("/api/users", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      success: false,
      message: "Name and email are required"
    });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email
  };

  users.push(newUser);

  return res.status(201).json({
    success: true,
    user: newUser
  });
});

export default app;`}
        />

        <h3 className="font-semibold text-[var(--accent-color)]">
          Step 3: Create Server File
        </h3>
        <p className="text-[var(--text-secondary)] leading-7">
          Create <strong>server.js</strong>. This file starts the actual server
          during normal application execution.
        </p>
        <CodeBlock
          code={`// server.js

import app from "./app.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`}
        />

        <h3 className="font-semibold text-[var(--accent-color)]">
          Step 4: Write API Tests
        </h3>
        <p className="text-[var(--text-secondary)] leading-7">
          Create <strong>app.test.js</strong>. We will test successful GET and
          POST requests, along with invalid input.
        </p>
        <CodeBlock
          code={`// app.test.js

import { describe, test, expect } from "vitest";
import request from "supertest";
import app from "./app.js";

describe("User API Tests", () => {
  test("GET /api/users returns users", async () => {
    const response = await request(app)
      .get("/api/users");

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.users).toHaveLength(1);
  });

  test("POST /api/users creates a user", async () => {
    const response = await request(app)
      .post("/api/users")
      .send({
        name: "Rahul",
        email: "rahul@example.com"
      });

    expect(response.status).toBe(201);
    expect(response.body.user.name).toBe("Rahul");
  });

  test("POST /api/users rejects invalid data", async () => {
    const response = await request(app)
      .post("/api/users")
      .send({
        name: "Rahul"
      });

    expect(response.status).toBe(400);
    expect(response.body.success).toBe(false);
  });
});`}
        />

        <h3 className="font-semibold text-[var(--accent-color)]">
          Step 5: Run Tests
        </h3>
        <CodeBlock code={`npx vitest run`} />

        <p className="text-[var(--text-secondary)] leading-7">
          Vitest runs the test cases. Supertest sends requests to the Express
          app and returns responses that we can verify using expect().
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-2">
          <p className="font-semibold">
            Important: Why separate app.js and server.js?
          </p>
          <p className="text-sm text-[var(--text-secondary)] leading-6">
            If we call app.listen() directly inside the app file, importing it
            in tests may also start a real network server. Separating the app
            from the server lets Supertest test the Express app without manually
            starting a listening server.
          </p>
        </div>

        <p className="text-sm text-[var(--text-secondary)] leading-6">
          This example uses an in-memory array, so it is suitable for learning.
          In real projects, use an isolated test database or clean up database
          records between tests to prevent test data from affecting other test
          cases.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          8. Common HTTP Status Codes in API Testing
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="text-left p-3">Status</th>
                <th className="text-left p-3">Meaning</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              {[
                ["200", "OK - Request successful"],
                ["201", "Created - Resource created"],
                ["204", "No Content - Successful response without a body"],
                ["400", "Bad Request - Invalid request"],
                ["401", "Unauthorized - Authentication required or invalid"],
                ["403", "Forbidden - User does not have permission"],
                ["404", "Not Found - Resource does not exist"],
                [
                  "409",
                  "Conflict - Request conflicts with current resource state",
                ],
                ["500", "Internal Server Error - Server-side error"],
              ].map((item) => (
                <tr
                  key={item[0]}
                  className="border-b border-[var(--border-color)]"
                >
                  <td className="p-3 font-medium">{item[0]}</td>
                  <td className="p-3">{item[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. API Testing Best Practices</h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>Test every important API endpoint.</li>
          <li>Verify status codes and response data.</li>
          <li>Test valid, invalid and missing request data.</li>
          <li>Test authentication and authorization.</li>
          <li>Check error responses and edge cases.</li>
          <li>Keep tests independent from one another.</li>
          <li>Use a separate test database for database-related tests.</li>
          <li>Never use production data for automated testing.</li>
          <li>Run API tests before deploying important changes.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Interview Questions</h2>
        {[
          {
            q: "What is API Testing?",
            a: "API Testing verifies that an API works correctly by checking requests, responses, status codes, data and error handling.",
          },
          {
            q: "Why is API Testing important?",
            a: "It helps detect backend issues, validate business logic, verify security and ensure reliable communication between applications.",
          },
          {
            q: "What is the difference between manual and automated API testing?",
            a: "Manual testing uses tools such as Postman to send requests manually. Automated testing uses code and testing frameworks to execute test cases automatically.",
          },
          {
            q: "What is Supertest?",
            a: "Supertest is a Node.js library used to send HTTP requests to an application and test its HTTP responses.",
          },
          {
            q: "Why do we use Vitest with Supertest?",
            a: "Vitest runs test cases and provides assertions, while Supertest sends HTTP requests to the application.",
          },
          {
            q: "What should we verify in API Testing?",
            a: "HTTP methods, status codes, response body, headers, validation, authentication, authorization and error handling.",
          },
          {
            q: "What is Negative API Testing?",
            a: "It checks how an API handles invalid input, missing fields, unauthorized requests and unexpected data.",
          },
          {
            q: "What is the difference between 401 and 403?",
            a: "401 means valid authentication is missing or failed. 403 means the server understood the request but the user is not allowed to perform the operation.",
          },
          {
            q: "Why separate app.js and server.js?",
            a: "It allows the Express app to be imported and tested without automatically starting a listening HTTP server.",
          },
          {
            q: "Does API Testing always require a database?",
            a: "No. Some API tests can use mocked dependencies or in-memory data. Database integration tests require an appropriate test database.",
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
