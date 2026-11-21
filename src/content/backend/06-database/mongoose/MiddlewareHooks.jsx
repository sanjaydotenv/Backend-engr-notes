import CodeBlock from "../../../../components/common/CodeBlock";

const MiddlewareHooks = () => {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <div className="space-y-2">
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          MONGOOSE / 07
        </p>
        <h1 className="text-3xl font-bold">Mongoose Middleware / Hooks</h1>
        <p className="text-base leading-7 text-[var(--text-secondary)]">
          Mongoose Middleware allows us to execute custom functions before or
          after specific database operations. These functions are also called
          hooks.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What is Middleware?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Middleware is a function that runs automatically during a particular
          Mongoose operation.
        </p>

        <p className="font-semibold">Example:</p>

        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>Hash a password before saving a user.</li>
          <li>Log information after a document is saved.</li>
          <li>Modify query conditions before fetching data.</li>
          <li>Perform cleanup after deleting a document.</li>
        </ul>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-3">
          <p className="font-semibold text-[var(--accent-color)]">
            Middleware Flow
          </p>
          <div className="flex flex-col items-center gap-2 text-sm text-center">
            <div className="w-full rounded-lg border border-[var(--border-color)] p-3">
              Mongoose Operation
            </div>
            <span className="text-[var(--accent-color)]">↓</span>
            <div className="w-full rounded-lg border border-[var(--border-color)] p-3">
              Pre Middleware
            </div>
            <span className="text-[var(--accent-color)]">↓</span>
            <div className="w-full rounded-lg border border-[var(--border-color)] p-3">
              Database Operation
            </div>
            <span className="text-[var(--accent-color)]">↓</span>
            <div className="w-full rounded-lg border border-[var(--border-color)] p-3">
              Post Middleware
            </div>
          </div>
        </div>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Types of Middleware</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Mongoose provides different middleware types depending on which
          operation we want to intercept.
        </p>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[480px] text-sm text-left">
            <thead className="bg-[var(--bg-card)]">
              <tr>
                <th className="p-3">Type</th>
                <th className="p-3">Purpose</th>
                <th className="p-3">Example</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              {[
                ["Document", "Works with document operations", "save()"],
                ["Query", "Works with query operations", "find()"],
                ["Model", "Works with model-level operations", "insertMany()"],
                [
                  "Aggregate",
                  "Works with aggregation pipelines",
                  "aggregate()",
                ],
              ].map(([type, purpose, example]) => (
                <tr
                  key={type}
                  className="border-t border-[var(--border-color)]"
                >
                  <td className="p-3 font-medium text-[var(--accent-color)]">
                    {type}
                  </td>
                  <td className="p-3">{purpose}</td>
                  <td className="p-3">{example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Pre Middleware</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Pre middleware runs before a particular Mongoose operation. We define
          it using schema.pre().
        </p>

        <CodeBlock
          code={`const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

userSchema.pre("save", function () {
  console.log("Before saving user");
});`}
        />

        <p className="font-semibold">How it works:</p>

        <ol className="list-decimal space-y-2 pl-5 text-sm text-[var(--text-secondary)]">
          <li>We call user.save().</li>
          <li>Mongoose executes the pre save middleware.</li>
          <li>The middleware completes.</li>
          <li>Mongoose saves the document.</li>
        </ol>

        <p className="text-sm text-[var(--text-secondary)]">
          Modern Mongoose supports async middleware, so we can also perform
          asynchronous tasks inside pre hooks.
        </p>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Post Middleware</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Post middleware runs after a particular Mongoose operation has
          completed successfully.
        </p>

        <CodeBlock
          code={`userSchema.post("save", function (doc) {
  console.log("User saved successfully");
  console.log(doc.name);
});`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Here, doc represents the saved document passed to the post hook.
        </p>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Pre vs Post Middleware</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[420px] text-sm text-left">
            <thead className="bg-[var(--bg-card)]">
              <tr>
                <th className="p-3">Pre Middleware</th>
                <th className="p-3">Post Middleware</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr>
                <td className="p-3">Runs before operation.</td>
                <td className="p-3">Runs after operation.</td>
              </tr>
              <tr>
                <td className="p-3">Used to modify data.</td>
                <td className="p-3">Used for logging or follow-up work.</td>
              </tr>
              <tr>
                <td className="p-3">
                  Can stop the operation by throwing an error.
                </td>
                <td className="p-3">Runs after successful completion.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Async Middleware</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Middleware can also perform asynchronous operations using async/await.
        </p>

        <CodeBlock
          code={`userSchema.pre("save", async function () {
  console.log("Preparing user data...");

  await someAsyncFunction();

  console.log("Preparation completed");
});`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Mongoose waits for the returned Promise to complete before continuing
          the operation.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
          <p className="font-semibold text-[var(--accent-color)]">Important</p>
          <p className="text-sm leading-6 text-[var(--text-secondary)]">
            With async middleware, you generally do not need to call next(). The
            Promise returned by the async function controls execution.
          </p>
        </div>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Using next() in Middleware</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          In callback-style middleware, next() tells Mongoose that the
          middleware has completed and execution can continue.
        </p>

        <CodeBlock
          code={`userSchema.pre("save", function (next) {
  console.log("Before saving");

  next();
});`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          If we pass an error to next(), Mongoose stops the operation and
          returns the error.
        </p>

        <CodeBlock
          code={`userSchema.pre("save", function (next) {
  if (!this.name) {
    return next(new Error("Name is required"));
  }

  next();
});`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Do not mix callback-style next() and async/Promise-based completion in
          the same middleware.
        </p>
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Document Middleware</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Document middleware works with individual Mongoose documents. Inside
          document middleware, this refers to the current document.
        </p>

        <CodeBlock
          code={`userSchema.pre("save", function () {
  console.log(this.name);

  this.name = this.name.trim();
});`}
        />

        <p className="font-semibold">Common Document Middleware:</p>

        <CodeBlock
          code={`save
validate
updateOne
deleteOne
init`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Some middleware operations have different document/query behavior
          depending on how they are registered.
        </p>
      </section>

      {/* 9 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Query Middleware</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Query middleware runs before or after query operations such as find(),
          findOne(), updateOne(), and deleteOne().
        </p>

        <CodeBlock
          code={`userSchema.pre("find", function () {
  console.log("Executing find query");

  this.where({ isActive: true });
});`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Here, this refers to the Mongoose Query object, not the document. We
          use it to modify query conditions.
        </p>

        <p className="font-semibold">Example:</p>

        <CodeBlock code={`const users = await User.find();`} />

        <p className="text-sm text-[var(--text-secondary)]">
          Because of the middleware, this query automatically adds isActive:
          true to its conditions.
        </p>
      </section>

      {/* 10 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          10. Model and Aggregate Middleware
        </h2>

        <p className="font-semibold">Model Middleware</p>

        <p className="leading-7 text-[var(--text-secondary)]">
          Model middleware works with model-level operations such as
          insertMany().
        </p>

        <CodeBlock
          code={`userSchema.pre("insertMany", function (next, docs) {
  console.log("Inserting multiple users");

  next();
});`}
        />

        <p className="font-semibold">Aggregate Middleware</p>

        <p className="leading-7 text-[var(--text-secondary)]">
          Aggregate middleware runs when an aggregation pipeline is executed.
        </p>

        <CodeBlock
          code={`userSchema.pre("aggregate", function () {
  console.log("Aggregation started");

  this.pipeline().unshift({
    $match: {
      isActive: true,
    },
  });
});`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Here, this.pipeline() gives access to the aggregation pipeline.
        </p>
      </section>

      {/* 11 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          11. Real-World Example: Password Hashing
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          One common use of pre save middleware is hashing a user's password
          before saving it in the database.
        </p>

        <CodeBlock language="bash" code={`npm install bcryptjs`} />

        <CodeBlock
          code={`import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  name: String,

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", async function () {
  // Hash only when password is modified
  if (!this.isModified("password")) return;

  const salt = await bcrypt.genSalt(10);

  this.password = await bcrypt.hash(
    this.password,
    salt
  );
});

const User = mongoose.model("User", userSchema);

export default User;`}
        />

        <p className="font-semibold">How it works:</p>

        <ol className="list-decimal space-y-2 pl-5 text-sm text-[var(--text-secondary)]">
          <li>A user provides a plain password.</li>
          <li>We call User.create() or document.save().</li>
          <li>Pre save middleware checks whether password changed.</li>
          <li>bcrypt hashes the password.</li>
          <li>Mongoose saves the hashed password.</li>
        </ol>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
          <p className="font-semibold text-[var(--accent-color)]">Important</p>
          <p className="text-sm leading-6 text-[var(--text-secondary)]">
            save middleware does not run for findByIdAndUpdate() or
            findOneAndUpdate(). If a password is changed through an update
            query, this save hook will not hash it. Handle password updates
            through a dedicated flow or suitable query middleware.
          </p>
        </div>
      </section>

      {/* 12 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          12. Important Middleware Rules
        </h2>

        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-[var(--text-secondary)]">
          <li>Register middleware before compiling the Schema into a Model.</li>
          <li>Pre hooks run before their associated operation.</li>
          <li>Post hooks run after their associated operation.</li>
          <li>Use normal functions when you need Mongoose's this context.</li>
          <li>Async middleware can use await.</li>
          <li>save hooks do not automatically run for update queries.</li>
          <li>
            Query middleware has access to the query, not the document itself.
          </li>
        </ul>

        <CodeBlock
          code={`// Correct order

const userSchema = new mongoose.Schema({
  name: String,
});

// Register middleware first
userSchema.pre("save", function () {
  console.log("Before saving");
});

// Compile model after middleware registration
const User = mongoose.model("User", userSchema);`}
        />
      </section>

      {/* Interview Questions */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold">Interview Questions</h2>
          <p className="mt-1 text-sm text-[var(--text-secondary)]">
            Click a question to reveal its answer.
          </p>
        </div>

        {[
          {
            q: "What is Middleware in Mongoose?",
            a: "Middleware is a function that runs automatically before or after a particular Mongoose operation.",
          },
          {
            q: "What are Pre and Post hooks?",
            a: "Pre hooks execute before an operation, while Post hooks execute after the associated operation completes.",
          },
          {
            q: "What is the difference between pre() and post()?",
            a: "pre() registers middleware that runs before an operation. post() registers middleware that runs after it.",
          },
          {
            q: "What is Document Middleware?",
            a: "Document middleware works with individual documents. Inside document middleware, this generally refers to the current document.",
          },
          {
            q: "What is Query Middleware?",
            a: "Query middleware works with Mongoose query operations such as find(), findOne(), updateOne(), and deleteOne().",
          },
          {
            q: "What does this refer to in Query Middleware?",
            a: "It refers to the Mongoose Query object, which allows us to access and modify query conditions.",
          },
          {
            q: "What is the purpose of next()?",
            a: "In callback-style middleware, next() signals that the middleware has completed. Passing an error to next() stops the operation.",
          },
          {
            q: "Can we use async/await in Mongoose Middleware?",
            a: "Yes. Mongoose supports async middleware and waits for its returned Promise to complete.",
          },
          {
            q: "Does save middleware run with findByIdAndUpdate()?",
            a: "No. findByIdAndUpdate() uses query middleware, not save document middleware.",
          },
          {
            q: "Why should middleware be registered before mongoose.model()?",
            a: "Because compiling a model copies the Schema's middleware configuration. Hooks registered afterward generally will not run for that compiled model.",
          },
          {
            q: "What are the four main types of Mongoose Middleware?",
            a: "Document middleware, Query middleware, Model middleware, and Aggregate middleware.",
          },
        ].map((item, index) => (
          <details
            key={index}
            className="group overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)]"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 font-medium transition-colors hover:bg-[var(--bg-hover)]">
              <span>
                {index + 1}. {item.q}
              </span>
              <span className="shrink-0 text-lg text-[var(--accent-color)] transition-transform group-open:rotate-45">
                +
              </span>
            </summary>

            <div className="border-t border-[var(--border-color)] px-4 py-4 text-sm leading-7 text-[var(--text-secondary)]">
              {item.a}
            </div>
          </details>
        ))}
      </section>
    </div>
  );
};

export default MiddlewareHooks;
