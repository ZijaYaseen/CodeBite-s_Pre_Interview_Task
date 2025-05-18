// components/GetBetter.tsx
"use client";

import Image from 'next/image';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {  fadeInUp } from '@/utils/AnimationVariants';

const GetBetter: React.FC = () => {
  // Desktop refs
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const topDesktopInView = useInView(topRef, { amount: 0.2, once: false });
  const bottomDesktopInView = useInView(bottomRef, { amount: 0.2, once: false });

  // Mobile refs
  const mobileTopRef = useRef<HTMLDivElement>(null);
  const mobileBottomRef = useRef<HTMLDivElement>(null);
  const topMobileInView = useInView(mobileTopRef, { amount: 0.2, once: false });
  const bottomMobileInView = useInView(mobileBottomRef, { amount: 0.2, once: false });

  return (
    <div className="max-w-[1440px] w-full font-roboto md:px-10 py-5 md:py-10">
      <div className="w-full">

        {/* Heading and Text */}
        <div className="text-center flex flex-col md:w-[75%] md:gap-6 gap-4 mx-auto w-full px-5">
          <h2 className="md:font-extrabold md:py-5 font-bold md:text-[56px] text-2xl bg-gradient-to-r from-[#C026D3] to-[#701A75] bg-clip-text text-transparent">
            Get better everyday
          </h2>
          <p className="font-normal md:text-xl text-base text-blueGray-600">
            Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.
          </p>
          <div className="md:mt-5">
            <button className="md:px-10 px-6 py-3 md:py-[17px] md:text-2xl text-base md:font-bold font-medium rounded-full bg-fuchsia-600 tracking-wider ring-2 ring-transparent hover:ring-fuchsia-600 text-white hover:bg-white hover:text-fuchsia-600 transition-all">
              Start Now
            </button>
          </div>
        </div>

        {/* Desktop Illustration */}
        <div className="relative w-full h-[500px] lg:h-[750px] md:h-[650px] sm:h-[500px] py-20 mx-auto overflow-visible hidden sm:block">

          <motion.div
          ref={topRef}
            initial="hidden"
            animate={topDesktopInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className=" absolute left-1/2 top-1/2 w-[75%] h-auto drop-shadow-lg"
          >
            <Image
            src="/Desktop.svg"
            alt="Desktop Illustration"
            width={600}
            height={400}
            className="absolute top-1/2 w-full h-auto -translate-x-1/2 -translate-y-1/2 drop-shadow-lg"
          />
          </motion.div>

          {/* Top Desktop Card */}
          <motion.div
            ref={topRef}
            initial="hidden"
            animate={topDesktopInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="absolute bottom-[43%] left-[3%] w-[20%] shadow-md"
          >
            <Image
              src="/Content-Box-01.svg"
              alt="Top Card"
              width={200}
              height={120}
              className="w-full h-auto"
            />
          </motion.div>

          {/* Bottom Desktop Card */}
          <motion.div
            ref={bottomRef}
            initial="hidden"
            animate={bottomDesktopInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.7 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="absolute bottom-[3%] left-[3%] w-[25%] shadow-md"
          >
            <Image
              src="/Content-Box-02.svg"
              alt="Bottom Card"
              width={200}
              height={120}
              className="w-full h-auto"
            />
          </motion.div>

           <motion.div
            ref={bottomRef}
            initial="hidden"
            animate={bottomDesktopInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.9 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="absolute right-[10%] bottom-0 w-[24%] h-auto drop-shadow-lg"
          >
          <Image
            src="/Mobile.svg"
            alt="Mobile Illustration"
            width={250}
            height={450}
            className="w-full h-auto"
          />
          </motion.div>
        </div>

        {/* Mobile Design */}
        <div className="relative w-full flex flex-col items-center sm:hidden h-[550px] pl-2">
          <motion.div
            ref={mobileTopRef}
            initial="hidden"
            animate={topMobileInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            whileHover={{ scale: 1.05, y: -5 }}
             className="w-full h-[547px] flex justify-center items-center">
            <Image
              src="/Mobile-mbl.svg"
              alt="Mobile Illustration"
              width={300}
              height={400}
              className=""
            />

          </motion.div>

          {/* Top Mobile Card */}
          <motion.div
            ref={mobileTopRef}
            initial="hidden"
            animate={topMobileInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="absolute bottom-[40%] left-0 w-[60%] pl-3 shadow-md"
          >
            <Image
              src="/Content-Box-01.svg"
              alt="Top Card"
              width={200}
              height={120}
              className="w-full h-auto"
            />
          </motion.div>

          {/* Bottom Mobile Card */}
          <motion.div
            ref={mobileBottomRef}
            initial="hidden"
            animate={bottomMobileInView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="absolute bottom-0 left-0 w-[65%] pl-3 shadow-md"
          >
            <Image
              src="/Content-Box-02.svg"
              alt="Bottom Card"
              width={200}
              height={120}
              className="w-full h-auto"
            />
          </motion.div>
        </div>

      </div>
    </div>
  )
}

export default GetBetter;
