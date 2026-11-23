import CodeBlock from "../../../components/common/CodeBlock";

export default function UnitTesting() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          SOFTWARE TESTING / 02
        </p>
        <h1 className="text-3xl font-bold mt-2">Unit Testing</h1>
        <p className="text-[var(--text-secondary)] mt-3 leading-7">
          Unit Testing is a software testing technique in which we test small
          individual units of code, such as functions or methods, to verify
          that they produce the expected results.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What Is a Unit?</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          A Unit is a small, independent part of an application. In JavaScript,
          a unit is commonly a single function.
        </p>

        <CodeBlock code={`function add(a, b) {
  return a + b;
}`} />

        <p className="text-[var(--text-secondary)] leading-7">
          Here, the <code className="text-[var(--accent-color)]">add()</code>{" "}
          function is a unit. We can test it independently without running
          the entire application.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. How Unit Testing Works</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          We provide input to a function, execute it, and compare its actual
          output with the expected output.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-3 text-center">
          <div className="rounded-lg border border-[var(--border-color)] p-3">
            Test Input: 10, 20
          </div>
          <div className="text-[var(--accent-color)]">↓</div>
          <div className="rounded-lg border border-[var(--accent-color)] p-3">
            Execute add(10, 20)
          </div>
          <div className="text-[var(--accent-color)]">↓</div>
          <div className="rounded-lg border border-[var(--border-color)] p-3">
            Actual Output: 30
          </div>
          <div className="text-[var(--accent-color)]">↓</div>
          <div className="rounded-lg border border-[var(--border-color)] p-3">
            Expected Output: 30
          </div>
          <div className="text-green-500 font-semibold">↓ Test Passed ✓</div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Writing Your First Unit Test</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Before using a testing framework, let's understand the basic idea
          using JavaScript.
        </p>

        <CodeBlock code={`// math.js

export function add(a, b) {
  return a + b;
}`} />

        <CodeBlock code={`// math.test.js

import { add } from "./math.js";

const actual = add(10, 20);
const expected = 30;

if (actual === expected) {
  console.log("Test Passed");
} else {
  console.log("Test Failed");
}`} />

        <p className="text-[var(--text-secondary)] leading-7">
          This is a basic manual test written in code. Testing frameworks
          provide built-in functions to make these checks easier and more
          organized.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Unit Testing Using Jest</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Jest is a JavaScript testing framework. It provides functions such as
          <code className="text-[var(--accent-color)]"> test()</code>,
          <code className="text-[var(--accent-color)]"> expect()</code> and
          <code className="text-[var(--accent-color)]"> toBe()</code> to write
          and execute tests.
        </p>

        <h3 className="font-semibold text-[var(--accent-color)]">Step 1: Install Jest</h3>
        <CodeBlock code={`npm install --save-dev jest`} />

        <h3 className="font-semibold text-[var(--accent-color)]">Step 2: Create a Function</h3>
        <CodeBlock code={`// math.js

export function add(a, b) {
  return a + b;
}`} />

        <h3 className="font-semibold text-[var(--accent-color)]">Step 3: Write a Test</h3>
        <CodeBlock code={`// math.test.js

import { add } from "./math.js";

test("adds two numbers", () => {
  expect(add(10, 20)).toBe(30);
});`} />

        <h3 className="font-semibold text-[var(--accent-color)]">Step 4: Run the Test</h3>
        <CodeBlock code={`npx jest`} />

        <p className="text-[var(--text-secondary)] leading-7">
          If the actual result is 30, Jest reports that the test passed. If the
          result is different, the test fails and Jest displays the difference.
        </p>

        <div className="rounded-lg border border-[var(--border-color)] p-4">
          <p className="font-semibold text-[var(--accent-color)]">Note</p>
          <p className="text-sm text-[var(--text-secondary)] mt-2 leading-6">
            The example uses ES module syntax. Jest requires suitable
            configuration for ESM projects. We will cover Jest setup and
            configuration in the dedicated Jest topic.
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Important Jest Testing Functions</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="text-left p-3">Function</th>
                <th className="text-left p-3">Purpose</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">test()</td>
                <td className="p-3">Defines a test case.</td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">expect()</td>
                <td className="p-3">Checks the actual result.</td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">toBe()</td>
                <td className="p-3">Checks strict equality.</td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">toEqual()</td>
                <td className="p-3">Checks deep equality for objects and arrays.</td>
              </tr>
              <tr>
                <td className="p-3">toThrow()</td>
                <td className="p-3">Checks whether a function throws an error.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <CodeBlock code={`test("checks object values", () => {
  expect({ name: "Mayur" }).toEqual({
    name: "Mayur"
  });
});

test("checks error handling", () => {
  const getUser = () => {
    throw new Error("User not found");
  };

  expect(getUser).toThrow("User not found");
});`} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. What Should We Test?</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          A good unit test should cover normal inputs, edge cases and invalid
          inputs.
        </p>

        <CodeBlock code={`// discount.js

export function calculateDiscount(price, discount) {
  if (price < 0 || discount < 0 || discount > 100) {
    throw new Error("Invalid input");
  }

  return price - (price * discount) / 100;
}`} />

        <CodeBlock code={`// discount.test.js

import { calculateDiscount } from "./discount.js";

test("calculates 10% discount", () => {
  expect(calculateDiscount(1000, 10)).toBe(900);
});

test("handles zero discount", () => {
  expect(calculateDiscount(1000, 0)).toBe(1000);
});

test("handles 100% discount", () => {
  expect(calculateDiscount(1000, 100)).toBe(0);
});

test("rejects invalid discount", () => {
  expect(() => calculateDiscount(1000, 120))
    .toThrow("Invalid input");
});`} />

        <p className="text-[var(--text-secondary)] leading-7">
          These tests verify normal behavior, boundary values and invalid
          input handling.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Unit Testing in Backend Development</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          In backend applications, we commonly write unit tests for business
          logic, utility functions, validation rules and service functions.
        </p>

        <CodeBlock code={`// services/userService.js

export function createUsername(firstName, lastName) {
  return (
    firstName.toLowerCase() +
    "_" +
    lastName.toLowerCase()
  );
}`} />

        <CodeBlock code={`// services/userService.test.js

import { createUsername } from "./userService.js";

test("creates username from names", () => {
  expect(
    createUsername("Mayur", "Bairagi")
  ).toBe("mayur_bairagi");
});`} />

        <p className="text-[var(--text-secondary)] leading-7">
          We test the business logic independently instead of starting the
          complete backend server.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Unit Testing vs Integration Testing</h2>
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
                <td className="p-3">Tests individual units.</td>
                <td className="p-3">Tests multiple components working together.</td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Usually isolates dependencies.</td>
                <td className="p-3">Checks interactions between components.</td>
              </tr>
              <tr>
                <td className="p-3">Usually faster to execute.</td>
                <td className="p-3">May require databases, APIs or other dependencies.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Advantages of Unit Testing</h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>Finds bugs early in development.</li>
          <li>Verifies individual functions independently.</li>
          <li>Makes refactoring safer.</li>
          <li>Improves code reliability.</li>
          <li>Helps developers understand expected behavior.</li>
          <li>Reduces repeated manual testing.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Interview Questions</h2>
        {[
          {
            q: "What is Unit Testing?",
            a: "Unit Testing verifies individual units of code, such as functions or methods, independently."
          },
          {
            q: "What is a Unit?",
            a: "A unit is a small, independently testable part of an application, commonly a function or method."
          },
          {
            q: "Why do we use Unit Testing?",
            a: "It helps identify bugs early, verify business logic and make code changes safer."
          },
          {
            q: "What is Jest?",
            a: "Jest is a JavaScript testing framework used to write and execute automated tests."
          },
          {
            q: "What is the purpose of expect()?",
            a: "It creates an assertion that checks whether an actual value matches an expected condition."
          },
          {
            q: "What is the difference between toBe() and toEqual()?",
            a: "toBe() checks strict equality, while toEqual() checks deep equality of object and array values."
          },
          {
            q: "Should a unit test depend on a real database?",
            a: "Usually no. Unit tests isolate the unit being tested and commonly mock external dependencies. Real database interactions are generally covered by integration tests."
          },
          {
            q: "What are edge cases in testing?",
            a: "Edge cases are unusual or boundary inputs, such as zero, empty values, maximum limits or invalid data."
          },
          {
            q: "What is the difference between Unit and Integration Testing?",
            a: "Unit Testing checks individual components, while Integration Testing checks whether multiple components work correctly together."
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