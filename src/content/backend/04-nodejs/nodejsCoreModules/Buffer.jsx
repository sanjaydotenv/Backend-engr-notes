import React from "react";
import CodeBlock from "../../../../components/common/CodeBlock";

const Buffer = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <header className="space-y-3">
        <span className="text-sm text-[var(--accent-color)] font-medium">
          NODE.JS CORE MODULES / 01
        </span>

        <h1 className="text-4xl font-bold">Buffer in Node.js</h1>

        <p className="text-lg text-[var(--text-secondary)]">
          Understand how Node.js handles binary data using Buffers.
        </p>
      </header>

      {/* What is Buffer */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What is Buffer?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Buffer is a built-in class in Node.js that allows us to work with
          binary data directly in memory.
        </p>

        <p className="text-[var(--text-secondary)] leading-7">
          JavaScript normally works with strings, numbers, objects and arrays.
          But when Node.js handles files, images, videos, network packets or
          other binary data, it needs a way to store and process raw bytes.
          Buffer provides that capability.
        </p>

        <CodeBlock
          code={`const buffer = Buffer.from("Hello");

console.log(buffer);

// Output:
// <Buffer 48 65 6c 6c 6f>`}
        />
      </section>

      {/* Why Buffer */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Why do we need Buffer?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Computers store data in binary form (0s and 1s). When Node.js reads a
          file or receives data over a network, that data may contain raw bytes
          rather than ordinary text.
        </p>

        <p className="text-[var(--text-secondary)] leading-7">
          Buffer makes it possible to store, access and manipulate these bytes
          efficiently.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            ["File Handling", "Reading and writing binary file data."],
            [
              "Network Communication",
              "Processing data received from servers and clients.",
            ],
            ["Images & Videos", "Working with binary media data."],
            ["Streams", "Processing data in smaller chunks."],
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

      {/* Bytes */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What is a Byte?</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          A byte is a group of 8 bits. Each byte can represent a value from 0 to
          255.
        </p>

        <p className="text-[var(--text-secondary)] leading-7">
          Buffer stores data as a sequence of bytes. For example, the text "ABC"
          is represented using three bytes in UTF-8 encoding.
        </p>

        <CodeBlock
          code={`const buffer = Buffer.from("ABC");

console.log(buffer);

// Output:
// <Buffer 41 42 43>

// A = 65 = 0x41
// B = 66 = 0x42
// C = 67 = 0x43`}
        />
      </section>

      {/* Creating Buffer */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Creating Buffers</h2>

        <p className="text-[var(--text-secondary)]">
          Node.js provides different methods to create Buffer instances.
        </p>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold">1. Buffer.from()</h3>

          <p className="text-[var(--text-secondary)]">
            Creates a Buffer from strings, arrays or other supported data.
          </p>

          <CodeBlock
            code={`const buffer = Buffer.from("Hello");

console.log(buffer);
console.log(buffer.toString());

// Output:
// <Buffer 48 65 6c 6c 6f>
// Hello`}
          />

          <h3 className="text-lg font-semibold">2. Buffer.alloc()</h3>

          <p className="text-[var(--text-secondary)]">
            Creates a Buffer of the specified size and initializes every byte to
            zero.
          </p>

          <CodeBlock
            code={`const buffer = Buffer.alloc(5);

console.log(buffer);

// Output:
// <Buffer 00 00 00 00 00>`}
          />

          <h3 className="text-lg font-semibold">3. Buffer.allocUnsafe()</h3>

          <p className="text-[var(--text-secondary)]">
            Creates a Buffer of the specified size without initializing its
            memory. It may contain old data, so initialize it before reading or
            exposing its contents.
          </p>

          <CodeBlock
            code={`const buffer = Buffer.allocUnsafe(5);

// Always initialize before using:
buffer.fill(0);

console.log(buffer);

// Output:
// <Buffer 00 00 00 00 00>`}
          />
        </div>
      </section>

      {/* Buffer Methods */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Important Buffer Methods</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm text-left">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="p-3">Method / Property</th>
                <th className="p-3">Description</th>
              </tr>
            </thead>

            <tbody>
              {[
                ["Buffer.from()", "Creates a Buffer from existing data."],
                ["Buffer.alloc()", "Creates a zero-initialized Buffer."],
                ["Buffer.allocUnsafe()", "Creates an uninitialized Buffer."],
                ["toString()", "Converts Buffer data into a string."],
                ["length", "Returns the number of bytes."],
                ["write()", "Writes data into a Buffer."],
                ["slice()", "Returns a view of a portion of a Buffer."],
                ["subarray()", "Returns a view of a portion of a Buffer."],
                ["copy()", "Copies bytes into another Buffer."],
                ["fill()", "Fills Buffer with a specified value."],
                [
                  "equals()",
                  "Checks whether two Buffers contain the same bytes.",
                ],
                ["Buffer.concat()", "Combines multiple Buffers."],
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

      {/* toString */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Converting Buffer to String</h2>

        <p className="text-[var(--text-secondary)]">
          The toString() method converts Buffer bytes into a string using the
          specified character encoding. UTF-8 is the default encoding.
        </p>

        <CodeBlock
          code={`const buffer = Buffer.from("Hello Node.js");

const result = buffer.toString();

console.log(result);

// Output:
// Hello Node.js`}
        />
      </section>

      {/* Buffer Encoding */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Buffer Encoding</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Encoding defines how characters are converted into bytes and how bytes
          are interpreted as characters.
        </p>

        <CodeBlock
          code={`const text = "Hello";

const utf8Buffer = Buffer.from(text, "utf8");
const hexBuffer = Buffer.from("48656c6c6f", "hex");
const base64Buffer = Buffer.from("SGVsbG8=", "base64");

console.log(utf8Buffer.toString());
console.log(hexBuffer.toString());
console.log(base64Buffer.toString());

// Output:
// Hello
// Hello
// Hello`}
        />

        <div className="p-4 rounded-xl bg-[var(--accent-background)] border border-[var(--border-color)]">
          <p className="font-semibold text-[var(--accent-color)] mb-1">
            Important
          </p>
          <p className="text-sm text-[var(--text-secondary)]">
            Base64 is an encoding format, not encryption. It does not protect
            sensitive data.
          </p>
        </div>
      </section>

      {/* Buffer Length */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Buffer Length</h2>

        <p className="text-[var(--text-secondary)]">
          The length property returns the number of bytes, not necessarily the
          number of characters.
        </p>

        <CodeBlock
          code={`const buffer = Buffer.from("Hello");

console.log(buffer.length);

// Output:
// 5

const emoji = Buffer.from("😊");

console.log(emoji.length);

// Output:
// 4`}
        />
      </section>

      {/* Buffer Copy */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Copying Buffer Data</h2>

        <p className="text-[var(--text-secondary)]">
          The copy() method copies bytes from one Buffer into another Buffer.
        </p>

        <CodeBlock
          code={`const source = Buffer.from("Hello");

const target = Buffer.alloc(5);

source.copy(target);

console.log(target.toString());

// Output:
// Hello`}
        />
      </section>

      {/* Buffer Concat */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Buffer.concat()</h2>

        <p className="text-[var(--text-secondary)]">
          Buffer.concat() combines multiple Buffers into one Buffer.
        </p>

        <CodeBlock
          code={`const first = Buffer.from("Hello ");
const second = Buffer.from("World");

const result = Buffer.concat([first, second]);

console.log(result.toString());

// Output:
// Hello World`}
        />
      </section>

      {/* Memory */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">How Buffer Works in Memory</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Buffer instances represent fixed-length sequences of bytes. Their
          underlying memory is allocated outside the ordinary JavaScript object
          heap, using memory managed by Node.js and its runtime.
        </p>

        <p className="text-[var(--text-secondary)] leading-7">
          This makes Buffer useful for handling binary data without converting
          everything into JavaScript strings or arrays.
        </p>

        <CodeBlock
          code={`const buffer = Buffer.from("ABC");

console.log(buffer[0]); // 65
console.log(buffer[1]); // 66
console.log(buffer[2]); // 67`}
        />
      </section>

      {/* Practical Example */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Practical Example</h2>

        <p className="text-[var(--text-secondary)]">
          Let's create a Buffer, modify its content and convert it back into
          readable text.
        </p>

        <CodeBlock
          code={`const buffer = Buffer.from("Hello");

// Read individual bytes
console.log(buffer[0]);

// Modify a byte
buffer[0] = 74;

// Convert back to string
console.log(buffer.toString());

// Output:
// 72
// Jello`}
        />
      </section>

      {/* Buffer and Array */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Buffer vs Array</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm text-left">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="p-3">Buffer</th>
                <th className="p-3">JavaScript Array</th>
              </tr>
            </thead>

            <tbody className="text-[var(--text-secondary)]">
              {[
                ["Stores bytes", "Stores general JavaScript values"],
                [
                  "Each element is a byte (0–255)",
                  "Can contain different value types",
                ],
                ["Fixed length", "Can grow or shrink"],
                [
                  "Designed for binary data",
                  "Designed for general-purpose data",
                ],
                [
                  "Efficient for byte operations",
                  "More flexible for general operations",
                ],
              ].map(([buffer, array], index) => (
                <tr
                  key={index}
                  className="border-t border-[var(--border-color)]"
                >
                  <td className="p-3">{buffer}</td>
                  <td className="p-3">{array}</td>
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
          <li>Buffer is available globally in Node.js.</li>
          <li>You do not need to import Buffer from a module.</li>
          <li>Buffer stores binary data as bytes.</li>
          <li>Each Buffer byte has a value between 0 and 255.</li>
          <li>Buffer.from() creates a Buffer from existing data.</li>
          <li>Buffer.alloc() creates a zero-initialized Buffer.</li>
          <li>Buffer.allocUnsafe() should be initialized before use.</li>
          <li>
            Buffer is widely used with files, streams and network communication.
          </li>
          <li>Buffer memory is not part of the ordinary V8 JavaScript heap.</li>
        </ul>
      </section>

      {/* Summary */}
      <section className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] space-y-3">
        <h2 className="text-2xl font-semibold">Summary</h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Buffer is an important Node.js feature used to handle binary data. It
          allows applications to read, write, modify and transfer raw bytes
          efficiently. It is especially useful when working with files, images,
          streams and network communication.
        </p>
      </section>
    </div>
  );
};

export default Buffer;
