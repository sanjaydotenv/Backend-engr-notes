import React from "react";
import CodeBlock from "../../../components/common/CodeBlock";

const RequestBody = () => {
  const bodyTypes = [
    {
      name: "JSON",
      type: "application/json",
      description: "Used to send structured data, commonly in REST APIs.",
      example: `{
  "name": "Mayur",
  "email": "mayur@example.com"
}`,
    },
    {
      name: "URL Encoded",
      type: "application/x-www-form-urlencoded",
      description:
        "Sends data as key-value pairs, commonly used in HTML forms.",
      example: "name=Mayur&email=mayur%40example.com",
    },
    {
      name: "Form Data",
      type: "multipart/form-data",
      description:
        "Used to send form fields along with files like images and documents.",
      example: `name: Mayur
email: mayur@example.com
profile: [image file]`,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8 text-[var(--text-primary)]">
      {/* Header */}{" "}
      <header className="space-y-3">
        {" "}
        <span className="text-sm text-[var(--primary-color)] font-medium">
          BACKEND NETWORKING / 08{" "}
        </span>
        <h1 className="text-4xl font-bold">Request Body</h1>
        <p className="text-lg text-[var(--text-secondary)]">
          Understanding how clients send data to servers through the body of an
          HTTP request.
        </p>
      </header>
      {/* Introduction */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What is a Request Body?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          A Request Body is the data sent by a client to a server inside an HTTP
          request. It is commonly used with POST, PUT and PATCH methods to
          create or update resources.
        </p>

        <div className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-3">
          <p className="text-sm text-[var(--text-muted)]">
            HTTP Request Structure
          </p>

          <pre className="text-sm leading-7 overflow-x-auto text-[var(--text-secondary)]">
            <CodeBlock
              code={`POST /api/users HTTP/1.1
Content-Type: application/json

{
"name": "Mayur",
"email": "[mayur@example.com](mailto:mayur@example.com)"
}`}
            />
          </pre>

          <div className="p-3 rounded-lg bg-[var(--primary-soft)] text-sm text-[var(--text-secondary)]">
            The JSON data after the empty line is the Request Body.
          </div>
        </div>
      </section>
      {/* Why Request Body */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Why Do We Need It?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          When users submit forms, register accounts, upload files or update
          profiles, the client needs to send that information to the backend.
          The Request Body carries this data.
        </p>

        <div className="grid md:grid-cols-3 gap-3">
          {[
            ["Registration", "Send name, email and password."],
            ["Create Product", "Send title, price and description."],
            ["Update Profile", "Send updated user information."],
          ].map(([title, description]) => (
            <div
              key={title}
              className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-2"
            >
              <h3 className="font-semibold text-[var(--primary-color)]">
                {title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* Types */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Types of Request Body</h2>

        {bodyTypes.map((body) => (
          <div
            key={body.name}
            className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-3"
          >
            <h3 className="text-xl font-semibold text-[var(--primary-color)]">
              {body.name}
            </h3>

            <p className="text-sm text-[var(--text-muted)]">
              Content-Type: {body.type}
            </p>

            <p className="text-[var(--text-secondary)] leading-7">
              {body.description}
            </p>

            <pre className="p-3 rounded-lg bg-[var(--bg-tertiary)] text-sm overflow-x-auto text-[var(--text-secondary)]">
              {body.example}
            </pre>
          </div>
        ))}
      </section>
      {/* Request Body Flow */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">How Request Body Works</h2>

        <div className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)]">
          <div className="flex flex-col items-center gap-3 text-center">
            {[
              ["01", "Client", "User submits a registration form."],
              ["02", "HTTP Request", "Data is sent inside the request body."],
              ["03", "Express Middleware", "Parses the incoming request data."],
              ["04", "Backend", "Accesses data using req.body."],
              ["05", "Database", "Stores the data if validation succeeds."],
            ].map(([number, title, description], index) => (
              <React.Fragment key={number}>
                <div className="w-full max-w-md p-4 rounded-lg border border-[var(--border-color)] bg-[var(--bg-tertiary)]">
                  <span className="text-xs text-[var(--primary-color)]">
                    STEP {number}
                  </span>
                  <h3 className="font-semibold mt-1">{title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] mt-1">
                    {description}
                  </p>
                </div>

                {index !== 4 && (
                  <span className="text-xl text-[var(--primary-color)]">↓</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
      {/* Express Middleware */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">
          Reading Request Body in Express.js
        </h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Express uses middleware to parse incoming request bodies. For JSON and
          URL-encoded data, we commonly use express.json() and
          express.urlencoded().
        </p>

        <div className="rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-secondary)]">
          <div className="px-4 py-2 border-b border-[var(--border-color)] text-sm text-[var(--text-muted)]">
            server.js
          </div>
          <pre className="p-4 overflow-x-auto text-sm leading-7 text-[var(--text-secondary)]">
            <CodeBlock code={`import express from "express";


const app = express();

// Parse JSON data
app.use(express.json());

// Parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

app.post("/users", (req, res) => {
const { name, email } = req.body;

res.status(201).json({
message: "User received successfully",
name,
email
});
});

app.listen(3000);`} />
          </pre>{" "}
        </div>

        <div className="p-4 rounded-xl bg-[var(--primary-soft)] border border-[var(--border-color)]">
          <p className="text-sm text-[var(--text-secondary)]">
            <strong className="text-[var(--primary-color)]">Remember:</strong>{" "}
            Without the appropriate body-parsing middleware, req.body may be
            undefined or unavailable for that content type.
          </p>
        </div>
      </section>
      {/* Sending JSON */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">
          Sending Request Body with Fetch
        </h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Use JSON.stringify() to convert a JavaScript object into JSON before
          sending it through fetch().
        </p>
        <div className="rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-secondary)]">
          <div className="px-4 py-2 border-b border-[var(--border-color)] text-sm text-[var(--text-muted)]">
            client.js
          </div>
          <pre className="p-4 overflow-x-auto text-sm leading-7 text-[var(--text-secondary)]">
            <CodeBlock
              code={`const user = {


name: "Mayur",
email: "[mayur@example.com](mailto:mayur@example.com)"
};

const response = await fetch("/api/users", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify(user)
});

const data = await response.json();`}
            />
          </pre>{" "}
        </div>{" "}
      </section>
      {/* Important Differences */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">
          Request Body vs URL Parameters
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-2">
            <h3 className="font-semibold text-[var(--primary-color)]">
              Request Body
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Data is sent inside the HTTP request body.
            </p>
            <code className="text-sm text-[var(--text-muted)] break-all">
              POST /users
            </code>
            <pre className="p-3 rounded-lg bg-[var(--bg-tertiary)] text-sm text-[var(--text-secondary)]">
              {`{
  "name": "Mayur"
}`}{" "}
            </pre>{" "}
          </div>
          <div className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-2">
            <h3 className="font-semibold text-[var(--primary-color)]">
              URL Parameters
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Data is included in the URL.
            </p>
            <code className="text-sm text-[var(--text-muted)] break-all">
              GET /users?page=2
            </code>
            <pre className="p-3 rounded-lg bg-[var(--bg-tertiary)] text-sm text-[var(--text-secondary)]">
              {`req.query.page
// "2"`}{" "}
            </pre>{" "}
          </div>{" "}
        </div>{" "}
      </section>
      {/* Important Points */}
      <section className="p-5 rounded-xl bg-[var(--primary-soft)] border border-[var(--border-color)] space-y-3">
        <h2 className="text-lg font-semibold text-[var(--primary-color)]">
          Important Points
        </h2>

        <ul className="space-y-2 text-[var(--text-secondary)] list-disc pl-5">
          <li>Request Body carries data from client to server.</li>
          <li>POST, PUT and PATCH commonly use request bodies.</li>
          <li>JSON is commonly used in REST APIs.</li>
          <li>Content-Type tells the server how to interpret the body.</li>
          <li>express.json() parses JSON request bodies.</li>
          <li>Use multer or similar middleware to handle uploaded files.</li>
          <li>Always validate incoming data before storing it.</li>
          <li>HTTPS should be used to protect sensitive data in transit.</li>
        </ul>
      </section>
      {/* Summary */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Quick Summary</h2>

        <div className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)]">
          <p className="text-[var(--text-secondary)] leading-8">
            <strong className="text-[var(--text-primary)]">
              Request Body:
            </strong>{" "}
            Data sent inside an HTTP request.
            <br />
            <strong className="text-[var(--text-primary)]">JSON:</strong>{" "}
            Commonly used for API data.
            <br />
            <strong className="text-[var(--text-primary)]">
              Form Data:
            </strong>{" "}
            Used for files and form fields.
            <br />
            <strong className="text-[var(--text-primary)]">
              req.body:
            </strong>{" "}
            Accesses parsed request data in Express.
            <br />
            <strong className="text-[var(--text-primary)]">
              express.json():
            </strong>{" "}
            Parses incoming JSON data.
          </p>
        </div>
      </section>
    </div>
  );
};

export default RequestBody;
