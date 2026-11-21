import WhatIsBackendDevelopment001 from "../../content/backend/01-fundamentals/WhatIsBackendDevelopment001";
import FrontendvsBackend002 from "../../content/backend/01-fundamentals/FrontendvsBackend002";
import ClientServerArchitecture003 from "../../content/backend/01-fundamentals/ClientServerArchitecture003";
import HowTheInternetWorks004 from "../../content/backend/01-fundamentals/HowTheInternetWorks004";
import RequestAndResponseLifecycle006 from "../../content/backend/01-fundamentals/RequestAndResponseLifecycle006";
import HTTPvsHTTPS007 from "../../content/backend/01-fundamentals/HTTPvsHTTPS007";
import IPAddress008 from "../../content/backend/01-fundamentals/IPAddress008";
import DomainName009 from "../../content/backend/01-fundamentals/DomainName009";
import DNS0010 from "../../content/backend/01-fundamentals/DNS0010";
import HostingAndServers0011 from "../../content/backend/01-fundamentals/HostingAndServers0011";
import Ports0012 from "../../content/backend/01-fundamentals/Ports0012";
import WhatHappensWhenYouEnterAURL005 from "../../content/backend/01-fundamentals/WhatHappensWhenYouEnterAURL005";

export const fundamentalsRoutes = [
  {
    path: "/what-is-backend",
    element: <WhatIsBackendDevelopment001 />,
    label: "What Is Backend Development?",
  },
  {
    path: "/frontend-vs-backend",
    element: <FrontendvsBackend002 />,
    label: "Frontend vs Backend",
  },
  {
    path: "/client-server-architecture",
    element: <ClientServerArchitecture003 />,
    label: "Client-Server Architecture",
  },
  {
    path: "/how-internet-works",
    element: <HowTheInternetWorks004 />,
    label: "How the Internet Works",
  },
  {
    path: "/ip-address",
    element: <IPAddress008 />,
    label: "IP Address",
  },
  {
    path: "/domain-name",
    element: <DomainName009 />,
    label: "Domain Name",
  },
  {
    path: "/dns",
    element: <DNS0010 />,
    label: "DNS",
  },
  {
    path: "/hosting-and-servers",
    element: <HostingAndServers0011 />,
    label: "Hosting & Servers",
  },
  {
    path: "/ports",
    element: <Ports0012 />,
    label: "Ports",
  },
  {
    path: "/http-vs-https",
    element: <HTTPvsHTTPS007 />,
    label: "HTTP vs HTTPS",
  },
  {
    path: "/request-response-lifecycle",
    element: <RequestAndResponseLifecycle006 />,
    label: "Request & Response Lifecycle",
  },
  {
    path: "/what-happens-when-you-enter-a-url",
    element: <WhatHappensWhenYouEnterAURL005 />,
    label: "What Happens When You Enter a URL?",
  },
];
