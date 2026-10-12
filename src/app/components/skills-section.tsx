"use client";

import { motion } from "motion/react";
import { Braces, Database, Layers3, Monitor, Wrench } from "lucide-react";

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
      className="border-y border-border bg-surface-secondary/50 px-5 py-24 sm:px-8 sm:py-28 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12 max-w-3xl"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-soft px-3 py-1.5 text-sm font-medium text-accent">
            <Braces size={15} />
            Skills & Technologies
          </span>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            The tools I use to{" "}
            <span className="text-accent">bring ideas to life.</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-muted sm:text-lg">
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
                className="rounded-2xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-accent/40 sm:p-7"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Icon size={22} />
                </div>

                <h3 className="text-xl font-semibold">{group.title}</h3>

                <p className="mt-2 min-h-12 text-sm leading-6 text-muted">
                  {group.description}
                </p>

                <div className="my-5 h-px bg-border" />

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
                      className="rounded-lg border border-border bg-surface-secondary px-3 py-2 text-sm font-medium transition-colors hover:border-accent/40 hover:text-accent"
                    >
                      {skill}
                    </motion.span>
                  ))}
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
          className="mt-8 flex items-start gap-3 rounded-2xl border border-border bg-surface p-5 sm:items-center sm:p-6"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
            <Layers3 size={20} />
          </div>

          <div>
            <h3 className="font-semibold">Always learning, always building</h3>
            <p className="mt-1 text-sm leading-6 text-muted">
              Exploring better ways to write maintainable code, integrate
              services and deliver polished web experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
