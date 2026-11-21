import React, { useState } from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const CustomAPIError = () => {
  const interviewQuestions = [
    {
      question: "What is Custom API Error?",
      answer:
        "Custom API Error is a user-defined error class that extends JavaScript's Error class and provides additional properties like statusCode and success.",
    },
    {
      question: "Why do we create a Custom API Error class?",
      answer:
        "To create structured, reusable, and consistent errors throughout the backend application.",
    },
    {
      question: "Why do we extend the built-in Error class?",
      answer:
        "To inherit standard error properties such as message and stack while adding our own custom properties.",
    },
    {
      question: "What is statusCode in Custom API Error?",
      answer:
        "It represents the HTTP status code associated with an error, such as 400, 401, 404, or 500.",
    },
    {
      question: "What is Error.captureStackTrace()?",
      answer:
        "It captures the stack trace for an error and can exclude unnecessary constructor calls from the trace.",
    },
    {
      question: "What is the difference between Error and Custom API Error?",
      answer:
        "Error is JavaScript's built-in error class, while Custom API Error extends it with API-specific properties.",
    },
    {
      question: "What is an operational error?",
      answer:
        "An expected runtime failure, such as invalid input, unauthorized access, or a missing resource.",
    },
    {
      question: "Can Custom API Error handle database errors?",
      answer:
        "It can represent database-related failures, but database errors should be identified and translated appropriately before sending responses.",
    },
    {
      question: "Where should we throw Custom API Error?",
      answer:
        "Usually inside services or other application logic when a known business or operational condition fails.",
    },
    {
      question: "What is the difference between throw and next(error)?",
      answer:
        "throw creates and raises an exception. next(error) forwards an error to Express error-handling middleware.",
    },
    {
      question:
        "Does Express 5 automatically handle thrown errors in async controllers?",
      answer:
        "Yes. Express 5 forwards rejected promises from async route handlers to error-handling middleware.",
    },
    {
      question: "Should we expose stack traces to clients?",
      answer:
        "No. Stack traces may expose internal implementation details and should not be sent in production responses.",
    },
    {
      question: "What is isOperational?",
      answer:
        "It is a custom flag commonly used to identify expected operational errors separately from unexpected programming errors.",
    },
    {
      question:
        "What is the relationship between Custom API Error and Centralized Error Middleware?",
      answer:
        "Custom API Error creates structured errors, while centralized error middleware catches them and sends HTTP responses.",
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
          BACKEND ARCHITECTURE / 14
        </p>

        <h1 className="mt-2 text-3xl font-bold">Custom API Error</h1>

        <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">
          Custom API Error is a user-defined JavaScript error class that extends
          the built-in Error class. It allows us to attach additional
          information such as HTTP status codes, error messages, and operational
          error flags to application errors.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">1. What is Custom API Error?</h2>

        <p>
          JavaScript already provides a built-in <code>Error</code> class. We
          can use it whenever something goes wrong.
        </p>

        <CodeBlock code={`throw new Error("User not found");`} />

        <p>
          But a normal Error does not automatically contain API-specific
          information like HTTP status codes.
        </p>

        <p>For example, we may want to represent different errors:</p>

        <CodeBlock
          code={`User not found       -> 404
Invalid credentials  -> 401
Email already exists -> 409
Server error         -> 500`}
        />

        <p>
          Instead of creating these properties repeatedly, we create our own
          Custom API Error class.
        </p>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          2. Why Do We Need Custom API Error?
        </h2>

        <p>
          Imagine different services need to throw errors with different HTTP
          status codes.
        </p>

        <p>Without a custom class:</p>

        <CodeBlock
          code={`const error = new Error("User not found");

error.statusCode = 404;

throw error;`}
        />

        <p>We need to manually attach properties every time.</p>

        <p>With Custom API Error:</p>

        <CodeBlock code={`throw new ApiError(404, "User not found");`} />

        <p>This makes error creation shorter, reusable, and consistent.</p>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          3. Understanding JavaScript Error Class
        </h2>

        <p>
          JavaScript provides a built-in <code>Error</code> class for
          representing runtime errors.
        </p>

        <CodeBlock
          code={`const error = new Error("Something went wrong");

console.log(error.message);
console.log(error.stack);`}
        />

        <p>Important properties:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>message:</strong> Describes what went wrong.
          </li>
          <li>
            <strong>stack:</strong> Provides information about where the error
            occurred.
          </li>
          <li>
            <strong>name:</strong> Represents the error type.
          </li>
        </ul>

        <p>
          We extend this built-in class to create our own API-specific error
          structure.
        </p>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          4. Creating Custom API Error Class
        </h2>

        <p>
          Create a file named <code>ApiError.js</code> inside the utils
          directory.
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
    this.isOperational = true;
    this.name = "ApiError";

    Error.captureStackTrace(this, this.constructor);
  }
}

export default ApiError;`}
        />

        <p>Let's understand each part:</p>

        <h3 className="font-semibold text-orange-500">extends Error</h3>

        <p>It allows ApiError to inherit the built-in Error class.</p>

        <h3 className="font-semibold text-orange-500">super(message)</h3>

        <p>It calls the parent Error constructor and sets the error message.</p>

        <h3 className="font-semibold text-orange-500">statusCode</h3>

        <p>Stores the HTTP status code associated with the error.</p>

        <h3 className="font-semibold text-orange-500">success</h3>

        <p>Indicates that the API operation was unsuccessful.</p>

        <h3 className="font-semibold text-orange-500">isOperational</h3>

        <p>
          Marks this error as an expected operational error. This flag is useful
          for distinguishing operational errors from unexpected programming
          bugs.
        </p>

        <h3 className="font-semibold text-orange-500">
          Error.captureStackTrace()
        </h3>

        <p>
          Captures the stack trace and excludes the custom error constructor
          from the displayed trace.
        </p>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">5. Using Custom API Error</h2>

        <p>
          Now we can import ApiError anywhere in our backend and throw errors
          with different status codes.
        </p>

        <CodeBlock
          code={`import ApiError from "../utils/ApiError.js";

// User not found
throw new ApiError(404, "User not found");

// Unauthorized
throw new ApiError(401, "Invalid credentials");

// Duplicate email
throw new ApiError(409, "Email already exists");

// Invalid request
throw new ApiError(400, "Invalid request data");`}
        />

        <p>
          We no longer need to manually attach statusCode to every error object.
        </p>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          6. Using Custom API Error in Service Layer
        </h2>

        <p>
          In the CSR architecture, services contain business logic. Therefore,
          we can throw Custom API Errors when business conditions fail.
        </p>

        <CodeBlock
          code={`// services/user.service.js

import ApiError from "../utils/ApiError.js";

import {
  findUserByEmail,
  createUser,
} from "../repositories/user.repository.js";

export const registerUser = async (userData) => {
  const { name, email, password } = userData;

  const existingUser = await findUserByEmail(email);

  if (existingUser) {
    throw new ApiError(
      409,
      "Email already registered"
    );
  }

  const user = await createUser({
    name,
    email,
    password,
  });

  return user;
};`}
        />

        <p>
          Here, if the email already exists, the service throws a structured
          error with status code 409.
        </p>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          7. Connecting with Centralized Error Middleware
        </h2>

        <p>
          Custom API Error creates errors, but it does not send HTTP responses
          by itself.
        </p>

        <p>Our centralized error middleware catches these errors.</p>

        <CodeBlock
          code={`// middlewares/error.middleware.js

const errorMiddleware = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  const message =
    err.isOperational || statusCode < 500
      ? err.message
      : "Internal Server Error";

  if (process.env.NODE_ENV !== "production") {
    console.error(err);
  }

  res.status(statusCode).json({
    success: false,
    message,
  });
};

