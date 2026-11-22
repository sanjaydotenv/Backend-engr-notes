import CodeBlock from "../../../components/common/CodeBlock";

export default function RealTimeNotifications() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">

      <div>
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          REAL-TIME COMMUNICATION / 08
        </p>
        <h1 className="mt-2 text-3xl font-bold">Real-Time Notifications</h1>
        <p className="mt-3 leading-7 text-[var(--text-secondary)]">
          Real-Time Notifications allow a server to send notifications to
          users instantly without requiring them to refresh the page.
          Socket.IO is commonly used to build these notification systems
          in web applications.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What are Real-Time Notifications?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Normally, a frontend needs to send repeated API requests to check
          whether a new notification is available. With Socket.IO, the
          server can push a notification to a connected user whenever
          an event occurs.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <p className="mb-4 text-center font-semibold">Notification Flow</p>
          <div className="flex flex-col items-center gap-2 text-center text-sm">
            <div className="w-full rounded-lg border border-[var(--border-color)] p-3">
              Someone likes your post
            </div>
            <span className="text-[var(--accent-color)]">↓</span>
            <div className="w-full rounded-lg border border-[var(--border-color)] p-3">
              Backend receives the event
            </div>
            <span className="text-[var(--accent-color)]">↓</span>
            <div className="w-full rounded-lg border border-[var(--accent-color)] p-3">
              Socket.IO sends notification
            </div>
            <span className="text-[var(--accent-color)]">↓</span>
            <div className="w-full rounded-lg border border-[var(--border-color)] p-3">
              User receives notification instantly
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. How Does It Work?</h2>
        <ol className="list-decimal space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>A user performs an action, such as liking a post.</li>
          <li>The backend processes the action.</li>
          <li>The backend identifies the user who should receive the notification.</li>
          <li>The notification is saved in the database.</li>
          <li>Socket.IO sends the notification to that user's connected sockets.</li>
          <li>The frontend displays the notification without refreshing.</li>
        </ol>
        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Saving notifications in the database is important because a user
          may be offline when the event occurs. They can then retrieve
          missed notifications when they reconnect.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Install Required Packages</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          We need Socket.IO on the backend and its client package on the
          frontend.
        </p>
        <CodeBlock code={`# Backend
npm install socket.io

# Frontend
npm install socket.io-client`} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Create Socket.IO Server</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          First, create an HTTP server and attach Socket.IO to it.
          We will store connected sockets by user ID so that notifications
          can be sent to the correct user.
        </p>
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

// Map user IDs to their connected socket IDs
const onlineUsers = new Map();

io.on("connection", (socket) => {
  console.log("Connected:", socket.id);

  socket.on("register-user", (userId) => {
    socket.join(\`user:\${userId}\`);
  });

  socket.on("disconnect", () => {
    console.log("Disconnected:", socket.id);
  });
});

export { io };

httpServer.listen(3000, () => {
  console.log("Server running on port 3000");
});`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          In this example, each user joins a private room based on their
          user ID. For production applications, the server must get the
          authenticated user ID from a verified session or token instead
          of trusting a user ID sent by the client.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Send Notification to a Specific User</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Suppose one user likes another user's post. We can send a
          notification to the post owner using their private room.
        </p>

        <CodeBlock code={`import { io } from "./socket.js";

function sendNotification(receiverId, notification) {
  io.to(\`user:\${receiverId}\`).emit(
    "new-notification",
    notification
  );
}

// Example
sendNotification("user123", {
  title: "New Like",
  message: "Someone liked your post.",
  type: "like"
});`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          <code>io.to()</code> targets the room belonging to that user.
          If the user has multiple connected devices or browser tabs,
          all their connected sockets in that room can receive the event.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Listen for Notifications in React</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          The frontend connects to the Socket.IO server and listens for
          the notification event.
        </p>

        <CodeBlock code={`import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000", {
  autoConnect: false
});

function Notifications({ userId }) {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    if (!userId) return;

    socket.connect();

    socket.on("connect", () => {
      socket.emit("register-user", userId);
    });

    socket.on("new-notification", (notification) => {
      setNotifications((previous) => [
        notification,
        ...previous
      ]);
    });

    return () => {
      socket.off("connect");
      socket.off("new-notification");
      socket.disconnect();
    };
  }, [userId]);

  return (
    <div>
      <h2>Notifications</h2>

      {notifications.map((item, index) => (
        <div key={item.id || index}>
          <h3>{item.title}</h3>
          <p>{item.message}</p>
        </div>
      ))}
    </div>
  );
}

export default Notifications;`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          This is a basic demonstration. In a production application,
          manage the socket connection centrally so that multiple
          components do not create unnecessary connections.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Store Notifications in MongoDB</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Socket.IO only delivers real-time events to connected clients.
          It does not automatically save notifications. We need MongoDB
          to store notifications permanently.
        </p>

        <h3 className="font-semibold">Notification Schema</h3>
        <CodeBlock code={`import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  title: {
    type: String,
    required: true
  },

  message: {
    type: String,
    required: true
  },

  type: {
    type: String,
    enum: ["like", "comment", "follow", "message"],
    required: true
  },

  isRead: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

export default mongoose.model(
  "Notification",
  notificationSchema
);`} />

        <h3 className="font-semibold">Save and Send Notification</h3>
        <CodeBlock code={`import Notification from "./models/Notification.js";
import { io } from "./socket.js";

async function createNotification(data) {
  // Save notification in MongoDB
  const notification = await Notification.create(data);

  // Send notification to the receiver
  io.to(\`user:\${data.receiver}\`).emit(
    "new-notification",
    notification
  );

  return notification;
}`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          First, the notification is saved in MongoDB. Then Socket.IO
          delivers it to the receiver if they are connected.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Fetch Old Notifications</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          When a user opens the application, fetch their previously saved
          notifications through a normal API.
        </p>

        <CodeBlock code={`// Controller
export const getNotifications = async (req, res) => {
  const notifications = await Notification
    .find({ receiver: req.user.id })
    .sort({ createdAt: -1 })
    .limit(20);

  res.status(200).json({
    success: true,
    notifications
  });
};`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          This ensures that users can see notifications even if they
          were offline when those notifications were created.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Important Security Practices</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Authenticate socket connections using verified tokens or sessions.</li>
          <li>Never trust a user ID directly received from the client.</li>
          <li>Use private user rooms for personal notifications.</li>
          <li>Validate notification data on the backend.</li>
          <li>Check authorization before sending sensitive notifications.</li>
          <li>Use pagination when fetching old notifications.</li>
          <li>Use a shared Socket.IO adapter, such as Redis, when running multiple server instances.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Interview Questions</h2>
        <div className="space-y-3">
          {[
            ["What are Real-Time Notifications?", "They are notifications delivered to connected users instantly without requiring a page refresh."],
            ["How does Socket.IO send notifications to a specific user?", "A user can join a private room, such as user:userId, and the server can send events using io.to(room).emit()."],
            ["Why do we store notifications in MongoDB?", "Socket.IO delivers events to connected clients but does not automatically store them. MongoDB allows users to retrieve notifications later."],
            ["What happens if a user is offline?", "The socket event cannot reach a disconnected client. The notification should be saved in the database and fetched when the user reconnects."],
            ["Can one user receive notifications on multiple devices?", "Yes. If all authenticated sockets join the same user room, the server can send notifications to all of them."],
            ["What is the difference between API notifications and Socket.IO notifications?", "An API lets the client request notification data, while Socket.IO can push new notification events from the server to connected clients."],
            ["How do you secure a notification system?", "Authenticate sockets, derive user identity from verified credentials, authorize access, validate data, and use private rooms."]
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