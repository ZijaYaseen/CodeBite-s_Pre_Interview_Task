import React from 'react'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';

export const footer = [
  {
    title: 'Product',
    links: [
      { name: 'Pricing', href: '/pricing' },
      { name: 'Overview', href: '/overview' },
      { name: 'Browse', href: '/browse' },
      { name: 'Accessibility', href: '/accessibility' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { name: 'Brainstorming', href: '/solutions/brainstorming' },
      { name: 'Ideation', href: '/solutions/ideation' },
      { name: 'Wireframing', href: '/solutions/wireframing' },
      { name: 'Research', href: '/solutions/research' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Help Center', href: '/help' },
      { name: 'Blog', href: '/blog' },
      { name: 'Tutorials', href: '/tutorials' },
      { name: 'FAQs', href: '/faqs' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: '/about' },
      { name: 'Press', href: '/press' },
      { name: 'Events', href: '/events' },
      { name: 'Request Demo', href: '/demo' },
    ],
  },
];
const Footer = () => {
  return (
    <footer className='max-w-[1440px] w-full mx-auto md:px-20 border-t border-gray-300 px-5 text-BlueGray-900 md:py-20 py-10 font-roboto text-blueGray-200 bg-blueGray-600 text-center md:text-left bg-white'>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
        {/* Logo */}
        <div className="col-span-1 lg:col-span-2">
          <div className="text-[32px] font-bold mb-4">weeb</div>
        </div>

        {/* Columns */}
        {footer.map((col) => (
          <div key={col.title}>
            <h3 className="text-base font-medium text-[#94A3B8] pb-5">{col.title}</h3>
            <ul className="space-y-6">
              {col.links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-base font-normal hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-300 font-normal text-base ">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between text-center md:text-left">
            <p className='my-4'>© {new Date().getFullYear()} weeb. All rights reserved.</p>
          
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
      </div>
    </footer>

  )
}

export default Footer