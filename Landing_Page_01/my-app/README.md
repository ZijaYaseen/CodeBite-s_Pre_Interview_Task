# Landing Page Kit

This is a **dynamic**, **fully responsive** landing page built with **Next.js 14** and **Tailwind CSS**, created as a **pre‑interview task** for the CodeBite Software Developer position. The design is based on the [Free 13 Landing Pages Collection for UI/UX Design](https://www.figma.com/community/file/FID8GyZ2JpmvVpt4fGEdI4/Landing-Page-Kit---Free-13-Landing-Pages-Collection-for-UI-UX-Design) in Figma.

## Live Demo

View the live version here:

> [https://your-vercel-deployment-url.vercel.app](https://your-vercel-deployment-url.vercel.app)

## Features

* **Dynamic components** driven by data arrays (e.g., Header nav, TopPartners, Footer columns)
* **Next.js App Router** (App Directory) for SEO‑friendly routing
* **Tailwind CSS** utility classes, extended via `tailwind.config.js`
* **Responsive layouts** with mobile‑first breakpoints (`sm`, `md`, `lg`, `xl`)
* **Image optimization** using Next.js `<Image>`
* **Google Fonts** via `next/font/google` for self‑hosted Roboto
* **React Icons** for SVG-based arrow, close, and other controls
* **Backgrounds** with Tailwind’s arbitrary value syntax (`bg-[url(...)]`, `bg-cover`, `bg-center`)

## Tech Stack

* **Next.js 14** (App Router)
* **React 18**
* **Tailwind CSS** 3.x
* **TypeScript** (optionally rename `.js` → `.tsx` for typing)
* **React Icons**

## Responsive & Dynamic Design

* **Mobile-First**: Components stack vertically (`flex-col`) on small screens and switch to horizontal (`md:flex-row`, `lg:grid-cols-5`) on larger breakpoints.
* **Data-Driven**: Navigation and Footer are generated from JS objects—update `data/main.ts` to add/remove items.
* **Adaptive Images**: Next.js `<Image>` uses `width`/`height` plus Tailwind’s `w-full h-auto` to scale SVGs responsively without distortion.
* **Interactive Behavior**: Mobile menu toggles open/close with React `useState`; submenus expand on click with arrow rotation.

## Contributing

This is a pre‑interview take-home assignment, so public contributions aren’t expected—but feedback is welcome via GitHub issues or PR comments.

