import React, { useState } from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const CustomMiddleware = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion((prev) => (prev === index ? null : index));
  };

  const interviewQuestions = [
    {
      question: "What is custom middleware in Express.js?",
      answer:
        "Custom middleware is a middleware function created by developers to perform specific tasks such as logging, authentication, validation, and request processing.",
    },
    {
      question: "What are the parameters of a middleware function?",
      answer:
        "A normal middleware function receives three parameters: req, res, and next.",
    },
    {
      question: "What is the purpose of next()?",
      answer:
        "next() passes control to the next middleware function or route handler in the request-response cycle.",
    },
    {
      question: "What happens if middleware does not call next() or send a response?",
      answer:
        "The request remains pending because Express is waiting for the middleware to finish processing.",
    },
    {
      question: "How can we create route-level middleware?",
      answer:
        "We can pass middleware functions directly to a specific route using app.get(), app.post(), or other route methods.",
    },
    {
      question: "How do we pass an error from custom middleware?",
      answer:
        "Call next(error) to pass the error to Express error-handling middleware.",
    },
    {
      question: "Can we use multiple middleware functions on one route?",
      answer:
        "Yes. We can pass multiple middleware functions to a route. They execute in the order in which they are registered.",
    },
  ];

  return (
    <div className="w-full space-y-10 text-[var(--text-primary)]">

      {/* Header */}
      <div className="space-y-3">
        <p className="text-xs font-semibold tracking-[0.2em] text-[var(--accent-color)]">
          EXPRESS.JS FUNDAMENTALS / 10
        </p>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Custom Middleware in Express.js
        </h1>

        <p className="max-w-3xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
          Custom middleware allows us to create our own functions that
          execute during the request-response cycle. We can use it for
          authentication, logging, validation, and many other tasks.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          1. What is Custom Middleware?
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Custom middleware is a function that we create ourselves to
          perform specific operations before a request reaches its final
          route handler.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          For example, before allowing a user to access a dashboard, we
          might want to check whether the user is authenticated. We can
          create custom middleware for this task.
        </p>

        <CodeBlock
          code={`const checkRequest = (req, res, next) => {
  console.log("Request received");

  next();
};`}
        />
      </section>

      {/* 2 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          2. Middleware Function Structure
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          A normal Express middleware function receives three parameters:
        </p>

        <div className="grid gap-3 sm:grid-cols-3">
          {[
            {
              name: "req",
              description: "Contains information about the incoming request.",
            },
            {
              name: "res",
              description: "Used to send a response to the client.",
            },
            {
              name: "next",
              description: "Passes control to the next middleware or handler.",
            },
          ].map((item) => (
            <div
              key={item.name}
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

        <CodeBlock
          code={`const middleware = (req, res, next) => {
  // Perform some operation

  next();
};`}
        />

        <div className="rounded-xl border border-[var(--accent-color)]/30 bg-[var(--accent-background)] p-4">
          <p className="text-sm leading-7">
            <strong>Important:</strong> Middleware must either send a
            response, pass control using <code>next()</code>, or pass an
            error using <code>next(error)</code>. Otherwise, the request
            may remain pending.
          </p>
        </div>
      </section>

      {/* 3 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          3. Creating Your First Custom Middleware
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Let's create a middleware that logs a message whenever a request
          arrives at our server.
        </p>

        <CodeBlock
          code={`import express from "express";

const app = express();

const logger = (req, res, next) => {
  console.log("Request received");
  next();
};

app.use(logger);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(3000);`}
        />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          Whenever a request comes to the server, the logger middleware
          executes before the route handler.
        </p>
      </section>

      {/* 4 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          4. Understanding next()
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code>next()</code> function tells Express to continue
          processing the request by moving to the next middleware or
          matching route handler.
        </p>

        <CodeBlock
          code={`const firstMiddleware = (req, res, next) => {
  console.log("First Middleware");

  next();
};

const secondMiddleware = (req, res, next) => {
  console.log("Second Middleware");

  next();
};

app.get(
  "/",
  firstMiddleware,
  secondMiddleware,
  (req, res) => {
    res.send("Home Page");
  }
);`}
        />

        <h3 className="font-semibold">Execution Flow</h3>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <div className="flex flex-col items-center gap-2 text-center text-sm">
            {[
              "Incoming Request",
              "firstMiddleware()",
              "secondMiddleware()",
              "Route Handler",
              "Response to Client",
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

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <h3 className="mb-2 font-semibold">Console Output</h3>

          <CodeBlock
            code={`First Middleware
Second Middleware`}
          />
        </div>
      </section>

      {/* 5 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          5. Application-level Custom Middleware
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Application-level middleware is registered using
          <code> app.use()</code>. It can run for every incoming request
          that matches its mount path.
        </p>

        <CodeBlock
          code={`const logger = (req, res, next) => {
  console.log(req.method, req.url);

  next();
};

// Runs for matching requests
app.use(logger);`}
        />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          You can also provide a path to run middleware only for requests
          beginning with that path.
        </p>

        <CodeBlock
          code={`app.use("/admin", logger);`}
        />
      </section>

      {/* 6 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          6. Route-level Custom Middleware
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Route-level middleware is attached to a specific route. It runs
          only when that route matches the incoming request.
        </p>

        <CodeBlock
          code={`const checkUser = (req, res, next) => {
  console.log("Checking user");

  next();
};

app.get("/profile", checkUser, (req, res) => {
  res.send("User Profile");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});`}
        />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          Here, <code>checkUser</code> runs for <code>/profile</code>, but
          it does not run for <code>/about</code>.
        </p>
      </section>

      {/* 7 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          7. Passing Data Through Middleware
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Middleware can attach additional information to the request
          object. The next middleware or route handler can access that
          information through <code>req</code>.
        </p>

        <CodeBlock
          code={`const addUser = (req, res, next) => {
  req.user = {
    id: 101,
    name: "Mayur",
  };

  next();
};

app.get("/profile", addUser, (req, res) => {
  res.json({
    message: "User Profile",
    user: req.user,
  });
});`}
        />

        <div className="rounded-xl border border-[var(--accent-color)]/30 bg-[var(--accent-background)] p-4">
          <p className="text-sm leading-7">
            <strong>Remember:</strong> Properties added to <code>req</code>
            are available to later middleware and route handlers in the
            same request cycle.
          </p>
        </div>
      </section>

      {/* 8 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          8. Authentication Middleware Example
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          We can create middleware to check whether a request contains an
          authentication token before allowing access to a protected route.
        </p>

        <CodeBlock
          code={`const authenticateUser = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Authentication required",
    });
  }

  // Token verification should happen here.

  next();
};

app.get(
  "/dashboard",
  authenticateUser,
  (req, res) => {
    res.json({
      message: "Welcome to dashboard",
    });
  }
);`}
        />

        <div className="rounded-xl border border-[var(--accent-color)]/30 bg-[var(--accent-background)] p-4">
          <p className="text-sm leading-7">
            <strong>Important:</strong> This is a simplified example. Checking
            whether a token exists does not prove that it is valid. In a real
            application, verify the token's signature and claims before
            allowing access.
          </p>
        </div>
      </section>

      {/* 9 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          9. Passing Errors from Custom Middleware
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          If middleware encounters an error, it can pass that error to
          Express using <code>next(error)</code>. Express then skips normal
          middleware and route handlers and looks for error-handling
          middleware.
        </p>

        <CodeBlock
          code={`const checkAccess = (req, res, next) => {
  const isAllowed = false;

  if (!isAllowed) {
    return next(new Error("Access denied"));
  }

  next();
};

app.get("/admin", checkAccess, (req, res) => {
  res.send("Admin Dashboard");
});

// Error-handling middleware
app.use((err, req, res, next) => {
  res.status(403).json({
    message: err.message,
  });
});`}
        />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          Error-handling middleware has four parameters:
          <code> (err, req, res, next)</code>.
        </p>
      </section>

      {/* 10 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          10. Creating a Separate Middleware File
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          In real-world applications, we should keep middleware in separate
          files to make our project easier to maintain and organize.
        </p>

        <h3 className="font-semibold">Project Structure</h3>

        <CodeBlock
          code={`project/
│
├── middleware/
│   └── logger.js
│
├── routes/
│   └── userRoutes.js
│
└── server.js`}
        />

        <h3 className="font-semibold">middleware/logger.js</h3>

        <CodeBlock
          code={`const logger = (req, res, next) => {
  console.log(req.method, req.url);

  next();
};

export default logger;`}
        />

        <h3 className="font-semibold">server.js</h3>

        <CodeBlock
          code={`import express from "express";
import logger from "./middleware/logger.js";

const app = express();

app.use(logger);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(3000);`}
        />
      </section>

      {/* Important Points */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Important Points
        </h2>

        <div className="space-y-3">
          {[
            "Custom middleware is created by developers.",
            "Normal middleware receives req, res, and next.",
            "next() passes control to the next middleware or route handler.",
            "Middleware can send a response without calling next().",
            "Middleware can attach custom data to the req object.",
            "Application-level middleware is commonly registered using app.use().",
            "Route-level middleware runs only for its matching route.",
            "Multiple middleware functions execute in registration order.",
            "Use next(error) to forward errors to error-handling middleware.",
            "Keep reusable middleware in separate files.",
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

export default CustomMiddleware;