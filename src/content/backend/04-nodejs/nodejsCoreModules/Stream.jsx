import React from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const Stream = () => {
  return (
    <div className="space-y-10 text-[var(--text-primary)]">
      {/* Introduction */}
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Node.js Stream Module</h1>

        <p className="leading-7 text-[var(--text-secondary)]">
          Streams are used to handle data piece by piece instead of loading the
          entire data into memory at once.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          Node.js streams are especially useful when working with large files,
          file uploads, downloads, video streaming and network communication.
        </p>
      </section>

      {/* What is Stream */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">1. What is a Stream?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          A stream is a way of processing data in smaller chunks as it becomes
          available, rather than waiting for all the data to be loaded before
          processing it.
        </p>

        <h3 className="text-lg font-semibold">Without Stream</h3>

        <CodeBlock
          code={`const fs = require("node:fs");

// Entire file is loaded into memory
const data = fs.readFileSync("large-file.txt");

console.log(data.toString());`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Here, the complete file is loaded into memory before the program can
          process it.
        </p>

        <h3 className="text-lg font-semibold">With Stream</h3>

        <CodeBlock
          code={`const fs = require("node:fs");

// Read file in chunks
const readable = fs.createReadStream("large-file.txt");

readable.on("data", (chunk) => {
  console.log(chunk.toString());
});`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Here, the file is processed in smaller chunks. This helps reduce
          memory usage when handling large files.
        </p>
      </section>

      {/* How Streams Work */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">2. How Streams Work</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          A stream processes data continuously through chunks. Each chunk
          contains a portion of the original data.
        </p>

        <CodeBlock
          code={`Large File
    |
    v
Readable Stream
    |
    v
+---------+
| Chunk 1 |
+---------+
    |
+---------+
| Chunk 2 |
+---------+
    |
+---------+
| Chunk 3 |
+---------+
    |
    v
Writable Stream
    |
    v
Destination`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          The chunk size depends on the stream implementation and its
          highWaterMark configuration. A chunk is not necessarily a fixed size.
        </p>
      </section>

      {/* Import */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">3. Import Stream Module</h2>

        <h3 className="text-lg font-semibold">CommonJS</h3>

        <CodeBlock
          code={`const {
  Readable,
  Writable,
  Duplex,
  Transform
} = require("node:stream");`}
        />

        <h3 className="text-lg font-semibold">ES Modules</h3>

        <CodeBlock
          code={`import {
  Readable,
  Writable,
  Duplex,
  Transform
} from "node:stream";`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Node.js also provides stream-related functionality through built-in
          modules such as node:fs and node:http.
        </p>
      </section>

      {/* Types */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">4. Types of Streams</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Node.js provides four fundamental types of streams.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "Readable Stream",
              description: "Used to read or consume data.",
              example: "File reading, HTTP request",
            },
            {
              title: "Writable Stream",
              description: "Used to write or send data.",
              example: "File writing, HTTP response",
            },
            {
              title: "Duplex Stream",
              description: "Supports both reading and writing.",
              example: "TCP sockets",
            },
            {
              title: "Transform Stream",
              description: "A Duplex stream that transforms data.",
              example: "Compression, encryption",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4"
            >
              <h3 className="font-semibold text-[var(--accent-color)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                {item.description}
              </p>
              <p className="mt-3 text-xs text-[var(--text-muted)]">
                Example: {item.example}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Readable */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">5. Readable Stream</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          A Readable stream is used to read data from a source. Data can be
          consumed in chunks as it becomes available.
        </p>

        <h3 className="text-lg font-semibold">Using createReadStream()</h3>

        <CodeBlock
          code={`const fs = require("node:fs");

const readable = fs.createReadStream("input.txt");

readable.on("data", (chunk) => {
  console.log(chunk.toString());
});

readable.on("end", () => {
  console.log("Reading completed");
});

readable.on("error", (error) => {
  console.error(error.message);
});`}
        />

        <h3 className="text-lg font-semibold">Important Readable Events</h3>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="p-3 text-left">Event</th>
                <th className="p-3 text-left">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["data", "Emitted when a chunk of data is available."],
                ["end", "Emitted when no more data is available."],
                ["error", "Emitted when an error occurs."],
                [
                  "close",
                  "Emitted when the stream and its underlying resources are closed.",
                ],
                ["readable", "Emitted when data can be read from the stream."],
              ].map(([event, purpose]) => (
                <tr
                  key={event}
                  className="border-t border-[var(--border-color)]"
                >
                  <td className="p-3 font-medium text-[var(--accent-color)]">
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

      {/* Writable */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">6. Writable Stream</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          A Writable stream is used to write data to a destination. Data is
          written in chunks using the write() method.
        </p>

        <h3 className="text-lg font-semibold">Using createWriteStream()</h3>

        <CodeBlock
          code={`const fs = require("node:fs");

const writable = fs.createWriteStream("output.txt");

writable.write("Hello ");
writable.write("Node.js ");
writable.write("Streams!");

writable.end();

writable.on("finish", () => {
  console.log("Writing completed");
});

writable.on("error", (error) => {
  console.error(error.message);
});`}
        />

        <h3 className="text-lg font-semibold">Important Writable Events</h3>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="p-3 text-left">Event</th>
                <th className="p-3 text-left">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "drain",
                  "Emitted when the internal buffer becomes ready for more data.",
                ],
                [
                  "finish",
                  "Emitted after end() is called and all data is written.",
                ],
                ["error", "Emitted when a writing error occurs."],
                [
                  "close",
                  "Emitted when the stream and its underlying resources are closed.",
                ],
              ].map(([event, purpose]) => (
                <tr
                  key={event}
                  className="border-t border-[var(--border-color)]"
                >
                  <td className="p-3 font-medium text-[var(--accent-color)]">
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

      {/* Duplex */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">7. Duplex Stream</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          A Duplex stream supports both reading and writing. It has a readable
          side and a writable side.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          A TCP socket is a common example because it can receive data and send
          data through the same connection.
        </p>

        <CodeBlock
          code={`const { Duplex } = require("node:stream");

const duplex = new Duplex({
  read() {},

  write(chunk, encoding, callback) {
    console.log("Received:", chunk.toString());
    callback();
  }
});

// Readable side
duplex.push("Data from readable side");
duplex.push(null);

// Writable side
duplex.write("Data from writable side");

duplex.on("data", (chunk) => {
  console.log("Reading:", chunk.toString());
});

duplex.end();`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          The read() method controls how data is supplied to the readable side.
          The write() method handles data received by the writable side.
        </p>
      </section>

      {/* Transform */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">8. Transform Stream</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          A Transform stream is a special type of Duplex stream. It reads input
          data, modifies or processes it, and produces output data.
        </p>

        <h3 className="text-lg font-semibold">
          Example: Convert Text to Uppercase
        </h3>

        <CodeBlock
          code={`const { Transform } = require("node:stream");

const uppercase = new Transform({
  transform(chunk, encoding, callback) {
    const result = chunk.toString().toUpperCase();

    callback(null, result);
  }
});

uppercase.on("data", (chunk) => {
  console.log(chunk.toString());
});

uppercase.write("hello ");
uppercase.write("node.js");
uppercase.end();`}
        />

        <p className="text-[var(--text-secondary)]">Output:</p>

        <CodeBlock code={`HELLO NODE.JS`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          The transform() method receives an input chunk and passes the
          processed output through callback().
        </p>
      </section>

      {/* pipe */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">9. pipe() Method</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The pipe() method connects a Readable stream to a Writable stream. It
          automatically transfers chunks from the source to the destination and
          helps manage backpressure.
        </p>

        <CodeBlock
          code={`const fs = require("node:fs");

const readable = fs.createReadStream("input.txt");

const writable = fs.createWriteStream("output.txt");

// Transfer data from input to output
readable.pipe(writable);

writable.on("finish", () => {
  console.log("File copied successfully");
});`}
        />

        <CodeBlock
          code={`Readable Stream
      |
      v
   pipe()
      |
      v
Writable Stream`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          This is a common way to copy large files without loading the complete
          file into memory.
        </p>
      </section>

      {/* pipeline */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">10. pipeline() Method</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          pipeline() connects multiple streams together. It also handles errors
          and destroys connected streams when a failure occurs.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          It is generally preferred over manually chaining pipe() calls when
          building reliable stream pipelines.
        </p>

        <CodeBlock
          code={`const fs = require("node:fs");
const { pipeline } = require("node:stream");

pipeline(
  fs.createReadStream("input.txt"),
  fs.createWriteStream("output.txt"),
  (error) => {
    if (error) {
      console.error("Pipeline failed:", error.message);
      return;
    }

    console.log("Pipeline completed successfully");
  }
);`}
        />

        <h3 className="text-lg font-semibold">pipe() vs pipeline()</h3>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="p-3 text-left">pipe()</th>
                <th className="p-3 text-left">pipeline()</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-[var(--border-color)]">
                <td className="p-3 text-[var(--text-secondary)]">
                  Connects a readable stream to a destination.
                </td>
                <td className="p-3 text-[var(--text-secondary)]">
                  Connects multiple streams into a pipeline.
                </td>
              </tr>
              <tr className="border-t border-[var(--border-color)]">
                <td className="p-3 text-[var(--text-secondary)]">
                  Does not automatically provide complete pipeline error
                  cleanup.
                </td>
                <td className="p-3 text-[var(--text-secondary)]">
                  Handles pipeline errors and stream cleanup.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Backpressure */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">11. Backpressure</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Backpressure occurs when a Writable stream cannot process incoming
          data as quickly as a Readable stream produces it.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          If the producer continues sending data without respecting the
          consumer's speed, buffered data can consume excessive memory.
        </p>

        <CodeBlock
          code={`const fs = require("node:fs");

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

        <h3 className="text-lg font-semibold">How It Works</h3>

        <ol className="list-decimal space-y-2 pl-6 text-[var(--text-secondary)]">
          <li>Readable stream produces a chunk.</li>
          <li>Writable stream receives the chunk.</li>
          <li>
            write() returns false when its internal buffer reaches its
            threshold.
          </li>
          <li>Readable stream pauses producing data.</li>
          <li>Writable stream emits drain when it can accept more data.</li>
          <li>Readable stream resumes.</li>
        </ol>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <p className="font-semibold text-[var(--accent-color)]">Important</p>
          <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
            pipe() and pipeline() handle backpressure automatically. Manual
            pause() and resume() handling is useful for understanding the
            underlying mechanism.
          </p>
        </div>
      </section>

      {/* Buffer and HighWaterMark */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">12. Buffer and highWaterMark</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Streams use internal buffers to temporarily hold data while it moves
          between a producer and a consumer.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          highWaterMark specifies a threshold for the internal buffer. It does
          not guarantee an exact chunk size or a strict maximum memory limit.
        </p>

        <CodeBlock
          code={`const fs = require("node:fs");

const readable = fs.createReadStream("input.txt", {
  highWaterMark: 1024
});

readable.on("data", (chunk) => {
  console.log("Chunk size:", chunk.length);
});`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          In this example, the requested buffer threshold is 1024 bytes. Actual
          chunk sizes can vary depending on the stream and source.
        </p>
      </section>

      {/* Practical Example */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          13. Practical Example – File Copy
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          One common backend use case is copying a large file from one location
          to another.
        </p>

        <CodeBlock
          code={`const fs = require("node:fs");
const { pipeline } = require("node:stream");

const source = fs.createReadStream("uploads/video.mp4");

const destination = fs.createWriteStream(
  "backups/video.mp4"
);

pipeline(source, destination, (error) => {
  if (error) {
    console.error("File copy failed:", error.message);
    return;
  }

  console.log("File copied successfully");
});`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          The file is transferred chunk by chunk instead of being completely
          loaded into application memory.
        </p>
      </section>

      {/* Backend Use Cases */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          14. Streams in Backend Development
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "File Uploads",
              description: "Receive large files in chunks.",
            },
            {
              title: "File Downloads",
              description:
                "Send files to clients without loading everything into memory.",
            },
            {
              title: "Video Streaming",
              description: "Transfer media data progressively.",
            },
            {
              title: "HTTP Communication",
              description:
                "Read incoming requests and write outgoing responses.",
            },
            {
              title: "Compression",
              description: "Compress data using transform streams.",
            },
            {
              title: "Data Processing",
              description: "Process large datasets incrementally.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4"
            >
              <h3 className="font-semibold text-[var(--accent-color)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Summary */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          15. Important Stream APIs Summary
        </h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="p-3 text-left">API</th>
                <th className="p-3 text-left">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Readable", "Read data"],
                ["Writable", "Write data"],
                ["Duplex", "Read and write data"],
                ["Transform", "Read, modify and output data"],
                ["createReadStream()", "Create a readable file stream"],
                ["createWriteStream()", "Create a writable file stream"],
                ["write()", "Write a chunk of data"],
                ["end()", "Finish writing"],
                ["pipe()", "Connect streams"],
                ["pipeline()", "Connect streams with error handling"],
                ["pause()", "Pause readable data flow"],
                ["resume()", "Resume readable data flow"],
              ].map(([api, purpose]) => (
                <tr key={api} className="border-t border-[var(--border-color)]">
                  <td className="p-3 font-medium text-[var(--accent-color)]">
                    {api}
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
    </div>
  );
};

export default Stream;
