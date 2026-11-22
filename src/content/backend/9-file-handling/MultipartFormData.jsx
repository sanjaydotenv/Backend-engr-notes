import CodeBlock from "../../../components/common/CodeBlock";

function MultipartFormData() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          FILE HANDLING / 02
        </p>
        <h1 className="mt-2 text-3xl font-bold">Multipart Form Data</h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          Multipart Form Data is an HTTP request format used to send files
          and normal form fields together. It allows a browser to upload
          images, documents, videos, and other files to a backend server.
        </p>
      </div>

      {/* 1. What is Multipart */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What is Multipart Form Data?</h2>
        <p className="text-[var(--text-secondary)]">
          Normally, JSON is used to send structured data. But JSON is not
          the usual format for uploading binary files. Multipart Form Data
          divides the request body into multiple parts, where each part can
          contain a text field or a file.
        </p>

        <CodeBlock
          code={`Content-Type: multipart/form-data; boundary=----FormBoundary123

------FormBoundary123
Content-Disposition: form-data; name="username"

Mayur
------FormBoundary123
Content-Disposition: form-data; name="profile"; filename="photo.png"
Content-Type: image/png

[Binary file data]
------FormBoundary123--`}
        />
        <p className="text-sm text-[var(--text-secondary)]">
          A boundary separates each part of the request body. The browser
          generates it automatically.
        </p>
      </section>

      {/* 2. JSON vs Multipart */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. JSON vs Multipart Form Data</h2>
        <div className="overflow-x-auto rounded-lg border border-[var(--border-color)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3 text-left">JSON</th>
                <th className="p-3 text-left">Multipart</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["application/json", "multipart/form-data"],
                ["Best for structured data", "Best for files + form fields"],
                ["Uses JSON format", "Uses separate body parts"],
                ["Commonly parsed by express.json()", "Commonly parsed by Multer"],
              ].map(([json, multipart]) => (
                <tr key={json} className="border-t border-[var(--border-color)]">
                  <td className="p-3 text-[var(--text-secondary)]">{json}</td>
                  <td className="p-3 text-[var(--text-secondary)]">{multipart}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. Frontend Form */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Create a Frontend Form</h2>
        <p className="text-[var(--text-secondary)]">
          In HTML, use the file input to select a file. The form can also
          contain normal fields such as username and email.
        </p>

        <CodeBlock
          code={`function UploadForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" placeholder="Username" />

      <input
        type="file"
        name="profile"
        accept="image/*"
      />

      <button type="submit">Upload</button>
    </form>
  );
}`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          FormData automatically collects the form fields and selected file.
          Do not manually set the Content-Type header when using browser
          FormData with fetch. The browser must add the boundary itself.
        </p>
      </section>

      {/* 4. FormData API */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. JavaScript FormData API</h2>
        <p className="text-[var(--text-secondary)]">
          FormData is a browser API used to create multipart form data
          programmatically.
        </p>

        <CodeBlock
          code={`const formData = new FormData();

formData.append("username", "Mayur");
formData.append("email", "mayur@example.com");

// Add a selected file
const file = document.querySelector("#profile").files[0];

formData.append("profile", file);

console.log(formData.get("username"));
console.log(formData.get("profile"));`}
        />
      </section>

      {/* 5. Backend */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Receive Multipart Data in Node.js</h2>
        <p className="text-[var(--text-secondary)]">
          Express does not parse multipart file uploads by itself.
          A middleware such as Multer is commonly used to process
          multipart/form-data requests.
        </p>

        <CodeBlock
          code={`npm install express multer`}
        />

        <CodeBlock
          code={`import express from "express";
import multer from "multer";

const app = express();

const upload = multer({
  dest: "uploads/",
});

app.post("/api/upload", upload.single("profile"), (req, res) => {
  console.log(req.body); // Normal form fields
  console.log(req.file); // Uploaded file information

  res.json({
    message: "File uploaded successfully",
    user: req.body.username,
    file: req.file,
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          The field name passed to upload.single("profile") must match
          the file input name="profile" on the frontend.
        </p>
      </section>

      {/* 6. Upload Flow */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Multipart Upload Flow</h2>

        <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <div className="space-y-2 text-center text-sm">
            {[
              "User selects a file",
              "Frontend creates FormData",
              "HTTP request sends multipart/form-data",
              "Multer parses the request",
              "Backend receives req.body and req.file",
              "Server validates and stores the file",
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

      {/* 7. Multiple Files */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Upload Multiple Files</h2>
        <p className="text-[var(--text-secondary)]">
          FormData supports multiple files with the same field name.
          Multer provides array and fields methods to receive them.
        </p>

        <CodeBlock
          code={`// Frontend
<input type="file" name="photos" multiple />

// Backend
app.post(
  "/api/photos",
  upload.array("photos", 5),
  (req, res) => {
    console.log(req.files);

    res.json({
      message: "Files received",
      count: req.files.length,
    });
  }
);`}
        />
      </section>

      {/* 8. Important Notes */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Important Points</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>Multipart Form Data can contain text fields and binary files.</li>
          <li>Each part is separated by a boundary.</li>
          <li>FormData is a built-in browser API.</li>
          <li>Express needs multipart parsing middleware for file uploads.</li>
          <li>Multer is commonly used with Express.</li>
          <li>Use matching field names on frontend and backend.</li>
          <li>Do not manually set Content-Type when sending browser FormData.</li>
        </ul>
      </section>

      {/* 9. Security */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Security Best Practices</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>Validate file type on the server, not only in the frontend.</li>
          <li>Set maximum file size and file count limits.</li>
          <li>Generate safe server-side filenames.</li>
          <li>Do not trust the original filename or MIME type alone.</li>
          <li>Store uploads outside publicly executable directories.</li>
          <li>Authenticate users and authorize upload operations.</li>
          <li>Consider malware scanning for untrusted uploads.</li>
        </ul>
      </section>

      {/* 10. Interview */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Interview Questions</h2>

        {[
          {
            q: "What is Multipart Form Data?",
            a: "It is an HTTP request format that allows multiple parts, including text fields and files, to be sent in one request.",
          },
          {
            q: "Why do we use Multipart Form Data?",
            a: "It is commonly used to upload files along with normal form data.",
          },
          {
            q: "What is a boundary?",
            a: "A boundary is a separator used to identify individual parts inside a multipart request body.",
          },
          {
            q: "What is the FormData API?",
            a: "It is a browser API used to create and manage key-value form data that can be sent using fetch or XMLHttpRequest.",
          },
          {
            q: "Can Express directly handle multipart file uploads?",
            a: "Express does not parse multipart file uploads by default. Middleware such as Multer is commonly used.",
          },
          {
            q: "Why should we not manually set Content-Type for browser FormData?",
            a: "The browser needs to generate the multipart boundary and include it in the Content-Type header.",
          },
          {
            q: "What is the difference between upload.single() and upload.array()?",
            a: "upload.single() handles one file, while upload.array() handles multiple files from the same field.",
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

export default MultipartFormData;