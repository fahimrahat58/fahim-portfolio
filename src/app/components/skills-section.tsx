"use client";

import { useRef } from "react";
import {
  Code2,
  Database,
  Wrench,
  Layers3,
} from "lucide-react";
import { motion, useInView } from "motion/react";

const skillGroups = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    icon: Code2,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend & Authentication",
    description:
      "Building server-side applications, APIs and authentication systems.",
    icon: Database,
    skills: [
      "Node.js",
      "Express.js",
      "REST API",
      "MongoDB",
      "Better Auth",
    ],
  },
  {
    title: "Tools & Technologies",
    description: "Tools I use to build, manage and deploy web applications.",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Vercel"],
  },
  {
    title: "Core Concepts",
    description: "Essential concepts for building modern web applications.",
    icon: Layers3,
    skills: [
      "Responsive Design",
      "API Integration",
      "Authentication",
      "CRUD Operations",
    ],
  },
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const isInView = useInView(sectionRef, {
    amount: 0.15,
    once: false,
  });

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative scroll-mt-20 overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={false}
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 35 }
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mb-14 max-w-2xl text-center sm:mb-16"
        >
          <span className="mb-4 inline-flex items-center rounded-full border border-[#15A1BF]/20 bg-[#15A1BF]/10 px-4 py-2 text-sm font-medium text-[#15A1BF]">
            My Expertise
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            Skills &{" "}
            <span className="text-[#15A1BF]">Technologies</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
            Technologies and tools I use to build modern, responsive,
            and functional web applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={false}
                animate={
                  isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 45 }
                }
                transition={{
                  duration: 0.5,
                  delay: isInView ? index * 0.12 : 0,
                  ease: "easeOut",
                }}
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition-[border-color,box-shadow,background-color] duration-300 hover:border-[#15A1BF]/50 hover:shadow-xl hover:shadow-[#15A1BF]/5 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-[#15A1BF]/50 sm:p-7"
              >
                {/* Icon */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#15A1BF]/10 text-[#15A1BF] transition-colors duration-300 group-hover:bg-[#15A1BF] group-hover:text-white">
                  <Icon size={24} strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {group.title}
                </h3>

                {/* Description */}
                <p className="mt-2 min-h-[60px] text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {group.description}
                </p>

                {/* Skills */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors duration-200 hover:border-[#15A1BF]/40 hover:bg-[#15A1BF]/10 hover:text-[#15A1BF] dark:border-white/10 dark:bg-white/5 dark:text-gray-300 dark:hover:border-[#15A1BF]/40 dark:hover:text-[#15A1BF] sm:text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}