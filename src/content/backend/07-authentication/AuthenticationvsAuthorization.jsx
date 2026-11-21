import CodeBlock from "../../../components/common/CodeBlock";

function AuthenticationVsAuthorization() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          AUTHENTICATION / 01
        </p>
        <h1 className="mt-2 text-3xl font-bold">
          Authentication vs Authorization
        </h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          Authentication verifies who the user is, while Authorization
          determines what the authenticated user is allowed to do.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. Authentication</h2>
        <p className="text-[var(--text-secondary)]">
          Authentication is the process of verifying a user's identity. It
          answers: <strong>Who are you?</strong>
        </p>
        <p>Example: A user logs in using email and password.</p>

        <CodeBlock
          code={`// Example: Login credentials

{
  "email": "user@gmail.com",
  "password": "mypassword123"
}

// Backend verifies the credentials.
// If valid, the user is authenticated.`}
        />

        <p className="text-[var(--text-secondary)]">
          Common authentication methods:
        </p>
        <ul className="list-disc space-y-1 pl-6 text-[var(--text-secondary)]">
          <li>Email and password</li>
          <li>OTP verification</li>
          <li>Google OAuth</li>
          <li>JWT-based login</li>
          <li>Session-based login</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Authorization</h2>
        <p className="text-[var(--text-secondary)]">
          Authorization checks what an authenticated user is allowed to access
          or perform. It answers: <strong>What can you do?</strong>
        </p>
        <p>
          Example: A normal user can view products, but only an admin can delete
          products.
        </p>

        <CodeBlock
          code={`// Example: User roles

const user = {
  id: "123",
  role: "user"
};

// Authorization check
if (user.role !== "admin") {
  return res.status(403).json({
    message: "Access denied"
  });
}

// Only admin can continue.`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          3. Authentication vs Authorization
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-[var(--bg-card)]">
                <th className="border border-[var(--border-color)] p-3 text-left">
                  Authentication
                </th>
                <th className="border border-[var(--border-color)] p-3 text-left">
                  Authorization
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Verifies user identity", "Checks user permissions"],
                ["Who are you?", "What can you access?"],
                ["Happens first", "Happens after authentication"],
                ["Login credentials, OTP", "Roles, permissions, policies"],
                ["401 Unauthorized", "403 Forbidden"],
              ].map(([a, b]) => (
                <tr key={a}>
                  <td className="border border-[var(--border-color)] p-3">
                    {a}
                  </td>
                  <td className="border border-[var(--border-color)] p-3">
                    {b}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. How They Work Together</h2>
        <p className="text-[var(--text-secondary)]">
          Consider an admin dashboard. First, the backend verifies the user's
          identity. Then it checks whether the user has admin access.
        </p>

        <CodeBlock
          code={`User Login
    |
    v
Authentication
(Verify identity)
    |
    v
Authenticated?
    |
    v
Authorization
(Check role/permission)
    |
    v
Access Granted or Denied`}
        />

        <p className="text-[var(--text-secondary)]">
          Important: Authorization must be checked on the backend for every
          protected operation. Hiding buttons on the frontend is not security.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. HTTP Status Codes</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>
            <strong>401 Unauthorized:</strong> User is not authenticated or has
            provided invalid authentication credentials.
          </li>
          <li>
            <strong>403 Forbidden:</strong> User is authenticated but does not
            have permission to perform the action.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Interview Questions</h2>
        {[
          [
            "What is Authentication?",
            "Authentication verifies the identity of a user.",
          ],
          [
            "What is Authorization?",
            "Authorization checks what an authenticated user is allowed to access or perform.",
          ],
          [
            "What is the main difference?",
            "Authentication identifies the user; Authorization checks their permissions.",
          ],
          [
            "Which happens first?",
            "Authentication generally happens before Authorization.",
          ],
          [
            "What is the difference between 401 and 403?",
            "401 means authentication is missing or invalid. 403 means the user lacks permission.",
          ],
          [
            "Can frontend role checks provide security?",
            "No. Permissions must always be verified on the backend.",
          ],
        ].map(([question, answer], index) => (
          <details
            key={index}
            className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] p-4"
          >
            <summary className="cursor-pointer font-medium">{question}</summary>
            <p className="mt-3 text-sm text-[var(--text-secondary)]">
              {answer}
            </p>
          </details>
        ))}
      </section>
    </div>
  );
}

export default AuthenticationVsAuthorization;
