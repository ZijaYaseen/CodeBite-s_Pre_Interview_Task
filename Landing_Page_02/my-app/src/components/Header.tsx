"use client";
import { useState } from 'react';
import Link from 'next/link';
import { IoMdClose } from 'react-icons/io';
import { Nav } from '@/data/main';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <header className="max-w-[1440px] w-full flex py-4 px-4 md:px-20 min-h-[70px] tracking-wide relative z-50 font-roboto text-blueGray-900">
      <div className="flex items-center justify-between w-full">
        {/* Logo and nav links */}
        <div className="flex items-center gap-14">
          {/* Full logo on desktop and mobile*/}
          <div className="font-bold text-[32px]">break<span className='text-fuchsia-800'>io</span></div>

        </div>

        {/* Actions & mobile toggle */}
        <div className="flex items-center space-x-5">
            {/* Nav links inline on desktop */}
          <nav className="hidden lg:flex space-x-5">
            {Nav.map((item, idx) => (
              <div key={idx} className="relative group">
                <Link href={item.link} className="flex items-center space-x-1 font-medium hover:text-fuchsia-600 text-base cursor-pointer">
                  <span>{item.name}</span>
                </Link>

              </div>
            ))}
          </nav>
          <div className="hidden lg:block">
            <button className="px-4 py-2 text-sm rounded-full bg-fuchsia-600 font-semibold tracking-wide ring-2 ring-transparent hover:ring-fuchsia-600 text-white hover:bg-white hover:text-fuchsia-600 transition-all">
              Start Now
            </button>
          </div>
          <button onClick={toggleMenu} className="lg:hidden p-2">
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu*/}
      {isOpen && (
        <nav className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden">
          <div className="fixed top-0 left-0 w-3/5 min-w-[250px] h-full bg-white p-6 z-50 overflow-auto">
            <div className="flex justify-between items-center mb-6">
              <div className="font-bold text-[32px]">break<span className='text-fuchsia-800'>io</span></div>
              <button onClick={toggleMenu} className="p-2 text-blueGray-600">
                <IoMdClose size={30} />
              </button>
            </div>
            <ul className="space-y-4">
              {Nav.map((item, idx) => (
                <li key={idx} className="border-b mt-1 pb-2">
                  <div
                    className="flex items-center justify-between font-medium text-[16px] text-blueGray-600 hover:text-fuchsia-600 cursor-pointer"
                  >
                    <span>{item.name}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
}