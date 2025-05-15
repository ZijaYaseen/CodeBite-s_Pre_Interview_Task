import Image from 'next/image';
import React from 'react';
import { partners, partners2 } from '@/data/main';


export default function TopPartners() {
  return (
    <section className="w-full bg-blueGray-100 font-roboto py-12 max-w-[1440px[">
      <div className="max-w-[1440px] mx-auto px-5 md:px-20 md:w-[85%] w-full">
        <h2 className="text-center text-3xl md:text-5xl font-semibold mb-8 text-blueGray-900">
          Our Top Partners
        </h2>

        <div className="grid grid-cols-5 gap-9">
          {partners.map((p, idx) => (
            <div key={idx} className="flex items-center text-center gap-0 relative">
              <Image
                src={p.src}
                alt={p.alt}
                width={100}
                height={100}
                className="w-14 h-14 md:w-28 md:h-28"
              />
              {p.name && (
                <p className="mt-2 font-bold text-[8px] md:text-xl absolute md:left-14 left-5 items-center top-4 md:top-10">
                  {p.name}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="flex md:gap-16 gap-4 justify-center">
          {partners2.map((p, idx) => (
            <div key={idx} className="flex items-center text-center gap-0 relative">
              <Image
                src={p.src}
                alt={p.alt}
                width={100}
                height={100}
                className="w-14 h-14 md:w-28 md:h-28"
              />
              {p.name && (
                <p className="font-bold text-[8px] md:text-xl absolute md:left-14 left-7 items-center top-6 md:top-12">
                  {p.name}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}