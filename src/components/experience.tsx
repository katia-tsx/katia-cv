"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ExperienceItem {
  company: string
  role: string
  period: string
  description: string
  achievements: string[]
}

const experiences: ExperienceItem[] = [
  {
    company: "G3deon, Inc",
    role: "Front end Developer and QA",
    period: "2022 - Present",
    description: "Developing and testing web applications, ensuring high-quality user experiences.",
    achievements: [
      "Implemented responsive designs using modern CSS techniques",
      "Conducted thorough QA testing, reducing bug reports by 30%",
      "Collaborated with design team to improve UI/UX workflows"
    ]
  },
  {
    company: "TecnoUp",
    role: "Designer UI/UX and Front end Developer",
    period: "2023 - Present",
    description: "Designing and developing user interfaces for various client projects.",
    achievements: [
      "Developed interactive learning modules using React",
      "Improved site performance, resulting in 25% faster load times",
      "Implemented accessibility features to ensure inclusive design"
    ]
  },
  {
    company: "Pomaray",
    role: "Front end Developer",
    period: "2023 - 2024",
    description: "Developed a dynamic educational app with a focus on improving user engagement.",
    achievements: [
      "Utilized Next.js and TypeScript for robust front-end architecture",
      "Integrated agile practices for iterative improvements",
      "Collaborated across teams to optimize educational modules"
    ]
  }
]

const Experience: React.FC = () => {
  return (
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <Card key={index} className="bg-card/50 backdrop-blur transition-all duration-300 p-6">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-semibold">{exp.company}</CardTitle>
            <CardDescription className="text-sm text-gray-600">{exp.role} | {exp.period}</CardDescription>
          </CardHeader>
          <CardContent className="pb-4">
            <p className="mb-4">{exp.description}</p>
            <ul className="list-disc pl-5 space-y-2">
              {exp.achievements.map((achievement, achIndex) => (
                <li key={achIndex}>{achievement}</li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button variant="outline">Learn More</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default Experience
