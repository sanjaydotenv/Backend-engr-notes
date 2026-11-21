import React from "react";

const NodejsArchitecture = () => {
  const components = [
    {
      title: "1. V8 JavaScript Engine",
      description:
        "V8 Google ka JavaScript engine hai. Ye JavaScript code ko execute karta hai aur JIT compilation ki help se machine code mein convert karta hai.",
    },
    {
      title: "2. Event Loop",
      description:
        "Event Loop asynchronous operations ko manage karne mein help karta hai. Jab koi operation complete hota hai, Event Loop uske callback ko execute karne ka mauka deta hai.",
    },
    {
      title: "3. libuv",
      description:
        "libuv Node.js ka important library component hai. Ye Event Loop, Thread Pool aur asynchronous I/O operations ko manage karne mein help karta hai.",
    },
    {
      title: "4. Thread Pool",
      description:
        "Thread Pool background mein kuch time-consuming operations perform karta hai, jaise filesystem operations aur certain cryptographic tasks. Isse main JavaScript thread free reh sakta hai.",
    },
    {
      title: "5. Node.js APIs",
      description:
        "Node.js built-in APIs provide karta hai, jaise fs, http, path aur crypto. Inki help se hum files read kar sakte hain, servers create kar sakte hain aur cryptographic operations perform kar sakte hain.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8 text-[var(--text-primary)]">
      {/* Header */}
      <header className="space-y-3">
        <span className="text-sm text-[var(--accent-color)] font-medium">
          NODE.JS / 03
        </span>

        <h1 className="text-4xl font-bold">Node.js Architecture</h1>

        <p className="text-lg text-[var(--text-muted)] leading-relaxed">
          Understand how Node.js handles JavaScript execution and asynchronous
          operations internally.
        </p>
      </header>

      {/* Introduction */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Introduction</h2>

        <p className="text-[var(--text-secondary)] leading-8">
          Node.js internally multiple components ka use karta hai jo JavaScript
          execute karne aur asynchronous operations handle karne mein help karte
          hain.
        </p>

        <p className="text-[var(--text-secondary)] leading-8">
          Is architecture ki wajah se Node.js I/O operations ke complete hone ka
          wait karte hue JavaScript thread ko block kiye bina doosre tasks
          perform kar sakta hai.
        </p>
      </section>

      {/* Architecture Diagram */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Node.js Architecture Overview
        </h2>

        <p className="text-[var(--text-secondary)] leading-7">
          Neeche simplified diagram mein Node.js ke important components dikhaye
          gaye hain.
        </p>

        <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-5 space-y-3">
          <div className="bg-[var(--accent-background)] border border-[var(--accent-color)] rounded-lg p-4 text-center font-semibold">
            JavaScript Application
          </div>

          <div className="text-center text-[var(--accent-color)]">↓</div>

          <div className="border border-[var(--border-color)] rounded-lg p-4 text-center">
            Node.js APIs
          </div>

          <div className="text-center text-[var(--accent-color)]">↓</div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[var(--bg-hover)] border border-[var(--border-color)] rounded-lg p-4 text-center">
              <p className="font-semibold">V8 Engine</p>
              <p className="text-xs text-[var(--text-muted)] mt-1">
                JavaScript Execution
              </p>
            </div>

            <div className="bg-[var(--bg-hover)] border border-[var(--border-color)] rounded-lg p-4 text-center">
              <p className="font-semibold">libuv</p>
              <p className="text-xs text-[var(--text-muted)] mt-1">
                Event Loop & Thread Pool
              </p>
            </div>
          </div>

          <div className="text-center text-[var(--accent-color)]">↓</div>

          <div className="bg-[var(--bg-hover)] border border-[var(--border-color)] rounded-lg p-4 text-center">
            Operating System
          </div>

          <p className="text-xs text-[var(--text-muted)] leading-6">
            Simplified conceptual diagram. Actual Node.js architecture mein V8,
            Node.js C++ bindings, libuv aur operating system ek doosre ke saath
            interact karte hain.
          </p>
        </div>
      </section>

      {/* Components */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Main Components of Node.js</h2>

        {components.map((item) => (
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

      {/* How it works */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          How Do These Components Work Together?
        </h2>

        <p className="text-[var(--text-secondary)] leading-8">
          Maan lo hamari Node.js application ko ek file read karni hai. Jab hum
          fs.readFile() call karte hain, toh Node.js is operation ko handle
          karta hai aur file read karne ke liye required background mechanism
          use karta hai.
        </p>

        <p className="text-[var(--text-secondary)] leading-8">
          Is waiting time mein JavaScript thread doosre available tasks execute
          kar sakta hai. Jab file read complete ho jati hai, toh uska callback
          execute hone ke liye schedule hota hai.
        </p>

        <pre className="bg-[var(--bg-hover)] border border-[var(--border-color)] rounded-xl p-5 overflow-x-auto text-sm leading-7">
          <code>{`const fs = require("node:fs");


console.log("Start");

fs.readFile("data.txt", "utf8", (err, data) => {
if (err) return console.log(err);

console.log(data);
});

console.log("End");`}</code>{" "}
        </pre>

        <p className="text-[var(--text-secondary)] leading-7">
          Agar file successfully read hoti hai, toh output ka order generally ye
          hoga:
        </p>

        <pre className="bg-[var(--bg-hover)] border border-[var(--border-color)] rounded-xl p-5 text-sm">
          <code>{`Start


End
File Content`}</code>{" "}
        </pre>

        <p className="text-[var(--text-secondary)] leading-7">
          File read hone mein time lag raha hota hai, lekin JavaScript uska wait
          karke block nahi hoti. Isi tarah Node.js asynchronous operations
          handle karta hai.
        </p>
      </section>

      {/* Key Takeaways */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Key Takeaways</h2>

        <ul className="list-disc pl-6 space-y-2 text-[var(--text-secondary)] leading-7">
          <li>V8 executes JavaScript code.</li>
          <li>Event Loop manages asynchronous callbacks.</li>
          <li>libuv provides the Event Loop and Thread Pool implementation.</li>
          <li>Thread Pool handles certain background operations.</li>
          <li>
            Node.js APIs provide access to filesystem, networking, and other
            features.
          </li>
          <li>
            These components work together to handle asynchronous operations
            efficiently.
          </li>
        </ul>
      </section>

      {/* Next Topic */}
      <section className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl p-5 space-y-2">
        <span className="text-sm text-[var(--accent-color)] font-medium">
          NEXT TOPIC
        </span>

        <h3 className="text-xl font-semibold">Single-Threaded Architecture</h3>

        <p className="text-[var(--text-secondary)] leading-7">
          Understand what a thread is, why Node.js is called single-threaded,
          and how it handles multiple operations using its architecture.
        </p>
      </section>
    </div>
  );
};

export default NodejsArchitecture;
