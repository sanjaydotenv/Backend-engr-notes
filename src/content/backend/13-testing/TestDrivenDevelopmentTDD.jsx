import CodeBlock from "../../../components/common/CodeBlock";

export default function TestDrivenDevelopmentTDD() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          SOFTWARE TESTING / 11
        </p>
        <h1 className="text-3xl font-bold mt-2">
          Test-Driven Development (TDD)
        </h1>
        <p className="text-[var(--text-secondary)] mt-3 leading-7">
          Test-Driven Development (TDD) is a software development approach in
          which developers write automated tests before writing the actual
          application code. The code is then written and improved until all
          tests pass.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What Is TDD?</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          In traditional development, developers usually write application code
          first and tests afterward.
        </p>
        <p className="text-[var(--text-secondary)] leading-7">
          In TDD, the process is reversed. We first define the expected behavior
          through a test, then write the minimum code required to pass that
          test.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-3">
          <p className="font-semibold text-center">Traditional Development</p>
          <div className="grid grid-cols-3 gap-2 text-center text-sm">
            <div className="rounded-lg border border-[var(--border-color)] p-3">
              Write Code
            </div>
            <div className="flex items-center justify-center text-[var(--accent-color)]">
              →
            </div>
            <div className="rounded-lg border border-[var(--border-color)] p-3">
              Write Tests
            </div>
          </div>
          <p className="font-semibold text-center mt-5">
            Test-Driven Development
          </p>
          <div className="grid grid-cols-3 gap-2 text-center text-sm">
            <div className="rounded-lg border border-[var(--accent-color)] p-3">
              Write Test
            </div>
            <div className="flex items-center justify-center text-[var(--accent-color)]">
              →
            </div>
            <div className="rounded-lg border border-[var(--border-color)] p-3">
              Write Code
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Red → Green → Refactor</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          TDD follows a continuous three-step cycle. Developers repeat this
          cycle for each small feature or behavior.
        </p>

        <div className="space-y-3">
          <div className="rounded-xl border border-[var(--border-color)] p-4">
            <h3 className="font-semibold text-red-500">
              1. Red - Write a Failing Test
            </h3>
            <p className="text-[var(--text-secondary)] mt-2 leading-7">
              First, write a test for the expected behavior. Run it and confirm
              that it fails because the required functionality does not exist
              yet.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border-color)] p-4">
            <h3 className="font-semibold text-green-500">
              2. Green - Make the Test Pass
            </h3>
            <p className="text-[var(--text-secondary)] mt-2 leading-7">
              Write the minimum amount of application code required to make the
              failing test pass.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border-color)] p-4">
            <h3 className="font-semibold text-[var(--accent-color)]">
              3. Refactor - Improve the Code
            </h3>
            <p className="text-[var(--text-secondary)] mt-2 leading-7">
              Improve the code structure, readability and maintainability
              without changing its behavior. Run tests again to ensure
              everything still works.
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <p className="font-semibold text-center">TDD Cycle</p>
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-sm">
            <span className="rounded-lg border border-red-500 p-3">RED</span>
            <span className="text-[var(--accent-color)]">→</span>
            <span className="rounded-lg border border-green-500 p-3">
              GREEN
            </span>
            <span className="text-[var(--accent-color)]">→</span>
            <span className="rounded-lg border border-[var(--accent-color)] p-3">
              REFACTOR
            </span>
            <span className="text-[var(--accent-color)]">↺</span>
          </div>
          <p className="text-xs text-center text-[var(--text-secondary)] mt-3">
            Repeat the cycle for the next requirement.
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          3. Practical Example Using Vitest
        </h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Let's build an add() function using TDD. We will first write the test
          and then implement the function.
        </p>

        <h3 className="font-semibold text-red-500">
          Step 1: RED - Write the Test First
        </h3>
        <p className="text-[var(--text-secondary)] leading-7">
          Create a file named <strong>math.test.js</strong>. We expect add(10,
          20) to return 30.
        </p>
        <CodeBlock
          code={`// math.test.js

import { test, expect } from "vitest";
import { add } from "./math.js";

test("adds two numbers", () => {
  expect(add(10, 20)).toBe(30);
});`}
        />

        <p className="text-[var(--text-secondary)] leading-7">Run the test:</p>
        <CodeBlock code={`npx vitest run`} />

        <p className="text-sm text-[var(--text-secondary)]">
          The test fails because math.js or the add() function does not exist
          yet. This is the RED stage.
        </p>

        <h3 className="font-semibold text-green-500">
          Step 2: GREEN - Write Minimum Code
        </h3>
        <p className="text-[var(--text-secondary)] leading-7">
          Now create <strong>math.js</strong> and implement the add() function.
        </p>
        <CodeBlock
          code={`// math.js

export function add(a, b) {
  return a + b;
}`}
        />

        <p className="text-[var(--text-secondary)] leading-7">
          Run the test again:
        </p>
        <CodeBlock code={`npx vitest run`} />

        <p className="text-sm text-[var(--text-secondary)]">
          Now the test passes because add(10, 20) returns 30. This is the GREEN
          stage.
        </p>

        <h3 className="font-semibold text-[var(--accent-color)]">
          Step 3: REFACTOR - Improve the Code
        </h3>
        <p className="text-[var(--text-secondary)] leading-7">
          Our function is already simple, so no changes are necessary. In larger
          functions, we can improve naming, remove duplication and simplify the
          implementation.
        </p>
        <p className="text-sm text-[var(--text-secondary)]">
          After refactoring, run the tests again to make sure the behavior has
          not changed.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          4. TDD Example in Backend Development
        </h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Suppose we are building a registration feature. We want to prevent
          users from registering with an invalid email.
        </p>

        <h3 className="font-semibold text-[var(--accent-color)]">
          Step 1: Write Test First
        </h3>
        <CodeBlock
          code={`// email.test.js

import { test, expect } from "vitest";
import { isValidEmail } from "./email.js";

test("accepts a valid email", () => {
  expect(isValidEmail("user@example.com")).toBe(true);
});

test("rejects an invalid email", () => {
  expect(isValidEmail("invalid-email")).toBe(false);
});`}
        />

        <h3 className="font-semibold text-[var(--accent-color)]">
          Step 2: Implement Function
        </h3>
        <CodeBlock
          code={`// email.js

export function isValidEmail(email) {
  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
}`}
        />

        <h3 className="font-semibold text-[var(--accent-color)]">
          Step 3: Run Tests
        </h3>
        <CodeBlock code={`npx vitest run`} />

        <p className="text-[var(--text-secondary)] leading-7">
          Both tests should pass. We can now use this function in our
          registration validation logic.
        </p>
        <p className="text-sm text-[var(--text-secondary)]">
          Note: This regular expression is a basic format check, not a complete
          guarantee that an email address exists or can receive mail.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. TDD vs Traditional Testing</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="text-left p-3">TDD</th>
                <th className="text-left p-3">Traditional Development</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Tests are written first.</td>
                <td className="p-3">Code is usually written first.</td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Development follows test requirements.</td>
                <td className="p-3">
                  Tests are often added after implementation.
                </td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Uses Red-Green-Refactor.</td>
                <td className="p-3">Does not require a fixed cycle.</td>
              </tr>
              <tr>
                <td className="p-3">Encourages small, testable changes.</td>
                <td className="p-3">Testing approach depends on the team.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Advantages of TDD</h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>Finds problems early during development.</li>
          <li>Encourages writing testable and modular code.</li>
          <li>Provides confidence when changing existing code.</li>
          <li>Helps prevent previously fixed bugs from returning.</li>
          <li>Acts as executable documentation of expected behavior.</li>
          <li>
            Encourages developers to think about requirements before
            implementation.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Disadvantages of TDD</h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>Requires practice and discipline.</li>
          <li>Can initially slow down development.</li>
          <li>Tests may need updates when requirements change.</li>
          <li>Writing tests for complex systems can be challenging.</li>
          <li>Badly designed tests can make refactoring difficult.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Best Practices</h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>Write one small test at a time.</li>
          <li>Make sure the test fails before implementing the feature.</li>
          <li>Write only enough code to pass the current test.</li>
          <li>Refactor after the test passes.</li>
          <li>Keep tests independent and easy to understand.</li>
          <li>Test normal cases, edge cases and error cases.</li>
          <li>Run the full test suite after important changes.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Interview Questions</h2>
        {[
          {
            q: "What is Test-Driven Development (TDD)?",
            a: "TDD is a development approach in which tests are written before application code. The implementation is then written to make those tests pass.",
          },
          {
            q: "What are the three stages of TDD?",
            a: "Red, Green and Refactor.",
          },
          {
            q: "What is the Red stage?",
            a: "Write a test for expected behavior and run it to confirm that it fails.",
          },
          {
            q: "What is the Green stage?",
            a: "Write the minimum implementation required to make the failing test pass.",
          },
          {
            q: "What is the Refactor stage?",
            a: "Improve code quality and structure without changing its behavior, then run tests again.",
          },
          {
            q: "Why do we write tests before code in TDD?",
            a: "It helps define expected behavior before implementation and encourages testable code.",
          },
          {
            q: "Which tools can be used for TDD in JavaScript?",
            a: "Vitest and Jest are popular testing frameworks used to implement TDD.",
          },
          {
            q: "Does TDD eliminate all bugs?",
            a: "No. TDD helps detect problems early, but it cannot guarantee bug-free software.",
          },
          {
            q: "What is the difference between TDD and traditional testing?",
            a: "TDD writes tests before implementation, while traditional development commonly writes tests after the application code.",
          },
          {
            q: "What is the main benefit of TDD?",
            a: "It encourages reliable, testable and maintainable code by continuously verifying expected behavior.",
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
