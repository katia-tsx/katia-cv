'use client'

import React from 'react'
import Image from 'next/image'

export const AboutSection = () => {
  return (
    <section className="px-6 lg:px-12 py-8 lg:py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          {/* ID Card Image */}
          <div className="flex-shrink-0">
            <div className="id-card rounded-lg p-4 border border-gray-200">
              <div className="relative w-48 h-32">
                <Image
                  src="https://avatars.githubusercontent.com/u/123526476?v=4"
                  alt="Katia ID Card"
                  fill
                  className="object-cover rounded"
                />
              </div>
              <div className="mt-2 text-center">
                <div className="w-full h-0.5 bg-gray-300"></div>
                <div className="text-xs text-gray-500 mt-1">Lanyard</div>
              </div>
            </div>
          </div>
          
          {/* About Text */}
          <div className="flex-1">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
              Hi, I'm <span className="font-black">Katia</span>
            </h2>
            <div className="max-w-2xl">
              <p className="text-lg text-gray-600 leading-relaxed">
                I am a Frontend Developer with a passion for creating exceptional user experiences. I develop because I love solving problems, building efficient solutions, and making things work seamlessly. Development isn't just about code; it's about creating digital experiences that are intuitive, performant, and meaningful. It's not just about functionality; it's about crafting solutions that users love to interact with. If it works flawlessly and feels effortless, I've done my job.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
