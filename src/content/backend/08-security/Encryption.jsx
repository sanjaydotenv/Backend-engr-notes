import CodeBlock from "../../../components/common/CodeBlock";

function Encryption() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          BACKEND SECURITY / 16
        </p>
        <h1 className="mt-2 text-3xl font-bold">Encryption</h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          Encryption is the process of converting readable data (Plaintext)
          into an unreadable format (Ciphertext) using an encryption
          algorithm and a key. Only someone with the correct key can
          decrypt the data.
        </p>
      </div>

      {/* 1. How Encryption Works */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. How Encryption Works</h2>

        <CodeBlock
          code={`Plaintext
    |
    v
Encryption + Key
    |
    v
Ciphertext (Unreadable Data)
    |
    v
Decryption + Correct Key
    |
    v
Original Plaintext`}
        />

        <CodeBlock
          code={`Original:  Hello World
Encrypted:  U2FsdGVkX1... (Example)
Decrypted:  Hello World`}
        />
      </section>

      {/* 2. Types */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Types of Encryption</h2>

        <div className="rounded-lg border border-[var(--border-color)] p-4 space-y-2">
          <h3 className="font-semibold">Symmetric Encryption</h3>
          <p className="text-sm text-[var(--text-secondary)]">
            Uses the same secret key for both encryption and decryption.
          </p>
          <CodeBlock
            code={`Same Secret Key
      |
      v
Encrypt + Decrypt`}
          />
          <p className="text-sm text-[var(--text-secondary)]">
            Example: AES-256-GCM.
          </p>
        </div>

        <div className="rounded-lg border border-[var(--border-color)] p-4 space-y-2">
          <h3 className="font-semibold">Asymmetric Encryption</h3>
          <p className="text-sm text-[var(--text-secondary)]">
            Uses a pair of keys: Public Key and Private Key.
          </p>
          <CodeBlock
            code={`Public Key  -> Encrypt
Private Key -> Decrypt`}
          />
          <p className="text-sm text-[var(--text-secondary)]">
            Example: RSA and ECC-based encryption.
          </p>
        </div>
      </section>

      {/* 3. Encryption vs Hashing */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Encryption vs Hashing</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="p-3 text-left">Encryption</th>
                <th className="p-3 text-left">Hashing</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr>
                <td className="p-3">Reversible with the correct key.</td>
                <td className="p-3">Designed to be one-way.</td>
              </tr>
              <tr>
                <td className="p-3">Uses encryption keys.</td>
                <td className="p-3">Uses a hash algorithm.</td>
              </tr>
              <tr>
                <td className="p-3">Used for protecting data that must be recovered.</td>
                <td className="p-3">Used for integrity checks and password verification.</td>
              </tr>
              <tr>
                <td className="p-3">Example: AES.</td>
                <td className="p-3">Example: SHA-256, bcrypt.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. AES Encryption in Node.js */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. AES Encryption in Node.js</h2>
        <p className="text-[var(--text-secondary)]">
          Node.js provides the built-in <code>crypto</code> module.
          We can use AES-256-GCM to encrypt and decrypt sensitive data.
        </p>

        <CodeBlock
          code={`import {
  randomBytes,
  createCipheriv,
  createDecipheriv,
} from "node:crypto";

const algorithm = "aes-256-gcm";

// Keep this key secret. Store it in a secure environment.
const key = randomBytes(32);

function encrypt(text) {
  const iv = randomBytes(12);

  const cipher = createCipheriv(algorithm, key, iv);

  const encrypted = Buffer.concat([
    cipher.update(text, "utf8"),
    cipher.final(),
  ]);

  const authTag = cipher.getAuthTag();

  return {
    iv: iv.toString("hex"),
    encryptedData: encrypted.toString("hex"),
    authTag: authTag.toString("hex"),
  };
}

function decrypt(data) {
  const decipher = createDecipheriv(
    algorithm,
    key,
    Buffer.from(data.iv, "hex")
  );

  decipher.setAuthTag(
    Buffer.from(data.authTag, "hex")
  );

  const decrypted = Buffer.concat([
    decipher.update(
      Buffer.from(data.encryptedData, "hex")
    ),
    decipher.final(),
  ]);

  return decrypted.toString("utf8");
}

const encrypted = encrypt("Hello World");

console.log("Encrypted:", encrypted);
console.log("Decrypted:", decrypt(encrypted));`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          AES-256-GCM provides confidentiality and authentication.
          The IV and authentication tag must be stored with the ciphertext.
          In production, load a securely generated 32-byte key from a
          secrets manager instead of generating a new key every time.
        </p>
      </section>

      {/* 5. Where Encryption is Used */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Where is Encryption Used?</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>Protecting sensitive personal information.</li>
          <li>Encrypting confidential database fields.</li>
          <li>Securing communication through HTTPS/TLS.</li>
          <li>Protecting files and backups.</li>
          <li>Securing API communication.</li>
        </ul>
      </section>

      {/* 6. Important Security Rules */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Important Security Rules</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>Never hardcode encryption keys in source code.</li>
          <li>Use trusted algorithms such as AES-256-GCM.</li>
          <li>Generate a unique, unpredictable IV for every encryption operation with the same key.</li>
          <li>Never reuse an IV with the same GCM key.</li>
          <li>Keep encryption keys separate from encrypted data.</li>
          <li>Use secure key storage and key rotation.</li>
          <li>Never store user passwords using reversible encryption; use password hashing algorithms such as bcrypt or Argon2.</li>
        </ul>
      </section>

      {/* 7. Interview Questions */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Interview Questions</h2>

        {[
          {
            q: "What is Encryption?",
            a: "Encryption converts readable data into unreadable ciphertext using an algorithm and a key.",
          },
          {
            q: "What is Symmetric Encryption?",
            a: "It uses the same secret key for encryption and decryption.",
          },
          {
            q: "What is Asymmetric Encryption?",
            a: "It uses a public and private key pair for cryptographic operations.",
          },
          {
            q: "What is AES?",
            a: "AES is a symmetric encryption algorithm used to protect sensitive data.",
          },
          {
            q: "What is an IV?",
            a: "An Initialization Vector is a value used by an encryption algorithm. GCM requires a unique IV for every encryption under the same key.",
          },
          {
            q: "Can we encrypt passwords?",
            a: "Passwords should generally be hashed using bcrypt or Argon2, not encrypted, because the original password should not need to be recovered.",
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

export default Encryption;