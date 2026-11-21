import React from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const Path = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <header className="space-y-3">
        <span className="text-sm text-[var(--accent-color)] font-medium">
          NODE.JS CORE MODULES / 02
        </span>

        <h1 className="text-4xl font-bold">Path Module in Node.js</h1>

        <p className="text-lg text-[var(--text-secondary)]">
          Learn how to work with file and directory paths using Node.js.
        </p>
      </header>

      {/* What is Path */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What is the Path Module?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          The path module is a built-in Node.js module that provides utilities
          for working with file and directory paths.
        </p>

        <p className="text-[var(--text-secondary)] leading-7">
          It helps us create, join, normalize, resolve and extract information
          from paths without manually handling platform-specific separators.
        </p>

        <CodeBlock
          code={`const path = require("node:path");

const filePath = path.join("users", "profile", "user.js");

console.log(filePath);

// Windows: users\\profile\\user.js
// Linux/macOS: users/profile/user.js`}
        />
      </section>

      {/* Why Path */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Why do we need Path?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Different operating systems use different path separators. Windows
          commonly uses a backslash (\\), while Linux and macOS use a forward
          slash (/).
        </p>

        <p className="text-[var(--text-secondary)] leading-7">
          The path module handles these differences and makes our code more
          portable across operating systems.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            ["Cross-platform paths", "Handle Windows, Linux and macOS paths."],
            ["Path joining", "Combine directory and file names safely."],
            [
              "Path information",
              "Extract file names, extensions and directories.",
            ],
            ["Path resolution", "Convert relative paths into absolute paths."],
          ].map(([title, description]) => (
            <div
              key={title}
              className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] space-y-2"
            >
              <h3 className="font-semibold text-[var(--accent-color)]">
                {title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Importing */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Importing the Path Module</h2>

        <p className="text-[var(--text-secondary)]">
          Path is a built-in module. We do not need to install it using npm.
        </p>

        <CodeBlock
          code={`// CommonJS
const path = require("node:path");

// ES Modules
import path from "node:path";`}
        />
      </section>

      {/* Separators */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Path Separators</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          A path separator separates directory names in a file path. Node.js
          provides platform-specific separator properties.
        </p>

        <CodeBlock
          code={`const path = require("node:path");

console.log(path.sep);
console.log(path.delimiter);

// Windows:
// path.sep       -> \\
// path.delimiter -> ;

// Linux/macOS:
// path.sep       -> /
// path.delimiter -> :`}
        />

        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>
            <strong>path.sep:</strong> Directory separator.
          </li>
          <li>
            <strong>path.delimiter:</strong> Separator used in environment path
            lists, such as PATH.
          </li>
        </ul>
      </section>

      {/* path.join */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">1. path.join()</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          join() combines multiple path segments into a single normalized path.
          It automatically handles separators and removes unnecessary segments.
        </p>

        <CodeBlock
          code={`const path = require("node:path");

const filePath = path.join(
  "public",
  "images",
  "profile.png"
);

console.log(filePath);

// Output:
// public/images/profile.png (Linux/macOS)
// public\\images\\profile.png (Windows)`}
        />

        <p className="text-[var(--text-secondary)]">
          It is useful when creating paths dynamically.
        </p>
      </section>

      {/* path.resolve */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">2. path.resolve()</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          resolve() converts path segments into an absolute path. It processes
          segments from right to left until it finds an absolute path. If none
          is found, it uses the current working directory.
        </p>

        <CodeBlock
          code={`const path = require("node:path");

const filePath = path.resolve("public", "images", "photo.png");

console.log(filePath);

// Example output:
// /project/public/images/photo.png`}
        />

        <p className="text-[var(--text-secondary)]">
          The actual output depends on the current working directory and
          operating system.
        </p>
      </section>

      {/* join vs resolve */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">
          path.join() vs path.resolve()
        </h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm text-left">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="p-3">path.join()</th>
                <th className="p-3">path.resolve()</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-t border-[var(--border-color)]">
                <td className="p-3">Combines path segments.</td>
                <td className="p-3">Creates an absolute path.</td>
              </tr>
              <tr className="border-t border-[var(--border-color)]">
                <td className="p-3">
                  Does not automatically make a relative path absolute.
                </td>
                <td className="p-3">
                  Uses the current working directory if needed.
                </td>
              </tr>
              <tr className="border-t border-[var(--border-color)]">
                <td className="p-3">Useful for building paths.</td>
                <td className="p-3">Useful for resolving paths.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <CodeBlock
          code={`const path = require("node:path");

console.log(path.join("folder", "file.txt"));
// folder/file.txt (Linux/macOS)

console.log(path.resolve("folder", "file.txt"));
// /current/working/directory/folder/file.txt`}
        />
      </section>

      {/* basename */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">3. path.basename()</h2>

        <p className="text-[var(--text-secondary)]">
          basename() returns the last portion of a path, usually the file name.
        </p>

        <CodeBlock
          code={`const path = require("node:path");

const filePath = "/users/profile/avatar.png";

console.log(path.basename(filePath));

// Output:
// avatar.png`}
        />

        <p className="text-[var(--text-secondary)]">
          We can also remove a matching suffix.
        </p>

        <CodeBlock
          code={`const path = require("node:path");

console.log(path.basename("/users/profile/avatar.png", ".png"));

// Output:
// avatar`}
        />
      </section>

      {/* dirname */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">4. path.dirname()</h2>

        <p className="text-[var(--text-secondary)]">
          dirname() returns the directory portion of a path.
        </p>

        <CodeBlock
          code={`const path = require("node:path");

const filePath = "/users/profile/avatar.png";

console.log(path.dirname(filePath));

// Output:
// /users/profile`}
        />
      </section>

      {/* extname */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">5. path.extname()</h2>

        <p className="text-[var(--text-secondary)]">
          extname() returns the extension of a file, including the dot.
        </p>

        <CodeBlock
          code={`const path = require("node:path");

console.log(path.extname("photo.png"));
console.log(path.extname("document.pdf"));
console.log(path.extname("index.js"));

// Output:
// .png
// .pdf
// .js`}
        />

        <p className="text-sm text-[var(--text-muted)]">
          Note: A file name without an extension returns an empty string. For
          example, path.extname("README") returns "".
        </p>
      </section>

      {/* parse */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">6. path.parse()</h2>

        <p className="text-[var(--text-secondary)]">
          parse() breaks a path into an object containing its root, directory,
          base name, extension and name.
        </p>

        <CodeBlock
          code={`const path = require("node:path");

const result = path.parse("/users/profile/avatar.png");

console.log(result);

// Example on POSIX:
// {
//   root: "/",
//   dir: "/users/profile",
//   base: "avatar.png",
//   ext: ".png",
//   name: "avatar"
// }`}
        />
      </section>

      {/* format */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">7. path.format()</h2>

        <p className="text-[var(--text-secondary)]">
          format() performs the opposite of parse(). It creates a path string
          from a path object.
        </p>

        <CodeBlock
          code={`const path = require("node:path");

const filePath = path.format({
  dir: "/users/profile",
  name: "avatar",
  ext: ".png",
});

console.log(filePath);

// Output:
// /users/profile/avatar.png`}
        />
      </section>

      {/* normalize */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">8. path.normalize()</h2>

        <p className="text-[var(--text-secondary)]">
          normalize() resolves unnecessary separators and dot segments such as .
          and .. in a path.
        </p>

        <CodeBlock
          code={`const path = require("node:path");

const result = path.normalize("/users//profile/../images");

console.log(result);

// Output:
// /users/images`}
        />
      </section>

      {/* isAbsolute */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">9. path.isAbsolute()</h2>

        <p className="text-[var(--text-secondary)]">
          isAbsolute() checks whether a path is absolute for the current
          operating system.
        </p>

        <CodeBlock
          code={`const path = require("node:path");

console.log(path.isAbsolute("/users/profile"));
console.log(path.isAbsolute("users/profile"));

// POSIX output:
// true
// false`}
        />
      </section>

      {/* Relative */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">10. path.relative()</h2>

        <p className="text-[var(--text-secondary)]">
          relative() calculates the relative path from one location to another.
        </p>

        <CodeBlock
          code={`const path = require("node:path");

const result = path.relative(
  "/users/profile",
  "/users/documents/file.txt"
);

console.log(result);

// Output:
// ../documents/file.txt (POSIX)`}
        />
      </section>

      {/* Absolute and Relative */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">
          Absolute Path vs Relative Path
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] space-y-2">
            <h3 className="font-semibold text-[var(--accent-color)]">
              Absolute Path
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              A complete path starting from the filesystem root or an
              operating-system-specific absolute location.
            </p>
            <CodeBlock code={`/home/user/project/index.js`} />
          </div>

          <div className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] space-y-2">
            <h3 className="font-semibold text-[var(--accent-color)]">
              Relative Path
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              A path interpreted relative to a reference directory.
            </p>
            <CodeBlock code={`./src/index.js`} />
          </div>
        </div>
      </section>

      {/* __dirname and cwd */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">__dirname vs process.cwd()</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Both are useful when working with paths, but they represent different
          locations.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>
            <strong>__dirname:</strong> Directory containing the current
            CommonJS module.
          </li>
          <li>
            <strong>process.cwd():</strong> Current working directory of the
            Node.js process.
          </li>
        </ul>

        <CodeBlock
          code={`// CommonJS
const path = require("node:path");

console.log(__dirname);
console.log(process.cwd());

const filePath = path.join(__dirname, "uploads", "image.png");

console.log(filePath);`}
        />

        <div className="p-4 rounded-xl border border-[var(--border-color)] bg-[var(--accent-background)]">
          <p className="font-semibold text-[var(--accent-color)] mb-1">
            Important
          </p>
          <p className="text-sm text-[var(--text-secondary)]">
            __dirname is not available directly in native ES Modules. In ESM,
            you can use fileURLToPath(import.meta.url) with path.dirname() to
            get the current module directory.
          </p>
        </div>

        <CodeBlock
          code={`// ES Modules
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname);`}
        />
      </section>

      {/* Practical Example */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Practical Backend Example</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Suppose we are building an Express application and want to create a
          path for an uploaded file.
        </p>

        <CodeBlock
          code={`const path = require("node:path");

const uploadDirectory = path.join(__dirname, "uploads");

const fileName = "profile.png";

const filePath = path.join(uploadDirectory, fileName);

console.log(filePath);

// Example:
// /project/uploads/profile.png`}
        />

        <p className="text-[var(--text-secondary)]">
          This makes path construction easier and avoids manually writing
          operating-system-specific separators.
        </p>
      </section>

      {/* path.win32 and posix */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">path.win32 and path.posix</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Node.js also provides win32 and posix implementations. They allow us
          to work with Windows or POSIX-style paths regardless of the operating
          system currently running Node.js.
        </p>

        <CodeBlock
          code={`const path = require("node:path");

const windowsPath = path.win32.join("users", "admin", "file.txt");

const posixPath = path.posix.join("users", "admin", "file.txt");

console.log(windowsPath);
// users\\admin\\file.txt

console.log(posixPath);
// users/admin/file.txt`}
        />
      </section>

      {/* Important Methods */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Important Path Methods</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm text-left">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="p-3">Method / Property</th>
                <th className="p-3">Purpose</th>
              </tr>
            </thead>

            <tbody>
              {[
                ["path.join()", "Combines path segments."],
                ["path.resolve()", "Creates an absolute path."],
                ["path.basename()", "Returns the final path component."],
                ["path.dirname()", "Returns the directory name."],
                ["path.extname()", "Returns the file extension."],
                ["path.parse()", "Converts a path into an object."],
                ["path.format()", "Converts an object into a path."],
                ["path.normalize()", "Normalizes a path."],
                ["path.isAbsolute()", "Checks whether a path is absolute."],
                ["path.relative()", "Calculates a relative path."],
                ["path.sep", "Returns the platform path separator."],
                ["path.delimiter", "Returns the platform path-list delimiter."],
              ].map(([method, description]) => (
                <tr
                  key={method}
                  className="border-t border-[var(--border-color)]"
                >
                  <td className="p-3 font-mono text-[var(--accent-color)]">
                    {method}
                  </td>
                  <td className="p-3 text-[var(--text-secondary)]">
                    {description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Important Notes */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Important Things to Remember</h2>

        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>Path is a built-in Node.js module.</li>
          <li>You do not need to install it using npm.</li>
          <li>Use path.join() to combine path segments.</li>
          <li>Use path.resolve() when you need an absolute path.</li>
          <li>Use path.basename() to get the file name.</li>
          <li>Use path.extname() to get the file extension.</li>
          <li>Use path.dirname() to get the directory.</li>
          <li>Use path.sep for platform-specific separators.</li>
          <li>
            Path methods manipulate path strings; they do not read or create
            files.
          </li>
        </ul>
      </section>

      {/* Summary */}
      <section className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] space-y-3">
        <h2 className="text-2xl font-semibold">Summary</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          The Node.js Path module provides utilities for creating, resolving and
          analyzing file paths. It makes backend applications cross-platform and
          helps manage files and directories safely and consistently.
        </p>
      </section>
    </div>
  );
};

export default Path;
