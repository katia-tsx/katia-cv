"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from 'framer-motion'

interface Project {
  title: string
  description: string
  tags: string[]
  link: string
  image: string
}

const projects: Project[] = [
  {
    title: "Pomaray",
    description: "Educational app developed using Next.js, Figma, Scrum, TypeScript, and NextUI.",
    tags: ["Next.js", "TypeScript", "Figma", "Scrum", "NextUI"],
    link: "https://pomaray.example.com",
    image: "https://github.com/pomaray/pomaray-app/raw/main/public/images/docs/pomaray-app.png"
  },
  {
    title: "Gedeon Studios",
    description: "Website built with HTML, CSS, and JavaScript, utilizing Locomotive Scroll.",
    tags: ["HTML", "CSS", "JavaScript", "Locomotive Scroll"],
    link: "https://gedeonstudios.example.com",
    image: "/gedeon.png"
  },
  {
    title: "Calculator",
    description: "A practice project focusing on mathematical operations and user interface design.",
    tags: ["JavaScript", "CSS", "Math"],
    link: "https://calculator.example.com",
    image: "https://github.com/katia-tsx/calculadora/raw/main/assets/Captura%20de%20pantalla%202.png"
  },
  {
    title: "Chatbot",
    description: "Implemented using the GPT-3.5 Turbo API, Next.js, DaisyUI, and Tailwind CSS.",
    tags: ["Next.js", "GPT-3.5", "DaisyUI", "Tailwind CSS"],
    link: "https://chatbot.example.com",
    image: "chatbot.png"
  },
  {
    title: "Blog",
    description: "Developed with Astro, employing island architecture for optimal performance.",
    tags: ["Astro", "Island Architecture", "Web Performance"],
    link: "https://blog.example.com",
    image: "https://github.com/katia-tsx/Astro-Blog/raw/master/public/inicio.png"
  }
]

const Projects: React.FC = () => {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: index * 0.2,
            ease: [0.6, -0.05, 0.01, 0.99]
          }}
          className="flex justify-center"
        >
          <Card className="bg-card/50 backdrop-blur w-80 h-96 shadow-lg overflow-hidden flex flex-col justify-between transition-all duration-300 hover:scale-105 space-y-4">
            <img src={project.image} alt={project.title} className="h-40 w-full object-cover" />
            <CardHeader className="flex-1 p-4">
              <CardTitle className="text-primary text-lg">{project.title}</CardTitle>
              <CardDescription className="text-sm">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 p-4 flex flex-wrap gap-2 items-center">
              {project.tags.map((tag, tagIndex) => (
                <Badge key={tagIndex} variant="secondary">{tag}</Badge>
              ))}
            </CardContent>
            <CardFooter className="p-4 flex justify-center">
              <Button variant="outline" asChild>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                >
                  View Project
                </motion.a>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

export default Projects
