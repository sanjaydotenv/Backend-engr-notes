import CodeBlock from "../../../components/common/CodeBlock";

function NodejsFileSystem() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          FILE HANDLING / 01
        </p>
        <h1 className="mt-2 text-3xl font-bold">Node.js File System</h1>
        <p className="mt-3 text-[var(--text-secondary)]">
          Node.js provides a built-in File System (fs) module that allows
          applications to interact with files and directories. We can create,
          read, update, rename, and delete files without installing an
          external package.
        </p>
      </div>

      {/* 1. What is FS */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What is the File System Module?</h2>
        <p className="text-[var(--text-secondary)]">
          The fs module is a core Node.js module. It provides methods to
          perform file and directory operations.
        </p>
        <CodeBlock
          code={`import fs from "node:fs";

// Or import specific methods
import { readFile, writeFile } from "node:fs/promises";`}
        />
        <p className="text-sm text-[var(--text-secondary)]">
          No npm installation is required because fs is built into Node.js.
        </p>
      </section>

      {/* 2. Types */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. Types of File System Operations</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            {
              title: "Synchronous",
              desc: "Blocks execution until the operation finishes.",
            },
            {
              title: "Asynchronous",
              desc: "Does not block the event loop while waiting for I/O.",
            },
            {
              title: "Promises",
              desc: "Uses async/await or .then() for asynchronous operations.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-[var(--border-color)] p-4"
            >
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Create and Write */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Create and Write a File</h2>
        <p className="text-[var(--text-secondary)]">
          The writeFile() method creates a file if it does not exist. If the
          file already exists, its previous content is replaced by default.
        </p>
        <CodeBlock
          code={`import { writeFile } from "node:fs/promises";

await writeFile(
  "message.txt",
  "Hello from Node.js!"
);

console.log("File created successfully");`}
        />
      </section>

      {/* 4. Read */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Read a File</h2>
        <p className="text-[var(--text-secondary)]">
          The readFile() method reads the complete contents of a file.
          Specify an encoding such as utf8 to receive a string instead of
          a Buffer.
        </p>
        <CodeBlock
          code={`import { readFile } from "node:fs/promises";

const data = await readFile("message.txt", "utf8");

console.log(data);`}
        />
      </section>

      {/* 5. Append */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Append Data to a File</h2>
        <p className="text-[var(--text-secondary)]">
          appendFile() adds new content at the end of an existing file.
          If the file does not exist, it creates one.
        </p>
        <CodeBlock
          code={`import { appendFile } from "node:fs/promises";

await appendFile(
  "message.txt",
  "\\nNew content added!"
);

console.log("Content appended");`}
        />
      </section>

      {/* 6. Rename */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Rename a File</h2>
        <p className="text-[var(--text-secondary)]">
          rename() changes the name or moves a file to another location.
        </p>
        <CodeBlock
          code={`import { rename } from "node:fs/promises";

await rename("message.txt", "new-message.txt");

console.log("File renamed successfully");`}
        />
      </section>

      {/* 7. Delete */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Delete a File</h2>
        <p className="text-[var(--text-secondary)]">
          unlink() removes a file from the file system. It does not move
          the file to the Recycle Bin or Trash.
        </p>
        <CodeBlock
          code={`import { unlink } from "node:fs/promises";

await unlink("new-message.txt");

console.log("File deleted permanently");`}
        />
        <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <p className="text-sm text-[var(--text-secondary)]">
            <strong className="text-[var(--text-primary)]">Important:</strong>{" "}
            Node.js fs.unlink() directly removes the file entry. If you need
            Recycle Bin or Trash behavior, use an appropriate operating
            system integration or move the file to a designated trash folder.
          </p>
        </div>
      </section>

      {/* 8. Directories */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Directory Operations</h2>
        <p className="text-[var(--text-secondary)]">
          The fs module also provides methods to create, read, and remove
          directories.
        </p>
        <CodeBlock
          code={`import {
  mkdir,
  readdir,
  rmdir,
  rm
} from "node:fs/promises";

// Create a directory
await mkdir("uploads", { recursive: true });

// Read directory contents
const files = await readdir("uploads");
console.log(files);

// Remove an empty directory
await rmdir("uploads");

// Remove a directory and its contents
await rm("uploads", {
  recursive: true,
  force: true
});`}
        />
        <p className="text-sm text-[var(--text-secondary)]">
          Use rm() with recursive: true carefully because it can remove
          an entire directory and its contents.
        </p>
      </section>

      {/* 9. File Information */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Get File Information</h2>
        <p className="text-[var(--text-secondary)]">
          stat() returns information about a file or directory, such as
          its size, creation time, and modification time.
        </p>
        <CodeBlock
          code={`import { stat } from "node:fs/promises";

const info = await stat("message.txt");

console.log("Size:", info.size, "bytes");
console.log("Is File:", info.isFile());
console.log("Is Directory:", info.isDirectory());
console.log("Created:", info.birthtime);
console.log("Modified:", info.mtime);`}
        />
      </section>

      {/* 10. Synchronous vs Async */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Synchronous vs Asynchronous</h2>
        <div className="overflow-x-auto rounded-lg border border-[var(--border-color)]">
          <table className="w-full text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3 text-left">Method</th>
                <th className="p-3 text-left">Behavior</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["readFileSync()", "Blocks execution"],
                ["readFile()", "Callback-based async"],
                ["fs/promises readFile()", "Promise-based async"],
              ].map(([method, behavior]) => (
                <tr key={method} className="border-t border-[var(--border-color)]">
                  <td className="p-3 font-medium">{method}</td>
                  <td className="p-3 text-[var(--text-secondary)]">{behavior}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <CodeBlock
          code={`import fs from "node:fs";

// Synchronous: blocks execution
const syncData = fs.readFileSync("message.txt", "utf8");

// Callback-based asynchronous
fs.readFile("message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});`}
        />
        <p className="text-sm text-[var(--text-secondary)]">
          For normal server-side file operations, prefer asynchronous
          methods. Synchronous methods are useful in limited situations,
          such as simple startup scripts.
        </p>
      </section>

      {/* 11. File Paths */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">11. Working with File Paths</h2>
        <p className="text-[var(--text-secondary)]">
          Use the path module to safely construct paths across different
          operating systems. In ES modules, import.meta.url helps locate
          the current module.
        </p>
        <CodeBlock
          code={`import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "uploads", "photo.png");

console.log(filePath);`}
        />
      </section>

      {/* 12. Error Handling */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">12. Error Handling</h2>
        <p className="text-[var(--text-secondary)]">
          File operations can fail because a file does not exist, permission
          is denied, or the disk is unavailable. Handle these errors using
          try/catch.
        </p>
        <CodeBlock
          code={`import { readFile } from "node:fs/promises";

try {
  const data = await readFile("message.txt", "utf8");
  console.log(data);
} catch (error) {
  if (error.code === "ENOENT") {
    console.log("File does not exist");
  } else {
    console.error("File operation failed:", error);
  }
}`}
        />
      </section>

      {/* 13. Security */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">13. File System Security</h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
          <li>Never trust file paths received directly from users.</li>
          <li>Validate file names and extensions.</li>
          <li>Prevent path traversal attacks such as ../../secret.txt.</li>
          <li>Restrict file access to authorized users.</li>
          <li>Set appropriate file and directory permissions.</li>
          <li>Do not expose sensitive files through public directories.</li>
          <li>Use file size limits for uploads.</li>
        </ul>
      </section>

      {/* 14. Interview Questions */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">14. Interview Questions</h2>

        {[
          {
            q: "What is the fs module in Node.js?",
            a: "It is a built-in module that provides methods to interact with files and directories.",
          },
          {
            q: "What is the difference between writeFile() and appendFile()?",
            a: "writeFile() replaces existing content by default, while appendFile() adds content at the end.",
          },
          {
            q: "What is the difference between synchronous and asynchronous file operations?",
            a: "Synchronous operations block execution until completion. Asynchronous operations allow other JavaScript work to continue while waiting for file I/O.",
          },
          {
            q: "What is the difference between readFile() and createReadStream()?",
            a: "readFile() reads the complete file into memory, while createReadStream() reads data in chunks.",
          },
          {
            q: "What does unlink() do?",
            a: "It removes a file from the file system. It does not send the file to the Recycle Bin.",
          },
          {
            q: "What is the purpose of stat()?",
            a: "It returns metadata about a file or directory, including size and timestamps.",
          },
          {
            q: "What is the difference between fs and fs/promises?",
            a: "The fs module provides callback-based and synchronous APIs, while fs/promises provides Promise-based file operations.",
          },
          {
            q: "What is path traversal?",
            a: "It is an attack where manipulated file paths are used to access files outside the intended directory.",
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

export default NodejsFileSystem;