export default errorMiddleware;`}
        />

        <p>
          The middleware reads the error properties and sends a consistent JSON
          response.
        </p>

        <p>Example response:</p>

        <CodeBlock
          code={`{
  "success": false,
  "message": "Email already registered"
}`}
        />
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          8. How Does Custom API Error Work?
        </h2>

        <CodeBlock
          code={`Client Request
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
      |-- Business condition fails
      |
      v
throw new ApiError(404, "User not found")
      |
      v
Express Error Handling
      |
      v
Centralized Error Middleware
      |
      |-- Read statusCode
      |-- Read message
      |-- Format JSON response
      |
      v
Client Receives Error`}
        />

        <p>
          Important: Express 5 automatically forwards rejected async
          route-handler promises. With Express 4, use
          <code> next(error) </code> through try-catch or an async-handler
          wrapper.
        </p>
      </section>

      {/* 9 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          9. Custom API Error vs Normal Error
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="p-3">Normal Error</th>
                <th className="p-3">Custom API Error</th>
              </tr>
            </thead>

            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Built-in JavaScript class</td>
                <td className="p-3">User-defined class</td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Contains message and stack</td>
                <td className="p-3">Adds API-specific properties</td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">No default HTTP status code</td>
                <td className="p-3">Can store HTTP status code</td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">General error handling</td>
                <td className="p-3">Structured API error handling</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 10 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">10. Common Mistakes</h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Forgetting to extend the built-in Error class.</li>
          <li>Forgetting to call super(message).</li>
          <li>Not assigning an appropriate HTTP status code.</li>
          <li>Exposing internal stack traces in production.</li>
          <li>Using status code 500 for every type of error.</li>
          <li>Assuming Custom API Error automatically sends a response.</li>
          <li>Returning sensitive database or server details to clients.</li>
        </ul>
      </section>

      {/* 11 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">11. Best Practices</h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Extend JavaScript's built-in Error class.</li>
          <li>Use meaningful error messages.</li>
          <li>Assign correct HTTP status codes.</li>
          <li>Keep error creation reusable.</li>
          <li>Use centralized error middleware.</li>
          <li>Distinguish expected errors from unexpected bugs.</li>
          <li>Log unexpected errors for debugging.</li>
          <li>Never expose sensitive internal information.</li>
          <li>Keep API error responses consistent.</li>
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

export default CustomAPIError;
