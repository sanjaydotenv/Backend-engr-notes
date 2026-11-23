import CodeBlock from "../../../components/common/CodeBlock";

export default function Mocking() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          SOFTWARE TESTING / 08
        </p>
        <h1 className="text-3xl font-bold mt-2">Mocking</h1>
        <p className="text-[var(--text-secondary)] mt-3 leading-7">
          Mocking is a testing technique in which we replace real dependencies
          with fake implementations to control their behavior and test
          application code independently.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What Is Mocking?</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          In a real application, functions often depend on external services
          such as databases, email services, payment gateways and APIs.
        </p>
        <p className="text-[var(--text-secondary)] leading-7">
          Testing these dependencies every time can be slow, expensive or
          unreliable. Mocking solves this problem by replacing real dependencies
          with controlled fake implementations.
        </p>

        <p className="font-semibold">Without Mocking</p>
        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-2 text-center">
          <div className="rounded-lg border border-[var(--border-color)] p-3">
            Test Case
          </div>
          <div className="text-[var(--accent-color)]">↓</div>
          <div className="rounded-lg border border-[var(--border-color)] p-3">
            Application Function
          </div>
          <div className="text-[var(--accent-color)]">↓</div>
          <div className="rounded-lg border border-[var(--border-color)] p-3">
            Real Database / External API
          </div>
        </div>

        <p className="font-semibold">With Mocking</p>
        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-2 text-center">
          <div className="rounded-lg border border-[var(--border-color)] p-3">
            Test Case
          </div>
          <div className="text-[var(--accent-color)]">↓</div>
          <div className="rounded-lg border border-[var(--border-color)] p-3">
            Application Function
          </div>
          <div className="text-[var(--accent-color)]">↓</div>
          <div className="rounded-lg border border-[var(--accent-color)] p-3">
            Mock Function / Fake Dependency
          </div>
          <div className="text-[var(--accent-color)]">↓</div>
          <div className="rounded-lg border border-[var(--border-color)] p-3">
            Controlled Test Result
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Why Do We Need Mocking?</h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>Test functions without depending on real external services.</li>
          <li>Avoid unnecessary database and API requests.</li>
          <li>Prevent real emails or payments during testing.</li>
          <li>Control successful and failed responses.</li>
          <li>Make unit tests faster and more predictable.</li>
          <li>Test error handling and unusual scenarios easily.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Real Example of Mocking</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Suppose we have a function that sends an email after user
          registration.
        </p>

        <h3 className="font-semibold text-[var(--accent-color)]">
          Without Mocking
        </h3>
        <CodeBlock
          code={`async function registerUser(user) {
  // Save user in database
  await User.create(user);

  // Send real email
  await sendEmail(user.email);

  return "User registered";
}`}
        />

        <p className="text-[var(--text-secondary)] leading-7">
          If we test this function normally, it may connect to a real database
          and send an actual email.
        </p>

        <h3 className="font-semibold text-[var(--accent-color)]">
          With Mocking
        </h3>
        <CodeBlock
          code={`const sendEmail = vi.fn();

sendEmail("mayur@example.com");

expect(sendEmail).toHaveBeenCalledWith(
  "mayur@example.com"
);`}
        />

        <p className="text-[var(--text-secondary)] leading-7">
          Here, vi.fn() creates a fake function. No real email is sent, but we
          can verify whether the function was called correctly.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Types of Mocking</h2>

        <h3 className="font-semibold text-[var(--accent-color)]">
          A. Function Mocking
        </h3>
        <p className="text-[var(--text-secondary)] leading-7">
          Replaces a normal function with a mock function to track calls,
          arguments and return values.
        </p>
        <CodeBlock
          code={`import { vi, expect, test } from "vitest";

test("function mocking", () => {
  const add = vi.fn();

  add(10, 20);

  expect(add).toHaveBeenCalled();

  expect(add).toHaveBeenCalledWith(10, 20);
});`}
        />

        <h3 className="font-semibold text-[var(--accent-color)]">
          B. Module Mocking
        </h3>
        <p className="text-[var(--text-secondary)] leading-7">
          Replaces an entire imported module with fake implementations. This is
          useful for mocking database services and API clients.
        </p>
        <CodeBlock
          code={`// userService.js

export async function getUser() {
  return {
    name: "Real User"
  };
}`}
        />
        <CodeBlock
          code={`// userService.test.js

import { vi, test, expect } from "vitest";

vi.mock("./userService.js", () => ({
  getUser: vi.fn().mockResolvedValue({
    name: "Mock User"
  })
}));

import { getUser } from "./userService.js";

test("uses mocked module", async () => {
  const user = await getUser();

  expect(user.name).toBe("Mock User");
});`}
        />

        <h3 className="font-semibold text-[var(--accent-color)]">
          C. API Mocking
        </h3>
        <p className="text-[var(--text-secondary)] leading-7">
          Replaces real HTTP API responses with fake responses so tests do not
          depend on external servers.
        </p>
        <CodeBlock
          code={`import { vi, test, expect } from "vitest";

test("mocks an API response", async () => {
  const fetchUser = vi.fn().mockResolvedValue({
    id: 1,
    name: "Mayur"
  });

  const user = await fetchUser();

  expect(user.name).toBe("Mayur");
});`}
        />

        <h3 className="font-semibold text-[var(--accent-color)]">
          D. Database Mocking
        </h3>
        <p className="text-[var(--text-secondary)] leading-7">
          Replaces database operations with fake results so we can test
          application logic without connecting to a real database.
        </p>
        <CodeBlock
          code={`import { vi, test, expect } from "vitest";

const findUser = vi.fn().mockResolvedValue({
  id: 1,
  name: "Mayur"
});

test("returns user from mocked database", async () => {
  const user = await findUser(1);

  expect(user.name).toBe("Mayur");
  expect(findUser).toHaveBeenCalledWith(1);
});`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Mocking with Vitest</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Vitest provides the vi utility for creating and controlling mock
          functions.
        </p>

        <h3 className="font-semibold text-[var(--accent-color)]">vi.fn()</h3>
        <p className="text-[var(--text-secondary)] leading-7">
          Creates a mock function that tracks how it is called.
        </p>
        <CodeBlock
          code={`import { vi, expect, test } from "vitest";

test("tracks function calls", () => {
  const sendEmail = vi.fn();

  sendEmail("mayur@example.com");

  expect(sendEmail).toHaveBeenCalled();
  expect(sendEmail).toHaveBeenCalledTimes(1);
  expect(sendEmail).toHaveBeenCalledWith(
    "mayur@example.com"
  );
});`}
        />

        <h3 className="font-semibold text-[var(--accent-color)]">
          mockReturnValue()
        </h3>
        <p className="text-[var(--text-secondary)] leading-7">
          Defines a fixed return value for a mock function.
        </p>
        <CodeBlock
          code={`const getUser = vi.fn();

getUser.mockReturnValue({
  name: "Mayur"
});

console.log(getUser());

// { name: "Mayur" }`}
        />

        <h3 className="font-semibold text-[var(--accent-color)]">
          mockResolvedValue()
        </h3>
        <p className="text-[var(--text-secondary)] leading-7">
          Defines a resolved Promise value for an asynchronous mock function.
        </p>
        <CodeBlock
          code={`const getUser = vi.fn();

getUser.mockResolvedValue({
  name: "Mayur"
});

const user = await getUser();

console.log(user.name); // Mayur`}
        />

        <h3 className="font-semibold text-[var(--accent-color)]">
          mockRejectedValue()
        </h3>
        <p className="text-[var(--text-secondary)] leading-7">
          Defines a rejected Promise for testing error handling.
        </p>
        <CodeBlock
          code={`const getUser = vi.fn();

getUser.mockRejectedValue(
  new Error("User not found")
);

await expect(getUser()).rejects.toThrow(
  "User not found"
);`}
        />

        <h3 className="font-semibold text-[var(--accent-color)]">
          mockImplementation()
        </h3>
        <p className="text-[var(--text-secondary)] leading-7">
          Provides a custom implementation for a mock function.
        </p>
        <CodeBlock
          code={`const add = vi.fn();

add.mockImplementation((a, b) => {
  return a + b;
});

expect(add(10, 20)).toBe(30);`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Spying vs Mocking</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Spying and mocking are related but different testing techniques.
        </p>

        <h3 className="font-semibold text-[var(--accent-color)]">
          Spying with vi.spyOn()
        </h3>
        <p className="text-[var(--text-secondary)] leading-7">
          A spy tracks calls to an existing object method. By default, it still
          calls the original implementation.
        </p>
        <CodeBlock
          code={`import { vi, test, expect } from "vitest";

const calculator = {
  add(a, b) {
    return a + b;
  }
};

test("spies on add method", () => {
  const spy = vi.spyOn(calculator, "add");

  const result = calculator.add(10, 20);

  expect(result).toBe(30);
  expect(spy).toHaveBeenCalledWith(10, 20);

  spy.mockRestore();
});`}
        />

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="text-left p-3">Mocking</th>
                <th className="text-left p-3">Spying</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Usually replaces a function's behavior.</td>
                <td className="p-3">Observes an existing function's calls.</td>
              </tr>
              <tr>
                <td className="p-3">Can provide fake return values.</td>
                <td className="p-3">
                  Calls the original implementation by default.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Mocking in Node.js Backend</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Let's understand a practical example where a user service depends on a
          database model and an email service.
        </p>

        <h3 className="font-semibold text-[var(--accent-color)]">
          Step 1: Create Email Service
        </h3>
        <CodeBlock
          code={`// emailService.js

export async function sendEmail(email) {
  // Real email sending logic
  console.log("Sending email to:", email);

  return true;
}`}
        />

        <h3 className="font-semibold text-[var(--accent-color)]">
          Step 2: Create User Service
        </h3>
        <CodeBlock
          code={`// userService.js

import User from "./User.js";
import { sendEmail } from "./emailService.js";

export async function registerUser(data) {
  const user = await User.create(data);

  await sendEmail(user.email);

  return user;
}`}
        />

        <h3 className="font-semibold text-[var(--accent-color)]">
          Step 3: Write a Test with Mocking
        </h3>
        <CodeBlock
          code={`// userService.test.js

import { vi, test, expect } from "vitest";

vi.mock("./User.js", () => ({
  default: {
    create: vi.fn()
  }
}));

vi.mock("./emailService.js", () => ({
  sendEmail: vi.fn()
}));

import User from "./User.js";
import { sendEmail } from "./emailService.js";
import { registerUser } from "./userService.js";

test("registers user and sends email", async () => {
  User.create.mockResolvedValue({
    id: 1,
    name: "Mayur",
    email: "mayur@example.com"
  });

  sendEmail.mockResolvedValue(true);

  const user = await registerUser({
    name: "Mayur",
    email: "mayur@example.com"
  });

  expect(user.name).toBe("Mayur");

  expect(User.create).toHaveBeenCalled();

  expect(sendEmail).toHaveBeenCalledWith(
    "mayur@example.com"
  );
});`}
        />

        <p className="text-[var(--text-secondary)] leading-7">
          Here, the real database and email service are not called. We provide
          fake results and verify that registerUser() interacts with both
          dependencies correctly.
        </p>

        <p className="text-sm text-[var(--text-secondary)] leading-6">
          This example uses Vitest's module mocking. Keep mocked module paths
          consistent with the imports used by the application.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          8. Mocking vs Stubbing vs Spying
        </h2>
        <p className="text-[var(--text-secondary)] leading-7">
          These techniques are related, but they have different purposes.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="text-left p-3">Technique</th>
                <th className="text-left p-3">Purpose</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Mock</td>
                <td className="p-3">
                  Controls behavior and can verify interactions.
                </td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Stub</td>
                <td className="p-3">
                  Provides predefined responses or behavior.
                </td>
              </tr>
              <tr>
                <td className="p-3">Spy</td>
                <td className="p-3">Observes function calls and arguments.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-[var(--text-secondary)] leading-6">
          In practice, testing libraries may combine these capabilities in one
          API. For example, a mock function can also act as a stub by returning
          a predefined value.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Limitations of Mocking</h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>Mocked behavior may differ from real dependency behavior.</li>
          <li>Too many mocks can make tests unrealistic.</li>
          <li>Mocking does not verify actual database or API integration.</li>
          <li>Incorrect mocks can hide real application bugs.</li>
          <li>Complex module mocking can make tests harder to maintain.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Best Practices</h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>Mock external dependencies, not every internal function.</li>
          <li>Use mocks to test success and failure scenarios.</li>
          <li>Reset or restore mocks when required.</li>
          <li>Keep mock implementations simple and predictable.</li>
          <li>Use integration tests to verify real component interactions.</li>
          <li>
            Do not assume mocked tests prove that external services work
            correctly.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">11. Interview Questions</h2>
        {[
          {
            q: "What is Mocking?",
            a: "Mocking is a testing technique that replaces real dependencies with controlled fake implementations.",
          },
          {
            q: "Why do we use Mocking?",
            a: "It helps isolate application logic, avoid real external calls and test success or failure scenarios.",
          },
          {
            q: "What is vi.fn()?",
            a: "vi.fn() creates a mock function that tracks calls, arguments and return values.",
          },
          {
            q: "What is vi.mock()?",
            a: "vi.mock() replaces an imported module with a mocked implementation.",
          },
          {
            q: "What is vi.spyOn()?",
            a: "vi.spyOn() creates a spy on an existing object method to observe its calls and optionally replace its behavior.",
          },
          {
            q: "What is the difference between mockReturnValue() and mockResolvedValue()?",
            a: "mockReturnValue() returns a normal value, while mockResolvedValue() returns a Promise that resolves with the specified value.",
          },
          {
            q: "What is mockRejectedValue()?",
            a: "It configures a mock function to return a Promise that rejects with a specified value.",
          },
          {
            q: "What is the difference between Mocking and Spying?",
            a: "Mocking commonly replaces behavior, while spying observes calls to an existing function. A spy calls the original implementation by default.",
          },
          {
            q: "What is the difference between Mocking and Stubbing?",
            a: "A stub provides predefined behavior or responses, while a mock can also verify how a dependency was used.",
          },
          {
            q: "Can we mock a database in Node.js testing?",
            a: "Yes. We can replace database model methods with mock functions and provide controlled results.",
          },
          {
            q: "Does Mocking replace Integration Testing?",
            a: "No. Mocking isolates dependencies, while Integration Testing verifies that real components work together.",
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
