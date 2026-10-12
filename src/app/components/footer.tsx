"use client";

import Link from "next/link";
import { ArrowUp, ArrowUpRight, GitBranch, Link2 } from "lucide-react";

const currentYear = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-border px-5 py-8 sm:px-8 sm:py-9 lg:px-12">
      <div className="pointer-events-none absolute -top-20 left-1/2 h-40 w-96 -translate-x-1/2 rounded-full bg-blue-500/[0.05] blur-[80px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2">
            <Link
              href="#home"
              className="group w-fit text-xl font-extrabold tracking-tight transition-colors duration-300 hover:text-accent"
            >
              Fahim
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                .
              </span>
            </Link>

            <p className="text-xs text-muted sm:text-sm">
              Building thoughtful digital experiences.
            </p>
          </div>

          <p className="order-last text-xs leading-6 text-muted sm:order-none sm:text-sm">
            © {currentYear} Fahim Muntasir Rahat. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/fahimrahat58"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface/70 text-muted transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-accent-soft hover:text-accent hover:shadow-lg hover:shadow-blue-500/[0.08]"
            >
              <GitBranch
                size={18}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/fahim-muntasir-rahat-46ba6b2a7/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface/70 text-muted transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-accent-soft hover:text-accent hover:shadow-lg hover:shadow-blue-500/[0.08]"
            >
              <Link2
                size={18}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="group flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/30"
            >
              <ArrowUp
                size={19}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </button>
          </div>
        </div>

        <div className="mt-7 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <div className="mt-5 flex flex-col items-center justify-between gap-2 text-xs text-muted sm:flex-row">
          <p>Designed & built with care.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-1.5 transition-colors hover:text-accent"
          >
            Back to top
            <ArrowUpRight
              size={13}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
