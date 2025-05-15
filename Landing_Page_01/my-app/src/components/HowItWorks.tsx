import React from 'react'
import { works } from '@/data/main'
import Image from 'next/image'

const HowItWorks = () => {
  return (
    <div className='max-w-[1440px] w-full md:px-20 px-5 md:py-20 py-5 font-roboto'>
        <h2 className='text-center text-3xl md:text-5xl font-semibold md:mb-10 mb-5 text-blueGray-900'>
            How it Works
        </h2>

        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-20 gap-5'>
        {works.map((item)=>(
            <div key={item.id} className='p-5 gap-5 flex flex-col border-4 shadow-lg border-blueGray-600 rounded-[10px] items-center text-center'>

                <Image
                src={item.icon}
                alt='Icons'
                width={30}
                height={30}
                className='w-16 h-20'
                ></Image>

                <p>
                    {item.description}
                </p>
                
            </div>
        ))}
        </div>
    </div>
  )
}

export default HowItWorks