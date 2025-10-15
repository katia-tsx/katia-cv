import React from 'react'
import { PortfolioHeader } from '@/components/portfolio/header'
import { AboutSection } from '@/components/portfolio/about'
import { Stats } from '@/components/portfolio/stats'
import { TechMarquee } from '@/components/portfolio/tech-marquee'
import { ProjectBoard } from '@/components/portfolio/project-board'
import { ExperienceSection } from '@/components/portfolio/experience'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header/Hero Section */}
      <PortfolioHeader />
      
      {/* About Me Section */}
      <AboutSection />
      
      {/* Stats Section */}
      <Stats />
      
      {/* Tech Marquee Section */}
      <TechMarquee />
      
      {/* Project Board Section */}
      <section className="px-6 lg:px-12 py-8">
        <div className="max-w-7xl mx-auto">
          <ProjectBoard />
        </div>
      </section>
      
      {/* Experience and Contact/Software Section */}
      <div className="px-6 lg:px-12 py-8">
        <div className="max-w-7xl mx-auto">
          <ExperienceSection />
        </div>
      </div>
    </main>
  )
}
