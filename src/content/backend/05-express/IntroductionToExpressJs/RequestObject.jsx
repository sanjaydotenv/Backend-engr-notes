import React, { useState } from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const RequestObject = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion((prev) => (prev === index ? null : index));
  };

  const interviewQuestions = [
    {
      question: "What is the Request Object in Express.js?",
      answer:
        "The Request Object (req) contains information about the incoming HTTP request, such as parameters, query strings, headers, body, and HTTP method.",
    },
    {
      question: "What is req.params?",
      answer:
        "req.params contains values captured from dynamic route parameters.",
    },
    {
      question: "What is req.query?",
      answer:
        "req.query contains query string parameters passed in the URL after the question mark.",
    },
    {
      question: "What is req.body?",
      answer:
        "req.body contains data sent by the client in the request body. It requires suitable body-parsing middleware such as express.json().",
    },
    {
      question: "What is req.headers?",
      answer:
        "req.headers contains the HTTP headers sent by the client, such as Content-Type and Authorization.",
    },
    {
      question: "What is the difference between req.params and req.query?",
      answer:
        "req.params reads dynamic values from the URL path, whereas req.query reads values from the URL query string.",
    },
    {
      question: "What is req.method?",
      answer:
        "req.method returns the HTTP method used by the incoming request, such as GET, POST, PUT, or DELETE.",
    },
    {
      question: "What is req.originalUrl?",
      answer:
        "req.originalUrl provides the original request URL, including its query string, as received by the Express application.",
    },
  ];

  return (
    <div className="w-full space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <div className="space-y-3">
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          EXPRESS.JS FUNDAMENTALS / 06
        </p>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Request Object in Express.js
        </h1>

        <p className="max-w-3xl text-base leading-7 text-[var(--text-secondary)]">
          The Request Object (req) contains all the important information
          about an incoming HTTP request. Express provides different
          properties to access the URL, parameters, headers, body, and more.
        </p>
      </div>

      {/* 01 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">1. What is the Request Object?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Whenever a client sends a request to an Express server, Express
          provides a Request Object to the route handler.
        </p>

        <CodeBlock
          code={`app.get("/users", (req, res) => {
  console.log(req);

  res.send("Users Route");
});`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Here, <code className="text-[var(--accent-color)]">req</code>{" "}
          represents the incoming request. We use it to read information
          sent by the client.
        </p>
      </section>

      {/* 02 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">2. req.params</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code className="text-[var(--accent-color)]">req.params</code>{" "}
          property contains dynamic values captured from route parameters.
        </p>

        <CodeBlock
          code={`app.get("/users/:id", (req, res) => {
  const userId = req.params.id;

  res.json({
    userId,
  });
});`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Request:
        </p>

        <CodeBlock
          code={`GET /users/101`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Response:
        </p>

        <CodeBlock
          code={`{
  "userId": "101"
}`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          We can also define multiple route parameters.
        </p>

        <CodeBlock
          code={`app.get("/users/:userId/posts/:postId", (req, res) => {
  const { userId, postId } = req.params;

  res.json({
    userId,
    postId,
  });
});`}
        />
      </section>

      {/* 03 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">3. req.query</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code className="text-[var(--accent-color)]">req.query</code>{" "}
          property contains query string parameters from the URL.
          It is commonly used for filtering, searching, sorting, and
          pagination.
        </p>

        <CodeBlock
          code={`app.get("/products", (req, res) => {
  const { category, limit } = req.query;

  res.json({
    category,
    limit,
  });
});`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Request:
        </p>

        <CodeBlock
          code={`GET /products?category=mobile&limit=10`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Response:
        </p>

        <CodeBlock
          code={`{
  "category": "mobile",
  "limit": "10"
}`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <p className="font-semibold text-[var(--accent-color)]">
            Important
          </p>
          <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
            Query values are generally strings. If you need a number, convert
            it using Number() and validate the result.
          </p>
        </div>
      </section>

      {/* 04 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">4. req.body</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code className="text-[var(--accent-color)]">req.body</code>{" "}
          property contains data sent by the client in the request body.
          It is commonly used with POST, PUT, and PATCH requests.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          To read JSON data, register the built-in{" "}
          <code className="text-[var(--accent-color)]">express.json()</code>{" "}
          middleware.
        </p>

        <CodeBlock
          code={`app.use(express.json());

app.post("/users", (req, res) => {
  const userData = req.body;

  res.json({
    message: "User received",
    data: userData,
  });
});`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Example Request Body:
        </p>

        <CodeBlock
          code={`{
  "name": "Mayur",
  "email": "mayur@example.com"
}`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Access the data:
        </p>

        <CodeBlock
          code={`req.body.name
req.body.email`}
        />
      </section>

      {/* 05 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">5. req.headers</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          HTTP headers contain additional information about a request.
          They are commonly used for authentication, content types, and
          client information.
        </p>

        <CodeBlock
          code={`app.get("/profile", (req, res) => {
  const contentType = req.headers["content-type"];
  const authorization = req.headers.authorization;

  res.json({
    contentType,
    authorization,
  });
});`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          For example, an Authorization header may contain a Bearer token
          used to authenticate a user.
        </p>

        <CodeBlock
          code={`Authorization: Bearer your_access_token`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          You can also use <code className="text-[var(--accent-color)]">req.get()</code>{" "}
          to read a specific request header.
        </p>

        <CodeBlock
          code={`const contentType = req.get("Content-Type");`}
        />
      </section>

      {/* 06 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">6. req.method</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code className="text-[var(--accent-color)]">req.method</code>{" "}
          property returns the HTTP method used by the client.
        </p>

        <CodeBlock
          code={`app.use((req, res, next) => {
  console.log("HTTP Method:", req.method);

  next();
});`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Example Output:
        </p>

        <CodeBlock
          code={`HTTP Method: GET
HTTP Method: POST
HTTP Method: DELETE`}
        />
      </section>

      {/* 07 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">7. req.url and req.originalUrl</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          These properties provide information about the requested URL.
        </p>

        <CodeBlock
          code={`app.use((req, res, next) => {
  console.log("URL:", req.url);
  console.log("Original URL:", req.originalUrl);

  next();
});`}
        />

        <div className="space-y-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <div>
            <p className="font-semibold text-[var(--accent-color)]">
              req.url
            </p>
            <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">
              Returns the URL relative to the current mounted router or
              middleware.
            </p>
          </div>

          <div className="border-t border-[var(--border-color)] pt-3">
            <p className="font-semibold text-[var(--accent-color)]">
              req.originalUrl
            </p>
            <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">
              Returns the original request URL, including the query string,
              received by the Express application.
            </p>
          </div>
        </div>
      </section>

      {/* 08 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">8. req.path and req.protocol</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Express also provides properties to access specific parts of the
          incoming request.
        </p>

        <CodeBlock
          code={`app.get("/products", (req, res) => {
  res.json({
    path: req.path,
    protocol: req.protocol,
  });
});`}
        />

        <div className="space-y-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <div>
            <p className="font-semibold text-[var(--accent-color)]">
              req.path
            </p>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">
              Returns the URL path without the query string.
            </p>
          </div>

          <div className="border-t border-[var(--border-color)] pt-3">
            <p className="font-semibold text-[var(--accent-color)]">
              req.protocol
            </p>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">
              Returns the request protocol, such as http or https.
            </p>
          </div>
        </div>
      </section>

      {/* 09 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">9. Other Useful Request Properties</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Express provides several additional properties that help us
          understand incoming requests.
        </p>

        <div className="overflow-hidden rounded-xl border border-[var(--border-color)]">
          {[
            ["req.hostname", "Returns the hostname from the Host header."],
            ["req.ip", "Returns the remote IP address of the request."],
            ["req.secure", "Returns true when the request uses HTTPS."],
            ["req.cookies", "Contains parsed cookies when cookie-parser middleware is registered."],
            ["req.baseUrl", "Returns the URL path on which a router is mounted."],
          ].map(([property, description]) => (
            <div
              key={property}
              className="space-y-1 border-b border-[var(--border-color)] p-4 last:border-b-0"
            >
              <code className="text-sm font-semibold text-[var(--accent-color)]">
                {property}
              </code>
              <p className="text-sm leading-6 text-[var(--text-secondary)]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 10 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">10. Understanding the Complete Request</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Let's understand how different Request Object properties work
          together in a practical API endpoint.
        </p>

        <CodeBlock
          code={`import express from "express";

const app = express();

app.use(express.json());

app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  const search = req.query.search;
  const method = req.method;
  const userAgent = req.headers["user-agent"];

  res.json({
    userId,
    search,
    method,
    userAgent,
  });
});

app.listen(3000);`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Example Request:
        </p>

        <CodeBlock
          code={`GET /users/101?search=mayur`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Information accessed:
        </p>

        <CodeBlock
          code={`req.params.id       // "101"
req.query.search    // "mayur"
req.method          // "GET"
req.headers         // Request headers`}
        />
      </section>

      {/* Important Points */}
      <section className="space-y-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-5">
        <h2 className="text-xl font-bold">Important Points</h2>

        <ul className="space-y-3 text-sm leading-6 text-[var(--text-secondary)]">
          <li>• req represents the incoming HTTP request.</li>
          <li>• req.params accesses dynamic route parameters.</li>
          <li>• req.query accesses URL query parameters.</li>
          <li>• req.body accesses parsed request body data.</li>
          <li>• req.headers provides HTTP request headers.</li>
          <li>• req.method returns the HTTP method.</li>
          <li>• req.originalUrl returns the original request URL.</li>
          <li>• req.path returns the URL path without query parameters.</li>
          <li>• req.get() reads a specific request header.</li>
        </ul>
      </section>

      {/* Interview Questions */}
      <section className="space-y-4">
        <div>
          <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
            TEST YOUR KNOWLEDGE
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Interview Questions
          </h2>
        </div>

        <div className="space-y-3">
          {interviewQuestions.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)]"
            >
              <button
                type="button"
                onClick={() => toggleQuestion(index)}
                aria-expanded={openQuestion === index}
                className="flex w-full items-center justify-between gap-4 p-4 text-left"
              >
                <span className="text-sm font-medium">
                  <span className="mr-2 text-[var(--accent-color)]">
                    {String(index + 1).padStart(2, "0")}.
                  </span>
                  {item.question}
                </span>

                <span className="shrink-0 text-xl text-[var(--accent-color)]">
                  {openQuestion === index ? "−" : "+"}
                </span>
              </button>

              {openQuestion === index && (
                <div className="border-t border-[var(--border-color)] px-4 py-4">
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

export default RequestObject;