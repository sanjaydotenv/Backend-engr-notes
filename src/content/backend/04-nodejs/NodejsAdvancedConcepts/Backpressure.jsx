import CodeBlock from "../../../../components/common/CodeBlock";

function Backpressure() {
  return (
    <div className="space-y-10 text-[var(--text-primary)]">

      {/* Header */}
      <div className="space-y-3">
        <p className="text-sm font-semibold tracking-wider text-[var(--primary-color)]">
          NODE.JS ADVANCED CONCEPTS / 09
        </p>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Backpressure in Node.js
        </h1>

        <p className="text-lg leading-7 text-[var(--text-secondary)]">
          Understand how Node.js controls data flow between streams when
          data is produced faster than it can be consumed.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          1. What is Backpressure?
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Backpressure is a mechanism used in Node.js Streams to control
          data flow when a Writable Stream cannot process incoming data
          as quickly as a Readable Stream produces it.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          It prevents the Writable Stream's internal buffer from growing
          excessively and helps avoid unnecessary memory consumption.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] p-3 text-center">
              <p className="font-semibold">Producer</p>
              <p className="text-xs text-[var(--text-muted)]">
                Fast data source
              </p>
            </div>

            <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] p-3 text-center">
              <p className="font-semibold">Consumer</p>
              <p className="text-xs text-[var(--text-muted)]">
                Slow destination
              </p>
            </div>
          </div>

          <div className="text-center text-[var(--primary-color)]">
            ↓
          </div>

          <div className="rounded-lg border border-[var(--primary-color)] bg-[var(--primary-soft)] p-3 text-center font-semibold">
            Writable Internal Buffer
          </div>

          <p className="text-center text-sm text-[var(--text-secondary)]">
            When the buffer reaches its threshold, the producer should
            slow down or pause.
          </p>
        </div>
      </section>

      {/* 2 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          2. Why Do We Need Backpressure?
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Imagine a Readable Stream producing 100 MB of data per second,
          while a Writable Stream can process only 10 MB per second.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          If the producer continues sending data without control, the
          writable buffer keeps growing and can consume excessive memory.
        </p>

        <h3 className="text-lg font-semibold">
          Without Backpressure
        </h3>

        <ul className="list-disc space-y-2 pl-6 leading-7 text-[var(--text-secondary)]">
          <li>Producer continuously sends data.</li>
          <li>Consumer cannot process data at the same speed.</li>
          <li>Internal buffer keeps growing.</li>
          <li>Memory consumption increases.</li>
          <li>Application may eventually run out of memory.</li>
        </ul>

        <h3 className="text-lg font-semibold">
          With Backpressure
        </h3>

        <ul className="list-disc space-y-2 pl-6 leading-7 text-[var(--text-secondary)]">
          <li>Writable Stream signals when its buffer reaches the threshold.</li>
          <li>Readable Stream pauses temporarily.</li>
          <li>Writable Stream processes buffered data.</li>
          <li>After the buffer drains, the producer resumes.</li>
        </ul>
      </section>

      {/* 3 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          3. How Backpressure Works Internally
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Backpressure mainly works through the Writable Stream's
          <code className="mx-1 text-[var(--primary-color)]">highWaterMark</code>
          and the return value of its
          <code className="mx-1 text-[var(--primary-color)]">write()</code>
          method.
        </p>

        <ol className="list-decimal space-y-2 pl-6 leading-7 text-[var(--text-secondary)]">
          <li>Readable Stream produces a chunk.</li>
          <li>The chunk is passed to Writable Stream using write().</li>
          <li>Writable Stream stores data in its internal buffer.</li>
          <li>When the buffer reaches its highWaterMark threshold, write() returns false.</li>
          <li>The producer should stop writing temporarily.</li>
          <li>When the buffer becomes empty, the drain event is emitted.</li>
          <li>The producer can resume sending data.</li>
        </ol>
      </section>

      {/* 4 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          4. Understanding highWaterMark
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          highWaterMark is a threshold that controls how much data a
          stream buffers before applying backpressure.
        </p>

        <CodeBlock
          code={`import { Writable } from "node:stream";

const writable = new Writable({
  highWaterMark: 16,

  write(chunk, encoding, callback) {
    setTimeout(() => {
      console.log("Processed:", chunk.toString());
      callback();
    }, 1000);
  }
});`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Here, the highWaterMark is 16 bytes because the stream is
          operating in byte mode. The writable stream processes each
          chunk with a delay.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
          <p className="font-semibold text-[var(--primary-color)]">
            Important
          </p>
          <p className="text-sm leading-6 text-[var(--text-secondary)]">
            highWaterMark is not a strict maximum buffer size. It is a
            threshold used by streams to signal when producers should
            slow down.
          </p>
        </div>
      </section>

      {/* 5 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          5. write() Method and Backpressure
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The Writable Stream's write() method returns a boolean value
          that tells us whether we should continue writing.
        </p>

        <CodeBlock
          code={`const canContinue = writable.write("Hello Node.js");

console.log(canContinue);`}
        />

        <h3 className="text-lg font-semibold">
          Return Values
        </h3>

        <div className="space-y-3">
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
            <h3 className="font-semibold text-[var(--primary-color)]">
              true
            </h3>
            <p className="text-sm leading-6 text-[var(--text-secondary)]">
              The writable stream has not reached its highWaterMark
              threshold. Writing can continue.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
            <h3 className="font-semibold text-[var(--primary-color)]">
              false
            </h3>
            <p className="text-sm leading-6 text-[var(--text-secondary)]">
              The writable stream has reached or exceeded its threshold.
              Stop writing temporarily and wait for the drain event.
            </p>
          </div>
        </div>
      </section>

      {/* 6 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          6. drain Event
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The drain event is emitted by a Writable Stream when its
          internal buffer becomes empty after backpressure.
        </p>

        <CodeBlock
          code={`writable.on("drain", () => {
  console.log("Buffer is empty");
  console.log("Ready to accept more data");
});`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          When write() returns false, we should wait for drain before
          sending more data.
        </p>
      </section>

      {/* 7 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          7. pause() and resume()
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Readable Streams provide pause() and resume() methods to
          control data production.
        </p>

        <ul className="list-disc space-y-2 pl-6 leading-7 text-[var(--text-secondary)]">
          <li>
            <strong>pause():</strong> Stops the readable stream from
            emitting data events temporarily.
          </li>
          <li>
            <strong>resume():</strong> Restarts flowing data.
          </li>
        </ul>

        <CodeBlock
          code={`readable.on("data", (chunk) => {
  const canContinue = writable.write(chunk);

  if (!canContinue) {
    readable.pause();
  }
});

writable.on("drain", () => {
  readable.resume();
});`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          This creates a simple backpressure handling mechanism:
          pause the producer when the consumer is busy and resume
          it when the consumer is ready.
        </p>
      </section>

      {/* 8 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          8. Practical Example: Handling Backpressure
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Let's copy a large file using Readable and Writable Streams
          while handling backpressure manually.
        </p>

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
});

readable.on("error", (error) => {
  console.error("Read Error:", error);
});

writable.on("error", (error) => {
  console.error("Write Error:", error);
});

writable.on("finish", () => {
  console.log("File copied successfully");
});`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          This example demonstrates how the producer and consumer
          coordinate their speed to prevent uncontrolled buffering.
        </p>
      </section>

      {/* 9 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          9. Using pipe() and pipeline()
        </h2>

        <h3 className="text-lg font-semibold">
          pipe()
        </h3>

        <p className="leading-7 text-[var(--text-secondary)]">
          The pipe() method automatically manages backpressure between
          a Readable Stream and a Writable Stream.
        </p>

        <CodeBlock
          code={`import fs from "node:fs";

const readable = fs.createReadStream("input.txt");
const writable = fs.createWriteStream("output.txt");

readable.pipe(writable);`}
        />

        <h3 className="text-lg font-semibold">
          pipeline()
        </h3>

        <p className="leading-7 text-[var(--text-secondary)]">
          pipeline() also handles backpressure and provides better
          error propagation and cleanup when a stream fails.
        </p>

        <CodeBlock
          code={`import fs from "node:fs";
import { pipeline } from "node:stream/promises";

async function copyFile() {
  try {
    await pipeline(
      fs.createReadStream("input.txt"),
      fs.createWriteStream("output.txt")
    );

    console.log("Copy completed");
  } catch (error) {
    console.error("Pipeline failed:", error);
  }
}

copyFile();`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 space-y-2">
          <p className="font-semibold text-[var(--primary-color)]">
            Best Practice
          </p>
          <p className="text-sm leading-6 text-[var(--text-secondary)]">
            Prefer pipeline() for production stream pipelines because
            it provides better error handling and cleanup than manually
            connecting streams.
          </p>
        </div>
      </section>

      {/* 10 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          10. Important Points to Remember
        </h2>

        <ul className="list-disc space-y-2 pl-6 leading-7 text-[var(--text-secondary)]">
          <li>Backpressure controls data flow between streams.</li>
          <li>It occurs when the producer is faster than the consumer.</li>
          <li>highWaterMark defines a buffering threshold.</li>
          <li>write() returns false when the threshold is reached or exceeded.</li>
          <li>Stop writing when write() returns false.</li>
          <li>drain indicates that the writable buffer has emptied.</li>
          <li>pause() stops readable data flow temporarily.</li>
          <li>resume() restarts readable data flow.</li>
          <li>pipe() automatically handles backpressure.</li>
          <li>pipeline() provides better error handling and cleanup.</li>
        </ul>
      </section>

      {/* Interview */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">
          11. Interview Questions
        </h2>

        <div className="space-y-4">
          {[
            [
              "What is Backpressure in Node.js?",
              "It is a mechanism that controls data flow when a Writable Stream cannot process data as quickly as it is produced."
            ],
            [
              "Why do we need Backpressure?",
              "It prevents excessive buffering and helps control memory consumption."
            ],
            [
              "What is highWaterMark?",
              "It is a threshold that controls how much data a stream buffers before applying backpressure."
            ],
            [
              "What does write() returning false mean?",
              "It means the writable stream has reached or exceeded its highWaterMark threshold. Stop writing temporarily."
            ],
            [
              "What is the drain event?",
              "It is emitted when a writable stream's buffer becomes empty after backpressure."
            ],
            [
              "What is the difference between pause() and resume()?",
              "pause() temporarily stops readable data flow, while resume() restarts it."
            ],
            [
              "Does pipe() handle Backpressure automatically?",
              "Yes. pipe() coordinates data flow between readable and writable streams."
            ],
            [
              "What is the difference between pipe() and pipeline()?",
              "Both handle stream flow and backpressure, but pipeline() provides better error propagation and cleanup."
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
          Node.js Performance Optimization
        </h3>
        <p className="text-sm text-[var(--text-secondary)]">
          Learn how to identify performance bottlenecks and optimize
          Node.js applications.
        </p>
      </div>

    </div>
  );
}

export default Backpressure;