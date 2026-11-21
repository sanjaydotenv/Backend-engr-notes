const DomainName009 = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <header className="space-y-3">
        <span className="text-sm text-[var(--primary-color)] font-medium">
          BACKEND FUNDAMENTALS / 09
        </span>

        <h1 className="text-4xl font-bold">Domain Name</h1>

        <p className="text-lg text-[var(--text-secondary)]">
          Understand how human-readable website names work on the internet.
        </p>
      </header>

      {/* Introduction */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What is a Domain Name?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          A domain name is a human-readable address used to access a website.
          Instead of remembering an IP address, we can use names like
          <strong className="text-[var(--primary-color)]"> google.com</strong>.
        </p>

        <p className="text-[var(--text-secondary)] leading-7">
          DNS (Domain Name System) helps translate domain names into IP
          addresses so browsers can find the correct server.
        </p>
      </section>

      {/* Diagram */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Domain Name to IP Address</h2>

        <div className="p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="w-full sm:w-1/3 p-4 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-center">
              <h3 className="font-semibold">google.com</h3>
              <p className="text-xs text-[var(--text-muted)] mt-1">
                Domain Name
              </p>
            </div>

            <span className="text-[var(--primary-color)] text-2xl">→</span>

            <div className="w-full sm:w-1/3 p-4 rounded-lg bg-[var(--primary-soft)] border border-[var(--primary-color)] text-center">
              <h3 className="font-semibold">DNS</h3>
              <p className="text-xs text-[var(--text-muted)] mt-1">
                Finds the IP Address
              </p>
            </div>

            <span className="text-[var(--primary-color)] text-2xl">→</span>

            <div className="w-full sm:w-1/3 p-4 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-center">
              <h3 className="font-semibold">IP Address</h3>
              <p className="text-xs text-[var(--text-muted)] mt-1">
                Example: 142.250.x.x
              </p>
            </div>
          </div>

          <p className="text-sm text-[var(--text-secondary)] text-center mt-5">
            DNS helps the browser find the server using its domain name.
          </p>
        </div>
      </section>

      {/* Domain Structure */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Parts of a Domain Name</h2>

        <p className="text-[var(--text-secondary)]">
          Let's understand the structure using this example:
        </p>

        <div className="p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] space-y-4">
          <div className="flex justify-center flex-wrap gap-1 text-3xl sm:text-4xl font-bold">
            <span className="text-[var(--primary-color)]">www</span>
            <span className="text-[var(--text-muted)]">.</span>
            <span>example</span>
            <span className="text-[var(--text-muted)]">.</span>
            <span className="text-[var(--primary-color)]">com</span>
          </div>

          <div className="grid sm:grid-cols-3 gap-3">
            {[
              ["www", "Subdomain", "An optional subdomain."],
              ["example", "Second-Level Domain", "The registered domain name."],
              ["com", "Top-Level Domain (TLD)", "The domain extension."],
            ].map(([value, title, desc]) => (
              <div
                key={title}
                className="p-3 rounded-lg bg-[var(--bg-tertiary)] text-center"
              >
                <p className="font-semibold text-[var(--primary-color)]">
                  {value}
                </p>
                <h3 className="font-medium mt-2">{title}</h3>
                <p className="text-xs text-[var(--text-muted)] mt-1">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domain vs URL */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Domain Name vs URL</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-left text-sm">
            <thead className="bg-[var(--bg-tertiary)]">
              <tr>
                <th className="p-4">Domain Name</th>
                <th className="p-4">URL</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="p-4 text-[var(--text-secondary)]">
                  example.com
                </td>
                <td className="p-4 text-[var(--text-secondary)]">
                  https://example.com/products?id=10
                </td>
              </tr>
              <tr className="border-t border-[var(--border-color)]">
                <td className="p-4 text-[var(--text-secondary)]">
                  Identifies the website's domain.
                </td>
                <td className="p-4 text-[var(--text-secondary)]">
                  Identifies a complete web address or resource location.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Domain Registration */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">How Do You Get a Domain?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          You can register a domain through a domain registrar. After
          registration, you can configure its DNS records to point to your
          website's hosting or server.
        </p>

        <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
          <p className="text-[var(--text-secondary)] leading-7">
            <strong className="text-[var(--text-primary)]">Example:</strong> You
            register{" "}
            <span className="text-[var(--primary-color)]">mywebsite.com</span>,
            configure its DNS records and connect it to your hosting server.
            Visitors can then access your website using that domain.
          </p>
        </div>
      </section>

      {/* Summary */}
      <section className="p-5 rounded-xl bg-[var(--primary-soft)] border border-[var(--border-color)] space-y-2">
        <h2 className="font-semibold text-[var(--primary-color)]">
          Quick Summary
        </h2>

        <p className="text-[var(--text-secondary)] leading-7">
          A domain name is a human-readable website address. DNS translates it
          into an IP address. A domain contains parts like subdomains,
          second-level domains and top-level domains.
        </p>
      </section>
    </div>
  );
};

export default DomainName009;
