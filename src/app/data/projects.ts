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
  challenges: string[];
  futurePlans: string[];
}

export const projects: Project[] = [
  {
    number: "01",
    title: "HireLoop",
    subtitle: "Job Portal & Recruitment Platform",
    description:
      "A modern job portal designed to connect job seekers with recruiters through a streamlined recruitment experience. Job seekers can explore job opportunities, apply for positions, track their applications, and manage their profiles. Recruiters can create and manage job listings, review applications, and manage candidates. Built with Next.js, TypeScript, Node.js, Express.js, MongoDB, and Better Auth.",
    image: "/images/projects/hireloop.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Better Auth",
      "JWT",
      "REST API",
      "Stripe",
      "Vercel",
    ],
    liveUrl: "https://hire-loop-client-smoky.vercel.app",
    githubUrl: "https://github.com/fahimrahat58/hire-loop-client",
    featured: true,
    challenges: [
      "Building separate dashboards and experiences for job seekers and recruiters.",
      "Implementing secure authentication and role-based access control.",
      "Connecting frontend components with backend job and application APIs.",
      "Managing job applications and tracking application statuses.",
      "Integrating subscription and payment functionality using Stripe.",
      "Creating responsive dashboards and reusable components for different screen sizes.",
    ],
    futurePlans: [
      "Add real-time notifications for job applications and recruitment updates.",
      "Introduce advanced job search with filters for location, salary, and job type.",
      "Add interview scheduling and candidate management features.",
      "Improve recruiter analytics and application tracking.",
      "Enhance accessibility and optimize performance across devices.",
    ],
  },
  {
    number: "02",
    title: "ShobaiMile",
    subtitle: "Volunteer Community Platform",
    description:
      "A community-focused platform designed to connect people through volunteering and social initiatives. Users can explore community events, participate in activities, manage their profiles, track their social impact, earn certificates, and view community leaderboards. Built with Next.js, TypeScript, MongoDB, and Better Auth.",
    image: "/images/projects/shobaimile.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Better Auth",
      "JWT",
      "REST API",
      "Vercel",
    ],
    liveUrl: "https://shobaimile.vercel.app/",
    githubUrl: "https://github.com/fahimrahat58/shobaimile-client",
    featured: true,
    challenges: [
      "Building a community-focused platform with clear navigation and an engaging user experience.",
      "Integrating authentication and managing user-related functionality.",
      "Organizing community events and providing dedicated pages for event discovery and details.",
      "Developing impact tracking features to present community participation and progress.",
      "Creating reusable components and responsive layouts for different screen sizes.",
    ],
    futurePlans: [
      "Add real-time notifications for new events and community activities.",
      "Introduce event reviews and participant feedback.",
      "Improve event discovery with advanced search and filtering.",
      "Expand community impact analytics and reporting.",
      "Enhance accessibility and optimize performance across devices.",
    ],
  },
  {
    number: "03",
    title: "Bazar Dor",
    subtitle: "Market Price Tracking Platform",
    description:
      "A product price tracking and comparison platform that helps people explore everyday essentials and compare market prices in Bangladesh.",
    image: "/images/projects/bazar-dor.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Better Auth",
      "MongoDB",
      "REST API",
    ],
    liveUrl: "https://bazar-dor-fahims.vercel.app/",
    githubUrl: "https://github.com/fahimrahat58/bazar-dor",
    featured: true,
    challenges: [
      "Building a responsive interface that works smoothly across mobile, tablet, and desktop screens.",
      "Integrating product and category APIs while handling loading states and unexpected responses.",
      "Implementing authentication and protecting routes that require a signed-in user.",
      "Organizing product browsing, filtering, and sorting for a clear user experience.",
    ],
    futurePlans: [
      "Add price history and product price comparison charts.",
      "Improve search, filtering, and sorting capabilities.",
      "Introduce product price alerts and a wishlist feature.",
      "Optimize performance and accessibility across devices.",
    ],
  },
  {
    number: "04",
    title: "Bangla News 24",
    subtitle: "Bangla News Platform",
    description:
      "A Bengali news website featuring categorized news content, API integration, responsive layouts, and user authentication.",
    image: "/images/projects/bangla-news24.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
      "Better Auth",
    ],
    liveUrl: "https://bangla-news24-7.vercel.app/",
    githubUrl: "https://github.com/fahimrahat58/bangla-news24-7",
    featured: true,
    challenges: [
      "Organizing news content into categories for easier navigation.",
      "Fetching and displaying API data in a consistent and readable layout.",
      "Creating responsive news cards and page layouts for different screen sizes.",
      "Integrating authentication into the overall user experience.",
    ],
    futurePlans: [
      "Add a personalized news feed based on user interests.",
      "Introduce bookmarks and saved articles.",
      "Improve search and category-based filtering.",
      "Optimize article loading speed and accessibility.",
    ],
  },
];
