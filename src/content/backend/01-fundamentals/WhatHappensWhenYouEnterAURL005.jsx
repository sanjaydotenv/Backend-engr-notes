const WhatHappensWhenYouEnterAURL005 = () => {
  const steps = [
    {
      title: "URL Parsing",
      desc: "The browser reads the URL and identifies the protocol, domain and path.",
    },
    {
      title: "DNS Lookup",
      desc: "DNS finds the IP address associated with the domain name.",
    },
    {
      title: "Connection Establishment",
      desc: "The browser establishes a connection with the server using TCP. HTTPS also uses TLS to secure the connection.",
    },
    {
      title: "HTTP Request",
      desc: "The browser sends an HTTP request to the server.",
    },
    {
      title: "Server Processing",
      desc: "The server processes the request and may communicate with a database.",
    },
    {
      title: "HTTP Response",
      desc: "The server sends back a response containing a status code, headers and possibly a response body.",
    },
    {
      title: "Browser Rendering",
      desc: "The browser processes HTML, CSS and JavaScript to display the webpage.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <header className="space-y-3">
        <span className="text-sm text-[var(--primary-color)] font-medium">
          BACKEND FUNDAMENTALS / 05
        </span>

        <h1 className="text-4xl font-bold">
          What Happens When You Enter a URL?
        </h1>

        <p className="text-lg text-[var(--text-secondary)]">
          Understand the journey from entering a website address to seeing the
          webpage in your browser.
        </p>
      </header>

      {/* Introduction */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Introduction</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          When you enter a URL like{" "}
          <strong className="text-[var(--primary-color)]">
            https://example.com
          </strong>{" "}
          in your browser, several steps happen behind the scenes before the
          website appears.
        </p>
      </section>

      {/* Main Diagram */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Complete Request Flow</h2>

        <div className="p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
          <div className="flex flex-col items-center gap-2">
            <div className="w-full max-w-md p-4 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-center">
              <p className="font-semibold">You Enter a URL</p>
              <p className="text-sm text-[var(--text-muted)]">
                https://example.com
              </p>
            </div>

            <span className="text-[var(--primary-color)]">↓</span>

            {steps.map((step, index) => (
              <div
                key={step.title}
                className="w-full max-w-md flex flex-col items-center gap-2"
              >
                <div
                  className={`w-full p-4 rounded-lg text-center border ${
                    index === 3 || index === 5
                      ? "bg-[var(--primary-soft)] border-[var(--primary-color)]"
                      : "bg-[var(--bg-tertiary)] border-[var(--border-color)]"
                  }`}
                >
                  <span className="text-xs text-[var(--primary-color)]">
                    STEP 0{index + 1}
                  </span>

                  <h3 className="font-semibold mt-1">{step.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] mt-1">
                    {step.desc}
                  </p>
                </div>

                {index !== steps.length - 1 && (
                  <span className="text-[var(--primary-color)]">↓</span>
                )}
              </div>
            ))}

            <span className="text-[var(--primary-color)]">↓</span>

            <div className="w-full max-w-md p-4 rounded-lg bg-[var(--primary-soft)] border border-[var(--primary-color)] text-center">
              <h3 className="font-semibold">Website Appears!</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                You can now interact with the webpage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Explanation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Step-by-Step Explanation</h2>

        {steps.map((step, index) => (
          <div
            key={step.title}
            className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]"
          >
            <span className="text-xs font-medium text-[var(--primary-color)]">
              STEP 0{index + 1}
            </span>

            <h3 className="text-lg font-semibold mt-1">{step.title}</h3>

            <p className="text-[var(--text-secondary)] mt-2 leading-7">
              {step.desc}
            </p>
          </div>
        ))}
      </section>

      {/* Browser Rendering */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">
          How Does the Browser Display a Website?
        </h2>

        <p className="text-[var(--text-secondary)] leading-7">
          After receiving the response, the browser processes different
          resources to build the webpage.
        </p>

        <div className="grid sm:grid-cols-3 gap-3">
          {[
            ["HTML", "Creates the structure of the webpage."],
            ["CSS", "Controls the design and appearance."],
            ["JavaScript", "Adds functionality and interactivity."],
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

      {/* Important Note */}
      <section className="p-5 rounded-xl bg-[var(--primary-soft)] border border-[var(--border-color)] space-y-2">
        <h2 className="font-semibold text-[var(--primary-color)]">
          Important to Remember
        </h2>

        <p className="text-[var(--text-secondary)] leading-7">
          DNS lookup and connection establishment can sometimes be skipped or
          reused because of caching and existing connections. The exact process
          can vary depending on the browser, network and protocol.
        </p>
      </section>

      {/* Summary */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Quick Summary</h2>

        <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
          <p className="text-[var(--text-secondary)] leading-7">
            URL → DNS Lookup → Connection → HTTP Request → Server Processing →
            HTTP Response → Browser Rendering.
          </p>
        </div>
      </section>
    </div>
  );
};

export default WhatHappensWhenYouEnterAURL005;
