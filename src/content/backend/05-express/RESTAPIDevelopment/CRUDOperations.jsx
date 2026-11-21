import CodeBlock from "../../../../components/common/CodeBlock";

const CRUDOperations = () => {
  const questions = [
    {
      question: "What are CRUD operations?",
      answer:
        "CRUD stands for Create, Read, Update, and Delete. These are the four basic operations used to manage application data.",
    },
    {
      question: "Which HTTP method is used for Create?",
      answer: "POST is used to create a new resource.",
    },
    {
      question: "What is the difference between PUT and PATCH?",
      answer:
        "PUT generally replaces the complete resource, whereas PATCH updates only specific fields.",
    },
    {
      question: "Which HTTP method is used to retrieve data?",
      answer: "GET is used to retrieve existing resources.",
    },
    {
      question: "Which HTTP method is used to delete data?",
      answer: "DELETE is used to remove a resource.",
    },
    {
      question: "What is the difference between 200 and 201?",
      answer:
        "200 OK indicates a successful request. 201 Created indicates that a new resource has been successfully created.",
    },
    {
      question: "What is req.params?",
      answer:
        "req.params contains route parameters, commonly used to identify a particular resource.",
    },
    {
      question: "What is req.body?",
      answer: "req.body contains data sent by the client in the request body.",
    },
    {
      question: "Can GET requests modify database data?",
      answer:
        "GET requests should only retrieve data and should not modify server-side resources.",
    },
    {
      question: "What is the difference between find() and findById()?",
      answer:
        "find() retrieves documents matching a query, whereas findById() retrieves a single document using its ID.",
    },
  ];

  return (
    <div className="w-full space-y-8 text-[var(--text-primary)]">
      {/* HEADER */}
      <div className="space-y-3">
        <p className="text-sm font-semibold tracking-widest text-[var(--accent-color)]">
          EXPRESS.JS / REST API DEVELOPMENT / 01
        </p>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          CRUD Operations in Backend Development
        </h1>

        <p className="text-base leading-7 text-[var(--text-secondary)]">
          CRUD stands for Create, Read, Update, and Delete. These are the four
          basic operations used to manage data in an application. For example,
          in a user management application, CRUD operations allow us to create
          users, retrieve user details, update user information, and delete
          users.
        </p>
      </div>

      {/* SECTION 1 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          1. What are CRUD Operations?
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          CRUD represents four basic operations performed on application data.
          These operations are commonly implemented through REST APIs.
        </p>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[500px] text-left text-sm">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                {["Operation", "Purpose", "HTTP Method"].map((item) => (
                  <th key={item} className="px-4 py-3 font-semibold">
                    {item}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {[
                ["Create", "Add new data", "POST"],
                ["Read", "Retrieve existing data", "GET"],
                ["Update", "Modify existing data", "PUT / PATCH"],
                ["Delete", "Remove existing data", "DELETE"],
              ].map((row) => (
                <tr
                  key={row[0]}
                  className="border-t border-[var(--border-color)]"
                >
                  {row.map((value) => (
                    <td
                      key={value}
                      className="px-4 py-3 text-[var(--text-secondary)]"
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">2. Create Operation</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The Create operation adds new data to the database. In Express.js, we
          generally use the POST method to create a resource.
        </p>

        <h3 className="text-lg font-semibold">Example: Creating a User</h3>

        <CodeBlock
          code={`// POST /api/users

import User from "../models/user.model.js";

export const createUser = async (req, res, next) => {
  try {
    const { name, email } = req.body;

    const user = await User.create({
      name,
      email,
    });

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <h3 className="mb-2 font-semibold">Important Points</h3>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-[var(--text-secondary)]">
            <li>
              <code>req.body</code> contains data sent by the client.
            </li>
            <li>
              <code>User.create()</code> creates a new document in MongoDB.
            </li>
            <li>
              <code>201 Created</code> indicates successful resource creation.
            </li>
          </ul>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">3. Read Operation</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The Read operation retrieves existing data from the database. In
          Express.js, we use the GET method.
        </p>

        <h3 className="text-lg font-semibold">A. Get All Users</h3>

        <CodeBlock
          code={`// GET /api/users

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    return res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    next(error);
  }
};`}
        />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          <code>User.find()</code> retrieves all matching documents from
          MongoDB.
        </p>

        <h3 className="text-lg font-semibold">B. Get User by ID</h3>

        <CodeBlock
          code={`// GET /api/users/:id

export const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <h3 className="mb-2 font-semibold">Important Points</h3>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-[var(--text-secondary)]">
            <li>
              <code>req.params</code> contains route parameters.
            </li>
            <li>
              <code>User.find()</code> retrieves multiple documents.
            </li>
            <li>
              <code>User.findById()</code> retrieves a document using its ID.
            </li>
            <li>
              <code>404 Not Found</code> indicates that the requested resource
              does not exist.
            </li>
          </ul>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">4. Update Operation</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The Update operation modifies existing data in the database. We
          generally use PUT or PATCH HTTP methods.
        </p>

        <h3 className="text-lg font-semibold">A. Update Using PUT</h3>

        <p className="text-[var(--text-secondary)] leading-7">
          PUT generally replaces the complete resource representation.
        </p>

        <CodeBlock
          code={`// PUT /api/users/:id

export const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    const user = await User.findByIdAndUpdate(
      id,
      { name, email },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};`}
        />

        <h3 className="text-lg font-semibold">B. Update Using PATCH</h3>

        <p className="text-[var(--text-secondary)] leading-7">
          PATCH updates only the specified fields instead of replacing the
          complete resource.
        </p>

        <CodeBlock
          code={`// PATCH /api/users/:id

export const patchUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <h3 className="mb-2 font-semibold">Important Points</h3>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-[var(--text-secondary)]">
            <li>
              <code>findByIdAndUpdate()</code> updates a document using its ID.
            </li>
            <li>
              <code>new: true</code> returns the updated document.
            </li>
            <li>
              <code>runValidators: true</code> runs Mongoose update validators.
            </li>
            <li>PATCH is useful when updating only selected fields.</li>
          </ul>
        </div>
      </section>

      {/* SECTION 5 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">5. Delete Operation</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The Delete operation removes an existing resource from the database.
          In Express.js, we use the DELETE method.
        </p>

        <h3 className="text-lg font-semibold">Example: Delete User</h3>

        <CodeBlock
          code={`// DELETE /api/users/:id

export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <h3 className="mb-2 font-semibold">Important Points</h3>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-[var(--text-secondary)]">
            <li>
              <code>findByIdAndDelete()</code> deletes a document using its ID.
            </li>
            <li>
              <code>404 Not Found</code> indicates that the user does not exist.
            </li>
            <li>
              <code>200 OK</code> can be returned with a success message.
            </li>
            <li>
              <code>204 No Content</code> is another common response for
              successful deletion.
            </li>
          </ul>
        </div>
      </section>

      {/* SECTION 6 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">6. CRUD API Routes</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          We can connect all CRUD controller functions through Express routes.
        </p>

        <CodeBlock
          code={`// routes/user.routes.js

import express from "express";

import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  patchUser,
  deleteUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/", createUser);

router.get("/", getAllUsers);

router.get("/:id", getUserById);

router.put("/:id", updateUser);

router.patch("/:id", patchUser);

router.delete("/:id", deleteUser);

export default router;`}
        />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          These routes can be mounted in the main Express application using
          <code> app.use("/api/users", userRoutes)</code>.
        </p>
      </section>

      {/* SECTION 7 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">7. CRUD Request Flow</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Every CRUD request follows a similar backend request-response cycle.
        </p>

        <CodeBlock
          code={`Client
  |
  v
HTTP Request
  |
  v
Express Route
  |
  v
Controller
  |
  v
Service / Model
  |
  v
Database
  |
  | Returns result
  v
Controller
  |
  v
HTTP Response
  |
  v
Client`}
        />

        <p className="text-[var(--text-secondary)] leading-7">
          Each layer has a separate responsibility. Routes identify the
          endpoint, controllers handle HTTP requests, services execute business
          logic, and models communicate with the database.
        </p>
      </section>

      {/* SECTION 8 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          8. CRUD Operations Summary
        </h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[550px] text-left text-sm">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                {["Operation", "Endpoint", "Mongoose Method"].map((item) => (
                  <th key={item} className="px-4 py-3 font-semibold">
                    {item}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {[
                ["Create", "POST /users", "User.create()"],
                ["Read All", "GET /users", "User.find()"],
                ["Read One", "GET /users/:id", "User.findById()"],
                ["Update", "PUT /users/:id", "User.findByIdAndUpdate()"],
                [
                  "Partial Update",
                  "PATCH /users/:id",
                  "User.findByIdAndUpdate()",
                ],
                ["Delete", "DELETE /users/:id", "User.findByIdAndDelete()"],
              ].map((row) => (
                <tr
                  key={row[0]}
                  className="border-t border-[var(--border-color)]"
                >
                  {row.map((value) => (
                    <td
                      key={value}
                      className="px-4 py-3 text-[var(--text-secondary)]"
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 9 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">9. Best Practices</h2>

        <ul className="list-disc space-y-2 pl-5 leading-7 text-[var(--text-secondary)]">
          <li>Use appropriate HTTP methods for CRUD operations.</li>
          <li>Validate incoming request data before database operations.</li>
          <li>
            Check whether a resource exists before updating or deleting it.
          </li>
          <li>Use appropriate HTTP status codes.</li>
          <li>Keep controllers focused on HTTP handling.</li>
          <li>Use centralized error handling.</li>
          <li>
            Never allow users to update sensitive fields without authorization.
          </li>
          <li>Use pagination when retrieving large collections.</li>
          <li>Never trust client-provided data directly.</li>
        </ul>
      </section>

      {/* INTERVIEW QUESTIONS */}
      <section className="space-y-5 border-t border-[var(--border-color)] pt-7">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Interview Questions</h2>

          <p className="text-sm text-[var(--text-muted)]">
            Click any question to reveal its short answer.
          </p>
        </div>

        <div className="space-y-3">
          {questions.map((item, index) => (
            <details
              key={item.question}
              className="group overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 font-medium transition-colors hover:bg-[var(--bg-hover)]">
                <span className="text-sm sm:text-base">
                  {index + 1}. {item.question}
                </span>

                <span className="shrink-0 text-lg text-[var(--accent-color)] transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>

              <div className="border-t border-[var(--border-color)] px-4 py-4 text-sm leading-7 text-[var(--text-secondary)]">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CRUDOperations;
