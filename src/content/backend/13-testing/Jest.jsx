import CodeBlock from "../../../components/common/CodeBlock";

export default function Jest() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          SOFTWARE TESTING / 05
        </p>
        <h1 className="text-3xl font-bold mt-2">Jest Testing Framework</h1>
        <p className="text-[var(--text-secondary)] mt-3 leading-7">
          Jest is a JavaScript testing framework used to test application logic,
          functions, APIs and different parts of JavaScript applications. It
          provides test functions, assertions, mocking, code coverage and other
          testing utilities.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What Is Jest?</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Jest is an open-source JavaScript testing framework developed by Meta.
          It is commonly used for testing JavaScript and TypeScript
          applications.
        </p>

        <p className="text-[var(--text-secondary)] leading-7">
          Instead of manually checking every function, we write test cases. Jest
          executes those tests and tells us whether the actual output matches
          the expected output.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-2 text-center">
          <div className="rounded-lg border border-[var(--border-color)] p-3">
            JavaScript Function
          </div>
          <div className="text-[var(--accent-color)]">↓</div>
          <div className="rounded-lg border border-[var(--border-color)] p-3">
            Jest Test Case
          </div>
          <div className="text-[var(--accent-color)]">↓</div>
          <div className="rounded-lg border border-[var(--border-color)] p-3">
            Compare Actual Output with Expected Output
          </div>
          <div className="text-[var(--accent-color)]">↓</div>
          <div className="rounded-lg border border-[var(--border-color)] p-3">
            PASS / FAIL
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Features of Jest</h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>
            <strong>Test Runner:</strong> Executes test cases.
          </li>
          <li>
            <strong>Assertions:</strong> Checks actual output against expected
            output.
          </li>
          <li>
            <strong>Mocking:</strong> Replaces real functions or dependencies
            with controlled implementations.
          </li>
          <li>
            <strong>Code Coverage:</strong> Reports how much code is executed by
            tests.
          </li>
          <li>
            <strong>Snapshot Testing:</strong> Compares rendered output or
            serialized data with a saved snapshot.
          </li>
          <li>
            <strong>Async Testing:</strong> Supports testing promises and
            asynchronous functions.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Installing Jest</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          First, create a Node.js project if you don't already have one.
        </p>
        <CodeBlock code={`npm init -y`} />

        <p className="text-[var(--text-secondary)] leading-7">
          Install Jest as a development dependency:
        </p>
        <CodeBlock code={`npm install --save-dev jest`} />

        <p className="text-[var(--text-secondary)] leading-7">
          Jest is a development dependency because it is generally needed during
          development and testing, not when running the production application.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Jest Configuration</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Open package.json and add a test script.
        </p>
        <CodeBlock
          code={`{
  "scripts": {
    "test": "jest"
  }
}`}
        />

        <p className="text-[var(--text-secondary)] leading-7">
          Now you can execute Jest using:
        </p>
        <CodeBlock code={`npm test`} />

        <p className="text-[var(--text-secondary)] leading-7">
          Jest automatically discovers test files using naming patterns such as:
        </p>
        <CodeBlock
          code={`math.test.js
math.spec.js
__tests__/math.js`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          5. Writing Your First Jest Test
        </h2>

        <h3 className="font-semibold text-[var(--accent-color)]">
          Step 1: Create a Function
        </h3>
        <CodeBlock
          code={`// math.js

function add(a, b) {
  return a + b;
}

module.exports = add;`}
        />

        <h3 className="font-semibold text-[var(--accent-color)]">
          Step 2: Create a Test File
        </h3>
        <CodeBlock
          code={`// math.test.js

const add = require("./math");

test("adds two numbers", () => {
  const result = add(10, 20);

  expect(result).toBe(30);
});`}
        />

        <h3 className="font-semibold text-[var(--accent-color)]">
          Step 3: Run the Test
        </h3>
        <CodeBlock code={`npm test`} />

        <p className="text-[var(--text-secondary)] leading-7">
          If the actual result is 30, Jest marks the test as PASS. If the result
          is different, Jest marks it as FAIL and displays the error.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          6. Understanding test() and expect()
        </h2>

        <h3 className="font-semibold text-[var(--accent-color)]">test()</h3>
        <p className="text-[var(--text-secondary)] leading-7">
          The test() function defines an individual test case. It accepts a test
          description and a callback containing the testing logic.
        </p>
        <CodeBlock
          code={`test("checks addition", () => {
  // Testing logic
});`}
        />

        <h3 className="font-semibold text-[var(--accent-color)]">expect()</h3>
        <p className="text-[var(--text-secondary)] leading-7">
          The expect() function receives the actual value that we want to test.
        </p>
        <CodeBlock code={`expect(10 + 20).toBe(30);`} />

        <h3 className="font-semibold text-[var(--accent-color)]">Matcher</h3>
        <p className="text-[var(--text-secondary)] leading-7">
          A matcher is a method that checks whether the actual value matches the
          expected condition.
        </p>
        <CodeBlock code={`expect(10).toBe(10);`} />

        <p className="text-[var(--text-secondary)] leading-7">
          Here, toBe() is the matcher. It checks whether the received value
          matches the expected value.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Important Jest Matchers</h2>

        <CodeBlock
          code={`// Exact value comparison
expect(10).toBe(10);

// Deep equality for objects and arrays
expect({ name: "Mayur" }).toEqual({
  name: "Mayur"
});

// Truthy and falsy values
expect(true).toBeTruthy();
expect(false).toBeFalsy();

// Null and undefined
expect(null).toBeNull();
expect(undefined).toBeUndefined();

// Number comparison
expect(20).toBeGreaterThan(10);
expect(5).toBeLessThan(10);

// String matching
expect("Hello World").toMatch(/World/);

// Array contains value
expect(["JS", "Node"]).toContain("Node");

// Check property
expect({ name: "Mayur" }).toHaveProperty("name");

// Negation
expect(10).not.toBe(20);`}
        />

        <p className="text-[var(--text-secondary)] leading-7">
          Important difference: toBe() is generally used for primitive values
          and identity comparison, while toEqual() checks deep equality of
          objects and arrays.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          8. Testing Errors with toThrow()
        </h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Sometimes we want to verify that a function throws an error when
          invalid input is provided.
        </p>
        <CodeBlock
          code={`// divide.js

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }

  return a / b;
}

module.exports = divide;`}
        />

        <CodeBlock
          code={`// divide.test.js

const divide = require("./divide");

test("throws error when divisor is zero", () => {
  expect(() => divide(10, 0)).toThrow(
    "Cannot divide by zero"
  );
});`}
        />

        <p className="text-[var(--text-secondary)] leading-7">
          Notice that we pass a function inside expect(). This allows Jest to
          execute the function and capture the error.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          9. Grouping Tests with describe()
        </h2>
        <p className="text-[var(--text-secondary)] leading-7">
          describe() groups related test cases together. It helps organize large
          test files.
        </p>
        <CodeBlock
          code={`const add = require("./math");

describe("Math Operations", () => {
  test("adds numbers", () => {
    expect(add(10, 20)).toBe(30);
  });

  test("adds negative numbers", () => {
    expect(add(-5, -5)).toBe(-10);
  });

  test("adds zero", () => {
    expect(add(10, 0)).toBe(10);
  });
});`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Setup and Cleanup Hooks</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Jest provides hooks to execute setup and cleanup logic before or after
          tests.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="text-left p-3">Hook</th>
                <th className="text-left p-3">Purpose</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">beforeAll()</td>
                <td className="p-3">
                  Runs once before all tests in its scope.
                </td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">afterAll()</td>
                <td className="p-3">Runs once after all tests in its scope.</td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">beforeEach()</td>
                <td className="p-3">Runs before each test.</td>
              </tr>
              <tr>
                <td className="p-3">afterEach()</td>
                <td className="p-3">Runs after each test.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <CodeBlock
          code={`beforeAll(() => {
  console.log("Setup once");
});

beforeEach(() => {
  console.log("Before every test");
});

afterEach(() => {
  console.log("After every test");
});

afterAll(() => {
  console.log("Cleanup once");
});

test("first test", () => {
  expect(2 + 2).toBe(4);
});

test("second test", () => {
  expect(3 + 3).toBe(6);
});`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">11. Asynchronous Testing</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          JavaScript applications frequently use asynchronous operations such as
          database queries, API requests and file operations. Jest supports
          testing these operations.
        </p>

        <h3 className="font-semibold text-[var(--accent-color)]">
          A. Testing Promises
        </h3>
        <CodeBlock
          code={`function getUser() {
  return Promise.resolve({
    name: "Mayur"
  });
}

test("gets user data", () => {
  return getUser().then((user) => {
    expect(user.name).toBe("Mayur");
  });
});`}
        />

        <h3 className="font-semibold text-[var(--accent-color)]">
          B. Using async/await
        </h3>
        <CodeBlock
          code={`test("gets user data", async () => {
  const user = await getUser();

  expect(user.name).toBe("Mayur");
});`}
        />

        <h3 className="font-semibold text-[var(--accent-color)]">
          C. Testing Rejected Promises
        </h3>
        <CodeBlock
          code={`function getUser() {
  return Promise.reject(
    new Error("User not found")
  );
}

test("handles rejected promise", async () => {
  await expect(getUser()).rejects.toThrow(
    "User not found"
  );
});`}
        />

        <p className="text-[var(--text-secondary)] leading-7">
          Always return or await asynchronous operations. Otherwise, Jest might
          finish the test before the asynchronous assertion executes.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">12. Mocking in Jest</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Mocking means replacing a real function or dependency with a
          controlled fake implementation during testing.
        </p>

        <p className="text-[var(--text-secondary)] leading-7">
          For example, if a function sends an email, we don't want to send a
          real email every time we run a test. We can mock that function.
        </p>

        <h3 className="font-semibold text-[var(--accent-color)]">
          Using jest.fn()
        </h3>
        <CodeBlock
          code={`test("calls email function", () => {
  const sendEmail = jest.fn();

  sendEmail("mayur@example.com");

  expect(sendEmail).toHaveBeenCalled();
  expect(sendEmail).toHaveBeenCalledWith(
    "mayur@example.com"
  );
});`}
        />

        <h3 className="font-semibold text-[var(--accent-color)]">
          Mock Return Value
        </h3>
        <CodeBlock
          code={`test("uses mocked return value", () => {
  const getUser = jest.fn();

  getUser.mockReturnValue({
    name: "Mayur"
  });

  expect(getUser().name).toBe("Mayur");
});`}
        />

        <p className="text-[var(--text-secondary)] leading-7">
          Mocking helps isolate the code being tested from external
          dependencies. Advanced module mocking and API mocking can be covered
          separately.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">13. Code Coverage</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Code Coverage measures how much of your application code is executed
          while running tests.
        </p>

        <p className="text-[var(--text-secondary)] leading-7">
          Run Jest with the coverage option:
        </p>
        <CodeBlock code={`npm test -- --coverage`} />

        <p className="text-[var(--text-secondary)] leading-7">
          Jest can report these coverage metrics:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>
            <strong>Statements:</strong> Percentage of executed statements.
          </li>
          <li>
            <strong>Branches:</strong> Percentage of executed conditional
            branches.
          </li>
          <li>
            <strong>Functions:</strong> Percentage of called functions.
          </li>
          <li>
            <strong>Lines:</strong> Percentage of executed code lines.
          </li>
        </ul>

        <p className="text-[var(--text-secondary)] leading-7">
          High coverage does not automatically mean good tests. Tests must also
          verify meaningful behavior and edge cases.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">14. Common Jest Commands</h2>
        <CodeBlock
          code={`# Run all tests
npm test

# Run a specific test file
npx jest math.test.js

# Run tests in watch mode
npx jest --watch

# Run tests with coverage
npx jest --coverage

# Run tests with detailed output
npx jest --verbose

# Run tests matching a name
npx jest -t "adds numbers"`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">15. Jest with ES Modules</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Node.js projects often use ES module syntax with import and export.
          Jest also supports ES modules, but its configuration is different from
          the default CommonJS setup.
        </p>

        <p className="text-[var(--text-secondary)] leading-7">
          One native ESM setup for a modern Node.js project is:
        </p>

        <h3 className="font-semibold text-[var(--accent-color)]">
          Step 1: Configure package.json
        </h3>
        <CodeBlock
          code={`{
  "type": "module",
  "scripts": {
    "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js"
  }
}`}
        />

        <h3 className="font-semibold text-[var(--accent-color)]">
          Step 2: Create an ES Module
        </h3>
        <CodeBlock
          code={`// calculator.js

export function multiply(a, b) {
  return a * b;
}`}
        />

        <h3 className="font-semibold text-[var(--accent-color)]">
          Step 3: Write an ESM Test
        </h3>
        <CodeBlock
          code={`// calculator.test.js

import { test, expect } from "@jest/globals";
import { multiply } from "./calculator.js";

test("multiplies two numbers", () => {
  expect(multiply(5, 4)).toBe(20);
});`}
        />

        <h3 className="font-semibold text-[var(--accent-color)]">
          Step 4: Run Tests
        </h3>
        <CodeBlock code={`npm test`} />

        <p className="text-sm text-[var(--text-secondary)] leading-6">
          Native ESM support in Jest has historically required experimental VM
          module support. The exact setup can vary with Node.js and Jest
          versions. Check the current Jest documentation when configuring a new
          project.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          16. Jest vs Other Testing Tools
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="text-left p-3">Tool</th>
                <th className="text-left p-3">Main Purpose</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Jest</td>
                <td className="p-3">JavaScript testing framework.</td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Vitest</td>
                <td className="p-3">
                  Fast testing framework designed for modern JavaScript tooling.
                </td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Mocha</td>
                <td className="p-3">
                  JavaScript test framework often combined with assertion
                  libraries.
                </td>
              </tr>
              <tr>
                <td className="p-3">Supertest</td>
                <td className="p-3">
                  HTTP testing library for Node.js applications.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">17. Interview Questions</h2>
        {[
          {
            q: "What is Jest?",
            a: "Jest is a JavaScript testing framework used to test application logic, functions and other JavaScript code.",
          },
          {
            q: "What is the purpose of test()?",
            a: "test() defines an individual test case with a description and a callback containing the testing logic.",
          },
          {
            q: "What is expect()?",
            a: "expect() receives the actual value that we want to test against an expected condition.",
          },
          {
            q: "What is a matcher in Jest?",
            a: "A matcher is a method such as toBe() or toEqual() that checks whether a value satisfies an expected condition.",
          },
          {
            q: "What is the difference between toBe() and toEqual()?",
            a: "toBe() checks primitive equality or object identity, while toEqual() checks deep equality of objects and arrays.",
          },
          {
            q: "What is describe()?",
            a: "describe() groups related test cases together.",
          },
          {
            q: "What are Jest lifecycle hooks?",
            a: "beforeAll(), afterAll(), beforeEach() and afterEach() are hooks used for test setup and cleanup.",
          },
          {
            q: "What is mocking?",
            a: "Mocking replaces real functions or dependencies with controlled fake implementations during testing.",
          },
          {
            q: "What is jest.fn()?",
            a: "jest.fn() creates a mock function that can track calls, arguments and return values.",
          },
          {
            q: "What is code coverage?",
            a: "Code coverage measures how much application code is executed during test execution.",
          },
          {
            q: "How do you test asynchronous functions in Jest?",
            a: "Use async/await, return promises or use Jest's resolves and rejects matchers.",
          },
          {
            q: "What is the difference between Jest and Supertest?",
            a: "Jest is a testing framework, while Supertest is a library used to send HTTP requests to test server endpoints.",
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
