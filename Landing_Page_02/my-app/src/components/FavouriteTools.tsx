import { Features } from "@/data/main"

export default function FeaturesGrid() {
  return (
    <section className="max-w-[1440px] mx-auto w-full font-roboto md:px-20 px-5 py-10">
      
      <div className='text-center flex flex-col md:gap-6 gap-4 mx-auto w-full'>
        <h2 className="md:font-extrabold md:py-5 font-bold md:text-[56px] text-2xl bg-gradient-to-r from-[#C026D3] to-[#701A75] bg-clip-text text-transparent">
        Your favourite tools
      </h2>
      <p className="font-normal md:text-xl text-base text-blueGray-600">
        In risus nec molestie at in pulvinar tellus. At integer id condimentum gravida nisi nisl…
      </p>
      </div>
      {/* 2) Responsive grid: 1 column on xs, 2 on sm, 3 on lg */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-10 gap-12 text-center md:text-left">
        {Features.map((f, idx) => {
          const Icon = f.icon
          return (
            <div key={idx} className="flex flex-col md:items-start items-center space-y-4">
              <Icon size={28} className="text-purple-600" />
              <div>
                <h3 className="font-semibold text-lg text-gray-900">{f.title}</h3>
                <p className="text-gray-600 mt-1">{f.text}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
