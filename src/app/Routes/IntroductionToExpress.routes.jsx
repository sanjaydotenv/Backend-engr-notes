import BuiltInMiddleware from "../../content/backend/05-express/IntroductionToExpressJs/BuiltInMiddleware";
import CreatingExpressServer from "../../content/backend/05-express/IntroductionToExpressJs/CreatingExpressServer";
import CustomMiddleware from "../../content/backend/05-express/IntroductionToExpressJs/CustomMiddleware";
import ErrorHandlingMiddleware from "../../content/backend/05-express/IntroductionToExpressJs/ErrorHandlingMiddleware";
import ExpressArchitecture from "../../content/backend/05-express/IntroductionToExpressJs/ExpressArchitecture";
import Middleware from "../../content/backend/05-express/IntroductionToExpressJs/Middleware";
import RequestObject from "../../content/backend/05-express/IntroductionToExpressJs/RequestObject";
import ResponseObject from "../../content/backend/05-express/IntroductionToExpressJs/ResponseObject";
import RouterLevelMiddleware from "../../content/backend/05-express/IntroductionToExpressJs/RouterLevelMiddleware";
import Routing from "../../content/backend/05-express/IntroductionToExpressJs/Routing";
import ThirdPartyMiddleware from "../../content/backend/05-express/IntroductionToExpressJs/ThirdPartyMiddleware";
import WhatIsExpress from "../../content/backend/05-express/IntroductionToExpressJs/WhatIsExpress";
import WhyExpress from "../../content/backend/05-express/IntroductionToExpressJs/WhyExpress";

export const expressRoutes = [
  {
    path: "What-Is-Express",
    label: "What Is Express",
    element: <WhatIsExpress />,
  },
  {
    path: "Why-Express",
    label: "Why Express",
    element: <WhyExpress />,
  },
  {
    path: "built-in-middleware",
    label: "Built-in Middleware",
    element: <BuiltInMiddleware />,
  },
  {
    path: "creating-express-server",
    label: "Creating Express Server",
    element: <CreatingExpressServer />,
  },
  {
    path: "custom-middleware",
    label: "Custom Middleware",
    element: <CustomMiddleware />,
  },
  {
    path: "error-handling-middleware",
    label: "Error Handling Middleware",
    element: <ErrorHandlingMiddleware />,
  },
  {
    path: "express-architecture",
    label: "Express Architecture",
    element: <ExpressArchitecture />,
  },
  {
    path: "middleware",
    label: "Middleware",
    element: <Middleware />,
  },
  {
    path: "request-object",
    label: "Request Object",
    element: <RequestObject />,
  },
  {
    path: "response-object",
    label: "Response Object",
    element: <ResponseObject />,
  },
  {
    path: "router-level-middleware",
    label: "Router Level Middleware",
    element: <RouterLevelMiddleware />,
  },
  {
    path: "routing",
    label: "Routing",
    element: <Routing />,
  },
  {
    path: "third-party-middleware",
    label: "Third-Party Middleware",
    element: <ThirdPartyMiddleware />,
  },
];
