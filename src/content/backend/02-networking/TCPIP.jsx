const TCPIP = () => {
  const layers = [
    {
      name: "04. Application Layer",
      description:
        "Provides network services to applications. HTTP, HTTPS, DNS and FTP work at this layer.",
      example: "HTTP, HTTPS, DNS",
    },
    {
      name: "03. Transport Layer",
      description:
        "Handles end-to-end communication, segmentation, port numbers and data delivery.",
      example: "TCP, UDP",
    },
    {
      name: "02. Internet Layer",
      description:
        "Handles logical addressing and routing packets from one network to another.",
      example: "IP, ICMP",
    },
    {
      name: "01. Network Access Layer",
      description:
        "Handles communication over the physical network, including frames and hardware addressing.",
      example: "Ethernet, Wi-Fi",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8 text-[var(--text-primary)]">
      {/* Header */}{" "}
      <header className="space-y-3">
        {" "}
        <span className="text-sm text-[var(--primary-color)] font-medium">
          BACKEND NETWORKING / 03{" "}
        </span>
        <h1 className="text-4xl font-bold">TCP/IP</h1>
        <p className="text-[var(--text-secondary)] text-lg">
          Understanding how data travels between devices across the internet
          using the TCP/IP protocol suite.
        </p>
      </header>
      {/* Introduction */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What is TCP/IP?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          TCP/IP stands for Transmission Control Protocol / Internet Protocol.
          It is a collection of communication protocols that allows devices to
          exchange data over interconnected networks.
        </p>

        <p className="text-[var(--text-secondary)] leading-7">
          It defines how data is divided, addressed, transmitted, routed and
          received across the internet.
        </p>
      </section>
      {/* Main Protocols */}
      <section className="grid md:grid-cols-2 gap-4">
        <div className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-2">
          <h3 className="text-xl font-semibold text-[var(--primary-color)]">
            01. TCP
          </h3>

          <p className="text-[var(--text-secondary)] leading-7">
            TCP provides reliable, connection-oriented communication. It ensures
            data is delivered in order and retransmits lost data.
          </p>

          <p className="text-sm text-[var(--text-muted)]">
            Example: Web browsing using HTTP/1.1 and HTTP/2.
          </p>
        </div>

        <div className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-2">
          <h3 className="text-xl font-semibold text-[var(--primary-color)]">
            02. IP
          </h3>

          <p className="text-[var(--text-secondary)] leading-7">
            IP handles logical addressing and routing so packets can travel from
            the source device to the destination device.
          </p>

          <p className="text-sm text-[var(--text-muted)]">
            Example: IPv4 and IPv6 addresses.
          </p>
        </div>
      </section>
      {/* Working */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">How Does TCP/IP Work?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          When you send data over a network, it passes through different stages.
          Each layer performs a specific responsibility.
        </p>

        <div className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] flex flex-col items-center gap-3">
          {[
            ["Application", "Creates application data"],
            ["Transport", "Divides data into segments"],
            ["Internet", "Adds IP addressing and creates packets"],
            ["Network Access", "Transmits frames over the network"],
          ].map(([title, description], index) => (
            <div
              key={title}
              className="w-full flex flex-col items-center gap-3"
            >
              <div
                className={`w-full max-w-md p-4 text-center rounded-lg border ${
                  index === 0
                    ? "border-[var(--primary-color)] bg-[var(--primary-soft)]"
                    : "border-[var(--border-color)] bg-[var(--bg-tertiary)]"
                }`}
              >
                <h3 className="font-semibold">{title} Layer</h3>
                <p className="text-sm text-[var(--text-muted)]">
                  {description}
                </p>
              </div>

              {index !== 3 && (
                <span className="text-[var(--primary-color)]">↓</span>
              )}
            </div>
          ))}

          <p className="text-xs text-[var(--text-muted)] text-center pt-2">
            At the receiving device, the process happens in reverse.
          </p>
        </div>
      </section>
      {/* TCP/IP Layers */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Four Layers of TCP/IP</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          The TCP/IP model is commonly represented using four layers. Each layer
          handles a different part of network communication.
        </p>

        <div className="space-y-3">
          {layers.map((layer) => (
            <div
              key={layer.name}
              className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-2"
            >
              <h3 className="font-semibold text-[var(--primary-color)]">
                {layer.name}
              </h3>

              <p className="text-[var(--text-secondary)] leading-7">
                {layer.description}
              </p>

              <p className="text-sm text-[var(--text-muted)]">
                Protocols / Technologies: {layer.example}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* Data Encapsulation */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Data Encapsulation</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          As data moves down the TCP/IP layers, each layer adds its own
          information (headers) before transmission. This process is called
          encapsulation.
        </p>

        <div className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-3">
          {[
            ["Application", "Data"],
            ["Transport", "TCP Header + Data"],
            ["Internet", "IP Header + TCP Header + Data"],
            ["Network Access", "Frame Header + Packet + Trailer"],
          ].map(([title, content]) => (
            <div key={title} className="space-y-1">
              <p className="text-sm font-semibold text-[var(--primary-color)]">
                {title}
              </p>

              <div className="p-3 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-sm break-words text-[var(--text-secondary)]">
                {content}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Real World Example */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Real World Example</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Imagine opening a website in your browser.
        </p>

        <ul className="space-y-2 text-[var(--text-secondary)] list-disc pl-5">
          <li>HTTP creates the request at the Application Layer.</li>
          <li>TCP handles reliable delivery at the Transport Layer.</li>
          <li>IP routes packets to the destination server.</li>
          <li>Network Access transmits the data through the network.</li>
          <li>The server receives and processes the request.</li>
        </ul>
      </section>
      {/* Important Point */}
      <section className="p-5 rounded-xl bg-[var(--primary-soft)] border border-[var(--border-color)] space-y-2">
        <h2 className="text-lg font-semibold text-[var(--primary-color)]">
          Important Points
        </h2>

        <ul className="space-y-2 text-[var(--text-secondary)] list-disc pl-5">
          <li>TCP/IP is the foundation of internet communication.</li>
          <li>TCP provides reliable and ordered delivery.</li>
          <li>IP handles addressing and packet routing.</li>
          <li>TCP/IP uses a four-layer model.</li>
          <li>UDP is another important Transport Layer protocol.</li>
        </ul>
      </section>
      {/* Summary */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Quick Summary</h2>

        <div className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)]">
          <p className="text-[var(--text-secondary)] leading-7">
            <strong className="text-[var(--text-primary)]">TCP:</strong>{" "}
            Provides reliable data delivery.
            <br />
            <strong className="text-[var(--text-primary)]">IP:</strong> Handles
            addressing and routing.
            <br />
            <strong className="text-[var(--text-primary)]">Layers:</strong>{" "}
            Application, Transport, Internet and Network Access.
            <br />
            <strong className="text-[var(--text-primary)]">
              Encapsulation:
            </strong>{" "}
            Each layer adds its own information to the data.
          </p>
        </div>
      </section>
    </div>
  );
};

export default TCPIP;
