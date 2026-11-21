import CodeBlock from "../../../components/common/CodeBlock";

function Nodemailer() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          AUTHENTICATION / EMAIL INTEGRATION
        </p>
        <h1 className="mt-2 text-3xl font-bold">Nodemailer</h1>
        <p className="mt-3 leading-7 text-[var(--text-secondary)]">
          Nodemailer is a Node.js library used to send emails from a backend
          application. We can integrate Gmail with Nodemailer using OAuth 2.0
          authentication, which allows our application to send emails without
          storing the user's Gmail password.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What is Nodemailer?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Nodemailer is a popular Node.js package that allows applications to
          send emails through SMTP servers and supported email services.
        </p>
        <p className="font-medium">Common use cases:</p>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Email verification</li>
          <li>OTP authentication</li>
          <li>Password reset emails</li>
          <li>Welcome emails</li>
          <li>Notifications and alerts</li>
        </ul>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. How Nodemailer Works</h2>
        <CodeBlock
          code={`User performs an action
          |
          v
Backend calls sendEmail()
          |
          v
Nodemailer creates email message
          |
          v
OAuth2 authentication
          |
          v
Google provides access to Gmail
          |
          v
Gmail SMTP server sends email
          |
          v
Recipient receives email`}
        />
        <p className="leading-7 text-[var(--text-secondary)]">
          We will use Google OAuth2 credentials to authenticate our backend
          application with Gmail.
        </p>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Requirements</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Node.js installed on your system.</li>
          <li>A Google account.</li>
          <li>Access to Google Cloud Console.</li>
          <li>Access to Google OAuth 2.0 Playground.</li>
          <li>A Node.js backend project.</li>
        </ul>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          4. Set Up Google Cloud Project
        </h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          First, we need a Google Cloud project to create OAuth2 credentials and
          enable Gmail API access.
        </p>
        <p className="font-semibold">Step 1: Open Google Cloud Console</p>
        <a
          href="https://console.cloud.google.com/"
          target="_blank"
          rel="noreferrer"
          className="text-[var(--accent-color)] underline break-all"
        >
          https://console.cloud.google.com/
        </a>
        <p className="text-[var(--text-secondary)]">
          Sign in using your Google account.
        </p>

        <p className="font-semibold">Step 2: Create a New Project</p>
        <ol className="list-decimal space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Click the project selector at the top.</li>
          <li>Click New Project.</li>
          <li>Enter a project name, such as Nodemailer Integration.</li>
          <li>Click Create.</li>
          <li>Select the newly created project.</li>
        </ol>

        <p className="font-semibold">Step 3: Enable Gmail API</p>
        <ol className="list-decimal space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Open APIs & Services.</li>
          <li>Click Library.</li>
          <li>Search for Gmail API.</li>
          <li>Open Gmail API.</li>
          <li>Click Enable.</li>
        </ol>
        <a
          href="https://console.cloud.google.com/apis/library/gmail.googleapis.com"
          target="_blank"
          rel="noreferrer"
          className="text-[var(--accent-color)] underline break-all"
        >
          Open Gmail API Library
        </a>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          5. Configure OAuth Consent Screen
        </h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Before creating OAuth credentials, configure the consent screen. It
          tells users which application is requesting access to their Google
          account.
        </p>
        <ol className="list-decimal space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Open Google Auth Platform or APIs & Services.</li>
          <li>Open the Branding or OAuth consent screen section.</li>
          <li>Enter your application name.</li>
          <li>Add your support email.</li>
          <li>Add your developer contact email.</li>
          <li>Save the configuration.</li>
          <li>
            Configure Audience and choose External if required for your use
            case.
          </li>
          <li>
            Add your Google account under Test users while the app is in testing
            mode.
          </li>
        </ol>
        <p className="leading-7 text-[var(--text-secondary)]">
          Google Cloud Console navigation may differ depending on the interface.
          New projects may show Google Auth Platform sections such as Branding,
          Audience, Data Access, and Clients.
        </p>
        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 text-sm text-[var(--text-secondary)]">
          <strong className="text-[var(--text-primary)]">Important:</strong>
          <p className="mt-2">
            While your application is in testing mode, only added test users can
            authorize it. For production use, review Google's OAuth verification
            and publishing requirements, especially for sensitive Gmail scopes.
          </p>
        </div>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Create OAuth2 Credentials</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Now we will generate the Client ID and Client Secret. These
          credentials identify our backend application to Google.
        </p>
        <ol className="list-decimal space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>
            Open Google Auth Platform → Clients, or APIs & Services →
            Credentials.
          </li>
          <li>Click Create Client.</li>
          <li>Select Web application as the application type.</li>
          <li>Enter a name, such as Nodemailer OAuth Client.</li>
          <li>Find Authorized redirect URIs.</li>
          <li>Add the OAuth Playground redirect URI shown below.</li>
          <li>Click Create.</li>
        </ol>
        <CodeBlock code={`https://developers.google.com/oauthplayground`} />
        <p className="leading-7 text-[var(--text-secondary)]">
          If you later implement your own OAuth callback in your backend, add
          that exact callback URL as another authorized redirect URI. For
          example:
        </p>
        <CodeBlock code={`http://localhost:3000/auth/google/callback`} />
        <p className="leading-7 text-[var(--text-secondary)]">
          The redirect URI used by OAuth Playground must match the URI
          registered in Google Cloud Console exactly.
        </p>
        <p className="font-semibold">After creating the credentials:</p>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Copy your Client ID.</li>
          <li>Copy your Client Secret.</li>
          <li>Keep both values private.</li>
        </ul>
        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <p className="font-semibold">Credentials generated:</p>
          <CodeBlock
            code={`CLIENT_ID=your-google-client-id
CLIENT_SECRET=your-google-client-secret`}
          />
        </div>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          7. Generate Refresh Token Using OAuth 2.0 Playground
        </h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Google Access Tokens expire after a limited time. A Refresh Token
          allows our application to obtain new Access Tokens without asking the
          user to authorize again each time.
        </p>
        <a
          href="https://developers.google.com/oauthplayground"
          target="_blank"
          rel="noreferrer"
          className="text-[var(--accent-color)] underline break-all"
        >
          Open Google OAuth 2.0 Playground
        </a>

        <p className="font-semibold">Step 1: Open OAuth Playground</p>
        <ol className="list-decimal space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Open OAuth 2.0 Playground.</li>
          <li>Click the settings icon in the top-right corner.</li>
        </ol>

        <p className="font-semibold">Step 2: Configure OAuth Credentials</p>
        <ol className="list-decimal space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Enable Use your own OAuth credentials.</li>
          <li>Paste your Client ID.</li>
          <li>Paste your Client Secret.</li>
          <li>Set Access type to Offline if the option is available.</li>
          <li>
            Keep the Playground redirect URI registered in Google Cloud Console.
          </li>
        </ol>

        <p className="font-semibold">Step 3: Select Gmail Scope</p>
        <p className="leading-7 text-[var(--text-secondary)]">
          For Nodemailer using Gmail SMTP with OAuth2, select the following
          scope:
        </p>
        <CodeBlock code={`https://mail.google.com/`} />
        <p className="leading-7 text-[var(--text-secondary)]">
          This is a broad Gmail scope. It grants extensive Gmail access. Request
          only the permissions your application actually needs. Gmail API scopes
          and SMTP OAuth scopes are not interchangeable in every integration.
        </p>

        <p className="font-semibold">Step 4: Authorize APIs</p>
        <ol className="list-decimal space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Click Authorize APIs.</li>
          <li>Select the Google account you want to send emails from.</li>
          <li>Review the permissions.</li>
          <li>Allow the requested access.</li>
        </ol>

        <p className="font-semibold">Step 5: Exchange Authorization Code</p>
        <ol className="list-decimal space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>After authorization, return to OAuth Playground.</li>
          <li>Open Step 2.</li>
          <li>Click Exchange authorization code for tokens.</li>
          <li>
            Google returns an Access Token and, when issued, a Refresh Token.
          </li>
        </ol>

        <p className="font-semibold">Step 6: Copy Refresh Token</p>
        <p className="leading-7 text-[var(--text-secondary)]">
          Copy the Refresh Token from the Step 2 response. We will store it in
          our backend environment variables.
        </p>
        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 text-sm text-[var(--text-secondary)]">
          <strong className="text-[var(--text-primary)]">Important:</strong>
          <p className="mt-2">
            Google may not return a new Refresh Token every time. If you do not
            receive one, check your OAuth consent and offline access
            configuration, and revoke the existing app authorization if
            necessary before authorizing again. Never share the Refresh Token.
          </p>
        </div>
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Initialize Node.js Project</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Create a new Node.js project or use your existing backend project.
        </p>
        <CodeBlock
          code={`mkdir nodemailer-project
cd nodemailer-project

npm init -y

npm install nodemailer dotenv`}
        />
        <p className="font-semibold">Packages:</p>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>
            <strong>nodemailer:</strong> Sends emails from Node.js.
          </li>
          <li>
            <strong>dotenv:</strong> Loads environment variables from a .env
            file.
          </li>
        </ul>
        <p className="leading-7 text-[var(--text-secondary)]">
          If your project already uses ES Modules, keep its existing
          configuration. Otherwise, add the following to package.json:
        </p>
        <CodeBlock
          code={`{
  "type": "module",
  "scripts": {
    "start": "node app.js"
  }
}`}
        />
      </section>

      {/* 9 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          9. Configure Environment Variables
        </h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Create a .env file in the root directory and add the credentials
          generated from Google Cloud Console and OAuth Playground.
        </p>
        <CodeBlock
          code={`CLIENT_ID=your-google-client-id
CLIENT_SECRET=your-google-client-secret
REFRESH_TOKEN=your-google-refresh-token
EMAIL_USER=your-gmail-address@gmail.com`}
        />
        <p className="font-semibold">What does each variable mean?</p>
        <div className="space-y-3">
          {[
            ["CLIENT_ID", "Identifies your application to Google."],
            [
              "CLIENT_SECRET",
              "Secret credential associated with your OAuth client.",
            ],
            [
              "REFRESH_TOKEN",
              "Allows Nodemailer to obtain new Google Access Tokens.",
            ],
            ["EMAIL_USER", "The Gmail account from which emails will be sent."],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="rounded-lg border border-[var(--border-color)] p-3"
            >
              <p className="font-semibold">{title}</p>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">
                {desc}
              </p>
            </div>
          ))}
        </div>
        <p className="font-semibold">Create .gitignore:</p>
        <CodeBlock
          code={`node_modules
.env`}
        />
        <p className="leading-7 text-[var(--text-secondary)]">
          Never upload your .env file to GitHub. If credentials are exposed,
          revoke or rotate them immediately.
        </p>
      </section>

      {/* 10 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          10. Create Nodemailer Transporter
        </h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          A transporter is an object that contains the configuration Nodemailer
          uses to connect to an email service and send messages.
        </p>
        <p className="font-semibold">Create email.js:</p>
        <CodeBlock
          code={`import "dotenv/config";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    type: "OAuth2",
    user: process.env.EMAIL_USER,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
  },
});

export default transporter;`}
        />
        <p className="leading-7 text-[var(--text-secondary)]">
          Nodemailer uses the Refresh Token to obtain an Access Token when
          required. You do not need to manually generate a new Access Token
          every time you send an email.
        </p>
      </section>

      {/* 11 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          11. Verify Email Configuration
        </h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Before sending emails, we can verify whether Nodemailer can
          authenticate and connect to the configured transport.
        </p>
        <CodeBlock
          code={`import transporter from "./email.js";

try {
  await transporter.verify();

  console.log("Email transporter is ready!");
} catch (error) {
  console.error("Email configuration failed:", error);
}`}
        />
        <p className="leading-7 text-[var(--text-secondary)]">
          verify() checks the connection and authentication configuration. It
          does not send an actual email.
        </p>
      </section>

      {/* 12 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          12. Create Send Email Function
        </h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          We can create a reusable function to send emails to different
          recipients with different subjects and content.
        </p>
        <p className="font-semibold">Update email.js:</p>
        <CodeBlock
          code={`import "dotenv/config";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    type: "OAuth2",
    user: process.env.EMAIL_USER,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
  },
});

export const sendEmail = async (to, subject, text, html) => {
  try {
    const info = await transporter.sendMail({
      from: \`"My Application" <\${process.env.EMAIL_USER}>\`,
      to,
      subject,
      text,
      html,
    });

    console.log("Email sent:", info.messageId);

    return info;
  } catch (error) {
    console.error("Email sending failed:", error);
    throw error;
  }
};

export default transporter;`}
        />
        <p className="leading-7 text-[var(--text-secondary)]">
          The function accepts four parameters:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>
            <strong>to:</strong> Recipient email address.
          </li>
          <li>
            <strong>subject:</strong> Email subject.
          </li>
          <li>
            <strong>text:</strong> Plain text email content.
          </li>
          <li>
            <strong>html:</strong> HTML email content.
          </li>
        </ul>
      </section>

      {/* 13 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">13. Use Send Email Function</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Now import sendEmail() into your application and call it whenever you
          need to send an email.
        </p>
        <p className="font-semibold">Create app.js:</p>
        <CodeBlock
          code={`import "dotenv/config";
import { sendEmail } from "./email.js";

const start = async () => {
  try {
    await sendEmail(
      "recipient@example.com",
      "Test Email",
      "This is a test email using Nodemailer.",
      \`
        <h2>Hello!</h2>
        <p>This email was sent using <b>Nodemailer</b>.</p>
      \`
    );

    console.log("Email sent successfully");
  } catch (error) {
    console.error(error);
  }
};

start();`}
        />
        <p className="font-semibold">Run the application:</p>
        <CodeBlock code={`node app.js`} />
        <p className="leading-7 text-[var(--text-secondary)]">
          If your OAuth credentials and Gmail permissions are correct, the
          recipient should receive the test email.
        </p>
      </section>

      {/* 14 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          14. Use Nodemailer in Express Controllers
        </h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          In a real backend application, we usually call the reusable
          sendEmail() function from controllers or service files.
        </p>
        <CodeBlock
          code={`import { sendEmail } from "../utils/email.js";

export const sendWelcomeEmail = async (req, res) => {
  try {
    const { email, name } = req.body;

    await sendEmail(
      email,
      "Welcome to Our Application",
      \`Hello \${name}, welcome to our application!\`,
      \`
        <h2>Welcome, \${name}!</h2>
        <p>Your account has been created successfully.</p>
      \`
    );

    return res.status(200).json({
      message: "Welcome email sent successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Unable to send welcome email",
    });
  }
};`}
        />
        <p className="leading-7 text-[var(--text-secondary)]">
          Always escape or safely render user-provided values before inserting
          them into HTML email templates to prevent HTML injection.
        </p>
      </section>

      {/* 15 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          15. Use Nodemailer for OTP and Email Verification
        </h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Once Nodemailer is configured, we can reuse the same sendEmail()
          function for different authentication features.
        </p>
        <CodeBlock
          code={`// OTP Email
await sendEmail(
  user.email,
  "Your OTP Code",
  \`Your OTP is \${otp}\`,
  \`<h2>Your OTP: \${otp}</h2>\`
);

// Email Verification
await sendEmail(
  user.email,
  "Verify Your Email",
  \`Verify your email using: \${verificationURL}\`,
  \`
    <h2>Email Verification</h2>
    <a href="\${verificationURL}">Verify Email</a>
  \`
);

// Password Reset
await sendEmail(
  user.email,
  "Reset Your Password",
  \`Reset your password using: \${resetURL}\`,
  \`
    <h2>Password Reset</h2>
    <a href="\${resetURL}">Reset Password</a>
  \`
);`}
        />
        <p className="leading-7 text-[var(--text-secondary)]">
          This is why creating one reusable email utility is better than
          configuring Nodemailer separately in every controller.
        </p>
      </section>

      {/* 16 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          16. Common Errors and Solutions
        </h2>
        <div className="space-y-3">
          {[
            [
              "Invalid Credentials",
              "Check CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN, and EMAIL_USER. Make sure the Refresh Token belongs to the same OAuth client and Gmail account.",
            ],
            [
              "Invalid Grant",
              "The Refresh Token may be revoked, expired, or issued for a different OAuth client. Generate a new one.",
            ],
            [
              "Access Not Configured",
              "Make sure Gmail API is enabled in your Google Cloud project.",
            ],
            [
              "Access Blocked",
              "Check OAuth consent screen settings, test users, requested scopes, and Google's verification requirements.",
            ],
            [
              "Redirect URI Mismatch",
              "The redirect URI in OAuth Playground must exactly match the URI registered in Google Cloud Console.",
            ],
            [
              "Email Not Sent",
              "Check SMTP connectivity, Gmail account permissions, credentials, and the error returned by Nodemailer.",
            ],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="rounded-xl border border-[var(--border-color)] p-4"
            >
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

            {/* 17 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          17. Handling Expired or Revoked Refresh Token
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Sometimes Nodemailer may fail to send emails because the Google
          OAuth2 Refresh Token becomes invalid or gets revoked. In this
          situation, we need to generate a new Refresh Token.
        </p>

        <h3 className="text-lg font-semibold">1. Why Does This Happen?</h3>

        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>The user revokes application access from their Google Account.</li>
          <li>
            The OAuth consent screen is in Testing mode. Refresh Tokens
            generally expire after 7 days for scopes other than basic identity
            scopes.
          </li>
          <li>Google invalidates the token due to security reasons.</li>
          <li>
            Too many Refresh Tokens have been generated for the same account
            and OAuth client.
          </li>
        </ul>

        <h3 className="text-lg font-semibold">
          2. How to Generate a New Refresh Token?
        </h3>

        <ol className="list-decimal space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Open Google OAuth 2.0 Playground.</li>
          <li>Click the Settings icon.</li>
          <li>Enable Use your own OAuth credentials.</li>
          <li>Enter your CLIENT_ID and CLIENT_SECRET.</li>
          <li>Enter the scope: https://mail.google.com/</li>
          <li>Authorize your Google account.</li>
          <li>Exchange the authorization code for tokens.</li>
          <li>Copy the newly generated Refresh Token.</li>
          <li>Replace the old REFRESH_TOKEN in your .env file.</li>
          <li>Restart your backend server.</li>
        </ol>

        <a
          href="https://developers.google.com/oauthplayground/"
          target="_blank"
          rel="noreferrer"
          className="text-[var(--accent-color)] underline"
        >
          Open Google OAuth Playground →
        </a>

        <h3 className="text-lg font-semibold">
          3. Handle Authentication Errors
        </h3>

        <p className="leading-7 text-[var(--text-secondary)]">
          We can handle authentication errors inside our existing sendEmail()
          function.
        </p>

        <CodeBlock
          code={`export const sendEmail = async (to, subject, text, html) => {
  try {
    const info = await transporter.sendMail({
      from: \`"My Application" <\${process.env.EMAIL_USER}>\`,
      to,
      subject,
      text,
      html,
    });

    console.log("Email sent:", info.messageId);

    return info;
  } catch (error) {
    console.error("Email sending failed:", error.message);

    if (
      error.code === "EAUTH" ||
      error.responseCode === 535
    ) {
      console.error(
        "Google OAuth2 authentication failed. Check or regenerate REFRESH_TOKEN."
      );
    }

    throw error;
  }
};`}
        />

        <h3 className="text-lg font-semibold">4. Important Points</h3>

        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>
            A Refresh Token usually does not expire automatically in normal
            production OAuth usage, but it can be revoked or invalidated.
          </li>
          <li>
            Generating a new Refresh Token requires Google authorization again.
          </li>
          <li>
            Never expose CLIENT_SECRET or REFRESH_TOKEN to the frontend.
          </li>
          <li>Restart the backend after updating the .env file.</li>
          <li>
            Error handling detects authentication failures but does not
            automatically generate a new Refresh Token.
          </li>
        </ul>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <p className="font-semibold text-[var(--accent-color)]">
            Remember
          </p>

          <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
            If the Google OAuth2 Refresh Token becomes invalid, authorize
            Google again, generate a new Refresh Token, update your .env
            file, and restart the backend server.
          </p>
        </div>
      </section>

      {/* 17 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          18. Important Security Practices
        </h2>
        <div className="space-y-2">
          {[
            [
              "Never expose credentials",
              "Keep Client Secret and Refresh Token on the backend.",
            ],
            [
              "Use environment variables",
              "Store credentials in .env and exclude it from Git.",
            ],
            ["Use HTTPS", "Use secure connections in production."],
            [
              "Limit OAuth scopes",
              "Request only the permissions your application needs.",
            ],
            [
              "Protect Refresh Tokens",
              "Treat Refresh Tokens like passwords. Revoke them if exposed.",
            ],
            [
              "Handle errors",
              "Catch authentication and email delivery errors.",
            ],
            [
              "Avoid excessive emails",
              "Add rate limits and abuse protection to email endpoints.",
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

      {/* Interview */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">19. Interview Questions</h2>
        {[
          [
            "What is Nodemailer?",
            "Nodemailer is a Node.js library used to send emails through SMTP and supported email services.",
          ],
          [
            "What is a transporter?",
            "A transporter is a configured Nodemailer object responsible for connecting to an email service and sending messages.",
          ],
          [
            "What is OAuth2?",
            "OAuth 2.0 is an authorization framework that allows an application to access resources with permission without using the account password.",
          ],
          [
            "What is Client ID?",
            "Client ID is a public identifier for an OAuth application.",
          ],
          [
            "What is Client Secret?",
            "Client Secret is a confidential credential used by the application to authenticate itself to Google.",
          ],
          [
            "What is a Refresh Token?",
            "A long-lived credential used to obtain new Access Tokens without asking the user to authorize every time.",
          ],
          [
            "Why do we use Offline Access?",
            "It allows the application to obtain Refresh Tokens so it can request new Access Tokens later.",
          ],
          [
            "What is OAuth 2.0 Playground?",
            "A Google tool used to test OAuth authorization flows and exchange authorization codes for tokens.",
          ],
          [
            "What is Gmail API?",
            "Google's API for interacting with Gmail resources.",
          ],
          [
            "What does transporter.verify() do?",
            "It checks whether the transporter can connect and authenticate. It does not send an email.",
          ],
          [
            "Why should we not store Gmail passwords?",
            "OAuth2 provides a safer delegated authorization mechanism without exposing the account password to the application.",
          ],
          [
            "Why is a Refresh Token sensitive?",
            "Anyone who obtains it may be able to obtain new Access Tokens within the granted permissions.",
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
              <span className="float-right text-[var(--accent-color)] transition-transform group-open:rotate-180">
                ⌄
              </span>
            </summary>
            <p className="mt-3 border-t border-[var(--border-color)] pt-3 text-sm leading-6 text-[var(--text-secondary)]">
              {answer}
            </p>
          </details>
        ))}
      </section>

      {/* References */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">20. Official Documentation</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>
            <a
              href="https://nodemailer.com/"
              target="_blank"
              rel="noreferrer"
              className="text-[var(--accent-color)] underline"
            >
              Nodemailer Documentation
            </a>
          </li>
          <li>
            <a
              href="https://developers.google.com/identity/protocols/oauth2"
              target="_blank"
              rel="noreferrer"
              className="text-[var(--accent-color)] underline"
            >
              Google OAuth 2.0 Documentation
            </a>
          </li>
          <li>
            <a
              href="https://developers.google.com/oauthplayground"
              target="_blank"
              rel="noreferrer"
              className="text-[var(--accent-color)] underline"
            >
              Google OAuth 2.0 Playground
            </a>
          </li>
          <li>
            <a
              href="https://developers.google.com/gmail/api"
              target="_blank"
              rel="noreferrer"
              className="text-[var(--accent-color)] underline"
            >
              Gmail API Documentation
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Nodemailer;
