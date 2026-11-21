import React, { useState } from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const ControllerServiceRepositoryPattern = () => {
  const interviewQuestions = [
    {
      question: "What is Controller-Service-Repository Pattern?",
      answer:
        "It is an architectural pattern that separates HTTP handling, business logic, and database access into different layers.",
    },
    {
      question: "What is the responsibility of a Controller?",
      answer:
        "A Controller handles incoming HTTP requests, extracts data, calls services, and sends HTTP responses.",
    },
    {
      question: "What is the responsibility of a Service?",
      answer:
        "A Service contains application-specific business logic and coordinates operations required to complete a task.",
    },
    {
      question: "What is the responsibility of a Repository?",
      answer:
        "A Repository handles database access operations such as finding, creating, updating, and deleting records.",
    },
    {
      question: "Why do we use the CSR Pattern?",
      answer:
        "It improves code organization, separation of concerns, maintainability, reusability, and testability.",
    },
    {
      question: "Should Controllers contain business logic?",
      answer:
        "Controllers should primarily handle HTTP-related responsibilities. Business logic should generally stay in Services.",
    },
    {
      question: "Should Services directly access the database?",
      answer:
        "In a strict CSR architecture, Services use Repositories for database access. Smaller projects may access Models directly.",
    },
    {
      question: "Can one Service use multiple Repositories?",
      answer:
        "Yes. A Service can coordinate multiple Repositories when a business operation requires data from different collections.",
    },
    {
      question: "What is Separation of Concerns?",
      answer:
        "It means dividing an application into separate parts where each part has a specific responsibility.",
    },
    {
      question: "What is the difference between Controller and Service?",
      answer:
        "Controller handles HTTP requests and responses, while Service handles business rules and application operations.",
    },
    {
      question: "What is the difference between Service and Repository?",
      answer:
        "Service handles business logic, while Repository handles database queries and data access.",
    },
    {
      question: "Is CSR Pattern mandatory in Express.js?",
      answer:
        "No. It is an architectural choice that becomes especially useful as applications grow.",
    },
    {
      question: "How does CSR Pattern improve testing?",
      answer:
        "Each layer can be tested independently by mocking its dependencies, such as mocking repositories when testing services.",
    },
    {
      question: "Where should error handling happen in CSR?",
      answer:
        "Services handle business-related errors, Controllers or async handlers forward errors, and centralized error middleware sends HTTP error responses.",
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
          BACKEND ARCHITECTURE / 11
        </p>

        <h1 className="mt-2 text-3xl font-bold">
          Controller-Service-Repository Pattern
        </h1>

        <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">
          Controller-Service-Repository Pattern is an architectural approach
          that separates HTTP handling, business logic, and database operations
          into independent layers. It makes backend applications easier to
          maintain, test, and scale.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">1. What is CSR Pattern?</h2>

        <p>CSR stands for:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Controller:</strong> Handles HTTP requests and responses.
          </li>
          <li>
            <strong>Service:</strong> Handles business logic.
          </li>
          <li>
            <strong>Repository:</strong> Handles database operations.
          </li>
        </ul>

        <p>
          Instead of writing everything inside a single route or controller, we
          divide the application into separate layers.
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
Repository
  |
  v
Model
  |
  v
Database`}
        />
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">2. Why Do We Need CSR Pattern?</h2>

        <p>
          Imagine building a large backend application where routes, database
          queries, password hashing, validation, and business logic are all
          written inside one file.
        </p>

        <p>This creates problems:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Code becomes difficult to understand.</li>
          <li>Database logic gets mixed with business logic.</li>
          <li>Code duplication increases.</li>
          <li>Testing individual features becomes difficult.</li>
          <li>Making changes can affect unrelated functionality.</li>
        </ul>

        <p>
          CSR solves these problems by giving every layer a specific
          responsibility.
        </p>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">3. Responsibilities of Each Layer</h2>

        <h3 className="font-semibold text-orange-500">Controller</h3>

        <p>
          Controller acts as the HTTP communication layer between the client and
          application logic.
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Receives request data.</li>
          <li>Calls the required service.</li>
          <li>Handles HTTP status codes.</li>
          <li>Sends responses to the client.</li>
        </ul>

        <h3 className="font-semibold text-orange-500">Service</h3>

        <p>
          Service contains the business rules and coordinates the operations
          needed to complete a task.
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Executes business logic.</li>
          <li>Checks business conditions.</li>
          <li>Calls repositories.</li>
          <li>Coordinates multiple operations.</li>
        </ul>

        <h3 className="font-semibold text-orange-500">Repository</h3>

        <p>Repository is responsible for communicating with the database.</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Finds database records.</li>
          <li>Creates new records.</li>
          <li>Updates existing records.</li>
          <li>Deletes records.</li>
        </ul>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">4. CSR Project Folder Structure</h2>

        <p>
          Let's understand how a backend project can be organized using this
          architecture.
        </p>

        <CodeBlock
          code={`src/
|
|-- config/
|   |-- database.js
|
|-- models/
|   |-- user.model.js
|
|-- repositories/
|   |-- user.repository.js
|
|-- services/
|   |-- user.service.js
|
|-- controllers/
|   |-- user.controller.js
|
|-- routes/
|   |-- user.routes.js
|
|-- middlewares/
|   |-- auth.middleware.js
|   |-- error.middleware.js
|
|-- utils/
|   |-- apiResponse.js
|
|-- app.js
|-- server.js`}
        />

        <p>
          Each directory contains files responsible for a particular part of the
          application.
        </p>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          5. Practical Example – User Registration
        </h2>

        <p>
          Let's build a registration feature using the CSR Pattern. A user sends
          name, email, and password to our backend.
        </p>

        <CodeBlock
          code={`Client
  |
  v
POST /api/users/register
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
  |-- Check existing user
  |-- Hash password
  |
  v
Repository
  |
  v
User Model
  |
  v
MongoDB`}
        />
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">6. Creating the Model Layer</h2>

        <p>First, create a User Schema and Model using Mongoose.</p>

        <CodeBlock
          code={`// models/user.model.js

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      select: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;`}
        />

        <p>
          The Model defines the structure of user documents stored inside
          MongoDB.
        </p>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">7. Creating the Repository Layer</h2>

        <p>Now create repository functions to handle database operations.</p>

        <CodeBlock
          code={`// repositories/user.repository.js

import User from "../models/user.model.js";

export const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

export const createUser = async (userData) => {
  return await User.create(userData);
};

export const findUserById = async (id) => {
  return await User.findById(id);
};`}
        />

        <p>
          Repository functions interact with the User Model instead of putting
          database queries inside services.
        </p>
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">8. Creating the Service Layer</h2>

        <p>Service handles the actual registration business logic.</p>

        <CodeBlock
          code={`// services/user.service.js

import bcrypt from "bcrypt";

import {
  findUserByEmail,
  createUser,
} from "../repositories/user.repository.js";

export const registerUser = async (userData) => {
  const { name, email, password } = userData;

  // Check existing user
  const existingUser = await findUserByEmail(email);

  if (existingUser) {
    throw new Error("User already exists");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user
  const user = await createUser({
    name,
    email,
    password: hashedPassword,
  });

  return user;
};`}
        />

        <p>
          Notice that the service does not directly use Mongoose queries. It
          calls repository functions to access data.
        </p>
      </section>

      {/* 9 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">9. Creating the Controller Layer</h2>

        <p>
          Controller receives the HTTP request and calls the registration
          service.
        </p>

        <CodeBlock
          code={`// controllers/user.controller.js

import { registerUser } from "../services/user.service.js";

export const registerUserController = async (req, res) => {
  const user = await registerUser(req.body);

  res.status(201).json({
    success: true,
    message: "User registered successfully",
    data: user,
  });
};`}
        />

        <p>
          The controller handles the HTTP response, while the service handles
          registration logic.
        </p>
      </section>

      {/* 10 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">10. Creating the Route Layer</h2>

        <p>Finally, connect the controller with an API endpoint.</p>

        <CodeBlock
          code={`// routes/user.routes.js

import express from "express";

import {
  registerUserController,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register", registerUserController);

export default router;`}
        />

        <p>Register the route inside app.js:</p>

        <CodeBlock
          code={`// app.js

import express from "express";
import userRoutes from "./routes/user.routes.js";

const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);

export default app;`}
        />

        <p>Now the registration endpoint becomes:</p>

        <CodeBlock code={`POST /api/users/register`} />
      </section>

      {/* 11 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          11. Complete Request-Response Flow
        </h2>

        <p>
          Let's understand what happens when a client sends a registration
          request.
        </p>

        <CodeBlock
          code={`1. Client
   |
   v
2. Route
   |
   v
3. Controller
   |
   | Calls registerUser()
   v
4. Service
   |
   | Checks existing user
   | Hashes password
   |
   | Calls repository
   v
5. Repository
   |
   | Calls User.create()
   v
6. Model
   |
   v
7. MongoDB
   |
   | Returns created document
   v
8. Repository
   |
   v
9. Service
   |
   v
10. Controller
   |
   | Sends HTTP 201 response
   v
11. Client`}
        />

        <p>
          Every layer performs its own responsibility and passes the required
          data to the next layer.
        </p>
      </section>

      {/* 12 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">12. Error Handling in CSR Pattern</h2>

        <p>
          Errors should be handled according to the responsibility of each
          layer.
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Repository:</strong> Database operations may throw
            database-related errors.
          </li>
          <li>
            <strong>Service:</strong> Throws business-related errors, such as an
            already registered email.
          </li>
          <li>
            <strong>Controller:</strong> Forwards errors to the centralized
            error handler.
          </li>
          <li>
            <strong>Error Middleware:</strong> Converts errors into consistent
            HTTP responses.
          </li>
        </ul>

        <p>Example service error:</p>

        <CodeBlock
          code={`if (existingUser) {
  const error = new Error("User already exists");

  error.statusCode = 409;

  throw error;
}`}
        />

        <p>
          With Express 5, rejected async controller promises are automatically
          forwarded to error-handling middleware. In Express 4, use an async
          handler wrapper or try/catch with next(error).
        </p>
      </section>

      {/* 13 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">13. Advantages of CSR Pattern</h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Separation of Concerns:</strong> Every layer has a clear
            responsibility.
          </li>
          <li>
            <strong>Maintainability:</strong> Changes can be made in one layer
            without unnecessarily modifying others.
          </li>
          <li>
            <strong>Reusability:</strong> Services and repositories can be
            reused.
          </li>
          <li>
            <strong>Testability:</strong> Layers can be tested independently.
          </li>
          <li>
            <strong>Scalability:</strong> Large codebases become easier to
            organize.
          </li>
          <li>
            <strong>Readability:</strong> Code becomes easier to understand.
          </li>
        </ul>
      </section>

      {/* 14 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">14. Disadvantages of CSR Pattern</h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Creates more files and folders.</li>
          <li>Introduces additional layers of function calls.</li>
          <li>Can be unnecessary for small applications.</li>
          <li>Requires consistent architecture and naming conventions.</li>
          <li>Over-abstraction can make simple operations harder to follow.</li>
        </ul>

        <p>
          Use CSR when the application's complexity justifies separating these
          responsibilities. Not every small Express project needs all three
          layers.
        </p>
      </section>

      {/* 15 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">15. Best Practices</h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Keep controllers focused on HTTP handling.</li>
          <li>Keep business rules inside services.</li>
          <li>Keep database queries inside repositories.</li>
          <li>Keep Models focused on schema and data behavior.</li>
          <li>Use meaningful function names.</li>
          <li>Avoid unnecessary dependencies between layers.</li>
          <li>Use centralized error handling.</li>
          <li>Write unit tests for important services and repositories.</li>
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

export default ControllerServiceRepositoryPattern;
