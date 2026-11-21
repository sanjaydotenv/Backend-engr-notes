import React, { useState } from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const WhyExpress = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const interviewQuestions = [
    {
      question: "Why do we use Express.js?",
      answer:
        "Express.js simplifies backend development by providing easy methods for routing, middleware, request handling, and response handling.",
    },
    {
      question: "Can Node.js work without Express.js?",
      answer:
        "Yes. Node.js provides a built-in HTTP module that allows us to create web servers without using Express.js.",
    },
    {
      question: "What problems does Express.js solve?",
      answer:
        "Express.js reduces the complexity of manually handling HTTP requests, routes, middleware, and responses.",
    },
    {
      question: "Does Express.js make Node.js faster?",
      answer:
        "Express.js mainly improves developer productivity and code organization. It does not automatically make Node.js applications faster.",
    },
    {
      question: "Why is routing important in Express.js?",
      answer:
        "Routing allows us to handle different URLs and HTTP methods and execute specific code for each request.",
    },
    {
      question: "Why do we use middleware in Express.js?",
      answer:
        "Middleware helps perform common operations such as authentication, logging, validation, and parsing request bodies.",
    },
    {
      question: "Is Express.js suitable for REST API development?",
      answer:
        "Yes. Express.js provides simple routing and HTTP handling methods that make building REST APIs easier.",
    },
    {
      question: "What is the main advantage of Express.js over Node.js HTTP?",
      answer:
        "Express.js provides a simpler and more organized way to handle routes, middleware, requests, and responses compared to manually using the HTTP module.",
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
          EXPRESS.JS FUNDAMENTALS / 02
        </p>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Why Express.js?
        </h1>

        <p className="text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
          Understand why Express.js is widely used with Node.js
          and how it simplifies server development, routing,
          middleware, and HTTP request handling.
        </p>
      </header>

      {/* =====================================
          01. WHY EXPRESS
      ===================================== */}

      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          1. Why Do We Need Express.js?
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Node.js provides a built-in HTTP module to create servers.
          However, handling multiple routes, HTTP methods, request
          bodies, and responses manually can make code complicated.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          Express.js solves this problem by providing simple methods
          and features that make backend development easier and
          more organized.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--accent-background)] p-4">
          <p className="text-sm leading-6">
            <strong className="text-[var(--accent-color)]">
              Main Idea:
            </strong>{" "}
            Node.js provides the tools to build a server, while
            Express.js makes working with that server easier.
          </p>
        </div>
      </section>

      {/* =====================================
          02. WITHOUT EXPRESS
      ===================================== */}

      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          2. Without Express.js
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Using the Node.js HTTP module, we need to manually check
          request URLs and HTTP methods to handle different routes.
        </p>

        <CodeBlock
          code={`import http from "node:http";

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.end("Home Page");
  } 
  else if (req.url === "/users" && req.method === "GET") {
    res.end("Users Data");
  } 
  else if (req.url === "/products" && req.method === "GET") {
    res.end("Products Data");
  } 
  else {
    res.statusCode = 404;
    res.end("Route Not Found");
  }
});

server.listen(3000);`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          As the application grows, manually checking every route
          and handling requests becomes difficult to maintain.
        </p>
      </section>

      {/* =====================================
          03. WITH EXPRESS
      ===================================== */}

      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          3. With Express.js
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Express.js provides methods like{" "}
          <code className="text-[var(--accent-color)]">app.get()</code>{" "}
          and{" "}
          <code className="text-[var(--accent-color)]">app.post()</code>{" "}
          to handle routes directly.
        </p>

        <CodeBlock
          code={`import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/users", (req, res) => {
  res.send("Users Data");
});

app.get("/products", (req, res) => {
  res.send("Products Data");
});

app.listen(3000);`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Express makes the same application easier to read,
          write, and maintain.
        </p>
      </section>

      {/* =====================================
          04. MAIN ADVANTAGES
      ===================================== */}

      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          4. Main Advantages of Express.js
        </h2>

        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              title: "Simple Routing",
              desc: "Handle different URLs and HTTP methods using simple route methods.",
            },
            {
              title: "Middleware Support",
              desc: "Execute reusable functions for authentication, logging, and validation.",
            },
            {
              title: "Easy Request Handling",
              desc: "Access request parameters, headers, query strings, and body data.",
            },
            {
              title: "Easy Response Handling",
              desc: "Send JSON, text, files, and HTTP status codes easily.",
            },
            {
              title: "Better Code Organization",
              desc: "Organize applications using routers and separate middleware.",
            },
            {
              title: "REST API Development",
              desc: "Build backend APIs using standard HTTP methods.",
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
          05. REAL WORLD EXAMPLE
      ===================================== */}

      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          5. Real-World Example
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Imagine building an e-commerce backend. You need different
          routes to manage users, products, orders, and payments.
        </p>

        <CodeBlock
          code={`import express from "express";

const app = express();

app.get("/users", (req, res) => {
  res.json({ message: "Get all users" });
});

app.post("/users", (req, res) => {
  res.json({ message: "Create a user" });
});

app.get("/products", (req, res) => {
  res.json({ message: "Get all products" });
});

app.get("/orders", (req, res) => {
  res.json({ message: "Get all orders" });
});

app.listen(3000);`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Express allows us to manage these endpoints without
          manually checking every request URL and method.
        </p>
      </section>

      {/* =====================================
          06. IMPORTANT POINTS
      ===================================== */}

      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          6. Important Points
        </h2>

        <ul className="list-disc space-y-2 pl-6 leading-7 text-[var(--text-secondary)]">
          <li>Express.js simplifies backend development.</li>
          <li>It reduces manual HTTP request handling.</li>
          <li>It provides simple routing methods.</li>
          <li>It supports reusable middleware functions.</li>
          <li>It makes REST API development easier.</li>
          <li>It improves code organization and maintainability.</li>
          <li>It does not replace Node.js or its built-in modules.</li>
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

export default WhyExpress;