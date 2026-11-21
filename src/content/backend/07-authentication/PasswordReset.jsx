import CodeBlock from "../../../components/common/CodeBlock";

function PasswordReset() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          AUTHENTICATION / PASSWORD RESET
        </p>
        <h1 className="mt-2 text-3xl font-bold">Password Reset</h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          Password Reset allows users to create a new password when they forget
          their existing password. It uses a secure, temporary token sent to the
          user's registered email.
        </p>
      </div>

      {/* 1. How Password Reset Works */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. How Password Reset Works</h2>
        <p className="text-[var(--text-secondary)]">
          The password reset process has two main steps:
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-2 text-sm">
          <p>1. User enters their registered email.</p>
          <p>2. Server generates a secure reset token.</p>
          <p>3. Server stores the hashed token in MongoDB.</p>
          <p>4. Server sends the original token through email.</p>
          <p>5. User opens the reset link and enters a new password.</p>
          <p>6. Server verifies the token and updates the password.</p>
          <p>7. Server deletes the reset token.</p>
        </div>
      </section>

      {/* 2. Generate Reset Token */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Generate a Reset Token</h2>
        <p className="text-[var(--text-secondary)]">
          We use Node.js <code>crypto</code> to generate a secure random token.
          We store its hash in the database instead of storing the original
          token.
        </p>

        <CodeBlock
          code={`import crypto from "crypto";

const resetToken = crypto.randomBytes(32).toString("hex");

const hashedToken = crypto
  .createHash("sha256")
  .update(resetToken)
  .digest("hex");`}
        />

        <div className="rounded-lg border border-[var(--border-color)] p-4 text-sm">
          <p>
            <strong>resetToken:</strong> Sent to the user's email.
          </p>
          <p className="mt-2">
            <strong>hashedToken:</strong> Stored in MongoDB.
          </p>
        </div>
      </section>

      {/* 3. User Schema */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Add Fields to User Schema</h2>
        <p className="text-[var(--text-secondary)]">
          Add two fields to the User schema to store the reset token and its
          expiration time.
        </p>

        <CodeBlock
          code={`resetPasswordToken: {
  type: String,
  default: null,
},

resetPasswordExpires: {
  type: Date,
  default: null,
},`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          The token should have a short expiry time, such as 15 minutes.
        </p>
      </section>

      {/* 4. Forgot Password Controller */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Forgot Password Controller</h2>
        <p className="text-[var(--text-secondary)]">
          This controller generates the token, saves its hash, and sends the
          reset link to the user's email.
        </p>

        <CodeBlock
          code={`import crypto from "crypto";
import User from "../models/user.model.js";
import { sendEmail } from "../utils/sendEmail.js";

export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });

    // Always return a generic response
    if (!user) {
      return res.status(200).json({
        message: "If the account exists, a reset link will be sent.",
      });
    }

    const resetToken = crypto.randomBytes(32).toString("hex");

    const hashedToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");

    user.resetPasswordToken = hashedToken;
    user.resetPasswordExpires = Date.now() + 15 * 60 * 1000;

    await user.save();

    const resetURL = \`http://localhost:5173/reset-password/\${resetToken}\`;

    await sendEmail(
      user.email,
      "Password Reset",
      \`Reset your password: \${resetURL}\`,
      \`<a href="\${resetURL}">Reset Password</a>\`
    );

    return res.status(200).json({
      message: "If the account exists, a reset link will be sent.",
    });
  } catch (error) {
    console.error("Forgot password error:", error);

    return res.status(200).json({
      message: "If the account exists, a reset link will be sent.",
    });
  }
};`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          The response is the same whether the email exists or not. This
          prevents attackers from discovering registered email addresses.
        </p>
      </section>

      {/* 5. Reset Password Controller */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Reset Password Controller</h2>
        <p className="text-[var(--text-secondary)]">
          When the user submits a new password, the server hashes the token
          received from the URL and checks whether it matches a valid, unexpired
          token in MongoDB.
        </p>

        <CodeBlock
          code={`import crypto from "crypto";
import bcrypt from "bcrypt";
import User from "../models/user.model.js";

export const resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    const hashedToken = crypto
      .createHash("sha256")
      .update(token)
      .digest("hex");

    const user = await User.findOne({
      resetPasswordToken: hashedToken,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({
        message: "Invalid or expired reset link.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    user.password = hashedPassword;
    user.resetPasswordToken = null;
    user.resetPasswordExpires = null;

    await user.save();

    return res.status(200).json({
      message: "Password reset successfully.",
    });
  } catch (error) {
    console.error("Reset password error:", error);

    return res.status(500).json({
      message: "Something went wrong.",
    });
  }
};`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          After a successful reset, the token fields are cleared. Therefore, the
          same reset link cannot be used again.
        </p>
      </section>

      {/* 6. Routes */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Create Routes</h2>
        <CodeBlock
          code={`import express from "express";
import {
  forgotPassword,
  resetPassword,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

export default router;`}
        />
      </section>

      {/* 7. Frontend Requests */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Frontend API Requests</h2>
        <p className="text-[var(--text-secondary)]">
          The frontend sends the email to request a reset link. The reset page
          sends the token and new password to the backend.
        </p>

        <CodeBlock
          code={`// Request reset link
await axios.post("/api/auth/forgot-password", {
  email,
});

// Reset password
await axios.post(\`/api/auth/reset-password/\${token}\`, {
  password,
});`}
        />
      </section>

      {/* 8. Important Security Practices */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Security Practices</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>Generate tokens using crypto.randomBytes().</li>
          <li>Store only the hashed token in the database.</li>
          <li>Set a short expiration time for reset tokens.</li>
          <li>Use HTTPS for password reset links in production.</li>
          <li>Validate the new password on the backend.</li>
          <li>Clear the token after a successful password reset.</li>
          <li>Rate-limit password reset requests.</li>
          <li>
            Revoke existing sessions or refresh tokens after a password reset.
          </li>
        </ul>
      </section>

      {/* 9. Interview Questions */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Interview Questions</h2>

        {[
          {
            q: "What is Password Reset?",
            a: "It allows users to create a new password when they forget their existing password.",
          },
          {
            q: "Why do we use a reset token?",
            a: "A reset token proves that the user has access to the registered email and allows a temporary password reset.",
          },
          {
            q: "Why do we hash the reset token?",
            a: "If the database is compromised, attackers cannot directly use the stored hashed token as a reset link.",
          },
          {
            q: "Why does a reset token expire?",
            a: "To reduce the risk of an old or leaked reset link being used.",
          },
          {
            q: "Why should a reset token be single-use?",
            a: "To prevent someone from reusing the same reset link after the password has been changed.",
          },
          {
            q: "Why should we return a generic response for forgot-password requests?",
            a: "To prevent attackers from discovering which email addresses are registered.",
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

export default PasswordReset;
