import CodeBlock from "../../../components/common/CodeBlock";

function TokenExpiration() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          AUTHENTICATION / 11
        </p>
        <h1 className="mt-2 text-3xl font-bold">Token Expiration</h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          Token Expiration defines how long an authentication token remains
          valid. After its expiration time, the backend rejects the token
          during verification.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What is Token Expiration?</h2>
        <p className="text-[var(--text-secondary)]">
          When a backend generates a JWT, it can specify an expiration time.
          Once that time is reached, the token becomes invalid for normal
          authentication, even if its signature is correct.
        </p>

        <CodeBlock code={`Token Generated
      |
      v
Token is Valid
      |
      v
Expiration Time Reached
      |
      v
Token Becomes Expired
      |
      v
Backend Rejects Token`} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Why is Token Expiration Important?</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Limits how long a stolen token can be used.</li>
          <li>Reduces the risk of unauthorized access.</li>
          <li>Helps manage user authentication sessions.</li>
          <li>Encourages regular token renewal.</li>
          <li>Provides control over authentication duration.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. JWT exp Claim</h2>
        <p className="text-[var(--text-secondary)]">
          JWT uses the <code>exp</code> (Expiration Time) claim to define
          when a token expires.
        </p>

        <CodeBlock code={`{
  "userId": "123456",
  "iat": 1795300000,
  "exp": 1795300900
}`} />

        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li><strong>iat:</strong> Issued At — when the token was created.</li>
          <li><strong>exp:</strong> Expiration Time — when the token stops being valid.</li>
        </ul>

        <p className="text-[var(--text-secondary)]">
          Both claims use NumericDate values, represented as seconds since
          the Unix epoch (not milliseconds).
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Set Expiration using expiresIn</h2>
        <p className="text-[var(--text-secondary)]">
          The <code>jsonwebtoken</code> package allows us to define token
          expiration using the <code>expiresIn</code> option.
        </p>

        <CodeBlock code={`import jwt from "jsonwebtoken";

const token = jwt.sign(
  {
    userId: "123456"
  },
  process.env.ACCESS_TOKEN_SECRET,
  {
    expiresIn: "15m"
  }
);`} />

        <p className="font-medium">Common expiration values:</p>

        <div className="overflow-x-auto rounded-lg border border-[var(--border-color)]">
          <table className="w-full text-left text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">Value</th>
                <th className="p-3">Meaning</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              {[
                ["30s", "30 seconds"],
                ["5m", "5 minutes"],
                ["15m", "15 minutes"],
                ["1h", "1 hour"],
                ["1d", "1 day"],
                ["7d", "7 days"],
              ].map(([value, meaning]) => (
                <tr key={value}>
                  <td className="p-3 font-medium">{value}</td>
                  <td className="p-3 text-[var(--text-secondary)]">{meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Access Token vs Refresh Token Expiration</h2>
        <p className="text-[var(--text-secondary)]">
          Both tokens have expiration times, but their lifetimes are different
          because they serve different purposes.
        </p>

        <CodeBlock code={`// Access Token
const accessToken = jwt.sign(
  { userId: user._id },
  process.env.ACCESS_TOKEN_SECRET,
  { expiresIn: "15m" }
);

// Refresh Token
const refreshToken = jwt.sign(
  {
    userId: user._id,
    tokenType: "refresh"
  },
  process.env.REFRESH_TOKEN_SECRET,
  { expiresIn: "7d" }
);`} />

        <p className="text-[var(--text-secondary)]">
          Example: The Access Token expires after 15 minutes, but the
          Refresh Token can remain valid for 7 days. The Refresh Token
          can be used to obtain a new Access Token while it remains valid
          and has not been revoked.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Verify Token Expiration</h2>
        <p className="text-[var(--text-secondary)]">
          The <code>jwt.verify()</code> method automatically checks the
          expiration claim when one exists.
        </p>

        <CodeBlock code={`import jwt from "jsonwebtoken";

try {
  const decoded = jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET
  );

  console.log("Token is valid:", decoded);

} catch (error) {
  if (error.name === "TokenExpiredError") {
    console.log("Token has expired");
  } else {
    console.log("Invalid token");
  }
}`} />

        <p className="text-[var(--text-secondary)]">
          You do not need to manually compare the current time with
          <code> exp </code> when using <code>jwt.verify()</code>.
          It performs the expiration check automatically.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Handle Expired Tokens in Middleware</h2>
        <p className="text-[var(--text-secondary)]">
          In Express, we can handle expired tokens and invalid tokens
          separately.
        </p>

        <CodeBlock code={`import jwt from "jsonwebtoken";

export const authenticate = (req, res, next) => {
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
      process.env.ACCESS_TOKEN_SECRET
    );

    req.user = decoded;

    next();

  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        message: "Access token expired"
      });
    }

    return res.status(401).json({
      message: "Invalid access token"
    });
  }
};`} />

        <p className="text-[var(--text-secondary)]">
          A 401 Unauthorized response tells the client that the request
          does not have valid authentication credentials. The client can
          attempt token renewal if it has a valid Refresh Token.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. What Happens After Token Expiration?</h2>
        <CodeBlock code={`Client Sends Access Token
          |
          v
Backend Verifies Token
          |
          v
Token Expired?
          |
          +---- No ----> Allow Request
          |
          +---- Yes
                  |
                  v
            Return 401
                  |
                  v
        Client Calls Refresh API
                  |
                  v
        Backend Validates Refresh Token
                  |
                  v
        Generate New Access Token
                  |
                  v
        Client Retries Original Request`} />

        <p className="text-[var(--text-secondary)]">
          This flow allows users to continue working without logging in
          again while their Refresh Token and server-side session remain
          valid.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Important Security Points</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Always set an expiration time for authentication tokens.</li>
          <li>Keep Access Tokens short-lived.</li>
          <li>Give Refresh Tokens a limited lifetime too.</li>
          <li>Never trust expired tokens.</li>
          <li>Do not disable expiration checks during normal authentication.</li>
          <li>Use server-side revocation when tokens must be invalidated before expiry.</li>
          <li>Keep server clocks synchronized to avoid unexpected time-related verification failures.</li>
          <li>Do not confuse cookie expiration with JWT expiration; they are separate settings.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Interview Questions</h2>
        {[
          ["What is Token Expiration?", "It defines the time after which an authentication token is no longer valid."],
          ["What is the exp claim in JWT?", "It is the expiration time claim that specifies when a JWT expires."],
          ["What is the iat claim?", "It represents the time at which the JWT was issued."],
          ["What does expiresIn do?", "It specifies how long a JWT remains valid when generating a token with jsonwebtoken."],
          ["What happens when a JWT expires?", "jwt.verify() rejects it with a TokenExpiredError."],
          ["How can we detect an expired JWT?", "Check whether the verification error name is TokenExpiredError."],
          ["Why are Access Tokens short-lived?", "To reduce the time a stolen Access Token can be misused."],
          ["Can an expired Access Token be refreshed?", "Yes, if the client has a valid, non-revoked Refresh Token."],
          ["Is JWT expiration the same as cookie expiration?", "No. JWT expiration is part of the token claims, while cookie expiration controls how long the browser stores and sends the cookie."],
          ["Can a token be invalidated before its expiration?", "Yes, using server-side revocation mechanisms such as a token denylist or session record."],
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

export default TokenExpiration;