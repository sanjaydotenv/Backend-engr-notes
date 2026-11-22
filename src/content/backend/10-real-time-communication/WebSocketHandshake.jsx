import CodeBlock from "../../../components/common/CodeBlock";

export default function WebSocketHandshake() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">

      <div>
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          REAL-TIME COMMUNICATION / 03
        </p>
        <h1 className="mt-2 text-3xl font-bold">WebSocket Handshake</h1>
        <p className="mt-3 leading-7 text-[var(--text-secondary)]">
          A WebSocket handshake is the initial process that establishes a
          WebSocket connection between a client and server. It starts with
          an HTTP request and upgrades the connection to the WebSocket protocol.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What is a WebSocket Handshake?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Before exchanging WebSocket messages, the client and server must
          establish a connection. This process is called the WebSocket handshake.
        </p>
        <p className="leading-7 text-[var(--text-secondary)]">
          The browser sends an HTTP request asking the server to upgrade the
          connection. If the server accepts the request, it responds with
          <strong className="text-[var(--accent-color)]"> 101 Switching Protocols</strong>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. WebSocket Handshake Flow</h2>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <div className="flex flex-col items-center gap-2 text-center text-sm">
            <div className="w-full max-w-xs rounded-lg border border-[var(--border-color)] p-3">
              Client / Browser
            </div>
            <span className="text-[var(--accent-color)]">↓ HTTP Upgrade Request</span>
            <div className="w-full max-w-xs rounded-lg border border-[var(--border-color)] p-3">
              WebSocket Server
            </div>
            <span className="text-[var(--accent-color)]">↓ 101 Switching Protocols</span>
            <div className="w-full max-w-xs rounded-lg border border-[var(--accent-color)] p-3">
              WebSocket Connection Established
            </div>
            <span className="text-[var(--accent-color)]">↕ Two-way Communication</span>
            <p className="text-xs text-[var(--text-secondary)]">
              Both client and server can now exchange WebSocket messages.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Client Handshake Request</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          The client sends an HTTP GET request containing special headers
          to request a protocol upgrade.
        </p>

        <CodeBlock code={`GET /chat HTTP/1.1
Host: example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
Origin: https://example.com`} />

        <h3 className="font-semibold">Important Request Headers</h3>
        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3 text-left">Header</th>
                <th className="p-3 text-left">Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              {[
                ["Upgrade", "Requests an upgrade from HTTP to WebSocket."],
                ["Connection", "Indicates that the connection should be upgraded."],
                ["Sec-WebSocket-Key", "Contains a random Base64-encoded value used in the handshake."],
                ["Sec-WebSocket-Version", "Specifies the WebSocket protocol version. The standard version is 13."],
                ["Origin", "Identifies the origin of a browser request; servers can validate it."]
              ].map(([header, description]) => (
                <tr key={header}>
                  <td className="p-3 font-mono text-[var(--accent-color)]">{header}</td>
                  <td className="p-3 text-[var(--text-secondary)]">{description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Server Handshake Response</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          If the server accepts the handshake, it responds with HTTP status
          <strong className="text-[var(--accent-color)]"> 101 Switching Protocols</strong>.
          This means the connection is successfully upgraded.
        </p>

        <CodeBlock code={`HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=`} />

        <h3 className="font-semibold">Important Response Headers</h3>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li><strong className="text-[var(--text-primary)]">101 Switching Protocols:</strong> Confirms that the protocol upgrade is accepted.</li>
          <li><strong className="text-[var(--text-primary)]">Upgrade:</strong> Confirms the WebSocket protocol.</li>
          <li><strong className="text-[var(--text-primary)]">Connection:</strong> Confirms the connection upgrade.</li>
          <li><strong className="text-[var(--text-primary)]">Sec-WebSocket-Accept:</strong> Contains the server's calculated handshake value.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. How Sec-WebSocket-Accept Works</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          One important part of the handshake is the
          <strong className="text-[var(--text-primary)]"> Sec-WebSocket-Accept</strong> header.
          The server calculates this value using the client's
          <strong className="text-[var(--text-primary)]"> Sec-WebSocket-Key</strong>.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          The server performs these steps:
        </p>
        <ol className="list-decimal space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Reads the client's Sec-WebSocket-Key.</li>
          <li>Appends a fixed WebSocket GUID to the key.</li>
          <li>Calculates the SHA-1 hash of the combined string.</li>
          <li>Encodes the resulting hash using Base64.</li>
          <li>Sends the result in Sec-WebSocket-Accept.</li>
        </ol>

        <p className="text-sm text-[var(--text-secondary)]">
          The WebSocket GUID is defined by the WebSocket protocol:
        </p>
        <CodeBlock code={`258EAFA5-E914-47DA-95CA-C5AB0DC85B11`} />

        <h3 className="font-semibold">Node.js Example</h3>
        <CodeBlock code={`import crypto from "node:crypto";

const clientKey = "dGhlIHNhbXBsZSBub25jZQ==";

const GUID = "258EAFA5-E914-47DA-95CA-C5AB0DC85B11";

const acceptKey = crypto
  .createHash("sha1")
  .update(clientKey + GUID)
  .digest("base64");

console.log(acceptKey);

// s3pPLMBiTxaQ9kYGzzhZRbK+xOo=`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          This calculation helps the client verify that the server understands
          the WebSocket handshake. It is not an authentication mechanism or
          encryption.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. What Happens After Handshake?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          After a successful handshake, communication switches from HTTP
          request-response messages to WebSocket frames.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <div className="space-y-3 text-center text-sm">
            <div className="rounded-lg border border-[var(--border-color)] p-3">
              HTTP Handshake
            </div>
            <div className="text-[var(--accent-color)]">↓</div>
            <div className="rounded-lg border border-[var(--accent-color)] p-3">
              101 Switching Protocols
            </div>
            <div className="text-[var(--accent-color)]">↓</div>
            <div className="rounded-lg border border-[var(--border-color)] p-3">
              WebSocket Frames
            </div>
            <div className="text-[var(--accent-color)]">↕</div>
            <div className="rounded-lg border border-[var(--border-color)] p-3">
              Continuous Two-Way Communication
            </div>
          </div>
        </div>

        <p className="leading-7 text-[var(--text-secondary)]">
          After the upgrade, application data is exchanged using WebSocket
          frames, not ordinary HTTP request-response messages.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. What if the Handshake Fails?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          The server may reject a handshake if the request is invalid or
          the connection is not allowed.
        </p>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Invalid or missing required WebSocket headers.</li>
          <li>Unsupported WebSocket version.</li>
          <li>Origin is not allowed by the server.</li>
          <li>Authentication or authorization fails.</li>
          <li>Server or proxy does not support the required upgrade.</li>
        </ul>
        <p className="leading-7 text-[var(--text-secondary)]">
          In a failed handshake, the server returns an appropriate HTTP error
          response instead of <strong className="text-[var(--text-primary)]">101</strong>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Important Security Points</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Use <strong className="text-[var(--text-primary)]">wss://</strong> to encrypt communication.</li>
          <li>Validate the Origin header for browser-based connections.</li>
          <li>Authenticate users before granting access to protected features.</li>
          <li>Check authorization before allowing access to private rooms or data.</li>
          <li>Do not treat Sec-WebSocket-Key as a password or authentication token.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Interview Questions</h2>
        <div className="space-y-3">
          {[
            ["What is a WebSocket handshake?", "It is the initial HTTP-based process used to establish and upgrade a connection to the WebSocket protocol."],
            ["Why does the server return 101 Switching Protocols?", "It tells the client that the server has accepted the protocol upgrade from HTTP to WebSocket."],
            ["What is Sec-WebSocket-Key?", "It is a random Base64-encoded value sent by the client and used by the server to calculate Sec-WebSocket-Accept."],
            ["What is Sec-WebSocket-Accept?", "It is a value calculated by the server using the client's key, a fixed GUID, SHA-1, and Base64 encoding."],
            ["What is the purpose of the WebSocket GUID?", "It is a fixed protocol-defined value appended to the client key before calculating the SHA-1 hash."],
            ["Does the WebSocket handshake provide authentication?", "No. The handshake establishes the WebSocket protocol connection. Authentication must be implemented separately."],
            ["What happens after a successful handshake?", "The connection switches to the WebSocket protocol, and both sides can exchange WebSocket frames."],
            ["Is Sec-WebSocket-Accept used for encryption?", "No. It verifies the expected handshake calculation. Encryption is provided by TLS when using wss://."]
          ].map(([question, answer], index) => (
            <details key={index} className="group rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
              <summary className="cursor-pointer font-medium">
                {index + 1}. {question}
              </summary>
              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </section>

    </div>
  );
}