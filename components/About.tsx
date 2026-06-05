"use client";

import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CodeIcon,
  SmartPhone01Icon,
  Award01Icon
} from "@hugeicons/core-free-icons";

export default function About() {
  const stats = [
    { number: "7+", label: "Months of Experience", color: "from-indigo-500 to-indigo-600" },
    { number: "5+", label: "Projects Completed", color: "from-purple-500 to-purple-600" },
    { number: "100%", label: "Client Satisfaction", color: "from-cyan-500 to-cyan-600" },
  ];

  const highlights = [
    {
      icon: CodeIcon,
      title: "MERN-Stack Development",
      description: "Building reliable web applications with React, Node.js, Express, and MongoDB, focused on clean structure, responsive interfaces, and practical performance.",
      color: "text-indigo-400",
    },
    {
      icon: SmartPhone01Icon,
      title: "Mobile App Development",
      description: "Creating cross-platform mobile apps with React Native that feel smooth, usable, and consistent across Android and iOS devices.",
      color: "text-cyan-400",
    },
    {
      icon: Award01Icon,
      title: "Problem Solving & Clean Code",
      description: "Turning real project requirements into maintainable features through clear logic, reusable components, and steady attention to code quality.",
      color: "text-purple-400",
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-[#050506] border-y border-zinc-900/60 overflow-hidden">
      <div className="absolute top-[30%] right-[-10%] w-[35rem] h-[35rem] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-[-15%] w-[30rem] h-[30rem] rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase"
          >
            Who I Am
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Bio & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Building practical web and mobile products with modern tools and thoughtful design.
            </h3>
            
            <div className="text-zinc-400 text-xs sm:text-sm space-y-4 leading-relaxed font-sans">
              <p>
                I&apos;m <strong className="text-white">Muhammad Sharif Khaqan</strong>, a Full Stack Web and Mobile App Developer focused on building clean, responsive, and user-friendly applications. I work with modern technologies like React, Node.js, Express, MongoDB, and React Native to turn ideas into functional digital products.
              </p>
              <p>
                My experience includes role-based management systems, dashboard interfaces, API-driven applications, and cross-platform mobile apps. I care about writing maintainable code, improving the user experience, and delivering solutions that are useful, reliable, and easy to grow over time.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="glass border border-white/5 rounded-2xl p-5 text-center flex flex-col items-center justify-center relative overflow-hidden group hover:border-white/10 transition-colors duration-300"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  <span className="text-3xl font-extrabold text-white tracking-tight">
                    {stat.number}
                  </span>
                  <span className="text-[10px] font-mono font-semibold tracking-wider text-zinc-500 uppercase mt-1.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Focus Areas */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            <div className="glass-premium rounded-3xl p-6 md:p-8 flex flex-col gap-6">
              <h4 className="text-sm font-semibold tracking-widest text-zinc-400 uppercase font-mono">
                My Core Competencies
              </h4>

              <div className="flex flex-col gap-6">
                {highlights.map((hl, idx) => (
                  <div key={idx} className="flex gap-4 group">
                    <div className="size-10 rounded-xl glass border border-white/10 flex items-center justify-center shrink-0 group-hover:border-white/20 transition-all duration-300">
                      <HugeiconsIcon icon={hl.icon} className={`size-5 ${hl.color}`} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h5 className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors duration-200">
                        {hl.title}
                      </h5>
                      <p className="text-[11px] text-zinc-400 leading-relaxed font-sans">
                        {hl.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
