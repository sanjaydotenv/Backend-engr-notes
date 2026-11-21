import CodeBlock from "../../../../components/common/CodeBlock";

const Virtuals = () => {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <div className="space-y-2">
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          MONGOOSE / 10
        </p>
        <h1 className="text-3xl font-bold">Mongoose Virtuals</h1>
        <p className="text-base leading-7 text-[var(--text-secondary)]">
          Virtuals are document properties that are not stored in MongoDB. They
          are calculated using existing document fields and can be accessed like
          normal properties.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What are Virtuals?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Sometimes we need additional information based on existing fields
          without storing that information separately in MongoDB. Mongoose
          Virtuals solve this problem.
        </p>

        <p className="font-semibold">Example:</p>

        <CodeBlock
          code={`{
  firstName: "Mayur",
  lastName: "Bairagi"
}

// Virtual property
fullName: "Mayur Bairagi"`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Here, fullName is calculated from firstName and lastName. It does not
          need to be stored in the database.
        </p>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          2. Creating a Virtual Property
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          We create virtual properties using schema.virtual(). A virtual can
          have a getter, a setter, or both.
        </p>

        <CodeBlock
          code={`import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
});

// Create a virtual property
userSchema.virtual("fullName").get(function () {
  return \`\${this.firstName} \${this.lastName}\`;
});

const User = mongoose.model("User", userSchema);`}
        />

        <p className="font-semibold">Accessing the Virtual:</p>

        <CodeBlock
          code={`const user = await User.findById(userId);

console.log(user.fullName);

// Output:
// Mayur Bairagi`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          The getter runs when we access user.fullName.
        </p>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Virtual Getters</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          A getter calculates and returns a value when we access a virtual
          property.
        </p>

        <CodeBlock
          code={`const productSchema = new mongoose.Schema({
  price: Number,
  discount: Number,
});

productSchema.virtual("finalPrice").get(function () {
  return this.price - (this.price * this.discount) / 100;
});`}
        />

        <p className="font-semibold">Using the Virtual:</p>

        <CodeBlock
          code={`const product = await Product.findById(productId);

console.log(product.price);      // 1000
console.log(product.discount);   // 10
console.log(product.finalPrice); // 900`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          finalPrice is calculated whenever we access it. It is not stored as a
          separate field in MongoDB.
        </p>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Virtual Setters</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          A setter allows us to assign a value to a virtual property and
          distribute that value into actual Schema fields.
        </p>

        <CodeBlock
          code={`const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
});

userSchema.virtual("fullName")
  .get(function () {
    return \`\${this.firstName} \${this.lastName}\`;
  })
  .set(function (value) {
    const parts = value.split(" ");

    this.firstName = parts.shift();
    this.lastName = parts.join(" ");
  });`}
        />

        <p className="font-semibold">Using the Setter:</p>

        <CodeBlock
          code={`const user = new User();

user.fullName = "Mayur Bairagi";

console.log(user.firstName); // Mayur
console.log(user.lastName);  // Bairagi

await user.save();`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          When we assign fullName, the setter updates firstName and lastName.
          Only those actual fields are stored in MongoDB.
        </p>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          5. Virtuals in JSON and Objects
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          By default, virtual properties are not included when a Mongoose
          document is converted to JSON or a plain object.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          To include virtuals in API responses, enable them in Schema options.
        </p>

        <CodeBlock
          code={`const userSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
  },
  {
    toJSON: {
      virtuals: true,
    },

    toObject: {
      virtuals: true,
    },
  }
);

userSchema.virtual("fullName").get(function () {
  return \`\${this.firstName} \${this.lastName}\`;
});`}
        />

        <p className="font-semibold">Example:</p>

        <CodeBlock
          code={`const user = await User.findById(userId);

console.log(user.toJSON());`}
        />

        <CodeBlock
          language="json"
          code={`{
  "_id": "674a1234567890abcdef1234",
  "firstName": "Mayur",
  "lastName": "Bairagi",
  "fullName": "Mayur Bairagi"
}`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          The fullName field appears in the converted JSON output, but it is
          still not stored in MongoDB.
        </p>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Virtual Populate</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Virtual Populate allows us to retrieve related documents without
          storing an actual reference array in the parent document.
        </p>

        <p className="font-semibold">Example: User and Posts</p>

        <CodeBlock
          code={`const userSchema = new mongoose.Schema({
  name: String,
});

const postSchema = new mongoose.Schema({
  title: String,

  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

// Define virtual relationship
userSchema.virtual("posts", {
  ref: "Post",
  localField: "_id",
  foreignField: "author",
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">Here:</p>

        <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--text-secondary)]">
          <li>
            <strong>ref:</strong> Model from which related documents are
            fetched.
          </li>
          <li>
            <strong>localField:</strong> Field from the current User document.
          </li>
          <li>
            <strong>foreignField:</strong> Matching field in the Post
            collection.
          </li>
        </ul>

        <p className="font-semibold">Using Virtual Populate:</p>

        <CodeBlock
          code={`const user = await User.findById(userId).populate("posts");

console.log(user.posts);`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Mongoose finds posts whose author field matches the user's _id and
          attaches them to the virtual posts property.
        </p>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Virtuals vs Actual Fields</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[440px] text-sm text-left">
            <thead className="bg-[var(--bg-card)]">
              <tr>
                <th className="p-3">Actual Fields</th>
                <th className="p-3">Virtual Fields</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr>
                <td className="p-3">Stored in MongoDB.</td>
                <td className="p-3">Not stored in MongoDB.</td>
              </tr>
              <tr>
                <td className="p-3">Have Schema Types.</td>
                <td className="p-3">Have getters and setters.</td>
              </tr>
              <tr>
                <td className="p-3">Can be queried directly.</td>
                <td className="p-3">
                  Cannot be queried directly in normal MongoDB queries.
                </td>
              </tr>
              <tr>
                <td className="p-3">Contain actual data.</td>
                <td className="p-3">
                  Usually calculate or expose derived data.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Important Rules</h2>

        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-[var(--text-secondary)]">
          <li>Use schema.virtual() to create virtual properties.</li>
          <li>Getters calculate values when a virtual is accessed.</li>
          <li>Setters distribute assigned values into actual fields.</li>
          <li>Virtuals are not stored in MongoDB.</li>
          <li>
            Use toJSON: {`{ virtuals: true }`} to include virtuals in JSON
            output.
          </li>
          <li>
            Use toObject: {`{ virtuals: true }`} to include virtuals in plain
            objects.
          </li>
          <li>Use Virtual Populate to retrieve related documents.</li>
          <li>Virtuals cannot be used directly in normal MongoDB queries.</li>
        </ul>
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
            q: "What are Virtuals in Mongoose?",
            a: "Virtuals are document properties that are not stored in MongoDB. They are calculated using existing document fields.",
          },
          {
            q: "How do you create a Virtual Property?",
            a: "We use schema.virtual() and define its getter using get().",
          },
          {
            q: "What is a Virtual Getter?",
            a: "A getter calculates and returns a value when a virtual property is accessed.",
          },
          {
            q: "What is a Virtual Setter?",
            a: "A setter allows us to assign a value to a virtual property and update actual Schema fields using that value.",
          },
          {
            q: "Are Virtual Properties stored in MongoDB?",
            a: "No. Virtual properties are not stored as actual fields in MongoDB.",
          },
          {
            q: "How can we include Virtuals in JSON output?",
            a: "Set toJSON: { virtuals: true } in the Schema options.",
          },
          {
            q: "What is Virtual Populate?",
            a: "Virtual Populate retrieves related documents using localField and foreignField without storing a reference array in the parent document.",
          },
          {
            q: "Can we query Virtual Properties directly?",
            a: "No. Virtual properties are not actual MongoDB fields, so they cannot be used directly in normal MongoDB queries.",
          },
          {
            q: "What is the difference between Virtuals and Instance Methods?",
            a: "Virtuals behave like document properties, while Instance Methods behave like callable functions on documents.",
          },
          {
            q: "What is the difference between Virtuals and actual Schema fields?",
            a: "Actual Schema fields are stored in MongoDB, whereas Virtuals are calculated properties that are not stored.",
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

export default Virtuals;
