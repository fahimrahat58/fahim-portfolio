"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  Code2,
  CheckCircle2,
  Layers3,
  FolderOpen,
} from "lucide-react";

import { projects, type Project } from "../../data/projects";

export default function ProjectDetailsPage() {
  const reduceMotion = useReducedMotion();
  const [project, setProject] = useState<Project | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const updateProject = () => {
      const params = new URLSearchParams(window.location.search);
      const projectNumber = params.get("project");

      const selectedProject = projects.find(
        (item) => item.number === projectNumber,
      );

      setProject(selectedProject ?? null);
      setMounted(true);
    };

    updateProject();

    window.addEventListener("popstate", updateProject);

    return () => {
      window.removeEventListener("popstate", updateProject);
    };
  }, []);

  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0 },
  };

  if (!mounted) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background px-5">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-blue-500/20 border-t-blue-500" />
      </main>
    );
  }

  if (!project) {
    return (
      <main className="relative min-h-screen overflow-hidden bg-background px-5 py-20 sm:px-8">
        <div className="pointer-events-none absolute left-1/2 top-20 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/[0.08] blur-[100px]" />

        <div className="relative mx-auto max-w-6xl">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface/70 px-4 py-2.5 text-sm font-semibold text-foreground transition hover:border-blue-500/40 hover:text-blue-500"
          >
            <ArrowLeft size={17} />
            Back to Portfolio
          </Link>

          <motion.div
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: reduceMotion ? 0 : 0.5 }}
            className="mb-10 mt-14"
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-500">
              Project Showcase
            </p>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
              Explore My Projects
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
              Explore the technologies, features, and ideas behind my web
              development projects.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((item, index) => (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.45,
                  delay: reduceMotion ? 0 : index * 0.08,
                }}
                className="group overflow-hidden rounded-3xl border border-border/80 bg-surface/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-xl"
              >
                <Link
                  href={`/projects?project=${encodeURIComponent(item.number)}`}
                  className="block"
                >
                  <div className="relative m-3 aspect-[16/10] overflow-hidden rounded-2xl bg-surface-secondary sm:m-4">
                    <Image
                      src={item.image}
                      alt={`${item.title} project preview`}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
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
                        className="shrink-0 text-muted transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-500"
                      />
                    </div>

                    <p className="mt-3 text-sm leading-7 text-muted">
                      {item.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-border bg-surface-secondary px-3 py-1.5 text-xs font-medium text-muted"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-500">
                      View Project Details
                      <ArrowUpRight size={16} />
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

  return (
    <main className="relative min-h-screen overflow-hidden bg-background px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
      <div className="pointer-events-none absolute -right-32 top-24 -z-0 h-80 w-80 rounded-full bg-blue-500/[0.08] blur-[110px]" />

      <div className="pointer-events-none absolute -left-32 top-[45%] -z-0 h-72 w-72 rounded-full bg-cyan-500/[0.06] blur-[100px]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, x: reduceMotion ? 0 : -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.4 }}
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface/70 px-4 py-2.5 text-sm font-semibold text-foreground shadow-sm transition-all hover:border-blue-500/40 hover:bg-blue-500/[0.05] hover:text-blue-500"
          >
            <ArrowLeft size={17} />
            Back to Projects
          </Link>
        </motion.div>

        <motion.div
          variants={reveal}
          initial="hidden"
          animate="visible"
          transition={{
            duration: reduceMotion ? 0 : 0.55,
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

          <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
            {project.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
            >
              Live Demo
              <ExternalLink size={17} />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border bg-surface/80 px-5 py-3 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-blue-500/40 hover:bg-blue-500/[0.05] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
            >
              <Code2 size={17} />
              Source Code
              <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.6,
            delay: reduceMotion ? 0 : 0.15,
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
              className="object-contain object-center"
            />
          </div>
        </motion.div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:gap-8">
          <motion.section
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{
              duration: reduceMotion ? 0 : 0.5,
              delay: reduceMotion ? 0 : 0.2,
            }}
            className="rounded-3xl border border-border/80 bg-surface/80 p-6 shadow-sm sm:p-8"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/[0.10] text-blue-500">
                <FolderOpen size={22} />
              </span>

              <div>
                <h2 className="text-xl font-bold">About the Project</h2>
                <p className="mt-1 text-xs text-muted">Project overview</p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-8 text-muted sm:text-base">
              {project.description}
            </p>

            <div className="mt-6 border-t border-border pt-5">
              <p className="text-sm font-semibold">Project Information</p>

              <div className="mt-4 flex items-center justify-between gap-4 py-2 text-sm">
                <span className="text-muted">Project Number</span>
                <span className="font-semibold">{project.number}</span>
              </div>

              <div className="flex items-center justify-between gap-4 py-2 text-sm">
                <span className="text-muted">Category</span>
                <span className="text-right font-semibold">
                  {project.subtitle}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4 py-2 text-sm">
                <span className="text-muted">Status</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                  Live
                </span>
              </div>
            </div>
          </motion.section>

          <motion.section
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{
              duration: reduceMotion ? 0 : 0.5,
              delay: reduceMotion ? 0 : 0.28,
            }}
            className="rounded-3xl border border-border/80 bg-surface/80 p-6 shadow-sm sm:p-8"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/[0.10] text-cyan-600 dark:text-cyan-400">
                <Layers3 size={22} />
              </span>

              <div>
                <h2 className="text-xl font-bold">Technology Stack</h2>
                <p className="mt-1 text-xs text-muted">
                  Tools and technologies used
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface-secondary px-3.5 py-2.5 text-sm font-medium transition-colors hover:border-blue-500/30 hover:bg-blue-500/[0.05]"
                >
                  <Code2 size={15} className="text-blue-500" />
                  {technology}
                </span>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-blue-500/15 bg-gradient-to-br from-blue-500/[0.07] to-cyan-500/[0.04] p-5">
              <p className="text-sm font-bold">Explore the project</p>

              <p className="mt-2 text-sm leading-6 text-muted">
                Visit the live website to explore the interface, or browse the
                source code to learn more about the implementation.
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-cyan-500 dark:text-blue-400"
                >
                  Visit Website
                  <ArrowUpRight size={16} />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-cyan-500 dark:text-blue-400"
                >
                  View Repository
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </motion.section>
        </div>

        <section className="mt-16 border-t border-border pt-10 sm:mt-20">
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
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-blue-500 transition-colors hover:text-cyan-500"
            >
              All Projects
              <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects
              .filter((item) => item.number !== project.number)
              .map((item) => (
                <Link
                  key={item.number}
                  href={`/projects?project=${encodeURIComponent(item.number)}`}
                  className="group rounded-2xl border border-border/80 bg-surface/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-xs text-blue-500">
                      PROJECT {item.number}
                    </span>

                    <ArrowUpRight
                      size={18}
                      className="text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-500"
                    />
                  </div>

                  <h3 className="mt-4 text-lg font-bold">{item.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-muted">
                    {item.subtitle}
                  </p>
                </Link>
              ))}
          </div>
        </section>

        <div className="mt-12 flex justify-center">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface/70 px-5 py-3 text-sm font-semibold transition-all hover:border-blue-500/40 hover:text-blue-500"
          >
            <ArrowLeft size={17} />
            Back to Portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}
