import CodeBlock from "../../../components/common/CodeBlock";

function RefreshToken() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          AUTHENTICATION / 10
        </p>
        <h1 className="mt-2 text-3xl font-bold">Refresh Token</h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          A Refresh Token is a long-lived credential used to obtain a new
          Access Token when the current Access Token expires. It allows users
          to continue using an application without logging in repeatedly.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What is a Refresh Token?</h2>
        <p className="text-[var(--text-secondary)]">
          An Access Token is short-lived, while a Refresh Token usually has a
          longer lifetime. When the Access Token expires, the client sends
          its Refresh Token to a dedicated backend endpoint to obtain a new
          Access Token.
        </p>

        <CodeBlock code={`User Login
    |
    v
Backend Generates Tokens
    |
    +------ Access Token (15 minutes)
    |
    +------ Refresh Token (7 days)
                 |
                 v
         Client Stores Tokens
                 |
                 v
         Access Token Expires
                 |
                 v
         Send Refresh Token
                 |
                 v
         Backend Validates It
                 |
                 v
         Generate New Access Token`} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Why Do We Need Refresh Tokens?</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>To obtain new Access Tokens without asking the user to log in again.</li>
          <li>To keep Access Tokens short-lived.</li>
          <li>To improve security if an Access Token gets stolen.</li>
          <li>To maintain a user's authenticated session for a longer period.</li>
          <li>To support controlled token renewal and revocation.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Access Token vs Refresh Token</h2>
        <div className="overflow-x-auto rounded-lg border border-[var(--border-color)]">
          <table className="w-full text-left text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">Access Token</th>
                <th className="p-3">Refresh Token</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              <tr>
                <td className="p-3">Short-lived</td>
                <td className="p-3">Longer-lived</td>
              </tr>
              <tr>
                <td className="p-3">Used for API access</td>
                <td className="p-3">Used to obtain new Access Tokens</td>
              </tr>
              <tr>
                <td className="p-3">Sent with protected API requests</td>
                <td className="p-3">Sent to the refresh endpoint</td>
              </tr>
              <tr>
                <td className="p-3">Usually 5–15 minutes</td>
                <td className="p-3">For example, 7 days</td>
              </tr>
              <tr>
                <td className="p-3">Can be JWT or opaque token</td>
                <td className="p-3">Can be JWT or opaque token</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-[var(--text-secondary)]">
          These lifetimes are examples, not fixed rules. Choose them according
          to your application's security requirements.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Generate Refresh Token</h2>
        <p className="text-[var(--text-secondary)]">
          We can generate a Refresh Token using the same
          <code> jsonwebtoken </code> package, but with a separate secret
          and a longer expiration time.
        </p>

        <CodeBlock code={`npm install jsonwebtoken`} />

        <p className="font-medium">Add separate secrets in .env:</p>
        <CodeBlock code={`ACCESS_TOKEN_SECRET=your-access-secret
REFRESH_TOKEN_SECRET=your-refresh-secret`} />

        <p className="font-medium">Create token utility:</p>
        <CodeBlock code={`import jwt from "jsonwebtoken";

export const generateRefreshToken = (user) => {
  return jwt.sign(
    {
      userId: user._id,
      tokenType: "refresh"
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: "7d",
      algorithm: "HS256"
    }
  );
};`} />

        <p className="text-[var(--text-secondary)]">
          Separate secrets prevent a token signed for one purpose from being
          accepted as the other type. The backend must also validate the
          expected token type.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Generate Both Tokens During Login</h2>
        <p className="text-[var(--text-secondary)]">
          After verifying the user's credentials, generate both tokens.
        </p>

        <CodeBlock code={`import {
  generateAccessToken,
  generateRefreshToken
} from "../utils/token.js";

export const login = async (req, res) => {
  // Find user and verify password first

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  return res
    .status(200)
    .cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/api/auth/refresh",
      maxAge: 7 * 24 * 60 * 60 * 1000
    })
    .json({
      message: "Login successful",
      accessToken
    });
};`} />

        <p className="text-[var(--text-secondary)]">
          This example sends the Access Token in the response body and stores
          the Refresh Token in an HTTP-only cookie. In production, also store
          a hashed refresh-token record or session reference on the server so
          that refresh tokens can be revoked.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Store Refresh Token Securely</h2>
        <p className="text-[var(--text-secondary)]">
          Refresh Tokens are powerful credentials because they can create
          new Access Tokens. They need stronger protection.
        </p>

        <p className="font-medium">Common browser storage approach:</p>
        <CodeBlock code={`res.cookie("refreshToken", refreshToken, {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict",
  path: "/api/auth/refresh",
  maxAge: 7 * 24 * 60 * 60 * 1000
});`} />

        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li><code>httpOnly</code>: JavaScript cannot read the cookie.</li>
          <li><code>secure</code>: Sends the cookie only over HTTPS when enabled.</li>
          <li><code>sameSite</code>: Helps control cross-site cookie sending.</li>
          <li><code>path</code>: Restricts which URL paths receive the cookie.</li>
        </ul>
        <p className="text-[var(--text-secondary)]">
          HTTP-only cookies do not prevent CSRF by themselves. Add appropriate
          CSRF protection and configure cookie, CORS and HTTPS settings
          correctly for your deployment.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Create Refresh Token API</h2>
        <p className="text-[var(--text-secondary)]">
          When the Access Token expires, the client calls the refresh endpoint.
          The browser automatically sends the eligible HTTP-only cookie.
        </p>

        <CodeBlock code={`import jwt from "jsonwebtoken";
import { generateAccessToken } from "../utils/token.js";

export const refreshAccessToken = async (req, res) => {
  try {
    const token = req.cookies.refreshToken;

    if (!token) {
      return res.status(401).json({
        message: "Refresh token required"
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.REFRESH_TOKEN_SECRET,
      {
        algorithms: ["HS256"]
      }
    );

    if (decoded.tokenType !== "refresh") {
      return res.status(401).json({
        message: "Invalid token type"
      });
    }

    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(401).json({
        message: "User not found"
      });
    }

    const newAccessToken = generateAccessToken(user);

    return res.status(200).json({
      accessToken: newAccessToken
    });

  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired refresh token"
    });
  }
};`} />

        <p className="text-sm text-[var(--text-secondary)]">
          This is a simplified verification example. A production refresh
          endpoint must also check that the refresh token belongs to an active,
          non-revoked server-side session. Add token rotation and reuse
          detection rather than accepting the same refresh token indefinitely.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Create Refresh Route</h2>
        <CodeBlock code={`import express from "express";
import { refreshAccessToken } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/refresh", refreshAccessToken);

export default router;`} />

        <p className="text-[var(--text-secondary)]">
          Make sure <code>cookie-parser</code> is installed and configured
          before these routes so that <code>req.cookies</code> is available.
        </p>

        <CodeBlock code={`npm install cookie-parser`} />

        <CodeBlock code={`import cookieParser from "cookie-parser";

app.use(cookieParser());`} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Call Refresh API from Frontend</h2>
        <p className="text-[var(--text-secondary)]">
          The frontend requests a new Access Token when the existing one
          expires. With an HTTP-only cookie, JavaScript does not need to
          read or manually attach the Refresh Token.
        </p>

        <CodeBlock code={`const response = await axios.post(
  "/api/auth/refresh",
  {},
  {
    withCredentials: true
  }
);

const newAccessToken = response.data.accessToken;`} />

        <p className="text-[var(--text-secondary)]">
          Store the new Access Token according to your client-side
          authentication strategy and use it for subsequent protected
          requests. Configure the backend CORS origin and credentials
          correctly when requests are cross-origin.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Refresh Token Security</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Use a longer but limited expiration time.</li>
          <li>Store browser Refresh Tokens in HTTP-only, Secure cookies where appropriate.</li>
          <li>Use a separate signing secret or key for Refresh Tokens.</li>
          <li>Validate token type, signature and expiration.</li>
          <li>Keep a server-side record to support logout and revocation.</li>
          <li>Rotate Refresh Tokens after successful use.</li>
          <li>Detect reuse of an already rotated token and revoke the related token family.</li>
          <li>Never log or expose Refresh Tokens.</li>
          <li>Protect cookie-based refresh endpoints against CSRF.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Interview Questions</h2>
        {[
          ["What is a Refresh Token?", "A credential used to obtain a new Access Token after the current one expires."],
          ["Why do we need Refresh Tokens?", "They allow users to continue their session without repeatedly entering their login credentials."],
          ["What is the difference between Access Token and Refresh Token?", "Access Tokens access protected APIs and are short-lived. Refresh Tokens obtain new Access Tokens and usually have a longer lifetime."],
          ["Why should Refresh Tokens be stored securely?", "Anyone possessing a valid Refresh Token may be able to obtain new Access Tokens."],
          ["Should Refresh Tokens be sent with every API request?", "No. They should be sent only to the refresh endpoint."],
          ["Why use separate secrets for Access and Refresh Tokens?", "It separates their signing keys and reduces the risk of accepting one token type in the wrong context."],
          ["What happens when a Refresh Token expires?", "The user generally needs to authenticate again."],
          ["What is Refresh Token Rotation?", "Replacing the old Refresh Token with a new one after successful use."],
          ["Can Refresh Tokens be revoked?", "Yes. A server-side session or token record can be revoked, preventing further use."],
          ["Does an HTTP-only cookie prevent CSRF?", "No. HTTP-only prevents JavaScript from reading the cookie, but CSRF protection is still required."],
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

export default RefreshToken;