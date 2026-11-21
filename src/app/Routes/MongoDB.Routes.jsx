import ArrayOperators from "../../content/backend/06-database/MongoDB/ArrayOperators";
import BSON from "../../content/backend/06-database/MongoDB/BSON";
import Collections from "../../content/backend/06-database/MongoDB/Collections";
import ComparisonOperators from "../../content/backend/06-database/MongoDB/ComparisonOperators";
import CompoundIndex from "../../content/backend/06-database/MongoDB/CompoundIndex";
import Database from "../../content/backend/06-database/MongoDB/Database";
import EmbeddedDocuments from "../../content/backend/06-database/MongoDB/EmbeddedDocuments";
import ExplainExecutionPlan from "../../content/backend/06-database/MongoDB/ExplainExecutionPlan";
import Indexing from "../../content/backend/06-database/MongoDB/Indexing";
import IntroductiontoMongoDB from "../../content/backend/06-database/MongoDB/IntroductiontoMongoDB";
import LogicalOperators from "../../content/backend/06-database/MongoDB/LogicalOperators";
import MongoDBArchitecture from "../../content/backend/06-database/MongoDB/MongoDBArchitecture";
import MongoDBAtlas from "../../content/backend/06-database/MongoDB/MongoDBAtlas";
import MongoDBCompass from "../../content/backend/06-database/MongoDB/MongoDBCompass";
import MongoDBOperators from "../../content/backend/06-database/MongoDB/MongoDBOperators";
import Projection from "../../content/backend/06-database/MongoDB/Projection";
import Referencing from "../../content/backend/06-database/MongoDB/Referencing";
import SchemaValidation from "../../content/backend/06-database/MongoDB/SchemaValidation";
import TTLIndex from "../../content/backend/06-database/MongoDB/TTLIndex";
import UniqueIndex from "../../content/backend/06-database/MongoDB/UniqueIndex";
import UpdateOperators from "../../content/backend/06-database/MongoDB/UpdateOperators";

export const mongoDBRoutes = [
  {
    path: "/introduction-to-mongodb",
    element: <IntroductiontoMongoDB />,
    label: "Introduction to MongoDB",
  },
  {
    path: "/mongodb-architecture",
    element: <MongoDBArchitecture />,
    label: "MongoDB Architecture",
  },
  {
    path: "/mongodb-compass",
    element: <MongoDBCompass />,
    label: "MongoDB Compass",
  },
  {
    path: "/mongodb-atlas",
    element: <MongoDBAtlas />,
    label: "MongoDB Atlas",
  },
  {
    path: "/database",
    element: <Database />,
    label: "Database",
  },
  {
    path: "/collections",
    element: <Collections />,
    label: "Collections",
  },
  {
    path: "/bson",
    element: <BSON />,
    label: "BSON",
  },
  {
    path: "/mongodb-operators",
    element: <MongoDBOperators />,
    label: "MongoDB Operators",
  },
  {
    path: "/comparison-operators",
    element: <ComparisonOperators />,
    label: "Comparison Operators",
  },
  {
    path: "/logical-operators",
    element: <LogicalOperators />,
    label: "Logical Operators",
  },
  {
    path: "/update-operators",
    element: <UpdateOperators />,
    label: "Update Operators",
  },
  {
    path: "/array-operators",
    element: <ArrayOperators />,
    label: "Array Operators",
  },
  {
    path: "/projection",
    element: <Projection />,
    label: "Projection",
  },
  {
    path: "/embedded-documents",
    element: <EmbeddedDocuments />,
    label: "Embedded Documents",
  },
  {
    path: "/referencing",
    element: <Referencing />,
    label: "Referencing",
  },
  {
    path: "/schema-validation",
    element: <SchemaValidation />,
    label: "Schema Validation",
  },
  {
    path: "/indexing",
    element: <Indexing />,
    label: "Indexing",
  },
  {
    path: "/compound-index",
    element: <CompoundIndex />,
    label: "Compound Index",
  },
  {
    path: "/unique-index",
    element: <UniqueIndex />,
    label: "Unique Index",
  },
  {
    path: "/ttl-index",
    element: <TTLIndex />,
    label: "TTL Index",
  },
  {
    path: "/explain-execution-plan",
    element: <ExplainExecutionPlan />,
    label: "Explain Execution Plan",
  },
];
