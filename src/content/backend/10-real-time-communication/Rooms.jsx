import CodeBlock from "../../../components/common/CodeBlock";

export default function Rooms() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">

      <div>
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          REAL-TIME COMMUNICATION / 05
        </p>
        <h1 className="mt-2 text-3xl font-bold">Socket.IO Rooms</h1>
        <p className="mt-3 leading-7 text-[var(--text-secondary)]">
          Rooms in Socket.IO allow us to group multiple connected clients
          together. We can send messages and events to a specific group
          instead of broadcasting them to every connected client.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What are Rooms?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          A room is a logical group of Socket.IO connections. A socket can
          join one or multiple rooms, and the server can send events to
          everyone inside a particular room.
        </p>
        <p className="leading-7 text-[var(--text-secondary)]">
          For example, in a chat application, users chatting in the same
          group can join a common room. When someone sends a message,
          the server sends it only to members of that room.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <p className="mb-3 font-semibold">Room Structure</p>
          <div className="space-y-3 text-center text-sm">
            <div className="rounded-lg border border-[var(--accent-color)] p-3">
              Room: developers
              <div className="mt-3 flex justify-center gap-2">
                {["User A", "User B", "User C"].map(user => (
                  <span key={user} className="rounded-lg border border-[var(--border-color)] px-3 py-2">{user}</span>
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-[var(--border-color)] p-3">
              Room: designers
              <div className="mt-3 flex justify-center gap-2">
                {["User D", "User E"].map(user => (
                  <span key={user} className="rounded-lg border border-[var(--border-color)] px-3 py-2">{user}</span>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-3 text-xs text-[var(--text-secondary)]">
            Messages sent to one room are not automatically sent to another room.
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Join a Room</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          We use <strong className="text-[var(--accent-color)]">socket.join()</strong>
          to add a connected client to a room.
        </p>

        <CodeBlock code={`io.on("connection", (socket) => {
  socket.on("join-room", (roomName) => {
    socket.join(roomName);

    console.log(
      socket.id,
      "joined room:",
      roomName
    );
  });
});`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          When the client emits the <code>join-room</code> event, the server
          adds that socket to the requested room.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Send Messages to a Room</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          We use <strong className="text-[var(--accent-color)]">io.to(roomName).emit()</strong>
          to send an event to all sockets in a particular room, including
          the sender if the sender belongs to that room.
        </p>

        <CodeBlock code={`io.on("connection", (socket) => {
  socket.on("join-room", (roomName) => {
    socket.join(roomName);
  });

  socket.on("send-message", ({ roomName, message }) => {
    io.to(roomName).emit("receive-message", {
      message,
      senderId: socket.id
    });
  });
});`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          <strong className="text-[var(--text-primary)]">Important:</strong>{" "}
          This is a basic example. In a real application, the server should
          verify that the sender is actually a member of the room before
          accepting and broadcasting a message.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Send Message Except the Sender</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Sometimes we want to send a message to everyone in a room except
          the current sender. We can use <code>socket.to()</code>.
        </p>

        <CodeBlock code={`socket.on("send-message", ({ roomName, message }) => {
  socket.to(roomName).emit("receive-message", {
    message,
    senderId: socket.id
  });
});`} />

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3 text-left">Method</th>
                <th className="p-3 text-left">Behavior</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              <tr>
                <td className="p-3 font-mono text-[var(--accent-color)]">io.to(room).emit()</td>
                <td className="p-3 text-[var(--text-secondary)]">Sends to all sockets in the room, including the sender if they are a member.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-[var(--accent-color)]">socket.to(room).emit()</td>
                <td className="p-3 text-[var(--text-secondary)]">Sends to room members except the current socket.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Leave a Room</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          We use <strong className="text-[var(--accent-color)]">socket.leave()</strong>
          to remove a socket from a room.
        </p>

        <CodeBlock code={`socket.on("leave-room", (roomName) => {
  socket.leave(roomName);

  console.log("Left room:", roomName);
});`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          After leaving the room, that socket will no longer receive events
          sent to that room.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Get Room Information</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Socket.IO provides methods to inspect connected sockets and rooms.
        </p>

        <CodeBlock code={`// Get all rooms of a socket
console.log(socket.rooms);

// Get all sockets in a room
const sockets = await io.in("developers").fetchSockets();

console.log(sockets.length);

// Get all sockets in a room using socket IDs
const socketIds = await io.in("developers").allSockets();

console.log(socketIds);`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          Every connected socket automatically joins a private room named
          after its own socket ID. Therefore, <code>socket.rooms</code>
          includes its own socket ID along with any rooms it has joined.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Complete Room-Based Chat Example</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Let's create a simple group chat where users join a room and
          exchange messages with other members.
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
  console.log("Connected:", socket.id);

  // Join a chat room
  socket.on("join-room", async (roomName) => {
    await socket.join(roomName);

    socket.emit("joined-room", {
      roomName
    });

    socket.to(roomName).emit("user-joined", {
      userId: socket.id
    });
  });

  // Send message to room
  socket.on("send-message", ({ roomName, message }) => {
    if (!socket.rooms.has(roomName)) {
      return;
    }

    io.to(roomName).emit("receive-message", {
      senderId: socket.id,
      message
    });
  });

  // Leave room
  socket.on("leave-room", async (roomName) => {
    await socket.leave(roomName);

    socket.to(roomName).emit("user-left", {
      userId: socket.id
    });
  });

  // Disconnect
  socket.on("disconnect", () => {
    console.log("Disconnected:", socket.id);
  });
});

httpServer.listen(3000, () => {
  console.log("Server running on port 3000");
});`} />

        <h3 className="font-semibold">Frontend (React)</h3>
        <CodeBlock code={`import { useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

function ChatRoom() {
  useEffect(() => {
    socket.emit("join-room", "developers");

    socket.on("receive-message", (data) => {
      console.log("New message:", data);
    });

    socket.on("user-joined", (data) => {
      console.log("User joined:", data.userId);
    });

    return () => {
      socket.emit("leave-room", "developers");

      socket.off("receive-message");
      socket.off("user-joined");
    };
  }, []);

  const sendMessage = () => {
    socket.emit("send-message", {
      roomName: "developers",
      message: "Hello Developers!"
    });
  };

  return (
    <button onClick={sendMessage}>
      Send Message
    </button>
  );
}

export default ChatRoom;`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          In a larger React application, manage the socket connection in a
          shared provider or service instead of creating a new connection
          in every component. The server must also verify room membership
          and user permissions before processing messages.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Important Points About Rooms</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>A socket can join multiple rooms.</li>
          <li>A room can contain multiple sockets.</li>
          <li>A socket automatically leaves its rooms when it disconnects.</li>
          <li>Rooms are managed on the server side.</li>
          <li>Rooms are useful for group chats, notifications and team channels.</li>
          <li>Room membership is not a replacement for authentication or authorization.</li>
          <li>In multi-server applications, a compatible adapter such as the Redis adapter is needed to coordinate rooms and broadcasts across servers.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Interview Questions</h2>
        <div className="space-y-3">
          {[
            ["What are Rooms in Socket.IO?", "Rooms are logical groups of connected sockets that allow the server to send events to selected clients."],
            ["How do you join a room?", "Use socket.join(roomName) on the server."],
            ["How do you leave a room?", "Use socket.leave(roomName) on the server."],
            ["How do you send a message to a room?", "Use io.to(roomName).emit(eventName, data)."],
            ["What is the difference between io.to() and socket.to()?", "io.to() sends to all sockets in the room, including the sender if they belong to it. socket.to() excludes the current socket."],
            ["Can one socket join multiple rooms?", "Yes. A socket can belong to multiple rooms at the same time."],
            ["What happens when a socket disconnects?", "Socket.IO automatically removes the disconnected socket from its rooms."],
            ["Are Socket.IO rooms shared across multiple servers automatically?", "No. A compatible adapter, such as the Redis adapter, is needed to coordinate communication across multiple Socket.IO servers."],
            ["Are rooms secure by default?", "Rooms provide grouping, not authorization. The server must verify user identity and room access permissions."]
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