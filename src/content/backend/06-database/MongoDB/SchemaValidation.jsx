import CodeBlock from "../../../../components/common/CodeBlock";

export default function SchemaValidation() {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--primary-color)]">
          MONGODB / 18
        </p>

        <h1 className="text-3xl font-bold">Schema Validation</h1>

        <p className="text-base leading-7 text-[var(--text-secondary)]">
          Schema Validation allows MongoDB to enforce rules on documents before
          inserting or updating them. It helps maintain consistent document
          structures and prevents invalid data.
        </p>
      </div>

      {/* 1. Introduction */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">1. What Is Schema Validation?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB is schema-flexible, which means documents in the same
          collection can have different fields and structures by default.
          Schema Validation allows us to define rules that documents must
          follow.
        </p>

        <CodeBlock
          code={`// Document 1
{
  name: "Mayur",
  age: 19
}

// Document 2
{
  name: "Rahul",
  email: "rahul@example.com"
}

// Document 3
{
  name: 123,
  age: "twenty"
}`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Without validation, MongoDB can accept documents with different
          structures and data types. Validation helps control this behavior.
        </p>
      </section>

      {/* 2. Why Schema Validation */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">2. Why Do We Need Schema Validation?</h2>

        <div className="space-y-3">
          {[
            "Prevents invalid data from being inserted.",
            "Ensures fields have the correct data types.",
            "Makes required fields mandatory.",
            "Maintains consistent document structures.",
            "Reduces unexpected errors in applications.",
            "Protects data quality at the database level.",
          ].map((point, index) => (
            <div
              key={index}
              className="flex gap-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-3"
            >
              <span className="font-semibold text-[var(--primary-color)]">
                {index + 1}.
              </span>
              <p className="text-sm leading-6 text-[var(--text-secondary)]">
                {point}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Validation using JSON Schema */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">3. JSON Schema Validation</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB supports JSON Schema validation using the
          <code> $jsonSchema </code> operator. It allows us to define required
          fields, data types, minimum values, maximum values, and other rules.
        </p>

        <CodeBlock
          code={`db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",

      required: ["name", "email", "age"],

      properties: {
        name: {
          bsonType: "string"
        },

        email: {
          bsonType: "string"
        },

        age: {
          bsonType: "int",
          minimum: 18
        }
      }
    }
  }
})`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          This collection requires name, email, and age. Name and email must
          be strings, and age must be an integer greater than or equal to 18.
        </p>
      </section>

      {/* 4. JSON Schema Properties */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">4. Important JSON Schema Properties</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[500px] text-left text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-4 font-semibold">Property</th>
                <th className="p-4 font-semibold">Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              {[
                ["bsonType", "Defines the expected BSON data type."],
                ["required", "Specifies fields that must exist."],
                ["properties", "Defines validation rules for individual fields."],
                ["minimum", "Sets the minimum numeric value."],
                ["maximum", "Sets the maximum numeric value."],
                ["minLength", "Sets the minimum string length."],
                ["maxLength", "Sets the maximum string length."],
                ["pattern", "Validates a string using a regular expression."],
                ["enum", "Restricts a field to specific allowed values."],
                ["items", "Defines validation rules for array elements."],
                ["additionalProperties", "Controls whether extra fields are allowed."],
              ].map(([property, purpose]) => (
                <tr key={property}>
                  <td className="p-4 font-medium text-[var(--primary-color)]">
                    {property}
                  </td>
                  <td className="p-4 text-[var(--text-secondary)]">{purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. BSON Types */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">5. Common BSON Types</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB uses BSON types in schema validation instead of ordinary
          JavaScript type names.
        </p>

        <CodeBlock
          code={`{
  name: {
    bsonType: "string"
  },

  age: {
    bsonType: "int"
  },

  price: {
    bsonType: "double"
  },

  isActive: {
    bsonType: "bool"
  },

  createdAt: {
    bsonType: "date"
  },

  userId: {
    bsonType: "objectId"
  },

  skills: {
    bsonType: "array"
  },

  address: {
    bsonType: "object"
  }
}`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <p className="font-semibold text-[var(--primary-color)]">
            Important
          </p>
          <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
            MongoDB distinguishes between BSON types such as int, long, double,
            and decimal. A JavaScript number may be stored using different
            numeric BSON representations depending on the value and driver.
          </p>
        </div>
      </section>

      {/* 6. Required Fields */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">6. Required Fields</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The required property defines which fields must be present in every
          document.
        </p>

        <CodeBlock
          code={`db.createCollection("students", {
  validator: {
    $jsonSchema: {
      bsonType: "object",

      required: ["name", "email"],

      properties: {
        name: {
          bsonType: "string"
        },

        email: {
          bsonType: "string"
        }
      }
    }
  }
})`}
        />

        <h3 className="font-medium">Valid Document</h3>

        <CodeBlock
          code={`{
  name: "Mayur",
  email: "mayur@example.com"
}`}
        />

        <h3 className="font-medium">Invalid Document</h3>

        <CodeBlock
          code={`{
  name: "Mayur"
}`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          The second document is invalid because the required email field is
          missing.
        </p>
      </section>

      {/* 7. Minimum and Maximum */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">7. Minimum and Maximum Values</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The minimum and maximum properties restrict numeric values.
        </p>

        <CodeBlock
          code={`db.createCollection("products", {
  validator: {
    $jsonSchema: {
      bsonType: "object",

      properties: {
        price: {
          bsonType: "number",
          minimum: 1,
          maximum: 100000
        }
      }
    }
  }
})`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          The price must be a number between 1 and 100000, including both
          boundary values.
        </p>
      </section>

      {/* 8. String Validation */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">8. String Validation</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          We can validate string length and restrict string values using
          minLength, maxLength, pattern, and enum.
        </p>

        <CodeBlock
          code={`db.createCollection("accounts", {
  validator: {
    $jsonSchema: {
      bsonType: "object",

      properties: {
        username: {
          bsonType: "string",
          minLength: 3,
          maxLength: 20
        },

        email: {
          bsonType: "string",
          pattern: "^.+@.+\\\\..+$"
        },

        role: {
          bsonType: "string",
          enum: ["admin", "user", "moderator"]
        }
      }
    }
  }
})`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          The username must contain 3–20 characters, email must match the
          specified pattern, and role must be one of the allowed values.
        </p>
      </section>

      {/* 9. Array Validation */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">9. Array Validation</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The items property defines the expected structure of array elements.
        </p>

        <CodeBlock
          code={`db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",

      properties: {
        skills: {
          bsonType: "array",

          items: {
            bsonType: "string"
          }
        }
      }
    }
  }
})`}
        />

        <h3 className="font-medium">Valid Document</h3>

        <CodeBlock
          code={`{
  skills: ["JavaScript", "React", "Node.js"]
}`}
        />

        <h3 className="font-medium">Invalid Document</h3>

        <CodeBlock
          code={`{
  skills: ["JavaScript", 123, "Node.js"]
}`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          The second document is invalid because every skills array element
          must be a string.
        </p>
      </section>

      {/* 10. Nested Validation */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">10. Nested Document Validation</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          We can also validate embedded documents by defining their fields
          inside the properties of the parent document.
        </p>

        <CodeBlock
          code={`db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",

      required: ["name", "address"],

      properties: {
        name: {
          bsonType: "string"
        },

        address: {
          bsonType: "object",

          required: ["city"],

          properties: {
            city: {
              bsonType: "string"
            },

            pincode: {
              bsonType: "int"
            }
          }
        }
      }
    }
  }
})`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          The address field must be an object, and its city field is required.
          The pincode field, if present, must be an integer.
        </p>
      </section>

      {/* 11. Validation Actions */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">11. Validation Actions</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The validationAction option controls what MongoDB does when a
          document violates validation rules.
        </p>

        <h3 className="font-medium">11.1 error</h3>

        <CodeBlock
          code={`db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name"]
    }
  },
  validationAction: "error"
})`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Rejects inserts and updates that violate validation rules. This is
          the default validation action.
        </p>

        <h3 className="font-medium">11.2 warn</h3>

        <CodeBlock
          code={`db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name"]
    }
  },
  validationAction: "warn"
})`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Allows the operation but logs a warning when validation rules are
          violated.
        </p>
      </section>

      {/* 12. Validation Level */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">12. Validation Level</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The validationLevel option controls which inserts and updates are
          checked against validation rules.
        </p>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[500px] text-left text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-4 font-semibold">Level</th>
                <th className="p-4 font-semibold">Behavior</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[var(--border-color)]">
              <tr>
                <td className="p-4 font-medium text-[var(--primary-color)]">
                  strict
                </td>
                <td className="p-4 text-[var(--text-secondary)]">
                  Applies validation to all inserts and updates.
                </td>
              </tr>

              <tr>
                <td className="p-4 font-medium text-[var(--primary-color)]">
                  moderate
                </td>
                <td className="p-4 text-[var(--text-secondary)]">
                  Applies validation to inserts and updates of documents that
                  already satisfy validation rules. Existing invalid documents
                  can be updated without being required to satisfy the rules.
                </td>
              </tr>

              <tr>
                <td className="p-4 font-medium text-[var(--primary-color)]">
                  off
                </td>
                <td className="p-4 text-[var(--text-secondary)]">
                  No validation is applied.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <CodeBlock
          code={`db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name"]
    }
  },

  validationLevel: "strict",
  validationAction: "error"
})`}
        />
      </section>

      {/* 13. Modify Existing Collection */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">13. Adding Validation to an Existing Collection</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          We can add or modify validation rules on an existing collection
          using the collMod command.
        </p>

        <CodeBlock
          code={`db.runCommand({
  collMod: "users",

  validator: {
    $jsonSchema: {
      bsonType: "object",

      required: ["name", "email"],

      properties: {
        name: {
          bsonType: "string"
        },

        email: {
          bsonType: "string"
        }
      }
    }
  },

  validationLevel: "strict",
  validationAction: "error"
})`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          This command updates the validation rules for the existing users
          collection.
        </p>
      </section>

      {/* 14. Bypass Validation */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">14. Bypassing Schema Validation</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Sometimes administrators need to insert or update documents without
          applying validation rules. MongoDB provides bypassDocumentValidation
          for this purpose.
        </p>

        <CodeBlock
          code={`db.users.insertOne(
  {
    name: 123,
    age: "invalid"
  },
  {
    bypassDocumentValidation: true
  }
)`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          This bypasses document validation for the operation when the
          executing user has the required permission.
        </p>
      </section>

      {/* 15. Important Points */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">15. Important Points</h2>

        <div className="space-y-3">
          {[
            "MongoDB is schema-flexible by default.",
            "$jsonSchema is used to define document validation rules.",
            "bsonType defines the expected BSON data type.",
            "required specifies mandatory fields.",
            "properties defines rules for individual fields.",
            "minimum and maximum restrict numeric values.",
            "minLength and maxLength restrict string length.",
            "pattern validates strings using regular expressions.",
            "enum restricts values to a predefined list.",
            "items validates array elements.",
            "validationAction controls whether invalid writes are rejected or warned about.",
            "validationLevel controls which inserts and updates are validated.",
            "collMod modifies validation rules on existing collections.",
            "bypassDocumentValidation can skip validation when authorized.",
          ].map((point, index) => (
            <div
              key={index}
              className="flex gap-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-3"
            >
              <span className="font-semibold text-[var(--primary-color)]">
                {index + 1}.
              </span>
              <p className="text-sm leading-6 text-[var(--text-secondary)]">
                {point}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Interview Questions */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">16. Interview Questions</h2>

        <div className="space-y-3">
          {[
            {
              q: "What is Schema Validation in MongoDB?",
              a: "Schema Validation is a feature that enforces rules on documents before they are inserted or updated.",
            },
            {
              q: "Why do we need Schema Validation?",
              a: "It helps maintain data consistency, enforce data types, require important fields, and prevent invalid documents.",
            },
            {
              q: "Which operator is used for JSON Schema validation?",
              a: "$jsonSchema is used to define JSON Schema validation rules in MongoDB.",
            },
            {
              q: "What is bsonType?",
              a: "bsonType specifies the expected BSON data type of a field, such as string, int, objectId, array, or object.",
            },
            {
              q: "What is the purpose of required?",
              a: "The required property specifies fields that must be present in a document.",
            },
            {
              q: "What is the difference between validationAction error and warn?",
              a: "error rejects invalid inserts or updates, while warn allows them and logs a warning.",
            },
            {
              q: "What are the validation levels?",
              a: "strict, moderate, and off. They control which inserts and updates are checked.",
            },
            {
              q: "What is the difference between strict and moderate validation?",
              a: "strict validates all inserts and updates. moderate validates inserts and updates of documents that already satisfy the validation rules.",
            },
            {
              q: "How can we add validation to an existing collection?",
              a: "We can use the collMod command to modify the collection's validator.",
            },
            {
              q: "What is enum in Schema Validation?",
              a: "enum restricts a field to a predefined list of allowed values.",
            },
            {
              q: "What is bypassDocumentValidation?",
              a: "It is an option that allows an authorized operation to skip document validation.",
            },
            {
              q: "Does MongoDB enforce Schema Validation by default?",
              a: "No. MongoDB does not enforce custom schema validation rules unless we define a validator for the collection.",
            },
          ].map((item, index) => (
            <details
              key={index}
              className="group rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 font-medium">
                <span>
                  <span className="mr-2 text-[var(--primary-color)]">
                    Q{index + 1}.
                  </span>
                  {item.q}
                </span>

                <span className="text-[var(--primary-color)] transition-transform group-open:rotate-180">
                  ↓
                </span>
              </summary>

              <div className="border-t border-[var(--border-color)] px-4 py-4 text-sm leading-7 text-[var(--text-secondary)]">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}