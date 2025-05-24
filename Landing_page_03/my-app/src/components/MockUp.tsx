"use client";

import Image from "next/image";

export default function UnlimitedIdeas() {
  return (
    <>

    {/* ---------------------------MockUp 01----------------------------- */}

    <section
      className="
        w-full max-w-[1440px] mx-auto
        px-4 md:px-16 lg:px-20 py-10 md:py-20
        flex flex-col justify-center md:text-left text-center
        text-white font-roboto
      "
    >
      <div className="flex md:flex-row flex-col-reverse items-center justify-between">
        <div className="w-full grid gap-10">
         <div>
           <p className="text-xl font-bold uppercase tracking-widest my-2">
            Discover
          </p>

          <h2 className="text-4xl md:text-7xl font-extrabold leading-tight relative overflow-visible">
            <span className="text-purple-400">Unlimited&nbsp;</span>

            <span className="relative inline-block overflow-visible">
      
              <span
                className="
                  inline-block
                  w-[4ch]
                  border-4 border-orange-700
                  px-1 py-0.5
                "
              >
                ideas
              </span>
            </span>

            &nbsp; for your next great projects
          </h2>
         </div>

          <p className="text-base">
            Seetokse auctor dolor diam tortor, faucibus faucibus non interdum
            nunc. <br />
            Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing
            lacinia.
          </p>

          <a
            href="#"
            className="
              inline-block text-base font-semibold
              underline-offset-4 hover:underline
            "
          >
            Discover Ideas →
          </a>
        </div>

        <div className="w-full md:w-auto">
          <Image
            src="/Shapes.svg"
            alt="Shape"
            width={300}
            height={300}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>


    {/* -------------------------Mockup 02------------------------- */}


    <section
      className="
        w-full max-w-[1440px] mx-auto
        px-4 md:px-16 lg:px-20 py-10 md:py-20
        flex flex-col justify-center md:text-left text-center
        text-white font-roboto
      "
    >
      <div className="flex md:flex-row flex-col-reverse items-center justify-between">
        <div className="w-full grid gap-10">
          <div>
            <p className="text-xl font-bold uppercase tracking-widest my-2">
           Powerful
          </p>

          <h2 className="text-4xl md:text-7xl font-extrabold leading-tight relative overflow-visible">
          
             All the tools you can imagine
          </h2>
          </div>

          <p className="text-base">
            Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia.
          </p>

        </div>

        <div className="w-full md:w-auto">
          <Image
            src="/Desktop.svg"
            alt="Shape"
            width={300}
            height={300}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>

    {/* -------------------------Mock Up 03 ------------------------ */}

     <section
      className="
        w-full max-w-[1440px] mx-auto
        px-4 md:px-16 lg:px-20 py-10 md:py-20
        flex flex-col justify-center md:text-left text-center
        text-white font-roboto
      "
    >
      <div className="flex md:flex-row flex-col-reverse items-center justify-between">
        <div className="w-full grid gap-10">
         <div>
           <p className="text-xl font-bold uppercase tracking-widest my-2">
           Customers
          </p>

         <h2 className="text-4xl md:text-7xl font-extrabold leading-tight">
  <span className="text-purple-400">Target&nbsp;</span>
  <span
    className="
      inline-block
      bg-gradient-to-r 
      from-pink-700 to-pink-700
      bg-[length:20%_100%] 
      bg-left 
      bg-no-repeat
    "
  >
    customers
  </span>
  &nbsp;with our powerful AI kit
</h2>
         </div>

          <p className="text-base">
            Seetokse auctor dolor diam tortor, faucibus faucibus non interdum
            nunc. <br />
            Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing
            lacinia.
          </p>

          <a
            href="#"
            className="
              inline-block text-base font-semibold
              underline-offset-4 hover:underline
            "
          >
            How Targeting Customers Works →
          </a>
        </div>

        <div className="md:w-[55%] w-full">
          <Image
            src="/Mockup3.svg"
            alt="Shape"
            width={300}
            height={300}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>

    {/* -----------------------Mock Up 04 ---------------------------- */}
    
    <section
      className="
        w-full max-w-[1440px] mx-auto
        px-4 md:px-16 lg:px-20 py-10 md:py-20
        flex flex-col justify-center md:text-left text-center
        text-white font-roboto
      "
    >
      <div className="flex md:flex-row flex-col-reverse items-center justify-between">
        <div className="w-full grid gap-10">
          <div>
            <p className="text-xl font-bold uppercase tracking-widest my-2">
           Speed
          </p>

          <h2 className="text-4xl md:text-7xl font-extrabold leading-tight relative overflow-visible">
          
             Work fast, w/o interruptions
          </h2>
          </div>

          <p className="text-base">
            Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia.
          </p>

        </div>

        <div className="w-full md:w-auto">
          <Image
            src="/Desktop.svg"
            alt="Shape"
            width={300}
            height={300}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
    </>
  );
}
