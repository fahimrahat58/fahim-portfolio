"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Code2, Rocket, Target } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Modern Web Development",
    description:
      "Building responsive interfaces with React, Next.js and TypeScript.",
  },
  {
    icon: Rocket,
    title: "Learning by Building",
    description:
      "Turning ideas into practical projects and improving through hands-on experience.",
  },
  {
    icon: Target,
    title: "Focused on Growth",
    description:
      "Writing cleaner code, solving problems and developing production-ready skills.",
  },
];

export default function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = shouldReduceMotion ? {} : { opacity: 0, y: 24 };

  return (
    <section
      id="about"
      className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-28 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={reveal}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-soft px-3 py-1.5 text-sm font-medium text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            About Me
          </span>

          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            I build for the web,{" "}
            <span className="text-accent">one idea at a time.</span>
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5 text-base leading-8 text-muted sm:text-lg"
          >
            <p>
              I&apos;m Fahim Muntasir Rahat, a web developer focused on building
              modern, responsive and user-friendly web applications.
            </p>

            <p>
              My current focus is React, Next.js, TypeScript and Tailwind CSS. I
              also work with authentication, API integration and database
              concepts while building practical projects.
            </p>

            <p>
              I believe the best way to improve is to build real projects,
              understand the problems behind the code and keep learning with
              every iteration.
            </p>

            <a
              href="#projects"
              className="group inline-flex items-center gap-2 pt-2 font-medium text-accent transition-colors hover:text-accent-hover"
            >
              Explore my projects
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>

          <div className="grid gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={shouldReduceMotion ? false : { opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                  className="group rounded-2xl border border-border bg-surface p-5 transition-colors duration-300 hover:border-accent/40 sm:p-6"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent transition-transform duration-300 group-hover:scale-105">
                    <Icon size={21} />
                  </div>

                  <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>

                  <p className="text-sm leading-6 text-muted sm:text-base">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
