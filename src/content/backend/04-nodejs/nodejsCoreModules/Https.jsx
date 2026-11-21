import React from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const Https = () => {
  return (
    <div className="space-y-10 text-[var(--text-primary)]">
      {/* Introduction */}
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Node.js HTTPS Module</h1>

        <p className="leading-7 text-[var(--text-secondary)]">
          HTTPS stands for Hypertext Transfer Protocol Secure. It is the secure
          version of HTTP that protects communication between clients and
          servers using TLS encryption.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          Node.js provides the built-in HTTPS module to create secure servers
          and make HTTPS requests.
        </p>
      </section>

      {/* HTTP vs HTTPS */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">1. HTTP vs HTTPS</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          HTTP transfers data without transport-level encryption, whereas HTTPS
          uses TLS to protect data during transmission.
        </p>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="p-3 text-left">HTTP</th>
                <th className="p-3 text-left">HTTPS</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["No TLS encryption", "Uses TLS encryption"],
                ["Usually uses port 80", "Usually uses port 443"],
                ["URL starts with http://", "URL starts with https://"],
                [
                  "No TLS certificate required",
                  "Server needs a TLS certificate",
                ],
                ["Data is not protected by TLS", "Protects data in transit"],
              ].map(([http, https]) => (
                <tr
                  key={http}
                  className="border-t border-[var(--border-color)]"
                >
                  <td className="p-3 text-[var(--text-secondary)]">{http}</td>
                  <td className="p-3 text-[var(--text-secondary)]">{https}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* TLS */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">2. What is TLS?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          TLS (Transport Layer Security) is a cryptographic protocol that
          protects communication between a client and a server.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          It provides three important security properties:
        </p>

        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              title: "Encryption",
              description:
                "Prevents unauthorized parties from reading transmitted data.",
            },
            {
              title: "Authentication",
              description: "Helps the client verify the server's identity.",
            },
            {
              title: "Integrity",
              description:
                "Helps detect whether transmitted data has been modified.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4"
            >
              <h3 className="font-semibold text-[var(--accent-color)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Certificate */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          3. What is an SSL/TLS Certificate?
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          A TLS certificate is a digital certificate that helps establish the
          identity of a server. It connects a domain name with a cryptographic
          public key.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          Certificates are commonly issued by trusted Certificate Authorities
          (CAs).
        </p>

        <h3 className="text-lg font-semibold">Common Certificate Files</h3>

        <div className="space-y-3">
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
            <p className="font-semibold text-[var(--accent-color)]">
              Private Key
            </p>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">
              Used by the server during TLS operations. It must remain secret.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
            <p className="font-semibold text-[var(--accent-color)]">
              Certificate
            </p>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">
              Contains the server's public key and identity information, signed
              by a Certificate Authority.
            </p>
          </div>
        </div>

        <p className="text-sm text-[var(--text-muted)]">
          Common file extensions include .key, .crt and .pem. The extension
          alone does not determine the file's contents.
        </p>
      </section>

      {/* Import */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">4. Import HTTPS Module</h2>

        <h3 className="text-lg font-semibold">CommonJS</h3>

        <CodeBlock code={`const https = require("node:https");`} />

        <h3 className="text-lg font-semibold">ES Modules</h3>

        <CodeBlock code={`import https from "node:https";`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          The HTTPS module is built into Node.js. You do not need to install an
          external package.
        </p>
      </section>

      {/* HTTPS Server */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">5. Creating an HTTPS Server</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The createServer() method creates an HTTPS server. It requires a
          private key and a certificate to establish secure connections.
        </p>

        <CodeBlock
          code={`const https = require("node:https");
const fs = require("node:fs");

const options = {
  key: fs.readFileSync("private-key.pem"),
  cert: fs.readFileSync("certificate.pem")
};

const server = https.createServer(options, (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain"
  });

  res.end("Secure HTTPS Server");
});

server.listen(443, () => {
  console.log("HTTPS server running on port 443");
});`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Here, Node.js reads the certificate files and uses them to establish
          secure TLS connections.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <p className="font-semibold text-[var(--accent-color)]">Remember</p>
          <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
            Port 443 is the standard HTTPS port. Ports below 1024 may require
            elevated privileges on some operating systems.
          </p>
        </div>
      </section>

      {/* Local Certificate */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          6. Creating a Local Certificate
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          For local development, we can generate a self-signed certificate using
          OpenSSL.
        </p>

        <CodeBlock
          code={`openssl req -x509 -newkey rsa:2048 \\
  -keyout private-key.pem \\
  -out certificate.pem \\
  -days 365 -nodes`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          This command creates a private key and a self-signed certificate. A
          self-signed certificate is useful for testing, but browsers and
          clients will not automatically trust it.
        </p>

        <p className="text-sm text-[var(--text-muted)]">
          Never use a development self-signed certificate as a replacement for a
          properly trusted production certificate.
        </p>
      </section>

      {/* HTTPS Request */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">7. Making an HTTPS Request</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The HTTPS module can also make secure requests to external servers.
        </p>

        <CodeBlock
          code={`const https = require("node:https");

https.get("https://jsonplaceholder.typicode.com/users", (res) => {
  let data = "";

  res.on("data", (chunk) => {
    data += chunk;
  });

  res.on("end", () => {
    console.log(JSON.parse(data));
  });
}).on("error", (error) => {
  console.error(error.message);
});`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          The response is a readable stream, so we collect its chunks and
          process the complete response after the end event.
        </p>
      </section>

      {/* HTTPS Options */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">8. Important HTTPS APIs</h2>

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
                ["https.createServer()", "Create an HTTPS server"],
                ["https.get()", "Make an HTTPS GET request"],
                [
                  "https.request()",
                  "Make an HTTPS request with custom options",
                ],
                ["server.listen()", "Start accepting connections"],
                ["server.close()", "Stop the HTTPS server"],
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

      {/* HTTP vs HTTPS Module */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">9. HTTP vs HTTPS Module</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Both modules create servers and handle requests and responses. The
          main difference is that HTTPS adds TLS security.
        </p>

        <CodeBlock
          code={`// HTTP Server
const http = require("node:http");

http.createServer((req, res) => {
  res.end("HTTP Server");
});

// HTTPS Server
const https = require("node:https");

https.createServer(options, (req, res) => {
  res.end("HTTPS Server");
});`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          The request and response handling APIs are largely similar. HTTPS
          additionally requires TLS configuration.
        </p>
      </section>

      {/* Production */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">10. HTTPS in Production</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          In production, HTTPS is commonly configured using a trusted
          certificate issued for the application's domain.
        </p>

        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Keep private keys secret and outside public repositories.</li>
          <li>Use certificates valid for your domain.</li>
          <li>Keep certificates renewed before expiration.</li>
          <li>Use modern TLS configurations.</li>
          <li>Redirect HTTP traffic to HTTPS when appropriate.</li>
          <li>Never disable certificate verification in production clients.</li>
        </ul>

        <p className="leading-7 text-[var(--text-secondary)]">
          Many production applications terminate TLS at a reverse proxy or load
          balancer such as Nginx or a cloud platform. In that setup, the proxy
          handles HTTPS and forwards requests to the Node.js server.
        </p>
      </section>

      {/* Summary */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">11. Summary</h2>

        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>HTTPS is the secure version of HTTP using TLS.</li>
          <li>TLS provides encryption, authentication and integrity.</li>
          <li>Certificates help clients verify server identity.</li>
          <li>Private keys must remain secret.</li>
          <li>https.createServer() creates a secure server.</li>
          <li>https.get() and https.request() make secure requests.</li>
          <li>Port 443 is the standard HTTPS port.</li>
          <li>Production applications should use trusted certificates.</li>
        </ul>
      </section>
    </div>
  );
};

export default Https;
