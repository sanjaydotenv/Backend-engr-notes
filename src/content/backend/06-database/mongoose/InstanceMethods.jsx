import CodeBlock from "../../../../components/common/CodeBlock";

const InstanceMethods = () => {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <div className="space-y-2">
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          MONGOOSE / 08
        </p>
        <h1 className="text-3xl font-bold">Mongoose Instance Methods</h1>
        <p className="text-base leading-7 text-[var(--text-secondary)]">
          Instance Methods allow us to define custom functions on a Mongoose
          Schema. These functions can be called on individual documents created
          from that Schema.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What are Instance Methods?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Instance Methods are custom functions available on individual Mongoose
          documents.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          For example, if we have a User model, we can create methods such as
          getFullName(), checkPassword(), or getUserInfo().
        </p>

        <CodeBlock
          code={`const user = await User.findById(userId);

// Calling an instance method
user.getUserInfo();`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Here, getUserInfo() is called on a particular user document.
        </p>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          2. Creating an Instance Method
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          We define instance methods using schema.methods.
        </p>

        <CodeBlock
          code={`const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

// Create an instance method
userSchema.methods.getUserInfo = function () {
  return \`Name: \${this.name}, Age: \${this.age}\`;
};

const User = mongoose.model("User", userSchema);`}
        />

        <p className="font-semibold">Calling the method:</p>

        <CodeBlock
          code={`const user = await User.findById(userId);

console.log(user.getUserInfo());

// Output:
// Name: Mayur, Age: 19`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          The this keyword refers to the current document, so we can access its
          fields using this.name, this.age, etc.
        </p>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          3. Using Multiple Instance Methods
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          We can define multiple custom methods inside schema.methods.
        </p>

        <CodeBlock
          code={`const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
});

userSchema.methods.getFullName = function () {
  return \`\${this.firstName} \${this.lastName}\`;
};

userSchema.methods.isAdult = function () {
  return this.age >= 18;
};

userSchema.methods.getDetails = function () {
  return {
    fullName: this.getFullName(),
    age: this.age,
    isAdult: this.isAdult(),
  };
};`}
        />

        <p className="font-semibold">Using these methods:</p>

        <CodeBlock
          code={`const user = await User.findById(userId);

console.log(user.getFullName());
console.log(user.isAdult());
console.log(user.getDetails());`}
        />
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          4. Instance Methods with Async/Await
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Instance methods can also be asynchronous. This is useful when a
          document method needs to perform database operations or other
          asynchronous tasks.
        </p>

        <CodeBlock
          code={`userSchema.methods.getOrders = async function () {
  return await Order.find({
    user: this._id,
  });
};`}
        />

        <p className="font-semibold">Calling the method:</p>

        <CodeBlock
          code={`const user = await User.findById(userId);

const orders = await user.getOrders();

console.log(orders);`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Since this method is async, it returns a Promise. We use await to get
          its result.
        </p>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          5. Real-World Example: Password Comparison
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          A common use case is creating a method to compare a user's entered
          password with the hashed password stored in MongoDB.
        </p>

        <CodeBlock language="bash" code={`npm install bcryptjs`} />

        <CodeBlock
          code={`import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  name: String,

  email: String,

  password: {
    type: String,
    required: true,
  },
});

// Instance method
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(
    enteredPassword,
    this.password
  );
};

const User = mongoose.model("User", userSchema);

export default User;`}
        />

        <p className="font-semibold">Using the method:</p>

        <CodeBlock
          code={`const user = await User.findOne({ email });

if (!user) {
  throw new Error("User not found");
}

const isMatch = await user.comparePassword(password);

if (!isMatch) {
  throw new Error("Invalid password");
}

console.log("Login successful");`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Here, this.password accesses the hashed password of the current user
          document.
        </p>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          6. Instance Methods vs Static Methods
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Both are custom methods, but they are called differently.
        </p>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[440px] text-sm text-left">
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
                <td className="p-3">user.getInfo()</td>
                <td className="p-3">User.findByEmail()</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Important Rules</h2>

        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-[var(--text-secondary)]">
          <li>Use schema.methods to define instance methods.</li>
          <li>Instance methods are called on individual documents.</li>
          <li>
            Use normal functions when accessing the document through this.
          </li>
          <li>
            Avoid arrow functions because they do not have their own this.
          </li>
          <li>Methods can return values or Promises.</li>
          <li>Define methods before compiling the Schema into a Model.</li>
          <li>Documents returned by Mongoose queries can use these methods.</li>
        </ul>

        <CodeBlock
          code={`// Correct
userSchema.methods.getName = function () {
  return this.name;
};

// Avoid arrow functions
userSchema.methods.getName = () => {
  return this.name;
};`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Arrow functions do not bind their own this, so they cannot access the
          current Mongoose document through this.
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
            q: "What are Instance Methods in Mongoose?",
            a: "Instance Methods are custom functions defined on a Schema that can be called on individual Mongoose documents.",
          },
          {
            q: "How do you create an Instance Method?",
            a: "We use schema.methods and assign a function to it.",
          },
          {
            q: "How do you call an Instance Method?",
            a: "We call it on a document, for example: const user = await User.findById(id); user.getUserInfo().",
          },
          {
            q: "What does this refer to inside an Instance Method?",
            a: "this refers to the current Mongoose document.",
          },
          {
            q: "Can Instance Methods be asynchronous?",
            a: "Yes. We can define async instance methods and use await inside them.",
          },
          {
            q: "Why should we avoid arrow functions for Instance Methods?",
            a: "Arrow functions do not have their own this, so they cannot access the current document through this.",
          },
          {
            q: "What is the difference between Instance Methods and Static Methods?",
            a: "Instance methods are called on documents, while static methods are called directly on the Model.",
          },
          {
            q: "Can we use Instance Methods with documents returned by findById()?",
            a: "Yes. Mongoose returns a document, so its schema-defined instance methods are available.",
          },
          {
            q: "What is a real-world use case of Instance Methods?",
            a: "Password comparison, calculating full names, checking account status, and retrieving related data.",
          },
          {
            q: "When should we define Instance Methods?",
            a: "Define them before compiling the Schema into a Mongoose Model.",
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

export default InstanceMethods;
