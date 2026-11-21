const ClientServerArchitecture003 = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <header className="space-y-3">
        <span className="text-sm text-[var(--primary-color)] font-medium">
          BACKEND FUNDAMENTALS / 03
        </span>

        <h1 className="text-4xl font-bold">Client-Server Architecture</h1>

        <p className="text-[var(--text-secondary)] text-lg">
          How a client communicates with a server to get information and perform
          tasks.
        </p>
      </header>

      {/* Introduction */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">
          What is Client-Server Architecture?
        </h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Client-Server Architecture is a system where two devices or
          applications communicate with each other.
        </p>

        <p className="text-[var(--text-secondary)] leading-7">
          The <strong className="text-[var(--text-primary)]">Client</strong>{" "}
          sends a request, and the{" "}
          <strong className="text-[var(--text-primary)]">Server</strong>{" "}
          processes that request and sends back a response.
        </p>
      </section>

      {/* Two Main Parts */}
      <section className="grid md:grid-cols-2 gap-4">
        <div className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-2">
          <h3 className="text-xl font-semibold text-[var(--primary-color)]">
            01. Client
          </h3>
          <p className="text-[var(--text-secondary)]">
            A client is an application or device that requests data or services
            from a server.
          </p>
          <p className="text-sm text-[var(--text-muted)]">
            Examples: Web browser, mobile app, desktop app.
          </p>
        </div>

        <div className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-2">
          <h3 className="text-xl font-semibold text-[var(--primary-color)]">
            02. Server
          </h3>
          <p className="text-[var(--text-secondary)]">
            A server receives client requests, processes them and sends back the
            required response.
          </p>
          <p className="text-sm text-[var(--text-muted)]">
            Examples: Node.js server, database server, web server.
          </p>
        </div>
      </section>

      {/* Example */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Real World Example</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Imagine opening YouTube in your browser.
        </p>

        <ul className="space-y-2 text-[var(--text-secondary)] list-disc pl-5">
          <li>You open YouTube — the browser acts as the client.</li>
          <li>The client requests videos from the server.</li>
          <li>The server processes the request and finds the required data.</li>
          <li>The server sends a response containing the video data.</li>
          <li>Your browser displays the videos.</li>
        </ul>
      </section>

      {/* Architecture Flow */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">How Does It Work?</h2>

        <div className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] flex flex-col items-center gap-3">
          <div className="w-full max-w-xs p-4 text-center rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-color)]">
            <h3 className="font-semibold">Client</h3>
            <p className="text-sm text-[var(--text-muted)]">
              Browser / Mobile App
            </p>
          </div>

          <span className="text-[var(--primary-color)] text-sm font-medium">
            ↓ Request
          </span>

          <div className="w-full max-w-xs p-4 text-center rounded-lg border border-[var(--primary-color)] bg-[var(--primary-soft)]">
            <h3 className="font-semibold">Server</h3>
            <p className="text-sm text-[var(--text-muted)]">
              Processes the request
            </p>
          </div>

          <span className="text-[var(--primary-color)] text-sm font-medium">
            ↓ Response
          </span>

          <div className="w-full max-w-xs p-4 text-center rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-color)]">
            <h3 className="font-semibold">Client</h3>
            <p className="text-sm text-[var(--text-muted)]">
              Displays the result
            </p>
          </div>
        </div>
      </section>

      {/* Important Point */}
      <section className="p-5 rounded-xl bg-[var(--primary-soft)] border border-[var(--border-color)] space-y-2">
        <h2 className="text-lg font-semibold text-[var(--primary-color)]">
          Important Point
        </h2>

        <p className="text-[var(--text-secondary)] leading-7">
          The client and server are separate parts of an application. They
          communicate over a network, usually using HTTP or HTTPS in web
          applications.
        </p>
      </section>

      {/* Summary */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Quick Summary</h2>

        <div className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)]">
          <p className="text-[var(--text-secondary)] leading-7">
            <strong className="text-[var(--text-primary)]">Client:</strong>{" "}
            Sends requests.
            <br />
            <strong className="text-[var(--text-primary)]">Server:</strong>{" "}
            Processes requests and sends responses.
            <br />
            <strong className="text-[var(--text-primary)]">
              Communication:
            </strong>{" "}
            Happens over a network.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ClientServerArchitecture003;
