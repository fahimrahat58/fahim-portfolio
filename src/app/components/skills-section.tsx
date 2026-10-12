"use client";

import { motion } from "motion/react";
import {
  Braces,
  Database,
  Layers3,
  Monitor,
  Wrench,
  ArrowUpRight,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    icon: Monitor,
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
    description: "Working with APIs, authentication and data.",
    icon: Database,
    skills: ["REST API", "Better Auth", "MongoDB"],
  },
  {
    title: "Tools & Workflow",
    description: "Tools for building, managing and deploying projects.",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Vercel"],
  },
];

const reveal = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative isolate overflow-hidden border-y border-border bg-surface-secondary/40 px-5 py-24 sm:px-8 sm:py-28 lg:px-12"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-32 top-20 -z-10 h-80 w-80 rounded-full bg-blue-500/[0.07] blur-[110px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-80 w-80 rounded-full bg-cyan-500/[0.07] blur-[110px]" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12 max-w-3xl md:mb-14"
        >
          <span className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-accent/20 bg-accent-soft/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-accent shadow-sm backdrop-blur-xl sm:text-sm">
            <Braces size={16} />
            Skills & Technologies
          </span>

          <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-5xl">
            The tools I use to{" "}
            <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
              bring ideas to life.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
            Technologies and tools I use while building web projects and
            continuously developing my skills.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.18,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.2 },
                }}
                className="group relative overflow-hidden rounded-3xl border border-border/80 bg-surface/80 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-accent/40 hover:shadow-xl hover:shadow-blue-500/[0.06] sm:p-7"
              >
                {/* Card gradient */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/[0.045] via-transparent to-cyan-500/[0.045] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="mb-6 flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/15 bg-gradient-to-br from-blue-500/15 to-cyan-500/10 text-accent shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-blue-500/10">
                      <Icon size={25} strokeWidth={1.8} />
                    </div>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-all duration-300 group-hover:border-accent/30 group-hover:bg-accent-soft group-hover:text-accent">
                      <ArrowUpRight
                        size={17}
                        className="transition-transform duration-300 group-hover:rotate-45"
                      />
                    </span>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight">
                    {group.title}
                  </h3>

                  <p className="mt-2 min-h-12 text-sm leading-6 text-muted">
                    {group.description}
                  </p>

                  <div className="my-6 h-px bg-gradient-to-r from-border via-border/70 to-transparent" />

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.05 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.08 + skillIndex * 0.045,
                        }}
                        className="rounded-xl border border-border/80 bg-surface-secondary/80 px-3 py-2 text-sm font-medium text-foreground/85 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent-soft hover:text-accent"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
          className="group relative mt-8 overflow-hidden rounded-3xl border border-border/80 bg-surface/80 p-5 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-blue-500/[0.05] sm:p-7"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-500/[0.05] via-transparent to-cyan-500/[0.05]" />

          <div className="relative flex items-start gap-4 sm:items-center sm:gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-accent/15 bg-gradient-to-br from-blue-500/15 to-cyan-500/10 text-accent transition-transform duration-300 group-hover:scale-105">
              <Layers3 size={23} strokeWidth={1.8} />
            </div>

            <div>
              <h3 className="text-base font-bold tracking-tight sm:text-lg">
                Always learning, always building
              </h3>

              <p className="mt-1.5 max-w-3xl text-sm leading-6 text-muted sm:leading-7">
                Exploring better ways to write maintainable code, integrate
                services and deliver polished web experiences.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
