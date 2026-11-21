import AccessToken from "../../content/backend/07-authentication/AccessToken";
import AuthenticationvsAuthorization from "../../content/backend/07-authentication/AuthenticationvsAuthorization";
import EmailVerification from "../../content/backend/07-authentication/EmailVerification";
import GoogleOAuth from "../../content/backend/07-authentication/GoogleOAuth";
import HTTPonlyCookies from "../../content/backend/07-authentication/HTTPonlyCookies";
import JWT from "../../content/backend/07-authentication/JWT";
import OAuth20 from "../../content/backend/07-authentication/OAuth20";
import OTPAuthentication from "../../content/backend/07-authentication/OTPAuthentication";
import PasswordHashing from "../../content/backend/07-authentication/PasswordHashing";
import PasswordReset from "../../content/backend/07-authentication/PasswordReset";
import PasswordSecurity from "../../content/backend/07-authentication/PasswordSecurity";
import RefreshToken from "../../content/backend/07-authentication/RefreshToken";
import SessionBasedAuthentication from "../../content/backend/07-authentication/SessionBasedAuthentication";
import TokenExpiration from "../../content/backend/07-authentication/TokenExpiration";
import TokenRotation from "../../content/backend/07-authentication/TokenRotation";
import Bcrypt from "../../content/backend/07-authentication/Bcrypt";

export const authenticationRoutes = [
  {
    path: "/authentication-vs-authorization",
    element: <AuthenticationvsAuthorization />,
    label: "Authentication vs Authorization",
  },
  {
    path: "/password-security",
    element: <PasswordSecurity />,
    label: "Password Security",
  },
  {
    path: "/password-hashing",
    element: <PasswordHashing />,
    label: "Password Hashing",
  },
  {
    path: "/bcrypt",
    element: <Bcrypt />,
    label: "bcrypt",
  },
  {
    path: "/session-based-authentication",
    element: <SessionBasedAuthentication />,
    label: "Session-Based Authentication",
  },

  {
    path: "/http-only-cookies",
    element: <HTTPonlyCookies />,
    label: "HTTP-only Cookies",
  },
  {
    path: "/jwt",
    element: <JWT />,
    label: "JWT",
  },
  {
    path: "/access-token",
    element: <AccessToken />,
    label: "Access Token",
  },
  {
    path: "/refresh-token",
    element: <RefreshToken />,
    label: "Refresh Token",
  },
  {
    path: "/token-expiration",
    element: <TokenExpiration />,
    label: "Token Expiration",
  },
  {
    path: "/token-rotation",
    element: <TokenRotation />,
    label: "Token Rotation",
  },
  {
    path: "/oauth-20",
    element: <OAuth20 />,
    label: "OAuth 2.0",
  },
  {
    path: "/google-oauth",
    element: <GoogleOAuth />,
    label: "Google OAuth",
  },
  {
    path: "/otp-authentication",
    element: <OTPAuthentication />,
    label: "OTP Authentication",
  },
  {
    path: "/email-verification",
    element: <EmailVerification />,
    label: "Email Verification",
  },
  {
    path: "/password-reset",
    element: <PasswordReset />,
    label: "Password Reset",
  },
];
