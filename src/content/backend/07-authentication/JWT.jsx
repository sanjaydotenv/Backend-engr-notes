import CodeBlock from "../../../components/common/CodeBlock";

function JWT() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          AUTHENTICATION / 08
        </p>
        <h1 className="mt-2 text-3xl font-bold">JWT (JSON Web Token)</h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          JWT is a compact, signed token used to securely transmit information
          between parties. In backend authentication, it is commonly used to
          identify authenticated users across requests.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What is JWT?</h2>
        <p className="text-[var(--text-secondary)]">
          In JWT authentication, the server generates a signed token after
          successful login. The client sends this token with future requests,
          and the server verifies it to identify the user.
        </p>

        <CodeBlock code={`User Login
    |
    v
Verify Email & Password
    |
    v
Generate JWT
    |
    v
Send Token to Client
    |
    v
Client Sends Token with Request
    |
    v
Server Verifies JWT
    |
    v
Access Protected Route`} />

        <p className="text-[var(--text-secondary)]">
          Unlike traditional session authentication, JWT authentication
          can verify a token without looking up a session for every request.
          This is called stateless token verification when no server-side
          session or revocation lookup is required.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. JWT Structure</h2>
        <p className="text-[var(--text-secondary)]">
          A JWT consists of three parts separated by dots:
        </p>

        <CodeBlock code={`HEADER.PAYLOAD.SIGNATURE`} />

        <p className="font-medium">Example token format:</p>
        <CodeBlock code={`xxxxx.yyyyy.zzzzz`} />

        <div className="space-y-3">
          {[
            ["Header", "Contains token type and signing algorithm."],
            ["Payload", "Contains claims or information about the user."],
            ["Signature", "Verifies that the token was signed using the expected key and has not been modified."],
          ].map(([title, description], index) => (
            <div key={title} className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
              <p className="font-semibold text-[var(--accent-color)]">{index + 1}. {title}</p>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. JWT Header</h2>
        <p className="text-[var(--text-secondary)]">
          The header specifies the token type and signing algorithm.
        </p>

        <CodeBlock code={`{
  "alg": "HS256",
  "typ": "JWT"
}`} />

        <p className="text-[var(--text-secondary)]">
          Here, HS256 is an HMAC-SHA256 signing algorithm.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. JWT Payload</h2>
        <p className="text-[var(--text-secondary)]">
          The payload contains claims such as user ID, role and token
          expiration.
        </p>

        <CodeBlock code={`{
  "userId": "673abc123456",
  "role": "admin",
  "iat": 1795300000,
  "exp": 1795300900
}`} />

        <p className="text-[var(--text-secondary)]">
          Important: The payload is Base64URL encoded, not encrypted.
          Anyone holding the token can decode and read it. Never store
          passwords, secrets or sensitive personal information inside JWT
          payloads.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. JWT Signature</h2>
        <p className="text-[var(--text-secondary)]">
          The signature is created using the encoded header, encoded payload
          and a secret key (for HS256). It allows the server to detect
          modifications to the token.
        </p>

        <CodeBlock code={`HMACSHA256(
  Base64Url(Header) + "." + Base64Url(Payload),
  SECRET_KEY
)`} />

        <p className="text-[var(--text-secondary)]">
          If someone changes the payload, the original signature will no
          longer match during verification.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Install jsonwebtoken</h2>
        <p className="text-[var(--text-secondary)]">
          We use the <code>jsonwebtoken</code> package to generate and verify
          JWTs in Node.js.
        </p>

        <CodeBlock code={`npm install jsonwebtoken`} />

        <p className="font-medium">Import:</p>
        <CodeBlock code={`import jwt from "jsonwebtoken";`} />

        <p className="font-medium">Add a secret to .env:</p>
        <CodeBlock code={`JWT_SECRET=your-long-random-secret-key`} />

        <p className="text-[var(--text-secondary)]">
          Generate a strong random secret instead of using a predictable
          string. Never commit your real secret to Git.
        </p>

        <CodeBlock code={`node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"`} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Generate JWT using jwt.sign()</h2>
        <p className="text-[var(--text-secondary)]">
          The <code>jwt.sign()</code> method creates a signed token using
          payload data and a secret key.
        </p>

        <CodeBlock code={`import jwt from "jsonwebtoken";

const token = jwt.sign(
  {
    userId: "673abc123456",
    role: "user"
  },
  process.env.JWT_SECRET,
  {
    expiresIn: "15m",
    algorithm: "HS256"
  }
);

console.log(token);`} />

        <p className="text-[var(--text-secondary)]">
          Parameters:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li><strong>First:</strong> Payload data.</li>
          <li><strong>Second:</strong> Secret key used for signing.</li>
          <li><strong>Third:</strong> Token options such as expiration and algorithm.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Verify JWT using jwt.verify()</h2>
        <p className="text-[var(--text-secondary)]">
          The <code>jwt.verify()</code> method validates the token's signature,
          expiration and configured claims.
        </p>

        <CodeBlock code={`import jwt from "jsonwebtoken";

try {
  const decoded = jwt.verify(
    token,
    process.env.JWT_SECRET,
    {
      algorithms: ["HS256"]
    }
  );

  console.log(decoded);
} catch (error) {
  console.log("Invalid or expired token");
}`} />

        <p className="text-[var(--text-secondary)]">
          If the token is invalid or expired, verification throws an error.
          Do not use <code>jwt.decode()</code> as an authentication check:
          decoding alone does not verify the signature.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Send JWT to Client</h2>
        <p className="text-[var(--text-secondary)]">
          After successful login, the server can send the JWT to the client.
          For browser applications, an HTTP-only cookie is commonly preferred
          over exposing tokens to JavaScript.
        </p>

        <CodeBlock code={`// Example: Send JWT in HTTP-only cookie

res.cookie("accessToken", token, {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
  maxAge: 15 * 60 * 1000,
  path: "/"
});

return res.status(200).json({
  message: "Login successful"
});`} />

        <p className="text-[var(--text-secondary)]">
          Cookie-based authentication also requires appropriate CSRF
          protection and CORS configuration when frontend and backend are
          on different origins.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Create JWT Authentication Middleware</h2>
        <p className="text-[var(--text-secondary)]">
          Middleware verifies the JWT before allowing access to protected
          routes.
        </p>

        <CodeBlock code={`import jwt from "jsonwebtoken";

export const authenticate = (req, res, next) => {
  try {
    const token = req.cookies.accessToken;

    if (!token) {
      return res.status(401).json({
        message: "Authentication required"
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET,
      {
        algorithms: ["HS256"]
      }
    );

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token"
    });
  }
};`} />

        <p className="text-[var(--text-secondary)]">
          Here, <code>req.user</code> contains the verified JWT payload.
          The middleware makes this information available to the next
          middleware or route handler.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">11. Protect Express Routes</h2>
        <p className="text-[var(--text-secondary)]">
          Add the authentication middleware before routes that require
          a logged-in user.
        </p>

        <CodeBlock code={`import express from "express";
import { authenticate } from "../middleware/auth.js";

const router = express.Router();

router.get("/profile", authenticate, (req, res) => {
  res.status(200).json({
    message: "Profile accessed successfully",
    user: req.user
  });
});

export default router;`} />

        <p className="text-[var(--text-secondary)]">
          If the token is valid, the request continues. Otherwise, the server
          returns a 401 response.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">12. Important JWT Security Points</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Never put passwords or secret information in the payload.</li>
          <li>Always verify the signature before trusting token claims.</li>
          <li>Keep the signing secret private.</li>
          <li>Use a strong, explicitly configured signing algorithm.</li>
          <li>Set token expiration using <code>expiresIn</code>.</li>
          <li>Use HTTPS in production.</li>
          <li>Use HTTP-only cookies for browser-based token storage when appropriate.</li>
          <li>Implement token revocation or short lifetimes when early invalidation is needed.</li>
          <li>Use separate secrets or keys for access and refresh tokens.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Interview Questions</h2>
        {[
          ["What is JWT?", "JWT is a compact, signed token format used to transmit claims between parties."],
          ["What are the three parts of JWT?", "Header, Payload and Signature."],
          ["Is JWT encrypted?", "Normally no. A signed JWT payload is Base64URL encoded and can be read by anyone holding the token."],
          ["What is the purpose of the JWT signature?", "It verifies the token's integrity and authenticity."],
          ["What does jwt.sign() do?", "It creates a signed JWT using a payload and signing key."],
          ["What does jwt.verify() do?", "It verifies the signature and validates configured token claims such as expiration."],
          ["What is the difference between jwt.decode() and jwt.verify()?", "decode() only reads the payload; verify() also checks the signature and token validity."],
          ["What is a stateless authentication system?", "A system where each request can be authenticated using a token without requiring a server-side session lookup."],
          ["Can JWT be revoked immediately?", "Not by basic signature verification alone. A denylist, token version, or other server-side revocation mechanism is needed."],
          ["Where can JWT be stored in a browser?", "It can be stored in cookies or other client-side storage, but HTTP-only cookies are commonly preferred for protecting tokens from JavaScript access."],
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

export default JWT;