import CodeBlock from "../../../../components/common/CodeBlock";

const Validation = () => {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <div className="space-y-2">
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          MONGOOSE / 06
        </p>
        <h1 className="text-3xl font-bold">Mongoose Validation</h1>
        <p className="text-base leading-7 text-[var(--text-secondary)]">
          Mongoose Validation allows us to check whether document data is valid
          before saving it to MongoDB. It helps maintain correct and consistent
          data in our database.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What is Validation?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Validation means checking data against specific rules before storing
          it in the database.
        </p>

        <p className="font-semibold">Example:</p>

        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>Name should not be empty.</li>
          <li>Email should follow a valid format.</li>
          <li>Age should be at least 18.</li>
          <li>Password should contain at least 8 characters.</li>
        </ul>

        <CodeBlock
          code={`const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  age: {
    type: Number,
    min: 18,
  },
});`}
        />
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Required Validator</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The required validator ensures that a field must have a value. If the
          field is missing, validation fails.
        </p>

        <CodeBlock
          code={`const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
});`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Example: If we try to save a user without a name or email, Mongoose
          throws a ValidationError.
        </p>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Minlength and Maxlength</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          These validators are used with String fields to control the minimum
          and maximum length of text.
        </p>

        <CodeBlock
          code={`const userSchema = new mongoose.Schema({
  username: {
    type: String,
    minlength: 3,
    maxlength: 20,
  },
});`}
        />

        <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--text-secondary)]">
          <li>
            <strong>minlength:</strong> Minimum allowed string length.
          </li>
          <li>
            <strong>maxlength:</strong> Maximum allowed string length.
          </li>
        </ul>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Min and Max</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Min and max validators are used with Number fields to define the
          allowed numeric range.
        </p>

        <CodeBlock
          code={`const productSchema = new mongoose.Schema({
  price: {
    type: Number,
    min: 1,
    max: 100000,
  },

  age: {
    type: Number,
    min: 18,
    max: 100,
  },
});`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Here, age must be between 18 and 100.
        </p>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Enum Validator</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Enum restricts a field to a predefined list of allowed values. It is
          commonly used for roles, status, and categories.
        </p>

        <CodeBlock
          code={`const userSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ["user", "admin", "moderator"],
    default: "user",
  },

  status: {
    type: String,
    enum: ["active", "inactive", "blocked"],
  },
});`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          If someone tries to save role as "superadmin", validation fails
          because it is not included in the allowed values.
        </p>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Match Validator</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Match uses a regular expression (Regex) to check whether a string
          follows a specific pattern.
        </p>

        <CodeBlock
          code={`const userSchema = new mongoose.Schema({
  email: {
    type: String,
    match: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,
  },
});`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          This regex performs a basic email-format check. For production
          applications, email verification is also important.
        </p>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Custom Validator</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Sometimes built-in validators are not enough. In that case, we can
          create our own validation logic using the validate option.
        </p>

        <CodeBlock
          code={`const userSchema = new mongoose.Schema({
  password: {
    type: String,

    validate: {
      validator: function (value) {
        return value.length >= 8;
      },

      message: "Password must contain at least 8 characters",
    },
  },
});`}
        />

        <p className="font-semibold">How it works:</p>

        <ol className="list-decimal space-y-2 pl-5 text-sm text-[var(--text-secondary)]">
          <li>Mongoose passes the field value to validator.</li>
          <li>Our function checks the value.</li>
          <li>Returning true means validation passes.</li>
          <li>Returning false means validation fails.</li>
          <li>Mongoose uses the message as the validation error message.</li>
        </ol>
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Validation with Save</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Mongoose automatically runs document validation before saving a
          document using save().
        </p>

        <CodeBlock
          code={`const user = new User({
  name: "Mayur",
  age: 15,
});

try {
  await user.save();
  console.log("User saved successfully");
} catch (error) {
  console.log(error.message);
}`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          If age has a minimum value of 18, the document will not be saved
          because validation fails.
        </p>
      </section>

      {/* 9 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          9. Validation with Update Queries
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          An important thing to remember is that update validators are disabled
          by default in Mongoose.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          To run schema validators during update operations, we must enable
          runValidators: true.
        </p>

        <CodeBlock
          code={`await User.findByIdAndUpdate(
  userId,
  {
    age: 15,
  },
  {
    new: true,
    runValidators: true,
  }
);`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
          <p className="font-semibold text-[var(--accent-color)]">Important</p>
          <p className="text-sm leading-6 text-[var(--text-secondary)]">
            runValidators: true enables update validators. Update validators run
            only on updated paths and have some differences from document
            validation.
          </p>
        </div>
      </section>

      {/* 10 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Validation Error Handling</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          When validation fails, Mongoose throws a ValidationError. We can catch
          it and read individual field errors.
        </p>

        <CodeBlock
          code={`try {
  await User.create({
    name: "",
    age: 15,
  });
} catch (error) {
  if (error.name === "ValidationError") {
    console.log(error.errors);

    for (const field in error.errors) {
      console.log(
        field,
        error.errors[field].message
      );
    }
  }
}`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          error.errors contains information about the fields that failed
          validation.
        </p>
      </section>

      {/* 11 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          11. Complete Validation Example
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Let's combine different validators in a practical User Schema.
        </p>

        <CodeBlock
          code={`import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    minlength: [3, "Name must be at least 3 characters"],
    maxlength: [30, "Name cannot exceed 30 characters"],
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    lowercase: true,
    match: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,
  },

  age: {
    type: Number,
    min: [18, "Age must be at least 18"],
    max: [100, "Age cannot exceed 100"],
  },

  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },

  password: {
    type: String,
    required: true,
    minlength: 8,
  },
});

const User = mongoose.model("User", userSchema);

export default User;`}
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
            q: "What is Validation in Mongoose?",
            a: "Validation checks whether document data follows predefined rules before it is saved to MongoDB.",
          },
          {
            q: "Does Mongoose run validation automatically?",
            a: "Yes. Mongoose automatically runs validation before saving a document using save().",
          },
          {
            q: "What is the required validator?",
            a: "It ensures that a field must have a value. If the required field is missing, validation fails.",
          },
          {
            q: "What is the difference between minlength and min?",
            a: "minlength validates the minimum length of a String, while min validates the minimum numeric value of a Number.",
          },
          {
            q: "What is the purpose of enum?",
            a: "Enum restricts a field to a predefined list of allowed values.",
          },
          {
            q: "What is the match validator?",
            a: "Match validates a String against a regular expression pattern.",
          },
          {
            q: "How do you create a custom validator?",
            a: "Use the validate option with a validator function that returns true when the value is valid and false when it is invalid.",
          },
          {
            q: "Does findByIdAndUpdate() run validators by default?",
            a: "No. Update validators are disabled by default. Use runValidators: true to enable them.",
          },
          {
            q: "What is a ValidationError?",
            a: "It is an error thrown by Mongoose when document validation fails. Its errors property contains details about individual field errors.",
          },
          {
            q: "What is the difference between document validation and update validation?",
            a: "Document validation runs on document operations such as save(). Update validation runs on update operations when runValidators: true is enabled, and it only validates updated paths.",
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

export default Validation;
