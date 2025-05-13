## Overview

This repository contains the **Hero Section** component for the CodeBite pre-interview project. The `HeroSection` is a responsive, visually engaging section designed with Next.js, Tailwind CSS, and the `next/image` component. It showcases a two-part layout with prominent imagery and overlay text elements, providing an interactive "Get started" button with hover effects.

## Project Structure

* **`components/HeroSection.tsx`**: Main React component implementing the hero section.
* **`public/`**: Contains SVG images (`Image-left.svg`, `image-right.svg`, `Image-bottom-left-left.svg`, `Image-bottom-left-right.svg`) used in the hero layout.

## Features

* **Responsive Layout**: Mobile-first design using Tailwind CSS breakpoints (`flex-col` on small screens, `md:flex-row` on medium and larger screens).
* **Image Optimization**: Utilizes Next.js `Image` component with fixed dimensions and `w-full h-auto` classes for fluid scaling.
* **Text Overlays**: Absolute-positioned headings and paragraphs on each image, with custom font families (`Bitter`, `Space Mono`) and controlled opacity.
* **Interactive Button**: "Get started" button with:

  * Rounded corners (`rounded-[40px]`)
  * Ring outline effect on hover (`hover:ring-2`, `hover:ring-white`, `hover:ring-offset-2`)
  * Background and text color transitions (`hover:bg-black`, `hover:text-white`, `transition-all duration-300 ease-in-out`)
* **Grid and Flex Utilities**: Combines `grid` for image alignment and nested `flex` containers for layout control in the second section.

## Implementation Details

1. **Container Setup**:

   * Wrapper `div` uses `max-w-[1490px] w-full mx-auto` for centered alignment and full-width control.
   * Background color set to `bg-red-700` for initial testing; replace or remove as needed.

2. **Primary Layout**:

   * Outer `flex flex-col md:flex-row` for stacking on mobile and side-by-side on larger screens.
   * Left column uses a `grid` container holding the top and bottom image sections.

3. **Image Sections**:

   * Each image is wrapped in a `relative` div with explicit `width` and `height` props for Next.js Image.
   * Overlay text positioned with `absolute` utilities (`top-6 left-6` for small, `md:top-44 md:left-10` for medium+).
   * Custom spacing (`gap-6`, `px-6`, `mx-auto`) for text block.

4. **Button Styling**:

   * Base: `md:py-5 py-3 md:px-10 px-8 bg-white text-black rounded-[40px] border-2 border-transparent`.
   * Hover: ring outline (`hover:ring-2 hover:ring-white hover:ring-offset-2`), background opacity (`hover:bg-opacity-85`), and text inversion.

5. **Secondary Layout**:

   * Bottom images placed side-by-side in a `flex` container within the grid.
   * Each box follows the same pattern: relative image + absolute overlay.
   * Numbered headings (`02`, `03`, `04`) indicate sequence of features/messages.

## Technologies Used

* **Next.js**: React framework for server-side rendering and static exports.
* **Tailwind CSS**: Utility-first CSS framework for rapid styling and responsive design.
* **next/image**: Image optimization and responsive loading.
* **TypeScript**: Type safety and modern JavaScript features.

**Live Site** : (https://code-bites-pre-interview-task-hero-section-02.vercel.app/)[https://code-bites-pre-interview-task-hero-section-02.vercel.app/] 
