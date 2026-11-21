const RequestAndResponseLifecycle006 = () => {
  const steps = [
    ["Client Request", "Browser or mobile app sends a request to the backend."],
    [
      "Middleware",
      "Checks or processes the request, such as authentication and logging.",
    ],
    [
      "Route",
      "Matches the request URL and HTTP method to the correct handler.",
    ],
    ["Controller", "Handles the request and decides what needs to happen."],
    ["Database", "The backend reads or updates data when required."],
    ["Response", "The server sends the result back to the client."],
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <header className="space-y-3">
        <span className="text-sm text-[var(--primary-color)] font-medium">
          BACKEND FUNDAMENTALS / 06
        </span>

        <h1 className="text-4xl font-bold">Request and Response Lifecycle</h1>

        <p className="text-lg text-[var(--text-secondary)]">
          Understand how a request travels through the backend and how the
          server sends a response.
        </p>
      </header>

      {/* Introduction */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">
          What is Request-Response Lifecycle?
        </h2>

        <p className="text-[var(--text-secondary)] leading-7">
          The Request-Response Lifecycle is the complete journey of a request
          from the client to the server and the response back to the client.
        </p>

        <p className="text-[var(--text-secondary)] leading-7">
          Every time you log in, fetch products or create an account, this
          process takes place.
        </p>
      </section>

      {/* Diagram */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Backend Request Lifecycle</h2>

        <div className="p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
          <div className="flex flex-col items-center gap-2">
            {steps.map(([title, desc], index) => (
              <div
                key={title}
                className="w-full max-w-lg flex flex-col items-center gap-2"
              >
                <div
                  className={`w-full p-4 rounded-lg border text-center ${
                    index === 0 || index === steps.length - 1
                      ? "bg-[var(--primary-soft)] border-[var(--primary-color)]"
                      : "bg-[var(--bg-tertiary)] border-[var(--border-color)]"
                  }`}
                >
                  <span className="text-xs text-[var(--primary-color)]">
                    STEP 0{index + 1}
                  </span>

                  <h3 className="font-semibold mt-1">{title}</h3>

                  <p className="text-sm text-[var(--text-secondary)] mt-1">
                    {desc}
                  </p>
                </div>

                {index !== steps.length - 1 && (
                  <span className="text-[var(--primary-color)] text-xl">↓</span>
                )}
              </div>
            ))}
          </div>

          <p className="text-xs text-[var(--text-muted)] text-center mt-5">
            Simplified backend flow. Actual applications may have additional
            middleware and processing layers.
          </p>
        </div>
      </section>

      {/* Explanation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">How Does It Work?</h2>

        {steps.map(([title, desc], index) => (
          <div
            key={title}
            className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]"
          >
            <span className="text-xs text-[var(--primary-color)]">
              STEP 0{index + 1}
            </span>

            <h3 className="font-semibold text-lg mt-1">{title}</h3>

            <p className="text-[var(--text-secondary)] mt-2 leading-7">
              {desc}
            </p>
          </div>
        ))}
      </section>

      {/* Example */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Real Example: User Login</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Imagine a user enters their email and password and clicks the Login
          button.
        </p>

        <div className="p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] space-y-3">
          <div>
            <span className="text-xs text-[var(--text-muted)]">REQUEST</span>
            <pre className="mt-2 p-3 rounded-lg bg-[var(--bg-tertiary)] text-sm overflow-x-auto text-[var(--primary-color)]">
              {`POST /api/login

{
  "email": "user@example.com",
  "password": "123456"
}`}
            </pre>
          </div>

          <div className="text-center text-[var(--primary-color)]">↓</div>

          <div className="p-3 rounded-lg bg-[var(--bg-tertiary)]">
            <p className="font-semibold">Backend Processing</p>
            <p className="text-sm text-[var(--text-secondary)] mt-1">
              Validate input → Find user → Compare password → Create response
            </p>
          </div>

          <div className="text-center text-[var(--primary-color)]">↓</div>

          <div>
            <span className="text-xs text-[var(--text-muted)]">RESPONSE</span>
            <pre className="mt-2 p-3 rounded-lg bg-[var(--bg-tertiary)] text-sm overflow-x-auto text-[var(--primary-color)]">
              {`HTTP/1.1 200 OK

{
  "message": "Login successful",
  "success": true
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* Important Terms */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Important Terms</h2>

        <div className="grid sm:grid-cols-2 gap-3">
          {[
            ["Middleware", "Functions that run during request processing."],
            ["Route", "Defines which handler should receive a request."],
            ["Controller", "Handles request logic and prepares a response."],
            [
              "Status Code",
              "A number that tells the client the result of a request.",
            ],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]"
            >
              <h3 className="font-semibold text-[var(--primary-color)]">
                {title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mt-2">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Summary */}
      <section className="p-5 rounded-xl bg-[var(--primary-soft)] border border-[var(--border-color)] space-y-2">
        <h2 className="font-semibold text-[var(--primary-color)]">
          Quick Summary
        </h2>

        <p className="text-[var(--text-secondary)] leading-7">
          A client sends a request. The backend processes it through middleware,
          routes and controllers. It may communicate with a database and finally
          sends a response back to the client.
        </p>
      </section>
    </div>
  );
};

export default RequestAndResponseLifecycle006;
