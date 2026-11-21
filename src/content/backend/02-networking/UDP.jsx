const UDP = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8 text-[var(--text-primary)]">
      {/* Header */}{" "}
      <header className="space-y-3">
        {" "}
        <span className="text-sm text-[var(--primary-color)] font-medium">
          BACKEND NETWORKING / 04{" "}
        </span>
        <h1 className="text-4xl font-bold">UDP</h1>
        <p className="text-[var(--text-secondary)] text-lg">
          Understanding fast, connectionless communication using User Datagram
          Protocol.
        </p>
      </header>
      {/* Introduction */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What is UDP?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          UDP (User Datagram Protocol) is a connectionless transport-layer
          protocol used to send data between devices without establishing a
          connection first.
        </p>

        <p className="text-[var(--text-secondary)] leading-7">
          Unlike TCP, UDP does not guarantee delivery, ordering or
          retransmission of lost packets. It focuses on low overhead and fast
          communication.
        </p>
      </section>
      {/* Key Features */}
      <section className="grid md:grid-cols-2 gap-4">
        <div className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-2">
          <h3 className="text-xl font-semibold text-[var(--primary-color)]">
            01. Connectionless
          </h3>

          <p className="text-[var(--text-secondary)] leading-7">
            UDP sends data without performing a connection handshake before
            transmission.
          </p>
        </div>

        <div className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-2">
          <h3 className="text-xl font-semibold text-[var(--primary-color)]">
            02. Low Overhead
          </h3>

          <p className="text-[var(--text-secondary)] leading-7">
            UDP has a small 8-byte header and does not include TCP-style
            connection management or reliability mechanisms.
          </p>
        </div>

        <div className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-2">
          <h3 className="text-xl font-semibold text-[var(--primary-color)]">
            03. No Guaranteed Delivery
          </h3>

          <p className="text-[var(--text-secondary)] leading-7">
            Packets may be lost, duplicated or arrive out of order. UDP does not
            automatically recover them.
          </p>
        </div>

        <div className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-2">
          <h3 className="text-xl font-semibold text-[var(--primary-color)]">
            04. Datagram Based
          </h3>

          <p className="text-[var(--text-secondary)] leading-7">
            UDP sends independent data units called datagrams instead of
            maintaining a continuous connection.
          </p>
        </div>
      </section>
      {/* How UDP Works */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">How Does UDP Work?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          The sender directly creates and sends UDP datagrams to the
          destination. The receiver processes the datagrams it receives.
        </p>

        <div className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="w-full md:w-1/3 p-4 text-center rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-color)]">
            <h3 className="font-semibold">Sender</h3>
            <p className="text-sm text-[var(--text-muted)]">Creates data</p>
          </div>

          <div className="flex flex-col items-center gap-1">
            <span className="text-[var(--primary-color)] text-sm font-medium">
              UDP Datagrams
            </span>
            <span className="text-2xl text-[var(--primary-color)]">→</span>
            <span className="text-xs text-[var(--text-muted)]">
              No handshake
            </span>
          </div>

          <div className="w-full md:w-1/3 p-4 text-center rounded-lg border border-[var(--primary-color)] bg-[var(--primary-soft)]">
            <h3 className="font-semibold">Receiver</h3>
            <p className="text-sm text-[var(--text-muted)]">
              Receives available data
            </p>
          </div>
        </div>

        <p className="text-sm text-[var(--text-muted)]">
          UDP does not wait for an acknowledgment or automatically resend lost
          datagrams.
        </p>
      </section>
      {/* TCP vs UDP */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">TCP vs UDP</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Both TCP and UDP operate at the Transport Layer, but they handle data
          delivery differently.
        </p>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-left text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">Feature</th>
                <th className="p-3 text-[var(--primary-color)]">TCP</th>
                <th className="p-3 text-[var(--primary-color)]">UDP</th>
              </tr>
            </thead>

            <tbody className="text-[var(--text-secondary)]">
              {[
                ["Connection", "Connection-oriented", "Connectionless"],
                ["Delivery", "Reliable", "Not guaranteed"],
                ["Ordering", "Maintains order", "No guarantee"],
                ["Speed", "More overhead", "Low overhead"],
                ["Handshake", "Yes", "No"],
                ["Header Size", "20 bytes minimum", "8 bytes"],
              ].map(([feature, tcp, udp]) => (
                <tr
                  key={feature}
                  className="border-t border-[var(--border-color)]"
                >
                  <td className="p-3 font-medium text-[var(--text-primary)]">
                    {feature}
                  </td>
                  <td className="p-3">{tcp}</td>
                  <td className="p-3">{udp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      {/* Real World Examples */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Where is UDP Used?</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              title: "01. Online Gaming",
              description:
                "Sends frequent player movement and position updates where low latency is important.",
            },
            {
              title: "02. Video & Voice Calls",
              description:
                "Helps deliver real-time audio and video where waiting for retransmission can cause delays.",
            },
            {
              title: "03. DNS",
              description:
                "DNS commonly uses UDP port 53 for regular queries and responses.",
            },
            {
              title: "04. Live Streaming",
              description:
                "Some streaming protocols use UDP to prioritize timely data delivery.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] space-y-2"
            >
              <h3 className="font-semibold text-[var(--primary-color)]">
                {item.title}
              </h3>

              <p className="text-[var(--text-secondary)] leading-7">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* Important Point */}
      <section className="p-5 rounded-xl bg-[var(--primary-soft)] border border-[var(--border-color)] space-y-2">
        <h2 className="text-lg font-semibold text-[var(--primary-color)]">
          Important Points
        </h2>

        <ul className="space-y-2 text-[var(--text-secondary)] list-disc pl-5">
          <li>UDP stands for User Datagram Protocol.</li>
          <li>It operates at the Transport Layer.</li>
          <li>UDP is connectionless.</li>
          <li>Its header size is 8 bytes.</li>
          <li>It does not guarantee delivery or packet ordering.</li>
          <li>It is useful for latency-sensitive communication.</li>
        </ul>
      </section>
      {/* Summary */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Quick Summary</h2>

        <div className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)]">
          <p className="text-[var(--text-secondary)] leading-7">
            <strong className="text-[var(--text-primary)]">UDP:</strong>{" "}
            Connectionless transport-layer protocol.
            <br />
            <strong className="text-[var(--text-primary)]">
              Delivery:
            </strong>{" "}
            Not guaranteed.
            <br />
            <strong className="text-[var(--text-primary)]">Header:</strong> 8
            bytes.
            <br />
            <strong className="text-[var(--text-primary)]">
              Best For:
            </strong>{" "}
            Real-time and latency-sensitive communication.
          </p>
        </div>
      </section>
    </div>
  );
};

export default UDP;
