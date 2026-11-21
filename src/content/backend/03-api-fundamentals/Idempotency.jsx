import CodeBlock from "../../../components/common/CodeBlock";

const Idempotency = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8 text-[var(--white-color)]">
      {/* Header */}
      <header className="space-y-3">
        <span className="text-sm text-[var(--primary-color)] font-medium">
          API FUNDAMENTALS / 09
        </span>

        <h1 className="text-4xl font-bold">Idempotency</h1>

        <p className="text-lg text-[var(--muted-color)]">
          Understanding how repeated API requests avoid duplicate operations.
        </p>
      </header>

      {/* Introduction */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What is Idempotency?</h2>

        <p className="text-[var(--muted-color)] leading-7">
          Idempotency means that performing the same operation multiple times
          produces the same final result as performing it once. It helps prevent
          unintended duplicate operations in APIs.
        </p>

        <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] space-y-3">
          <p className="text-sm text-[var(--muted-color)]">
            Example: Setting a user's name
          </p>

          <pre className="text-sm text-[var(--primary-color)] overflow-x-auto">
            {`PUT /api/users/101

{ "name": "Mayur" }`}
          </pre>

          <p className="text-sm text-[var(--muted-color)]">
            Sending this request once or five times leaves the user's name as
            "Mayur".
          </p>
        </div>
      </section>

      {/* Diagram */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">How Idempotency Works</h2>

        <div className="p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
          <div className="p-4 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-center">
            <h3 className="font-semibold">Client</h3>
            <p className="text-xs text-[var(--muted-color)]">
              Sends the same request multiple times
            </p>
          </div>

          <div className="text-center text-[var(--primary-color)] py-3">
            ↓ ↓ ↓
          </div>

          <div className="p-4 rounded-xl bg-[var(--primary-soft)] border border-[var(--primary-color)] text-center">
            <h3 className="font-semibold text-[var(--primary-color)]">
              API Server
            </h3>
            <p className="text-xs text-[var(--muted-color)]">
              Processes the operation
            </p>
          </div>

          <div className="text-center text-[var(--primary-color)] py-3">↓</div>

          <div className="p-4 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-center">
            <h3 className="font-semibold">Same Final State</h3>
            <p className="text-xs text-[var(--muted-color)]">
              Repeated requests do not change the result further
            </p>
          </div>
        </div>
      </section>

      {/* HTTP Methods */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Idempotent vs Non-Idempotent Methods
        </h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm text-left">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">HTTP Method</th>
                <th className="p-3">Idempotent?</th>
                <th className="p-3">Reason</th>
              </tr>
            </thead>

            <tbody className="text-[var(--muted-color)]">
              {[
                ["GET", "Yes", "Only retrieves data"],
                ["HEAD", "Yes", "Retrieves headers"],
                ["PUT", "Yes", "Replaces resource with the same data"],
                ["DELETE", "Yes", "Repeated deletion keeps it deleted"],
                ["OPTIONS", "Yes", "Does not modify resource state"],
                ["POST", "No", "May create multiple resources"],
                ["PATCH", "Not necessarily", "Depends on the operation"],
              ].map(([method, status, reason]) => (
                <tr
                  key={method}
                  className="border-t border-[var(--border-color)]"
                >
                  <td className="p-3 font-semibold text-[var(--primary-color)]">
                    {method}
                  </td>
                  <td className="p-3">{status}</td>
                  <td className="p-3">{reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-[var(--muted-color)]">
          Note: Idempotency describes the final server state, not necessarily
          identical responses. For example, DELETE may return 200 first and 404
          on a later request.
        </p>
      </section>

      {/* Real Life Example */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Real-World Example</h2>

        <div className="grid md:grid-cols-2 gap-3">
          <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
            <h3 className="font-semibold text-[var(--primary-color)]">
              Without Idempotency
            </h3>

            <p className="text-sm text-[var(--muted-color)] mt-2">
              A user clicks the payment button twice due to a network delay.
            </p>

            <p className="text-sm mt-3">₹500 + ₹500 = ₹1000 charged</p>
          </div>

          <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
            <h3 className="font-semibold text-[var(--primary-color)]">
              With Idempotency
            </h3>

            <p className="text-sm text-[var(--muted-color)] mt-2">
              Both requests use the same idempotency key.
            </p>

            <p className="text-sm mt-3">
              Only one payment of ₹500 is processed.
            </p>
          </div>
        </div>
      </section>

      {/* Idempotency Key */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Idempotency Key</h2>

        <p className="text-[var(--muted-color)] leading-7">
          An idempotency key is a unique identifier sent with a request. The
          server stores the result against this key and reuses it when the same
          request is retried.
        </p>

        <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] space-y-3">
          <p className="text-sm text-[var(--muted-color)]">
            Example HTTP Request
          </p>

          <pre className="text-sm text-[var(--primary-color)] overflow-x-auto">
            <CodeBlock code={`POST /api/payments

Idempotency-Key: payment-abc123

{
  "amount": 500
}`} />
          </pre>
        </div>
      </section>

      {/* Express Example */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Basic Express.js Example</h2>

        <p className="text-[var(--muted-color)] leading-7">
          This simplified example stores processed keys in memory. Production
          applications should use persistent storage such as Redis or a database
          with proper concurrency handling.
        </p>

        <div className="rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-secondary)]">
          <div className="px-4 py-2 border-b border-[var(--border-color)] text-sm text-[var(--muted-color)]">
            server.js
          </div>

          <pre className="p-4 overflow-x-auto text-sm leading-7 text-[var(--muted-color)]">
            <CodeBlock code={`import express from "express";

const app = express();
app.use(express.json());

const processedRequests = new Map();

app.post("/api/payments", (req, res) => {
  const key = req.headers["idempotency-key"];

  if (!key) {
    return res.status(400).json({
      message: "Idempotency key required"
    });
  }

  if (processedRequests.has(key)) {
    return res.json(processedRequests.get(key));
  }

  const result = {
    message: "Payment successful",
    amount: req.body.amount
  };

  processedRequests.set(key, result);

  res.status(201).json(result);
});

app.listen(3000);`} />
          </pre>
        </div>
      </section>

      {/* Important Points */}
      <section className="p-5 rounded-xl bg-[var(--primary-soft)] border border-[var(--border-color)] space-y-3">
        <h2 className="text-lg font-semibold text-[var(--primary-color)]">
          Important Points
        </h2>

        <ul className="space-y-2 text-sm text-[var(--muted-color)] list-disc pl-5">
          <li>Idempotency prevents unintended duplicate operations.</li>
          <li>GET, PUT and DELETE are idempotent HTTP methods.</li>
          <li>POST is generally non-idempotent.</li>
          <li>PATCH may or may not be idempotent.</li>
          <li>Idempotency keys help safely retry requests.</li>
          <li>Payment APIs commonly use idempotency keys.</li>
        </ul>
      </section>

      {/* Summary */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Quick Summary</h2>

        <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] text-sm text-[var(--muted-color)] leading-8">
          <strong className="text-[var(--white-color)]">Idempotency:</strong>{" "}
          Repeated operations produce the same final state.
          <br />
          <strong className="text-[var(--white-color)]">
            Idempotent Methods:
          </strong>{" "}
          GET, HEAD, PUT, DELETE and OPTIONS.
          <br />
          <strong className="text-[var(--white-color)]">
            Non-Idempotent:
          </strong>{" "}
          POST is generally non-idempotent.
          <br />
          <strong className="text-[var(--white-color)]">
            Idempotency Key:
          </strong>{" "}
          Helps prevent duplicate processing during retries.
        </div>
      </section>
    </div>
  );
};

export default Idempotency;
