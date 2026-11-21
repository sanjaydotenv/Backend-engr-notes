import React, { useState } from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const AsyncHandler = () => {
  const interviewQuestions = [
    {
      question: "What is Async Handler?",
      answer:
        "Async Handler is a reusable higher-order function that handles errors from asynchronous Express controllers.",
    },
    {
      question: "Why do we use Async Handler?",
      answer:
        "To avoid writing repetitive try-catch blocks in every asynchronous controller.",
    },
    {
      question: "What is a Higher-Order Function?",
      answer:
        "A function that accepts another function as an argument or returns another function.",
    },
    {
      question: "Why does Async Handler return a function?",
      answer:
        "Because Express expects middleware functions with req, res, and next parameters.",
    },
    {
      question: "What is Promise.resolve()?",
      answer:
        "It converts a value or promise into a Promise, allowing .catch() to handle rejection.",
    },
    {
      question: "What does next(error) do?",
      answer: "It passes an error to Express error-handling middleware.",
    },
    {
      question: "What is the difference between try-catch and Async Handler?",
      answer:
        "Try-catch handles errors locally, while Async Handler provides reusable error handling for multiple controllers.",
    },
    {
      question: "Does Async Handler handle synchronous errors?",
      answer:
        "Synchronous errors thrown while executing its wrapped function are also caught by the Promise chain.",
    },
    {
      question: "Does Async Handler replace error middleware?",
      answer:
        "No. Async Handler forwards errors, while centralized error middleware creates and sends the error response.",
    },
    {
      question: "Is Async Handler necessary in Express 5?",
      answer:
        "No. Express 5 automatically forwards rejected promises from returned async route handlers to error middleware.",
    },
    {
      question: "Why is next(error) used instead of next()?",
      answer:
        "next() moves to the next middleware, while next(error) forwards the error to error-handling middleware.",
    },
    {
      question: "Can Async Handler be used in multiple routes?",
      answer:
        "Yes. It is reusable and can wrap any asynchronous Express route handler.",
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
          BACKEND ARCHITECTURE / 16
        </p>

        <h1 className="mt-2 text-3xl font-bold">Async Handler in Express.js</h1>

        <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">
          Async Handler is a reusable function used to handle errors from
          asynchronous route handlers and controllers. It forwards rejected
          promises to Express error-handling middleware.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">1. What is Async Handler?</h2>

        <p>
          In Express.js, controllers often perform asynchronous operations such
          as database queries, API calls, and authentication.
        </p>

        <p>
          These operations can fail. We need to handle their errors properly.
        </p>

        <CodeBlock
          code={`export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

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
          Writing <code>try...catch</code> in every controller creates
          repetitive code. Async Handler solves this problem.
        </p>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">2. Problem Without Async Handler</h2>

        <p>
          Imagine an application has 50 controllers. Each asynchronous
          controller needs its own error-handling logic.
        </p>

        <CodeBlock
          code={`export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

export const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();

    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};`}
        />

        <p>Problems:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Repeated try-catch blocks.</li>
          <li>More code in controllers.</li>
          <li>Harder to maintain error-handling logic.</li>
          <li>Unnecessary code duplication.</li>
        </ul>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">3. Creating Async Handler</h2>

        <p>
          Create a file named <code>asyncHandler.js</code> inside your{" "}
          <code>utils</code> directory.
        </p>

        <CodeBlock
          code={`// utils/asyncHandler.js

const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next))
      .catch((error) => next(error));
  };
};

export default asyncHandler;`}
        />

        <p>
          This is a reusable Higher-Order Function that wraps asynchronous
          Express handlers.
        </p>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          4. Understanding Async Handler Code
        </h2>

        <h3 className="font-semibold text-orange-500">
          Step 1: requestHandler
        </h3>

        <CodeBlock code={`const asyncHandler = (requestHandler) => {}`} />

        <p>
          <code>requestHandler</code> is the controller function passed to Async
          Handler.
        </p>

        <h3 className="font-semibold text-orange-500">
          Step 2: Return Express Middleware
        </h3>

        <CodeBlock code={`return (req, res, next) => {}`} />

        <p>
          Express executes this returned function and provides
          <code> req</code>, <code>res</code>, and <code>next</code>.
        </p>

        <h3 className="font-semibold text-orange-500">
          Step 3: Promise.resolve()
        </h3>

        <CodeBlock code={`Promise.resolve(requestHandler(req, res, next))`} />

        <p>
          It converts the returned value or promise into a Promise. If the
          controller returns a rejected Promise, the next
          <code> .catch()</code> can handle it.
        </p>

        <h3 className="font-semibold text-orange-500">
          Step 4: Forward the Error
        </h3>

        <CodeBlock code={`.catch((error) => next(error));`} />

        <p>
          If an error occurs, <code>next(error)</code> forwards it to
          centralized error-handling middleware.
        </p>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          5. Using Async Handler in Controller
        </h2>

        <p>Now we don't need to write try-catch in every controller.</p>

        <CodeBlock
          code={`// controllers/user.controller.js

