import React, { useState } from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const ResponseObject = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion((prev) => (prev === index ? null : index));
  };

  const interviewQuestions = [
    {
      question: "What is the Response Object in Express.js?",
      answer:
        "The Response Object (res) provides methods to send data, set HTTP status codes, headers, cookies, and other responses back to the client.",
    },
    {
      question: "What is the difference between res.send() and res.json()?",
      answer:
        "res.send() sends different types of responses, while res.json() specifically serializes and sends JSON data with the appropriate content type.",
    },
    {
      question: "What does res.status() do?",
      answer:
        "res.status() sets the HTTP status code for the response. It can be chained with other response methods.",
    },
    {
      question: "What is res.sendStatus()?",
      answer:
        "res.sendStatus() sets the HTTP status code and sends its standard status message as the response body.",
    },
    {
      question: "What is the purpose of res.redirect()?",
      answer:
        "res.redirect() redirects the client to another URL using an HTTP redirect response.",
    },
    {
      question: "What is the difference between res.set() and res.get()?",
      answer:
        "res.set() sets a response header, whereas res.get() reads a response header that has already been set.",
    },
    {
      question: "What does res.end() do?",
      answer:
        "res.end() ends the response process without sending a response body unless one is provided.",
    },
    {
      question: "What happens if we send a response twice?",
      answer:
        "Express cannot send two responses for the same request. It can cause the 'Cannot set headers after they are sent to the client' error.",
    },
  ];

  return (
    <div className="w-full space-y-8 text-[var(--text-primary)]">

      {/* Header */}
      <div className="space-y-3">
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          EXPRESS.JS FUNDAMENTALS / 07
        </p>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Response Object in Express.js
        </h1>

        <p className="max-w-3xl text-base leading-7 text-[var(--text-secondary)]">
          The Response Object (res) is used to send data and information from
          the server back to the client. Express provides different methods
          to send responses, set status codes, manage headers, and redirect
          requests.
        </p>
      </div>

      {/* 01 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">1. What is the Response Object?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Whenever a client sends a request, the server processes it and
          sends a response. Express provides the{" "}
          <code className="text-[var(--accent-color)]">res</code> object
          inside route handlers to manage that response.
        </p>

        <CodeBlock
          code={`app.get("/", (req, res) => {
  res.send("Welcome to Express!");
});`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Here, <code className="text-[var(--accent-color)]">res</code>{" "}
          represents the outgoing response that the server sends to the
          client.
        </p>
      </section>

      {/* 02 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">2. res.send()</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code className="text-[var(--accent-color)]">res.send()</code>{" "}
          method sends a response to the client. It can send strings, HTML,
          buffers, and objects.
        </p>

        <CodeBlock
          code={`// Send a string
app.get("/message", (req, res) => {
  res.send("Hello from server!");
});

// Send HTML
app.get("/page", (req, res) => {
  res.send("<h1>Welcome</h1>");
});

// Send an object
app.get("/user", (req, res) => {
  res.send({
    name: "Mayur",
    role: "Developer",
  });
});`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Express automatically handles the appropriate response content
          type for supported values.
        </p>
      </section>

      {/* 03 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">3. res.json()</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code className="text-[var(--accent-color)]">res.json()</code>{" "}
          method sends a JSON response to the client. It is commonly used
          when building REST APIs.
        </p>

        <CodeBlock
          code={`app.get("/users", (req, res) => {
  res.json({
    success: true,
    message: "Users fetched successfully",
    data: [
      {
        id: 1,
        name: "Mayur",
      },
      {
        id: 2,
        name: "Rahul",
      },
    ],
  });
});`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Example Response:
        </p>

        <CodeBlock
          code={`{
  "success": true,
  "message": "Users fetched successfully",
  "data": [
    {
      "id": 1,
      "name": "Mayur"
    },
    {
      "id": 2,
      "name": "Rahul"
    }
  ]
}`}
        />
      </section>

      {/* 04 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">4. res.status()</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code className="text-[var(--accent-color)]">res.status()</code>{" "}
          method sets the HTTP status code of the response.
        </p>

        <CodeBlock
          code={`app.get("/users", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Users fetched successfully",
  });
});

app.post("/users", (req, res) => {
  res.status(201).json({
    success: true,
    message: "User created successfully",
  });
});`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          You can chain <code className="text-[var(--accent-color)]">status()</code>{" "}
          with <code className="text-[var(--accent-color)]">json()</code> or{" "}
          <code className="text-[var(--accent-color)]">send()</code>.
        </p>

        <div className="overflow-hidden rounded-xl border border-[var(--border-color)]">
          {[
            ["200", "OK", "Request successful"],
            ["201", "Created", "Resource created successfully"],
            ["400", "Bad Request", "Invalid client request"],
            ["401", "Unauthorized", "Authentication required or invalid"],
            ["403", "Forbidden", "Access is not allowed"],
            ["404", "Not Found", "Requested resource not found"],
            ["500", "Internal Server Error", "Unexpected server error"],
          ].map(([code, name, description]) => (
            <div
              key={code}
              className="grid grid-cols-[55px_1fr] gap-3 border-b border-[var(--border-color)] p-3 last:border-b-0"
            >
              <code className="font-semibold text-[var(--accent-color)]">
                {code}
              </code>

              <div>
                <p className="text-sm font-semibold">{name}</p>
                <p className="mt-1 text-xs text-[var(--text-secondary)]">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 05 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">5. res.sendStatus()</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code className="text-[var(--accent-color)]">res.sendStatus()</code>{" "}
          method sets a status code and sends its standard status message
          as the response body.
        </p>

        <CodeBlock
          code={`app.get("/not-found", (req, res) => {
  res.sendStatus(404);
});`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Response:
        </p>

        <CodeBlock
          code={`Status: 404 Not Found

Body:
Not Found`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <p className="font-semibold text-[var(--accent-color)]">
            Remember
          </p>
          <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
            Use <code>res.status(404).json()</code> when you want to send
            a custom JSON error response. Use{" "}
            <code>res.sendStatus(404)</code> when the standard status message
            is sufficient.
          </p>
        </div>
      </section>

      {/* 06 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">6. res.redirect()</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code className="text-[var(--accent-color)]">res.redirect()</code>{" "}
          method redirects the client to another URL.
        </p>

        <CodeBlock
          code={`app.get("/old-page", (req, res) => {
  res.redirect("/new-page");
});

app.get("/new-page", (req, res) => {
  res.send("Welcome to the new page!");
});`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          By default, Express sends a 302 redirect. You can also specify a
          different redirect status code.
        </p>

        <CodeBlock
          code={`// Temporary redirect
res.redirect(302, "/new-page");

// Permanent redirect
res.redirect(301, "/new-page");`}
        />
      </section>

      {/* 07 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">7. res.set() and res.get()</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          These methods are used to manage HTTP response headers.
        </p>

        <CodeBlock
          code={`app.get("/headers", (req, res) => {
  // Set response header
  res.set("X-App-Name", "Provity");

  // Read response header
  const appName = res.get("X-App-Name");

  res.json({
    appName,
  });
});`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-3">
          <div>
            <p className="font-semibold text-[var(--accent-color)]">
              res.set()
            </p>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">
              Sets an HTTP response header.
            </p>
          </div>

          <div className="border-t border-[var(--border-color)] pt-3">
            <p className="font-semibold text-[var(--accent-color)]">
              res.get()
            </p>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">
              Reads a response header that has already been set.
            </p>
          </div>
        </div>
      </section>

      {/* 08 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">8. res.cookie() and res.clearCookie()</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Express provides methods to set and clear cookies in the client's
          browser.
        </p>

        <CodeBlock
          code={`app.get("/login", (req, res) => {
  res.cookie("token", "sample-token", {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });

  res.send("Cookie set successfully");
});

app.get("/logout", (req, res) => {
  res.clearCookie("token");

  res.send("Cookie cleared successfully");
});`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Important cookie options:
        </p>

        <ul className="space-y-2 text-sm leading-6 text-[var(--text-secondary)]">
          <li>
            • <code className="text-[var(--accent-color)]">httpOnly</code> –
            Prevents JavaScript from accessing the cookie.
          </li>
          <li>
            • <code className="text-[var(--accent-color)]">secure</code> –
            Sends the cookie only over HTTPS.
          </li>
          <li>
            • <code className="text-[var(--accent-color)]">sameSite</code> –
            Controls cross-site cookie behavior.
          </li>
        </ul>

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Note: Cookie options should be configured according to your
          environment and authentication requirements. To read incoming
          cookies, you generally need cookie-parser middleware.
        </p>
      </section>

      {/* 09 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">9. res.sendFile()</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code className="text-[var(--accent-color)]">res.sendFile()</code>{" "}
          method sends a file as the response. It is commonly used to serve
          HTML pages, PDFs, and other files.
        </p>

        <CodeBlock
          code={`import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Here, <code className="text-[var(--accent-color)]">path.join()</code>{" "}
          creates the file path, and{" "}
          <code className="text-[var(--accent-color)]">res.sendFile()</code>{" "}
          sends that file to the client.
        </p>
      </section>

      {/* 10 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">10. res.end()</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code className="text-[var(--accent-color)]">res.end()</code>{" "}
          method ends the response process. It is useful when you want to
          finish a response without sending a body.
        </p>

        <CodeBlock
          code={`app.get("/empty", (req, res) => {
  res.status(204).end();
});`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Here, the server responds with status{" "}
          <code className="text-[var(--accent-color)]">204 No Content</code>{" "}
          and no response body.
        </p>
      </section>

      {/* 11 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">11. Avoid Sending Multiple Responses</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Every request should receive one final response. Sending a response
          multiple times for the same request can cause an error.
        </p>

        <p className="font-semibold text-[var(--text-secondary)]">
          Incorrect Example
        </p>

        <CodeBlock
          code={`app.get("/users", (req, res) => {
  res.send("First response");

  res.send("Second response");
});`}
        />

        <p className="font-semibold text-[var(--text-secondary)]">
          Correct Example
        </p>

        <CodeBlock
          code={`app.get("/users", (req, res) => {
  if (!req.query.id) {
    return res.status(400).json({
      message: "User ID is required",
    });
  }

  res.json({
    message: "User found",
    id: req.query.id,
  });
});`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <p className="font-semibold text-[var(--accent-color)]">
            Important
          </p>
          <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
            Use <code>return</code> when sending an early response inside
            a condition. It prevents the remaining handler code from
            executing.
          </p>
        </div>
      </section>

      {/* Important Points */}
      <section className="space-y-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-5">
        <h2 className="text-xl font-bold">Important Points</h2>

        <ul className="space-y-3 text-sm leading-6 text-[var(--text-secondary)]">
          <li>• res represents the outgoing HTTP response.</li>
          <li>• res.send() sends a response to the client.</li>
          <li>• res.json() sends JSON data.</li>
          <li>• res.status() sets the HTTP status code.</li>
          <li>• res.sendStatus() sends a standard status message.</li>
          <li>• res.redirect() redirects the client.</li>
          <li>• res.set() sets response headers.</li>
          <li>• res.cookie() sets a cookie.</li>
          <li>• res.sendFile() sends a file.</li>
          <li>• res.end() finishes the response.</li>
          <li>• Never send multiple final responses for one request.</li>
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

export default ResponseObject;