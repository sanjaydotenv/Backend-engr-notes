import CodeBlock from "../../../../components/common/CodeBlock";

const DatabaseNormalization = () => {
  return (
    <div className="space-y-8 text-[var(--text-primary)]">

      {/* Header */}
      <div className="space-y-2">
        <p className="text-sm font-semibold tracking-wider text-[var(--accent-color)]">
          DATABASE FUNDAMENTALS / 13
        </p>
        <h1 className="text-3xl font-bold">Database Normalization</h1>
        <p className="text-base leading-7 text-[var(--text-secondary)]">
          Database normalization is the process of organizing data into
          well-structured tables to reduce duplication and improve data
          consistency.
        </p>
      </div>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. Why Do We Need Normalization?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Imagine storing students and their courses in a single table.
          Whenever a student enrolls in multiple courses, their personal
          information is repeated.
        </p>

        <CodeBlock code={`StudentID | StudentName | Course
----------|-------------|--------
1         | Mayur       | React
1         | Mayur       | Node.js
2         | Rahul       | React
2         | Rahul       | MongoDB`} />

        <p className="leading-7 text-[var(--text-secondary)]">
          Here, student names are repeated. This creates unnecessary
          duplication and can cause data management problems.
        </p>

        <h3 className="font-semibold">Problems Without Normalization</h3>
        <div className="space-y-3">
          {[
            ["Data Redundancy", "The same information is stored multiple times."],
            ["Update Anomaly", "Updating repeated information in multiple rows can cause inconsistent data."],
            ["Insert Anomaly", "Sometimes we cannot insert information without adding unrelated data."],
            ["Delete Anomaly", "Deleting one record may accidentally remove other important information."],
          ].map(([title, description]) => (
            <div key={title} className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
              <h3 className="font-semibold text-[var(--accent-color)]">{title}</h3>
              <p className="mt-1 text-sm leading-7 text-[var(--text-secondary)]">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. What Are Normal Forms?</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Normal forms are rules used to organize database tables.
          Each normal form introduces specific requirements for a
          well-structured database.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ["1NF", "First Normal Form", "Atomic values and no repeating groups."],
            ["2NF", "Second Normal Form", "1NF + no partial dependency."],
            ["3NF", "Third Normal Form", "2NF + no transitive dependency."],
            ["BCNF", "Boyce-Codd Normal Form", "Every determinant must be a superkey."],
          ].map(([short, title, description]) => (
            <div key={short} className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
              <span className="text-2xl font-bold text-[var(--accent-color)]">{short}</span>
              <h3 className="mt-1 font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. First Normal Form (1NF)</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          A table is in First Normal Form when each cell contains a single
          atomic value and there are no repeating groups of columns.
        </p>

        <h3 className="font-semibold">Not in 1NF</h3>
        <CodeBlock code={`StudentID | Name  | Courses
----------|-------|----------------
1         | Mayur | React, Node.js
2         | Rahul | MongoDB, SQL`} />

        <p className="text-sm text-[var(--text-secondary)]">
          The Courses column contains multiple values in one cell.
        </p>

        <h3 className="font-semibold">Converted into 1NF</h3>
        <CodeBlock code={`StudentID | Name  | Course
----------|-------|--------
1         | Mayur | React
1         | Mayur | Node.js
2         | Rahul | MongoDB
2         | Rahul | SQL`} />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          Now each cell contains one value. A suitable key, such as the
          combination of StudentID and Course, can uniquely identify each
          enrollment.
        </p>

        <div className="rounded-xl border border-[var(--accent-color)] bg-[var(--accent-background)] p-4">
          <p className="text-sm leading-7 text-[var(--text-secondary)]">
            <strong className="text-[var(--text-primary)]">Remember:</strong>{" "}
            1NF means one value per cell, not one row per entity.
          </p>
        </div>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. Second Normal Form (2NF)</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          A table is in Second Normal Form when:
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-[var(--text-secondary)]">
          <li>It is already in 1NF.</li>
          <li>Every non-key attribute depends on the whole candidate key, not just part of a composite candidate key.</li>
        </ul>

        <p className="leading-7 text-[var(--text-secondary)]">
          This rule mainly matters when a table has a composite candidate key.
        </p>

        <h3 className="font-semibold">Not in 2NF</h3>
        <CodeBlock code={`StudentID | CourseID | StudentName | CourseName
----------|----------|-------------|-----------
1         | 101      | Mayur       | React
1         | 102      | Mayur       | Node.js
2         | 101      | Rahul       | React

Composite Primary Key:
(StudentID, CourseID)`} />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          StudentName depends only on StudentID, and CourseName depends
          only on CourseID. They do not depend on the entire composite key.
          These are partial dependencies.
        </p>

        <h3 className="font-semibold">Converted into 2NF</h3>
        <CodeBlock code={`Students
+-----------+-------------+
| StudentID | StudentName |
+-----------+-------------+
| 1         | Mayur       |
| 2         | Rahul       |
+-----------+-------------+

Courses
+----------+------------+
| CourseID | CourseName |
+----------+------------+
| 101      | React      |
| 102      | Node.js    |
+----------+------------+

Enrollments
+-----------+----------+
| StudentID | CourseID |
+-----------+----------+
| 1         | 101      |
| 1         | 102      |
| 2         | 101      |
+-----------+----------+`} />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          Now student details, course details, and enrollment relationships
          are stored separately.
        </p>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. Third Normal Form (3NF)</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          A table is in Third Normal Form when:
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-[var(--text-secondary)]">
          <li>It is already in 2NF.</li>
          <li>Non-key attributes do not have transitive dependencies on candidate keys.</li>
        </ul>

        <h3 className="font-semibold">Not in 3NF</h3>
        <CodeBlock code={`StudentID | StudentName | DepartmentID | DepartmentName
----------|-------------|--------------|---------------
1         | Mayur       | 10           | Computer Science
2         | Rahul       | 20           | Electronics`} />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          DepartmentName depends on DepartmentID, not directly on
          StudentID. This creates a transitive dependency:
        </p>

        <CodeBlock code={`StudentID -> DepartmentID
DepartmentID -> DepartmentName

Therefore:
StudentID -> DepartmentName`} />

        <h3 className="font-semibold">Converted into 3NF</h3>
        <CodeBlock code={`Students
+-----------+-------------+--------------+
| StudentID | StudentName | DepartmentID |
+-----------+-------------+--------------+
| 1         | Mayur       | 10           |
| 2         | Rahul       | 20           |
+-----------+-------------+--------------+

Departments
+--------------+-------------------+
| DepartmentID | DepartmentName    |
+--------------+-------------------+
| 10           | Computer Science  |
| 20           | Electronics       |
+--------------+-------------------+`} />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          Department information is now stored separately. Students refer
          to departments using DepartmentID.
        </p>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. BCNF (Boyce-Codd Normal Form)</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          BCNF is a stronger version of 3NF. A table is in BCNF when
          every determinant is a superkey.
        </p>
        <p className="leading-7 text-[var(--text-secondary)]">
          A determinant is an attribute or set of attributes that
          functionally determines another attribute.
        </p>

        <h3 className="font-semibold">Example</h3>
        <CodeBlock code={`Student | Subject | Instructor
--------|---------|-----------
Mayur   | DBMS    | Amit
Rahul   | DBMS    | Amit
Mayur   | Java    | Rahul
Rahul   | Java    | Rahul`} />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          Suppose each instructor teaches only one subject, but a subject
          can have multiple instructors. Then:
        </p>

        <CodeBlock code={`Instructor -> Subject

(Student, Instructor) -> Subject`} />

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          Instructor determines Subject, but Instructor is not a
          superkey of this table because multiple students can have
          the same instructor. This violates BCNF.
        </p>

        <p className="text-sm leading-7 text-[var(--text-secondary)]">
          The solution is to separate instructor-subject information
          from student-instructor assignments, preserving the relationships
          between them.
        </p>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Normalization Process</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          A typical normalization process moves through these stages:
        </p>

        <div className="flex flex-col items-center gap-2">
          {[
            ["Unnormalized Data", "Repeated groups and unorganized values"],
            ["1NF", "Atomic values"],
            ["2NF", "Remove partial dependencies"],
            ["3NF", "Remove transitive dependencies"],
            ["BCNF", "Every determinant is a superkey"],
          ].map(([title, description], index) => (
            <div key={title} className="w-full max-w-md">
              <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-3 text-center">
                <h3 className="font-semibold text-[var(--accent-color)]">{title}</h3>
                <p className="mt-1 text-xs text-[var(--text-secondary)]">{description}</p>
              </div>
              {index !== 4 && (
                <div className="py-1 text-center text-xl text-[var(--accent-color)]">↓</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Advantages of Normalization</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ["Less Redundancy", "Reduces unnecessary repeated data."],
            ["Better Consistency", "Helps prevent conflicting copies of information."],
            ["Easier Updates", "Information can be maintained in one appropriate place."],
            ["Clear Relationships", "Tables have well-defined relationships."],
            ["Fewer Anomalies", "Reduces insertion, update, and deletion problems."],
            ["Better Data Design", "Makes database structure easier to understand and maintain."],
          ].map(([title, description]) => (
            <div key={title} className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4">
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Normalization vs Denormalization</h2>
        <p className="leading-7 text-[var(--text-secondary)]">
          Normalization organizes data into related tables to reduce
          duplication. Denormalization intentionally introduces some
          duplication to simplify reads or improve performance in
          particular workloads.
        </p>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[420px] text-left text-sm">
            <thead className="bg-[var(--bg-hover)]">
              <tr>
                <th className="p-3 border-b border-[var(--border-color)]">Feature</th>
                <th className="p-3 border-b border-[var(--border-color)]">Normalization</th>
                <th className="p-3 border-b border-[var(--border-color)]">Denormalization</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Data Duplication", "Reduced", "May increase"],
                ["Storage", "Often less duplicated data", "May require more storage"],
                ["Reads", "May require joins", "Can simplify some reads"],
                ["Writes", "Less repeated data to update", "Duplicated values need synchronization"],
                ["Main Goal", "Data integrity and organization", "Read performance for specific workloads"],
              ].map((row) => (
                <tr key={row[0]}>
                  {row.map((value, index) => (
                    <td key={index} className="p-3 border-b border-[var(--border-color)] text-[var(--text-secondary)]">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rounded-xl border border-[var(--accent-color)] bg-[var(--accent-background)] p-4">
          <p className="text-sm leading-7 text-[var(--text-secondary)]">
            <strong className="text-[var(--text-primary)]">Important:</strong>{" "}
            Normalization is not always about maximizing the number of tables.
            Choose a suitable design based on data integrity, access patterns,
            and application requirements.
          </p>
        </div>
      </section>

      {/* 10 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Important Points</h2>
        <div className="rounded-xl border border-[var(--accent-color)] bg-[var(--accent-background)] p-4">
          <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-[var(--text-secondary)]">
            <li>Normalization reduces unnecessary data duplication.</li>
            <li>1NF requires atomic values and no repeating groups.</li>
            <li>2NF removes partial dependencies on candidate keys.</li>
            <li>3NF removes transitive dependencies of non-key attributes.</li>
            <li>BCNF requires every determinant to be a superkey.</li>
            <li>Normalization helps prevent insertion, update, and deletion anomalies.</li>
            <li>Denormalization can improve read performance in suitable cases.</li>
          </ul>
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
            q: "What is database normalization?",
            a: "Normalization is the process of organizing data into well-structured tables to reduce redundancy and improve data consistency."
          },
          {
            q: "Why is normalization needed?",
            a: "It reduces data duplication and helps prevent insertion, update, and deletion anomalies."
          },
          {
            q: "What is data redundancy?",
            a: "Data redundancy means storing the same information unnecessarily in multiple places."
          },
          {
            q: "What are the three database anomalies?",
            a: "Insertion anomaly, update anomaly, and deletion anomaly."
          },
          {
            q: "What is 1NF?",
            a: "A table is in 1NF when every cell contains a single atomic value and there are no repeating groups."
          },
          {
            q: "What is 2NF?",
            a: "A table is in 2NF when it is in 1NF and every non-key attribute depends on the whole of every candidate key, not just part of a composite key."
          },
          {
            q: "What is partial dependency?",
            a: "Partial dependency occurs when a non-key attribute depends on only part of a composite candidate key."
          },
          {
            q: "What is 3NF?",
            a: "A table is in 3NF when it is in 2NF and has no transitive dependencies of non-key attributes on candidate keys."
          },
          {
            q: "What is transitive dependency?",
            a: "It occurs when a key determines one non-key attribute, which in turn determines another non-key attribute."
          },
          {
            q: "What is BCNF?",
            a: "BCNF is a stronger form of 3NF in which every determinant must be a superkey."
          },
          {
            q: "What is the difference between 3NF and BCNF?",
            a: "BCNF is stricter. Every determinant must be a superkey, whereas 3NF allows certain dependencies when the dependent attribute is a prime attribute."
          },
          {
            q: "What is denormalization?",
            a: "Denormalization intentionally introduces some data duplication to simplify reads or improve performance for specific workloads."
          },
          {
            q: "Does normalization always improve query performance?",
            a: "No. Normalization improves data organization and integrity, but queries may need more joins. Performance depends on the workload and database design."
          },
        ].map((item, index) => (
          <details key={index} className="group overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)]">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 font-medium transition-colors hover:bg-[var(--bg-hover)]">
              <span>{index + 1}. {item.q}</span>
              <span className="shrink-0 text-lg text-[var(--accent-color)] transition-transform group-open:rotate-45">+</span>
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

export default DatabaseNormalization;