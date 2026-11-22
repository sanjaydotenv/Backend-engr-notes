import CodeBlock from "../../../components/common/CodeBlock";

export default function SocketIO() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">

      <div>
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          REAL-TIME COMMUNICATION / 04
        </p>
        <h1 className="mt-2 text-3xl font-bold">Socket.IO</h1>
        <p className="mt-3 leading-7 text-[var(--text-secondary)]">
          Socket.IO is a JavaScript library that enables real-time,
          bidirectional and event-based communication between clients
          and servers. It provides features like automatic reconnection,
          broadcasting, rooms and namespaces.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What is Socket.IO?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Socket.IO makes it easier to build real-time applications such
          as chat applications, live notifications, multiplayer games
          and collaborative applications.
        </p>
        <p className="leading-7 text-[var(--text-secondary)]">
          Unlike the basic WebSocket API, Socket.IO provides a higher-level
          event-based communication system with additional features.
        </p>
        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <p className="font-semibold">Example</p>
          <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
            When a user sends a chat message, the server receives an event
            and can send that message to other connected users immediately.
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. WebSocket vs Socket.IO</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Both are used for real-time communication, but they are not the
          same technology.
        </p>
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
                ["Communication protocol.", "Real-time communication library."],
                ["Basic two-way communication.", "Event-based communication."],
                ["Manual reconnection handling.", "Automatic reconnection support."],
                ["No built-in rooms.", "Built-in rooms and namespaces."],
                ["Basic broadcasting must be implemented.", "Built-in broadcasting methods."],
                ["Uses WebSocket protocol.", "Uses its own protocol over supported transports."]
              ].map(([ws, io]) => (
                <tr key={ws}>
                  <td className="p-3 text-[var(--text-secondary)]">{ws}</td>
                  <td className="p-3 text-[var(--text-secondary)]">{io}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Important: A normal WebSocket client cannot directly communicate
          with a Socket.IO server because Socket.IO adds its own protocol
          on top of its transport.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. How Socket.IO Works</h2>
        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <div className="flex flex-col items-center gap-2 text-center text-sm">
            <div className="w-full max-w-xs rounded-lg border border-[var(--border-color)] p-3">
              React / Browser Client
            </div>
            <span className="text-[var(--accent-color)]">↕ Socket.IO Connection</span>
            <div className="w-full max-w-xs rounded-lg border border-[var(--accent-color)] p-3">
              Node.js + Socket.IO Server
            </div>
            <span className="text-[var(--accent-color)]">↕ Events</span>
            <div className="w-full max-w-xs rounded-lg border border-[var(--border-color)] p-3">
              Other Connected Clients
            </div>
          </div>
        </div>
        <ol className="list-decimal space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Client connects to the Socket.IO server.</li>
          <li>Server accepts the connection.</li>
          <li>Client emits an event with data.</li>
          <li>Server listens for that event.</li>
          <li>Server emits or broadcasts an event to other clients.</li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Install Socket.IO</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Socket.IO has separate packages for the backend and frontend.
        </p>
        <h3 className="font-semibold">Backend Installation</h3>
        <CodeBlock code={`npm install socket.io`} />

        <h3 className="font-semibold">Frontend Installation</h3>
        <CodeBlock code={`npm install socket.io-client`} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Create Socket.IO Server</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          We can attach a Socket.IO server to an existing Node.js HTTP server.
          This allows Express and Socket.IO to use the same HTTP server and port.
        </p>

        <CodeBlock code={`import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";

const app = express();

// Create HTTP server
const httpServer = createServer(app);

// Create Socket.IO server
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});

// Handle client connection
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // Listen for message event
  socket.on("message", (data) => {
    console.log("Message:", data);

    // Send response to this client
    socket.emit("message", "Message received!");
  });

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

httpServer.listen(3000, () => {
  console.log("Server running on port 3000");
});`} />

        <h3 className="font-semibold">Important Methods</h3>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li><strong className="text-[var(--text-primary)]">new Server():</strong> Creates a Socket.IO server.</li>
          <li><strong className="text-[var(--text-primary)]">io.on("connection"):</strong> Handles new client connections.</li>
          <li><strong className="text-[var(--text-primary)]">socket.id:</strong> Unique identifier for the current connection.</li>
          <li><strong className="text-[var(--text-primary)]">socket.emit():</strong> Sends an event to the current client.</li>
          <li><strong className="text-[var(--text-primary)]">socket.on():</strong> Listens for an event.</li>
          <li><strong className="text-[var(--text-primary)]">disconnect:</strong> Detects when a client disconnects.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Connect React Client</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          We use the socket.io-client package to connect our React frontend
          to the Socket.IO backend.
        </p>

        <CodeBlock code={`import { io } from "socket.io-client";

// Connect to Socket.IO server
const socket = io("http://localhost:3000");

// Connection successful
socket.on("connect", () => {
  console.log("Connected:", socket.id);
});

// Listen for server event
socket.on("message", (data) => {
  console.log("Server:", data);
});

// Send event to server
socket.emit("message", "Hello Server!");

// Disconnect when needed
socket.disconnect();`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          In React, create the socket connection inside a suitable lifecycle
          such as <strong className="text-[var(--text-primary)]">useEffect</strong>
          and clean it up when the component unmounts.
        </p>

        <CodeBlock code={`import { useEffect } from "react";
import { io } from "socket.io-client";

function Chat() {
  useEffect(() => {
    const socket = io("http://localhost:3000");

    socket.on("connect", () => {
      console.log("Connected:", socket.id);
    });

    socket.on("message", (data) => {
      console.log(data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return <h1>Chat Application</h1>;
}

export default Chat;`} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Socket.IO Communication Methods</h2>

        <h3 className="font-semibold">1. socket.emit()</h3>
        <p className="leading-7 text-[var(--text-secondary)]">
          Sends an event to a specific connected client or from a client
          to the server.
        </p>
        <CodeBlock code={`socket.emit("notification", {
  message: "Welcome!"
});`} />

        <h3 className="font-semibold">2. io.emit()</h3>
        <p className="leading-7 text-[var(--text-secondary)]">
          Sends an event to all connected clients, including the sender.
        </p>
        <CodeBlock code={`io.emit("notification", {
  message: "New announcement!"
});`} />

        <h3 className="font-semibold">3. socket.broadcast.emit()</h3>
        <p className="leading-7 text-[var(--text-secondary)]">
          Sends an event to all connected clients except the sender.
        </p>
        <CodeBlock code={`socket.broadcast.emit("message", {
  message: "A new user joined!"
});`} />

        <h3 className="font-semibold">4. io.to().emit()</h3>
        <p className="leading-7 text-[var(--text-secondary)]">
          Sends an event to clients inside a particular room.
        </p>
        <CodeBlock code={`io.to("room-1").emit("message", {
  message: "Hello room!"
});`} />

        <h3 className="font-semibold">5. socket.to().emit()</h3>
        <p className="leading-7 text-[var(--text-secondary)]">
          Sends an event to a room except the current socket.
        </p>
        <CodeBlock code={`socket.to("room-1").emit("message", {
  message: "Hello everyone!"
});`} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Acknowledgements (ACK)</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Acknowledgements allow the receiver to send a response after
          processing an event. They are useful when the sender needs to
          know whether an operation was successful.
        </p>

        <h3 className="font-semibold">Client</h3>
        <CodeBlock code={`socket.emit("save-message", {
  message: "Hello!"
}, (response) => {
  console.log(response);
});`} />

        <h3 className="font-semibold">Server</h3>
        <CodeBlock code={`socket.on("save-message", (data, callback) => {
  console.log(data.message);

  callback({
    success: true,
    message: "Message saved!"
  });
});`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          An acknowledgement is an application-level response. It does not
          automatically mean the data has been permanently saved unless
          your server confirms the database operation.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Automatic Reconnection</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Socket.IO automatically attempts to reconnect when a connection
          is unexpectedly lost. This behavior is enabled by default on
          the client.
        </p>
        <CodeBlock code={`import { io } from "socket.io-client";

const socket = io("http://localhost:3000", {
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000
});

socket.on("connect", () => {
  console.log("Connected:", socket.id);
});

socket.on("disconnect", (reason) => {
  console.log("Disconnected:", reason);
});

socket.on("connect_error", (error) => {
  console.log("Connection error:", error.message);
});`} />
        <p className="leading-7 text-[var(--text-secondary)]">
          Important: Reconnection does not automatically guarantee that
          messages missed during disconnection will be recovered. Applications
          may need message IDs, persistence and recovery logic.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Important Security Practices</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Authenticate users during connection using middleware.</li>
          <li>Check authorization for every protected event.</li>
          <li>Validate incoming event data on the server.</li>
          <li>Configure CORS with trusted origins.</li>
          <li>Use HTTPS/WSS in production.</li>
          <li>Apply rate limits to prevent event flooding.</li>
          <li>Never trust client-provided user IDs for authorization.</li>
        </ul>

        <h3 className="font-semibold">Connection Authentication Example</h3>
        <CodeBlock code={`io.use((socket, next) => {
  const token = socket.handshake.auth.token;

  if (!token) {
    return next(new Error("Authentication required"));
  }

  try {
    // Verify JWT and attach authenticated user
    const user = verifyToken(token);

    socket.user = user;

    next();
  } catch {
    next(new Error("Invalid token"));
  }
});`} />
        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          <strong className="text-[var(--text-primary)]">Note:</strong> 
          <code> verifyToken()</code> is an application-defined function.
          Implement it using your JWT verification logic.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">11. Interview Questions</h2>
        <div className="space-y-3">
          {[
            ["What is Socket.IO?", "Socket.IO is a JavaScript library for bidirectional, event-based real-time communication between clients and servers."],
            ["Is Socket.IO the same as WebSocket?", "No. WebSocket is a communication protocol, while Socket.IO is a library with its own protocol and additional features."],
            ["What is socket.emit()?", "It sends an event to a specific socket connection."],
            ["What is io.emit()?", "It broadcasts an event to all connected clients, including the sender."],
            ["What is socket.broadcast.emit()?", "It sends an event to all connected clients except the current sender."],
            ["What is socket.id?", "It is the unique identifier assigned to a particular Socket.IO connection."],
            ["What is automatic reconnection?", "It is a Socket.IO client feature that automatically attempts to reconnect after an unexpected disconnection."],
            ["What are acknowledgements?", "They allow the receiver to send a response back after handling an event."],
            ["Can Express and Socket.IO use the same port?", "Yes. Attach Socket.IO to the same Node.js HTTP server used by Express."],
            ["Does Socket.IO guarantee delivery of every message?", "No. By default, messages sent while disconnected may be lost. Reliable delivery requires additional persistence and recovery logic."]
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