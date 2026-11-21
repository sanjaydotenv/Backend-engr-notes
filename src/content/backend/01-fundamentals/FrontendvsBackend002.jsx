import React from "react";

const FrontendvsBackend002 = () => {
  return (
    <article className="max-w-4xl mx-auto space-y-14 text-[var(--text-primary)]">
      {/* Introduction */}
      <section className="space-y-5">
        <span className="text-sm font-medium tracking-wider text-[var(--primary-color)]">
          BACKEND FUNDAMENTALS / 002
        </span>

        <h1 className="text-4xl font-bold">Frontend vs Backend</h1>

        <p className="leading-8 text-[var(--text-secondary)]">
          When you open a website, you see pages, buttons, images, forms, and
          many other things. You can click buttons, fill out forms, and move
          between different pages.
        </p>

        <p className="leading-8">
          But have you ever wondered what happens when you click the login
          button? Where does your data go? Who checks your password?
        </p>

        <p className="leading-8">
          This is where frontend and backend come into the picture. Both work
          together to make a website or application work properly.
        </p>
      </section>

      {/* Frontend */}
      <section className="space-y-5">
        <h2 className="text-2xl font-semibold">1. What is Frontend?</h2>

        <p className="leading-8">
          Frontend is the part of a website or application that users can see
          and interact with. Everything you see on the screen, such as buttons,
          forms, menus, images, and text, is part of the frontend.
        </p>

        <p className="leading-8">
          For example, when you open a shopping website, the product cards,
          search bar, shopping cart, and checkout page are all part of its
          frontend.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-6 space-y-3">
          <h3 className="font-semibold text-[var(--primary-color)]">
            In simple words
          </h3>

          <p className="leading-7 text-[var(--text-secondary)]">
            Frontend is everything users see and interact with on a website.
          </p>
        </div>
      </section>

      {/* Backend */}
      <section className="space-y-5">
        <h2 className="text-2xl font-semibold">2. What is Backend?</h2>

        <p className="leading-8">
          Backend is the part of an application that works behind the scenes.
          Users usually cannot see it directly.
        </p>

        <p className="leading-8">
          It handles things like user accounts, login checks, database
          operations, orders, payments, and other application tasks.
        </p>

        <p className="leading-8">
          For example, when you log in to a website, the backend checks your
          email and password and decides whether you can access your account.
        </p>

        <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-6 space-y-3">
          <h3 className="font-semibold text-[var(--primary-color)]">
            In simple words
          </h3>

          <p className="leading-7 text-[var(--text-secondary)]">
            Backend handles the work that happens behind the frontend.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section className="space-y-5">
        <h2 className="text-2xl font-semibold">3. Frontend vs Backend</h2>

        <p className="leading-8">
          Now let's compare both sides and understand what each one does.
        </p>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-color)]">
          <table className="w-full min-w-[550px] text-left">
            <thead className="bg-[var(--bg-tertiary)]">
              <tr>
                <th className="p-4 font-semibold">Frontend</th>
                <th className="p-4 font-semibold">Backend</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[var(--border-color)]">
              {[
                ["Works on the user interface.", "Works behind the scenes."],
                [
                  "Users can see and interact with it.",
                  "Users usually cannot see it directly.",
                ],
                ["Displays data to users.", "Processes and manages data."],
                ["Handles user interactions.", "Handles application logic."],
                [
                  "Runs mainly in the browser or client.",
                  "Runs on a server or backend environment.",
                ],
                [
                  "Sends requests to the backend.",
                  "Receives requests and sends responses.",
                ],
                [
                  "Uses HTML, CSS, JavaScript, React.",
                  "Uses Node.js, Express, Python, Java, etc.",
                ],
              ].map(([frontend, backend], index) => (
                <tr key={index}>
                  <td className="p-4 text-sm leading-7 text-[var(--text-secondary)]">
                    {frontend}
                  </td>

                  <td className="p-4 text-sm leading-7 text-[var(--text-secondary)]">
                    {backend}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Real World Example */}
      <section className="space-y-5">
        <h2 className="text-2xl font-semibold">
          4. Let's Understand With a Real Example
        </h2>

        <p className="leading-8">
          Imagine you are using an online shopping website. You want to buy a
          mobile phone.
        </p>

        <p className="leading-8">
          Let's see how the frontend and backend work together:
        </p>

        <div className="space-y-4">
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 space-y-2">
            <span className="text-xs font-semibold tracking-wider text-[var(--primary-color)]">
              FRONTEND
            </span>

            <h3 className="font-semibold">1. You open the website</h3>

            <p className="text-sm leading-7 text-[var(--text-secondary)]">
              You see the product image, name, price, and an Add to Cart button.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 space-y-2">
            <span className="text-xs font-semibold tracking-wider text-[var(--primary-color)]">
              FRONTEND
            </span>

            <h3 className="font-semibold">2. You click Add to Cart</h3>

            <p className="text-sm leading-7 text-[var(--text-secondary)]">
              The frontend collects the required information and sends a request
              to the backend.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--primary-color)] bg-[var(--primary-soft)] p-5 space-y-2">
            <span className="text-xs font-semibold tracking-wider text-[var(--primary-color)]">
              BACKEND
            </span>

            <h3 className="font-semibold">3. Backend receives the request</h3>

            <p className="text-sm leading-7 text-[var(--text-secondary)]">
              It checks the product, user, and other required details.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--primary-color)] bg-[var(--primary-soft)] p-5 space-y-2">
            <span className="text-xs font-semibold tracking-wider text-[var(--primary-color)]">
              BACKEND + DATABASE
            </span>

            <h3 className="font-semibold">4. Product is added to the cart</h3>

            <p className="text-sm leading-7 text-[var(--text-secondary)]">
              The backend saves the cart information in the database.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 space-y-2">
            <span className="text-xs font-semibold tracking-wider text-[var(--primary-color)]">
              FRONTEND
            </span>

            <h3 className="font-semibold">5. You see the result</h3>

            <p className="text-sm leading-7 text-[var(--text-secondary)]">
              The backend sends a response, and the frontend updates the cart on
              your screen.
            </p>
          </div>
        </div>

        <p className="leading-8">
          As you can see, the frontend and backend have different jobs, but both
          are needed to complete the task.
        </p>
      </section>

      {/* Responsibilities */}
      <section className="space-y-5">
        <h2 className="text-2xl font-semibold">5. Main Responsibilities</h2>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-6 space-y-4">
            <h3 className="text-lg font-semibold text-[var(--primary-color)]">
              Frontend
            </h3>

            <ul className="list-disc pl-5 space-y-3 text-sm leading-7 text-[var(--text-secondary)]">
              <li>Building website layouts and pages.</li>
              <li>Creating buttons, forms, and menus.</li>
              <li>Making websites responsive.</li>
              <li>Handling user interactions.</li>
              <li>Showing data received from the backend.</li>
              <li>Sending requests to APIs.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-6 space-y-4">
            <h3 className="text-lg font-semibold text-[var(--primary-color)]">
              Backend
            </h3>

            <ul className="list-disc pl-5 space-y-3 text-sm leading-7 text-[var(--text-secondary)]">
              <li>Creating server-side logic.</li>
              <li>Managing databases.</li>
              <li>Creating APIs.</li>
              <li>Handling login and authentication.</li>
              <li>Processing user requests.</li>
              <li>Protecting application data.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="space-y-5">
        <h2 className="text-2xl font-semibold">6. Technologies Used</h2>

        <p className="leading-8">
          Frontend and backend developers use different technologies to build
          applications. Some technologies can also be used on both sides.
        </p>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="rounded-xl border border-[var(--border-color)] p-6 space-y-4">
            <h3 className="font-semibold text-[var(--primary-color)]">
              Frontend Technologies
            </h3>

            <div className="flex flex-wrap gap-2">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Next.js",
                "Tailwind CSS",
                "Vue",
                "Angular",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] px-3 py-2 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[var(--border-color)] p-6 space-y-4">
            <h3 className="font-semibold text-[var(--primary-color)]">
              Backend Technologies
            </h3>

            <div className="flex flex-wrap gap-2">
              {[
                "Node.js",
                "Express.js",
                "NestJS",
                "Python",
                "Django",
                "Java",
                "MongoDB",
                "PostgreSQL",
                "MySQL",
                "Redis",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] px-3 py-2 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Can they work independently? */}
      <section className="space-y-5">
        <h2 className="text-2xl font-semibold">
          7. Can Frontend and Backend Work Separately?
        </h2>

        <p className="leading-8">
          Yes. Frontend and backend can be developed separately, but they need
          to communicate with each other when the application is running.
        </p>

        <p className="leading-8">
          For example, a frontend developer can build a login page without
          having a working backend. They can use temporary or sample data while
          building the page.
        </p>

        <p className="leading-8">
          Later, the frontend can connect to the real backend API. The backend
          will then handle login requests and return the result.
        </p>
      </section>

      {/* Full Stack */}
      <section className="space-y-5">
        <h2 className="text-2xl font-semibold">
          8. What is a Full Stack Developer?
        </h2>

        <p className="leading-8">
          A full stack developer works on both frontend and backend. They can
          build the user interface, create server-side logic, connect databases,
          and make the complete application work.
        </p>

        <div className="rounded-xl border border-[var(--primary-color)] bg-[var(--primary-soft)] p-6 space-y-3">
          <h3 className="font-semibold text-[var(--primary-color)]">
            Remember
          </h3>

          <p className="leading-7 text-[var(--text-secondary)]">
            Frontend + Backend = Full Stack Development
          </p>
        </div>
      </section>

      {/* Summary */}
      <section className="space-y-5">
        <h2 className="text-2xl font-semibold">9. What Did We Learn?</h2>

        <ul className="list-disc pl-6 space-y-3 leading-7 text-[var(--text-secondary)]">
          <li>Frontend is the part users see and interact with.</li>
          <li>Backend handles the work behind the scenes.</li>
          <li>Frontend sends requests to the backend.</li>
          <li>Backend processes requests and sends responses.</li>
          <li>Both work together to make an application function.</li>
          <li>A full stack developer works on both sides.</li>
        </ul>
      </section>
    </article>
  );
};

export default FrontendvsBackend002;
