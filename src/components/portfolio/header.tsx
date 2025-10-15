'use client'

import React from 'react'
import Image from 'next/image'

export const PortfolioHeader = () => {
  return (
    <section className="relative px-6 lg:px-12 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          {/* Portfolio Title */}
          <div className="flex-1">
            <div className="portfolio-title text-black mb-4 relative">
              <span className="letter p">P</span>
              <span className="letter o">O</span>
              <span className="letter r">R</span>
              <span className="letter t">T</span>
              <span className="letter f">F</span>
              <span className="letter o2">O</span>
              <span className="letter l">L</span>
              <span className="letter i">I</span>
              <span className="letter o3">O</span>
              <span className="absolute top-0 right-0 text-6xl lg:text-8xl font-bold text-gray-300 transform -translate-y-4 translate-x-8">
                '25
              </span>
            </div>
            <div className="text-2xl lg:text-3xl font-medium text-gray-500 mt-8 text-center">
              KATIA NATHALY PUJOLS ALMANZAR
            </div>
          </div>
          
          {/* Illustration */}
          <div className="flex-shrink-0 lg:ml-8">
            <div className="w-64 h-80 lg:w-80 lg:h-96 relative">
              <Image
                src="/katia.png"
                alt="Katia Portfolio Illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
