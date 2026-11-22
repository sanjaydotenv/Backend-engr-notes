import CodeBlock from "../../../components/common/CodeBlock";

function DependencySecurity() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          BACKEND SECURITY / 18
        </p>
        <h1 className="mt-2 text-3xl font-bold">Dependency Security</h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          Dependency Security means protecting an application from security
          vulnerabilities present in third-party packages, libraries, and
          dependencies used in the project.
        </p>
      </div>

      {/* 1. What are Dependencies? */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What are Dependencies?</h2>
        <p className="text-[var(--text-secondary)]">
          Dependencies are external packages that we install to use existing
          functionality instead of writing everything ourselves.
        </p>

        <CodeBlock
          code={`npm install express mongoose bcryptjs jsonwebtoken`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          These packages may also depend on other packages called
          transitive dependencies.
        </p>
      </section>

      {/* 2. Security Risks */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Common Security Risks</h2>

        <div className="space-y-3">
          {[
            {
              name: "Vulnerable Packages",
              desc: "A package may contain known security vulnerabilities.",
            },
            {
              name: "Outdated Dependencies",
              desc: "Old package versions may miss important security fixes.",
            },
            {
              name: "Malicious Packages",
              desc: "A package may contain harmful code that steals data or executes unwanted operations.",
            },
            {
              name: "Dependency Confusion",
              desc: "Attackers may exploit package naming or registry configuration to make a project install an unintended package.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-lg border border-[var(--border-color)] p-4"
            >
              <h3 className="font-semibold">{item.name}</h3>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Audit Dependencies */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Check Vulnerabilities with npm audit</h2>
        <p className="text-[var(--text-secondary)]">
          npm provides an audit command to check installed dependencies
          against known security advisories.
        </p>

        <CodeBlock
          code={`# Check vulnerabilities
npm audit

# Show detailed vulnerability information
npm audit --json

# Try to fix compatible vulnerabilities
npm audit fix`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Review the proposed changes before applying them. Avoid using
          <code> npm audit fix --force </code> without checking because it
          may install breaking major versions.
        </p>
      </section>

      {/* 4. Check Outdated Packages */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Check Outdated Packages</h2>

        <CodeBlock
          code={`# Check outdated packages
npm outdated

# Update packages within allowed version ranges
npm update`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Test your application after updating dependencies to make sure
          existing functionality still works.
        </p>
      </section>

      {/* 5. package-lock.json */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Why package-lock.json?</h2>
        <p className="text-[var(--text-secondary)]">
          package-lock.json records the exact dependency versions and
          dependency tree used by the project.
        </p>

        <CodeBlock
          code={`# Install exact locked dependency versions
npm ci`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Commit package-lock.json to version control. npm ci provides
          reproducible installations in CI/CD environments.
        </p>
      </section>

      {/* 6. Best Practices */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Dependency Security Best Practices</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>Install packages only from trusted sources.</li>
          <li>Check package maintenance and reputation before installing.</li>
          <li>Run npm audit regularly.</li>
          <li>Keep dependencies updated with proper testing.</li>
          <li>Commit package-lock.json.</li>
          <li>Avoid unnecessary dependencies.</li>
          <li>Review package permissions and installation scripts.</li>
          <li>Use automated dependency scanning in CI/CD pipelines.</li>
        </ul>
      </section>

      {/* 7. Interview Questions */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Interview Questions</h2>

        {[
          {
            q: "What is Dependency Security?",
            a: "It is the practice of identifying and preventing security risks in third-party packages used by an application.",
          },
          {
            q: "What is npm audit?",
            a: "It checks project dependencies against known security vulnerability advisories.",
          },
          {
            q: "What is a transitive dependency?",
            a: "A package that is installed because another dependency requires it.",
          },
          {
            q: "Why is package-lock.json important?",
            a: "It records exact dependency versions and helps create reproducible installations.",
          },
          {
            q: "What is npm ci?",
            a: "It installs dependencies from the lockfile and is commonly used in CI/CD environments.",
          },
          {
            q: "Why should we avoid npm audit fix --force?",
            a: "It may introduce breaking changes by installing versions outside the allowed dependency ranges.",
          },
        ].map((item, index) => (
          <details
            key={index}
            className="group rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4"
          >
            <summary className="cursor-pointer font-medium">
              {index + 1}. {item.q}
            </summary>
            <p className="mt-3 text-sm text-[var(--text-secondary)]">
              {item.a}
            </p>
          </details>
        ))}
      </section>
    </div>
  );
}

export default DependencySecurity;