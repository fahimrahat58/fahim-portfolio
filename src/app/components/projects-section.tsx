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
      className="relative scroll-mt-20 overflow-hidden border-t border-border px-5 py-24 sm:px-8 sm:py-28 lg:px-12"
    >
      <div className="pointer-events-none absolute right-0 top-20 -z-10 h-72 w-72 rounded-full bg-blue-500/[0.06] blur-[100px]" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: reduceMotion ? 0 : 0.6 }}
          className="mb-12 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end"
        >
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Selected Work
            </p>

            <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              Ideas turned into{" "}
              <span className="text-muted">real projects.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
              A selection of projects where I explore modern web technologies,
              solve practical problems, and improve the user experience.
            </p>
          </div>

          <motion.a
            href="https://github.com/fahimrahat58"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={reduceMotion ? undefined : { x: 4 }}
            className="group inline-flex w-fit shrink-0 items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-accent"
          >
            Explore GitHub
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </motion.a>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.number} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.5 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="https://github.com/fahimrahat58?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-all hover:border-accent/40 hover:bg-accent-soft"
          >
            More on GitHub
            <ArrowDownRight
              size={17}
              className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
