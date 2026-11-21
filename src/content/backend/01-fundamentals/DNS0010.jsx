const DNS0010 = () => {
  const steps = [
    {
      title: "DNS Resolver",
      desc: "Receives the DNS query and checks its cache. If the IP is not cached, it starts looking for the answer.",
    },
    {
      title: "Root DNS Server",
      desc: "Directs the resolver to the correct TLD server, such as .com or .org.",
    },
    {
      title: "TLD DNS Server",
      desc: "Directs the resolver to the authoritative name server for the domain.",
    },
    {
      title: "Authoritative Name Server",
      desc: "Provides the actual DNS record containing the requested IP address.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <header className="space-y-3">
        <span className="text-sm text-[var(--primary-color)] font-medium">
          BACKEND FUNDAMENTALS / 10
        </span>

        <h1 className="text-4xl font-bold">DNS (Domain Name System)</h1>

        <p className="text-lg text-[var(--text-secondary)]">
          Understand how DNS finds the IP address of a domain name.
        </p>
      </header>

      {/* Introduction */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What is DNS?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          DNS stands for{" "}
          <strong className="text-[var(--text-primary)]">
            Domain Name System
          </strong>
          . It translates human-readable domain names like
          <span className="text-[var(--primary-color)]"> google.com</span>
          into IP addresses that computers use to communicate.
        </p>
      </section>

      {/* Main Diagram */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">How DNS Works</h2>

        <div className="p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
          <div className="flex flex-col items-center gap-2">
            {[
              ["Your Browser", "Requests the IP address of google.com"],
              ["DNS Resolver", "Checks cache or starts DNS lookup"],
              ["Root Server", "Points to the .com TLD server"],
              ["TLD Server", "Points to Google's authoritative name server"],
              ["Authoritative Server", "Returns the requested DNS record"],
            ].map(([title, desc], index) => (
              <div
                key={title}
                className="w-full max-w-md flex flex-col items-center gap-2"
              >
                <div
                  className={`w-full p-4 rounded-lg border text-center ${
                    index === 1 || index === 4
                      ? "bg-[var(--primary-soft)] border-[var(--primary-color)]"
                      : "bg-[var(--bg-tertiary)] border-[var(--border-color)]"
                  }`}
                >
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] mt-1">
                    {desc}
                  </p>
                </div>

                {index !== 4 && (
                  <span className="text-[var(--primary-color)] text-xl">↓</span>
                )}
              </div>
            ))}

            <span className="text-[var(--primary-color)] text-xl">↓</span>

            <div className="w-full max-w-md p-4 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-center">
              <h3 className="font-semibold">DNS Resolver Gets the IP</h3>
              <p className="text-sm text-[var(--text-secondary)] mt-1">
                Sends the answer back to your browser.
              </p>
            </div>
          </div>

          <p className="text-xs text-[var(--text-muted)] text-center mt-5">
            Simplified lookup flow. The resolver performs the server queries and
            caches the result for future requests.
          </p>
        </div>
      </section>

      {/* Explanation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">DNS Lookup Steps</h2>

        {steps.map((step, index) => (
          <div
            key={step.title}
            className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]"
          >
            <span className="text-xs text-[var(--primary-color)]">
              STEP 0{index + 1}
            </span>
            <h3 className="text-lg font-semibold mt-1">{step.title}</h3>
            <p className="text-[var(--text-secondary)] mt-2 leading-7">
              {step.desc}
            </p>
          </div>
        ))}
      </section>

      {/* DNS Records */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Common DNS Records</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-left text-sm">
            <thead className="bg-[var(--bg-tertiary)]">
              <tr>
                <th className="p-4">Record</th>
                <th className="p-4">Purpose</th>
              </tr>
            </thead>

            <tbody>
              {[
                ["A", "Maps a domain to an IPv4 address."],
                ["AAAA", "Maps a domain to an IPv6 address."],
                ["CNAME", "Points one domain name to another domain name."],
                ["MX", "Specifies mail servers for a domain."],
                [
                  "TXT",
                  "Stores text information, often used for verification.",
                ],
              ].map(([record, purpose]) => (
                <tr
                  key={record}
                  className="border-t border-[var(--border-color)]"
                >
                  <td className="p-4 font-semibold text-[var(--primary-color)]">
                    {record}
                  </td>
                  <td className="p-4 text-[var(--text-secondary)]">
                    {purpose}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Caching */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What is DNS Caching?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          DNS caching stores previously discovered DNS records temporarily. When
          the same domain is requested again, the cached result can be used
          instead of performing the complete lookup again.
        </p>

        <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
          <p className="font-semibold text-[var(--primary-color)]">
            Why is it useful?
          </p>
          <p className="text-sm text-[var(--text-secondary)] mt-2">
            It reduces lookup time, network traffic and unnecessary DNS queries.
          </p>
        </div>
      </section>

      {/* Summary */}
      <section className="p-5 rounded-xl bg-[var(--primary-soft)] border border-[var(--border-color)] space-y-2">
        <h2 className="font-semibold text-[var(--primary-color)]">
          Quick Summary
        </h2>

        <p className="text-[var(--text-secondary)] leading-7">
          DNS translates domain names into IP addresses. The resolver checks its
          cache and, when needed, queries DNS servers to find the answer. DNS
          caching makes future lookups faster.
        </p>
      </section>
    </div>
  );
};

export default DNS0010;