import asyncHandler from "../utils/asyncHandler.js";
import User from "../models/user.model.js";

export const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();

  res.status(200).json({
    success: true,
    message: "Users fetched successfully",
    data: users,
  });
});`}
        />

        <p>
          Here, we pass the asynchronous controller to
          <code> asyncHandler()</code>.
        </p>

        <p>
          If <code>User.find()</code> fails, Async Handler catches the rejected
          Promise and forwards the error.
        </p>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          6. Async Handler with Custom API Error
        </h2>

        <p>
          We can use Async Handler with the Custom API Error class created in
          the previous chapter.
        </p>

        <CodeBlock
          code={`// controllers/user.controller.js

import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import User from "../models/user.model.js";

export const getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  res.status(200).json({
    success: true,
    message: "User fetched successfully",
    data: user,
  });
});`}
        />

        <p>
          When the user does not exist, we throw an ApiError. Async Handler
          catches it and sends it to the error middleware.
        </p>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          7. Async Handler with Custom API Response
        </h2>

        <p>
          We can also combine Async Handler with the
          <code> ApiResponse</code> class from the previous chapter.
        </p>

        <CodeBlock
          code={`// controllers/user.controller.js

import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import User from "../models/user.model.js";

export const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();

  res.status(200).json(
    new ApiResponse(
      200,
      users,
      "Users fetched successfully"
    )
  );
});`}
        />

        <p>Now our controller uses both reusable utilities:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Async Handler handles asynchronous errors.</li>
          <li>ApiResponse creates a consistent success response.</li>
        </ul>
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">8. Complete Error Handling Flow</h2>

        <CodeBlock
          code={`Client Request
      |
      v
Express Route
      |
      v
Async Handler
      |
      v
Controller
      |
      v
Database Operation
      |
      |--- Success
      |       |
      |       v
      |   Send Response
      |
      |--- Error
              |
              v
          Promise Rejected
              |
              v
          .catch(error)
              |
              v
          next(error)
              |
              v
      Error Handling Middleware
              |
              v
          Error Response`}
        />

        <p>
          Important: Async Handler does not create or send the error response.
          It only forwards the error.
        </p>
      </section>

      {/* 9 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          9. Async Handler in Express 4 vs Express 5
        </h2>

        <p>There is an important difference between Express 4 and Express 5.</p>

        <div className="space-y-3">
          <div className="rounded-lg border border-[var(--border-color)] p-4">
            <h3 className="font-semibold text-orange-500">Express 4</h3>

            <p className="mt-2 text-[var(--text-secondary)]">
              Express 4 does not automatically forward rejected Promises from
              async route handlers. A wrapper such as Async Handler is useful.
            </p>
          </div>

          <div className="rounded-lg border border-[var(--border-color)] p-4">
            <h3 className="font-semibold text-orange-500">Express 5</h3>

            <p className="mt-2 text-[var(--text-secondary)]">
              Express 5 automatically forwards rejected Promises returned by
              async route handlers to error middleware. A custom Async Handler
              is therefore optional.
            </p>
          </div>
        </div>

        <p>
          Always check your project's Express version before deciding whether to
          use a custom wrapper.
        </p>
      </section>

      {/* 10 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">10. Common Mistakes</h2>

        <h3 className="font-semibold text-orange-500">
          Mistake 1: Forgetting to return the Promise
        </h3>

        <CodeBlock
          code={`// Incorrect
const asyncHandler = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next))
      .catch(next);
  };
};`}
        />

        <p>
          In this example, the Promise is not returned from the middleware.
          Returning it makes the wrapper easier to compose and reason about.
        </p>

        <h3 className="font-semibold text-orange-500">
          Mistake 2: Calling next() instead of next(error)
        </h3>

        <CodeBlock
          code={`// Incorrect for forwarding errors
.catch(() => next());

// Correct
.catch((error) => next(error));`}
        />

        <p>
          Calling <code>next()</code> moves to the next normal middleware
          instead of forwarding the error.
        </p>

        <h3 className="font-semibold text-orange-500">
          Mistake 3: Sending Multiple Responses
        </h3>

        <CodeBlock
          code={`// Avoid
res.json({ message: "Success" });
next(new Error("Something went wrong"));`}
        />

        <p>
          Once a response has been sent, don't forward another error for the
          same request. This can cause
          <code> ERR_HTTP_HEADERS_SENT</code>.
        </p>
      </section>

      {/* 11 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">11. Best Practices</h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Create one reusable Async Handler utility.</li>
          <li>Keep controllers focused on request handling.</li>
          <li>Forward errors using next(error).</li>
          <li>Use centralized error middleware.</li>
          <li>Combine it with Custom API Error when appropriate.</li>
          <li>Combine it with Custom API Response for successful responses.</li>
          <li>Don't send multiple responses for one request.</li>
          <li>Understand native async error handling in Express 5.</li>
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

export default AsyncHandler;
