"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import ThemeToggle from "@/app/components/theme-toggle";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const reduceMotion = useReducedMotion();

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Close menu with Escape and on desktop resize.
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Navigate to the correct section after returning to the home page.
  useEffect(() => {
    if (pathname !== "/") return;

    const hash = window.location.hash;
    if (!hash) return;

    let attempts = 0;
    let frame = 0;

    const scrollToSection = () => {
      const target = document.getElementById(hash.slice(1));

      if (target) {
        target.scrollIntoView({
          behavior: reduceMotion ? "auto" : "smooth",
          block: "start",
        });
        return;
      }

      if (attempts < 30) {
        attempts += 1;
        frame = requestAnimationFrame(scrollToSection);
      }
    };

    frame = requestAnimationFrame(scrollToSection);

    return () => cancelAnimationFrame(frame);
  }, [pathname, reduceMotion]);

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    setMenuOpen(false);

    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    // Navigate home first if the user is on another page.
    if (pathname !== "/") {
      event.preventDefault();
      router.push(`/${href}`);
      return;
    }

    const target = document.getElementById(href.slice(1));

    if (target) {
      event.preventDefault();

      window.history.pushState(null, "", `/${href}`);

      target.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.header
      initial={reduceMotion ? false : { y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: reduceMotion ? 0 : 0.5,
        ease: "easeOut",
      }}
      className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 shadow-sm shadow-black/[0.02] backdrop-blur-2xl"
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-2 px-3 min-[375px]:px-4 sm:h-[72px] sm:px-8 lg:px-12"
      >
        {/* Logo */}
        <Link
          href="/#home"
          onClick={(event) => handleNavigation(event, "#home")}
          aria-label="Fahim Muntasir Rahat - Home"
          className="group flex min-w-0 shrink items-center gap-2 sm:gap-2.5"
        >
          <span className="relative shrink-0 rounded-full p-[2px]">
            <span className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

            <Image
              src="/images/profile.jpg"
              alt="Fahim Muntasir Rahat"
              width={42}
              height={42}
              priority
              className="relative h-9 w-9 rounded-full border-2 border-background object-cover transition-transform duration-300 group-hover:scale-105 sm:h-10 sm:w-10"
            />
          </span>

          <span className="truncate text-sm font-bold tracking-tight min-[375px]:text-[15px] sm:text-base">
            <span className="hidden min-[360px]:inline">Fahim </span>
            Muntasir
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              {" "}
              Rahat
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 rounded-full border border-border/70 bg-surface/70 p-1 shadow-sm backdrop-blur-xl md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={`/${link.href}`}
              onClick={(event) => handleNavigation(event, link.href)}
              className="rounded-full px-3 py-2 text-sm font-medium text-muted transition-all duration-300 hover:bg-accent-soft hover:text-accent lg:px-4"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden shrink-0 items-center gap-3 md:flex">
          <ThemeToggle />

          <Link
            href="/#contact"
            onClick={(event) => handleNavigation(event, "#contact")}
            className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-500/15 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/25 lg:px-5"
          >
            Let&apos;s Talk
            <ArrowUpRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2 md:hidden">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="relative z-[60] flex h-10 w-10 shrink-0 touch-manipulation items-center justify-center rounded-full border border-border bg-surface/70 transition-colors hover:border-accent/40 hover:bg-accent-soft hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full z-[60] max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border bg-background shadow-xl shadow-black/10 md:hidden"
        >
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-3 py-3 min-[375px]:px-4 sm:px-8 sm:py-4">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={reduceMotion ? false : { opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.2,
                  delay: reduceMotion ? 0 : index * 0.03,
                }}
              >
                <Link
                  href={`/${link.href}`}
                  onClick={(event) => handleNavigation(event, link.href)}
                  className="flex min-h-12 touch-manipulation items-center rounded-xl border border-transparent px-4 py-3 text-sm font-medium text-muted transition-colors hover:border-accent/15 hover:bg-accent-soft hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <Link
              href="/#contact"
              onClick={(event) => handleNavigation(event, "#contact")}
              className="mt-2 flex min-h-12 touch-manipulation items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-blue-500/15 transition-shadow hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Let&apos;s Talk
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </motion.header>
  );
}
