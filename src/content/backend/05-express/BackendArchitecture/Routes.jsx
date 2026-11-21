import React, { useState } from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const Routes = () => {
  const interviewQuestions = [
    {
      question: "What are Routes in Express.js?",
      answer:
        "Routes define how a server responds to client requests for specific URLs and HTTP methods.",
    },
    {
      question: "Why do we use Express Router?",
      answer:
        "Express Router helps organize related routes into separate, reusable modules.",
    },
    {
      question: "What are HTTP methods used in routing?",
      answer:
        "Common methods are GET, POST, PUT, PATCH, and DELETE. They represent different operations on resources.",
    },
    {
      question: "What is the difference between app.get() and router.get()?",
      answer:
        "app.get() defines a route directly on the Express application, while router.get() defines it inside an Express Router instance.",
    },
    {
      question: "What are Route Parameters?",
      answer:
        "Route parameters are dynamic values defined in a URL using a colon, such as /users/:id.",
    },
    {
      question: "What are Query Parameters?",
      answer:
        "Query parameters are optional URL values written after ?, commonly used for filtering, searching, and pagination.",
    },
    {
      question:
        "What is the difference between Route Parameters and Query Parameters?",
      answer:
        "Route parameters identify a specific resource, while query parameters modify or filter the requested data.",
    },
    {
      question: "What is Route Chaining?",
      answer:
        "Route chaining allows multiple HTTP methods to be defined for the same URL using router.route().",
    },
    {
      question: "How do you create modular routes?",
      answer:
        "Create separate route files using express.Router(), then import and mount them in the main Express application.",
    },
    {
      question: "What is the difference between app.use() and app.get()?",
      answer:
        "app.use() registers middleware or mounts routers, while app.get() handles GET requests for a specific path.",
    },
    {
      question: "What is a Nested Route?",
      answer:
        "A nested route represents a relationship between resources, such as /users/:userId/posts.",
    },
    {
      question: "What happens if no route matches a request?",
      answer:
        "Express continues to the remaining middleware. If no handler responds, the request may reach a 404 handler.",
    },
  ];

  const [openQuestions, setOpenQuestions] = useState({});

  const toggleQuestion = (index) => {
    setOpenQuestions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <p className="text-sm font-semibold tracking-wider text-orange-500">
          BACKEND ARCHITECTURE / 03
        </p>

        <h1 className="mt-2 text-3xl font-bold">Routes in Express.js</h1>

        <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">
          Routes define how an Express server handles incoming client requests
          based on their URL and HTTP method. They connect API endpoints with
          the appropriate request handlers.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">1. What are Routes?</h2>

        <p>
          A route is a combination of an HTTP method, URL path, and handler
          function that tells the server what to do when a particular request
          arrives.
        </p>

        <p>For example:</p>

        <CodeBlock
          code={`app.get("/users", (req, res) => {
  res.send("All Users");
});`}
        />

        <p>In this example:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>GET:</strong> HTTP method.
          </li>
          <li>
            <strong>/users:</strong> Route path.
          </li>
          <li>
            <strong>Callback:</strong> Function that handles the request.
          </li>
        </ul>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">2. Why Do We Need Routes?</h2>

        <p>
          Routes help the backend understand which operation should execute when
          a client requests a particular endpoint.
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Organizes API endpoints.</li>
          <li>Separates different application operations.</li>
          <li>Connects endpoints with controllers.</li>
          <li>Makes backend code easier to maintain.</li>
          <li>Supports modular application architecture.</li>
        </ul>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">3. HTTP Methods in Routes</h2>

        <p>
          HTTP methods define what action the client wants to perform on a
          resource.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[450px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="p-3">Method</th>
                <th className="p-3">Purpose</th>
                <th className="p-3">Example</th>
              </tr>
            </thead>

            <tbody>
              {[
                ["GET", "Retrieve data", "/users"],
                ["POST", "Create data", "/users"],
                ["PUT", "Replace data", "/users/10"],
                ["PATCH", "Partially update data", "/users/10"],
                ["DELETE", "Delete data", "/users/10"],
              ].map((item) => (
                <tr
                  key={item[0]}
                  className="border-b border-[var(--border-color)]"
                >
                  <td className="p-3 font-semibold text-orange-500">
                    {item[0]}
                  </td>
                  <td className="p-3">{item[1]}</td>
                  <td className="p-3">{item[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <CodeBlock
          code={`app.get("/users", getUsers);

app.post("/users", createUser);

app.put("/users/:id", replaceUser);

app.patch("/users/:id", updateUser);

app.delete("/users/:id", deleteUser);`}
        />
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">4. Creating Routes with Express</h2>

        <p>
          We can define routes directly using the Express application object.
        </p>

        <CodeBlock
          code={`import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.post("/users", (req, res) => {
  res.status(201).json({
    message: "User Created",
  });
});

app.listen(5000);`}
        />

        <p>
          For small applications, defining routes directly in app.js may work.
          For larger applications, separate route files are easier to maintain.
        </p>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">5. Express Router</h2>

        <p>
          Express Router is a mini routing system that allows us to create
          separate route modules.
        </p>

        <p>
          We create a router using <strong>express.Router()</strong>
          and define endpoints on that router.
        </p>

        <CodeBlock
          code={`// routes/user.routes.js

import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("All Users");
});

router.post("/", (req, res) => {
  res.send("Create User");
});

router.get("/:id", (req, res) => {
  res.send("Single User");
});

export default router;`}
        />

        <p>Now mount this router inside app.js:</p>

        <CodeBlock
          code={`// app.js

import express from "express";
import userRoutes from "./routes/user.routes.js";

const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);

export default app;`}
        />

        <p>Now these endpoints are available:</p>

        <CodeBlock
          code={`GET    /api/users
POST   /api/users
GET    /api/users/:id`}
        />

        <p>
          <strong>Remember:</strong> app.use("/api/users", userRoutes) adds the
          prefix to every route defined inside userRoutes.
        </p>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">6. Route Parameters</h2>

        <p>
          Route parameters are dynamic values defined directly inside the URL
          using a colon (:).
        </p>

        <CodeBlock
          code={`app.get("/users/:id", (req, res) => {
  const userId = req.params.id;

  res.json({
    userId,
  });
});`}
        />

        <p>Request:</p>

        <CodeBlock code={`GET /users/101`} />

        <p>Output:</p>

        <CodeBlock
          code={`{
  "userId": "101"
}`}
        />

        <p>
          Route parameters are available inside <strong>req.params</strong>.
          Their values are generally received as strings.
        </p>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">7. Query Parameters</h2>

        <p>
          Query parameters are key-value pairs added after the question mark (?)
          in a URL. They are commonly used for searching, filtering, sorting,
          and pagination.
        </p>

        <CodeBlock
          code={`app.get("/users", (req, res) => {
  const { search, page, limit } = req.query;

  res.json({
    search,
    page,
    limit,
  });
});`}
        />

        <p>Request:</p>

        <CodeBlock code={`GET /users?search=Mayur&page=1&limit=10`} />

        <p>Output:</p>

        <CodeBlock
          code={`{
  "search": "Mayur",
  "page": "1",
  "limit": "10"
}`}
        />

        <p>
          Query parameters are available inside <strong>req.query</strong>.
          Their values are generally strings.
        </p>
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          8. Route Parameters vs Query Parameters
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[450px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="p-3">Route Parameters</th>
                <th className="p-3">Query Parameters</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Part of the route path.</td>
                <td className="p-3">Added after ? in the URL.</td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Use req.params.</td>
                <td className="p-3">Use req.query.</td>
              </tr>
              <tr>
                <td className="p-3">Example: /users/101</td>
                <td className="p-3">Example: /users?page=1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 9 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">9. Route Chaining</h2>

        <p>
          Route chaining allows us to define multiple HTTP methods for the same
          URL using router.route().
        </p>

        <CodeBlock
          code={`router
  .route("/users/:id")
  .get(getUser)
  .put(replaceUser)
  .patch(updateUser)
  .delete(deleteUser);`}
        />

        <p>
          Instead of writing the same URL repeatedly, we can chain multiple
          handlers together.
        </p>
      </section>

      {/* 10 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          10. Connecting Routes with Controllers
        </h2>

        <p>
          In a clean backend architecture, routes should mainly define endpoints
          and connect them to controller functions.
        </p>

        <CodeBlock
          code={`// controllers/user.controller.js

export const getUsers = (req, res) => {
  res.status(200).json({
    message: "All Users",
  });
};

export const createUser = (req, res) => {
  res.status(201).json({
    message: "User Created",
  });
};`}
        />

        <CodeBlock
          code={`// routes/user.routes.js

import express from "express";

import {
  getUsers,
  createUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", getUsers);

router.post("/", createUser);

export default router;`}
        />

        <p>
          This keeps route definitions separate from request-handling logic.
        </p>
      </section>

      {/* 11 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">11. Route Order</h2>

        <p>
          Express checks routes and middleware in the order they are registered.
          A route handler that sends a response without calling next() stops
          further processing.
        </p>

        <p>Example of a route-order problem:</p>

        <CodeBlock
          code={`// Incorrect order

app.get("/users/:id", getUser);

app.get("/users/profile", getProfile);`}
        />

        <p>
          The first route can match "/users/profile" with id = "profile". So the
          specific route should be registered first.
        </p>

        <CodeBlock
          code={`// Correct order

app.get("/users/profile", getProfile);

app.get("/users/:id", getUser);`}
        />
      </section>

      {/* 12 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">12. Nested Routes</h2>

        <p>
          Nested routes represent relationships between resources. For example,
          a user can have multiple posts.
        </p>

        <CodeBlock
          code={`// Get posts of a specific user

router.get("/users/:userId/posts", getUserPosts);`}
        />

        <p>Example request:</p>

        <CodeBlock code={`GET /users/101/posts`} />

        <p>Here, 101 identifies the user whose posts we want to retrieve.</p>
      </section>

      {/* 13 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">13. Best Practices</h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Keep routes inside separate files.</li>
          <li>Use express.Router() for modular routing.</li>
          <li>Connect routes with controller functions.</li>
          <li>Use meaningful and consistent endpoint names.</li>
          <li>Use HTTP methods according to the operation.</li>
          <li>Keep specific routes before conflicting dynamic routes.</li>
          <li>Validate route and query parameters when required.</li>
          <li>Use middleware for authentication and authorization.</li>
          <li>Avoid putting business logic directly inside routes.</li>
        </ul>
      </section>

      {/* Interview Questions */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-bold text-orange-500">
            Interview Questions
          </h2>

          <p className="mt-2 text-sm text-[var(--text-secondary)]">
            Click any question to reveal its short answer.
          </p>
        </div>

        <div className="space-y-3">
          {interviewQuestions.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border border-[var(--border-color)]"
            >
              <button
                type="button"
                onClick={() => toggleQuestion(index)}
                aria-expanded={!!openQuestions[index]}
                className="flex w-full items-center justify-between gap-4 p-4 text-left transition-colors hover:bg-[var(--bg-secondary)]"
              >
                <span className="font-medium">
                  <span className="mr-2 text-orange-500">{index + 1}.</span>
                  {item.question}
                </span>

                <span className="shrink-0 text-xl text-orange-500">
                  {openQuestions[index] ? "−" : "+"}
                </span>
              </button>

              {openQuestions[index] && (
                <div className="border-t border-[var(--border-color)] bg-[var(--bg-secondary)] px-4 py-4">
                  <p className="text-sm leading-7 text-[var(--text-secondary)]">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Routes;
