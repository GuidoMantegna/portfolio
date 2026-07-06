export interface ProjectInfo {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  tags: string[];
  features: string[];
  link: string;
  github: string;
  image: string;
}

export const PROJECTS_INFO: ProjectInfo[] = [
  {
    id: 1,
    title: "Adictos Al Padel",
    subtitle: "Padel event management platform",
    description: "• Padel event management platform for events discovery, registration and reservations.",
    longDescription: "• Padel event management platform featuring Google OAuth authentication, event discovery and registration, reservations, waitlists, and a comprehensive admin dashboard for managing events, players, and payments.",
    tags: ["Next.js", "Supabase", "React Query", "Untitled UI"],
    features: ["50+ Components", "WCAG 2.1 Compliant", "Tree Shakeable", "Dark Mode Support"],
    link: "https://adictos-al-padel.vercel.app/",
    github: "",
    image: "/adictos-al-padel.png",
  },
  {
    id: 2,
    title: "Threat Intelligence Dashboard",
    subtitle: "Dashboard Demo (web app)",
    description: "• Dashboard for monitoring cybersecurity threat indicators and intelligence campaigns.",
    longDescription: "• Dashboard for monitoring cybersecurity threat indicators and intelligence campaigns. Features include real-time data visualization, filtering mechanisms, and performance-optimized UI rendering.",
    tags: ["React", "TypeScript", "Vitest", "Tailwind CSS"],
    features: ["50+ Components", "WCAG 2.1 Compliant", "Tree Shakeable", "Dark Mode Support"],
    link: "https://augur-challenge.vercel.app/",
    github: "https://github.com/GuidoMantegna/augur-challenge",
    image: "/augur-dashboard.png",
  },
  {
    id: 3,
    title: "Multi-Tenant Beauty Center Booking Systemant",
    subtitle: "Booking Platform",
    description: "• Booking platform MVP that allows users to explore beauty center services and schedule appointments online.",
    longDescription: "• Booking platform MVP that allows users to explore beauty center services and schedule appointments online. The system is designed with multi-tenant capabilities and flexible scheduling logic.",
    tags: ["Next.js", "TypeScript", "Radix UI", "React Test Library"],
    features: ["Real-time Collaboration", "20+ Chart Types", "Custom Themes", "Data Export"],
    link: "https://arionkoder-challenge.vercel.app/",
    github: "https://github.com/GuidoMantegna/arionkoder-challenge",
    image: "/beauty-center.png",
  },
  {
    id: 4,
    title: "Movies Recommendation",
    subtitle: "Social media platform",
    description: "• Full-stack MERN application that generates personalized movie recommendations based on user mood.",
    longDescription: "• Full-stack MERN application that generates personalized movie recommendations based on user mood. Includes API design, dynamic filtering, and a scalable full-stack architecture.",
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
    features: ["Physics Engine", "Gesture Support", "Spring Animations", "Performance Optimized"],
    link: "https://recs-tailwind.vercel.app",
    github: "https://github.com/GuidoMantegna/recs-api",
    image: "/movies-rec.png",
  },
  // {
  //   id: 5,
  //   title: "Meals Market",
  //   subtitle: "Groceries Shop & Recipes App",
  //   description: "• Web application for purchasing groceries, exploring recipes, and discovering food facts.",
  //   longDescription: "• Web application for purchasing groceries, exploring recipes, and discovering food facts. Includes product catalog management, dynamic UI filtering, and recipe exploration.",
  //   tags: ["React", "Redux", "Chakra UI", "React Router"],
  //   features: ["Auto Tracking", "Detailed Analytics", "Goal Setting", "IDE Integrations"],
  //   link: "https://meals-market.vercel.app/",
  //   github: "#https://github.com/GuidoMantegna/meals-market",
  //   image: "/meals-market.png",
  // },
]

export const ROLES = [
  "// Frontend Developer",
  "// Software Engineer",
  "// Product Builder",
  "// Love to build things",
];

export const HARD_SKILLS = [
  // {skill: "HTML", badge: },
  // {skill: "CSS"},
  { skill: "JavaScript", badge: "https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black" },
  { skill: "TypeScript", badge: "https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white" },
  { skill: "React.js", badge: "https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black" },
  { skill: "Git", badge: "https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white" },
  { skill: "Tailwind", badge: "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white" },
  { skill: "Node", badge: "https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white" },
  { skill: "MongoDB", badge: "https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white" },
  { skill: "Express", badge: "https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white" },
  { skill: "Supabase", badge: "https://img.shields.io/badge/Supabase-38B2AC?style=flat&logo=supabase&logoColor=white" },
  { skill: "Next.js", badge: "https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white" },
  { skill: "Jest", badge: "https://img.shields.io/badge/Jest-99424F?style=flat&logo=jest&logoColor=white" },
  // { skill: "SASS", badge: "https://img.shields.io/badge/SASS-CC6699?style=flat&logo=sass&logoColor=white" },
  { skill: "Figma", badge: "https://img.shields.io/badge/Figma-F24E1E?style=flat&logo=figma&logoColor=white" },
  // { skill: "Chakra UI", badge: "https://img.shields.io/badge/Chakra_UI-319795?style=flat&logo=chakra-ui&logoColor=white" },
  { skill: "Jira", badge: "https://img.shields.io/badge/Jira-0052CC?style=flat&logo=jira&logoColor=white" },
  { skill: "React Query", badge: "https://img.shields.io/badge/React_Query-FF4154?style=flat&logo=react-query&logoColor=white" },
  // { skill: "Postman", badge: "https://img.shields.io/badge/Postman-FF6C33?style=flat&logo=postman&logoColor=white" },
  // { skill: "SCRUM", badge: "https://img.shields.io/badge/SCRUM-000000?style=flat&logo=scrum&logoColor=white" },
  // { skill: "NPM", badge: "https://img.shields.io/badge/NPM-C10000?style=flat&logo=npm&logoColor=white" },
];

export const SOCIAL_LINKS = [
  { name: "Email", info: "mantegnaguido@gmail.com", url: "mailto:mantegnaguido@gmail.com" },
  { name: "LinkedIn", info: "in/mantegnaguido", url: "https://www.linkedin.com/in/guidomantegna/" },
  { name: "GitHub", info: "mantegnaguido", url: "https://github.com/GuidoMantegna" },
  { name: "X", info: "mantegnaguido", url: "https://x.com/guidomantegna" },
];