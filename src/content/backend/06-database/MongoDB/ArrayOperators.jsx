import CodeBlock from "../../../../components/common/CodeBlock";

export default function ArrayOperators() {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--primary-color)]">
          MONGODB / 14
        </p>

        <h1 className="text-3xl font-bold">Array Operators</h1>

        <p className="text-base leading-7 text-[var(--text-secondary)]">
          Array operators are used to query and update array fields in MongoDB.
          They help us find documents based on array elements, check array
          conditions, and modify array values.
        </p>
      </div>

      {/* 1. Introduction */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">1. What Are Array Operators?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB supports arrays as field values. Array operators allow us to
          search for documents containing specific elements or matching
          particular array conditions.
        </p>

        <CodeBlock
          code={`db.users.find({
  skills: "JavaScript"
})`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          This query finds users whose skills array contains "JavaScript".
        </p>
      </section>

      {/* 2. Sample Data */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">2. Sample Collection</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Consider the following documents inside the <code>users</code>{" "}
          collection.
        </p>

        <CodeBlock
          code={`[
  {
    name: "Mayur",
    skills: ["HTML", "CSS", "JavaScript"],
    marks: [70, 85, 90]
  },
  {
    name: "Rahul",
    skills: ["JavaScript", "React"],
    marks: [80, 90]
  },
  {
    name: "Aman",
    skills: ["Python", "Java"],
    marks: [60, 75]
  },
  {
    name: "Priya",
    skills: ["HTML", "React", "Node.js"],
    marks: [85, 95, 88]
  }
]`}
        />
      </section>

      {/* 3. Array Operators Overview */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">3. Types of Array Operators</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[550px] text-left text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-4 font-semibold">Operator</th>
                <th className="p-4 font-semibold">Purpose</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[var(--border-color)]">
              {[
                ["$all", "Matches arrays containing all specified elements."],
                ["$elemMatch", "Matches documents where an array element satisfies multiple conditions."],
                ["$size", "Matches arrays with an exact number of elements."],
                ["$push", "Adds an element to an array."],
                ["$addToSet", "Adds an element only if it does not already exist."],
                ["$pop", "Removes the first or last array element."],
                ["$pull", "Removes elements matching a condition."],
                ["$pullAll", "Removes multiple specified values."],
                ["$each", "Applies an array update operation to multiple values."],
                ["$position", "Controls where new elements are inserted using $push and $each."],
                ["$slice", "Limits the number of elements retained when using $push with $each."],
                ["$sort", "Sorts array elements when using $push with $each."],
                ["$[]", "Updates all elements in an array."],
                ["$[identifier]", "Updates array elements matching an array filter."],
              ].map(([operator, purpose]) => (
                <tr key={operator}>
                  <td className="p-4 font-mono text-[var(--primary-color)]">
                    {operator}
                  </td>
                  <td className="p-4 text-[var(--text-secondary)]">{purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. Basic Array Query */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">4. Query Array Elements</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          You can directly provide a value to find documents where an array
          contains that value.
        </p>

        <CodeBlock
          code={`db.users.find({
  skills: "JavaScript"
})`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Returns Mayur and Rahul because their skills arrays contain
          JavaScript.
        </p>

        <h3 className="font-medium">Match Multiple Possible Values</h3>

        <p className="text-sm text-[var(--text-secondary)]">
          You can use the <code>$in</code> comparison operator to match an
          array containing at least one of the specified values.
        </p>

        <CodeBlock
          code={`db.users.find({
  skills: {
    $in: ["React", "Python"]
  }
})`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Returns documents containing either React or Python in their skills
          array.
        </p>
      </section>

      {/* 5. $all */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">5. $all — Match All Elements</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code>$all</code> operator matches documents where an array
          contains every specified element. The elements can appear in any
          order and do not need to be adjacent.
        </p>

        <CodeBlock
          code={`db.users.find({
  skills: {
    $all: ["HTML", "JavaScript"]
  }
})`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Returns users whose skills array contains both HTML and JavaScript.
        </p>

        <h3 className="font-medium">Difference Between $in and $all</h3>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[450px] text-left text-sm">
            <thead className="bg-[var(--bg-secondary)]">
              <tr>
                <th className="p-4">Operator</th>
                <th className="p-4">Requirement</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              <tr>
                <td className="p-4 font-mono text-[var(--primary-color)]">$in</td>
                <td className="p-4 text-[var(--text-secondary)]">
                  At least one value must match.
                </td>
              </tr>
              <tr>
                <td className="p-4 font-mono text-[var(--primary-color)]">$all</td>
                <td className="p-4 text-[var(--text-secondary)]">
                  All specified values must match.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 6. $elemMatch */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">6. $elemMatch — Match Array Elements</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code>$elemMatch</code> operator matches documents where at least
          one array element satisfies all specified conditions.
        </p>

        <h3 className="font-medium">Example 1: Numeric Array</h3>

        <CodeBlock
          code={`db.users.find({
  marks: {
    $elemMatch: {
      $gte: 80,
      $lte: 90
    }
  }
})`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Matches documents containing at least one mark between 80 and 90,
          inclusive.
        </p>

        <h3 className="font-medium">Example 2: Array of Objects</h3>

        <CodeBlock
          code={`{
  name: "Mayur",
  courses: [
    { subject: "Math", marks: 85 },
    { subject: "Science", marks: 60 }
  ]
}`}
        />

        <CodeBlock
          code={`db.students.find({
  courses: {
    $elemMatch: {
      subject: "Math",
      marks: { $gte: 80 }
    }
  }
})`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Matches students who have at least one course object where the
          subject is Math and marks are at least 80.
        </p>
      </section>

      {/* 7. $size */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">7. $size — Match Array Length</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code>$size</code> operator matches documents where an array
          contains exactly the specified number of elements.
        </p>

        <CodeBlock
          code={`db.users.find({
  skills: {
    $size: 2
  }
})`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Returns users whose skills array contains exactly two elements.
        </p>

        <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4">
          <p className="font-medium">Important</p>
          <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
            The query form of <code>$size</code> supports exact array length,
            not greater-than or less-than conditions. For more complex array
            length checks, use aggregation expressions such as{" "}
            <code>$expr</code> with <code>$size</code>.
          </p>
        </div>
      </section>

      {/* 8. $push */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">8. $push — Add Element</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code>$push</code> update operator adds a new element to an
          existing array. If the array field does not exist, MongoDB creates
          it.
        </p>

        <CodeBlock
          code={`db.users.updateOne(
  { name: "Mayur" },
  {
    $push: {
      skills: "Node.js"
    }
  }
)`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Adds Node.js to Mayur's skills array. Duplicate values are allowed.
        </p>
      </section>

      {/* 9. $addToSet */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">9. $addToSet — Add Unique Element</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code>$addToSet</code> operator adds an element only if an equal
          value is not already present in the array.
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

        <p className="text-sm text-[var(--text-secondary)]">
          Adds React only if it is not already present.
        </p>

        <h3 className="font-medium">Add Multiple Unique Elements</h3>

        <CodeBlock
          code={`db.users.updateOne(
  { name: "Mayur" },
  {
    $addToSet: {
      skills: {
        $each: ["Node.js", "MongoDB", "React"]
      }
    }
  }
)`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Adds each missing value without adding duplicates.
        </p>
      </section>

      {/* 10. $pop */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">10. $pop — Remove First or Last Element</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code>$pop</code> operator removes an element from either end of
          an array.
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

        <p className="text-sm text-[var(--text-secondary)]">
          Use 1 to remove the last element and -1 to remove the first element.
        </p>
      </section>

      {/* 11. $pull */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">11. $pull — Remove Matching Elements</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code>$pull</code> operator removes all array elements that match
          a specified value or condition.
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

        <h3 className="font-medium">Remove Using a Condition</h3>

        <CodeBlock
          code={`db.users.updateOne(
  { name: "Mayur" },
  {
    $pull: {
      marks: {
        $lt: 70
      }
    }
  }
)`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Removes all marks that are less than 70.
        </p>
      </section>

      {/* 12. $pullAll */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">12. $pullAll — Remove Multiple Values</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code>$pullAll</code> operator removes all occurrences of the
          specified values from an array.
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

        <p className="text-sm text-[var(--text-secondary)]">
          Removes both HTML and CSS wherever they appear in the skills array.
        </p>
      </section>

      {/* 13. $each */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">13. $each — Add Multiple Elements</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code>$each</code> modifier allows us to apply an array update
          operation to multiple values at once. It is commonly used with{" "}
          <code>$push</code> and <code>$addToSet</code>.
        </p>

        <CodeBlock
          code={`db.users.updateOne(
  { name: "Mayur" },
  {
    $push: {
      skills: {
        $each: ["Node.js", "Express", "MongoDB"]
      }
    }
  }
)`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Adds all three skills to the array.
        </p>
      </section>

      {/* 14. $position */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">14. $position — Insert at Specific Position</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code>$position</code> modifier controls where new elements are
          inserted when using <code>$push</code> with <code>$each</code>.
        </p>

        <CodeBlock
          code={`db.users.updateOne(
  { name: "Mayur" },
  {
    $push: {
      skills: {
        $each: ["React", "Node.js"],
        $position: 0
      }
    }
  }
)`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Inserts the new elements at the beginning of the array.
        </p>
      </section>

      {/* 15. $slice */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">15. $slice — Limit Array Elements</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code>$slice</code> modifier is used with <code>$push</code> and{" "}
          <code>$each</code> to limit the number of elements retained in an
          array after an update.
        </p>

        <CodeBlock
          code={`db.users.updateOne(
  { name: "Mayur" },
  {
    $push: {
      skills: {
        $each: ["Node.js", "MongoDB"],
        $slice: -5
      }
    }
  }
)`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Keeps only the last five elements of the updated array.
        </p>
      </section>

      {/* 16. $sort */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">16. $sort — Sort Array Elements</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code>$sort</code> modifier sorts array elements when used with{" "}
          <code>$push</code> and <code>$each</code>.
        </p>

        <CodeBlock
          code={`db.users.updateOne(
  { name: "Mayur" },
  {
    $push: {
      marks: {
        $each: [75, 95],
        $sort: 1
      }
    }
  }
)`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Adds the values and sorts the marks array in ascending order. Use -1
          for descending order.
        </p>
      </section>

      {/* 17. Positional Operators */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">17. Positional Array Update Operators</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Positional operators allow us to update specific elements inside an
          array instead of replacing the entire array.
        </p>

        <h3 className="font-medium">17.1 $ — First Matching Element</h3>

        <p className="text-sm text-[var(--text-secondary)]">
          The positional <code>$</code> operator updates the first array
          element that matches the query condition.
        </p>

        <CodeBlock
          code={`db.students.updateOne(
  {
    name: "Mayur",
    marks: 85
  },
  {
    $set: {
      "marks.$": 90
    }
  }
)`}
        />

        <h3 className="font-medium">17.2 $[] — All Array Elements</h3>

        <p className="text-sm text-[var(--text-secondary)]">
          The <code>$[]</code> operator updates every element in an array.
        </p>

        <CodeBlock
          code={`db.users.updateOne(
  { name: "Mayur" },
  {
    $set: {
      "marks.$[]": 100
    }
  }
)`}
        />

        <h3 className="font-medium">17.3 $[identifier] — Filtered Elements</h3>

        <p className="text-sm text-[var(--text-secondary)]">
          The filtered positional operator updates only those array elements
          that match the conditions specified in <code>arrayFilters</code>.
        </p>

        <CodeBlock
          code={`db.users.updateOne(
  { name: "Mayur" },
  {
    $set: {
      "marks.$[score]": 100
    }
  },
  {
    arrayFilters: [
      { score: { $gte: 80 } }
    ]
  }
)`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Updates only those marks that are greater than or equal to 80.
        </p>
      </section>

      {/* 18. Node.js */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">18. Using Array Operators in Node.js</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Array operators work the same way when using the MongoDB Node.js
          driver.
        </p>

        <CodeBlock
          code={`const result = await db.collection("users").updateOne(
  { name: "Mayur" },
  {
    $addToSet: {
      skills: "TypeScript"
    }
  }
);

console.log(result.modifiedCount);`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          <code>modifiedCount</code> tells us how many documents were actually
          modified.
        </p>
      </section>

      {/* 19. Important Points */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">19. Important Points</h2>

        <div className="space-y-3">
          {[
            "$all checks whether an array contains all specified values.",
            "$elemMatch checks whether at least one array element satisfies multiple conditions.",
            "$size matches arrays with an exact number of elements.",
            "$push adds elements and allows duplicates.",
            "$addToSet adds an element only if an equal value is not already present.",
            "$pop removes the first or last element.",
            "$pull removes all elements matching a condition.",
            "$pullAll removes multiple specified values.",
            "$each allows multiple values to be added in one operation.",
            "$position, $slice, and $sort are modifiers used with $push and $each.",
            "$[] updates every element, while $[identifier] updates filtered elements.",
            "Array query operators and array update operators serve different purposes.",
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
        <h2 className="text-xl font-semibold">20. Interview Questions</h2>

        <div className="space-y-3">
          {[
            {
              q: "What are array operators in MongoDB?",
              a: "Array operators are used to query and update array fields. They help match array elements, check array conditions, add elements, and remove elements.",
            },
            {
              q: "What is the difference between $in and $all?",
              a: "$in matches an array containing at least one specified value, while $all requires the array to contain every specified value.",
            },
            {
              q: "What is the purpose of $elemMatch?",
              a: "$elemMatch matches documents where at least one array element satisfies all specified conditions.",
            },
            {
              q: "What does $size do?",
              a: "$size matches documents where an array has exactly the specified number of elements.",
            },
            {
              q: "What is the difference between $push and $addToSet?",
              a: "$push adds an element even if it already exists, while $addToSet adds an element only if an equal value is not already present.",
            },
            {
              q: "What is the difference between $pull and $pullAll?",
              a: "$pull removes elements matching a value or condition, while $pullAll removes all occurrences of the specified values.",
            },
            {
              q: "What is the purpose of $each?",
              a: "$each allows multiple values to be processed in one array update operation, commonly with $push and $addToSet.",
            },
            {
              q: "What is the difference between $[] and $[identifier]?",
              a: "$[] updates all array elements, while $[identifier] updates only elements matching the conditions in arrayFilters.",
            },
            {
              q: "What does the $ positional operator do?",
              a: "It updates the first array element that matches the query condition.",
            },
            {
              q: "What is the use of $position?",
              a: "$position controls the insertion position of new elements when using $push with $each.",
            },
            {
              q: "Can MongoDB arrays contain duplicate values?",
              a: "Yes. MongoDB arrays can contain duplicate values. Use $addToSet when you want to prevent adding an equal value that already exists.",
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