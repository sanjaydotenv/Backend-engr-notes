import CodeBlock from "../../../components/common/CodeBlock";

export default function WhatisSoftwareTesting() {
  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div>
        <p className="text-sm font-medium text-[var(--accent-color)]">
          SOFTWARE TESTING / 01
        </p>
        <h1 className="text-3xl font-bold mt-2">What Is Software Testing?</h1>
        <p className="text-[var(--text-secondary)] mt-3 leading-7">
          Software Testing is the process of checking an application to find
          bugs, verify functionality, and ensure that the software works as
          expected.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1. Why Do We Need Software Testing?</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          While developing an application, developers write code to implement
          features. However, code can contain mistakes that cause unexpected
          behavior.
        </p>
        <p className="text-[var(--text-secondary)] leading-7">
          Testing helps us identify these problems before users experience
          them.
        </p>

        <CodeBlock code={`// A simple login function

function login(username, password) {
  if (username && password) {
    return "Login Successful";
  }

  return "Invalid Credentials";
}

console.log(login("mayur", "12345"));

// Output:
// Login Successful`} />

        <p className="text-[var(--text-secondary)] leading-7">
          But what happens if the username is empty? What if the password is
          missing? Testing helps us check these different situations.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2. What Does Testing Check?</h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li><strong>Correctness:</strong> Does the application produce the expected result?</li>
          <li><strong>Reliability:</strong> Does the application work consistently?</li>
          <li><strong>Security:</strong> Can unauthorized users access protected features?</li>
          <li><strong>Performance:</strong> Does the application respond efficiently?</li>
          <li><strong>Error Handling:</strong> Does the application handle invalid input and failures correctly?</li>
          <li><strong>Compatibility:</strong> Does the application work in different supported environments?</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3. Manual Testing vs Automated Testing</h2>

        <h3 className="font-semibold text-[var(--accent-color)]">Manual Testing</h3>
        <p className="text-[var(--text-secondary)] leading-7">
          In Manual Testing, a person checks the application by performing
          actions manually without using automated test scripts.
        </p>
        <p className="text-[var(--text-secondary)] leading-7">
          Example: Opening a login page, entering credentials, clicking the
          login button, and checking the result.
        </p>

        <h3 className="font-semibold text-[var(--accent-color)]">Automated Testing</h3>
        <p className="text-[var(--text-secondary)] leading-7">
          In Automated Testing, developers write code that automatically
          executes test cases and checks the expected results.
        </p>

        <CodeBlock code={`function add(a, b) {
  return a + b;
}

// Automated test
const result = add(10, 20);

if (result === 30) {
  console.log("Test Passed");
} else {
  console.log("Test Failed");
}

// Output:
// Test Passed`} />

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="text-left p-3">Manual Testing</th>
                <th className="text-left p-3">Automated Testing</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Performed by a person.</td>
                <td className="p-3">Performed using test scripts and tools.</td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3">Usually slower for repetitive checks.</td>
                <td className="p-3">Useful for repetitive test execution.</td>
              </tr>
              <tr>
                <td className="p-3">Useful for exploratory testing.</td>
                <td className="p-3">Useful for regression and repeated testing.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4. What Is a Test Case?</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          A Test Case is a set of instructions used to verify whether a
          particular feature works correctly.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-3">
          <h3 className="font-semibold text-[var(--accent-color)]">Example: Login Test Cases</h3>
          <div className="space-y-2 text-sm text-[var(--text-secondary)]">
            <div className="rounded-lg border border-[var(--border-color)] p-3">
              <p className="font-medium text-[var(--text-primary)]">Test Case 1</p>
              <p>Valid username and password → Login should succeed.</p>
            </div>
            <div className="rounded-lg border border-[var(--border-color)] p-3">
              <p className="font-medium text-[var(--text-primary)]">Test Case 2</p>
              <p>Invalid password → Login should fail.</p>
            </div>
            <div className="rounded-lg border border-[var(--border-color)] p-3">
              <p className="font-medium text-[var(--text-primary)]">Test Case 3</p>
              <p>Empty credentials → Validation error should appear.</p>
            </div>
            <div className="rounded-lg border border-[var(--border-color)] p-3">
              <p className="font-medium text-[var(--text-primary)]">Test Case 4</p>
              <p>Missing username → Login should fail.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">5. What Is a Bug?</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          A Bug is an error or defect in software that causes the application
          to behave differently from its expected behavior.
        </p>

        <CodeBlock code={`function calculateTotal(price, quantity) {
  return price - quantity; // Bug: wrong operator
}

const total = calculateTotal(100, 2);

console.log(total);

// Actual Output: 98
// Expected Output: 200`} />

        <p className="text-[var(--text-secondary)] leading-7">
          Testing helps identify this bug so the developer can fix it.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">6. Basic Software Testing Process</h2>
        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-3 text-center">
          {[
            "Understand Requirements",
            "Plan Test Cases",
            "Write Test Cases",
            "Execute Tests",
            "Compare Actual and Expected Results",
            "Report and Fix Bugs",
            "Test Again"
          ].map((step, index) => (
            <div key={step}>
              <div className="rounded-lg border border-[var(--border-color)] p-3 text-sm">
                <span className="text-[var(--accent-color)] font-semibold mr-2">
                  {index + 1}.
                </span>
                {step}
              </div>
              {index !== 6 && (
                <div className="text-[var(--accent-color)] py-1">↓</div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7. Software Testing in Backend Development</h2>
        <p className="text-[var(--text-secondary)] leading-7">
          Backend testing verifies that server-side functionality works
          correctly, including APIs, business logic, database operations,
          authentication, and error handling.
        </p>

        <CodeBlock code={`// Example: API endpoint

app.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error"
    });
  }
});`} />

        <p className="text-[var(--text-secondary)] leading-7">
          We can test this API to verify:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)]">
          <li>Does a valid user ID return the correct user?</li>
          <li>Does an invalid or missing user return a 404 response?</li>
          <li>Does the API handle database errors correctly?</li>
          <li>Does the endpoint return the expected response format?</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8. Popular JavaScript Testing Tools</h2>
        <div className="space-y-3">
          {[
            {
              name: "Jest",
              description: "A JavaScript testing framework with assertions, mocks and test utilities."
            },
            {
              name: "Vitest",
              description: "A fast testing framework designed to work especially well with Vite projects."
            },
            {
              name: "Supertest",
              description: "A library for testing HTTP servers and API endpoints."
            },
            {
              name: "Playwright",
              description: "A browser automation framework commonly used for end-to-end testing."
            }
          ].map((tool) => (
            <div
              key={tool.name}
              className="rounded-lg border border-[var(--border-color)] p-4"
            >
              <h3 className="font-semibold">{tool.name}</h3>
              <p className="text-sm text-[var(--text-secondary)] mt-1">
                {tool.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9. Important Testing Terminology</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="text-left p-3">Term</th>
                <th className="text-left p-3">Meaning</th>
              </tr>
            </thead>
            <tbody className="text-[var(--text-secondary)]">
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3 font-medium">Test Case</td>
                <td className="p-3">Instructions to verify a feature.</td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3 font-medium">Bug</td>
                <td className="p-3">An error in software behavior.</td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3 font-medium">Test Suite</td>
                <td className="p-3">A collection of related test cases.</td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3 font-medium">Assertion</td>
                <td className="p-3">A check that verifies an expected result.</td>
              </tr>
              <tr className="border-b border-[var(--border-color)]">
                <td className="p-3 font-medium">Regression Testing</td>
                <td className="p-3">Checking that existing features still work after changes.</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Test Coverage</td>
                <td className="p-3">A measurement of how much code or functionality is covered by tests.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">10. Interview Questions</h2>
        {[
          {
            q: "What is Software Testing?",
            a: "Software Testing is the process of checking an application to identify bugs and verify that it works as expected."
          },
          {
            q: "Why is Software Testing important?",
            a: "It helps find bugs, improve reliability, verify functionality and reduce problems before software reaches users."
          },
          {
            q: "What is the difference between Manual and Automated Testing?",
            a: "Manual testing is performed by a person, while automated testing uses scripts and tools to execute tests."
          },
          {
            q: "What is a Test Case?",
            a: "A Test Case is a set of steps, inputs and expected results used to verify a particular feature."
          },
          {
            q: "What is a Bug?",
            a: "A Bug is a defect that causes software to behave differently from its expected behavior."
          },
          {
            q: "What is a Test Suite?",
            a: "A Test Suite is a collection of related test cases grouped together."
          },
          {
            q: "What is Regression Testing?",
            a: "Regression Testing checks whether existing functionality still works after code changes."
          },
          {
            q: "What is an Assertion?",
            a: "An Assertion checks whether an actual result matches an expected condition."
          },
          {
            q: "What is Backend Testing?",
            a: "Backend Testing verifies server-side logic, APIs, databases, authentication and other backend functionality."
          }
        ].map((item, index) => (
          <details
            key={index}
            className="group rounded-lg border border-[var(--border-color)] p-4"
          >
            <summary className="cursor-pointer font-medium">
              {index + 1}. {item.q}
            </summary>
            <p className="mt-3 text-sm text-[var(--text-secondary)] leading-6">
              {item.a}
            </p>
          </details>
        ))}
      </section>
    </div>
  );
}