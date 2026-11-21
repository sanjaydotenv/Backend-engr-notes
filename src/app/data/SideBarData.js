import { fundamentalsRoutes } from "../Routes/Fundamentals.routes";

// ==========================================
// TOPIC & CHAPTER HELPERS
// ==========================================

const createTopics = (topics) =>
  topics.split("|").map((label) => ({
    label,
    path:
      "/" +
      label
        .toLowerCase()
        .replace(/\./g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, ""),
  }));

const createChapter = (number, title, topics) => ({
  number: String(number).padStart(2, "0"),
  title,
  id: title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  topics: Array.isArray(topics) ? topics : createTopics(topics),
});

// ==========================================
// BACKEND ENGINEERING CURRICULUM
// ==========================================

export const curriculumLevels = [
  // ==========================================
  // LEVEL 01 — BACKEND FUNDAMENTALS
  // ==========================================

  {
    id: "level-01",
    title: "Backend Fundamentals",

    chapters: [
      createChapter(1, "Introduction to Backend", fundamentalsRoutes),

      createChapter(
        2,
        "Networking Fundamentals",
        "What is a Network?|Client and Server Architecture|IP Address|Domain Name|DNS|TCP/IP|UDP|HTTP Protocol|HTTPS Protocol|HTTP Request and Response|HTTP Methods|HTTP Headers|HTTP Status Codes|Request Body|Query Parameters|Route Parameters|Cookies|CORS",
      ),

      createChapter(
        3,
        "API Fundamentals",
        "What is an API?|How APIs Work|What is REST API?|REST Architecture|RESTful API|API Endpoints|JSON|XML|API Request and Response|API Versioning|Stateless vs Stateful|Idempotency",
      ),
    ],
  },

  // ==========================================
  // LEVEL 02 — NODE.JS CORE
  // ==========================================

  {
    id: "level-02",
    title: "Node.js Core",

    chapters: [
      // CHAPTER 04

      createChapter(
        4,
        "Introduction to Node.js",
        "What is Node.js?|Why Node.js?|Node.js vs Browser JavaScript|Node.js Architecture|V8 Engine|libuv|Single-Threaded Architecture|Non-blocking I/O|Asynchronous Programming",
      ),

      // CHAPTER 05

      createChapter(
        5,
        "Node.js Modules",
        "What are Modules?|Why Modules?|Built-in Modules|Custom Modules|CommonJS|require()|module.exports|ES Modules|import / export|Module Caching",
      ),

      // CHAPTER 06

      createChapter(
        6,
        "Node.js Core Modules",
        "Path|OS|URL|Events|Buffer|File System|Stream|HTTP|HTTPS|Crypto|Util",
      ),

      // CHAPTER 07

      createChapter(
        7,
        "Asynchronous JavaScript",
        "Synchronous vs Asynchronous|Call Stack|Callbacks|Event Loop|Callback Queue|Microtask Queue|Callback Hell|Promises|async / await|Promise.all()|Promise.allSettled()|Promise.race()|Promise.any()",
      ),

      // CHAPTER 08

      createChapter(
        8,
        "Node.js Advanced Concepts",
        "Process Object|Environment Variables|Child Processes|Worker Threads|Cluster Module|Memory Management|Garbage Collection|Streams Internals|Backpressure|Node.js Performance",
      ),
    ],
  },

  // ==========================================
  // LEVEL 03 — EXPRESS.JS
  // ==========================================

  {
    id: "level-03",
    title: "Express.js",

    chapters: [
      // CHAPTER 09

      createChapter(
        9,
        "Introduction to Express.js",
        "What is Express?|Why Express?|Express Architecture|Creating Express Server|Routing|Request Object|Response Object|Middleware|Built-in Middleware|Custom Middleware|Third-party Middleware|Router-Level Middleware|Error Handling Middleware",
      ),

      // CHAPTER 10

      createChapter(
        10,
        "Backend Architecture",
        "Understanding Backend Project Structure|MVC Architecture|Routes|Controllers|Services|Repositories|Models|Middlewares|Utils|Configurations|Controller-Service-Repository Pattern|Environment Configuration|Centralized Error Handling|Custom API Error|Custom API Response|Async Handler",
      ),

      // CHAPTER 11

      createChapter(
        11,
        "REST API Development",
        "CRUD Operations|REST API Design|Request Validation|Input Validation|Response Structure|Filtering|Sorting|Searching|Pagination|Field Selection|File Upload|API Documentation|Webhooks",
      ),
    ],
  },

  // ==========================================
  // LEVEL 04 — DATABASE ENGINEERING
  // ==========================================

  {
    id: "level-04",
    title: "Database Engineering",

    chapters: [
      // CHAPTER 12

      createChapter(
        12,
        "Database Fundamentals",
        "What is a Database?|Why Databases?|SQL vs NoSQL|Relational Database|Non-Relational Database|Database Schema|Tables vs Collections|Documents|Fields|Primary Key|Foreign Key|Relationships|Database Normalization|ACID Properties",
      ),

      // CHAPTER 13

      createChapter(
        13,
        "MongoDB",
        "Introduction to MongoDB|MongoDB Architecture|MongoDB Compass|MongoDB Atlas|Database|Collections|BSON|MongoDB Operators|Comparison Operators|Logical Operators|Update Operators|Array Operators|Projection|Embedded Documents|Referencing|Schema Validation|Indexing|Compound Index|Unique Index|TTL Index|Explain Execution Plan",
      ),

      // CHAPTER 14

      createChapter(
        14,
        "Mongoose",
        "What is Mongoose?|Why Mongoose?|Schema|Model|Schema Types|Validation|Middleware / Hooks|Instance Methods|Static Methods|Virtuals|Populate|Query Methods|Aggregation Pipeline|Transactions|Schema Design|Data Modeling",
      ),

      // CHAPTER 15

      createChapter(
        15,
        "Advanced Database",
        "MongoDB Aggregation|$match|$project|$group|$sort|$unwind|$lookup|$facet|$bucket|Database Indexing Strategy|Index Performance|Query Optimization|Replication|Sharding|Database Partitioning|Connection Pooling",
      ),
    ],
  },

  // ==========================================
  // LEVEL 05 — AUTHENTICATION & SECURITY
  // ==========================================

  {
    id: "level-05",
    title: "Authentication & Security",

    chapters: [
      // CHAPTER 16

      createChapter(
        16,
        "Authentication",
        "Authentication vs Authorization|Password Security|Password Hashing|bcrypt|Session-Based Authentication|Cookies|HTTP-only Cookies|JWT|Access Token|Refresh Token|Token Expiration|Token Rotation|OAuth 2.0|Google OAuth|OTP Authentication|Email Verification|Password Reset",
      ),

      // CHAPTER 17

      createChapter(
        17,
        "Backend Security",
        "CORS Security|Input Validation|Input Sanitization|SQL Injection|NoSQL Injection|XSS|CSRF|Rate Limiting|Brute Force Protection|Helmet|Security Headers|Content Security Policy (CSP)|Secure Cookies|Environment Secrets|Secrets Management|Encryption|TLS|Dependency Security|OWASP Top 10",
      ),
    ],
  },

  // ==========================================
  // LEVEL 06 — ADVANCED BACKEND DEVELOPMENT
  // ==========================================

  {
    id: "level-06",
    title: "Advanced Backend Development",

    chapters: [
      // CHAPTER 18

      createChapter(
        18,
        "File Handling",
        "Node.js File System|Multipart Form Data|Multer|File Upload|File Validation|File Compression|Cloudinary|ImageKit|Streaming Files|Presigned URLs",
      ),

      // CHAPTER 19

      createChapter(
        19,
        "Real-Time Communication",
        "What is Real-Time Communication?|WebSockets|WebSocket Handshake|Socket.IO|Events|Rooms|Namespaces|Broadcasting|Real-Time Notifications|Chat Application",
      ),

      // CHAPTER 20

      createChapter(
        20,
        "Background Processing",
        "What are Background Jobs?|Cron Jobs|Scheduled Tasks|Job Queues|Message Queues|Redis|BullMQ|Job Processing|Retry Mechanism|Dead Letter Queue|Email Queues|Job Scheduling",
      ),

      // CHAPTER 21

      createChapter(
        21,
        "Caching",
        "What is Caching?|Why Caching?|In-Memory Cache|Redis|Cache-Aside|Write-Through|Write-Back|Cache Invalidation|TTL|Distributed Caching",
      ),

      // CHAPTER 22

      createChapter(
        22,
        "Testing",
        "What is Software Testing?|Unit Testing|Integration Testing|End-to-End Testing|Jest|Vitest|Supertest|Mocking|API Mocking|Test Coverage|Test-Driven Development (TDD)|API Testing|Load Testing|Performance Testing",
      ),
    ],
  },

  // ==========================================
  // LEVEL 07 — SOFTWARE ARCHITECTURE & SCALABILITY
  // ==========================================

  {
    id: "level-07",
    title: "Software Architecture & Scalability",

    chapters: [
      // CHAPTER 23

      createChapter(
        23,
        "Software Architecture",
        "What is Software Architecture?|Monolithic Architecture|Layered Architecture|Modular Monolith|SOLID Principles|Design Patterns|Clean Architecture|Domain-Driven Design|Event-Driven Architecture|Microservices Architecture",
      ),

      // CHAPTER 24

      createChapter(
        24,
        "Microservices",
        "What are Microservices?|Monolith vs Microservices|Service Communication|API Gateway|Service Discovery|Inter-Service Communication|Synchronous Communication|Asynchronous Communication|Event-Driven Microservices|Message Brokers|Service-to-Service Authentication|Distributed Transactions|Saga Pattern|Circuit Breaker|Service Resilience|API Composition",
      ),

      // CHAPTER 25

      createChapter(
        25,
        "System Design",
        "What is System Design?|High-Level Design|Low-Level Design|Scalability|Vertical Scaling|Horizontal Scaling|Load Balancing|Reverse Proxy|CDN|Database Replication|Database Sharding|Database Partitioning|CAP Theorem|Consistency|Availability|Fault Tolerance|Rate Limiting Algorithms|Consistent Hashing|Idempotency in Distributed Systems|Distributed Systems",
      ),
    ],
  },

  // ==========================================
  // LEVEL 08 — DEVOPS & PRODUCTION
  // ==========================================

  {
    id: "level-08",
    title: "DevOps & Production",

    chapters: [
      // CHAPTER 26

      createChapter(
        26,
        "Deployment",
        "Development vs Production|Linux Fundamentals|Linux File System|Linux Commands|Linux Processes|Linux Permissions|SSH|VPS|Cloud Hosting|DNS Configuration|Domain Configuration|Nginx|Reverse Proxy|SSL Certificates|Firewall|CI/CD",
      ),

      // CHAPTER 27

      createChapter(
        27,
        "Docker",
        "What is Docker?|Why Docker?|Containers|Docker Images|Dockerfile|Docker Compose|Volumes|Networks|Multi-stage Builds|Containerization",
      ),

      // CHAPTER 28

      createChapter(
        28,
        "Monitoring & Logging",
        "What is Logging?|Winston|Morgan|Structured Logging|Distributed Logging|Error Tracking|Application Monitoring|Health Checks|Metrics|Prometheus|Grafana|Distributed Tracing|Performance Monitoring",
      ),

      // CHAPTER 29

      createChapter(
        29,
        "Cloud Computing",
        "Cloud Fundamentals|Cloud Service Models|AWS Fundamentals|EC2|VPC|Security Groups|IAM|S3|RDS|Load Balancer|Auto Scaling|Cloud Storage|Cloud Databases|CloudWatch|SQS|SNS",
      ),
    ],
  },
];

// ==========================================
// FLATTEN LEVELS FOR SIDEBAR ACCORDION
// ==========================================

export const sidebarSections = curriculumLevels.flatMap((level) =>
  level.chapters.map((chapter) => ({
    ...chapter,
    level: level.title,
    levelId: level.id,
  })),
);
