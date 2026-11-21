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
    title: "PizzaHub",
    subtitle: "Online Pizza Ordering & Restaurant Management Platform",
    description:
      "A full-stack pizza ordering platform designed to connect customers with restaurants through a seamless food ordering experience. Customers can explore restaurants, browse menus, customize their orders, manage carts, make secure payments, track orders, and receive personalized pizza recommendations through Taste DNA. Vendors can manage restaurants, menus, orders, and subscriptions, while admins oversee platform activities. Built with Next.js, TypeScript, Node.js, Express.js, MongoDB, Better Auth, and Stripe.",
    image: "/images/projects/pizzahub.png",
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
      "Resend",
      "ImgBB",
      "Vercel",
    ],
    liveUrl: "https://pizzahub-mocha.vercel.app/",
    githubUrl: "https://github.com/fahimrahat58/pizzahub-client",
    featured: true,
    challenges: [
      "Implementing secure JWT authentication with Better Auth JWKS verification and role-based access control.",
      "Building separate customer, vendor, and admin experiences with protected dashboards and routes.",
      "Integrating Stripe Checkout and secure webhook handling for payment verification and subscription management.",
      "Developing advanced menu filtering, searching, sorting, and pagination through API query parameters.",
      "Building the Taste DNA recommendation engine to generate personalized pizza recommendations from customer activity.",
      "Managing order status transitions, payment consistency, and delivery-date restrictions.",
      "Implementing reliable email notifications and secure image uploads using Resend and ImgBB.",
    ],
    futurePlans: [
      "Add real-time order tracking and delivery updates.",
      "Introduce customer reviews and richer restaurant ratings.",
      "Improve recommendation accuracy with additional customer preference signals.",
      "Expand vendor analytics and sales reporting.",
      "Optimize performance and accessibility across devices.",
    ],
  },
  {
    number: "02",
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
    number: "03",
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
    number: "04",
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
];
