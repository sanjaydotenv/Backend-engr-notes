const HTTPSProtocol = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8 text-[var(--text-primary)]">
      {/* Header */}{" "}
      <header className="space-y-3">
        {" "}
        <span className="text-sm text-[var(--primary-color)] font-medium">
          BACKEND NETWORKING / 02{" "}
        </span>
        <h1 className="text-4xl font-bold">HTTPS Protocol</h1>
        <p className="text-[var(--text-secondary)] text-lg">
          Understanding how HTTPS secures communication between clients and
          servers using encryption.
        </p>
      </header>
      {/* Introduction */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What is HTTPS?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          HTTPS (HyperText Transfer Protocol Secure) is the secure version of
          HTTP. It protects data exchanged between a client and server using
          encryption.
        </p>

        <p className="text-[var(--text-secondary)] leading-7">
          It uses <strong className="text-[var(--text-primary)]">TLS</strong>{" "}
          (Transport Layer Security) to encrypt communication and verify the
          server's identity.
        </p>
      </section>
      {/* HTTP vs HTTPS */}
      <section className="grid md:grid-cols-2 gap-4">
        <div className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-2">
          <h3 className="text-xl font-semibold">HTTP</h3>

          <p className="text-[var(--text-secondary)]">
            Data is transmitted without transport-layer encryption.
          </p>

          <p className="text-sm text-[var(--text-muted)]">Default Port: 80</p>
        </div>

        <div className="p-5 rounded-xl border border-[var(--primary-color)] bg-[var(--primary-soft)] space-y-2">
          <h3 className="text-xl font-semibold text-[var(--primary-color)]">
            HTTPS
          </h3>

          <p className="text-[var(--text-secondary)]">
            Data is encrypted using TLS during transmission.
          </p>

          <p className="text-sm text-[var(--text-muted)]">Default Port: 443</p>
        </div>
      </section>
      {/* Why HTTPS */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Why Do We Need HTTPS?</h2>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              title: "01. Encryption",
              description:
                "Protects transmitted data so attackers cannot easily read intercepted communication.",
            },
            {
              title: "02. Authentication",
              description:
                "Uses digital certificates to help verify the identity of the server.",
            },
            {
              title: "03. Integrity",
              description:
                "Helps detect whether transmitted data has been modified during communication.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-2"
            >
              <h3 className="font-semibold text-[var(--primary-color)]">
                {item.title}
              </h3>

              <p className="text-sm text-[var(--text-secondary)] leading-6">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* TLS */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What is TLS?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          TLS (Transport Layer Security) is a security protocol that provides
          encryption, authentication and data integrity.
        </p>

        <p className="text-[var(--text-secondary)] leading-7">
          HTTPS uses TLS to establish a secure connection before exchanging
          application data.
        </p>
      </section>
      {/* Working */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">How Does HTTPS Work?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Before sending normal HTTP data, the client and server perform a TLS
          handshake to establish security.
        </p>

        <div className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] flex flex-col items-center gap-3">
          <div className="w-full max-w-xs p-4 text-center rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-color)]">
            <h3 className="font-semibold">Client (Browser)</h3>
            <p className="text-sm text-[var(--text-muted)]">
              Requests a secure connection
            </p>
          </div>

          <span className="text-[var(--primary-color)] text-sm font-medium">
            ↓ TLS Handshake
          </span>

          <div className="w-full max-w-xs p-4 text-center rounded-lg border border-[var(--primary-color)] bg-[var(--primary-soft)]">
            <h3 className="font-semibold">Server</h3>
            <p className="text-sm text-[var(--text-muted)]">
              Sends its digital certificate
            </p>
          </div>

          <span className="text-[var(--primary-color)] text-sm font-medium">
            ↓ Certificate Verification & Key Establishment
          </span>

          <div className="w-full max-w-xs p-4 text-center rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-color)]">
            <h3 className="font-semibold">Secure Connection</h3>
            <p className="text-sm text-[var(--text-muted)]">
              Both sides establish shared session keys
            </p>
          </div>

          <span className="text-[var(--primary-color)] text-sm font-medium">
            ↓ Encrypted HTTP Data
          </span>

          <div className="w-full max-w-xs p-4 text-center rounded-lg border border-[var(--border-color)] bg-[var(--bg-tertiary)]">
            <h3 className="font-semibold">Secure Communication</h3>
            <p className="text-sm text-[var(--text-muted)]">
              Client and server exchange protected data
            </p>
          </div>
        </div>
      </section>
      {/* Certificate */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">
          What is an SSL/TLS Certificate?
        </h2>

        <p className="text-[var(--text-secondary)] leading-7">
          A digital certificate is issued by a trusted Certificate Authority
          (CA). It helps the browser verify that the server owns the domain it
          claims to represent.
        </p>

        <p className="text-[var(--text-secondary)] leading-7">
          People commonly call it an SSL certificate, but modern HTTPS uses TLS,
          as SSL is an outdated protocol.
        </p>
      </section>
      {/* Example */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Real World Example</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Imagine logging into your banking website.
        </p>

        <ul className="space-y-2 text-[var(--text-secondary)] list-disc pl-5">
          <li>You enter your username and password.</li>
          <li>HTTPS encrypts the data before transmission.</li>
          <li>The server receives and processes the request.</li>
          <li>The response is also protected during transmission.</li>
        </ul>
      </section>
      {/* Important Point */}
      <section className="p-5 rounded-xl bg-[var(--primary-soft)] border border-[var(--border-color)] space-y-2">
        <h2 className="text-lg font-semibold text-[var(--primary-color)]">
          Important Points
        </h2>

        <ul className="space-y-2 text-[var(--text-secondary)] list-disc pl-5">
          <li>HTTPS is HTTP secured with TLS.</li>
          <li>Default HTTPS port is 443.</li>
          <li>TLS provides encryption, authentication and integrity.</li>
          <li>
            HTTPS does not guarantee that a website itself is trustworthy.
          </li>
        </ul>
      </section>
      {/* Summary */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Quick Summary</h2>

        <div className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)]">
          <p className="text-[var(--text-secondary)] leading-7">
            <strong className="text-[var(--text-primary)]">HTTPS:</strong>{" "}
            Secure version of HTTP.
            <br />
            <strong className="text-[var(--text-primary)]">TLS:</strong>{" "}
            Provides communication security.
            <br />
            <strong className="text-[var(--text-primary)]">
              Certificate:
            </strong>{" "}
            Helps verify server identity.
            <br />
            <strong className="text-[var(--text-primary)]">Port:</strong> 443.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HTTPSProtocol;
