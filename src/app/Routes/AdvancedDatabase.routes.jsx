import MongoDBAggregation from "../../content/backend/06-database/advanceDatabase/MongoDBAggregation";
import MatchStage from "../../content/backend/06-database/advanceDatabase/MatchStage";
import ProjectStage from "../../content/backend/06-database/advanceDatabase/ProjectStage";
import GroupStage from "../../content/backend/06-database/advanceDatabase/GroupStage";
import SortStage from "../../content/backend/06-database/advanceDatabase/SortStage";
import UnwindStage from "../../content/backend/06-database/advanceDatabase/UnwindStage";
import LookupStage from "../../content/backend/06-database/advanceDatabase/LookupStage";
import FacetStage from "../../content/backend/06-database/advanceDatabase/FacetStage";
import BucketStage from "../../content/backend/06-database/advanceDatabase/BucketStage";
import DatabaseIndexingStrategy from "../../content/backend/06-database/advanceDatabase/DatabaseIndexingStrategy";
import IndexPerformance from "../../content/backend/06-database/advanceDatabase/IndexPerformance";
import QueryOptimization from "../../content/backend/06-database/advanceDatabase/QueryOptimization";
import Replication from "../../content/backend/06-database/advanceDatabase/Replication";
import Sharding from "../../content/backend/06-database/advanceDatabase/Sharding";
import DatabasePartitioning from "../../content/backend/06-database/advanceDatabase/DatabasePartitioning";
import ConnectionPooling from "../../content/backend/06-database/advanceDatabase/ConnectionPooling";

export const advancedDatabaseRoutes = [
  {
    path: "mongodb-aggregation",
    element: <MongoDBAggregation />,
    label: "MongoDB Aggregation",
  },
  { path: "match", element: <MatchStage />, label: "$match" },
  { path: "project", element: <ProjectStage />, label: "$project" },
  { path: "group", element: <GroupStage />, label: "$group" },
  { path: "sort", element: <SortStage />, label: "$sort" },
  { path: "unwind", element: <UnwindStage />, label: "$unwind" },
  { path: "lookup", element: <LookupStage />, label: "$lookup" },
  { path: "facet", element: <FacetStage />, label: "$facet" },
  { path: "bucket", element: <BucketStage />, label: "$bucket" },
  {
    path: "database-indexing-strategy",
    element: <DatabaseIndexingStrategy />,
    label: "Database Indexing Strategy",
  },
  {
    path: "index-performance",
    element: <IndexPerformance />,
    label: "Index Performance",
  },
  {
    path: "query-optimization",
    element: <QueryOptimization />,
    label: "Query Optimization",
  },
  { path: "replication", element: <Replication />, label: "Replication" },
  { path: "sharding", element: <Sharding />, label: "Sharding" },
  {
    path: "database-partitioning",
    element: <DatabasePartitioning />,
    label: "Database Partitioning",
  },
  {
    path: "connection-pooling",
    element: <ConnectionPooling />,
    label: "Connection Pooling",
  },
];
