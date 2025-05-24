import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className='max-w-[1440px] mx-auto w-full px-5 md:px-20 md:py-10 py-5 items-center text-center font-roboto'>
        <div className='text-center flex flex-col md:gap-6 gap-4'>
           <h1 className='md:font-extrabold font-bold md:text-7xl text-[32px] bg-gradient-to-r from-[#C026D3] to-[#701A75] bg-clip-text text-transparent'>
            It&#39;s time to take a break
           </h1>
           <p className='text-blueGray-600 font-normal text-xl '>
            Build your meditation skills with an app that gives you all you need!
           </p>

           <div className='flex md:gap-4 gap-2 justify-center' >
            <input type="search" name="Search" placeholder='Enter your name '
           className='placeholder-blueGray-600 border border-blueGray-300 md:placeholder:text-2xl placeholder:text-base py-[13px] px-6 rounded-[26px] md:w-[476px] w-[221px] md:h-16 h-12 outline-none'/>

           <div>
             <button className=" md:h-16 h-12 w-24 sm:w-40 py-[13px] sm:text-base md:py-[17px] md:text-xl text-xs md:font-bold font-medium rounded-full bg-fuchsia-600 tracking-wider ring-2 ring-transparent hover:ring-fuchsia-600 text-white hover:bg-white hover:text-fuchsia-600 transition-all">
              Start Now
            </button>
          </div>
           </div>

           <div
  className="
    w-full
    md:h-[465px]
    h-[222px]
    overflow-hidden
    relative
    filter
    rounded-[20px]
    drop-shadow-[12px_12px_0_#0f172a]
    mt-5 animate-float
  
  "
>
  <Image
    src="/Home-Picture.svg"
    alt="Breakio"
    fill
    style={{
      objectFit: 'cover',
    }}
    priority
  />
</div>
          
        </div>
    </div>
  )
}

export default HeroSection