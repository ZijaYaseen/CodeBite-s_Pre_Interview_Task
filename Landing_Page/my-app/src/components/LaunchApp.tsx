import Image from 'next/image'
import React from 'react'

const LaunchApp = () => {
  return (
    <div className="max-w-[1440px] bg-[url('/SubSectionLast.svg')] w-full md:px-20 bg-blueGray-600 font-roboto text-blueGray-100">
       <section className='flex md:flex-row flex-col md:justify-between md:items-center'>
      
                  <div>
                    <Image
                  src={"/Desktop.svg"}
                  alt='laptop'
                  width={100}
                  height={100}
                  className='md:w-[600px] md:h-[600px] w-full h-auto'
                  ></Image>
                  </div>
      
                  <div className="flex flex-col justify-center md:gap-6 gap-4 text-center md:text-left md:pt-10 bg-blueGray-600">
        <h2 className="md:text-[56px] text-[32px] md:font-extrabold font-bold">
          Launch Your App Today
        </h2>

        <p className="max-w-lg text-lg">
          Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar.
        </p>

        <div>
          <button className="px-6 py-3 font-bold text-2xl rounded-full tracking-wide text-white hover:text-blueGray-600 border border-white hover:bg-white hover:text-bgBlue transition-all">
              Free Launch
        </button>
        </div>
        
    </div>
              
              </section>
    </div>
  )
}

export default LaunchApp