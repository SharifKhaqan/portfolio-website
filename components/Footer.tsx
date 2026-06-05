"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  GithubIcon,
  LinkedinIcon,
  ArrowUp01Icon
} from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const handleScrollToTop = () => {
    const target = document.querySelector("#home");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#030304] border-t border-zinc-900/60 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-8">
        
        {/* Top half */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Info */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a
              href="#home"
              onClick={handleScrollToTop}
              className="flex items-center gap-2 font-bold text-white text-base group"
            >
              <div className="size-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center font-bold text-white text-sm shadow-md group-hover:shadow-cyan-400/25 transition-all duration-300">
                SK
              </div>
              <span className="font-heading tracking-wider text-white">
                SHARIF <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 font-normal">KHAQAN</span>
              </span>
            </a>
          </div>

          <p className="text-[10px] text-zinc-500 font-mono text-center">
            Full Stack Web & Mobile App Developer
          </p>

          {/* Socials & Top Trigger */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2.5">
              {[
                { icon: GithubIcon, url: "https://github.com/SharifKhaqan" },
                { icon: LinkedinIcon, url: "https://www.linkedin.com/in/muhammad-sharif-khaqan-7206b8233" },
              ].map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-7 rounded-lg glass border border-white/5 hover:border-white/15 flex items-center justify-center text-zinc-500 hover:text-cyan-400 transition-all duration-200"
                >
                  <HugeiconsIcon icon={soc.icon} className="size-3.5" />
                </a>
              ))}
            </div>

            <Button
              variant="outline"
              size="icon-sm"
              onClick={handleScrollToTop}
              className="rounded-lg border-zinc-900 bg-zinc-950/40 text-zinc-400 hover:text-white hover:border-zinc-800"
              title="Back to top"
            >
              <HugeiconsIcon icon={ArrowUp01Icon} className="size-3.5" />
            </Button>
          </div>
        </div>

        </div>
    </footer>
  );
}
