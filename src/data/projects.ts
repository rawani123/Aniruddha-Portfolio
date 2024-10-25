import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

// Remove the following line if siteMetadata is not used
// import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "ChatBuzz",
    href: "/projects",
    tags: ["Python", "Machine Learning"],
    image: {
      LIGHT: "/images/projects/chatbuzz.png",
      DARK: "/images/projects/chatbuzz.png",
    },
  },

  {
    index: 1,
    title: "SnapChat Clone",
    href: "/projects",
    tags: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Vercel",
      "REST API",
    ],
    image: {
      LIGHT: "/images/projects/snapchat.png",
      DARK: "/images/projects/snapchat.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "ChatBuzz",
    favicon: "/images/projects/logos/ML.ico",
    imageUrl: [
      "/images/projects/chatbuzz.png",
      "/images/projects/chatbuzz.png",
    ],
    description: "ChatApp using MERN Stack.",
    sourceCodeHref: "https://github.com/rawani123/Chat-App",
    liveWebsiteHref: "https://chat-app-gamma-rosy-11.vercel.app/",
  },

  {
    name: "SnapChat Clone",
    favicon: "/images/projects/logos/reactjs.ico",
    imageUrl: [
      "/images/projects/snapchat.png",
      "/images/projects/snapchat.png",
    ],
    description:
      "A Snapchat Clone is an app for real-time chat and snap uploads, allowing users to send disappearing photos and videos to friends.",
    sourceCodeHref: "https://github.com/rawani123/snapchat-clone",
  },

  {
    name: "My Portfolio",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/dark-portfolio.png"],
    description:
      "My personal portfolio website built using Next.js, Tailwind CSS, and Framer Motion.",
    sourceCodeHref: "https://github.com/kartik0323/kartikportfolio23",
  },
];
