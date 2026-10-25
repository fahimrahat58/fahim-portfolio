"use client";

import { useRef } from "react";
import { Code2, Database, Wrench, Layers3, ArrowUpRight } from "lucide-react";
import { motion, useInView, useReducedMotion } from "motion/react";

const skillGroups = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    icon: Code2,
    number: "01",
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
      "Building server-side applications, APIs, and authentication systems.",
    icon: Database,
    number: "02",
    skills: ["Node.js", "Express.js", "REST API", "MongoDB", "Better Auth"],
  },
  {
    title: "Tools & Technologies",
    description: "Tools I use to build, manage, and deploy web applications.",
    icon: Wrench,
    number: "03",
    skills: ["Git", "GitHub", "VS Code", "Vercel"],
  },
  {
    title: "Core Concepts",
    description: "Essential concepts for modern web application development.",
    icon: Layers3,
    number: "04",
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
  const shouldReduceMotion = useReducedMotion();

  const isInView = useInView(sectionRef, {
    amount: 0.15,
    once: false,
  });

  const hidden = shouldReduceMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: 35 };

  const visible = { opacity: 1, y: 0 };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative isolate scroll-mt-20 overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-20 h-72 w-72 rounded-full bg-[#15A1BF]/[0.07] blur-[100px]" />
        <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-blue-500/[0.05] blur-[110px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={false}
          animate={isInView ? visible : hidden}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mb-12 max-w-2xl text-center sm:mb-16"
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#15A1BF]/20 bg-[#15A1BF]/[0.08] px-4 py-2 text-xs font-semibold tracking-wide text-[#15A1BF] sm:text-sm">
            <Code2 size={15} />
            My Expertise
          </span>

          <h2 className="text-3xl font-bold leading-tight tracking-[-0.04em] text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
            Skills &{" "}
            <span className="bg-gradient-to-r from-[#15A1BF] via-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base sm:leading-8">
            A collection of technologies and tools I use to transform ideas into
            modern, responsive, and functional web applications.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-[#15A1BF] to-blue-500" />
        </motion.div>

        {/* Skills Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={false}
                animate={isInView ? visible : hidden}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.5,
                  delay: isInView && !shouldReduceMotion ? index * 0.12 : 0,
                  ease: "easeOut",
                }}
                className="group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-white/80 p-5 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#15A1BF]/50 hover:shadow-xl hover:shadow-[#15A1BF]/[0.08] dark:border-white/10 dark:bg-white/[0.035] sm:rounded-3xl sm:p-6 lg:p-5 xl:p-6"
              >
                {/* Decorative gradient */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#15A1BF]/[0.06] via-transparent to-blue-500/[0.04] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative flex flex-1 flex-col">
                  {/* Card top row */}
                  <div className="mb-6 flex items-start justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#15A1BF]/15 bg-[#15A1BF]/[0.09] text-[#15A1BF] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#15A1BF] group-hover:text-white sm:h-14 sm:w-14">
                      <Icon size={24} strokeWidth={1.8} />
                    </div>

                    <span className="pt-1 text-xs font-semibold tracking-[0.15em] text-gray-400 dark:text-gray-500">
                      {group.number}
                    </span>
                  </div>

                  {/* Title and description */}
                  <h3 className="text-lg font-semibold leading-snug tracking-tight text-gray-900 dark:text-white">
                    {group.title}
                  </h3>

                  <p className="mt-2 min-h-[48px] text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {group.description}
                  </p>

                  {/* Skills label */}
                  <div className="mb-3 mt-6 flex items-center justify-between gap-2">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-500 dark:text-gray-400">
                      Technologies
                    </span>

                    <span className="rounded-full bg-[#15A1BF]/10 px-2 py-1 text-[11px] font-semibold text-[#15A1BF]">
                      {group.skills.length} skills
                    </span>
                  </div>

                  {/* Skill badges */}
                  <div className="flex flex-wrap content-start gap-2">
                    {group.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={false}
                        animate={
                          isInView
                            ? { opacity: 1, scale: 1 }
                            : shouldReduceMotion
                              ? { opacity: 1, scale: 1 }
                              : { opacity: 0, scale: 0.94 }
                        }
                        transition={{
                          duration: shouldReduceMotion ? 0 : 0.3,
                          delay:
                            isInView && !shouldReduceMotion
                              ? index * 0.12 + skillIndex * 0.035
                              : 0,
                        }}
                        className="max-w-full break-words rounded-lg border border-gray-200/90 bg-gray-50/90 px-2.5 py-1.5 text-xs font-medium leading-5 text-gray-700 transition-colors duration-200 hover:border-[#15A1BF]/40 hover:bg-[#15A1BF]/10 hover:text-[#15A1BF] dark:border-white/10 dark:bg-white/[0.04] dark:text-gray-300 dark:hover:border-[#15A1BF]/40 dark:hover:text-[#15A1BF] sm:text-[13px]"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  {/* Bottom decoration */}
                  <div className="mt-6 flex items-center justify-between border-t border-gray-200/80 pt-4 dark:border-white/10">
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                      Skill set
                    </span>

                    <ArrowUpRight
                      size={17}
                      className="text-gray-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#15A1BF]"
                    />
                  </div>
                </div>

                <div className="absolute bottom-0 left-6 right-6 h-px origin-left scale-x-0 bg-gradient-to-r from-[#15A1BF] to-blue-500 transition-transform duration-300 group-hover:scale-x-100" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={false}
          animate={isInView ? visible : hidden}
          transition={{
            duration: 0.5,
            delay: shouldReduceMotion ? 0 : 0.35,
          }}
          className="mt-8 text-center text-xs leading-6 text-gray-500 dark:text-gray-400 sm:mt-10 sm:text-sm"
        >
          Focused on building clean, maintainable, and user-friendly web
          applications.
        </motion.p>
      </div>
    </section>
  );
}
