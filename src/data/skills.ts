import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";
import { SiExpress, SiFlask } from "react-icons/si";

// Languages
import CPP from "@/public/icons/C++.svg";
import CsssSvg from "@/public/icons/css.svg";
import HtmlSvg from "@/public/icons/html.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
import PythonSvg from "@/public/icons/python.svg";



// Backend
import NodejsSvg from "@/public/icons/nodejs.svg";
import react from "@/public/icons/reactjs.svg";

// Database and ORMS
import MongoDBSvg from "@/public/icons/mongodb.svg";
import mysqlicon from "@/public/icons/mysql-icon.svg";

// Tools and Tech
import Docker from "@/public/icons/docker.svg";
import GitSvg from "@/public/icons/git.svg";
import PostmanSvg from "@/public/icons/postman.svg";
import Redis from "@/public/icons/redis.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      {
        name: "HTML",
        icon: HtmlSvg,
      },
      {
        name: "CSS",
        icon: CsssSvg,
      },
      {
        name: "Javascript",
        icon: JavascriptSvg,
      },
      {
        name: "Python",
        icon: PythonSvg,
      },
      {
        name: "C++",
        icon: CPP,
      },
    ],
  },
  {
    sectionName: "Web Development",
    skills: [
      {
        name: "Nodejs",
        icon: NodejsSvg,
      },
      {
        name: "Express",
        icon: SiExpress,
      },
      {
        name: "Reactjs",
        icon: react,
      },
      {
        name: "Flask",
        icon: SiFlask,
      },
    ],
  },
  {
    sectionName: "Databases and ORMs",
    skills: [
      {
        name: "MongoDB",
        icon: MongoDBSvg,
      },
      {
        name: "mysql",
        icon: mysqlicon,
      },
    ],
  },
  {
    sectionName: "Tools and Technologies",
    skills: [
      {
        name: "Git",
        icon: GitSvg,
      },
      {
        name: "Docker",
        icon: Docker,
      },
      {
        name: "Postman",
        icon: PostmanSvg,
      },
      {
        name: "Redis",
        icon: Redis,
      },
    ],
  },
];
