import React, { useState } from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const CustomAPIResponse = () => {
  const interviewQuestions = [
    {
      question: "What is Custom API Response?",
      answer:
        "It is a reusable response structure that maintains consistency across successful API responses.",
    },
    {
      question: "Why do we create a Custom API Response class?",
      answer:
        "To avoid repeating response structures and maintain a consistent API format.",
    },
    {
      question: "What is the purpose of statusCode?",
      answer:
        "It represents the HTTP status code returned by the API, such as 200, 201, or 204.",
    },
    {
      question: "What is the purpose of success?",
      answer: "It indicates whether the API operation completed successfully.",
    },
    {
      question: "What is the purpose of message?",
      answer: "It provides a readable description of the API operation result.",
    },
    {
      question: "What is the purpose of data?",
      answer:
        "It contains the actual result returned by the API, such as a user, product, or list of records.",
    },
    {
      question:
        "What is the difference between Custom API Error and Custom API Response?",
      answer:
        "Custom API Error represents failures, while Custom API Response represents successful operations.",
    },
    {
      question: "Does Custom API Response send the HTTP response?",
      answer:
        "No. It only creates a structured response object. The controller sends it using res.status().json().",
    },
    {
      question: "What is the difference between 200 and 201?",
      answer:
        "200 means the request succeeded, while 201 means a resource was successfully created.",
    },
    {
      question: "What is Pagination Metadata?",
      answer:
        "It contains information such as current page, page size, total records, and total pages.",
    },
    {
      question: "Should every API response have the same structure?",
      answer:
        "A consistent structure is recommended, although HTTP methods and response requirements may require different response formats.",
    },
    {
      question: "What is the difference between res.json() and res.send()?",
      answer:
        "res.json() sends a JSON response, while res.send() can send different types of response data.",
    },
    {
      question: "Can Custom API Response be used in multiple controllers?",
      answer:
        "Yes. It can be imported and reused across different controllers.",
    },
    {
      question: "Should we return passwords in API responses?",
      answer:
        "No. Passwords and other sensitive information should never be exposed in API responses.",
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
          BACKEND ARCHITECTURE / 15
        </p>

        <h1 className="mt-2 text-3xl font-bold">Custom API Response</h1>

        <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">
          Custom API Response is a reusable response structure used to maintain
          consistency across successful API responses. It organizes information
          such as HTTP status code, success status, message, and response data.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">1. What is API Response?</h2>

        <p>
          Whenever a client sends a request to a backend, the server processes
          it and sends a response.
        </p>

        <p>Example:</p>

        <CodeBlock
          code={`GET /api/users/123

Response:

{
  "message": "User fetched successfully",
  "name": "Mayur"
}`}
        />

        <p>
          This information returned by the server is called an API response.
        </p>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          2. Problem Without Custom API Response
        </h2>

        <p>
          Imagine different controllers return different response structures.
        </p>

        <CodeBlock
          code={`// Controller 1

res.status(200).json({
  message: "User fetched",
  user: user,
});

// Controller 2

res.status(200).json({
  success: true,
  data: product,
});

// Controller 3

res.status(200).json({
  result: order,
  message: "Order created",
});`}
        />

        <p>
          This makes the frontend handle different response structures for
          different APIs.
        </p>

        <p>Problems:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Inconsistent API response structure.</li>
          <li>Repeated response code.</li>
          <li>Frontend integration becomes difficult.</li>
          <li>Maintaining response formats becomes harder.</li>
        </ul>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">3. What is Custom API Response?</h2>

        <p>
          Instead of returning different response formats, we create one common
          structure for successful responses.
        </p>

        <CodeBlock
          code={`{
  "statusCode": 200,
  "success": true,
  "message": "User fetched successfully",
  "data": {
    "name": "Mayur",
    "email": "mayur@example.com"
  }
}`}
        />

        <p>Now every controller can follow the same response format.</p>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          4. Understanding Response Properties
        </h2>

        <h3 className="font-semibold text-orange-500">statusCode</h3>

        <p>Contains the HTTP status code of the response.</p>

        <CodeBlock code={`statusCode: 200`} />

        <h3 className="font-semibold text-orange-500">success</h3>

        <p>Indicates whether the operation was successful.</p>

        <CodeBlock code={`success: true`} />

        <h3 className="font-semibold text-orange-500">message</h3>

        <p>Contains a readable message describing the result.</p>

        <CodeBlock code={`message: "User fetched successfully"`} />

        <h3 className="font-semibold text-orange-500">data</h3>

        <p>Contains the actual data returned by the API.</p>

        <CodeBlock
          code={`data: {
  name: "Mayur",
  email: "mayur@example.com"
}`}
        />
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          5. Creating Custom API Response Class
        </h2>

        <p>
          Create a file named <code>ApiResponse.js</code>
          inside the utils directory.
        </p>

        <CodeBlock
          code={`// utils/ApiResponse.js

class ApiResponse {
  constructor(
    statusCode,
    data,
    message = "Success"
  ) {
    this.statusCode = statusCode;

    this.success = statusCode >= 200 && statusCode < 300;

    this.message = message;

    this.data = data;
  }
}

export default ApiResponse;`}
        />

        <p>Let's understand the constructor:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>statusCode:</strong> HTTP response status.
          </li>
          <li>
            <strong>data:</strong> Actual response data.
          </li>
          <li>
            <strong>message:</strong> Description of the operation.
          </li>
          <li>
            <strong>success:</strong> Automatically determined from the HTTP
            status code.
          </li>
        </ul>

        <p>
          For example, 200 and 201 produce <code>success: true</code>.
        </p>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">6. Using Custom API Response</h2>

        <p>We can now create a response object anywhere in our backend.</p>

        <CodeBlock
          code={`import ApiResponse from "../utils/ApiResponse.js";

const response = new ApiResponse(
  200,
  { name: "Mayur" },
  "User fetched successfully"
);

console.log(response);`}
        />

        <p>Output:</p>

        <CodeBlock
          code={`{
  statusCode: 200,
  success: true,
  message: "User fetched successfully",
  data: {
    name: "Mayur"
  }
}`}
        />

        <p>
          Remember: creating this object does not automatically send an HTTP
          response.
        </p>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          7. Using Custom API Response in Controller
        </h2>

        <p>Let's use ApiResponse inside a user controller.</p>

        <CodeBlock
          code={`// controllers/user.controller.js

import ApiResponse from "../utils/ApiResponse.js";
import { getUserById } from "../services/user.service.js";

export const getUser = async (req, res) => {
  const user = await getUserById(req.params.id);

  const response = new ApiResponse(
    200,
    user,
    "User fetched successfully"
  );

  res.status(response.statusCode).json(response);
};`}
        />

        <p>
          Here the controller creates the response object and sends it to the
          client using Express.
        </p>
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          8. Using Custom API Response for User Registration
        </h2>

        <p>
          When a new user is registered successfully, we generally return HTTP
          status code 201.
        </p>

        <CodeBlock
          code={`// controllers/user.controller.js

import ApiResponse from "../utils/ApiResponse.js";
import { registerUser } from "../services/user.service.js";

export const registerUserController = async (req, res) => {
  const user = await registerUser(req.body);

  const response = new ApiResponse(
    201,
    user,
    "User registered successfully"
  );

  res.status(response.statusCode).json(response);
};`}
        />

        <p>Example response:</p>

        <CodeBlock
          code={`{
  "statusCode": 201,
  "success": true,
  "message": "User registered successfully",
  "data": {
    "_id": "123456",
    "name": "Mayur",
    "email": "mayur@example.com"
  }
}`}
        />

        <p>
          Never include the user's password or other sensitive information in
          the response. Make sure the returned user object contains only safe
          fields.
        </p>
      </section>

      {/* 9 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          9. Custom API Response with Pagination
        </h2>

        <p>
          When an API returns multiple records, we often need pagination
          information along with the data.
        </p>

        <p>Example:</p>

        <CodeBlock
          code={`{
  "statusCode": 200,
  "success": true,
  "message": "Users fetched successfully",
  "data": [
    {
      "name": "Mayur"
    },
    {
      "name": "Rahul"
    }
  ],
  "pagination": {
    "currentPage": 1,
    "limit": 10,
    "totalRecords": 50,
    "totalPages": 5
  }
}`}
        />

        <p>
          Pagination metadata helps the frontend display page numbers, total
          records, and navigation controls.
        </p>

        <p>
          Pagination can be added through a separate response option or metadata
          property when needed.
        </p>
      </section>

      {/* 10 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          10. Custom API Error vs Custom API Response
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="p-3">Custom API Error</th>
                <th className="p-3">Custom API Response</th>
              </tr>
            </thead>

            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Handles failures</td>
                <td className="p-3">Represents successful results</td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Usually extends Error</td>
                <td className="p-3">Usually a normal class</td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Used with throw</td>
                <td className="p-3">Used with res.json()</td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Handled by error middleware</td>
                <td className="p-3">Sent by the controller</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 11 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          11. Common HTTP Success Status Codes
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
                ["200", "OK – Request completed successfully."],
                ["201", "Created – Resource created successfully."],
                ["202", "Accepted – Request accepted for processing."],
                [
                  "204",
                  "No Content – Request succeeded without a response body.",
                ],
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

        <p>
          Note: HTTP 204 responses must not contain a response body. For such
          responses, use <code>res.status(204).end()</code>
          instead of sending an ApiResponse JSON object.
        </p>
      </section>

      {/* 12 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">12. Complete API Response Flow</h2>

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
      v
Repository
      |
      v
Database
      |
      v
Data Returned
      |
      v
Controller
      |
      |-- Create ApiResponse
      |-- Set HTTP status code
      |-- Send JSON response
      |
      v
Client Receives Response`}
        />
      </section>

      {/* 13 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">13. Best Practices</h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Maintain a consistent response structure.</li>
          <li>Create a reusable ApiResponse class or helper.</li>
          <li>Use appropriate HTTP status codes.</li>
          <li>Keep response messages meaningful.</li>
          <li>Never expose passwords or private information.</li>
          <li>Keep pagination metadata consistent.</li>
          <li>Do not send a body with HTTP 204.</li>
          <li>Keep API response formatting inside a common utility.</li>
          <li>Avoid unnecessary nested response objects.</li>
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

export default CustomAPIResponse;
