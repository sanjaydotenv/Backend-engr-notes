import APIEndpoints from "../../content/backend/03-api-fundamentals/APIEndpoints";
import APIVersioning from "../../content/backend/03-api-fundamentals/APIVersioning";
import Idempotency from "../../content/backend/03-api-fundamentals/Idempotency";
import JSON from "../../content/backend/03-api-fundamentals/JSON";
import RESTArchitecture from "../../content/backend/03-api-fundamentals/RESTArchitecture";
import RESTfulAPI from "../../content/backend/03-api-fundamentals/RESTfulAPI";
import StatelessvsStateful from "../../content/backend/03-api-fundamentals/StatelessvsStateful";
import WhatIsAnAPI from "../../content/backend/03-api-fundamentals/WhatIsAnAPI";
import WhatIsRESTAPI from "../../content/backend/03-api-fundamentals/WhatIsRESTAPI";
import XML from "../../content/backend/03-api-fundamentals/XML";

export const APIFundamentalRoutes = [
  {
    path: "/what-is-an-api",
    element: <WhatIsAnAPI />,
  },
  {
    path: "/json",
    element: <JSON />,
    label: "JSON",
  },
  {
    path: "/XML",
    element: <XML />,
    label: "XML",
  },
  {
    path: "/what-is-rest-api",
    element: <WhatIsRESTAPI />,
    label: "What is REST API",
  },
  {
    path: "/rest-architecture",
    element: <RESTArchitecture />,
    label: "REST Architecture",
  },
  {
    path: "/restful-api",
    element: <RESTfulAPI />,
    label: "RESTful API",
  },
  {
    path: "/API-Endpoints",
    element: <APIEndpoints />,
    label: "API Endpoints",
  },
  {
    path: "/stateless-vs-stateful",
    element: <StatelessvsStateful />,
    label: "Stateless vs Stateful",
  },
  {
    path: "/Idempotency",
    element: <Idempotency />,
    label: "Idempotency",
  },
  {
    path: "/api-versioning",
    element: <APIVersioning />,
    label: "API Versioning",
  },
];
