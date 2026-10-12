"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";
import ProjectCard from "./project-card";

export default function ProjectsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="projects"
      className="relative isolate scroll-mt-20 overflow-hidden border-t border-border px-5 py-24 sm:px-8 sm:py-28 lg:px-12"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-32 top-16 -z-10 h-80 w-80 rounded-full bg-blue-500/[0.08] blur-[110px]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 -z-10 h-72 w-72 rounded-full bg-cyan-500/[0.06] blur-[100px]" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: reduceMotion ? 0 : 0.6 }}
          className="mb-12 flex flex-col justify-between gap-7 md:mb-16 md:flex-row md:items-end"
        >
          <div className="max-w-3xl">
            <p className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.24em] text-accent sm:text-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
              </span>
              Selected Work
            </p>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-[-0.045em] sm:text-4xl md:text-5xl lg:text-6xl">
              Ideas turned into{" "}
              <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
                real projects.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
              A selection of projects where I explore modern web technologies,
              solve practical problems, and improve the user experience.
            </p>
          </div>

          <motion.a
            href="https://github.com/fahimrahat58"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={reduceMotion ? undefined : { x: 4 }}
            whileTap={reduceMotion ? undefined : { scale: 0.97 }}
            className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full border border-border bg-surface/70 px-5 py-3 text-sm font-semibold text-foreground shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-accent/40 hover:bg-accent-soft hover:shadow-lg hover:shadow-blue-500/[0.06]"
          >
            Explore GitHub
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent-soft text-accent transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={16} />
            </span>
          </motion.a>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-7">
          {projects.map((project, index) => (
            <ProjectCard key={project.number} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.5 }}
          className="mt-14 flex flex-col items-center gap-4 sm:mt-16"
        >
          <p className="text-center text-sm text-muted">
            Interested in seeing more of my work?
          </p>

          <motion.a
            href="https://github.com/fahimrahat58?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={reduceMotion ? undefined : { y: -3 }}
            whileTap={reduceMotion ? undefined : { scale: 0.97 }}
            className="group inline-flex items-center gap-3 rounded-full border border-border bg-surface/70 px-7 py-3.5 text-sm font-semibold text-foreground shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-accent/50 hover:bg-accent-soft hover:shadow-lg hover:shadow-blue-500/[0.08]"
          >
            More on GitHub
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1">
              <ArrowDownRight size={16} />
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
