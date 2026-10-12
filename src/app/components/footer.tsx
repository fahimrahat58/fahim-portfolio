import Link from "next/link";
import { ArrowUp, GitBranch, Link2 } from "lucide-react";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-border px-5 py-7 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <Link href="#home" className="text-lg font-semibold tracking-tight">
          Fahim<span className="text-accent">.</span>
        </Link>

        <p className="text-sm text-muted">
          © {currentYear} Fahim Muntasir Rahat. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/fahimrahat58"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <GitBranch size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/fahim-muntasir-rahat-46ba6b2a7/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <Link2 size={18} />
          </a>

          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white transition-colors hover:bg-accent-hover"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
