import React from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const Crypto = () => {
  return (
    <div className="space-y-10 text-[var(--text-primary)]">
      {/* Introduction */}
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Node.js Crypto Module</h1>

        <p className="leading-7 text-[var(--text-secondary)]">
          The Crypto module is a built-in Node.js module that provides
          cryptographic functionality such as hashing, encryption, decryption,
          digital signatures, and secure random number generation.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          Backend applications use cryptography to protect sensitive
          information, verify data integrity, generate secure tokens, and secure
          communication.
        </p>

        <CodeBlock code={`const crypto = require("node:crypto");`} />
      </section>

      {/* Core Concepts */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          1. Important Cryptography Concepts
        </h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Before using the Crypto module, understand these four concepts. They
          solve different security problems.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "Hashing",
              description:
                "Converts input data into a fixed-length hash. It is designed to be one-way.",
              example: "Password verification, data integrity.",
            },
            {
              title: "Encryption",
              description:
                "Converts readable data into ciphertext that can be decrypted using the required key.",
              example: "Protecting sensitive stored data.",
            },
            {
              title: "HMAC",
              description:
                "Uses a secret key and a hash function to verify data authenticity and integrity.",
              example: "Webhook signature verification.",
            },
            {
              title: "Random Generation",
              description: "Generates unpredictable cryptographic values.",
              example: "Tokens, reset links, encryption IVs.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4"
            >
              <h3 className="font-semibold text-[var(--accent-color)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                {item.description}
              </p>
              <p className="mt-3 text-xs text-[var(--text-muted)]">
                Common use: {item.example}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Hashing */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">2. Hashing with createHash()</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Hashing converts input data into a fixed-length output called a hash
          or digest. The same input with the same algorithm produces the same
          hash.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          Hashing is designed to be one-way. You cannot normally recover the
          original input from its hash.
        </p>

        <CodeBlock
          code={`const crypto = require("node:crypto");

const hash = crypto
  .createHash("sha256")
  .update("Hello World")
  .digest("hex");

console.log(hash);`}
        />

        <h3 className="text-lg font-semibold">How it works</h3>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 text-center">
          <p className="font-medium">Original Data</p>
          <p className="my-2 text-[var(--accent-color)]">↓</p>
          <p className="font-medium">SHA-256 Algorithm</p>
          <p className="my-2 text-[var(--accent-color)]">↓</p>
          <p className="font-medium">Fixed-length Hash</p>
        </div>

        <h3 className="text-lg font-semibold">Common Hashing Algorithms</h3>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="p-3 text-left">Algorithm</th>
                <th className="p-3 text-left">Usage</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["SHA-256", "General-purpose hashing and integrity checks"],
                ["SHA-512", "General-purpose hashing with a larger digest"],
                ["SHA-1", "Legacy algorithm; avoid for security-sensitive use"],
                ["MD5", "Legacy algorithm; not suitable for security"],
              ].map(([name, usage]) => (
                <tr
                  key={name}
                  className="border-t border-[var(--border-color)]"
                >
                  <td className="p-3 font-medium text-[var(--accent-color)]">
                    {name}
                  </td>
                  <td className="p-3 text-[var(--text-secondary)]">{usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <p className="font-semibold text-[var(--accent-color)]">Important</p>
          <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
            SHA-256 is useful for general hashing, but it should not be used
            alone to store user passwords. Passwords require specialized,
            deliberately slow password-hashing algorithms.
          </p>
        </div>
      </section>

      {/* Password Hashing */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          3. Password Hashing with scrypt()
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Passwords should never be stored as plain text. Instead, store a
          password hash generated using a password-hashing algorithm.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          Node.js provides scrypt(), a password-based key derivation function
          designed to make brute-force attacks more expensive. It uses a salt so
          identical passwords do not produce identical stored results.
        </p>

        <h3 className="text-lg font-semibold">Generate a Password Hash</h3>

        <CodeBlock
          code={`const crypto = require("node:crypto");
const { promisify } = require("node:util");

const scryptAsync = promisify(crypto.scrypt);

async function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString("hex");

  const derivedKey = await scryptAsync(
    password,
    salt,
    64
  );

  return {
    salt,
    hash: derivedKey.toString("hex")
  };
}

hashPassword("mySecretPassword").then(console.log);`}
        />

        <h3 className="text-lg font-semibold">Verify a Password</h3>

        <CodeBlock
          code={`async function verifyPassword(password, storedSalt, storedHash) {
  const derivedKey = await scryptAsync(
    password,
    storedSalt,
    64
  );

  const storedBuffer = Buffer.from(storedHash, "hex");

  return (
    derivedKey.length === storedBuffer.length &&
    crypto.timingSafeEqual(derivedKey, storedBuffer)
  );
}`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          During login, generate a new derived key using the submitted password
          and the user's stored salt. Then compare it with the stored hash using
          timingSafeEqual().
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <p className="font-semibold text-[var(--accent-color)]">Remember</p>
          <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
            For production applications, use a properly configured password
            hashing solution such as Argon2id or scrypt. Store the algorithm
            parameters and salt with the hash so verification can reproduce the
            same configuration.
          </p>
        </div>
      </section>

      {/* Random Values */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">4. Secure Random Values</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Cryptographically secure random values are useful for generating reset
          tokens, verification tokens, session identifiers, and
          encryption-related values.
        </p>

        <h3 className="text-lg font-semibold">randomBytes()</h3>

        <CodeBlock
          code={`const crypto = require("node:crypto");

const token = crypto.randomBytes(32).toString("hex");

console.log(token);`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          This generates 32 random bytes and converts them into a 64-character
          hexadecimal string.
        </p>

        <h3 className="text-lg font-semibold">randomUUID()</h3>

        <CodeBlock
          code={`const id = crypto.randomUUID();

console.log(id);`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Generates a cryptographically random UUID version 4. It is commonly
          used for unique identifiers.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <p className="font-semibold text-[var(--accent-color)]">
            Security Tip
          </p>
          <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
            Do not use Math.random() to generate authentication tokens or other
            security-sensitive values. Use crypto.randomBytes() or
            crypto.randomUUID().
          </p>
        </div>
      </section>

      {/* HMAC */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">5. HMAC with createHmac()</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          HMAC stands for Hash-based Message Authentication Code. It combines a
          secret key with a hash algorithm to create a message authentication
          code.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          It helps verify that a message was created by someone who knows the
          secret key and that the message has not been modified.
        </p>

        <CodeBlock
          code={`const crypto = require("node:crypto");

const secret = process.env.WEBHOOK_SECRET;

const signature = crypto
  .createHmac("sha256", secret)
  .update("payment=successful")
  .digest("hex");

console.log(signature);`}
        />

        <h3 className="text-lg font-semibold">Common Use Cases</h3>

        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Webhook signature verification.</li>
          <li>Verifying message authenticity.</li>
          <li>Detecting message modification.</li>
          <li>Generating keyed authentication codes.</li>
        </ul>

        <p className="text-sm text-[var(--text-muted)]">
          HMAC is not encryption. It does not hide the original message.
        </p>
      </section>

      {/* Encryption */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">6. Encryption and Decryption</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Encryption converts readable data (plaintext) into unreadable data
          (ciphertext). Decryption converts it back using the appropriate
          cryptographic key.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 text-center">
          <p className="font-medium">Plaintext</p>
          <p className="my-2 text-[var(--accent-color)]">↓ Encryption + Key</p>
          <p className="font-medium">Ciphertext</p>
          <p className="my-2 text-[var(--accent-color)]">↓ Decryption + Key</p>
          <p className="font-medium">Original Plaintext</p>
        </div>

        <h3 className="text-lg font-semibold">AES-256-GCM Encryption</h3>

        <p className="leading-7 text-[var(--text-secondary)]">
          AES is a symmetric encryption algorithm, meaning the same secret key
          is used for encryption and decryption. GCM is an authenticated
          encryption mode that also checks whether encrypted data has been
          modified.
        </p>

        <CodeBlock
          code={`const crypto = require("node:crypto");

// Store a securely generated 32-byte key in an environment variable.
const key = Buffer.from(process.env.ENCRYPTION_KEY, "hex");

if (key.length !== 32) {
  throw new Error("Encryption key must be 32 bytes");
}

function encrypt(text) {
  const iv = crypto.randomBytes(12);

  const cipher = crypto.createCipheriv(
    "aes-256-gcm",
    key,
    iv
  );

  const encrypted = Buffer.concat([
    cipher.update(text, "utf8"),
    cipher.final()
  ]);

  const authTag = cipher.getAuthTag();

  return {
    iv: iv.toString("hex"),
    encrypted: encrypted.toString("hex"),
    authTag: authTag.toString("hex")
  };
}

function decrypt(data) {
  const decipher = crypto.createDecipheriv(
    "aes-256-gcm",
    key,
    Buffer.from(data.iv, "hex")
  );

  decipher.setAuthTag(Buffer.from(data.authTag, "hex"));

  const decrypted = Buffer.concat([
    decipher.update(Buffer.from(data.encrypted, "hex")),
    decipher.final()
  ]);

  return decrypted.toString("utf8");
}

const encryptedData = encrypt("Sensitive information");

console.log(decrypt(encryptedData));`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          The IV and authentication tag are stored alongside the ciphertext.
          They are required for decryption and integrity verification, but the
          secret encryption key must remain private.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <p className="font-semibold text-[var(--accent-color)]">
            Important Security Rules
          </p>
          <ul className="mt-2 list-disc space-y-2 pl-6 text-sm text-[var(--text-secondary)]">
            <li>
              Use a unique, unpredictable IV for every encryption with the same
              key.
            </li>
            <li>Never reuse the same GCM IV with the same key.</li>
            <li>Never hardcode or expose the encryption key.</li>
            <li>Do not ignore authentication errors during decryption.</li>
          </ul>
        </div>
      </section>

      {/* Digital Signatures */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">7. Digital Signatures</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Digital signatures help verify the authenticity and integrity of data
          using public-key cryptography.
        </p>

        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>The sender signs data using a private key.</li>
          <li>The receiver verifies the signature using the public key.</li>
          <li>Verification helps detect data modification.</li>
        </ul>

        <CodeBlock
          code={`const crypto = require("node:crypto");

// Example assumes privateKey and publicKey are already available.

const message = "Important message";

const signature = crypto.sign(
  "sha256",
  Buffer.from(message),
  privateKey
);

const isValid = crypto.verify(
  "sha256",
  Buffer.from(message),
  publicKey,
  signature
);

console.log(isValid);`}
        />

        <p className="text-sm text-[var(--text-muted)]">
          The private and public keys must belong to the same supported key
          pair. This example omits key generation and key storage.
        </p>
      </section>

      {/* Important Methods */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          8. Commonly Used Crypto Methods
        </h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="p-3 text-left">Method</th>
                <th className="p-3 text-left">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["createHash()", "Create a hash digest"],
                ["scrypt()", "Derive a key for password hashing"],
                ["randomBytes()", "Generate secure random bytes"],
                ["randomUUID()", "Generate a UUID"],
                ["createHmac()", "Create a keyed message authentication code"],
                ["createCipheriv()", "Create an encryption cipher"],
                ["createDecipheriv()", "Create a decryption decipher"],
                [
                  "timingSafeEqual()",
                  "Compare equal-length buffers with timing-safe behavior",
                ],
                ["sign()", "Create a digital signature"],
                ["verify()", "Verify a digital signature"],
              ].map(([method, purpose]) => (
                <tr
                  key={method}
                  className="border-t border-[var(--border-color)]"
                >
                  <td className="p-3 font-medium text-[var(--accent-color)]">
                    {method}
                  </td>
                  <td className="p-3 text-[var(--text-secondary)]">
                    {purpose}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Practical Uses */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          9. Where Do We Use Crypto in Backend?
        </h2>

        <div className="space-y-3">
          {[
            ["Authentication", "Password hashing and secure token generation."],
            ["Password Reset", "Generating unpredictable reset tokens."],
            [
              "Payment Systems",
              "Verifying payment gateway webhook signatures.",
            ],
            [
              "Data Protection",
              "Encrypting sensitive information before storage.",
            ],
            ["File Integrity", "Calculating hashes to detect file changes."],
            [
              "Secure Communication",
              "Supporting cryptographic operations used by TLS.",
            ],
          ].map(([title, description]) => (
            <div
              key={title}
              className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4"
            >
              <h3 className="font-semibold text-[var(--accent-color)]">
                {title}
              </h3>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Summary */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">10. Summary</h2>

        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>
            Crypto is a built-in Node.js module for cryptographic operations.
          </li>
          <li>
            Hashing is one-way; encryption is reversible with the correct key.
          </li>
          <li>
            Use scrypt or Argon2id for password hashing, not plain SHA-256.
          </li>
          <li>Use randomBytes() or randomUUID() for secure random values.</li>
          <li>HMAC verifies message authenticity and integrity.</li>
          <li>AES-GCM provides authenticated encryption.</li>
          <li>Digital signatures use private and public key pairs.</li>
          <li>Never expose private keys, secrets, or encryption keys.</li>
        </ul>
      </section>
    </div>
  );
};

export default Crypto;
