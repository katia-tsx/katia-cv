"use client"

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface Skill {
  name: string
  level: number
}

const skills: Skill[] = [
  { name: "Frontend Development", level: 90 },
  { name: "React", level: 85 },
  { name: "Next.js", level: 80 },
  { name: "TypeScript", level: 75 },
  { name: "UI/UX Design", level: 70 },
  { name: "CSS/Tailwind", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "HTML", level: 90 },
  { name: "Figma", level: 75 },
  { name: "SAP Business One", level: 65 },
  { name: "Git", level: 70 }
]

const Skills: React.FC = () => {
  return (
    <Card className="bg-card/50 backdrop-blur">
      <CardHeader>
        <CardTitle>Skills & Expertise</CardTitle>
        <CardDescription>Proficiency levels for each skill</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-1/3">{skill.name}</div>
              <div className="w-2/3">
                <Progress value={skill.level} className="w-full" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default Skills
