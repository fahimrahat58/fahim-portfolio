"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  Code2,
  Rocket,
  Target,
  Lightbulb,
  Heart,
} from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Modern Web Development",
    description:
      "Creating responsive, accessible, and engaging web experiences with React, Next.js, TypeScript, and Tailwind CSS.",
  },
  {
    icon: Rocket,
    title: "Full-Stack Development",
    description:
      "Building practical web applications by integrating REST APIs, authentication, databases, and interactive user interfaces.",
  },
  {
    icon: Target,
    title: "Quality & Performance",
    description:
      "Writing maintainable code, improving performance, and creating intuitive experiences that work smoothly across devices.",
  },
];

const principles = [
  {
    icon: Lightbulb,
    title: "Curiosity Drives Me",
    description:
      "I enjoy exploring new technologies, understanding how things work, and finding better ways to solve problems.",
  },
  {
    icon: Heart,
    title: "Passion in Every Detail",
    description:
      "From clean code to thoughtful UI interactions, I care about building products that feel polished, useful, and reliable.",
  },
];

export default function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = shouldReduceMotion ? {} : { opacity: 0, y: 24 };

  const viewport = {
    once: false,
    amount: 0.15,
  } as const;

  return (
    <section
      id="about"
      className="relative isolate overflow-hidden px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-20 h-72 w-72 rounded-full bg-blue-500/[0.06] blur-[100px] dark:bg-blue-500/[0.09]" />
        <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-cyan-500/[0.05] blur-[110px] dark:bg-cyan-500/[0.07]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={reveal}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <span className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-blue-500/20 bg-blue-500/[0.06] px-4 py-2 text-xs font-semibold tracking-wide text-blue-600 backdrop-blur-xl dark:border-blue-400/20 dark:bg-blue-400/[0.08] dark:text-blue-300 sm:text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
            </span>
            About Me
          </span>

          <h2 className="max-w-4xl text-3xl font-bold leading-[1.15] tracking-[-0.045em] sm:text-4xl md:text-5xl lg:text-6xl">
            Turning ideas into{" "}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-cyan-300">
              meaningful web experiences.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
            A little about my journey, the way I work, and what inspires me to
            build for the web.
          </p>

          <div className="mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 sm:w-24" />
        </motion.div>

        {/* Introduction and highlights */}
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="min-w-0 space-y-6 text-base leading-8 text-muted sm:text-lg sm:leading-9"
          >
            <div>
              <h3 className="mb-3 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                Hello, I&apos;m Fahim.
              </h3>

              <p>
                I&apos;m{" "}
                <span className="font-semibold text-foreground">
                  Fahim Muntasir Rahat
                </span>
                , a web developer passionate about building modern, responsive,
                and user-friendly web applications. I enjoy turning ideas into
                digital experiences that are not only visually appealing but
                also useful and easy to navigate.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                My journey into development
              </h3>

              <p>
                My programming journey started with an interest in how websites
                work and how thoughtful design can make technology more
                accessible. As I developed my skills, I began working with HTML,
                CSS, and JavaScript, then progressed to React, Next.js, and
                TypeScript.
              </p>

              <p className="mt-4">
                Building projects has helped me turn concepts into practical
                applications, strengthen my problem-solving skills, and
                understand how frontend interfaces connect with APIs,
                authentication, and databases.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                What I enjoy building
              </h3>

              <p>
                I particularly enjoy creating polished user interfaces,
                responsive layouts, reusable components, and interactive
                experiences. I also like connecting applications to real data,
                implementing authentication, and making sure everything works
                smoothly across mobile, tablet, and desktop screens.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                My mindset
              </h3>

              <p>
                I believe good development is about more than writing code. It
                takes curiosity, patience, attention to detail, and a
                willingness to improve. I approach challenges with a
                problem-solving mindset, value clean and maintainable code, and
                enjoy discovering more effective ways to build things.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="#projects"
                className="group inline-flex max-w-full items-center justify-center gap-2 rounded-xl border border-blue-500/20 bg-blue-500/[0.05] px-5 py-3 text-sm font-semibold text-blue-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500/40 hover:bg-blue-500/[0.09] hover:shadow-lg hover:shadow-blue-500/[0.08] dark:text-blue-300"
              >
                Explore my projects
                <ArrowUpRight
                  size={18}
                  className="shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </motion.div>

          {/* Right-side cards */}
          <div className="relative grid min-w-0 gap-4">
            <div className="pointer-events-none absolute -inset-5 -z-10 rounded-[2rem] bg-gradient-to-br from-blue-500/[0.05] via-transparent to-cyan-400/[0.05] blur-2xl" />

            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={shouldReduceMotion ? false : { opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewport}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-border/80 bg-surface/75 p-5 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/35 hover:shadow-xl hover:shadow-blue-950/[0.05] sm:rounded-3xl sm:p-6 dark:hover:shadow-black/20"
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/[0.035] via-transparent to-cyan-400/[0.035] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative flex items-start gap-3 sm:gap-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-500/15 bg-gradient-to-br from-blue-500/[0.12] to-cyan-400/[0.08] text-blue-600 transition-all duration-300 group-hover:scale-105 group-hover:border-blue-500/30 dark:text-blue-300 sm:h-14 sm:w-14 sm:rounded-2xl">
                      <Icon size={23} strokeWidth={1.8} aria-hidden="true" />
                    </div>

                    <div className="min-w-0 flex-1 pt-0.5">
                      <h3 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
                        {item.title}
                      </h3>

                      <p className="mt-2 break-words text-sm leading-7 text-muted sm:text-base">
                        {item.description}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={18}
                      aria-hidden="true"
                      className="mt-1 hidden shrink-0 text-muted/60 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-500 sm:block"
                    />
                  </div>

                  <div className="absolute bottom-0 left-6 right-6 h-px origin-left scale-x-0 bg-gradient-to-r from-blue-500/60 to-cyan-400/60 transition-transform duration-300 group-hover:scale-x-100" />
                </motion.div>
              );
            })}

            {/* Personal values */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-2 rounded-2xl border border-border/80 bg-surface/50 p-5 sm:rounded-3xl sm:p-6"
            >
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-300">
                What drives me
              </p>

              <div className="space-y-5">
                {principles.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex items-start gap-3 sm:gap-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/[0.08] text-blue-600 dark:text-blue-300">
                        <Icon size={20} strokeWidth={1.8} />
                      </div>

                      <div className="min-w-0">
                        <h4 className="text-sm font-semibold text-foreground sm:text-base">
                          {item.title}
                        </h4>

                        <p className="mt-1 text-sm leading-6 text-muted">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
