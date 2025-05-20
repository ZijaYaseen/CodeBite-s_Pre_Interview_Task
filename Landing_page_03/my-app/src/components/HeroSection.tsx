import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='max-w-[1440px] mx-auto w-full text-white font-roboto md:py-20 py-10 text-center px-5'>
        <div className='md:w-[60%] w-full mx-auto flex-col flex gap-8'>
            <h1 className='font-extrabold text-[56px] md:text-7xl'>
                Design <span className='inline-block md:border-b-[5px] border-purple-400 leading-none'>Faster</span><span className='text-Purple-600'> &</span> <span className='inline-block border-t-[5px] leading-none border-purple-400'>Better</span>
            </h1>
            <p className='.paragraph'>
              Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris.
              Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse.
            </p>
            <div className='flex font-medium text-xl justify-center gap-8'>
              <button className="bg-Purple-600 px-4 py-4 rounded-[8px] w-[168px]">
          <span>Join Now</span>
        </button>

        <button className="border px-4 py-4 rounded-[8px] w-[168px]">
          <span>View Demo</span>
        </button>
            </div>
        </div>

       <div className='md:w-[80%] w-full mx-auto mt-10'>
  <Image
    src={"/Desktop.svg"}
    alt='Desktop'
    width={300}
    height={300}
    priority
    className='w-full h-auto bg-cover bg-center drop-shadow-lg'
  />
</div>


    </div>
  )
}

export default HeroSection