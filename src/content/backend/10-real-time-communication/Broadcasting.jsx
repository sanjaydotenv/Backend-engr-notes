import CodeBlock from "../../../components/common/CodeBlock";

export default function Broadcasting() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">

      <div>
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          REAL-TIME COMMUNICATION / 07
        </p>
        <h1 className="mt-2 text-3xl font-bold">Socket.IO Broadcasting</h1>
        <p className="mt-3 leading-7 text-[var(--text-secondary)]">
          Broadcasting in Socket.IO means sending an event or message
          from the server to multiple connected clients. It allows the
          server to distribute real-time updates without sending separate
          requests to every client.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What is Broadcasting?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Normally, when a server sends data using socket.emit(), the
          message goes to a specific connected client.
        </p>
        <p className="leading-7 text-[var(--text-secondary)]">
          Broadcasting allows the server to send the same event to
          multiple clients at once.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <div className="flex flex-col items-center gap-3 text-center text-sm">
            <div className="w-full max-w-xs rounded-lg border border-[var(--accent-color)] p-3">
              Socket.IO Server
            </div>
            <span className="text-[var(--accent-color)]">↓ Broadcasts Message</span>
            <div className="grid w-full grid-cols-3 gap-2">
              {["Client A", "Client B", "Client C"].map(user => (
                <div key={user} className="rounded-lg border border-[var(--border-color)] p-3">
                  {user}
                  <p className="mt-1 text-xs text-[var(--text-secondary)]">Receives event</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Different Broadcasting Methods</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Socket.IO provides different methods to control which clients
          receive an event.
        </p>

        <h3 className="font-semibold">1. io.emit()</h3>
        <p className="leading-7 text-[var(--text-secondary)]">
          Sends an event to all connected clients in the default namespace,
          including the sender if it is connected to that namespace.
        </p>
        <CodeBlock code={`io.emit("notification", {
  message: "New announcement!"
});`} />

        <h3 className="font-semibold">2. socket.broadcast.emit()</h3>
        <p className="leading-7 text-[var(--text-secondary)]">
          Sends an event to all connected clients except the current sender
          in the same namespace.
        </p>
        <CodeBlock code={`socket.broadcast.emit("message", {
  message: "A new user joined!"
});`} />

        <h3 className="font-semibold">3. io.to().emit()</h3>
        <p className="leading-7 text-[var(--text-secondary)]">
          Sends an event to all clients in a specific room.
        </p>
        <CodeBlock code={`io.to("developers").emit("message", {
  message: "Hello Developers!"
});`} />

        <h3 className="font-semibold">4. socket.to().emit()</h3>
        <p className="leading-7 text-[var(--text-secondary)]">
          Sends an event to all clients in a specific room except the
          current sender.
        </p>
        <CodeBlock code={`socket.to("developers").emit("message", {
  message: "New message in developers room!"
});`} />

        <h3 className="font-semibold">5. socket.emit()</h3>
        <p className="leading-7 text-[var(--text-secondary)]">
          Sends an event only to the current connected client.
        </p>
        <CodeBlock code={`socket.emit("notification", {
  message: "Welcome!"
});`} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Broadcasting Comparison</h2>
        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3 text-left">Method</th>
                <th className="p-3 text-left">Receivers</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              {[
                ["socket.emit()", "Only the current socket."],
                ["io.emit()", "All sockets in the namespace, including sender."],
                ["socket.broadcast.emit()", "All sockets except the sender in the namespace."],
                ["io.to(room).emit()", "All sockets in the room, including sender if present."],
                ["socket.to(room).emit()", "All sockets in the room except sender."]
              ].map(([method, description]) => (
                <tr key={method}>
                  <td className="p-3 font-mono text-[var(--accent-color)]">{method}</td>
                  <td className="p-3 text-[var(--text-secondary)]">{description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Broadcasting in a Chat Application</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Let's create a simple chat system where a user sends a message
          and the server broadcasts it to all other connected users.
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

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("send-message", (message) => {
    // Send message to everyone except sender
    socket.broadcast.emit("receive-message", {
      senderId: socket.id,
      message
    });
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

httpServer.listen(3000, () => {
  console.log("Server running on port 3000");
});`} />

        <h3 className="font-semibold">Frontend (React)</h3>
        <CodeBlock code={`import { useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

function Chat() {
  useEffect(() => {
    socket.on("receive-message", (data) => {
      console.log("New message:", data.message);
    });

    return () => {
      socket.off("receive-message");
    };
  }, []);

  const sendMessage = () => {
    socket.emit("send-message", "Hello Everyone!");
  };

  return (
    <button onClick={sendMessage}>
      Send Message
    </button>
  );
}

export default Chat;`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          In this example, the sender does not receive their own broadcast.
          If you want the sender to receive it too, use io.emit() instead.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Broadcasting to Multiple Rooms</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Socket.IO can also broadcast messages to multiple rooms.
          We can use to() or in() to target rooms.
        </p>

        <CodeBlock code={`// Send to users in either room
io.to("developers")
  .to("designers")
  .emit("announcement", {
    message: "New announcement!"
  });`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          This sends the event to sockets that belong to either room.
          A socket belonging to both rooms receives the event only once
          for this broadcast operation.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Broadcasting in a Specific Namespace</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Broadcasting can also be performed inside a custom namespace.
        </p>

        <CodeBlock code={`const chat = io.of("/chat");

chat.on("connection", (socket) => {
  socket.on("send-message", (message) => {
    // Broadcast inside /chat namespace
    socket.broadcast.emit("receive-message", message);
  });
});`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          This broadcast only reaches clients connected to the
          <code> /chat</code> namespace, not clients connected to other namespaces.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Important Security Practices</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Authenticate users before allowing them to send events.</li>
          <li>Validate incoming messages on the server.</li>
          <li>Check room membership before broadcasting private messages.</li>
          <li>Never broadcast private user data to every connected client.</li>
          <li>Apply rate limits to prevent message flooding.</li>
          <li>Use HTTPS/WSS in production.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Interview Questions</h2>
        <div className="space-y-3">
          {[
            ["What is Broadcasting in Socket.IO?", "Broadcasting means sending an event or message from the server to multiple connected clients."],
            ["What is the difference between io.emit() and socket.broadcast.emit()?", "io.emit() sends to all connected sockets in the namespace, including the sender. socket.broadcast.emit() excludes the current sender."],
            ["How do you broadcast a message to a room?", "Use io.to(roomName).emit(eventName, data)."],
            ["How do you send a message to a room except the sender?", "Use socket.to(roomName).emit(eventName, data)."],
            ["Does io.emit() send messages to every namespace?", "No. It sends to all connected sockets in the namespace represented by that io instance. The root io instance targets the default namespace."],
            ["Can we broadcast to multiple rooms?", "Yes. Chain multiple to() calls, such as io.to('room1').to('room2').emit()."],
            ["What is the difference between socket.emit() and io.emit()?", "socket.emit() targets one connected client, while io.emit() targets all connected clients in the namespace."]
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