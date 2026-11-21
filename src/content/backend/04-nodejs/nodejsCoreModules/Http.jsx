import React from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const Http = () => {
  return (
    <div className="space-y-10 text-[var(--text-primary)]">
      {/* Introduction */}
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Node.js HTTP Module</h1>

        <p className="leading-7 text-[var(--text-secondary)]">
          The HTTP module is a built-in Node.js module that allows us to create
          HTTP servers and handle HTTP requests and responses.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          It provides the foundation for building web servers, REST APIs and
          backend applications without using external frameworks like
          Express.js.
        </p>
      </section>

      {/* What is HTTP */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">1. What is HTTP?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          HTTP stands for Hypertext Transfer Protocol. It is an application
          layer protocol used for communication between clients and servers.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          When a browser or frontend application needs data from a backend, it
          sends an HTTP request. The server processes that request and sends an
          HTTP response.
        </p>

        <CodeBlock
          code={`Client (Browser / Frontend)
          |
          | HTTP Request
          v
     Node.js Server
          |
          | Process Request
          v
     HTTP Response
          |
          v
Client receives data`}
        />
      </section>

      {/* Import */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">2. Import HTTP Module</h2>

        <h3 className="text-lg font-semibold">CommonJS</h3>

        <CodeBlock code={`const http = require("node:http");`} />

        <h3 className="text-lg font-semibold">ES Modules</h3>

        <CodeBlock code={`import http from "node:http";`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          The HTTP module is built into Node.js, so no external package
          installation is required.
        </p>
      </section>

      {/* Create Server */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">3. createServer() Method</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The createServer() method creates an HTTP server. It accepts a
          callback function that executes whenever the server receives an HTTP
          request.
        </p>

        <CodeBlock
          code={`const http = require("node:http");

const server = http.createServer((req, res) => {
  res.end("Hello from Node.js Server!");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Run the file and open localhost:3000 in your browser. The server will
          respond with the provided message.
        </p>

        <h3 className="text-lg font-semibold">How It Works</h3>

        <ol className="list-decimal space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>createServer() creates an HTTP server.</li>
          <li>The server waits for incoming requests.</li>
          <li>When a request arrives, the callback executes.</li>
          <li>req contains incoming request information.</li>
          <li>res is used to send a response to the client.</li>
          <li>listen() starts accepting connections on the specified port.</li>
        </ol>
      </section>

      {/* Request */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">4. HTTP Request (req)</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The request object contains information sent by the client to the
          server. It is an instance of IncomingMessage.
        </p>

        <CodeBlock
          code={`const http = require("node:http");

const server = http.createServer((req, res) => {
  console.log("Method:", req.method);
  console.log("URL:", req.url);
  console.log("Headers:", req.headers);

  res.end("Request received");
});

server.listen(3000);`}
        />

        <h3 className="text-lg font-semibold">Important Request Properties</h3>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="p-3 text-left">Property</th>
                <th className="p-3 text-left">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["req.method", "HTTP method such as GET or POST"],
                ["req.url", "Request URL path and query string"],
                ["req.headers", "Incoming request headers"],
                ["req.httpVersion", "HTTP protocol version"],
                ["req.socket", "Underlying network socket"],
              ].map(([property, purpose]) => (
                <tr
                  key={property}
                  className="border-t border-[var(--border-color)]"
                >
                  <td className="p-3 font-medium text-[var(--accent-color)]">
                    {property}
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

      {/* Response */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">5. HTTP Response (res)</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The response object is used by the server to send data back to the
          client. It is an instance of ServerResponse.
        </p>

        <CodeBlock
          code={`const http = require("node:http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  res.end("Hello Client!");
});

server.listen(3000);`}
        />

        <h3 className="text-lg font-semibold">
          Important Response Methods and Properties
        </h3>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="p-3 text-left">API</th>
                <th className="p-3 text-left">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["res.statusCode", "Set HTTP status code"],
                ["res.setHeader()", "Set response header"],
                ["res.getHeader()", "Read a response header"],
                ["res.write()", "Write response data"],
                ["res.end()", "Finish the response"],
                ["res.writeHead()", "Set status and headers"],
                ["res.headersSent", "Check whether headers have been sent"],
              ].map(([api, purpose]) => (
                <tr key={api} className="border-t border-[var(--border-color)]">
                  <td className="p-3 font-medium text-[var(--accent-color)]">
                    {api}
                  </td>
                  <td className="p-3 text-[var(--text-secondary)]">
                    {purpose}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <p className="font-semibold text-[var(--accent-color)]">Important</p>
          <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
            res.end() completes the response. After calling it, you should not
            try to send more response data.
          </p>
        </div>
      </section>

      {/* HTTP Methods */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">6. HTTP Methods</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          HTTP methods describe the action that the client wants the server to
          perform on a resource.
        </p>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="p-3 text-left">Method</th>
                <th className="p-3 text-left">Purpose</th>
                <th className="p-3 text-left">Example</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["GET", "Retrieve data", "Get all products"],
                ["POST", "Create a resource", "Create a product"],
                ["PUT", "Replace a resource", "Replace product details"],
                [
                  "PATCH",
                  "Partially update a resource",
                  "Update product price",
                ],
                ["DELETE", "Delete a resource", "Delete a product"],
              ].map(([method, purpose, example]) => (
                <tr
                  key={method}
                  className="border-t border-[var(--border-color)]"
                >
                  <td className="p-3 font-medium text-[var(--accent-color)]">
                    {method}
                  </td>
                  <td className="p-3 text-[var(--text-secondary)]">
                    {purpose}
                  </td>
                  <td className="p-3 text-[var(--text-secondary)]">
                    {example}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <CodeBlock
          code={`const http = require("node:http");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.end("GET request received");
  } else if (req.method === "POST") {
    res.end("POST request received");
  } else {
    res.statusCode = 405;
    res.end("Method Not Allowed");
  }
});

server.listen(3000);`}
        />
      </section>

      {/* Status Codes */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">7. HTTP Status Codes</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Status codes tell the client the result of its HTTP request.
        </p>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Meaning</th>
                <th className="p-3 text-left">Usage</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["200", "OK", "Successful request"],
                ["201", "Created", "Resource created"],
                ["204", "No Content", "Successful response without a body"],
                ["301", "Moved Permanently", "Permanent redirect"],
                ["400", "Bad Request", "Invalid client request"],
                ["401", "Unauthorized", "Authentication required or invalid"],
                ["403", "Forbidden", "Access not allowed"],
                ["404", "Not Found", "Resource does not exist"],
                ["405", "Method Not Allowed", "HTTP method not supported"],
                [
                  "409",
                  "Conflict",
                  "Request conflicts with current resource state",
                ],
                [
                  "422",
                  "Unprocessable Content",
                  "Request content cannot be processed",
                ],
                ["500", "Internal Server Error", "Unexpected server error"],
                [
                  "503",
                  "Service Unavailable",
                  "Server temporarily unavailable",
                ],
              ].map(([code, meaning, usage]) => (
                <tr
                  key={code}
                  className="border-t border-[var(--border-color)]"
                >
                  <td className="p-3 font-medium text-[var(--accent-color)]">
                    {code}
                  </td>
                  <td className="p-3">{meaning}</td>
                  <td className="p-3 text-[var(--text-secondary)]">{usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Headers */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">8. HTTP Headers</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          HTTP headers carry additional information about a request or response.
          They describe things such as content type, authentication, caching and
          accepted data formats.
        </p>

        <h3 className="text-lg font-semibold">Request Headers</h3>

        <CodeBlock
          code={`const http = require("node:http");

const server = http.createServer((req, res) => {
  console.log(req.headers["content-type"]);
  console.log(req.headers["authorization"]);

  res.end("Headers received");
});

server.listen(3000);`}
        />

        <h3 className="text-lg font-semibold">Response Headers</h3>

        <CodeBlock
          code={`const http = require("node:http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store");

  res.end(JSON.stringify({
    message: "Success"
  }));
});

server.listen(3000);`}
        />

        <h3 className="text-lg font-semibold">Common Headers</h3>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="p-3 text-left">Header</th>
                <th className="p-3 text-left">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Content-Type", "Describes the media type of the body"],
                ["Authorization", "Carries authentication credentials"],
                ["Accept", "Specifies acceptable response formats"],
                ["Content-Length", "Specifies body size in bytes"],
                ["Cache-Control", "Controls caching behavior"],
                ["User-Agent", "Identifies the client software"],
                ["Origin", "Identifies the origin of a browser request"],
              ].map(([header, purpose]) => (
                <tr
                  key={header}
                  className="border-t border-[var(--border-color)]"
                >
                  <td className="p-3 font-medium text-[var(--accent-color)]">
                    {header}
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

      {/* URL Routing */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">9. URL Routing</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Routing means deciding how the server should respond based on the
          requested URL and HTTP method.
        </p>

        <CodeBlock
          code={`const http = require("node:http");

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.end("Home Page");
  } else if (req.url === "/about" && req.method === "GET") {
    res.end("About Page");
  } else if (req.url === "/contact" && req.method === "GET") {
    res.end("Contact Page");
  } else {
    res.statusCode = 404;
    res.end("Route Not Found");
  }
});

