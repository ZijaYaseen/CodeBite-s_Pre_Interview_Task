import React from 'react'
import Link from 'next/link'

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
    title: 'Support',
    links: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'Developers', href: '/developers' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Integrations', href: '/integrations' },
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
    <footer className='max-w-[1440px] w-full md:px-20 px-5 md:py-20 py-10 font-roboto text-blueGray-200 bg-blueGray-600 text-center md:text-left'>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-8">
        {/* Logo */}
        <div className="col-span-1 lg:col-span-2">
          <div className="text-[32px] font-bold text-white mb-4">mabi</div>
        </div>

        {/* Columns */}
        {footer.map((col) => (
          <div key={col.title}>
            <h3 className="text-base font-medium text-white mb-6">{col.title}</h3>
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
      <div className="border-t border-gray-700 font-normal text-base ">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between text-center md:text-left">
            <p className='my-4'>© {new Date().getFullYear()} Mabi. All rights reserved.</p>
          
          <div className="flex items-center md:space-x-10 space-x-5">
            <ul className="flex md:space-x-10 space-x-5 my-4">
            <li><Link href="/terms" className="hover:text-gray-300">Terms</Link></li>
            <li><Link href="/privacy" className="hover:text-gray-300">Privacy</Link></li>
            <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
          </ul>
            <button className="flex items-center space-x-1 hover:text-gray-300">
              <span>EN</span>
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06-.02l3.72 3.6 3.72-3.6a.75.75 0 111.04 1.08l-4.24 4.11a.75.75 0 01-1.04 0L5.23 8.27a.75.75 0 01-.02-1.06z" clipRule="evenodd"/></svg>
            </button>
            <button className="flex items-center space-x-1 hover:text-gray-300">
              <span>EUR</span>
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11H9v4h2a2 2 0 110 4H9v2H7v-2H5v-2h2a2 2 0 110-4H7V7h2v2h2V7z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer