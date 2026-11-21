import ACIDProperties from "../../content/backend/06-database/DatabaseFundamentals/ACIDProperties"
import DatabaseNormalization from "../../content/backend/06-database/DatabaseFundamentals/DatabaseNormalization"
import DatabaseSchema from "../../content/backend/06-database/DatabaseFundamentals/DatabaseSchema"
import Documents from "../../content/backend/06-database/DatabaseFundamentals/Documents"
import Fields from "../../content/backend/06-database/DatabaseFundamentals/Fields"
import ForeignKey from "../../content/backend/06-database/DatabaseFundamentals/ForeignKey"
import NonRelationalDatabase from "../../content/backend/06-database/DatabaseFundamentals/NonRelationalDatabase"
import PrimaryKey from "../../content/backend/06-database/DatabaseFundamentals/PrimaryKey"
import RelationalDatabase from "../../content/backend/06-database/DatabaseFundamentals/RelationalDatabase"
import Relationships from "../../content/backend/06-database/DatabaseFundamentals/Relationships"
import SQLvsNoSQL from "../../content/backend/06-database/DatabaseFundamentals/SQLvsNoSQL"
import TablesvsCollections from "../../content/backend/06-database/DatabaseFundamentals/TablesvsCollections"
import WhatIsADatabase from "../../content/backend/06-database/DatabaseFundamentals/WhatIsADatabase"
import WhyDatabases from "../../content/backend/06-database/DatabaseFundamentals/WhyDatabases"


export const databaseFundamentalsRoutes = [
  {
    path: "/what-is-a-database",
    element: <WhatIsADatabase />,
    label: "What Is a Database",
  },
  {
    path: "/why-databases",
    element: <WhyDatabases />,
    label: "Why Databases",
  },
  {
    path: "/relational-database",
    element: <RelationalDatabase />,
    label: "Relational Database",
  },
  {
    path: "/non-relational-database",
    element: <NonRelationalDatabase />,
    label: "Non-Relational Database",
  },
  {
    path: "/sql-vs-nosql",
    element: <SQLvsNoSQL />,
    label: "SQL vs NoSQL",
  },
  {
    path: "/tables-vs-collections",
    element: <TablesvsCollections />,
    label: "Tables vs Collections",
  },
  {
    path: "/documents",
    element: <Documents />,
    label: "Documents",
  },
  {
    path: "/fields",
    element: <Fields />,
    label: "Fields",
  },
  {
    path: "/database-schema",
    element: <DatabaseSchema />,
    label: "Database Schema",
  },
  {
    path: "/primary-key",
    element: <PrimaryKey />,
    label: "Primary Key",
  },
  {
    path: "/foreign-key",
    element: <ForeignKey />,
    label: "Foreign Key",
  },
  {
    path: "/relationships",
    element: <Relationships />,
    label: "Relationships",
  },
  {
    path: "/database-normalization",
    element: <DatabaseNormalization />,
    label: "Database Normalization",
  },
  {
    path: "/acid-properties",
    element: <ACIDProperties />,
    label: "ACID Properties",
  },
];