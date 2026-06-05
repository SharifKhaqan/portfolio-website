"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  GithubIcon,
  LinkedinIcon,
  ArrowRight01Icon,
  Download01Icon
} from "@hugeicons/core-free-icons";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const handleScroll = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-black"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 z-0" />
      
      {/* Ambient glowing orbs */}
      <div className="absolute top-[20%] left-[10%] w-[35rem] h-[35rem] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[10%] w-[30rem] h-[30rem] rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left column: Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left order-2 lg:order-1"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex justify-center lg:justify-start">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-white/10 text-xs font-semibold text-cyan-400 tracking-wider">
              <span className="size-2 rounded-full bg-cyan-400 animate-pulse" />
              AVAILABLE FOR HIRE
            </span>
          </motion.div>

          {/* Title */}
          <motion.div variants={itemVariants} className="flex flex-col gap-2">
            <span className="text-sm font-semibold tracking-widest text-zinc-500 uppercase">
              Hello, I&apos;m
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Muhammad Sharif <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
                Khaqan
              </span>
            </h1>
          </motion.div>

          {/* Professional Title */}
          <motion.h2
            variants={itemVariants}
            className="text-base sm:text-xl font-medium text-zinc-300"
          >
            Full Stack Web & Mobile App Developer
            <span className="block text-sm text-zinc-400 mt-1 font-normal font-mono">
              MERN Stack & React Native Developer
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans"
          >
            I create modern web and mobile experiences that are fast, intuitive, and built with attention to detail. Passionate about solving real-world problems through technology and delivering solutions that provide value to users and businesses.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4"
          >
            <Button
              className="rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white text-xs font-semibold px-6 py-5 gap-2 group shadow-lg shadow-indigo-500/20"
              onClick={() => handleScroll("#projects")}
            >
              Explore My Projects
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                className="size-3 group-hover:translate-x-1 transition-transform duration-200"
              />
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-zinc-800 hover:border-zinc-700 bg-zinc-950/40 text-white hover:bg-zinc-900 text-xs font-semibold px-6 py-5 gap-2 group"
              onClick={() => handleScroll("#contact")}
            >
              Get in Touch
            </Button>
            <Button
              variant="ghost"
              className="rounded-full text-zinc-400 hover:text-white text-xs font-semibold px-6 py-5 gap-2"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/resume/Muhammad Sharif Khaqan Resume .pdf";
                link.download = "Muhammad Sharif Khaqan Resume.pdf";
                link.click();
              }}
            >
              <HugeiconsIcon icon={Download01Icon} className="size-3.5" />
              Download CV
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center lg:justify-start gap-4 mt-6"
          >
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
              Follow Me:
            </span>
            <div className="flex items-center gap-3">
              {[
                { icon: GithubIcon, url: "https://github.com/SharifKhaqan" },
                { icon: LinkedinIcon, url: "https://www.linkedin.com/in/muhammad-sharif-khaqan-7206b8233" },
              ].map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-8 rounded-lg glass border border-white/5 hover:border-white/20 flex items-center justify-center text-zinc-400 hover:text-cyan-400 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <HugeiconsIcon icon={soc.icon} className="size-4" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right column: Graphic/Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="lg:col-span-5 flex justify-center order-1 lg:order-2"
        >
          <div className="relative size-72 sm:size-88 md:size-[26rem] group">
            {/* Glowing border ring */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />
            
            {/* Visual Frame */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-500/30 to-cyan-500/30 p-[1.5px] z-10 overflow-hidden">
              <div className="w-full h-full bg-[#0a0a0c] rounded-[22px] overflow-hidden relative">
                <Image
                  src="/images/Profile pic.jpeg"
                  alt="Muhammad Sharif Khaqan Profile Photo"
                  fill
                  sizes="(max-w-768px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-700"
                  priority
                />
              </div>
            </div>

            {/* Micro details floating */}
            <div className="absolute -top-4 -right-4 glass border border-white/10 rounded-xl px-3.5 py-2 shadow-lg z-20 flex items-center animate-bounce-slow">
              <span className="text-[10px] font-mono font-semibold text-white tracking-wide uppercase">
                MERN Developer
              </span>
            </div>

            <div className="absolute -bottom-4 -left-4 glass border border-white/10 rounded-xl px-3.5 py-2 shadow-lg z-20 flex items-center animate-bounce-slow delay-1000">
              <span className="text-[10px] font-mono font-semibold text-white tracking-wide uppercase">
                Mobile-App Developer
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
