import React from "react";

import myPond from "@/public/mypond.png";
import tokyoDevs from "@/public/vite.png";
import littleSips from "@/public/littlesips.png";
import gameShop from '@/public/gameshop.png';

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },

  {
    name: "Contact",
    hash: "#contact",
  },
] as const;



export const projectsData = [
  {
    title: "MyPond",
    description:
      "I worked as a part-time developer on this project for 5 weeks. Students can reserve mentors and choose schools for college.",
    tags: ["Vue 3", "Next.js", "Tailwind CSS", "Figma","Nuxt.js","TypeScript"],
    imageUrl: myPond,
    link: 'https://diveintothepond.com/',
    
  },
  {
    title: "Team Devs",
    description:
      "Developed a collab web app with fellow front-end developers. Utilized Git for version control, hosted the repository on GitHub, and employed branches for independent work on various features or bug fixes.",
    tags: ["Vite", "TypeScript", "React", "Tailwind CSS", "Postgres SQL", "Docker","Express","Vercel"],
    imageUrl: tokyoDevs,
    link: 'https://vite-starter-gold.vercel.app/',
    
  },
  {
    title: "LittleSips",
    description:
      "Created a website using React.js for a client's cafe located in New Jersey,US to hone my skills doing real world projects after 4 months of learning React.js.",
    tags: ["React", "GSAP", "HTML", "CSS"],
    imageUrl: littleSips,
    link:'https://littlesips.vercel.app/',
  },
  {
    title: "GameShop",
    description:
      "Developed a web application using Next.js and Snipcart API to handle item addition and user payment method. After 2 months of learning Next.js",
    tags: ["React", "Next.js", "GraphCMS", "GSAP","MUI","Bootstrap","Apollo client"],
    imageUrl: gameShop,
    link:'https://gameshop.vercel.app/',
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "ES6",
  "MongoDB",
  "Photoshop",
  "GraphQL",
  "Apollo",
  "Vite",
  "PostgreSQL",
  "Vue",
  "GSAP",
  "Framer Motion",
] as const;
