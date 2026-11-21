import React from "react";

const WhyNode = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <header className="space-y-3">
        <span className="text-sm text-[var(--accent-color)] font-medium">
          NODE.JS / 02
        </span>

        <h1 className="text-4xl font-bold">Why Node.js?</h1>

        <p className="text-lg text-[var(--text-muted)] leading-relaxed">
          Understanding why developers choose Node.js for backend development.
        </p>
      </header>

      {/* Introduction */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Introduction</h2>

        <p className="text-[var(--text-secondary)] leading-8">
          Backend development ke liye Java, Python, PHP aur Node.js jaisi
          multiple technologies available hain. Lekin Node.js developers ko
          JavaScript use karke backend applications banane ki facility deta hai.
        </p>

        <p className="text-[var(--text-secondary)] leading-8">
          Iske alawa iska non-blocking I/O model aur event-driven architecture
          ise APIs aur real-time applications ke liye ek useful choice banata
          hai.
        </p>
      </section>

      {/* Reasons */}
      <section className="space-y-5">
        <h2 className="text-2xl font-semibold">
          Why Do Developers Choose Node.js?
        </h2>

        {[
          {
            title: "1. JavaScript on Both Frontend and Backend",
            description:
              "Node.js ki help se developers frontend aur backend dono jagah JavaScript use kar sakte hain. Isse different programming languages seekhne ki zarurat kam hoti hai aur code sharing bhi possible hoti hai.",
          },
          {
            title: "2. Non-Blocking I/O",
            description:
              "Jab Node.js database ya filesystem jaise kisi I/O operation ka wait kar raha hota hai, tab JavaScript thread doosre available tasks perform kar sakta hai. Isse application waiting time ko efficiently handle kar pati hai.",
          },
          {
            title: "3. Event-Driven Architecture",
            description:
              "Node.js events ke basis par asynchronous operations handle karta hai. Event Loop callbacks aur tasks ko manage karta hai, jisse application multiple operations efficiently handle kar sakti hai.",
          },
          {
            title: "4. High Performance",
            description:
              "Node.js Google ke V8 JavaScript engine ka use karta hai, jo JavaScript code ko machine code mein compile karke execute karta hai. Iske saath non-blocking I/O bhi application performance mein help karta hai.",
          },
          {
            title: "5. Large Package Ecosystem",
            description:
              "NPM ki help se developers Express, Mongoose aur JWT jaise ready-made packages install kar sakte hain. Isse common functionalities ko zero se build karne ki zarurat nahi padti.",
          },
          {
            title: "6. Cross-Platform Support",
            description:
              "Node.js Windows, macOS aur Linux par run kar sakta hai. Developers ek operating system par application develop karke doosre compatible operating system par deploy kar sakte hain.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-5 space-y-2"
          >
            <h3 className="text-lg font-semibold text-[var(--accent-color)]">
              {item.title}
            </h3>

            <p className="text-[var(--text-secondary)] leading-7">
              {item.description}
            </p>
          </div>
        ))}
      </section>

      {/* Use Cases */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Where is Node.js Used?</h2>

        <div className="grid sm:grid-cols-2 gap-3">
          {[
            "REST APIs and Backend Services",
            "Real-Time Chat Applications",
            "Authentication Systems",
            "Streaming Applications",
            "Microservices",
            "Command-Line Tools",
          ].map((item) => (
            <div
              key={item}
              className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-lg p-4 text-[var(--text-secondary)]"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Limitation */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">
          When Should We Avoid Node.js?
        </h2>

        <p className="text-[var(--text-secondary)] leading-8">
          Node.js CPU-intensive tasks ke liye hamesha best choice nahi hota.
          Heavy calculations agar main JavaScript thread par execute hoti hain,
          toh woh doosre tasks ko block kar sakti hain.
        </p>

        <p className="text-[var(--text-secondary)] leading-8">
          Aise cases mein Worker Threads ya background processing ka use kiya ja
          sakta hai.
        </p>
      </section>

      {/* Key Takeaways */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Key Takeaways</h2>

        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)] leading-7">
          <li>JavaScript can be used for both frontend and backend.</li>
          <li>
            Non-blocking I/O helps handle asynchronous operations efficiently.
          </li>
          <li>Event Loop manages asynchronous tasks.</li>
          <li>NPM provides thousands of reusable packages.</li>
          <li>Node.js is useful for I/O-heavy applications.</li>
          <li>CPU-intensive tasks require special consideration.</li>
        </ul>
      </section>

      {/* Next Topic */}
      <section className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-5 space-y-2">
        <span className="text-sm text-[var(--accent-color)] font-medium">
          NEXT TOPIC
        </span>

        <h3 className="text-xl font-semibold">Node.js vs Browser JavaScript</h3>

        <p className="text-[var(--text-secondary)] leading-7">
          Understand how JavaScript works differently inside a browser and in
          the Node.js runtime environment.
        </p>
      </section>
    </div>
  );
};

export default WhyNode;
