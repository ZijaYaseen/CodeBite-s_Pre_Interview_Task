// app/components/HeroSection.tsx

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="max-w-[1440px] relative bg-[url('/Section.svg')] font-roboto bg-cover bg-center text-white w-full overflow-hidden">

      <div className="flex flex-col md:flex-row md:justify-between md:px-20 px-5">
       <div className="flex flex-col justify-center md:gap-6 gap-4 text-center md:text-left">
        <h1 className="md:text-7xl text-[40px] md:font-extrabold font-bold">
          Launch Your App <br />
          <span className="text-blueGray-300 md:text-6xl text-4xl">Grow Your Business</span>
        </h1>

        <p className="max-w-lg text-lg">
          Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar.
        </p>

        <div>
          <button className="px-6 py-3 font-bold text-2xl rounded-full tracking-wide hover:text-blueGray-600 text-white border border-white hover:bg-white hover:text-bgBlue transition-all">
              Free Launch
        </button>
        </div>
        
    </div>

    <div className="mt-8">
      <Image
      src={"Hero-Image.svg"}
      alt="Image"
      width={300}
      height={300}
      className="w-full h-auto"
      >

      </Image>
    </div>
      </div>
    </section>
  );
}
