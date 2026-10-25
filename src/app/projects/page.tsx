"use client";

import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  Code2,
  CheckCircle2,
  Layers3,
  Wrench,
  Rocket,
  FileText,
  Globe,
} from "lucide-react";

import { projects, type Project } from "../data/projects";

function ProjectDetailsContent() {
  const reduceMotion = useReducedMotion();
  const searchParams = useSearchParams();

  const projectNumber = searchParams.get("project");

  const project: Project | undefined = projects.find(
    (item) => item.number === projectNumber,
  );

  const reveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const transition = {
    duration: reduceMotion ? 0 : 0.55,
    ease: "easeOut" as const,
  };

  // Project list when no project is selected
  if (!project) {
    return (
      <main className="relative min-h-screen overflow-hidden bg-background px-5 pb-16 pt-28 sm:px-8 sm:pt-32 lg:px-12 lg:pt-36">
        <div className="pointer-events-none absolute left-1/2 top-40 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/[0.08] blur-[100px]" />

        <div className="relative mx-auto max-w-6xl">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={transition}
          >
            <Link
              href="/#projects"
              className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-border bg-surface/70 px-4 py-2.5 text-sm font-semibold transition-colors duration-300 hover:border-blue-500/40 hover:bg-blue-500/[0.05] hover:text-blue-500"
            >
              <ArrowLeft size={17} />
              Back to Portfolio
            </Link>
          </motion.div>

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: reduceMotion ? 0 : 25,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            animate="visible"
            transition={{
              ...transition,
              delay: reduceMotion ? 0 : 0.08,
            }}
            className="mb-10 mt-12"
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-500">
              Project Showcase
            </p>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
              Explore My Projects
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
              Explore the technologies, development challenges, and future
              improvements behind my projects.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((item, index) => (
              <motion.article
                key={item.number}
                initial={reduceMotion ? false : { opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.5,
                  delay: reduceMotion ? 0 : index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -6,
                        transition: { duration: 0.25 },
                      }
                }
                className="group overflow-hidden rounded-3xl border border-border/80 bg-surface/80 shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/[0.05]"
              >
                <Link
                  href={`/projects?project=${encodeURIComponent(item.number)}`}
                  className="block rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
                >
                  <div className="relative m-3 aspect-[16/10] overflow-hidden rounded-2xl bg-surface-secondary sm:m-4">
                    <Image
                      src={item.image}
                      alt={`${item.title} project preview`}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                    />

                    <span className="absolute left-3 top-3 rounded-lg border border-white/20 bg-black/60 px-3 py-1.5 font-mono text-xs text-white backdrop-blur">
                      {item.number}
                    </span>

                    {item.featured && (
                      <span className="absolute right-3 top-3 rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">
                        Featured
                      </span>
                    )}
                  </div>

                  <div className="p-5 pt-3 sm:p-6 sm:pt-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-500">
                      {item.subtitle}
                    </p>

                    <div className="mt-2 flex items-center justify-between gap-3">
                      <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
                        {item.title}
                      </h2>

                      <ArrowUpRight
                        size={21}
                        className="shrink-0 text-muted transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-500"
                      />
                    </div>

                    <p className="mt-3 text-sm leading-7 text-muted">
                      {item.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-border bg-surface-secondary px-3 py-1.5 text-xs font-medium text-muted transition-colors duration-300 group-hover:border-blue-500/15"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-500">
                      View Project Details
                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
    );
  }

  const detailSections = [
    {
      title: "Challenges Faced",
      subtitle: "Development challenges and problem-solving",
      description:
        "Some of the technical challenges addressed during development.",
      items: project.challenges,
      icon: Wrench,
      number: "01",
    },
    {
      title: "Future Plans",
      subtitle: "Potential improvements and next steps",
      description:
        "Ideas for improving functionality, performance, and user experience.",
      items: project.futurePlans,
      icon: Rocket,
      number: "02",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-background px-5 pb-10 pt-28 sm:px-8 sm:pb-14 sm:pt-32 lg:px-12 lg:pb-16 lg:pt-36">
      <div className="pointer-events-none absolute -right-32 top-40 -z-0 h-80 w-80 rounded-full bg-blue-500/[0.08] blur-[110px]" />
      <div className="pointer-events-none absolute -left-32 top-[45%] -z-0 h-72 w-72 rounded-full bg-cyan-500/[0.06] blur-[100px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Back Navigation */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={transition}
        >
          <Link
            href="/#projects"
            className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-border bg-surface/70 px-4 py-2.5 text-sm font-semibold transition-all duration-300 hover:border-blue-500/40 hover:bg-blue-500/[0.05] hover:text-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
          >
            <ArrowLeft size={17} />
            Back to Projects
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.section
          variants={reveal}
          initial="hidden"
          animate="visible"
          transition={{
            ...transition,
            delay: reduceMotion ? 0 : 0.05,
          }}
          className="mt-10"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-lg border border-blue-500/20 bg-blue-500/[0.08] px-3 py-1.5 font-mono text-xs font-semibold text-blue-500">
              PROJECT {project.number}
            </span>

            {project.featured && (
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-500/20 bg-cyan-500/[0.08] px-3 py-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                <CheckCircle2 size={14} />
                Featured Project
              </span>
            )}
          </div>

          <p className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-blue-500">
            {project.subtitle}
          </p>

          <h1 className="mt-3 break-words text-3xl font-extrabold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
            {project.description}
          </p>

          {/* Project Links */}
          <div className="mt-7 flex flex-wrap gap-3">
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={reduceMotion ? undefined : { y: -3, scale: 1.02 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-shadow duration-300 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
            >
              <Globe size={17} />
              Live Project
              <ExternalLink size={15} />
            </motion.a>

            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={reduceMotion ? undefined : { y: -3, scale: 1.02 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border bg-surface/80 px-5 py-3 text-sm font-semibold transition-colors duration-300 hover:border-blue-500/40 hover:bg-blue-500/[0.05] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
            >
              <Code2 size={17} />
              Client Source Code
              <ArrowUpRight size={16} />
            </motion.a>
          </div>
        </motion.section>

        {/* Project Screenshot */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 35, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            ease: "easeOut",
            delay: reduceMotion ? 0 : 0.1,
          }}
          className="mt-10 overflow-hidden rounded-3xl border border-border/80 bg-surface/80 p-2 shadow-xl shadow-blue-950/[0.04] sm:mt-12 sm:p-3"
        >
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-surface-secondary sm:aspect-[16/9]">
            <Image
              src={project.image}
              alt={`${project.title} website screenshot`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-contain object-center transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>
        </motion.div>

        {/* Description and Technology Stack */}
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.85fr] lg:gap-8">
          <motion.section
            initial={reduceMotion ? false : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={transition}
            className="rounded-3xl border border-border/80 bg-surface/80 p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-blue-500/[0.04] sm:p-8"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
                <FileText size={22} />
              </span>

              <div>
                <h2 className="text-xl font-bold">Brief Description</h2>
                <p className="mt-1 text-xs text-muted">Project overview</p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-8 text-muted sm:text-base">
              {project.description}
            </p>

            <div className="mt-6 border-t border-border pt-5">
              <p className="text-sm font-semibold">Project Information</p>

              <div className="mt-4 flex items-start justify-between gap-4 py-2 text-sm">
                <span className="shrink-0 text-muted">Project Number</span>
                <span className="font-semibold">{project.number}</span>
              </div>

              <div className="flex items-start justify-between gap-4 py-2 text-sm">
                <span className="shrink-0 text-muted">Category</span>
                <span className="max-w-[65%] text-right font-semibold">
                  {project.subtitle}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4 py-2 text-sm">
                <span className="text-muted">Live Status</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                  Available Online
                </span>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={reduceMotion ? false : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              ...transition,
              delay: reduceMotion ? 0 : 0.12,
            }}
            className="rounded-3xl border border-border/80 bg-surface/80 p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-cyan-500/[0.04] sm:p-8"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                <Layers3 size={22} />
              </span>

              <div>
                <h2 className="text-xl font-bold">Main Technology Stack</h2>
                <p className="mt-1 text-xs text-muted">
                  Technologies used in this project
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {project.technologies.map((technology, index) => (
                <motion.span
                  key={technology}
                  initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.3,
                    delay: reduceMotion ? 0 : index * 0.04,
                  }}
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface-secondary px-3.5 py-2.5 text-sm font-medium transition-colors duration-300 hover:border-blue-500/30 hover:bg-blue-500/[0.05]"
                >
                  <Code2 size={15} className="shrink-0 text-blue-500" />
                  {technology}
                </motion.span>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-blue-500/15 bg-gradient-to-br from-blue-500/[0.07] to-cyan-500/[0.04] p-5">
              <p className="text-sm font-bold">Explore the project</p>

              <p className="mt-2 text-sm leading-6 text-muted">
                Visit the deployed website or inspect the client repository to
                explore the project further.
              </p>

              <div className="mt-4 flex flex-wrap gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors duration-300 hover:text-cyan-500 dark:text-blue-400"
                >
                  Live Website
                  <ArrowUpRight size={16} />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors duration-300 hover:text-cyan-500 dark:text-blue-400"
                >
                  GitHub Repository
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </motion.section>
        </div>

        {/* Challenges and Future Plans */}
        <section className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2">
          {detailSections.map((section, index) => {
            const SectionIcon = section.icon;

            return (
              <motion.article
                key={section.title}
                initial={reduceMotion ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.55,
                  delay: reduceMotion ? 0 : index * 0.12,
                  ease: "easeOut",
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -4,
                        transition: { duration: 0.25 },
                      }
                }
                className="rounded-3xl border border-border/80 bg-surface/80 p-6 shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/[0.04] sm:p-8"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500 transition-transform duration-300 group-hover:scale-105">
                    <SectionIcon size={23} />
                  </span>

                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-500">
                      SECTION {section.number}
                    </p>

                    <h2 className="mt-2 text-xl font-bold sm:text-2xl">
                      {section.title}
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-muted">
                      {section.subtitle}
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-sm leading-7 text-muted">
                  {section.description}
                </p>

                <ul className="mt-5 space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <motion.li
                      key={`${section.title}-${itemIndex}`}
                      initial={reduceMotion ? false : { opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.35,
                        delay: reduceMotion ? 0 : itemIndex * 0.06,
                      }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-blue-500"
                      />

                      <span className="text-sm leading-7 text-foreground/85">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </section>

        {/* Other Projects */}
        <motion.section
          initial={reduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={transition}
          className="mt-16 border-t border-border pt-10 sm:mt-20 sm:pt-12"
        >
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500">
                Keep Exploring
              </p>

              <h2 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
                Other Projects
              </h2>
            </div>

            <Link
              href="/#projects"
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-blue-500 transition-colors duration-300 hover:text-cyan-500"
            >
              All Projects
              <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects
              .filter((item) => item.number !== project.number)
              .map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.45,
                    delay: reduceMotion ? 0 : index * 0.08,
                  }}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -5,
                          transition: { duration: 0.2 },
                        }
                  }
                >
                  <Link
                    href={`/projects?project=${encodeURIComponent(item.number)}`}
                    className="group block h-full rounded-2xl border border-border/80 bg-surface/70 p-5 transition-[border-color,box-shadow] duration-300 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/[0.04] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-mono text-xs text-blue-500">
                        PROJECT {item.number}
                      </span>

                      <ArrowUpRight
                        size={18}
                        className="text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-500"
                      />
                    </div>

                    <h3 className="mt-4 text-lg font-bold">{item.title}</h3>

                    <p className="mt-2 text-sm leading-6 text-muted">
                      {item.subtitle}
                    </p>

                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-500">
                      View Details
                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-0.5"
                      />
                    </span>
                  </Link>
                </motion.div>
              ))}
          </div>
        </motion.section>

        {/* Bottom Navigation */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="mt-12 flex justify-center"
        >
          <Link
            href="/#projects"
            className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-border bg-surface/70 px-5 py-3 text-sm font-semibold transition-all duration-300 hover:border-blue-500/40 hover:bg-blue-500/[0.05] hover:text-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
          >
            <ArrowLeft size={17} />
            Back to Portfolio
          </Link>
        </motion.div>
      </div>
    </main>
  );
}

export default function ProjectDetailsPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-background px-5">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-blue-500/20 border-t-blue-500" />
        </main>
      }
    >
      <ProjectDetailsContent />
    </Suspense>
  );
}
