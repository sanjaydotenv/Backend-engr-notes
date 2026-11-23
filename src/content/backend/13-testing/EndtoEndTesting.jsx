import CodeBlock from "../../../components/common/CodeBlock";

export default function EndtoEndTesting() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          SOFTWARE TESTING / 04
        </p>
        <h1 className="text-3xl font-bold mt-2">End-to-End Testing (E2E)</h1>
        <p className="text-[var(--text-secondary)] mt-3 leading-7">
          End-to-End Testing is a software testing technique that verifies
          whether an entire application works correctly from beginning to end
          by testing complete user workflows.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What Is End-to-End Testing?</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          In E2E Testing, we test the complete application flow instead of
          testing only individual functions or components.
        </p>
        <p className="text-[var(--text-secondary)] leading-7">
          For example, consider an e-commerce application. When a user places
          an order, multiple parts of the application work together.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-2 text-center">
          {[
            "User opens the application",
            "User logs in",
            "User searches for a product",
            "User adds product to cart",
            "User completes payment",
            "Order is successfully created"
          ].map((item, index) => (
            <div key={item}>
              <div className="rounded-lg border border-[var(--border-color)] p-3 text-sm">
                {item}
              </div>
              {index !== 5 && (
                <div className="text-[var(--accent-color)] py-1">↓</div>
              )}
            </div>
          ))}
        </div>

        <p className="text-[var(--text-secondary)] leading-7">
          E2E Testing verifies whether this complete workflow works correctly.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Why Do We Need E2E Testing?</h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>Verifies complete user workflows.</li>
          <li>Checks whether frontend and backend work together.</li>
          <li>Identifies problems between multiple integrated systems.</li>
          <li>Verifies important business operations.</li>
          <li>Helps ensure that the application behaves correctly for users.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. How E2E Testing Works</h2>
        <ol className="list-decimal pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>Start the application and required services.</li>
          <li>Open the application in a real or automated browser.</li>
          <li>Perform actions like clicking buttons and filling forms.</li>
          <li>Verify API responses and visible application behavior.</li>
          <li>Check whether the expected workflow completes successfully.</li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. E2E Testing Tools</h2>

        <div className="space-y-3">
          <div className="rounded-lg border border-[var(--border-color)] p-4">
            <h3 className="font-semibold text-[var(--accent-color)]">Playwright</h3>
            <p className="text-sm text-[var(--text-secondary)] mt-2 leading-6">
              Playwright is an automation framework used to test web
              applications across browsers. It supports Chromium, Firefox and
              WebKit.
            </p>
          </div>

          <div className="rounded-lg border border-[var(--border-color)] p-4">
            <h3 className="font-semibold text-[var(--accent-color)]">Cypress</h3>
            <p className="text-sm text-[var(--text-secondary)] mt-2 leading-6">
              Cypress is a testing framework designed for testing web
              applications in browsers.
            </p>
          </div>

          <div className="rounded-lg border border-[var(--border-color)] p-4">
            <h3 className="font-semibold text-[var(--accent-color)]">Selenium</h3>
            <p className="text-sm text-[var(--text-secondary)] mt-2 leading-6">
              Selenium is a browser automation tool that supports multiple
              programming languages and browsers.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. E2E Testing Using Playwright</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Let's understand how to test a complete login workflow using
          Playwright.
        </p>

        <h3 className="font-semibold text-[var(--accent-color)]">Step 1: Install Playwright</h3>
        <p className="text-[var(--text-secondary)] leading-7">
          Open your project terminal and run:
        </p>
        <CodeBlock code={`npm init playwright@latest`} />

        <p className="text-[var(--text-secondary)] leading-7">
          During setup, select JavaScript if you are using JavaScript in your
          project. Playwright will create a test folder and configuration
          file.
        </p>

        <h3 className="font-semibold text-[var(--accent-color)]">Step 2: Create a Login Test</h3>
        <p className="text-[var(--text-secondary)] leading-7">
          Suppose our application has a login page with email and password
          fields and a login button.
        </p>
        <CodeBlock code={`// tests/login.spec.js

import { test, expect } from "@playwright/test";

test("user can log in successfully", async ({ page }) => {
  // Open login page
  await page.goto("http://localhost:5173/login");

  // Enter email
  await page.getByLabel("Email").fill("mayur@example.com");

  // Enter password
  await page.getByLabel("Password").fill("password123");

  // Click login button
  await page.getByRole("button", {
    name: "Login"
  }).click();

  // Verify successful login
  await expect(page).toHaveURL(/dashboard/);

  // Verify dashboard is visible
  await expect(
    page.getByRole("heading", { name: "Dashboard" })
  ).toBeVisible();
});`} />

        <p className="text-[var(--text-secondary)] leading-7">
          Here, Playwright opens the browser, enters login credentials, clicks
          the login button and checks whether the user reaches the dashboard.
        </p>

        <h3 className="font-semibold text-[var(--accent-color)]">Step 3: Run the Test</h3>
        <CodeBlock code={`npx playwright test`} />

        <p className="text-[var(--text-secondary)] leading-7">
          To see the test running in a visible browser:
        </p>
        <CodeBlock code={`npx playwright test --headed`} />

        <p className="text-[var(--text-secondary)] leading-7">
          To open the HTML test report:
        </p>
        <CodeBlock code={`npx playwright show-report`} />

        <div className="rounded-lg border border-[var(--border-color)] p-4">
          <p className="font-semibold text-[var(--accent-color)]">Important</p>
          <p className="text-sm text-[var(--text-secondary)] mt-2 leading-6">
            This example assumes the application is already running, the login
            page has accessible Email and Password labels, and successful
            login redirects to a URL containing dashboard. Your selectors and
            expected URL must match your actual application.
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. E2E Testing vs Integration Testing</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="text-left p-3">Integration Testing</th>
                <th className="text-left p-3">E2E Testing</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Tests interactions between components.</td>
                <td className="p-3">Tests complete application workflows.</td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Usually focuses on selected layers.</td>
                <td className="p-3">Covers the application from the user's perspective.</td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">May use HTTP test clients.</td>
                <td className="p-3">Often uses browser automation tools.</td>
              </tr>
              <tr>
                <td className="p-3">Usually faster than E2E tests.</td>
                <td className="p-3">Usually slower because more systems are involved.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. What Should We Test?</h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>User registration and login.</li>
          <li>Password reset workflow.</li>
          <li>Product search and filtering.</li>
          <li>Cart and checkout process.</li>
          <li>Payment and order creation.</li>
          <li>Dashboard and important user workflows.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Best Practices</h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>Test important user workflows first.</li>
          <li>Use a dedicated test environment.</li>
          <li>Use test accounts and test data.</li>
          <li>Keep tests independent from each other.</li>
          <li>Prefer stable selectors such as accessible labels and roles.</li>
          <li>Avoid unnecessary fixed delays; use automatic waiting and assertions.</li>
          <li>Do not perform real payments or destructive operations in production.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Advantages and Limitations</h2>

        <h3 className="font-semibold text-[var(--accent-color)]">Advantages</h3>
        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>Tests the application from the user's perspective.</li>
          <li>Verifies complete business workflows.</li>
          <li>Finds problems that isolated tests may miss.</li>
        </ul>

        <h3 className="font-semibold text-[var(--accent-color)]">Limitations</h3>
        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>Tests can take longer to execute.</li>
          <li>Setup and maintenance can be expensive.</li>
          <li>Tests may become flaky if selectors or environments are unstable.</li>
          <li>Debugging failures can be more difficult.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Interview Questions</h2>
        {[
          {
            q: "What is End-to-End Testing?",
            a: "E2E Testing verifies that a complete application workflow works correctly from beginning to end."
          },
          {
            q: "Why is E2E Testing important?",
            a: "It verifies complete user workflows and checks whether different parts of an application work together correctly."
          },
          {
            q: "What is the difference between Integration and E2E Testing?",
            a: "Integration Testing focuses on interactions between components, while E2E Testing verifies complete application workflows."
          },
          {
            q: "Name some E2E Testing tools.",
            a: "Playwright, Cypress and Selenium are commonly used E2E testing tools."
          },
          {
            q: "What is Playwright?",
            a: "Playwright is a browser automation framework used to test web applications across multiple browser engines."
          },
          {
            q: "What is a flaky test?",
            a: "A flaky test sometimes passes and sometimes fails without any relevant code changes."
          },
          {
            q: "Why should we avoid fixed waits in E2E tests?",
            a: "Fixed waits make tests slower and unreliable. Automatic waiting and condition-based assertions are better."
          },
          {
            q: "Can E2E Testing test a login workflow?",
            a: "Yes. It can open the login page, enter credentials, submit the form and verify that the user reaches the dashboard."
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