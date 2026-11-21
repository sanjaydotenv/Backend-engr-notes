import Buffer from "../../content/backend/04-nodejs/nodejsCoreModules/Buffer";
import Crypto from "../../content/backend/04-nodejs/nodejsCoreModules/Crypto";
import Events from "../../content/backend/04-nodejs/nodejsCoreModules/Events";
import Fs from "../../content/backend/04-nodejs/nodejsCoreModules/Fs";
import Http from "../../content/backend/04-nodejs/nodejsCoreModules/Http";
import Https from "../../content/backend/04-nodejs/nodejsCoreModules/Https";
import Os from "../../content/backend/04-nodejs/nodejsCoreModules/Os";
import Path from "../../content/backend/04-nodejs/nodejsCoreModules/Path";
import Stream from "../../content/backend/04-nodejs/nodejsCoreModules/Stream";
import Url from "../../content/backend/04-nodejs/nodejsCoreModules/Url";
import Util from "../../content/backend/04-nodejs/nodejsCoreModules/Util";


export const NodejsCoreModulesRoutes = [
  {
    path: "/buffer",
    element: <Buffer />,
    label: "Buffer",
  },
  {
    path: "/fs",
    element: <Fs />,
    label: "File System (fs)",
  },
  {
    path: "/path",
    element: <Path />,
    label: "Path",
  },
  {
    path: "/os",
    element: <Os />,
    label: "OS",
  },
  {
    path: "/url",
    element: <Url />,
    label: "URL",
  },
  {
    path: "/events",
    element: <Events />,
    label: "Events",
  },
  {
    path: "/stream",
    element: <Stream />,
    label: "Stream",
  },
  {
    path: "/http",
    element: <Http />,
    label: "HTTP",
  },
  {
    path: "/https",
    element: <Https />,
    label: "HTTPs",
  },
  {
    path: "/crypto",
    element: <Crypto />,
    label: "Crypto",
  },
  {
    path: "/util",
    element: <Util />,
    label: "Util",
  },
];