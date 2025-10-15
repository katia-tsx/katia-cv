'use client'

import React from 'react'

interface StatItem {
  number: string
  label: string
  description: string
  color: string
}

const stats: StatItem[] = [
  {
    number: "2+",
    label: "years",
    description: "Experience",
    color: "text-blue-600"
  },
  {
    number: "10+",
    label: "projects",
    description: "Completed",
    color: "text-green-600"
  },
  {
    number: "4+",
    label: "happy",
    description: "Clients",
    color: "text-purple-600"
  }
]

export const Stats = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            Professional Impact
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Numbers that reflect my commitment to delivering exceptional results 
            and building lasting relationships with clients and teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-transparent transition-all duration-500 text-center relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className={`text-5xl lg:text-6xl font-bold ${stat.color} mb-2 transition-transform duration-300 group-hover:scale-110`}>
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-gray-800 mb-1">
                  {stat.label}
                </div>
                <div className="text-gray-600">
                  {stat.description}
                </div>
              </div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
