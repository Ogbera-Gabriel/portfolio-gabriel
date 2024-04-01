import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/chattr.png";
import rmtdevImg from "@/public/tea.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Front-End Developer",
    location: "Kiev, Ukraine",
    description:
      "I worked as a intern front-end developer for a start-up for 2 years. I also did some back-end work.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Berlin, Germany",
    description:
      "I'm now a front-end developer working for a start-up. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Chattr",
    description:
      "This is a Twitter Clone called Chattr where you can post, edit post, and delete post. Users can sign up and login to connect to friends. User can leaves comment and like post.",
    tags: ["React", "Express", "MongoDB", "CSS"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Tea-Explorer",
    description:
      "This is a beautiful site for Tea Connoisseurs. It was full-stack. User can create, delete, add favortite tea. Users can leave comments and likes",
    tags: ["Express", "JavaScript", "MongoDB", "Bootstrap", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
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
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "MySQL",
  "Nest",
  "Django",
  "Framer Motion",
] as const;