import Backpressure from "../../content/backend/04-nodejs/NodejsAdvancedConcepts/Backpressure";
import ChildProcesses from "../../content/backend/04-nodejs/NodejsAdvancedConcepts/ChildProcesses";
import ClusterModule from "../../content/backend/04-nodejs/NodejsAdvancedConcepts/ClusterModule";
import EnvironmentVariables from "../../content/backend/04-nodejs/NodejsAdvancedConcepts/EnvironmentVariables";
import GarbageCollection from "../../content/backend/04-nodejs/NodejsAdvancedConcepts/GarbageCollection";
import MemoryManagement from "../../content/backend/04-nodejs/NodejsAdvancedConcepts/MemoryManagement";
import NodejsPerformance from "../../content/backend/04-nodejs/NodejsAdvancedConcepts/NodejsPerformance";
import ProcessObject from "../../content/backend/04-nodejs/NodejsAdvancedConcepts/ProcessObject";
import StreamsInternals from "../../content/backend/04-nodejs/NodejsAdvancedConcepts/StreamsInternals";
import WorkerThreads from "../../content/backend/04-nodejs/NodejsAdvancedConcepts/WorkerThreads";

export const nodejsAdvancedRoutes = [
  {
    path: "/backpressure",
    element: <Backpressure />,
    label: "Backpressure",
  },
  {
    path: "/child-processes",
    element: <ChildProcesses />,
    label: "Child Processes",
  },
  {
    path: "/cluster-module",
    element: <ClusterModule />,
    label: "Cluster Module",
  },
  {
    path: "/environment-variables",
    element: <EnvironmentVariables />,
    label: "Environment Variables",
  },
  {
    path: "/garbage-collection",
    element: <GarbageCollection />,
    label: "Garbage Collection",
  },
  {
    path: "/memory-management",
    element: <MemoryManagement />,
    label: "Memory Management",
  },
  {
    path: "/nodejs-performance",
    element: <NodejsPerformance />,
    label: "Node.js Performance",
  },
  {
    path: "/process-object",
    element: <ProcessObject />,
    label: "Process Object",
  },
  {
    path: "/streams-internals",
    element: <StreamsInternals />,
    label: "Streams Internals",
  },
  {
    path: "/worker-threads",
    element: <WorkerThreads />,
    label: "Worker Threads",
  },
];
