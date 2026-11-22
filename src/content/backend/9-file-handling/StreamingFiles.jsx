import CodeBlock from "../../../components/common/CodeBlock";

function StreamingFiles() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          FILE HANDLING / 08
        </p>
        <h1 className="mt-2 text-3xl font-bold">Streaming Files</h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          File streaming is a technique in which data is processed and
          transferred in small chunks instead of loading the entire file
          into memory at once. Node.js Streams make it efficient to handle
          large files.
        </p>
      </div>

      {/* 1. Why Streaming */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. Why File Streaming?</h2>
        <p className="text-[var(--text-secondary)]">
          Imagine a 2GB video file. If we read the entire file using
          readFile(), Node.js loads the complete file into memory.
          This can consume a large amount of RAM.
        </p>

        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-lg border border-[var(--border-color)] p-4">
            <h3 className="font-semibold">Without Streaming</h3>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              Entire file is loaded into memory before processing.
            </p>
            <div className="mt-3 rounded-md bg-[var(--bg-secondary)] p-3 text-center text-sm">
              2GB File
              <div className="my-2 text-[var(--accent-color)]">↓</div>
              Entire File in RAM
            </div>
          </div>

          <div className="rounded-lg border border-[var(--border-color)] p-4">
            <h3 className="font-semibold">With Streaming</h3>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              File is processed in smaller chunks.
            </p>
            <div className="mt-3 rounded-md bg-[var(--bg-secondary)] p-3 text-center text-sm">
              2GB File
              <div className="my-2 text-[var(--accent-color)]">↓</div>
              Chunk 1 → Chunk 2 → Chunk 3
              <div className="mt-2 text-xs text-[var(--text-secondary)]">
                Processed gradually
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Types */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Types of Streams in Node.js</h2>
        <p className="text-[var(--text-secondary)]">
          Node.js provides four main types of streams.
        </p>

        <div className="overflow-x-auto rounded-lg border border-[var(--border-color)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3 text-left">Stream</th>
                <th className="p-3 text-left">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Readable", "Used to read data."],
                ["Writable", "Used to write data."],
                ["Duplex", "Used to read and write data."],
                ["Transform", "Used to modify data while reading or writing."],
              ].map(([type, purpose]) => (
                <tr key={type} className="border-t border-[var(--border-color)]">
                  <td className="p-3 font-medium">{type}</td>
                  <td className="p-3 text-[var(--text-secondary)]">{purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. Readable */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Readable Stream</h2>
        <p className="text-[var(--text-secondary)]">
          A Readable Stream is used to read data in chunks from a source,
          such as a file.
        </p>

        <CodeBlock
          code={`import fs from "node:fs";

const readable = fs.createReadStream("large.txt", {
  encoding: "utf8",
});

readable.on("data", (chunk) => {
  console.log("Received chunk:", chunk);
});

readable.on("end", () => {
  console.log("Reading completed");
});

readable.on("error", (error) => {
  console.error(error);
});`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          The data event is emitted whenever a chunk is available.
          The end event indicates that no more data is available.
        </p>
      </section>

      {/* 4. Writable */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Writable Stream</h2>
        <p className="text-[var(--text-secondary)]">
          A Writable Stream is used to write data to a destination,
          such as a file.
        </p>

        <CodeBlock
          code={`import fs from "node:fs";

const writable = fs.createWriteStream("output.txt");

writable.write("Hello ");
writable.write("Node.js ");
writable.write("Streams");

writable.end();

writable.on("finish", () => {
  console.log("Writing completed");
});

writable.on("error", (error) => {
  console.error(error);
});`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          write() sends data to the writable stream, while end()
          signals that no more data will be written.
        </p>
      </section>

      {/* 5. Duplex */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Duplex Stream</h2>
        <p className="text-[var(--text-secondary)]">
          A Duplex Stream supports both reading and writing independently.
          A TCP socket is a common example.
        </p>

        <CodeBlock
          code={`import net from "node:net";

const server = net.createServer((socket) => {
  socket.write("Welcome to server");

  socket.on("data", (data) => {
    console.log("Client:", data.toString());
  });
});

server.listen(3000);`}
        />
      </section>

      {/* 6. Transform */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Transform Stream</h2>
        <p className="text-[var(--text-secondary)]">
          A Transform Stream is a special Duplex Stream that modifies
          data while it passes through the stream.
        </p>

        <CodeBlock
          code={`import { Transform } from "node:stream";

const upperCase = new Transform({
  transform(chunk, encoding, callback) {
    const result = chunk.toString().toUpperCase();

    callback(null, result);
  },
});

upperCase.on("data", (chunk) => {
  console.log(chunk.toString());
});

upperCase.write("hello ");
upperCase.write("node.js");
upperCase.end();`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Output: HELLO NODE.JS
        </p>
      </section>

      {/* 7. Pipe */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Pipe Method</h2>
        <p className="text-[var(--text-secondary)]">
          The pipe() method connects a Readable Stream to a Writable
          Stream. Data automatically flows from the source to the
          destination.
        </p>

        <CodeBlock
          code={`import fs from "node:fs";

const readable = fs.createReadStream("input.txt");
const writable = fs.createWriteStream("output.txt");

readable.pipe(writable);

writable.on("finish", () => {
  console.log("File copied successfully");
});`}
        />

        <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 text-center text-sm">
          <div className="rounded-md border border-[var(--border-color)] p-3">
            Readable Stream
          </div>
          <div className="py-2 text-[var(--accent-color)]">↓ pipe()</div>
          <div className="rounded-md border border-[var(--border-color)] p-3">
            Writable Stream
          </div>
        </div>
      </section>

      {/* 8. Pipeline */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Pipeline Method</h2>
        <p className="text-[var(--text-secondary)]">
          pipeline() connects multiple streams and provides better
          error handling. It also destroys connected streams when
          an error occurs.
        </p>

        <CodeBlock
          code={`import fs from "node:fs";
import { pipeline } from "node:stream/promises";
import { createGzip } from "node:zlib";

try {
  await pipeline(
    fs.createReadStream("input.txt"),
    createGzip(),
    fs.createWriteStream("input.txt.gz")
  );

  console.log("Compression completed");
} catch (error) {
  console.error("Pipeline failed:", error);
}`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          This example reads a file, compresses its data using Gzip,
          and writes the compressed output to another file.
        </p>
      </section>

      {/* 9. Backpressure */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Backpressure</h2>
        <p className="text-[var(--text-secondary)]">
          Backpressure occurs when data is produced faster than the
          destination can consume it. Node.js uses backpressure to
          prevent excessive memory usage.
        </p>

        <CodeBlock
          code={`const canContinue = writable.write(chunk);

if (!canContinue) {
  readable.pause();

  writable.once("drain", () => {
    readable.resume();
  });
}`}
        />

        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>
            write() returns false when the internal buffer reaches
            its high-water mark.
          </li>
          <li>
            drain event indicates that the writable buffer has
            drained enough to accept more data.
          </li>
          <li>
            pause() stops the readable stream temporarily.
          </li>
          <li>
            resume() allows the readable stream to continue.
          </li>
        </ul>
      </section>

      {/* 10. HTTP Streaming */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Stream Files in Express</h2>
        <p className="text-[var(--text-secondary)]">
          We can stream a large file directly to an HTTP response
          instead of loading it completely into memory.
        </p>

        <CodeBlock
          code={`import fs from "node:fs";
import express from "express";
import { pipeline } from "node:stream/promises";

const app = express();

app.get("/download", async (req, res, next) => {
  try {
    const filePath = "uploads/video.mp4";

    res.setHeader(
      "Content-Type",
      "video/mp4"
    );

    res.setHeader(
      "Content-Disposition",
      'attachment; filename="video.mp4"'
    );

    await pipeline(
      fs.createReadStream(filePath),
      res
    );
  } catch (error) {
    if (res.headersSent) {
      res.destroy(error);
      return;
    }

    next(error);
  }
});

app.listen(3000);`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          pipeline() transfers file chunks directly to the response.
          If the client disconnects, the stream pipeline handles
          cleanup and errors.
        </p>
      </section>

      {/* 11. Video Streaming */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">11. Video Streaming</h2>
        <p className="text-[var(--text-secondary)]">
          Browsers can request a specific portion of a video using
          HTTP Range requests. This allows users to seek to different
          positions without downloading the entire video first.
        </p>

        <CodeBlock
          code={`import fs from "node:fs";
import express from "express";

const app = express();

app.get("/video", (req, res) => {
  const videoPath = "uploads/video.mp4";
  const stat = fs.statSync(videoPath);

  const range = req.headers.range;

  if (!range) {
    res.status(400).send("Range header required");
    return;
  }

  const match = /^bytes=(\\d*)-(\\d*)$/.exec(range);

  if (!match || (!match[1] && !match[2])) {
    res.status(416).end();
    return;
  }

  const size = stat.size;

  let start;
  let end;

  if (!match[1]) {
    const suffixLength = Number(match[2]);

    if (!Number.isSafeInteger(suffixLength) || suffixLength <= 0) {
      res.status(416).end();
      return;
    }

    start = Math.max(0, size - suffixLength);
    end = size - 1;
  } else {
    start = Number(match[1]);
    end = match[2] ? Number(match[2]) : size - 1;
  }

  if (
    !Number.isSafeInteger(start) ||
    !Number.isSafeInteger(end) ||
    start < 0 ||
    start >= size ||
    end < start
  ) {
    res.status(416).setHeader("Content-Range", \`bytes */\${size}\`).end();
    return;
  }

  end = Math.min(end, size - 1);

  res.writeHead(206, {
    "Content-Range": \`bytes \${start}-\${end}/\${size}\`,
    "Accept-Ranges": "bytes",
    "Content-Length": end - start + 1,
    "Content-Type": "video/mp4",
  });

  fs.createReadStream(videoPath, {
    start,
    end,
  }).pipe(res);
});

app.listen(3000);`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          HTTP 206 means Partial Content. The browser receives only
          the requested byte range, which helps video seeking.
          Production code should also handle multiple ranges and
          stream errors.
        </p>
      </section>

      {/* 12. High Water Mark */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">12. High Water Mark</h2>
        <p className="text-[var(--text-secondary)]">
          highWaterMark defines the buffering threshold used by a stream.
          It is not a strict maximum memory limit. Its unit depends on
          the stream mode, such as bytes for binary streams or objects
          for object-mode streams.
        </p>

        <CodeBlock
          code={`import fs from "node:fs";

const readable = fs.createReadStream("large.txt", {
  highWaterMark: 64 * 1024,
});

readable.on("data", (chunk) => {
  console.log("Chunk size:", chunk.length);
});`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Here, the readable stream uses a 64 KB buffering threshold.
          Actual chunk sizes can vary.
        </p>
      </section>

      {/* 13. Best Practices */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">13. Best Practices</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>Use streams for large files instead of loading everything into RAM.</li>
          <li>Prefer pipeline() for connecting multiple streams.</li>
          <li>Handle stream errors properly.</li>
          <li>Respect backpressure when manually writing chunks.</li>
          <li>Validate file paths and permissions before streaming.</li>
          <li>Handle client disconnections in HTTP streaming routes.</li>
          <li>Use HTTP Range support when building video playback systems.</li>
        </ul>
      </section>

      {/* 14. Interview */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">14. Interview Questions</h2>

        {[
          {
            q: "What is file streaming?",
            a: "File streaming is the process of reading or writing data in smaller chunks instead of loading the entire file into memory.",
          },
          {
            q: "Why do we use streams in Node.js?",
            a: "Streams help process large amounts of data efficiently with lower memory usage.",
          },
          {
            q: "What are the four types of streams?",
            a: "Readable, Writable, Duplex, and Transform.",
          },
          {
            q: "What is a Readable Stream?",
            a: "A stream used to read data from a source in chunks.",
          },
          {
            q: "What is a Writable Stream?",
            a: "A stream used to write data to a destination.",
          },
          {
            q: "What is a Transform Stream?",
            a: "A Duplex Stream that modifies data while it passes through.",
          },
          {
            q: "What is the difference between pipe() and pipeline()?",
            a: "pipe() connects streams, while pipeline() connects streams with integrated error handling and cleanup.",
          },
          {
            q: "What is backpressure?",
            a: "Backpressure occurs when data is produced faster than the destination can consume it.",
          },
          {
            q: "What is highWaterMark?",
            a: "It is the buffering threshold that controls when a stream should apply backpressure or stop requesting more data.",
          },
          {
            q: "What is an HTTP Range request?",
            a: "It allows a client to request a specific portion of a resource, commonly used for video seeking and partial downloads.",
          },
        ].map((item, index) => (
          <details
            key={index}
            className="group rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4"
          >
            <summary className="cursor-pointer font-medium">
              {index + 1}. {item.q}
            </summary>
            <p className="mt-3 text-sm text-[var(--text-secondary)]">
              {item.a}
            </p>
          </details>
        ))}
      </section>
    </div>
  );
}

export default StreamingFiles;