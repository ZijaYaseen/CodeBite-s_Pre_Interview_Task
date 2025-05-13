## HeroSection Component

The `HeroSection` component is designed as part of the CodeBites pre-interview task. It serves as the primary landing section, incorporating a decorative background, two statistical counters, a main heading, and a grid of dynamic cards. This component demonstrates the use of Tailwind CSS for styling, Next.js Image optimization, and reusable components.

## Features and Functionality

* **Background Image:** Positioned at the top right, styled using Next.js `Image` component with a `fill` layout for full coverage.
* **Statistic Counters:** Two counters displayed at specific locations using absolute positioning.
* **Sun-like Glowing Circle:** A centered circular element with a soft glow effect to mimic sunlight.
* **Main Heading Section:** Includes a primary heading, subheading, and a call-to-action "Get Started" button with hover effects.
* **Dynamic Card Grid:** Cards are dynamically rendered from a data array, demonstrating reusability and scalability.

## Implementation Details

### Background Image

* Utilizes the Next.js `Image` component with the `fill` layout for responsive resizing.
* Positioned using Tailwind utility classes for absolute positioning and containment.

### Statistic Counters

* Each counter includes a bold numerical value and a descriptive text, both positioned using absolute positioning for precision.

### Sun-like Circle

* A circular div with a yellow background and a custom box shadow to achieve the glowing effect.
* Hover effects are added for subtle interactivity.

### Main Heading and Button

* The heading and subheading are centrally aligned using Tailwind Flex utilities.
* The button includes hover effects for scale and background opacity adjustments.

### Dynamic Card Grid

* Cards are rendered using a map function from the `CardData` array.
* Grid layout is responsive, adjusting from 2 columns on smaller screens to 4 columns on medium and larger screens.

Live Site : [https://code-bites-pre-interview-task-hero-section.vercel.app/](https://code-bites-pre-interview-task-hero-section.vercel.app/)
