import React from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const MVCArchitecture = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <p className="text-sm font-semibold tracking-wider text-orange-500">
          BACKEND ARCHITECTURE / 02
        </p>

        <h1 className="mt-2 text-3xl font-bold">MVC Architecture</h1>

        <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">
          MVC stands for Model-View-Controller. It is a software architectural
          pattern that separates an application into three main components:
          Model, View, and Controller. This separation makes applications easier
          to organize, maintain, and manage.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">1. What is MVC Architecture?</h2>

        <p>
          MVC is a design pattern that separates application responsibilities
          into three different components.
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Model:</strong> Manages application data and
            database-related operations.
          </li>
          <li>
            <strong>View:</strong> Handles the user interface and presentation
            of data.
          </li>
          <li>
            <strong>Controller:</strong> Handles user requests and connects the
            Model and View.
          </li>
        </ul>

        <p>
          Instead of putting everything in one place, MVC separates
          responsibilities into different components.
        </p>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">2. Three Components of MVC</h2>

        <h3 className="font-semibold text-orange-500">A. Model</h3>

        <p>
          The Model represents application data and handles database-related
          operations.
        </p>

        <p>Responsibilities:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Defines the structure of data.</li>
          <li>Communicates with the database.</li>
          <li>Performs database queries.</li>
          <li>Manages data-related rules.</li>
        </ul>

        <CodeBlock
          code={`// models/user.model.js

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

export default User;`}
        />

        <h3 className="font-semibold text-orange-500">B. View</h3>

        <p>
          The View is responsible for displaying data to the user. It represents
          the presentation layer of an application.
        </p>

        <p>Responsibilities:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Displays information to users.</li>
          <li>Provides the user interface.</li>
          <li>Shows data received from the application.</li>
        </ul>

        <p>
          In a traditional MVC application, View can be an HTML template. In a
          MERN application, React usually handles the frontend UI separately
          from the Express backend.
        </p>

        <h3 className="font-semibold text-orange-500">C. Controller</h3>

        <p>
          The Controller receives incoming requests, communicates with the
          Model, and returns an appropriate response.
        </p>

        <p>Responsibilities:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Handles incoming requests.</li>
          <li>Reads request parameters and body.</li>
          <li>Calls required application operations.</li>
          <li>Returns responses to the client.</li>
        </ul>

        <CodeBlock
          code={`// controllers/user.controller.js

import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    return res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};`}
        />
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">3. How MVC Architecture Works</h2>

        <p>
          Let's understand the flow using a simple example. A user wants to see
          all users from the application.
        </p>

        <CodeBlock
          code={`Client
  |
  | GET /users
  v
Controller
  |
  | Requests user data
  v
Model
  |
  | Fetches data
  v
Database
  |
  | Returns users
  v
Model
  |
  | Returns data
  v
Controller
  |
  | Sends response
  v
Client / View`}
        />

        <p>Step-by-step flow:</p>

        <ol className="list-decimal space-y-2 pl-6">
          <li>User sends a request to the server.</li>
          <li>Controller receives the request.</li>
          <li>Controller interacts with the Model.</li>
          <li>Model fetches data from the database.</li>
          <li>Model returns the data to the Controller.</li>
          <li>Controller sends the response to the client.</li>
          <li>The frontend displays the received data.</li>
        </ol>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">4. MVC Project Structure</h2>

        <p>
          A basic Node.js and Express application can follow this MVC folder
          structure:
        </p>

        <CodeBlock
          code={`backend/
│
├── models/
│   └── user.model.js
│
├── views/
│   └── user.ejs
│
├── controllers/
│   └── user.controller.js
│
├── routes/
│   └── user.routes.js
│
├── app.js
└── server.js`}
        />

        <p>
          Routes define endpoints, Controllers handle requests, Models manage
          data, and Views display the output.
        </p>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">
          5. Connecting Routes with Controllers
        </h2>

        <p>
          Routes define which controller function should execute when a
          particular API endpoint is requested.
        </p>

        <CodeBlock
          code={`// routes/user.routes.js

import express from "express";
import { getUsers } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", getUsers);

export default router;`}
        />

        <CodeBlock
          code={`// app.js

import express from "express";
import userRoutes from "./routes/user.routes.js";

const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);

export default app;`}
        />

        <p>
          Now, when a client sends a GET request to
          <code className="mx-1 rounded bg-[var(--bg-tertiary)] px-2 py-1">
            /api/users
          </code>
          , the getUsers controller executes.
        </p>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">6. Advantages of MVC</h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Separation of Concerns:</strong> Every component has a
            separate responsibility.
          </li>
          <li>
            <strong>Maintainability:</strong> Code becomes easier to update and
            maintain.
          </li>
          <li>
            <strong>Reusability:</strong> Components can be reused across
            different parts of the application.
          </li>
          <li>
            <strong>Scalability:</strong> Organized code is easier to extend as
            an application grows.
          </li>
          <li>
            <strong>Testing:</strong> Individual components can be tested
            separately.
          </li>
          <li>
            <strong>Team Collaboration:</strong> Developers can work on
            different components independently.
          </li>
        </ul>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">7. Limitations of MVC</h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Can introduce unnecessary complexity in small applications.</li>
          <li>
            Controllers can become large if responsibilities are not separated
            properly.
          </li>
          <li>
            Large applications may require additional architectural layers.
          </li>
          <li>Requires a clear understanding of component responsibilities.</li>
        </ul>
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">8. MVC vs Three-Tier Architecture</h2>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[500px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="p-3">MVC</th>
                <th className="p-3">Three-Tier Architecture</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Model, View, Controller</td>
                <td className="p-3">Presentation, Business, Data Access</td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">
                  Focuses on separating application responsibilities.
                </td>
                <td className="p-3">
                  Focuses on separating application into layers.
                </td>
              </tr>
              <tr>
                <td className="p-3">Common in web applications.</td>
                <td className="p-3">Common in enterprise applications.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Interview Questions */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-orange-500">
          Interview Questions
        </h2>

        <div className="space-y-3">
          {[
            "What is MVC architecture?",
            "What are the three components of MVC?",
            "What is the responsibility of a Model?",
            "What is the responsibility of a Controller?",
            "What is the View in MVC?",
            "How does the request-response flow work in MVC?",
            "What is the difference between Model and Controller?",
            "What are the advantages of MVC architecture?",
            "What are the limitations of MVC?",
            "Can we use MVC architecture in a MERN stack application?",
            "What is the difference between MVC and Three-Tier Architecture?",
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

export default MVCArchitecture;
