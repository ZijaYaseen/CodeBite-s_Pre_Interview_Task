// components/GetBetter.tsx
"use client";

import Image from 'next/image';
import { motion} from 'framer-motion';
import {  fadeInUp } from '@/utils/AnimationVariants';

const GetBetter: React.FC = () => {

  return (
    <div className="max-w-[1440px] mx-auto w-full font-roboto md:px-10 py-5 md:py-10">
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
        <div className="relative w-full h-[500px] lg:h-[800px] md:h-[650px] sm:h-[500px] py-20 mx-auto overflow-visible hidden sm:block">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeInUp}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="absolute md:inset-x-40 sm:inset-x-28 w-[75%] h-auto drop-shadow-lg"
>
            <Image
            src="/Desktop.svg"
            alt="Desktop Illustration"
            width={600}
            height={400}
            className="w-full h-auto"
          />
          </motion.div>

          {/* Top Desktop Card */}
        {/* Cards Group */}
        <div className="absolute bottom-8 left-6 flex flex-col gap-6">
          {/* Top Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="w-64"
          >
            <Image
              src="/Content-Box-01.svg"
              alt="Top Card"
              width={200}
              height={120}
              className="w-full h-auto"
            />
          </motion.div>
          {/* Bottom Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.7 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="w-84"
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


           <motion.div
            initial= "hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.9 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="absolute right-[10%] bottom-0 w-[24%] h-auto"
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
            initial= "hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeInUp}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            whileHover={{ scale: 1.05, y: -5 }}
             className="w-full h-[547px] flex justify-center items-center">
            <Image
              src="/Mobile-mbl.svg"
              alt="Mobile Illustration"
              width={300}
              height={400}
            />

          </motion.div>

   
        {/* Mobile Cards Group */}
        <div className="absolute bottom-4 left-4 flex flex-col gap-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="w-3/5"
          >
            <Image
              src="/Content-Box-01.svg"
              alt="Top Mobile Card"
              width={200}
              height={120}
              className="w-full h-auto"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="w-4/6"
          >
            <Image
              src="/Content-Box-02.svg"
              alt="Bottom Mobile Card"
              width={200}
              height={120}
              className="w-full h-auto"
            />
          </motion.div>
        </div>

        </div>

      </div>
    </div>
  )
}

export default GetBetter;
