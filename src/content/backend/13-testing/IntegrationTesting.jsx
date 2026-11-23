import CodeBlock from "../../../components/common/CodeBlock";

export default function IntegrationTesting() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          SOFTWARE TESTING / 03
        </p>
        <h1 className="text-3xl font-bold mt-2">Integration Testing</h1>
        <p className="text-[var(--text-secondary)] mt-3 leading-7">
          Integration Testing is a software testing technique in which we test
          multiple components together to verify that they communicate and
          work correctly with each other.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. Why Do We Need Integration Testing?</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          In a backend application, different components work together. For
          example, an API controller communicates with a service, which
          communicates with a database.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-3 text-center">
          {["API Controller", "User Service", "User Model", "MongoDB Database"].map(
            (item, index) => (
              <div key={item}>
                <div className="rounded-lg border border-[var(--border-color)] p-3">
                  {item}
                </div>
                {index !== 3 && (
                  <div className="text-[var(--accent-color)] py-1">↓</div>
                )}
              </div>
            )
          )}
        </div>

        <p className="text-[var(--text-secondary)] leading-7">
          Even if every component works individually, problems can occur when
          they interact. Integration Testing helps identify these problems.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. How Integration Testing Works</h2>
        <ol className="list-decimal pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>Connect multiple application components.</li>
          <li>Provide input through an API or another entry point.</li>
          <li>Execute the complete interaction between components.</li>
          <li>Check database operations and returned responses.</li>
          <li>Compare actual results with expected results.</li>
        </ol>

        <p className="text-[var(--text-secondary)] leading-7">
          Example: When a user registers, we test whether the API receives the
          request, validates the data, saves the user in MongoDB and returns
          the correct response.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Unit Testing vs Integration Testing</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="text-left p-3">Unit Testing</th>
                <th className="text-left p-3">Integration Testing</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Tests individual components.</td>
                <td className="p-3">Tests multiple components together.</td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Usually mocks external dependencies.</td>
                <td className="p-3">Often uses real dependencies such as a test database.</td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Finds errors inside individual units.</td>
                <td className="p-3">Finds errors in communication between components.</td>
              </tr>
              <tr>
                <td className="p-3">Usually faster.</td>
                <td className="p-3">Usually takes more time to execute.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Integration Testing in Node.js</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Let's understand integration testing using a simple Express API and
          MongoDB application.
        </p>

        <h3 className="font-semibold text-[var(--accent-color)]">Step 1: Create an Express Application</h3>
        <CodeBlock code={`// app.js

import express from "express";
import User from "./models/User.js";

const app = express();

app.use(express.json());

app.post("/users", async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email
    });

    res.status(201).json({
      message: "User created",
      user
    });
  } catch (error) {
    res.status(400).json({
      message: "Unable to create user"
    });
  }
});

export default app;`} />

        <p className="text-[var(--text-secondary)] leading-7">
          Notice that we export the Express app instead of starting the server
          inside this file. This makes it easier to test API endpoints without
          opening a separate network port.
        </p>

        <h3 className="font-semibold text-[var(--accent-color)]">Step 2: Create the User Model</h3>
        <CodeBlock code={`// models/User.js

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
});

export default mongoose.model("User", userSchema);`} />

        <h3 className="font-semibold text-[var(--accent-color)]">Step 3: Install Testing Packages</h3>
        <CodeBlock code={`npm install --save-dev jest supertest mongodb-memory-server`} />

        <p className="text-sm text-[var(--text-secondary)] leading-6">
          Jest runs the tests, Supertest sends HTTP requests to the Express
          application, and mongodb-memory-server provides a temporary MongoDB
          instance for testing.
        </p>

        <h3 className="font-semibold text-[var(--accent-color)]">Step 4: Write an Integration Test</h3>
        <CodeBlock code={`// app.test.js

import mongoose from "mongoose";
import request from "supertest";
import { MongoMemoryServer } from "mongodb-memory-server";

import app from "./app.js";
import User from "./models/User.js";

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();

  await mongoose.connect(mongoServer.getUri());
});

afterEach(async () => {
  await User.deleteMany({});
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

test("creates a user successfully", async () => {
  const response = await request(app)
    .post("/users")
    .send({
      name: "Mayur",
      email: "mayur@example.com"
    });

  expect(response.status).toBe(201);
  expect(response.body.user.name).toBe("Mayur");

  // Verify that data was actually saved
  const user = await User.findOne({
    email: "mayur@example.com"
  });

  expect(user).not.toBeNull();
});`} />

        <h3 className="font-semibold text-[var(--accent-color)]">Step 5: Run the Test</h3>
        <CodeBlock code={`npx jest app.test.js`} />

        <p className="text-[var(--text-secondary)] leading-7">
          This test sends a real HTTP request through Express, executes the
          Mongoose database operation and verifies the saved record. This is
          Integration Testing because multiple components work together.
        </p>

        <div className="rounded-lg border border-[var(--border-color)] p-4">
          <p className="font-semibold text-[var(--accent-color)]">Important Setup Note</p>
          <p className="text-sm text-[var(--text-secondary)] mt-2 leading-6">
            This example uses Jest with ES modules. Configure Jest for ESM
            before running it. Also ensure MongoMemoryServer and Mongoose use
            compatible versions. Database setup and cleanup should be handled
            carefully when tests run in parallel.
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Types of Integration Testing</h2>

        <h3 className="font-semibold text-[var(--accent-color)]">A. Big Bang Integration Testing</h3>
        <p className="text-[var(--text-secondary)] leading-7">
          All components are integrated together at once and then tested.
          Finding the exact source of a failure can be difficult.
        </p>

        <h3 className="font-semibold text-[var(--accent-color)]">B. Top-Down Integration Testing</h3>
        <p className="text-[var(--text-secondary)] leading-7">
          Testing starts from higher-level components and gradually includes
          lower-level components. Missing lower-level components can be
          temporarily replaced with stubs.
        </p>

        <h3 className="font-semibold text-[var(--accent-color)]">C. Bottom-Up Integration Testing</h3>
        <p className="text-[var(--text-secondary)] leading-7">
          Testing starts from lower-level components and gradually combines
          them with higher-level components. Drivers can be used to simulate
          higher-level components.
        </p>

        <h3 className="font-semibold text-[var(--accent-color)]">D. Sandwich / Hybrid Integration Testing</h3>
        <p className="text-[var(--text-secondary)] leading-7">
          This approach combines Top-Down and Bottom-Up integration testing.
          Both approaches are performed together.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. What Should We Test?</h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>API and database communication.</li>
          <li>Controller and service interactions.</li>
          <li>Authentication and database operations.</li>
          <li>Data validation and error handling.</li>
          <li>Relationships between database models.</li>
          <li>External service integrations.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Advantages of Integration Testing</h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>Finds communication problems between components.</li>
          <li>Verifies real interactions between application layers.</li>
          <li>Helps identify database and API integration errors.</li>
          <li>Improves overall application reliability.</li>
          <li>Detects problems that isolated unit tests may miss.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Best Practices</h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>Use a separate test database or temporary database instance.</li>
          <li>Clean test data after each test when necessary.</li>
          <li>Test successful and failure scenarios.</li>
          <li>Verify both HTTP responses and database changes.</li>
          <li>Keep tests independent and repeatable.</li>
          <li>Do not use production credentials or production data.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Interview Questions</h2>
        {[
          {
            q: "What is Integration Testing?",
            a: "Integration Testing verifies that multiple components work correctly together."
          },
          {
            q: "Why do we need Integration Testing?",
            a: "It identifies problems in communication between components, such as an API, service and database."
          },
          {
            q: "What is the difference between Unit and Integration Testing?",
            a: "Unit Testing checks individual components, while Integration Testing checks interactions between multiple components."
          },
          {
            q: "What is Big Bang Integration Testing?",
            a: "It is an approach where all components are integrated together at once and then tested."
          },
          {
            q: "What is Top-Down Integration Testing?",
            a: "Testing starts from higher-level components and gradually includes lower-level components."
          },
          {
            q: "What is Bottom-Up Integration Testing?",
            a: "Testing starts from lower-level components and gradually combines them with higher-level components."
          },
          {
            q: "What is Supertest?",
            a: "Supertest is a Node.js library used to send HTTP requests and test server responses."
          },
          {
            q: "Why use MongoMemoryServer?",
            a: "It provides a temporary MongoDB instance for isolated database integration tests without using a production database."
          },
          {
            q: "Why do we export the Express app separately from the server?",
            a: "It allows tests to send requests directly to the Express app without starting a separate listening server."
          }
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