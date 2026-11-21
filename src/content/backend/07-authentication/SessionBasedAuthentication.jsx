import CodeBlock from "../../../components/common/CodeBlock";

function SessionBasedAuthentication() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          AUTHENTICATION / 05
        </p>
        <h1 className="mt-2 text-3xl font-bold">
          Session-Based Authentication
        </h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          Session-Based Authentication is a method where the server creates
          and stores a session for an authenticated user. The browser receives
          a session ID to identify that session in future requests.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. How Session Authentication Works</h2>
        <p className="text-[var(--text-secondary)]">
          When a user logs in, the server creates a session and sends its
          session ID to the browser through a cookie.
        </p>

        <CodeBlock code={`1. User Login
       |
       v
2. Server verifies email & password
       |
       v
3. Server creates a session
       |
       v
4. Session stored in MongoDB
       |
       v
5. Session ID sent in browser cookie
       |
       v
6. Browser sends cookie with requests
       |
       v
7. Server finds session using session ID
       |
       v
8. User authenticated`} />

        <p className="text-[var(--text-secondary)]">
          Important: The browser stores the session ID, not the complete
          session data. The actual session data is maintained on the server.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Install Required Packages</h2>
        <p className="text-[var(--text-secondary)]">
          We will use Express Session for session management and Connect Mongo
          to store sessions in MongoDB.
        </p>

        <CodeBlock code={`npm install express-session connect-mongo`} />

        <p className="text-[var(--text-secondary)]">
          Packages:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li><strong>express-session:</strong> Creates and manages sessions.</li>
          <li><strong>connect-mongo:</strong> Stores sessions in MongoDB.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Configure Express Session</h2>
        <p className="text-[var(--text-secondary)]">
          Configure session middleware in your main server file.
        </p>

        <CodeBlock code={`import express from "express";
import session from "express-session";
import MongoStore from "connect-mongo";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

app.use(
  session({
    name: "sessionId",

    secret: process.env.SESSION_SECRET,

    resave: false,

    saveUninitialized: false,

    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI,
      collectionName: "sessions",
      ttl: 60 * 60 * 24 * 7
    }),

    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  })
);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});`} />

        <p className="text-[var(--text-secondary)]">
          Important configuration:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-[var(--bg-card)]">
                <th className="border border-[var(--border-color)] p-3 text-left">Option</th>
                <th className="border border-[var(--border-color)] p-3 text-left">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["name", "Custom session cookie name."],
                ["secret", "Signs the session ID cookie."],
                ["resave", "Avoids saving unchanged sessions repeatedly."],
                ["saveUninitialized", "Avoids storing sessions that have not been modified."],
                ["store", "Defines where sessions are stored."],
                ["httpOnly", "Prevents JavaScript from reading the cookie."],
                ["secure", "Sends the cookie only over HTTPS."],
                ["sameSite", "Controls cross-site cookie sending."],
                ["maxAge", "Sets cookie lifetime in milliseconds."],
              ].map(([option, purpose]) => (
                <tr key={option}>
                  <td className="border border-[var(--border-color)] p-3 font-medium">{option}</td>
                  <td className="border border-[var(--border-color)] p-3 text-[var(--text-secondary)]">{purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-[var(--text-secondary)]">
          Keep your session secret in environment variables:
        </p>

        <CodeBlock code={`SESSION_SECRET=your-long-random-secret
MONGODB_URI=mongodb://127.0.0.1:27017/authDB
NODE_ENV=development`} />

        <p className="text-[var(--text-secondary)]">
          Generate a strong secret using:
        </p>

        <CodeBlock code={`node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"`} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Create Session During Login</h2>
        <p className="text-[var(--text-secondary)]">
          After verifying the user's password, regenerate the session to
          prevent session fixation, then store the user's ID in the session.
        </p>

        <CodeBlock code={`import bcrypt from "bcrypt";
import User from "../models/user.model.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password"
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email or password"
      });
    }

    // Generate a new session ID
    req.session.regenerate((err) => {
      if (err) {
        return res.status(500).json({
          message: "Session creation failed"
        });
      }

      // Store user information in session
      req.session.userId = user._id.toString();

      // Save session before responding
      req.session.save((err) => {
        if (err) {
          return res.status(500).json({
            message: "Session save failed"
          });
        }

        return res.status(200).json({
          message: "Login successful",
          user: {
            id: user._id,
            email: user.email
          }
        });
      });
    });

  } catch (error) {
    return res.status(500).json({
      message: "Login failed"
    });
  }
};`} />

        <p className="text-[var(--text-secondary)]">
          Here, <code>req.session.userId</code> stores the authenticated
          user's ID inside the server-side session.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Access Protected Routes</h2>
        <p className="text-[var(--text-secondary)]">
          Create middleware to check whether a valid authenticated session
          exists before allowing access to protected routes.
        </p>

        <CodeBlock code={`export const isAuthenticated = (req, res, next) => {
  if (!req.session.userId) {
    return res.status(401).json({
      message: "Please login first"
    });
  }

  next();
};`} />

        <p className="font-medium">Use middleware in routes:</p>

        <CodeBlock code={`import express from "express";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

router.get("/profile", isAuthenticated, (req, res) => {
  res.status(200).json({
    message: "Profile accessed successfully",
    userId: req.session.userId
  });
});

export default router;`} />

        <p className="text-[var(--text-secondary)]">
          Express Session automatically reads the session cookie, finds the
          corresponding session in MongoDB and makes its data available
          through <code>req.session</code>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Logout and Destroy Session</h2>
        <p className="text-[var(--text-secondary)]">
          During logout, destroy the server-side session and clear the
          browser's session cookie.
        </p>

        <CodeBlock code={`export const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({
        message: "Logout failed"
      });
    }

    res.clearCookie("sessionId", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/"
    });

    return res.status(200).json({
      message: "Logout successful"
    });
  });
};`} />

        <p className="text-[var(--text-secondary)]">
          The cookie name and clearing options must match the session cookie
          configuration. Destroying the session invalidates the server-side
          session data.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Where Are Sessions Stored?</h2>
        <p className="text-[var(--text-secondary)]">
          With Connect Mongo, session data is stored in a MongoDB collection,
          commonly named <code>sessions</code>.
        </p>

        <CodeBlock code={`// Example session document

{
  "_id": "signed-session-id",
  "expires": "2026-11-28T10:00:00.000Z",
  "session": {
    "cookie": {
      "httpOnly": true,
      "maxAge": 604800000
    },
    "userId": "673abc123456789"
  }
}`} />

        <p className="text-[var(--text-secondary)]">
          The browser receives the session ID cookie, while MongoDB stores
          the session data associated with that ID.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Frontend Cookie Handling</h2>
        <p className="text-[var(--text-secondary)]">
          If your frontend and backend run on different origins, configure
          CORS and send credentials with requests.
        </p>

        <p className="font-medium">Backend CORS configuration:</p>
        <CodeBlock code={`import cors from "cors";

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));`} />

        <p className="font-medium">Frontend Axios request:</p>
        <CodeBlock code={`import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true
});

// Login
await api.post("/auth/login", {
  email: "user@gmail.com",
  password: "myPassword123"
});

// Access protected route
const response = await api.get("/auth/profile");`} />

        <p className="text-[var(--text-secondary)]">
          <code>withCredentials: true</code> allows the browser to send
          cookies with cross-origin Axios requests and accept eligible
          cookies from responses.
        </p>
        <p className="text-[var(--text-secondary)]">
          For genuinely cross-site frontend/backend deployments, cookie
          settings generally require <code>sameSite: "none"</code> and
          <code> secure: true</code>, along with HTTPS. Also protect
          cookie-authenticated state-changing requests against CSRF.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Important Production Points</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Never use the default MemoryStore in production.</li>
          <li>Use MongoDB, Redis or another persistent session store.</li>
          <li>Keep the session secret strong and private.</li>
          <li>Use HTTP-only and Secure cookies in production.</li>
          <li>Regenerate the session ID after successful login.</li>
          <li>Destroy the session during logout.</li>
          <li>Configure session expiration and store cleanup.</li>
          <li>Use CSRF protection for cookie-based authentication.</li>
          <li>When behind a trusted reverse proxy, configure Express <code>trust proxy</code> correctly for secure cookies.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Session-Based vs JWT Authentication</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-[var(--bg-card)]">
                <th className="border border-[var(--border-color)] p-3 text-left">Session-Based</th>
                <th className="border border-[var(--border-color)] p-3 text-left">JWT-Based</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Stores session data on server", "Stores claims inside a signed token"],
                ["Uses a session ID", "Uses a JWT"],
                ["Can invalidate a session centrally", "Usually requires additional mechanisms for early revocation"],
                ["Requires a session store for production", "Does not require a session store for basic verification"],
                ["Browser commonly uses cookies", "Can use cookies or authorization headers"],
              ].map(([a, b]) => (
                <tr key={a}>
                  <td className="border border-[var(--border-color)] p-3">{a}</td>
                  <td className="border border-[var(--border-color)] p-3">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Interview Questions</h2>
        {[
          ["What is Session-Based Authentication?", "An authentication method where the server maintains user session data and identifies the session using a session ID."],
          ["What is express-session?", "An Express middleware that creates, manages and reads user sessions."],
          ["What is connect-mongo?", "A session store adapter that saves Express sessions in MongoDB."],
          ["What is a session ID?", "A unique identifier sent to the browser in a cookie and used to retrieve the corresponding server-side session."],
          ["What is req.session?", "An object provided by express-session that contains the current session data."],
          ["Why should we use a persistent session store?", "It allows sessions to survive server restarts and supports multiple server instances."],
          ["What does saveUninitialized: false do?", "It prevents storing new sessions that have not been modified."],
          ["Why regenerate a session after login?", "To prevent session fixation attacks by issuing a fresh session ID."],
          ["How do you destroy a session?", "Use req.session.destroy() during logout."],
          ["What is the difference between session ID and session data?", "The browser stores the session ID, while the server-side store maintains the session data."],
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

export default SessionBasedAuthentication;