import {
  FaAws,
  FaGitAlt,
  FaGithub,
  FaLinkedin,
  FaNodeJs,
  FaReact,
  FaSass,
  FaVuejs,
} from "react-icons/fa"
import {
  SiExpress,
  SiFastify,
  SiFastlane,
  SiFirebase,
  SiGmail,
  SiGooglecloud,
  SiJest,
  SiLua,
  SiPrisma,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiZod,
} from "react-icons/si"
import { TbBrandCSharp, TbBrandNextjs, TbBrandVite } from "react-icons/tb"
import type { FooterData, PersonalProject, TechStack } from "@/types"

export const headerNavItems = [
  { name: "Tech Stack", route: "#tech_stack" },
  { name: "Career", route: "#career" },
  { name: "Contact", route: "#contact" },
]

export const footerData: FooterData = {
  author: `Copyright © ${new Date().getFullYear()} Victor Wernay.`,
  socialUrls: [
    {
      name: "Github",
      url: "https://github.com/vWernay",
      icon: <FaGithub />,
      type: "gray",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/victor-lellis/",
      icon: <FaLinkedin />,
      type: "linkedin",
    },
    {
      name: "Gmail",
      url: "mailto:victorlwernay@gmail.com",
      icon: <SiGmail />,
      type: "red",
    },
  ],
}

export const introductionAvatar = {
  url: "https://avatars.githubusercontent.com/u/32583593?v=4",
  name: "vWernay",
}
export const resumeLink =
  "https://docs.google.com/document/d/1F1E2vIhEyUXvg0HAFJOUw291ydI5tRHYr2SmU983yaI/edit?usp=sharing"

export const techStacks: { [key: string]: TechStack[] } = {
  "Web (Frontend)": [
    {
      name: "React",
      icon: <FaReact size={20} />,
    },
    {
      name: "Vue",
      icon: <FaVuejs size={20} />,
    },
    {
      name: "NextJS",
      icon: <TbBrandNextjs size={20} />,
    },
    {
      name: "Typescript",
      icon: <SiTypescript size={20} />,
    },
    {
      name: "Vite",
      icon: <TbBrandVite size={20} />,
    },
    {
      name: "Redux",
      icon: <SiRedux size={20} />,
    },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss size={20} />,
    },
    {
      name: "SASS",
      icon: <FaSass size={20} />,
    },
  ],
  Backend: [
    {
      name: "Node.Js",
      icon: <FaNodeJs size={20} />,
    },
    {
      name: "Typescript",
      icon: <SiTypescript size={20} />,
    },
    {
      name: "Fastify",
      icon: <SiFastify size={20} />,
    },
    {
      name: "Express",
      icon: <SiExpress size={20} />,
    },
    {
      name: "Prisma",
      icon: <SiPrisma size={20} />,
    },
    {
      name: "Zod",
      icon: <SiZod size={20} />,
    },
    {
      name: "CSharp",
      icon: <TbBrandCSharp size={20} />,
    },
  ],
  Others: [
    {
      name: "Lua",
      icon: <SiLua size={20} />,
    },
    {
      name: "CI/CD - Fastlane",
      icon: <SiFastlane size={20} />,
    },
    {
      name: "Firebase",
      icon: <SiFirebase size={20} />,
    },
    {
      name: "Git",
      icon: <FaGitAlt size={20} />,
    },
    {
      name: "Jest",
      icon: <SiJest size={20} />,
    },
    {
      name: "AWS Service",
      icon: <FaAws size={20} />,
    },
    {
      name: "Google Cloud",
      icon: <SiGooglecloud size={20} />,
    },
  ],
}

