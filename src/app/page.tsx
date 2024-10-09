"use client";

import { FC } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ModeToggle } from "@/components/mode-toggle";
import AboutMe from "@/components/about-me";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Contact from "@/components/contact";

const Home: FC = () => {

  return (
    <div className="min-h-screen coquette-bg p-4 md:p-8">
      <Card className="max-w-4xl mx-auto game-border pixel-corners bg-card/80 backdrop-blur">
        <div className="p-6">
          <header className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-bold text-primary">Katia World</h1>
            <div className="flex items-center space-x-4">
              <ModeToggle />
            </div>
          </header>

          <Tabs defaultValue="about" className="space-y-4">
            <TabsList className="flex flex-col sm:flex-row sm:flex-wrap gap-2">
              <TabsTrigger value="about" className="w-full sm:w-auto">About</TabsTrigger>
              <TabsTrigger value="projects" className="w-full sm:w-auto">Projects</TabsTrigger>
              <TabsTrigger value="experience" className="w-full sm:w-auto">Experience</TabsTrigger>
              <TabsTrigger value="skills" className="w-full sm:w-auto">Skills</TabsTrigger>
              <TabsTrigger value="contact" className="w-full sm:w-auto">Contact</TabsTrigger>
            </TabsList>

            <TabsContent value="about">
              <AboutMe />
            </TabsContent>
            <TabsContent value="projects">
              <Projects />
            </TabsContent>
            <TabsContent value="experience">
              <Experience />
            </TabsContent>
            <TabsContent value="skills">
              <Skills />
            </TabsContent>
            <TabsContent value="contact">
              <Contact />
            </TabsContent>
          </Tabs>
        </div>
      </Card>
    </div>
  );
};

export default Home;
