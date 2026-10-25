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
    number: "02",
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
    number: "03",
    title: "Book Vibe",
    subtitle: "Book Discovery & Reading Lists",
    description:
      "A book-focused web application for exploring books and organizing reading lists and wishlists.",
    image: "/images/projects/book-vibe.png",
    technologies: ["React", "JavaScript", "CSS", "Authentication"],
    liveUrl: "https://book-vibe-six-delta.vercel.app/",
    githubUrl: "https://github.com/fahimrahat58/book-vibe",
    featured: false,
    challenges: [
      "Displaying book information in an organized and user-friendly interface.",
      "Building reusable components for book cards and related content.",
      "Managing reading lists and wishlist interactions in the user interface.",
      "Maintaining a consistent layout across different screen sizes.",
    ],
    futurePlans: [
      "Add advanced book search and filtering options.",
      "Improve reading list and wishlist management.",
      "Introduce book ratings and user reviews.",
      "Enhance the book discovery experience with personalized recommendations.",
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
