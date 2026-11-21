import React, { useState } from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const ErrorHandlingMiddleware = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion((prev) => (prev === index ? null : index));
  };

  const interviewQuestions = [
    {
      question: "What is error-handling middleware in Express.js?",
      answer:
        "Error-handling middleware is a special middleware used to catch and handle errors during the request-response cycle.",
    },
    {
      question: "How many parameters does error-handling middleware have?",
      answer:
        "It has four parameters: err, req, res, and next. Express identifies it by this four-parameter signature.",
    },
    {
      question: "What is next(error)?",
      answer:
        "next(error) passes an error to Express, which skips normal middleware and route handlers and looks for error-handling middleware.",
    },
    {
      question: "Where should error-handling middleware be registered?",
      answer:
        "It should generally be registered after routes and other middleware so it can handle errors passed from them.",
    },
    {
      question: "What is centralized error handling?",
      answer:
        "Centralized error handling means handling application errors in one common middleware instead of writing separate error responses in every route.",
    },
    {
      question: "How are asynchronous errors handled in Express 5?",
      answer:
        "Express 5 automatically forwards rejected promises and errors thrown by async route handlers to error-handling middleware.",
    },
    {
      question: "How do we handle async errors in Express 4?",
      answer:
        "In Express 4, we generally use try/catch with next(error), or a wrapper function that catches rejected promises.",
    },
    {
      question:
        "What is the difference between operational and programming errors?",
      answer:
        "Operational errors are expected runtime problems, such as invalid input or a missing resource. Programming errors are bugs, such as accessing an undefined property unexpectedly.",
    },
  ];

  return (
    <div className="w-full space-y-10 text-[var(--text-primary)]">
      {/* Header */}
      <div className="space-y-3">
        <p className="text-xs font-semibold tracking-[0.2em] text-[var(--accent-color)]">
          EXPRESS.JS FUNDAMENTALS / 13
        </p>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Error Handling Middleware in Express.js
        </h1>

        <p className="max-w-3xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
          Error handling helps us manage unexpected problems in an Express
          application. Express provides special error-handling middleware that
          allows us to handle errors in one centralized place and send
          meaningful responses to clients.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">1. What is Error Handling?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          An error occurs when something goes wrong while processing a request.
          For example, a user may request a resource that does not exist,
          provide invalid data, or encounter a database failure.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          Error handling allows our application to respond properly instead of
          crashing or leaving the request pending.
        </p>

        <CodeBlock
          code={`app.get("/user", (req, res) => {
  const user = null;

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  res.json(user);
});`}
        />
      </section>

      {/* 2 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          2. What is Error-handling Middleware?
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Error-handling middleware is a special middleware function designed to
          catch and process errors in Express.js.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          Unlike normal middleware, it receives four parameters:
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              name: "err",
              description: "Contains information about the error.",
            },
            {
              name: "req",
              description: "Contains information about the request.",
            },
            {
              name: "res",
              description: "Used to send a response to the client.",
            },
            {
              name: "next",
              description: "Passes the error to another error handler.",
            },
          ].map((item) => (
            <div
              key={item.name}
              className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4"
            >
              <h3 className="mb-2 font-semibold text-[var(--accent-color)]">
                {item.name}
              </h3>
              <p className="text-sm leading-6 text-[var(--text-secondary)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <CodeBlock
          code={`const errorHandler = (err, req, res, next) => {
  res.status(500).json({
    message: "Internal Server Error",
  });
};

app.use(errorHandler);`}
        />

        <div className="rounded-xl border border-[var(--accent-color)]/30 bg-[var(--accent-background)] p-4">
          <p className="text-sm leading-7">
            <strong>Important:</strong> Express recognizes error-handling
            middleware by its four parameters. Even if you do not use
            <code> next</code>, keep it in the function signature.
          </p>
        </div>
      </section>

      {/* 3 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">3. Understanding next(error)</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code>next(error)</code> function passes an error to Express's
          error-handling mechanism.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          When an error is passed, Express skips the remaining normal middleware
          and route handlers and searches for the next error-handling
          middleware.
        </p>

        <CodeBlock
          code={`app.get("/profile", (req, res, next) => {
  const error = new Error("Profile not found");

  next(error);
});

app.use((err, req, res, next) => {
  res.status(404).json({
    message: err.message,
  });
});`}
        />

        <h3 className="font-semibold">Execution Flow</h3>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <div className="flex flex-col items-center gap-2 text-center text-sm">
            {[
              "Incoming Request",
              "Route Handler",
              "next(error)",
              "Error-handling Middleware",
              "Error Response",
            ].map((item, index, array) => (
              <React.Fragment key={item}>
                <div
                  className={`w-full max-w-xs rounded-lg border p-3 ${
                    index === 2 || index === 3
                      ? "border-[var(--accent-color)] bg-[var(--accent-background)] text-[var(--accent-color)]"
                      : "border-[var(--border-color)] bg-[var(--bg-tertiary)]"
                  }`}
                >
                  {item}
                </div>

                {index !== array.length - 1 && (
                  <span className="text-lg text-[var(--accent-color)]">↓</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 4 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          4. Creating a Centralized Error Handler
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          In real-world applications, we should avoid repeating the same
          error-response logic in every route.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          Instead, we can create one centralized error-handling middleware and
          forward errors to it using <code>next(error)</code>.
        </p>

        <CodeBlock
          code={`import express from "express";

const app = express();

app.get("/user", (req, res, next) => {
  const error = new Error("User not found");

  error.statusCode = 404;

  next(error);
});

// Centralized error handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

app.listen(3000);`}
        />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          Now errors from different routes can be handled through the same
          middleware.
        </p>
      </section>

      {/* 5 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          5. Creating a Custom Error Class
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          We can create our own error class to attach additional information,
          such as HTTP status codes, to errors.
        </p>

        <CodeBlock
          code={`class AppError extends Error {
  constructor(message, statusCode) {
    super(message);

    this.statusCode = statusCode;
    this.status = "fail";

    Error.captureStackTrace(this, this.constructor);
  }
}

// Throw a custom error
app.get("/user", (req, res, next) => {
  const user = null;

  if (!user) {
    return next(
      new AppError("User not found", 404)
    );
  }

  res.json(user);
});`}
        />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          Here, <code>AppError</code> extends the built-in JavaScript
          <code> Error</code> class and adds a <code>statusCode</code>
          property.
        </p>
      </section>

      {/* 6 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          6. Handling Errors in Async Functions
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Many Express routes perform asynchronous operations, such as database
          queries and API calls. These operations can fail and generate rejected
          promises.
        </p>

        <h3 className="font-semibold">Express 4: try/catch</h3>

        <CodeBlock
          code={`app.get("/users", async (req, res, next) => {
  try {
    const users = await User.find();

    res.json(users);
  } catch (error) {
    next(error);
  }
});`}
        />

        <h3 className="font-semibold">Express 5: Automatic Error Forwarding</h3>

        <CodeBlock
          code={`app.get("/users", async (req, res) => {
  const users = await User.find();

  res.json(users);
});`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          In Express 5, if an async route handler returns a rejected promise or
          throws an error, Express automatically forwards that error to
          error-handling middleware.
        </p>

        <div className="rounded-xl border border-[var(--accent-color)]/30 bg-[var(--accent-background)] p-4">
          <p className="text-sm leading-7">
            <strong>Important:</strong> Express 4 does not automatically forward
            rejected promises from async route handlers. Use
            <code> try/catch</code> with <code>next(error)</code> or an async
            wrapper. Express 5 handles returned promise rejections
            automatically.
          </p>
        </div>
      </section>

      {/* 7 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          7. Creating an Async Error Wrapper
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          In Express 4, writing <code>try/catch</code> in every async route can
          become repetitive. We can create a reusable wrapper that catches
          rejected promises and forwards errors.
        </p>

        <CodeBlock
          code={`const asyncHandler = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next))
      .catch(next);
  };
};

// Usage
app.get(
  "/users",
  asyncHandler(async (req, res) => {
    const users = await User.find();

    res.json(users);
  })
);`}
        />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          The wrapper catches promise rejections and passes them to
          <code> next()</code>, so our centralized error handler can process
          them.
        </p>
      </section>

      {/* 8 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          8. Handling 404 Not Found Errors
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          When no route matches an incoming request, we can create a custom 404
          error and pass it to the centralized error handler.
        </p>

        <CodeBlock
          code={`import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Home Page");
});

// 404 handler
app.use((req, res, next) => {
  const error = new Error(
    \`Route not found: \${req.originalUrl}\`
  );

  error.statusCode = 404;

  next(error);
});

// Centralized error handler
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message,
  });
});

app.listen(3000);`}
        />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          The 404 middleware should be registered after all valid routes and
          before the centralized error handler.
        </p>
      </section>

      {/* 9 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">9. Production Error Handling</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          In production, we should not expose internal stack traces, database
          details, passwords, or other sensitive information to clients.
        </p>

        <CodeBlock
          code={`const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  const isProduction = process.env.NODE_ENV === "production";

  res.status(statusCode).json({
    success: false,
    message: isProduction && statusCode === 500
      ? "Internal Server Error"
      : err.message,
    ...(isProduction ? {} : { stack: err.stack }),
  });
};

app.use(errorHandler);`}
        />

        <div className="rounded-xl border border-[var(--accent-color)]/30 bg-[var(--accent-background)] p-4">
          <p className="text-sm leading-7">
            <strong>Security Tip:</strong> Never expose sensitive internal error
            details in production responses. Log detailed errors securely on the
            server instead.
          </p>
        </div>
      </section>

      {/* 10 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          10. Complete Error Handling Flow
        </h2>

        <CodeBlock
          code={`import express from "express";

const app = express();

app.use(express.json());

app.get("/users/:id", (req, res, next) => {
  const user = null;

  if (!user) {
    const error = new Error("User not found");

    error.statusCode = 404;

    return next(error);
  }

  res.json(user);
});

// 404 handler
app.use((req, res, next) => {
  const error = new Error("Route not found");

  error.statusCode = 404;

  next(error);
});

// Centralized error handler
app.use((err, req, res, next) => {
  console.error(err);

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

app.listen(3000);`}
        />

        <h3 className="font-semibold">Complete Request Flow</h3>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <div className="flex flex-col items-center gap-2 text-center text-sm">
            {[
              "Incoming Request",
              "Middleware",
              "Route Handler",
              "Error Occurs",
              "next(error)",
              "404 / Error Handler",
              "Error Response",
            ].map((item, index, array) => (
              <React.Fragment key={item}>
                <div
                  className={`w-full max-w-xs rounded-lg border p-3 ${
                    index >= 3
                      ? "border-[var(--accent-color)] bg-[var(--accent-background)] text-[var(--accent-color)]"
                      : "border-[var(--border-color)] bg-[var(--bg-tertiary)]"
                  }`}
                >
                  {item}
                </div>

                {index !== array.length - 1 && (
                  <span className="text-lg text-[var(--accent-color)]">↓</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Important Points */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Important Points</h2>

        <div className="space-y-3">
          {[
            "Error-handling middleware has four parameters: err, req, res, and next.",
            "Express identifies error handlers through their four-parameter signature.",
            "Use next(error) to forward errors to Express error handling.",
            "Express skips normal middleware when an error is passed.",
            "Register the centralized error handler after routes.",
            "Create a custom Error class to attach HTTP status codes.",
            "Express 5 automatically forwards rejected promises from async handlers.",
            "Express 4 requires try/catch or an async wrapper for rejected promises.",
            "Register a 404 handler after all valid routes.",
            "Never expose sensitive stack traces or internal details in production.",
          ].map((point, index) => (
            <div key={index} className="flex gap-3 text-sm leading-6">
              <span className="font-bold text-[var(--accent-color)]">✓</span>
              <p className="text-[var(--text-secondary)]">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interview Questions */}
      <section className="space-y-4">
        <div>
          <p className="text-xs font-semibold tracking-widest text-[var(--accent-color)]">
            TEST YOUR KNOWLEDGE
          </p>

          <h2 className="mt-2 text-xl font-semibold">Interview Questions</h2>
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
                  <span className="text-sm font-medium">
                    <span className="mr-2 text-[var(--accent-color)]">
                      {String(index + 1).padStart(2, "0")}.
                    </span>
                    {item.question}
                  </span>

                  <span className="shrink-0 text-xl text-[var(--accent-color)]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-[var(--border-color)] px-4 py-4">
                    <p className="text-sm leading-7 text-[var(--text-secondary)]">
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

export default ErrorHandlingMiddleware;
