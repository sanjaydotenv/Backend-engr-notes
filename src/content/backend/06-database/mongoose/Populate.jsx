import CodeBlock from "../../../../components/common/CodeBlock";

const Populate = () => {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <div className="space-y-2">
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          MONGOOSE / 11
        </p>
        <h1 className="text-3xl font-bold">Mongoose Populate</h1>
        <p className="text-base leading-7 text-[var(--text-secondary)]">
          Populate is a Mongoose feature that replaces referenced ObjectIds with
          the actual documents from another collection.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What is Populate?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          In MongoDB, we often store references between documents using
          ObjectIds. By default, MongoDB stores only the referenced ID, not the
          complete document.
        </p>

        <p className="font-semibold">Example: User Collection</p>

        <CodeBlock
          language="json"
          code={`{
  "_id": "user123",
  "name": "Mayur"
}`}
        />

        <p className="font-semibold">Post Collection</p>

        <CodeBlock
          language="json"
          code={`{
  "_id": "post123",
  "title": "Mongoose Tutorial",
  "author": "user123"
}`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Here, the author field contains only the User's ObjectId. If we want
          the author's name, we can use populate().
        </p>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Defining References</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          First, define a reference using ObjectId and the ref option in your
          Schema.
        </p>

        <CodeBlock
          code={`import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">Important:</p>

        <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--text-secondary)]">
          <li>
            <strong>ObjectId:</strong> Stores the referenced document ID.
          </li>
          <li>
            <strong>ref:</strong> Specifies the Mongoose model to use when
            populating.
          </li>
        </ul>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Basic Populate</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Use populate() to retrieve the referenced document instead of only its
          ObjectId.
        </p>

        <CodeBlock
          code={`const post = await Post.findById(postId)
  .populate("author");

console.log(post);`}
        />

        <p className="font-semibold">Without Populate:</p>

        <CodeBlock
          language="json"
          code={`{
  "title": "Mongoose Tutorial",
  "author": "user123"
}`}
        />

        <p className="font-semibold">With Populate:</p>

        <CodeBlock
          language="json"
          code={`{
  "title": "Mongoose Tutorial",
  "author": {
    "_id": "user123",
    "name": "Mayur"
  }
}`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Now author contains the populated User document.
        </p>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Populate Specific Fields</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Sometimes we don't need every field from the referenced document. We
          can select only the fields we need.
        </p>

        <CodeBlock
          code={`const post = await Post.findById(postId)
  .populate("author", "name");

console.log(post.author);`}
        />

        <p className="font-semibold">Output:</p>

        <CodeBlock
          language="json"
          code={`{
  "_id": "user123",
  "name": "Mayur"
}`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          The referenced document's _id is included by default.
        </p>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Populate with Options</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          We can pass an object to populate() to control which fields are
          selected, sorted, filtered, or limited.
        </p>

        <CodeBlock
          code={`const post = await Post.findById(postId)
  .populate({
    path: "author",
    select: "name email",
  });`}
        />

        <p className="font-semibold">Important Populate Options:</p>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[440px] text-left text-sm">
            <thead className="bg-[var(--bg-card)]">
              <tr>
                <th className="p-3">Option</th>
                <th className="p-3">Purpose</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr>
                <td className="p-3 font-medium">path</td>
                <td className="p-3">Field that needs population.</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">select</td>
                <td className="p-3">Select specific fields.</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">match</td>
                <td className="p-3">Filter populated documents.</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">options</td>
                <td className="p-3">
                  Pass query options such as sort and limit.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-medium">model</td>
                <td className="p-3">Specify a model explicitly.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Populate with Match</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The match option filters the referenced documents that should be
          populated.
        </p>

        <CodeBlock
          code={`const post = await Post.findById(postId)
  .populate({
    path: "author",
    match: {
      isActive: true,
    },
    select: "name email",
  });`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          If the referenced User does not match isActive: true, the author field
          becomes null for a single reference.
        </p>

        <p className="text-sm text-[var(--text-secondary)]">
          Important: match filters populated documents. It does not remove the
          parent Post document from the query result.
        </p>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Multiple Populate</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          We can populate multiple reference fields in the same query.
        </p>

        <CodeBlock
          code={`const postSchema = new mongoose.Schema({
  title: String,

  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});

const post = await Post.findById(postId)
  .populate("author", "name")
  .populate("category", "title");`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Both author and category references are populated in one query chain.
        </p>
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Nested Populate</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Nested Populate allows us to populate a reference inside another
          populated document.
        </p>

        <p className="font-semibold">Example:</p>

        <CodeBlock
          code={`const commentSchema = new mongoose.Schema({
  text: String,

  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const postSchema = new mongoose.Schema({
  title: String,

  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment",
  }],
});`}
        />

        <p className="font-semibold">Nested Populate Query:</p>

        <CodeBlock
          code={`const post = await Post.findById(postId)
  .populate({
    path: "comments",
    populate: {
      path: "author",
      select: "name",
    },
  });`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          First, comments are populated. Then the author reference inside every
          comment is populated.
        </p>
      </section>

      {/* 9 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Populate Arrays</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Populate also works with arrays of ObjectId references.
        </p>

        <CodeBlock
          code={`const groupSchema = new mongoose.Schema({
  name: String,

  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }],
});

const Group = mongoose.model("Group", groupSchema);

const group = await Group.findById(groupId)
  .populate("members", "name email");`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          The members array will contain populated User documents instead of
          only ObjectIds.
        </p>
      </section>

      {/* 10 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          10. Populate vs Virtual Populate
        </h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[440px] text-left text-sm">
            <thead className="bg-[var(--bg-card)]">
              <tr>
                <th className="p-3">Populate</th>
                <th className="p-3">Virtual Populate</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr>
                <td className="p-3">Uses an actual reference field.</td>
                <td className="p-3">Uses a virtual relationship.</td>
              </tr>
              <tr>
                <td className="p-3">Reference ObjectId is stored.</td>
                <td className="p-3">
                  No reference array is stored on the parent.
                </td>
              </tr>
              <tr>
                <td className="p-3">Uses ref in the Schema field.</td>
                <td className="p-3">Uses ref, localField and foreignField.</td>
              </tr>
              <tr>
                <td className="p-3">Example: Post to User.</td>
                <td className="p-3">Example: User to Posts.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 11 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">11. Important Points</h2>

        <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-[var(--text-secondary)]">
          <li>
            Populate replaces referenced ObjectIds with documents in query
            results.
          </li>
          <li>
            Use ref to connect a Schema field with another Mongoose model.
          </li>
          <li>Use select to retrieve specific fields.</li>
          <li>Use match to filter populated documents.</li>
          <li>
            Use nested populate for references inside populated documents.
          </li>
          <li>
            Populate does not create a permanent relationship or merge
            collections.
          </li>
          <li>
            Populate performs additional database queries; it is not a MongoDB
            $lookup aggregation stage.
          </li>
          <li>
            Use populate carefully because deeply nested or excessive population
            can affect performance.
          </li>
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
            q: "What is Populate in Mongoose?",
            a: "Populate replaces referenced ObjectIds with actual documents from another collection.",
          },
          {
            q: "Why do we use ref in Mongoose?",
            a: "The ref option tells Mongoose which model should be used to populate a referenced field.",
          },
          {
            q: "How do you populate a reference field?",
            a: "Use the populate() method, for example: Post.find().populate('author').",
          },
          {
            q: "What is the difference between select and match?",
            a: "select chooses which fields to return, while match filters which referenced documents are populated.",
          },
          {
            q: "What is Nested Populate?",
            a: "Nested Populate retrieves referenced documents inside another populated document.",
          },
          {
            q: "Can we populate multiple fields?",
            a: "Yes. We can chain multiple populate() calls or pass an array of populate configurations.",
          },
          {
            q: "What happens if a referenced document does not exist?",
            a: "For a single reference, the populated field becomes null. For an array reference, missing documents are omitted.",
          },
          {
            q: "Does Populate use MongoDB $lookup?",
            a: "No. Mongoose populate is a Mongoose-level feature that generally performs separate queries. MongoDB $lookup is an aggregation pipeline stage.",
          },
          {
            q: "What is Virtual Populate?",
            a: "Virtual Populate retrieves related documents using localField and foreignField without storing a reference array in the parent document.",
          },
          {
            q: "Does Populate permanently change the database?",
            a: "No. Populate only changes how referenced data is returned in the query result. It does not modify the stored documents.",
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

export default Populate;
