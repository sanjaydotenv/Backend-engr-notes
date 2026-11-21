import CORS from "../../content/backend/02-networking/CORS";
import Cookies from "../../content/backend/02-networking/Cookies";
import HTTPHeaders from "../../content/backend/02-networking/HTTPHeaders";
import HTTPMethods from "../../content/backend/02-networking/HTTPMethods";
import HTTPProtocol from "../../content/backend/02-networking/HTTPProtocol";
import HTTPSProtocol from "../../content/backend/02-networking/HTTPSProtocol";
import QueryParameters from "../../content/backend/02-networking/QueryParameters";
import RequestBody from "../../content/backend/02-networking/RequestBody";
import RouteParameters from "../../content/backend/02-networking/RouteParameters";
import TCPIP from "../../content/backend/02-networking/TCPIP";
import UDP from "../../content/backend/02-networking/UDP";
import HTTPStatusCodes from "../../content/backend/02-networking/HTTPStatusCodes";

export const networkingRoutes = [
  {
    path: "/tcp-ip",
    element: <TCPIP />,
    label: "TCP/IP",
  },
  {
    path: "/udp",
    element: <UDP />,
    label: "UDP",
  },
  {
    path: "/http-protocol",
    element: <HTTPProtocol />,
    label: "HTTP Protocol",
  },
  {
    path: "/https-protocol",
    element: <HTTPSProtocol />,
    label: "HTTPS Protocol",
  },
  {
    path: "/http-methods",
    element: <HTTPMethods />,
    label: "HTTP Methods",
  },
  {
    path: "/http-status-codes",
    element: <HTTPStatusCodes />,
    label: "HTTP Methods",
  },
  {
    path: "/http-headers",
    element: <HTTPHeaders />,
    label: "HTTP Headers",
  },
  {
    path: "/request-body",
    element: <RequestBody />,
    label: "Request Body",
  },
  {
    path: "/query-parameters",
    element: <QueryParameters />,
    label: "Query Parameters",
  },
  {
    path: "/route-parameters",
    element: <RouteParameters />,
    label: "Route Parameters",
  },
  {
    path: "/cookies",
    element: <Cookies />,
    label: "Cookies",
  },
  {
    path: "/cors",
    element: <CORS />,
    label: "CORS",
  },
];
