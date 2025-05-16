import Image from 'next/image'
import React from 'react'

const GetBetter = () => {
  return (
    <div className='max-w-[1440px] w-full font-roboto md:px-20 px-5 py-5 md:py-10'>
        <div className='text-center flex flex-col md:gap-6 gap-4 md:w-[75%] mx-auto w-full'>

           
                <h2 className='md:font-extrabold md:py-5 font-bold md:text-[56px] text-2xl bg-gradient-to-r from-[#C026D3] to-[#701A75] bg-clip-text text-transparent'>
                    Get better everyday
                </h2>
                <p className='font-normal md:text-xl text-base text-blueGray-600'>
                    Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.
                </p>

                 <div className='mb-5'>
             <button className="md:px-10 px-6 py-3 md:py-[17px] md:text-2xl text-base md:font-bold font-medium rounded-full bg-fuchsia-600 tracking-wider ring-2 ring-transparent hover:ring-fuchsia-600 text-white hover:bg-white hover:text-fuchsia-600 transition-all">
              Start Now
            </button>
          </div>

          <Image
          src={"/GetBetter.svg"}
          alt='Picture'
          width={300}
          height={300}
          className='w-full h-auto'
          ></Image>



        </div>
    </div>
  )
}

export default GetBetter