import React, { useState } from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const BuiltInMiddleware = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion((prev) => (prev === index ? null : index));
  };

  const interviewQuestions = [
    {
      question: "What is built-in middleware in Express.js?",
      answer:
        "Built-in middleware is provided by Express itself. It helps perform common tasks such as parsing request bodies and serving static files.",
    },
    {
      question: "What does express.json() do?",
      answer:
        "It parses incoming requests containing JSON data and makes the parsed data available in req.body.",
    },
    {
      question: "What is the use of express.urlencoded()?",
      answer:
        "It parses incoming URL-encoded form data and makes the parsed values available in req.body.",
    },
    {
      question: "What is the purpose of express.static()?",
      answer:
        "It serves static files such as HTML, CSS, JavaScript, images, and other assets from a directory.",
    },
    {
      question: "What is the difference between express.json() and express.urlencoded()?",
      answer:
        "express.json() parses JSON request bodies, while express.urlencoded() parses URL-encoded form submissions.",
    },
    {
      question: "What does the extended option do in express.urlencoded()?",
      answer:
        "When true, it allows parsing of rich URL-encoded data, including nested objects. When false, it uses simpler key-value parsing.",
    },
    {
      question: "Do we need to install body-parser separately?",
      answer:
        "For common JSON and URL-encoded parsing, no. Express provides express.json() and express.urlencoded() directly.",
    },
  ];

  return (
    <div className="w-full space-y-10 text-[var(--text-primary)]">

      {/* Header */}
      <div className="space-y-3">
        <p className="text-xs font-semibold tracking-[0.2em] text-[var(--accent-color)]">
          EXPRESS.JS FUNDAMENTALS / 09
        </p>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Built-in Middleware in Express.js
        </h1>

        <p className="max-w-3xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
          Express.js provides built-in middleware for common tasks like
          parsing request data and serving static files. These middleware
          functions help us handle requests without installing additional
          packages.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">1. What is Built-in Middleware?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Built-in middleware is middleware that comes directly with
          Express.js. We can use it without installing any third-party
          package.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          For example, when a client sends JSON data, Express needs to parse
          that data before we can access it through <code>req.body</code>.
          We can use <code>express.json()</code> for this.
        </p>

        <CodeBlock
          code={`import express from "express";

const app = express();

// Built-in middleware
app.use(express.json());

app.post("/users", (req, res) => {
  console.log(req.body);

  res.json({
    message: "User data received",
    data: req.body,
  });
});

app.listen(3000);`}
        />
      </section>

      {/* 2 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          2. Types of Built-in Middleware
        </h2>

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          Express provides these commonly used built-in middleware functions:
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              name: "express.json()",
              description: "Parses incoming JSON request bodies.",
            },
            {
              name: "express.urlencoded()",
              description: "Parses URL-encoded form data.",
            },
            {
              name: "express.static()",
              description: "Serves static files from a directory.",
            },
            {
              name: "express.text()",
              description: "Parses incoming request bodies as text.",
            },
            {
              name: "express.raw()",
              description: "Parses incoming request bodies as Buffer data.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4"
            >
              <h3 className="mb-2 font-semibold text-[var(--accent-color)]">
                {item.name}
              </h3>
              <p className="text-sm leading-6 text-[var(--text-secondary)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          3. express.json()
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          <code>express.json()</code> parses incoming requests containing
          JSON data. After parsing, the data becomes available inside
          <code> req.body</code>.
        </p>

        <CodeBlock
          code={`app.use(express.json());

app.post("/users", (req, res) => {
  const { name, email } = req.body;

  res.json({
    message: "User created",
    name,
    email,
  });
});`}
        />

        <div className="space-y-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <h3 className="font-semibold">Example Request Body</h3>

          <CodeBlock
            code={`{
  "name": "Mayur",
  "email": "mayur@example.com"
}`}
          />

          <h3 className="font-semibold">Accessing Data</h3>

          <CodeBlock
            code={`const { name, email } = req.body;

console.log(name);
console.log(email);`}
          />
        </div>

        <div className="rounded-xl border border-[var(--accent-color)]/30 bg-[var(--accent-background)] p-4">
          <p className="text-sm leading-7">
            <strong>Important:</strong> Without registering JSON parsing
            middleware, Express does not automatically parse incoming JSON
            request bodies.
          </p>
        </div>
      </section>

      {/* 4 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          4. express.urlencoded()
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          <code>express.urlencoded()</code> parses data sent through
          HTML forms using the URL-encoded format.
        </p>

        <CodeBlock
          code={`app.use(express.urlencoded({ extended: true }));

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  res.json({
    username,
    message: "Form data received",
  });
});`}
        />

        <h3 className="font-semibold">HTML Form Example</h3>

        <CodeBlock
          code={`<form action="/login" method="POST">
  <input
    type="text"
    name="username"
    placeholder="Username"
  />

  <input
    type="password"
    name="password"
    placeholder="Password"
  />

  <button type="submit">Login</button>
</form>`}
        />

        <h3 className="font-semibold">Understanding extended</h3>

        <CodeBlock
          code={`// Supports rich URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Uses simpler URL-encoded parsing
app.use(express.urlencoded({ extended: false }));`}
        />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          The <code>extended</code> option controls how URL-encoded data is
          parsed. Use <code>true</code> when you need support for nested
          objects and richer structures.
        </p>
      </section>

      {/* 5 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          5. express.static()
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          <code>express.static()</code> is used to serve static files such
          as images, CSS, JavaScript, and HTML files from a directory.
        </p>

        <h3 className="font-semibold">Project Structure</h3>

        <CodeBlock
          code={`project/
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── images/
│       └── logo.png
│
└── server.js`}
        />

        <h3 className="font-semibold">Serving Static Files</h3>

        <CodeBlock
          code={`import express from "express";

const app = express();

app.use(express.static("public"));

app.listen(3000);`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Now files inside the <code>public</code> directory can be accessed
          directly through their URLs.
        </p>

        <CodeBlock
          code={`http://localhost:3000/index.html

http://localhost:3000/style.css

http://localhost:3000/images/logo.png`}
        />

        <h3 className="font-semibold">Using a URL Prefix</h3>

        <CodeBlock
          code={`app.use("/static", express.static("public"));`}
        />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          Now the same image can be accessed using:
        </p>

        <CodeBlock
          code={`http://localhost:3000/static/images/logo.png`}
        />
      </section>

      {/* 6 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          6. express.text()
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          <code>express.text()</code> parses incoming request bodies as
          plain text. The parsed value is available in <code>req.body</code>
          as a string.
        </p>

        <CodeBlock
          code={`app.use(express.text());

app.post("/message", (req, res) => {
  console.log(req.body);

  res.send("Text received successfully");
});`}
        />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          For example, if a client sends <code>Hello Express</code> as
          plain text, <code>req.body</code> will contain that string.
        </p>
      </section>

      {/* 7 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          7. express.raw()
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          <code>express.raw()</code> parses incoming request bodies as
          raw binary data and provides the result as a Node.js
          <code> Buffer</code>.
        </p>

        <CodeBlock
          code={`app.use(express.raw());

app.post("/upload", (req, res) => {
  console.log(req.body);

  console.log(Buffer.isBuffer(req.body));

  res.send("Raw data received");
});`}
        />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          It can be useful when working with binary data or services that
          require the original request payload.
        </p>
      </section>

      {/* 8 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          8. Middleware Execution Order
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Middleware runs in the order in which it is registered. Therefore,
          body-parsing middleware should be registered before routes that
          need to access <code>req.body</code>.
        </p>

        <CodeBlock
          code={`import express from "express";

const app = express();

// 1. Parse JSON data
app.use(express.json());

// 2. Parse form data
app.use(express.urlencoded({ extended: true }));

// 3. Serve static files
app.use(express.static("public"));

// 4. Handle routes
app.post("/users", (req, res) => {
  res.json({
    data: req.body,
  });
});

app.listen(3000);`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <h3 className="mb-3 font-semibold">Request Flow</h3>

          <div className="flex flex-col items-center gap-2 text-center text-sm">
            {[
              "Incoming Request",
              "express.json()",
              "express.urlencoded()",
              "Route Handler",
              "Response",
            ].map((item, index, array) => (
              <React.Fragment key={item}>
                <div
                  className={`w-full max-w-xs rounded-lg border p-3 ${
                    index === 0 || index === array.length - 1
                      ? "border-[var(--accent-color)] bg-[var(--accent-background)] text-[var(--accent-color)]"
                      : "border-[var(--border-color)] bg-[var(--bg-tertiary)]"
                  }`}
                >
                  {item}
                </div>

                {index !== array.length - 1 && (
                  <span className="text-lg text-[var(--accent-color)]">
                    ↓
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 9 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          9. Built-in vs Third-party Middleware
        </h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[450px] text-left text-sm">
            <thead className="bg-[var(--bg-tertiary)]">
              <tr>
                <th className="p-3">Built-in Middleware</th>
                <th className="p-3">Third-party Middleware</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[var(--border-color)]">
              <tr>
                <td className="p-3">Provided by Express</td>
                <td className="p-3">Created by external developers</td>
              </tr>
              <tr>
                <td className="p-3">No separate installation needed</td>
                <td className="p-3">Usually requires installation</td>
              </tr>
              <tr>
                <td className="p-3">
                  express.json()
                </td>
                <td className="p-3">
                  cors, morgan
                </td>
              </tr>
              <tr>
                <td className="p-3">
                  express.static()
                </td>
                <td className="p-3">
                  helmet, multer
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Important Points */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Important Points</h2>

        <div className="space-y-3">
          {[
            "Built-in middleware comes directly with Express.js.",
            "express.json() parses JSON request bodies.",
            "express.urlencoded() parses URL-encoded form data.",
            "express.static() serves files from a directory.",
            "express.text() parses request bodies as strings.",
            "express.raw() parses request bodies as Buffer objects.",
            "Middleware should be registered before routes that depend on it.",
            "Express 4.16 and later include express.json() and express.urlencoded(), so body-parser is not required for these common tasks.",
          ].map((point, index) => (
            <div key={index} className="flex gap-3 text-sm leading-6">
              <span className="font-bold text-[var(--accent-color)]">
                ✓
              </span>
              <p className="text-[var(--text-secondary)]">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interview Questions */}
      <section className="space-y-4">
        <div>
          <p className="text-xs font-semibold tracking-widest text-[var(--accent-color)]">
            TEST YOUR KNOWLEDGE
          </p>

          <h2 className="mt-2 text-xl font-semibold">
            Interview Questions
          </h2>
        </div>

        <div className="space-y-3">
          {interviewQuestions.map((item, index) => {
            const isOpen = openQuestion === index;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)]"
              >
                <button
                  type="button"
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-4 text-left"
                >
                  <span className="text-sm font-medium">
                    <span className="mr-2 text-[var(--accent-color)]">
                      {String(index + 1).padStart(2, "0")}.
                    </span>
                    {item.question}
                  </span>

                  <span className="shrink-0 text-xl text-[var(--accent-color)]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-[var(--border-color)] px-4 py-4">
                    <p className="text-sm leading-7 text-[var(--text-secondary)]">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default BuiltInMiddleware;