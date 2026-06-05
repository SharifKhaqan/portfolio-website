"use client";

import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { Briefcase01Icon, Calendar01Icon } from "@hugeicons/core-free-icons";

const experiences = [
  {
    role: "Front-End Internship",
    company: "Scholarbee (Pvt.) Ltd",
    period: "July 2025 - Sep 2025",
    description:
      "Completed a front-end development internship, enhancing skills in React and MUI under the guidance of senior developers. Contributed to real-world projects, deployed applications, and gained hands-on experience in building responsive, user-friendly interfaces and improving UI/UX through modern web development practices.",
  },
  {
    role: "Front-End Internship",
    company: "MoroSoft-Labs",
    period: "Feb 2025 - May 2025",
    description:
      "Successfully completed an internship where I developed multiple front-end projects using HTML, CSS, JavaScript, React, and Tailwind CSS. Gained practical experience in building responsive designs, interactive user interfaces, and enhancing UI/UX through modern web development practices while collaborating with the development team.",
  },
];

export default function Experience() {
  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
    },
  };

  return (
    <section
      id="experience"
      className="relative pt-16 pb-24 bg-[#050506] border-b border-zinc-900/60 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-[40%] left-[-10%] w-[30rem] h-[30rem] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-15%] w-[35rem] h-[35rem] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-20">
          <span className="text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase">
            My Career Path
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Professional Experience
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full" />
        </div>

        {/* Timeline container */}
        <div className="relative">
          
          {/* Vertical Center Line */}
          <motion.div
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500 origin-top transform md:-translate-x-1/2"
          />

          {/* Timeline Cards */}
          <div className="flex flex-col gap-12 md:gap-16">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row items-start md:items-center relative w-full ${
                    isEven ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  
                  {/* Timeline Node Point */}
                  <div className="absolute left-4 md:left-1/2 top-1.5 md:top-1/2 transform -translate-y-1/2 md:-translate-x-1/2 z-20 flex items-center justify-center size-8 rounded-full border-2 border-indigo-500 bg-black shadow-lg shadow-indigo-500/30">
                    <HugeiconsIcon
                      icon={Briefcase01Icon}
                      className="size-3.5 text-cyan-400"
                    />
                  </div>

                  {/* Card Element */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`w-full md:w-[calc(50%-2rem)] ml-12 md:ml-0 glass rounded-3xl p-6 sm:p-8 hover:border-white/10 transition-colors duration-300 relative group`}
                  >
                    {/* Glowing highlight orb on hover */}
                    <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-tr from-indigo-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none" />
                    
                    <div className="relative z-10 flex flex-col gap-4">
                      {/* Period Badge */}
                      <div className="flex items-center gap-2 text-zinc-500 text-xs font-semibold font-mono">
                        <HugeiconsIcon icon={Calendar01Icon} className="size-3.5 text-indigo-400" />
                        <span>{exp.period}</span>
                      </div>

                      {/* Header */}
                      <div className="flex flex-col">
                        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-200">
                          {exp.role}
                        </h3>
                        <span className="text-xs font-medium text-zinc-400 font-mono">
                          {exp.company}
                        </span>
                      </div>

                      {/* Body Description */}
                      <p className="text-[11px] sm:text-xs text-zinc-400 leading-relaxed font-sans">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
