import React, { useState } from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const ExpressArchitecture = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const interviewQuestions = [
    {
      question: "What is Express.js architecture?",
      answer:
        "Express.js architecture describes how HTTP requests move through middleware, routers, route handlers, and error-handling middleware before a response is sent.",
    },
    {
      question: "What is the request-response lifecycle?",
      answer:
        "It is the process in which a client sends an HTTP request, Express processes it, and the server sends an HTTP response back to the client.",
    },
    {
      question: "What is middleware in Express.js?",
      answer:
        "Middleware is a function that can access the request, response, and next function. It can execute code, modify requests, send responses, or pass control to the next middleware.",
    },
    {
      question: "Why does middleware order matter?",
      answer:
        "Express executes middleware in the order it is registered. Incorrect ordering can cause missing data, skipped logic, or unexpected responses.",
    },
    {
      question: "What is the role of a Router in Express.js?",
      answer:
        "Router helps organize application routes into separate modules, making large applications easier to maintain.",
    },
    {
      question: "What is the role of a Controller?",
      answer:
        "A controller contains the main request-handling logic, such as fetching users, creating products, or updating database records.",
    },
    {
      question: "What is next() in Express.js?",
      answer:
        "next() passes control to the next middleware or route handler in the request-processing chain.",
    },
    {
      question: "What is error-handling middleware?",
      answer:
        "It is special middleware with four parameters: err, req, res, and next. It handles errors passed through the Express request pipeline.",
    },
    {
      question: "Can middleware send a response?",
      answer:
        "Yes. Middleware can send a response directly. When it does, it should not call next() unless it intentionally passes control onward.",
    },
    {
      question: "What happens if a route does not send a response?",
      answer:
        "If no response is sent and control is not passed to another handler, the request may remain pending until it times out or the connection closes.",
    },
  ];

  const toggleQuestion = (index) => {
    setOpenQuestion((prev) => (prev === index ? null : index));
  };

  return (
    <div className="space-y-10 text-[var(--text-primary)]">

      {/* =====================================
          HEADER
      ===================================== */}

      <header className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-color)]">
          EXPRESS.JS FUNDAMENTALS / 03
        </p>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Express.js Architecture
        </h1>

        <p className="text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
          Understand how Express.js processes HTTP requests using
          middleware, routing, controllers, and response handling.
        </p>
      </header>

      {/* =====================================
          01. WHAT IS EXPRESS ARCHITECTURE
      ===================================== */}

      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          1. What is Express.js Architecture?
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Express.js architecture describes how different parts of
          an Express application work together to handle client
          requests and send responses.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          It mainly involves middleware, routing, route handlers,
          controllers, and error handling.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--accent-background)] p-4">
          <p className="text-sm leading-6">
            <strong className="text-[var(--accent-color)]">
              Main Idea:
            </strong>{" "}
            A request enters the Express application, passes through
            the required middleware and routes, and finally receives
            a response.
          </p>
        </div>
      </section>

      {/* =====================================
          02. REQUEST RESPONSE LIFECYCLE
      ===================================== */}

      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          2. Request-Response Lifecycle
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Whenever a client sends an HTTP request, Express processes
          it through a sequence of steps before returning a response.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-5">
          <div className="flex flex-col items-center gap-2 text-center">
            {[
              "Client",
              "HTTP Request",
              "Express Application",
              "Middleware Stack",
              "Router",
              "Route Handler / Controller",
              "HTTP Response",
              "Client",
            ].map((item, index) => (
              <React.Fragment key={index}>
                <div
                  className={`w-full max-w-xs rounded-lg border p-3 ${
                    [2, 3, 5].includes(index)
                      ? "border-[var(--accent-color)] bg-[var(--accent-background)] text-[var(--accent-color)]"
                      : "border-[var(--border-color)] bg-[var(--bg-tertiary)]"
                  }`}
                >
                  <span className="text-sm font-medium">
                    {item}
                  </span>
                </div>

                {index !== 7 && (
                  <span className="text-lg text-[var(--accent-color)]">
                    ↓
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          Each middleware or handler can process the request,
          pass control forward, or send a response.
        </p>
      </section>

      {/* =====================================
          03. EXPRESS APPLICATION
      ===================================== */}

      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          3. Express Application
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The Express application is the main object created using
          express(). It is responsible for registering middleware,
          routes, and application-level settings.
        </p>

        <CodeBlock
          code={`import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Express");
});

app.listen(3000);`}
        />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          Here, app represents the Express application that handles
          incoming HTTP requests.
        </p>
      </section>

      {/* =====================================
          04. MIDDLEWARE STACK
      ===================================== */}

      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          4. Middleware Stack
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Middleware functions are executed in the order they are
          registered. They can access the request and response
          objects and pass control using next().
        </p>

        <CodeBlock
          code={`import express from "express";

const app = express();

// First middleware
app.use((req, res, next) => {
  console.log("Request received");
  next();
});

// Second middleware
app.use((req, res, next) => {
  console.log("Second middleware");
  next();
});

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(3000);`}
        />

        <h3 className="font-semibold text-[var(--accent-color)]">
          Middleware Execution Order
        </h3>

        <CodeBlock
          code={`Request
   |
   v
First Middleware
   |
   v
Second Middleware
   |
   v
Route Handler
   |
   v
Response`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--accent-background)] p-4">
          <p className="text-sm leading-6">
            <strong className="text-[var(--accent-color)]">
              Important:
            </strong>{" "}
            Middleware order matters. If a middleware sends a response
            without calling next(), the remaining handlers will not
            execute for that request.
          </p>
        </div>
      </section>

      {/* =====================================
          05. ROUTING
      ===================================== */}

      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          5. Routing
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Routing determines which function should execute based
          on the requested URL and HTTP method.
        </p>

        <CodeBlock
          code={`app.get("/users", (req, res) => {
  res.send("Get all users");
});

app.post("/users", (req, res) => {
  res.send("Create a user");
});

app.put("/users/:id", (req, res) => {
  res.send("Update a user");
});

app.delete("/users/:id", (req, res) => {
  res.send("Delete a user");
});`}
        />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          Different HTTP methods can use the same URL to perform
          different operations.
        </p>
      </section>

      {/* =====================================
          06. CONTROLLER
      ===================================== */}

      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          6. Controller
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          A controller contains the main logic for handling a request.
          Keeping this logic separate from route definitions makes
          applications easier to maintain.
        </p>

        <h3 className="font-semibold text-[var(--accent-color)]">
          Controller
        </h3>

        <CodeBlock
          code={`// controllers/userController.js

export const getUsers = (req, res) => {
  res.json({
    message: "Users fetched successfully",
    users: [],
  });
};`}
        />

        <h3 className="font-semibold text-[var(--accent-color)]">
          Route
        </h3>

        <CodeBlock
          code={`// routes/userRoutes.js

import express from "express";
import { getUsers } from "../controllers/userController.js";

const router = express.Router();

router.get("/", getUsers);

export default router;`}
        />

        <h3 className="font-semibold text-[var(--accent-color)]">
          Main Application
        </h3>

        <CodeBlock
          code={`// app.js

import express from "express";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use("/api/users", userRoutes);

app.listen(3000);`}
        />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          Now, a GET request to /api/users executes the getUsers
          controller.
        </p>
      </section>

      {/* =====================================
          07. RESPONSE HANDLING
      ===================================== */}

      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          7. Response Handling
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          After processing a request, Express sends a response
          back to the client using the response object.
        </p>

        <CodeBlock
          code={`app.get("/users", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Users fetched successfully",
    data: [],
  });
});`}
        />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          Here, status() sets the HTTP status code and json()
          sends the response in JSON format.
        </p>
      </section>

      {/* =====================================
          08. ERROR HANDLING
      ===================================== */}

      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          8. Error-Handling Middleware
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Error-handling middleware manages errors that occur during
          request processing. Express identifies it using four
          parameters: err, req, res, and next.
        </p>

        <CodeBlock
          code={`// Error-handling middleware

app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--accent-background)] p-4">
          <p className="text-sm leading-6">
            <strong className="text-[var(--accent-color)]">
              Important:
            </strong>{" "}
            Error-handling middleware should be registered after
            routes and other middleware so it can handle errors
            passed through the application pipeline.
          </p>
        </div>
      </section>

      {/* =====================================
          09. COMPLETE ARCHITECTURE
      ===================================== */}

      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          9. Complete Express.js Architecture
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Let's connect all the major components to understand
          how a typical Express application is organized.
        </p>

        <CodeBlock
          code={`src/
│
├── controllers/
│   └── userController.js
│
├── middleware/
│   └── authMiddleware.js
│
├── routes/
│   └── userRoutes.js
│
├── app.js
└── server.js`}
        />

        <h3 className="font-semibold text-[var(--accent-color)]">
          How Components Work Together
        </h3>

        <CodeBlock
          code={`Client
  |
  v
server.js
  |
  v
app.js
  |
  v
Middleware
  |
  v
Routes
  |
  v
Controllers
  |
  v
Database (if required)
  |
  v
Response to Client`}
        />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          This separation of responsibilities helps keep backend
          applications clean, reusable, and maintainable.
        </p>
      </section>

      {/* =====================================
          10. IMPORTANT POINTS
      ===================================== */}

      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          10. Important Points
        </h2>

        <ul className="list-disc space-y-2 pl-6 leading-7 text-[var(--text-secondary)]">
          <li>Express processes requests through a middleware stack.</li>
          <li>Middleware executes in registration order.</li>
          <li>Routing matches requests using URLs and HTTP methods.</li>
          <li>Controllers contain request-handling logic.</li>
          <li>Routers help organize application endpoints.</li>
          <li>Response methods send data back to the client.</li>
          <li>Error middleware handles application errors.</li>
          <li>Not every Express application needs the same folder structure.</li>
        </ul>
      </section>

      {/* =====================================
          11. INTERVIEW QUESTIONS
      ===================================== */}

      <section className="space-y-4 pt-4">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-color)]">
            QUICK REVISION
          </p>

          <h2 className="text-2xl font-bold">
            Interview Questions
          </h2>

          <p className="text-sm leading-6 text-[var(--text-secondary)]">
            Test your understanding. Click any question to reveal
            its answer.
          </p>
        </div>

        <div className="space-y-3">
          {interviewQuestions.map((item, index) => {
            const isOpen = openQuestion === index;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)]"
              >
                <button
                  type="button"
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-4 text-left"
                >
                  <span className="flex items-start gap-3">
                    <span className="font-semibold text-[var(--accent-color)]">
                      {String(index + 1).padStart(2, "0")}.
                    </span>

                    <span className="text-sm font-medium leading-6 sm:text-base">
                      {item.question}
                    </span>
                  </span>

                  <span
                    className={`shrink-0 text-xl text-[var(--accent-color)] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ⌄
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-[var(--border-color)] px-4 py-4">
                    <p className="pl-8 text-sm leading-7 text-[var(--text-secondary)]">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};

export default ExpressArchitecture;