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
    title: "Wanderlust",
    subtitle: "Travel Booking Platform",
    description:
      "A full-stack travel booking platform where users can explore destinations, view trip details, manage their profiles, and create bookings. Built with Next.js, Express.js, MongoDB, and Better Auth, with JWT-secured API requests and admin authorization.",
    image: "/images/projects/wanderlust.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "Better Auth",
      "JWT",
    ],
    liveUrl: "https://wanderlust-five-rose.vercel.app/",
    githubUrl: "https://github.com/fahimrahat58/wanderlust-client",
    featured: true,
    challenges: [
      "Connecting a Next.js frontend to a separately deployed Express.js backend.",
      "Implementing authentication and securely verifying JWTs for protected API requests.",
      "Managing destination details, booking operations, and user profile data.",
      "Restricting administrative actions with backend authorization.",
      "Handling API errors and maintaining a responsive experience across devices.",
    ],
    futurePlans: [
      "Integrate a secure online payment gateway for bookings.",
      "Add booking confirmation emails and notifications.",
      "Introduce destination reviews and ratings.",
      "Improve destination search, filtering, and personalized recommendations.",
    ],
  },
  {
    number: "02",
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
    number: "03",
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
  {
    number: "04",
    title: "FitLog",
    subtitle: "Fitness & Workout Tracking",
    description:
      "A fitness project focused on workout tracking and creating a structured digital experience for exercise routines.",
    image: "/images/projects/fitlog.png",
    technologies: ["React", "JavaScript", "CSS", "Responsive Web Design"],
    liveUrl: "https://fit-log-plum.vercel.app/",
    githubUrl: "https://github.com/fahimrahat58/Fit-Log",
    featured: false,
    challenges: [
      "Organizing workout-related information into a clear interface.",
      "Building reusable UI components for a consistent design.",
      "Making the layout usable across mobile and desktop devices.",
      "Structuring the interface to support future workout tracking features.",
    ],
    futurePlans: [
      "Add workout history and progress tracking.",
      "Introduce customizable workout routines.",
      "Display fitness progress using charts and statistics.",
      "Improve the mobile experience and overall accessibility.",
    ],
  },
];
