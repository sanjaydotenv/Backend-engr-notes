import CodeBlock from "../../../components/common/CodeBlock";

const HTTPHeaders = () => {
  const requestHeaders = [
    ["Host", "example.com", "Specifies the target host."],
    ["Authorization", "Bearer token123", "Sends authentication credentials."],
    [
      "Content-Type",
      "application/json",
      "Defines the format of the request body.",
    ],
    [
      "Accept",
      "application/json",
      "Specifies the response format the client accepts.",
    ],
    ["User-Agent", "Mozilla/5.0", "Identifies the client making the request."],
    ["Cookie", "sessionId=abc123", "Sends stored cookies to the server."],
  ];

  const responseHeaders = [
    ["Content-Type", "application/json", "Defines the response body format."],
    [
      "Set-Cookie",
      "sessionId=abc123",
      "Instructs the browser to store a cookie.",
    ],
    ["Cache-Control", "no-cache", "Provides caching instructions."],
    [
      "Access-Control-Allow-Origin",
      "*",
      "Specifies allowed origins for cross-origin requests.",
    ],
    ["Content-Length", "120", "Indicates the response body size in bytes."],
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8 text-[var(--text-primary)]">
      {/* Header */}{" "}
      <header className="space-y-3">
        {" "}
        <span className="text-sm text-[var(--primary-color)] font-medium">
          BACKEND NETWORKING / 07{" "}
        </span>
        <h1 className="text-4xl font-bold">HTTP Headers</h1>
        <p className="text-lg text-[var(--text-secondary)]">
          Understanding how additional information is sent between clients and
          servers using HTTP headers.
        </p>
      </header>
      {/* Introduction */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What are HTTP Headers?</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          HTTP Headers are key-value pairs included in HTTP requests and
          responses. They carry additional information about the request,
          response, authentication, content type and caching.
        </p>
        <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
          <p className="text-sm text-[var(--text-muted)] mb-3">
            Header Structure
          </p>
          <pre className="text-sm text-[var(--primary-color)] overflow-x-auto">
            {`Header-Name: Header-Value

Content-Type: application/json
Authorization: Bearer token123`}{" "}
          </pre>{" "}
        </div>{" "}
      </section>
      {/* Request and Response */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Request Headers vs Response Headers
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-3">
            <h3 className="text-xl font-semibold text-[var(--primary-color)]">
              Request Headers
            </h3>
            <p className="text-[var(--text-secondary)] leading-7">
              Sent by the client to provide information about the request.
            </p>
            <pre className="p-3 rounded-lg bg-[var(--bg-tertiary)] text-sm overflow-x-auto text-[var(--text-secondary)]">
              {`GET /users HTTP/1.1
Host: example.com
Accept: application/json
Authorization: Bearer token123`}{" "}
            </pre>{" "}
          </div>
          <div className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-3">
            <h3 className="text-xl font-semibold text-[var(--primary-color)]">
              Response Headers
            </h3>
            <p className="text-[var(--text-secondary)] leading-7">
              Sent by the server to provide information about its response.
            </p>
            <pre className="p-3 rounded-lg bg-[var(--bg-tertiary)] text-sm overflow-x-auto text-[var(--text-secondary)]">
              {`HTTP/1.1 200 OK
Content-Type: application/json
Cache-Control: no-cache`}{" "}
            </pre>{" "}
          </div>{" "}
        </div>{" "}
      </section>
      {/* Request Headers */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Common Request Headers</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-left text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">Header</th>
                <th className="p-3">Example</th>
                <th className="p-3">Purpose</th>
              </tr>
            </thead>

            <tbody>
              {requestHeaders.map(([name, value, purpose]) => (
                <tr
                  key={name}
                  className="border-t border-[var(--border-color)]"
                >
                  <td className="p-3 font-semibold text-[var(--primary-color)]">
                    {name}
                  </td>
                  <td className="p-3 text-[var(--text-secondary)] whitespace-nowrap">
                    {value}
                  </td>
                  <td className="p-3 text-[var(--text-secondary)]">
                    {purpose}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      {/* Response Headers */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Common Response Headers</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-left text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">Header</th>
                <th className="p-3">Example</th>
                <th className="p-3">Purpose</th>
              </tr>
            </thead>

            <tbody>
              {responseHeaders.map(([name, value, purpose]) => (
                <tr
                  key={name}
                  className="border-t border-[var(--border-color)]"
                >
                  <td className="p-3 font-semibold text-[var(--primary-color)]">
                    {name}
                  </td>
                  <td className="p-3 text-[var(--text-secondary)] whitespace-nowrap">
                    {value}
                  </td>
                  <td className="p-3 text-[var(--text-secondary)]">
                    {purpose}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      {/* Authorization */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Authorization Header</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          The Authorization header is commonly used to send authentication
          credentials, such as a JWT access token, to the backend.
        </p>

        <div className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-2">
          <p className="text-sm text-[var(--text-muted)]">Example</p>

          <code className="text-sm text-[var(--primary-color)] break-all">
            Authorization: Bearer eyJhbGciOiJIUzI1Ni...
          </code>

          <p className="text-sm text-[var(--text-secondary)]">
            Bearer indicates that the client is sending a token as its
            authentication credential.
          </p>
        </div>
      </section>
      {/* Sending Headers */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Sending Headers with Fetch</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          JavaScript allows clients to send custom headers using the headers
          option in fetch().
        </p>
        <div className="rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-secondary)]">
          <div className="px-4 py-2 border-b border-[var(--border-color)] text-sm text-[var(--text-muted)]">
            client.js
          </div>
          <pre className="p-4 overflow-x-auto text-sm leading-7 text-[var(--text-secondary)]">
           <CodeBlock code={`const response = await fetch("/api/users", {

method: "GET",
headers: {
"Content-Type": "application/json",
"Authorization": Bearer fkjfsdkjhkhjfsdkhjfkheuhweiowehioiohefw83r2iohefy8u8903r2uiohy83ohi4t
"Accept": "application/json"
}
});

const data = await response.json();`} />
          </pre>{" "}
        </div>{" "}
      </section>
      {/* Express Headers */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">
          Working with Headers in Express.js
        </h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Express provides req.headers to read incoming headers and res.set() to
          set outgoing response headers.
        </p>

        <div className="rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-secondary)]">
          <div className="px-4 py-2 border-b border-[var(--border-color)] text-sm text-[var(--text-muted)]">
            server.js
          </div>
          <pre className="p-4 overflow-x-auto text-sm leading-7 text-[var(--text-secondary)]">
            <CodeBlock code={`app.get("/profile", (req, res) => {

// Read request header
const token = req.headers.authorization;

// Set response header
res.set("X-App-Name", "My Backend");

res.status(200).json({
message: "Headers received",
token
});
});`}/>
          </pre>{" "}
        </div>

        <div className="p-4 rounded-xl bg-[var(--primary-soft)] border border-[var(--border-color)]">
          <p className="text-sm text-[var(--text-secondary)]">
            <strong className="text-[var(--primary-color)]">Important:</strong>{" "}
            HTTP header names are case-insensitive. In Node.js, incoming header
            names are generally available in lowercase through req.headers.
          </p>
        </div>
      </section>
      {/* Important Points */}
      <section className="p-5 rounded-xl bg-[var(--primary-soft)] border border-[var(--border-color)] space-y-3">
        <h2 className="text-lg font-semibold text-[var(--primary-color)]">
          Important Points
        </h2>

        <ul className="space-y-2 text-[var(--text-secondary)] list-disc pl-5">
          <li>Headers are key-value pairs.</li>
          <li>Both requests and responses can contain headers.</li>
          <li>Authorization is commonly used for authentication.</li>
          <li>Content-Type describes the body format.</li>
          <li>Accept describes the response formats the client accepts.</li>
          <li>Set-Cookie is used by servers to send cookies to browsers.</li>
          <li>Never expose sensitive tokens in public logs or URLs.</li>
        </ul>
      </section>
      {/* Summary */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Quick Summary</h2>

        <div className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)]">
          <p className="text-[var(--text-secondary)] leading-8">
            <strong className="text-[var(--text-primary)]">
              Request Headers:
            </strong>{" "}
            Client sends information to the server.
            <br />
            <strong className="text-[var(--text-primary)]">
              Response Headers:
            </strong>{" "}
            Server sends information to the client.
            <br />
            <strong className="text-[var(--text-primary)]">
              Authorization:
            </strong>{" "}
            Sends authentication credentials.
            <br />
            <strong className="text-[var(--text-primary)]">
              Content-Type:
            </strong>{" "}
            Defines the body format.
            <br />
            <strong className="text-[var(--text-primary)]">
              Set-Cookie:
            </strong>{" "}
            Sends cookies to the browser.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HTTPHeaders;
