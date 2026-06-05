# Muhammad Sharif Khaqan Portfolio

A modern personal portfolio website for Muhammad Sharif Khaqan, built to showcase full-stack web development, mobile app development, experience, skills, featured projects, resume access, and contact channels.

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Hugeicons
- shadcn-style UI components

## Features

- Responsive single-page portfolio layout
- Smooth section navigation
- Hero section with social links and resume download
- About, skills, experience, and featured projects sections
- External GitHub and live-preview project links
- Contact form powered by FormSubmit
- SEO metadata configured in `app/layout.tsx`
- Static production output ready for Vercel

## Project Structure

```text
app/
  globals.css      Global styles and Tailwind setup
  layout.tsx       Root layout and metadata
  page.tsx         Main portfolio page
components/
  ui/              Reusable UI primitives
  About.tsx        About section
  Contact.tsx      Contact form and channels
  Experience.tsx   Experience timeline
  Footer.tsx       Footer links and branding
  Hero.tsx         Landing section
  Navbar.tsx       Header navigation
  Projects.tsx     Featured project cards
  Skills.tsx       Skills section
lib/
  utils.ts         Shared utility helpers
public/
  images/          Portfolio images
  resume/          Downloadable resume PDF
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

```bash
npm run lint
npm run build
```


