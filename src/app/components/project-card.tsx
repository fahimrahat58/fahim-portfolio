"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Code2, ExternalLink, FileText } from "lucide-react";

import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const reduceMotion = useReducedMotion();
  const router = useRouter();

  const detailsUrl = `/projects?project=${encodeURIComponent(project.number)}`;

  function handleCardClick(event: React.MouseEvent<HTMLElement>) {
    const target = event.target as HTMLElement;

    // Keep links and buttons inside the card working independently.
    if (target.closest("a, button")) return;

    router.push(detailsUrl);
  }

  function handleCardKeyDown(event: React.KeyboardEvent<HTMLElement>) {
    if (event.target !== event.currentTarget) return;

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      router.push(detailsUrl);
    }
  }

  return (
    <motion.article
      role="link"
      tabIndex={0}
      aria-label={`View details for ${project.title}`}
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
      initial={{ opacity: 0, y: reduceMotion ? 0 : 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{
        duration: reduceMotion ? 0 : 0.55,
        delay: reduceMotion ? 0 : (index % 2) * 0.12,
        ease: "easeOut",
      }}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-border/80 bg-surface/90 shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-blue-500/35 hover:shadow-2xl hover:shadow-blue-950/[0.07] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 dark:hover:shadow-black/25"
    >
      {/* Background Effect */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/[0.035] via-transparent to-cyan-400/[0.035] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Project Image */}
      <div className="relative m-3 mb-0 overflow-hidden rounded-2xl border border-border/70 bg-surface-secondary sm:m-4 sm:mb-0">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={project.image}
            alt={`${project.title} website screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/[0.04] to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-50" />

          {/* Project Number */}
          <span className="absolute left-3 top-3 rounded-xl border border-white/20 bg-black/60 px-3 py-1.5 font-mono text-xs font-medium tracking-wide text-white shadow-lg backdrop-blur-xl sm:left-4 sm:top-4">
            {project.number}
          </span>

          {/* Featured Badge */}
          {project.featured && (
            <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-xl border border-blue-300/30 bg-blue-600/90 px-3 py-1.5 text-xs font-semibold text-white shadow-lg backdrop-blur-xl sm:right-4 sm:top-4">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-200" />
              Featured
            </span>
          )}

          {/* Image Hover Content */}
          <div className="pointer-events-none absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:bottom-4 sm:left-4 sm:right-4">
            <span className="max-w-[75%] truncate rounded-lg border border-white/15 bg-black/50 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-xl">
              {project.subtitle}
            </span>

            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/15 text-white backdrop-blur-xl">
              <ArrowUpRight size={18} />
            </span>
          </div>
        </div>
      </div>

      {/* Project Information */}
      <div className="relative flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600 dark:text-blue-400">
          {project.subtitle}
        </p>

        <div className="mt-2 flex items-start justify-between gap-3">
          <h3 className="text-xl font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 sm:text-2xl">
            {project.title}
          </h3>

          <ArrowUpRight
            size={21}
            className="mt-1 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-500"
          />
        </div>

        <p className="mt-3 flex-1 text-sm leading-7 text-muted">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-xl border border-border/80 bg-surface-secondary/80 px-3 py-1.5 text-xs font-medium text-muted transition-all duration-300 group-hover:border-blue-500/20 group-hover:bg-blue-500/[0.035] group-hover:text-foreground"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-wrap items-center gap-2.5 border-t border-border/80 pt-5">
          {/* Live Demo */}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => event.stopPropagation()}
            className="relative z-10 inline-flex min-h-10 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-600/15 transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-500 hover:to-indigo-500 hover:shadow-lg hover:shadow-blue-600/25 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
          >
            Live Demo
            <ExternalLink size={15} />
          </a>

          {/* Source Code */}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => event.stopPropagation()}
            className="relative z-10 inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-border bg-surface/70 px-3.5 py-2.5 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500/35 hover:bg-blue-500/[0.05] hover:text-blue-600 dark:hover:text-blue-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
          >
            <Code2 size={16} />
            Source Code
          </a>

          {/* Project Details */}
          <Link
            href={detailsUrl}
            aria-label={`View details for ${project.title}`}
            onClick={(event) => event.stopPropagation()}
            className="relative z-10 inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-blue-500/30 bg-blue-500/[0.05] px-3.5 py-2.5 text-sm font-semibold text-blue-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500/50 hover:bg-blue-500/10 dark:text-blue-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
          >
            <FileText size={16} />
            Details
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
