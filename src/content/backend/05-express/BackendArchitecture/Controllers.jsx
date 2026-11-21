import React, { useState } from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const Controllers = () => {
  const interviewQuestions = [
    {
      question: "What is a Controller in Express.js?",
      answer:
        "A Controller is a function that handles incoming requests, communicates with required application logic, and sends responses to clients.",
    },
    {
      question: "Why do we use Controllers?",
      answer:
        "Controllers separate request-handling logic from route definitions, making backend code cleaner and easier to maintain.",
    },
    {
      question: "What are req and res?",
      answer:
        "req represents the incoming HTTP request, while res represents the HTTP response sent by the server.",
    },
    {
      question: "What is the difference between Routes and Controllers?",
      answer:
        "Routes define API endpoints, while Controllers contain the functions that handle those endpoints.",
    },
    {
      question: "Can a Controller communicate directly with a Database?",
      answer:
        "Yes. A controller can directly interact with a database, although larger applications commonly separate business logic into services and database operations into repositories.",
    },
    {
      question: "What is an Async Controller?",
      answer:
        "An Async Controller is an asynchronous request handler that uses async/await to handle operations such as database queries.",
    },
    {
      question: "How do you handle errors inside Controllers?",
      answer:
        "Errors can be handled using try/catch or passed to Express error-handling middleware using next(error).",
    },
    {
      question: "Should we write business logic inside Controllers?",
      answer:
        "For small applications, it may be acceptable. In larger applications, business logic should generally be separated into service layers.",
    },
    {
      question: "What is a Controller Function?",
      answer:
        "A Controller Function is a request handler that receives req and res objects and performs the required operation.",
    },
    {
      question: "Can one Controller handle multiple Routes?",
      answer:
        "Yes. A controller module can export multiple handler functions, and different routes can use them.",
    },
    {
      question: "What is the difference between res.send() and res.json()?",
      answer:
        "res.send() sends a response of different supported types, while res.json() sends a JSON response.",
    },
    {
      question: "What happens if a Controller does not send a response?",
      answer:
        "The client request may remain pending until the connection times out or the request is otherwise completed.",
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
          BACKEND ARCHITECTURE / 04
        </p>

        <h1 className="mt-2 text-3xl font-bold">Controllers in Express.js</h1>

        <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">
          Controllers are responsible for handling incoming HTTP requests and
          sending appropriate responses to clients. They connect routes with
          application logic and help keep backend code organized.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">1. What are Controllers?</h2>

        <p>
          A Controller is a function that executes when a particular API route
          receives a request.
        </p>

        <p>
          It reads request data, performs the required operation, communicates
          with services or models, and returns a response.
        </p>

        <CodeBlock
          code={`// controllers/user.controller.js

export const getUsers = (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Users fetched successfully",
  });
};`}
        />

        <p>In this example:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>getUsers:</strong> Controller function.
          </li>
          <li>
            <strong>req:</strong> Contains incoming request information.
          </li>
          <li>
            <strong>res:</strong> Sends the response to the client.
          </li>
          <li>
            <strong>res.status(200):</strong> Sets the HTTP status code.
          </li>
          <li>
            <strong>res.json():</strong> Sends a JSON response.
          </li>
        </ul>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">2. Why Do We Need Controllers?</h2>

        <p>
          Without controllers, we may write all request-handling logic directly
          inside route definitions.
        </p>

        <p>Problems with this approach:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Routes become unnecessarily large.</li>
          <li>Request-handling logic gets mixed with route definitions.</li>
          <li>Code becomes difficult to maintain.</li>
          <li>Reusing handler functions becomes harder.</li>
          <li>Testing individual request handlers becomes difficult.</li>
        </ul>

        <p>
          Controllers solve these problems by separating route definitions from
          request-handling logic.
        </p>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          3. Responsibilities of Controllers
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Receive incoming HTTP requests.</li>
          <li>Read request body, parameters, and query values.</li>
          <li>Perform request-level validation when appropriate.</li>
          <li>Call service functions to execute business operations.</li>
          <li>Handle the result returned by services.</li>
          <li>Send appropriate HTTP responses.</li>
          <li>Forward errors to error-handling middleware.</li>
        </ul>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">4. Understanding req and res</h2>

        <h3 className="font-semibold text-orange-500">Request Object (req)</h3>

        <p>
          The request object contains information about the HTTP request
          received from the client.
        </p>

        <CodeBlock
          code={`// Route parameters
req.params.id;

// Query parameters
req.query.page;

// Request body
req.body;

// Request headers
req.headers;

// Cookies (when cookie middleware is configured)
req.cookies;`}
        />

        <h3 className="font-semibold text-orange-500">Response Object (res)</h3>

        <p>
          The response object provides methods to send data and control the HTTP
          response.
        </p>

        <CodeBlock
          code={`// Send text
res.send("Hello World");

// Send JSON
res.json({ message: "Success" });

// Set status code
res.status(200);

// Send status and JSON
res.status(201).json({
  success: true,
  message: "Created",
});

// Redirect
res.redirect("/login");`}
        />
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">5. Creating a Controller</h2>

        <p>Let's create a simple controller that returns all users.</p>

        <CodeBlock
          code={`// controllers/user.controller.js

export const getUsers = (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Users fetched successfully",
    data: [],
  });
};

export const createUser = (req, res) => {
  const { name, email } = req.body;

  return res.status(201).json({
    success: true,
    message: "User created successfully",
    data: {
      name,
      email,
    },
  });
};`}
        />

        <p>We have created two controller functions:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>getUsers() handles fetching users.</li>
          <li>createUser() handles creating a user.</li>
        </ul>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          6. Connecting Controllers with Routes
        </h2>

        <p>
          Controllers are imported into route files and connected with their
          respective endpoints.
        </p>

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

        <p>Register the router in app.js:</p>

        <CodeBlock
          code={`// app.js

import express from "express";
import userRoutes from "./routes/user.routes.js";

const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);

export default app;`}
        />

        <p>Available endpoints:</p>

        <CodeBlock
          code={`GET  /api/users
POST /api/users`}
        />
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">7. Async Controllers</h2>

        <p>
          In real backend applications, controllers frequently perform
          asynchronous operations such as database queries, password hashing,
          and API calls.
        </p>

        <p>We use async/await to handle these operations.</p>

        <CodeBlock
          code={`// controllers/user.controller.js

import User from "../models/user.model.js";

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    return res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    next(error);
  }
};`}
        />

        <p>Here:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>async allows the function to use await.</li>
          <li>User.find() performs a database query.</li>
          <li>await waits for the query result.</li>
          <li>try/catch handles errors.</li>
          <li>next(error) forwards errors to Express error middleware.</li>
        </ul>
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">8. Error Handling in Controllers</h2>

        <p>
          Errors can occur during database operations, validation, or other
          application logic.
        </p>

        <p>
          We can use try/catch and pass errors to centralized error-handling
          middleware.
        </p>

        <CodeBlock
          code={`export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};`}
        />

        <p>
          This approach avoids repeating error-response logic in every
          controller.
        </p>
      </section>

      {/* 9 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">9. Controllers vs Routes</h2>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[450px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="p-3">Routes</th>
                <th className="p-3">Controllers</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Define API endpoints.</td>
                <td className="p-3">Handle incoming requests.</td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Connect endpoints to handlers.</td>
                <td className="p-3">Execute request-handling logic.</td>
              </tr>
              <tr>
                <td className="p-3">Use express.Router().</td>
                <td className="p-3">Use req and res objects.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 10 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">10. Best Practices</h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Keep controllers focused on request and response handling.</li>
          <li>Use meaningful controller function names.</li>
          <li>Keep business logic in service layers in larger applications.</li>
          <li>Use async/await for asynchronous operations.</li>
          <li>Handle errors consistently.</li>
          <li>Return responses only once for each request.</li>
          <li>Avoid unnecessary database logic inside controllers.</li>
          <li>Keep controller files organized by resource or feature.</li>
        </ul>
      </section>

      {/* Interview Questions */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-bold text-orange-500">
            Interview Questions
          </h2>

          <p className="mt-2 text-sm text-[var(--text-secondary)]">
            Click any question to see its short answer.
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

export default Controllers;
