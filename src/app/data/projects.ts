export interface Project {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  number: string;
}

export const projects: Project[] = [
  {
    number: "01",
    title: "Bazar Dor",
    subtitle: "Market Price Tracking Platform",
    description:
      "A product price tracking and comparison platform that helps people explore everyday essentials and compare market prices in Bangladesh.",
    image: "/images/projects/bazar-dor.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Better Auth"],
    liveUrl: "https://bazar-dor-fahims.vercel.app/",
    githubUrl: "https://github.com/fahimrahat58/bazar-dor",
    featured: true,
  },
  {
    number: "02",
    title: "Bangla News 24",
    subtitle: "Bangla News Platform",
    description:
      "A Bengali news website featuring categorized news content, API integration, responsive layouts, and user authentication.",
    image: "/images/projects/bangla-news24.png",
    technologies: ["Next.js", "TypeScript", "REST API", "Better Auth"],
    liveUrl: "https://bangla-news24-7.vercel.app/",
    githubUrl: "https://github.com/fahimrahat58/bangla-news24-7",
    featured: true,
  },
  {
    number: "03",
    title: "Book Vibe",
    subtitle: "Book Discovery & Reading Lists",
    description:
      "A book-focused web application for exploring books and organizing reading lists and wishlists.",
    image: "/images/projects/book-vibe.png",
    technologies: ["React", "JavaScript", "Authentication"],
    liveUrl: "https://book-vibe-six-delta.vercel.app/",
    githubUrl: "https://github.com/fahimrahat58/book-vibe",
    featured: false,
  },
  {
    number: "04",
    title: "FitLog",
    subtitle: "Fitness & Workout Tracking",
    description:
      "A fitness project focused on workout tracking and creating a structured digital experience for exercise routines.",
    image: "/images/projects/fitlog.png",
    technologies: ["React", "JavaScript", "Web Development"],
    liveUrl: "https://fit-log-plum.vercel.app/",
    githubUrl: "https://github.com/fahimrahat58/Fit-Log",
    featured: false,
  },
];
