// app/layout.tsx
import type { Metadata } from "next";
import { Bitter, Space_Mono } from 'next/font/google';
import "./globals.css";

const bitter = Bitter({
  subsets: ['latin'],
  weight: ['400','700'],
  display: 'swap',
  variable: '--font-bitter',
});
const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400','700'],
  display: 'swap',
  variable: '--font-space',
});

export const metadata: Metadata = {
  title: "CodeBite's Project",
  description: "Created with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bitter.variable} ${spaceMono.variable}`}
    >
      <body className="font-bitter">
        {children}
      </body>
    </html>
  );
}