export const careerProjects: { [key: string]: PersonalProject[] } = {
  "Professional Work": [
    {
      name: "Alignerr",
      image: {
        url: "/images/alignerr.webp",
        alt: "Alignerr",
      },
      summary:
        "Enhanced LLM code generation quality by designing and executing rigorous testing and validation workflows. Analyzed model outputs to ensure correctness, handle edge cases, and maintain consistency across complex programming scenarios. Drove critical fine-tuning efforts by identifying systemic failure patterns and optimizing instructional design.",
      link: "https://www.alignerr.com/",
      techs: ["LLM", "RLHF", "SFT", "Lua", "Game Development", "JSON"],
    },
    {
      name: "Turing",
      image: {
        url: "/images/turing.webp",
        alt: "Turing Enterprises",
      },
      summary:
        "Acting as an AI Training Engineer (RLHF/SFT), refining advanced LLMs for reasoning capabilities. Responsible for auditing MCP (Model Context Protocol) agent tools and reducing logic inconsistencies in complex multi-turn conversations.",
      link: "https://www.turing.com/",
      techs: ["AI Agents", "LLM", "RLHF", "SFT", "Python", "JSON"],
    },
    {
      name: "ZentriX Systems",
      image: {
        url: "/images/zentrix_shop_preview.webp",
        alt: "ZentriX Digital Marketplace",
      },
      summary:
        "A proprietary SaaS and digital marketplace platform serving 300+ international clients. Originally an infrastructure project, it evolved into a modern e-commerce solution built with Next.js 15 and React 19, featuring automated payment gateways and customer management.",
      link: "https://zentrix-shop.com/",
      techs: [
        "Next.js 15",
        "React 19",
        "TypeScript",
        "Node.js",
        "MySQL",
        "Zustand",
        "Tebex API",
      ],
    },
    {
      name: "IF Developments",
      image: {
        url: "/images/if_developments_preview.webp",
        alt: "IF Developments Page",
      },
      summary:
        "Lead Full-Stack Developer for a premier software house in the gaming sector. Responsible for architecting high-performance backends and delivering polished, responsive User Interfaces for thousands of end-users.",
      link: "https://if-developments.tebex.io/",
      techs: [
        "React",
        "TypeScript",
        "Lua",
        "Redux",
        "Zustand",
        "MySQL",
        "SCSS",
      ],
    },
  ],
  "Real-Time Systems": [
    {
      name: "KYC Age Gate for FiveM",
      image: {
        url: "/images/kyc-age-gate.svg",
        alt: "KYC age verification flow for a FiveM server",
      },
      summary:
        "An age-verification system built for a FiveM server adapting to Brazil's ECA Digital requirements. I created a TypeScript/Node.js service that receives Didit webhooks, manages KYC sessions, and exposes an internal secure flow consumed by a server-side game script to ensure only verified 18+ players can join.",
      techs: [
        "Node.js",
        "TypeScript",
        "Fastify",
        "Drizzle",
        "mysql2",
        "Zod",
        "FiveM",
        "Lua",
        "Webhooks",
      ],
    },
    {
      name: "Phone NUI",
      image: {
        url: "/images/brp_phone.webp",
        alt: "Phone Interface",
      },
      summary:
        "A full-featured mobile script for FiveM, featuring a modern interface inspired by contemporary smartphone OS design. It includes core apps like Marketplace, Services, Quotes, Messages, Contacts, Bank, and Settings, all styled with a clean, flat look and subtle liquid glass effects.",
      techs: [
        "Vue",
        "TypeScript",
        "Pinia",
        "TailwindCSS",
        "MySQL",
        "Lua",
        "Vite",
      ],
    },
    {
      name: "Group Manager Enterprise",
      image: {
        url: "/images/groupmanager.webp",
        alt: "Group Manager Interface",
      },
      summary:
        "A comprehensive organization management system architected for high-concurrency environments. Features role-based access control (RBAC), multi-language support, and deep configuration capabilities.",
      techs: ["React", "TypeScript", "Redux", "MUI v5", "MySQL", "Lua", "Vite"],
    },
    {
      name: "FuelTech FT450 Sim",
      image: {
        url: "/images/brp_fueltech.webp",
        alt: "FuelTech Simulation",
      },
      summary:
        "A complex UI simulation project that replicates the real-world ECU FuelTech FT450 functionality within a browser environment (NUI), demonstrating pixel-perfect implementation and complex state management.",
      techs: ["JavaScript", "Lua", "CSS Modules", "MySQL"],
    },
    {
      name: "WheelSpin Dynamic",
      image: {
        url: "/images/brp_wheelspin.webp",
        alt: "WheelSpin System",
      },
      summary:
        "A physics-inspired gamification module featuring dynamic probability algorithms and prize management. Built to handle real-time user interactions with smooth animations and secure backend validation.",
      techs: [
        "React",
        "TypeScript",
        "ChakraUI",
        "Zustand",
        "Vite",
        "Lua",
        "MySQL",
      ],
    },
    {
      name: "Legacy Dashboard",
      image: { url: "/images/zentrix_dashboard.webp", alt: "Game Dashboard" },
      summary:
        "A full-stack player control panel and e-commerce integration. Handled user authentication, inventory management, and real-time data syncing between the web interface and the game server.",
      techs: [
        "React",
        "Node.js",
        "Express",
        "MySQL",
        "Sequelize",
        "Payment APIs",
      ],
    },
  ],
  "Open Source & R&D": [
    {
      name: "Node.js ETL Pipeline",
      image: {
        url: "/images/node-pg-csv.webp",
        alt: "Node.js ETL Pipeline",
      },
      summary:
        "High-performance ETL (Extract, Transform, Load) script designed to process large datasets. Utilizes Node.js Streams and Pipeline API to export PostgreSQL data to CSV with minimal memory footprint.",
      link: "https://github.com/vWernay/node-pg-csv",
      techs: ["Node.js Streams", "TypeScript", "PostgreSQL", "Performance"],
    },
    {
      name: "CashInfinitec Mobile",
      image: { url: "/images/cashinfinitec.webp", alt: "CashInfinitec APP" },
      summary:
        "A Fintech mobile prototype developed for business modeling analysis. Built with React Native and Expo, focusing on clean architecture and strict type validation with Zod.",
      link: "https://github.com/vWernay/cashinfinitec-app",
      techs: ["React Native", "Expo", "TypeScript", "NativeWind", "Zod"],
    },
    {
      name: "IoT Car Controller",
      image: {
        url: "/images/gg_arduino_car_controller.webp",
        alt: "Arduino Controller APP",
      },
      summary:
        "IoT mobile application for educational robotics. Bridges React Native via Bluetooth Classic to control Arduino-based hardware in real-time.",
      link: "https://github.com/vWernay/gg-arduino-car-controller",
      techs: [
        "React Native",
        "Bluetooth Protocol",
        "TypeScript",
        "Expo",
        "IoT",
      ],
    },
    {
      name: "Plann.er (Trip Planner)",
      image: { url: "/images/planner_preview.webp", alt: "Plann.er Page" },
      summary:
        "Full-stack travel management application. Implemented modern backend patterns with Fastify/Prisma and a reactive frontend for collaborative trip planning.",
      link: "https://github.com/vWernay/nlw-journey",
      techs: [
        "React",
        "TypeScript",
        "Node.js",
        "Fastify",
        "Prisma",
        "TailwindCSS",
      ],
    },
  ],
}
