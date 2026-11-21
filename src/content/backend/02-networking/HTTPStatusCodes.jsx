const HTTPStatusCodes = () => {
  const statusGroups = [
    {
      category: "1xx",
      title: "Informational",
      description: "Request received, processing is continuing.",
      codes: [
        ["100", "Continue", "Client can continue sending the request."],
        ["101", "Switching Protocols", "Server is switching protocols."],
      ],
    },
    {
      category: "2xx",
      title: "Success",
      description: "The request was successfully received and processed.",
      codes: [
        ["200", "OK", "Request completed successfully."],
        ["201", "Created", "A new resource was successfully created."],
        [
          "202",
          "Accepted",
          "Request accepted for processing, but not completed yet.",
        ],
        [
          "204",
          "No Content",
          "Request succeeded, but there is no response body.",
        ],
      ],
    },
    {
      category: "3xx",
      title: "Redirection",
      description: "Further action is needed to complete the request.",
      codes: [
        [
          "301",
          "Moved Permanently",
          "Resource has permanently moved to another URL.",
        ],
        ["302", "Found", "Resource is temporarily available at another URL."],
        ["304", "Not Modified", "Cached resource can be reused."],
        [
          "307",
          "Temporary Redirect",
          "Temporary redirect that preserves the HTTP method.",
        ],
        [
          "308",
          "Permanent Redirect",
          "Permanent redirect that preserves the HTTP method.",
        ],
      ],
    },
    {
      category: "4xx",
      title: "Client Errors",
      description: "Something is wrong with the client request.",
      codes: [
        ["400", "Bad Request", "Server cannot understand the request."],
        ["401", "Unauthorized", "Valid authentication is required."],
        [
          "403",
          "Forbidden",
          "Client does not have permission to access the resource.",
        ],
        ["404", "Not Found", "Requested resource does not exist."],
        [
          "405",
          "Method Not Allowed",
          "HTTP method is not allowed for this resource.",
        ],
        [
          "409",
          "Conflict",
          "Request conflicts with the current resource state.",
        ],
        [
          "422",
          "Unprocessable Content",
          "Request format is understood, but its instructions cannot be processed.",
        ],
        ["429", "Too Many Requests", "Client has sent too many requests."],
      ],
    },
    {
      category: "5xx",
      title: "Server Errors",
      description: "Server failed to process a valid request.",
      codes: [
        [
          "500",
          "Internal Server Error",
          "Unexpected error occurred on the server.",
        ],
        [
          "501",
          "Not Implemented",
          "Server does not support the requested functionality.",
        ],
        [
          "502",
          "Bad Gateway",
          "Gateway received an invalid response from another server.",
        ],
        ["503", "Service Unavailable", "Server is temporarily unavailable."],
        [
          "504",
          "Gateway Timeout",
          "Gateway did not receive a timely response from another server.",
        ],
      ],
    },
  ];

  const commonErrors = [
    {
      code: "400",
      title: "Bad Request",
      example: "Missing required fields or invalid request data.",
    },
    {
      code: "401",
      title: "Unauthorized",
      example: "User is not logged in or token is invalid.",
    },
    {
      code: "403",
      title: "Forbidden",
      example: "Logged-in user does not have admin permission.",
    },
    {
      code: "404",
      title: "Not Found",
      example: "Requested user or API route does not exist.",
    },
    {
      code: "500",
      title: "Internal Server Error",
      example: "Unexpected database or server-side failure.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8 text-[var(--text-primary)]">
      {/* Header */}{" "}
      <header className="space-y-3">
        {" "}
        <span className="text-sm text-[var(--primary-color)] font-medium">
          BACKEND NETWORKING / 06{" "}
        </span>
        <h1 className="text-4xl font-bold">HTTP Status Codes</h1>
        <p className="text-lg text-[var(--text-secondary)]">
          Understanding how servers communicate the result of an HTTP request
          through status codes.
        </p>
      </header>
      {/* Introduction */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What are HTTP Status Codes?</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          HTTP Status Codes are three-digit numbers returned by the server in an
          HTTP response. They tell the client whether a request was successful,
          redirected, or failed.
        </p>
        <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
          <p className="text-sm text-[var(--text-muted)] mb-2">
            Example HTTP Response
          </p>
          <pre className="text-sm text-[var(--primary-color)] overflow-x-auto">
            {`HTTP/1.1 200 OK
Content-Type: application/json

{
"message": "User fetched successfully"
}`}{" "}
          </pre>{" "}
        </div>{" "}
      </section>
      {/* Categories */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Status Code Categories</h2>

        <p className="text-[var(--text-secondary)]">
          HTTP status codes are divided into five categories based on their
          first digit.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {[
            ["1xx", "Information"],
            ["2xx", "Success"],
            ["3xx", "Redirection"],
            ["4xx", "Client Error"],
            ["5xx", "Server Error"],
          ].map(([code, title]) => (
            <div
              key={code}
              className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] text-center space-y-2"
            >
              <h3 className="text-2xl font-bold text-[var(--primary-color)]">
                {code}
              </h3>
              <p className="text-xs text-[var(--text-secondary)]">{title}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Status Code Details */}
      <section className="space-y-5">
        <h2 className="text-2xl font-semibold">Important HTTP Status Codes</h2>

        {statusGroups.map((group) => (
          <div
            key={group.category}
            className="rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-secondary)]"
          >
            <div className="p-4 border-b border-[var(--border-color)]">
              <div className="flex items-center gap-3">
                <span className="text-xl font-bold text-[var(--primary-color)]">
                  {group.category}
                </span>
                <h3 className="text-lg font-semibold">{group.title}</h3>
              </div>

              <p className="text-sm text-[var(--text-muted)] mt-1">
                {group.description}
              </p>
            </div>

            <div className="divide-y divide-[var(--border-color)]">
              {group.codes.map(([code, title, description]) => (
                <div
                  key={code}
                  className="p-4 flex flex-col sm:flex-row gap-2 sm:gap-5"
                >
                  <span className="font-bold text-[var(--primary-color)] min-w-12">
                    {code}
                  </span>

                  <div className="space-y-1">
                    <h4 className="font-medium">{title}</h4>
                    <p className="text-sm text-[var(--text-secondary)]">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
      {/* Common Errors */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Common Status Codes in Backend
        </h2>

        <p className="text-[var(--text-secondary)] leading-7">
          These are some of the most frequently used status codes while building
          REST APIs.
        </p>

        <div className="grid md:grid-cols-2 gap-3">
          {commonErrors.map((error) => (
            <div
              key={error.code}
              className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-2"
            >
              <div className="flex items-center gap-3">
                <span className="font-bold text-[var(--primary-color)]">
                  {error.code}
                </span>
                <h3 className="font-semibold">{error.title}</h3>
              </div>

              <p className="text-sm text-[var(--text-secondary)]">
                {error.example}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* Express Example */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">
          HTTP Status Codes in Express.js
        </h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Express provides res.status() to set the HTTP status code before
          sending a response.
        </p>
        <div className="rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-secondary)]">
          <div className="px-4 py-2 border-b border-[var(--border-color)] text-sm text-[var(--text-muted)]">
            server.js
          </div>
          <pre className="p-4 overflow-x-auto text-sm leading-7 text-[var(--text-secondary)]">
            <code>{`app.get("/users/:id", async (req, res) => {


try {
const user = await User.findById(req.params.id);


if (!user) {
  return res.status(404).json({
    message: "User not found"
  });
}

return res.status(200).json({
  message: "User fetched successfully",
  user
});


} catch (error) {
return res.status(500).json({
message: "Internal server error"
});
}
});`}</code>{" "}
          </pre>{" "}
        </div>{" "}
      </section>
      {/* Important Difference */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">401 vs 403</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-2">
            <h3 className="text-xl font-bold text-[var(--primary-color)]">
              401 Unauthorized
            </h3>

            <p className="text-[var(--text-secondary)] leading-7">
              Authentication is missing or invalid. The user needs valid
              credentials.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-2">
            <h3 className="text-xl font-bold text-[var(--primary-color)]">
              403 Forbidden
            </h3>

            <p className="text-[var(--text-secondary)] leading-7">
              The server understands who the user is, but the user is not
              allowed to access the resource.
            </p>
          </div>
        </div>
      </section>
      {/* Important Points */}
      <section className="p-5 rounded-xl bg-[var(--primary-soft)] border border-[var(--border-color)] space-y-3">
        <h2 className="text-lg font-semibold text-[var(--primary-color)]">
          Important Points
        </h2>

        <ul className="space-y-2 text-[var(--text-secondary)] list-disc pl-5">
          <li>HTTP status codes contain three digits.</li>
          <li>2xx indicates success.</li>
          <li>3xx indicates redirection.</li>
          <li>4xx indicates client-side errors.</li>
          <li>5xx indicates server-side errors.</li>
          <li>Use meaningful status codes when building REST APIs.</li>
          <li>
            A successful HTTP response does not always mean the business
            operation succeeded.
          </li>
        </ul>
      </section>
      {/* Summary */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Quick Summary</h2>

        <div className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)]">
          <p className="text-[var(--text-secondary)] leading-8">
            <strong className="text-[var(--text-primary)]">1xx:</strong>{" "}
            Informational
            <br />
            <strong className="text-[var(--text-primary)]">2xx:</strong> Success
            <br />
            <strong className="text-[var(--text-primary)]">3xx:</strong>{" "}
            Redirection
            <br />
            <strong className="text-[var(--text-primary)]">4xx:</strong> Client
            Error
            <br />
            <strong className="text-[var(--text-primary)]">5xx:</strong> Server
            Error
          </p>
        </div>
      </section>
    </div>
  );
};

export default HTTPStatusCodes;
