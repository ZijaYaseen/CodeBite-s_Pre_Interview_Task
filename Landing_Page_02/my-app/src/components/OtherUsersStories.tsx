import Image from 'next/image'
import { HorizontalCarouselOtherStories } from './HorizontalCrousel'

const OtherUsersStories = () => {
  return (
    <div className="max-w-[1440px] w-full font-roboto md:px-20 px-5 py-10 bg-fuchsia-50 relative">
      <div>
        <Image
        src={"/Deco-left.svg"}
        alt='Decorator'
        width={500}
        height={500}
        className='w-40 h-40 absolute left-0 bottom-0'
        >
        </Image>
      </div>

       <div>
        <Image
        src={"/Deco-right.svg"}
        alt='Decorator'
        width={500}
        height={500}
        className='w-40 h-40 absolute right-0 top-0 z-0 opacity-50 md:opacity-100'
        >
        </Image>
      </div>

      <div className='text-center'>
     <h2 className='md:font-extrabold z-10 md:py-14 font-bold md:text-[56px] text-2xl bg-gradient-to-r from-[#C026D3] to-[#701A75] bg-clip-text text-transparent'>
        What other users say
    </h2>
   </div>

   <HorizontalCarouselOtherStories />
    </div>
  )
}

export default OtherUsersStories