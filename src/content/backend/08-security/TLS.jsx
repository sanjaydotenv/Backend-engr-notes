import CodeBlock from "../../../components/common/CodeBlock";

function TLS() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          BACKEND SECURITY / 17
        </p>
        <h1 className="mt-2 text-3xl font-bold">
          TLS (Transport Layer Security)
        </h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          TLS is a cryptographic protocol that secures communication between
          a client and a server. It provides encryption, authentication, and
          data integrity during transmission.
        </p>
      </div>

      {/* 1. Why TLS? */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. Why TLS?</h2>
        <p className="text-[var(--text-secondary)]">
          Without TLS, attackers on an insecure network may intercept or
          modify data transferred between the browser and server.
        </p>

        <CodeBlock
          code={`Without TLS:
Browser -------- HTTP Data --------> Server
             |
             v
       Data may be exposed

With TLS:
Browser ===== Encrypted Data =====> Server
             |
             v
       Secure Communication`}
        />
      </section>

      {/* 2. What TLS Provides */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. What Does TLS Provide?</h2>

        <div className="space-y-3">
          {[
            {
              name: "Encryption",
              desc: "Protects transmitted data from being read by unauthorized parties.",
            },
            {
              name: "Authentication",
              desc: "Uses digital certificates to help verify the server's identity.",
            },
            {
              name: "Data Integrity",
              desc: "Detects unauthorized modification of transmitted data.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-lg border border-[var(--border-color)] p-4"
            >
              <h3 className="font-semibold">{item.name}</h3>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. How TLS Works */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. How TLS Handshake Works</h2>
        <p className="text-[var(--text-secondary)]">
          Before secure communication begins, the client and server perform
          a TLS handshake to establish shared encryption keys.
        </p>

        <CodeBlock
          code={`Browser (Client)             Server
      |                          |
      |------ ClientHello ------>|
      |                          |
      |<----- ServerHello -------|
      |<----- Certificate -------|
      |                          |
      |  Verify Certificate      |
      |                          |
      |  Establish Shared Keys   |
      |                          |
      |===== Encrypted Data =====|
      |                          |`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          This is a simplified handshake overview. In TLS 1.3, key
          establishment and handshake messages follow a specific sequence.
        </p>
      </section>

      {/* 4. Digital Certificate */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Digital Certificate</h2>
        <p className="text-[var(--text-secondary)]">
          A TLS certificate helps verify that a server controls the domain
          it claims to represent. It is issued by a trusted Certificate
          Authority (CA).
        </p>

        <CodeBlock
          code={`Website
   |
   v
TLS Certificate
   |
   v
Certificate Authority (CA)
   |
   v
Browser verifies certificate`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          A certificate contains information such as the domain name,
          public key, issuer, and validity period.
        </p>
      </section>

      {/* 5. HTTP vs HTTPS */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. HTTP vs HTTPS</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="p-3 text-left">HTTP</th>
                <th className="p-3 text-left">HTTPS</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr>
                <td className="p-3">Data is not encrypted by HTTP itself.</td>
                <td className="p-3">HTTP communication is protected by TLS.</td>
              </tr>
              <tr>
                <td className="p-3">Usually uses port 80.</td>
                <td className="p-3">Usually uses port 443.</td>
              </tr>
              <tr>
                <td className="p-3">No TLS certificate required.</td>
                <td className="p-3">Uses a TLS certificate.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 6. TLS Versions */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. TLS Versions</h2>

        <div className="space-y-3">
          <div className="rounded-lg border border-[var(--border-color)] p-4">
            <h3 className="font-semibold">TLS 1.0 and 1.1</h3>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">
              Older versions that are deprecated and should not be used.
            </p>
          </div>

          <div className="rounded-lg border border-[var(--border-color)] p-4">
            <h3 className="font-semibold">TLS 1.2</h3>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">
              Widely supported and still used with secure configurations.
            </p>
          </div>

          <div className="rounded-lg border border-[var(--border-color)] p-4">
            <h3 className="font-semibold">TLS 1.3</h3>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">
              The modern version with a faster handshake and improved
              cryptographic security.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Enable HTTPS in Node.js */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Enable HTTPS in Node.js</h2>
        <p className="text-[var(--text-secondary)]">
          Node.js provides the built-in HTTPS module. A server certificate
          and its private key are required.
        </p>

        <CodeBlock
          code={`import https from "node:https";
import fs from "node:fs";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Secure HTTPS Server");
});

const options = {
  key: fs.readFileSync("./private-key.pem"),
  cert: fs.readFileSync("./certificate.pem"),
};

https.createServer(options, app).listen(443, () => {
  console.log("HTTPS server running");
});`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          This is a basic example. In production, HTTPS is often terminated
          at a reverse proxy or load balancer, which manages TLS certificates.
          Never expose or commit private keys.
        </p>
      </section>

      {/* 8. Important Security Practices */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Important Security Practices</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>Use TLS 1.2 or TLS 1.3.</li>
          <li>Use certificates issued by trusted Certificate Authorities.</li>
          <li>Keep certificates renewed and valid.</li>
          <li>Protect private keys from unauthorized access.</li>
          <li>Redirect HTTP traffic to HTTPS.</li>
          <li>Enable HSTS when HTTPS is properly configured.</li>
          <li>Never disable certificate validation in production clients.</li>
        </ul>
      </section>

      {/* 9. Interview Questions */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Interview Questions</h2>

        {[
          {
            q: "What is TLS?",
            a: "TLS is a cryptographic protocol that secures communication between clients and servers.",
          },
          {
            q: "What are the three main benefits of TLS?",
            a: "Encryption, authentication, and data integrity.",
          },
          {
            q: "What is a TLS Handshake?",
            a: "It is the process through which a client and server negotiate security parameters and establish shared keys.",
          },
          {
            q: "What is a Certificate Authority?",
            a: "A trusted organization that issues and signs digital certificates.",
          },
          {
            q: "What is the difference between HTTP and HTTPS?",
            a: "HTTPS uses TLS to protect HTTP communication, while HTTP alone does not encrypt data.",
          },
          {
            q: "Which TLS versions should be used?",
            a: "TLS 1.2 and TLS 1.3 are recommended. Older versions should be disabled.",
          },
        ].map((item, index) => (
          <details
            key={index}
            className="group rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4"
          >
            <summary className="cursor-pointer font-medium">
              {index + 1}. {item.q}
            </summary>
            <p className="mt-3 text-sm text-[var(--text-secondary)]">
              {item.a}
            </p>
          </details>
        ))}
      </section>
    </div>
  );
}

export default TLS;