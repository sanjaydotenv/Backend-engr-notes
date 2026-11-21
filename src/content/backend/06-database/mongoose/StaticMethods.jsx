import CodeBlock from "../../../../components/common/CodeBlock";

const StaticMethods = () => {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <div className="space-y-2">
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          MONGOOSE / 09
        </p>
        <h1 className="text-3xl font-bold">Mongoose Static Methods</h1>
        <p className="text-base leading-7 text-[var(--text-secondary)]">
          Static Methods allow us to define custom functions directly on a
          Mongoose Model. These methods are useful for performing operations
          that work with a collection rather than a single document.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What are Static Methods?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Static Methods are custom functions that belong to a Mongoose Model
          instead of an individual document.
        </p>

        <p className="font-semibold">Example:</p>

        <CodeBlock
          code={`// Calling a static method directly on Model
const user = await User.findByEmail("mayur@gmail.com");`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Here, findByEmail() is a custom static method defined on the User
          Model.
        </p>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Creating a Static Method</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          We can create static methods using schema.statics.
        </p>

        <CodeBlock
          code={`import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

// Create a static method
userSchema.statics.findByEmail = function (email) {
  return this.findOne({ email });
};

const User = mongoose.model("User", userSchema);

export default User;`}
        />

        <p className="font-semibold">Calling the method:</p>

        <CodeBlock
          code={`const user = await User.findByEmail("mayur@gmail.com");

console.log(user);`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Inside a static method, this refers to the Model. Therefore, we can
          use this.findOne(), this.find(), and other Model methods.
        </p>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          3. Creating Multiple Static Methods
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          We can define multiple static methods to reuse common database queries
          and business logic.
        </p>

        <CodeBlock
          code={`const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: String,
  isActive: Boolean,
});

// Find user by email
userSchema.statics.findByEmail = function (email) {
  return this.findOne({ email });
};

// Find all active users
userSchema.statics.findActiveUsers = function () {
  return this.find({ isActive: true });
};

// Find all admins
userSchema.statics.findAdmins = function () {
  return this.find({ role: "admin" });
};

// Count active users
userSchema.statics.countActiveUsers = function () {
  return this.countDocuments({ isActive: true });
};`}
        />

        <p className="font-semibold">Using these methods:</p>

        <CodeBlock
          code={`const user = await User.findByEmail("mayur@gmail.com");

const activeUsers = await User.findActiveUsers();

const admins = await User.findAdmins();

const total = await User.countActiveUsers();`}
        />
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          4. Static Methods with Async/Await
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Static methods can also be asynchronous. This is useful when
          performing multiple database operations or additional logic.
        </p>

        <CodeBlock
          code={`userSchema.statics.getUserStatistics = async function () {
  const totalUsers = await this.countDocuments();

  const activeUsers = await this.countDocuments({
    isActive: true,
  });

  const inactiveUsers = totalUsers - activeUsers;

  return {
    totalUsers,
    activeUsers,
    inactiveUsers,
  };
};`}
        />

        <p className="font-semibold">Calling the method:</p>

        <CodeBlock
          code={`const statistics = await User.getUserStatistics();

console.log(statistics);

// Example output:
// {
//   totalUsers: 100,
//   activeUsers: 80,
//   inactiveUsers: 20
// }`}
        />
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          5. Real-World Example: User Authentication
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          We can create a static method to find a user by email. This method can
          be reused in login and other authentication flows.
        </p>

        <CodeBlock
          code={`import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  name: String,

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

// Static method
userSchema.statics.authenticateUser = async function (
  email,
  password
) {
  const user = await this.findOne({ email });

  if (!user) {
    return null;
  }

  const isMatch = await bcrypt.compare(
    password,
    user.password
  );

  if (!isMatch) {
    return null;
  }

  return user;
};

const User = mongoose.model("User", userSchema);

export default User;`}
        />

        <p className="font-semibold">Using the method:</p>

        <CodeBlock
          code={`const user = await User.authenticateUser(
  "mayur@gmail.com",
  "password123"
);

if (!user) {
  throw new Error("Invalid email or password");
}

console.log("Login successful");`}
        />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          This is an example of reusable authentication logic. In a real
          application, login errors, rate limiting, and other security
          protections should also be handled.
        </p>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          6. Instance Methods vs Static Methods
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Both allow us to add custom functionality to a Schema, but they work
          at different levels.
        </p>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[460px] text-sm text-left">
            <thead className="bg-[var(--bg-card)]">
              <tr>
                <th className="p-3">Instance Methods</th>
                <th className="p-3">Static Methods</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr>
                <td className="p-3">Defined using schema.methods.</td>
                <td className="p-3">Defined using schema.statics.</td>
              </tr>
              <tr>
                <td className="p-3">Called on a document.</td>
                <td className="p-3">Called on a Model.</td>
              </tr>
              <tr>
                <td className="p-3">this refers to the document.</td>
                <td className="p-3">this refers to the Model.</td>
              </tr>
              <tr>
                <td className="p-3">user.getFullName()</td>
                <td className="p-3">User.findByEmail()</td>
              </tr>
              <tr>
                <td className="p-3">Works with one document.</td>
                <td className="p-3">Commonly works with collection queries.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Important Rules</h2>

        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-[var(--text-secondary)]">
          <li>Use schema.statics to define static methods.</li>
          <li>Call static methods directly on the Model.</li>
          <li>Inside a static method, this refers to the Model.</li>
          <li>
            Static methods can use find(), findOne(), create(), and other Model
            methods.
          </li>
          <li>Static methods can be synchronous or asynchronous.</li>
          <li>
            Prefer normal functions when accessing the Model through this.
          </li>
          <li>
            Define static methods before compiling the Schema into a Model.
          </li>
        </ul>

        <CodeBlock
          code={`// Correct
userSchema.statics.findByEmail = function (email) {
  return this.findOne({ email });
};

// Avoid arrow functions when using this
userSchema.statics.findByEmail = (email) => {
  return this.findOne({ email });
};`}
        />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Arrow functions do not have their own this, so they cannot access the
          current Mongoose Model through this.
        </p>
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
            q: "What are Static Methods in Mongoose?",
            a: "Static Methods are custom functions defined on a Mongoose Schema that can be called directly on its Model.",
          },
          {
            q: "How do you create a Static Method?",
            a: "We use schema.statics and assign a function to it.",
          },
          {
            q: "How do you call a Static Method?",
            a: "We call it directly on the Model, for example: User.findByEmail(email).",
          },
          {
            q: "What does this refer to inside a Static Method?",
            a: "this refers to the Mongoose Model.",
          },
          {
            q: "Can Static Methods use find() and findOne()?",
            a: "Yes. Since this refers to the Model, we can use its query methods such as find(), findOne(), and countDocuments().",
          },
          {
            q: "Can Static Methods be asynchronous?",
            a: "Yes. We can use async/await inside static methods and return Promises.",
          },
          {
            q: "What is the difference between Instance and Static Methods?",
            a: "Instance methods are called on individual documents, while static methods are called directly on the Model.",
          },
          {
            q: "Why should we avoid arrow functions for Static Methods?",
            a: "Arrow functions do not have their own this, so they cannot access the Mongoose Model through this.",
          },
          {
            q: "What are common use cases of Static Methods?",
            a: "Finding users by email, fetching active users, counting documents, and implementing reusable model-level operations.",
          },
          {
            q: "When should we define Static Methods?",
            a: "We should define static methods before compiling the Schema into a Mongoose Model.",
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

export default StaticMethods;
