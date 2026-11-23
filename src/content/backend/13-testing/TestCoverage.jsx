import CodeBlock from "../../../components/common/CodeBlock";

export default function TestCoverage() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          SOFTWARE TESTING / 10
        </p>
        <h1 className="text-3xl font-bold mt-2">Test Coverage</h1>
        <p className="text-[var(--text-secondary)] mt-3 leading-7">
          Test Coverage is a software testing metric that measures how much of
          the application code is executed by automated tests. It helps
          developers identify code that has not been tested.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What Is Test Coverage?</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          When we write test cases, they execute different parts of our
          application code. Test Coverage measures which parts of the code were
          executed during those tests.
        </p>
        <p className="text-[var(--text-secondary)] leading-7">
          For example, if our application has 100 executable lines of code and
          tests execute 80 of them, the line coverage is 80%.
        </p>

        <CodeBlock
          code={`Line Coverage = (Executed Lines / Total Executable Lines) × 100

Example:

Executed Lines = 80
Total Lines = 100

Coverage = (80 / 100) × 100

Coverage = 80%`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Types of Test Coverage</h2>

        <div className="space-y-4">
          <div className="rounded-xl border border-[var(--border-color)] p-4 space-y-2">
            <h3 className="font-semibold text-[var(--accent-color)]">
              1. Statement Coverage
            </h3>
            <p className="text-[var(--text-secondary)] leading-7">
              Measures the percentage of executable statements that are executed
              by tests.
            </p>
            <CodeBlock
              code={`function checkAge(age) {
  const validAge = age >= 18;
  console.log(validAge);
  return validAge;
}

// Test
checkAge(20);`}
            />
            <p className="text-sm text-[var(--text-secondary)]">
              All three statements inside the function execute when the test
              calls checkAge(20).
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border-color)] p-4 space-y-2">
            <h3 className="font-semibold text-[var(--accent-color)]">
              2. Branch Coverage
            </h3>
            <p className="text-[var(--text-secondary)] leading-7">
              Measures whether each possible decision outcome has been executed,
              such as true and false in an if condition.
            </p>
            <CodeBlock
              code={`function checkAge(age) {
  if (age >= 18) {
    return "Adult";
  }

  return "Minor";
}

// Test only
checkAge(20);`}
            />
            <p className="text-sm text-[var(--text-secondary)]">
              This test executes only the true branch. We also need to test
              checkAge(15) to execute the false branch.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border-color)] p-4 space-y-2">
            <h3 className="font-semibold text-[var(--accent-color)]">
              3. Function Coverage
            </h3>
            <p className="text-[var(--text-secondary)] leading-7">
              Measures the percentage of functions that have been called during
              testing.
            </p>
            <CodeBlock
              code={`function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

// Test
add(10, 5);`}
            />
            <p className="text-sm text-[var(--text-secondary)]">
              Only add() is called. The subtract() function remains untested.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border-color)] p-4 space-y-2">
            <h3 className="font-semibold text-[var(--accent-color)]">
              4. Line Coverage
            </h3>
            <p className="text-[var(--text-secondary)] leading-7">
              Measures the percentage of executable lines that have been
              executed by tests.
            </p>
            <CodeBlock
              code={`function greet(name) {
  const message = "Hello " + name;
  console.log(message);
  return message;
}

// Test
greet("Mayur");`}
            />
            <p className="text-sm text-[var(--text-secondary)]">
              Line coverage checks which executable lines were reached when
              greet() was called.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          3. Statement vs Branch Coverage
        </h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Statement coverage and branch coverage are different. A test can
          execute every statement without testing every possible decision
          outcome.
        </p>
        <CodeBlock
          code={`function getDiscount(isMember) {
  if (isMember) {
    return 20;
  } else {
    return 0;
  }
}

// Test
getDiscount(true);`}
        />
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="text-left p-3">Metric</th>
                <th className="text-left p-3">Result</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Statement Coverage</td>
                <td className="p-3">Not all return statements executed.</td>
              </tr>
              <tr>
                <td className="p-3">Branch Coverage</td>
                <td className="p-3">Only true branch executed.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-[var(--text-secondary)]">
          Calling getDiscount(false) is also necessary to cover the false
          branch. Exact coverage percentages depend on the tool's
          instrumentation and counting rules.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          4. How to Generate Test Coverage Using Vitest
        </h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Vitest supports code coverage reports using V8 or Istanbul providers.
          We will use the V8 provider.
        </p>

        <h3 className="font-semibold text-[var(--accent-color)]">
          Step 1: Install Coverage Provider
        </h3>
        <CodeBlock code={`npm install -D @vitest/coverage-v8`} />

        <h3 className="font-semibold text-[var(--accent-color)]">
          Step 2: Configure Vitest
        </h3>
        <CodeBlock
          code={`// vite.config.js

import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      include: ["src/**/*.js"],
      exclude: ["src/**/*.test.js"]
    }
  }
});`}
        />

        <h3 className="font-semibold text-[var(--accent-color)]">
          Step 3: Create a Function
        </h3>
        <CodeBlock
          code={`// math.js

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}`}
        />

        <h3 className="font-semibold text-[var(--accent-color)]">
          Step 4: Write Tests
        </h3>
        <CodeBlock
          code={`// math.test.js

import { test, expect } from "vitest";
import { add } from "./math.js";

test("adds two numbers", () => {
  expect(add(10, 5)).toBe(15);
});`}
        />

        <h3 className="font-semibold text-[var(--accent-color)]">
          Step 5: Run Coverage
        </h3>
        <CodeBlock code={`npx vitest run --coverage`} />

        <p className="text-[var(--text-secondary)] leading-7">
          Vitest runs the tests and generates a coverage report. Since
          subtract() is never called, it will appear as uncovered code.
        </p>

        <h3 className="font-semibold text-[var(--accent-color)]">
          Step 6: View HTML Report
        </h3>
        <CodeBlock code={`coverage/index.html`} />
        <p className="text-[var(--text-secondary)] leading-7">
          Open the generated HTML report in your browser. It shows covered and
          uncovered lines in your source files.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          5. Understanding Coverage Report
        </h2>
        <p className="text-[var(--text-secondary)] leading-7">
          A typical coverage report contains these metrics:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="text-left p-3">Metric</th>
                <th className="text-left p-3">Meaning</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3 font-medium">Statements</td>
                <td className="p-3">Percentage of executed statements.</td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3 font-medium">Branches</td>
                <td className="p-3">
                  Percentage of executed decision outcomes.
                </td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3 font-medium">Functions</td>
                <td className="p-3">Percentage of called functions.</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Lines</td>
                <td className="p-3">Percentage of executed lines.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Coverage Thresholds</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Coverage thresholds define the minimum coverage percentage required
          for a test suite to pass.
        </p>
        <CodeBlock
          code={`// vite.config.js

import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      provider: "v8",
      thresholds: {
        statements: 80,
        branches: 70,
        functions: 80,
        lines: 80
      }
    }
  }
});`}
        />
        <p className="text-[var(--text-secondary)] leading-7">
          In this example, the coverage check fails if any configured threshold
          is not met. Thresholds help maintain a minimum testing standard as the
          project grows.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          7. Advantages of Test Coverage
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>Identifies untested parts of the application.</li>
          <li>Helps improve test quality.</li>
          <li>Highlights missing test cases.</li>
          <li>Helps maintain testing standards in large projects.</li>
          <li>Can be integrated into CI/CD pipelines.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          8. Limitations of Test Coverage
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>High coverage does not guarantee bug-free software.</li>
          <li>
            Executing code does not mean its output was checked correctly.
          </li>
          <li>It does not measure how effective an assertion is.</li>
          <li>
            100% coverage does not guarantee that every possible input was
            tested.
          </li>
        </ul>
        <div className="rounded-xl border border-[var(--accent-color)] p-4">
          <p className="font-semibold text-[var(--accent-color)]">
            Important Concept
          </p>
          <p className="text-sm text-[var(--text-secondary)] mt-2 leading-6">
            100% Test Coverage does not mean 100% bug-free software. Coverage
            tells us how much code was executed, not whether the application is
            completely correct.
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Best Practices</h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>Test important business logic first.</li>
          <li>Cover both success and failure scenarios.</li>
          <li>Test true and false branches of conditions.</li>
          <li>Use meaningful assertions in every test.</li>
          <li>Set realistic coverage thresholds.</li>
          <li>Do not write meaningless tests just to increase coverage.</li>
          <li>Review uncovered code and decide whether it needs testing.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Interview Questions</h2>
        {[
          {
            q: "What is Test Coverage?",
            a: "Test Coverage is a metric that measures how much of the application code is executed by automated tests.",
          },
          {
            q: "What are the main types of Test Coverage?",
            a: "Statement Coverage, Branch Coverage, Function Coverage and Line Coverage.",
          },
          {
            q: "What is Statement Coverage?",
            a: "It measures the percentage of executable statements executed during testing.",
          },
          {
            q: "What is Branch Coverage?",
            a: "It measures whether each possible outcome of a decision, such as true and false, has been executed.",
          },
          {
            q: "What is Function Coverage?",
            a: "It measures the percentage of functions called during testing.",
          },
          {
            q: "What is Line Coverage?",
            a: "It measures the percentage of executable lines reached during testing.",
          },
          {
            q: "What is a Coverage Report?",
            a: "It is a report showing covered and uncovered code along with coverage percentages.",
          },
          {
            q: "How can we generate coverage using Vitest?",
            a: "Install a coverage provider such as @vitest/coverage-v8 and run npx vitest run --coverage.",
          },
          {
            q: "What are Coverage Thresholds?",
            a: "They define minimum required coverage percentages for metrics such as statements, branches, functions and lines.",
          },
          {
            q: "Does 100% Test Coverage mean bug-free software?",
            a: "No. It only means the measured code was executed. It does not guarantee correct behavior or the absence of bugs.",
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
