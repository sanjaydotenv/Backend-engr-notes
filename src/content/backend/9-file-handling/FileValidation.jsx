import CodeBlock from "../../../components/common/CodeBlock";

function FileValidation() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          FILE HANDLING / 04
        </p>
        <h1 className="mt-2 text-3xl font-bold">File Validation</h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          File Validation is the process of checking uploaded files before
          storing or processing them. It helps prevent malicious files,
          unsupported formats, oversized uploads, and security risks.
        </p>
      </div>

      {/* 1. Why File Validation */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. Why File Validation?</h2>
        <p className="text-[var(--text-secondary)]">
          Users can upload files with unexpected formats, misleading
          extensions, or malicious content. Backend validation helps
          protect the application and server.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>Prevent unsupported file uploads.</li>
          <li>Restrict maximum file size.</li>
          <li>Reduce the risk of malicious files.</li>
          <li>Protect server storage and resources.</li>
          <li>Ensure files meet application requirements.</li>
        </ul>
      </section>

      {/* 2. Types */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. What Should We Validate?</h2>
        <div className="space-y-3">
          {[
            {
              title: "File Extension",
              desc: "Check the file extension, such as .jpg, .png, or .pdf.",
            },
            {
              title: "MIME Type",
              desc: "Check the declared media type, such as image/jpeg or application/pdf.",
            },
            {
              title: "File Size",
              desc: "Ensure the uploaded file does not exceed the allowed size.",
            },
            {
              title: "File Signature",
              desc: "Inspect the actual file content to identify its real format.",
            },
            {
              title: "Filename",
              desc: "Avoid unsafe filenames, path traversal, and filename collisions.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-[var(--border-color)] p-4"
            >
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Extension Validation */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. File Extension Validation</h2>
        <p className="text-[var(--text-secondary)]">
          The extension is the part of a filename that usually appears
          after the last dot. We can check it using the path module.
        </p>

        <CodeBlock
          code={`import path from "node:path";

function validateExtension(filename) {
  const allowedExtensions = [".jpg", ".jpeg", ".png", ".webp"];

  const extension = path.extname(filename).toLowerCase();

  return allowedExtensions.includes(extension);
}

console.log(validateExtension("photo.png")); // true
console.log(validateExtension("script.exe")); // false`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Extension validation alone is not secure because a user can
          rename a file without changing its actual content.
        </p>
      </section>

      {/* 4. MIME Type */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. MIME Type Validation</h2>
        <p className="text-[var(--text-secondary)]">
          MIME type describes the media format of a file. Multer provides
          the uploaded file's declared MIME type through file.mimetype.
        </p>

        <CodeBlock
          code={`const allowedMimeTypes = [
  "image/jpeg",
  "image/png",
  "image/webp",
];

function validateMimeType(file) {
  return allowedMimeTypes.includes(file.mimetype);
}`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Important: file.mimetype is provided by the client and can be
          manipulated. Never trust it as proof of the actual file format.
        </p>
      </section>

      {/* 5. File Size */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. File Size Validation</h2>
        <p className="text-[var(--text-secondary)]">
          We should limit file sizes to prevent users from uploading
          unnecessarily large files.
        </p>

        <CodeBlock
          code={`const MAX_SIZE = 5 * 1024 * 1024; // 5 MB

function validateFileSize(file) {
  return file.size <= MAX_SIZE;
}`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          In a Multer application, configure limits.fileSize so oversized
          uploads are rejected during processing instead of checking only
          after the entire file has been accepted.
        </p>
      </section>

      {/* 6. File Signature */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. File Signature Validation</h2>
        <p className="text-[var(--text-secondary)]">
          File signatures, also called magic bytes, are special byte
          patterns at the beginning of many file formats. They help
          identify the actual file type.
        </p>

        <div className="overflow-x-auto rounded-lg border border-[var(--border-color)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3 text-left">Format</th>
                <th className="p-3 text-left">Signature (Hex)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["PNG", "89 50 4E 47"],
                ["JPEG", "FF D8 FF"],
                ["PDF", "25 50 44 46"],
                ["GIF", "47 49 46 38"],
              ].map(([format, signature]) => (
                <tr key={format} className="border-t border-[var(--border-color)]">
                  <td className="p-3 font-medium">{format}</td>
                  <td className="p-3 text-[var(--text-secondary)]">{signature}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-[var(--text-secondary)]">
          We can inspect file signatures using a library such as
          file-type.
        </p>

        <CodeBlock code={`npm install file-type`} />

        <CodeBlock
          code={`import { fileTypeFromFile } from "file-type";

const result = await fileTypeFromFile("uploads/photo.png");

if (!result || result.mime !== "image/png") {
  throw new Error("Invalid PNG file");
}

console.log(result.mime);`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          File signature detection is stronger than trusting extensions
          or client MIME types, but it is not a complete malware or content
          safety check.
        </p>
      </section>

      {/* 7. Multer Validation */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. File Validation with Multer</h2>
        <p className="text-[var(--text-secondary)]">
          Multer provides fileFilter() and limits to reject unsupported
          file uploads and restrict their size.
        </p>

        <CodeBlock
          code={`import multer from "multer";

const upload = multer({
  dest: "uploads/",

  limits: {
    fileSize: 5 * 1024 * 1024,
    files: 1,
  },

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
});

app.post("/upload", upload.single("image"), (req, res) => {
  res.json({
    message: "File uploaded successfully",
  });
});`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          This is an initial filter, not complete file validation.
          Perform actual signature or content checks before permanently
          accepting the file.
        </p>
      </section>

      {/* 8. Complete Validation Flow */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Complete File Validation Flow</h2>

        <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <div className="space-y-2 text-center text-sm">
            {[
              "User uploads a file",
              "Check file size",
              "Check extension and declared MIME type",
              "Inspect actual file signature",
              "Perform additional security checks if required",
              "Accept and store the file",
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

      {/* 9. Security */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Security Best Practices</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>Never trust file extensions or MIME types alone.</li>
          <li>Validate file signatures and actual content.</li>
          <li>Set file size and file count limits.</li>
          <li>Generate unique filenames on the server.</li>
          <li>Prevent path traversal attacks.</li>
          <li>Store untrusted uploads outside publicly executable directories.</li>
          <li>Use malware scanning when appropriate.</li>
          <li>Restrict upload access to authorized users.</li>
        </ul>
      </section>

      {/* 10. Interview Questions */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Interview Questions</h2>

        {[
          {
            q: "What is File Validation?",
            a: "It is the process of checking uploaded files to ensure they meet application requirements and security rules.",
          },
          {
            q: "What is a MIME type?",
            a: "It is a media type that describes the format of data, such as image/png or application/pdf.",
          },
          {
            q: "Why is MIME type validation alone not secure?",
            a: "Because MIME type information supplied by the client can be manipulated.",
          },
          {
            q: "What is a file signature?",
            a: "It is a byte pattern in a file that helps identify its actual format.",
          },
          {
            q: "What are magic bytes?",
            a: "Magic bytes are special byte sequences commonly found at the beginning of file formats.",
          },
          {
            q: "What is the purpose of fileFilter() in Multer?",
            a: "It allows the application to accept or reject files based on their metadata during upload processing.",
          },
          {
            q: "How can we prevent oversized file uploads?",
            a: "Configure upload size limits in middleware such as Multer and enforce additional server-side restrictions.",
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

export default FileValidation;