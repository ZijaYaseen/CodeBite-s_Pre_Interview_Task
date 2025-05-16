import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import {Roboto} from 'next/font/google'



const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-roboto'
})

export const metadata: Metadata = {
  title: "Landing Page 02",
  description: "Generated with Next.js and tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased`}
      >
        {/* Fixed Navbar Wrapper {nav bar fixed} */}
        <div className="fixed top-0 left-0 right-0 h-[70px] bg-white z-50">
          <Header />
        </div>
        {/* Page Content with padidng */}
        <main className="pt-[70px]">
          {children}
        </main>
      </body>
    </html>
  );
}
