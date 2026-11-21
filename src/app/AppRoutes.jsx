import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../components/layout/MainLayout";
import { fundamentalsRoutes } from "./Routes/Fundamentals.routes";
import { networkingRoutes } from "./Routes/Networking.Routes";
import { APIFundamentalRoutes } from "./Routes/APIFundamental.routes";
import { nodejsRoutes } from "./Routes/NodejsCore.routes";
import { NodejsModulesRoutes } from "./Routes/NodejsModules.routes";
import { NodejsCoreModulesRoutes } from "./Routes/NodejsCoreModules.routes";
import { AsynchronousJavaScriptRoutes } from "./Routes/AsynchronousJavaScript.routes";
import { nodejsAdvancedRoutes } from "./Routes/NodejsAdvancedConcepts.routes";
import { expressRoutes } from "./Routes/IntroductionToExpress.routes";
import { backendArchitectureRoutes } from "./Routes/BackendArchitecture.routes";
import { RESTAPIDevelopmentRoutes } from "./Routes/RESTAPIDevelopment.routes";
import { databaseFundamentalsRoutes } from "./Routes/DatabaseFundamentals.routes";
import { mongoDBRoutes } from "./Routes/MongoDB.Routes";
import { mongooseRoutes } from "./Routes/Mongoose.routes";
import { advancedDatabaseRoutes } from "./Routes/AdvancedDatabase.routes";
import { authenticationRoutes } from "./Routes/Authentication.Routes";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        ...fundamentalsRoutes,
        ...networkingRoutes,
        ...APIFundamentalRoutes,
        ...nodejsRoutes,
        ...NodejsModulesRoutes,
        ...NodejsCoreModulesRoutes,
        ...AsynchronousJavaScriptRoutes,
        ...nodejsAdvancedRoutes,
        ...expressRoutes,
        ...backendArchitectureRoutes,
        ...RESTAPIDevelopmentRoutes,
        ...databaseFundamentalsRoutes,
        ...mongoDBRoutes,
        ...mongooseRoutes,
        ...advancedDatabaseRoutes,
        ...authenticationRoutes,
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
