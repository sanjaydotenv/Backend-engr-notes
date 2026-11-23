import CodeBlock from "../../../components/common/CodeBlock";

export default function Vitest() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          SOFTWARE TESTING / 06
        </p>
        <h1 className="text-3xl font-bold mt-2">Vitest Testing Framework</h1>
        <p className="text-[var(--text-secondary)] mt-3 leading-7">
          Vitest is a modern JavaScript and TypeScript testing framework built
          for the Vite ecosystem. It provides test execution, assertions,
          mocking, code coverage and other testing utilities.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What Is Vitest?</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Vitest is a testing framework designed to work naturally with Vite.
          It uses Vite's configuration and transformation pipeline, making it
          convenient for modern frontend projects.
        </p>
        <p className="text-[var(--text-secondary)] leading-7">
          Like Jest, Vitest allows developers to write test cases and
          automatically verify whether their code produces the expected
          results.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-2 text-center">
          <div className="rounded-lg border border-[var(--border-color)] p-3">
            JavaScript / TypeScript Code
          </div>
          <div className="text-[var(--accent-color)]">↓</div>
          <div className="rounded-lg border border-[var(--border-color)] p-3">
            Vitest Test Runner
          </div>
          <div className="text-[var(--accent-color)]">↓</div>
          <div className="rounded-lg border border-[var(--border-color)] p-3">
            Execute Test Cases
          </div>
          <div className="text-[var(--accent-color)]">↓</div>
          <div className="rounded-lg border border-[var(--border-color)] p-3">
            PASS / FAIL Results
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Why Use Vitest?</h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>Designed to work with Vite projects.</li>
          <li>Supports JavaScript and TypeScript.</li>
          <li>Provides Jest-compatible testing APIs.</li>
          <li>Supports mocking and asynchronous testing.</li>
          <li>Supports code coverage reports.</li>
          <li>Provides watch mode for continuous testing during development.</li>
          <li>Supports browser and Node.js testing environments through different configurations and providers.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Installing Vitest</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          If you already have a Vite project, open its terminal and install
          Vitest:
        </p>
        <CodeBlock code={`npm install -D vitest`} />

        <p className="text-[var(--text-secondary)] leading-7">
          If you are creating a Node.js project without Vite, you can also
          install Vitest directly:
        </p>
        <CodeBlock code={`npm init -y
npm install -D vitest`} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Configuring Vitest</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          In a Vite project, you can configure Vitest inside
          vite.config.js.
        </p>
        <CodeBlock code={`// vite.config.js

import { defineConfig } from "vite";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    include: ["**/*.{test,spec}.{js,ts}"]
  }
});`} />

        <p className="text-[var(--text-secondary)] leading-7">
          The test option requires importing defineConfig from vitest/config
          when using this configuration directly.
        </p>
        <CodeBlock code={`// vite.config.js

import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    include: ["**/*.{test,spec}.{js,ts}"]
  }
});`} />

        <p className="text-[var(--text-secondary)] leading-7">
          Configuration explained:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li><strong>globals:</strong> Makes test APIs available globally without importing them in every test file.</li>
          <li><strong>environment:</strong> Selects the environment in which tests execute.</li>
          <li><strong>include:</strong> Defines which files Vitest should discover as tests.</li>
        </ul>

        <p className="text-sm text-[var(--text-secondary)] leading-6">
          If globals is false or omitted, import test, expect and other APIs
          directly from vitest. The default environment is Node.js.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Writing Your First Vitest Test</h2>

        <h3 className="font-semibold text-[var(--accent-color)]">Step 1: Create a Function</h3>
        <CodeBlock code={`// math.js

export function add(a, b) {
  return a + b;
}`} />

        <h3 className="font-semibold text-[var(--accent-color)]">Step 2: Create a Test File</h3>
        <CodeBlock code={`// math.test.js

import { test, expect } from "vitest";
import { add } from "./math.js";

test("adds two numbers", () => {
  const result = add(10, 20);

  expect(result).toBe(30);
});`} />

        <h3 className="font-semibold text-[var(--accent-color)]">Step 3: Add Test Script</h3>
        <CodeBlock code={`// package.json

{
  "scripts": {
    "test": "vitest",
    "test:run": "vitest run"
  }
}`} />

        <h3 className="font-semibold text-[var(--accent-color)]">Step 4: Run Tests</h3>
        <CodeBlock code={`npm test`} />

        <p className="text-[var(--text-secondary)] leading-7">
          Vitest starts in watch mode by default when running interactively.
          Use the following command to run tests once:
        </p>
        <CodeBlock code={`npm run test:run`} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Important Vitest Functions</h2>

        <h3 className="font-semibold text-[var(--accent-color)]">test() / it()</h3>
        <p className="text-[var(--text-secondary)] leading-7">
          Both test() and it() define individual test cases. They are
          equivalent APIs.
        </p>
        <CodeBlock code={`import { test, it, expect } from "vitest";

test("checks addition", () => {
  expect(2 + 3).toBe(5);
});

it("checks multiplication", () => {
  expect(2 * 3).toBe(6);
});`} />

        <h3 className="font-semibold text-[var(--accent-color)]">expect()</h3>
        <p className="text-[var(--text-secondary)] leading-7">
          expect() receives the actual value that we want to verify.
        </p>
        <CodeBlock code={`expect(10 + 20).toBe(30);`} />

        <h3 className="font-semibold text-[var(--text-accent)]">describe()</h3>
        <p className="text-[var(--text-secondary)] leading-7">
          describe() groups related test cases together.
        </p>
        <CodeBlock code={`import { describe, test, expect } from "vitest";

describe("Math Operations", () => {
  test("addition", () => {
    expect(10 + 20).toBe(30);
  });

  test("subtraction", () => {
    expect(20 - 10).toBe(10);
  });
});`} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Important Vitest Matchers</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Matchers verify whether the actual result matches the expected
          result.
        </p>
        <CodeBlock code={`// Primitive equality
expect(10).toBe(10);

// Deep equality
expect({ name: "Mayur" }).toEqual({
  name: "Mayur"
});

// Truthy and falsy
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

// Array contains
expect(["JS", "Node"]).toContain("Node");

// Property checking
expect({ name: "Mayur" }).toHaveProperty("name");

// Negation
expect(10).not.toBe(20);

// Error testing
expect(() => {
  throw new Error("Something went wrong");
}).toThrow("Something went wrong");`} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Setup and Cleanup Hooks</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Hooks execute setup and cleanup logic before or after test cases.
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
                <td className="p-3">Runs once before all tests in its scope.</td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">afterAll()</td>
                <td className="p-3">Runs once after all tests in its scope.</td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">beforeEach()</td>
                <td className="p-3">Runs before every test.</td>
              </tr>
              <tr>
                <td className="p-3">afterEach()</td>
                <td className="p-3">Runs after every test.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <CodeBlock code={`import {
  beforeAll,
  afterAll,
  beforeEach,
  afterEach,
  test,
  expect
} from "vitest";

beforeAll(() => {
  console.log("Setup once");
});

beforeEach(() => {
  console.log("Before each test");
});

afterEach(() => {
  console.log("After each test");
});

afterAll(() => {
  console.log("Cleanup once");
});

test("first test", () => {
  expect(2 + 2).toBe(4);
});

test("second test", () => {
  expect(3 + 3).toBe(6);
});`} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Asynchronous Testing</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Vitest supports testing promises and async/await functions. This is
          useful when working with APIs, databases and file operations.
        </p>

        <h3 className="font-semibold text-[var(--accent-color)]">Using async/await</h3>
        <CodeBlock code={`import { test, expect } from "vitest";

async function getUser() {
  return {
    name: "Mayur"
  };
}

test("gets user data", async () => {
  const user = await getUser();

  expect(user.name).toBe("Mayur");
});`} />

        <h3 className="font-semibold text-[var(--text-accent)]">Testing Rejected Promises</h3>
        <CodeBlock code={`async function getUser() {
  throw new Error("User not found");
}

test("handles rejected promise", async () => {
  await expect(getUser()).rejects.toThrow(
    "User not found"
  );
});`} />

        <p className="text-[var(--text-secondary)] leading-7">
          Always return or await asynchronous operations so the test runner
          waits for the assertions to finish.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Mocking in Vitest</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Mocking replaces real functions or dependencies with controlled
          fake implementations during testing.
        </p>

        <h3 className="font-semibold text-[var(--text-accent)]">Using vi.fn()</h3>
        <p className="text-[var(--text-secondary)] leading-7">
          Vitest provides the vi utility for mocking, spying and controlling
          fake timers.
        </p>
        <CodeBlock code={`import { test, expect, vi } from "vitest";

test("tracks function calls", () => {
  const sendEmail = vi.fn();

  sendEmail("mayur@example.com");

  expect(sendEmail).toHaveBeenCalled();

  expect(sendEmail).toHaveBeenCalledWith(
    "mayur@example.com"
  );
});`} />

        <h3 className="font-semibold text-[var(--text-accent)]">Mock Return Value</h3>
        <CodeBlock code={`import { test, expect, vi } from "vitest";

test("uses mocked return value", () => {
  const getUser = vi.fn();

  getUser.mockReturnValue({
    name: "Mayur"
  });

  expect(getUser().name).toBe("Mayur");
});`} />

        <h3 className="font-semibold text-[var(--text-accent)]">Using vi.spyOn()</h3>
        <p className="text-[var(--text-secondary)] leading-7">
          spyOn() observes calls to an existing object method and can
          optionally replace its implementation.
        </p>
        <CodeBlock code={`import { test, expect, vi } from "vitest";

const calculator = {
  add(a, b) {
    return a + b;
  }
};

test("spies on a method", () => {
  const spy = vi.spyOn(calculator, "add");

  calculator.add(10, 20);

  expect(spy).toHaveBeenCalledWith(10, 20);

  spy.mockRestore();
});`} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">11. Mocking Modules</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Sometimes a function depends on another module, such as an API
          service. We can mock the entire module instead of calling the
          actual external service.
        </p>
        <CodeBlock code={`// userService.js

export async function getUser() {
  const response = await fetch("/api/user");

  return response.json();
}`} />
        <CodeBlock code={`// userService.test.js

import { test, expect, vi } from "vitest";
import { getUser } from "./userService.js";

vi.mock("./userService.js", () => ({
  getUser: vi.fn()
}));

import { getUser as mockedGetUser } from "./userService.js";

test("returns mocked user", async () => {
  mockedGetUser.mockResolvedValue({
    name: "Mayur"
  });

  const user = await getUser();

  expect(user.name).toBe("Mayur");
});`} />

        <p className="text-sm text-[var(--text-secondary)] leading-6">
          This example illustrates module mocking, but a test should generally
          mock a dependency of the module under test rather than mock the
          function being tested itself. Vitest also hoists vi.mock() calls,
          so module mocking behavior should be understood when organizing
          imports.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">12. Code Coverage</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Code Coverage measures how much application code is executed
          during test execution.
        </p>

        <h3 className="font-semibold text-[var(--text-accent)]">Step 1: Install Coverage Provider</h3>
        <CodeBlock code={`npm install -D @vitest/coverage-v8`} />

        <h3 className="font-semibold text-[var(--text-accent)]">Step 2: Configure Coverage</h3>
        <CodeBlock code={`// vite.config.js

import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      provider: "v8",
      reporter: ["text", "html"]
    }
  }
});`} />

        <h3 className="font-semibold text-[var(--text-accent)]">Step 3: Run Coverage</h3>
        <CodeBlock code={`npx vitest run --coverage`} />

        <p className="text-[var(--text-secondary)] leading-7">
          Vitest generates a coverage report showing executed statements,
          branches, functions and lines.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">13. Testing React Components</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Vitest can also test React components. We commonly use React Testing
          Library to render components and interact with them.
        </p>

        <h3 className="font-semibold text-[var(--text-accent)]">Step 1: Install Packages</h3>
        <CodeBlock code={`npm install -D vitest jsdom @testing-library/react @testing-library/jest-dom`} />

        <h3 className="font-semibold text-[var(--text-accent)]">Step 2: Create a Component</h3>
        <CodeBlock code={`// Counter.jsx

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`} />

        <h3 className="font-semibold text-[var(--text-accent)]">Step 3: Configure Test Environment</h3>
        <CodeBlock code={`// vite.config.js

import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: "./src/setupTests.js"
  }
});`} />

        <CodeBlock code={`// src/setupTests.js

import "@testing-library/jest-dom/vitest";`} />

        <h3 className="font-semibold text-[var(--text-accent)]">Step 4: Write Component Test</h3>
        <CodeBlock code={`// Counter.test.jsx

import { test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import Counter from "./Counter.jsx";

test("increments counter", () => {
  render(<Counter />);

  const button = screen.getByRole("button", {
    name: "Increment"
  });

  fireEvent.click(button);

  expect(
    screen.getByText("Count: 1")
  ).toBeInTheDocument();
});`} />

        <p className="text-[var(--text-secondary)] leading-7">
          jsdom provides a simulated browser DOM environment, while React
          Testing Library helps render components and interact with them.
          This allows us to test React UI without opening a real browser.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">14. Important Vitest Commands</h2>
        <CodeBlock code={`# Run tests in watch mode
npx vitest

# Run tests once
npx vitest run

# Run a specific test file
npx vitest run math.test.js

# Run tests with coverage
npx vitest run --coverage

# Run tests with UI
npx vitest --ui

# Run tests in a specific project
npx vitest run --project unit`} />
        <p className="text-sm text-[var(--text-secondary)] leading-6">
          The Vitest UI requires installing the @vitest/ui package. The
          project option is used when projects have been configured.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">15. Jest vs Vitest</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="text-left p-3">Jest</th>
                <th className="text-left p-3">Vitest</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">General-purpose JavaScript testing framework.</td>
                <td className="p-3">Designed around the Vite ecosystem.</td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Has its own configuration and transformation setup.</td>
                <td className="p-3">Can reuse Vite configuration and transformations.</td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Uses jest.fn() for mocking.</td>
                <td className="p-3">Uses vi.fn() for mocking.</td>
              </tr>
              <tr>
                <td className="p-3">Widely used across many JavaScript projects.</td>
                <td className="p-3">Especially convenient for modern Vite projects.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-[var(--text-secondary)] leading-7">
          Both are capable testing frameworks. Vitest is a natural choice for
          many Vite projects, while Jest remains widely used in projects
          that already depend on it.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">16. Best Practices</h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>Write meaningful test descriptions.</li>
          <li>Test both successful and failure scenarios.</li>
          <li>Keep tests independent and repeatable.</li>
          <li>Mock external services when testing isolated logic.</li>
          <li>Use a separate test database when testing database operations.</li>
          <li>Clean up mocks and test data when necessary.</li>
          <li>Focus on testing application behavior, not implementation details.</li>
          <li>Use code coverage to identify untested areas, not as the only quality measurement.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">17. Interview Questions</h2>
        {[
          {
            q: "What is Vitest?",
            a: "Vitest is a JavaScript and TypeScript testing framework designed for the Vite ecosystem."
          },
          {
            q: "Why is Vitest used?",
            a: "It is used to test functions, components and application logic with features such as assertions, mocking and code coverage."
          },
          {
            q: "What is the difference between Jest and Vitest?",
            a: "Jest is a general-purpose testing framework, while Vitest is designed to integrate closely with Vite and reuse its configuration."
          },
          {
            q: "What is vi.fn()?",
            a: "vi.fn() creates a mock function that can track calls, arguments and return values."
          },
          {
            q: "What is vi.spyOn()?",
            a: "vi.spyOn() creates a spy on an existing object method so we can track its calls and optionally replace its implementation."
          },
          {
            q: "What is describe()?",
            a: "describe() groups related test cases together."
          },
          {
            q: "What are lifecycle hooks in Vitest?",
            a: "beforeAll(), afterAll(), beforeEach() and afterEach() are used for test setup and cleanup."
          },
          {
            q: "What is the default Vitest environment?",
            a: "The default environment is Node.js."
          },
          {
            q: "What is jsdom?",
            a: "jsdom provides a simulated browser DOM environment for testing frontend components in Node.js."
          },
          {
            q: "How do you run Vitest tests once?",
            a: "Use npx vitest run or configure a script such as vitest run."
          },
          {
            q: "What is code coverage in Vitest?",
            a: "It measures how much application code is executed while running tests."
          },
          {
            q: "Can Vitest test React components?",
            a: "Yes. Vitest can work with React Testing Library and jsdom to test React components."
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