'use client'

import React from 'react'
import { SiFigma, SiBlender, SiGithub } from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'

interface ExperienceItem {
  title: string
  company: string
  period: string
  description?: string
}

const professionalExperience: ExperienceItem[] = [
  {
    title: "Full Stack Developer",
    company: "Cano Industrial",
    period: "2025",
    description: "Developed a complete system using Next.js connected to SAP through Service Layer, implementing end-to-end solutions for industrial operations and inventory management."
  },
  {
    title: "Frontend Developer",
    company: "Pomaray",
    period: "2023 - Present",
    description: "Leading frontend development for an educational platform, implementing responsive designs, interactive features, and optimizing application performance."
  },
  {
    title: "Frontend Developer", 
    company: "TecnoUp",
    period: "2024",
    description: "Developed and maintained web applications for various clients, focusing on performance optimization, accessibility, and modern JavaScript frameworks."
  },
  {
    title: "Frontend Developer",
    company: "G3deon, Inc",
    period: "2023",
    description: "Created interactive web experiences and custom animations for clients in the entertainment industry using modern web technologies."
  }
]

const academicExperience: ExperienceItem[] = [
  {
    title: "Advanced React Development",
    company: "Online Learning Platform",
    period: "2023"
  },
  {
    title: "Frontend Development Bootcamp",
    company: "Tech Academy",
    period: "2022"
  },
  {
    title: "JavaScript Certification",
    company: "FreeCodeCamp",
    period: "2022"
  }
]

export const ExperienceSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Professional Experience Column 1 */}
      <div>
        <h3 className="text-xl font-bold text-black mb-6">EXPERIENCE</h3>
        <div className="space-y-4">
          {professionalExperience.slice(0, 2).map((exp, index) => (
            <div key={index} className="border-l-2 border-gray-200 pl-4 pb-4">
              <div className="font-semibold text-black text-sm">
                {exp.title}
              </div>
              <div className="text-xs text-gray-600 mb-2">
                {exp.company} {exp.period && `(${exp.period})`}
              </div>
              {exp.description && (
                <div className="text-xs text-gray-500 leading-relaxed">
                  {exp.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Professional Experience Column 2 */}
      <div>
        <h3 className="text-xl font-bold text-black mb-6">EXPERIENCE</h3>
        <div className="space-y-4">
          {professionalExperience.slice(2).map((exp, index) => (
            <div key={index} className="border-l-2 border-gray-200 pl-4 pb-4">
              <div className="font-semibold text-black text-sm">
                {exp.title}
              </div>
              <div className="text-xs text-gray-600 mb-2">
                {exp.company} {exp.period && `(${exp.period})`}
              </div>
              {exp.description && (
                <div className="text-xs text-gray-500 leading-relaxed">
                  {exp.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contact & Software Column */}
      <div>
        <div className="mb-8">
          <h3 className="text-xl font-bold text-black mb-6">CONTACT</h3>
          <div className="space-y-3">
            {[
              { icon: 'Be', iconClass: 'behance', text: 'https://www.behance.net/katia-pujols' },
              { icon: 'in', iconClass: 'linkedin', text: 'https://www.linkedin.com/in/katia-pujols-983458311/' },
              { icon: 'M', iconClass: 'email', text: 'nkatia.g3@gmail.com' }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className={`software-icon ${item.iconClass}`}>
                  {item.icon}
                </div>
                <span className="text-sm text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-black mb-6">SOFTWARES</h3>
          <div className="flex flex-wrap gap-4">
            <div className="transition-all duration-300 hover:scale-110 cursor-pointer">
              <SiFigma className="w-12 h-12 text-[#F24E1E]" title="Figma" />
            </div>
            <div className="transition-all duration-300 hover:scale-110 cursor-pointer">
              <SiBlender className="w-12 h-12 text-[#F5792A]" title="Blender" />
            </div>
            <div className="transition-all duration-300 hover:scale-110 cursor-pointer">
              <VscCode className="w-12 h-12 text-[#007ACC]" title="VSCode" />
            </div>
            <div className="transition-all duration-300 hover:scale-110 cursor-pointer">
              <SiGithub className="w-12 h-12 text-[#181717]" title="GitHub" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
