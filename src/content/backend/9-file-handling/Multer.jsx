import CodeBlock from "../../../components/common/CodeBlock";

function Multer() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          FILE HANDLING / 03
        </p>
        <h1 className="mt-2 text-3xl font-bold">Multer</h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          Multer is a Node.js middleware used with Express to handle
          multipart/form-data requests. It makes it easy to upload files
          such as images, documents, and videos from the frontend to the
          backend.
        </p>
      </div>

      {/* 1. Installation */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. Install Multer</h2>
        <p className="text-[var(--text-secondary)]">
          Install Multer using npm.
        </p>
        <CodeBlock code={`npm install multer`} />
        <CodeBlock
          code={`import express from "express";
import multer from "multer";

const app = express();`}
        />
      </section>

      {/* 2. How Multer Works */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. How Multer Works</h2>
        <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <div className="space-y-2 text-center text-sm">
            {[
              "User selects a file",
              "Frontend sends FormData",
              "Multer receives multipart request",
              "Multer processes the uploaded file",
              "File information becomes available in req.file or req.files",
              "Backend validates and stores the file",
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

      {/* 3. Disk Storage */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Disk Storage</h2>
        <p className="text-[var(--text-secondary)]">
          DiskStorage saves uploaded files directly to a directory on
          the server. We can control the destination folder and filename.
        </p>

        <CodeBlock
          code={`import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          The uploads directory should exist before uploading files.
          This example uses the original filename; production applications
          should generate safer unique filenames.
        </p>
      </section>

      {/* 4. Single File */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Upload Single File</h2>
        <p className="text-[var(--text-secondary)]">
          Use upload.single() when you want to upload one file from a
          particular form field.
        </p>

        <CodeBlock
          code={`app.post("/upload", upload.single("profile"), (req, res) => {
  console.log(req.file);

  res.json({
    message: "File uploaded successfully",
    file: req.file,
  });
});`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          The uploaded file information is available in req.file.
          The field name must match the frontend input name.
        </p>
      </section>

      {/* 5. Frontend */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Send File from Frontend</h2>
        <p className="text-[var(--text-secondary)]">
          Use FormData to send the selected file to the Express server.
        </p>

        <CodeBlock
          code={`const formData = new FormData();

formData.append("profile", selectedFile);

const response = await fetch("/upload", {
  method: "POST",
  body: formData,
});

const result = await response.json();
console.log(result);`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Do not manually set the Content-Type header. The browser
          automatically adds the multipart boundary.
        </p>
      </section>

      {/* 6. Multiple Files */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Upload Multiple Files</h2>
        <p className="text-[var(--text-secondary)]">
          Use upload.array() to receive multiple files through the same
          field name.
        </p>

        <CodeBlock
          code={`// Frontend
<input type="file" name="photos" multiple />

// Backend
app.post("/uploads", upload.array("photos", 5), (req, res) => {
  console.log(req.files);

  res.json({
    message: "Files uploaded",
    count: req.files.length,
  });
});`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          The second argument limits the number of files accepted by this
          upload middleware.
        </p>
      </section>

      {/* 7. Multiple Fields */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Upload Files from Different Fields</h2>
        <p className="text-[var(--text-secondary)]">
          Use upload.fields() when a form contains multiple file inputs
          with different field names.
        </p>

        <CodeBlock
          code={`app.post(
  "/profile",
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "documents", maxCount: 3 },
  ]),
  (req, res) => {
    console.log(req.files.avatar);
    console.log(req.files.documents);

    res.json({ message: "Files uploaded" });
  }
);`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          With upload.fields(), files are available in req.files as an
          object grouped by field name.
        </p>
      </section>

      {/* 8. Memory Storage */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Memory Storage</h2>
        <p className="text-[var(--text-secondary)]">
          MemoryStorage keeps uploaded files in RAM as Buffer objects
          instead of saving them to disk.
        </p>

        <CodeBlock
          code={`const upload = multer({
  storage: multer.memoryStorage(),
});

app.post("/upload", upload.single("profile"), (req, res) => {
  console.log(req.file.buffer);

  res.json({
    message: "File received in memory",
    size: req.file.size,
  });
});`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Memory storage is useful when sending files directly to cloud
          storage services. Be careful with large files because they
          consume server memory.
        </p>
      </section>

      {/* 9. File Filter */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. File Type Validation</h2>
        <p className="text-[var(--text-secondary)]">
          Multer provides fileFilter() to accept or reject files based
          on their metadata.
        </p>

        <CodeBlock
          code={`const upload = multer({
  storage,

  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
    ];

    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed"));
    }
  },
});`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Important: file.mimetype comes from the request and can be
          spoofed. Do not rely on it alone. Validate actual file content
          using file signatures or a suitable file inspection library.
        </p>
      </section>

      {/* 10. File Size Limit */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. File Size Limit</h2>
        <p className="text-[var(--text-secondary)]">
          limits prevents users from uploading extremely large files.
        </p>

        <CodeBlock
          code={`const upload = multer({
  storage,

  limits: {
    fileSize: 5 * 1024 * 1024, // 5 MB
    files: 5,
  },
});`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Multer supports several limits, including fileSize, files,
          fields, and parts.
        </p>
      </section>

      {/* 11. Error Handling */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">11. Multer Error Handling</h2>
        <p className="text-[var(--text-secondary)]">
          Multer errors can be handled using Express error-handling
          middleware.
        </p>

        <CodeBlock
          code={`app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).json({
      message: err.message,
      code: err.code,
    });
  }

  if (err) {
    return res.status(400).json({
      message: err.message,
    });
  }

  next();
});`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Register this error handler after your routes. Handle unexpected
          server errors separately in a production application.
        </p>
      </section>

      {/* 12. Storage Comparison */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">12. DiskStorage vs MemoryStorage</h2>

        <div className="overflow-x-auto rounded-lg border border-[var(--border-color)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3 text-left">DiskStorage</th>
                <th className="p-3 text-left">MemoryStorage</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Saves files on disk", "Keeps files in RAM"],
                ["Provides file path", "Provides Buffer"],
                ["Uses disk space", "Uses server memory"],
                ["Good for local storage", "Useful for direct cloud uploads"],
              ].map(([disk, memory]) => (
                <tr key={disk} className="border-t border-[var(--border-color)]">
                  <td className="p-3 text-[var(--text-secondary)]">{disk}</td>
                  <td className="p-3 text-[var(--text-secondary)]">{memory}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 13. Security */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">13. Security Best Practices</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>Always set file size and file count limits.</li>
          <li>Validate actual file content, not only the extension or MIME type.</li>
          <li>Generate unique and safe filenames.</li>
          <li>Authenticate users before allowing uploads.</li>
          <li>Store sensitive files outside public directories.</li>
          <li>Use malware scanning when appropriate.</li>
          <li>Handle upload errors and clean up incomplete files.</li>
          <li>Do not use MemoryStorage without considering memory limits.</li>
        </ul>
      </section>

      {/* 14. Interview Questions */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">14. Interview Questions</h2>

        {[
          {
            q: "What is Multer?",
            a: "Multer is Node.js middleware used with Express to handle multipart/form-data file uploads.",
          },
          {
            q: "What is DiskStorage?",
            a: "DiskStorage saves uploaded files to a directory on the server.",
          },
          {
            q: "What is MemoryStorage?",
            a: "MemoryStorage stores uploaded files in RAM as Buffer objects.",
          },
          {
            q: "What is the difference between upload.single() and upload.array()?",
            a: "single() accepts one file, while array() accepts multiple files from the same field.",
          },
          {
            q: "What is upload.fields()?",
            a: "It handles files from multiple named fields in the same multipart request.",
          },
          {
            q: "What is fileFilter()?",
            a: "It is a Multer option used to accept or reject uploaded files based on their metadata.",
          },
          {
            q: "What is req.file?",
            a: "It contains information about a single uploaded file.",
          },
          {
            q: "What is req.files?",
            a: "It contains information about multiple uploaded files.",
          },
          {
            q: "Why should we set file size limits?",
            a: "To prevent extremely large uploads from consuming excessive server storage or memory.",
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

export default Multer;