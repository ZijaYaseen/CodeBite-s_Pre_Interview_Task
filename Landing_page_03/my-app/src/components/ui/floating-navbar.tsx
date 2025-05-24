'use client';

import { RiMenu4Fill } from 'react-icons/ri';
import { IoMdClose } from 'react-icons/io';
import React, { useState } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'motion/react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: { name: string; link: string; icon?: JSX.Element }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    const prev = scrollYProgress.getPrevious()!;
    if (current < 0.05) setVisible(true);
    else setVisible(current - prev < 0);
  });

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((v) => !v);

  return (
    <>
      {/* Top‑bar */}
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            'fixed top-6 inset-x-6 mx-auto z-[5000] flex max-w-[1000px] items-center justify-between space-x-6 rounded-[20px] bg-[#181E2C] px-6 md:py-4 py-2 text-white shadow-2xl drop-shadow-2xl font-roboto',
            className
          )}
        >
          <div className="flex gap-[38px]">
            <div className="text-[32px] font-bold">weeb</div>
            {navItems.map((item, i) => (
              <Link
                key={i}
                href={item.link}
                className="flex items-center space-x-1 text-base font-medium hover:text-neutral-200 dark:text-neutral-50 dark:hover:text-neutral-200"
              >
                <span className="block sm:hidden">{item.icon}</span>
                <span className="hidden sm:block">{item.name}</span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-[38px] text-base font-medium">
            <button className="hidden md:block">Login</button>
            <button className="hidden md:block rounded-[8px] bg-Purple-600 hover:bg-purple-500 px-4 py-2">
              Join Now
            </button>
            <button onClick={toggleMenu} className="lg:hidden p-2">
              <RiMenu4Fill size={32} />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[5100] bg-black bg-opacity-50 lg:hidden"
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.2 }}
              className="fixed top-0 left-0 w-3/4 min-w-[300px] h-full bg-BlueGray-900 p-6 z-[5200] overflow-auto"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="text-4xl font-extrabold text-blueGray-600">
                  weeb
                </div>
                <button onClick={toggleMenu} className="p-2 text-blueGray-600">
                  <IoMdClose size={30} />
                </button>
              </div>
              <ul className="space-y-6">
                {navItems.map((item, i) => (
                  <li key={i} className="border-b pb-2 pt-1">
                    <Link href={item.link} onClick={toggleMenu}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};
