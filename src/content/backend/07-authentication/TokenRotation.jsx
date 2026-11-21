import CodeBlock from "../../../components/common/CodeBlock";

function TokenRotation() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          AUTHENTICATION / 12
        </p>
        <h1 className="mt-2 text-3xl font-bold">Token Rotation</h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          Token Rotation is a security technique in which a Refresh Token is
          replaced with a new one whenever it is successfully used. The old
          token is invalidated so it cannot be reused.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What is Token Rotation?</h2>
        <p className="text-[var(--text-secondary)]">
          Normally, a Refresh Token can be used to obtain new Access Tokens.
          But if someone steals it, they may also generate new Access Tokens.
          Token Rotation reduces this risk by issuing a new Refresh Token
          after every successful refresh operation.
        </p>

        <CodeBlock code={`Old Refresh Token
        |
        v
   Refresh Request
        |
        v
  Backend Validates Token
        |
        v
  Invalidate Old Token
        |
        v
  Generate New Token Pair
        |
        +---- New Access Token
        |
        +---- New Refresh Token`} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Why Do We Need Token Rotation?</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Reduces the impact of stolen Refresh Tokens.</li>
          <li>Prevents unlimited reuse of the same Refresh Token.</li>
          <li>Helps detect suspicious token reuse.</li>
          <li>Allows the backend to revoke an entire token family.</li>
          <li>Improves long-lived session security.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Token Rotation Without Rotation vs With Rotation</h2>
        <p className="font-medium">Without rotation:</p>
        <CodeBlock code={`Refresh Token A
      |
      +---- Refresh Request 1
      |
      +---- Refresh Request 2
      |
      +---- Refresh Request 3

Same token is reused repeatedly.`} />

        <p className="font-medium">With rotation:</p>
        <CodeBlock code={`Refresh Token A
      |
      v
Refresh Request
      |
      v
Refresh Token B
      |
      v
Refresh Request
      |
      v
Refresh Token C
      |
      v
Refresh Request
      |
      v
Refresh Token D

Each old token becomes invalid.`} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Store Refresh Tokens in Database</h2>
        <p className="text-[var(--text-secondary)]">
          To invalidate old tokens and detect reuse, the backend needs a
          server-side record of active refresh tokens. We can use MongoDB
          with Mongoose.
        </p>

        <CodeBlock code={`import mongoose from "mongoose";

const refreshTokenSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    tokenHash: {
      type: String,
      required: true,
      unique: true
    },

    familyId: {
      type: String,
      required: true
    },

    expiresAt: {
      type: Date,
      required: true
    },

    revokedAt: {
      type: Date,
      default: null
    },

    replacedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RefreshToken",
      default: null
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model(
  "RefreshToken",
  refreshTokenSchema
);`} />

        <p className="text-[var(--text-secondary)]">
          Important fields:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li><strong>tokenHash:</strong> Stores a hash of the actual Refresh Token.</li>
          <li><strong>familyId:</strong> Groups tokens belonging to the same login session.</li>
          <li><strong>expiresAt:</strong> Stores the token's expiration date.</li>
          <li><strong>revokedAt:</strong> Records when the token was invalidated.</li>
          <li><strong>replacedBy:</strong> References the token that replaced it.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Generate a Secure Refresh Token</h2>
        <p className="text-[var(--text-secondary)]">
          For this database-backed example, use a cryptographically random
          opaque token. Unlike a JWT, it does not contain user information.
          The backend stores only its SHA-256 hash.
        </p>

        <CodeBlock code={`import crypto from "node:crypto";

export const generateRefreshToken = () => {
  return crypto.randomBytes(64).toString("hex");
};

export const hashRefreshToken = (token) => {
  return crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");
};`} />

        <p className="text-[var(--text-secondary)]">
          The raw token is sent to the client, while only its hash is saved
          in the database. This way, a database leak does not directly reveal
          usable Refresh Tokens.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Create and Store a Refresh Token</h2>
        <p className="text-[var(--text-secondary)]">
          After login, generate a random token, create a session family and
          store its hash with an expiration date.
        </p>

        <CodeBlock code={`import crypto from "node:crypto";
import RefreshToken from "../models/refreshToken.model.js";
import {
  generateRefreshToken,
  hashRefreshToken
} from "../utils/refreshToken.js";

const createRefreshToken = async (userId) => {
  const rawToken = generateRefreshToken();

  const familyId = crypto.randomUUID();

  const expiresAt = new Date(
    Date.now() + 7 * 24 * 60 * 60 * 1000
  );

  await RefreshToken.create({
    user: userId,
    tokenHash: hashRefreshToken(rawToken),
    familyId,
    expiresAt
  });

  return rawToken;
};`} />

        <p className="text-[var(--text-secondary)]">
          This helper creates a new family. During rotation, the existing
          family ID must be preserved instead of generating a new one.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Implement Refresh Token Rotation</h2>
        <p className="text-[var(--text-secondary)]">
          When a client sends a Refresh Token, the backend hashes it and
          searches for its database record. If it is active and valid,
          the backend revokes the old token and creates a replacement.
        </p>

        <CodeBlock code={`import crypto from "node:crypto";
import jwt from "jsonwebtoken";
import RefreshToken from "../models/refreshToken.model.js";
import User from "../models/user.model.js";
import {
  generateRefreshToken,
  hashRefreshToken
} from "../utils/refreshToken.js";

export const rotateRefreshToken = async (req, res) => {
  const rawToken = req.cookies.refreshToken;

  if (!rawToken) {
    return res.status(401).json({
      message: "Refresh token required"
    });
  }

  const tokenHash = hashRefreshToken(rawToken);

  const oldToken = await RefreshToken.findOne({
    tokenHash
  });

  if (!oldToken) {
    return res.status(401).json({
      message: "Invalid refresh token"
    });
  }

  if (oldToken.revokedAt) {
    // Reuse detected: revoke the entire token family.
    await RefreshToken.updateMany(
      {
        familyId: oldToken.familyId,
        revokedAt: null
      },
      {
        $set: {
          revokedAt: new Date()
        }
      }
    );

    return res.status(401).json({
      message: "Refresh token reuse detected. Please login again."
    });
  }

  if (oldToken.expiresAt <= new Date()) {
    return res.status(401).json({
      message: "Refresh token expired"
    });
  }

  const user = await User.findById(oldToken.user);

  if (!user) {
    return res.status(401).json({
      message: "User not found"
    });
  }

  const newRawToken = generateRefreshToken();

  const newToken = await RefreshToken.create({
    user: oldToken.user,
    tokenHash: hashRefreshToken(newRawToken),
    familyId: oldToken.familyId,
    expiresAt: new Date(
      Date.now() + 7 * 24 * 60 * 60 * 1000
    )
  });

  oldToken.revokedAt = new Date();
  oldToken.replacedBy = newToken._id;

  await oldToken.save();

  const accessToken = jwt.sign(
    {
      userId: user._id
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "15m",
      algorithm: "HS256"
    }
  );

  return res
    .cookie("refreshToken", newRawToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/api/auth/refresh",
      maxAge: 7 * 24 * 60 * 60 * 1000
    })
    .status(200)
    .json({
      message: "Token refreshed successfully",
      accessToken
    });
};`} />

        <p className="text-[var(--text-secondary)]">
          This illustrates the rotation flow. For production, the lookup,
          active-token check, revocation and replacement must be performed
          atomically, preferably in a MongoDB transaction. Otherwise,
          simultaneous refresh requests could both succeed. Handle
          transaction conflicts and duplicate requests carefully.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. What is Refresh Token Reuse Detection?</h2>
        <p className="text-[var(--text-secondary)]">
          Suppose Refresh Token A was already used and replaced by Refresh
          Token B. If someone later tries to use Token A again, the backend
          knows that an invalidated token has been reused.
        </p>

        <CodeBlock code={`Token A
   |
   v
Successfully Rotated
   |
   +---- Token A Revoked
   |
   +---- Token B Created
              |
              v
        Attacker Uses Token A
              |
              v
        Reuse Detected
              |
              v
        Revoke Token Family
              |
              v
        Require Login Again`} />

        <p className="text-[var(--text-secondary)]">
          This can indicate that a Refresh Token was stolen. Revoking the
          token family forces the user to authenticate again.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Important Security Considerations</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Generate Refresh Tokens using cryptographically secure randomness.</li>
          <li>Store token hashes instead of raw Refresh Tokens.</li>
          <li>Rotate the token after each successful refresh.</li>
          <li>Revoke the old token so it cannot be reused.</li>
          <li>Detect reuse and revoke the related token family.</li>
          <li>Use database transactions or atomic operations to prevent concurrent refresh races.</li>
          <li>Set a maximum session lifetime if required.</li>
          <li>Use HTTP-only, Secure cookies for browser-based Refresh Tokens where appropriate.</li>
          <li>Protect refresh endpoints against CSRF.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Interview Questions</h2>
        {[
          ["What is Token Rotation?", "Replacing an old Refresh Token with a new one after successful use."],
          ["Why is Token Rotation important?", "It limits the usefulness of stolen Refresh Tokens and helps detect suspicious reuse."],
          ["What happens to the old Refresh Token?", "It is revoked and must not be accepted again."],
          ["What is Refresh Token Reuse Detection?", "Detecting an attempt to use a Refresh Token that has already been rotated or revoked."],
          ["What is a Token Family?", "A group of Refresh Tokens linked to the same login session through rotation."],
          ["Why store Refresh Token hashes?", "If the database leaks, attackers cannot directly use the stored hashes as Refresh Tokens."],
          ["Why use crypto.randomBytes()?", "It generates cryptographically secure random bytes suitable for creating opaque security tokens."],
          ["Why use a database transaction during rotation?", "It prevents concurrent requests from successfully rotating the same token more than once."],
          ["What happens when token reuse is detected?", "The backend can revoke the entire token family and require the user to log in again."],
          ["Is Token Rotation the same as Token Expiration?", "No. Expiration defines when a token becomes invalid; rotation replaces a valid token with a new one."],
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

export default TokenRotation;