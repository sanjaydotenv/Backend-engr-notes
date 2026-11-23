import CacheAside from "../../content/backend/12-caching/CacheAside";
import CacheInvalidation from "../../content/backend/12-caching/CacheInvalidation";
import DistributedCaching from "../../content/backend/12-caching/DistributedCaching";
import InMemoryCache from "../../content/backend/12-caching/InMemoryCache";
import TTL from "../../content/backend/12-caching/TTL";
import WhatisCaching from "../../content/backend/12-caching/WhatisCaching";
import WhyCaching from "../../content/backend/12-caching/WhyCaching";
import WriteBack from "../../content/backend/12-caching/WriteBack";
import WriteThrough from "../../content/backend/12-caching/WriteThrough";

export const CachingRoutes = [
  {
    path: "/cache-aside",
    element: <CacheAside />,
    label: "Cache Aside",
  },
  {
    path: "/cache-invalidation",
    element: <CacheInvalidation />,
    label: "Cache Invalidation",
  },
  {
    path: "/distributed-caching",
    element: <DistributedCaching />,
    label: "Distributed Caching",
  },
  {
    path: "/in-memory-cache",
    element: <InMemoryCache />,
    label: "In-Memory Cache",
  },
  {
    path: "/ttl",
    element: <TTL />,
    label: "TTL",
  },
  {
    path: "/what-is-caching",
    element: <WhatisCaching />,
    label: "What Is Caching",
  },
  {
    path: "/why-caching",
    element: <WhyCaching />,
    label: "Why Caching",
  },
  {
    path: "/write-back",
    element: <WriteBack />,
    label: "Write Back",
  },
  {
    path: "/write-through",
    element: <WriteThrough />,
    label: "Write Through",
  },
];

