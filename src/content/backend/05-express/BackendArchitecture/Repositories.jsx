import React, { useState } from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const Repositories = () => {
  const interviewQuestions = [
    {
      question: "What is a Repository in Backend Development?",
      answer:
        "A Repository is a layer responsible for handling database operations and separating data access logic from business logic.",
    },
    {
      question: "What is the Repository Pattern?",
      answer:
        "Repository Pattern is a design pattern that provides an abstraction between application logic and data storage.",
    },
    {
      question: "Why do we use Repositories?",
      answer:
        "Repositories organize database operations, reduce code duplication, and make data access easier to maintain and test.",
    },
    {
      question: "What is Data Access Logic?",
      answer:
        "Data Access Logic includes operations such as finding, creating, updating, and deleting records in a database.",
    },
    {
      question: "What is the difference between Service and Repository?",
      answer:
        "Service handles business logic, while Repository handles database access operations.",
    },
    {
      question: "Can a Repository contain business logic?",
      answer:
        "Generally, no. A Repository should focus on data access, while business rules belong in the Service layer.",
    },
    {
      question: "Can one Service use multiple Repositories?",
      answer:
        "Yes. A service can use multiple repositories when a business operation requires data from different collections or tables.",
    },
    {
      question: "What is Database Abstraction?",
      answer:
        "Database Abstraction hides the implementation details of database operations from the application logic.",
    },
    {
      question: "Can Repositories work with MongoDB and SQL databases?",
      answer:
        "Yes. The Repository Pattern can be implemented with different databases such as MongoDB, PostgreSQL, and MySQL.",
    },
    {
      question: "Is the Repository Pattern mandatory in Express.js?",
      answer:
        "No. It is an optional architectural pattern, commonly useful in medium and large applications.",
    },
    {
      question: "What is the difference between Model and Repository?",
      answer:
        "A Model defines the structure and behavior of database records, while a Repository provides methods to access and manage those records.",
    },
    {
      question: "How does a Repository improve testing?",
      answer:
        "It allows database operations to be mocked or replaced, making services easier to test independently.",
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
          BACKEND ARCHITECTURE / 06
        </p>

        <h1 className="mt-2 text-3xl font-bold">
          Repositories in Backend Development
        </h1>

        <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">
          Repositories are responsible for handling database access operations.
          They separate data access logic from business logic and provide a
          clean interface for services to communicate with the database.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">1. What are Repositories?</h2>

        <p>
          A Repository is a layer that contains database-related operations such
          as creating, reading, updating, and deleting records.
        </p>

        <p>
          Instead of writing database queries directly inside services, we can
          create repository functions to handle them.
        </p>

        <CodeBlock
          code={`// repositories/user.repository.js

import User from "../models/user.model.js";

export const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

export const createUser = async (userData) => {
  return await User.create(userData);
};`}
        />

        <p>
          Here, the repository handles database queries using the User model.
        </p>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">2. Why Do We Need Repositories?</h2>

        <p>
          Without repositories, database queries may be written directly inside
          service functions.
        </p>

        <p>As an application grows, this can cause:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Repeated database queries across multiple services.</li>
          <li>Business logic becoming tightly coupled to database code.</li>
          <li>Difficult database implementation changes.</li>
          <li>More complicated unit testing.</li>
          <li>Difficulty maintaining database operations.</li>
        </ul>

        <p>
          Repositories solve these problems by centralizing data access
          operations.
        </p>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          3. What is the Repository Pattern?
        </h2>

        <p>
          Repository Pattern is a design pattern that separates application
          logic from data access logic.
        </p>

        <p>
          Services do not need to know how database queries are executed. They
          only call repository methods.
        </p>

        <CodeBlock
          code={`Service
   |
   | Calls repository function
   v
Repository
   |
   | Executes database query
   v
Model
   |
   v
Database`}
        />

        <p>
          This creates a clear separation between business logic and database
          implementation.
        </p>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">4. Creating a Repository</h2>

        <p>Let's create a user repository using MongoDB and Mongoose.</p>

        <CodeBlock
          code={`// repositories/user.repository.js

import User from "../models/user.model.js";

// Find all users
export const findAllUsers = async () => {
  return await User.find();
};

// Find user by ID
export const findUserById = async (id) => {
  return await User.findById(id);
};

// Find user by email
export const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

// Create user
export const createUser = async (userData) => {
  return await User.create(userData);
};

// Update user
export const updateUser = async (id, updateData) => {
  return await User.findByIdAndUpdate(
    id,
    updateData,
    {
      new: true,
      runValidators: true,
    }
  );
};

// Delete user
export const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};`}
        />

        <p>
          These functions perform common database operations using the Mongoose
          User model.
        </p>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          5. Connecting Repository with Service
        </h2>

        <p>
          Services import repository functions and use them to perform database
          operations.
        </p>

        <h3 className="font-semibold text-orange-500">Repository</h3>

        <CodeBlock
          code={`// repositories/user.repository.js

import User from "../models/user.model.js";

export const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

export const createUser = async (userData) => {
  return await User.create(userData);
};`}
        />

        <h3 className="font-semibold text-orange-500">Service</h3>

        <CodeBlock
          code={`// services/user.service.js

import bcrypt from "bcrypt";

import {
  findUserByEmail,
  createUser,
} from "../repositories/user.repository.js";

export const registerUser = async (userData) => {
  const { name, email, password } = userData;

  const existingUser = await findUserByEmail(email);

  if (existingUser) {
    throw new Error("Email already registered");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await createUser({
    name,
    email,
    password: hashedPassword,
  });

  return user;
};`}
        />

        <p>
          Notice that the service does not directly execute Mongoose queries. It
          uses repository functions.
        </p>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">6. Complete Backend Request Flow</h2>

        <p>Now let's understand how all the layers work together.</p>

        <CodeBlock
          code={`Client
  |
  v
Route
  |
  v
Controller
  |
  | Calls service
  v
Service
  |
  | Calls repository
  v
Repository
  |
  | Uses model
  v
Model
  |
  v
Database
  |
  | Returns data
  v
Repository
  |
  v
Service
  |
  v
Controller
  |
  v
Client`}
        />

        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Route:</strong> Defines the API endpoint.
          </li>
          <li>
            <strong>Controller:</strong> Handles the HTTP request.
          </li>
          <li>
            <strong>Service:</strong> Executes business logic.
          </li>
          <li>
            <strong>Repository:</strong> Executes database operations.
          </li>
          <li>
            <strong>Model:</strong> Defines database structure and behavior.
          </li>
          <li>
            <strong>Database:</strong> Stores and retrieves records.
          </li>
        </ul>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">7. Database Abstraction</h2>

        <p>
          Database Abstraction means hiding the internal details of database
          operations from other application layers.
        </p>

        <p>For example, a service only needs to call:</p>

        <CodeBlock code={`const user = await findUserByEmail(email);`} />

        <p>
          It does not need to know whether the repository uses Mongoose,
          PostgreSQL, or another database technology.
        </p>

        <p>
          If the database implementation changes, we can often update the
          repository without changing the business logic in the service.
        </p>
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">8. Model vs Repository</h2>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[450px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="p-3">Model</th>
                <th className="p-3">Repository</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Defines data structure.</td>
                <td className="p-3">Handles data access operations.</td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Defines schema and model behavior.</td>
                <td className="p-3">Provides methods to query data.</td>
              </tr>
              <tr>
                <td className="p-3">Example: Mongoose User model.</td>
                <td className="p-3">Example: findUserByEmail().</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 9 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">9. Service vs Repository</h2>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[450px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="p-3">Service</th>
                <th className="p-3">Repository</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Contains business logic.</td>
                <td className="p-3">Contains data access logic.</td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Decides what operation should happen.</td>
                <td className="p-3">Handles how data is accessed.</td>
              </tr>
              <tr>
                <td className="p-3">Calls repositories.</td>
                <td className="p-3">Uses models or database clients.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 10 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          10. Advantages of Repository Pattern
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Separation of Concerns:</strong> Separates business logic
            from database operations.
          </li>
          <li>
            <strong>Reusability:</strong> Database methods can be reused.
          </li>
          <li>
            <strong>Maintainability:</strong> Database code stays organized.
          </li>
          <li>
            <strong>Testability:</strong> Repository methods can be mocked.
          </li>
          <li>
            <strong>Database Abstraction:</strong> Hides database implementation
            details.
          </li>
          <li>
            <strong>Reduced Duplication:</strong> Common queries can be
            maintained in one place.
          </li>
        </ul>
      </section>

      {/* 11 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          11. Limitations of Repository Pattern
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Introduces additional files and code.</li>
          <li>Can be unnecessary for small applications.</li>
          <li>
            May create unnecessary abstraction over simple ORM operations.
          </li>
          <li>
            Requires proper design to avoid duplicating ORM functionality.
          </li>
        </ul>

        <p>
          Repository Pattern is useful when an application has complex data
          access requirements, multiple data sources, or a strong need for
          testable database abstractions.
        </p>
      </section>

      {/* 12 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">12. Best Practices</h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Keep database queries inside repositories.</li>
          <li>Use meaningful repository function names.</li>
          <li>Keep business logic inside services.</li>
          <li>Return database results from repository functions.</li>
          <li>Handle database errors consistently.</li>
          <li>Avoid sending HTTP responses from repositories.</li>
          <li>
            Keep repositories focused on specific data sources or entities.
          </li>
          <li>
            Do not create unnecessary abstractions for simple applications.
          </li>
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

export default Repositories;
