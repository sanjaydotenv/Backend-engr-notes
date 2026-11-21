import AsyncHandler from "../../content/backend/05-express/BackendArchitecture/AsyncHandler";
import CentralizedErrorHandling from "../../content/backend/05-express/BackendArchitecture/CentralizedErrorHandling";
import Configurations from "../../content/backend/05-express/BackendArchitecture/Configurations";
import ControllerServiceRepositoryPattern from "../../content/backend/05-express/BackendArchitecture/ControllerServiceRepositoryPattern";
import Controllers from "../../content/backend/05-express/BackendArchitecture/Controllers";
import CustomAPIError from "../../content/backend/05-express/BackendArchitecture/CustomAPIError";
import CustomAPIResponse from "../../content/backend/05-express/BackendArchitecture/CustomAPIResponse";
import EnvironmentConfiguration from "../../content/backend/05-express/BackendArchitecture/EnvironmentConfiguration";
import MVCArchitecture from "../../content/backend/05-express/BackendArchitecture/MVCArchitecture";
import Middlewares from "../../content/backend/05-express/BackendArchitecture/Middlewares";
import Models from "../../content/backend/05-express/BackendArchitecture/Models";
import Repositories from "../../content/backend/05-express/BackendArchitecture/Repositories";
import Routes from "../../content/backend/05-express/BackendArchitecture/Routes";
import Services from "../../content/backend/05-express/BackendArchitecture/Services";
import UnderstandingBackendProjectStructure from "../../content/backend/05-express/BackendArchitecture/UnderstandingBackendProjectStructure";
import Utils from "../../content/backend/05-express/BackendArchitecture/Utils";

export const backendArchitectureRoutes = [
  {
    path: "/understanding-backend-project-structure",
    element: <UnderstandingBackendProjectStructure />,
    label: "Understanding Backend Project Structure",
  },
  {
    path: "/mvc-architecture",
    element: <MVCArchitecture />,
    label: "MVC Architecture",
  },
  {
    path: "/routes",
    element: <Routes />,
    label: "Routes",
  },
  {
    path: "/controllers",
    element: <Controllers />,
    label: "Controllers",
  },
  {
    path: "/services",
    element: <Services />,
    label: "Services",
  },
  {
    path: "/repositories",
    element: <Repositories />,
    label: "Repositories",
  },
  {
    path: "/models",
    element: <Models />,
    label: "Models",
  },
  {
    path: "/middlewares",
    element: <Middlewares />,
    label: "Middlewares",
  },
  {
    path: "/utils",
    element: <Utils />,
    label: "Utils",
  },
  {
    path: "/configurations",
    element: <Configurations />,
    label: "Configurations",
  },
  {
    path: "/controller-service-repository-pattern",
    element: <ControllerServiceRepositoryPattern />,
    label: "Controller-Service-Repository Pattern",
  },
  {
    path: "/environment-configuration",
    element: <EnvironmentConfiguration />,
    label: "Environment Configuration",
  },
  {
    path: "/centralized-error-handling",
    element: <CentralizedErrorHandling />,
    label: "Centralized Error Handling",
  },
  {
    path: "/custom-api-error",
    element: <CustomAPIError />,
    label: "Custom API Error",
  },
  {
    path: "/custom-api-response",
    element: <CustomAPIResponse />,
    label: "Custom API Response",
  },
  {
    path: "/async-handler",
    element: <AsyncHandler />,
    label: "Async Handler",
  },
];
