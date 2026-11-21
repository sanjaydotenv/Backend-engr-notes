import React, { useState } from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const WhatIsExpress = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const interviewQuestions = [
    {
      question: "What is Express.js?",
      answer:
        "Express.js is a fast, minimal, and flexible web framework for Node.js. It simplifies building web servers and REST APIs.",
    },
    {
      question: "Why do we use Express.js with Node.js?",
      answer:
        "Express.js simplifies routing, middleware, request handling, and response handling, making backend development easier.",
    },
    {
      question: "Is Express.js a framework or a library?",
      answer:
        "Express.js is a web framework for Node.js.",
    },
    {
      question: "What is the difference between Node.js and Express.js?",
      answer:
        "Node.js is a JavaScript runtime environment, while Express.js is a web framework that runs on Node.js.",
    },
    {
      question: "Can we create a server without Express.js?",
      answer:
        "Yes. Node.js provides a built-in HTTP module that allows us to create servers without Express.js.",
    },
    {
      question: "What are the main features of Express.js?",
      answer:
        "Its main features include routing, middleware, HTTP request handling, response handling, and error handling.",
    },
    {
      question: "Is Express.js used for frontend or backend development?",
      answer:
        "Express.js is mainly used for backend development, especially for creating web servers and REST APIs.",
    },
    {
      question: "Does Express.js support REST APIs?",
      answer:
        "Yes. Express.js provides methods like GET, POST, PUT, PATCH, and DELETE to build REST APIs.",
    },
  ];

  const toggleQuestion = (index) => {
    setOpenQuestion((prev) => (prev === index ? null : index));
  };

  return (
    <div className="space-y-10 text-[var(--text-primary)]">

      {/* =====================================
          HEADER
      ===================================== */}

      <header className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-color)]">
          EXPRESS.JS FUNDAMENTALS / 01
        </p>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          What is Express.js?
        </h1>

        <p className="text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
          Learn what Express.js is, why we use it with Node.js,
          and how it simplifies backend development.
        </p>
      </header>

      {/* =====================================
          01. WHAT IS EXPRESS
      ===================================== */}

      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          1. What is Express.js?
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          <strong className="text-[var(--accent-color)]">
            Express.js
          </strong>{" "}
          is a fast, minimal, and flexible web framework for Node.js.
          It makes building web servers and REST APIs easier by
          providing simple methods to handle HTTP requests, responses,
          routing, and middleware.
        </p>

        <CodeBlock
          code={`import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express.js!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--accent-background)] p-4">
          <p className="text-sm leading-6">
            <strong className="text-[var(--accent-color)]">
              Important:
            </strong>{" "}
            Express.js is globally not available like the Node.js
            process object. We need to install and import it.
          </p>
        </div>
      </section>

      {/* =====================================
          02. WHY EXPRESS
      ===================================== */}

      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          2. Why Do We Need Express.js?
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Node.js provides the built-in HTTP module to create servers,
          but handling multiple routes and requests manually can
          become complicated.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          Express.js simplifies this process by providing ready-to-use
          methods for routing, middleware, and request handling.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
            <h3 className="font-semibold text-[var(--text-primary)]">
              Without Express.js
            </h3>

            <p className="text-sm leading-6 text-[var(--text-secondary)]">
              We manually handle HTTP requests, URLs, methods,
              and responses using the Node.js HTTP module.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--accent-color)] bg-[var(--accent-background)] p-4 space-y-2">
            <h3 className="font-semibold text-[var(--accent-color)]">
              With Express.js
            </h3>

            <p className="text-sm leading-6 text-[var(--text-secondary)]">
              We use simple methods like app.get(), app.post(),
              and middleware to handle requests.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================
          03. NODE VS EXPRESS
      ===================================== */}

      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          3. Node.js HTTP vs Express.js
        </h2>

        <div className="space-y-3">
          <h3 className="font-semibold text-[var(--accent-color)]">
            Without Express.js (Node.js HTTP)
          </h3>

          <CodeBlock
            code={`import http from "node:http";

const server = http.createServer((req, res) => {
  if (req.url === "/users" && req.method === "GET") {
    res.end("Users Data");
  } else {
    res.end("Route Not Found");
  }
});

server.listen(3000);`}
          />
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold text-[var(--accent-color)]">
            With Express.js
          </h3>

          <CodeBlock
            code={`import express from "express";

const app = express();

app.get("/users", (req, res) => {
  res.send("Users Data");
});

app.listen(3000);`}
          />
        </div>

        <p className="leading-7 text-[var(--text-secondary)]">
          Notice how Express.js makes routing and request handling
          simpler compared to manually using the Node.js HTTP module.
        </p>
      </section>

      {/* =====================================
          04. FEATURES
      ===================================== */}

      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          4. Features of Express.js
        </h2>

        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              title: "Routing",
              desc: "Handle different API endpoints and HTTP methods.",
            },
            {
              title: "Middleware",
              desc: "Execute functions between request and response.",
            },
            {
              title: "Request Handling",
              desc: "Access request parameters, headers, and body.",
            },
            {
              title: "Response Handling",
              desc: "Send JSON, text, and other responses.",
            },
            {
              title: "Error Handling",
              desc: "Handle application errors using middleware.",
            },
            {
              title: "HTTP Methods",
              desc: "Handle GET, POST, PUT, PATCH, and DELETE requests.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="space-y-2 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4"
            >
              <h3 className="font-semibold text-[var(--accent-color)]">
                {item.title}
              </h3>

              <p className="text-sm leading-6 text-[var(--text-secondary)]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================
          05. HOW EXPRESS WORKS
      ===================================== */}

      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          5. How Express.js Works
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          When a client sends an HTTP request, Express processes
          it through middleware and routing before sending a response.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-5">
          <div className="flex flex-col items-center gap-2 text-center">
            {[
              "Client",
              "HTTP Request",
              "Express Server",
              "Middleware",
              "Routing",
              "Route Handler",
              "HTTP Response",
              "Client",
            ].map((item, index) => (
              <React.Fragment key={index}>
                <div
                  className={`w-full max-w-xs rounded-lg border p-3 ${
                    index === 2 || index === 5
                      ? "border-[var(--accent-color)] bg-[var(--accent-background)] text-[var(--accent-color)]"
                      : "border-[var(--border-color)] bg-[var(--bg-tertiary)]"
                  }`}
                >
                  <span className="text-sm font-medium">
                    {item}
                  </span>
                </div>

                {index !== 7 && (
                  <span className="text-lg text-[var(--accent-color)]">
                    ↓
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================
          06. IMPORTANT POINTS
      ===================================== */}

      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          6. Important Points
        </h2>

        <ul className="list-disc space-y-2 pl-6 leading-7 text-[var(--text-secondary)]">
          <li>Express.js is built on top of Node.js.</li>
          <li>Express.js is a web framework, not a programming language.</li>
          <li>It is not a replacement for Node.js.</li>
          <li>It simplifies server-side application development.</li>
          <li>It is commonly used to build REST APIs and backend applications.</li>
          <li>Express.js is available through the npm package manager.</li>
        </ul>
      </section>

      {/* =====================================
          07. INTERVIEW QUESTIONS
      ===================================== */}

      <section className="space-y-4 pt-4">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-color)]">
            QUICK REVISION
          </p>

          <h2 className="text-2xl font-bold">
            Interview Questions
          </h2>

          <p className="text-sm leading-6 text-[var(--text-secondary)]">
            Test your understanding. Click any question to reveal
            its answer.
          </p>
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
                  <span className="flex items-start gap-3">
                    <span className="font-semibold text-[var(--accent-color)]">
                      {String(index + 1).padStart(2, "0")}.
                    </span>

                    <span className="text-sm font-medium leading-6 sm:text-base">
                      {item.question}
                    </span>
                  </span>

                  <span
                    className={`shrink-0 text-xl text-[var(--accent-color)] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ⌄
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-[var(--border-color)] px-4 py-4">
                    <p className="pl-8 text-sm leading-7 text-[var(--text-secondary)]">
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

export default WhatIsExpress;