import CodeBlock from "../../../components/common/CodeBlock";

const JSON = () => {
  const dataTypes = [
    ["String", '"Mayur"', "Text values"],
    ["Number", "19", "Numeric values"],
    ["Boolean", "true", "True or false"],
    ["Array", "[1, 2, 3]", "Ordered collection"],
    ["Object", '{"name": "Mayur"}', "Key-value pairs"],
    ["Null", "null", "Represents an empty value"],
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8 text-[var(--white-color)]">
      {/* Header */}
      <header className="space-y-3">
        <span className="text-sm text-[var(--primary-color)] font-medium">
          API FUNDAMENTALS / 06
        </span>

        <h1 className="text-4xl font-bold">JSON</h1>

        <p className="text-lg text-[var(--muted-color)]">
          Understanding how structured data is exchanged between clients and
          servers.
        </p>
      </header>

      {/* Introduction */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What is JSON?</h2>

        <p className="text-[var(--muted-color)] leading-7">
          JSON (JavaScript Object Notation) is a lightweight, text-based data
          format used to store and exchange structured data between
          applications.
        </p>

        <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] space-y-2">
          <p className="text-sm text-[var(--muted-color)]">Example</p>

          <pre className="text-sm text-[var(--primary-color)] overflow-x-auto">
            {`{
  "name": "Mayur",
  "age": 19,
  "isDeveloper": true
}`}
          </pre>
        </div>
      </section>

      {/* Diagram */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">How JSON Works</h2>

        <div className="p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-3 text-center">
            <div className="p-4 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-color)]">
              <h3 className="font-semibold">Client</h3>
              <p className="text-xs text-[var(--muted-color)]">React App</p>
            </div>

            <div className="text-[var(--primary-color)] font-semibold">
              ↔ JSON Data
            </div>

            <div className="p-4 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-color)]">
              <h3 className="font-semibold">Server</h3>
              <p className="text-xs text-[var(--muted-color)]">Express.js</p>
            </div>
          </div>

          <div className="mt-5 p-4 rounded-xl bg-[var(--primary-soft)] border border-[var(--primary-color)] text-center">
            <p className="font-semibold text-[var(--primary-color)]">
              JSON Representation
            </p>

            <code className="text-xs text-[var(--muted-color)]">
              {'{ "message": "Hello World" }'}
            </code>
          </div>

          <p className="text-xs text-[var(--muted-color)] text-center mt-3">
            Both applications exchange structured data using JSON text.
          </p>
        </div>
      </section>

      {/* Data Types */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">JSON Data Types</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm text-left">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">Type</th>
                <th className="p-3">Example</th>
                <th className="p-3">Purpose</th>
              </tr>
            </thead>

            <tbody>
              {dataTypes.map(([type, example, purpose]) => (
                <tr
                  key={type}
                  className="border-t border-[var(--border-color)]"
                >
                  <td className="p-3 font-semibold text-[var(--primary-color)]">
                    {type}
                  </td>

                  <td className="p-3 text-[var(--muted-color)] whitespace-nowrap">
                    {example}
                  </td>

                  <td className="p-3 text-[var(--muted-color)]">{purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Syntax Rules */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">JSON Syntax Rules</h2>

        <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
          <ul className="space-y-2 text-sm text-[var(--muted-color)] list-disc pl-5">
            <li>Keys must always use double quotes.</li>
            <li>String values must use double quotes.</li>
            <li>Key-value pairs are separated using commas.</li>
            <li>Objects use curly braces {"{}"}.</li>
            <li>Arrays use square brackets [].</li>
            <li>JSON does not support functions or undefined values.</li>
          </ul>
        </div>
      </section>

      {/* JavaScript Conversion */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          JSON and JavaScript Conversion
        </h2>

        <p className="text-[var(--muted-color)] leading-7">
          JavaScript provides two important methods to convert between
          JavaScript objects and JSON strings.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] space-y-3">
            <h3 className="font-semibold text-[var(--primary-color)]">
              JSON.stringify()
            </h3>

            <p className="text-sm text-[var(--muted-color)]">
              Converts a JavaScript object into a JSON string.
            </p>

            <pre className="text-xs text-[var(--muted-color)] overflow-x-auto">
              <CodeBlock code={`const user = {
  name: "Mayur",
  age: 19
};

const json = JSON.stringify(user);`} />
            </pre>
          </div>

          <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] space-y-3">
            <h3 className="font-semibold text-[var(--primary-color)]">
              JSON.parse()
            </h3>

            <p className="text-sm text-[var(--muted-color)]">
              Converts a valid JSON string into a JavaScript value.
            </p>

            <pre className="text-xs text-[var(--muted-color)] overflow-x-auto">
              <CodeBlock code={`const json = '{"name":"Mayur"}';

const user = JSON.parse(json);`} />
            </pre>
          </div>
        </div>
      </section>

      {/* Express */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Working with JSON in Express</h2>

        <p className="text-[var(--muted-color)] leading-7">
          Express provides express.json() middleware to parse incoming JSON
          request bodies. The parsed data becomes available in req.body.
        </p>

        <div className="rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-secondary)]">
          <div className="px-4 py-2 border-b border-[var(--border-color)] text-sm text-[var(--muted-color)]">
            server.js
          </div>

          <pre className="p-4 overflow-x-auto text-sm leading-7 text-[var(--muted-color)]">
            <CodeBlock code={`import express from "express";

const app = express();

app.use(express.json());

app.post("/api/users", (req, res) => {
  const user = req.body;

  res.status(201).json({
    message: "User created",
    user
  });
});

app.listen(3000);`}/>
          </pre>
        </div>
      </section>

      {/* Important Points */}
      <section className="p-5 rounded-xl bg-[var(--primary-soft)] border border-[var(--border-color)] space-y-3">
        <h2 className="text-lg font-semibold text-[var(--primary-color)]">
          Important Points
        </h2>

        <ul className="space-y-2 text-sm text-[var(--muted-color)] list-disc pl-5">
          <li>JSON stands for JavaScript Object Notation.</li>
          <li>JSON is a text-based data format.</li>
          <li>JSON is language-independent.</li>
          <li>JSON supports six data types.</li>
          <li>JSON.stringify() converts objects into JSON strings.</li>
          <li>JSON.parse() converts JSON strings into JavaScript values.</li>
          <li>Express uses express.json() to parse incoming JSON bodies.</li>
        </ul>
      </section>

      {/* Summary */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Quick Summary</h2>

        <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] text-sm text-[var(--muted-color)] leading-8">
          <strong className="text-[var(--white-color)]">JSON:</strong> A format
          for storing and exchanging structured data.
          <br />
          <strong className="text-[var(--white-color)]">
            stringify():
          </strong>{" "}
          JavaScript Object → JSON String.
          <br />
          <strong className="text-[var(--white-color)]">parse():</strong> JSON
          String → JavaScript Value.
          <br />
          <strong className="text-[var(--white-color)]">
            express.json():
          </strong>{" "}
          Parses incoming JSON request bodies.
        </div>
      </section>
    </div>
  );
};

export default JSON;
