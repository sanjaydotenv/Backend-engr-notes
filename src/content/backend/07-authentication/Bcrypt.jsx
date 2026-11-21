import CodeBlock from "../../../components/common/CodeBlock";

function Bcrypt() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          AUTHENTICATION / 04
        </p>
        <h1 className="mt-2 text-3xl font-bold">bcrypt</h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          bcrypt is a password hashing library used to securely hash passwords
          before storing them in a database and verify them during login.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. Install bcrypt</h2>
        <p className="text-[var(--text-secondary)]">
          Install bcrypt in your Node.js backend project:
        </p>
        <CodeBlock code={`npm install bcrypt`} />

        <p className="text-[var(--text-secondary)]">
          Import it into your file:
        </p>
        <CodeBlock code={`import bcrypt from "bcrypt";`} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. bcrypt.hash()</h2>
        <p className="text-[var(--text-secondary)]">
          The <code>bcrypt.hash()</code> method converts a plain-text password
          into a secure hash.
        </p>

        <CodeBlock code={`import bcrypt from "bcrypt";

const password = "myPassword123";

const hashedPassword = await bcrypt.hash(
  password,
  12
);

console.log(hashedPassword);`} />

        <p className="text-[var(--text-secondary)]">
          Here, <code>12</code> represents the salt rounds (cost factor).
          bcrypt automatically generates a random salt.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. What are Salt Rounds?</h2>
        <p className="text-[var(--text-secondary)]">
          Salt rounds determine how computationally expensive the hashing
          process will be. Increasing the cost makes password guessing more
          expensive, but also makes login and registration slower.
        </p>

        <CodeBlock code={`await bcrypt.hash(password, 10);
await bcrypt.hash(password, 12);
await bcrypt.hash(password, 14);`} />

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-[var(--bg-card)]">
                <th className="border border-[var(--border-color)] p-3 text-left">Rounds</th>
                <th className="border border-[var(--border-color)] p-3 text-left">Cost</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["10", "2¹⁰"],
                ["12", "2¹²"],
                ["14", "2¹⁴"],
              ].map(([rounds, cost]) => (
                <tr key={rounds}>
                  <td className="border border-[var(--border-color)] p-3">{rounds}</td>
                  <td className="border border-[var(--border-color)] p-3">{cost} work factor</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-[var(--text-secondary)]">
          Each additional round approximately doubles the computational work.
          Choose a cost by benchmarking your production environment. A value
          of 12 is a common learning example, not a universal production rule.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. bcrypt.compare()</h2>
        <p className="text-[var(--text-secondary)]">
          During login, we use <code>bcrypt.compare()</code> to check whether
          the entered password matches the stored hash.
        </p>

        <CodeBlock code={`const enteredPassword = "myPassword123";
const storedHash = user.password;

const isMatch = await bcrypt.compare(
  enteredPassword,
  storedHash
);

if (isMatch) {
  console.log("Login successful");
} else {
  console.log("Invalid password");
}`} />

        <p className="text-[var(--text-secondary)]">
          We do not decrypt the hash. bcrypt uses the salt and cost information
          inside the stored hash to perform the comparison.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. bcrypt.hash() vs compare()</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-[var(--bg-card)]">
                <th className="border border-[var(--border-color)] p-3 text-left">Method</th>
                <th className="border border-[var(--border-color)] p-3 text-left">Purpose</th>
                <th className="border border-[var(--border-color)] p-3 text-left">Used During</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-[var(--border-color)] p-3">hash()</td>
                <td className="border border-[var(--border-color)] p-3">Creates password hash</td>
                <td className="border border-[var(--border-color)] p-3">Registration</td>
              </tr>
              <tr>
                <td className="border border-[var(--border-color)] p-3">compare()</td>
                <td className="border border-[var(--border-color)] p-3">Verifies password</td>
                <td className="border border-[var(--border-color)] p-3">Login</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Complete Registration Example</h2>
        <p className="text-[var(--text-secondary)]">
          First, hash the password and then store it in MongoDB.
        </p>

        <CodeBlock code={`import bcrypt from "bcrypt";
import User from "../models/user.model.js";

export const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Generate password hash
    const hashedPassword = await bcrypt.hash(
      password,
      12
    );

    // Save user in MongoDB
    const user = await User.create({
      email,
      password: hashedPassword
    });

    return res.status(201).json({
      message: "Registration successful",
      user: {
        id: user._id,
        email: user.email
      }
    });
  } catch (error) {
    return res.status(500).json({
      message: "Registration failed"
    });
  }
};`} />

        <p className="text-[var(--text-secondary)]">
          Validate input and handle duplicate email errors before returning
          the response in a production application.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Complete Login Example</h2>
        <p className="text-[var(--text-secondary)]">
          Find the user by email, then compare the entered password with the
          stored hash.
        </p>

        <CodeBlock code={`import bcrypt from "bcrypt";
import User from "../models/user.model.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password"
      });
    }

    // Verify password
    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email or password"
      });
    }

    return res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        email: user.email
      }
    });
  } catch (error) {
    return res.status(500).json({
      message: "Login failed"
    });
  }
};`} />

        <p className="text-[var(--text-secondary)]">
          This example only verifies credentials. Session or token creation
          will be covered in the upcoming authentication topics.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Important bcrypt Points</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li><code>bcrypt.hash()</code> creates a password hash.</li>
          <li><code>bcrypt.compare()</code> verifies a password.</li>
          <li>bcrypt automatically generates a random salt.</li>
          <li>The generated hash contains salt and cost information.</li>
          <li>Hashing the same password twice produces different hashes because salts are random.</li>
          <li>bcrypt has a 72-byte password input limit. Do not silently truncate passwords; enforce a suitable limit or choose a suitable alternative such as Argon2id.</li>
          <li>Use asynchronous methods in Node.js to avoid blocking the event loop.</li>
          <li>Never return or log password hashes.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Interview Questions</h2>
        {[
          ["What is bcrypt?", "bcrypt is a password hashing algorithm used to securely store and verify passwords."],
          ["How do you install bcrypt?", "Run npm install bcrypt."],
          ["What does bcrypt.hash() do?", "It generates a secure password hash using a random salt and the configured cost factor."],
          ["What are salt rounds?", "They control the computational cost of bcrypt hashing."],
          ["What does bcrypt.compare() do?", "It checks whether a plain-text password matches a stored bcrypt hash."],
          ["Why do two identical passwords produce different hashes?", "Because bcrypt generates a different random salt for each hash."],
          ["Do we need to store salt separately?", "No. The generated bcrypt hash already contains the salt and cost information."],
          ["Why use asynchronous bcrypt methods?", "They avoid synchronously blocking Node.js while the computationally expensive hash operation runs."],
          ["What is bcrypt's password length limitation?", "bcrypt considers only the first 72 bytes of password input, so applications must handle this limitation safely."],
        ].map(([question, answer], index) => (
          <details key={index} className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
            <summary className="cursor-pointer font-medium">{question}</summary>
            <p className="mt-3 text-sm text-[var(--text-secondary)]">{answer}</p>
          </details>
        ))}
      </section>
    </div>
  );
}

export default Bcrypt;