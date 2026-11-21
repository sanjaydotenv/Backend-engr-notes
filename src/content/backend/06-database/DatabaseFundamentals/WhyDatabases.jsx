import CodeBlock from "../../../../components/common/CodeBlock";

const WhyDatabases = () => {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">

      {/* Header */}
      <div className="space-y-2">
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          DATABASE FUNDAMENTALS / 02
        </p>
        <h1 className="text-3xl font-bold">Why Do We Need Databases?</h1>
        <p className="text-base leading-7 text-[var(--text-secondary)]">
          Databases help applications store, organize, retrieve, and manage
          large amounts of data safely and efficiently.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. The Problem Without a Database</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Imagine you are building an application with thousands of users.
          You need to store their names, emails, passwords, orders, and other
          information.
        </p>
        <p className="leading-7 text-[var(--text-secondary)]">
          You could store this information in normal files, but managing
          thousands or millions of records in files becomes difficult.
        </p>

        <CodeBlock code={`// users.json

[
  {
    "name": "Mayur",
    "email": "mayur@example.com"
  },
  {
    "name": "Rahul",
    "email": "rahul@example.com"
  }
]`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          Files are useful for many tasks, but they do not automatically
          provide all the features required by a large multi-user application.
        </p>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Problems That Databases Solve</h2>

        <div className="space-y-3">
          {[
            {
              title: "Data Organization",
              description: "Databases organize related information into tables, documents, collections, or other structures. This makes data easier to understand and manage."
            },
            {
              title: "Fast Data Retrieval",
              description: "Databases provide queries and indexes to find specific records efficiently, even when the amount of data becomes large."
            },
            {
              title: "Easy Data Updates",
              description: "We can insert, update, and delete records without manually editing large files."
            },
            {
              title: "Data Security",
              description: "Database systems provide authentication, permissions, and access controls to protect stored information."
            },
            {
              title: "Data Consistency",
              description: "Constraints and transactions help maintain accurate and valid data."
            },
            {
              title: "Concurrent Access",
              description: "Multiple users can read and modify data at the same time while the database manages conflicts and consistency."
            },
            {
              title: "Backup and Recovery",
              description: "Database systems provide backup and recovery mechanisms to help restore data after failures."
            },
          ].map((item, index) => (
            <div key={index} className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
              <h3 className="font-semibold">
                <span className="mr-2 text-[var(--accent-color)]">{index + 1}.</span>
                {item.title}
              </h3>
              <p className="text-sm leading-7 text-[var(--text-secondary)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. File System vs Database</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          A file system stores information in files and folders. A database
          management system provides specialized features to manage structured
          data.
        </p>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[480px] text-sm text-left">
            <thead className="bg-[var(--bg-card)]">
              <tr>
                <th className="p-3">Feature</th>
                <th className="p-3">File System</th>
                <th className="p-3">Database</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              {[
                ["Organization", "Files and folders", "Tables, documents, etc."],
                ["Searching", "Often requires custom code", "Queries and indexes"],
                ["Concurrent Access", "Must be handled by application", "Built-in concurrency mechanisms"],
                ["Security", "File permissions", "Database permissions and roles"],
                ["Transactions", "Must be implemented separately", "Transaction support"],
                ["Relationships", "Managed manually", "Can be managed using database features"],
              ].map((row) => (
                <tr key={row[0]} className="border-t border-[var(--border-color)]">
                  {row.map((cell) => (
                    <td key={cell} className="p-3">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          Note: File systems can also support permissions, locking, and other
          features. The main difference is that database systems provide
          specialized data-management capabilities.
        </p>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Real-World Example: Banking Application</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Imagine a banking application where a user transfers ₹1,000 from
          Account A to Account B.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex-1 rounded-lg bg-[var(--bg-hover)] p-3 text-center">
              <p className="text-xs text-[var(--text-muted)]">Account A</p>
              <p className="text-xl font-bold">₹5,000</p>
            </div>
            <span className="text-[var(--accent-color)]">→</span>
            <div className="flex-1 rounded-lg bg-[var(--bg-hover)] p-3 text-center">
              <p className="text-xs text-[var(--text-muted)]">Account B</p>
              <p className="text-xl font-bold">₹2,000</p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-[var(--text-secondary)]">After a successful transfer:</p>
            <div className="flex justify-between rounded-lg bg-[var(--bg-hover)] p-3">
              <span>Account A</span>
              <strong>₹4,000</strong>
            </div>
            <div className="flex justify-between rounded-lg bg-[var(--bg-hover)] p-3">
              <span>Account B</span>
              <strong>₹3,000</strong>
            </div>
          </div>
        </div>

        <p className="leading-7 text-[var(--text-secondary)]">
          Both account updates must succeed together. If one update succeeds
          but the other fails, the money records become incorrect.
        </p>
        <p className="leading-7 text-[var(--text-secondary)]">
          Databases provide <strong>transactions</strong> to handle such
          operations reliably. We will study transactions and ACID properties
          in detail later.
        </p>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. How Backend Applications Use Databases</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          In backend development, the server usually communicates with a
          database to perform data operations.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <div className="space-y-2 text-center text-sm">
            {[
              ["Client", "User sends a request"],
              ["Backend Server", "Validates request and applies business logic"],
              ["Database", "Stores or retrieves information"],
              ["Backend Server", "Processes the database result"],
              ["Client", "Receives the response"],
            ].map(([title, description], index) => (
              <div key={title}>
                <div className="rounded-lg bg-[var(--bg-hover)] p-3">
                  <p className="font-semibold">{title}</p>
                  <p className="mt-1 text-xs text-[var(--text-muted)]">{description}</p>
                </div>
                {index !== 4 && (
                  <div className="py-1 text-[var(--accent-color)]">↓</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <p className="leading-7 text-[var(--text-secondary)]">
          For example, when a user registers, the backend validates the input
          and asks the database to save the new user record.
        </p>

        <CodeBlock code={`// Example using Mongoose

const user = await User.create({
  name: "Mayur",
  email: "mayur@example.com",
});

console.log(user);`} />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          This example assumes that a Mongoose model named <code>User</code>
          has already been created and the database connection is established.
        </p>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. When Should We Use a Database?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Databases are useful whenever an application needs persistent,
          organized, and manageable data.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ["E-commerce", "Users, products, orders, and payments."],
            ["Social Media", "Profiles, posts, comments, and messages."],
            ["Banking", "Accounts, transactions, and balances."],
            ["Education", "Students, courses, marks, and attendance."],
            ["Productivity Apps", "Tasks, plans, reminders, and user settings."],
            ["Booking Systems", "Customers, reservations, and availability."],
          ].map(([title, description]) => (
            <div key={title} className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Important Points to Remember</h2>
        <div className="rounded-xl border border-[var(--accent-color)] bg-[var(--accent-background)] p-4">
          <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-[var(--text-secondary)]">
            <li>Databases make data easier to organize and manage.</li>
            <li>Indexes help retrieve records efficiently.</li>
            <li>Transactions help maintain reliable data updates.</li>
            <li>Access controls help protect sensitive information.</li>
            <li>Backups help recover data after failures.</li>
            <li>Databases are useful for applications with persistent data.</li>
          </ul>
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
            q: "Why do we need databases?",
            a: "We need databases to store, organize, retrieve, update, and protect application data efficiently."
          },
          {
            q: "What problems can occur when storing application data only in files?",
            a: "Searching, concurrent updates, data consistency, security, and recovery can become difficult as the application grows."
          },
          {
            q: "What is the difference between a file system and a database?",
            a: "A file system manages files and folders, while a DBMS provides specialized features such as queries, indexes, transactions, and data constraints."
          },
          {
            q: "How do databases handle multiple users?",
            a: "They use concurrency-control mechanisms to coordinate simultaneous operations and help prevent conflicting updates."
          },
          {
            q: "What is a database transaction?",
            a: "A transaction is a group of database operations treated as one logical unit. It either commits successfully or is rolled back."
          },
          {
            q: "Why are databases important in backend development?",
            a: "Backend applications use databases to persist user information, business records, and other application data."
          },
          {
            q: "Can we build an application without a database?",
            a: "Yes. Small or static applications may not need one. But applications requiring persistent and frequently updated data usually benefit from databases."
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

export default WhyDatabases;