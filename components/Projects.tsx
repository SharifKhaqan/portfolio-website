"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  GithubIcon,
  ArrowUpRight01Icon,
  SmartPhone01Icon,
  CodeIcon
} from "@hugeicons/core-free-icons";

const projects = [
  {
    title: "Smart Donor’s | FYP",
    category: "web",
    description:
      "The Smart Donor System is an AI-enabled web platform designed to streamline the blood donation process by connecting donors and recipients in real time. It integrates features such as live donor mapping, emergency alerts, QR verification, and automated assistance to ensure quick response and reliable communication. The system enhances accessibility, security, and awareness—ultimately building a scalable digital ecosystem that supports timely donations and saves lives.",
    tech: ["React.js","Node.js","Express.js","MongoDB","Tailwind CSS"],
    color: "from-indigo-500/20 via-purple-500/10 to-transparent",
    icon: CodeIcon,
  },
  {
    title: "Kingston Hospital: Full-Stack Mobile Appointment System",
    category: "mobile",
    description:
      "Developed a comprehensive mobile application using React Native, Expo, and TypeScript to streamline medical scheduling. Designed secure, role-specific interfaces for Patients, Doctors, and Administrators with features including virtual and in-clinic appointment booking. Integrated Firebase Authentication, Cloud Firestore, and Cloud Functions to deliver real-time data synchronization and secure administrative operations.",
    tech: ["React Native", "Expo", "TypeScript", "Expo Router", "Firebase"],
    github: "https://github.com/SharifKhaqan/Appointment-App",
    demo: "https://expo.dev/artifacts/eas/oKP7npuv8bZrhghxe37z73.apk",
    color: "from-cyan-500/20 via-indigo-500/10 to-transparent",
    icon: SmartPhone01Icon,
  },
  {
    title: "Job-Portal SaaS Web-Application",
    category: "web",
    description:
      "Developed a scalable, AI-powered full-stack SaaS platform designed to modernize the hiring process. The application features secure, role-based access control (RBAC) with dedicated, interactive dashboards for Candidates, Employers, and Admins. It leverages Artificial Intelligence for intelligent job recommendations and automated applicant matching, significantly improving recruitment efficiency. Built with a highly responsive UI using Tailwind CSS and robust RESTful APIs, to ensure high performance, real-time data tracking, and a premium user experience.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js","MongoDB", "OpenAI API"],
    github: "https://github.com/SharifKhaqan/job-portal-saas-frontend",
    demo: "https://job-portal-saas-frontend-2c14.vercel.app/",
    color: "from-purple-500/20 via-pink-500/10 to-transparent",
    icon: CodeIcon,
  },
  {
    title: "Todo-App",
    category: "web",
    description:
      "Collaborated with a backend Node.js developer to build a full-stack Todo app, contributing as a React front-end developer. Implemented responsive UI, task management features, and API integrations to ensure smooth interaction between front-end and backend services. Gained practical experience in team collaboration, real-world deployment, and full-stack development workflow.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "MUI"],
    github: "https://github.com/SharifKhaqan/todo-App",
    demo: "https://todo-smart-webapp.netlify.app/",
    color: "from-pink-500/20 via-indigo-500/10 to-transparent",
    icon: CodeIcon,
  },
  {
    title: "Travel & Tours Website",
    category: "web",
    description:
      "Developed a responsive travel and tours web app using HTML, CSS, and JavaScript with interactive features, smooth navigation, and a user-friendly interface showcasing destinations and packages.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/SharifKhaqan/Healet",
    demo: "https://sharifkhaqan.github.io/Hepta-project/",
    color: "from-pink-500/20 via-indigo-500/10 to-transparent",
    icon: CodeIcon,
  },
  {
    title: "Weather-App",
    category: "web",
    description:
      "A simple weather application that fetches real-time weather data using an API. Users can enter a city name in the search bar to get the current weather conditions, including temperature, a corresponding weather image, humidity, and wind speed.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/SharifKhaqan/weather-App",
    demo: "https://sharifkhaqan.github.io/weather-App/",
    color: "from-pink-500/20 via-indigo-500/10 to-transparent",
    icon: CodeIcon,
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-24 bg-black overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-[30%] right-[-10%] w-[35rem] h-[35rem] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[30rem] h-[30rem] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-12">
          <span className="text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase">
            My Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Featured Projects
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full" />
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center items-center gap-2 mb-12">
          {["all", "web", "mobile"].map((cat) => (
            <Button
              key={cat}
              variant={filter === cat ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(cat)}
              className={`rounded-full px-5 capitalize transition-all duration-300 ${
                filter === cat
                  ? "bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white border-transparent shadow-lg shadow-indigo-500/20"
                  : "border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 bg-zinc-950/40"
              }`}
            >
              {cat === "all" ? "All Projects" : cat === "web" ? "Web Apps" : "Mobile Apps"}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                layout
                key={proj.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-3xl glass overflow-hidden flex flex-col h-full hover:border-white/10 transition-all duration-500"
              >
                {/* Visual Accent Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${proj.color} opacity-30 group-hover:opacity-40 transition-opacity duration-500 z-0`} />
                <div className="absolute inset-[1px] bg-[#070709]/95 rounded-[23px] z-10" />

                {/* Content */}
                <div className="relative z-20 p-6 sm:p-8 flex flex-col flex-1 gap-6">
                  {/* Category icon */}
                  <div className="flex items-center justify-between">
                    <div className="size-9 rounded-xl glass border border-white/10 flex items-center justify-center text-cyan-400">
                      <HugeiconsIcon icon={proj.icon} className="size-4.5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-wider text-zinc-500 uppercase">
                      {proj.category === "web" ? "Website" : "Mobile App"}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="flex flex-col gap-2.5">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-200">
                      {proj.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-zinc-400 leading-relaxed font-sans">
                      {proj.description}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {proj.tech.map((t) => (
                      <Badge
                        key={t}
                        variant="secondary"
                        className="rounded-full bg-zinc-900/60 border border-zinc-800/40 text-[10px] text-zinc-300 px-2.5 py-0.5"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>

                  {(proj.github || proj.demo) && (
                    <div className="flex items-center gap-4 pt-4 border-t border-zinc-900/60 mt-1">
                      {proj.github && (
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-white transition-colors duration-200"
                        >
                          <HugeiconsIcon icon={GithubIcon} className="size-4" />
                          <span>Code</span>
                        </a>
                      )}
                      {proj.demo && (
                        <a
                          href={proj.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors duration-200 ml-auto group/link"
                        >
                          <span>{proj.category === "mobile" ? "Apk Link" : "Live Preview"}</span>
                          <HugeiconsIcon
                            icon={ArrowUpRight01Icon}
                            className="size-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200"
                          />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
