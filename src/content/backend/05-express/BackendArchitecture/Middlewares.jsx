import React, { useState } from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const Middlewares = () => {
  const interviewQuestions = [
    {
      question: "What is Middleware in Express.js?",
      answer:
        "Middleware is a function that executes during the request-response lifecycle and can access req, res, and next.",
    },
    {
      question: "What are the parameters of Middleware?",
      answer: "Normal middleware receives req, res, and next as parameters.",
    },
    {
      question: "What is next() in Express.js?",
      answer:
        "next() passes control to the next middleware or route handler in the request-response lifecycle.",
    },
    {
      question: "What happens if we do not call next() or send a response?",
      answer:
        "The request may remain pending because no middleware continues the flow or sends a response.",
    },
    {
      question: "What is Application-level Middleware?",
      answer:
        "Middleware registered using app.use() or app.METHOD() on an Express application.",
    },
    {
      question: "What is Router-level Middleware?",
      answer:
        "Middleware attached to an Express Router instance using router.use() or router.METHOD().",
    },
    {
      question: "What is Built-in Middleware?",
      answer:
        "Middleware provided by Express, such as express.json(), express.urlencoded(), and express.static().",
    },
    {
      question: "What is Third-party Middleware?",
      answer:
        "Middleware developed by external packages, such as cors, helmet, and morgan.",
    },
    {
      question: "What is Error-handling Middleware?",
      answer:
        "Special middleware with four parameters: err, req, res, and next. It handles errors passed through Express.",
    },
    {
      question: "What is Middleware Chaining?",
      answer:
        "Middleware chaining means executing multiple middleware functions one after another during a request.",
    },
    {
      question: "What is the difference between app.use() and app.get()?",
      answer:
        "app.use() registers middleware, while app.get() registers a handler for HTTP GET requests.",
    },
    {
      question: "What is the difference between next() and next(err)?",
      answer:
        "next() continues normal middleware execution, while next(err) passes control to error-handling middleware.",
    },
    {
      question: "Can Middleware modify the request object?",
      answer:
        "Yes. Middleware can add properties to req, such as req.user or req.requestTime.",
    },
    {
      question: "Why is Middleware Order Important?",
      answer:
        "Express executes middleware in registration order, so incorrect ordering can cause missing data or unexpected behavior.",
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
          BACKEND ARCHITECTURE / 08
        </p>

        <h1 className="mt-2 text-3xl font-bold">Middlewares in Express.js</h1>

        <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">
          Middleware functions execute during the request-response lifecycle.
          They can access the request, response, and next function to perform
          operations such as authentication, logging, validation, and error
          handling.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">1. What is Middleware?</h2>

        <p>
          Middleware is a function that runs between receiving an HTTP request
          and sending an HTTP response.
        </p>

        <p>
          It can inspect or modify the request and response objects, end the
          request-response cycle, or pass control to another middleware.
        </p>

        <CodeBlock
          code={`const myMiddleware = (req, res, next) => {
  console.log("Middleware executed");

  next();
};`}
        />

        <p>A normal Express middleware receives three arguments:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>
            <code>req</code> — Incoming request object.
          </li>
          <li>
            <code>res</code> — Response object used to send a response.
          </li>
          <li>
            <code>next</code> — Function used to continue the middleware chain.
          </li>
        </ul>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">2. How Middleware Works</h2>

        <p>
          When a client sends a request, Express executes the matching
          middleware functions in their registration order.
        </p>

        <CodeBlock
          code={`Client Request
      |
      v
Middleware 1
      |
      v
Middleware 2
      |
      v
Middleware 3
      |
      v
Route Handler
      |
      v
Response to Client`}
        />

        <p>
          Each middleware can either continue the flow using
          <code> next()</code>, send a response, or pass an error to
          error-handling middleware.
        </p>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">3. Understanding next()</h2>

        <p>
          The <code>next()</code> function passes control to the next middleware
          or route handler.
        </p>

        <CodeBlock
          code={`import express from "express";

const app = express();

const firstMiddleware = (req, res, next) => {
  console.log("First Middleware");

  next();
};

const secondMiddleware = (req, res, next) => {
  console.log("Second Middleware");

  next();
};

app.get(
  "/",
  firstMiddleware,
  secondMiddleware,
  (req, res) => {
    res.send("Hello from Express");
  }
);

app.listen(3000);`}
        />

        <p>Execution order:</p>

        <CodeBlock
          code={`First Middleware
       |
       v
Second Middleware
       |
       v
Route Handler
       |
       v
Hello from Express`}
        />

        <p>
          <strong>Important:</strong> If middleware neither sends a response nor
          calls <code>next()</code>, the request may remain pending.
        </p>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">4. Types of Middleware</h2>

        <p>Express middleware can be grouped into these categories:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Application-level Middleware</li>
          <li>Router-level Middleware</li>
          <li>Built-in Middleware</li>
          <li>Third-party Middleware</li>
          <li>Error-handling Middleware</li>
        </ul>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">5. Application-level Middleware</h2>

        <p>
          Application-level middleware is registered on the Express application
          using <code>app.use()</code> or HTTP method functions.
        </p>

        <CodeBlock
          code={`import express from "express";

const app = express();

const logger = (req, res, next) => {
  console.log(req.method, req.url);

  next();
};

// Runs for every matching request
app.use(logger);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(3000);`}
        />

        <p>
          Since this middleware is registered globally, it runs for requests
          that pass through it.
        </p>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">6. Router-level Middleware</h2>

        <p>
          Router-level middleware is attached to an Express Router instead of
          the main Express application.
        </p>

        <CodeBlock
          code={`// routes/user.routes.js

import express from "express";

const router = express.Router();

const userLogger = (req, res, next) => {
  console.log("User route accessed");

  next();
};

router.use(userLogger);

router.get("/", (req, res) => {
  res.send("All Users");
});

router.get("/:id", (req, res) => {
  res.send("Single User");
});

export default router;`}
        />

        <CodeBlock
          code={`// app.js

import express from "express";
import userRoutes from "./routes/user.routes.js";

const app = express();

app.use("/api/users", userRoutes);`}
        />

        <p>
          Here, <code>userLogger</code> runs for requests handled by this router
          after it is registered.
        </p>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">7. Built-in Middleware</h2>

        <p>Express provides built-in middleware for common tasks.</p>

        <h3 className="font-semibold text-orange-500">express.json()</h3>

        <p>
          Parses incoming JSON request bodies and makes the parsed data
          available through <code>req.body</code>.
        </p>

        <CodeBlock code={`app.use(express.json());`} />

        <h3 className="font-semibold text-orange-500">express.urlencoded()</h3>

        <p>Parses incoming URL-encoded form data.</p>

        <CodeBlock code={`app.use(express.urlencoded({ extended: true }));`} />

        <h3 className="font-semibold text-orange-500">express.static()</h3>

        <p>Serves static files such as images, CSS, and JavaScript files.</p>

        <CodeBlock code={`app.use(express.static("public"));`} />
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">8. Third-party Middleware</h2>

        <p>Third-party middleware is provided by external npm packages.</p>

        <h3 className="font-semibold text-orange-500">CORS</h3>

        <p>
          Allows you to configure which origins can access your API from
          browsers.
        </p>

        <CodeBlock
          code={`import cors from "cors";

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);`}
        />

        <h3 className="font-semibold text-orange-500">Morgan</h3>

        <p>Logs HTTP request information.</p>

        <CodeBlock
          code={`import morgan from "morgan";

app.use(morgan("dev"));`}
        />

        <h3 className="font-semibold text-orange-500">Helmet</h3>

        <p>Helps set various HTTP security headers.</p>

        <CodeBlock
          code={`import helmet from "helmet";

app.use(helmet());`}
        />
      </section>

      {/* 9 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">9. Custom Middleware</h2>

        <p>
          Custom middleware is middleware that we create ourselves according to
          our application's requirements.
        </p>

        <p>Example: Request time middleware.</p>

        <CodeBlock
          code={`// middlewares/requestTime.js

const requestTime = (req, res, next) => {
  req.requestTime = new Date();

  next();
};

export default requestTime;`}
        />

        <p>Using this middleware:</p>

        <CodeBlock
          code={`import requestTime from "./middlewares/requestTime.js";

app.use(requestTime);

app.get("/", (req, res) => {
  res.json({
    message: "Hello",
    requestTime: req.requestTime,
  });
});`}
        />

        <p>
          Middleware adds a new property to the request object, which can be
          accessed by the route handler.
        </p>
      </section>

      {/* 10 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">10. Authentication Middleware</h2>

        <p>
          Authentication middleware verifies whether a user has a valid identity
          or access token before allowing access to protected routes.
        </p>

        <CodeBlock
          code={`// middlewares/auth.middleware.js

import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET
    );

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

export default authMiddleware;`}
        />

        <p>Using it on a protected route:</p>

        <CodeBlock
          code={`app.get("/profile", authMiddleware, (req, res) => {
  res.json({
    message: "Profile accessed successfully",
    user: req.user,
  });
});`}
        />

        <p>
          The middleware verifies the token and attaches decoded user
          information to <code>req.user</code>.
        </p>
      </section>

      {/* 11 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">11. Error-handling Middleware</h2>

        <p>
          Error-handling middleware handles errors passed through Express
          instead of allowing every route to manage error responses
          independently.
        </p>

        <p>
          Unlike normal middleware, it receives four parameters:
          <code> err</code>, <code>req</code>, <code>res</code>, and{" "}
          <code>next</code>.
        </p>

        <CodeBlock
          code={`// middlewares/error.middleware.js

const errorMiddleware = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
};

export default errorMiddleware;`}
        />

        <p>Register it after routes:</p>

        <CodeBlock
          code={`app.use("/api/users", userRoutes);

// Error-handling middleware
app.use(errorMiddleware);`}
        />

        <p>
          Errors can be passed to it using <code>next(error)</code>. In Express
          5, rejected promises from async route handlers are automatically
          forwarded to error-handling middleware.
        </p>
      </section>

      {/* 12 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">12. Middleware Chaining</h2>

        <p>
          Middleware chaining means executing multiple middleware functions in
          sequence for a single request.
        </p>

        <CodeBlock
          code={`const first = (req, res, next) => {
  console.log("First Middleware");
  next();
};

const second = (req, res, next) => {
  console.log("Second Middleware");
  next();
};

const third = (req, res, next) => {
  console.log("Third Middleware");
  next();
};

app.get("/", first, second, third, (req, res) => {
  res.send("Request completed");
});`}
        />

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
Third Middleware
   |
   v
Route Handler
   |
   v
Response`}
        />
      </section>

      {/* 13 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">13. Middleware Execution Order</h2>

        <p>
          Express executes middleware in the order in which it is registered.
        </p>

        <CodeBlock
          code={`app.use(express.json());

app.use(requestLogger);

app.use("/api/users", userRoutes);

app.use(errorMiddleware);`}
        />

        <p>Typical order:</p>

        <ol className="list-decimal space-y-2 pl-6">
          <li>Parse incoming request data.</li>
          <li>Run common application middleware.</li>
          <li>Execute matching route middleware.</li>
          <li>Execute the route handler.</li>
          <li>Handle errors through error middleware when needed.</li>
        </ol>

        <p>
          If middleware is registered in the wrong order, later middleware may
          not receive the data it expects.
        </p>
      </section>

      {/* 14 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">14. Middleware vs Controller</h2>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[450px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="p-3">Middleware</th>
                <th className="p-3">Controller</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Runs during request processing.</td>
                <td className="p-3">
                  Handles route-specific application logic.
                </td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Can pass control using next().</td>
                <td className="p-3">Usually sends the HTTP response.</td>
              </tr>
              <tr>
                <td className="p-3">Example: Authentication.</td>
                <td className="p-3">Example: Get user profile.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 15 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">15. Best Practices</h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Keep middleware focused on a single responsibility.</li>
          <li>Always call next() when continuing normal execution.</li>
          <li>Return after sending a response to avoid further execution.</li>
          <li>Register middleware in the correct order.</li>
          <li>
            Keep authentication and authorization checks separate when
            appropriate.
          </li>
          <li>Never expose sensitive information in error responses.</li>
          <li>Register error-handling middleware after routes.</li>
          <li>Validate and sanitize untrusted input.</li>
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

export default Middlewares;
