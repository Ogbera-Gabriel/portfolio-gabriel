"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        As a <span className="font-medium"> seasoned Front-End Engineer, </span>{" "}
        I specialize in crafting engaging user interfaces and seamless user
        experiences using cutting-edge technologies. With a strong foundation in{" "}
        <span className="font-medium"> React, Next.js and TypeScript. </span> I
        excel in developing robust, scalable, and maintainable front-end
        solutions.
      </p>
    </motion.section>
  );
}
