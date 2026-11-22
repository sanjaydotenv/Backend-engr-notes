import CodeBlock from "../../../components/common/CodeBlock";

export default function WebSockets() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">

      <div>
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          REAL-TIME COMMUNICATION / 02
        </p>
        <h1 className="mt-2 text-3xl font-bold">WebSockets</h1>
        <p className="mt-3 leading-7 text-[var(--text-secondary)]">
          WebSocket is a communication protocol that provides a persistent,
          two-way connection between a client and a server. It allows both
          sides to send and receive messages independently without creating
          a new HTTP request every time.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What are WebSockets?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Normally, HTTP follows a request-response model. The client sends
          a request, and the server sends a response.
        </p>
        <p className="leading-7 text-[var(--text-secondary)]">
          WebSocket solves the limitation of repeated requests by maintaining
          one persistent connection. Once connected, the client and server
          can exchange messages in both directions.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <p className="mb-3 font-semibold">HTTP Communication</p>
          <div className="space-y-2 text-center text-sm">
            <div className="rounded-lg border border-[var(--border-color)] p-3">Client → Request → Server</div>
            <div className="text-[var(--accent-color)]">Server → Response → Client</div>
            <p className="text-xs text-[var(--text-secondary)]">A new request is generally needed for another update.</p>
          </div>
          <div className="my-5 border-t border-[var(--border-color)]" />
          <p className="mb-3 font-semibold">WebSocket Communication</p>
          <div className="space-y-2 text-center text-sm">
            <div className="rounded-lg border border-[var(--border-color)] p-3">Client ⇄ Persistent Connection ⇄ Server</div>
            <p className="text-xs text-[var(--text-secondary)]">Both sides can send messages at any time.</p>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. How WebSockets Work</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          WebSocket communication starts with an HTTP handshake. The client
          requests an upgrade from HTTP to WebSocket. If the server accepts,
          the connection is upgraded and remains open until either side closes it.
        </p>

        <div className="space-y-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 text-sm">
          {[
            ["01. Connection Request", "Client sends an HTTP request asking to upgrade the connection to WebSocket."],
            ["02. Handshake Response", "Server accepts the upgrade with HTTP status 101 Switching Protocols."],
            ["03. Connection Established", "The HTTP connection is upgraded to a WebSocket connection."],
            ["04. Data Exchange", "Client and server can exchange messages in both directions."],
            ["05. Connection Closed", "Either side can close the connection."]
          ].map(([title, description], index) => (
            <div key={title}>
              <h3 className="font-semibold text-[var(--accent-color)]">{title}</h3>
              <p className="mt-1 leading-6 text-[var(--text-secondary)]">{description}</p>
              {index !== 4 && <div className="mt-3 border-b border-[var(--border-color)]" />}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. WebSocket URL</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          WebSockets use two URL schemes:
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
            <h3 className="font-semibold">ws://</h3>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              Used for unencrypted WebSocket connections.
            </p>
          </div>
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
            <h3 className="font-semibold">wss://</h3>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              Used for encrypted WebSocket connections over TLS. Recommended
              for production applications.
            </p>
          </div>
        </div>
        <CodeBlock code={`ws://localhost:3000
wss://example.com`} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Creating a WebSocket Server in Node.js</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Node.js does not provide a built-in WebSocket server API. We can
          use the <strong>ws</strong> package to create one.
        </p>

        <h3 className="font-semibold">Step 1: Install the package</h3>
        <CodeBlock code={`npm install ws`} />

        <h3 className="font-semibold">Step 2: Create the server</h3>
        <CodeBlock code={`import { WebSocketServer } from "ws";

// Create WebSocket server
const wss = new WebSocketServer({
  port: 3000
});

wss.on("connection", (socket) => {
  console.log("Client connected");

  // Receive message from client
  socket.on("message", (data) => {
    const message = data.toString();

    console.log("Received:", message);

    // Send response to client
    socket.send("Message received by server");
  });

  // Detect disconnection
  socket.on("close", () => {
    console.log("Client disconnected");
  });

  // Handle connection errors
  socket.on("error", (error) => {
    console.error("WebSocket error:", error);
  });

  // Send welcome message
  socket.send("Welcome to WebSocket server!");
});

console.log("WebSocket server running on port 3000");`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          <strong className="text-[var(--text-primary)]">Explanation:</strong>
        </p>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li><strong className="text-[var(--text-primary)]">WebSocketServer:</strong> Creates a WebSocket server.</li>
          <li><strong className="text-[var(--text-primary)]">connection:</strong> Runs whenever a new client connects.</li>
          <li><strong className="text-[var(--text-primary)]">message:</strong> Runs when the server receives a message.</li>
          <li><strong className="text-[var(--text-primary)]">send():</strong> Sends data to a connected client.</li>
          <li><strong className="text-[var(--text-primary)]">close:</strong> Runs when the client disconnects.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Creating a WebSocket Client</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Browsers provide a built-in WebSocket API. We can connect to our
          Node.js server directly from JavaScript.
        </p>

        <CodeBlock code={`// Create WebSocket connection
const socket = new WebSocket("ws://localhost:3000");

// Connection established
socket.addEventListener("open", () => {
  console.log("Connected to server");

  // Send message to server
  socket.send("Hello Server!");
});

// Receive message from server
socket.addEventListener("message", (event) => {
  console.log("Server:", event.data);
});

// Connection closed
socket.addEventListener("close", () => {
  console.log("Disconnected from server");
});

// Handle errors
socket.addEventListener("error", (error) => {
  console.log("WebSocket error:", error);
});`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          The browser's WebSocket object provides methods and events to
          manage the connection and exchange messages.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Important WebSocket Properties</h2>
        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3 text-left">Property</th>
                <th className="p-3 text-left">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              {[
                ["readyState", "Returns the current connection state."],
                ["url", "Returns the WebSocket server URL."],
                ["bufferedAmount", "Returns the amount of data queued for sending."]
              ].map(([name, description]) => (
                <tr key={name}>
                  <td className="p-3 font-mono text-[var(--accent-color)]">{name}</td>
                  <td className="p-3 text-[var(--text-secondary)]">{description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="font-semibold">WebSocket readyState Values</h3>
        <CodeBlock code={`WebSocket.CONNECTING // 0
WebSocket.OPEN       // 1
WebSocket.CLOSING    // 2
WebSocket.CLOSED     // 3`} />
        <p className="leading-7 text-[var(--text-secondary)]">
          Always check that the connection is open before sending data.
        </p>
        <CodeBlock code={`if (socket.readyState === WebSocket.OPEN) {
  socket.send("Hello Server!");
}`} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Broadcasting Messages</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Broadcasting means sending a message to multiple connected clients.
          The server can loop through its connected clients and send the same
          message to each open connection.
        </p>
        <CodeBlock code={`wss.on("connection", (socket) => {
  socket.on("message", (data) => {
    const message = data.toString();

    // Send message to all connected clients
    wss.clients.forEach((client) => {
      if (client.readyState === 1) {
        client.send(message);
      }
    });
  });
});`} />
        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          This example broadcasts to all connected clients, including the
          sender. Production applications should validate messages and decide
          which users are allowed to receive each update.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Important Security Practices</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Use <strong className="text-[var(--text-primary)]">wss://</strong> in production.</li>
          <li>Authenticate users before allowing access to protected real-time features.</li>
          <li>Validate the Origin header to restrict unwanted browser connections.</li>
          <li>Validate incoming messages on the server.</li>
          <li>Set message-size limits to prevent oversized payloads.</li>
          <li>Apply rate limits to prevent message flooding.</li>
          <li>Handle errors and disconnected clients properly.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. WebSockets vs Socket.IO</h2>
        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3 text-left">WebSocket</th>
                <th className="p-3 text-left">Socket.IO</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              {[
                ["A communication protocol.", "A real-time communication library."],
                ["Provides basic two-way communication.", "Provides events, rooms, namespaces and more."],
                ["Requires implementing reconnection logic yourself.", "Provides automatic reconnection."],
                ["Uses the WebSocket protocol.", "Can use WebSocket or HTTP long-polling as a transport."],
                ["Browser has a built-in WebSocket API.", "Requires the Socket.IO client library."]
              ].map(([ws, io]) => (
                <tr key={ws}>
                  <td className="p-3 text-[var(--text-secondary)]">{ws}</td>
                  <td className="p-3 text-[var(--text-secondary)]">{io}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="leading-7 text-[var(--text-secondary)]">
          Remember: Socket.IO is not a WebSocket implementation that is
          directly compatible with a plain WebSocket client. Both use
          different protocols.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Interview Questions</h2>
        <div className="space-y-3">
          {[
            ["What are WebSockets?", "WebSockets are a communication protocol that provides a persistent, two-way connection between a client and server."],
            ["How are WebSockets different from HTTP?", "HTTP commonly uses a request-response model, while WebSockets allow both sides to send messages over one persistent connection."],
            ["What is a WebSocket handshake?", "It is the initial HTTP-based process used to upgrade a connection from HTTP to WebSocket."],
            ["What is the difference between ws:// and wss://?", "ws:// is an unencrypted WebSocket connection, while wss:// uses TLS encryption."],
            ["What is the readyState property?", "It tells us the current state of a WebSocket connection: CONNECTING, OPEN, CLOSING, or CLOSED."],
            ["Does Node.js have a built-in WebSocket server?", "Node.js does not provide a built-in WebSocket server API. Packages such as ws can be used to create one."],
            ["What is WebSocket broadcasting?", "It means sending the same message to multiple connected clients."],
            ["Are WebSockets and Socket.IO the same?", "No. WebSocket is a protocol, whereas Socket.IO is a library that provides additional real-time communication features."]
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