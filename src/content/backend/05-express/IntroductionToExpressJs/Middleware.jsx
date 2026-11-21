import React, { useState } from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const Middleware = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion((prev) => (prev === index ? null : index));
  };

  const interviewQuestions = [
    {
      question: "What is middleware in Express.js?",
      answer:
        "Middleware is a function that executes during the request-response cycle. It can access req, res, and next to process requests, modify data, send responses, or pass control.",
    },
    {
      question: "What are the three parameters of middleware?",
      answer:
        "req represents the request, res represents the response, and next is a function that passes control to the next middleware or route handler.",
    },
    {
      question: "What happens if we don't call next()?",
      answer:
        "If middleware does not send a response or call next(), the request remains pending and the client may wait indefinitely.",
    },
    {
      question: "What is the difference between app.use() and app.get()?",
      answer:
        "app.use() registers middleware, while app.get() registers a route handler for GET requests.",
    },
    {
      question: "What is application-level middleware?",
      answer:
        "Middleware registered using app.use() or app.METHOD() on an Express application is called application-level middleware.",
    },
    {
      question: "What is router-level middleware?",
      answer:
        "Router-level middleware is attached to an express.Router() instance and runs for requests handled by that router.",
    },
    {
      question: "What is error-handling middleware?",
      answer:
        "Error-handling middleware handles errors in Express and uses four parameters: err, req, res, and next.",
    },
    {
      question: "What is built-in middleware?",
      answer:
        "Built-in middleware is provided by Express itself, such as express.json(), express.urlencoded(), and express.static().",
    },
    {
      question: "Why does middleware order matter?",
      answer:
        "Express executes middleware in registration order. A middleware can only affect requests that reach it after it has been registered.",
    },
  ];

  return (
    <div className="w-full space-y-8 text-[var(--text-primary)]">

      {/* Header */}
      <div className="space-y-3">
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          EXPRESS.JS FUNDAMENTALS / 08
        </p>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Middleware in Express.js
        </h1>

        <p className="max-w-3xl text-base leading-7 text-[var(--text-secondary)]">
          Middleware functions execute during the request-response cycle.
          They can process incoming requests, perform authentication,
          validate data, log information, and pass control to the next
          middleware or route handler.
        </p>
      </div>

      {/* 01 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">1. What is Middleware?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Middleware is a function that runs between receiving a request
          and sending a response. It can access the request and response
          objects and decide what happens next.
        </p>

        <CodeBlock
          code={`const myMiddleware = (req, res, next) => {
  console.log("Middleware executed");

  next();
};

app.use(myMiddleware);`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Here, middleware executes for incoming requests. The{" "}
          <code className="text-[var(--accent-color)]">next()</code>{" "}
          function passes control to the next middleware or route handler.
        </p>
      </section>

      {/* 02 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">2. How Middleware Works</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          When a client sends a request, Express executes matching
          middleware functions in their registration order.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-5">
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="w-full rounded-lg border border-[var(--border-color)] bg-[var(--bg-tertiary)] p-3">
              <p className="font-semibold">Client Request</p>
              <p className="mt-1 text-xs text-[var(--text-secondary)]">
                Browser / Postman
              </p>
            </div>

            <span className="text-[var(--accent-color)]">↓</span>

            <div className="w-full rounded-lg border border-[var(--border-color)] p-3">
              <p className="font-semibold">Middleware 1</p>
              <p className="mt-1 text-xs text-[var(--text-secondary)]">
                Logging
              </p>
            </div>

            <span className="text-[var(--accent-color)]">↓</span>

            <div className="w-full rounded-lg border border-[var(--border-color)] p-3">
              <p className="font-semibold">Middleware 2</p>
              <p className="mt-1 text-xs text-[var(--text-secondary)]">
                Authentication
              </p>
            </div>

            <span className="text-[var(--accent-color)]">↓</span>

            <div className="w-full rounded-lg border border-[var(--border-color)] p-3">
              <p className="font-semibold">Route Handler</p>
              <p className="mt-1 text-xs text-[var(--text-secondary)]">
                Business Logic
              </p>
            </div>

            <span className="text-[var(--accent-color)]">↓</span>

            <div className="w-full rounded-lg border border-[var(--accent-color)] bg-[var(--accent-background)] p-3">
              <p className="font-semibold text-[var(--accent-color)]">
                Server Response
              </p>
              <p className="mt-1 text-xs text-[var(--text-secondary)]">
                Response sent to client
              </p>
            </div>
          </div>
        </div>

        <CodeBlock
          code={`app.use((req, res, next) => {
  console.log("Middleware 1");
  next();
});

app.use((req, res, next) => {
  console.log("Middleware 2");
  next();
});

app.get("/", (req, res) => {
  res.send("Home Page");
});`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Console Output:
        </p>

        <CodeBlock
          code={`Middleware 1
Middleware 2`}
        />
      </section>

      {/* 03 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">3. Understanding next()</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code className="text-[var(--accent-color)]">next()</code>{" "}
          function passes control to the next matching middleware or
          route handler.
        </p>

        <CodeBlock
          code={`app.use((req, res, next) => {
  console.log("First Middleware");

  next();
});

app.use((req, res, next) => {
  console.log("Second Middleware");

  next();
});

app.get("/", (req, res) => {
  res.send("Request Completed");
});`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          If middleware neither sends a response nor calls{" "}
          <code className="text-[var(--accent-color)]">next()</code>,
          the request remains pending.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <p className="font-semibold text-[var(--accent-color)]">
            Important
          </p>
          <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
            Call next() only when you want to pass control forward. If
            middleware sends a response, do not continue normal processing
            for that request.
          </p>
        </div>
      </section>

      {/* 04 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">4. Application-Level Middleware</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Application-level middleware is registered directly on the
          Express application using{" "}
          <code className="text-[var(--accent-color)]">app.use()</code>{" "}
          or route methods.
        </p>

        <CodeBlock
          code={`const logger = (req, res, next) => {
  console.log(req.method, req.url);

  next();
};

// Runs for all incoming requests
app.use(logger);`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          You can also restrict middleware to a particular path.
        </p>

        <CodeBlock
          code={`app.use("/admin", (req, res, next) => {
  console.log("Admin middleware");

  next();
});`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          This middleware runs for requests whose paths begin with{" "}
          <code className="text-[var(--accent-color)]">/admin</code>.
        </p>
      </section>

      {/* 05 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">5. Router-Level Middleware</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Router-level middleware works like application-level middleware,
          but it is attached to an Express Router instance.
        </p>

        <p className="font-semibold">user.routes.js</p>

        <CodeBlock
          code={`import express from "express";

const router = express.Router();

router.use((req, res, next) => {
  console.log("User router middleware");

  next();
});

router.get("/", (req, res) => {
  res.send("All Users");
});

export default router;`}
        />

        <p className="font-semibold">server.js</p>

        <CodeBlock
          code={`import express from "express";
import userRoutes from "./user.routes.js";

const app = express();

app.use("/users", userRoutes);

app.listen(3000);`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          The middleware runs for requests handled by the mounted user
          router.
        </p>
      </section>

      {/* 06 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">6. Built-in Middleware</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Express provides built-in middleware for common tasks like
          parsing request bodies and serving static files.
        </p>

        <h3 className="font-semibold">express.json()</h3>

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Parses incoming JSON request bodies and makes the parsed data
          available through req.body.
        </p>

        <CodeBlock
          code={`app.use(express.json());`}
        />

        <h3 className="font-semibold">express.urlencoded()</h3>

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Parses URL-encoded form data.
        </p>

        <CodeBlock
          code={`app.use(express.urlencoded({
  extended: true,
}));`}
        />

        <h3 className="font-semibold">express.static()</h3>

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Serves static files such as images, CSS, JavaScript, and HTML.
        </p>

        <CodeBlock
          code={`app.use(express.static("public"));`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          If the public folder contains{" "}
          <code className="text-[var(--accent-color)]">logo.png</code>,
          it can be accessed through{" "}
          <code className="text-[var(--accent-color)]">/logo.png</code>.
        </p>
      </section>

      {/* 07 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">7. Third-Party Middleware</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Third-party middleware is created by external packages and
          installed using npm.
        </p>

        <h3 className="font-semibold">Example: cors</h3>

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          CORS middleware controls which origins are allowed to access
          your server through cross-origin browser requests.
        </p>

        <CodeBlock
          code={`npm install cors`}
        />

        <CodeBlock
          code={`import cors from "cors";

app.use(cors({
  origin: "http://localhost:5173",
}));`}
        />

        <h3 className="font-semibold">Example: morgan</h3>

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Morgan logs HTTP request information in the terminal.
        </p>

        <CodeBlock
          code={`npm install morgan`}
        />

        <CodeBlock
          code={`import morgan from "morgan";

app.use(morgan("dev"));`}
        />
      </section>

      {/* 08 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">8. Custom Middleware</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          We can create our own middleware to perform custom operations
          such as logging, authentication, and request validation.
        </p>

        <CodeBlock
          code={`const requestLogger = (req, res, next) => {
  console.log({
    method: req.method,
    url: req.originalUrl,
    time: new Date(),
  });

  next();
};

app.use(requestLogger);`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          This middleware logs the HTTP method, requested URL, and
          request time for each incoming request.
        </p>
      </section>

      {/* 09 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">9. Authentication Middleware</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Authentication middleware checks whether a user is authenticated
          before allowing access to protected routes.
        </p>

        <CodeBlock
          code={`const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Authentication required",
    });
  }

  next();
};

app.get("/profile", authMiddleware, (req, res) => {
  res.json({
    message: "Welcome to your profile",
  });
});`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          This is a simplified example. In a real application, the
          middleware must verify the token's signature, expiry, and
          validity before allowing access.
        </p>
      </section>

      {/* 10 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">10. Error-Handling Middleware</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Error-handling middleware handles errors that occur during
          request processing. It uses four parameters instead of three.
        </p>

        <CodeBlock
          code={`const errorHandler = (err, req, res, next) => {
  console.error(err.message);

  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
};

app.use(errorHandler);`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          The four parameters are:
        </p>

        <ul className="space-y-2 text-sm leading-6 text-[var(--text-secondary)]">
          <li>• err – Contains error information.</li>
          <li>• req – Contains request information.</li>
          <li>• res – Sends the error response.</li>
          <li>• next – Passes the error to another error handler.</li>
        </ul>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <p className="font-semibold text-[var(--accent-color)]">
            Important
          </p>
          <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
            Register error-handling middleware after your routes and
            regular middleware so errors can reach it.
          </p>
        </div>
      </section>

      {/* 11 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">11. Middleware Execution Order</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Express executes middleware in the order in which it is
          registered. This is important when one middleware depends on
          another.
        </p>

        <CodeBlock
          code={`app.use(express.json());

app.use((req, res, next) => {
  console.log("Request received");
  next();
});

app.use("/admin", authMiddleware);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.use(errorHandler);`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          For example, JSON parsing should happen before routes that need
          to access <code className="text-[var(--accent-color)]">req.body</code>.
        </p>
      </section>

      {/* 12 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">12. Middleware vs Route Handler</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Both middleware and route handlers execute during the
          request-response cycle, but they are commonly used for different
          responsibilities.
        </p>

        <div className="overflow-hidden rounded-xl border border-[var(--border-color)]">
          <div className="grid grid-cols-2 gap-3 bg-[var(--bg-tertiary)] p-3 text-sm font-semibold">
            <span>Middleware</span>
            <span>Route Handler</span>
          </div>

          {[
            ["Processes requests", "Handles a specific route"],
            ["Can call next()", "Usually sends a response"],
            ["Can run for multiple routes", "Handles matching route requests"],
            ["Used for authentication and logging", "Used for application logic"],
          ].map(([middleware, route]) => (
            <div
              key={middleware}
              className="grid grid-cols-2 gap-3 border-t border-[var(--border-color)] p-3 text-sm text-[var(--text-secondary)]"
            >
              <span>{middleware}</span>
              <span>{route}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Important Points */}
      <section className="space-y-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-5">
        <h2 className="text-xl font-bold">Important Points</h2>

        <ul className="space-y-3 text-sm leading-6 text-[var(--text-secondary)]">
          <li>• Middleware executes during the request-response cycle.</li>
          <li>• Middleware receives req, res, and next.</li>
          <li>• next() passes control to the next matching handler.</li>
          <li>• Middleware can modify req and res objects.</li>
          <li>• Middleware can send a response and stop the request flow.</li>
          <li>• Middleware order matters in Express.</li>
          <li>• app.use() registers application-level middleware.</li>
          <li>• express.Router() supports router-level middleware.</li>
          <li>• Express provides built-in middleware.</li>
          <li>• Third-party packages provide additional middleware.</li>
          <li>• Error-handling middleware uses four parameters.</li>
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

export default Middleware;