import CodeBlock from "../../../../components/common/CodeBlock";

const MatchStage = () => {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <div className="space-y-2">
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          MONGODB AGGREGATION / 01
        </p>

        <h1 className="text-3xl font-bold">$match Stage</h1>

        <p className="text-base leading-7 text-[var(--text-secondary)]">
          The $match stage filters documents based on specified conditions and
          passes only matching documents to the next aggregation stage.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. What is $match?</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          MongoDB provides the <code>$match</code> stage to filter documents
          inside an aggregation pipeline.
        </p>

        <p className="leading-7 text-[var(--text-secondary)]">
          It works similarly to the query object used in the
          <code> find()</code> method.
        </p>

        <CodeBlock
          code={`db.users.aggregate([
  {
    $match: {
      age: 18
    }
  }
]);`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          This query returns only users whose age is exactly 18.
        </p>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. How $match Works</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The $match stage receives documents, checks the specified conditions,
          and forwards only matching documents.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
          <div className="rounded-lg bg-[var(--bg-hover)] p-3 text-center font-semibold">
            All Documents
          </div>

          <div className="py-2 text-center text-[var(--accent-color)]">↓</div>

          <div className="rounded-lg border border-[var(--accent-color)] bg-[var(--bg-hover)] p-3 text-center font-semibold">
            $match: {`{ status: "active" }`}
          </div>

          <div className="py-2 text-center text-[var(--accent-color)]">↓</div>

          <div className="rounded-lg bg-[var(--bg-hover)] p-3 text-center">
            <p className="font-semibold">Matching Documents Only</p>
            <p className="mt-1 text-xs text-[var(--text-secondary)]">
              Documents with status = active
            </p>
          </div>
        </div>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Sample Collection</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Consider the following Users collection:
        </p>

        <CodeBlock
          language="json"
          code={`[
  {
    "_id": 1,
    "name": "Mayur",
    "age": 19,
    "city": "Bhopal",
    "status": "active",
    "salary": 25000
  },
  {
    "_id": 2,
    "name": "Rahul",
    "age": 22,
    "city": "Indore",
    "status": "inactive",
    "salary": 30000
  },
  {
    "_id": 3,
    "name": "Aman",
    "age": 25,
    "city": "Bhopal",
    "status": "active",
    "salary": 40000
  },
  {
    "_id": 4,
    "name": "Rohit",
    "age": 17,
    "city": "Delhi",
    "status": "active",
    "salary": 15000
  }
]`}
        />
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Exact Match</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          We can filter documents by matching an exact field value.
        </p>

        <CodeBlock
          code={`db.users.aggregate([
  {
    $match: {
      city: "Bhopal"
    }
  }
]);`}
        />

        <p className="font-semibold">Result:</p>

        <p className="text-sm text-[var(--text-secondary)]">
          Returns Mayur and Aman because both users belong to Bhopal.
        </p>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Comparison Operators</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          We can use comparison operators inside $match to filter documents
          based on numeric, string, date, and other field values.
        </p>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[430px] text-left text-sm">
            <thead className="bg-[var(--bg-card)]">
              <tr>
                <th className="p-3">Operator</th>
                <th className="p-3">Meaning</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              {[
                ["$eq", "Equal to"],
                ["$ne", "Not equal to"],
                ["$gt", "Greater than"],
                ["$gte", "Greater than or equal to"],
                ["$lt", "Less than"],
                ["$lte", "Less than or equal to"],
                ["$in", "Matches any value in an array"],
                ["$nin", "Does not match any value in an array"],
              ].map(([operator, meaning]) => (
                <tr key={operator}>
                  <td className="p-3 font-mono text-[var(--accent-color)]">
                    {operator}
                  </td>
                  <td className="p-3">{meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="font-semibold">$gt - Greater Than</p>

        <CodeBlock
          code={`db.users.aggregate([
  {
    $match: {
      age: {
        $gt: 18
      }
    }
  }
]);`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Returns users whose age is greater than 18.
        </p>

        <p className="font-semibold">$gte - Greater Than or Equal To</p>

        <CodeBlock
          code={`db.users.aggregate([
  {
    $match: {
      age: {
        $gte: 18
      }
    }
  }
]);`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Returns users whose age is 18 or greater.
        </p>

        <p className="font-semibold">$lt - Less Than</p>

        <CodeBlock
          code={`db.users.aggregate([
  {
    $match: {
      salary: {
        $lt: 30000
      }
    }
  }
]);`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Returns users whose salary is less than 30000.
        </p>

        <p className="font-semibold">$in - Match Multiple Values</p>

        <CodeBlock
          code={`db.users.aggregate([
  {
    $match: {
      city: {
        $in: ["Bhopal", "Indore"]
      }
    }
  }
]);`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Returns users whose city is either Bhopal or Indore.
        </p>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Logical Operators</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Logical operators allow us to combine multiple conditions inside
          $match.
        </p>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[400px] text-left text-sm">
            <thead className="bg-[var(--bg-card)]">
              <tr>
                <th className="p-3">Operator</th>
                <th className="p-3">Meaning</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              {[
                ["$and", "All conditions must be true."],
                ["$or", "At least one condition must be true."],
                ["$not", "Negates a condition."],
                ["$nor", "None of the conditions must be true."],
              ].map(([operator, meaning]) => (
                <tr key={operator}>
                  <td className="p-3 font-mono text-[var(--accent-color)]">
                    {operator}
                  </td>
                  <td className="p-3">{meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="font-semibold">$and</p>

        <CodeBlock
          code={`db.users.aggregate([
  {
    $match: {
      $and: [
        { age: { $gte: 18 } },
        { status: "active" }
      ]
    }
  }
]);`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Both conditions must be true.
        </p>

        <p className="font-semibold">$or</p>

        <CodeBlock
          code={`db.users.aggregate([
  {
    $match: {
      $or: [
        { city: "Bhopal" },
        { salary: { $gt: 30000 } }
      ]
    }
  }
]);`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          A document is returned if at least one condition is true.
        </p>

        <p className="font-semibold">$not</p>

        <CodeBlock
          code={`db.users.aggregate([
  {
    $match: {
      age: {
        $not: {
          $gt: 18
        }
      }
    }
  }
]);`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Matches documents where age does not satisfy the greater-than 18
          condition. Missing fields can also match, so handle them carefully
          when necessary.
        </p>

        <p className="font-semibold">$nor</p>

        <CodeBlock
          code={`db.users.aggregate([
  {
    $match: {
      $nor: [
        { city: "Bhopal" },
        { status: "inactive" }
      ]
    }
  }
]);`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Returns documents that do not satisfy either condition.
        </p>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          7. Multiple Conditions Together
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          We can combine multiple conditions in one $match object. MongoDB
          treats different field conditions as AND by default.
        </p>

        <CodeBlock
          code={`db.users.aggregate([
  {
    $match: {
      age: { $gte: 18 },
      status: "active",
      city: "Bhopal"
    }
  }
]);`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          This returns users who satisfy all three conditions:
        </p>

        <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--text-secondary)]">
          <li>Age must be 18 or greater.</li>
          <li>Status must be active.</li>
          <li>City must be Bhopal.</li>
        </ul>
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. $match with Array Fields</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          We can also filter documents based on values inside arrays.
        </p>

        <p className="font-semibold">Sample Document:</p>

        <CodeBlock
          language="json"
          code={`{
  "name": "Mayur",
  "skills": ["Node.js", "MongoDB", "React"]
}`}
        />

        <p className="font-semibold">Match an Array Element:</p>

        <CodeBlock
          code={`db.users.aggregate([
  {
    $match: {
      skills: "MongoDB"
    }
  }
]);`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Matches users whose skills array contains MongoDB.
        </p>

        <p className="font-semibold">Match All Required Elements:</p>

        <CodeBlock
          code={`db.users.aggregate([
  {
    $match: {
      skills: {
        $all: ["Node.js", "MongoDB"]
      }
    }
  }
]);`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Matches users whose skills array contains both values.
        </p>
      </section>

      {/* 9 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. $match with Date</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          We can filter documents based on date ranges using comparison
          operators.
        </p>

        <CodeBlock
          code={`db.orders.aggregate([
  {
    $match: {
      createdAt: {
        $gte: ISODate("2026-01-01T00:00:00Z"),
        $lt: ISODate("2027-01-01T00:00:00Z")
      }
    }
  }
]);`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          This query returns orders created during the year 2026. Using $lt for
          the next year's start avoids boundary overlap between date ranges.
        </p>
      </section>

      {/* 10 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. $match with $exists</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          The <code>$exists</code> operator checks whether a field exists in a
          document.
        </p>

        <CodeBlock
          code={`db.users.aggregate([
  {
    $match: {
      phone: {
        $exists: true
      }
    }
  }
]);`}
        />

        <p className="text-sm text-[var(--text-secondary)]">
          Returns documents where the phone field exists, even if its value is
          null.
        </p>
      </section>

      {/* 11 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          11. $match in a Complete Pipeline
        </h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          $match is commonly used at the beginning of a pipeline to reduce the
          number of documents processed by later stages.
        </p>

        <CodeBlock
          code={`db.orders.aggregate([
  // 1. Filter delivered orders
  {
    $match: {
      status: "delivered"
    }
  },

  // 2. Group by user
  {
    $group: {
      _id: "$user",
      totalOrders: {
        $sum: 1
      },
      totalAmount: {
        $sum: "$amount"
      }
    }
  },

  // 3. Sort by spending
  {
    $sort: {
      totalAmount: -1
    }
  },

  // 4. Return selected fields
  {
    $project: {
      _id: 0,
      user: "$_id",
      totalOrders: 1,
      totalAmount: 1
    }
  }
]);`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Execution flow:
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 text-center text-sm">
          <div className="rounded-lg bg-[var(--bg-hover)] p-3">$match</div>
          <div className="py-1 text-[var(--accent-color)]">↓</div>
          <div className="rounded-lg bg-[var(--bg-hover)] p-3">$group</div>
          <div className="py-1 text-[var(--accent-color)]">↓</div>
          <div className="rounded-lg bg-[var(--bg-hover)] p-3">$sort</div>
          <div className="py-1 text-[var(--accent-color)]">↓</div>
          <div className="rounded-lg bg-[var(--bg-hover)] p-3">$project</div>
          <div className="py-1 text-[var(--accent-color)]">↓</div>
          <div className="rounded-lg bg-[var(--bg-hover)] p-3 font-semibold text-[var(--accent-color)]">
            Final Result
          </div>
        </div>
      </section>

      {/* 12 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">12. $match Performance</h2>

        <p className="leading-7 text-[var(--text-secondary)]">
          Placing $match early can reduce the number of documents processed by
          later stages.
        </p>

        <p className="font-semibold">Recommended:</p>

        <CodeBlock
          code={`db.orders.aggregate([
  {
    $match: {
      status: "delivered"
    }
  },
  {
    $group: {
      _id: "$user",
      totalAmount: {
        $sum: "$amount"
      }
    }
  }
]);`}
        />

        <p className="font-semibold">Avoid unnecessary processing first:</p>

        <CodeBlock
          code={`db.orders.aggregate([
  {
    $group: {
      _id: "$user",
      totalAmount: {
        $sum: "$amount"
      }
    }
  },
  {
    $match: {
      totalAmount: {
        $gt: 10000
      }
    }
  }
]);`}
        />

        <p className="leading-7 text-[var(--text-secondary)]">
          Important: The second example is not always wrong. Here, $match
          filters a calculated field created by $group, so it cannot simply be
          moved before $group.
        </p>

        <p className="text-sm text-[var(--text-secondary)]">
          MongoDB can use indexes for an initial $match stage when the query and
          index are suitable.
        </p>
      </section>

      {/* 13 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">13. $match vs find()</h2>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[430px] text-left text-sm">
            <thead className="bg-[var(--bg-card)]">
              <tr>
                <th className="p-3">find()</th>
                <th className="p-3">$match</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr>
                <td className="p-3">A collection query method.</td>
                <td className="p-3">An aggregation pipeline stage.</td>
              </tr>
              <tr>
                <td className="p-3">Retrieves matching documents.</td>
                <td className="p-3">Filters documents inside a pipeline.</td>
              </tr>
              <tr>
                <td className="p-3">Used independently.</td>
                <td className="p-3">Can be combined with other stages.</td>
              </tr>
              <tr>
                <td className="p-3">Supports query filtering.</td>
                <td className="p-3">Uses the same query predicate syntax.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Interview Questions */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold">Interview Questions</h2>
          <p className="mt-1 text-sm text-[var(--text-secondary)]">
            Click a question to reveal its answer.
          </p>
        </div>

        {[
          {
            q: "What is the $match stage?",
            a: "$match filters documents based on specified conditions and passes matching documents to the next pipeline stage.",
          },
          {
            q: "What is the difference between $match and find()?",
            a: "find() is a collection query method, whereas $match is a filtering stage inside an aggregation pipeline.",
          },
          {
            q: "Can $match use comparison operators?",
            a: "Yes. It supports operators such as $gt, $gte, $lt, $lte, $eq, $ne, $in, and $nin.",
          },
          {
            q: "Can we use logical operators inside $match?",
            a: "Yes. It supports $and, $or, $not, and $nor.",
          },
          {
            q: "Why should $match usually be placed early?",
            a: "It reduces the number of documents processed by subsequent pipeline stages and can use suitable indexes when it is an initial stage.",
          },
          {
            q: "Can multiple conditions be used inside $match?",
            a: "Yes. Multiple field conditions are combined using AND by default. Explicit logical operators can also be used.",
          },
          {
            q: "Can $match filter array values?",
            a: "Yes. It supports array query conditions such as matching an element directly, using $all, and using $elemMatch.",
          },
          {
            q: "What does $exists do inside $match?",
            a: "It checks whether a specified field exists in a document. A field containing null still exists.",
          },
          {
            q: "Can $match be used after $group?",
            a: "Yes. It can filter grouped results, for example by matching a calculated totalAmount field.",
          },
          {
            q: "Can $match use indexes?",
            a: "Yes. An initial $match stage can use suitable collection indexes to improve filtering performance.",
          },
          {
            q: "Does $match modify documents?",
            a: "No. It only filters documents and passes matching documents to the next stage.",
          },
          {
            q: "What happens when no document matches?",
            a: "The $match stage outputs an empty result set, so later stages receive no documents.",
          },
        ].map((item, index) => (
          <details
            key={index}
            className="group overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)]"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 font-medium transition-colors hover:bg-[var(--bg-hover)]">
              <span>
                {index + 1}. {item.q}
              </span>
              <span className="shrink-0 text-lg text-[var(--accent-color)] transition-transform group-open:rotate-45">
                +
              </span>
            </summary>

            <div className="border-t border-[var(--border-color)] px-4 py-4 text-sm leading-7 text-[var(--text-secondary)]">
              {item.a}
            </div>
          </details>
        ))}
      </section>
    </div>
  );
};

export default MatchStage;
