import React, { useState } from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const Utils = () => {
  const interviewQuestions = [
    {
      question: "What are Utils in Backend Development?",
      answer:
        "Utils are reusable helper functions that perform common tasks across different parts of an application.",
    },
    {
      question: "Why do we use Utility Functions?",
      answer:
        "They reduce code duplication, improve reusability, and keep application code clean and organized.",
    },
    {
      question: "What is the difference between Utils and Services?",
      answer:
        "Utils provide generic reusable functionality, while Services handle application-specific business logic.",
    },
    {
      question: "What is a Pure Function?",
      answer:
        "A pure function always returns the same output for the same input and does not produce side effects.",
    },
    {
      question: "What is a Helper Function?",
      answer:
        "A helper function is a small reusable function designed to perform a specific supporting task.",
    },
    {
      question: "Where should Utility Functions be stored?",
      answer: "They are commonly stored inside a utils or helpers directory.",
    },
    {
      question: "Can Utils contain async functions?",
      answer:
        "Yes. Utility functions can be synchronous or asynchronous depending on their requirements.",
    },
    {
      question: "What is Password Hashing?",
      answer:
        "Password hashing converts a password into a one-way hash so the original password is not stored directly.",
    },
    {
      question: "What is JWT?",
      answer:
        "JWT is a compact token format commonly used to securely transmit claims between parties.",
    },
    {
      question: "Should Utility Functions contain business logic?",
      answer:
        "Generally, no. Application-specific business rules should stay in the Service layer.",
    },
    {
      question: "What is the difference between a Utility and Middleware?",
      answer:
        "A Utility performs a reusable task when called, while Middleware runs as part of the request-response lifecycle.",
    },
    {
      question: "Should we create a utility function for every operation?",
      answer:
        "No. Create utilities for genuinely reusable functionality instead of introducing unnecessary abstractions.",
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
          BACKEND ARCHITECTURE / 09
        </p>

        <h1 className="mt-2 text-3xl font-bold">
          Utils in Backend Development
        </h1>

        <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">
          Utils, also known as utility functions or helper functions, are
          reusable functions that perform common tasks throughout an
          application. They help reduce code duplication and keep the codebase
          clean and maintainable.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">1. What are Utils?</h2>

        <p>
          Utils are small reusable functions that help us perform common
          operations without writing the same code repeatedly.
        </p>

        <p>Examples include:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Password hashing and comparison.</li>
          <li>JWT token generation and verification.</li>
          <li>Date and time formatting.</li>
          <li>String manipulation.</li>
          <li>Data transformation.</li>
          <li>File size formatting.</li>
        </ul>

        <CodeBlock
          code={`// utils/formatName.js

const formatName = (name) => {
  return name.trim().toLowerCase();
};

export default formatName;`}
        />

        <p>We can reuse this function anywhere in our application.</p>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">2. Why Do We Need Utils?</h2>

        <p>
          Imagine that we need to format a user's name in multiple controllers
          and services.
        </p>

        <p>Writing the same logic repeatedly creates code duplication.</p>

        <p>Instead, we create one utility function and reuse it.</p>

        <CodeBlock
          code={`Without Utils:

Controller A -> Same formatting logic
Controller B -> Same formatting logic
Controller C -> Same formatting logic


With Utils:

Controller A ----\\
Controller B -----+----> formatName()
Controller C ----/`}
        />

        <ul className="list-disc space-y-2 pl-6">
          <li>Code reusability.</li>
          <li>Less code duplication.</li>
          <li>Better code organization.</li>
          <li>Easier maintenance.</li>
          <li>Improved readability.</li>
        </ul>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">3. Utils Folder Structure</h2>

        <p>
          We commonly create a separate utils directory to organize reusable
          helper functions.
        </p>

        <CodeBlock
          code={`src/
|
|-- controllers/
|-- services/
|-- repositories/
|-- models/
|-- middlewares/
|
|-- utils/
|   |
|   |-- formatName.js
|   |-- generateToken.js
|   |-- password.js
|   |-- formatDate.js
|   |-- apiResponse.js
|   |-- calculateAge.js
|
|-- routes/
|-- config/
|-- app.js
|-- server.js`}
        />

        <p>Each utility file should ideally handle a specific reusable task.</p>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          4. Creating Reusable Utility Functions
        </h2>

        <p>Let's understand how to create and reuse utility functions.</p>

        <h3 className="font-semibold text-orange-500">String Utility</h3>

        <CodeBlock
          code={`// utils/string.utils.js

export const capitalize = (value) => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

export const removeSpaces = (value) => {
  return value.trim();
};

export const reverseString = (value) => {
  return value.split("").reverse().join("");
};`}
        />

        <h3 className="font-semibold text-orange-500">Using Utilities</h3>

        <CodeBlock
          code={`import {
  capitalize,
  removeSpaces,
  reverseString,
} from "../utils/string.utils.js";

console.log(capitalize("mayur"));
// Mayur

console.log(removeSpaces("  hello  "));
// hello

console.log(reverseString("hello"));
// olleh`}
        />
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">5. Password Utility</h2>

        <p>
          Password utilities help us hash passwords and compare entered
          passwords with stored hashes.
        </p>

        <p>We should never store plain-text passwords in the database.</p>

        <CodeBlock
          code={`// utils/password.utils.js

import bcrypt from "bcrypt";

// Hash password
export const hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

// Compare password
export const comparePassword = async (
  password,
  hashedPassword
) => {
  return await bcrypt.compare(password, hashedPassword);
};`}
        />

        <h3 className="font-semibold text-orange-500">
          Using Password Utility
        </h3>

        <CodeBlock
          code={`import {
  hashPassword,
  comparePassword,
} from "../utils/password.utils.js";

// Register
const hashedPassword = await hashPassword("myPassword123");

// Login
const isPasswordCorrect = await comparePassword(
  "myPassword123",
  hashedPassword
);

console.log(isPasswordCorrect);
// true`}
        />

        <p>
          Bcrypt automatically handles salts as part of its hashing process. The
          stored hash is used for password comparison.
        </p>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">6. JWT Utility</h2>

        <p>JWT utilities help generate and verify authentication tokens.</p>

        <CodeBlock
          code={`// utils/jwt.utils.js

import jwt from "jsonwebtoken";

// Generate access token
export const generateAccessToken = (payload) => {
  return jwt.sign(
    payload,
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "15m",
    }
  );
};

// Verify access token
export const verifyAccessToken = (token) => {
  return jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET
  );
};`}
        />

        <h3 className="font-semibold text-orange-500">Using JWT Utility</h3>

        <CodeBlock
          code={`import {
  generateAccessToken,
  verifyAccessToken,
} from "../utils/jwt.utils.js";

const token = generateAccessToken({
  id: "123",
  email: "mayur@example.com",
});

const decoded = verifyAccessToken(token);

console.log(decoded);`}
        />

        <p>
          Keep JWT secrets in environment variables and never hardcode
          production secrets in source code.
        </p>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">7. Date Utility</h2>

        <p>
          Date utilities help format dates consistently across the application.
        </p>

        <CodeBlock
          code={`// utils/date.utils.js

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

export const getCurrentYear = () => {
  return new Date().getFullYear();
};`}
        />

        <h3 className="font-semibold text-orange-500">Using Date Utility</h3>

        <CodeBlock
          code={`import {
  formatDate,
  getCurrentYear,
} from "../utils/date.utils.js";

console.log(formatDate("2026-11-10"));
// 10 Nov 2026

console.log(getCurrentYear());
// 2026`}
        />
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">8. API Response Utility</h2>

        <p>
          We can create a reusable helper to maintain a consistent API response
          structure.
        </p>

        <CodeBlock
          code={`// utils/apiResponse.js

class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode;
    this.success = statusCode < 400;
    this.message = message;
    this.data = data;
  }
}

export default ApiResponse;`}
        />

        <h3 className="font-semibold text-orange-500">
          Using API Response Utility
        </h3>

        <CodeBlock
          code={`import ApiResponse from "../utils/apiResponse.js";

const response = new ApiResponse(
  200,
  {
    name: "Mayur",
    email: "mayur@example.com",
  },
  "User fetched successfully"
);

res.status(response.statusCode).json(response);`}
        />

        <p>
          This helps maintain a consistent response format across multiple
          controllers.
        </p>
      </section>

      {/* 9 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">9. Pure Functions</h2>

        <p>A Pure Function is a function that:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Returns the same output for the same input.</li>
          <li>Does not modify external state.</li>
          <li>Does not produce side effects.</li>
        </ul>

        <CodeBlock
          code={`// Pure Function

const add = (a, b) => {
  return a + b;
};

console.log(add(10, 20));
// 30

console.log(add(10, 20));
// 30`}
        />

        <p>
          A pure function is predictable and easier to test. However, not every
          utility function must be pure.
        </p>
      </section>

      {/* 10 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">10. Utils vs Services</h2>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[450px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="p-3">Utils</th>
                <th className="p-3">Services</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Reusable helper functions.</td>
                <td className="p-3">Business logic.</td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Usually generic operations.</td>
                <td className="p-3">Application-specific operations.</td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Can be used by multiple layers.</td>
                <td className="p-3">
                  Usually coordinates repositories and utilities.
                </td>
              </tr>
              <tr>
                <td className="p-3">Example: hashPassword().</td>
                <td className="p-3">Example: registerUser().</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 11 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">11. Utils vs Middlewares</h2>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[450px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="p-3">Utils</th>
                <th className="p-3">Middlewares</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Reusable helper functions.</td>
                <td className="p-3">Request-response lifecycle functions.</td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Called when needed.</td>
                <td className="p-3">Registered in Express execution flow.</td>
              </tr>
              <tr>
                <td className="p-3">Example: generateToken().</td>
                <td className="p-3">Example: authMiddleware.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 12 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">12. Best Practices</h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Keep utility functions small and focused.</li>
          <li>Use meaningful function and file names.</li>
          <li>Reuse common logic instead of duplicating it.</li>
          <li>Keep business logic inside services.</li>
          <li>Handle errors appropriately in asynchronous utilities.</li>
          <li>Avoid unnecessary global state.</li>
          <li>Do not store secrets directly inside utility files.</li>
          <li>Write tests for important reusable functions.</li>
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

export default Utils;
