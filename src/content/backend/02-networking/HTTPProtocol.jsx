import CodeBlock from "../../../components/common/CodeBlock";

const HTTPProtocol = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <header className="space-y-3">
        <span className="text-sm text-[var(--primary-color)] font-medium">
          BACKEND NETWORKING / 01
        </span>

        <h1 className="text-4xl font-bold">HTTP Protocol</h1>

        <p className="text-[var(--text-secondary)] text-lg">
          Understanding how clients and servers communicate over the web using
          HTTP.
        </p>
      </header>

      {/* Introduction */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What is HTTP?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          HTTP (HyperText Transfer Protocol) is an application-layer protocol
          that defines how clients and servers communicate and exchange data
          over a network.
        </p>

        <p className="text-[var(--text-secondary)] leading-7">
          When a browser requests a webpage or API data, HTTP defines the
          structure of the request and response.
        </p>
      </section>

      {/* Important Concepts */}
      <section className="grid md:grid-cols-2 gap-4">
        <div className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-2">
          <h3 className="text-xl font-semibold text-[var(--primary-color)]">
            01. HTTP Request
          </h3>

          <p className="text-[var(--text-secondary)]">
            A message sent by the client to request information or perform an
            operation on the server.
          </p>

          <p className="text-sm text-[var(--text-muted)]">
            Example: Requesting user data from an API.
          </p>
        </div>

        <div className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-2">
          <h3 className="text-xl font-semibold text-[var(--primary-color)]">
            02. HTTP Response
          </h3>

          <p className="text-[var(--text-secondary)]">
            A message sent by the server after processing the client's request.
          </p>

          <p className="text-sm text-[var(--text-muted)]">
            Example: Returning user information in JSON format.
          </p>
        </div>
      </section>

      {/* How HTTP Works */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">How Does HTTP Work?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          HTTP follows a request-response communication model.
        </p>

        <div className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] flex flex-col items-center gap-3">
          <div className="w-full max-w-xs p-4 text-center rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-color)]">
            <h3 className="font-semibold">Client</h3>
            <p className="text-sm text-[var(--text-muted)]">
              Browser / React App
            </p>
          </div>

          <span className="text-[var(--primary-color)] text-sm font-medium">
            ↓ HTTP Request
          </span>

          <div className="w-full max-w-xs p-4 text-center rounded-lg border border-[var(--primary-color)] bg-[var(--primary-soft)]">
            <h3 className="font-semibold">Server</h3>
            <p className="text-sm text-[var(--text-muted)]">
              Processes the request
            </p>
          </div>

          <span className="text-[var(--primary-color)] text-sm font-medium">
            ↓ HTTP Response
          </span>

          <div className="w-full max-w-xs p-4 text-center rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-color)]">
            <h3 className="font-semibold">Client</h3>
            <p className="text-sm text-[var(--text-muted)]">
              Receives and displays data
            </p>
          </div>
        </div>
      </section>

      {/* HTTP Request */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">HTTP Request Example</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          When a client requests user data, it can send an HTTP request like
          this:
        </p>

        <div className="rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-secondary)]">
          <div className="px-4 py-2 border-b border-[var(--border-color)] text-sm text-[var(--text-muted)]">
            HTTP Request
          </div>

          <pre className="p-4 overflow-x-auto text-sm leading-7 text-[var(--text-secondary)]">
            <code>{`GET /users HTTP/1.1
Host: example.com
Accept: application/json`}</code>
          </pre>
        </div>

        <div className="space-y-2 text-[var(--text-secondary)]">
          <p>
            <strong className="text-[var(--primary-color)]">GET:</strong>{" "}
            HTTP method used to request data.
          </p>

          <p>
            <strong className="text-[var(--primary-color)]">/users:</strong>{" "}
            Requested resource or endpoint.
          </p>

          <p>
            <strong className="text-[var(--primary-color)]">HTTP/1.1:</strong>{" "}
            HTTP protocol version.
          </p>

          <p>
            <strong className="text-[var(--primary-color)]">Host:</strong>{" "}
            Identifies the target domain.
          </p>

          <p>
            <strong className="text-[var(--primary-color)]">Accept:</strong>{" "}
            Specifies the response format the client can accept.
          </p>
        </div>
      </section>

      {/* HTTP Response */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">HTTP Response Example</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          After processing the request, the server sends an HTTP response.
        </p>

        <div className="rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-secondary)]">
          <div className="px-4 py-2 border-b border-[var(--border-color)] text-sm text-[var(--text-muted)]">
            HTTP Response
          </div>

          <pre className="p-4 overflow-x-auto text-sm leading-7 text-[var(--text-secondary)]">
            <CodeBlock code={`HTTP/1.1 200 OK
Content-Type: application/json

{
  "name": "Mayur",
  "role": "Developer"
}`} />
          </pre>
        </div>

        <div className="space-y-2 text-[var(--text-secondary)]">
          <p>
            <strong className="text-[var(--primary-color)]">200 OK:</strong>{" "}
            Request was successfully processed.
          </p>

          <p>
            <strong className="text-[var(--primary-color)]">
              Content-Type:
            </strong>{" "}
            Defines the format of the response data.
          </p>

          <p>
            <strong className="text-[var(--primary-color)]">JSON:</strong>{" "}
            Contains the actual response data.
          </p>
        </div>
      </section>

      {/* HTTP Status Codes */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">HTTP Status Codes</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Status codes tell the client what happened after the server processed
          the request.
        </p>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-left text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">Code</th>
                <th className="p-3">Category</th>
                <th className="p-3">Meaning</th>
              </tr>
            </thead>

            <tbody className="text-[var(--text-secondary)]">
              {[
                ["200", "Success", "OK"],
                ["201", "Success", "Resource Created"],
                ["301", "Redirection", "Moved Permanently"],
                ["400", "Client Error", "Bad Request"],
                ["401", "Client Error", "Unauthorized"],
                ["403", "Client Error", "Forbidden"],
                ["404", "Client Error", "Not Found"],
                ["500", "Server Error", "Internal Server Error"],
              ].map(([code, category, meaning]) => (
                <tr
                  key={code}
                  className="border-t border-[var(--border-color)]"
                >
                  <td className="p-3 font-semibold text-[var(--primary-color)]">
                    {code}
                  </td>
                  <td className="p-3">{category}</td>
                  <td className="p-3">{meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* HTTP in React */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">HTTP in React</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          In React, we can use the Fetch API to send HTTP requests to a backend
          server.
        </p>

        <div className="rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-secondary)]">
          <div className="px-4 py-2 border-b border-[var(--border-color)] text-sm text-[var(--text-muted)]">
            JavaScript
          </div>

          <pre className="p-4 overflow-x-auto text-sm leading-7 text-[var(--text-secondary)]">
            <CodeBlock code={`const response = await fetch("/api/users");

const data = await response.json();

console.log(data);`} />
          </pre>
        </div>

        <ul className="space-y-2 text-[var(--text-secondary)] list-disc pl-5">
          <li>React sends an HTTP request to the backend.</li>
          <li>The backend processes the request.</li>
          <li>The server sends an HTTP response.</li>
          <li>React reads and uses the returned data.</li>
        </ul>
      </section>

      {/* Important Points */}
      <section className="p-5 rounded-xl bg-[var(--primary-soft)] border border-[var(--border-color)] space-y-2">
        <h2 className="text-lg font-semibold text-[var(--primary-color)]">
          Important Points
        </h2>

        <ul className="space-y-2 text-[var(--text-secondary)] list-disc pl-5">
          <li>HTTP is an Application Layer Protocol.</li>
          <li>HTTP follows a request-response model.</li>
          <li>HTTP is stateless by default.</li>
          <li>Default HTTP port is 80.</li>
          <li>HTTP/1.1 and HTTP/2 commonly use TCP.</li>
          <li>HTTP/3 uses QUIC over UDP.</li>
        </ul>
      </section>

      {/* Summary */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Quick Summary</h2>

        <div className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)]">
          <p className="text-[var(--text-secondary)] leading-7">
            <strong className="text-[var(--text-primary)]">HTTP:</strong>{" "}
            Protocol used for communication between clients and servers.
            <br />

            <strong className="text-[var(--text-primary)]">Request:</strong>{" "}
            Message sent by the client.
            <br />

            <strong className="text-[var(--text-primary)]">Response:</strong>{" "}
            Message returned by the server.
            <br />

            <strong className="text-[var(--text-primary)]">
              Status Code:
            </strong>{" "}
            Indicates the result of a request.
            <br />

            <strong className="text-[var(--text-primary)]">Port:</strong> 80 by
            default.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HTTPProtocol;