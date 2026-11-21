import CodeBlock from "../../../../components/common/CodeBlock";

const FileUpload = () => {
  const questions = [
    {
      question: "What is File Upload in Express.js?",
      answer:
        "File Upload allows clients to send files such as images, PDFs, and documents to a server through HTTP requests.",
    },
    {
      question: "What is Multer?",
      answer:
        "Multer is Express middleware used to handle multipart/form-data, mainly for uploading files.",
    },
    {
      question: "What is multipart/form-data?",
      answer:
        "It is an HTTP form encoding type used to send files and form fields together in a request.",
    },
    {
      question: "What is the difference between single() and array()?",
      answer:
        "single() handles one uploaded file, while array() handles multiple files from the same field name.",
    },
    {
      question: "What is diskStorage()?",
      answer:
        "diskStorage() configures where uploaded files are saved and how their filenames are generated.",
    },
    {
      question: "What is fileFilter in Multer?",
      answer:
        "fileFilter is a callback used to decide whether an uploaded file should be accepted or rejected.",
    },
    {
      question: "Why should we validate uploaded files?",
      answer:
        "Validation helps prevent unexpected file types, oversized uploads, and potentially dangerous files from entering the application.",
    },
    {
      question: "What is the difference between memoryStorage and diskStorage?",
      answer:
        "memoryStorage keeps the uploaded file in server memory as a Buffer, while diskStorage saves it to the filesystem.",
    },
  ];

  return (
    <div className="w-full space-y-8 text-[var(--text-primary)]">

      {/* HEADER */}
      <div className="space-y-3">
        <p className="text-sm font-semibold tracking-widest text-[var(--accent-color)]">
          EXPRESS.JS / REST API DEVELOPMENT / 11
        </p>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          File Upload in Express.js
        </h1>

        <p className="text-base leading-7 text-[var(--text-secondary)]">
          File Upload allows clients to send files such as images,
          documents, and videos to a server. Express applications
          commonly use Multer middleware to handle file uploads.
        </p>
      </div>

      {/* SECTION 1 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          1. How File Upload Works
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Normally, JSON requests send data as JSON. But files are
          commonly uploaded using the multipart/form-data content type.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-5">
          <div className="space-y-3 text-center text-sm font-medium">
            <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-hover)] p-3">
              Client selects a file
            </div>

            <div className="text-[var(--accent-color)]">↓</div>

            <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-hover)] p-3">
              Sends multipart/form-data request
            </div>

            <div className="text-[var(--accent-color)]">↓</div>

            <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-hover)] p-3">
              Express receives the request
            </div>

            <div className="text-[var(--accent-color)]">↓</div>

            <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-hover)] p-3">
              Multer processes the uploaded file
            </div>

            <div className="text-[var(--accent-color)]">↓</div>

            <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-hover)] p-3">
              File is stored on disk or in memory
            </div>

            <div className="text-[var(--accent-color)]">↓</div>

            <div className="rounded-lg border border-[var(--accent-color)] bg-[var(--accent-background)] p-3 text-[var(--accent-color)]">
              Server sends API response
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          2. What is Multer?
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          <strong>Multer</strong> is Node.js middleware for handling
          multipart/form-data requests. It makes file handling easier
          in Express applications.
        </p>

        <CodeBlock
          code={`npm install multer`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Import Multer into your Express application:
        </p>

        <CodeBlock
          code={`import multer from "multer";`}
        />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          Multer processes the incoming file and makes its information
          available through <code>req.file</code> or <code>req.files</code>.
        </p>
      </section>

      {/* SECTION 3 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          3. Disk Storage
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Multer provides diskStorage() to save uploaded files directly
          to a directory on the server.
        </p>

        <CodeBlock
          code={`import multer from "multer";
import path from "node:path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    const uniqueName =
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9) +
      path.extname(file.originalname);

    cb(null, uniqueName);
  },
});

const upload = multer({ storage });`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Important properties:
        </p>

        <ul className="list-disc space-y-2 pl-5 leading-7 text-[var(--text-secondary)]">
          <li>
            <code>destination</code>: Defines the directory where files are stored.
          </li>
          <li>
            <code>filename</code>: Defines the name of the uploaded file.
          </li>
          <li>
            <code>file.originalname</code>: Contains the original filename provided by the client.
          </li>
          <li>
            <code>path.extname()</code>: Extracts the file extension.
          </li>
        </ul>

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          The uploads directory must exist when using this example.
          The generated filename helps avoid collisions, but a
          cryptographically secure random identifier is preferable
          in production.
        </p>
      </section>

      {/* SECTION 4 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          4. Single File Upload
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Use <code>upload.single()</code> when the client uploads
          only one file using a particular field name.
        </p>

        <CodeBlock
          code={`// Route

app.post(
  "/api/upload",
  upload.single("profileImage"),
  (req, res) => {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "File is required",
      });
    }

    return res.status(200).json({
      success: true,
      message: "File uploaded successfully",
      file: {
        filename: req.file.filename,
        path: req.file.path,
        size: req.file.size,
      },
    });
  }
);`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          After Multer processes the request, uploaded file details
          are available in <code>req.file</code>.
        </p>
      </section>

      {/* SECTION 5 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          5. Multiple File Upload
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Use <code>upload.array()</code> when multiple files are
          uploaded using the same field name.
        </p>

        <CodeBlock
          code={`// Maximum 5 files

app.post(
  "/api/upload-multiple",
  upload.array("images", 5),
  (req, res) => {
    const files = req.files.map((file) => ({
      filename: file.filename,
      path: file.path,
      size: file.size,
    }));

    return res.status(200).json({
      success: true,
      message: "Files uploaded successfully",
      files,
    });
  }
);`}
        />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          In this case, Multer stores uploaded files in
          <code> req.files</code> instead of <code>req.file</code>.
        </p>
      </section>

      {/* SECTION 6 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          6. File Type Validation
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          We can use fileFilter to reject files that do not match
          the allowed types.
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
      return cb(null, true);
    }

    cb(new Error("Only image files are allowed"));
  },
});`}
        />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          The <code>file.mimetype</code> property contains the MIME
          type reported by the client. It is useful for basic filtering,
          but it is not sufficient for security because clients can
          spoof it.
        </p>
      </section>

      {/* SECTION 7 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          7. File Size Limits
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Large files can consume too much disk space, memory, and
          server resources. Multer allows us to define upload limits.
        </p>

        <CodeBlock
          code={`const upload = multer({
  storage,

  limits: {
    fileSize: 2 * 1024 * 1024, // 2 MB
    files: 5,
  },
});`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Here:
        </p>

        <ul className="list-disc space-y-2 pl-5 leading-7 text-[var(--text-secondary)]">
          <li><code>fileSize</code> limits the size of each file.</li>
          <li><code>files</code> limits the number of uploaded files.</li>
        </ul>
      </section>

      {/* SECTION 8 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          8. Memory Storage vs Disk Storage
        </h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="p-3 font-semibold">Disk Storage</th>
                <th className="p-3 font-semibold">Memory Storage</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[var(--border-color)]">
              <tr>
                <td className="p-3 text-[var(--text-secondary)]">
                  Saves files on disk.
                </td>
                <td className="p-3 text-[var(--text-secondary)]">
                  Stores files in RAM.
                </td>
              </tr>

              <tr>
                <td className="p-3 text-[var(--text-secondary)]">
                  Uses req.file.path.
                </td>
                <td className="p-3 text-[var(--text-secondary)]">
                  Uses req.file.buffer.
                </td>
              </tr>

              <tr>
                <td className="p-3 text-[var(--text-secondary)]">
                  Suitable for filesystem-based storage.
                </td>
                <td className="p-3 text-[var(--text-secondary)]">
                  Useful when processing files directly in memory.
                </td>
              </tr>

              <tr>
                <td className="p-3 text-[var(--text-secondary)]">
                  Requires disk space.
                </td>
                <td className="p-3 text-[var(--text-secondary)]">
                  Can consume significant RAM.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <CodeBlock
          code={`// Memory Storage

const upload = multer({
  storage: multer.memoryStorage(),
});

// Access uploaded file

app.post(
  "/upload",
  upload.single("image"),
  (req, res) => {
    console.log(req.file.buffer);
    res.send("File received");
  }
);`}
        />
      </section>

      {/* SECTION 9 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          9. Handling Multer Errors
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Multer can generate errors when a file exceeds configured
          limits or violates upload restrictions. We can handle these
          errors using middleware.
        </p>

        <CodeBlock
          code={`app.post(
  "/api/upload",
  (req, res, next) => {
    upload.single("profileImage")(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({
          success: false,
          message: err.message,
        });
      }

      if (err) {
        return res.status(400).json({
          success: false,
          message: err.message,
        });
      }

      next();
    });
  },
  (req, res) => {
    res.status(200).json({
      success: true,
      message: "Upload successful",
    });
  }
);`}
        />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          This handles Multer-specific errors and other upload
          validation errors. In production, use centralized error
          handling where appropriate.
        </p>
      </section>

      {/* SECTION 10 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">
          10. Important Security Practices
        </h2>

        <ul className="list-disc space-y-2 pl-5 leading-7 text-[var(--text-secondary)]">
          <li>Set file size and file count limits.</li>
          <li>Allow only the file types your application needs.</li>
          <li>Do not trust the original filename or client-provided MIME type.</li>
          <li>Generate unique server-side filenames.</li>
          <li>Validate actual file content using file signatures or suitable file parsers.</li>
          <li>Store uploaded files outside publicly executable directories.</li>
          <li>Require authentication and authorization for protected uploads.</li>
          <li>Clean up uploaded files if later database operations fail.</li>
          <li>For production, consider dedicated object storage such as Amazon S3 or Cloudinary.</li>
        </ul>
      </section>

      {/* INTERVIEW QUESTIONS */}
      <section className="space-y-5 border-t border-[var(--border-color)] pt-7">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">
            Interview Questions
          </h2>

          <p className="text-sm text-[var(--text-muted)]">
            Click any question to reveal its answer.
          </p>
        </div>

        <div className="space-y-3">
          {questions.map((item, index) => (
            <details
              key={item.question}
              className="group overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 font-medium transition-colors hover:bg-[var(--bg-hover)]">
                <span className="text-sm sm:text-base">
                  {index + 1}. {item.question}
                </span>

                <span className="shrink-0 text-lg text-[var(--accent-color)] transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>

              <div className="border-t border-[var(--border-color)] px-4 py-4 text-sm leading-7 text-[var(--text-secondary)]">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </section>

    </div>
  );
};

export default FileUpload;