server.listen(3000);`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          This is basic manual routing. Frameworks like Express.js provide a
          cleaner way to define routes and handle middleware.
        </p>
      </section>

      {/* Query Parameters */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">10. Query Parameters</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Query parameters are values passed in the URL after the question mark
          (?). They are commonly used for searching, filtering and pagination.
        </p>

        <CodeBlock
          code={`// URL:
// http://localhost:3000/products?category=mobile&page=2

const http = require("node:http");

const server = http.createServer((req, res) => {
  const requestURL = new URL(
    req.url,
    "http://localhost:3000"
  );

  const category = requestURL.searchParams.get("category");
  const page = requestURL.searchParams.get("page");

  res.setHeader("Content-Type", "application/json");

  res.end(JSON.stringify({
    category,
    page
  }));
});

server.listen(3000);`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          We use the URL class to safely parse the request URL and access query
          parameters.
        </p>
      </section>

      {/* POST Body */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          11. Handling POST Request Body
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          When a client sends data using POST, the request body arrives through
          the request stream. We can collect its chunks and process the complete
          body after the request ends.
        </p>

        <CodeBlock
          code={`const http = require("node:http");

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/users") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        const user = JSON.parse(body);

        res.statusCode = 201;
        res.setHeader("Content-Type", "application/json");

        res.end(JSON.stringify({
          message: "User created",
          user
        }));
      } catch (error) {
        res.statusCode = 400;
        res.setHeader("Content-Type", "application/json");

        res.end(JSON.stringify({
          message: "Invalid JSON"
        }));
      }
    });

    req.on("error", (error) => {
      console.error(error);
    });

    return;
  }

  res.statusCode = 404;
  res.end("Route Not Found");
});

