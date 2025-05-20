import { joinLeading } from '@/data/main'
import Image from 'next/image'
import React from 'react'

const JoinLeading = () => {
  return (
   <div className='max-w-[1440px] mx-auto w-full text-white font-roboto md:py-20 py-10 text-center'>
    <div className='flex flex-col md:gap-[60px] gap-5 md:w-[80%] w-full mx-auto'>
        <h2 className='md:text-[56px] md:font-extrabold font-bold text-[40px] leading-none'>
            Join Leading Companies
        </h2>

        <div className="flex flex-wrap justify-center md:gap-x-20 gap-10 gap-y-6 mt-8 px-5">
  {joinLeading.map((item, idx) => (
    <div key={idx} className="flex gap-2 items-center justify-center">
      <Image
        src={item.Logo}
        alt={item.name}
        width={100}
        height={100}
        className="h-auto w-full"
      />
      <span className="text-2xl font-bold">{item.name}</span>
    </div>
  ))}
</div>

    </div>
   </div>
  )
}

export default JoinLeading