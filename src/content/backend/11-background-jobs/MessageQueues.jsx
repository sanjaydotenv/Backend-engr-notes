import CodeBlock from "../../../components/common/CodeBlock";

export default function MessageQueues() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">

      <div>
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          BACKGROUND JOBS / 05
        </p>
        <h1 className="mt-2 text-3xl font-bold">Message Queues</h1>
        <p className="mt-3 leading-7 text-[var(--text-secondary)]">
          A Message Queue is a communication system that allows different
          applications or services to exchange messages asynchronously.
          It helps services communicate without waiting for each other
          to complete their work.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What Is a Message Queue?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          A Message Queue stores messages sent by one service until
          another service receives and processes them.
        </p>
        <p className="leading-7 text-[var(--text-secondary)]">
          For example, when a customer places an order, the Order Service
          can publish an order-created message. Payment, Email and
          Inventory services can process that event independently.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. How Does a Message Queue Work?</h2>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <div className="flex flex-col items-center gap-2 text-center text-sm">
            {[
              ["Producer", "Sends a message"],
              ["Message Broker", "Receives and routes the message"],
              ["Message Queue", "Stores the message"],
              ["Consumer", "Receives and processes the message"]
            ].map(([title, description], index) => (
              <div key={title} className="w-full">
                <div className="rounded-lg border border-[var(--border-color)] p-3">
                  <p className="font-semibold text-[var(--accent-color)]">{title}</p>
                  <p className="mt-1 text-[var(--text-secondary)]">{description}</p>
                </div>
                {index !== 3 && (
                  <div className="py-1 text-[var(--accent-color)]">↓</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Main Components</h2>

        {[
          ["1. Producer", "The application or service that creates and sends messages."],
          ["2. Message", "The data or event sent from one service to another."],
          ["3. Message Broker", "The software that receives, routes and manages messages. Examples include RabbitMQ and Apache Kafka."],
          ["4. Queue", "A storage structure that holds messages until consumers process them."],
          ["5. Consumer", "The application or service that receives and processes messages."]
        ].map(([title, description]) => (
          <div key={title} className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
            <h3 className="font-semibold">{title}</h3>
            <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">{description}</p>
          </div>
        ))}
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Real-World Example</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Imagine an e-commerce application where a customer places
          an order.
        </p>

        <CodeBlock code={`Customer places an order
          |
          v
     Order Service
          |
          v
   Publish Message
          |
          v
     Message Broker
          |
     +----+----+
     |    |    |
     v    v    v
 Payment Email Inventory
 Service Service Service`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          Each service receives the relevant message and performs
          its own task. The Order Service does not need to wait for
          every service to finish processing.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Message Queue vs Job Queue</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Both systems store work for asynchronous processing, but
          they focus on slightly different use cases.
        </p>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[500px] text-left text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">Message Queue</th>
                <th className="p-3">Job Queue</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-t border-[var(--border-color)]">
                <td className="p-3">Focuses on communication between services.</td>
                <td className="p-3">Focuses on executing background tasks.</td>
              </tr>
              <tr className="border-t border-[var(--border-color)]">
                <td className="p-3">Messages represent data or events.</td>
                <td className="p-3">Jobs represent tasks to execute.</td>
              </tr>
              <tr className="border-t border-[var(--border-color)]">
                <td className="p-3">Often used in distributed systems.</td>
                <td className="p-3">Often used for emails, reports and processing tasks.</td>
              </tr>
              <tr className="border-t border-[var(--border-color)]">
                <td className="p-3">Examples: RabbitMQ, Kafka.</td>
                <td className="p-3">Examples: BullMQ, Agenda.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          This is a practical distinction, not a strict technical rule.
          Job queue libraries also use message-broker concepts internally.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Popular Message Queue Technologies</h2>

        {[
          ["RabbitMQ", "A message broker commonly used for routing messages between services. It supports exchanges, queues, bindings and acknowledgements."],
          ["Apache Kafka", "A distributed event streaming platform designed for high-throughput event streams and retaining messages for a configured period."],
          ["Redis", "An in-memory data store that can support messaging patterns through Pub/Sub and Redis Streams."],
          ["Amazon SQS", "A managed message queuing service provided by AWS."]
        ].map(([title, description]) => (
          <div key={title} className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
            <h3 className="font-semibold text-[var(--accent-color)]">{title}</h3>
            <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">{description}</p>
          </div>
        ))}
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Message Delivery Patterns</h2>

        <div className="space-y-3">
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
            <h3 className="font-semibold">Point-to-Point</h3>
            <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">
              A message is placed in a queue and processed by one
              competing consumer. This is useful for distributing
              tasks among workers.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
            <h3 className="font-semibold">Publish / Subscribe (Pub/Sub)</h3>
            <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">
              A producer publishes an event and multiple subscribers
              can receive it. Each subscriber typically has its own
              subscription or queue.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Message Acknowledgement (ACK)</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          An acknowledgement tells the broker that a consumer has
          successfully processed a message.
        </p>

        <CodeBlock code={`Message received
       |
       v
Consumer processes message
       |
       +---- Success ----> ACK
       |
       +---- Failure ----> Retry / Reject`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          If a consumer crashes before acknowledging a message,
          the broker may deliver it again depending on the broker
          and its configuration.
        </p>
        <p className="text-sm leading-6 text-[var(--text-secondary)]">
          ACK does not automatically guarantee that a business
          operation happens exactly once. Consumers should be
          designed to handle duplicate deliveries safely.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Message Queue vs Direct Communication</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">Direct Communication</th>
                <th className="p-3">Message Queue</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-t border-[var(--border-color)]">
                <td className="p-3">Services communicate directly.</td>
                <td className="p-3">Services communicate through a broker.</td>
              </tr>
              <tr className="border-t border-[var(--border-color)]">
                <td className="p-3">Often synchronous.</td>
                <td className="p-3">Usually asynchronous.</td>
              </tr>
              <tr className="border-t border-[var(--border-color)]">
                <td className="p-3">Sender may wait for the response.</td>
                <td className="p-3">Sender can continue after publishing.</td>
              </tr>
              <tr className="border-t border-[var(--border-color)]">
                <td className="p-3">Services can become tightly coupled.</td>
                <td className="p-3">Reduces direct dependency between services.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Advantages of Message Queues</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Enables asynchronous communication.</li>
          <li>Reduces direct dependency between services.</li>
          <li>Helps handle traffic spikes using buffering.</li>
          <li>Allows independent scaling of consumers.</li>
          <li>Supports acknowledgements and message recovery.</li>
          <li>Improves reliability when configured with durable storage.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">11. Important Things to Remember</h2>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>A Producer sends messages.</li>
          <li>A Consumer receives and processes messages.</li>
          <li>A Message Broker manages message delivery.</li>
          <li>A Queue stores messages for consumers.</li>
          <li>ACK confirms successful message processing.</li>
          <li>Messages may be delivered more than once.</li>
          <li>Consumers should be idempotent.</li>
          <li>Use dead-letter queues to handle messages that repeatedly fail.</li>
          <li>Monitor queue size, processing time and consumer failures.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">12. Interview Questions</h2>

        {[
          ["What is a Message Queue?", "A Message Queue stores messages so different services can communicate asynchronously."],
          ["What is a Message Broker?", "A Message Broker receives, routes and manages messages between producers and consumers."],
          ["What is a Producer?", "A Producer creates and sends messages to a broker."],
          ["What is a Consumer?", "A Consumer receives and processes messages from a queue or subscription."],
          ["What is ACK?", "ACK is an acknowledgement sent by a consumer to indicate successful message processing."],
          ["What is Point-to-Point messaging?", "It is a messaging pattern where one message is processed by one competing consumer."],
          ["What is Pub/Sub?", "Publish/Subscribe is a pattern where publishers send events and multiple subscribers can receive them."],
          ["What is the difference between RabbitMQ and Kafka?", "RabbitMQ is a traditional message broker with flexible routing. Kafka is a distributed event streaming platform that stores ordered records in topics and partitions."],
          ["What happens if a consumer crashes?", "Depending on broker configuration and acknowledgement state, an unacknowledged message may be delivered again."],
          ["Why is idempotency important?", "It ensures duplicate message delivery does not cause duplicate business operations."]
        ].map(([question, answer], index) => (
          <details key={index} className="group rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
            <summary className="cursor-pointer font-medium">
              {index + 1}. {question}
            </summary>
            <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
              {answer}
            </p>
          </details>
        ))}
      </section>

    </div>
  );
}