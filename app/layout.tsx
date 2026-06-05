import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Sharif Khaqan | Full Stack Web & Mobile App Developer",
  description: "Portfolio of Muhammad Sharif Khaqan - Full Stack Web & Mobile App Developer specializing in MERN Stack, React Native, and high-performance applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("dark h-full scroll-smooth antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body
        className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground"
        suppressHydrationWarning
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
