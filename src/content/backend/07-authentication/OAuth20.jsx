import CodeBlock from "../../../components/common/CodeBlock";

function OAuth20() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          AUTHENTICATION / 13
        </p>
        <h1 className="mt-2 text-3xl font-bold">OAuth 2.0</h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          OAuth 2.0 is an authorization framework that allows applications
          to access protected resources on behalf of a user without sharing
          the user's password with the application.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What is OAuth 2.0?</h2>
        <p className="text-[var(--text-secondary)]">
          OAuth 2.0 allows one application to access specific resources
          from another service with the user's permission.
        </p>

        <p className="font-medium">Real-world example:</p>
        <p className="text-[var(--text-secondary)]">
          Suppose you build an application that allows users to upload
          photos to their Google Drive. Instead of asking users for their
          Google password, your application redirects them to Google.
          Google asks for permission and provides an authorization grant
          that your application can exchange for an Access Token.
        </p>

        <CodeBlock code={`Your Application
       |
       v
Redirect User to Google
       |
       v
User Gives Permission
       |
       v
Google Issues Authorization Code
       |
       v
Backend Exchanges Code
       |
       v
Receives Access Token
       |
       v
Access Authorized Resources`} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Why Do We Need OAuth 2.0?</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Allows applications to access third-party resources.</li>
          <li>Users do not need to share their passwords with other applications.</li>
          <li>Provides permission-based access through scopes.</li>
          <li>Allows users to revoke granted access.</li>
          <li>Supports delegated authorization between different services.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. OAuth 2.0 Roles</h2>
        <p className="text-[var(--text-secondary)]">
          OAuth 2.0 defines four main roles.
        </p>

        <div className="space-y-3">
          {[
            ["Resource Owner", "The user who owns the protected data and grants permission."],
            ["Client", "The application that requests permission to access resources."],
            ["Authorization Server", "The server that authenticates the user, obtains authorization and issues tokens."],
            ["Resource Server", "The server that stores protected resources and validates access tokens."],
          ].map(([title, description], index) => (
            <div key={title} className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
              <p className="font-semibold text-[var(--accent-color)]">{index + 1}. {title}</p>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. How OAuth 2.0 Works</h2>
        <p className="text-[var(--text-secondary)]">
          Consider an application that wants permission to access a user's
          Google Drive files.
        </p>

        <CodeBlock code={`1. User clicks "Connect Google Drive"
              |
              v
2. Application redirects to Google
              |
              v
3. User signs in and grants permission
              |
              v
4. Google redirects with Authorization Code
              |
              v
5. Backend exchanges code for Access Token
              |
              v
6. Backend uses token to access permitted data
              |
              v
7. Google Resource Server validates token
              |
              v
8. Returns authorized resources`} />

        <p className="text-[var(--text-secondary)]">
          The application receives permission-based access without ever
          needing the user's Google password.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. OAuth 2.0 Authorization Code Flow</h2>
        <p className="text-[var(--text-secondary)]">
          Authorization Code Flow is commonly used by server-side web
          applications. The application first receives an authorization
          code, then exchanges it for tokens through a back-channel request.
        </p>

        <CodeBlock code={`Browser                 Backend              Google
   |                       |                    |
   |--- Login Request ---->|                    |
   |                       |                    |
   |<-- Redirect to Google -------------------->|
   |                                            |
   |---------- User Login & Consent ----------->|
   |                                            |
   |<--------- Authorization Code -------------|
   |                                            |
   |---------- Code to Backend ---------------->|
   |                       |                    |
   |                       |--- Exchange Code ->|
   |                       |                    |
   |                       |<-- Tokens ---------|
   |                       |                    |
   |<------ Login Result --|                    |`} />

        <p className="text-[var(--text-secondary)]">
          For modern applications, use Authorization Code Flow with PKCE.
          PKCE protects the authorization code exchange, especially for
          public clients such as mobile applications and browser-based
          applications.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. OAuth 2.0 Grant Types</h2>
        <p className="text-[var(--text-secondary)]">
          OAuth 2.0 supports different ways to obtain authorization.
        </p>

        <div className="space-y-3">
          {[
            ["Authorization Code", "Used by web applications to obtain tokens through an authorization code."],
            ["Authorization Code + PKCE", "Recommended for public clients and also useful for confidential clients."],
            ["Client Credentials", "Used for server-to-server communication when no user is involved."],
            ["Device Authorization", "Used by devices with limited input capabilities, such as smart TVs."],
            ["Refresh Token", "Used to obtain new Access Tokens when supported and authorized by the server."],
          ].map(([title, description], index) => (
            <div key={title} className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
              <p className="font-semibold">{index + 1}. {title}</p>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">{description}</p>
            </div>
          ))}
        </div>

        <p className="text-sm text-[var(--text-secondary)]">
          The Resource Owner Password Credentials grant and Implicit grant
          are obsolete for modern implementations and should not be used.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. What are OAuth Scopes?</h2>
        <p className="text-[var(--text-secondary)]">
          Scopes define what permissions an application requests from the
          resource owner.
        </p>

        <CodeBlock code={`scope=openid email profile`} />

        <p className="font-medium">Example Google scopes:</p>
        <CodeBlock code={`openid
email
profile`} />

        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li><strong>openid:</strong> Requests OpenID Connect authentication.</li>
          <li><strong>email:</strong> Requests access to the user's email information.</li>
          <li><strong>profile:</strong> Requests access to basic profile information.</li>
        </ul>

        <p className="text-[var(--text-secondary)]">
          Request only the permissions your application actually needs.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. OAuth 2.0 vs OpenID Connect</h2>
        <p className="text-[var(--text-secondary)]">
          OAuth 2.0 and OpenID Connect are related, but they solve different
          problems.
        </p>

        <div className="overflow-x-auto rounded-lg border border-[var(--border-color)]">
          <table className="w-full text-left text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">OAuth 2.0</th>
                <th className="p-3">OpenID Connect</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              <tr>
                <td className="p-3">Authorization</td>
                <td className="p-3">Authentication / Identity</td>
              </tr>
              <tr>
                <td className="p-3">Grants access to resources</td>
                <td className="p-3">Provides verified identity information</td>
              </tr>
              <tr>
                <td className="p-3">Uses Access Tokens</td>
                <td className="p-3">Adds ID Tokens to OAuth 2.0</td>
              </tr>
              <tr>
                <td className="p-3">Does not define user login identity by itself</td>
                <td className="p-3">Defines identity and login information</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-[var(--text-secondary)]">
          Google Login commonly uses OpenID Connect on top of OAuth 2.0.
          The ID Token represents the authenticated user's identity, while
          the Access Token grants access to permitted resources.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. OAuth 2.0 Security Parameters</h2>

        <div className="space-y-3">
          {[
            ["Client ID", "A public identifier assigned to your application."],
            ["Client Secret", "A confidential credential used by confidential clients. Never expose it in frontend code."],
            ["Redirect URI", "The registered URL where the authorization server redirects the user."],
            ["State", "A random value used to bind the authorization response to the original request and protect against CSRF."],
            ["PKCE", "Proof Key for Code Exchange. Protects authorization code exchange using a code verifier and challenge."],
            ["Scope", "Defines the permissions requested by the application."],
          ].map(([title, description], index) => (
            <div key={title} className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
              <p className="font-semibold text-[var(--accent-color)]">{index + 1}. {title}</p>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. OAuth 2.0 in Node.js</h2>
        <p className="text-[var(--text-secondary)]">
          For a Node.js application, Passport.js is one option for
          implementing OAuth-based login integrations.
        </p>

        <CodeBlock code={`npm install passport passport-google-oauth20`} />

        <p className="text-[var(--text-secondary)]">
          This installs the Google OAuth strategy for Passport. The next
          topic covers the actual Google OAuth implementation in detail.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">11. Important Security Points</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Use Authorization Code Flow with PKCE where appropriate.</li>
          <li>Validate the state parameter to protect the authorization flow.</li>
          <li>Register exact redirect URIs.</li>
          <li>Never expose Client Secrets in frontend code.</li>
          <li>Request only necessary scopes.</li>
          <li>Use HTTPS for production redirects and token exchanges.</li>
          <li>Validate tokens before trusting their claims.</li>
          <li>For OpenID Connect, validate ID Token signature, issuer, audience and expiration.</li>
          <li>Store tokens securely and implement revocation where required.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Interview Questions</h2>
        {[
          ["What is OAuth 2.0?", "An authorization framework that allows applications to access protected resources with a user's permission."],
          ["Is OAuth 2.0 an authentication protocol?", "No. It is an authorization framework. OpenID Connect adds an identity and authentication layer."],
          ["What are the four main OAuth roles?", "Resource Owner, Client, Authorization Server and Resource Server."],
          ["What is an Authorization Code?", "A temporary code exchanged for tokens through the token endpoint."],
          ["What is PKCE?", "Proof Key for Code Exchange. It protects the authorization code exchange using a verifier and challenge."],
          ["What is a Client ID?", "A public identifier assigned to an OAuth application."],
          ["What is a Client Secret?", "A confidential credential used by confidential OAuth clients."],
          ["What is a Scope?", "A permission that defines what resources or operations an application is requesting."],
          ["What is the State parameter?", "A random value used to correlate the authorization response with the original request and help prevent CSRF."],
          ["What is the difference between OAuth 2.0 and OpenID Connect?", "OAuth 2.0 provides authorization, while OpenID Connect adds authentication and identity information."],
          ["What is the Client Credentials grant?", "A grant used by a confidential client to obtain a token for server-to-server access without a user."],
        ].map(([question, answer], index) => (
          <details key={index} className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
            <summary className="cursor-pointer font-medium">{question}</summary>
            <p className="mt-3 text-sm text-[var(--text-secondary)]">{answer}</p>
          </details>
        ))}
      </section>
    </div>
  );
}

export default OAuth20;