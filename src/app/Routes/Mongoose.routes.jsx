import WhatisMongoose from "../../content/backend/06-database/mongoose/WhatisMongoose";
import WhyMongoose from "../../content/backend/06-database/mongoose/WhyMongoose";
import Schema from "../../content/backend/06-database/mongoose/Schema";
import Model from "../../content/backend/06-database/mongoose/Model";
import SchemaTypes from "../../content/backend/06-database/mongoose/SchemaTypes";
import Validation from "../../content/backend/06-database/mongoose/Validation";
import MiddlewareHooks from "../../content/backend/06-database/mongoose/MiddlewareHooks";
import InstanceMethods from "../../content/backend/06-database/mongoose/InstanceMethods";
import StaticMethods from "../../content/backend/06-database/mongoose/StaticMethods";
import Virtuals from "../../content/backend/06-database/mongoose/Virtuals";
import Populate from "../../content/backend/06-database/mongoose/Populate";
import QueryMethods from "../../content/backend/06-database/mongoose/QueryMethods";
import AggregationPipeline from "../../content/backend/06-database/mongoose/AggregationPipeline";
import Transactions from "../../content/backend/06-database/mongoose/Transactions";
import SchemaDesign from "../../content/backend/06-database/mongoose/SchemaDesign";
import DataModeling from "../../content/backend/06-database/mongoose/DataModeling";

export const mongooseRoutes = [
  {
    path: "/what-is-mongoose",
    element: <WhatisMongoose />,
    label: "What is Mongoose?",
  },
  {
    path: "/why-mongoose",
    element: <WhyMongoose />,
    label: "Why Mongoose?",
  },
  {
    path: "schema",
    element: <Schema />,
    label: "Schema",
  },
  {
    path: "model",
    element: <Model />,
    label: "Model",
  },
  {
    path: "schema-types",
    element: <SchemaTypes />,
    label: "Schema Types",
  },
  {
    path: "validation",
    element: <Validation />,
    label: "Validation",
  },
  {
    path: "middleware-hooks",
    element: <MiddlewareHooks />,
    label: "Middleware / Hooks",
  },
  {
    path: "instance-methods",
    element: <InstanceMethods />,
    label: "Instance Methods",
  },
  {
    path: "static-methods",
    element: <StaticMethods />,
    label: "Static Methods",
  },
  {
    path: "virtuals",
    element: <Virtuals />,
    label: "Virtuals",
  },
  {
    path: "populate",
    element: <Populate />,
    label: "Populate",
  },
  {
    path: "query-methods",
    element: <QueryMethods />,
    label: "Query Methods",
  },
  {
    path: "aggregation-pipeline",
    element: <AggregationPipeline />,
    label: "Aggregation Pipeline",
  },
  {
    path: "transactions",
    element: <Transactions />,
    label: "Transactions",
  },
  {
    path: "schema-design",
    element: <SchemaDesign />,
    label: "Schema Design",
  },
  {
    path: "data-modeling",
    element: <DataModeling />,
    label: "Data Modeling",
  },
];
