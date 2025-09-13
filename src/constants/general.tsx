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
  author: `Copyright © ${new Date().getFullYear()} Victor Lellis.`,
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
  "https://drive.google.com/file/d/1ytuyxhAkIsJSMwhKfH4Ic-Q0CHpacHKl/view?usp=sharing"

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
  Works: [
    {
      name: "ZentriX Shop",
      image: {
        url: "/images/zentrix_shop_preview.webp",
        alt: "ZentriX Shop Website",
      },
      summary:
        "ZentriX Shop was started by me on 2019 as a Cfx.re (FiveM) Server, nowadays became a Shop with about 300 public customers, providing ready packages and private orders. Recently, I developed the storefront using Next 15, React 19 and Tebex API.",
      link: "https://zentrix-shop.com/",
      techs: [
        "Lua",
        "Typescript",
        "NodeJs",
        "ReactJs",
        "VueJs",
        "SCSS",
        "Redux",
        "Zustand",
        "MySQL",
        "NextJs",
      ],
    },
    {
      name: "IF Developments",
      image: {
        url: "/images/if_developments_preview.webp",
        alt: "IF Developments Page",
      },
      summary:
        "I'm a Senior Fullstack Developer at IF Developments, which provides to the Cfx.re community the highest quality experience, using modern UI's and backend.",
      link: "https://if-developments.tebex.io/",
      techs: [
        "Lua",
        "Typescript",
        "ReactJs",
        "SCSS",
        "Redux",
        "Zustand",
        "MySQL",
      ],
    },
  ],
  Freelance: [
    {
      name: "Game Dashboard",
      image: { url: "/images/zentrix_dashboard.webp", alt: "Dashboard" },
      summary:
        "A Game Dashboard and built-in store for a MTA server, built in 2021.",
      techs: [
        "Javascript",
        "React",
        "Axios",
        "SCSS",
        "MUI v4",
        "NodeJs",
        "Express",
        "MySQL",
        "Sequelize",
        "Payment Gateways",
      ],
    },
    {
      name: "FuelTech NUI",
      image: {
        url: "/images/brp_fueltech.webp",
        alt: "FuelTech In game (GTA 5)",
      },
      summary:
        "Developed a custom NUI interface for FiveM, simulating the functionality of the FuelTech FT450.",
      techs: ["Javascript", "jQuery", "SCSS", "MySQL", "Lua"],
    },
    {
      name: "WheelSpin NUI",
      image: {
        url: "/images/brp_wheelspin.webp",
        alt: "WheelSpin In game (GTA 5)",
      },
      summary:
        "Developed a dynamic wheelspin script inspired by Forza Horizon 5 for FiveM. This project features dynamic prize management and a faithful recreation of the Forza wheelspin interface, delivering an authentic experience for players.",
      techs: [
        "TypeScript",
        "React",
        "ChakraUI",
        "Zustand",
        "Vite",
        "MySQL",
        "Lua",
      ],
    },
    {
      name: "Groupmanager",
      image: {
        url: "/images/groupmanager.webp",
        alt: "Groupmanager In game (GTA 5)",
      },
      summary:
        "A powerful and versatile FiveM script developed over one year to provide seamless group/org management for servers. Featuring more than 10 pages, it delivers extensive functionality while supporting multi-language environments and themes. Designed with flexibility in mind, the script is entirely configurable, making it easy to adapt to various server needs and ensuring an optimal user experience.",
      techs: ["TypeScript", "React", "MUI v5", "Redux", "Vite", "MySQL", "Lua"],
    },
  ],
  "Open Source": [
    {
      name: "CashInfinitec App",
      image: { url: "/images/cashinfinitec.webp", alt: "CashInfinitec APP" },
      summary:
        "It's a mobile app developed during a college project focused on business modeling and requirements analysis. After the prototyping phase in Figma, I decided to independently develop the mobile application using React Native with Expo.",
      link: "https://github.com/vWernay/cashinfinitec-app",
      techs: ["React Native", "Typescript", "Expo", "NativeWind", "Zod"],
    },
    {
      name: "Arduino Car Controller",
      image: {
        url: "/images/gg_arduino_car_controller.webp",
        alt: "Arduino Controller APP",
      },
      summary:
        'It\'s a mobile application developed for the "CEM 01 do Guará" educational institution, designed to control Arduino-based BT cars made on robotics classes, using Classic Bluetooth.',
      link: "https://github.com/vWernay/gg-arduino-car-controller",
      techs: [
        "React Native",
        "Typescript",
        "Expo",
        "TailwindCSS",
        "Classic Bluetooth Lib",
      ],
    },
    {
      name: "Node.js - PostgreSQL to CSV",
      image: {
        url: "/images/node-pg-csv.webp",
        alt: "Illustration with PostgreSQL, Node.js and CSV icons.",
      },
      summary:
        "A Node.js script that exports huge data from a PostgreSQL database into a CSV file using streams, pipeline and query cursor.",
      link: "https://github.com/vWernay/node-pg-csv",
      techs: ["Typescript", "NodeJs", "PostgreSQL"],
    },
    {
      name: "Plann.er (NLW Journey)",
      image: { url: "/images/planner_preview.webp", alt: "Plann.er Page" },
      summary:
        "A Website designed to help you and your friends plan trips, record activities, and save useful links. The project was developed during the NLW Journey by Rocketseat in July 2024.",
      link: "https://github.com/vWernay/nlw-journey",
      techs: [
        "Typescript",
        "React",
        "Vite",
        "TailwindCSS",
        "Axios",
        "NodeJs",
        "Prisma",
        "Fastify",
        "Zod",
      ],
    },
    {
      name: "Time Capsule (NLW Spacetime)",
      image: {
        url: "/images/time_capsule_preview.webp",
        alt: "Time Capsule Previews",
      },
      summary:
        "A full-stack application, from back-end to mobile, works like a time capsule that stores past memories in a timeline. The project was developed during the NLW Spacetime by Rocketseat in May 2023.",
      link: "https://github.com/vWernay/nlw-12-spacetime-ignite",
      techs: [
        "Typescript",
        "React",
        "React Native",
        "NextJs",
        "Vite",
        "Expo",
        "TailwindCSS",
        "Axios",
        "NodeJs",
        "Prisma",
        "Fastify",
        "Zod",
      ],
    },
  ],
}
