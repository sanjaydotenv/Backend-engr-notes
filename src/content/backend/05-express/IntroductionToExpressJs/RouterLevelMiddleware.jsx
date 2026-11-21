import React, { useState } from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const RouterLevelMiddleware = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion((prev) => (prev === index ? null : index));
  };

  const interviewQuestions = [
    {
      question: "What is router-level middleware in Express.js?",
      answer:
        "Router-level middleware is attached to an Express Router instance using router.use() or route methods. It runs for requests handled by that router.",
    },
    {
      question: "What is express.Router()?",
      answer:
        "express.Router() creates a separate router instance that helps organize routes and middleware into modular sections.",
    },
    {
      question: "What is the difference between app.use() and router.use()?",
      answer:
        "app.use() registers middleware at the application level, while router.use() registers middleware on a specific router.",
    },
    {
      question: "How do we apply middleware to all routes in a router?",
      answer:
        "Use router.use(middleware). It applies the middleware to matching requests handled by that router, based on its registration order and mount path.",
    },
    {
      question: "Can we use multiple middleware in a router?",
      answer:
        "Yes. Multiple middleware functions can be registered using router.use() or passed directly to route methods.",
    },
    {
      question: "How do we mount a router in an Express application?",
      answer:
        "Use app.use('/path', router). The router's routes are then available under the specified base path.",
    },
    {
      question: "Can router-level middleware be used for authentication?",
      answer:
        "Yes. We can register authentication middleware on a protected router so that matching routes pass through authentication before reaching their handlers.",
    },
  ];

  return (
    <div className="w-full space-y-10 text-[var(--text-primary)]">

      {/* Header */}
      <div className="space-y-3">
        <p className="text-xs font-semibold tracking-[0.2em] text-[var(--accent-color)]">
          EXPRESS.JS FUNDAMENTALS / 12
        </p>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Router-level Middleware in Express.js
        </h1>

        <p className="max-w-3xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
          Router-level middleware allows us to attach middleware functions
          to a specific Express Router instance. It helps organize
          authentication, validation, and other request-processing logic
          for related routes.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          1. What is Router-level Middleware?
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Router-level middleware works like application-level middleware,
          but it is attached to an individual router instead of the main
          Express application.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          We create a router using <code>express.Router()</code> and
          register middleware on it using <code>router.use()</code>.
        </p>

        <CodeBlock
          code={`import express from "express";

const app = express();

const userRouter = express.Router();

const logger = (req, res, next) => {
  console.log("User route accessed");

  next();
};

// Router-level middleware
userRouter.use(logger);

userRouter.get("/profile", (req, res) => {
  res.send("User Profile");
});

// Mount router
app.use("/users", userRouter);

app.listen(3000);`}
        />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          The profile endpoint is available at
          <code> /users/profile</code>. The logger runs before its route
          handler.
        </p>
      </section>

      {/* 2 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          2. Understanding express.Router()
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          <code>express.Router()</code> creates a new router instance.
          We can define routes and middleware on that router independently
          and then connect it to the main application.
        </p>

        <CodeBlock
          code={`const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send("All Users");
});

userRouter.get("/:id", (req, res) => {
  res.send("Single User");
});

app.use("/users", userRouter);`}
        />

        <h3 className="font-semibold">Available Endpoints</h3>

        <div className="space-y-2">
          {[
            {
              method: "GET",
              path: "/users",
              description: "Get all users",
            },
            {
              method: "GET",
              path: "/users/:id",
              description: "Get a single user",
            },
          ].map((item) => (
            <div
              key={item.path}
              className="flex flex-wrap items-center gap-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] p-3"
            >
              <span className="rounded-md bg-[var(--accent-background)] px-2 py-1 text-xs font-bold text-[var(--accent-color)]">
                {item.method}
              </span>

              <code className="text-sm">{item.path}</code>

              <span className="ml-auto text-xs text-[var(--text-secondary)]">
                {item.description}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          3. Using router.use()
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          <code>router.use()</code> registers middleware on a router.
          Without a path, it applies to matching requests handled by that
          router, according to registration order.
        </p>

        <CodeBlock
          code={`const userRouter = express.Router();

const logger = (req, res, next) => {
  console.log(req.method, req.originalUrl);

  next();
};

userRouter.use(logger);

userRouter.get("/", (req, res) => {
  res.send("All Users");
});

userRouter.get("/profile", (req, res) => {
  res.send("User Profile");
});

app.use("/users", userRouter);`}
        />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          Both <code>/users</code> and <code>/users/profile</code> pass
          through the logger middleware.
        </p>
      </section>

      {/* 4 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          4. Applying Middleware to a Specific Router Path
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          We can pass a path to <code>router.use()</code> when we want
          middleware to run only for requests matching a particular
          path within that router.
        </p>

        <CodeBlock
          code={`const userRouter = express.Router();

const checkUser = (req, res, next) => {
  console.log("Checking user");

  next();
};

// Runs for matching /profile requests
userRouter.use("/profile", checkUser);

userRouter.get("/profile", (req, res) => {
  res.send("User Profile");
});

userRouter.get("/settings", (req, res) => {
  res.send("User Settings");
});

app.use("/users", userRouter);`}
        />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          Here, <code>checkUser</code> runs for <code>/users/profile</code>,
          but not for <code>/users/settings</code>.
        </p>
      </section>

      {/* 5 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          5. Route-specific Middleware Inside a Router
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          We can also attach middleware directly to a specific route using
          router methods such as <code>router.get()</code> and
          <code> router.post()</code>.
        </p>

        <CodeBlock
          code={`const userRouter = express.Router();

const checkAccess = (req, res, next) => {
  console.log("Access checked");

  next();
};

// Middleware runs only for this route
userRouter.get(
  "/dashboard",
  checkAccess,
  (req, res) => {
    res.send("Dashboard");
  }
);

userRouter.get("/about", (req, res) => {
  res.send("About Page");
});

app.use("/users", userRouter);`}
        />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          In this example, <code>checkAccess</code> runs only when the
          dashboard route matches.
        </p>
      </section>

      {/* 6 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          6. Multiple Router-level Middleware
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          We can register multiple middleware functions on the same router.
          They execute in the order in which they are registered.
        </p>

        <CodeBlock
          code={`const userRouter = express.Router();

const logger = (req, res, next) => {
  console.log("1. Logger");

  next();
};

const checkUser = (req, res, next) => {
  console.log("2. User Check");

  next();
};

const checkPermission = (req, res, next) => {
  console.log("3. Permission Check");

  next();
};

userRouter.use(logger);
userRouter.use(checkUser);
userRouter.use(checkPermission);

userRouter.get("/dashboard", (req, res) => {
  res.send("Dashboard");
});

app.use("/users", userRouter);`}
        />

        <h3 className="font-semibold">Execution Order</h3>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <div className="flex flex-col items-center gap-2 text-center text-sm">
            {[
              "Incoming Request",
              "Logger Middleware",
              "User Check Middleware",
              "Permission Middleware",
              "Dashboard Route",
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

      {/* 7 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          7. Router-level Authentication Middleware
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Router-level middleware is useful when multiple routes require
          authentication. Instead of adding the same middleware to every
          route, we can register it once on the protected router.
        </p>

        <CodeBlock
          code={`import express from "express";

const app = express();

const authRouter = express.Router();

const authenticateUser = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Authentication required",
    });
  }

  // Verify token signature and claims here.

  next();
};

// All matching routes pass through authentication
authRouter.use(authenticateUser);

authRouter.get("/dashboard", (req, res) => {
  res.send("Dashboard");
});

authRouter.get("/profile", (req, res) => {
  res.send("Profile");
});

app.use("/account", authRouter);

app.listen(3000);`}
        />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          Both <code>/account/dashboard</code> and
          <code> /account/profile</code> pass through authentication
          middleware.
        </p>

        <div className="rounded-xl border border-[var(--accent-color)]/30 bg-[var(--accent-background)] p-4">
          <p className="text-sm leading-7">
            <strong>Security Note:</strong> Checking whether a token exists
            is not enough. A real authentication middleware must verify the
            token before allowing access.
          </p>
        </div>
      </section>

      {/* 8 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          8. Creating a Separate Router and Middleware File
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          In real-world projects, we usually separate routers and
          middleware into different files. This keeps our code organized
          and easier to maintain.
        </p>

        <h3 className="font-semibold">Project Structure</h3>

        <CodeBlock
          code={`project/
│
├── middleware/
│   └── authMiddleware.js
│
├── routes/
│   └── userRoutes.js
│
└── server.js`}
        />

        <h3 className="font-semibold">middleware/authMiddleware.js</h3>

        <CodeBlock
          code={`const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  // Verify the token here.
  next();
};

export default authMiddleware;`}
        />

        <h3 className="font-semibold">routes/userRoutes.js</h3>

        <CodeBlock
          code={`import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Protect all routes in this router
router.use(authMiddleware);

router.get("/profile", (req, res) => {
  res.send("User Profile");
});

router.get("/dashboard", (req, res) => {
  res.send("User Dashboard");
});

export default router;`}
        />

        <h3 className="font-semibold">server.js</h3>

        <CodeBlock
          code={`import express from "express";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use("/users", userRoutes);

app.listen(3000);`}
        />
      </section>

      {/* 9 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          9. app.use() vs router.use()
        </h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[500px] text-left text-sm">
            <thead className="bg-[var(--bg-tertiary)]">
              <tr>
                <th className="p-3">app.use()</th>
                <th className="p-3">router.use()</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[var(--border-color)]">
              <tr>
                <td className="p-3">Attached to Express app</td>
                <td className="p-3">Attached to router instance</td>
              </tr>

              <tr>
                <td className="p-3">Application-level middleware</td>
                <td className="p-3">Router-level middleware</td>
              </tr>

              <tr>
                <td className="p-3">Can apply across the application</td>
                <td className="p-3">Applies to matching router requests</td>
              </tr>

              <tr>
                <td className="p-3">app.use(logger)</td>
                <td className="p-3">router.use(logger)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Important Points */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Important Points
        </h2>

        <div className="space-y-3">
          {[
            "Router-level middleware is attached to an Express Router instance.",
            "express.Router() creates a separate router.",
            "router.use() registers middleware on a router.",
            "Middleware can be applied to all matching routes or a specific router path.",
            "Route-specific middleware can be passed directly to router methods.",
            "Multiple middleware functions execute in registration order.",
            "Routers can be mounted using app.use('/path', router).",
            "Router-level middleware is useful for authentication and authorization.",
            "Separate router files help organize large Express applications.",
            "Always register middleware before the routes that need it.",
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

export default RouterLevelMiddleware;