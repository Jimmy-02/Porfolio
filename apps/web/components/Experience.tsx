"use client";

import Container from "@/components/Container";
import { motion } from "framer-motion";

type SubExperience = {
  title: string;
  period: string;
  description: string[];
};

type TimelineItem = {
  type?: "work" | "education";
  company?: string;
  school?: string;
  role?: string;
  degree?: string;
  period: string;
  location?: string;
  description: string[];
  tech?: string[];
  achievement?: string;
  sub?: SubExperience;
};

export default function Experience() {
  return (
    <section id="experience" className="relative pt-8 pb-20 md:pt-10 md:pb-24">
      <Container>
        <div className="mb-10">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
            Career Path
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">Experience</h2>
        </div>

        <div className="relative border-l border-white/10">
          {timelineItems.map((item, index) => {
            const isEducation = item.type === "education";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="relative mb-10 ml-6"
              >
                <span
                  className={`absolute -left-9 top-6 flex h-6 w-6 items-center justify-center rounded-full ring-8 ring-background ${
                    isEducation ? "bg-violet-500" : "bg-cyan-500"
                  }`}
                />

                <div
                  className={`rounded-2xl border p-5 backdrop-blur ${
                    isEducation
                      ? "border-violet-500/20 bg-violet-500/5"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  <div className="mb-3">
                    <h3 className="text-xl font-semibold">
                      {isEducation ? item.degree : item.role}
                    </h3>

                    <p className="mt-1 text-sm text-gray-400">
                      {isEducation ? item.school : item.company} • {item.period}
                    </p>

                    {item.location && (
                      <p className="mt-1 text-sm text-gray-500">
                        {item.location}
                      </p>
                    )}
                  </div>

                  <ul className="mt-3 space-y-2 text-sm leading-6 text-gray-300">
                    {item.description.map((desc, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-0.5 text-cyan-400">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  {item.sub && (
                    <div className="relative mt-5 ml-4">
                      <div
                        className={`absolute -left-4 top-0 h-full w-px ${
                          isEducation ? "bg-violet-400/20" : "bg-emerald-400/20"
                        }`}
                      />

                      <div
                        className={`rounded-xl border p-4 ${
                          isEducation
                            ? "border-violet-500/20 bg-violet-500/5"
                            : "border-emerald-500/20 bg-emerald-500/5 shadow-[0_0_20px_rgba(16,185,129,0.08)]"
                        }`}
                      >
                        <div className="mb-2 flex items-center gap-2">
                          <span
                            className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.15em] ${
                              isEducation
                                ? "bg-violet-500/15 text-violet-300"
                                : "bg-emerald-500/15 text-emerald-400"
                            }`}
                          >
                            {isEducation ? "Transition" : "Onsite"}
                          </span>

                          <p
                            className={`text-sm font-semibold ${
                              isEducation
                                ? "text-violet-300"
                                : "text-emerald-400"
                            }`}
                          >
                            {item.sub.title}
                          </p>
                        </div>

                        <p className="mb-2 text-xs text-gray-400">
                          {item.sub.period}
                        </p>
                        {item.sub.description.map((desc, i) => (
                          <li
                            key={i}
                            className="text-sm ml-2 leading-6 text-gray-300"
                          >
                            {desc}
                          </li>
                        ))}
                      </div>
                    </div>
                  )}

                  {item.achievement && (
                    <div className="relative mt-5 ml-4">
                      <div className="absolute -left-4 top-0 h-full w-px bg-yellow-400/20" />

                      <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-4 shadow-[0_0_20px_rgba(234,179,8,0.08)]">
                        <div className="mb-2 flex items-center gap-2">
                          <span className="rounded-full bg-yellow-500/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-yellow-400">
                            Achievement
                          </span>
                        </div>

                        <li className="text-sm ml-2 leading-6 text-gray-300">
                          {item.achievement}
                        </li>
                      </div>
                    </div>
                  )}

                  {!!item.tech?.length && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tech.map((tech, i) => (
                        <span
                          key={i}
                          className={`rounded-md border px-2 py-1 text-xs ${
                            isEducation
                              ? "border-violet-500/20 bg-violet-500/10 text-violet-300"
                              : "border-cyan-500/20 bg-cyan-500/10 text-cyan-400"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

const timelineItems: TimelineItem[] = [
  {
    type: "education",
    school: "University of Economics Ho Chi Minh City",
    degree:
      "Bachelor's Degree (Formal University Transfer) in Information Technology",
    period: "2026 - Present",
    location: "Ho Chi Minh City, Vietnam",
    description: [
      "Pursuing a degree in Information Technology to strengthen my software development foundation",
      "Actively transitioning from QA to Developer through academic learning and hands-on fullstack projects.",
      "Focusing on web development, system design, and modern software engineering practices",
    ],
    tech: ["Web Development", "Software Engineering"],
    sub: {
      title: "Transition to Software Development",
      period: "2026",
      description: [
        "Decided to transition from QA to Software Developer after gaining hands-on experience with real products. Motivated to build solutions instead of only validating them, and actively developing fullstack projects to support this direction.",
        "This transition is not a reset, but a progression - combining development skills with a strong testing mindset.",
      ],
    },
  },
  {
    company: "Agest",
    role: "QA Engineer / Fullstack Tester",
    period: "Jul 2025 - Dec 2025",
    location: "Ha Noi City, Vietnam",
    description: [
      "Completed training in Manual Testing, API Testing, and Selenium with Java",
      "Worked on a room management system project as a fullstack tester",
      "Performed both manual testing and automation testing using Java with a BDD approach",
    ],
    tech: [
      "Java",
      "Selenium",
      "BDD",
      "API Testing",
      "Manual Testing",
      "Automation Testing",
    ],
    sub: {
      title: "Onsite at Vietcombank",
      period: "Aug 2025 - Sep 2025",
      description: [
        "Participated as a Manual Tester in a digital transformation project, executing test cases and validating business workflows in a real banking environment.",
      ],
    },
  },
  {
    company: "NashTech",
    role: "Automation Tester Intern",
    period: "Mar 2025 - Jun 2025",
    location: "Ho Chi Minh City, Vietnam",
    description: [
      "Developed automation test scripts using Selenium (C#) and NUnit following the Page Object Model structure",
      "Worked with Azure DevOps for defect tracking and task management",
      "Applied Agile testing practices, including test case design and bug reporting",
      "Explored Playwright and Reqnroll for UI and BDD testing",
      "Collaborated with teammates under tight deadlines in a fast-paced project environment",
    ],
    achievement:
      "Stepped up to lead the team under tight deadlines and successfully coordinated a project demo for the Product Owner, showcasing strong ownership, communication, and teamwork.",
    tech: [
      "TypeScript",
      "C#",
      "Selenium",
      "NUnit",
      "BDD",
      "Playwright",
      "Azure DevOps",
      "Reqnroll",
      "Scrum",
    ],
  },
  {
    company: "Apps Cyclone",
    role: "Quality Control Engineer Intern",
    period: "Sep 2024 - Dec 2024",
    location: "Ho Chi Minh City, Vietnam",
    description: [
      "Analyzed SRS documents and created detailed test cases",
      "Improved test coverage by identifying edge-case scenarios",
      "Performed API testing and validated endpoints and responses",
      "Built automated test scripts using Katalon",
      "Collaborated with team members to improve testing workflows",
    ],
    tech: [
      "Manual Testing",
      "Automation Testing",
      "API Testing",
      "Katalon",
      "Scrum",
    ],
  },
];
