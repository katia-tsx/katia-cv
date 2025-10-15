'use client'

import React from 'react'
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiVercel,
  SiFigma,
  SiGit,
  SiGithub,
  SiSap
} from 'react-icons/si'
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaPython,
  FaGitAlt,
  FaDatabase
} from 'react-icons/fa'

interface TechIcon {
  name: string
  icon: React.ReactNode
  color: string
}

const techIcons: TechIcon[] = [
  { name: 'React', icon: <SiReact className="w-8 h-8" />, color: 'text-blue-500' },
  { name: 'Next.js', icon: <SiNextdotjs className="w-8 h-8" />, color: 'text-black' },
  { name: 'TypeScript', icon: <SiTypescript className="w-8 h-8" />, color: 'text-blue-600' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-8 h-8" />, color: 'text-cyan-500' },
  { name: 'HTML5', icon: <FaHtml5 className="w-8 h-8" />, color: 'text-orange-500' },
  { name: 'CSS3', icon: <FaCss3Alt className="w-8 h-8" />, color: 'text-blue-500' },
  { name: 'JavaScript', icon: <FaJs className="w-8 h-8" />, color: 'text-yellow-500' },
  { name: 'Node.js', icon: <SiNodedotjs className="w-8 h-8" />, color: 'text-green-600' },
  { name: 'Python', icon: <FaPython className="w-8 h-8" />, color: 'text-yellow-600' },
  { name: 'MongoDB', icon: <SiMongodb className="w-8 h-8" />, color: 'text-green-500' },
  { name: 'PostgreSQL', icon: <SiPostgresql className="w-8 h-8" />, color: 'text-blue-700' },
  { name: 'Docker', icon: <SiDocker className="w-8 h-8" />, color: 'text-blue-500' },
  { name: 'Vercel', icon: <SiVercel className="w-8 h-8" />, color: 'text-black' },
  { name: 'Figma', icon: <SiFigma className="w-8 h-8" />, color: 'text-purple-500' },
  { name: 'Git', icon: <FaGitAlt className="w-8 h-8" />, color: 'text-orange-600' },
  { name: 'GitHub', icon: <SiGithub className="w-8 h-8" />, color: 'text-gray-800' },
  { name: 'SAP', icon: <SiSap className="w-8 h-8" />, color: 'text-blue-600' }
]

export const TechMarquee = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100" style={{ height: '30vh' }}>
      {/* Diagonal Background */}
      <div className="absolute inset-0 transform -skew-y-2 origin-top-left">
        <div className="w-full h-full bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50"></div>
      </div>
      
      {/* Background Images URLs for later recreation */}
      {/* Unsplash URLs for tech-related images: */}
      {/* https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop - Code on screen */}
      {/* https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop - Developer workspace */}
      {/* https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop - Code editor */}
      {/* https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop - Data visualization */}
      
      {/* Marquee Container */}
      <div className="relative z-10 h-full flex items-center overflow-hidden">
        {/* First Row - Left to Right */}
        <div className="absolute top-[30%] flex animate-marquee whitespace-nowrap">
          {[...techIcons, ...techIcons, ...techIcons].map((tech, index) => (
            <div
              key={`row1-${index}`}
              className={`flex items-center justify-center mx-6 ${tech.color} hover:scale-110 transition-transform duration-300`}
            >
              {tech.icon}
            </div>
          ))}
        </div>
        
        {/* Second Row - Right to Left */}
        <div className="absolute top-[60%] flex animate-marquee-reverse whitespace-nowrap">
          {[...techIcons, ...techIcons, ...techIcons].reverse().map((tech, index) => (
            <div
              key={`row2-${index}`}
              className={`flex items-center justify-center mx-6 ${tech.color} hover:scale-110 transition-transform duration-300`}
            >
              {tech.icon}
            </div>
          ))}
        </div>
      </div>
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20"></div>
    </section>
  )
}