import Image from 'next/image'
import React from 'react'

const Feature = () => {
  return (
    <div className='max-w-[1440px] w-full md:px-20 px-5 md:py-20 py-5 font-roboto bg-blueGray-100 text-blueGray-900'>
        <section className='flex md:flex-row flex-col justify-between items-center'>

            <div className='text-center md:text-left'>
                <h1 className='md:font-extrabold font-bold md:text-[56px] text-[32px]'>
                    Turpis risus facilisi
                </h1>

                <p className='font-normal md:text-xl text-base mt-2'>
                    Augue feugiat mi, massa amet. Id purus aliquam bibendum purus dictum elementum nullam odio tellus. Imperdiet feugiat est odio fames magna orci. Augue purus aliquam, placerat vestibulum dictum pellentesque molestie. Facilisis pretium porta congue proin.
                </p>
            </div>

            <Image
            src={"/Col.svg"}
            alt='laptop'
            width={200}
            height={200}
            className='w-full h-auto'
            ></Image>
        
        </section>

        <section className='flex md:flex-row flex-col-reverse justify-between items-center md:py-20 py-10'>

            <Image
            src={"/Col-2.svg"}
            alt='laptop'
            width={200}
            height={200}
            className='w-full h-auto'
            ></Image>

            <div className='text-center md:text-left md:ml-10'>
                <h1 className='md:font-extrabold font-bold md:text-[56px] text-[32px]'>
                    Sagittis sapien viverra
                </h1>

                <p className='font-normal md:text-xl text-base mt-2'>
                   Id turpis ante nunc, id tempor. Diam, eros, eget suspendisse dolor tellus. Diam fringilla sed volutpat facilisi. Pulvinar vulputate facilisis vel eros. Auctor metus sed auctor tortor sed nulla. Urna massa eu vel blandit sed nisi gravida. Imperdiet parturient at purus bibendum risus auctor lacus tristique arcu. Arcu hac cursus faucibus id. Eu integer parturient risus magna eget massa. Risus molestie tempor, faucibus non ultricies. Nam vel mattis quis dui, condimentum mi volutpat ut aliquam.
                </p>
            </div>
        
        </section>

        <section className='flex md:flex-row flex-col justify-between items-center'>

            <div className='text-center md:text-left'>
                <h1 className='md:font-extrabold font-bold md:text-[56px] text-[32px]'>
                    Non commodo nec
                </h1>

                <p className='font-normal md:text-xl text-base mt-2'>
                    Laoreet amet, lacus sed faucibus. Nec, natoque semper rutrum dui. Curabitur in commodo pretium lacinia feugiat. A ultricies quis commodo, nisl, vestibulum, feugiat dolor. Tincidunt orci consequat, pellentesque leo dui nunc ac, amet. A proin pulvinar nec nibh bibendum. Nec mi mattis vulputate dictum platea pharetra, id id.
                </p>
            </div>

            <Image
            src={"/Col-3.svg"}
            alt='laptop'
            width={200}
            height={200}
            className='w-full h-auto'
            ></Image>
        
        </section>
    </div>
  )
}

export default Feature