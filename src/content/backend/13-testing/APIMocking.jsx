import CodeBlock from "../../../components/common/CodeBlock";

export default function APIMocking() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          SOFTWARE TESTING / 09
        </p>
        <h1 className="text-3xl font-bold mt-2">API Mocking</h1>
        <p className="text-[var(--text-secondary)] mt-3 leading-7">
          API Mocking is a testing technique in which we replace real API
          requests with fake responses. It allows developers to test application
          behavior without depending on an actual API server.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What Is API Mocking?</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Normally, when an application makes an HTTP request, it communicates
          with a real backend server and receives a response.
        </p>
        <p className="text-[var(--text-secondary)] leading-7">
          During testing, we may not want to call the real server. Instead, we
          intercept the request and return a predefined fake response. This
          process is called API Mocking.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-3">
          <p className="font-semibold text-center">Without API Mocking</p>
          <div className="rounded-lg border border-[var(--border-color)] p-3 text-center">
            Application
          </div>
          <div className="text-center text-[var(--accent-color)]">
            ↓ HTTP Request
          </div>
          <div className="rounded-lg border border-[var(--border-color)] p-3 text-center">
            Real API Server
          </div>
          <div className="text-center text-[var(--accent-color)]">
            ↓ HTTP Response
          </div>
          <div className="rounded-lg border border-[var(--border-color)] p-3 text-center">
            Application receives real data
          </div>
        </div>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-3">
          <p className="font-semibold text-center">With API Mocking</p>
          <div className="rounded-lg border border-[var(--border-color)] p-3 text-center">
            Application
          </div>
          <div className="text-center text-[var(--accent-color)]">
            ↓ HTTP Request
          </div>
          <div className="rounded-lg border border-[var(--accent-color)] p-3 text-center">
            Mock API Handler
          </div>
          <div className="text-center text-[var(--accent-color)]">
            ↓ Fake HTTP Response
          </div>
          <div className="rounded-lg border border-[var(--border-color)] p-3 text-center">
            Application receives fake data
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          2. Why Do We Need API Mocking?
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>Test application behavior without a real backend server.</li>
          <li>Avoid unnecessary external API requests.</li>
          <li>Test success and failure responses.</li>
          <li>Test different HTTP status codes.</li>
          <li>Make tests faster and more predictable.</li>
          <li>Continue frontend development before backend APIs are ready.</li>
          <li>Avoid depending on third-party API availability.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Real API vs Mock API</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="text-left p-3">Real API</th>
                <th className="text-left p-3">Mock API</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Connects to a real server.</td>
                <td className="p-3">Uses a fake response handler.</td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">May depend on network availability.</td>
                <td className="p-3">
                  Can work without a real network request.
                </td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Returns actual server data.</td>
                <td className="p-3">Returns predefined test data.</td>
              </tr>
              <tr>
                <td className="p-3">Useful for real integration.</td>
                <td className="p-3">Useful for controlled testing.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          4. Basic API Mocking Using vi.fn()
        </h2>
        <p className="text-[var(--text-secondary)] leading-7">
          We can use Vitest's vi.fn() to create a fake API function that returns
          predefined data.
        </p>

        <CodeBlock
          code={`import { vi, test, expect } from "vitest";

test("mocks an API function", async () => {
  const fetchUsers = vi.fn().mockResolvedValue([
    {
      id: 1,
      name: "Mayur"
    }
  ]);

  const users = await fetchUsers();

  expect(users).toHaveLength(1);
  expect(users[0].name).toBe("Mayur");
  expect(fetchUsers).toHaveBeenCalled();
});`}
        />

        <p className="text-[var(--text-secondary)] leading-7">
          Here, fetchUsers() does not make a real HTTP request. It simply
          returns the fake data configured using mockResolvedValue().
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          5. API Mocking Using Mock Service Worker (MSW)
        </h2>
        <p className="text-[var(--text-secondary)] leading-7">
          <strong>MSW (Mock Service Worker)</strong> is a popular library for
          mocking HTTP requests. Instead of replacing the function that makes
          the request, MSW intercepts the request and returns a fake HTTP
          response.
        </p>

        <h3 className="font-semibold text-[var(--accent-color)]">
          Step 1: Install MSW
        </h3>
        <CodeBlock code={`npm install -D msw`} />

        <h3 className="font-semibold text-[var(--accent-color)]">
          Step 2: Create API Handler
        </h3>
        <p className="text-[var(--text-secondary)] leading-7">
          Create a file named <strong>handlers.js</strong>. Here, we define
          which API request should be intercepted and what response should be
          returned.
        </p>
        <CodeBlock
          code={`// handlers.js

import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://api.example.com/users", () => {
    return HttpResponse.json([
      {
        id: 1,
        name: "Mayur"
      },
      {
        id: 2,
        name: "Rahul"
      }
    ]);
  })
];`}
        />

        <h3 className="font-semibold text-[var(--accent-color)]">
          Step 3: Configure Mock Server
        </h3>
        <p className="text-[var(--text-secondary)] leading-7">
          Create a file named <strong>server.js</strong>. This starts the MSW
          server for tests.
        </p>
        <CodeBlock
          code={`// server.js

import { setupServer } from "msw/node";
import { handlers } from "./handlers.js";

export const server = setupServer(...handlers);`}
        />

        <h3 className="font-semibold text-[var(--accent-color)]">
          Step 4: Configure Test Setup
        </h3>
        <p className="text-[var(--text-secondary)] leading-7">
          Create a file named <strong>setupTests.js</strong>. It starts the mock
          server before tests and resets handlers after each test.
        </p>
        <CodeBlock
          code={`// setupTests.js

import { beforeAll, afterAll, afterEach } from "vitest";
import { server } from "./server.js";

beforeAll(() => {
  server.listen({
    onUnhandledRequest: "error"
  });
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});`}
        />

        <h3 className="font-semibold text-[var(--accent-color)]">
          Step 5: Configure Vitest
        </h3>
        <p className="text-[var(--text-secondary)] leading-7">
          Add the setup file to your vite.config.js so MSW is configured
          automatically before tests.
        </p>
        <CodeBlock
          code={`// vite.config.js

import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    setupFiles: ["./src/test/setupTests.js"]
  }
});`}
        />

        <h3 className="font-semibold text-[var(--accent-color)]">
          Step 6: Make a Real API Request
        </h3>
        <p className="text-[var(--text-secondary)] leading-7">
          Write a function that makes an HTTP request. We will test this
          function without contacting the real API.
        </p>
        <CodeBlock
          code={`// userService.js

export async function getUsers() {
  const response = await fetch(
    "https://api.example.com/users"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
}`}
        />

        <h3 className="font-semibold text-[var(--accent-color)]">
          Step 7: Write API Test
        </h3>
        <CodeBlock
          code={`// userService.test.js

import { test, expect } from "vitest";
import { getUsers } from "./userService.js";

test("returns mocked users from API", async () => {
  const users = await getUsers();

  expect(users).toHaveLength(2);
  expect(users[0].name).toBe("Mayur");
  expect(users[1].name).toBe("Rahul");
});`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-2">
          <p className="font-semibold">How does it work?</p>
          <ol className="list-decimal pl-6 space-y-2 text-sm text-[var(--text-secondary)]">
            <li>Test calls getUsers().</li>
            <li>getUsers() makes a fetch request.</li>
            <li>MSW intercepts the HTTP request.</li>
            <li>MSW returns the predefined JSON response.</li>
            <li>The test checks the returned data.</li>
          </ol>
          <p className="text-sm text-[var(--text-secondary)]">
            The actual API server is never contacted.
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          6. Mocking API Error Responses
        </h2>
        <p className="text-[var(--text-secondary)] leading-7">
          We can also test what happens when an API returns an error. MSW allows
          us to override handlers for individual tests.
        </p>

        <CodeBlock
          code={`import { http, HttpResponse } from "msw";
import { test, expect } from "vitest";
import { server } from "./server.js";
import { getUsers } from "./userService.js";

test("handles API error", async () => {
  server.use(
    http.get(
      "https://api.example.com/users",
      () => {
        return HttpResponse.json(
          { message: "Server Error" },
          { status: 500 }
        );
      }
    )
  );

  await expect(getUsers()).rejects.toThrow(
    "Failed to fetch users"
  );
});`}
        />

        <p className="text-[var(--text-secondary)] leading-7">
          In this test, MSW returns an HTTP 500 response. Our service checks
          response.ok and throws an error.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Common API Mocking Tools</h2>

        <div className="space-y-3">
          {[
            {
              name: "MSW",
              desc: "Intercepts HTTP requests and provides mock responses. Useful for frontend and Node.js tests.",
            },
            {
              name: "Nock",
              desc: "Mocks and intercepts outgoing HTTP requests in Node.js.",
            },
            {
              name: "Vitest vi.fn()",
              desc: "Creates mock functions for testing API-related application logic.",
            },
            {
              name: "Jest",
              desc: "Provides mock functions and module mocking for JavaScript tests.",
            },
            {
              name: "Postman Mock Servers",
              desc: "Creates mock API endpoints that can be called using HTTP requests.",
            },
          ].map((item) => (
            <div
              key={item.name}
              className="rounded-lg border border-[var(--border-color)] p-4"
            >
              <h3 className="font-semibold text-[var(--accent-color)]">
                {item.name}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mt-2 leading-6">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. API Mocking vs API Testing</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="text-left p-3">API Mocking</th>
                <th className="text-left p-3">API Testing</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Uses fake API responses.</td>
                <td className="p-3">Tests API behavior and responses.</td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Does not require the real API server.</td>
                <td className="p-3">Can test against a real API server.</td>
              </tr>
              <tr>
                <td className="p-3">Useful for controlled test scenarios.</td>
                <td className="p-3">
                  Useful for checking actual API behavior.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Best Practices</h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>Mock only the external APIs that your test depends on.</li>
          <li>Test successful responses and error responses.</li>
          <li>
            Include different HTTP status codes such as 200, 400, 401 and 500.
          </li>
          <li>Keep mock response data realistic.</li>
          <li>Reset temporary handlers between tests.</li>
          <li>Use integration tests to verify real API behavior separately.</li>
          <li>
            Do not treat mocked API tests as proof that the real server works.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Interview Questions</h2>
        {[
          {
            q: "What is API Mocking?",
            a: "API Mocking is a technique that intercepts API requests and returns predefined fake responses instead of contacting a real API server.",
          },
          {
            q: "Why do we use API Mocking?",
            a: "It helps test application behavior without depending on real servers, external APIs or network availability.",
          },
          {
            q: "What is MSW?",
            a: "MSW stands for Mock Service Worker. It intercepts HTTP requests and returns mock responses.",
          },
          {
            q: "What is the difference between vi.fn() and MSW?",
            a: "vi.fn() mocks a JavaScript function, while MSW intercepts HTTP requests at the network request level.",
          },
          {
            q: "What is setupServer() in MSW?",
            a: "setupServer() creates a mock server for intercepting HTTP requests in Node.js testing environments.",
          },
          {
            q: "What is server.use()?",
            a: "server.use() adds or overrides request handlers, which is useful for testing different API responses.",
          },
          {
            q: "What is server.resetHandlers()?",
            a: "It removes runtime handler overrides and restores the original configured handlers.",
          },
          {
            q: "Can we test API errors using mocking?",
            a: "Yes. We can return fake error responses with status codes such as 400, 401, 404 and 500.",
          },
          {
            q: "Does API Mocking test the real backend?",
            a: "No. It tests how the application handles simulated API responses, not the actual backend implementation.",
          },
          {
            q: "What is the difference between API Mocking and API Testing?",
            a: "API Mocking creates controlled fake responses, while API Testing verifies the behavior and correctness of an API.",
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
