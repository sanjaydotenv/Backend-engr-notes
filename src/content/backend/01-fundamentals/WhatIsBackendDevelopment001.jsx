import React from "react";

const WhatIsBackendDevelopment001 = () => {
  const responsibilities = [
    {
      title: "Server",
      description:
        "Receives requests from the frontend, processes them, and sends back responses.",
    },
    {
      title: "Database",
      description:
        "Saves information like user accounts, products, orders, and other application data.",
    },
    {
      title: "Business Logic",
      description:
        "Contains the rules of an application. For example, checking product stock before accepting an order.",
    },
    {
      title: "Authentication",
      description:
        "Checks who is trying to log in and verifies their identity.",
    },
    {
      title: "APIs",
      description: "Help the frontend and backend communicate with each other.",
    },
    {
      title: "Security",
      description:
        "Protects user information and makes sure that only allowed users can access certain data.",
    },
  ];

  return (
    <article className="max-w-4xl mx-auto space-y-12 text-[var(--text-primary)]">
      {/* =====================================
      INTRODUCTION
  ===================================== */}

      <section className="space-y-5">
        <span className="inline-flex text-sm font-medium tracking-wide text-[var(--primary-color)]">
          BACKEND FUNDAMENTALS / 001
        </span>

        <h1 className="text-4xl font-bold text-[var(--text-primary)]">
          What is Backend Development?
        </h1>

        <p className="text-lg leading-8 text-[var(--text-secondary)]">
          Have you ever logged into a website, created an account, or ordered
          something online? You only see a few buttons and pages, but a lot
          happens behind the scenes when you use them.
        </p>

        <p className="leading-8 text-[var(--text-secondary)]">
          For example, when you log in, the website checks your email and
          password. When you place an order, it saves your order details. These
          things are handled by the backend.
        </p>
      </section>

      {/* =====================================
      DEFINITION
  ===================================== */}

      <section className="space-y-5">
        <h2 className="text-2xl font-semibold text-[var(--text-primary)]">
          1. What is Backend Development?
        </h2>

        <p className="leading-8 text-[var(--text-secondary)]">
          Backend is the part of a website or application that works behind the
          scenes. Users usually cannot see it, but it handles most of the work
          needed to make an application function.
        </p>

        <p className="leading-8 text-[var(--text-secondary)]">
          Backend development means writing code that handles user data, login
          systems, database operations, and other important tasks.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-6">
          <h3 className="font-semibold mb-3 text-[var(--primary-color)]">
            In simple words
          </h3>

          <p className="leading-7 text-[var(--text-secondary)]">
            The frontend is what users see and interact with. The backend
            handles the work that happens behind it.
          </p>
        </div>
      </section>

      {/* =====================================
      REAL WORLD EXAMPLE
  ===================================== */}

      <section className="space-y-5">
        <h2 className="text-2xl font-semibold text-[var(--text-primary)]">
          2. Let's Understand With an Example
        </h2>

        <p className="leading-8 text-[var(--text-secondary)]">
          Imagine you are using an online shopping website. You open the
          website, select a mobile phone, add it to your cart, and place an
          order.
        </p>

        <p className="leading-8 text-[var(--text-secondary)]">
          Now, let's see what happens behind the scenes:
        </p>

        <ul className="list-disc pl-6 space-y-3 leading-7 text-[var(--text-secondary)] marker:text-[var(--primary-color)]">
          <li>The website sends a request to the backend.</li>

          <li>The backend checks if the selected product is available.</li>

          <li>It gets the product details from the database.</li>

          <li>It checks the price and processes your order.</li>

          <li>It saves your order details in the database.</li>

          <li>Finally, it sends a response to the website.</li>
        </ul>

        <p className="leading-8 text-[var(--text-secondary)]">
          You only click a few buttons, but the backend does a lot of work to
          complete your order.
        </p>
      </section>

      {/* =====================================
      BACKEND RESPONSIBILITIES
  ===================================== */}

      <section className="space-y-5">
        <h2 className="text-2xl font-semibold text-[var(--text-primary)]">
          3. What Does a Backend Developer Do?
        </h2>

        <p className="leading-8 text-[var(--text-secondary)]">
          A backend developer writes code to handle the work happening behind a
          website or application. Some of the main things they work on are:
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {responsibilities.map((item, index) => (
            <div
              key={index}
              className="
            group
            rounded-xl
            border
            border-[var(--border-color)]
            bg-[var(--bg-secondary)]
            p-5
            hover:border-[var(--primary-color)]
            hover:bg-[var(--bg-tertiary)]
            transition-all
            duration-300
          "
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="
              flex
              items-center
              justify-center
              w-8
              h-8
              rounded-lg
              bg-[var(--primary-soft)]
              text-[var(--primary-color)]
              text-sm
              font-semibold
            "
                >
                  0{index + 1}
                </span>

                <h3 className="font-semibold text-[var(--text-primary)]">
                  {item.title}
                </h3>
              </div>

              <p className="text-sm leading-7 text-[var(--text-secondary)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================
      HOW BACKEND WORKS
  ===================================== */}

      <section className="space-y-5">
        <h2 className="text-2xl font-semibold text-[var(--text-primary)]">
          4. How Does a Backend Work?
        </h2>

        <p className="leading-8 text-[var(--text-secondary)]">
          Let's understand how the frontend and backend work together. Whenever
          you do something on a website, the frontend can send a request to the
          backend. The backend does the required work and sends a response.
        </p>

        {/* Diagram */}

        <div
          className="
      rounded-2xl
      border
      border-[var(--border-color)]
      bg-[var(--bg-secondary)]
      p-6
      sm:p-8
      space-y-4
    "
        >
          {/* Client */}

          <div
            className="
        text-center
        rounded-xl
        border
        border-[var(--border-color)]
        bg-[var(--bg-tertiary)]
        p-5
      "
          >
            <strong className="text-[var(--text-primary)]">
              Client / Frontend
            </strong>

            <p className="text-sm mt-2 text-[var(--text-secondary)]">
              The user clicks a button or performs an action.
            </p>
          </div>

          {/* Request */}

          <div className="flex flex-col items-center gap-1">
            <span className="text-[var(--primary-color)] text-xl">↓</span>

            <span className="text-sm font-medium text-[var(--primary-color)]">
              HTTP Request
            </span>
          </div>

          {/* Backend */}

          <div
            className="
        text-center
        rounded-xl
        border
        border-[var(--primary-color)]
        bg-[var(--primary-soft)]
        p-5
      "
          >
            <strong className="text-[var(--text-primary)]">
              Backend / Server
            </strong>

            <p className="text-sm mt-2 text-[var(--text-secondary)]">
              Receives the request and decides what needs to be done.
            </p>
          </div>

          {/* Database Query */}

          <div className="flex flex-col items-center gap-1">
            <span className="text-[var(--primary-color)] text-xl">↕</span>

            <span className="text-sm font-medium text-[var(--primary-color)]">
              Database Query
            </span>
          </div>

          {/* Database */}

          <div
            className="
        text-center
        rounded-xl
        border
        border-[var(--border-color)]
        bg-[var(--bg-tertiary)]
        p-5
      "
          >
            <strong className="text-[var(--text-primary)]">Database</strong>

            <p className="text-sm mt-2 text-[var(--text-secondary)]">
              Saves or provides the required information.
            </p>
          </div>

          {/* Response */}

          <div className="flex flex-col items-center gap-1">
            <span className="text-[var(--primary-color)] text-xl">↑</span>

            <span className="text-sm font-medium text-[var(--primary-color)]">
              HTTP Response
            </span>
          </div>

          {/* Client Response */}

          <div
            className="
        text-center
        rounded-xl
        border
        border-[var(--border-color)]
        bg-[var(--bg-tertiary)]
        p-5
      "
          >
            <strong className="text-[var(--text-primary)]">
              Client / Frontend
            </strong>

            <p className="text-sm mt-2 text-[var(--text-secondary)]">
              Receives the response and shows the result to the user.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================
      TECHNOLOGIES
  ===================================== */}

      <section className="space-y-5">
        <h2 className="text-2xl font-semibold text-[var(--text-primary)]">
          5. Technologies Used in Backend Development
        </h2>

        <p className="leading-8 text-[var(--text-secondary)]">
          Backend developers use different languages and tools to build
          applications. Here are some common examples:
        </p>

        <ul className="list-disc pl-6 space-y-3 leading-7 text-[var(--text-secondary)] marker:text-[var(--primary-color)]">
          <li>
            <strong className="text-[var(--text-primary)]">Languages:</strong>{" "}
            JavaScript, Python, Java, PHP, Go.
          </li>

          <li>
            <strong className="text-[var(--text-primary)]">Runtime:</strong>{" "}
            Node.js.
          </li>

          <li>
            <strong className="text-[var(--text-primary)]">Frameworks:</strong>{" "}
            Express.js, NestJS, Django, Spring Boot.
          </li>

          <li>
            <strong className="text-[var(--text-primary)]">Databases:</strong>{" "}
            MongoDB, PostgreSQL, MySQL.
          </li>

          <li>
            <strong className="text-[var(--text-primary)]">Tools:</strong> Git,
            Docker, Postman, Redis.
          </li>
        </ul>
      </section>

      {/* =====================================
      SUMMARY
  ===================================== */}

      <section className="space-y-5">
        <h2 className="text-2xl font-semibold text-[var(--text-primary)]">
          6. What Did We Learn?
        </h2>

        <div
          className="
      rounded-xl
      border
      border-[var(--border-color)]
      bg-[var(--bg-secondary)]
      p-6
    "
        >
          <ul className="space-y-3 leading-7 text-[var(--text-secondary)]">
            {[
              "Backend works behind the scenes of an application.",
              "It handles data and application logic.",
              "It communicates with databases.",
              "It helps the frontend get and send data through APIs.",
              "It handles login systems and protects user data.",
            ].map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-[var(--primary-color)] font-bold">✓</span>

                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
};

export default WhatIsBackendDevelopment001;
