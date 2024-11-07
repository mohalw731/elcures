'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'



export default function Case({ cases, button_text, button_link, show_button, title }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextCase = () => {
    setCurrentIndex((prev) => (prev + 1) % cases.length)
  }

  const previousCase = () => {
    setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length)
  }

  const goToCase = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className="w-full max-w-7xl px-5 mx-auto py-20">
      <h2 className="md:text-5xl text-white text-3xl mb-5">{title}</h2>

      <div className="relative bg-[#272727] rounded-lg overflow-hidden">
        <div className="grid md:grid-cols-2 gap-4">
          {/* Image section */}
          <div className="relative h-[300px] md:h-[400px]">
            <img
              src={cases[currentIndex].image}
              alt={cases[currentIndex].title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Content section */}
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-white mb-4">
              {cases[currentIndex].title}
            </h3>
            <p className="text-gray-200 leading-relaxed">
              {cases[currentIndex].description}
            </p>
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="absolute bottom-16 right-4  gap-2 md:flex hidden">
          <Button
            variant="outline"
            size="icon"
            onClick={previousCase}
            className="bg-white/10 hover:bg-white/20 border-none text-white"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous case</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextCase}
            className="bg-white/10 hover:bg-white/20 border-none text-white"
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next case</span>
          </Button>
        </div>

        {/* Slider */}
        <div className="absolute bottom-4 left-0 right-0">
          <div className="flex justify-center items-center gap-2">
            {cases.map((_, index) => (
              <button
                key={index}
                onClick={() => goToCase(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                  }`}
                aria-label={`Go to case ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {show_button && (
        <div className="mt-10 items-center flex justify-center">
          <Link href={button_link} className="bg-white p-3 rounded  hover:bg-yellow-500 transition-all duration-300">
            {button_text}
          </Link>
        </div>
      )}
    </div>
  )
}