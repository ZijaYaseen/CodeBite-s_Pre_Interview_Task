import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
  return (
    <div className='max-w-[1440px] bg-purple-900 mx-auto w-full text-white font-roboto md:py-20 md:px-20 py-10 text-center px-5'>

        <div className='flex md:flex-row flex-col justify-around md:text-left text-center items-center'>

            {/* Text Content 1 */}

              <div className="w-full grid gap-10">
          <div>
            <p className="text-xl font-bold uppercase tracking-widest my-2">
           Testimonials
          </p>

          <h2 className="text-5xl md:text-7xl font-extrabold leading-tight relative overflow-visible">
          
             Bigapp got to the next level
          </h2>
          </div>

          <a
            href="#"
            className="
              inline-block text-base font-semibold
              underline-offset-4 hover:underline mb-5
            "
          >
            View Case Study  →
          </a>
            </div>

            {/* Image 2nd part */}
            <div className='w-full md:w-[80%] md:px-7'>
                <Image
                src={"/Mobile.svg"}
                alt='Mobile Picture'
                width={300}
                height={300}
                className='w-full h-auto'
                ></Image>
            </div>

            {/* 3rd Part (Text content) */}

            <div className='grid gap-6 text-left'>
                <p className='font-normal text-base'>
                    “Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque faucibus.”
                </p>

               <div className='flex gap-4 items-center'>
                <div className='w-[20%]'>
                    <Image
                src={"/User-Thumb.svg"}
                alt='Owner'
                width={300}
                height={300}
                className='w-full h-auto'
                 />
                </div>
                 <div>
                    <p>Rwanda Melflor</p>
                    <p>Co-founder Bigapp</p>
                </div>
                
               </div>
            </div>
        </div>
        

    </div>
  )
}

export default Testimonials