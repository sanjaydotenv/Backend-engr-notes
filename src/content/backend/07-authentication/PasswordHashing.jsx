import CodeBlock from "../../../components/common/CodeBlock";

function PasswordHashing() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          AUTHENTICATION / 03
        </p>
        <h1 className="mt-2 text-3xl font-bold">Password Hashing</h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          Password hashing converts a password into a one-way hash before
          storing it in the database. It protects original passwords even
          if the database is exposed.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What is Password Hashing?</h2>
        <p className="text-[var(--text-secondary)]">
          Hashing is a one-way process. It converts input data into a fixed
          format called a hash. Unlike encryption, a secure password hash
          cannot be decrypted back into the original password.
        </p>

        <CodeBlock code={`Original Password
       |
       v
 Password Hashing
       |
       v
   Password Hash
       |
       v
 Store in Database`} />

        <p className="text-[var(--text-secondary)]">
          Example:
        </p>
        <CodeBlock code={`Password: myPassword123

Hash:
$2b$12$exampleHashedPasswordValue...

// Database stores the hash,
// not the original password.`} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Why Do We Need Hashing?</h2>
        <p className="text-[var(--text-secondary)]">
          Imagine your MongoDB database gets hacked. If passwords are stored
          as plain text, attackers can immediately read them.
        </p>

        <CodeBlock code={`// ❌ Plain-text storage
{
  email: "user@gmail.com",
  password: "mypassword123"
}

// ✅ Hashed password storage
{
  email: "user@gmail.com",
  password: "$2b$12$hashedPassword..."
}`} />

        <p className="text-[var(--text-secondary)]">
          Hashing makes stolen password databases much harder to exploit.
          However, weak passwords can still be guessed using offline attacks.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Hashing vs Encryption</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-[var(--bg-card)]">
                <th className="border border-[var(--border-color)] p-3 text-left">Hashing</th>
                <th className="border border-[var(--border-color)] p-3 text-left">Encryption</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["One-way process", "Two-way process"],
                ["Cannot normally be reversed", "Can be decrypted with a key"],
                ["No decryption key", "Requires an encryption key"],
                ["Used for password storage", "Used for protecting recoverable data"],
              ].map(([a, b]) => (
                <tr key={a}>
                  <td className="border border-[var(--border-color)] p-3">{a}</td>
                  <td className="border border-[var(--border-color)] p-3">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. What is Salt?</h2>
        <p className="text-[var(--text-secondary)]">
          A salt is a unique random value added to a password during hashing.
          It ensures that identical passwords produce different hashes.
        </p>

        <CodeBlock code={`User A Password: hello123
User B Password: hello123

Without Salt:
Hash A = abc123
Hash B = abc123

With Unique Salts:
Salt A + Password -> Hash A
Salt B + Password -> Hash B

Hash A !== Hash B`} />

        <p className="text-[var(--text-secondary)]">
          Modern password hashing libraries like bcrypt and Argon2 generate
          and store salts as part of the resulting hash. You do not need to
          manually generate a salt when using their standard APIs.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Password Hashing in Node.js</h2>
        <p className="text-[var(--text-secondary)]">
          Node.js provides the built-in crypto module, but its fast hash
          algorithms like SHA-256 are not suitable for password storage.
          Use a dedicated password hashing algorithm such as bcrypt or
          Argon2id.
        </p>

        <p className="font-medium">Install bcrypt:</p>
        <CodeBlock code={`npm install bcrypt`} />

        <p className="font-medium">Create a password hash:</p>
        <CodeBlock code={`import bcrypt from "bcrypt";

const password = "myPassword123";

// Generate hash
const saltRounds = 12;

const hashedPassword = await bcrypt.hash(
  password,
  saltRounds
);

console.log(hashedPassword);`} />

        <p className="text-[var(--text-secondary)]">
          The salt rounds parameter controls bcrypt's computational cost.
          Higher cost takes more time to calculate. Benchmark it according
          to your server's performance requirements.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Verify Password During Login</h2>
        <p className="text-[var(--text-secondary)]">
          During login, we do not decrypt the stored hash. Instead, bcrypt
          compares the entered password with the stored hash.
        </p>

        <CodeBlock code={`import bcrypt from "bcrypt";

// Password entered by user
const enteredPassword = "myPassword123";

// Hash retrieved from MongoDB
const storedHash = user.password;

// Compare password with stored hash
const isMatch = await bcrypt.compare(
  enteredPassword,
  storedHash
);

if (!isMatch) {
  throw new Error("Invalid email or password");
}

console.log("Password verified successfully");`} />

        <p className="text-[var(--text-secondary)]">
          bcrypt automatically reads the salt and cost information from the
          stored hash while comparing passwords.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Complete Registration Example</h2>
        <p className="text-[var(--text-secondary)]">
          Here is a simplified Express registration example showing where
          hashing happens before saving the user.
        </p>

        <CodeBlock code={`import bcrypt from "bcrypt";
import User from "../models/user.model.js";

export const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Hash password before storing
    const hashedPassword = await bcrypt.hash(
      password,
      12
    );

    const user = await User.create({
      email,
      password: hashedPassword
    });

    // Never return password hash
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
          In a real application, also validate the input, handle duplicate
          emails, and enforce request size and password length limits before
          hashing.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Important Points</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Never store original passwords in MongoDB.</li>
          <li>Never use MD5 or SHA-1 for password storage.</li>
          <li>SHA-256 is also too fast for password hashing.</li>
          <li>Use bcrypt or Argon2id for password hashing.</li>
          <li>Each password should have a unique random salt.</li>
          <li>Use <code>bcrypt.hash()</code> during registration.</li>
          <li>Use <code>bcrypt.compare()</code> during login.</li>
          <li>Never send password hashes in API responses.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Interview Questions</h2>
        {[
          ["What is password hashing?", "It is a one-way process that converts a password into a hash for secure storage."],
          ["Can a password hash be decrypted?", "No. Secure password hashing is designed to be one-way."],
          ["What is a salt?", "A unique random value added during hashing to prevent identical passwords from producing identical hashes."],
          ["Why is SHA-256 not recommended for passwords?", "It is too fast, making large-scale password guessing easier."],
          ["What is bcrypt?", "A password hashing algorithm designed to make password guessing computationally expensive."],
          ["What does bcrypt.compare() do?", "It verifies an entered password against a previously stored bcrypt hash."],
          ["Do we need to store salt separately with bcrypt?", "No. The bcrypt hash already contains the salt and cost information."],
          ["What is the difference between hashing and encryption?", "Hashing is one-way, while encryption is reversible using the correct key."],
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

export default PasswordHashing;