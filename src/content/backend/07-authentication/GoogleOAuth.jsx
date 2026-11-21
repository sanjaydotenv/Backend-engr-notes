import CodeBlock from "../../../components/common/CodeBlock";

function GoogleOAuth() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          AUTHENTICATION / 14
        </p>
        <h1 className="mt-2 text-3xl font-bold">Google OAuth</h1>
        <p className="mt-3 text-[var(--text-secondary)] leading-7">
          Google OAuth allows users to log in to an application using their
          Google account instead of creating a separate password. In this
          tutorial, we will build a complete Google login system using Node.js,
          Express, Passport.js, MongoDB, and JWT.
        </p>
      </div>

      {/* INTRODUCTION */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What is Google OAuth?</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Google OAuth allows users to authenticate with their Google accounts.
          Instead of creating a new password, users can use their existing
          Google account to access an application.
        </p>
        <p className="text-[var(--text-secondary)] leading-7">
          Google Sign-In generally uses OpenID Connect (OIDC), which is an
          identity layer built on top of OAuth 2.0.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <p className="font-semibold">OAuth 2.0 vs OpenID Connect</p>
          <p className="mt-2 text-sm text-[var(--text-secondary)] leading-6">
            OAuth 2.0 is primarily an authorization framework. OpenID Connect
            adds authentication and provides an ID Token containing identity
            information about the user.
          </p>
        </div>

        <h3 className="font-semibold">What will we build?</h3>
        <ul className="list-disc pl-5 space-y-2 text-[var(--text-secondary)]">
          <li>User clicks Continue with Google.</li>
          <li>Google asks the user to select an account.</li>
          <li>Google redirects the user back to our backend.</li>
          <li>Backend finds or creates the user in MongoDB.</li>
          <li>Backend generates its own JWT.</li>
          <li>User is redirected to the frontend.</li>
        </ul>
      </section>

      {/* PREREQUISITES */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Prerequisites</h2>
        <p className="text-[var(--text-secondary)]">
          Before we begin, ensure you have the following:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-[var(--text-secondary)]">
          <li>
            <strong>Node.js</strong> installed on your machine.
          </li>
          <li>
            A <strong>Google account</strong> to create OAuth credentials.
          </li>
          <li>Basic knowledge of JavaScript and Node.js.</li>
          <li>Basic knowledge of Express.js and MongoDB.</li>
        </ul>
      </section>

      {/* STEP 1 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Step 1: Set Up Google OAuth Credentials
        </h2>

        <p className="text-[var(--text-secondary)] leading-7">
          To authenticate users via Google, you'll need to set up OAuth 2.0
          credentials in the Google Cloud Console.
        </p>

        <div className="space-y-3">
          <h3 className="font-semibold">1. Access the Google Cloud Console</h3>
          <ol className="list-disc pl-5 space-y-2 text-[var(--text-secondary)]">
            <li>
              Navigate to{" "}
              <a
                href="https://console.cloud.google.com/"
                target="_blank"
                rel="noreferrer"
                className="text-[var(--accent-color)] underline"
              >
                Google Cloud Console
              </a>
              .
            </li>
            <li>Sign in with your Google account.</li>
          </ol>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold">2. Create a New Project</h3>
          <ol className="list-disc pl-5 space-y-2 text-[var(--text-secondary)]">
            <li>Click on the project dropdown at the top of the page.</li>
            <li>Select New Project.</li>
            <li>Provide a name for your project.</li>
            <li>Click Create.</li>
            <li>After creation, select your newly created project.</li>
          </ol>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold">3. Enable the OAuth Consent Screen</h3>
          <ol className="list-disc pl-5 space-y-2 text-[var(--text-secondary)]">
            <li>
              In the navigation menu, go to APIs &amp; Services → OAuth consent
              screen (or Google Auth Platform → Branding in the newer
              interface).
            </li>
            <li>
              Choose External for user type and click Create or Get Started.
            </li>
            <li>Fill in the required details:</li>
          </ol>

          <ul className="list-disc pl-10 space-y-2 text-[var(--text-secondary)]">
            <li>
              <strong>App name:</strong> Your application's name.
            </li>
            <li>
              <strong>User support email:</strong> Your email address.
            </li>
            <li>
              <strong>Developer contact information:</strong> Your email
              address.
            </li>
          </ul>

          <ol
            start={4}
            className="list-disc pl-5 space-y-2 text-[var(--text-secondary)]"
          >
            <li>Save and continue.</li>
            <li>Under Audience, configure your app as External.</li>
            <li>
              If your app is in Testing mode, add your Gmail account under Test
              users.
            </li>
          </ol>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold">4. Create OAuth 2.0 Credentials</h3>
          <ol className="list-disc pl-5 space-y-2 text-[var(--text-secondary)]">
            <li>
              Navigate to APIs &amp; Services → Credentials (or Google Auth
              Platform → Clients).
            </li>
            <li>
              Click Create Credentials and select OAuth client ID or Create
              Client.
            </li>
            <li>Choose Web application as the application type.</li>
            <li>Enter a name for your OAuth client.</li>
            <li>Under Authorized JavaScript origins, add:</li>
          </ol>

          <CodeBlock code={`http://localhost:5173`} />

          <ol
            start={6}
            className="list-disc pl-5 space-y-2 text-[var(--text-secondary)]"
          >
            <li>Set the Authorized redirect URIs to:</li>
          </ol>

          <CodeBlock code={`http://localhost:3000/auth/google/callback`} />

          <ol
            start={7}
            className="list-disc pl-5 space-y-2 text-[var(--text-secondary)]"
          >
            <li>Click Create.</li>
            <li>Note down the Client ID and Client Secret displayed.</li>
          </ol>
        </div>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <p className="font-semibold">Important</p>
          <p className="mt-2 text-sm text-[var(--text-secondary)] leading-6">
            The redirect URI must exactly match the callback URL configured in
            your backend. Never expose your Google Client Secret in frontend
            code or commit it to GitHub.
          </p>
        </div>
      </section>

      {/* STEP 2 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Step 2: Initialize the Node.js Project
        </h2>

        <h3 className="font-semibold">
          1. Create a New Directory for Your Project
        </h3>
        <p className="text-[var(--text-secondary)]">
          Open your terminal or command prompt and run:
        </p>
        <CodeBlock
          code={`mkdir google-auth-jwt
cd google-auth-jwt`}
        />

        <h3 className="font-semibold">2. Initialize the Project</h3>
        <p className="text-[var(--text-secondary)]">
          Initialize a new Node.js project by running:
        </p>
        <CodeBlock code={`npm init -y`} />
        <p className="text-sm text-[var(--text-secondary)]">
          This will create a package.json file with default settings.
        </p>

        <h3 className="font-semibold">3. Install Required Dependencies</h3>
        <p className="text-[var(--text-secondary)]">
          Install the necessary packages:
        </p>
        <CodeBlock
          code={`npm install express passport passport-google-oauth20 jsonwebtoken dotenv`}
        />

        <ul className="list-disc pl-5 space-y-2 text-[var(--text-secondary)]">
          <li>
            <strong>express:</strong> Web framework for Node.js.
          </li>
          <li>
            <strong>passport:</strong> Authentication middleware.
          </li>
          <li>
            <strong>passport-google-oauth20:</strong> Google OAuth 2.0 strategy
            for Passport.
          </li>
          <li>
            <strong>jsonwebtoken:</strong> Library to work with JSON Web Tokens.
          </li>
          <li>
            <strong>dotenv:</strong> Loads environment variables from a .env
            file.
          </li>
        </ul>

        <h3 className="font-semibold">4. Install Additional Packages</h3>
        <p className="text-[var(--text-secondary)] leading-7">
          For our complete MongoDB-based implementation, we also need Mongoose.
          We will use express-session to temporarily store OAuth state and
          connect-mongo to persist that session.
        </p>
        <CodeBlock
          code={`npm install mongoose express-session connect-mongo cors`}
        />

        <ul className="list-disc pl-5 space-y-2 text-sm text-[var(--text-secondary)]">
          <li>
            <strong>mongoose:</strong> Connects Node.js with MongoDB.
          </li>
          <li>
            <strong>express-session:</strong> Manages temporary OAuth sessions.
          </li>
          <li>
            <strong>connect-mongo:</strong> Stores sessions in MongoDB.
          </li>
          <li>
            <strong>cors:</strong> Allows frontend and backend communication
            across origins.
          </li>
        </ul>

        <h3 className="font-semibold">5. Enable ES Modules</h3>
        <p className="text-[var(--text-secondary)]">
          Open package.json and add "type": "module" so that we can use import
          and export syntax.
        </p>
        <CodeBlock
          code={`{
  "name": "google-auth-jwt",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "start": "node app.js",
    "dev": "node --watch app.js"
  }
}`}
        />
      </section>

      {/* STEP 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          Step 3: Configure Environment Variables
        </h2>

        <h3 className="font-semibold">1. Create a .env File</h3>
        <p className="text-[var(--text-secondary)]">
          In the root of your project directory, create a file named .env.
        </p>

        <h3 className="font-semibold">2. Add Your Credentials</h3>
        <p className="text-[var(--text-secondary)]">
          Add the following lines, replacing placeholders with your actual
          Google OAuth credentials and a secret key for JWT:
        </p>

        <CodeBlock
          code={`GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
JWT_SECRET=your-jwt-secret

GOOGLE_CALLBACK_URL=http://localhost:3000/auth/google/callback
MONGO_URI=mongodb://127.0.0.1:27017/google_auth
SESSION_SECRET=your-session-secret

PORT=3000
FRONTEND_URL=http://localhost:5173
NODE_ENV=development`}
        />

        <h3 className="font-semibold">3. Understand Environment Variables</h3>
        <ul className="list-disc pl-5 space-y-2 text-[var(--text-secondary)]">
          <li>
            <strong>GOOGLE_CLIENT_ID:</strong> Your Google OAuth Client ID.
          </li>
          <li>
            <strong>GOOGLE_CLIENT_SECRET:</strong> Your Google OAuth Client
            Secret.
          </li>
          <li>
            <strong>JWT_SECRET:</strong> A secret key for signing JWTs.
          </li>
          <li>
            <strong>GOOGLE_CALLBACK_URL:</strong> The URL where Google redirects
            after authentication.
          </li>
          <li>
            <strong>MONGO_URI:</strong> MongoDB connection string.
          </li>
          <li>
            <strong>SESSION_SECRET:</strong> A secret key used to sign the
            temporary session cookie.
          </li>
          <li>
            <strong>PORT:</strong> Port on which the backend server runs.
          </li>
          <li>
            <strong>FRONTEND_URL:</strong> URL of your React frontend.
          </li>
        </ul>

        <p className="text-sm text-[var(--text-secondary)]">
          Keep JWT_SECRET and SESSION_SECRET different. Never push your .env
          file to GitHub.
        </p>

        <h3 className="font-semibold">4. Create .gitignore</h3>
        <CodeBlock
          code={`node_modules
.env`}
        />
      </section>

      {/* STEP 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          Step 4: Create Project Structure
        </h2>
        <p className="text-[var(--text-secondary)]">
          Inside VS Code, create the following folders and files:
        </p>
        <CodeBlock
          code={`google-auth-jwt/
│
├── config/
│   └── passport.js
│
├── models/
│   └── user.model.js
│
├── routes/
│   └── auth.routes.js
│
├── .env
├── .gitignore
├── app.js
└── package.json`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Right-click the project folder in VS Code Explorer. Select New Folder
          or New File and create each item using the names above.
        </p>
      </section>

      {/* STEP 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Step 5: Create User Model</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          When a user logs in through Google for the first time, we need to save
          their information in MongoDB.
        </p>

        <p className="font-medium">Open models/user.model.js</p>
        <CodeBlock
          code={`import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    googleId: {
      type: String,
      unique: true,
      sparse: true,
    },

    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    profileImage: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          googleId stores the unique Google account identifier. We use it to
          identify the same Google user during future logins.
        </p>
      </section>

      {/* STEP 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          Step 6: Configure Passport Google Strategy
        </h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Passport.js provides authentication middleware. GoogleStrategy
          connects Passport with Google's OAuth 2.0 authorization flow.
        </p>

        <p className="font-medium">Open config/passport.js</p>
        <CodeBlock
          code={`import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../models/user.model.js";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },

    async (accessToken, refreshToken, profile, done) => {
      try {
        const googleId = profile.id;
        const email = profile.emails?.[0]?.value;
        const isEmailVerified =
          profile.emails?.[0]?.verified;

        if (!email || !isEmailVerified) {
          return done(null, false);
        }

        let user = await User.findOne({ googleId });

        if (!user) {
          user = await User.findOne({ email });

          // Do not automatically link a different Google account
          // to an existing account without an account-linking policy.
          if (user && user.googleId !== googleId) {
            return done(null, false);
          }

          if (!user) {
            user = await User.create({
              googleId,
              name: profile.displayName,
              email,
              profileImage: profile.photos?.[0]?.value,
            });
          }
        }

        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

export default passport;`}
        />

        <h3 className="font-semibold">Understand the Callback Parameters</h3>
        <CodeBlock
          code={`async (accessToken, refreshToken, profile, done) => {
  // Authentication callback
}`}
        />

        <ul className="list-disc pl-5 space-y-2 text-sm text-[var(--text-secondary)]">
          <li>
            <strong>accessToken:</strong> Token issued by Google for permitted
            Google resources.
          </li>
          <li>
            <strong>refreshToken:</strong> May be provided when Google issues
            one.
          </li>
          <li>
            <strong>profile:</strong> Contains the Google profile information
            provided by the strategy.
          </li>
          <li>
            <strong>done:</strong> Tells Passport whether authentication
            succeeded or failed.
          </li>
        </ul>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <p className="font-semibold">Important OIDC Note</p>
          <p className="mt-2 text-sm text-[var(--text-secondary)] leading-6">
            The Passport Google OAuth 2.0 strategy provides a Google profile for
            the OAuth flow. Do not assume that it automatically provides a
            validated OIDC ID Token. If your application needs an ID Token, use
            an appropriate OIDC client or Google's authentication library and
            validate its signature, issuer, audience, and expiration.
          </p>
        </div>
      </section>

      {/* STEP 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          Step 7: Configure Express Application
        </h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Now we will connect MongoDB, configure Express middleware, and
          initialize Passport.
        </p>

        <p className="font-medium">Open app.js</p>
        <CodeBlock
          code={`import "dotenv/config";

import express from "express";
import mongoose from "mongoose";
import session from "express-session";
import MongoStore from "connect-mongo";
import cors from "cors";

import passport from "./config/passport.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

// Temporary session for OAuth state validation
app.use(
  session({
    name: "oauth.sid",
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,

    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
      collectionName: "oauth_sessions",
    }),

    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 10 * 60 * 1000,
    },
  })
);

app.use(passport.initialize());

app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Google OAuth Server Running");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(process.env.PORT, () => {
      console.log(
        \`Server running on port \${process.env.PORT}\`
      );
    });
  })
  .catch((error) => {
    console.error("MongoDB Connection Error:", error);
  });`}
        />

        <p className="text-sm text-[var(--text-secondary)] leading-6">
          We use express-session to temporarily store the OAuth state used
          during authentication. We are not using Passport's persistent login
          sessions because our application will use its own JWT.
        </p>
      </section>

      {/* STEP 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          Step 8: Create Google Authentication Routes
        </h2>
        <p className="text-[var(--text-secondary)] leading-7">
          We need two main routes. The first starts Google login, and the second
          handles Google's callback.
        </p>

        <p className="font-medium">Open routes/auth.routes.js</p>
        <CodeBlock
          code={`import { Router } from "express";
import passport from "../config/passport.js";
import jwt from "jsonwebtoken";

const router = Router();

// Start Google Login
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    state: true,
  })
);

// Handle Google's Callback
router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: "/auth/google/failure",
  }),

  (req, res) => {
    const user = req.user;

    // Generate our own application JWT
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "15m",
      }
    );

    // Store JWT in an HttpOnly cookie
    res.cookie("accessToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 15 * 60 * 1000,
    });

    // Redirect user to frontend
    res.redirect(
      process.env.FRONTEND_URL + "/dashboard"
    );
  }
);

// Google Login Failure
router.get("/google/failure", (req, res) => {
  res.status(401).send("Google authentication failed");
});

export default router;`}
        />

        <p className="text-sm text-[var(--text-secondary)] leading-6">
          Notice that our route is /auth/google/callback. This is the same
          callback URL that we registered in Google Cloud Console.
        </p>
      </section>

      {/* STEP 9 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          Step 9: Connect React Frontend
        </h2>
        <p className="text-[var(--text-secondary)] leading-7">
          The frontend does not need to communicate directly with Google's OAuth
          API in this approach. It only needs to open our backend login route.
        </p>

        <p className="font-medium">Create GoogleLogin.jsx</p>
        <CodeBlock
          code={`function GoogleLogin() {
  const handleGoogleLogin = () => {
    window.location.href =
      "http://localhost:3000/auth/google";
  };

  return (
    <button onClick={handleGoogleLogin}>
      Continue with Google
    </button>
  );
}

export default GoogleLogin;`}
        />

        <p className="text-sm text-[var(--text-secondary)] leading-6">
          Why window.location.href? Because OAuth login uses browser redirects.
          A normal Axios request is not suitable for the complete interactive
          Google login flow.
        </p>
      </section>

      {/* STEP 10 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          Step 10: Understand the Complete Login Flow
        </h2>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <div className="space-y-2 text-center text-sm">
            {[
              ["Frontend", "User clicks Continue with Google"],
              ["Backend", "Browser opens /auth/google"],
              ["Passport", "Redirects user to Google's login page"],
              ["Google", "User selects account and grants permission"],
              ["Google", "Redirects to our callback URL"],
              ["Passport", "Processes the Google profile"],
              ["MongoDB", "Finds existing user or creates a new user"],
              ["Backend", "Generates our application JWT"],
              [
                "Browser",
                "Receives HttpOnly cookie and redirects to dashboard",
              ],
            ].map(([title, description], index) => (
              <div key={index}>
                <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] p-3">
                  <p className="font-semibold text-[var(--accent-color)]">
                    {title}
                  </p>
                  <p className="mt-1 text-[var(--text-secondary)]">
                    {description}
                  </p>
                </div>
                {index !== 8 && (
                  <div className="py-1 text-[var(--accent-color)]">↓</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEP 11 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          Step 11: Run and Test the Application
        </h2>

        <h3 className="font-semibold">1. Start MongoDB</h3>
        <p className="text-[var(--text-secondary)]">
          Make sure your local MongoDB service is running, or use a valid
          MongoDB Atlas connection string in MONGO_URI.
        </p>

        <h3 className="font-semibold">2. Start Backend</h3>
        <p className="text-[var(--text-secondary)]">
          Open a terminal in your backend project and run:
        </p>
        <CodeBlock code={`npm run dev`} />
        <CodeBlock
          code={`MongoDB Connected
Server running on port 3000`}
        />

        <h3 className="font-semibold">3. Start Frontend</h3>
        <p className="text-[var(--text-secondary)]">
          Open another terminal in your React project and run:
        </p>
        <CodeBlock code={`npm run dev`} />
        <p className="text-sm text-[var(--text-secondary)]">
          Open your frontend at:
        </p>
        <CodeBlock code={`http://localhost:5173`} />

        <h3 className="font-semibold">4. Click Google Login</h3>
        <ol className="list-decimal pl-5 space-y-2 text-[var(--text-secondary)]">
          <li>Open your React application.</li>
          <li>Click Continue with Google.</li>
          <li>Google's account selection page should open.</li>
          <li>Select your Google account.</li>
          <li>Grant the requested permission if prompted.</li>
          <li>Google redirects to your backend callback.</li>
          <li>Your backend creates or finds the user.</li>
          <li>Your application JWT is placed in an HttpOnly cookie.</li>
          <li>You are redirected to the frontend dashboard.</li>
        </ol>
      </section>

      {/* STEP 12 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          Step 12: Google Access Token vs Application JWT
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="text-left p-3">Google Access Token</th>
                <th className="text-left p-3">Application JWT</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Issued by Google.</td>
                <td className="p-3">Issued by your backend.</td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Used to access permitted Google APIs.</td>
                <td className="p-3">
                  Used to authenticate with your application.
                </td>
              </tr>
              <tr>
                <td className="p-3">Not your application's login token.</td>
                <td className="p-3">
                  Can authorize your application's protected APIs.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-[var(--text-secondary)] leading-7">
          Never treat Google's Access Token as your application's JWT. After
          Google authentication succeeds, your backend should create its own
          application token.
        </p>
      </section>

      {/* STEP 13 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          Step 13: Common Errors and Solutions
        </h2>

        {[
          {
            q: "Error 400: redirect_uri_mismatch",
            a: "The callback URL in your backend does not exactly match the Authorized redirect URI in Google Cloud Console. Check protocol, port, and path.",
          },
          {
            q: "Error 403: access_denied",
            a: "Your application may be in Testing mode and your Google account is not listed under Test users. Add your account under Audience → Test users.",
          },
          {
            q: "Error: invalid_client",
            a: "Check GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in your .env file. Make sure you copied credentials from the correct Google Cloud project.",
          },
          {
            q: "Google login works but the dashboard does not stay logged in",
            a: "Check whether the browser stores the cookie. Inspect cookie settings, CORS credentials, and the browser's cookie policies.",
          },
          {
            q: "Google redirects to the wrong URL",
            a: "Check GOOGLE_CALLBACK_URL and the Authorized redirect URI in Google Cloud Console. Both must match exactly.",
          },
        ].map((item, index) => (
          <details
            key={index}
            className="group rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4"
          >
            <summary className="cursor-pointer font-medium list-none flex justify-between gap-4">
              <span>
                <span className="text-[var(--accent-color)]">
                  {index + 1}.{" "}
                </span>
                {item.q}
              </span>
              <span className="text-[var(--accent-color)] group-open:rotate-180 transition-transform">
                ↓
              </span>
            </summary>
            <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
              {item.a}
            </p>
          </details>
        ))}
      </section>

      {/* SECURITY */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          Step 14: Important Security Practices
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-[var(--text-secondary)]">
          <li>Never expose Google Client Secret in frontend code.</li>
          <li>Never commit .env to GitHub.</li>
          <li>Use HTTPS in production.</li>
          <li>Use exact redirect URIs.</li>
          <li>Use state validation to protect the OAuth flow against CSRF.</li>
          <li>Use HttpOnly and Secure cookies for authentication tokens.</li>
          <li>
            Validate Google's identity information before creating an account.
          </li>
          <li>Use proper account-linking rules for existing users.</li>
          <li>
            Use short-lived access tokens and a proper refresh-token strategy.
          </li>
          <li>Protect cookie-authenticated endpoints against CSRF.</li>
        </ul>
        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <p className="font-semibold">Production Note</p>
          <p className="mt-2 text-sm text-[var(--text-secondary)] leading-6">
            This tutorial demonstrates a short-lived JWT stored in an HttpOnly
            cookie. A production application should also implement token
            refresh, logout/revocation, CSRF protection, robust account linking,
            and appropriate cookie settings.
          </p>
        </div>
      </section>

      {/* INTERVIEW */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">15. Interview Questions</h2>

        {[
          {
            q: "What is Google OAuth?",
            a: "It allows users to authenticate with their Google accounts and authorize access to permitted information.",
          },
          {
            q: "What is Passport.js?",
            a: "Passport.js is authentication middleware for Node.js that supports different authentication strategies.",
          },
          {
            q: "What is GoogleStrategy?",
            a: "It is a Passport strategy that handles the Google OAuth 2.0 authorization flow.",
          },
          {
            q: "What is a callback URL?",
            a: "It is the backend endpoint where Google redirects the browser after the authorization process.",
          },
          {
            q: "What is a Client ID?",
            a: "It is a public identifier that tells Google which application is requesting authorization.",
          },
          {
            q: "What is a Client Secret?",
            a: "It is a confidential credential used by the backend OAuth client. It must never be exposed in frontend code.",
          },
          {
            q: "Why do we use passport-google-oauth20?",
            a: "It provides the Google OAuth 2.0 strategy that integrates Google login with Passport.js.",
          },
          {
            q: "What is the purpose of scope?",
            a: "Scopes specify what information or permissions the application requests from Google, such as profile and email.",
          },
          {
            q: "What is the difference between Google's Access Token and our JWT?",
            a: "Google's Access Token is used to access permitted Google resources. Our JWT is issued by our backend to authenticate users with our application.",
          },
          {
            q: "Why do we use state in OAuth?",
            a: "The state parameter helps protect the OAuth authorization flow against CSRF attacks by validating that the callback belongs to the login request initiated by the application.",
          },
          {
            q: "What happens when a user logs in for the first time?",
            a: "Our backend checks MongoDB for the Google account. If the user does not exist, it creates a new user record.",
          },
          {
            q: "Why do we use session: false in the callback?",
            a: "It tells Passport not to establish a persistent Passport login session. Our application uses its own JWT for authentication.",
          },
        ].map((item, index) => (
          <details
            key={index}
            className="group rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4"
          >
            <summary className="cursor-pointer font-medium list-none flex justify-between gap-4">
              <span>
                <span className="text-[var(--accent-color)]">
                  Q{index + 1}.{" "}
                </span>
                {item.q}
              </span>
              <span className="text-[var(--accent-color)] group-open:rotate-180 transition-transform">
                ↓
              </span>
            </summary>
            <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
              {item.a}
            </p>
          </details>
        ))}
      </section>
    </div>
  );
}

export default GoogleOAuth;
