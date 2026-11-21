import React from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const UnderstandingBackendProjectStructure = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <p className="text-sm font-semibold tracking-wider text-orange-500">
          BACKEND ARCHITECTURE / 01
        </p>

        <h1 className="mt-2 text-3xl font-bold">
          Understanding Backend Project Structure
        </h1>

        <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">
          Backend Project Structure means organizing backend code into
          separate folders and files according to their responsibilities.
          A good structure makes applications easier to understand,
          maintain, debug, and scale.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          1. Why Do We Need a Project Structure?
        </h2>

        <p>
          Initially, we can write all backend code inside a single file.
          But as an application grows, managing everything in one file
          becomes difficult.
        </p>

        <p>Common problems with an unorganized project:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Code becomes difficult to understand.</li>
          <li>Debugging becomes complicated.</li>
          <li>Code duplication increases.</li>
          <li>Adding new features becomes difficult.</li>
          <li>Multiple developers cannot work efficiently.</li>
        </ul>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          2. Basic Backend Project Structure
        </h2>

        <p>
          A typical Node.js and Express backend application can follow
          this folder structure:
        </p>

        <CodeBlock
          code={`backend/
│
├── src/
│   │
│   ├── config/
│   │   └── database.js
│   │
│   ├── routes/
│   │   └── user.routes.js
│   │
│   ├── controllers/
│   │   └── user.controller.js
│   │
│   ├── services/
│   │   └── user.service.js
│   │
│   ├── repositories/
│   │   └── user.repository.js
│   │
│   ├── models/
│   │   └── user.model.js
│   │
│   ├── middlewares/
│   │   └── auth.middleware.js
│   │
│   ├── utils/
│   │   └── apiResponse.js
│   │
│   ├── app.js
│   └── server.js
│
├── .env
├── .gitignore
├── package.json
└── README.md`}
        />
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          3. Understanding Each Folder
        </h2>

        <div className="space-y-5">
          <div>
            <h3 className="font-semibold text-orange-500">src/</h3>
            <p>
              Contains the main source code of our backend application.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-orange-500">config/</h3>
            <p>
              Stores application configurations such as database
              connections and environment-based settings.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-orange-500">routes/</h3>
            <p>
              Defines API endpoints and connects them with their
              respective controllers.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-orange-500">controllers/</h3>
            <p>
              Handles incoming requests, reads request data, calls
              services, and sends responses to clients.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-orange-500">services/</h3>
            <p>
              Contains business logic, such as user registration,
              payment processing, and other application operations.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-orange-500">repositories/</h3>
            <p>
              Handles database-related operations and separates data
              access logic from business logic.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-orange-500">models/</h3>
            <p>
              Defines database schemas and models using tools like
              Mongoose.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-orange-500">middlewares/</h3>
            <p>
              Contains functions that execute during the request-response
              lifecycle, such as authentication and validation.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-orange-500">utils/</h3>
            <p>
              Contains reusable helper functions that can be used
              throughout the application.
            </p>
          </div>
        </div>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          4. app.js vs server.js
        </h2>

        <h3 className="font-semibold text-orange-500">app.js</h3>
        <p>
          Responsible for creating the Express application and
          registering middlewares and routes.
        </p>

        <CodeBlock
          code={`import express from "express";
import userRoutes from "./routes/user.routes.js";

const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);

export default app;`}
        />

        <h3 className="font-semibold text-orange-500">server.js</h3>
        <p>
          Responsible for connecting external resources, such as the
          database, and starting the HTTP server.
        </p>

        <CodeBlock
          code={`import app from "./app.js";
import connectDB from "./config/database.js";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(\`Server running on port \${PORT}\`);
    });
  } catch (error) {
    console.error("Server startup failed:", error);
    process.exit(1);
  }
};

startServer();`}
        />

        <p>
          <strong>Remember:</strong> app.js configures the Express
          application, whereas server.js starts the server.
        </p>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          5. How Does a Request Flow Through the Project?
        </h2>

        <p>
          When a client sends an API request, it can pass through
          different layers of the backend application.
        </p>

        <CodeBlock
          code={`Client
  |
  v
Route
  |
  v
Middleware
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
Response to Client`}
        />

        <p>
          Each layer has a separate responsibility. This separation
          makes the application easier to maintain and test.
        </p>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          6. Example: User Registration Flow
        </h2>

        <p>
          Suppose a user sends a registration request:
        </p>

        <CodeBlock
          code={`POST /api/users/register

{
  "name": "Mayur",
  "email": "mayur@example.com",
  "password": "123456"
}`}
        />

        <ol className="list-decimal space-y-2 pl-6">
          <li>
            <strong>Route:</strong> Receives the registration endpoint.
          </li>
          <li>
            <strong>Middleware:</strong> Validates incoming request data.
          </li>
          <li>
            <strong>Controller:</strong> Handles the request and calls
            the registration service.
          </li>
          <li>
            <strong>Service:</strong> Executes registration business logic
            and hashes the password.
          </li>
          <li>
            <strong>Repository:</strong> Performs the database operation.
          </li>
          <li>
            <strong>Model:</strong> Defines the user document structure.
          </li>
          <li>
            <strong>Controller:</strong> Sends the final response.
          </li>
        </ol>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          7. Best Practices
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Keep each file responsible for a specific task.</li>
          <li>Avoid writing the entire application in one file.</li>
          <li>Keep business logic separate from controllers.</li>
          <li>Use environment variables for sensitive configuration.</li>
          <li>Create reusable utilities instead of duplicating code.</li>
          <li>Use meaningful folder and file names.</li>
          <li>Keep the structure simple and avoid unnecessary folders.</li>
        </ul>
      </section>

      {/* Interview Questions */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-orange-500">
          Interview Questions
        </h2>

        <div className="space-y-3">
          {[
            "What is backend project structure?",
            "Why do we need a proper backend folder structure?",
            "What is the responsibility of the routes folder?",
            "What is the difference between controllers and services?",
            "What is the repository layer?",
            "What is the difference between app.js and server.js?",
            "How does a request flow through a backend application?",
            "Why should business logic be separated from controllers?",
          ].map((question, index) => (
            <div
              key={index}
              className="rounded-lg border border-[var(--border-color)] p-4"
            >
              <p className="font-medium">
                {index + 1}. {question}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default UnderstandingBackendProjectStructure;