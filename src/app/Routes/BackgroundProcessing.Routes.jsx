import CronJobs from "../../content/backend/11-background-jobs/CronJobs";
import DeadLetterQueue from "../../content/backend/11-background-jobs/DeadLetterQueue";
import EmailQueues from "../../content/backend/11-background-jobs/EmailQueues";
import JobProcessing from "../../content/backend/11-background-jobs/JobProcessing";
import JobQueues from "../../content/backend/11-background-jobs/JobQueues";
import JobScheduling from "../../content/backend/11-background-jobs/JobScheduling";
import MessageQueues from "../../content/backend/11-background-jobs/MessageQueues";
import Redis from "../../content/backend/11-background-jobs/Redis";
import RetryrMechanism from "../../content/backend/11-background-jobs/RetryrMechanism";
import BullMQ from "../../content/backend/11-background-jobs/BullMQ";
import ScheduledTasks from "../../content/backend/11-background-jobs/ScheduledTasks";
import WhatareBackgroundJobs from "../../content/backend/11-background-jobs/WhatareBackgroundJobs";

export const BackendProcessingRoutes = [
  {
    path: "/cron-jobs",
    element: <CronJobs />,
    label: "Cron Jobs",
  },
  {
    path: "/dead-letter-queue",
    element: <DeadLetterQueue />,
    label: "Dead Letter Queue",
  },
  {
    path: "/email-queues",
    element: <EmailQueues />,
    label: "Email Queues",
  },
  {
    path: "/job-processing",
    element: <JobProcessing />,
    label: "Job Processing",
  },
  {
    path: "/job-queues",
    element: <JobQueues />,
    label: "Job Queues",
  },
  {
    path: "/job-scheduling",
    element: <JobScheduling />,
    label: "Job Scheduling",
  },
  {
    path: "/message-queues",
    element: <MessageQueues />,
    label: "Message Queues",
  },
  {
    path: "/redis",
    element: <Redis />,
    label: "Redis",
  },
  {
    path: "/retry-mechanism",
    element: <RetryrMechanism />,
    label: "Retry Mechanism",
  },
  {
    path: "/bullmq",
    element: <BullMQ />,
    label: "BullMQ",
  },
  {
    path: "/scheduled-tasks",
    element: <ScheduledTasks />,
    label: "Scheduled Tasks",
  },
  {
    path: "/what-are-background-jobs",
    element: <WhatareBackgroundJobs />,
    label: "What are Background Jobs",
  },
];
