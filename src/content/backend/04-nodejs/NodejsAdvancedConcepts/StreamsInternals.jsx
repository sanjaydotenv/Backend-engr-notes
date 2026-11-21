import CodeBlock from "../../../../components/common/CodeBlock";

function StreamsInternals() {
  return (
    <div className="space-y-10 text-[var(--text-primary)]">

      {/* Header */}
      <div className="space-y-3">
        <p className="text-sm font-semibold tracking-wider text-[var(--primary-color)]">
          NODE.JS ADVANCED CONCEPTS / 08
        </p>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Streams Internals in Node.js
        </h1>

        <p className="text-lg leading-7 text-[var(--text-secondary)]">
          Understand how Node.js processes large amounts of data in chunks
          without loading everything into memory at once.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          1. What are Streams?
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Streams are objects in Node.js that allow us to read or write
          data continuously in smaller chunks instead of loading the
          entire data into memory.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          Streams are especially useful when working with large files,
          network requests, video processing, and data transfer.
        </p>

        <h3 className="text-lg font-semibold">
          Without Streams
        </h3>

        <CodeBlock
          code={`import fs from "node:fs";

const data = fs.readFileSync("large-file.txt");

console.log(data);`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          The entire file is loaded into memory before processing.
        </p>

        <h3 className="text-lg font-semibold">
          With Streams
        </h3>

        <CodeBlock
          code={`import fs from "node:fs";

const stream = fs.createReadStream("large-file.txt");

stream.on("data", (chunk) => {
  console.log(chunk);
});`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Data is received in smaller chunks, allowing us to process
          it progressively.
        </p>
      </section>

      {/* 2 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          2. Why Do We Need Streams?
        </h2>

        <ul className="list-disc space-y-2 pl-6 leading-7 text-[var(--text-secondary)]">
          <li>Process large files efficiently.</li>
          <li>Reduce unnecessary memory consumption.</li>
          <li>Start processing data before the complete data arrives.</li>
          <li>Transfer data efficiently between sources and destinations.</li>
          <li>Support backpressure to control data flow.</li>
        </ul>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
            <h3 className="font-semibold">Without Streams</h3>
            <p className="text-sm leading-7 text-[var(--text-secondary)]">
              Entire data is generally loaded before processing.
              Large files can consume significant memory.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
            <h3 className="font-semibold">With Streams</h3>
            <p className="text-sm leading-7 text-[var(--text-secondary)]">
              Data is processed chunk by chunk, which helps control
              memory usage.
            </p>
          </div>
        </div>
      </section>

      {/* 3 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          3. Types of Streams
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Node.js provides four main types of streams.
        </p>

        <div className="space-y-4">
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
            <h3 className="font-semibold text-[var(--primary-color)]">
              1. Readable Stream
            </h3>
            <p className="text-sm leading-7 text-[var(--text-secondary)]">
              Used to read data from a source in chunks.
            </p>
            <CodeBlock
              code={`import fs from "node:fs";

const readable = fs.createReadStream("input.txt");

readable.on("data", (chunk) => {
  console.log(chunk.toString());
});`}
            />
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
            <h3 className="font-semibold text-[var(--primary-color)]">
              2. Writable Stream
            </h3>
            <p className="text-sm leading-7 text-[var(--text-secondary)]">
              Used to write data to a destination in chunks.
            </p>
            <CodeBlock
              code={`import fs from "node:fs";

const writable = fs.createWriteStream("output.txt");

writable.write("Hello ");
writable.write("Node.js");

writable.end();`}
            />
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
            <h3 className="font-semibold text-[var(--primary-color)]">
              3. Duplex Stream
            </h3>
            <p className="text-sm leading-7 text-[var(--text-secondary)]">
              Supports both reading and writing independently.
            </p>
            <p className="text-sm text-[var(--text-muted)]">
              Example: TCP socket.
            </p>
            <CodeBlock
              code={`import net from "node:net";

const server = net.createServer((socket) => {
  socket.on("data", (data) => {
    console.log("Received:", data.toString());

    socket.write("Message received");
  });
});

server.listen(3000);`}
            />
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
            <h3 className="font-semibold text-[var(--primary-color)]">
              4. Transform Stream
            </h3>
            <p className="text-sm leading-7 text-[var(--text-secondary)]">
              A special type of Duplex Stream that transforms data while
              reading and writing.
            </p>
            <p className="text-sm text-[var(--text-muted)]">
              Example: Compression, encryption, data conversion.
            </p>
            <CodeBlock
              code={`import { Transform } from "node:stream";

const upperCase = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  }
});

upperCase.on("data", (chunk) => {
  console.log(chunk.toString());
});

upperCase.write("hello node");
upperCase.end();`}
            />
          </div>
        </div>
      </section>

      {/* 4 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          4. How Streams Work Internally
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Streams internally use buffers to temporarily store chunks of
          data while they are being processed.
        </p>

        <ul className="list-disc space-y-2 pl-6 leading-7 text-[var(--text-secondary)]">
          <li>Readable streams receive data from a source.</li>
          <li>Incoming chunks are managed through an internal buffer.</li>
          <li>Data is consumed by the application or another stream.</li>
          <li>Writable streams buffer data before writing it to a destination.</li>
          <li>Backpressure helps control the speed of data flow.</li>
        </ul>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 space-y-3">
          <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] p-3 text-center font-semibold">
            Data Source
          </div>

          <div className="text-center text-[var(--primary-color)]">↓</div>

          <div className="rounded-lg border border-[var(--primary-color)] bg-[var(--primary-soft)] p-3 text-center font-semibold">
            Readable Stream
          </div>

          <div className="text-center text-[var(--primary-color)]">↓</div>

          <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] p-3 text-center font-semibold">
            Internal Buffer
          </div>

          <div className="text-center text-[var(--primary-color)]">↓</div>

          <div className="rounded-lg border border-[var(--primary-color)] bg-[var(--primary-soft)] p-3 text-center font-semibold">
            Writable Stream
          </div>

          <div className="text-center text-[var(--primary-color)]">↓</div>

          <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] p-3 text-center font-semibold">
            Destination
          </div>
        </div>
      </section>

      {/* 5 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          5. Buffering in Streams
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Buffering means temporarily storing chunks of data in memory
          before they are consumed or written to their destination.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          Streams use internal buffers to manage differences between
          the speed at which data is produced and consumed.
        </p>

        <CodeBlock
          code={`import fs from "node:fs";

const readable = fs.createReadStream("large-file.txt");

readable.on("data", (chunk) => {
  console.log("Chunk size:", chunk.length);
});`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Each chunk is a piece of the original file. For binary streams,
          chunks are commonly represented as Buffer objects.
        </p>
      </section>

      {/* 6 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          6. highWaterMark
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          <code className="text-[var(--primary-color)]">highWaterMark</code>
          is a threshold that controls how much data a stream buffers
          before applying backpressure or requesting more data.
        </p>

        <CodeBlock
          code={`import fs from "node:fs";

const readable = fs.createReadStream("large-file.txt", {
  highWaterMark: 1024
});

readable.on("data", (chunk) => {
  console.log(chunk.length);
});`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Here, the stream uses a 1024-byte highWaterMark because it
          is operating in byte mode.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
          <p className="font-semibold text-[var(--primary-color)]">
            Important
          </p>
          <p className="text-sm leading-6 text-[var(--text-secondary)]">
            highWaterMark is a threshold, not a strict maximum buffer size.
            Its unit depends on the stream mode: bytes in byte mode and
            objects in object mode.
          </p>
        </div>
      </section>

      {/* 7 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          7. Backpressure in Streams
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Backpressure occurs when data is produced faster than it can
          be consumed or written by the destination.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          Writable streams use backpressure signals to prevent their
          internal buffers from growing without control.
        </p>

        <h3 className="text-lg font-semibold">
          Understanding write()
        </h3>

        <CodeBlock
          code={`const canContinue = writable.write("Hello");

if (!canContinue) {
  console.log("Wait for drain event");
}`}
        />

        <ul className="list-disc space-y-2 pl-6 leading-7 text-[var(--text-secondary)]">
          <li>
            <code className="text-[var(--primary-color)]">true</code>:
            The writable stream can accept more data without exceeding
            its highWaterMark threshold.
          </li>
          <li>
            <code className="text-[var(--primary-color)]">false</code>:
            Stop writing temporarily and wait for the drain event.
          </li>
          <li>
            <code className="text-[var(--primary-color)]">drain</code>:
            Indicates that the writable buffer has been emptied enough
            to resume writing.
          </li>
        </ul>

        <h3 className="text-lg font-semibold">
          Handling Backpressure
        </h3>

        <CodeBlock
          code={`import fs from "node:fs";

const readable = fs.createReadStream("input.txt");
const writable = fs.createWriteStream("output.txt");

readable.on("data", (chunk) => {
  const canContinue = writable.write(chunk);

  if (!canContinue) {
    readable.pause();
  }
});

writable.on("drain", () => {
  readable.resume();
});

readable.on("end", () => {
  writable.end();
});`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          This example pauses the readable stream when the writable
          buffer is full and resumes it after the drain event.
        </p>

        <p className="text-sm text-[var(--text-muted)]">
          In real applications, prefer pipeline() for safer stream
          coordination and error handling.
        </p>
      </section>

      {/* 8 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          8. pipe() Method
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code className="text-[var(--primary-color)]">pipe()</code>
          method connects a Readable Stream to a Writable Stream.
          It automatically manages backpressure.
        </p>

        <CodeBlock
          code={`import fs from "node:fs";

const readable = fs.createReadStream("input.txt");
const writable = fs.createWriteStream("output.txt");

readable.pipe(writable);`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Data flows directly from the readable stream to the writable
          stream without manually handling every chunk.
        </p>
      </section>

      {/* 9 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          9. pipeline() Method
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code className="text-[var(--primary-color)]">pipeline()</code>
          method connects multiple streams and provides better error
          handling and cleanup when a stream fails.
        </p>

        <CodeBlock
          code={`import fs from "node:fs";
import { pipeline } from "node:stream/promises";
import { createGzip } from "node:zlib";

async function compressFile() {
  try {
    await pipeline(
      fs.createReadStream("input.txt"),
      createGzip(),
      fs.createWriteStream("input.txt.gz")
    );

    console.log("File compressed successfully");
  } catch (error) {
    console.error("Pipeline failed:", error);
  }
}

compressFile();`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Here, data flows through three stages:
        </p>

        <ul className="list-disc space-y-2 pl-6 leading-7 text-[var(--text-secondary)]">
          <li>Readable Stream reads the input file.</li>
          <li>Gzip Transform Stream compresses the data.</li>
          <li>Writable Stream writes the compressed file.</li>
        </ul>
      </section>

      {/* 10 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          10. Important Stream Events
        </h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm text-left">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">Event</th>
                <th className="p-3">Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              {[
                ["data", "Emitted when readable data is available."],
                ["end", "Emitted when no more readable data is available."],
                ["finish", "Emitted after writable end() and all data is flushed."],
                ["drain", "Emitted when a writable stream can accept more data after backpressure."],
                ["error", "Emitted when a stream encounters an error."],
                ["close", "Emitted when the stream and its underlying resources are closed."],
                ["pipe", "Emitted by a readable stream when a writable stream is attached using pipe()."],
                ["unpipe", "Emitted when a destination is detached from a readable stream."],
              ].map(([event, purpose]) => (
                <tr key={event}>
                  <td className="p-3 font-mono text-[var(--primary-color)]">
                    {event}
                  </td>
                  <td className="p-3 text-[var(--text-secondary)]">
                    {purpose}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 11 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          11. Important Points to Remember
        </h2>

        <ul className="list-disc space-y-2 pl-6 leading-7 text-[var(--text-secondary)]">
          <li>Streams process data in chunks.</li>
          <li>Node.js provides four main stream types.</li>
          <li>Readable streams read data; Writable streams write data.</li>
          <li>Duplex streams support both reading and writing.</li>
          <li>Transform streams modify data while processing it.</li>
          <li>Buffers temporarily hold stream data.</li>
          <li>highWaterMark controls the buffering threshold.</li>
          <li>Backpressure controls data flow when the destination is slower.</li>
          <li>pipe() connects streams and manages backpressure.</li>
          <li>pipeline() provides better error handling and cleanup.</li>
        </ul>
      </section>

      {/* Interview */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          12. Interview Questions
        </h2>

        <div className="space-y-4">
          {[
            [
              "What are Streams in Node.js?",
              "Streams are abstractions for processing data in chunks instead of loading the entire data into memory."
            ],
            [
              "What are the four types of Streams?",
              "Readable, Writable, Duplex, and Transform."
            ],
            [
              "What is the difference between Duplex and Transform streams?",
              "Duplex supports independent reading and writing, while Transform modifies data as it passes through."
            ],
            [
              "What is highWaterMark?",
              "It is a threshold that controls how much data a stream buffers before applying backpressure or requesting more data."
            ],
            [
              "What is Backpressure?",
              "It occurs when data is produced faster than the destination can consume or write it."
            ],
            [
              "What does write() returning false mean?",
              "It means the writable buffer has reached its highWaterMark threshold. Stop writing until the drain event."
            ],
            [
              "What is the difference between pipe() and pipeline()?",
              "Both connect streams, but pipeline() provides better error propagation and cleanup."
            ],
            [
              "Why are Streams memory efficient?",
              "They process data in chunks instead of requiring the entire dataset to be loaded into memory."
            ],
          ].map(([question, answer], index) => (
            <div
              key={index}
              className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2"
            >
              <h3 className="font-semibold">
                {index + 1}. {question}
              </h3>
              <p className="text-sm leading-6 text-[var(--text-secondary)]">
                {answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Next Topic */}
      <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 space-y-2">
        <p className="text-xs font-semibold tracking-wider text-[var(--primary-color)]">
          NEXT TOPIC
        </p>
        <h3 className="text-xl font-bold">
          Backpressure in Node.js
        </h3>
        <p className="text-sm text-[var(--text-secondary)]">
          Learn how Node.js controls data flow between streams and prevents
          excessive buffering.
        </p>
      </div>

    </div>
  );
}

export default StreamsInternals;