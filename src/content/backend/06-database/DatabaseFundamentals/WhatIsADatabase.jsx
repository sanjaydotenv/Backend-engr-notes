import CodeBlock from "../../../../components/common/CodeBlock";

const WhatIsADatabase = () => {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">

      {/* Header */}
      <div className="space-y-2">
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          DATABASE FUNDAMENTALS / 01
        </p>
        <h1 className="text-3xl font-bold">What Is a Database?</h1>
        <p className="text-base leading-7 text-[var(--text-secondary)]">
          A database is an organized collection of data that allows us to store,
          manage, retrieve, and update information efficiently.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What Is Data?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Data means raw facts or information about something. It can be a name,
          age, email, phone number, price, or anything else.
        </p>

        <CodeBlock code={`Name: Mayur
Age: 19
Email: mayur@example.com
City: Bhopal`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          These values are individual pieces of data. When we organize and store
          them properly, they become easier to manage and use.
        </p>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. What Is a Database?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          A database is a structured place where related data is stored so that
          applications can easily access, manage, and modify it.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-3">
          <p className="font-semibold text-sm">Example: Student Database</p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[400px] text-sm text-left">
              <thead>
                <tr className="border-b border-[var(--border-color)] text-[var(--text-muted)]">
                  <th className="p-3">ID</th>
                  <th className="p-3">Name</th>
                  <th className="p-3">Age</th>
                  <th className="p-3">City</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["1", "Mayur", "19", "Bhopal"],
                  ["2", "Rahul", "20", "Indore"],
                  ["3", "Aman", "21", "Delhi"],
                ].map((student) => (
                  <tr key={student[0]} className="border-b border-[var(--border-color)] last:border-0">
                    {student.map((value) => (
                      <td key={value} className="p-3">{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[var(--text-muted)]">
            Example of student records organized in a database table.
          </p>
        </div>

        <p className="leading-7 text-[var(--text-secondary)]">
          Instead of keeping student information in separate files, we can
          store all student records in one organized database.
        </p>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. What Is a DBMS?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          DBMS stands for <strong>Database Management System</strong>. It is
          software that helps us create, store, retrieve, update, and manage
          databases.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-3">
          <div className="rounded-lg bg-[var(--bg-hover)] p-3 text-center">
            <p className="font-semibold">Application</p>
            <p className="text-xs text-[var(--text-muted)]">React / Node.js</p>
          </div>
          <div className="text-center text-[var(--accent-color)]">↓</div>
          <div className="rounded-lg border border-[var(--accent-color)] bg-[var(--accent-background)] p-3 text-center">
            <p className="font-semibold">DBMS</p>
            <p className="text-xs text-[var(--text-secondary)]">MongoDB / MySQL</p>
          </div>
          <div className="text-center text-[var(--accent-color)]">↓</div>
          <div className="rounded-lg bg-[var(--bg-hover)] p-3 text-center">
            <p className="font-semibold">Database</p>
            <p className="text-xs text-[var(--text-muted)]">Stored Data</p>
          </div>
        </div>

        <p className="leading-7 text-[var(--text-secondary)]">
          The application communicates with the DBMS. The DBMS handles
          database operations and returns the requested data.
        </p>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Why Do We Need Databases?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Imagine an application with thousands of users. We need a reliable
          way to store and manage their information.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ["Data Storage", "Store large amounts of information in an organized way."],
            ["Easy Retrieval", "Find specific records quickly."],
            ["Data Updates", "Insert, update, and delete records easily."],
            ["Data Security", "Control who can access or modify information."],
            ["Data Consistency", "Help keep information accurate and reliable."],
            ["Multiple Users", "Allow multiple users to work with data safely."],
          ].map(([title, description]) => (
            <div key={title} className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-1">
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm leading-6 text-[var(--text-secondary)]">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. How Does an Application Use a Database?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Consider a login system. When a user enters their email and password,
          the backend communicates with the database to find the user's record.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <div className="space-y-2 text-center text-sm">
            {[
              "User enters login details",
              "Frontend sends request to backend",
              "Backend queries the database",
              "Database returns matching user data",
              "Backend sends response to frontend",
            ].map((step, index) => (
              <div key={step}>
                <div className="rounded-lg bg-[var(--bg-hover)] p-3">
                  <span className="mr-2 text-[var(--accent-color)]">{index + 1}.</span>
                  {step}
                </div>
                {index !== 4 && (
                  <div className="py-1 text-[var(--accent-color)]">↓</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <p className="leading-7 text-[var(--text-secondary)]">
          The backend usually communicates with the database using a database
          driver, query language, or ORM/ODM.
        </p>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Examples of Database Systems</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Different database systems are designed to store and manage data in
          different ways.
        </p>

        <div className="space-y-3">
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
            <h3 className="font-semibold">Relational Databases</h3>
            <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">
              Store data in tables containing rows and columns. They commonly
              use SQL to work with data.
            </p>
            <p className="mt-2 text-sm text-[var(--accent-color)]">
              Examples: MySQL, PostgreSQL
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
            <h3 className="font-semibold">Non-Relational Databases</h3>
            <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">
              Store data using different structures, such as documents,
              key-value pairs, or graphs.
            </p>
            <p className="mt-2 text-sm text-[var(--accent-color)]">
              Examples: MongoDB, Redis
            </p>
          </div>
        </div>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Database vs DBMS</h2>
        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[400px] text-sm text-left">
            <thead className="bg-[var(--bg-card)]">
              <tr>
                <th className="p-3">Database</th>
                <th className="p-3">DBMS</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-t border-[var(--border-color)]">
                <td className="p-3">An organized collection of data.</td>
                <td className="p-3">Software used to manage databases.</td>
              </tr>
              <tr className="border-t border-[var(--border-color)]">
                <td className="p-3">Contains stored information.</td>
                <td className="p-3">Provides tools to work with information.</td>
              </tr>
              <tr className="border-t border-[var(--border-color)]">
                <td className="p-3">Example: Student records.</td>
                <td className="p-3">Example: MySQL, MongoDB.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Interview Questions */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold">Interview Questions</h2>
          <p className="mt-1 text-sm text-[var(--text-secondary)]">
            Click a question to reveal its answer.
          </p>
        </div>

        {[
          {
            q: "What is a database?",
            a: "A database is an organized collection of data that allows us to store, retrieve, update, and manage information."
          },
          {
            q: "What is DBMS?",
            a: "DBMS stands for Database Management System. It is software used to create and manage databases."
          },
          {
            q: "What is the difference between data and a database?",
            a: "Data means individual facts or values. A database is an organized collection of related data."
          },
          {
            q: "Why do applications need databases?",
            a: "Applications use databases to store, retrieve, update, and manage user and application information."
          },
          {
            q: "Can an application communicate directly with a database?",
            a: "Yes, technically it can, but backend applications commonly handle database communication to protect credentials and enforce business logic and access control."
          },
          {
            q: "Name some popular database systems.",
            a: "MySQL, PostgreSQL, MongoDB, Redis, and SQLite are popular database systems."
          },
        ].map((item, index) => (
          <details key={index} className="group overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)]">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 font-medium transition-colors hover:bg-[var(--bg-hover)]">
              <span>{index + 1}. {item.q}</span>
              <span className="shrink-0 text-lg text-[var(--accent-color)] transition-transform group-open:rotate-45">+</span>
            </summary>
            <div className="border-t border-[var(--border-color)] px-4 py-4 text-sm leading-7 text-[var(--text-secondary)]">
              {item.a}
            </div>
          </details>
        ))}
      </section>

    </div>
  );
};

export default WhatIsADatabase;