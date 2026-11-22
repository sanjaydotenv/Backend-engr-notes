import CodeBlock from "../../../components/common/CodeBlock";

function FileCompression() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          FILE HANDLING / 05
        </p>
        <h1 className="mt-2 text-3xl font-bold">File Compression</h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          File Compression is the process of reducing a file's size to save
          storage space and reduce data transfer time. In Node.js, we can
          compress images, text files, and other supported formats using
          different libraries.
        </p>
      </div>

      {/* 1. Why Compression */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. Why File Compression?</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>Reduces storage requirements.</li>
          <li>Improves upload and download performance.</li>
          <li>Reduces bandwidth usage.</li>
          <li>Helps deliver images and files faster.</li>
          <li>Reduces storage and transfer costs.</li>
        </ul>
      </section>

      {/* 2. Types */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Types of Compression</h2>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-[var(--border-color)] p-4">
            <h3 className="font-semibold">Lossless Compression</h3>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              Reduces file size without losing original information.
              The original data can be reconstructed exactly.
            </p>
            <p className="mt-2 text-xs text-[var(--accent-color)]">
              Examples: ZIP, GZIP, PNG
            </p>
          </div>

          <div className="rounded-lg border border-[var(--border-color)] p-4">
            <h3 className="font-semibold">Lossy Compression</h3>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              Reduces file size by removing some information. Original
              quality cannot be perfectly restored.
            </p>
            <p className="mt-2 text-xs text-[var(--accent-color)]">
              Examples: JPEG, lossy WebP
            </p>
          </div>
        </div>
      </section>

      {/* 3. Image Compression */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Image Compression in Node.js</h2>
        <p className="text-[var(--text-secondary)]">
          Sharp is a popular Node.js library for resizing and compressing
          images. It supports formats such as JPEG, PNG, WebP, and AVIF,
          depending on the installed build.
        </p>

        <CodeBlock code={`npm install sharp`} />

        <CodeBlock
          code={`import sharp from "sharp";

await sharp("uploads/original.jpg")
  .resize({ width: 800 })
  .jpeg({ quality: 70 })
  .toFile("uploads/compressed.jpg");

console.log("Image compressed successfully");`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Here, Sharp resizes the image to a maximum width of 800 pixels
          and encodes it as JPEG with quality 70.
        </p>
      </section>

      {/* 4. WebP */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Convert Image to WebP</h2>
        <p className="text-[var(--text-secondary)]">
          WebP is an image format that supports both lossy and lossless
          compression. It can often produce smaller files than JPEG or PNG.
        </p>

        <CodeBlock
          code={`import sharp from "sharp";

await sharp("uploads/photo.png")
  .webp({ quality: 75 })
  .toFile("uploads/photo.webp");`}
        />
      </section>

      {/* 5. GZIP */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. GZIP Compression</h2>
        <p className="text-[var(--text-secondary)]">
          GZIP is a lossless compression format commonly used to reduce
          the size of HTTP responses, especially text-based content such
          as HTML, CSS, JavaScript, and JSON.
        </p>

        <CodeBlock code={`npm install compression`} />

        <CodeBlock
          code={`import express from "express";
import compression from "compression";

const app = express();

app.use(compression());

app.get("/api/data", (req, res) => {
  res.json({
    message: "Compressed response",
    data: "Some large text response...",
  });
});

app.listen(3000);`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          The compression middleware compresses eligible HTTP responses
          when the client supports the selected encoding.
        </p>
      </section>

      {/* 6. ZIP */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. ZIP File Compression</h2>
        <p className="text-[var(--text-secondary)]">
          ZIP combines multiple files into a single archive and usually
          compresses their contents. The Archiver package can create ZIP
          archives in Node.js.
        </p>

        <CodeBlock code={`npm install archiver`} />

        <CodeBlock
          code={`import fs from "node:fs";
import archiver from "archiver";

const output = fs.createWriteStream("backup.zip");

const archive = archiver("zip", {
  zlib: { level: 9 },
});

output.on("close", () => {
  console.log("ZIP created:", archive.pointer(), "bytes");
});

archive.on("error", (error) => {
  throw error;
});

archive.pipe(output);

archive.file("uploads/photo.jpg", {
  name: "photo.jpg",
});

archive.directory("documents/", "documents");

await archive.finalize();`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Higher compression levels may use more CPU time. Already compressed
          files such as JPEG and MP4 may not become significantly smaller.
        </p>
      </section>

      {/* 7. Before After */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Compression Example</h2>

        <div className="overflow-x-auto rounded-lg border border-[var(--border-color)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3 text-left">File</th>
                <th className="p-3 text-left">Original</th>
                <th className="p-3 text-left">Compressed</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Image", "5 MB", "1.2 MB"],
                ["Document", "10 MB", "6 MB"],
                ["Text Data", "2 MB", "400 KB"],
              ].map(([file, original, compressed]) => (
                <tr key={file} className="border-t border-[var(--border-color)]">
                  <td className="p-3 font-medium">{file}</td>
                  <td className="p-3 text-[var(--text-secondary)]">{original}</td>
                  <td className="p-3 text-[var(--text-secondary)]">{compressed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-[var(--text-secondary)]">
          These are illustrative values. Actual compression depends on
          file format, content, quality settings, and compression method.
        </p>
      </section>

      {/* 8. Upload Flow */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. File Upload + Compression Flow</h2>

        <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <div className="space-y-2 text-center text-sm">
            {[
              "User uploads an image",
              "Multer receives the file",
              "Backend validates the file",
              "Sharp compresses or resizes the image",
              "Compressed file is stored",
              "Backend returns the file URL",
            ].map((step, index) => (
              <div key={step}>
                <div className="rounded-md border border-[var(--border-color)] p-3">
                  <span className="font-semibold text-[var(--accent-color)]">
                    {index + 1}.{" "}
                  </span>
                  {step}
                </div>
                {index !== 5 && (
                  <div className="text-[var(--accent-color)]">↓</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Best Practices */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Compression Best Practices</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>Validate files before processing them.</li>
          <li>Choose the right format for the file type.</li>
          <li>Set appropriate image quality and dimensions.</li>
          <li>Avoid repeatedly compressing already compressed files.</li>
          <li>Use streaming for large files when supported.</li>
          <li>Set file size and processing limits.</li>
          <li>Keep the original file when the application needs it.</li>
          <li>Consider CPU and memory usage during compression.</li>
        </ul>
      </section>

      {/* 10. Interview */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Interview Questions</h2>

        {[
          {
            q: "What is File Compression?",
            a: "It is the process of reducing file size to save storage and reduce data transfer.",
          },
          {
            q: "What is Lossless Compression?",
            a: "It reduces file size without losing original information.",
          },
          {
            q: "What is Lossy Compression?",
            a: "It reduces file size by removing some information, which may reduce quality.",
          },
          {
            q: "What is Sharp in Node.js?",
            a: "Sharp is a library used for image resizing, conversion, and compression.",
          },
          {
            q: "What is GZIP?",
            a: "GZIP is a lossless compression format commonly used for HTTP response compression.",
          },
          {
            q: "What is the compression package in Express?",
            a: "The compression package provides middleware for compressing eligible HTTP responses.",
          },
          {
            q: "Why might JPEG files not become much smaller inside a ZIP archive?",
            a: "JPEG is already compressed, so ZIP often cannot reduce its size significantly.",
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

export default FileCompression;