const HTTPvsHTTPS007 = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <header className="space-y-3">
        <span className="text-sm text-[var(--primary-color)] font-medium">
          BACKEND FUNDAMENTALS / 07
        </span>

        <h1 className="text-4xl font-bold">HTTP vs HTTPS</h1>

        <p className="text-lg text-[var(--text-secondary)]">
          Understand how browsers and servers communicate and why secure
          communication matters.
        </p>
      </header>

      {/* Introduction */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What is HTTP?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          HTTP stands for{" "}
          <strong className="text-[var(--text-primary)]">
            HyperText Transfer Protocol
          </strong>
          . It is a protocol used by clients and servers to communicate and
          exchange data over a network.
        </p>

        <h2 className="text-2xl font-semibold pt-2">What is HTTPS?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          HTTPS stands for{" "}
          <strong className="text-[var(--text-primary)]">
            HyperText Transfer Protocol Secure
          </strong>
          . It uses TLS encryption to protect communication between the client
          and server.
        </p>
      </section>

      {/* Visual Comparison */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">How Are They Different?</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {/* HTTP */}
          <div className="p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] space-y-4">
            <div>
              <span className="text-xs text-[var(--text-muted)]">HTTP</span>
              <h3 className="text-xl font-bold mt-1">Without Encryption</h3>
            </div>

            <div className="p-4 rounded-lg bg-[var(--bg-tertiary)] text-center">
              <p className="font-semibold">Client</p>
            </div>

            <div className="text-center space-y-1">
              <span className="text-[var(--primary-color)]">↓</span>
              <p className="text-xs text-[var(--text-muted)]">
                Data is not encrypted by HTTP
              </p>
              <span className="text-[var(--primary-color)]">↓</span>
            </div>

            <div className="p-4 rounded-lg bg-[var(--bg-tertiary)] text-center">
              <p className="font-semibold">Server</p>
            </div>

            <p className="text-sm text-[var(--text-secondary)]">
              HTTP does not provide encryption. Data can be exposed if someone
              intercepts the connection.
            </p>
          </div>

          {/* HTTPS */}
          <div className="p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--primary-color)] space-y-4">
            <div>
              <span className="text-xs text-[var(--primary-color)]">HTTPS</span>
              <h3 className="text-xl font-bold mt-1">With Encryption</h3>
            </div>

            <div className="p-4 rounded-lg bg-[var(--bg-tertiary)] text-center">
              <p className="font-semibold">Client</p>
            </div>

            <div className="text-center space-y-1">
              <span className="text-[var(--primary-color)]">↓</span>
              <p className="text-xs text-[var(--primary-color)]">
                Encrypted communication using TLS
              </p>
              <span className="text-[var(--primary-color)]">↓</span>
            </div>

            <div className="p-4 rounded-lg bg-[var(--bg-tertiary)] text-center">
              <p className="font-semibold">Server</p>
            </div>

            <p className="text-sm text-[var(--text-secondary)]">
              HTTPS protects data during transmission using encryption, making
              it difficult for others to read or modify.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">HTTP vs HTTPS Comparison</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-left text-sm">
            <thead className="bg-[var(--bg-tertiary)]">
              <tr>
                <th className="p-4">Feature</th>
                <th className="p-4">HTTP</th>
                <th className="p-4">HTTPS</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[var(--border-color)]">
              {[
                ["Security", "Not encrypted", "Encrypted using TLS"],
                ["Default Port", "80", "443"],
                ["URL", "http://", "https://"],
                ["Certificate", "Not required", "Uses TLS certificate"],
                [
                  "Data Protection",
                  "No encryption",
                  "Encryption and integrity",
                ],
              ].map(([feature, http, https]) => (
                <tr key={feature}>
                  <td className="p-4 font-medium">{feature}</td>
                  <td className="p-4 text-[var(--text-secondary)]">{http}</td>
                  <td className="p-4 text-[var(--primary-color)]">{https}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* TLS */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What is TLS?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          TLS stands for{" "}
          <strong className="text-[var(--text-primary)]">
            Transport Layer Security
          </strong>
          . It is a security protocol that protects data exchanged between a
          client and a server.
        </p>

        <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
          <h3 className="font-semibold text-[var(--primary-color)]">
            TLS provides three important things:
          </h3>

          <ul className="mt-3 space-y-2 text-[var(--text-secondary)] list-disc pl-5">
            <li>
              <strong className="text-[var(--text-primary)]">
                Encryption:
              </strong>{" "}
              Keeps data private.
            </li>
            <li>
              <strong className="text-[var(--text-primary)]">Integrity:</strong>{" "}
              Helps detect data modification.
            </li>
            <li>
              <strong className="text-[var(--text-primary)]">
                Authentication:
              </strong>{" "}
              Helps verify the server's identity.
            </li>
          </ul>
        </div>
      </section>

      {/* Real Example */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Real World Example</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Imagine logging into a website using your email and password.
        </p>

        <div className="grid sm:grid-cols-2 gap-3">
          <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
            <h3 className="font-semibold">HTTP</h3>
            <p className="text-sm text-[var(--text-secondary)] mt-2">
              HTTP does not encrypt the communication. Login details could be
              exposed if intercepted.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[var(--primary-soft)] border border-[var(--primary-color)]">
            <h3 className="font-semibold text-[var(--primary-color)]">HTTPS</h3>
            <p className="text-sm text-[var(--text-secondary)] mt-2">
              HTTPS encrypts communication, helping protect login details while
              they travel across the network.
            </p>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="p-5 rounded-xl bg-[var(--primary-soft)] border border-[var(--border-color)] space-y-2">
        <h2 className="font-semibold text-[var(--primary-color)]">
          Quick Summary
        </h2>

        <p className="text-[var(--text-secondary)] leading-7">
          HTTP is used for communication between clients and servers but does
          not encrypt the data. HTTPS uses TLS to provide secure, encrypted
          communication. Always use HTTPS for websites that handle sensitive
          information.
        </p>
      </section>
    </div>
  );
};

export default HTTPvsHTTPS007;
