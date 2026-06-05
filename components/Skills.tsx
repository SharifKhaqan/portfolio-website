"use client";

import { motion, type Variants } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CodeIcon,
  Database01Icon,
  SmartPhone01Icon,
  CompassIcon
} from "@hugeicons/core-free-icons";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: CodeIcon,
    color: "from-indigo-500/20 to-indigo-500/10 text-indigo-400 border-indigo-500/20",
    glowColor: "group-hover:shadow-indigo-500/10",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "MUI",
      "HTML5 & CSS3",
    ],
  },
  {
    title: "Backend & Databases",
    icon: Database01Icon,
    color: "from-purple-500/20 to-purple-500/10 text-purple-400 border-purple-500/20",
    glowColor: "group-hover:shadow-purple-500/10",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "RESTful APIs",
      "Firebase",
    ],
  },
  {
    title: "Mobile Development",
    icon: SmartPhone01Icon,
    color: "from-cyan-500/20 to-cyan-500/10 text-cyan-400 border-cyan-500/20",
    glowColor: "group-hover:shadow-cyan-500/10",
    skills: [
      "React Native",
      "Expo",
      "Cross-Platform Development",
    ],
  },
  {
    title: "Tools & Technologies",
    icon: CompassIcon,
    color: "from-pink-500/20 to-pink-500/10 text-pink-400 border-pink-500/20",
    glowColor: "group-hover:shadow-pink-500/10",
    skills: [
      "Git & GitHub",
      "Vercel / Netlify",
      "Postman",
      "Agile / Scrum",
    ],
  },
];

export default function Skills() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="skills" className="relative py-24 bg-black overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-[20%] left-[5%] w-[30rem] h-[30rem] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-[35rem] h-[35rem] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
            What I Excel In
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Technical Skills
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full" />
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className={`group relative rounded-3xl glass p-6 sm:p-8 flex flex-col gap-6 hover:border-white/10 transition-all duration-500 shadow-md ${cat.glowColor}`}
            >
              {/* Card Background Overlay Glow */}
              <div className="absolute inset-0 rounded-3xl bg-white/[0.01] group-hover:bg-white/[0.02] transition-colors duration-500" />
              
              {/* Category Title & Icon */}
              <div className="flex items-center gap-4 relative z-10">
                <div className={`size-11 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center border shrink-0`}>
                  <HugeiconsIcon icon={cat.icon} className="size-5" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-wide group-hover:text-cyan-400 transition-colors duration-200">
                  {cat.title}
                </h3>
              </div>

              {/* Skills Badges */}
              <div className="flex flex-wrap gap-2.5 relative z-10">
                {cat.skills.map((skill, sIdx) => (
                  <Badge
                    key={sIdx}
                    variant="outline"
                    className="h-auto border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] font-semibold text-zinc-300 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-white"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
