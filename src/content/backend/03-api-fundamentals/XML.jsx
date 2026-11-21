const XML = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8 text-[var(--white-color)]">
      {/* Header */}
      <header className="space-y-3">
        <span className="text-sm text-[var(--primary-color)] font-medium">
          API FUNDAMENTALS / 07
        </span>

        <h1 className="text-4xl font-bold">XML</h1>

        <p className="text-lg text-[var(--muted-color)]">
          Understanding how XML structures and exchanges data between different
          applications.
        </p>
      </header>

      {/* Introduction */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What is XML?</h2>

        <p className="text-[var(--muted-color)] leading-7">
          XML (Extensible Markup Language) is a markup language used to store,
          organize, and exchange structured data. It uses custom tags to
          describe data.
        </p>

        <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] space-y-2">
          <p className="text-sm text-[var(--muted-color)]">Example</p>

          <pre className="text-sm text-[var(--primary-color)] overflow-x-auto">
            {`<?xml version="1.0"?>
<user>
  <name>Mayur</name>
  <age>19</age>
  <isDeveloper>true</isDeveloper>
</user>`}
          </pre>
        </div>
      </section>

      {/* Diagram */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">How XML Works</h2>

        <div className="p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
          <div className="flex flex-col items-center gap-3">
            <div className="w-full max-w-xs p-4 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-center">
              <h3 className="font-semibold">Client Application</h3>
              <p className="text-xs text-[var(--muted-color)]">Sends Request</p>
            </div>

            <span className="text-[var(--primary-color)]">↓ XML Data</span>

            <div className="w-full max-w-xs p-4 rounded-xl bg-[var(--primary-soft)] border border-[var(--primary-color)] text-center">
              <h3 className="font-semibold text-[var(--primary-color)]">
                XML Format
              </h3>
              <p className="text-xs text-[var(--muted-color)]">
                Structured Data
              </p>
            </div>

            <span className="text-[var(--primary-color)]">↓</span>

            <div className="w-full max-w-xs p-4 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-color)] text-center">
              <h3 className="font-semibold">Server Application</h3>
              <p className="text-xs text-[var(--muted-color)]">
                Reads and Processes Data
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* XML Structure */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">XML Structure</h2>

        <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] space-y-3">
          <pre className="text-sm text-[var(--primary-color)] overflow-x-auto">
            {`<?xml version="1.0"?>
<user>
  <name>Mayur</name>
  <email>mayur@example.com</email>
</user>`}
          </pre>

          <div className="space-y-2 text-sm text-[var(--muted-color)]">
            <p>
              <strong className="text-[var(--white-color)]">
                XML Declaration:
              </strong>{" "}
              Defines XML version and optional encoding.
            </p>

            <p>
              <strong className="text-[var(--white-color)]">
                Root Element:
              </strong>{" "}
              The single top-level element, here it is {"<user>"}.
            </p>

            <p>
              <strong className="text-[var(--white-color)]">
                Child Elements:
              </strong>{" "}
              Elements nested inside another element.
            </p>

            <p>
              <strong className="text-[var(--white-color)]">
                Text Content:
              </strong>{" "}
              The actual data stored inside elements.
            </p>
          </div>
        </div>
      </section>

      {/* Syntax Rules */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">XML Syntax Rules</h2>

        <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
          <ul className="space-y-2 text-sm text-[var(--muted-color)] list-disc pl-5">
            <li>Every opening tag must have a closing tag.</li>
            <li>XML tags are case-sensitive.</li>
            <li>Every XML document must have exactly one root element.</li>
            <li>Elements must be properly nested.</li>
            <li>Attribute values must be enclosed in quotes.</li>
            <li>Special characters must use entity references when needed.</li>
          </ul>
        </div>
      </section>

      {/* Attributes */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">XML Attributes</h2>

        <p className="text-[var(--muted-color)] leading-7">
          Attributes provide additional information about an XML element. They
          are written inside the opening tag.
        </p>

        <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
          <pre className="text-sm text-[var(--primary-color)] overflow-x-auto">
            {`<user id="101" role="developer">
  <name>Mayur</name>
</user>`}
          </pre>
        </div>
      </section>

      {/* JSON vs XML */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">JSON vs XML</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full text-sm text-left">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-3">Feature</th>
                <th className="p-3">JSON</th>
                <th className="p-3">XML</th>
              </tr>
            </thead>

            <tbody className="text-[var(--muted-color)]">
              {[
                ["Structure", "Key-value pairs", "Tags and elements"],
                ["Syntax", "Lightweight", "More verbose"],
                ["Data Types", "Built-in data types", "Text-based"],
                ["Readability", "Compact", "Descriptive tags"],
                ["Usage", "Modern web APIs", "SOAP and document formats"],
              ].map(([feature, json, xml]) => (
                <tr
                  key={feature}
                  className="border-t border-[var(--border-color)]"
                >
                  <td className="p-3 font-semibold text-[var(--white-color)]">
                    {feature}
                  </td>
                  <td className="p-3">{json}</td>
                  <td className="p-3">{xml}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Use Cases */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Where is XML Used?</h2>

        <div className="grid md:grid-cols-2 gap-3">
          {[
            ["SOAP APIs", "Used as the standard message format in SOAP."],
            ["Configuration Files", "Used in formats like Maven pom.xml."],
            [
              "Document Formats",
              "Used in formats such as SVG and DOCX internals.",
            ],
            [
              "Data Exchange",
              "Used by systems that require XML-based communication.",
            ],
          ].map(([title, description]) => (
            <div
              key={title}
              className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]"
            >
              <h3 className="font-semibold text-[var(--primary-color)]">
                {title}
              </h3>
              <p className="text-sm text-[var(--muted-color)] mt-2">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Important Points */}
      <section className="p-5 rounded-xl bg-[var(--primary-soft)] border border-[var(--border-color)] space-y-3">
        <h2 className="text-lg font-semibold text-[var(--primary-color)]">
          Important Points
        </h2>

        <ul className="space-y-2 text-sm text-[var(--muted-color)] list-disc pl-5">
          <li>XML stands for Extensible Markup Language.</li>
          <li>XML uses custom tags to structure data.</li>
          <li>XML is both human-readable and machine-readable.</li>
          <li>XML tags are case-sensitive.</li>
          <li>Every XML document must have one root element.</li>
          <li>XML supports attributes and nested elements.</li>
          <li>XML is commonly used in SOAP APIs and configuration files.</li>
        </ul>
      </section>

      {/* Summary */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Quick Summary</h2>

        <div className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] text-sm text-[var(--muted-color)] leading-7">
          <strong className="text-[var(--white-color)]">XML:</strong> A markup
          language used to structure and exchange data.
          <br />
          <strong className="text-[var(--white-color)]">Elements:</strong>{" "}
          Define data using opening and closing tags.
          <br />
          <strong className="text-[var(--white-color)]">
            Attributes:
          </strong>{" "}
          Provide additional information about elements.
          <br />
          <strong className="text-[var(--white-color)]">
            JSON vs XML:
          </strong>{" "}
          JSON uses key-value pairs, while XML uses tags.
        </div>
      </section>
    </div>
  );
};

export default XML;
