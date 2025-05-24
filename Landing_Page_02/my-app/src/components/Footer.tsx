// components/Footer.tsx
import { FooterData } from "@/data/main";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white mx-auto text-blueGray-600 border-t max-w-[1440px] w-full font-roboto">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-8">
        {FooterData.map((section) => (
          <div key={section.heading}>
            <h3 className="text-base font-semibold mb-3">{section.heading}</h3>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link}>
                  <Link href="/" className="text-sm text-gray-600 hover:text-fuchsia-600 transition">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t mt-10 py-6 flex flex-col md:flex-row items-start md:items-center justify-between max-w-7xl mx-auto px-6">
  {/* Left Side */}
  <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
    <h2 className="font-medium text-xl">
      break<span className="text-fuchsia-800">io</span>
    </h2>
    <p className="text-sm text-gray-500">
      &copy; 2025 - All rights reserved.
    </p>
  </div>

  {/* Right Side (Social Icons) */}
  <div className="flex space-x-4 mt-4 md:mt-0 text-gray-500 md:justify-end">
    <Link href="/" aria-label="YouTube" className="hover:text-red-600 transition">
      <FaYoutube size={18} />
    </Link>
    <Link href="/" aria-label="Facebook" className="hover:text-blue-600 transition">
      <FaFacebookF size={18} />
    </Link>
    <Link href="/" aria-label="Twitter" className="hover:text-blue-400 transition">
      <FaTwitter size={18} />
    </Link>
    <Link href="/" aria-label="Instagram" className="hover:text-pink-500 transition">
      <FaInstagram size={18} />
    </Link>
    <Link href="/" aria-label="LinkedIn" className="hover:text-blue-700 transition">
      <FaLinkedinIn size={18} />
    </Link>
  </div>
</div>

    </footer>
  );
}
