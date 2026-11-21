import CodeBlock from "../../../../components/common/CodeBlock";

export default function UpdateOperators() {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--primary-color)]">
          MONGODB / 13
        </p>

        <h1 className="text-3xl font-bold">Update Operators</h1>

        <p className="text-base leading-7 text-[var(--text-secondary)]">
          Update operators are used to modify existing documents in a MongoDB
          collection. They allow us to change field values, increment numbers,
          remove fields, rename fields, and update arrays without replacing the
          entire document.
        </p>
      </div>

      {/* 1. Introduction */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">1. What Are Update Operators?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Update operators are special MongoDB operators that start with{" "}
          <code>$</code>. They tell MongoDB exactly what changes should be
          applied to a document.
        </p>

        <CodeBlock
          code={`db.users.updateOne(
  { name: "Mayur" },
  {
    $set: { age: 20 }
  }
)`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          This query finds Mayur and updates his age to 20 without replacing
          the entire document.
        </p>
      </section>

      {/* 2. Sample Data */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">2. Sample Collection</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Consider the following document inside the <code>users</code>{" "}
          collection.
        </p>

        <CodeBlock
          code={`{
  _id: 1,
  name: "Mayur",
  age: 19,
  salary: 30000,
  skills: ["HTML", "CSS"],
  active: true
}`}
        />
      </section>

      {/* 3. $set */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">3. $set — Set Field Value</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code>$set</code> operator creates a field if it does not exist
          or updates its value if it already exists.
        </p>

        <CodeBlock
          code={`db.users.updateOne(
  { name: "Mayur" },
  {
    $set: {
      age: 20,
      city: "Bhopal"
    }
  }
)`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Updates age and adds a new city field.
        </p>

        <h3 className="font-medium">Updating Nested Fields</h3>

        <p className="text-sm text-[var(--text-secondary)]">
          Use dot notation to update a specific field inside an embedded
          document.
        </p>

        <CodeBlock
          code={`db.users.updateOne(
  { name: "Mayur" },
  {
    $set: {
      "address.city": "Bhopal"
    }
  }
)`}
        />
      </section>

      {/* 4. $unset */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">4. $unset — Remove Field</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code>$unset</code> operator removes a specified field from a
          document.
        </p>

        <CodeBlock
          code={`db.users.updateOne(
  { name: "Mayur" },
  {
    $unset: {
      city: ""
    }
  }
)`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Removes the city field from the matched document. The value assigned
          to $unset does not matter.
        </p>
      </section>

      {/* 5. $inc */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">5. $inc — Increment or Decrement</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code>$inc</code> operator increases or decreases a numeric field
          by a specified amount.
        </p>

        <CodeBlock
          code={`// Increase age by 1
db.users.updateOne(
  { name: "Mayur" },
  {
    $inc: { age: 1 }
  }
);

// Decrease salary by 5000
db.users.updateOne(
  { name: "Mayur" },
  {
    $inc: { salary: -5000 }
  }
)`}
        />

        <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <p className="font-medium">Example</p>
          <p className="mt-2 text-sm text-[var(--text-secondary)]">
            If age is 19 and we use <code>$inc: {"{ age: 1 }"}</code>, the new
            age becomes 20.
          </p>
        </div>
      </section>

      {/* 6. $mul */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">6. $mul — Multiply Field Value</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code>$mul</code> operator multiplies a numeric field by a
          specified value.
        </p>

        <CodeBlock
          code={`db.users.updateOne(
  { name: "Mayur" },
  {
    $mul: { salary: 2 }
  }
)`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          If salary is 30000, it becomes 60000.
        </p>

        <p className="text-sm text-[var(--text-secondary)]">
          If the field does not exist, MongoDB creates it with value 0.
        </p>
      </section>

      {/* 7. $min */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">7. $min — Update Only If Smaller</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code>$min</code> operator updates a field only when the new value
          is less than its current value.
        </p>

        <CodeBlock
          code={`db.users.updateOne(
  { name: "Mayur" },
  {
    $min: { age: 18 }
  }
)`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          If the current age is 19, it becomes 18. If the current age is 17, it
          remains 17.
        </p>
      </section>

      {/* 8. $max */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">8. $max — Update Only If Greater</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code>$max</code> operator updates a field only when the new value
          is greater than its current value.
        </p>

        <CodeBlock
          code={`db.users.updateOne(
  { name: "Mayur" },
  {
    $max: { age: 25 }
  }
)`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          If the current age is 19, it becomes 25. If the current age is 30, it
          remains 30.
        </p>
      </section>

      {/* 9. $rename */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">9. $rename — Rename Field</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code>$rename</code> operator changes the name of an existing
          field.
        </p>

        <CodeBlock
          code={`db.users.updateOne(
  { name: "Mayur" },
  {
    $rename: {
      salary: "monthlySalary"
    }
  }
)`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Renames the salary field to monthlySalary.
        </p>
      </section>

      {/* 10. $currentDate */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">10. $currentDate — Set Current Date</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code>$currentDate</code> operator sets a field to the current
          date. It can store the value as a BSON Date or a BSON Timestamp.
        </p>

        <CodeBlock
          code={`db.users.updateOne(
  { name: "Mayur" },
  {
    $currentDate: {
      updatedAt: true
    }
  }
)`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Creates or updates updatedAt with the current date and time.
        </p>

        <h3 className="font-medium">Using BSON Timestamp</h3>

        <CodeBlock
          code={`db.users.updateOne(
  { name: "Mayur" },
  {
    $currentDate: {
      lastModified: { $type: "timestamp" }
    }
  }
)`}
        />
      </section>

      {/* 11. $setOnInsert */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">11. $setOnInsert — Set Only During Insert</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code>$setOnInsert</code> operator sets field values only when an
          upsert operation inserts a new document. It does nothing when an
          existing document is updated.
        </p>

        <CodeBlock
          code={`db.users.updateOne(
  { email: "mayur@example.com" },
  {
    $set: {
      name: "Mayur"
    },
    $setOnInsert: {
      createdAt: new Date()
    }
  },
  { upsert: true }
)`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          If a matching document exists, its name is updated. If no matching
          document exists, MongoDB inserts a new document and sets createdAt.
        </p>
      </section>

      {/* 12. Array Update Operators */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">12. Array Update Operators</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB also provides special operators for modifying array fields.
          These operators are useful when working with lists such as skills,
          tags, products, or followers.
        </p>

        <h3 className="font-medium">12.1 $push — Add Element</h3>

        <p className="text-sm text-[var(--text-secondary)]">
          Adds a new element to an array. If the array does not exist, MongoDB
          creates it.
        </p>

        <CodeBlock
          code={`db.users.updateOne(
  { name: "Mayur" },
  {
    $push: {
      skills: "JavaScript"
    }
  }
)`}
        />

        <h3 className="font-medium">12.2 $addToSet — Add Unique Element</h3>

        <p className="text-sm text-[var(--text-secondary)]">
          Adds an element only if it does not already exist in the array.
        </p>

        <CodeBlock
          code={`db.users.updateOne(
  { name: "Mayur" },
  {
    $addToSet: {
      skills: "React"
    }
  }
)`}
        />

        <h3 className="font-medium">12.3 $pop — Remove First or Last Element</h3>

        <p className="text-sm text-[var(--text-secondary)]">
          Removes an element from the beginning or end of an array.
        </p>

        <CodeBlock
          code={`// Remove last element
db.users.updateOne(
  { name: "Mayur" },
  {
    $pop: { skills: 1 }
  }
);

// Remove first element
db.users.updateOne(
  { name: "Mayur" },
  {
    $pop: { skills: -1 }
  }
)`}
        />

        <h3 className="font-medium">12.4 $pull — Remove Matching Elements</h3>

        <p className="text-sm text-[var(--text-secondary)]">
          Removes all array elements that match a specified condition.
        </p>

        <CodeBlock
          code={`db.users.updateOne(
  { name: "Mayur" },
  {
    $pull: {
      skills: "CSS"
    }
  }
)`}
        />

        <h3 className="font-medium">12.5 $pullAll — Remove Multiple Values</h3>

        <p className="text-sm text-[var(--text-secondary)]">
          Removes all occurrences of the specified values from an array.
        </p>

        <CodeBlock
          code={`db.users.updateOne(
  { name: "Mayur" },
  {
    $pullAll: {
      skills: ["HTML", "CSS"]
    }
  }
)`}
        />

        <h3 className="font-medium">12.6 $each — Add Multiple Elements</h3>

        <p className="text-sm text-[var(--text-secondary)]">
          The <code>$each</code> modifier allows us to add multiple elements
          using operators such as <code>$push</code> and{" "}
          <code>$addToSet</code>.
        </p>

        <CodeBlock
          code={`db.users.updateOne(
  { name: "Mayur" },
  {
    $push: {
      skills: {
        $each: ["Node.js", "MongoDB"]
      }
    }
  }
)`}
        />
      </section>

      {/* 13. Update Methods */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">13. Methods Used with Update Operators</h2>

        <h3 className="font-medium">13.1 updateOne()</h3>

        <p className="leading-7 text-[var(--text-secondary)]">
          Updates the first document that matches the filter.
        </p>

        <CodeBlock
          code={`db.users.updateOne(
  { name: "Mayur" },
  {
    $set: { age: 21 }
  }
)`}
        />

        <h3 className="font-medium">13.2 updateMany()</h3>

        <p className="leading-7 text-[var(--text-secondary)]">
          Updates all documents that match the filter.
        </p>

        <CodeBlock
          code={`db.users.updateMany(
  { active: true },
  {
    $set: { verified: true }
  }
)`}
        />

        <h3 className="font-medium">13.3 replaceOne()</h3>

        <p className="leading-7 text-[var(--text-secondary)]">
          Replaces the entire document except for its immutable _id field.
          Unlike update operators, it does not modify only selected fields.
        </p>

        <CodeBlock
          code={`db.users.replaceOne(
  { name: "Mayur" },
  {
    name: "Mayur",
    age: 20,
    city: "Bhopal"
  }
)`}
        />

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-2">
          <p className="font-semibold">Important Difference</p>
          <p className="text-sm leading-6 text-[var(--text-secondary)]">
            <code>updateOne()</code> with <code>$set</code> changes only the
            specified fields. <code>replaceOne()</code> replaces the document
            contents with the new document.
          </p>
        </div>
      </section>

      {/* 14. Upsert */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">14. Upsert Option</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Upsert means Update + Insert. When <code>upsert: true</code> is
          provided, MongoDB updates a matching document or inserts a new
          document if no match is found.
        </p>

        <CodeBlock
          code={`db.users.updateOne(
  { email: "new@example.com" },
  {
    $set: {
      name: "New User",
      age: 20
    }
  },
  { upsert: true }
)`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          If the email exists, the matching document is updated. Otherwise,
          MongoDB creates a new document.
        </p>
      </section>

      {/* 15. Important Points */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">15. Important Points</h2>

        <div className="space-y-3">
          {[
            "$set creates or updates a field.",
            "$unset removes a field from a document.",
            "$inc increases or decreases a numeric value.",
            "$mul multiplies a numeric field.",
            "$min and $max update a value only when the new value is smaller or greater.",
            "$rename changes a field name.",
            "$currentDate stores the current date or timestamp.",
            "$setOnInsert works only when an upsert inserts a new document.",
            "$push adds an element, while $addToSet adds only unique elements.",
            "$pull removes matching elements from an array.",
            "updateOne() updates the first matching document, while updateMany() updates all matching documents.",
            "replaceOne() replaces the document instead of updating selected fields.",
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
              q: "What are update operators in MongoDB?",
              a: "Update operators are special operators used to modify existing document fields without replacing the entire document.",
            },
            {
              q: "What is the difference between $set and $unset?",
              a: "$set creates or updates a field, while $unset removes a field from a document.",
            },
            {
              q: "What is the difference between $inc and $mul?",
              a: "$inc adds or subtracts a specified value, while $mul multiplies a numeric field by a specified value.",
            },
            {
              q: "What is the difference between $push and $addToSet?",
              a: "$push always adds an element to an array, while $addToSet adds an element only if it is not already present.",
            },
            {
              q: "What is the difference between $pull and $pop?",
              a: "$pull removes elements matching a specified value or condition, while $pop removes the first or last array element.",
            },
            {
              q: "What is the difference between updateOne() and updateMany()?",
              a: "updateOne() modifies the first matching document, while updateMany() modifies all matching documents.",
            },
            {
              q: "What is upsert in MongoDB?",
              a: "Upsert is an option that updates a matching document or inserts a new one if no document matches the filter.",
            },
            {
              q: "What is the difference between updateOne() and replaceOne()?",
              a: "updateOne() modifies selected fields using update operators, while replaceOne() replaces the entire document contents except for its immutable _id.",
            },
            {
              q: "What does $setOnInsert do?",
              a: "$setOnInsert sets specified fields only when an upsert operation inserts a new document.",
            },
            {
              q: "Can we update nested fields in MongoDB?",
              a: "Yes. We can use dot notation with $set, such as { $set: { 'address.city': 'Bhopal' } }.",
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