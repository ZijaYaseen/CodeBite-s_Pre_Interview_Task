"use client";
import { useState } from 'react';
import Link from 'next/link';
import { IoIosArrowDown } from 'react-icons/io';
import { IoMdClose } from 'react-icons/io';
import { Nav } from '@/data/main';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const toggleMenu = () => setIsOpen(prev => !prev);
  const toggleSub = (idx: number) => setActiveIdx(prev => (prev === idx ? null : idx));

  return (
    <header className="max-w-[1440px] w-full flex py-6 px-4 md:px-20 min-h-[70px] tracking-wide relative z-50 bg-blueGray-600 font-roboto text-white">
      <div className="flex items-center justify-between w-full">
        {/* Logo and nav links */}
        <div className="flex items-center gap-14">
          {/* Full logo on desktop and mobile*/}
          <div className="font-extrabold text-4xl">mabi</div>

          {/* Nav links inline on desktop */}
          <nav className="hidden md:flex space-x-14">
            {Nav.map((item, idx) => (
              <div key={idx} className="relative group">
                <Link href={item.link} className="flex items-center space-x-1 font-medium hover:text-blue-300 cursor-pointer">
                  <span>{item.name}</span>
                  {item.subitems && <IoIosArrowDown />}
                </Link>
                {item.subitems && (
                  <ul className="absolute left-0 mt-2 bg-white text-black rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.subitems.map((sub, j) => (
                      <li key={j} className="px-4 py-2 whitespace-nowrap hover:bg-gray-100">
                        <Link href={sub.link} className="block">
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Actions & mobile toggle */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:block space-x-5">
            <button className="px-5 py-2 text-sm rounded-full font-semibold tracking-wide text-white border border-white hover:bg-white hover:text-blueGray-600 transition-all">
              Login
            </button>
            <button className="px-5 py-2 text-sm rounded-full font-semibold tracking-wide text-blueGray-600 bg-white hover:bg-gray-100 transition-all">
              Free Launch
            </button>
          </div>
          <button onClick={toggleMenu} className="md:hidden p-2">
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu*/}
      {isOpen && (
        <nav className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden">
          <div className="fixed top-0 left-0 w-3/5 min-w-[250px] h-full bg-white p-6 z-50 overflow-auto">
            <div className="flex justify-between items-center mb-6">
              <div className="font-extrabold text-4xl text-blueGray-600">mabi</div>
              <button onClick={toggleMenu} className="p-2 text-blueGray-600">
                <IoMdClose size={30} />
              </button>
            </div>
            <ul className="space-y-4">
              {Nav.map((item, idx) => (
                <li key={idx} className="border-b mt-1 pb-2">
                  <div
                    onClick={() => item.subitems && toggleSub(idx)}
                    className="flex items-center justify-between font-medium text-[16px] text-blueGray-600 hover:text-blue-700 cursor-pointer"
                  >
                    <span>{item.name}</span>
                    {item.subitems && <IoIosArrowDown className={`${activeIdx === idx ? 'rotate-180' : ''} transition-transform`} />}
                  </div>
                  {item.subitems && activeIdx === idx && (
                    <ul className="pl-4 mt-2 space-y-2">
                      {item.subitems.map((sub, j) => (
                        <li key={j}>
                          <Link href={sub.link} className="block font-medium text-[14px] text-gray-700 hover:text-blue-700 border-b">
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
}