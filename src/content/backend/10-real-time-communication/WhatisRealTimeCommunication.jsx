import CodeBlock from "../../../components/common/CodeBlock";

export default function WhatisRealTimeCommunication() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">

      <div>
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          REAL-TIME COMMUNICATION / 01
        </p>
        <h1 className="mt-2 text-3xl font-bold">
          What is Real-Time Communication?
        </h1>
        <p className="mt-3 text-[var(--text-secondary)] leading-7">
          Real-Time Communication (RTC) allows applications to exchange data
          instantly or with very low delay. It helps users receive updates
          without continuously refreshing the page or manually requesting data.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What is Real-Time Communication?</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Normally, a client sends a request to the server and waits for a
          response. In real-time communication, the server and client can
          exchange information continuously whenever new data is available.
        </p>
        <p className="text-[var(--text-secondary)] leading-7">
          For example, when someone sends you a chat message, it can appear
          immediately without refreshing the page.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Real-World Examples</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ["Chat Applications", "Messages appear instantly when someone sends them."],
            ["Live Notifications", "Users receive notifications immediately."],
            ["Online Gaming", "Players receive other players' actions in real time."],
            ["Live Tracking", "Location updates appear while a vehicle is moving."],
            ["Live Dashboards", "Charts and statistics update automatically."],
            ["Collaborative Apps", "Multiple users can edit the same document together."]
          ].map(([title, description]) => (
            <div key={title} className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Traditional HTTP vs Real-Time Communication</h2>
        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3 text-left">Traditional HTTP</th>
                <th className="p-3 text-left">Real-Time Communication</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              {[
                ["Client usually initiates requests.", "Communication can be initiated by either side, depending on the technology."],
                ["Request-response model.", "Can support continuous two-way communication."],
                ["May require repeated requests for updates.", "Can deliver updates as soon as they are available."],
                ["Commonly used for CRUD APIs.", "Commonly used for chats and live updates."]
              ].map(([http, rtc]) => (
                <tr key={http}>
                  <td className="p-3 text-[var(--text-secondary)]">{http}</td>
                  <td className="p-3 text-[var(--text-secondary)]">{rtc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. How Does It Work?</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          A real-time application establishes a communication mechanism between
          the client and server. When an event occurs, the server can send the
          update to connected clients without waiting for them to make another
          request.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <div className="flex flex-col items-center gap-2 text-center text-sm">
            <div className="w-full max-w-xs rounded-lg border border-[var(--accent-color)] p-3">
              Client A
            </div>
            <span className="text-[var(--accent-color)]">↓ Sends message</span>
            <div className="w-full max-w-xs rounded-lg border border-[var(--border-color)] p-3">
              Real-Time Server
            </div>
            <span className="text-[var(--accent-color)]">↓ Broadcasts update</span>
            <div className="flex w-full max-w-xs gap-3">
              <div className="flex-1 rounded-lg border border-[var(--border-color)] p-3">
                Client B
              </div>
              <div className="flex-1 rounded-lg border border-[var(--border-color)] p-3">
                Client C
              </div>
            </div>
            <p className="mt-2 text-xs text-[var(--text-secondary)]">
              Other connected clients receive the message.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Technologies Used</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Different technologies and techniques are used to build real-time
          applications:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li><strong className="text-[var(--text-primary)]">WebSockets:</strong> Provides persistent, two-way communication between client and server.</li>
          <li><strong className="text-[var(--text-primary)]">Socket.IO:</strong> A library that provides event-based communication with features such as rooms and automatic reconnection.</li>
          <li><strong className="text-[var(--text-primary)]">Server-Sent Events (SSE):</strong> Allows a server to continuously send updates to a browser.</li>
          <li><strong className="text-[var(--text-primary)]">WebRTC:</strong> Enables real-time audio, video, and peer-to-peer data communication.</li>
          <li><strong className="text-[var(--text-primary)]">Polling:</strong> The client repeatedly requests the server to check for new updates.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. When Should We Use It?</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Use real-time communication when an application needs frequent,
          immediate updates between connected users or systems.
        </p>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Live chat and messaging applications.</li>
          <li>Real-time notifications.</li>
          <li>Multiplayer games.</li>
          <li>Live location tracking.</li>
          <li>Collaborative editing applications.</li>
        </ul>
        <p className="text-[var(--text-secondary)] leading-7">
          For normal operations such as user registration, login, or fetching
          a product list, traditional HTTP APIs are usually sufficient.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Interview Questions</h2>
        <div className="space-y-3">
          {[
            ["What is Real-Time Communication?", "It is a way of exchanging data between systems with very low delay, allowing users to receive updates almost immediately."],
            ["Give some examples of real-time applications.", "Chat applications, live notifications, online games, live tracking, and collaborative editors."],
            ["What is the difference between HTTP and real-time communication?", "Traditional HTTP commonly follows a request-response model, while real-time technologies can maintain communication channels and deliver updates as they happen."],
            ["Name some technologies used for real-time communication.", "WebSockets, Socket.IO, Server-Sent Events, WebRTC, and polling."],
            ["Is Socket.IO the same as WebSocket?", "No. WebSocket is a communication protocol, while Socket.IO is a library that provides additional features and can use WebSocket or other transports."]
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