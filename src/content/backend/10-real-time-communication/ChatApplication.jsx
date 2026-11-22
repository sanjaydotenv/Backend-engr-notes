import CodeBlock from "../../../components/common/CodeBlock";

export default function ChatApplication() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">

      <div>
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          REAL-TIME COMMUNICATION / 09
        </p>
        <h1 className="mt-2 text-3xl font-bold">Real-Time Chat Application</h1>
        <p className="mt-3 leading-7 text-[var(--text-secondary)]">
          A real-time chat application allows users to exchange messages
          instantly without refreshing the page. We can build it using
          Socket.IO for real-time communication and MongoDB for storing
          messages and chat history.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. How Does a Chat Application Work?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          When a user sends a message, the frontend sends it to the server
          through Socket.IO. The server validates the message, saves it
          in MongoDB and sends it to the other participant.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <p className="mb-4 text-center font-semibold">Chat Message Flow</p>
          <div className="flex flex-col items-center gap-2 text-center text-sm">
            {[
              "User A sends a message",
              "Socket.IO receives the message",
              "Backend validates the message",
              "Message is saved in MongoDB",
              "Socket.IO sends the message to User B",
              "User B receives the message instantly"
            ].map((item, index) => (
              <div key={item} className="w-full">
                <div className={`rounded-lg border p-3 ${
                  index === 3
                    ? "border-[var(--accent-color)]"
                    : "border-[var(--border-color)]"
                }`}>
                  {item}
                </div>
                {index !== 5 && (
                  <div className="py-1 text-[var(--accent-color)]">↓</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Technologies Required</h2>
        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3 text-left">Technology</th>
                <th className="p-3 text-left">Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              {[
                ["React", "Build the chat interface."],
                ["Node.js", "Run the backend server."],
                ["Express", "Create REST APIs."],
                ["Socket.IO", "Send and receive real-time messages."],
                ["MongoDB", "Store users, conversations and messages."],
                ["Mongoose", "Define schemas and interact with MongoDB."]
              ].map(([name, purpose]) => (
                <tr key={name}>
                  <td className="p-3 font-medium">{name}</td>
                  <td className="p-3 text-[var(--text-secondary)]">{purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Install Required Packages</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Install Socket.IO and the required backend packages.
        </p>
        <CodeBlock code={`# Backend
npm install express socket.io mongoose jsonwebtoken dotenv

# Frontend
npm install socket.io-client`} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Create a Message Model</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          We need a MongoDB collection to store every message. Each
          message contains a sender, receiver, message content and
          creation time.
        </p>

        <CodeBlock code={`import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  content: {
    type: String,
    required: true,
    trim: true,
    maxlength: 5000
  },

  isRead: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

// Efficient conversation history queries
messageSchema.index({
  sender: 1,
  receiver: 1,
  createdAt: -1
});

messageSchema.index({
  receiver: 1,
  sender: 1,
  createdAt: -1
});

export default mongoose.model("Message", messageSchema);`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          For simplicity, this example uses sender and receiver fields
          for one-to-one conversations. Group chats are generally better
          modeled using separate Conversation and Message collections.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Create the Socket.IO Server</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          First, attach Socket.IO to the Express HTTP server. We will
          authenticate every socket connection using a JWT token.
        </p>

        <CodeBlock code={`import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173"
  }
});

// Authenticate socket connections
io.use((socket, next) => {
  try {
    const token = socket.handshake.auth.token;

    if (!token) {
      return next(new Error("Authentication required"));
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    socket.userId = decoded.id;
    next();
  } catch {
    next(new Error("Invalid or expired token"));
  }
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.userId);

  // Join the authenticated user's private room
  socket.join(\`user:\${socket.userId}\`);

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.userId);
  });
});

export { io };

httpServer.listen(3000, () => {
  console.log("Server running on port 3000");
});`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          The JWT payload must contain the user's ID in the <code>id</code>
          field in this example. Never trust a user ID sent separately
          by the frontend for authentication.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Send and Receive Messages</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Now create a Socket.IO event handler. The sender sends a
          message using <code>send-message</code>. The server saves it
          and delivers it to the receiver's private room.
        </p>

        <CodeBlock code={`import { io } from "./socket.js";
import Message from "./models/Message.js";
import mongoose from "mongoose";

io.on("connection", (socket) => {

  socket.on("send-message", async (data, callback) => {
    try {
      const { receiverId, content } = data;

      // Validate receiver ID
      if (!mongoose.isValidObjectId(receiverId)) {
        return callback?.({
          success: false,
          message: "Invalid receiver"
        });
      }

      // Validate message content
      if (
        typeof content !== "string" ||
        !content.trim() ||
        content.trim().length > 5000
      ) {
        return callback?.({
          success: false,
          message: "Invalid message"
        });
      }

      // Save message in MongoDB
      const message = await Message.create({
        sender: socket.userId,
        receiver: receiverId,
        content: content.trim()
      });

      // Send to receiver
      io.to(\`user:\${receiverId}\`).emit(
        "receive-message",
        message
      );

      // Confirm successful delivery to server
      callback?.({
        success: true,
        message
      });

    } catch (error) {
      callback?.({
        success: false,
        message: "Message could not be sent"
      });
    }
  });

});`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Here, the sender's ID comes from the authenticated socket,
          not from the frontend payload. The acknowledgement confirms
          that the server processed and saved the message. It does not
          guarantee that the receiver has read it.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Connect React with Socket.IO</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          On the frontend, create a socket connection using the user's
          access token. Listen for incoming messages and update the UI.
        </p>

        <CodeBlock code={`import { useEffect, useState } from "react";
import { io } from "socket.io-client";

function Chat({ token, receiverId }) {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    if (!token) return;

    const newSocket = io("http://localhost:3000", {
      auth: { token }
    });

    setSocket(newSocket);

    newSocket.on("receive-message", (message) => {
      setMessages((previous) => [
        ...previous,
        message
      ]);
    });

    return () => {
      newSocket.disconnect();
    };
  }, [token]);

  const sendMessage = () => {
    if (!socket || !text.trim() || !receiverId) return;

    socket.emit(
      "send-message",
      {
        receiverId,
        content: text
      },
      (response) => {
        if (response?.success) {
          setMessages((previous) => [
            ...previous,
            response.message
          ]);

          setText("");
        } else {
          console.error(response?.message);
        }
      }
    );
  };

  return (
    <div>
      <h2>Chat</h2>

      <div>
        {messages.map((message) => (
          <p key={message._id}>
            {message.content}
          </p>
        ))}
      </div>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write a message..."
      />

      <button onClick={sendMessage}>
        Send
      </button>
    </div>
  );
}

export default Chat;`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          This is a basic chat component. In a real application, use a
          shared socket connection and also handle connection errors,
          reconnection and duplicate messages.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Fetch Previous Chat Messages</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Socket.IO handles live messages, but old messages must be
          fetched from MongoDB using an API.
        </p>

        <CodeBlock code={`import Message from "./models/Message.js";

export const getChatMessages = async (req, res) => {
  const { receiverId } = req.params;

  const messages = await Message.find({
    $or: [
      {
        sender: req.user.id,
        receiver: receiverId
      },
      {
        sender: receiverId,
        receiver: req.user.id
      }
    ]
  })
    .sort({ createdAt: -1 })
    .limit(50);

  res.status(200).json({
    success: true,
    messages: messages.reverse()
  });
};`} />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Protect this API with authentication and validate receiverId.
          Also use cursor-based pagination when loading large chat histories.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Important Chat Features</h2>
        <div className="space-y-3">
          {[
            ["Typing Indicator", "Use events like typing and stop-typing to show when another user is typing."],
            ["Online Status", "Track active connections to show whether a user is online."],
            ["Read Receipts", "Update message status when the receiver opens or reads a message."],
            ["Group Chat", "Use Socket.IO rooms to send messages to multiple group members."],
            ["Message History", "Store messages in MongoDB and retrieve them using APIs."],
            ["Message Delivery", "Use acknowledgements and message status tracking to manage delivery."],
            ["File Sharing", "Upload files using a file storage service and send their references through chat events."]
          ].map(([title, description]) => (
            <div key={title} className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Important Security Practices</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Authenticate every Socket.IO connection.</li>
          <li>Validate receiver IDs and message content on the backend.</li>
          <li>Verify that the sender is allowed to message the receiver.</li>
          <li>Never trust sender IDs supplied by the frontend.</li>
          <li>Apply rate limits to prevent message spam.</li>
          <li>Use HTTPS/WSS in production.</li>
          <li>Do not expose private messages to unauthorized users.</li>
          <li>Use a shared Socket.IO adapter, such as Redis, when running multiple backend instances.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">11. Important Things to Remember</h2>
        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3 text-left">Technology</th>
                <th className="p-3 text-left">Responsibility</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              {[
                ["REST API", "Fetch old messages and chat history."],
                ["Socket.IO", "Send and receive live messages."],
                ["MongoDB", "Store messages permanently."],
                ["JWT", "Authenticate users."],
                ["Socket.IO Rooms", "Send messages to specific users or groups."]
              ].map(([name, purpose]) => (
                <tr key={name}>
                  <td className="p-3 font-medium">{name}</td>
                  <td className="p-3 text-[var(--text-secondary)]">{purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">12. Interview Questions</h2>
        <div className="space-y-3">
          {[
            ["How do you build a real-time chat application?", "Use React for the frontend, Socket.IO for real-time communication, Node.js and Express for the backend, and MongoDB for message storage."],
            ["Why do we use Socket.IO in chat applications?", "It allows the server and connected clients to exchange events in real time."],
            ["Why do we store messages in MongoDB?", "Socket.IO does not automatically persist messages. MongoDB stores messages so users can access chat history later."],
            ["What is the purpose of Socket.IO rooms in chat applications?", "Rooms allow the server to send messages to specific users or groups of users."],
            ["How do you send a message to a specific user?", "Make the user's authenticated socket join a private room and send messages using io.to(room).emit()."],
            ["What happens when a user disconnects?", "The socket disconnects, but previously saved messages remain in MongoDB. The user can fetch them after reconnecting."],
            ["What is a message acknowledgement?", "It is a callback used to confirm that the server has processed an event, such as saving a message."],
            ["How do you implement group chat?", "Create a conversation with members, make authorized sockets join its room, and broadcast messages to that room."],
            ["How do you secure a chat application?", "Authenticate sockets, validate messages, verify conversation membership, restrict access and apply rate limits."]
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