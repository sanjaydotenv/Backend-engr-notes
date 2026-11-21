import CodeBlock from "../../../../components/common/CodeBlock";

const QueryMethods = () => {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <div className="space-y-2">
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          MONGOOSE / 12
        </p>
        <h1 className="text-3xl font-bold">Mongoose Query Methods</h1>
        <p className="text-base leading-7 text-[var(--text-secondary)]">
          Mongoose Query Methods allow us to retrieve, filter, sort, update, and
          delete documents from MongoDB using a simple JavaScript API.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What are Query Methods?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Mongoose provides several methods to interact with MongoDB. These
          methods create Query objects that can be executed using await or
          exec().
        </p>

        <CodeBlock
          code={`const users = await User.find({
  isActive: true,
});

console.log(users);`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Here, find() creates a Query object. Using await executes the query
          and returns the matching documents.
        </p>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. find()</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          find() retrieves all documents that match the given conditions. If no
          condition is provided, it returns all documents.
        </p>

        <CodeBlock
          code={`// Get all users
const users = await User.find();

// Get active users
const activeUsers = await User.find({
  isActive: true,
});

// Get users older than 18
const adults = await User.find({
  age: { $gt: 18 },
});`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Returns an array of matching documents. If nothing matches, it returns
          an empty array.
        </p>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. findOne()</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          findOne() returns the first document that matches the given condition.
        </p>

        <CodeBlock
          code={`const user = await User.findOne({
  email: "mayur@example.com",
});

console.log(user);`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Returns one document or null if no matching document exists.
        </p>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. findById()</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          findById() retrieves a document using its MongoDB _id.
        </p>

        <CodeBlock
          code={`const user = await User.findById(userId);

console.log(user);`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          It is equivalent to:
        </p>

        <CodeBlock
          code={`const user = await User.findOne({
  _id: userId,
});`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Returns one document or null. An invalid ObjectId may cause a
          CastError.
        </p>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Query Comparison</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[450px] text-left text-sm">
            <thead className="bg-[var(--bg-card)]">
              <tr>
                <th className="p-3">Method</th>
                <th className="p-3">Purpose</th>
                <th className="p-3">Returns</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr>
                <td className="p-3 font-medium">find()</td>
                <td className="p-3">Find matching documents.</td>
                <td className="p-3">Array</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">findOne()</td>
                <td className="p-3">Find first matching document.</td>
                <td className="p-3">Document / null</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">findById()</td>
                <td className="p-3">Find by _id.</td>
                <td className="p-3">Document / null</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. select()</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          select() allows us to retrieve only the fields we need instead of
          returning every field.
        </p>

        <CodeBlock
          code={`// Include specific fields
const users = await User.find()
  .select("name email");

// Exclude password
const usersWithoutPassword = await User.find()
  .select("-password");`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          By default, MongoDB includes _id unless we explicitly exclude it.
        </p>

        <CodeBlock
          code={`const users = await User.find()
  .select("name email -_id");`}
        />
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. sort()</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          sort() arranges documents in ascending or descending order.
        </p>

        <CodeBlock
          code={`// Ascending order
const users = await User.find()
  .sort({ age: 1 });

// Descending order
const users = await User.find()
  .sort({ age: -1 });

// Sort by latest created document
const latestUsers = await User.find()
  .sort({ createdAt: -1 });`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          1 = Ascending order, -1 = Descending order.
        </p>
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. limit()</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          limit() controls the maximum number of documents returned.
        </p>

        <CodeBlock
          code={`const users = await User.find()
  .limit(5);`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          This query returns at most 5 documents.
        </p>
      </section>

      {/* 9 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. skip()</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          skip() ignores a specified number of documents before returning the
          remaining results.
        </p>

        <CodeBlock
          code={`const users = await User.find()
  .skip(10)
  .limit(5);`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          This skips the first 10 documents and returns the next 5 documents.
        </p>
      </section>

      {/* 10 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. countDocuments()</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          countDocuments() counts the number of documents matching the given
          filter.
        </p>

        <CodeBlock
          code={`// Count all users
const totalUsers = await User.countDocuments();

// Count active users
const activeUsers = await User.countDocuments({
  isActive: true,
});`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Useful for dashboard statistics and pagination.
        </p>
      </section>

      {/* 11 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">11. distinct()</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          distinct() returns an array containing unique values of a specific
          field.
        </p>

        <CodeBlock
          code={`const roles = await User.distinct("role");

console.log(roles);

// Example output:
// ["admin", "user", "manager"]`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          You can also provide a filter:
        </p>

        <CodeBlock
          code={`const roles = await User.distinct("role", {
  isActive: true,
});`}
        />
      </section>

      {/* 12 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">12. lean()</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          By default, Mongoose returns full Mongoose documents with additional
          features such as getters, setters, methods, and change tracking.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          lean() returns plain JavaScript objects instead of full Mongoose
          documents.
        </p>

        <CodeBlock
          code={`const users = await User.find()
  .lean();

console.log(users);`}
        />

        <p className="font-semibold">Difference:</p>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[440px] text-left text-sm">
            <thead className="bg-[var(--bg-card)]">
              <tr>
                <th className="p-3">Normal Query</th>
                <th className="p-3">lean()</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr>
                <td className="p-3">Returns Mongoose documents.</td>
                <td className="p-3">Returns plain JavaScript objects.</td>
              </tr>
              <tr>
                <td className="p-3">Supports document methods.</td>
                <td className="p-3">Does not support document methods.</td>
              </tr>
              <tr>
                <td className="p-3">Supports change tracking.</td>
                <td className="p-3">No Mongoose change tracking.</td>
              </tr>
              <tr>
                <td className="p-3">More document processing.</td>
                <td className="p-3">Generally faster and lighter.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm text-[var(--text-secondary)]">
          lean() is useful for read-only operations. Normal lean results do not
          have Mongoose document methods or virtuals by default.
        </p>
      </section>

      {/* 13 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">13. populate()</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          populate() retrieves referenced documents from another collection.
        </p>

        <CodeBlock
          code={`const posts = await Post.find()
  .populate("author", "name email");`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          We covered Populate in detail in the previous topic.
        </p>
      </section>

      {/* 14 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">14. Update Query Methods</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Mongoose also provides query methods to update documents.
        </p>

        <h3 className="font-semibold">updateOne()</h3>
        <CodeBlock
          code={`const result = await User.updateOne(
  { email: "mayur@example.com" },
  { $set: { isActive: false } }
);`}
        />

        <h3 className="font-semibold">updateMany()</h3>
        <CodeBlock
          code={`const result = await User.updateMany(
  { role: "user" },
  { $set: { isActive: true } }
);`}
        />

        <h3 className="font-semibold">findByIdAndUpdate()</h3>
        <CodeBlock
          code={`const updatedUser = await User.findByIdAndUpdate(
  userId,
  { name: "Mayur Bairagi" },
  {
    new: true,
    runValidators: true,
  }
);`}
        />

        <h3 className="font-semibold">findOneAndUpdate()</h3>
        <CodeBlock
          code={`const updatedUser = await User.findOneAndUpdate(
  { email: "mayur@example.com" },
  { $set: { isActive: false } },
  { returnDocument: "after" }
);`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          new: true is also commonly used to return the updated document.
          runValidators: true enables update validators.
        </p>
      </section>

      {/* 15 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">15. Delete Query Methods</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          These methods delete matching documents from MongoDB.
        </p>

        <h3 className="font-semibold">deleteOne()</h3>
        <CodeBlock
          code={`const result = await User.deleteOne({
  email: "mayur@example.com",
});`}
        />

        <h3 className="font-semibold">deleteMany()</h3>
        <CodeBlock
          code={`const result = await User.deleteMany({
  isActive: false,
});`}
        />

        <h3 className="font-semibold">findByIdAndDelete()</h3>
        <CodeBlock
          code={`const deletedUser = await User.findByIdAndDelete(userId);`}
        />

        <h3 className="font-semibold">findOneAndDelete()</h3>
        <CodeBlock
          code={`const deletedUser = await User.findOneAndDelete({
  email: "mayur@example.com",
});`}
        />
      </section>

      {/* 16 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">16. Query Chaining</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Mongoose allows us to chain multiple query methods together before
          executing the query.
        </p>

        <CodeBlock
          code={`const users = await User.find({
  isActive: true,
})
  .select("name email age")
  .sort({ createdAt: -1 })
  .skip(10)
  .limit(5)
  .lean();`}
        />

        <p className="font-semibold">Execution Flow:</p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <div className="space-y-2 text-center text-sm font-medium">
            <div className="rounded-lg bg-[var(--bg-hover)] p-3">
              User.find() — Find matching users
            </div>
            <div className="text-[var(--accent-color)]">↓</div>
            <div className="rounded-lg bg-[var(--bg-hover)] p-3">
              select() — Choose fields
            </div>
            <div className="text-[var(--accent-color)]">↓</div>
            <div className="rounded-lg bg-[var(--bg-hover)] p-3">
              sort() — Arrange documents
            </div>
            <div className="text-[var(--accent-color)]">↓</div>
            <div className="rounded-lg bg-[var(--bg-hover)] p-3">
              skip() + limit() — Apply pagination
            </div>
            <div className="text-[var(--accent-color)]">↓</div>
            <div className="rounded-lg bg-[var(--bg-hover)] p-3">
              lean() — Return plain objects
            </div>
            <div className="text-[var(--accent-color)]">↓</div>
            <div className="rounded-lg border border-[var(--accent-color)] p-3 text-[var(--accent-color)]">
              await — Execute Query
            </div>
          </div>
        </div>
      </section>

      {/* 17 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">17. exec() Method</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          exec() explicitly executes a Mongoose Query and returns a Promise.
        </p>

        <CodeBlock
          code={`const query = User.find({
  isActive: true,
});

const users = await query.exec();`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          We can also execute a chained query using exec():
        </p>

        <CodeBlock
          code={`const users = await User.find()
  .sort({ createdAt: -1 })
  .limit(10)
  .exec();`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Using await directly also executes the query. exec() is useful when
          you want explicit execution and a Promise.
        </p>
      </section>

      {/* 18 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">18. Important Query Methods</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[460px] text-left text-sm">
            <thead className="bg-[var(--bg-card)]">
              <tr>
                <th className="p-3">Method</th>
                <th className="p-3">Purpose</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              {[
                ["find()", "Find multiple documents."],
                ["findOne()", "Find one matching document."],
                ["findById()", "Find document by ID."],
                ["select()", "Select specific fields."],
                ["sort()", "Sort documents."],
                ["limit()", "Limit result count."],
                ["skip()", "Skip documents."],
                ["countDocuments()", "Count matching documents."],
                ["distinct()", "Get unique field values."],
                ["lean()", "Return plain JavaScript objects."],
                ["populate()", "Retrieve referenced documents."],
                ["updateOne()", "Update one matching document."],
                ["updateMany()", "Update multiple documents."],
                ["deleteOne()", "Delete one matching document."],
                ["deleteMany()", "Delete multiple documents."],
                ["exec()", "Explicitly execute a query."],
              ].map(([method, purpose]) => (
                <tr key={method}>
                  <td className="p-3 font-medium">{method}</td>
                  <td className="p-3">{purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
            q: "What are Mongoose Query Methods?",
            a: "They are methods used to retrieve, filter, sort, update, and delete MongoDB documents.",
          },
          {
            q: "What is the difference between find() and findOne()?",
            a: "find() returns an array of matching documents, while findOne() returns the first matching document or null.",
          },
          {
            q: "What is the difference between findOne() and findById()?",
            a: "findOne() searches using a filter object, while findById() searches using the document's _id.",
          },
          {
            q: "What is the purpose of select()?",
            a: "select() retrieves only the fields we need and can also exclude fields.",
          },
          {
            q: "What is the difference between sort(1) and sort(-1)?",
            a: "1 represents ascending order, while -1 represents descending order.",
          },
          {
            q: "What is the purpose of skip() and limit()?",
            a: "skip() ignores a number of documents, while limit() restricts the maximum number of returned documents.",
          },
          {
            q: "What is lean() in Mongoose?",
            a: "lean() returns plain JavaScript objects instead of full Mongoose documents, reducing document processing overhead.",
          },
          {
            q: "What is the difference between countDocuments() and distinct()?",
            a: "countDocuments() counts matching documents, while distinct() returns unique values of a field.",
          },
          {
            q: "What is exec() in Mongoose?",
            a: "exec() explicitly executes a Mongoose Query and returns a Promise.",
          },
          {
            q: "What does findByIdAndUpdate() return?",
            a: "By default, it returns the document before the update. Use new: true or returnDocument: 'after' to get the updated document.",
          },
          {
            q: "What is runValidators in update queries?",
            a: "It enables Schema validators for the update operation. Update validators are not enabled by default.",
          },
          {
            q: "Can we chain multiple Mongoose query methods?",
            a: "Yes. We can chain methods such as select(), sort(), skip(), limit(), populate(), and lean() before executing the query.",
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

export default QueryMethods;
