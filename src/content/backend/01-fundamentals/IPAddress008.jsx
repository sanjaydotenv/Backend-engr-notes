const IPAddress008 = () => {
  const types = [
    {
      title: "IPv4",
      desc: "Uses 32 bits and is written in four numbers separated by dots.",
      example: "192.168.1.1",
    },
    {
      title: "IPv6",
      desc: "Uses 128 bits and provides a much larger number of addresses.",
      example: "2001:db8::1",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <header className="space-y-3">
        <span className="text-sm text-[var(--primary-color)] font-medium">
          BACKEND FUNDAMENTALS / 08
        </span>

        <h1 className="text-4xl font-bold">IP Address</h1>

        <p className="text-lg text-[var(--text-secondary)]">
          Understand how devices are identified and communicate over a network.
        </p>
      </header>

      {/* Introduction */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What is an IP Address?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          IP stands for{" "}
          <strong className="text-[var(--text-primary)]">
            Internet Protocol
          </strong>
          . An IP Address is a numerical address assigned to a network interface
          so devices can be identified and communicate over an IP network.
        </p>

        <p className="text-[var(--text-secondary)] leading-7">
          Just like a home needs an address to receive a delivery, devices need
          IP addresses to send and receive data.
        </p>
      </section>

      {/* Diagram */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">How IP Addresses Work</h2>

        <div className="p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center text-center">
            <div className="p-4 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-color)]">
              <p className="font-semibold">Your Device</p>
              <p className="text-xs text-[var(--text-muted)] mt-2">
                IP: 192.168.1.10
              </p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <span className="text-[var(--primary-color)] text-xl">↔</span>
              <p className="text-xs text-[var(--text-muted)]">
                Network Communication
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-color)]">
              <p className="font-semibold">Server</p>
              <p className="text-xs text-[var(--text-muted)] mt-2">
                IP: 93.184.216.34
              </p>
            </div>
          </div>

          <p className="text-sm text-[var(--text-secondary)] text-center mt-5">
            IP addresses help route data between devices across networks.
          </p>
        </div>
      </section>

      {/* Versions */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Types of IP Addresses</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {types.map((type) => (
            <div
              key={type.title}
              className="p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] space-y-3"
            >
              <h3 className="text-xl font-semibold text-[var(--primary-color)]">
                {type.title}
              </h3>

              <p className="text-[var(--text-secondary)]">{type.desc}</p>

              <div className="p-3 rounded-lg bg-[var(--bg-tertiary)]">
                <code className="text-sm">{type.example}</code>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Public vs Private */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Public IP vs Private IP</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          IP addresses can also be classified by where they are used.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] space-y-2">
            <h3 className="font-semibold text-[var(--primary-color)]">
              Public IP
            </h3>
            <p className="text-[var(--text-secondary)] text-sm leading-6">
              A public IP is used for communication over the internet. It is
              assigned by an Internet Service Provider or network provider.
            </p>
            <p className="text-xs text-[var(--text-muted)]">
              Example: A public address assigned to your home router.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] space-y-2">
            <h3 className="font-semibold text-[var(--primary-color)]">
              Private IP
            </h3>
            <p className="text-[var(--text-secondary)] text-sm leading-6">
              A private IP is used inside a local network, such as your home or
              office Wi-Fi.
            </p>
            <p className="text-xs text-[var(--text-muted)]">
              Example: 192.168.1.10
            </p>
          </div>
        </div>
      </section>

      {/* Network Diagram */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Public and Private IP Flow</h2>

        <div className="p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] space-y-3">
          <div className="p-4 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-center">
            <p className="font-semibold">Your Laptop</p>
            <p className="text-sm text-[var(--text-muted)]">
              Private IP: 192.168.1.10
            </p>
          </div>

          <div className="text-center text-[var(--primary-color)]">↓</div>

          <div className="p-4 rounded-lg bg-[var(--primary-soft)] border border-[var(--primary-color)] text-center">
            <p className="font-semibold">Wi-Fi Router</p>
            <p className="text-sm text-[var(--text-secondary)]">
              Uses NAT to translate private and public addresses
            </p>
          </div>

          <div className="text-center text-[var(--primary-color)]">↓</div>

          <div className="p-4 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-center">
            <p className="font-semibold">Internet</p>
            <p className="text-sm text-[var(--text-muted)]">
              Public IP: Assigned by your ISP
            </p>
          </div>

          <div className="text-center text-[var(--primary-color)]">↓</div>

          <div className="p-4 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-center">
            <p className="font-semibold">Website Server</p>
            <p className="text-sm text-[var(--text-muted)]">
              Receives the network request
            </p>
          </div>
        </div>

        <p className="text-xs text-[var(--text-muted)]">
          Simplified example: NAT allows multiple devices in a local network to
          share a public IP address.
        </p>
      </section>

      {/* Important */}
      <section className="p-5 rounded-xl bg-[var(--primary-soft)] border border-[var(--border-color)] space-y-2">
        <h2 className="font-semibold text-[var(--primary-color)]">
          Important to Remember
        </h2>

        <ul className="space-y-2 text-[var(--text-secondary)] list-disc pl-5">
          <li>IPv4 uses 32 bits, while IPv6 uses 128 bits.</li>
          <li>Public IPs are used for internet communication.</li>
          <li>Private IPs are used inside local networks.</li>
          <li>NAT helps devices share a public IP address.</li>
        </ul>
      </section>

      {/* Summary */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Quick Summary</h2>

        <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
          <p className="text-[var(--text-secondary)] leading-7">
            An IP address identifies a network interface and helps devices
            communicate. IPv4 and IPv6 are two versions of IP. Public and
            private IPs are used in different network environments.
          </p>
        </div>
      </section>
    </div>
  );
};

export default IPAddress008;
