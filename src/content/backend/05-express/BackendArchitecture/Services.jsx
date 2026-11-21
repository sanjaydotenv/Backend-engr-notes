
import React, { useState } from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const Services = () => {
  const interviewQuestions = [
    {
      question: "What is a Service Layer?",
      answer:
        "Service Layer contains business logic and handles application operations independently of HTTP request and response handling.",
    },
    {
      question: "Why do we use Services?",
      answer:
        "Services separate business logic from controllers, making code reusable, maintainable, and easier to test.",
    },
    {
      question: "What is Business Logic?",
      answer:
        "Business Logic represents the rules and operations that define how an application works.",
    },
    {
      question: "What is the difference between Controller and Service?",
      answer:
        "Controller handles HTTP requests and responses, while Service executes business logic.",
    },
    {
      question: "Can a Service communicate directly with a Database?",
      answer:
        "Yes. A service can directly interact with a database. In larger applications, database operations may be separated into a Repository layer.",
    },
    {
      question: "Can one Service be used by multiple Controllers?",
      answer:
        "Yes. Services can be reused by multiple controllers or other application components.",
    },
    {
      question: "Should Services know about req and res?",
      answer:
        "Generally, no. Services should remain independent of Express request and response objects.",
    },
    {
      question: "What is an Async Service?",
      answer:
        "An Async Service is a function that performs asynchronous operations using async/await, such as database queries or external API calls.",
    },
    {
      question: "Can Services call other Services?",
      answer:
        "Yes. A service can call another service when an application operation requires multiple business operations.",
    },
    {
      question: "What is the difference between Service and Repository?",
      answer:
        "Service contains business logic, while Repository handles database access and data persistence.",
    },
    {
      question: "Where should password hashing happen?",
      answer:
        "Password hashing is generally handled in the authentication or user service before storing the password.",
    },
    {
      question: "Should a Service send HTTP responses?",
      answer:
        "No. A service should return data or throw errors. The controller is responsible for sending HTTP responses.",
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
          BACKEND ARCHITECTURE / 05
        </p>

        <h1 className="mt-2 text-3xl font-bold">
          Services in Backend Development
        </h1>

        <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">
          Services contain the business logic of an application.
          They handle operations such as user registration,
          authentication, payment processing, and other application
          tasks. They keep controllers focused on HTTP request
          and response handling.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">1. What are Services?</h2>

        <p>
          A Service is a function or module responsible for executing
          the business logic of an application.
        </p>

        <p>
          For example, during user registration, a service may:
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Check whether the email already exists.</li>
          <li>Hash the user's password.</li>
          <li>Create a new user.</li>
          <li>Return the created user data.</li>
        </ul>

        <CodeBlock
          code={`// services/user.service.js

export const registerUser = async (userData) => {
  // Business logic goes here

  return {
    message: "User registered successfully",
  };
};`}
        />
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">2. Why Do We Need Services?</h2>

        <p>
          Without a service layer, controllers may contain database
          operations, password hashing, validation, and business rules
          together.
        </p>

        <p>Common problems:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Controllers become large and difficult to understand.</li>
          <li>Business logic gets duplicated.</li>
          <li>Code becomes harder to test.</li>
          <li>Changing business rules becomes difficult.</li>
          <li>Reusing application logic becomes complicated.</li>
        </ul>

        <p>
          Services solve these problems by separating business
          operations from HTTP handling.
        </p>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">3. What is Business Logic?</h2>

        <p>
          Business Logic means the rules and operations that define
          how an application should behave.
        </p>

        <p>Example: An e-commerce application.</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>A user cannot purchase an out-of-stock product.</li>
          <li>Discounts are applied according to specific rules.</li>
          <li>Orders must have valid payment information.</li>
          <li>Only eligible users can cancel an order.</li>
        </ul>

        <p>
          These rules belong to the business logic and are generally
          implemented inside service functions.
        </p>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">4. Creating a Service</h2>

        <p>
          Let's create a simple service that registers a new user.
        </p>

        <CodeBlock
          code={`// services/user.service.js

import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export const registerUser = async (userData) => {
  const { name, email, password } = userData;

  // Check existing user
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new Error("Email already registered");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  return user;
};`}
        />

        <p>Here, the service performs three main operations:</p>

        <ol className="list-decimal space-y-2 pl-6">
          <li>Checks whether the email already exists.</li>
          <li>Hashes the password using bcrypt.</li>
          <li>Creates the user in the database.</li>
        </ol>

        <p>
          Notice that this service does not use req or res.
          It only handles application logic and returns data.
        </p>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">5. Connecting Services with Controllers</h2>

        <p>
          Controllers call service functions and use their returned
          results to generate HTTP responses.
        </p>

        <h3 className="font-semibold text-orange-500">
          Service
        </h3>

        <CodeBlock
          code={`// services/user.service.js

import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export const registerUser = async (userData) => {
  const { name, email, password } = userData;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new Error("Email already registered");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  return user;
};`}
        />

        <h3 className="font-semibold text-orange-500">
          Controller
        </h3>

        <CodeBlock
          code={`// controllers/user.controller.js

import { registerUser } from "../services/user.service.js";

export const createUser = async (req, res, next) => {
  try {
    const user = await registerUser(req.body);

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    next(error);
  }
};`}
        />

        <p>
          The controller does not need to know how the password
          is hashed or how the user is created. It only calls
          the service and handles the response.
        </p>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">6. Service Layer Request Flow</h2>

        <p>
          Let's understand how a request moves through different
          backend layers.
        </p>

        <CodeBlock
          code={`Client
  |
  v
Route
  |
  v
Middleware
  |
  v
Controller
  |
  | Calls service function
  v
Service
  |
  | Executes business logic
  v
Database
  |
  | Returns result
  v
Service
  |
  | Returns data
  v
Controller
  |
  | Sends HTTP response
  v
Client`}
        />

        <p>Each layer has a separate responsibility:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Route:</strong> Defines the endpoint.</li>
          <li><strong>Controller:</strong> Handles HTTP requests.</li>
          <li><strong>Service:</strong> Executes business logic.</li>
          <li><strong>Database:</strong> Stores and retrieves data.</li>
        </ul>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">7. Multiple Services</h2>

        <p>
          A large application can have multiple services according
          to different business features.
        </p>

        <CodeBlock
          code={`services/
│
├── user.service.js
├── auth.service.js
├── product.service.js
├── order.service.js
├── payment.service.js
└── email.service.js`}
        />

        <p>Examples:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li><strong>user.service.js:</strong> User-related operations.</li>
          <li><strong>auth.service.js:</strong> Login and authentication logic.</li>
          <li><strong>product.service.js:</strong> Product-related operations.</li>
          <li><strong>order.service.js:</strong> Order processing logic.</li>
          <li><strong>payment.service.js:</strong> Payment processing.</li>
          <li><strong>email.service.js:</strong> Email sending operations.</li>
        </ul>
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">8. Services vs Controllers</h2>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[450px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="p-3">Controllers</th>
                <th className="p-3">Services</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Handle HTTP requests.</td>
                <td className="p-3">Handle business logic.</td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Use req and res.</td>
                <td className="p-3">Generally independent of req and res.</td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Send HTTP responses.</td>
                <td className="p-3">Return data or throw errors.</td>
              </tr>
              <tr>
                <td className="p-3">Call service functions.</td>
                <td className="p-3">Execute application operations.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 9 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">9. Services vs Repositories</h2>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[450px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="p-3">Services</th>
                <th className="p-3">Repositories</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Contain business logic.</td>
                <td className="p-3">Contain data access logic.</td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Decide what operation should happen.</td>
                <td className="p-3">Handle how data is stored or retrieved.</td>
              </tr>
              <tr>
                <td className="p-3">Call repository methods.</td>
                <td className="p-3">Execute database queries.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Note: A separate Repository layer is optional.
          Small applications can allow services to communicate
          directly with models.
        </p>
      </section>

      {/* 10 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">10. Best Practices</h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Keep business logic inside services.</li>
          <li>Avoid using Express req and res inside services.</li>
          <li>Use meaningful service function names.</li>
          <li>Make services reusable wherever possible.</li>
          <li>Use async/await for asynchronous operations.</li>
          <li>Return useful data from service functions.</li>
          <li>Throw or propagate errors instead of sending HTTP responses.</li>
          <li>Keep each service focused on a particular feature.</li>
          <li>Avoid unnecessary service layers in small applications.</li>
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
                  <span className="mr-2 text-orange-500">
                    {index + 1}.
                  </span>
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

export default Services;
