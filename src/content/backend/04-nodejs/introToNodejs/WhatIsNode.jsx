import React from "react";

const WhatIsNode = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-10 text-[var(--text-primary)]">
      {/* Header */}
      <header className="space-y-3">
        <span className="text-sm text-[var(--accent-color)] font-medium">
          NODE.JS / 01
        </span>

        <h1 className="text-4xl font-bold">What is Node.js?</h1>

        <p className="text-lg text-[var(--text-muted)] leading-relaxed">
          Understand what Node.js is, why it exists, and how it allows
          JavaScript to run outside the browser.
        </p>
      </header>

      {/* Introduction */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Introduction</h2>

        <p className="text-[var(--text-secondary)] leading-8">
          JavaScript is a programming language that was originally created to
          make websites interactive. For example, when you click a button, open
          a dropdown, submit a form, or display new content without refreshing a
          page, JavaScript can handle these actions.
        </p>

        <p className="text-[var(--text-secondary)] leading-8">
          But initially, JavaScript was mainly used inside web browsers.
          Developers could not directly use browser JavaScript to perform
          backend operations such as reading files, creating servers, or
          communicating directly with the operating system.
        </p>

        <p className="text-[var(--text-secondary)] leading-8">
          This is where Node.js comes in. Node.js allows developers to execute
          JavaScript outside the browser. Now we can use JavaScript to build
          backend applications, APIs, command-line tools, and many other types
          of software.
        </p>
      </section>

      {/* Definition */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">What is Node.js?</h2>

        <p className="text-[var(--text-secondary)] leading-8">
          Node.js is an open-source, cross-platform JavaScript runtime
          environment that allows us to execute JavaScript code outside a web
          browser.
        </p>

        <p className="text-[var(--text-secondary)] leading-8">
          Let's understand these words one by one.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              title: "Open Source",
              description:
                "Its source code is publicly available. Developers can use it, study it, and contribute to its development.",
            },
            {
              title: "Cross Platform",
              description:
                "Node.js can run on different operating systems, including Windows, macOS, and Linux.",
            },
            {
              title: "JavaScript",
              description:
                "It allows us to write backend application logic using JavaScript.",
            },
            {
              title: "Runtime Environment",
              description:
                "It provides the tools and APIs required to execute JavaScript programs.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-5 space-y-2"
            >
              <h3 className="font-semibold text-[var(--accent-color)]">
                {item.title}
              </h3>

              <p className="text-[var(--text-secondary)] text-sm leading-7">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Node Exists */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Why Was Node.js Created?</h2>

        <p className="text-[var(--text-secondary)] leading-8">
          Before Node.js, JavaScript was mainly executed inside browsers. If
          developers wanted to build a backend application, they generally
          needed another programming language such as PHP, Python, Java, or
          Ruby.
        </p>

        <p className="text-[var(--text-secondary)] leading-8">
          Node.js changed this by allowing JavaScript to run outside the
          browser. Developers could now use JavaScript for both frontend and
          backend development.
        </p>

        <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-5 space-y-4">
          <h3 className="font-semibold">Before Node.js</h3>

          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="bg-[var(--bg-hover)] rounded-lg p-4">
              <p className="font-semibold">Frontend</p>
              <p className="text-sm text-[var(--text-muted)] mt-1">
                JavaScript
              </p>
            </div>

            <div className="bg-[var(--bg-hover)] rounded-lg p-4">
              <p className="font-semibold">Backend</p>
              <p className="text-sm text-[var(--text-muted)] mt-1">
                PHP / Python / Java
              </p>
            </div>
          </div>

          <h3 className="font-semibold">With Node.js</h3>

          <div className="bg-[var(--accent-background)] border border-[var(--accent-color)] rounded-lg p-4 text-center">
            <p className="font-semibold">JavaScript</p>
            <p className="text-sm text-[var(--text-secondary)] mt-1">
              Frontend + Backend
            </p>
          </div>
        </div>
      </section>

      {/* Runtime Environment */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          What is a Runtime Environment?
        </h2>

        <p className="text-[var(--text-secondary)] leading-8">
          A runtime environment is the environment in which a program runs. It
          provides the necessary tools, APIs, and resources that a program needs
          during execution.
        </p>

        <p className="text-[var(--text-secondary)] leading-8">
          Let's understand this with JavaScript. When JavaScript runs inside a
          browser, the browser provides some additional features that JavaScript
          can use.
        </p>

        <p className="text-[var(--text-secondary)] leading-8">
          For example, JavaScript can use document to access HTML elements,
          window to interact with the browser window, and fetch to make network
          requests.
        </p>

        <p className="text-[var(--text-secondary)] leading-8">
          Node.js provides a different set of features. It allows JavaScript to
          interact with the filesystem, create servers, access environment
          variables, and perform other backend tasks.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-5 space-y-3">
            <h3 className="font-semibold">Browser Environment</h3>

            <pre className="bg-[var(--bg-hover)] rounded-lg p-4 text-sm overflow-x-auto">
              <code>{`window


document
localStorage
fetch()`}</code>{" "}
            </pre>

            <p className="text-sm text-[var(--text-muted)]">
              Browser provides APIs to interact with web pages and browser
              features.
            </p>
          </div>

          <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-5 space-y-3">
            <h3 className="font-semibold">Node.js Environment</h3>

            <pre className="bg-[var(--bg-hover)] rounded-lg p-4 text-sm overflow-x-auto">
              <code>{`process


fs
http
path`}</code>{" "}
            </pre>

            <p className="text-sm text-[var(--text-muted)]">
              Node.js provides APIs to work with files, servers, processes, and
              the operating system.
            </p>
          </div>
        </div>
      </section>

      {/* JavaScript vs V8 vs Node */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">JavaScript vs V8 vs Node.js</h2>

        <p className="text-[var(--text-secondary)] leading-8">
          Beginners often confuse JavaScript, V8, and Node.js. These three are
          connected, but they are not the same thing.
        </p>

        <div className="space-y-4">
          <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-5 space-y-2">
            <h3 className="font-semibold text-[var(--accent-color)]">
              1. JavaScript
            </h3>

            <p className="text-[var(--text-secondary)] leading-7">
              JavaScript is a programming language. We write instructions using
              JavaScript syntax to tell a computer what to do.
            </p>
          </div>

          <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-5 space-y-2">
            <h3 className="font-semibold text-[var(--accent-color)]">
              2. V8 Engine
            </h3>

            <p className="text-[var(--text-secondary)] leading-7">
              V8 is a JavaScript engine developed by Google. It takes JavaScript
              code and executes it by compiling it into machine code.
            </p>
          </div>

          <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-5 space-y-2">
            <h3 className="font-semibold text-[var(--accent-color)]">
              3. Node.js
            </h3>

            <p className="text-[var(--text-secondary)] leading-7">
              Node.js is a runtime environment. It uses V8 to execute JavaScript
              and provides additional features such as filesystem access,
              networking, and asynchronous operations.
            </p>
          </div>
        </div>

        <div className="bg-[var(--accent-background)] border border-[var(--accent-color)] rounded-xl p-5">
          <p className="font-semibold">Remember:</p>

          <p className="text-[var(--text-secondary)] leading-7 mt-2">
            JavaScript is the language, V8 is the engine that executes
            JavaScript, and Node.js provides the runtime environment around that
            engine.
          </p>
        </div>
      </section>

      {/* How Node Works */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          How Does Node.js Execute JavaScript?
        </h2>

        <p className="text-[var(--text-secondary)] leading-8">
          When we run a JavaScript file using Node.js, Node.js loads the code
          and the V8 engine executes the JavaScript.
        </p>

        <p className="text-[var(--text-secondary)] leading-8">
          But Node.js does more than just execute JavaScript. It also provides
          APIs that allow our program to perform operations such as reading
          files and creating network connections.
        </p>

        <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-5 space-y-3">
          <h3 className="font-semibold">Simplified Execution Flow</h3>

          <div className="flex flex-col items-center gap-2 text-center">
            {[
              "JavaScript Code",
              "Node.js Runtime",
              "V8 JavaScript Engine",
              "JavaScript Execution",
            ].map((item, index) => (
              <React.Fragment key={item}>
                <div className="w-full max-w-sm bg-[var(--bg-hover)] border border-[var(--border-color)] rounded-lg p-3">
                  {item}
                </div>

                {index !== 3 && (
                  <span className="text-[var(--accent-color)] text-xl">↓</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <p className="text-xs text-[var(--text-muted)] leading-6">
            Simplified diagram for understanding. Actual Node.js execution
            involves several runtime components working together.
          </p>
        </div>
      </section>

      {/* First Program */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Your First Node.js Program</h2>

        <p className="text-[var(--text-secondary)] leading-8">
          Let's create a small JavaScript file and execute it using Node.js.
        </p>

        <p className="text-[var(--text-secondary)] leading-8">
          First, create a file named hello.js.
        </p>

        <pre className="bg-[var(--bg-hover)] border border-[var(--border-color)] rounded-xl p-5 overflow-x-auto text-sm">
          <code>{`console.log("Hello from Node.js!");`}</code>
        </pre>

        <p className="text-[var(--text-secondary)] leading-8">
          Now open your terminal in the same folder and execute:
        </p>

        <pre className="bg-[var(--bg-hover)] border border-[var(--border-color)] rounded-xl p-5 overflow-x-auto text-sm">
          <code>{`node hello.js`}</code>
        </pre>

        <p className="text-[var(--text-secondary)] leading-8">Output:</p>

        <pre className="bg-[var(--bg-hover)] border border-[var(--border-color)] rounded-xl p-5 text-sm">
          <code>{`Hello from Node.js!`}</code>
        </pre>

        <p className="text-[var(--text-secondary)] leading-8">
          That's it! We just executed JavaScript outside a browser using
          Node.js.
        </p>
      </section>

      {/* What can we build */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          What Can We Build with Node.js?
        </h2>

        <p className="text-[var(--text-secondary)] leading-8">
          Because Node.js can execute JavaScript outside the browser, we can use
          it to build different kinds of applications.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            [
              "REST APIs",
              "Create backend endpoints that allow frontend applications to communicate with servers.",
            ],
            [
              "Chat Applications",
              "Build applications where users can send and receive messages in real time.",
            ],
            [
              "Authentication Systems",
              "Handle user registration, login, sessions, and authorization.",
            ],
            [
              "File Operations",
              "Read, write, update, and manage files on the server.",
            ],
            [
              "Microservices",
              "Build independent backend services that communicate with each other.",
            ],
            [
              "Command-Line Tools",
              "Create programs that users can execute directly from a terminal.",
            ],
          ].map(([title, description]) => (
            <div
              key={title}
              className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-5 space-y-2"
            >
              <h3 className="font-semibold text-[var(--accent-color)]">
                {title}
              </h3>

              <p className="text-sm text-[var(--text-secondary)] leading-7">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Key Takeaways</h2>

        <ul className="space-y-3 text-[var(--text-secondary)] leading-7 list-disc pl-6">
          <li>Node.js allows JavaScript to run outside the browser.</li>
          <li>It is an open-source and cross-platform runtime environment.</li>
          <li>It uses Google's V8 engine to execute JavaScript.</li>
          <li>
            It provides additional APIs for filesystem, networking, and
            operating system operations.
          </li>
          <li>
            JavaScript is a language, V8 is an engine, and Node.js is a runtime
            environment.
          </li>
          <li>
            Node.js is widely used for building backend applications, APIs, and
            real-time systems.
          </li>
        </ul>
      </section>

      {/* Next Topic */}
      <section className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-5 space-y-2">
        <span className="text-sm text-[var(--accent-color)] font-medium">
          NEXT TOPIC
        </span>

        <h3 className="text-xl font-semibold">Why Node.js?</h3>

        <p className="text-[var(--text-secondary)] leading-7">
          Now that we understand what Node.js is, let's explore why developers
          choose it for backend development and how its features help build
          modern applications.
        </p>
      </section>
    </div>
  );
};

export default WhatIsNode;
