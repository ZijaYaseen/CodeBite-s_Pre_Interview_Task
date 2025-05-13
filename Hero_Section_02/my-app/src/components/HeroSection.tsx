import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="max-w-[1490px] w-full mx-auto bg-gray-400">

      <div className="flex flex-col md:flex-row">
        <div className="grid">
          <div className="relative h-fit">
            <Image
              src={"/Image-left.svg"}
              alt="Image Left"
              width={300}
              height={300}
              className="w-full h-auto"
            ></Image>

            <div className="absolute md:top-44 top-20 text-white md:left-10 left-5 flex flex-col gap-6 max-w-xl px-6 mx-auto">
              <h1 className="font-bitter font-extrabold md:text-6xl text-4xl">
                Design, create, and be passionate
              </h1>
              <p className="font-space-mono font-normal md:text-xl text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed idt.
              </p>
              <div className="text-base font-space-mono">
                <button
                  className="md:py-5 py-3 md:px-10 px-8
         bg-white text-black
         rounded-[40px]

         ring-0                  
         hover:ring-2             
         hover:ring-white hover:bg-black hover:bg-opacity-85 hover:text-white border-2 border-transparent       
         hover:ring-offset-2      

         transition-all duration-300 ease-in-out
"
                >
                  Get started
                </button>


              </div>
            </div>

          </div>

          {/* Second Section */}
          <div className="flex">

            {/* 2nd section , 1st box */}
            <div className="relative">
              <Image
                src={"/Image-bottom-left-left.svg"}
                alt="Image Left"
                width={300}
                height={300}
                className="w-full h-auto"
              ></Image>

              <div className="absolute top-6 left-6 font-bitter text-[#333333] opacity-60">
                <h3 className="text-[56px] font-extrabold leading-none">
                  02
                </h3>
                <p className="font-medium text-lg">
                  Go with your heart
                </p>
              </div>

            </div>

            {/* 2nd section , 2nd box */}
            <div className="relative">
              <Image
                src={"/Image-bottom-left-right.svg"}
                alt="Image Left"
                width={300}
                height={300}
                className="w-full h-auto"
              ></Image>

              <div className="absolute top-6 left-6 font-bitter text-[#333333] opacity-60">
                <h3 className="text-[56px] font-extrabold leading-none">
                  03
                </h3>
                <p className="font-medium text-lg">
                  Live a full live
                </p>


              </div>

            </div>


          </div>

        </div>


        <div className="relative">
          <Image
            src={"/image-right.svg"}
            alt="Image Left"
            width={300}
            height={300}
            className="w-full h-auto"
          ></Image>

          <div className="absolute top-12 right-6 font-bitter text-[#333333] opacity-50 text-right">
            <h3 className="text-[56px] font-extrabold leading-none">
              04
            </h3>
            <p className="font-medium text-lg">
              Discover the world
            </p>


          </div>
        </div>
      </div>

    </div>
  )
}