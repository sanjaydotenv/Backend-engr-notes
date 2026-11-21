import CodeBlock from "../../../components/common/CodeBlock";

function AccessToken() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          AUTHENTICATION / 09
        </p>
        <h1 className="mt-2 text-3xl font-bold">Access Token</h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          An Access Token is a credential issued after successful
          authentication. The client sends it with API requests to access
          protected resources.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What is an Access Token?</h2>
        <p className="text-[var(--text-secondary)]">
          When a user successfully logs in, the backend generates an access
          token. The client uses this token to prove its authentication when
          accessing protected APIs.
        </p>

        <CodeBlock code={`User Login
    |
    v
Backend Verifies Credentials
    |
    v
Generate Access Token
    |
    v
Send Token to Client
    |
    v
Client Requests Protected API
    |
    v
Backend Verifies Access Token
    |
    v
Allow or Reject Request`} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Why Do We Need Access Tokens?</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>To access protected backend APIs.</li>
          <li>To identify the authenticated user.</li>
          <li>To avoid sending email and password with every request.</li>
          <li>To control how long a user can access protected resources without re-authentication.</li>
          <li>To support authentication in web and mobile applications.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Access Token is Short-Lived</h2>
        <p className="text-[var(--text-secondary)]">
          Access tokens usually have a short expiration time, such as 5 to
          15 minutes. Short expiration reduces the time an attacker can use
          a stolen token.
        </p>

        <CodeBlock code={`const accessToken = jwt.sign(
  {
    userId: user._id
  },
  process.env.ACCESS_TOKEN_SECRET,
  {
    expiresIn: "15m"
  }
);`} />

        <p className="text-[var(--text-secondary)]">
          After expiration, the token cannot be used for normal authenticated
          requests. The client needs to obtain a new access token, commonly
          through a refresh token.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Generate Access Token</h2>
        <p className="text-[var(--text-secondary)]">
          We can create a reusable function to generate access tokens using
          the <code>jsonwebtoken</code> package.
        </p>

        <p className="font-medium">Install package:</p>
        <CodeBlock code={`npm install jsonwebtoken`} />

        <p className="font-medium">Add secret in .env:</p>
        <CodeBlock code={`ACCESS_TOKEN_SECRET=your-strong-random-secret`} />

        <p className="font-medium">Create token utility:</p>
        <CodeBlock code={`import jwt from "jsonwebtoken";

export const generateAccessToken = (user) => {
  return jwt.sign(
    {
      userId: user._id
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "15m",
      algorithm: "HS256"
    }
  );
};`} />

        <p className="text-[var(--text-secondary)]">
          Only include the minimum claims needed by your application.
          Never include passwords or sensitive information in the payload.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Send Access Token After Login</h2>
        <p className="text-[var(--text-secondary)]">
          After verifying the user's password, the backend generates an
          access token and sends it to the client.
        </p>

        <CodeBlock code={`import { generateAccessToken } from "../utils/token.js";

export const login = async (req, res) => {
  // Find user and verify password first

  const accessToken = generateAccessToken(user);

  return res.status(200).json({
    message: "Login successful",
    accessToken
  });
};`} />

        <p className="text-[var(--text-secondary)]">
          This is a simplified login example. The actual controller must
          first validate the input, find the user and compare the submitted
          password with the stored password hash.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Send Access Token with API Requests</h2>
        <p className="text-[var(--text-secondary)]">
          When using the Bearer token approach, the client sends the access
          token in the Authorization header.
        </p>

        <CodeBlock code={`GET /api/profile

Authorization: Bearer <ACCESS_TOKEN>`} />

        <p className="font-medium">Axios example:</p>
        <CodeBlock code={`const response = await axios.get(
  "/api/profile",
  {
    headers: {
      Authorization: \`Bearer \${accessToken}\`
    }
  }
);`} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Verify Access Token in Backend</h2>
        <p className="text-[var(--text-secondary)]">
          The backend extracts the Bearer token and verifies its signature
          and expiration before allowing access.
        </p>

        <CodeBlock code={`import jwt from "jsonwebtoken";

export const verifyAccessToken = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Access token required"
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET,
      {
        algorithms: ["HS256"]
      }
    );

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired access token"
    });
  }
};`} />

        <p className="text-[var(--text-secondary)]">
          Never trust a token just because it can be decoded. Always verify
          it before using its claims.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Protect API Routes</h2>
        <p className="text-[var(--text-secondary)]">
          Use the verification middleware on routes that require
          authentication.
        </p>

        <CodeBlock code={`import express from "express";
import { verifyAccessToken } from "../middleware/auth.js";

const router = express.Router();

router.get(
  "/profile",
  verifyAccessToken,
  (req, res) => {
    res.status(200).json({
      message: "Profile fetched successfully",
      userId: req.user.userId
    });
  }
);

export default router;`} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. What Happens When Access Token Expires?</h2>
        <p className="text-[var(--text-secondary)]">
          When an access token expires, the backend rejects the request.
          The client can then use a valid refresh token to request a new
          access token.
        </p>

        <CodeBlock code={`Client
  |
  | Request with Access Token
  v
Backend
  |
  | Token Expired
  v
401 Unauthorized
  |
  v
Client Requests New Access Token
  |
  v
Continue API Requests`} />

        <p className="text-[var(--text-secondary)]">
          The refresh-token process is covered in the next topic.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Access Token Security</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Keep access tokens short-lived.</li>
          <li>Use HTTPS in production.</li>
          <li>Never expose signing secrets to the frontend.</li>
          <li>Never put tokens in URLs or query parameters.</li>
          <li>Use secure token storage appropriate to the client type.</li>
          <li>For browser apps, consider HTTP-only, Secure cookies to reduce JavaScript access to tokens.</li>
          <li>Protect cookie-based authentication against CSRF.</li>
          <li>Do not log access tokens.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Interview Questions</h2>
        {[
          ["What is an Access Token?", "A credential used by a client to access protected APIs after authentication."],
          ["Why do we use Access Tokens?", "They allow the backend to authenticate API requests without asking the user for credentials on every request."],
          ["Why are Access Tokens short-lived?", "To reduce the time window in which a stolen token can be misused."],
          ["How is an Access Token sent to the backend?", "Commonly through the Authorization header using the Bearer scheme, or through a configured cookie-based approach."],
          ["What happens when an Access Token expires?", "The backend rejects it. The client may obtain a new one using a valid refresh token."],
          ["Should we store passwords inside an Access Token?", "No. JWT payloads are readable and should not contain passwords or secrets."],
          ["What is a Bearer Token?", "A credential sent with a request, typically in the Authorization header. Whoever possesses it can use it until it expires or is revoked."],
          ["Is an Access Token always a JWT?", "No. It can also be an opaque random token. JWT is one common format."],
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

export default AccessToken;