import CodeBlock from "../../../../components/common/CodeBlock";

const BSON = () => {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">

      {/* Header */}
      <div className="space-y-2">
        <p className="text-sm font-semibold tracking-wider text-[var(--primary-color)]">
          MONGODB / 08
        </p>
        <h1 className="text-3xl font-bold">BSON in MongoDB</h1>
        <p className="text-base leading-7 text-[var(--text-secondary)]">
          BSON stands for Binary JSON. It is a binary-encoded serialization
          format used by MongoDB to store documents and transfer data.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What is BSON?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          BSON stands for <strong>Binary JSON</strong>. It is a binary
          representation of JSON-like documents.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB uses BSON to store documents internally. BSON supports
          additional data types that standard JSON does not support directly.
        </p>

        <CodeBlock language="text" code={`JavaScript Object
       |
       v
 JSON-like Document
       |
       v
 BSON Encoding
       |
       v
 Binary Representation
       |
       v
 MongoDB Storage`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          BSON is designed to be efficient for encoding, decoding, and
          traversing structured data.
        </p>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Why Does MongoDB Use BSON?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          JSON is easy for humans to read, but MongoDB needs a format that
          supports more data types and efficient processing.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ["More Data Types", "Supports Date, ObjectId, Int32, Int64, Decimal128, Binary and more."],
            ["Efficient Traversal", "Its encoded structure helps programs traverse document fields."],
            ["Binary Storage", "Stores data in a binary representation instead of plain JSON text."],
            ["Type Information", "Preserves specific data types instead of representing everything as generic JSON values."],
          ].map(([title, description]) => (
            <div
              key={title}
              className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-2"
            >
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm leading-6 text-[var(--text-secondary)]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. JSON vs BSON</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          JSON is a text-based data interchange format, whereas BSON is
          a binary-encoded document format.
        </p>

        <h3 className="font-semibold">JSON Example</h3>

        <CodeBlock language="json" code={`{
  "name": "Mayur",
  "age": 19,
  "isStudent": true
}`} />

        <h3 className="font-semibold">BSON Concept</h3>

        <p className="leading-7 text-[var(--text-secondary)]">
          BSON represents the same kind of document using a binary structure
          containing type information, field names, values, and document length.
          It is not normally displayed as readable JSON text.
        </p>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[450px] text-left text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">JSON</th>
                <th className="p-3">BSON</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              {[
                ["Text-based format", "Binary-encoded format"],
                ["Limited built-in types", "Supports additional data types"],
                ["Human-readable", "Not directly human-readable"],
                ["Used for data exchange", "Used by MongoDB for storage and data transfer"],
                ["No native ObjectId type", "Supports ObjectId"],
                ["No native Date type", "Supports Date"],
              ].map(([json, bson]) => (
                <tr key={json} className="border-t border-[var(--border-color)]">
                  <td className="p-3">{json}</td>
                  <td className="p-3">{bson}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Important BSON Data Types</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          BSON supports several data types to store different kinds of values.
          Some important types are:
        </p>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[500px] text-left text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">BSON Type</th>
                <th className="p-3">Description</th>
                <th className="p-3">Example</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              {[
                ["String", "Text data", '"Mayur"'],
                ["Int32", "32-bit integer", "NumberInt(19)"],
                ["Int64", "64-bit integer", "NumberLong(100000)"],
                ["Double", "64-bit floating-point number", "99.99"],
                ["Decimal128", "High-precision decimal", "NumberDecimal('99.99')"],
                ["Boolean", "True or false", "true"],
                ["Date", "Date and time", "ISODate(...)"],
                ["ObjectId", "Unique document identifier", "ObjectId(...)"],
                ["Array", "List of values", '["Node", "MongoDB"]'],
                ["Object", "Embedded document", "{ city: " + '"Bhopal"' + " }"],
                ["Null", "Represents an empty value", "null"],
                ["Binary", "Binary data", "Binary(...)"],
              ].map(([type, description, example]) => (
                <tr key={type} className="border-t border-[var(--border-color)]">
                  <td className="p-3 font-medium text-[var(--primary-color)]">
                    {type}
                  </td>
                  <td className="p-3">{description}</td>
                  <td className="p-3">
                    <code>{example}</code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. ObjectId in BSON</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          ObjectId is a BSON data type commonly used as the default value
          of the <code>_id</code> field in MongoDB documents.
        </p>

        <CodeBlock language="javascript" code={`{
  _id: ObjectId("507f1f77bcf86cd799439011"),
  name: "Mayur",
  age: 19
}`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          An ObjectId is 12 bytes long and contains three components:
        </p>

        <CodeBlock language="text" code={`ObjectId = 12 Bytes

4 Bytes  -> Timestamp
5 Bytes  -> Random Value
3 Bytes  -> Counter`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          MongoDB automatically generates an ObjectId when a document
          is inserted without an _id field.
        </p>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Date Type in BSON</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Standard JSON does not have a native Date type. BSON provides
          a Date type to store date and time values.
        </p>

        <CodeBlock language="javascript" code={`db.users.insertOne({
  name: "Mayur",
  createdAt: new Date()
})`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          The Date value is stored as a 64-bit integer representing
          milliseconds since the Unix epoch (January 1, 1970 UTC).
        </p>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. BSON Document Structure</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          A BSON document contains a length, encoded elements, and a
          terminating null byte.
        </p>

        <CodeBlock language="text" code={`BSON Document
      |
      |-- Document Length
      |
      |-- Element 1
      |      |
      |      |-- Type
      |      |-- Field Name
      |      |-- Value
      |
      |-- Element 2
      |      |
      |      |-- Type
      |      |-- Field Name
      |      |-- Value
      |
      |-- Null Terminator`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          This structure allows BSON parsers to identify field types,
          values, and document boundaries.
        </p>
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. View BSON Data in MongoDB</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB Shell and Compass display documents in a readable,
          JSON-like representation. Special BSON types are shown using
          representations such as ObjectId() and ISODate().
        </p>

        <CodeBlock language="javascript" code={`db.users.insertOne({
  name: "Mayur",
  age: NumberInt(19),
  balance: NumberDecimal("1500.50"),
  createdAt: new Date(),
  skills: ["JavaScript", "Node.js", "MongoDB"]
})`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          The shell displays these values in an Extended JSON-like
          representation, but MongoDB stores the document in BSON format.
        </p>
      </section>

      {/* 9 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. BSON in Node.js</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The official MongoDB Node.js driver uses BSON support to work
          with MongoDB documents. We can also import BSON types directly
          from the bson package.
        </p>

        <CodeBlock language="bash" code={`npm install bson`} />

        <h3 className="font-semibold">Example</h3>

        <CodeBlock language="javascript" code={`import { ObjectId, BSON } from "bson";

const user = {
  _id: new ObjectId(),
  name: "Mayur",
  age: 19
};

// Convert document into BSON binary
const bsonData = BSON.serialize(user);

console.log(bsonData);

// Convert BSON binary back into a JavaScript object
const decodedUser = BSON.deserialize(bsonData);

console.log(decodedUser);`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          <code>BSON.serialize()</code> converts a JavaScript object into
          BSON binary data, while <code>BSON.deserialize()</code> converts
          BSON binary data back into a JavaScript object.
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
            q: "What is BSON?",
            a: "BSON stands for Binary JSON. It is a binary-encoded serialization format used by MongoDB to store and transfer documents."
          },
          {
            q: "Why does MongoDB use BSON instead of JSON?",
            a: "BSON supports additional data types, preserves type information, and provides a structure designed for efficient encoding and traversal."
          },
          {
            q: "What is the main difference between JSON and BSON?",
            a: "JSON is text-based, whereas BSON is binary-encoded. BSON also supports additional types such as ObjectId and Date."
          },
          {
            q: "Does MongoDB store data in JSON format?",
            a: "No. MongoDB stores documents in BSON format. JSON-like representations are commonly used to display and exchange document data."
          },
          {
            q: "What is ObjectId?",
            a: "ObjectId is a 12-byte BSON data type commonly used as the default unique identifier for MongoDB documents."
          },
          {
            q: "How many bytes does an ObjectId contain?",
            a: "An ObjectId contains 12 bytes: 4 bytes for a timestamp, 5 bytes for a random value, and 3 bytes for a counter."
          },
          {
            q: "Does BSON support Date?",
            a: "Yes. BSON has a native Date type that stores milliseconds since the Unix epoch."
          },
          {
            q: "What is Decimal128?",
            a: "Decimal128 is a BSON type that provides high-precision decimal representation, useful for values such as financial amounts."
          },
          {
            q: "What is BSON serialization?",
            a: "Serialization converts a JavaScript object into BSON binary data."
          },
          {
            q: "What is BSON deserialization?",
            a: "Deserialization converts BSON binary data back into a JavaScript object."
          },
          {
            q: "Is BSON human-readable?",
            a: "No. BSON is a binary format, so it is not directly human-readable. MongoDB tools display readable representations of BSON documents."
          },
        ].map((item, index) => (
          <details
            key={index}
            className="group overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)]"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 font-medium transition-colors hover:bg-[var(--bg-tertiary)]">
              <span>{index + 1}. {item.q}</span>
              <span className="shrink-0 text-lg text-[var(--primary-color)] transition-transform group-open:rotate-45">
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

export default BSON;