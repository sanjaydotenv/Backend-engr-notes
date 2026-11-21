import React from "react";

const Ports0012 = () => {
  return (
    <main className="space-y-10 text-[var(--text-primary)]">
      {/* Header */}
      <header className="space-y-3">
        <span className="text-sm text-[var(--primary-color)] font-medium">
          FUNDAMENTALS / 012
        </span>

        <h1 className="text-4xl font-bold">Ports</h1>

        <p className="text-lg text-[var(--text-secondary)]">
          Understand how multiple applications communicate through different
          ports on the same device.
        </p>
      </header>

      {/* What is a Port */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What is a Port?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          A port is a logical number used to identify a specific application or
          service running on a device.
        </p>

        <p className="text-[var(--text-secondary)] leading-7">
          An IP address identifies a device on a network, while a port helps
          identify which application should receive the data.
        </p>
      </section>

      {/* Diagram */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">How Ports Work</h2>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 space-y-5">
          <div className="text-center">
            <div className="inline-block rounded-lg bg-[var(--bg-tertiary)] px-6 py-3">
              <p className="font-semibold">One Server</p>
              <small className="text-[var(--text-muted)]">192.168.1.10</small>
            </div>
          </div>

          <div className="flex justify-center text-[var(--primary-color)] text-2xl">
            ↓
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              ["3000", "Node.js API"],
              ["5173", "React App"],
              ["27017", "MongoDB"],
            ].map(([port, service]) => (
              <div
                key={port}
                className="rounded-lg border border-[var(--primary-color)] bg-[var(--primary-soft)] p-4 text-center space-y-2"
              >
                <p className="text-2xl font-bold text-[var(--primary-color)]">
                  :{port}
                </p>
                <p className="text-sm text-[var(--text-secondary)]">
                  {service}
                </p>
              </div>
            ))}
          </div>

          <p className="text-xs text-center text-[var(--text-muted)]">
            Example of different services listening on different ports.
          </p>
        </div>
      </section>

      {/* Example */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Understanding localhost:3000</h2>
        <div className="rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] p-5 space-y-3">
          <div className="font-mono text-lg">
            <span className="text-[var(--primary-color)]">localhost</span>
            <span className="text-[var(--text-muted)]">:</span>
            <span className="text-[var(--primary-color)]">3000</span>
          </div>

          <div className="space-y-2 text-sm text-[var(--text-secondary)]">
            <p>
              <strong className="text-[var(--text-primary)]">localhost:</strong>{" "}
              Your own computer.
            </p>
            <p>
              <strong className="text-[var(--text-primary)]">3000:</strong> The
              port where your application is listening.
            </p>
          </div>
        </div>
        <p className="text-[var(--text-secondary)] leading-7">
          For example, when you run a Node.js server on port 3000, users can
          access it locally through{" "}
          <code className="text-[var(--primary-color)]">
            http://localhost:3000
          </code>
          .
        </p>
        <pre className="rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] p-5 overflow-x-auto text-sm">
          <code>{`app.listen(3000, () => {

console.log("Server running on port 3000");
});`}</code>{" "}
        </pre>{" "}
      </section>

      {/* Port Range */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Port Number Range</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          TCP and UDP port numbers range from 0 to 65535. They are divided into
          three groups:
        </p>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-left text-sm">
            <thead className="bg-[var(--bg-tertiary)]">
              <tr>
                <th className="p-4">Range</th>
                <th className="p-4">Category</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr>
                <td className="p-4 border-t border-[var(--border-color)]">
                  0 – 1023
                </td>
                <td className="p-4 border-t border-[var(--border-color)]">
                  Well-known Ports
                </td>
              </tr>
              <tr>
                <td className="p-4 border-t border-[var(--border-color)]">
                  1024 – 49151
                </td>
                <td className="p-4 border-t border-[var(--border-color)]">
                  Registered Ports
                </td>
              </tr>
              <tr>
                <td className="p-4 border-t border-[var(--border-color)]">
                  49152 – 65535
                </td>
                <td className="p-4 border-t border-[var(--border-color)]">
                  Dynamic / Private Ports
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Common Ports */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Common Port Numbers</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-left text-sm">
            <thead className="bg-[var(--bg-tertiary)]">
              <tr>
                <th className="p-4">Port</th>
                <th className="p-4">Service</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              {[
                ["20 / 21", "FTP"],
                ["22", "SSH"],
                ["25", "SMTP"],
                ["53", "DNS"],
                ["80", "HTTP"],
                ["443", "HTTPS"],
                ["3306", "MySQL"],
                ["5432", "PostgreSQL"],
                ["27017", "MongoDB"],
                ["3000", "Common Node.js development port"],
                ["5173", "Common Vite development port"],
              ].map(([port, service]) => (
                <tr key={port}>
                  <td className="p-4 border-t border-[var(--border-color)] font-mono text-[var(--primary-color)]">
                    {port}
                  </td>
                  <td className="p-4 border-t border-[var(--border-color)]">
                    {service}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Important */}
      <section className="rounded-xl border border-[var(--primary-color)] bg-[var(--primary-soft)] p-5 space-y-2">
        <h3 className="font-semibold text-[var(--primary-color)]">
          Important to Remember
        </h3>

        <ul className="space-y-2 text-[var(--text-secondary)] text-sm">
          <li>• Port numbers range from 0 to 65535.</li>
          <li>• TCP and UDP use separate port spaces.</li>
          <li>
            • Multiple applications can use different ports on the same IP.
          </li>
          <li>
            • Two applications generally cannot listen on the same IP, protocol
            and port combination.
          </li>
          <li>
            • A port is not a physical connection; it is a logical communication
            endpoint.
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Ports0012;
