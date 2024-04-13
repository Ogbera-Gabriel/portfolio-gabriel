"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About")
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
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
