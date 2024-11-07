import Image from "next/image"

export default function About_us({ image, title, text }) {
  return (
    <div className=" flex p-4">
      <div className="max-w-7xl mx-auto rounded-lg overflow-hidden ">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 relative">
            <Image
              src={image}
              alt="Team meeting in progress"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />

          </div>
          <div className="md:w-1/2 p-6 bg-[#343434] flex  justify-center flex-col">
            <h2 className="md:text-5xl text-3xl text-white mb-4">{title}</h2>
            <p className="text-white md:text-lg text-base leading-relaxed">
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}