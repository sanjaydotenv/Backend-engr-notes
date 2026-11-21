import React from "react";

const HostingAndServers0011 = () => {
  return (
    <main className="space-y-10 text-[var(--text-primary)]">
      {/* Header */}
      <header className="space-y-3">
        <span className="text-sm text-[var(--primary-color)] font-medium">
          FUNDAMENTALS / 011
        </span>

        <h1 className="text-4xl font-bold">Hosting and Servers</h1>

        <p className="text-[var(--text-secondary)] text-lg">
          Understand where websites live and how users access them through the
          internet.
        </p>
      </header>

      {/* Introduction */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What is Hosting?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Hosting is a service that makes your website or application available
          on the internet.
        </p>

        <p className="text-[var(--text-secondary)] leading-7">
          When you build a website, its code and files need to be stored
          somewhere so users can access them. Hosting provides the resources to
          store and run your application.
        </p>
      </section>

      {/* Server */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What is a Server?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          A server is a computer or software that provides services or resources
          to other computers (clients).
        </p>

        <p className="text-[var(--text-secondary)] leading-7">
          For example, when you open a website, your browser sends a request to
          a server. The server processes that request and sends back a response.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 space-y-4">
          <h3 className="font-semibold text-center">
            Client-Server Communication
          </h3>

          <div className="flex items-center justify-center gap-3 flex-wrap">
            <div className="rounded-lg bg-[var(--bg-tertiary)] p-4 text-center">
              <div className="text-2xl">💻</div>
              <p className="font-medium">Client</p>
              <small className="text-[var(--text-muted)]">Browser</small>
            </div>

            <div className="text-[var(--primary-color)] text-xl">→</div>

            <div className="rounded-lg border border-[var(--primary-color)] bg-[var(--primary-soft)] p-4 text-center">
              <div className="text-2xl">🖥️</div>
              <p className="font-medium">Server</p>
              <small className="text-[var(--text-muted)]">Application</small>
            </div>

            <div className="text-[var(--primary-color)] text-xl">→</div>

            <div className="rounded-lg bg-[var(--bg-tertiary)] p-4 text-center">
              <div className="text-2xl">📦</div>
              <p className="font-medium">Response</p>
              <small className="text-[var(--text-muted)]">Website Data</small>
            </div>
          </div>
        </div>
      </section>

      {/* Hosting vs Server */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Hosting vs Server</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-left text-sm">
            <thead className="bg-[var(--bg-tertiary)]">
              <tr>
                <th className="p-4">Server</th>
                <th className="p-4">Hosting</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr>
                <td className="p-4 border-t border-[var(--border-color)]">
                  A computer or software that provides services.
                </td>
                <td className="p-4 border-t border-[var(--border-color)]">
                  A service that provides resources to run your application.
                </td>
              </tr>
              <tr>
                <td className="p-4 border-t border-[var(--border-color)]">
                  Handles requests and responses.
                </td>
                <td className="p-4 border-t border-[var(--border-color)]">
                  Provides infrastructure to store and run applications.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* How hosting works */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">How Hosting Works</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Suppose you build a website and deploy it to a hosting provider. Here
          is what happens when someone visits your website:
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 space-y-3">
          {[
            "You upload your application to a hosting provider.",
            "The provider runs your application on its infrastructure.",
            "A user opens your website using its domain name.",
            "The request reaches your server.",
            "The server processes the request and sends a response.",
          ].map((step, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--primary-soft)] text-[var(--primary-color)] font-semibold text-sm">
                {index + 1}
              </span>
              <p className="text-[var(--text-secondary)]">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Types of hosting */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Types of Hosting</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 space-y-2">
            <h3 className="font-semibold text-lg">Shared Hosting</h3>
            <p className="text-[var(--text-secondary)] text-sm leading-6">
              Multiple websites share the resources of one server. It is
              generally affordable and suitable for small websites.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 space-y-2">
            <h3 className="font-semibold text-lg">VPS Hosting</h3>
            <p className="text-[var(--text-secondary)] text-sm leading-6">
              One physical server is divided into isolated virtual servers. Each
              VPS gets its own allocated resources.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 space-y-2">
            <h3 className="font-semibold text-lg">Dedicated Hosting</h3>
            <p className="text-[var(--text-secondary)] text-sm leading-6">
              You get an entire physical server for your application. It
              provides greater control over server resources.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 space-y-2">
            <h3 className="font-semibold text-lg">Cloud Hosting</h3>
            <p className="text-[var(--text-secondary)] text-sm leading-6">
              Your application uses resources from a cloud infrastructure that
              can scale according to demand.
            </p>
          </div>
        </div>
      </section>

      {/* Static and Dynamic */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Static vs Dynamic Hosting</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 space-y-2">
            <h3 className="font-semibold">Static Hosting</h3>
            <p className="text-sm text-[var(--text-secondary)] leading-6">
              Serves pre-built files such as HTML, CSS, JavaScript and images.
              Commonly used for portfolios and frontend applications.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 space-y-2">
            <h3 className="font-semibold">Dynamic Hosting</h3>
            <p className="text-sm text-[var(--text-secondary)] leading-6">
              Runs backend code, processes requests and can communicate with
              databases to generate dynamic responses.
            </p>
          </div>
        </div>
      </section>

      {/* Providers */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Popular Hosting Providers</h2>

        <div className="flex flex-wrap gap-3">
          {[
            "AWS",
            "Google Cloud",
            "Microsoft Azure",
            "DigitalOcean",
            "Vercel",
            "Render",
          ].map((name) => (
            <span
              key={name}
              className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] px-4 py-2 text-sm text-[var(--text-secondary)]"
            >
              {name}
            </span>
          ))}
        </div>
      </section>

      {/* Important */}
      <section className="rounded-xl border border-[var(--primary-color)] bg-[var(--primary-soft)] p-5 space-y-2">
        <h3 className="font-semibold text-[var(--primary-color)]">
          Important to Remember
        </h3>

        <p className="text-[var(--text-secondary)] leading-7">
          Hosting provides the infrastructure, while a server handles requests
          and provides responses. A server can be your own computer or a machine
          running in a data center.
        </p>
      </section>
    </main>
  );
};

export default HostingAndServers0011;
