import React, { useState } from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const ThirdPartyMiddleware = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion((prev) => (prev === index ? null : index));
  };

  const interviewQuestions = [
    {
      question: "What is third-party middleware in Express.js?",
      answer:
        "Third-party middleware is created and maintained outside Express. We install these packages separately and use them to add functionality to our application.",
    },
    {
      question: "What is the purpose of CORS middleware?",
      answer:
        "CORS controls which origins are allowed to access resources from a server through browsers.",
    },
    {
      question: "What is Morgan used for?",
      answer:
        "Morgan is an HTTP request logger. It displays information such as the request method, URL, status code, and response time.",
    },
    {
      question: "Why do we use Helmet?",
      answer:
        "Helmet helps secure Express applications by setting various HTTP security headers.",
    },
    {
      question: "What is cookie-parser?",
      answer:
        "cookie-parser parses cookies sent by the client and makes them available through req.cookies.",
    },
    {
      question: "What is express-rate-limit?",
      answer:
        "It limits the number of requests a client can make within a specified time window. It helps reduce excessive requests and certain abuse patterns.",
    },
    {
      question: "What is Multer?",
      answer:
        "Multer is middleware used to handle multipart/form-data, especially file uploads.",
    },
    {
      question: "How do we install third-party middleware?",
      answer:
        "We install the required package using npm and import it into our Express application.",
    },
  ];

  return (
    <div className="w-full space-y-10 text-[var(--text-primary)]">

      {/* Header */}
      <div className="space-y-3">
        <p className="text-xs font-semibold tracking-[0.2em] text-[var(--accent-color)]">
          EXPRESS.JS FUNDAMENTALS / 11
        </p>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Third-party Middleware in Express.js
        </h1>

        <p className="max-w-3xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
          Third-party middleware extends Express.js with additional
          functionality. We install these packages separately and use them
          for tasks like security, logging, cookies, file uploads, and
          request management.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          1. What is Third-party Middleware?
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Third-party middleware is created by external developers or
          organizations rather than being included directly in Express.js.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          Express provides basic middleware, but sometimes our application
          needs additional features. Instead of implementing everything
          ourselves, we can install existing middleware packages.
        </p>

        <CodeBlock
          code={`// Install a third-party middleware
npm install cors

// Import it into Express
import cors from "cors";

// Register middleware
app.use(cors());`}
        />
      </section>

      {/* 2 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          2. Common Third-party Middleware
        </h2>

        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              name: "cors",
              purpose: "Controls cross-origin browser access.",
            },
            {
              name: "morgan",
              purpose: "Logs incoming HTTP requests.",
            },
            {
              name: "helmet",
              purpose: "Sets HTTP security headers.",
            },
            {
              name: "cookie-parser",
              purpose: "Parses cookies from incoming requests.",
            },
            {
              name: "express-rate-limit",
              purpose: "Limits repeated requests.",
            },
            {
              name: "multer",
              purpose: "Handles multipart file uploads.",
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
                {item.purpose}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3 CORS */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          3. CORS Middleware
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          CORS stands for Cross-Origin Resource Sharing. It allows a server
          to specify which origins can access its resources through a web
          browser.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          For example, suppose your React frontend runs on port 5173 and
          your Express backend runs on port 3000. These are different
          origins, so browser requests may require CORS permission.
        </p>

        <h3 className="font-semibold">Install CORS</h3>

        <CodeBlock
          code={`npm install cors`}
        />

        <h3 className="font-semibold">Basic Usage</h3>

        <CodeBlock
          code={`import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("CORS enabled");
});

app.listen(3000);`}
        />

        <h3 className="font-semibold">Allow a Specific Origin</h3>

        <CodeBlock
          code={`app.use(
  cors({
    origin: "http://localhost:5173",
  })
);`}
        />

        <div className="rounded-xl border border-[var(--accent-color)]/30 bg-[var(--accent-background)] p-4">
          <p className="text-sm leading-7">
            <strong>Important:</strong> CORS is a browser security mechanism.
            It does not authenticate users or prevent non-browser clients
            such as curl from sending requests to your server.
          </p>
        </div>
      </section>

      {/* 4 Morgan */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          4. Morgan Middleware
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Morgan is an HTTP request logger. It helps developers monitor
          incoming requests and understand how their server is responding.
        </p>

        <h3 className="font-semibold">Install Morgan</h3>

        <CodeBlock
          code={`npm install morgan`}
        />

        <h3 className="font-semibold">Usage</h3>

        <CodeBlock
          code={`import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(3000);`}
        />

        <h3 className="font-semibold">Example Console Output</h3>

        <CodeBlock
          code={`GET / 200 4.123 ms - 9`}
        />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          The output contains the HTTP method, requested URL, response
          status, response time, and response size.
        </p>

        <h3 className="font-semibold">Common Morgan Formats</h3>

        <CodeBlock
          code={`app.use(morgan("dev"));
app.use(morgan("tiny"));
app.use(morgan("combined"));`}
        />
      </section>

      {/* 5 Helmet */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          5. Helmet Middleware
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Helmet helps improve application security by setting various
          HTTP response headers. These headers help protect against some
          common web vulnerabilities.
        </p>

        <h3 className="font-semibold">Install Helmet</h3>

        <CodeBlock
          code={`npm install helmet`}
        />

        <h3 className="font-semibold">Usage</h3>

        <CodeBlock
          code={`import express from "express";
import helmet from "helmet";

const app = express();

app.use(helmet());

app.get("/", (req, res) => {
  res.send("Secure Express Application");
});

app.listen(3000);`}
        />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          Helmet configures several security-related HTTP headers. It
          provides useful protection, but it does not make an application
          completely secure by itself.
        </p>
      </section>

      {/* 6 Cookie Parser */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          6. Cookie-parser Middleware
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Browsers send cookies to servers through the Cookie request
          header. <code>cookie-parser</code> parses those cookies and
          makes them available through <code>req.cookies</code>.
        </p>

        <h3 className="font-semibold">Install</h3>

        <CodeBlock
          code={`npm install cookie-parser`}
        />

        <h3 className="font-semibold">Usage</h3>

        <CodeBlock
          code={`import express from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());

app.get("/profile", (req, res) => {
  console.log(req.cookies);

  res.json({
    cookies: req.cookies,
  });
});

app.listen(3000);`}
        />

        <h3 className="font-semibold">Setting a Cookie</h3>

        <CodeBlock
          code={`app.get("/login", (req, res) => {
  res.cookie("username", "Mayur", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });

  res.send("Cookie set");
});`}
        />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          Express provides <code>res.cookie()</code> itself. The
          cookie-parser package is used to parse incoming cookies.
          The cookie options above are suitable for HTTPS cross-site
          cookie scenarios; configure them according to your deployment.
        </p>
      </section>

      {/* 7 Rate Limit */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          7. Express Rate Limit Middleware
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Rate limiting controls how many requests a client can make
          within a specific time period. It helps reduce excessive requests
          and certain types of automated abuse.
        </p>

        <h3 className="font-semibold">Install</h3>

        <CodeBlock
          code={`npm install express-rate-limit`}
        />

        <h3 className="font-semibold">Usage</h3>

        <CodeBlock
          code={`import express from "express";
import { rateLimit } from "express-rate-limit";

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  message: "Too many requests. Try again later.",
});

app.use(limiter);

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.listen(3000);`}
        />

        <h3 className="font-semibold">Understanding Configuration</h3>

        <div className="space-y-3">
          {[
            {
              name: "windowMs",
              description: "The duration of the rate-limit window in milliseconds.",
            },
            {
              name: "limit",
              description: "Maximum number of requests allowed during the window.",
            },
            {
              name: "message",
              description: "The response message when the limit is exceeded.",
            },
          ].map((item) => (
            <div
              key={item.name}
              className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4"
            >
              <h3 className="font-semibold text-[var(--accent-color)]">
                {item.name}
              </h3>
              <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-[var(--accent-color)]/30 bg-[var(--accent-background)] p-4">
          <p className="text-sm leading-7">
            <strong>Practical Tip:</strong> In production applications
            running across multiple servers, use a shared rate-limit store
            when you need limits to apply consistently across instances.
          </p>
        </div>
      </section>

      {/* 8 Multer */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          8. Multer Middleware
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Multer handles <code>multipart/form-data</code> requests. It is
          commonly used when clients upload images, documents, or other
          files to an Express server.
        </p>

        <h3 className="font-semibold">Install Multer</h3>

        <CodeBlock
          code={`npm install multer`}
        />

        <h3 className="font-semibold">Single File Upload</h3>

        <CodeBlock
          code={`import express from "express";
import multer from "multer";

const app = express();

const upload = multer({
  dest: "uploads/",
});

app.post(
  "/upload",
  upload.single("image"),
  (req, res) => {
    console.log(req.file);

    res.json({
      message: "File uploaded",
      file: req.file,
    });
  }
);

app.listen(3000);`}
        />

        <h3 className="font-semibold">Multiple File Upload</h3>

        <CodeBlock
          code={`app.post(
  "/uploads",
  upload.array("images", 5),
  (req, res) => {
    console.log(req.files);

    res.json({
      message: "Files uploaded",
      files: req.files,
    });
  }
);`}
        />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          <code>upload.single()</code> handles one file, while
          <code> upload.array()</code> handles multiple files from the
          same form field.
        </p>

        <div className="rounded-xl border border-[var(--accent-color)]/30 bg-[var(--accent-background)] p-4">
          <p className="text-sm leading-7">
            <strong>Security Tip:</strong> In production, validate file
            types, file sizes, filenames, and storage permissions. Do not
            trust the original filename or client-provided MIME type alone.
          </p>
        </div>
      </section>

      {/* 9 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          9. Registering Multiple Third-party Middleware
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          A real-world Express application can use multiple middleware
          packages together. Register them before the routes that depend
          on them.
        </p>

        <CodeBlock
          code={`import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import { rateLimit } from "express-rate-limit";

const app = express();

// Security headers
app.use(helmet());

// Allow frontend origin
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

// Request logging
app.use(morgan("dev"));

// Parse request body
app.use(express.json());

// Parse cookies
app.use(cookieParser());

// Rate limiting
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
}));

app.get("/", (req, res) => {
  res.json({
    message: "Express server running",
  });
});

app.listen(3000);`}
        />
      </section>

      {/* 10 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          10. Built-in vs Custom vs Third-party Middleware
        </h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[550px] text-left text-sm">
            <thead className="bg-[var(--bg-tertiary)]">
              <tr>
                <th className="p-3">Type</th>
                <th className="p-3">Meaning</th>
                <th className="p-3">Example</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[var(--border-color)]">
              <tr>
                <td className="p-3 font-medium">Built-in</td>
                <td className="p-3">Provided by Express</td>
                <td className="p-3">express.json()</td>
              </tr>

              <tr>
                <td className="p-3 font-medium">Custom</td>
                <td className="p-3">Created by developers</td>
                <td className="p-3">authMiddleware</td>
              </tr>

              <tr>
                <td className="p-3 font-medium">Third-party</td>
                <td className="p-3">Provided by external packages</td>
                <td className="p-3">cors(), morgan()</td>
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
            "Third-party middleware is installed separately using npm.",
            "cors controls cross-origin access from browsers.",
            "morgan logs incoming HTTP requests.",
            "helmet sets security-related HTTP headers.",
            "cookie-parser makes parsed cookies available through req.cookies.",
            "express-rate-limit controls repeated requests.",
            "multer handles multipart/form-data and file uploads.",
            "Middleware execution order matters.",
            "Third-party middleware should be configured according to application requirements.",
            "Always check package documentation for available options and security considerations.",
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

export default ThirdPartyMiddleware;