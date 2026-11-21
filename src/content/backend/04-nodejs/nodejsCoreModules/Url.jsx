import React from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const Url = () => {
  return (
    <div className="space-y-10 text-[var(--text-primary)]">

      {/* Introduction */}
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Node.js URL Module</h1>

        <p className="text-[var(--text-secondary)] leading-7">
          Node.js URL module provides utilities to work with URLs. It helps
          developers create, read, modify and convert URLs into their different
          components.
        </p>

        <p className="text-[var(--text-secondary)] leading-7">
          URL handling is commonly used in backend development for API
          endpoints, query parameters, redirects, file URLs and request
          processing.
        </p>
      </section>

      {/* What is URL */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">1. What is a URL?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          URL stands for Uniform Resource Locator. It is an address used to
          locate a resource on the internet or within a system.
        </p>

        <CodeBlock
          code={`https://example.com:3000/products?id=101&category=mobile#details`}
        />

        <h3 className="text-lg font-semibold">URL Components</h3>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="p-3 text-left">Component</th>
                <th className="p-3 text-left">Value</th>
                <th className="p-3 text-left">Meaning</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Protocol", "https:", "Communication protocol"],
                ["Hostname", "example.com", "Domain name"],
                ["Port", "3000", "Server port"],
                ["Pathname", "/products", "Resource path"],
                ["Search", "?id=101&category=mobile", "Query parameters"],
                ["Hash", "#details", "Page or resource fragment"],
              ].map(([name, value, meaning]) => (
                <tr key={name} className="border-t border-[var(--border-color)]">
                  <td className="p-3 font-medium">{name}</td>
                  <td className="p-3 text-[var(--accent-color)]">{value}</td>
                  <td className="p-3 text-[var(--text-secondary)]">{meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* URL API */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">2. URL Class</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Node.js provides the modern WHATWG URL API through the global URL
          class. You can use it directly without importing anything.
        </p>

        <CodeBlock
          code={`const myURL = new URL(
  "https://example.com/products?id=101"
);

console.log(myURL.hostname);
console.log(myURL.pathname);
console.log(myURL.search);`}
        />

        <p className="text-[var(--text-secondary)]">
          Output:
        </p>

        <CodeBlock
          code={`example.com
/products
?id=101`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <p className="font-semibold text-[var(--accent-color)]">Important</p>
          <p className="mt-2 text-sm text-[var(--text-secondary)]">
            The URL class is globally available in modern Node.js. You do not
            need to import it from the url module.
          </p>
        </div>
      </section>

      {/* Import */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">3. Import URL Module</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Although URL and URLSearchParams are global classes, some utilities
          such as fileURLToPath and pathToFileURL must be imported from
          node:url.
        </p>

        <h3 className="text-lg font-semibold">CommonJS</h3>
        <CodeBlock
          code={`const {
  fileURLToPath,
  pathToFileURL
} = require("node:url");`}
        />

        <h3 className="text-lg font-semibold">ES Modules</h3>
        <CodeBlock
          code={`import {
  fileURLToPath,
  pathToFileURL
} from "node:url";`}
        />
      </section>

      {/* URL Properties */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">4. URL Properties</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          URL properties allow us to access different parts of a URL.
        </p>

        <CodeBlock
          code={`const myURL = new URL(
  "https://example.com:3000/products?id=101#details"
);

console.log(myURL.href);
console.log(myURL.protocol);
console.log(myURL.hostname);
console.log(myURL.port);
console.log(myURL.host);
console.log(myURL.origin);
console.log(myURL.pathname);
console.log(myURL.search);
console.log(myURL.hash);`}
        />

        <h3 className="text-lg font-semibold">Common Properties</h3>

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
                ["href", "Complete URL"],
                ["protocol", "Protocol such as https:"],
                ["hostname", "Domain name without port"],
                ["host", "Hostname with port"],
                ["port", "Port number"],
                ["origin", "Protocol + hostname + port"],
                ["pathname", "Path of the resource"],
                ["search", "Query string including ?"],
                ["hash", "Fragment including #"],
              ].map(([name, purpose]) => (
                <tr key={name} className="border-t border-[var(--border-color)]">
                  <td className="p-3 font-medium text-[var(--accent-color)]">
                    {name}
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

      {/* Create URL */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">5. Creating a URL</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          We can create a URL using the URL constructor. It accepts an absolute
          URL or a relative URL with a base URL.
        </p>

        <h3 className="text-lg font-semibold">Absolute URL</h3>
        <CodeBlock
          code={`const myURL = new URL(
  "https://example.com/products"
);

console.log(myURL.href);`}
        />

        <h3 className="text-lg font-semibold">Relative URL with Base</h3>
        <CodeBlock
          code={`const myURL = new URL(
  "/products",
  "https://example.com"
);

console.log(myURL.href);

// https://example.com/products`}
        />

        <p className="text-[var(--text-secondary)] leading-7">
          A relative URL cannot be constructed without a base URL.
        </p>
      </section>

      {/* URLSearchParams */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">6. URLSearchParams</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          URLSearchParams is used to read, add, update and delete query
          parameters from a URL.
        </p>

        <CodeBlock
          code={`const myURL = new URL(
  "https://example.com/products?id=101&category=mobile"
);

console.log(myURL.searchParams.get("id"));
console.log(myURL.searchParams.get("category"));`}
        />

        <p className="text-[var(--text-secondary)]">Output:</p>
        <CodeBlock code={`101\nmobile`} />

        <h3 className="text-lg font-semibold">Common URLSearchParams Methods</h3>

        <CodeBlock
          code={`const myURL = new URL(
  "https://example.com/products?id=101"
);

// get a parameter
myURL.searchParams.get("id");

// add or update a parameter
myURL.searchParams.set("category", "mobile");

// append another value
myURL.searchParams.append("tag", "new");

// check parameter
myURL.searchParams.has("id");

// delete parameter
myURL.searchParams.delete("id");

// convert parameters into a string
console.log(myURL.searchParams.toString());`}
        />

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="p-3 text-left">Method</th>
                <th className="p-3 text-left">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["get()", "Get the first value of a parameter"],
                ["getAll()", "Get all values of a parameter"],
                ["set()", "Add or replace a parameter"],
                ["append()", "Add another value"],
                ["has()", "Check whether a parameter exists"],
                ["delete()", "Remove a parameter"],
                ["toString()", "Convert parameters into a query string"],
              ].map(([method, purpose]) => (
                <tr key={method} className="border-t border-[var(--border-color)]">
                  <td className="p-3 font-medium text-[var(--accent-color)]">
                    {method}
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
          <p className="font-semibold text-[var(--accent-color)]">Important Difference</p>
          <p className="mt-2 text-sm text-[var(--text-secondary)]">
            set() replaces an existing parameter value, whereas append()
            adds another value with the same parameter name.
          </p>
        </div>
      </section>

      {/* Modify URL */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">7. Modifying a URL</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          URL properties can be changed directly. URLSearchParams can be used
          to modify query parameters.
        </p>

        <CodeBlock
          code={`const myURL = new URL(
  "https://example.com/products?id=101"
);

myURL.hostname = "shop.example.com";
myURL.pathname = "/users";
myURL.searchParams.set("id", "202");

console.log(myURL.href);

// https://shop.example.com/users?id=202`}
        />
      </section>

      {/* URL Validation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">8. Checking and Validating URLs</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          The URL constructor throws an error when it cannot parse an invalid
          URL. We can use try...catch to handle that error.
        </p>

        <CodeBlock
          code={`function isValidURL(value) {
  try {
    const parsedURL = new URL(value);

    return (
      parsedURL.protocol === "http:" ||
      parsedURL.protocol === "https:"
    );
  } catch {
    return false;
  }
}

console.log(isValidURL("https://example.com"));
console.log(isValidURL("not-a-valid-url"));`}
        />

        <p className="text-[var(--text-secondary)] leading-7">
          URL parsing alone does not make a URL safe. When accepting URLs from
          users, validate allowed protocols and hosts before making requests
          or redirecting users.
        </p>
      </section>

      {/* fileURLToPath */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">9. fileURLToPath()</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          fileURLToPath() converts a file URL into a normal filesystem path.
          It is commonly used in Node.js ES Modules because __dirname and
          __filename are not available by default in ESM.
        </p>

        <CodeBlock
          code={`import { fileURLToPath } from "node:url";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

console.log(__filename);
console.log(__dirname);`}
        />

        <p className="text-[var(--text-secondary)] leading-7">
          Here, import.meta.url gives the current module's file URL.
          fileURLToPath() converts it into a filesystem path.
        </p>
      </section>

      {/* pathToFileURL */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">10. pathToFileURL()</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          pathToFileURL() does the opposite of fileURLToPath(). It converts a
          filesystem path into a file URL.
        </p>

        <CodeBlock
          code={`import { pathToFileURL } from "node:url";

const fileURL = pathToFileURL(
  "/home/user/project/index.js"
);

console.log(fileURL.href);

// file:///home/user/project/index.js`}
        />
      </section>

      {/* Legacy API */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">11. Legacy url.parse()</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Older Node.js code used url.parse() to parse URLs. This is the legacy
          API and is deprecated. Modern applications should use the WHATWG
          URL class instead.
        </p>

        <h3 className="text-lg font-semibold">Old Approach</h3>
        <CodeBlock
          code={`const url = require("node:url");

const parsedURL = url.parse(
  "https://example.com/products?id=101"
);

console.log(parsedURL.hostname);
console.log(parsedURL.pathname);`}
        />

        <h3 className="text-lg font-semibold">Modern Approach</h3>
        <CodeBlock
          code={`const myURL = new URL(
  "https://example.com/products?id=101"
);

console.log(myURL.hostname);
console.log(myURL.pathname);`}
        />

        <p className="text-[var(--text-secondary)] leading-7">
          Prefer the modern URL class for new development.
        </p>
      </section>

      {/* Practical Example */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">12. Practical Example – URL Query Parameters</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Suppose a backend API receives a URL containing search, category and
          pagination parameters. We can extract them using URLSearchParams.
        </p>

        <CodeBlock
          code={`const requestURL = new URL(
  "https://example.com/products?search=phone&category=mobile&page=2"
);

const search = requestURL.searchParams.get("search");
const category = requestURL.searchParams.get("category");
const page = Number(requestURL.searchParams.get("page"));

console.log({
  search,
  category,
  page
});`}
        />

        <p className="text-[var(--text-secondary)]">Output:</p>

        <CodeBlock
          code={`{
  search: "phone",
  category: "mobile",
  page: 2
}`}
        />

        <p className="text-[var(--text-secondary)] leading-7">
          This is useful for understanding how query parameters work in
          backend APIs. In Express applications, you can also access query
          parameters directly through req.query.
        </p>
      </section>

      {/* Security */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">13. URL Security</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          URLs received from users should never be trusted automatically.
          Incorrect URL handling can introduce security vulnerabilities.
        </p>

        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Allow only required protocols such as HTTP and HTTPS.</li>
          <li>Validate destination hostnames before server-side requests.</li>
          <li>Do not blindly redirect users to arbitrary URLs.</li>
          <li>Be careful when fetching user-provided URLs to prevent SSRF.</li>
          <li>Use URLSearchParams instead of manually concatenating query strings.</li>
        </ul>
      </section>

      {/* Summary */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">14. Important URL APIs Summary</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="p-3 text-left">API</th>
                <th className="p-3 text-left">Use</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["new URL()", "Create and parse URLs"],
                ["URLSearchParams", "Work with query parameters"],
                ["searchParams.get()", "Read a query parameter"],
                ["searchParams.set()", "Add or update a parameter"],
                ["searchParams.delete()", "Remove a parameter"],
                ["fileURLToPath()", "Convert file URL to filesystem path"],
                ["pathToFileURL()", "Convert filesystem path to file URL"],
              ].map(([api, use]) => (
                <tr key={api} className="border-t border-[var(--border-color)]">
                  <td className="p-3 font-medium text-[var(--accent-color)]">
                    {api}
                  </td>
                  <td className="p-3 text-[var(--text-secondary)]">{use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
};

export default Url;
