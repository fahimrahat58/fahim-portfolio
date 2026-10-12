"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Code2, ExternalLink } from "lucide-react";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={{ opacity: 0, y: reduceMotion ? 0 : 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{
        duration: reduceMotion ? 0 : 0.55,
        delay: reduceMotion ? 0 : (index % 2) * 0.12,
        ease: "easeOut",
      }}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface transition-colors duration-300 hover:border-accent/40 hover:shadow-2xl hover:shadow-blue-950/[0.07] dark:hover:shadow-black/20"
    >
      <div className="relative m-3 mb-0 overflow-hidden rounded-2xl border border-border bg-surface-secondary">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={project.image}
            alt={`${project.title} website screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-30" />

          <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/60 px-3 py-1.5 font-mono text-xs text-white backdrop-blur-md">
            {project.number}
          </span>

          {project.featured && (
            <span className="absolute right-4 top-4 rounded-full border border-blue-300/30 bg-blue-600/90 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
              Featured
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          {project.subtitle}
        </p>

        <div className="mt-2 flex items-start justify-between gap-3">
          <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
            {project.title}
          </h3>

          <ArrowUpRight
            size={21}
            className="mt-1 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
          />
        </div>

        <p className="mt-3 flex-1 text-sm leading-7 text-muted">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-border bg-surface-secondary px-3 py-1.5 text-xs font-medium text-muted transition-colors group-hover:border-accent/20"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-border pt-5">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-accent-hover"
          >
            Live Demo
            <ExternalLink size={15} />
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent"
          >
            <Code2 size={16} />
            Source Code
          </a>
        </div>
      </div>
    </motion.article>
  );
}
