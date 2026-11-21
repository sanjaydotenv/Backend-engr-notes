import CodeBlock from "../../../../components/common/CodeBlock";

const APIDocumentation = () => {
  const questions = [
    {
      question: "What is API Documentation?",
      answer:
        "API Documentation is a guide that explains how an API works, including its endpoints, HTTP methods, parameters, request bodies, responses, and authentication.",
    },
    {
      question: "Why do we need API Documentation?",
      answer:
        "It helps developers understand, integrate, test, and maintain APIs without repeatedly asking the API developer for details.",
    },
    {
      question: "What is OpenAPI?",
      answer:
        "OpenAPI is a specification used to describe REST APIs in a standard, machine-readable format.",
    },
    {
      question: "What is Swagger?",
      answer:
        "Swagger is a collection of tools that work with the OpenAPI Specification, including tools for designing, documenting, and testing APIs.",
    },
    {
      question: "What is Swagger UI?",
      answer:
        "Swagger UI is a browser-based interface that displays API documentation and allows developers to try API endpoints.",
    },
    {
      question: "What is an API Schema?",
      answer:
        "An API Schema describes the structure and data types of request bodies, responses, and other API data.",
    },
    {
      question: "What is the difference between Swagger and OpenAPI?",
      answer:
        "OpenAPI is the specification, while Swagger is a set of tools that can create, display, and work with OpenAPI documents.",
    },
    {
      question: "Can Swagger UI test API endpoints?",
      answer:
        "Yes. Swagger UI provides a Try it out feature that can send requests to configured API servers.",
    },
  ];

  return (
    <div className="w-full space-y-8 text-[var(--text-primary)]">

      {/* HEADER */}
      <div className="space-y-3">
        <p className="text-sm font-semibold tracking-widest text-[var(--accent-color)]">
          EXPRESS.JS / REST API DEVELOPMENT / 12
        </p>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          API Documentation
        </h1>

        <p className="text-base leading-7 text-[var(--text-secondary)]">
          API Documentation explains how developers can use an API.
          It describes endpoints, HTTP methods, parameters,
          authentication, request bodies, and responses. OpenAPI and
          Swagger are commonly used to create API documentation.
        </p>
      </div>

      {/* SECTION 1 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          1. Why Do We Need API Documentation?
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Imagine you build a backend with 20 API endpoints.
          Another developer wants to use your APIs. Without
          documentation, they may not know which URL to call,
          what data to send, or what response to expect.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
            <h3 className="mb-2 font-semibold text-[var(--accent-color)]">
              Without Documentation
            </h3>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-[var(--text-secondary)]">
              <li>Developers guess API requirements.</li>
              <li>Integration becomes difficult.</li>
              <li>More communication is required.</li>
              <li>Testing becomes confusing.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
            <h3 className="mb-2 font-semibold text-[var(--accent-color)]">
              With Documentation
            </h3>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-[var(--text-secondary)]">
              <li>Endpoints are clearly explained.</li>
              <li>Request and response formats are known.</li>
              <li>Integration becomes easier.</li>
              <li>Developers can test APIs quickly.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          2. What Should API Documentation Contain?
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Good API documentation should explain the following things:
        </p>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="p-3 font-semibold">Item</th>
                <th className="p-3 font-semibold">Purpose</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[var(--border-color)]">
              <tr>
                <td className="p-3 font-medium">Endpoint</td>
                <td className="p-3 text-[var(--text-secondary)]">
                  API URL or path.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-medium">HTTP Method</td>
                <td className="p-3 text-[var(--text-secondary)]">
                  GET, POST, PUT, PATCH, DELETE.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Parameters</td>
                <td className="p-3 text-[var(--text-secondary)]">
                  Values passed through path, query, or headers.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Request Body</td>
                <td className="p-3 text-[var(--text-secondary)]">
                  Data sent by the client.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Response</td>
                <td className="p-3 text-[var(--text-secondary)]">
                  Data returned by the server.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Status Codes</td>
                <td className="p-3 text-[var(--text-secondary)]">
                  HTTP result of the request.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Authentication</td>
                <td className="p-3 text-[var(--text-secondary)]">
                  How users prove their identity.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          3. What is OpenAPI?
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          OpenAPI is a standard specification for describing REST APIs.
          It allows developers to describe an API using a structured
          document, usually written in YAML or JSON.
        </p>

        <CodeBlock
          code={`openapi: 3.0.3

info:
  title: User API
  description: API for managing users
  version: 1.0.0

servers:
  - url: http://localhost:3000

paths:
  /api/users:
    get:
      summary: Get all users
      responses:
        "200":
          description: Users fetched successfully`}
        />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          This is a small OpenAPI document describing a GET endpoint.
          The document can be used by tools to generate interactive
          documentation.
        </p>
      </section>

      {/* SECTION 4 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          4. What is Swagger?
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Swagger is a collection of tools that work with the
          OpenAPI Specification.
        </p>

        <div className="space-y-3">
          {[
            {
              title: "Swagger UI",
              description:
                "Displays interactive API documentation in the browser.",
            },
            {
              title: "Swagger Editor",
              description:
                "Helps developers write and edit OpenAPI documents.",
            },
            {
              title: "Swagger Codegen",
              description:
                "Generates client SDKs and server stubs from API definitions.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4"
            >
              <h3 className="font-semibold text-[var(--accent-color)]">
                {item.title}
              </h3>
              <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          5. Setting Up Swagger in Express.js
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          We can use swagger-jsdoc to generate an OpenAPI document
          from code comments and swagger-ui-express to display
          that documentation in the browser.
        </p>

        <CodeBlock
          code={`npm install swagger-jsdoc swagger-ui-express`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Import the required packages:
        </p>

        <CodeBlock
          code={`import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";`}
        />
      </section>

      {/* SECTION 6 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          6. Configure Swagger
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          First, define the basic information about your API and
          tell swagger-jsdoc where to find documentation comments.
        </p>

        <CodeBlock
          code={`const swaggerOptions = {
  definition: {
    openapi: "3.0.3",

    info: {
      title: "My Backend API",
      version: "1.0.0",
      description: "API documentation for my application",
    },

    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },

  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);`}
        />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          The <code>apis</code> option tells Swagger where to find
          JSDoc comments describing API endpoints. Adjust the path
          according to your project structure.
        </p>
      </section>

      {/* SECTION 7 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          7. Add Swagger UI to Express
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          After generating the OpenAPI specification, expose it
          through a route using Swagger UI.
        </p>

        <CodeBlock
          code={`import express from "express";
import swaggerUi from "swagger-ui-express";

const app = express();

// swaggerSpec is generated using swagger-jsdoc

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <p className="text-sm font-semibold text-[var(--accent-color)]">
            Documentation URL
          </p>
          <p className="mt-2 break-all font-mono text-sm text-[var(--text-secondary)]">
            http://localhost:3000/api-docs
          </p>
        </div>
      </section>

      {/* SECTION 8 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          8. Document an API Endpoint
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Swagger can read special JSDoc comments and convert them
          into OpenAPI documentation.
        </p>

        <CodeBlock
          code={`/**
 * @openapi
 * /api/users:
 *   get:
 *     summary: Get all users
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: Users fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                       email:
 *                         type: string
 */

router.get("/users", getUsers);`}
        />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          The comment describes the endpoint, its purpose, and the
          expected successful response. The actual Express route
          still handles the request.
        </p>
      </section>

      {/* SECTION 9 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          9. Document Request Body
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          For POST and PUT endpoints, we should document the data
          that clients must send.
        </p>

        <CodeBlock
          code={`/**
 * @openapi
 * /api/users:
 *   post:
 *     summary: Create a new user
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *             properties:
 *               name:
 *                 type: string
 *                 example: Mayur
 *               email:
 *                 type: string
 *                 example: mayur@example.com
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Invalid request data
 */

router.post("/users", createUser);`}
        />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          The <code>requestBody</code> describes the expected input,
          while <code>responses</code> describes possible outputs.
        </p>
      </section>

      {/* SECTION 10 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          10. Document Authentication
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          If an API requires a Bearer token, we can describe its
          authentication mechanism using securitySchemes.
        </p>

        <CodeBlock
          code={`const swaggerOptions = {
  definition: {
    openapi: "3.0.3",

    info: {
      title: "My Backend API",
      version: "1.0.0",
    },

    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },

    security: [
      {
        bearerAuth: [],
      },
    ],
  },

  apis: ["./src/routes/*.js"],
};`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          The security configuration tells Swagger that endpoints
          require a Bearer token by default. Individual public
          endpoints can override this requirement.
        </p>

        <CodeBlock
          code={`/**
 * @openapi
 * /api/auth/login:
 *   post:
 *     summary: Login user
 *     security: []
 *     responses:
 *       200:
 *         description: Login successful
 */`}
        />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          Setting <code>security: []</code> makes this endpoint
          public in the documentation. It does not change the
          actual authentication middleware in Express.
        </p>
      </section>

      {/* SECTION 11 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          11. Best Practices
        </h2>

        <ul className="list-disc space-y-2 pl-5 leading-7 text-[var(--text-secondary)]">
          <li>Document every public API endpoint.</li>
          <li>Use clear endpoint descriptions and meaningful tags.</li>
          <li>Document request parameters and body schemas.</li>
          <li>Include success and error response status codes.</li>
          <li>Explain authentication requirements.</li>
          <li>Keep documentation updated whenever APIs change.</li>
          <li>Use realistic request and response examples.</li>
          <li>Never expose API keys, passwords, or private credentials in documentation.</li>
          <li>Validate the OpenAPI document before publishing it.</li>
        </ul>
      </section>

      {/* INTERVIEW QUESTIONS */}
      <section className="space-y-5 border-t border-[var(--border-color)] pt-7">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">
            Interview Questions
          </h2>

          <p className="text-sm text-[var(--text-muted)]">
            Click any question to reveal its answer.
          </p>
        </div>

        <div className="space-y-3">
          {questions.map((item, index) => (
            <details
              key={item.question}
              className="group overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 font-medium transition-colors hover:bg-[var(--bg-hover)]">
                <span className="text-sm sm:text-base">
                  {index + 1}. {item.question}
                </span>

                <span className="shrink-0 text-lg text-[var(--accent-color)] transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>

              <div className="border-t border-[var(--border-color)] px-4 py-4 text-sm leading-7 text-[var(--text-secondary)]">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </section>

    </div>
  );
};

export default APIDocumentation;