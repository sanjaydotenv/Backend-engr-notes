import CodeBlock from "../../../components/common/CodeBlock";

function OTPAuthentication() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          AUTHENTICATION / 15
        </p>
        <h1 className="mt-2 text-3xl font-bold">OTP Authentication</h1>
        <p className="mt-3 text-[var(--text-secondary)] leading-7">
          OTP Authentication is a method of verifying a user's identity using a
          One-Time Password. The OTP is usually sent to the user's registered
          email address or mobile number and is valid for a limited time.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          1. What is OTP Authentication?
        </h2>
        <p className="text-[var(--text-secondary)] leading-7">
          OTP stands for <strong>One-Time Password</strong>. It is a temporary
          numeric or alphanumeric code used to verify a user's identity.
        </p>
        <p className="text-[var(--text-secondary)] leading-7">
          Unlike a normal password, an OTP is designed to be used only once and
          usually expires after a short period.
        </p>
        <CodeBlock
          code={`Example:

User enters email:
mayur@example.com

Backend generates OTP:
483921

Backend sends OTP to user's email.

User enters:
483921

Backend verifies the OTP.

If valid:
User is verified.`}
        />
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Why Do We Use OTP?</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          OTP provides an additional verification step. It helps confirm that
          the user has access to their registered email address or phone number.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            [
              "Email Verification",
              "Confirm that a user can access their email.",
            ],
            ["Login Verification", "Verify a user before allowing login."],
            ["Password Reset", "Confirm identity before changing a password."],
            [
              "Sensitive Actions",
              "Add verification before important account changes.",
            ],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4"
            >
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          3. How OTP Authentication Works
        </h2>
        <p className="text-[var(--text-secondary)] leading-7">
          The backend generates a random OTP, stores a secure hash of it, and
          sends the original OTP to the user.
        </p>
        <CodeBlock
          code={`1. User requests OTP
          |
          v
2. Backend generates OTP
          |
          v
3. Backend hashes OTP
          |
          v
4. Hash is stored in database
          |
          v
5. Original OTP is sent by email
          |
          v
6. User enters OTP
          |
          v
7. Backend hashes entered OTP
          |
          v
8. Backend compares both hashes
          |
          v
     Is OTP valid?
       /       \\
     Yes        No
      |          |
      v          v
  Verified    Rejected`}
        />
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Types of OTP</h2>
        <div className="space-y-3">
          <div className="rounded-xl border border-[var(--border-color)] p-4">
            <h3 className="font-semibold">A. Email OTP</h3>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              The OTP is sent to the user's registered email address.
            </p>
            <CodeBlock
              code={`Email: mayur@example.com
OTP: 483921`}
            />
          </div>
          <div className="rounded-xl border border-[var(--border-color)] p-4">
            <h3 className="font-semibold">B. SMS OTP</h3>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              The OTP is sent to the user's registered mobile number through an
              SMS provider.
            </p>
            <CodeBlock
              code={`Mobile: +91XXXXXXXXXX
OTP: 729184`}
            />
          </div>
          <div className="rounded-xl border border-[var(--border-color)] p-4">
            <h3 className="font-semibold">C. TOTP (Time-Based OTP)</h3>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              TOTP is generated by an authenticator application using a shared
              secret and the current time. The code changes after a short
              interval, commonly 30 seconds.
            </p>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              Example: Google Authenticator and Microsoft Authenticator.
            </p>
          </div>
        </div>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Generate OTP in Node.js</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Node.js provides the built-in <strong>crypto</strong> module. We can
          use its randomInt() method to generate a cryptographically secure
          random number.
        </p>
        <CodeBlock
          code={`import crypto from "crypto";

const generateOTP = () => {
  return crypto.randomInt(100000, 1000000).toString();
};

const otp = generateOTP();

console.log(otp); // Example: 483921`}
        />
        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 text-sm text-[var(--text-secondary)]">
          <strong className="text-[var(--text-primary)]">
            Why randomInt()?
          </strong>
          <p className="mt-2">
            Math.random() is not designed for security-sensitive random values.
            crypto.randomInt() uses a cryptographically secure random number
            generator.
          </p>
        </div>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Why Should We Hash OTP?</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          We should not store the original OTP directly in the database.
          Instead, we store its hash. If someone gets unauthorized access to the
          database, they cannot immediately read the original OTP.
        </p>
        <CodeBlock
          code={`import crypto from "crypto";

const hashOTP = (otp) => {
  return crypto
    .createHash("sha256")
    .update(otp)
    .digest("hex");
};

const otp = "483921";
const hashedOTP = hashOTP(otp);

console.log(hashedOTP);`}
        />
        <p className="text-[var(--text-secondary)] leading-7">
          During verification, we hash the OTP entered by the user and compare
          it with the stored hash. For a production implementation, also use a
          server-side secret (HMAC) so that a database leak alone cannot enable
          easy offline guessing of a six-digit OTP.
        </p>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. OTP Expiration</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          OTP should be valid only for a limited period. For example, an OTP may
          expire after 5 minutes.
        </p>
        <CodeBlock
          code={`const otpExpiresAt = new Date(
  Date.now() + 5 * 60 * 1000
);

// 5 * 60 * 1000 = 5 minutes

if (Date.now() > otpExpiresAt.getTime()) {
  throw new Error("OTP has expired");
}`}
        />
        <p className="text-[var(--text-secondary)] leading-7">
          Expiration prevents users from using old OTPs indefinitely.
        </p>
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. OTP Database Model</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          We can create a separate MongoDB collection to store OTP verification
          records. Each record can contain the user's email, OTP hash,
          expiration time, and verification attempts.
        </p>
        <CodeBlock
          code={`import mongoose from "mongoose";

const otpSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    otpHash: {
      type: String,
      required: true,
    },

    expiresAt: {
      type: Date,
      required: true,
    },

    attempts: {
      type: Number,
      default: 0,
    },

    lastSentAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const OTP = mongoose.model("OTP", otpSchema);

export default OTP;`}
        />
        <p className="text-[var(--text-secondary)] leading-7">
          We can also create a TTL index on expiresAt to let MongoDB
          automatically delete expired OTP records.
        </p>
        <CodeBlock
          code={`otpSchema.index(
  { expiresAt: 1 },
  { expireAfterSeconds: 0 }
);`}
        />
        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 text-sm text-[var(--text-secondary)]">
          <strong className="text-[var(--text-primary)]">Important:</strong>
          <p className="mt-2">
            MongoDB TTL deletion is not immediate. Therefore, always check
            expiresAt in your verification logic. Never depend on TTL deletion
            to decide whether an OTP is valid.
          </p>
        </div>
      </section>

      {/* 9 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Send OTP Through Email</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          We can use Nodemailer to send OTP emails through an email service.
        </p>
        <CodeBlock code={`npm install nodemailer`} />
        <p className="text-sm font-semibold">Create a mailer utility:</p>
        <CodeBlock
          code={`import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const sendOTPEmail = async (email, otp) => {
  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: email,
    subject: "Your Verification OTP",
    text: \`Your OTP is \${otp}. It expires in 5 minutes.\`,
    html: \`
      <h2>Email Verification</h2>
      <p>Your OTP is:</p>
      <h1>\${otp}</h1>
      <p>This OTP expires in 5 minutes.</p>
      <p>Do not share this code with anyone.</p>
    \`,
  });
};`}
        />
        <p className="text-sm font-semibold">Environment variables:</p>
        <CodeBlock
          code={`SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@example.com
SMTP_PASS=your-email-app-password
OTP_SECRET=your-long-random-secret`}
        />
        <p className="text-[var(--text-secondary)] leading-7">
          Use credentials from your actual SMTP provider. Never expose SMTP
          passwords or OTP secrets in frontend code or public repositories.
        </p>
      </section>

      {/* 10 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          10. Create an OTP Hash Using HMAC
        </h2>
        <p className="text-[var(--text-secondary)] leading-7">
          A six-digit OTP has a small number of possible combinations. A plain
          SHA-256 hash can be guessed by trying all combinations. HMAC adds a
          server-side secret to the hashing process.
        </p>
        <CodeBlock
          code={`import crypto from "crypto";

const hashOTP = (otp) => {
  return crypto
    .createHmac("sha256", process.env.OTP_SECRET)
    .update(otp)
    .digest("hex");
};`}
        />
        <p className="text-[var(--text-secondary)] leading-7">
          Keep OTP_SECRET private and stable while outstanding OTP records
          exist. Never send it to the client.
        </p>
      </section>

      {/* 11 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">11. Request OTP API</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          When a user requests an OTP, the backend generates a new code, hashes
          it, saves the hash, and sends the original code by email.
        </p>
        <CodeBlock
          code={`import crypto from "crypto";
import OTP from "../models/otp.model.js";
import { sendOTPEmail } from "../utils/mailer.js";

const hashOTP = (otp) => {
  return crypto
    .createHmac("sha256", process.env.OTP_SECRET)
    .update(otp)
    .digest("hex");
};

export const requestOTP = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        message: "Email is required",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const existingOTP = await OTP.findOne({
      email: normalizedEmail,
    });

    // Resend cooldown: 60 seconds
    if (
      existingOTP &&
      Date.now() - existingOTP.lastSentAt.getTime() < 60000
    ) {
      return res.status(429).json({
        message: "Please wait before requesting another OTP",
      });
    }

    const otp = crypto.randomInt(100000, 1000000).toString();

    const otpHash = hashOTP(otp);

    const expiresAt = new Date(
      Date.now() + 5 * 60 * 1000
    );

    await OTP.findOneAndUpdate(
      { email: normalizedEmail },
      {
        otpHash,
        expiresAt,
        attempts: 0,
        lastSentAt: new Date(),
      },
      {
        upsert: true,
        new: true,
        setDefaultsOnInsert: true,
      }
    );

    await sendOTPEmail(normalizedEmail, otp);

    return res.status(200).json({
      message: "OTP sent successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to send OTP",
    });
  }
};`}
        />
        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 text-sm text-[var(--text-secondary)]">
          <strong className="text-[var(--text-primary)]">
            How upsert works:
          </strong>
          <p className="mt-2">
            If an OTP record already exists for the email, it updates that
            record. If no record exists, it creates a new one.
          </p>
        </div>
      </section>

      {/* 12 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">12. Verify OTP API</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          When the user submits the OTP, the backend finds the OTP record,
          checks its expiration and attempt limit, and compares the hashes.
        </p>
        <CodeBlock
          code={`import crypto from "crypto";
import OTP from "../models/otp.model.js";

const hashOTP = (otp) => {
  return crypto
    .createHmac("sha256", process.env.OTP_SECRET)
    .update(otp)
    .digest("hex");
};

export const verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!email || !/^\\d{6}$/.test(String(otp))) {
      return res.status(400).json({
        message: "Valid email and 6-digit OTP are required",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const otpRecord = await OTP.findOne({
      email: normalizedEmail,
    });

    if (!otpRecord) {
      return res.status(400).json({
        message: "OTP not found or expired",
      });
    }

    if (otpRecord.expiresAt.getTime() < Date.now()) {
      await OTP.deleteOne({ _id: otpRecord._id });

      return res.status(400).json({
        message: "OTP has expired",
      });
    }

    if (otpRecord.attempts >= 5) {
      await OTP.deleteOne({ _id: otpRecord._id });

      return res.status(429).json({
        message: "Too many attempts. Request a new OTP.",
      });
    }

    const enteredHash = hashOTP(String(otp));

    const storedBuffer = Buffer.from(otpRecord.otpHash, "hex");
    const enteredBuffer = Buffer.from(enteredHash, "hex");

    const isValid =
      storedBuffer.length === enteredBuffer.length &&
      crypto.timingSafeEqual(storedBuffer, enteredBuffer);

    if (!isValid) {
      otpRecord.attempts += 1;
      await otpRecord.save();

      return res.status(400).json({
        message: "Invalid OTP",
      });
    }

    // OTP is single-use
    await OTP.deleteOne({ _id: otpRecord._id });

    return res.status(200).json({
      message: "OTP verified successfully",
      verified: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "OTP verification failed",
    });
  }
};`}
        />
        <p className="text-[var(--text-secondary)] leading-7">
          timingSafeEqual() compares two buffers in a way designed to avoid
          timing-based comparison leaks. We also delete the OTP after successful
          verification so that it cannot be reused.
        </p>
      </section>

      {/* 13 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">13. Create OTP Routes</h2>
        <CodeBlock
          code={`import express from "express";
import {
  requestOTP,
  verifyOTP,
} from "../controllers/otp.controller.js";

const router = express.Router();

router.post("/request", requestOTP);
router.post("/verify", verifyOTP);

export default router;`}
        />
        <p className="text-sm font-semibold">Mount routes in app.js:</p>
        <CodeBlock
          code={`import otpRoutes from "./routes/otp.routes.js";

app.use("/api/otp", otpRoutes);`}
        />
        <p className="text-sm font-semibold">API endpoints:</p>
        <CodeBlock
          code={`POST /api/otp/request
POST /api/otp/verify`}
        />
      </section>

      {/* 14 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">14. Test OTP APIs</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          We can test these APIs using Postman or Thunder Client.
        </p>
        <h3 className="font-semibold">Request OTP</h3>
        <CodeBlock
          code={`POST http://localhost:3000/api/otp/request

Body (JSON):

{
  "email": "mayur@example.com"
}`}
        />
        <h3 className="font-semibold">Verify OTP</h3>
        <CodeBlock
          code={`POST http://localhost:3000/api/otp/verify

Body (JSON):

{
  "email": "mayur@example.com",
  "otp": "483921"
}`}
        />
        <p className="text-[var(--text-secondary)] leading-7">
          The OTP value above is only an example. Use the actual OTP received in
          your email.
        </p>
      </section>

      {/* 15 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          15. OTP Security Best Practices
        </h2>
        <div className="space-y-2">
          {[
            [
              "Use secure randomness",
              "Generate OTPs with crypto.randomInt(), not Math.random().",
            ],
            ["Set expiration", "Keep OTP validity short, such as 5 minutes."],
            ["Hash OTP", "Store an HMAC hash instead of the original OTP."],
            [
              "Limit attempts",
              "Allow only a limited number of verification attempts.",
            ],
            [
              "Add resend cooldown",
              "Prevent users from requesting OTPs repeatedly.",
            ],
            [
              "Rate limit APIs",
              "Limit requests by IP and account to prevent abuse.",
            ],
            [
              "Single use",
              "Delete or invalidate the OTP after successful verification.",
            ],
            [
              "Avoid account enumeration",
              "Do not reveal whether an email is registered when that information should remain private.",
            ],
            [
              "Protect secrets",
              "Keep SMTP credentials and OTP_SECRET in environment variables.",
            ],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="flex gap-3 rounded-lg border border-[var(--border-color)] p-3"
            >
              <span className="text-[var(--accent-color)]">✓</span>
              <div>
                <p className="font-medium">{title}</p>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 16 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          16. Important Difference: OTP vs TOTP
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[500px] text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="p-3">Feature</th>
                <th className="p-3">OTP</th>
                <th className="p-3">TOTP</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Generation</td>
                <td className="p-3">Generated by server</td>
                <td className="p-3">Generated using secret + time</td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Delivery</td>
                <td className="p-3">Email or SMS commonly</td>
                <td className="p-3">Authenticator app</td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Storage</td>
                <td className="p-3">Server stores verification record</td>
                <td className="p-3">Server stores shared secret</td>
              </tr>
              <tr>
                <td className="p-3">Example</td>
                <td className="p-3">Email verification code</td>
                <td className="p-3">Google Authenticator code</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Interview */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">17. Interview Questions</h2>
        {[
          [
            "What is OTP Authentication?",
            "OTP Authentication verifies a user's identity using a temporary One-Time Password.",
          ],
          ["What does OTP stand for?", "One-Time Password."],
          [
            "Why do we use OTP?",
            "To verify access to an email address or phone number and add another verification step.",
          ],
          [
            "How do you generate a secure OTP in Node.js?",
            "Use the crypto module's randomInt() method.",
          ],
          [
            "Why should we hash OTP before storing it?",
            "To prevent the original OTP from being directly exposed if the database is accessed.",
          ],
          [
            "What is OTP expiration?",
            "It is the time limit after which an OTP becomes invalid.",
          ],
          [
            "What is the difference between OTP and TOTP?",
            "A typical server-generated OTP is created and delivered by the server. TOTP is calculated from a shared secret and the current time.",
          ],
          [
            "What is a resend cooldown?",
            "A minimum waiting period before a user can request another OTP.",
          ],
          [
            "Why should OTP be single-use?",
            "To prevent the same OTP from being reused after successful verification.",
          ],
          [
            "What is a TTL index in MongoDB?",
            "A special index that automatically removes documents after a specified expiration time. Its deletion is not immediate.",
          ],
          [
            "Why use crypto.timingSafeEqual()?",
            "To compare secret-derived buffers while reducing timing-based information leaks.",
          ],
          [
            "Can email OTP alone guarantee that a user is the real account owner?",
            "No. It confirms access to that email at that moment, but it does not prove a real-world identity.",
          ],
        ].map(([question, answer], index) => (
          <details
            key={index}
            className="group rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4"
          >
            <summary className="cursor-pointer list-none font-medium">
              <span className="mr-2 text-[var(--accent-color)]">
                Q{index + 1}.
              </span>
              {question}
              <span className="float-right text-[var(--accent-color)] group-open:rotate-180 transition-transform">
                ⌄
              </span>
            </summary>
            <p className="mt-3 border-t border-[var(--border-color)] pt-3 text-sm leading-6 text-[var(--text-secondary)]">
              {answer}
            </p>
          </details>
        ))}
      </section>
    </div>
  );
}

export default OTPAuthentication;
