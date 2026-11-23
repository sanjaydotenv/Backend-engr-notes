import APIMocking from "../../content/backend/13-testing/APIMocking";
import APITesting from "../../content/backend/13-testing/APITesting";
import EndtoEndTesting from "../../content/backend/13-testing/EndtoEndTesting";
import IntegrationTesting from "../../content/backend/13-testing/IntegrationTesting";
import Jest from "../../content/backend/13-testing/Jest";
import LoadTesting from "../../content/backend/13-testing/LoadTesting";
import Mocking from "../../content/backend/13-testing/Mocking";
import PerformanceTesting from "../../content/backend/13-testing/PerformanceTesting";
import Supertest from "../../content/backend/13-testing/Supertest";
import TestCoverage from "../../content/backend/13-testing/TestCoverage";
import TestDrivenDevelopmentTDD from "../../content/backend/13-testing/TestDrivenDevelopmentTDD";
import UnitTesting from "../../content/backend/13-testing/UnitTesting";
import Vitest from "../../content/backend/13-testing/Vitest";
import WhatisSoftwareTesting from "../../content/backend/13-testing/WhatisSoftwareTesting";

export const TestingRoutes = [
  {
    path: "/api-mocking",
    element: <APIMocking />,
    label: "API Mocking",
  },
  {
    path: "/api-testing",
    element: <APITesting />,
    label: "API Testing",
  },
  {
    path: "/end-to-end-testing",
    element: <EndtoEndTesting />,
    label: "End-to-End Testing",
  },
  {
    path: "/integration-testing",
    element: <IntegrationTesting />,
    label: "Integration Testing",
  },
  {
    path: "/jest",
    element: <Jest />,
    label: "Jest",
  },
  {
    path: "/load-testing",
    element: <LoadTesting />,
    label: "Load Testing",
  },
  {
    path: "/mocking",
    element: <Mocking />,
    label: "Mocking",
  },
  {
    path: "/performance-testing",
    element: <PerformanceTesting />,
    label: "Performance Testing",
  },
  {
    path: "/supertest",
    element: <Supertest />,
    label: "Supertest",
  },
  {
    path: "/test-coverage",
    element: <TestCoverage />,
    label: "Test Coverage",
  },
  {
    path: "/test-driven-development-tdd",
    element: <TestDrivenDevelopmentTDD />,
    label: "Test-Driven Development (TDD)",
  },
  {
    path: "/unit-testing",
    element: <UnitTesting />,
    label: "Unit Testing",
  },
  {
    path: "/vitest",
    element: <Vitest />,
    label: "Vitest",
  },
  {
    path: "/what-is-software-testing",
    element: <WhatisSoftwareTesting />,
    label: "What Is Software Testing",
  },
];