server.listen(3000);`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <p className="font-semibold text-[var(--accent-color)]">Important</p>
          <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
            This example collects the complete request body in memory.
            Production applications should enforce request-size limits and
            validate incoming data. Large uploads should generally be processed
            using streams.
          </p>
        </div>
      </section>

      {/* JSON Response */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">12. Sending JSON Response</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Backend APIs commonly return JSON data. We use JSON.stringify() to
          convert a JavaScript object into a JSON string.
        </p>

        <CodeBlock
          code={`const http = require("node:http");

const server = http.createServer((req, res) => {
  const user = {
    id: 1,
    name: "Mayur",
    role: "Developer"
  };

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");

  res.end(JSON.stringify({
    success: true,
    data: user
  }));
});

server.listen(3000);`}
        />
      </section>

      {/* Server Methods */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">13. Server Methods</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The server object provides methods and events for controlling the HTTP
          server.
        </p>

        <CodeBlock
          code={`const http = require("node:http");

const server = http.createServer((req, res) => {
  res.end("Server is running");
});

server.listen(3000, () => {
  console.log("Server started");
});

// Example: close the server when required
// server.close();`}
        />

        <h3 className="text-lg font-semibold">Common Server APIs</h3>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="p-3 text-left">API</th>
                <th className="p-3 text-left">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["listen()", "Start accepting connections"],
                [
                  "close()",
                  "Stop accepting new connections and close the server",
                ],
                ["address()", "Get the address the server is listening on"],
                ["listening", "Check whether the server is listening"],
              ].map(([api, purpose]) => (
                <tr key={api} className="border-t border-[var(--border-color)]">
                  <td className="p-3 font-medium text-[var(--accent-color)]">
                    {api}
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

      {/* Practical API */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          14. Practical Example – Simple REST API
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Let's create a small REST API using the native HTTP module. This
          example supports fetching and creating users.
        </p>

        <CodeBlock
          code={`const http = require("node:http");

let users = [
  { id: 1, name: "Mayur" },
  { id: 2, name: "Rohan" }
];

const server = http.createServer((req, res) => {
  const requestURL = new URL(
    req.url,
    "http://localhost:3000"
  );

  res.setHeader("Content-Type", "application/json");

  // GET all users
  if (req.method === "GET" && requestURL.pathname === "/users") {
    res.statusCode = 200;

    return res.end(JSON.stringify({
      success: true,
      data: users
    }));
  }

  // GET one user
  if (req.method === "GET" && requestURL.pathname.startsWith("/users/")) {
    const id = Number(requestURL.pathname.split("/")[2]);

    const user = users.find((item) => item.id === id);

    if (!user) {
      res.statusCode = 404;

      return res.end(JSON.stringify({
        success: false,
        message: "User not found"
      }));
    }

    res.statusCode = 200;

    return res.end(JSON.stringify({
      success: true,
      data: user
    }));
  }

  // POST create user
  if (req.method === "POST" && requestURL.pathname === "/users") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        const userData = JSON.parse(body);

        if (
          typeof userData.name !== "string" ||
          !userData.name.trim()
        ) {
          res.statusCode = 400;

          return res.end(JSON.stringify({
            success: false,
            message: "Valid name is required"
          }));
        }

        const newUser = {
          id: Date.now(),
          name: userData.name.trim()
        };

        users.push(newUser);

        res.statusCode = 201;

        res.end(JSON.stringify({
          success: true,
          data: newUser
        }));
      } catch {
        res.statusCode = 400;

        res.end(JSON.stringify({
          success: false,
          message: "Invalid JSON"
        }));
      }
    });

    return;
  }

  // Unknown route
  res.statusCode = 404;

  res.end(JSON.stringify({
    success: false,
    message: "Route not found"
  }));
});

server.listen(3000, () => {
  console.log("API running on port 3000");
});`}
        />

        <h3 className="text-lg font-semibold">Available Endpoints</h3>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="p-3 text-left">Method</th>
                <th className="p-3 text-left">Endpoint</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["GET", "/users", "Get all users"],
                ["GET", "/users/:id", "Get one user"],
                ["POST", "/users", "Create a user"],
              ].map(([method, endpoint, action]) => (
                <tr
                  key={method + endpoint}
                  className="border-t border-[var(--border-color)]"
                >
                  <td className="p-3 font-medium text-[var(--accent-color)]">
                    {method}
                  </td>
                  <td className="p-3">{endpoint}</td>
                  <td className="p-3 text-[var(--text-secondary)]">{action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="leading-7 text-[var(--text-secondary)]">
          This is an educational example. The users array stores data only in
          memory, so data disappears when the server restarts. Production APIs
          also need persistent storage, stronger validation and request size
          limits.
        </p>
      </section>

      {/* HTTP vs Express */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          15. Node.js HTTP vs Express.js
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Express.js is a web framework built on top of Node.js HTTP
          capabilities. It simplifies routing, middleware and request handling.
        </p>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="p-3 text-left">Node.js HTTP</th>
                <th className="p-3 text-left">Express.js</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Built-in Node.js module", "External web framework"],
                ["Manual routing", "Convenient routing system"],
                ["Manual body parsing", "Built-in parsing middleware options"],
                ["Manual middleware handling", "Middleware architecture"],
                ["More low-level control", "Simpler application development"],
              ].map(([native, express]) => (
                <tr
                  key={native}
                  className="border-t border-[var(--border-color)]"
                >
                  <td className="p-3 text-[var(--text-secondary)]">{native}</td>
                  <td className="p-3 text-[var(--text-secondary)]">
                    {express}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Summary */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          16. Important HTTP APIs Summary
        </h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="p-3 text-left">API</th>
                <th className="p-3 text-left">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["http.createServer()", "Create an HTTP server"],
                ["server.listen()", "Start the server"],
                ["req.method", "Get HTTP method"],
                ["req.url", "Get request URL"],
                ["req.headers", "Read request headers"],
                ["res.statusCode", "Set response status"],
                ["res.setHeader()", "Set response headers"],
                ["res.write()", "Write response chunks"],
                ["res.end()", "Complete response"],
                ["res.writeHead()", "Set status and headers"],
              ].map(([api, purpose]) => (
                <tr key={api} className="border-t border-[var(--border-color)]">
                  <td className="p-3 font-medium text-[var(--accent-color)]">
                    {api}
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
    </div>
  );
};

export default Http;
