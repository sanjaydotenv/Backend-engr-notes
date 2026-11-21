import React, { useState } from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const Models = () => {
  const interviewQuestions = [
    {
      question: "What is a Model in Backend Development?",
      answer:
        "A Model represents a database collection and provides methods to interact with its records.",
    },
    {
      question: "What is a Schema in Mongoose?",
      answer:
        "A Schema defines the structure, data types, validation rules, and default values of documents.",
    },
    {
      question: "What is the difference between Schema and Model?",
      answer:
        "Schema defines the document structure, while Model provides methods to perform database operations.",
    },
    {
      question: "How do you create a Model in Mongoose?",
      answer:
        "Create a Schema using mongoose.Schema() and convert it into a Model using mongoose.model().",
    },
    {
      question: "What is a Document in MongoDB?",
      answer:
        "A Document is an individual record stored inside a MongoDB collection, represented in BSON format.",
    },
    {
      question: "What is the difference between Collection and Document?",
      answer:
        "A Collection contains multiple documents, while a Document represents a single record.",
    },
    {
      question: "What is the purpose of the required validator?",
      answer:
        "The required validator ensures that a field must have a value before a document can be saved.",
    },
    {
      question: "What is a Mongoose Middleware?",
      answer:
        "Mongoose Middleware allows you to execute functions before or after certain database operations.",
    },
    {
      question: "What is the difference between findOne() and findById()?",
      answer:
        "findOne() searches using a query object, while findById() searches using a document's _id.",
    },
    {
      question: "What is the purpose of timestamps in Mongoose?",
      answer:
        "timestamps automatically add createdAt and updatedAt fields to documents.",
    },
    {
      question: "What is the difference between populate() and ref?",
      answer:
        "ref defines a relationship with another Model, while populate() retrieves the referenced document.",
    },
    {
      question: "Can one Model perform CRUD operations?",
      answer:
        "Yes. Mongoose Models provide methods such as create(), find(), findByIdAndUpdate(), and findByIdAndDelete().",
    },
  ];

  const [openQuestions, setOpenQuestions] = useState({});

  const toggleQuestion = (index) => {
    setOpenQuestions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <p className="text-sm font-semibold tracking-wider text-orange-500">
          BACKEND ARCHITECTURE / 07
        </p>

        <h1 className="mt-2 text-3xl font-bold">
          Models in Backend Development
        </h1>

        <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">
          Models define how application data is structured and provide an
          interface to interact with the database. In MongoDB, Mongoose Models
          help us create, read, update, and delete documents.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">1. What are Models?</h2>

        <p>
          A Model is an interface between our application and the database. It
          allows us to perform database operations using JavaScript methods.
        </p>

        <p>
          In Mongoose, a Model is created from a Schema and is generally
          associated with a MongoDB collection.
        </p>

        <CodeBlock
          code={`// models/user.model.js

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

export default User;`}
        />

        <p>
          Here, <code>User</code> is a Model that allows us to interact with the
          users collection.
        </p>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">2. What is a Schema?</h2>

        <p>
          A Schema defines the structure of documents inside a MongoDB
          collection.
        </p>

        <p>It describes:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Field names.</li>
          <li>Data types.</li>
          <li>Required fields.</li>
          <li>Default values.</li>
          <li>Validation rules.</li>
          <li>Indexes and relationships.</li>
        </ul>

        <CodeBlock
          code={`const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  age: {
    type: Number,
    default: 18,
  },
});`}
        />

        <p>
          This Schema defines three fields: name, email, and age. Name and email
          are required, while age defaults to 18.
        </p>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">3. Schema vs Model vs Document</h2>

        <CodeBlock
          code={`Schema
  |
  | Defines document structure
  v
Model
  |
  | Creates and manages records
  v
Document
  |
  | Actual stored data
  v
MongoDB Collection`}
        />

        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Schema:</strong> Defines how data should look.
          </li>
          <li>
            <strong>Model:</strong> Provides methods to interact with data.
          </li>
          <li>
            <strong>Document:</strong> Represents an individual database record.
          </li>
        </ul>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">4. Creating a Model</h2>

        <p>Let's create a complete User Model using Mongoose.</p>

        <CodeBlock
          code={`// models/user.model.js

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
    },

    age: {
      type: Number,
      default: 18,
      min: 1,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;`}
        />

        <p>
          The second argument contains Schema options. Here, timestamps
          automatically manages createdAt and updatedAt.
        </p>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">5. Data Types in Mongoose</h2>

        <p>
          Mongoose provides different Schema types to define the type of data
          stored in documents.
        </p>

        <CodeBlock
          code={`const exampleSchema = new mongoose.Schema({
  name: String,
  age: Number,
  isActive: Boolean,
  createdAt: Date,
  tags: [String],
  scores: [Number],
  address: {
    city: String,
    country: String,
  },
  userId: mongoose.Schema.Types.ObjectId,
  metadata: mongoose.Schema.Types.Mixed,
});`}
        />

        <ul className="list-disc space-y-2 pl-6">
          <li>
            <code>String</code> — Text values.
          </li>
          <li>
            <code>Number</code> — Numeric values.
          </li>
          <li>
            <code>Boolean</code> — true or false.
          </li>
          <li>
            <code>Date</code> — Date and time.
          </li>
          <li>
            <code>Array</code> — Multiple values.
          </li>
          <li>
            <code>ObjectId</code> — MongoDB document identifier.
          </li>
          <li>
            <code>Mixed</code> — Flexible data of different types.
          </li>
        </ul>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">6. Schema Validation</h2>

        <p>
          Validation ensures that documents follow the rules defined in the
          Schema.
        </p>

        <CodeBlock
          code={`const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },

  price: {
    type: Number,
    required: true,
    min: 1,
  },

  category: {
    type: String,
    enum: ["Electronics", "Clothing", "Books"],
  },

  quantity: {
    type: Number,
    default: 0,
    min: 0,
  },
});`}
        />

        <p>Common validators:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>
            <code>required</code> — Field must be provided.
          </li>
          <li>
            <code>min</code> — Minimum numeric value.
          </li>
          <li>
            <code>max</code> — Maximum numeric value.
          </li>
          <li>
            <code>minlength</code> — Minimum string length.
          </li>
          <li>
            <code>maxlength</code> — Maximum string length.
          </li>
          <li>
            <code>enum</code> — Value must match an allowed option.
          </li>
          <li>
            <code>match</code> — Value must match a regular expression.
          </li>
        </ul>

        <p>
          Note: <code>unique: true</code> creates a unique index; it is not a
          normal Mongoose validator.
        </p>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">7. CRUD Operations Using Models</h2>

        <p>Mongoose Models provide methods to perform CRUD operations.</p>

        <h3 className="font-semibold text-orange-500">Create</h3>

        <CodeBlock
          code={`const user = await User.create({
  name: "Mayur",
  email: "mayur@example.com",
  password: "hashedPassword",
});`}
        />

        <h3 className="font-semibold text-orange-500">Read</h3>

        <CodeBlock
          code={`// Find all users
const users = await User.find();

// Find one user
const user = await User.findOne({
  email: "mayur@example.com",
});

// Find by ID
const userById = await User.findById(userId);`}
        />

        <h3 className="font-semibold text-orange-500">Update</h3>

        <CodeBlock
          code={`const updatedUser = await User.findByIdAndUpdate(
  userId,
  {
    name: "Updated Name",
  },
  {
    new: true,
    runValidators: true,
  }
);`}
        />

        <h3 className="font-semibold text-orange-500">Delete</h3>

        <CodeBlock
          code={`const deletedUser = await User.findByIdAndDelete(userId);`}
        />
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">8. Timestamps</h2>

        <p>Timestamps automatically add two fields to documents:</p>

        <CodeBlock
          code={`const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
  },
  {
    timestamps: true,
  }
);`}
        />

        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>createdAt:</strong> Stores when the document was created.
          </li>
          <li>
            <strong>updatedAt:</strong> Stores when the document was last
            updated.
          </li>
        </ul>
      </section>

      {/* 9 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">9. Relationships Between Models</h2>

        <p>
          MongoDB supports references between documents using ObjectId. In
          Mongoose, we can define references with the ref option.
        </p>

        <CodeBlock
          code={`// models/post.model.js

import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: String,
  content: String,

  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Post = mongoose.model("Post", postSchema);

export default Post;`}
        />

        <p>Here, the author field stores the ObjectId of a User document.</p>

        <h3 className="font-semibold text-orange-500">Using populate()</h3>

        <CodeBlock
          code={`const posts = await Post.find().populate(
  "author",
  "name email"
);`}
        />

        <p>
          <code>populate()</code> retrieves the referenced User document instead
          of returning only its ObjectId.
        </p>
      </section>

      {/* 10 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">10. Mongoose Middleware</h2>

        <p>
          Middleware allows us to execute functions before or after certain
          Mongoose operations.
        </p>

        <CodeBlock
          code={`const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

// Runs before saving a document
userSchema.pre("save", function () {
  console.log("User is about to be saved");
});

// Runs after saving a document
userSchema.post("save", function (doc) {
  console.log("User saved:", doc.name);
});

const User = mongoose.model("User", userSchema);`}
        />

        <p>
          Important: Register middleware before compiling the Schema into a
          Model.
        </p>

        <p>
          Middleware can be used for tasks such as logging, transformations, and
          other operations around database actions.
        </p>
      </section>

      {/* 11 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">11. Model vs Repository</h2>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[450px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="p-3">Model</th>
                <th className="p-3">Repository</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Represents a database collection.</td>
                <td className="p-3">Handles data access operations.</td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Defines schema and model behavior.</td>
                <td className="p-3">Organizes database queries.</td>
              </tr>
              <tr>
                <td className="p-3">Example: User model.</td>
                <td className="p-3">Example: findUserByEmail().</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 12 */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold">12. Best Practices</h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Keep each Model in a separate file.</li>
          <li>Use meaningful Schema field names.</li>
          <li>Apply appropriate validation rules.</li>
          <li>Use timestamps when tracking document history is useful.</li>
          <li>
            Create indexes for frequently queried fields when appropriate.
          </li>
          <li>Keep sensitive fields such as passwords protected.</li>
          <li>Register middleware before creating the Model.</li>
          <li>
            Avoid putting application business logic inside Models
            unnecessarily.
          </li>
        </ul>
      </section>

      {/* Interview Questions */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-bold text-orange-500">
            Interview Questions
          </h2>

          <p className="mt-2 text-sm text-[var(--text-secondary)]">
            Click any question to reveal its short answer.
          </p>
        </div>

        <div className="space-y-3">
          {interviewQuestions.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border border-[var(--border-color)]"
            >
              <button
                type="button"
                onClick={() => toggleQuestion(index)}
                aria-expanded={!!openQuestions[index]}
                className="flex w-full items-center justify-between gap-4 p-4 text-left transition-colors hover:bg-[var(--bg-secondary)]"
              >
                <span className="font-medium">
                  <span className="mr-2 text-orange-500">{index + 1}.</span>
                  {item.question}
                </span>

                <span className="shrink-0 text-xl text-orange-500">
                  {openQuestions[index] ? "−" : "+"}
                </span>
              </button>

              {openQuestions[index] && (
                <div className="border-t border-[var(--border-color)] bg-[var(--bg-secondary)] px-4 py-4">
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

export default Models;
