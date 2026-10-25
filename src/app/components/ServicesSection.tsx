"use client";

import {
  Code2,
  Layers3,
  Database,
  ShieldCheck,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Responsive, modern, and user-friendly interfaces that work smoothly across desktop, tablet, and mobile devices.",
    icon: Code2,
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "Full-Stack Web Development",
    description:
      "Complete web application development, connecting interactive frontend experiences with reliable backend systems.",
    icon: Layers3,
    technologies: ["Next.js", "Node.js", "Express.js", "MongoDB"],
  },
  {
    number: "03",
    title: "API Integration",
    description:
      "Integrating REST APIs to connect applications with databases and external services for dynamic experiences.",
    icon: Database,
    technologies: ["REST API", "Fetch API", "MongoDB", "CRUD"],
  },
  {
    number: "04",
    title: "Authentication & Security",
    description:
      "Implementing user authentication, protected routes, and secure sign-in experiences for web applications.",
    icon: ShieldCheck,
    technologies: ["Better Auth", "Google Login", "Protected Routes"],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mb-14 max-w-2xl text-center sm:mb-16"
        >
          <span className="mb-4 inline-flex rounded-full border border-[#15A1BF]/20 bg-[#15A1BF]/10 px-4 py-2 text-sm font-medium text-[#15A1BF]">
            What I Offer
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            My <span className="text-[#15A1BF]">Services</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
            I help turn ideas into functional, responsive, and
            user-friendly web experiences using modern web technologies.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#15A1BF]/50 hover:shadow-xl hover:shadow-[#15A1BF]/5 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-[#15A1BF]/50 sm:p-8"
              >
                <div className="absolute right-6 top-6 text-4xl font-bold text-gray-100 transition-colors duration-300 group-hover:text-[#15A1BF]/10 dark:text-white/[0.04] sm:right-8 sm:top-8">
                  {service.number}
                </div>

                <div className="relative">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#15A1BF]/10 text-[#15A1BF] transition-all duration-300 group-hover:bg-[#15A1BF] group-hover:text-white">
                    <Icon size={27} strokeWidth={1.8} />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
                    {service.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-medium text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-300 sm:text-sm"
                      >
                        <CheckCircle2
                          size={13}
                          className="text-[#15A1BF]"
                        />
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center gap-2 text-sm font-medium text-[#15A1BF]">
                    <span>Explore service</span>
                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-[#15A1BF]/20 bg-[#15A1BF]/5 p-6 text-center sm:flex-row sm:p-8 sm:text-left"
        >
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Have a project in mind?
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
              Let&apos;s discuss how I can help bring your idea to life.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#15A1BF] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#118ba5] hover:shadow-lg hover:shadow-[#15A1BF]/20"
          >
            Contact Me
            <ArrowUpRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}