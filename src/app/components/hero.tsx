"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";

const skills = ["React", "Next.js", "TypeScript", "Tailwind CSS"];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.65,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] scroll-mt-20 items-center overflow-hidden px-5 pb-20 pt-32 sm:px-8 sm:pt-36 lg:px-12"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_15%,rgba(37,99,235,0.13),transparent_42%),radial-gradient(ellipse_at_85%_65%,rgba(6,182,212,0.09),transparent_42%)] dark:bg-[radial-gradient(ellipse_at_20%_15%,rgba(59,130,246,0.17),transparent_42%),radial-gradient(ellipse_at_85%_65%,rgba(6,182,212,0.10),transparent_42%)]" />

        <motion.div
          aria-hidden="true"
          animate={
            reduceMotion
              ? {}
              : {
                  x: [0, 35, -15, 0],
                  y: [0, -25, 15, 0],
                  scale: [1, 1.12, 0.96, 1],
                }
          }
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-40 top-24 h-80 w-80 rounded-full bg-blue-500/15 blur-[110px] sm:h-[30rem] sm:w-[30rem]"
        />

        <motion.div
          aria-hidden="true"
          animate={
            reduceMotion
              ? {}
              : {
                  x: [0, -25, 20, 0],
                  y: [0, 20, -15, 0],
                }
          }
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-24 -left-40 h-72 w-72 rounded-full bg-cyan-500/10 blur-[110px] sm:h-96 sm:w-96"
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.12] [mask-image:radial-gradient(ellipse_at_center,black_15%,transparent_75%)]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: reduceMotion ? 0 : 0.12 },
            },
          }}
          className="relative z-10"
        >
          <motion.div variants={reveal}>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/[0.07] px-4 py-2.5 text-xs font-semibold tracking-wide text-blue-600 shadow-sm shadow-blue-500/[0.04] backdrop-blur-xl dark:border-blue-400/20 dark:bg-blue-400/[0.08] dark:text-blue-300 sm:text-sm">
              <Sparkles size={15} className="text-cyan-500" />
              Web Developer · Open to Opportunities
            </span>
          </motion.div>

          <motion.p
            variants={reveal}
            className="mt-9 text-base font-medium tracking-wide text-muted sm:text-lg"
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            variants={reveal}
            className="mt-3 max-w-3xl text-5xl font-extrabold leading-[1.06] tracking-[-0.065em] sm:text-6xl md:text-7xl xl:text-[5.5rem]"
          >
            Fahim Muntasir
            <span className="mt-2 block bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 bg-clip-text pb-3 text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-cyan-300">
              Rahat.
            </span>
          </motion.h1>

          <motion.p
            variants={reveal}
            className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg sm:leading-9"
          >
            I build modern, responsive web experiences with{" "}
            <span className="font-semibold text-foreground">React</span> and{" "}
            <span className="font-semibold text-foreground">Next.js</span>,
            combining thoughtful design with practical solutions.
          </motion.p>

          <motion.div variants={reveal} className="mt-8 flex flex-wrap gap-2.5">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                whileHover={reduceMotion ? undefined : { y: -4, scale: 1.04 }}
                transition={{ type: "spring", stiffness: 350, damping: 18 }}
                className="rounded-xl border border-border/80 bg-surface/70 px-3.5 py-2.5 text-xs font-medium text-muted shadow-sm backdrop-blur-xl transition-colors duration-300 hover:border-blue-500/40 hover:bg-blue-500/[0.06] hover:text-foreground sm:text-sm"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            variants={reveal}
            className="mt-9 flex flex-col gap-3 min-[420px]:flex-row"
          >
            <motion.a
              href="#projects"
              whileHover={reduceMotion ? undefined : { y: -3 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:from-blue-500 hover:to-indigo-500 hover:shadow-xl hover:shadow-blue-600/30 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
            >
              Explore My Work
              <ArrowRight
                size={17}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={reduceMotion ? undefined : { y: -3 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface/60 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40 hover:bg-blue-500/[0.06] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
            >
              Get in Touch
              <ArrowUpRight size={17} />
            </motion.a>
          </motion.div>

          <motion.div
            variants={reveal}
            className="mt-9 flex items-center gap-4"
          >
            <span className="text-xs font-medium tracking-wide text-muted">
              Find me on
            </span>

            <a
              href="https://github.com/fahimrahat58"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface/50 text-muted backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-500/[0.07] hover:text-blue-500 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-[18px] w-[18px] fill-current"
              >
                <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.51-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.78 2.19 3.34 1.55.1-.72.4-1.22.73-1.5-2.48-.28-5.08-1.24-5.08-5.52 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.56 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.29-2.6 5.23-5.09 5.51.4.35.76 1.02.76 2.06v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/fahim-muntasir-rahat-46ba6b2a7/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface/50 text-muted backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-500/[0.07] hover:text-blue-500 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-[18px] w-[18px] fill-current"
              >
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 18v-8.4H5.56V18h2.78ZM6.95 8.45a1.61 1.61 0 1 0 0-3.22 1.61 1.61 0 0 0 0 3.22ZM18.45 18v-4.6c0-2.46-1.31-3.61-3.06-3.61a2.64 2.64 0 0 0-2.38 1.31v-1.5h-2.78V18h2.78v-4.16c0-1.1.21-2.17 1.58-2.17 1.35 0 1.37 1.27 1.37 2.24V18h2.49Z" />
              </svg>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            scale: reduceMotion ? 1 : 0.94,
            y: reduceMotion ? 0 : 20,
          }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: reduceMotion ? 0 : 0.9, delay: 0.25 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <motion.div
            aria-hidden="true"
            animate={reduceMotion ? {} : { rotate: 360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-3 rounded-[2.5rem] border border-dashed border-blue-500/20 sm:-inset-6"
          />

          <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-blue-500/[0.08] via-transparent to-cyan-400/[0.08] blur-2xl" />

          <div className="relative overflow-hidden rounded-[1.75rem] border border-border/80 bg-surface/80 p-5 shadow-2xl shadow-blue-950/[0.08] backdrop-blur-2xl sm:rounded-[2rem] sm:p-7 dark:shadow-black/30">
            <div className="flex items-center justify-between border-b border-border/80 pb-5">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400 shadow-sm shadow-rose-400/30" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400 shadow-sm shadow-amber-400/30" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/30" />
              </div>

              <span className="rounded-lg border border-border/70 bg-background/50 px-3 py-1.5 font-mono text-xs text-muted">
                developer.ts
              </span>
            </div>

            <div className="space-y-5 py-7 font-mono text-xs leading-7 sm:text-sm">
              <p className="text-muted">
                <span className="text-blue-500">const</span> developer = {"{"}
              </p>

              <div className="space-y-2 pl-5 sm:pl-7">
                <p className="break-words">
                  <span className="text-cyan-600 dark:text-cyan-300">name</span>
                  :{" "}
                  <span className="text-emerald-600 dark:text-emerald-300">
                    &quot;Fahim Rahat&quot;
                  </span>
                  ,
                </p>

                <p>
                  <span className="text-cyan-600 dark:text-cyan-300">
                    focus
                  </span>
                  :{" "}
                  <span className="text-emerald-600 dark:text-emerald-300">
                    &quot;Web Development&quot;
                  </span>
                  ,
                </p>

                <p>
                  <span className="text-cyan-600 dark:text-cyan-300">
                    stack
                  </span>
                  : [
                </p>

                <div className="space-y-1 pl-5 sm:pl-7">
                  <p className="text-emerald-600 dark:text-emerald-300">
                    &quot;React&quot;,
                  </p>

                  <p className="text-emerald-600 dark:text-emerald-300">
                    &quot;Next.js&quot;,
                  </p>

                  <p className="text-emerald-600 dark:text-emerald-300">
                    &quot;TypeScript&quot;
                  </p>
                </div>

                <p>],</p>

                <p>
                  <span className="text-cyan-600 dark:text-cyan-300">
                    mindset
                  </span>
                  :{" "}
                  <span className="text-emerald-600 dark:text-emerald-300">
                    &quot;Build. Learn. Improve.&quot;
                  </span>
                </p>
              </div>

              <p className="text-muted">{"};"}</p>
            </div>

            <div className="flex items-center justify-between gap-3 rounded-2xl border border-blue-500/15 bg-gradient-to-r from-blue-500/[0.07] to-cyan-400/[0.05] p-4">
              <div className="min-w-0">
                <p className="text-sm font-semibold text-foreground">
                  Turning ideas into code
                </p>
                <p className="mt-1 text-xs text-muted">
                  One project at a time.
                </p>
              </div>

              <motion.div
                animate={reduceMotion ? {} : { y: [0, -4, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/20"
              >
                <ArrowUpRight size={22} />
              </motion.div>
            </div>
          </div>

          <motion.div
            aria-hidden="true"
            animate={reduceMotion ? {} : { y: [0, -10, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-2 -top-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-border/80 bg-surface/90 shadow-xl shadow-blue-950/[0.06] backdrop-blur-xl sm:-right-5 sm:-top-6"
          >
            <span className="bg-gradient-to-br from-blue-500 to-cyan-400 bg-clip-text text-lg font-bold text-transparent">
              {"</>"}
            </span>
          </motion.div>

          <motion.div
            aria-hidden="true"
            animate={reduceMotion ? {} : { y: [0, 8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 -left-2 rounded-2xl border border-border/80 bg-surface/90 px-4 py-3 shadow-xl shadow-blue-950/[0.06] backdrop-blur-xl sm:-left-5"
          >
            <p className="text-xs font-medium text-muted">
              Currently focused on
            </p>
            <p className="mt-1 text-sm font-semibold text-foreground">
              Building better web apps
            </p>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: reduceMotion ? 0 : [0, 6, 0] }}
        transition={{
          opacity: { delay: 1 },
          y: reduceMotion
            ? {}
            : { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted transition-colors hover:text-blue-500 sm:flex"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.25em]">
          Scroll to explore
        </span>
        <ArrowDown size={16} />
      </motion.a>
    </section>
  );
}
