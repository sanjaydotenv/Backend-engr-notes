import BuiltInModules from "../../content/backend/04-nodejs/nodejsModules/BuiltInModules";
import CommonJS from "../../content/backend/04-nodejs/nodejsModules/CommonJS";
import CustomModules from "../../content/backend/04-nodejs/nodejsModules/CustomModules";
import ESModules from "../../content/backend/04-nodejs/nodejsModules/ESModules";
import ModuleCaching from "../../content/backend/04-nodejs/nodejsModules/ModuleCaching";
import WhatareModules from "../../content/backend/04-nodejs/nodejsModules/WhatareModules";
import ImportExport from "../../content/backend/04-nodejs/nodejsModules/ImportExport";
import Require from "../../content/backend/04-nodejs/nodejsModules/Require";

export const NodejsModulesRoutes = [
  {
    path: "/what-are-modules",
    element: <WhatareModules />,
    label: "What are Modules",
  },
  {
    path: "/built-in-modules",
    element: <BuiltInModules />,
    label: "Built-in Modules",
  },
  {
    path: "/custom-modules",
    element: <CustomModules />,
    label: "Custom Modules",
  },
  {
    path: "/commonjs",
    element: <CommonJS />,
    label: "CommonJS",
  },
  {
    path: "/require",
    element: <Require />,
    label: "require()",
  },
  {
    path: "/import-export",
    element: <ImportExport />,
    label: "Import & Export",
  },
  {
    path: "/es-modules",
    element: <ESModules />,
    label: "ES Modules",
  },
  {
    path: "/module-caching",
    element: <ModuleCaching />,
    label: "Module Caching",
  },
];
