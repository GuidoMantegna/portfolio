export interface ProjectInfo {
  id: number;  
  title: string;
  description: string;
  stack: string;
  image: string;
  mockups?: string;
  background?: string;
  links: { name: string; url: string; type: string }[];
}

export const PROJECTS_INFO: ProjectInfo[] = [
  {
    id: 1,
    title: "Full-Stack Movie Rec. App",
    description: "Developed a dynamic full-stack app that enables users to request personalized movie recommendations based on their mood. With a sign-up feature, users can actively ask for or provide recommendations. Built using the MERN stack (MongoDB, Express, React, Node.js).",
    stack: "mongo, express, react, node, typescript, tailwind, vite, mongoose",
    image: "/recs-thumbnail.png",
    mockups: "/recs-mockups.png",
    background: "/recs-back.png",
    links: [
      {
        name: "Webapp",
        url: "https://recs-tailwind.vercel.app/",
        type: "deploy",
      },
      {
        name: "Front-end",
        url: "https://github.com/GuidoMantegna/recs-tailwind",
        type: "repo",
      },
      {
        name: "Back-end",
        url: "https://github.com/GuidoMantegna/recs-api",
        type: "repo",
      },
      {
        name: "API Docs",
        url: "https://documenter.getpostman.com/view/21593652/2sA2rFSzzU#intro",
        type: "docs",
      },
    ],
  },
  {
    id: 2,
    title: "Tech Marketplace with Points System",
    description: "Built a fully responsive web app where users redeem products through a points-based system, providing a seamless experience across all devices.",
    stack: "react, javascript, sass, axios, redux, redux-thunk, vercel",
    image: "/techmarket-thumbnail.png",
    mockups: "/techmarket-mockups.png",
    background: "/techmarket-back.png",
    links: [
      {
        name: "Webapp",
        url: "https://aerolab-challenge-guidomantegna.vercel.app/",
        type: "deploy",
      },
      {
        name: "Repository",
        url: "https://github.com/GuidoMantegna/Aerolab-Challenge",
        type: "repo",
      },
    ],
  },
  {
    id: 3,
    title: "Retro Trivia Game",
    description: "Developed a trivia game with multiple topics, featuring multiple-choice and true/false questions. Designed a Gameboy-inspired UI for a nostalgic user experience.",
    stack: "next, typescript, sass, vercel",
    image: "/gameboy-thumbnail.png",
    mockups: "/gameboy-mockups.png",
    background: "/gameboy-back.png",
    links: [
      {
        name: "Webapp",
        url: "https://blackbox-vision-challenge-one.vercel.app/",
        type: "deploy",
      },
      {
        name: "Repository",
        url: "https://github.com/GuidoMantegna/blackbox-vision-challenge",
        type: "repo",
      },
    ],
  },
  {
    id: 4,
    title: "Groceries Shop & Recipes",
    description: "Created an app for purchasing groceries, exploring meal recipes, and discovering food facts. Integrated with TheMealDB API to deliver a rich selection of recipes and meal insights.",
    stack: "react, typescript, react-router-dom, custom hooks, redux-thunk, chakra",
    image: "/mealmarket-thumbnail.png",
    mockups: "/mealmarket-mockups.png",
    background: "/mealmarket-back.png",
    links: [
      {
        name: "Webapp",
        url: "https://meals-market.vercel.app/",
        type: "deploy",
      },
      {
        name: "Repository",
        url: "https://github.com/GuidoMantegna/meals-market",
        type: "repo",
      },
    ],
  },
  {
    id: 5,
    title: "Mercado Libre's API Integration",
    description: "Developed a fully responsive Mercado Libre clone with dynamic rendering powered by React Router and the useParams hook. Integrated MELI's API for real-time data retrieval, with styling implemented using Bootstrap and Sass.",
    stack: "react, typescript, react-router-dom, bootstrap, hooks",
    image: "/meli-thumbnail.png",
    // mockups: "/meli-mockups.png",
    background: "/meli-back.png",
    links: [
      {
        name: "Webapp",
        url: "https://dynamic-routes-swart.vercel.app/",
        type: "deploy",
      },
      {
        name: "Repository",
        url: "https://github.com/GuidoMantegna/Dynamic-Routes",
        type: "repo",
      },
    ],
  },
];
