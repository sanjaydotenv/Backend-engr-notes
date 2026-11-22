import CodeBlock from "../../../components/common/CodeBlock";

function XSS() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          BACKEND SECURITY / 06
        </p>
        <h1 className="mt-2 text-3xl font-bold">Cross-Site Scripting (XSS)</h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          XSS is a security vulnerability in which an attacker injects
          malicious JavaScript into a web page. When another user opens that
          page, the script may execute in their browser.
        </p>
      </div>

      {/* 1. How XSS Works */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. How XSS Works</h2>
        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-2 text-sm">
          <div className="rounded-lg border border-[var(--border-color)] p-3 text-center">
            Attacker submits malicious input
          </div>
          <div className="text-center text-[var(--accent-color)]">↓</div>
          <div className="rounded-lg border border-[var(--border-color)] p-3 text-center">
            Application stores or displays the input unsafely
          </div>
          <div className="text-center text-[var(--accent-color)]">↓</div>
          <div className="rounded-lg border border-[var(--border-color)] p-3 text-center">
            Another user opens the affected page
          </div>
          <div className="text-center text-[var(--accent-color)]">↓</div>
          <div className="rounded-lg border border-[var(--border-color)] p-3 text-center">
            Malicious JavaScript executes in the browser
          </div>
        </div>
      </section>

      {/* 2. Types of XSS */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Types of XSS</h2>

        <div className="space-y-3">
          <div className="rounded-lg border border-[var(--border-color)] p-4">
            <h3 className="font-semibold">1. Stored XSS</h3>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              Malicious input is stored in the database and executes whenever
              another user views the affected content.
            </p>
          </div>

          <div className="rounded-lg border border-[var(--border-color)] p-4">
            <h3 className="font-semibold">2. Reflected XSS</h3>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              Malicious input comes through a request, such as a URL parameter,
              and is immediately included in the response without safe handling.
            </p>
          </div>

          <div className="rounded-lg border border-[var(--border-color)] p-4">
            <h3 className="font-semibold">3. DOM-Based XSS</h3>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              Client-side JavaScript uses untrusted input in an unsafe DOM
              operation, causing malicious code to execute.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Example */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Example of XSS</h2>
        <p className="text-[var(--text-secondary)]">
          Consider an application that displays user input using
          <code> innerHTML</code>:
        </p>

        <CodeBlock
          code={`const userInput = location.search;

document.getElementById("output").innerHTML =
  userInput;`}
        />

        <p className="text-[var(--text-secondary)]">
          If untrusted input is interpreted as HTML, an attacker may inject
          elements or scripts that execute in the page.
        </p>
      </section>

      {/* 4. Prevention */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. How to Prevent XSS</h2>

        <h3 className="font-semibold">React</h3>
        <p className="text-[var(--text-secondary)]">
          React escapes text values by default, so render user content as
          normal text instead of injecting raw HTML.
        </p>

        <CodeBlock
          code={`// Safe: React escapes text
function Profile({ username }) {
  return <h2>{username}</h2>;
}`}
        />

        <p className="text-[var(--text-secondary)]">
          Avoid using <code>dangerouslySetInnerHTML</code> with untrusted HTML.
        </p>

        <h3 className="font-semibold">Backend and Browser Security</h3>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>Use context-aware output encoding.</li>
          <li>Sanitize HTML when users are allowed to submit rich text.</li>
          <li>Avoid unsafe DOM methods like <code>innerHTML</code>.</li>
          <li>Use Content Security Policy (CSP) as an additional defense.</li>
          <li>Use HTTP-only cookies to reduce JavaScript access to session cookies.</li>
        </ul>
      </section>

      {/* 5. Interview Questions */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Interview Questions</h2>

        {[
          {
            q: "What is XSS?",
            a: "XSS is a vulnerability that allows attackers to execute malicious scripts in another user's browser.",
          },
          {
            q: "What are the three main types of XSS?",
            a: "Stored XSS, Reflected XSS, and DOM-Based XSS.",
          },
          {
            q: "What is Stored XSS?",
            a: "Malicious content is stored by the application and executes when users view that content.",
          },
          {
            q: "How does React help prevent XSS?",
            a: "React escapes values rendered through normal JSX text expressions by default.",
          },
          {
            q: "What is dangerouslySetInnerHTML?",
            a: "It is a React property used to insert raw HTML into the DOM. Untrusted HTML must be sanitized before using it.",
          },
          {
            q: "Does HTTP-only cookie prevent XSS?",
            a: "No. It prevents JavaScript from reading that cookie, but XSS can still perform actions through the user's browser.",
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

export default XSS;