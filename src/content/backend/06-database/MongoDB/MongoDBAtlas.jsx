import CodeBlock from "../../../../components/common/CodeBlock";

const MongoDBAtlas = () => {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <div className="space-y-2">
        <p className="text-sm font-semibold tracking-wider text-[var(--primary-color)]">
          MONGODB / 04
        </p>
        <h1 className="text-3xl font-bold">MongoDB Atlas</h1>
        <p className="text-base leading-7 text-[var(--text-secondary)]">
          MongoDB Atlas is a fully managed cloud database service that allows
          developers to host, manage, and access MongoDB databases over the
          internet.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What is MongoDB Atlas?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB Atlas is the cloud-based platform provided by MongoDB. Instead
          of installing and managing a MongoDB server on our own computer, we
          can create a database deployment in the cloud.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          Atlas manages infrastructure-related tasks such as deployment,
          monitoring, backups, and scaling options.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-2">
            <h3 className="font-semibold">Local MongoDB</h3>
            <CodeBlock
              language="text"
              code={`Your Computer
     |
     |-- MongoDB Server
     |
     |-- Database
     |
     |-- Collections`}
            />
            <p className="text-sm text-[var(--text-secondary)]">
              Database runs on your local machine.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-2">
            <h3 className="font-semibold">MongoDB Atlas</h3>
            <CodeBlock
              language="text"
              code={`Cloud Infrastructure
        |
        |-- MongoDB Deployment
        |
        |-- Database
        |
        |-- Collections`}
            />
            <p className="text-sm text-[var(--text-secondary)]">
              Database runs on cloud infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Why Use MongoDB Atlas?</h2>

        <div className="grid gap-3 sm:grid-cols-2">
          {[
            [
              "Cloud Hosting",
              "Host databases without managing your own database server.",
            ],
            [
              "Scalability",
              "Scale database resources according to application requirements.",
            ],
            [
              "Automatic Backups",
              "Supports automated backup options depending on the deployment.",
            ],
            [
              "Security",
              "Provides authentication, network access controls, and encryption.",
            ],
            ["Monitoring", "Monitor database performance and resource usage."],
            [
              "High Availability",
              "Supports highly available deployments using replica sets.",
            ],
          ].map(([title, description]) => (
            <div
              key={title}
              className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-1"
            >
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm leading-6 text-[var(--text-secondary)]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. What is a Cluster?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          A cluster is a MongoDB database deployment running on cloud
          infrastructure. It provides the environment where our databases and
          collections are stored.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          When creating a deployment in Atlas, we configure options such as
          cloud provider, region, and deployment type.
        </p>

        <CodeBlock
          language="text"
          code={`MongoDB Atlas
      |
      |-- Project
             |
             |-- Cluster / Deployment
                     |
                     |-- Database: myApp
                     |       |
                     |       |-- users
                     |       |-- products
                     |
                     |-- Database: blogApp
                             |
                             |-- posts
                             |-- comments`}
        />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          A cluster can contain multiple databases, and each database can
          contain multiple collections.
        </p>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          4. Create a MongoDB Atlas Account
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          We can create an Atlas account using the official MongoDB website.
        </p>

        <a
          href="https://www.mongodb.com/cloud/atlas/register"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-[var(--primary-soft)] px-4 py-3 text-sm font-semibold text-[var(--primary-color)] transition-colors hover:bg-[var(--primary-color)] hover:text-white"
        >
          Create MongoDB Atlas Account ↗
        </a>

        <h3 className="font-semibold">Steps</h3>

        {[
          "Open the MongoDB Atlas registration page.",
          "Create an account using Google or email.",
          "Complete the account setup.",
          "Create an organization and project if prompted.",
          "Open your project dashboard.",
        ].map((step, index) => (
          <div key={step} className="flex gap-3 text-sm leading-6">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--primary-soft)] text-xs font-semibold text-[var(--primary-color)]">
              {index + 1}
            </span>
            <p className="text-[var(--text-secondary)]">{step}</p>
          </div>
        ))}
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          5. Create a Cluster / Deployment
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          After creating your project, create a database deployment from the
          Atlas dashboard.
        </p>

        <h3 className="font-semibold">Steps</h3>

        {[
          "Open your Atlas project.",
          "Go to the Database section.",
          "Select Create or Build a Database.",
          "Choose an available deployment option, such as the Free tier if eligible.",
          "Select a cloud provider and region.",
          "Give your deployment a name.",
          "Click Create Deployment.",
        ].map((step, index) => (
          <div key={step} className="flex gap-3 text-sm leading-6">
            <span className="font-semibold text-[var(--primary-color)]">
              {index + 1}.
            </span>
            <p className="text-[var(--text-secondary)]">{step}</p>
          </div>
        ))}

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-2">
          <h3 className="font-semibold">Important</h3>
          <p className="text-sm leading-6 text-[var(--text-secondary)]">
            Atlas offers different deployment options. Available features,
            resource limits, and pricing depend on the selected deployment.
          </p>
        </div>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Configure Database Access</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Before connecting our backend to Atlas, we need to configure database
          authentication.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          Atlas uses database users to authenticate applications that want to
          access the database.
        </p>

        <h3 className="font-semibold">Create a Database User</h3>

        {[
          "Open Database & Network Access or Database Access.",
          "Go to Database Users.",
          "Click Add New Database User.",
          "Enter a username and strong password.",
          "Assign the required database permissions.",
          "Save the database user.",
        ].map((step, index) => (
          <div key={step} className="flex gap-3 text-sm leading-6">
            <span className="font-semibold text-[var(--primary-color)]">
              {index + 1}.
            </span>
            <p className="text-[var(--text-secondary)]">{step}</p>
          </div>
        ))}

        <CodeBlock
          language="text"
          code={`Database User
      |
      |-- Username: myAppUser
      |
      |-- Password: ********
      |
      |-- Role: Read and Write access`}
        />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          For application development, assign only the permissions that the
          application actually needs.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-2">
          <h3 className="font-semibold">Atlas User vs Database User</h3>

          <p className="text-sm leading-6 text-[var(--text-secondary)]">
            <strong className="text-[var(--text-primary)]">Atlas User:</strong>{" "}
            Used to log in to and manage the Atlas platform.
          </p>

          <p className="text-sm leading-6 text-[var(--text-secondary)]">
            <strong className="text-[var(--text-primary)]">
              Database User:
            </strong>{" "}
            Used by applications and clients to authenticate with MongoDB
            databases.
          </p>
        </div>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          7. Configure Network Access (IP Access List)
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB Atlas does not allow connections from every IP address by
          default.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          We must add the IP address of the machine or server that needs to
          connect to our cluster.
        </p>

        <h3 className="font-semibold">Steps</h3>

        {[
          "Open Network Access or IP Access List.",
          "Click Add IP Address.",
          "Select Add Current IP Address.",
          "Add an optional description.",
          "Confirm the IP address.",
        ].map((step, index) => (
          <div key={step} className="flex gap-3 text-sm leading-6">
            <span className="font-semibold text-[var(--primary-color)]">
              {index + 1}.
            </span>
            <p className="text-[var(--text-secondary)]">{step}</p>
          </div>
        ))}

        <CodeBlock
          language="text"
          code={`IP Access List
      |
      |-- 192.168.1.10
      |       |
      |       |-- Allowed IP Address
      |
      |-- Other IP Addresses
              |
              |-- Not allowed unless added`}
        />

        <div className="rounded-xl border border-[var(--primary-color)] bg-[var(--primary-soft)] p-4 space-y-2">
          <h3 className="font-semibold text-[var(--primary-color)]">
            Security Warning
          </h3>
          <p className="text-sm leading-6 text-[var(--text-secondary)]">
            Adding 0.0.0.0/0 allows connections from any IP address. Avoid this
            configuration for production databases unless there is a carefully
            designed security requirement. Prefer restricting access to trusted
            IP addresses.
          </p>
        </div>
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          8. Get MongoDB Connection String
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          After creating a deployment and configuring database access, we need a
          connection string to connect our application to Atlas.
        </p>

        <h3 className="font-semibold">Steps</h3>

        {[
          "Open your Atlas cluster.",
          "Click Connect.",
          "Select Drivers.",
          "Choose Node.js as the driver.",
          "Select the appropriate driver version.",
          "Copy the connection string.",
        ].map((step, index) => (
          <div key={step} className="flex gap-3 text-sm leading-6">
            <span className="font-semibold text-[var(--primary-color)]">
              {index + 1}.
            </span>
            <p className="text-[var(--text-secondary)]">{step}</p>
          </div>
        ))}

        <h3 className="font-semibold">Example Connection String</h3>

        <CodeBlock
          language="text"
          code={`mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/myApp?retryWrites=true&w=majority`}
        />

        <p className="font-semibold">Understanding the Connection String</p>

        <div className="space-y-2">
          {[
            [
              "mongodb+srv://",
              "MongoDB connection protocol using DNS SRV records.",
            ],
            ["<username>", "Database username."],
            ["<password>", "Database user's password."],
            ["cluster0.xxxxx.mongodb.net", "Atlas cluster hostname."],
            ["/myApp", "Database name."],
            ["retryWrites=true", "Enables retryable writes where supported."],
            [
              "w=majority",
              "Requests acknowledgement from a majority of replica set voting members.",
            ],
          ].map(([title, description]) => (
            <div
              key={title}
              className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-3"
            >
              <code className="text-sm font-semibold text-[var(--primary-color)]">
                {title}
              </code>
              <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">
                {description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Replace the placeholders with your actual database credentials. If
          your password contains special URI characters, encode them properly
          before using the connection string.
        </p>
      </section>

      {/* 9 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          9. Connect MongoDB Atlas with Node.js
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Now let's connect our Node.js backend to MongoDB Atlas using the
          official MongoDB Node.js driver.
        </p>

        <h3 className="font-semibold">Step 1: Install Dependencies</h3>

        <CodeBlock language="bash" code={`npm install mongodb dotenv`} />

        <h3 className="font-semibold">Step 2: Create a .env File</h3>

        <CodeBlock
          language="bash"
          code={`MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/myApp`}
        />

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          Keep your actual connection string inside the environment file instead
          of hardcoding it in your source code.
        </p>

        <h3 className="font-semibold">Step 3: Create a Database Connection</h3>

        <CodeBlock
          language="javascript"
          code={`import { MongoClient } from "mongodb";
import "dotenv/config";

const client = new MongoClient(process.env.MONGODB_URI);

export const connectDB = async () => {
  try {
    await client.connect();

    console.log("MongoDB Atlas Connected Successfully");

    const db = client.db("myApp");

    return db;
  } catch (error) {
    console.error("MongoDB Connection Failed:", error.message);
    throw error;
  }
};`}
        />

        <h3 className="font-semibold">Step 4: Use the Connection</h3>

        <CodeBlock
          language="javascript"
          code={`import { connectDB } from "./config/database.js";

const startServer = async () => {
  try {
    const db = await connectDB();

    const users = db.collection("users");

    const result = await users.insertOne({
      name: "Mayur",
      email: "mayur@example.com"
    });

    console.log("User Created:", result.insertedId);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

startServer();`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-2">
          <h3 className="font-semibold">Important</h3>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-[var(--text-secondary)]">
            <li>Add your .env file to .gitignore.</li>
            <li>Never expose database credentials in frontend code.</li>
            <li>Never commit your actual connection string to GitHub.</li>
            <li>Use a database user with minimum required permissions.</li>
          </ul>
        </div>
      </section>

      {/* 10 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          10. MongoDB Local vs MongoDB Atlas
        </h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[450px] text-left text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">Local MongoDB</th>
                <th className="p-3">MongoDB Atlas</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              {[
                ["Runs on your machine.", "Runs on cloud infrastructure."],
                [
                  "You manage the server.",
                  "MongoDB manages the cloud platform.",
                ],
                ["Uses local resources.", "Uses cloud resources."],
                [
                  "Can work without internet for local access.",
                  "Requires network connectivity.",
                ],
                [
                  "Connection often uses localhost.",
                  "Connection uses an Atlas hostname.",
                ],
              ].map(([local, atlas]) => (
                <tr
                  key={local}
                  className="border-t border-[var(--border-color)]"
                >
                  <td className="p-3">{local}</td>
                  <td className="p-3">{atlas}</td>
                </tr>
              ))}
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
            q: "What is MongoDB Atlas?",
            a: "MongoDB Atlas is a fully managed cloud database service used to host and manage MongoDB databases.",
          },
          {
            q: "What is the difference between MongoDB and MongoDB Atlas?",
            a: "MongoDB is the database system, whereas MongoDB Atlas is a managed cloud platform for deploying and managing MongoDB databases.",
          },
          {
            q: "What is a cluster in MongoDB Atlas?",
            a: "A cluster is a MongoDB database deployment running on cloud infrastructure.",
          },
          {
            q: "What is a database user in MongoDB Atlas?",
            a: "A database user is an account used by applications or clients to authenticate and access MongoDB databases.",
          },
          {
            q: "What is an IP Access List?",
            a: "It is a network security feature that controls which IP addresses or CIDR ranges are allowed to connect to an Atlas deployment.",
          },
          {
            q: "What is the difference between an Atlas user and a database user?",
            a: "An Atlas user manages the Atlas platform, while a database user authenticates to access databases hosted on Atlas.",
          },
          {
            q: "What is mongodb+srv?",
            a: "It is a MongoDB connection string format that uses DNS SRV records to discover the servers belonging to a deployment.",
          },
          {
            q: "Why do we use environment variables for MongoDB connection strings?",
            a: "Environment variables help keep sensitive credentials outside source code and make configuration easier across different environments.",
          },
          {
            q: "Can we connect MongoDB Atlas with Node.js?",
            a: "Yes. We can use the official MongoDB Node.js driver or Mongoose ODM.",
          },
          {
            q: "What does 0.0.0.0/0 mean in Atlas IP Access List?",
            a: "It allows connections from any IPv4 address. It can expose the database to security risks and should be avoided for production.",
          },
          {
            q: "Does MongoDB Atlas support automatic backups?",
            a: "Yes. Atlas provides backup capabilities depending on the deployment type and configuration.",
          },
        ].map((item, index) => (
          <details
            key={index}
            className="group overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)]"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 font-medium transition-colors hover:bg-[var(--bg-tertiary)]">
              <span>
                {index + 1}. {item.q}
              </span>
              <span className="shrink-0 text-lg text-[var(--primary-color)] transition-transform group-open:rotate-45">
                +
              </span>
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

export default MongoDBAtlas;
