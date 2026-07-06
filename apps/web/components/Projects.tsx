"use client";

import { useState } from "react";
import Container from "@/components/Container";

const projects = [
  {
    title: "Moji",
    description:
      "Realtime chat application with authentication, conversations, and instant messaging using Socket.io.",
    programmingLanguage: ["JavaScript", "TypeScript"],
    frameworksAndLibraries: [
      "React",
      "Express",
      "Socket.io",
      "Tailwind",
      "Vite",
    ],
    databases: ["MongoDB"],
    toolsAndOthers: ["Cloudinary", "JWT"],
    github: "https://github.com/Jimmy-02/Moji",
    live: "https://moji-realtime-chat-app-frontend-nine.vercel.app/",
  },
  {
    title: "MoneyGone",
    description:
      "A full-stack e-commerce platform built with the PERN stack, organized as a monorepo. It covers the full shopping experience, product browsing, cart, checkout, and order management along with an admin dashboard for managing products/orders and real-time customer chat support.",
    programmingLanguage: ["JavaScript", "TypeScript"],
    frameworksAndLibraries: [
      "Express",
      "Drizzle ORM",
      "React",
      "TanStack Query",
      "Vite",
      "Tailwind CSS",
      "DaisyUI",
    ],
    databases: ["PostgreSQL"],
    toolsAndOthers: [
      "Docker",
      "Neon",
      "Clerk",
      "ImageKit",
      "Polar",
      "Stream",
      "Sentry",
    ],
    github: "https://github.com/Jimmy-02/MoneyGone",
    live: "https://moneygone.onrender.com/",
  },
  {
    title: "Quiz App",
    description:
      "A quiz application that allows users to practice and test their knowledge with multiple questions.",
    programmingLanguage: ["Dart"],
    frameworksAndLibraries: ["Flutter"],
    databases: ["Cloud Firestore"],
    toolsAndOthers: ["Firebase"],
    github: "https://github.com/Jimmy-02/QuizApp",
  },
  {
    title: "Bubble Tea Management",
    description:
      "A management system for handling orders, products, and operations of a bubble tea shop.",
    programmingLanguage: ["C#"],
    frameworksAndLibraries: ["Windows Forms", "Entity Framework"],
    databases: ["SQL Server"],
    toolsAndOthers: ["Crystal Reports"],
    github: "https://github.com/Jimmy-02/Bubble-Tea-Management",
  },
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <section id="projects" className="relative pt-8 pb-20 md:pt-10 md:pb-24">
      <Container>
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Projects
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            My Work
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {visibleProjects.map((project) => (
            <div key={project.title} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-cyan-400/30">
                <div className="absolute inset-0 bg-linear-to-br from-cyan-400/10 to-emerald-400/10 opacity-0 transition group-hover:opacity-100" />

                <div className="relative z-10 flex h-full flex-col">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/65">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-col gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-sm font-medium text-white">
                        Programming Languages:
                      </p>
                      {project.programmingLanguage.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-sm font-medium text-white">
                        Frameworks and Libraries:
                      </p>
                      {project.frameworksAndLibraries.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-sm font-medium text-white">
                        Databases:
                      </p>
                      {project.databases.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-sm font-medium text-white">
                        Tools and Others:
                      </p>
                      {project.toolsAndOthers.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto pt-6">
                    <div className="flex flex-wrap gap-3">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition hover:opacity-90"
                        >
                          Live
                        </a>
                      )}

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-white/15 px-5 py-2 text-sm text-white transition hover:bg-white/10"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        {projects.length > 2 && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="rounded-full border border-white/15 px-6 py-3 text-sm text-white transition hover:bg-white/10"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}
