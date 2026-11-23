import CodeBlock from "../../../components/common/CodeBlock";

export default function Supertest() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          SOFTWARE TESTING / 07
        </p>
        <h1 className="text-3xl font-bold mt-2">Supertest</h1>
        <p className="text-[var(--text-secondary)] mt-3 leading-7">
          Supertest is a Node.js library used to test HTTP servers and APIs. It
          allows developers to send HTTP requests to an application and verify
          responses such as status codes, response bodies and headers
          automatically.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What Is Supertest?</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Supertest is an HTTP testing library commonly used with Express.js. It
          helps developers test API endpoints without manually opening Postman
          or sending requests from a browser.
        </p>
        <p className="text-[var(--text-secondary)] leading-7">
          For example, suppose your backend has a GET /users API. Supertest can
          send a GET request and check whether the server returns the correct
          status code and user data.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-2 text-center">
          <div className="rounded-lg border border-[var(--border-color)] p-3">
            Supertest Test Case
          </div>
          <div className="text-[var(--accent-color)]">↓ HTTP Request</div>
          <div className="rounded-lg border border-[var(--border-color)] p-3">
            Express.js API
          </div>
          <div className="text-[var(--accent-color)]">↓</div>
          <div className="rounded-lg border border-[var(--border-color)] p-3">
            Controller / Service / Database
          </div>
          <div className="text-[var(--accent-color)]">↓ HTTP Response</div>
          <div className="rounded-lg border border-[var(--border-color)] p-3">
            Supertest Assertions: PASS / FAIL
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Why Do We Need Supertest?</h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>Automatically tests Express API endpoints.</li>
          <li>Checks HTTP status codes and response bodies.</li>
          <li>Tests GET, POST, PUT, PATCH and DELETE requests.</li>
          <li>Tests request headers, authentication and query parameters.</li>
          <li>Works with Jest and Vitest.</li>
          <li>Helps perform API integration testing.</li>
          <li>Reduces repetitive manual API testing.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Supertest vs Jest</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Both tools have different responsibilities. Jest runs the test cases,
          while Supertest sends HTTP requests to your server.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="text-left p-3">Jest</th>
                <th className="text-left p-3">Supertest</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Testing framework.</td>
                <td className="p-3">HTTP testing library.</td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Runs test cases.</td>
                <td className="p-3">Sends HTTP requests.</td>
              </tr>
              <tr>
                <td className="p-3">Provides assertions and mocking.</td>
                <td className="p-3">Provides HTTP response testing methods.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Installing Supertest</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          First, create a Node.js project and install Express, Jest and
          Supertest.
        </p>
        <CodeBlock
          code={`npm init -y

npm install express

npm install --save-dev jest supertest`}
        />

        <p className="text-[var(--text-secondary)] leading-7">
          If you are using Vitest instead of Jest, you can install Supertest
          with:
        </p>
        <CodeBlock code={`npm install --save-dev vitest supertest`} />

        <p className="text-sm text-[var(--text-secondary)] leading-6">
          Supertest is an HTTP testing library. Jest or Vitest is still needed
          to organize and execute test cases.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          5. Create an Express Application
        </h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Let's create a simple Express application with a users API.
        </p>

        <CodeBlock
          code={`// app.js

import express from "express";

const app = express();

app.use(express.json());

const users = [
  {
    id: 1,
    name: "Mayur"
  }
];

// GET API
app.get("/users", (req, res) => {
  res.status(200).json({
    success: true,
    users
  });
});

// GET user by ID
app.get("/users/:id", (req, res) => {
  const user = users.find(
    (item) => item.id === Number(req.params.id)
  );

  if (!user) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  res.status(200).json({
    success: true,
    user
  });
});

// POST API
app.post("/users", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      message: "Name is required"
    });
  }

  const newUser = {
    id: users.length + 1,
    name
  };

  users.push(newUser);

  res.status(201).json({
    success: true,
    user: newUser
  });
});

export default app;`}
        />

        <p className="text-[var(--text-secondary)] leading-7">
          Notice that we export the Express app separately. We do not call
          app.listen() inside this file. This makes it easier for Supertest to
          test the application directly.
        </p>

        <h3 className="font-semibold text-[var(--accent-color)]">
          Create a Separate Server File
        </h3>
        <CodeBlock
          code={`// server.js

import app from "./app.js";

const PORT = 3000;

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`}
        />

        <p className="text-[var(--text-secondary)] leading-7">
          The server file starts the actual application, while app.js exports
          the Express instance that tests can use.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          6. Testing GET API Using Supertest
        </h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Now let's test our GET /users endpoint.
        </p>

        <CodeBlock
          code={`// app.test.js

import request from "supertest";
import { test, expect } from "vitest";

import app from "./app.js";

test("GET /users should return users", async () => {
  const response = await request(app)
    .get("/users");

  expect(response.status).toBe(200);

  expect(response.body.success).toBe(true);

  expect(response.body.users).toHaveLength(1);

  expect(response.body.users[0].name).toBe("Mayur");
});`}
        />

        <p className="text-[var(--text-secondary)] leading-7">Explanation:</p>
        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>
            <strong>request(app):</strong> Creates a test request against the
            Express application.
          </li>
          <li>
            <strong>.get("/users"):</strong> Sends a GET request.
          </li>
          <li>
            <strong>response.status:</strong> Checks the HTTP status code.
          </li>
          <li>
            <strong>response.body:</strong> Contains the parsed response body.
          </li>
          <li>
            <strong>toHaveLength(1):</strong> Checks that one user was returned.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Testing POST API</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Supertest provides the send() method to send JSON data in the request
          body.
        </p>
        <CodeBlock
          code={`test("POST /users should create a user", async () => {
  const response = await request(app)
    .post("/users")
    .send({
      name: "Rahul"
    });

  expect(response.status).toBe(201);

  expect(response.body.success).toBe(true);

  expect(response.body.user.name).toBe("Rahul");
});`}
        />

        <p className="text-[var(--text-secondary)] leading-7">
          Here, Supertest sends a POST request with a JSON body and verifies
          that the API creates a user successfully.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Testing Error Responses</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          We should also test invalid requests and error responses.
        </p>

        <h3 className="font-semibold text-[var(--text-accent)]">
          Testing Validation Error
        </h3>
        <CodeBlock
          code={`test("POST /users should reject missing name", async () => {
  const response = await request(app)
    .post("/users")
    .send({});

  expect(response.status).toBe(400);

  expect(response.body.message).toBe(
    "Name is required"
  );
});`}
        />

        <h3 className="font-semibold text-[var(--text-accent)]">
          Testing Not Found Error
        </h3>
        <CodeBlock
          code={`test("GET /users/999 should return 404", async () => {
  const response = await request(app)
    .get("/users/999");

  expect(response.status).toBe(404);

  expect(response.body.message).toBe(
    "User not found"
  );
});`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          9. Important Supertest Methods
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="text-left p-3">Method</th>
                <th className="text-left p-3">Purpose</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              {[
                [".get()", "Sends a GET request."],
                [".post()", "Sends a POST request."],
                [".put()", "Sends a PUT request."],
                [".patch()", "Sends a PATCH request."],
                [".delete()", "Sends a DELETE request."],
                [".send()", "Sends request body data."],
                [".set()", "Sets request headers."],
                [".query()", "Adds URL query parameters."],
                [".expect()", "Checks expected response values."],
              ].map(([method, purpose]) => (
                <tr
                  key={method}
                  className="border-b border-[var(--border-color)] last:border-0"
                >
                  <td className="p-3 font-mono text-[var(--accent-color)]">
                    {method}
                  </td>
                  <td className="p-3">{purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          10. Testing Headers and Authentication
        </h2>
        <p className="text-[var(--text-secondary)] leading-7">
          APIs often require authentication tokens. Supertest can send
          authorization headers using set().
        </p>
        <CodeBlock
          code={`test("GET /profile with token", async () => {
  const response = await request(app)
    .get("/profile")
    .set("Authorization", "Bearer test-token");

  expect(response.status).toBe(200);
});`}
        />

        <p className="text-[var(--text-secondary)] leading-7">
          We can also test query parameters using query().
        </p>
        <CodeBlock
          code={`test("GET /users with search query", async () => {
  const response = await request(app)
    .get("/users")
    .query({
      name: "Mayur"
    });

  expect(response.status).toBe(200);
});`}
        />

        <p className="text-sm text-[var(--text-secondary)] leading-6">
          These examples assume that the corresponding routes and authentication
          logic exist in the application. Use test tokens rather than production
          credentials.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">11. Using .expect() Directly</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Supertest also provides its own expect() method for checking responses
          directly in the request chain.
        </p>
        <CodeBlock
          code={`test("checks response directly", async () => {
  await request(app)
    .get("/users")
    .expect("Content-Type", /json/)
    .expect(200);
});`}
        />

        <p className="text-[var(--text-secondary)] leading-7">
          You can use Supertest's .expect() or the testing framework's expect()
          for assertions. Both approaches are valid.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">12. Running Tests</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Add a test script to package.json:
        </p>
        <CodeBlock
          code={`{
  "scripts": {
    "test": "vitest run",
    "test:watch": "vitest"
  }
}`}
        />

        <p className="text-[var(--text-secondary)] leading-7">Run all tests:</p>
        <CodeBlock code={`npm test`} />

        <p className="text-[var(--text-secondary)] leading-7">
          Run tests in watch mode:
        </p>
        <CodeBlock code={`npm run test:watch`} />

        <p className="text-sm text-[var(--text-secondary)] leading-6">
          The examples use Vitest. If you use Jest, import test and expect from
          Jest or use its configured globals instead. The Supertest request
          syntax remains the same.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">13. Supertest with Database</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          In real backend applications, API endpoints often communicate with
          MongoDB. Supertest can test the complete API and database interaction
          together.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-2 text-center">
          <div className="rounded-lg border border-[var(--border-color)] p-3">
            Supertest
          </div>
          <div className="text-[var(--accent-color)]">↓</div>
          <div className="rounded-lg border border-[var(--border-color)] p-3">
            Express Route
          </div>
          <div className="text-[var(--accent-color)]">↓</div>
          <div className="rounded-lg border border-[var(--border-color)] p-3">
            Controller / Service
          </div>
          <div className="text-[var(--accent-color)]">↓</div>
          <div className="rounded-lg border border-[var(--border-color)] p-3">
            Mongoose Model
          </div>
          <div className="text-[var(--accent-color)]">↓</div>
          <div className="rounded-lg border border-[var(--border-color)] p-3">
            Test MongoDB Database
          </div>
        </div>

        <p className="text-[var(--text-secondary)] leading-7">
          For database integration tests, use a separate test database or a
          temporary MongoDB instance. Clean up test records after each test and
          close database connections after the test suite finishes.
        </p>

        <p className="text-[var(--text-secondary)] leading-7">
          This approach verifies that the API receives a request, performs the
          database operation and returns the expected response.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">14. Supertest Best Practices</h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>Export the Express app separately from app.listen().</li>
          <li>Test successful and failed API requests.</li>
          <li>Verify status codes, response bodies and headers.</li>
          <li>Use a dedicated test database.</li>
          <li>Reset test data to keep tests independent.</li>
          <li>Test authentication and authorization scenarios.</li>
          <li>Never use production credentials or real user data.</li>
          <li>Close database connections and other resources after tests.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">15. Interview Questions</h2>
        {[
          {
            q: "What is Supertest?",
            a: "Supertest is a Node.js HTTP testing library used to test server endpoints and verify HTTP responses.",
          },
          {
            q: "Why do we use Supertest?",
            a: "It automates API testing by sending HTTP requests and checking status codes, headers and response bodies.",
          },
          {
            q: "What is the difference between Jest and Supertest?",
            a: "Jest is a testing framework that runs test cases, while Supertest sends HTTP requests to test server endpoints.",
          },
          {
            q: "Can Supertest be used with Express?",
            a: "Yes. Supertest is commonly used to test Express applications.",
          },
          {
            q: "What does request(app) do?",
            a: "It creates a Supertest request interface for sending HTTP requests to the application.",
          },
          {
            q: "What is the purpose of send()?",
            a: "send() provides request body data, such as JSON, to an API endpoint.",
          },
          {
            q: "What is the purpose of set()?",
            a: "set() adds request headers such as Authorization and Content-Type.",
          },
          {
            q: "What is the purpose of query()?",
            a: "query() adds query parameters to the HTTP request URL.",
          },
          {
            q: "Why should app.listen() be separated from the Express app?",
            a: "It allows Supertest to test the Express application without manually starting a listening server.",
          },
          {
            q: "Can Supertest perform integration testing?",
            a: "Yes. It can test interactions between Express routes, controllers, services and databases.",
          },
          {
            q: "Can Supertest work with Vitest?",
            a: "Yes. Supertest can be used with Vitest, Jest and other compatible test runners.",
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
