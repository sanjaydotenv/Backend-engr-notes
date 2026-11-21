import AsynchronousProgramming from "../../content/backend/04-nodejs/introToNodejs/AsynchronousProgramming";
import NodejsArchitecture from "../../content/backend/04-nodejs/introToNodejs/NodejsArchitecture";
import NodejsvsBrowserJavaScript from "../../content/backend/04-nodejs/introToNodejs/NodejsvsBrowserJavaScript";
import NonblockingIO from "../../content/backend/04-nodejs/introToNodejs/NonblockingIO";
import SingleThreadedArchitecture from "../../content/backend/04-nodejs/introToNodejs/SingleThreadedArchitecture";
import V8Engine from "../../content/backend/04-nodejs/introToNodejs/V8Engine";
import WhatIsNode from "../../content/backend/04-nodejs/introToNodejs/WhatIsNode";
import WhyNode from "../../content/backend/04-nodejs/introToNodejs/WhyNode";
import Libuv from "../../content/backend/04-nodejs/introToNodejs/Libuv";

export const nodejsRoutes = [
  {
    path: "/what-is-nodejs",
    element: <WhatIsNode />,
    label: "What is Node.js",
  },
  {
    path: "/why-nodejs",
    element: <WhyNode />,
    label: "Why Node.js",
  },
  {
    path: "/nodejs-vs-browser-javascript",
    element: <NodejsvsBrowserJavaScript />,
    label: "Node.js vs Browser JavaScript",
  },
  {
    path: "/nodejs-architecture",
    element: <NodejsArchitecture />,
    label: "Node.js Architecture",
  },
  {
    path: "/single-threaded-architecture",
    element: <SingleThreadedArchitecture />,
    label: "Single-Threaded Architecture",
  },
  {
    path: "/non-blocking-i-o",
    element: <NonblockingIO />,
    label: "Non-Blocking I/O",
  },
  {
    path: "/asynchronous-programming",
    element: <AsynchronousProgramming />,
    label: "Asynchronous Programming",
  },
  {
    path: "/v8-engine",
    element: <V8Engine />,
    label: "V8 Engine",
  },
  {
    path: "/libuv",
    element: <Libuv />,
    label: "libuv",
  },
];
