import SynchronousvsAsynchronous from "../../content/backend/04-nodejs/AsynchronousJavaScript/SynchronousvsAsynchronous";
import CallStack from "../../content/backend/04-nodejs/AsynchronousJavaScript/CallStack";
import Callbacks from "../../content/backend/04-nodejs/AsynchronousJavaScript/Callbacks";
import CallbackHell from "../../content/backend/04-nodejs/AsynchronousJavaScript/CallbackHell";
import Promises from "../../content/backend/04-nodejs/AsynchronousJavaScript/Promises";
import PromiseAll from "../../content/backend/04-nodejs/AsynchronousJavaScript/PromiseAll";
import PromiseAllSettled from "../../content/backend/04-nodejs/AsynchronousJavaScript/PromiseAllSettled";
import PromiseRace from "../../content/backend/04-nodejs/AsynchronousJavaScript/PromiseRace";
import PromiseAny from "../../content/backend/04-nodejs/AsynchronousJavaScript/PromiseAny";
import AsyncAwait from "../../content/backend/04-nodejs/AsynchronousJavaScript/AsyncAwait";
import CallbackQueue from "../../content/backend/04-nodejs/AsynchronousJavaScript/CallbackQueue";
import MicrotaskQueue from "../../content/backend/04-nodejs/AsynchronousJavaScript/MicrotaskQueue";
import EventLoop from "../../content/backend/04-nodejs/AsynchronousJavaScript/EventLoop";

export const AsynchronousJavaScriptRoutes = [
  {
    path: "/synchronous-vs-asynchronous",
    element: <SynchronousvsAsynchronous />,
    label: "Synchronous vs Asynchronous",
  },
  {
    path: "/call-stack",
    element: <CallStack />,
    label: "Call Stack",
  },
  {
    path: "/callbacks",
    element: <Callbacks />,
    label: "Callbacks",
  },
  {
    path: "/callback-hell",
    element: <CallbackHell />,
    label: "Callback Hell",
  },
  {
    path: "/promises",
    element: <Promises />,
    label: "Promises",
  },
  {
    path: "/promiseall",
    element: <PromiseAll />,
    label: "Promise.all()",
  },
  {
    path: "/promiseallsettled",
    element: <PromiseAllSettled />,
    label: "Promise.allSettled()",
  },
  {
    path: "/promiserace",
    element: <PromiseRace />,
    label: "Promise.race()",
  },
  {
    path: "/promiseany",
    element: <PromiseAny />,
    label: "Promise.any()",
  },
  {
    path: "/async-await",
    element: <AsyncAwait />,
    label: "Async / Await",
  },
  {
    path: "/callback-queue",
    element: <CallbackQueue />,
    label: "Callback Queue",
  },
  {
    path: "/microtask-queue",
    element: <MicrotaskQueue />,
    label: "Microtask Queue",
  },
  {
    path: "/event-loop",
    element: <EventLoop />,
    label: "Event Loop",
  },
];
