// components/HeroSection.tsx
import Image from "next/image";
import Card from "./Card";
import { CardData } from "@/data";

export default function HeroSection() {
  return (
    <div className="bg-background text-primary_text md:h-[1024px] h-[1220px]">
      <div className="max-w-[92%] mx-auto py-10 relative">

        <div className="absolute top-0 right-0">
          <div className="relative w-[700px] h-[700px]">
            <Image
              src="/unsplash_fn--TuQvBZ0.svg"
              alt="Decorative shape"
              fill
              className="bg-cover"
            />
          </div>
        </div>
        {/* Top right stats */}
        <div className="w-full flex justify-end mt-10 absolute md:right-14">
          <div className="text-center">
            <h2 className="text-5xl font-bold font-bitter">256B+</h2>
            <p className="mt-1 font-normal text-base font-space-mono">Lorem ipsum dolor sit</p>
          </div>
        </div>

        <div className="w-full flex justify-end absolute md:top-[470px] top-[580px] md:right-96 right-4">
          <div className="text-center">
            <h2 className="text-5xl font-bold font-bitter">986K+</h2>
            <p className="mt-1 font-normal text-base font-space-mono">Lorem ipsum dolor sit</p>
          </div>
        </div>
{/* Sun */}
    <div className="absolute top-32 overflow-visible flex justify-center items-center">
  <div
    className="
      w-[172px] h-[172px]
      rounded-full 
      bg-[#F9E166] 
      transition-shadow duration-300 ease-out 
    shadow-[0px_0px_100px_50px_rgba(249,225,102,0.8)]
    "
  ></div>
</div>




        {/* Bottom-centered main heading */}
        <div className="absolute top-52">
          <div className="flex flex-col max-w-2xl gap-6">
            <h1 className="text-4xl md:text-7xl font-extrabold font-bitter">
              Go beyond and create your space
            </h1>
            <p className="font-normal font-space-mono text-[22px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed idt.
            </p>
            <div className="flex justify-between max-w-4xl w-full">
              <button
                className="font-space-mono text-xl md:py-6 py-4 px-10 bg-primary_text text-background rounded-[40px] transition duration-300 ease-in-out
               hover:bg-primary_text/80 hover:scale-105 hover:shadow-lg">
                Get Started
              </button>
            </div>

          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-6 gap-4 absolute top-[680px] py-5">
          {CardData.map(({ id, title, description }) => (
            <Card key={id} title={title} description={description} />
          ))}
        </div>
      </div>
    </div>
  );
}
