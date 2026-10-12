"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  UsersRound,
  Mail,
  MessageCircle,
} from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "Send me an email",
    href: "mailto:fahimrahat58@gmail.com",
    icon: Mail,
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
      className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-28 lg:px-12"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          variants={revealUp}
          initial={initial}
          whileInView={visible}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-soft px-3 py-1.5 text-sm font-medium text-accent">
            <MessageCircle size={15} />
            Get in Touch
          </span>

          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-6xl">
            Have a project in mind?
            <span className="mt-2 block text-accent">Let&apos;s talk.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">
            I&apos;m open to web development opportunities, freelance projects
            and meaningful collaborations. Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:gap-12">
          <motion.div
            variants={revealUp}
            initial={initial}
            whileInView={visible}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="rounded-3xl border border-border bg-surface p-6 sm:p-9"
          >
            <p className="mb-2 text-sm font-medium text-accent">
              START A CONVERSATION
            </p>

            <h3 className="text-2xl font-semibold sm:text-3xl">
              Let&apos;s build something useful.
            </h3>

            <p className="mt-4 max-w-lg leading-7 text-muted">
              Whether you have an opportunity, a project idea or simply want to
              connect, I&apos;d be happy to hear from you.
            </p>

            <a
              href="mailto:fahimrahat58@gmail.com"
              className="group mt-7 inline-flex min-h-12 items-center gap-3 rounded-xl bg-accent px-5 py-3 font-medium text-white transition-colors hover:bg-accent-hover"
            >
              <Mail size={18} />
              Email Me
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>

          <div className="grid gap-3">
            {contactLinks.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.label === "Email" ? undefined : "_blank"}
                  rel={item.label === "Email" ? undefined : "noreferrer"}
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
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/40 sm:p-6"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <Icon size={21} />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold">{item.label}</span>
                    <span className="mt-1 block text-sm text-muted">
                      {item.value}
                    </span>
                  </span>

                  <ArrowDownRight
                    size={20}
                    className="shrink-0 text-muted transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent"
                  />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
