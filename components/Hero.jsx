// Hero.jsx
import Image from "next/image";
import React from "react";

export default function Hero({ image, text, title }) {
  return (
    <section className=" w-full h-dvh flex items-center justify-center overflow-hidden relative">
      <Image
        src={image}
        alt="hero"
        layout="fill"
        objectFit="cover"
        className="z-0"
        priority
      />
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-black opacity-50 z-10"></div>
      <div className="absolute z-20 max-w-7xl px-5 bottom-20 left-0 right-0  mx-auto ">
        <h1 className="text-white text-4xl md:text-7xl  mb-5 max-w-[700px]">
          {title}
        </h1>
        <p className="text-slate-100 text-lg md:text-3xl max-w-[700px]">
          {text}
        </p>
      </div>
    </section>
  );
}
