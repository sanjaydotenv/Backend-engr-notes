const HowTheInternetWorks004 = () => {
  const steps = [
    {
      title: "Client",
      desc: "Your browser or mobile app sends a request.",
    },
    {
      title: "Router",
      desc: "Connects your device to the internet.",
    },
    {
      title: "ISP",
      desc: "Your Internet Service Provider connects you to the internet.",
    },
    {
      title: "Web Server",
      desc: "Receives the request and sends back the required data.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <header className="space-y-3">
        <span className="text-sm text-[var(--primary-color)] font-medium">
          BACKEND FUNDAMENTALS / 04
        </span>

        <h1 className="text-4xl font-bold">How the Internet Works</h1>

        <p className="text-lg text-[var(--text-secondary)]">
          Understand how your device communicates with websites around the
          world.
        </p>
      </header>

      {/* Introduction */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What is the Internet?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          The Internet is a global network that connects millions of devices and
          computers. It allows them to communicate and share information.
        </p>

        <p className="text-[var(--text-secondary)] leading-7">
          When you open a website, your device sends a request to another
          computer called a server. The server sends the required data back to
          your device.
        </p>
      </section>

      {/* Main Diagram */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">How Does It Work?</h2>

        <p className="text-[var(--text-secondary)]">
          Let's understand what happens when you open a website.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 space-y-5">
          {/* Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-center">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="flex flex-col items-center gap-3"
              >
                <div className="w-full min-h-28 flex flex-col justify-center text-center p-4 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-color)]">
                  <span className="text-xs text-[var(--primary-color)] mb-2">
                    STEP 0{index + 1}
                  </span>

                  <h3 className="font-semibold">{step.title}</h3>

                  <p className="text-xs text-[var(--text-muted)] mt-2">
                    {step.desc}
                  </p>
                </div>

                {index !== steps.length - 1 && (
                  <>
                    <span className="sm:hidden text-xl text-[var(--primary-color)]">
                      ↓
                    </span>
                    <span className="hidden sm:block absolute" />
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Desktop direction */}
          <div className="hidden sm:flex justify-between px-8 -mt-2">
            <span className="text-xs text-[var(--primary-color)]">
              Request ────────────────────────────────→
            </span>
            <span className="text-xs text-[var(--primary-color)]">
              ←──────────────────────────────── Response
            </span>
          </div>

          <div className="border-t border-[var(--border-color)] pt-4 text-center">
            <p className="text-sm text-[var(--text-secondary)]">
              Your request travels to the server, and the response comes back to
              your device.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          What Happens Behind the Scenes?
        </h2>

        <div className="space-y-3">
          <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
            <h3 className="font-semibold text-[var(--primary-color)]">
              01. You Enter a Website
            </h3>
            <p className="text-[var(--text-secondary)] mt-2">
              You type a website address like google.com in your browser.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
            <h3 className="font-semibold text-[var(--primary-color)]">
              02. DNS Finds the IP Address
            </h3>
            <p className="text-[var(--text-secondary)] mt-2">
              DNS (Domain Name System) finds the IP address connected to the
              domain name. Computers use IP addresses to communicate.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
            <h3 className="font-semibold text-[var(--primary-color)]">
              03. Request Travels to the Server
            </h3>
            <p className="text-[var(--text-secondary)] mt-2">
              Your browser sends an HTTP or HTTPS request to the website's
              server through the network.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
            <h3 className="font-semibold text-[var(--primary-color)]">
              04. Server Sends a Response
            </h3>
            <p className="text-[var(--text-secondary)] mt-2">
              The server processes the request and sends the required data back
              to your browser.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
            <h3 className="font-semibold text-[var(--primary-color)]">
              05. Website Appears
            </h3>
            <p className="text-[var(--text-secondary)] mt-2">
              Your browser uses the received HTML, CSS, JavaScript and other
              resources to display the website.
            </p>
          </div>
        </div>
      </section>

      {/* DNS Flow */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">How DNS Works</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Humans remember domain names easily, but computers communicate using
          IP addresses. DNS helps connect the two.
        </p>

        <div className="p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-center gap-3">
          <div className="p-4 rounded-lg bg-[var(--bg-tertiary)] text-center w-full sm:w-1/3">
            <p className="font-semibold">google.com</p>
            <p className="text-xs text-[var(--text-muted)]">Domain Name</p>
          </div>

          <span className="text-[var(--primary-color)] text-xl">→</span>

          <div className="p-4 rounded-lg bg-[var(--primary-soft)] border border-[var(--primary-color)] text-center w-full sm:w-1/3">
            <p className="font-semibold">DNS</p>
            <p className="text-xs text-[var(--text-muted)]">Finds IP Address</p>
          </div>

          <span className="text-[var(--primary-color)] text-xl">→</span>

          <div className="p-4 rounded-lg bg-[var(--bg-tertiary)] text-center w-full sm:w-1/3">
            <p className="font-semibold">IP Address</p>
            <p className="text-xs text-[var(--text-muted)]">
              Example: 142.250.x.x
            </p>
          </div>
        </div>

        <p className="text-xs text-[var(--text-muted)]">
          Note: The IP shown above is shortened for illustration. DNS records
          can contain different IP addresses.
        </p>
      </section>

      {/* Important Terms */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Important Terms</h2>

        <div className="grid sm:grid-cols-2 gap-3">
          {[
            [
              "IP Address",
              "A numerical address used to identify a device on a network.",
            ],
            ["DNS", "Translates domain names into IP addresses."],
            ["ISP", "A company that provides internet access."],
            ["Router", "Connects devices and forwards network traffic."],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]"
            >
              <h3 className="font-semibold text-[var(--primary-color)]">
                {title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mt-2">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Summary */}
      <section className="p-5 rounded-xl bg-[var(--primary-soft)] border border-[var(--border-color)] space-y-2">
        <h2 className="text-lg font-semibold text-[var(--primary-color)]">
          Quick Summary
        </h2>

        <p className="text-[var(--text-secondary)] leading-7">
          The Internet connects devices around the world. DNS helps find the
          server's IP address, your browser sends a request, and the server
          sends data back. That's how websites work over the Internet.
        </p>
      </section>
    </div>
  );
};

export default HowTheInternetWorks004;
