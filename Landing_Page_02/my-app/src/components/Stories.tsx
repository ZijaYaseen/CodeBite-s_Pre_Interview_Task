import {StoryCarousel} from './HorizontalCrousel'

const Stories = () => {
  return (
    <div className='max-w-[1440px] w-full font-roboto md:px-20 px-5 py-10'>
            <div className='text-center flex flex-col md:gap-6 gap-4 md:w-[75%] mx-auto w-full'>
    
               
                    <h2 className='md:font-extrabold md:py-5 font-bold md:text-[56px] text-2xl bg-gradient-to-r from-[#C026D3] to-[#701A75] bg-clip-text text-transparent'>
                        Stories from our users
                    </h2>
                    <p className='font-normal md:text-xl text-base text-blueGray-600'>
                        Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.
                    </p>
    
            </div>

            <StoryCarousel />
        </div>
  )
}

export default Stories