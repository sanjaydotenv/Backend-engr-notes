import BruteForceProtection from "../../content/backend/08-security/BruteForceProtection";
import CORSSecurity from "../../content/backend/08-security/CORSSecurity";
import CSRF from "../../content/backend/08-security/CSRF";
import ContentSecurityPolicyCSP from "../../content/backend/08-security/ContentSecurityPolicyCSP";
import DependencySecurity from "../../content/backend/08-security/DependencySecurity";
import Encryption from "../../content/backend/08-security/Encryption";
import EnvironmentSecrets from "../../content/backend/08-security/EnvironmentSecrets";
import Helmet from "../../content/backend/08-security/Helmet";
import InputSanitization from "../../content/backend/08-security/InputSanitization";
import NoSQLInjection from "../../content/backend/08-security/NoSQLInjection";
import OWASPTop10 from "../../content/backend/08-security/OWASPTop10";
import RateLimiting from "../../content/backend/08-security/RateLimiting";
import SQLInjection from "../../content/backend/08-security/SQLInjection";
import SecretsManagement from "../../content/backend/08-security/SecretsManagement";
import SecureCookies from "../../content/backend/08-security/SecureCookies";
import SecurityHeaders from "../../content/backend/08-security/SecurityHeaders";
import TLS from "../../content/backend/08-security/TLS";
import XSS from "../../content/backend/08-security/XSS";

export const BackendSecurityroutes = [
  {
    path: "/brute-force-protection",
    element: <BruteForceProtection />,
    label: "Brute Force Protection",
  },
  {
    path: "/cors-security",
    element: <CORSSecurity />,
    label: "CORS Security",
  },
  {
    path: "/csrf",
    element: <CSRF />,
    label: "CSRF",
  },
  {
    path: "/content-security-policy-csp",
    element: <ContentSecurityPolicyCSP />,
    label: "Content Security Policy",
  },
  {
    path: "/dependency-security",
    element: <DependencySecurity />,
    label: "Dependency Security",
  },
  {
    path: "/encryption",
    element: <Encryption />,
    label: "Encryption",
  },
  {
    path: "/environment-secrets",
    element: <EnvironmentSecrets />,
    label: "Environment Secrets",
  },
  {
    path: "/helmet",
    element: <Helmet />,
    label: "Helmet",
  },
  {
    path: "/input-sanitization",
    element: <InputSanitization />,
    label: "Input Sanitization",
  },
  {
    path: "/nosql-injection",
    element: <NoSQLInjection />,
    label: "NoSQL Injection",
  },
  {
    path: "/owasp-top-10",
    element: <OWASPTop10 />,
    label: "OWASP Top 10",
  },
  {
    path: "/rate-limiting",
    element: <RateLimiting />,
    label: "Rate Limiting",
  },
  {
    path: "/sql-injection",
    element: <SQLInjection />,
    label: "SQL Injection",
  },
  {
    path: "/secrets-management",
    element: <SecretsManagement />,
    label: "Secrets Management",
  },
  {
    path: "/secure-cookies",
    element: <SecureCookies />,
    label: "Secure Cookies",
  },
  {
    path: "/security-headers",
    element: <SecurityHeaders />,
    label: "Security Headers",
  },
  {
    path: "/tls",
    element: <TLS />,
    label: "TLS",
  },
  {
    path: "/xss",
    element: <XSS />,
    label: "XSS",
  },
];
