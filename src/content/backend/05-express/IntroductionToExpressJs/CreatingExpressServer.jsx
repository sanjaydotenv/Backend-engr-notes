import React, { useState } from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const CreatingExpressServer = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion((prev) => (prev === index ? null : index));
  };

  const interviewQuestions = [
    {
      question: "How do you create an Express server?",
      answer:
        "Import Express, create an application using express(), define routes, and start the server using app.listen().",
    },
    {
      question: "What does express() return?",
      answer:
        "It returns an Express application object that provides methods for handling requests, responses, middleware, and routes.",
    },
    {
      question: "What is the purpose of app.listen()?",
      answer:
        "It starts the HTTP server and makes the application listen for incoming requests on a specified port.",
    },
    {
      question: "What is process.env.PORT?",
      answer:
        "It reads the port number from environment variables. This allows the application to use different ports in different environments.",
    },
    {
      question: "Why do we use app.get()?",
      answer:
        "app.get() defines a route that handles incoming HTTP GET requests for a specific URL.",
    },
    {
      question: "What is the difference between app.listen() and app.get()?",
      answer:
        "app.listen() starts the server, while app.get() defines how the server handles a particular GET request.",
    },
  ];

  return (
    <div className="w-full space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <div className="space-y-3">
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          EXPRESS.JS FUNDAMENTALS / 04
        </p>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Creating an Express Server
        </h1>

        <p className="max-w-3xl text-base leading-7 text-[var(--text-secondary)]">
          An Express server allows a Node.js application to receive HTTP
          requests and send responses. Let's create a basic server step by
          step.
        </p>
      </div>

      {/* 01 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">1. Install Express</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          First, create a Node.js project and install Express using npm.
        </p>

        <CodeBlock
          code={`npm init -y
npm install express`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          This installs Express and adds it to your project's dependencies.
        </p>
      </section>

      {/* 02 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">2. Import Express</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Import Express into your JavaScript file so you can use its
          functionality.
        </p>

        <CodeBlock
          code={`import express from "express";`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <p className="font-semibold text-[var(--accent-color)]">
            Important
          </p>
          <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
            To use import syntax in a Node.js project, configure{" "}
            <code className="text-[var(--accent-color)]">"type": "module"</code>{" "}
            in your package.json.
          </p>
        </div>
      </section>

      {/* 03 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">3. Create an Express Application</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Use <code className="text-[var(--accent-color)]">express()</code> to
          create an Express application instance.
        </p>

        <CodeBlock
          code={`import express from "express";

const app = express();`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code className="text-[var(--accent-color)]">app</code> object
          provides methods to define routes, register middleware, and handle
          HTTP requests.
        </p>
      </section>

      {/* 04 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">4. Create Your First Route</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Routes define how your server responds when a client requests a
          particular URL.
        </p>

        <CodeBlock
          code={`app.get("/", (req, res) => {
  res.send("Hello from Express Server!");
});`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <p className="mb-3 font-semibold">Understanding the route</p>

          <ul className="space-y-2 text-sm leading-6 text-[var(--text-secondary)]">
            <li>
              <code className="text-[var(--accent-color)]">app.get()</code> –
              Handles GET requests.
            </li>
            <li>
              <code className="text-[var(--accent-color)]">"/"</code> –
              Represents the root URL.
            </li>
            <li>
              <code className="text-[var(--accent-color)]">req</code> –
              Contains information about the incoming request.
            </li>
            <li>
              <code className="text-[var(--accent-color)]">res</code> –
              Provides methods to send a response.
            </li>
            <li>
              <code className="text-[var(--accent-color)]">res.send()</code> –
              Sends a response to the client.
            </li>
          </ul>
        </div>
      </section>

      {/* 05 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">5. Start the Express Server</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Use <code className="text-[var(--accent-color)]">app.listen()</code>{" "}
          to start the server on a specific port.
        </p>

        <CodeBlock
          code={`const PORT = 3000;

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Once the server starts, it listens for incoming HTTP requests on
          port <code className="text-[var(--accent-color)]">3000</code>.
        </p>
      </section>

      {/* 06 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">6. Complete Express Server</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Let's combine everything into one file.
        </p>

        <CodeBlock
          code={`import express from "express";

const app = express();

const PORT = 3000;

// First route
app.get("/", (req, res) => {
  res.send("Welcome to Express!");
});

// Second route
app.get("/about", (req, res) => {
  res.send("This is the About page.");
});

// Start server
app.listen(PORT, () => {
  console.log(\`Server running at http://localhost:\${PORT}\`);
});`}
        />
      </section>

      {/* 07 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">7. Run and Test the Server</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Save the file as <code className="text-[var(--accent-color)]">server.js</code>{" "}
          and execute it using Node.js.
        </p>

        <CodeBlock
          code={`node server.js`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Open your browser and visit these URLs:
        </p>

        <div className="space-y-3">
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
            <p className="text-sm text-[var(--text-secondary)]">Root Route</p>
            <code className="mt-1 block text-[var(--accent-color)]">
              http://localhost:3000/
            </code>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              Response: Welcome to Express!
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
            <p className="text-sm text-[var(--text-secondary)]">About Route</p>
            <code className="mt-1 block text-[var(--accent-color)]">
              http://localhost:3000/about
            </code>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              Response: This is the About page.
            </p>
          </div>
        </div>
      </section>

      {/* 08 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">8. Using Environment Variables for Port</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Instead of hardcoding the port, we can read it from environment
          variables. This makes the application easier to configure.
        </p>

        <CodeBlock
          code={`import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          If <code className="text-[var(--accent-color)]">process.env.PORT</code>{" "}
          is available, the server uses that value. Otherwise, it uses{" "}
          <code className="text-[var(--accent-color)]">3000</code>.
        </p>
      </section>

      {/* Important Points */}
      <section className="space-y-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-5">
        <h2 className="text-xl font-bold">Important Points</h2>

        <ul className="space-y-3 text-sm leading-6 text-[var(--text-secondary)]">
          <li>• express() creates an Express application.</li>
          <li>• app.get() handles incoming GET requests.</li>
          <li>• req contains incoming request information.</li>
          <li>• res is used to send responses to clients.</li>
          <li>• app.listen() starts the HTTP server.</li>
          <li>• Environment variables help configure the server.</li>
        </ul>
      </section>

      {/* Interview Questions */}
      <section className="space-y-4">
        <div>
          <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
            TEST YOUR KNOWLEDGE
          </p>
          <h2 className="mt-2 text-2xl font-bold">Interview Questions</h2>
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

export default CreatingExpressServer;