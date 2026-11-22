import CodeBlock from "../../../components/common/CodeBlock";

export default function Namespaces() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">

      <div>
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          REAL-TIME COMMUNICATION / 06
        </p>
        <h1 className="mt-2 text-3xl font-bold">Socket.IO Namespaces</h1>
        <p className="mt-3 leading-7 text-[var(--text-secondary)]">
          Namespaces in Socket.IO allow us to divide a single Socket.IO
          server into multiple independent communication channels.
          Each namespace can have its own connections, events and middleware.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What are Namespaces?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          A namespace is a separate communication channel within the same
          Socket.IO server. It helps organize different features of an
          application without creating a separate server for each feature.
        </p>
        <p className="leading-7 text-[var(--text-secondary)]">
          For example, an application may have separate namespaces for chat,
          notifications and admin communication.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <p className="mb-3 text-center font-semibold">One Socket.IO Server</p>
          <div className="rounded-lg border border-[var(--accent-color)] p-3 text-center text-sm">
            Socket.IO Server
            <div className="mt-3 grid gap-2 sm:grid-cols-3">
              {[
                ["/chat", "Chat Events"],
                ["/notifications", "Notification Events"],
                ["/admin", "Admin Events"]
              ].map(([name, description]) => (
                <div key={name} className="rounded-lg border border-[var(--border-color)] p-3">
                  <p className="font-semibold text-[var(--accent-color)]">{name}</p>
                  <p className="mt-1 text-xs text-[var(--text-secondary)]">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Default Namespace</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Every Socket.IO server has a default namespace called
          <strong className="text-[var(--accent-color)]"> "/"</strong>.
          When we connect without specifying a namespace, the client
          automatically connects to this default namespace.
        </p>

        <CodeBlock code={`// Backend
import { Server } from "socket.io";

const io = new Server(httpServer);

io.on("connection", (socket) => {
  console.log("Connected to default namespace");
});

// Frontend
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");`} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Creating Custom Namespaces</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          We can create custom namespaces using
          <strong className="text-[var(--accent-color)]"> io.of()</strong>.
          Each namespace can handle its own connection events.
        </p>

        <CodeBlock code={`// Create chat namespace
const chatNamespace = io.of("/chat");

// Create notification namespace
const notificationNamespace = io.of("/notifications");

// Handle chat connections
chatNamespace.on("connection", (socket) => {
  console.log("Chat user connected:", socket.id);
});

// Handle notification connections
notificationNamespace.on("connection", (socket) => {
  console.log("Notification user connected:", socket.id);
});`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          Here, <code>/chat</code> and <code>/notifications</code> are
          separate communication channels on the same Socket.IO server.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Connect to a Namespace from Client</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          The client connects to a custom namespace by adding its name
          to the server URL.
        </p>

        <CodeBlock code={`import { io } from "socket.io-client";

// Connect to chat namespace
const chatSocket = io("http://localhost:3000/chat");

// Connect to notification namespace
const notificationSocket = io(
  "http://localhost:3000/notifications"
);

chatSocket.on("connect", () => {
  console.log("Connected to chat:", chatSocket.id);
});

notificationSocket.on("connect", () => {
  console.log(
    "Connected to notifications:",
    notificationSocket.id
  );
});`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          Both connections use the same server, but each connects to
          a different namespace.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Sending Events in Namespaces</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Each namespace can define its own events and broadcast messages
          to its connected clients.
        </p>

        <CodeBlock code={`const chatNamespace = io.of("/chat");

chatNamespace.on("connection", (socket) => {

  socket.on("send-message", (message) => {
    // Send to all clients in /chat
    chatNamespace.emit("receive-message", message);
  });

});

const notificationNamespace = io.of("/notifications");

notificationNamespace.on("connection", (socket) => {

  socket.on("send-notification", (notification) => {
    // Send to all clients in /notifications
    notificationNamespace.emit(
      "new-notification",
      notification
    );
  });

});`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          Events emitted inside one namespace are not automatically
          delivered to clients connected to another namespace.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Namespace Middleware</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Socket.IO allows us to apply middleware to a namespace.
          Middleware runs when a client attempts to connect and can
          authenticate or reject that connection.
        </p>

        <CodeBlock code={`const adminNamespace = io.of("/admin");

adminNamespace.use((socket, next) => {
  const token = socket.handshake.auth.token;

  if (!token) {
    return next(new Error("Authentication required"));
  }

  try {
    const user = verifyToken(token);

    if (user.role !== "admin") {
      return next(new Error("Access denied"));
    }

    socket.user = user;

    next();
  } catch {
    next(new Error("Invalid token"));
  }
});

adminNamespace.on("connection", (socket) => {
  console.log("Admin connected:", socket.user.id);
});`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          <strong className="text-[var(--text-primary)]">Note:</strong>{" "}
          <code>verifyToken()</code> is an application-defined JWT
          verification function. Middleware protects the connection;
          sensitive events should still perform authorization checks.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Rooms vs Namespaces</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Both organize Socket.IO communication, but they solve different
          problems.
        </p>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3 text-left">Rooms</th>
                <th className="p-3 text-left">Namespaces</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              {[
                ["Group sockets inside a namespace.", "Separate communication channels."],
                ["Created using socket.join().", "Created using io.of()."],
                ["Used for group chats and teams.", "Used for separating application features."],
                ["Can have multiple sockets.", "Can have multiple sockets and rooms."],
                ["Managed within a namespace.", "Can have separate middleware and event handlers."]
              ].map(([room, namespace]) => (
                <tr key={room}>
                  <td className="p-3 text-[var(--text-secondary)]">{room}</td>
                  <td className="p-3 text-[var(--text-secondary)]">{namespace}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <p className="font-semibold">Easy Example</p>
          <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
            <strong className="text-[var(--text-primary)]">Namespace:</strong>{" "}
            /chat — separates chat functionality from notifications.
          </p>
          <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
            <strong className="text-[var(--text-primary)]">Room:</strong>{" "}
            developers — groups users chatting inside the /chat namespace.
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Complete Example</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Let's create a server with separate chat and notification
          namespaces.
        </p>

        <h3 className="font-semibold">Backend (server.js)</h3>
        <CodeBlock code={`import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173"
  }
});

// Chat namespace
const chat = io.of("/chat");

chat.on("connection", (socket) => {
  console.log("Chat connected:", socket.id);

  socket.on("message", (data) => {
    chat.emit("receive-message", data);
  });
});

// Notification namespace
const notifications = io.of("/notifications");

notifications.on("connection", (socket) => {
  console.log("Notification connected:", socket.id);

  socket.on("subscribe", () => {
    socket.emit("notification", {
      message: "You are subscribed!"
    });
  });
});

httpServer.listen(3000, () => {
  console.log("Server running on port 3000");
});`} />

        <h3 className="font-semibold">Frontend (React)</h3>
        <CodeBlock code={`import { useEffect } from "react";
import { io } from "socket.io-client";

function App() {
  useEffect(() => {
    const chatSocket = io("http://localhost:3000/chat");

    const notificationSocket = io(
      "http://localhost:3000/notifications"
    );

    chatSocket.on("connect", () => {
      console.log("Chat connected");
    });

    chatSocket.on("receive-message", (data) => {
      console.log("Chat message:", data);
    });

    notificationSocket.on("connect", () => {
      notificationSocket.emit("subscribe");
    });

    notificationSocket.on("notification", (data) => {
      console.log("Notification:", data);
    });

    return () => {
      chatSocket.disconnect();
      notificationSocket.disconnect();
    };
  }, []);

  return <h1>Socket.IO Namespaces</h1>;
}

export default App;`} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Important Points</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Every Socket.IO server has a default namespace named /.</li>
          <li>Custom namespaces are created using io.of().</li>
          <li>Different namespaces can have different event handlers.</li>
          <li>Each namespace can have its own middleware.</li>
          <li>A namespace can contain multiple rooms.</li>
          <li>Multiple namespaces can share the same underlying transport connection when connected through the same Socket.IO Manager.</li>
          <li>Namespaces help organize application features without creating separate servers.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Interview Questions</h2>
        <div className="space-y-3">
          {[
            ["What are Namespaces in Socket.IO?", "Namespaces are separate communication channels within a single Socket.IO server."],
            ["How do you create a custom namespace?", "Use io.of('/namespace-name') on the server."],
            ["What is the default namespace?", "The default namespace is /, which is used when a client connects without specifying a custom namespace."],
            ["How does a client connect to a namespace?", "Use io('http://localhost:3000/namespace-name') with socket.io-client."],
            ["Can namespaces have separate middleware?", "Yes. Each namespace can have its own middleware using namespace.use()."],
            ["What is the difference between Rooms and Namespaces?", "Namespaces separate communication channels, while rooms group sockets inside a namespace."],
            ["Can multiple namespaces use one Socket.IO server?", "Yes. Multiple namespaces can be created and managed by one Socket.IO server."],
            ["Can a namespace contain multiple rooms?", "Yes. Rooms are created inside a namespace and can group its connected sockets."]
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