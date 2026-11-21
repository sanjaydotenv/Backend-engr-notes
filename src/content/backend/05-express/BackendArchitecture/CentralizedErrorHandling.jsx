import React, { useState } from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const CentralizedErrorHandling = () => {
  const interviewQuestions = [
    {
      question: "What is Centralized Error Handling?",
      answer:
        "It is an approach where application errors are forwarded to one common error-handling middleware instead of handling responses separately everywhere.",
    },
    {
      question: "Why do we use Centralized Error Handling?",
      answer:
        "It avoids duplicate error-handling code and provides consistent error responses throughout the application.",
    },
    {
      question: "What is Error Handling Middleware in Express?",
      answer:
        "It is a special middleware with four parameters: (err, req, res, next). It handles errors forwarded through next(error).",
    },
    {
      question: "What is the difference between next() and next(error)?",
      answer:
        "next() passes control to the next middleware, while next(error) skips normal middleware and forwards the error to error-handling middleware.",
    },
    {
      question: "Why does Express error middleware have four parameters?",
      answer:
        "Express identifies error-handling middleware by its four-argument signature: err, req, res, and next.",
    },
    {
      question: "Where should error middleware be registered?",
      answer:
        "After all routes and normal middleware so that errors from those routes can reach it.",
    },
    {
      question: "What is the purpose of Custom API Error?",
      answer:
        "It provides a reusable error class containing properties such as message, statusCode, and success.",
    },
    {
      question:
        "What is the difference between operational and programming errors?",
      answer:
        "Operational errors are expected runtime failures, such as invalid input. Programming errors are unexpected bugs, such as accessing an undefined property.",
    },
    {
      question: "Does Express 5 handle rejected async route promises?",
      answer:
        "Yes. Express 5 automatically forwards rejected promises from route handlers and middleware to error-handling middleware.",
    },
    {
      question: "Do we need try-catch in every Express 5 controller?",
      answer:
        "No. Express 5 automatically forwards rejected promises, although try-catch is still useful when you need local recovery or custom handling.",
    },
    {
      question: "What is a 404 error?",
      answer:
        "HTTP 404 Not Found indicates that the requested resource or route could not be found.",
    },
    {
      question: "Why should we not expose stack traces in production?",
      answer:
        "Stack traces can reveal internal implementation details, file paths, and sensitive information.",
    },
    {
      question:
        "What is the purpose of the next parameter in error middleware?",
      answer:
        "It forwards the current error to another error handler when the current middleware cannot handle it.",
    },
    {
      question:
        "What is the difference between Custom API Error and Error Middleware?",
      answer:
        "Custom API Error creates structured errors, while Error Middleware catches those errors and sends HTTP responses.",
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
          BACKEND ARCHITECTURE / 13
        </p>

        <h1 className="mt-2 text-3xl font-bold">Centralized Error Handling</h1>

        <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">
          Centralized Error Handling is an approach in which application errors
          are handled by a common error-handling middleware. Instead of sending
          error responses from every controller, we forward errors to one
          central location.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">1. What is Error Handling?</h2>

        <p>
          Error handling means identifying, managing, and responding to errors
          that occur while an application is running.
        </p>

        <p>For example, a backend application can encounter errors such as:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Invalid user input.</li>
          <li>Database connection failure.</li>
          <li>User not found.</li>
          <li>Duplicate email address.</li>
          <li>Authentication failure.</li>
          <li>Unexpected server errors.</li>
        </ul>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          2. Problem Without Centralized Error Handling
        </h2>

        <p>Imagine every controller handles errors independently.</p>

        <CodeBlock
          code={`// user.controller.js

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};`}
        />

        <p>
          If we have 50 controllers, we may end up repeating similar
          error-handling code in all of them.
        </p>

        <p>This creates problems:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Duplicate code increases.</li>
          <li>Error response formats may become inconsistent.</li>
          <li>Changing error response logic becomes difficult.</li>
          <li>Controllers become unnecessarily large.</li>
        </ul>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          3. What is Centralized Error Handling?
        </h2>

        <p>
          Instead of handling errors inside every controller, we forward errors
          to a common error-handling middleware.
        </p>

        <CodeBlock
          code={`Client
  |
  v
Route
  |
  v
Controller
  |
  v
Service
  |
  v
Error Occurs
  |
  v
next(error)
  |
  v
Centralized Error Middleware
  |
  v
HTTP Error Response`}
        />

        <p>Now every error can be handled using one common middleware.</p>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">4. Understanding next(error)</h2>

        <p>
          Express provides the <code>next()</code> function to pass control to
          the next middleware.
        </p>

        <p>
          When we pass an error to it using <code>next(error)</code>, Express
          forwards that error to error-handling middleware.
        </p>

        <CodeBlock
          code={`// Passing an error

next(error);`}
        />

        <p>Difference:</p>

        <CodeBlock
          code={`next();

// Pass control to the next normal middleware.

next(error);

// Forward the error to error-handling middleware.`}
        />
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          5. Creating Centralized Error Middleware
        </h2>

        <p>Express error-handling middleware has four parameters:</p>

        <CodeBlock code={`(err, req, res, next)`} />

        <p>Create a middleware file:</p>

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

        <p>Here:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>err:</strong> Contains the error object.
          </li>
          <li>
            <strong>req:</strong> Contains the incoming request.
          </li>
          <li>
            <strong>res:</strong> Sends the error response.
          </li>
          <li>
            <strong>next:</strong> Forwards the error if needed.
          </li>
        </ul>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          6. Forwarding Errors from Controllers
        </h2>

        <p>
          In Express 4, we generally use try-catch and pass errors to{" "}
          <code>next(error)</code>, or use an async handler wrapper.
        </p>

        <CodeBlock
          code={`// controllers/user.controller.js

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;

      throw error;
    }

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};`}
        />

        <p>
          In Express 5, rejected promises from async route handlers are
          automatically forwarded to error middleware. Therefore, the controller
          can be simpler:
        </p>

        <CodeBlock
          code={`// Express 5

export const getUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    const error = new Error("User not found");
    error.statusCode = 404;

    throw error;
  }

  res.status(200).json({
    success: true,
    data: user,
  });
};`}
        />
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          7. Registering Error Middleware in app.js
        </h2>

        <p>
          Error middleware should be registered after all routes and normal
          middleware.
        </p>

        <CodeBlock
          code={`// app.js

import express from "express";
import userRoutes from "./routes/user.routes.js";
import errorMiddleware from "./middlewares/error.middleware.js";

const app = express();

app.use(express.json());

// Application routes
app.use("/api/users", userRoutes);

// 404 handler for unknown routes
app.use((req, res, next) => {
  const error = new Error("Route not found");
  error.statusCode = 404;

  next(error);
});

// Centralized error middleware
app.use(errorMiddleware);

export default app;`}
        />

        <p>
          The 404 handler forwards unknown-route errors to the centralized error
          middleware.
        </p>
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">8. Creating a Custom Error Class</h2>

        <p>
          We can create our own error class to make application errors
          consistent and reusable.
        </p>

        <CodeBlock
          code={`// utils/ApiError.js

class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong"
  ) {
    super(message);

    this.statusCode = statusCode;
    this.success = false;

    Error.captureStackTrace(this, this.constructor);
  }
}

export default ApiError;`}
        />

        <p>
          Now we can throw structured errors from anywhere in our application.
        </p>

        <CodeBlock
          code={`import ApiError from "../utils/ApiError.js";

if (!user) {
  throw new ApiError(404, "User not found");
}

if (existingUser) {
  throw new ApiError(409, "Email already registered");
}`}
        />
      </section>

      {/* 9 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">9. Improving the Error Middleware</h2>

        <p>
          We can use our custom error class with centralized error middleware.
        </p>

        <CodeBlock
          code={`// middlewares/error.middleware.js

const errorMiddleware = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  const message =
    statusCode === 500
      ? "Internal Server Error"
      : err.message;

  if (process.env.NODE_ENV !== "production") {
    console.error(err);
  }

  res.status(statusCode).json({
    success: false,
    message,
    ...(process.env.NODE_ENV !== "production" && {
      stack: err.stack,
    }),
  });
};

export default errorMiddleware;`}
        />

        <p>
          This example hides internal error details in production while
          providing stack traces during development.
        </p>

        <p>
          In a production application, you should also log unexpected errors
          using a proper logging system.
        </p>
      </section>

      {/* 10 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">10. Types of Errors</h2>

        <h3 className="font-semibold text-orange-500">Operational Errors</h3>

        <p>
          Expected failures that can happen during normal application usage.
        </p>

        <ul className="list-disc space-y-1 pl-6">
          <li>User not found.</li>
          <li>Invalid password.</li>
          <li>Duplicate email.</li>
          <li>Invalid request data.</li>
        </ul>

        <h3 className="font-semibold text-orange-500">Programming Errors</h3>

        <p>Unexpected bugs caused by incorrect code.</p>

        <ul className="list-disc space-y-1 pl-6">
          <li>Accessing a property of undefined.</li>
          <li>Using an undefined variable.</li>
          <li>Incorrect function implementation.</li>
        </ul>

        <p>
          Centralized middleware formats and sends errors, but it does not
          automatically fix programming bugs. Unexpected failures may require
          logging and process-level recovery strategies.
        </p>
      </section>

      {/* 11 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          11. Common HTTP Error Status Codes
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="p-3">Status Code</th>
                <th className="p-3">Meaning</th>
              </tr>
            </thead>

            <tbody className="text-[var(--text-secondary)]">
              {[
                ["400", "Bad Request"],
                ["401", "Unauthorized"],
                ["403", "Forbidden"],
                ["404", "Not Found"],
                ["409", "Conflict"],
                ["422", "Unprocessable Content"],
                ["429", "Too Many Requests"],
                ["500", "Internal Server Error"],
                ["503", "Service Unavailable"],
              ].map(([code, meaning]) => (
                <tr
                  key={code}
                  className="border-b border-[var(--border-color)]"
                >
                  <td className="p-3 font-semibold text-orange-500">{code}</td>
                  <td className="p-3">{meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 12 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">12. Complete Error Handling Flow</h2>

        <CodeBlock
          code={`Client Request
      |
      v
Express Route
      |
      v
Controller
      |
      v
Service
      |
      v
Error Occurs
      |
      v
throw error / next(error)
      |
      v
Error Middleware
      |
      |-- Read statusCode
      |-- Read error message
      |-- Log error if required
      |-- Format response
      |
      v
Client Receives Error Response`}
        />

        <p>Example response:</p>

        <CodeBlock
          code={`{
  "success": false,
  "message": "User not found"
}`}
        />
      </section>

      {/* 13 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">13. Best Practices</h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Use one centralized error middleware.</li>
          <li>Create reusable custom error classes.</li>
          <li>Keep error responses consistent.</li>
          <li>Use appropriate HTTP status codes.</li>
          <li>Forward errors instead of duplicating responses.</li>
          <li>Never expose sensitive internal details in production.</li>
          <li>Log unexpected errors for debugging.</li>
          <li>Register error middleware after application routes.</li>
          <li>Handle validation and database errors appropriately.</li>
          <li>Use async error handling according to your Express version.</li>
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

export default CentralizedErrorHandling;
