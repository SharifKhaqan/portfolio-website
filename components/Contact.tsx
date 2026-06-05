"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Mail02Icon,
  CallIcon,
  PinLocation01Icon,
  MailSend01Icon,
  ArrowRight01Icon,
  Cancel01Icon
} from "@hugeicons/core-free-icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus("error");
      return;
    }

    setFormStatus("loading");

    try {
      const response = await fetch("https://formsubmit.co/ajax/sharifkhaqan5@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "New portfolio contact message",
          message: formData.message,
          _subject: formData.subject || "New portfolio contact message",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setFormStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setFormStatus("error");
    }
  };

  const contactDetails = [
    {
      icon: Mail02Icon,
      title: "Email",
      value: "sharifkhaqan5@gmail.com",
      href: "mailto:sharifkhaqan5@gmail.com",
      color: "text-indigo-400",
    },
    {
      icon: CallIcon,
      title: "Phone",
      value: "0349-7838937",
      href: "tel:+923497838937",
      color: "text-cyan-400",
    },
    {
      icon: PinLocation01Icon,
      title: "Location",
      value: "Sector I-14, Islamabad",
      href: "https://maps.google.com/?q=Sector%20I-14%2C%20Islamabad",
      color: "text-purple-400",
    },
  ];

  return (
    <section id="contact" className="relative py-24 bg-[#050506] border-t border-zinc-900/60 overflow-hidden">
      {/* Ambient lighting spots */}
      <div className="absolute top-[20%] right-[-10%] w-[35rem] h-[35rem] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-15%] w-[30rem] h-[30rem] rounded-full bg-purple-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase">
            Let&apos;s Connect
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Get In Touch
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                Let&apos;s build something great together
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                I&apos;m always open to discussing new projects, freelance opportunities, and full-time roles. If you have an idea, a business requirement, any job opportunity, or simply want to connect, feel free to send a message and I&apos;ll get back to you as soon as possible.
              </p>
            </div>

            {/* Channels List */}
            <div className="flex flex-col gap-4 mt-4">
              {contactDetails.map((detail, idx) => (
                <a
                  key={idx}
                  href={detail.href}
                  target={detail.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 glass border border-white/5 hover:border-white/10 rounded-2xl p-4 transition-all duration-300 group hover:-translate-y-0.5"
                >
                  <div className="size-10 rounded-xl bg-zinc-950 flex items-center justify-center shrink-0 border border-zinc-900 group-hover:border-zinc-800 transition-colors">
                    <HugeiconsIcon icon={detail.icon} className={`size-4.5 ${detail.color}`} />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] font-mono font-bold tracking-wider text-zinc-500 uppercase">
                      {detail.title}
                    </span>
                    <span className="text-xs font-semibold text-zinc-300 group-hover:text-white transition-colors duration-200">
                      {detail.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-premium rounded-3xl p-6 sm:p-8">
              {formStatus === "success" ? (
                /* Success visual state */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 flex flex-col items-center gap-4"
                >
                  <div className="size-16 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-indigo-500/25">
                    <HugeiconsIcon icon={MailSend01Icon} className="size-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mt-2">Message Sent Successfully!</h3>
                  <p className="text-xs text-zinc-400 max-w-sm leading-relaxed font-sans">
                    Thank you for reaching out. I will review your message and get back to you within 24 hours.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setFormStatus("idle")}
                    className="rounded-full mt-4 border-zinc-800 hover:border-zinc-700 bg-zinc-950/40 text-white"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                /* Input Form */
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <h3 className="text-sm font-semibold tracking-widest text-zinc-400 uppercase font-mono">
                    Send a Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name Input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-[10px] font-mono font-bold tracking-wider text-zinc-500 uppercase">
                        Your Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-zinc-950/40 border border-zinc-800/80 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-indigo-500/60 focus:ring-4 focus:ring-indigo-500/10 placeholder:text-zinc-600 transition-all font-sans"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-[10px] font-mono font-bold tracking-wider text-zinc-500 uppercase">
                        Email Address <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-zinc-950/40 border border-zinc-800/80 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-indigo-500/60 focus:ring-4 focus:ring-indigo-500/10 placeholder:text-zinc-600 transition-all font-sans"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="text-[10px] font-mono font-bold tracking-wider text-zinc-500 uppercase">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-zinc-950/40 border border-zinc-800/80 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-indigo-500/60 focus:ring-4 focus:ring-indigo-500/10 placeholder:text-zinc-600 transition-all font-sans"
                      placeholder="Project Collaboration"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-[10px] font-mono font-bold tracking-wider text-zinc-500 uppercase">
                      Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-zinc-950/40 border border-zinc-800/80 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-indigo-500/60 focus:ring-4 focus:ring-indigo-500/10 placeholder:text-zinc-600 transition-all font-sans resize-none"
                      placeholder="Hi Sharif, I'd like to collaborate on..."
                    />
                  </div>

                  {/* Form Submission error status message */}
                  {formStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-[11px] font-medium text-destructive flex items-center gap-1.5 font-sans"
                    >
                      <HugeiconsIcon icon={Cancel01Icon} className="size-3.5" />
                      Please fill out all required fields marked with * or try again.
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={formStatus === "loading"}
                    className="rounded-xl mt-2 bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white text-xs font-semibold py-6 w-full flex justify-center items-center gap-2 group shadow-lg shadow-indigo-500/20 disabled:opacity-50"
                  >
                    {formStatus === "loading" ? (
                      <>
                        <span className="size-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <HugeiconsIcon
                          icon={ArrowRight01Icon}
                          className="size-3.5 group-hover:translate-x-1 transition-transform duration-200"
                        />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
