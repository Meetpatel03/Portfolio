"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      Hi, I'm Meet Patel, a Machine Learning Engineer & Data Analyst with expertise in AI, NLP, and Web Development. I build scalable ML models, optimize data pipelines, and integrate AI into applications using Python, TensorFlow, and AWS. Passionate about solving complex problems, I create efficient, high-performance solutions for real-world impact.
      </p>

      <p className="mb-3">
      When I'm not coding, you’ll find me experimenting in the kitchen, taking long walks, or engaging in deep conversations with people. These moments help me reconnect, find inspiration, and often lead to my best ideas.
      </p>
      
    </motion.section>
  );
}
