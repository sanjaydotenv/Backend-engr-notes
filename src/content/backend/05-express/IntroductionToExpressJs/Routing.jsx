import React, { useState } from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const Routing = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion((prev) => (prev === index ? null : index));
  };

  const interviewQuestions = [
    {
      question: "What is routing in Express.js?",
      answer:
        "Routing defines how an application responds to client requests for specific URLs and HTTP methods.",
    },
    {
      question: "What is the difference between app.get() and app.post()?",
      answer:
        "app.get() handles GET requests, generally used to retrieve data. app.post() handles POST requests, generally used to submit or create data.",
    },
    {
      question: "What are route parameters?",
      answer:
        "Route parameters are named URL segments used to capture dynamic values. They are available inside req.params.",
    },
    {
      question: "What is the difference between req.params and req.query?",
      answer:
        "req.params reads values from the URL path, while req.query reads values from the query string.",
    },
    {
      question: "What is app.all()?",
      answer:
        "app.all() handles requests for a specific path regardless of the HTTP method.",
    },
    {
      question: "What is express.Router()?",
      answer:
        "express.Router() creates a separate router instance that helps organize routes into modular files.",
    },
    {
      question: "What is the purpose of app.use()?",
      answer:
        "app.use() registers middleware or mounts a router, optionally under a specific path.",
    },
  ];

  return (
    <div className="w-full space-y-8 text-[var(--text-primary)]">

      {/* Header */}
      <div className="space-y-3">
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          EXPRESS.JS FUNDAMENTALS / 05
        </p>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Routing in Express.js
        </h1>

        <p className="max-w-3xl text-base leading-7 text-[var(--text-secondary)]">
          Routing determines how an Express application responds to incoming
          requests based on their URL and HTTP method. It helps us create
          different endpoints for different operations.
        </p>
      </div>

      {/* 01 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">1. What is Routing?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Imagine a website with different pages like Home, About, and
          Contact. Each page has a different URL. Routing tells the server
          what to do when a client visits a particular URL.
        </p>

        <CodeBlock
          code={`import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

app.listen(3000);`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-3">
          <p className="font-semibold">Example Routes</p>

          {[
            ["/", "Home Page"],
            ["/about", "About Page"],
            ["/contact", "Contact Page"],
          ].map(([path, description]) => (
            <div
              key={path}
              className="flex items-center justify-between gap-3 text-sm"
            >
              <code className="text-[var(--accent-color)]">{path}</code>
              <span className="text-[var(--text-secondary)]">
                {description}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 02 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">2. HTTP Methods in Routing</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Express supports different HTTP methods. Each method represents a
          different type of client operation.
        </p>

        <CodeBlock
          code={`// Get data
app.get("/users", (req, res) => {
  res.send("Get all users");
});

// Create data
app.post("/users", (req, res) => {
  res.send("Create a user");
});

// Update data
app.put("/users/:id", (req, res) => {
  res.send("Update a user");
});

// Partially update data
app.patch("/users/:id", (req, res) => {
  res.send("Partially update a user");
});

// Delete data
app.delete("/users/:id", (req, res) => {
  res.send("Delete a user");
});`}
        />

        <div className="overflow-hidden rounded-xl border border-[var(--border-color)]">
          <div className="grid grid-cols-2 gap-3 bg-[var(--bg-tertiary)] p-3 text-sm font-semibold">
            <span>HTTP Method</span>
            <span>Purpose</span>
          </div>

          {[
            ["GET", "Retrieve data"],
            ["POST", "Create data"],
            ["PUT", "Replace or update data"],
            ["PATCH", "Partially update data"],
            ["DELETE", "Delete data"],
          ].map(([method, purpose]) => (
            <div
              key={method}
              className="grid grid-cols-2 gap-3 border-t border-[var(--border-color)] p-3 text-sm"
            >
              <code className="font-semibold text-[var(--accent-color)]">
                {method}
              </code>
              <span className="text-[var(--text-secondary)]">{purpose}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 03 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">3. Route Parameters (req.params)</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Route parameters are dynamic values captured from the URL path.
          We define them using a colon followed by a parameter name.
        </p>

        <CodeBlock
          code={`app.get("/users/:id", (req, res) => {
  const userId = req.params.id;

  res.send(\`User ID: \${userId}\`);
});`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Request:
        </p>

        <CodeBlock
          code={`GET /users/101`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Output:
        </p>

        <CodeBlock
          code={`User ID: 101`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Here, <code className="text-[var(--accent-color)]">:id</code> is a
          dynamic parameter, and its value is available through{" "}
          <code className="text-[var(--accent-color)]">req.params.id</code>.
        </p>
      </section>

      {/* 04 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">4. Query Parameters (req.query)</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Query parameters are values passed after a question mark (?) in a
          URL. They are commonly used for searching, filtering, sorting, and
          pagination.
        </p>

        <CodeBlock
          code={`app.get("/products", (req, res) => {
  const category = req.query.category;
  const limit = req.query.limit;

  res.json({
    category,
    limit,
  });
});`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Request:
        </p>

        <CodeBlock
          code={`GET /products?category=mobile&limit=10`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Response:
        </p>

        <CodeBlock
          code={`{
  "category": "mobile",
  "limit": "10"
}`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <p className="font-semibold text-[var(--accent-color)]">
            Important
          </p>
          <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
            Query parameter values are generally strings. Convert them when
            you need numbers or other data types.
          </p>
        </div>
      </section>

      {/* 05 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">5. Request Body (req.body)</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          When clients send data through POST, PUT, or PATCH requests, the
          data is commonly sent inside the request body.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          Express provides built-in middleware to parse JSON request bodies.
        </p>

        <CodeBlock
          code={`app.use(express.json());

app.post("/users", (req, res) => {
  const userData = req.body;

  res.json({
    message: "User received",
    data: userData,
  });
});`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Example JSON Request Body:
        </p>

        <CodeBlock
          code={`{
  "name": "Mayur",
  "email": "mayur@example.com"
}`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          The submitted data can be accessed using{" "}
          <code className="text-[var(--accent-color)]">req.body</code>.
        </p>
      </section>

      {/* 06 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">6. Multiple Route Handlers</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          A route can have multiple callback functions. These functions can
          execute in sequence using next().
        </p>

        <CodeBlock
          code={`app.get(
  "/profile",

  (req, res, next) => {
    console.log("First handler");
    next();
  },

  (req, res) => {
    res.send("Profile Page");
  }
);`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Here, the first handler calls{" "}
          <code className="text-[var(--accent-color)]">next()</code>, allowing
          Express to execute the next handler.
        </p>
      </section>

      {/* 07 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">7. app.all() Method</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code className="text-[var(--accent-color)]">app.all()</code>{" "}
          method matches all HTTP methods for a particular path.
        </p>

        <CodeBlock
          code={`app.all("/admin", (req, res) => {
  res.send("Admin route accessed");
});`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          This route can match GET, POST, PUT, PATCH, DELETE, and other HTTP
          methods for the <code className="text-[var(--accent-color)]">/admin</code>{" "}
          path.
        </p>
      </section>

      {/* 08 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">8. Express Router</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          As an application grows, keeping every route inside one file becomes
          difficult. Express provides{" "}
          <code className="text-[var(--accent-color)]">express.Router()</code>{" "}
          to organize routes into separate modules.
        </p>

        <p className="font-semibold">users.routes.js</p>

        <CodeBlock
          code={`import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("All Users");
});

router.get("/:id", (req, res) => {
  res.send(\`User ID: \${req.params.id}\`);
});

export default router;`}
        />

        <p className="font-semibold">server.js</p>

        <CodeBlock
          code={`import express from "express";
import userRoutes from "./users.routes.js";

const app = express();

app.use("/users", userRoutes);

app.listen(3000);`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Now the router handles requests under the{" "}
          <code className="text-[var(--accent-color)]">/users</code> path.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
          <p className="font-semibold">Final URLs</p>
          <code className="block text-sm text-[var(--accent-color)]">
            GET /users
          </code>
          <code className="block text-sm text-[var(--accent-color)]">
            GET /users/101
          </code>
        </div>
      </section>

      {/* 09 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">9. Route Matching Order</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Express checks routes in the order they are registered. If a route
          sends a response, later matching routes are not executed.
        </p>

        <CodeBlock
          code={`// Specific route first
app.get("/users/profile", (req, res) => {
  res.send("User Profile");
});

// Dynamic route after it
app.get("/users/:id", (req, res) => {
  res.send(\`User ID: \${req.params.id}\`);
});`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <p className="font-semibold text-[var(--accent-color)]">
            Important
          </p>
          <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
            Put specific routes before dynamic routes when they could match
            the same URL. For example,{" "}
            <code>/users/profile</code> should be registered before{" "}
            <code>/users/:id</code>.
          </p>
        </div>
      </section>

      {/* Important Points */}
      <section className="space-y-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-5">
        <h2 className="text-xl font-bold">Important Points</h2>

        <ul className="space-y-3 text-sm leading-6 text-[var(--text-secondary)]">
          <li>• Routing connects URLs and HTTP methods to handler functions.</li>
          <li>• app.get(), app.post(), app.put(), and app.delete() define routes.</li>
          <li>• req.params accesses dynamic URL path values.</li>
          <li>• req.query accesses query string values.</li>
          <li>• req.body accesses parsed request body data.</li>
          <li>• app.all() matches all HTTP methods for a path.</li>
          <li>• express.Router() helps organize routes into separate files.</li>
          <li>• Route registration order matters.</li>
        </ul>
      </section>

      {/* Interview Questions */}
      <section className="space-y-4">
        <div>
          <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
            TEST YOUR KNOWLEDGE
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Interview Questions
          </h2>
        </div>

        <div className="space-y-3">
          {interviewQuestions.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)]"
            >
              <button
                type="button"
                onClick={() => toggleQuestion(index)}
                aria-expanded={openQuestion === index}
                className="flex w-full items-center justify-between gap-4 p-4 text-left"
              >
                <span className="text-sm font-medium">
                  <span className="mr-2 text-[var(--accent-color)]">
                    {String(index + 1).padStart(2, "0")}.
                  </span>
                  {item.question}
                </span>

                <span className="shrink-0 text-xl text-[var(--accent-color)]">
                  {openQuestion === index ? "−" : "+"}
                </span>
              </button>

              {openQuestion === index && (
                <div className="border-t border-[var(--border-color)] px-4 py-4">
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

export default Routing;