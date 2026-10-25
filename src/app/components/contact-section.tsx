"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  UsersRound,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "Send me an email",
    href: "mailto:fahimrahat58@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+880 1915-835755",
    href: "tel:+8801915835755",
    icon: Phone,
  },
  {
    label: "GitHub",
    value: "Explore my code",
    href: "https://github.com/fahimrahat58",
    icon: Code2,
  },
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: "https://www.linkedin.com/in/fahim-muntasir-rahat-46ba6b2a7/",
    icon: UsersRound,
  },
];

const revealUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactSection() {
  const shouldReduceMotion = useReducedMotion();

  const initial = shouldReduceMotion ? false : "hidden";
  const visible = "visible";

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden border-t border-border px-5 py-24 sm:px-8 sm:py-28 lg:px-12"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/4 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/[0.08] blur-[110px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-72 w-72 rounded-full bg-cyan-500/[0.07] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          variants={revealUp}
          initial={initial}
          whileInView={visible}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 max-w-3xl md:mb-14"
        >
          <span className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-accent/20 bg-accent-soft/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-accent shadow-sm backdrop-blur-xl sm:text-sm">
            <MessageCircle size={16} />
            Get in Touch
          </span>

          <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-6xl">
            Have a project in mind?
            <span className="mt-2 block bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
              Let&apos;s talk.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
            I&apos;m open to web development opportunities, freelance projects
            and meaningful collaborations. Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:gap-8">
          <motion.div
            variants={revealUp}
            initial={initial}
            whileInView={visible}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="group relative overflow-hidden rounded-3xl border border-border/80 bg-surface/80 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-accent/30 hover:shadow-xl hover:shadow-blue-500/[0.06] sm:p-9 lg:p-10"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/[0.07] via-transparent to-cyan-500/[0.06]" />

            <div className="relative">
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/15 bg-gradient-to-br from-blue-500/15 to-cyan-500/10 text-accent shadow-sm transition-transform duration-300 group-hover:scale-105">
                <Mail size={25} strokeWidth={1.8} />
              </div>

              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent sm:text-sm">
                Start a Conversation
              </p>

              <h3 className="max-w-md text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
                Let&apos;s build something useful.
              </h3>

              <p className="mt-4 max-w-lg text-sm leading-7 text-muted sm:text-base sm:leading-8">
                Whether you have an opportunity, a project idea or simply want
                to connect, I&apos;d be happy to hear from you.
              </p>

              <a
                href="mailto:fahimrahat58@gmail.com"
                className="group/button mt-8 inline-flex min-h-12 items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/25"
              >
                <Mail size={18} />
                Email Me
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
                />
              </a>

              <div className="mt-8 h-px bg-gradient-to-r from-border via-border/60 to-transparent" />

              <p className="mt-5 text-xs leading-6 text-muted sm:text-sm">
                Open to meaningful collaborations and exciting web projects.
              </p>
            </div>
          </motion.div>

          <div className="grid content-start gap-4">
            {contactLinks.map((item, index) => {
              const Icon = item.icon;
              const isEmail = item.label === "Email";
              const isPhone = item.label === "Phone";

              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={isEmail || isPhone ? undefined : "_blank"}
                  rel={isEmail || isPhone ? undefined : "noreferrer"}
                  variants={{
                    hidden: { opacity: 0, x: 24 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  initial={initial}
                  whileInView={visible}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                    ease: "easeOut",
                  }}
                  whileHover={shouldReduceMotion ? undefined : { x: 4 }}
                  className="group relative flex min-w-0 items-center gap-3 overflow-hidden rounded-2xl border border-border/80 bg-surface/80 p-4 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-blue-500/[0.05] sm:gap-4 sm:p-6"
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-500/[0.04] to-cyan-500/[0.04] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/15 bg-gradient-to-br from-blue-500/15 to-cyan-500/10 text-accent transition-all duration-300 group-hover:scale-105 group-hover:shadow-md group-hover:shadow-blue-500/10 sm:h-12 sm:w-12">
                    <Icon size={21} strokeWidth={1.8} />
                  </span>

                  <span className="relative min-w-0 flex-1">
                    <span className="block font-bold tracking-tight">
                      {item.label}
                    </span>
                    <span className="mt-1 block break-words text-sm text-muted">
                      {item.value}
                    </span>
                  </span>

                  <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-all duration-300 group-hover:border-accent/30 group-hover:bg-accent-soft group-hover:text-accent sm:h-9 sm:w-9">
                    <ArrowDownRight
                      size={18}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
