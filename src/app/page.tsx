"use client";

import { FC, useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ModeToggle } from "@/components/mode-toggle";
import AboutMe from "@/components/about-me";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import { HiMenu, HiX } from "react-icons/hi"; // Asegúrate de tener react-icons instalado

const Home: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("about");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleTabChange = (tabValue: string) => {
    setActiveTab(tabValue);
    setIsMobileMenuOpen(false); // Cierra el menú después de seleccionar una pestaña
  };

  return (
    <div className="min-h-screen coquette-bg p-4 md:p-8">
      <Card className="max-w-4xl mx-auto game-border pixel-corners bg-card/80 backdrop-blur">
        <div className="p-6">
          <header className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-bold text-primary">Katia World</h1>
            <div className="flex items-center space-x-4">
              <ModeToggle />
              {/* Botón de menú para pantallas pequeñas */}
              <button 
                className="sm:hidden text-2xl text-primary" 
                onClick={toggleMobileMenu}
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <HiX /> : <HiMenu />}
              </button>
            </div>
          </header>

          {/* Tabs envueltos en el contexto */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
            {/* Menú de navegación superpuesto para pantallas pequeñas */}
            {isMobileMenuOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center space-y-4 z-50 text-white h-[50vh]">
                <div className="flex flex-col items-center w-full max-w-md">
                  {["about", "projects", "experience", "skills", "contact"].map(tab => (
                    <button
                      key={tab}
                      onClick={() => handleTabChange(tab)}
                      className={`text-2xl w-full text-left px-4 py-2 ${activeTab === tab ? 'bg-pink-800' : ''}`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Tabs para pantallas grandes */}
            <div className="hidden sm:block">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="contact">Contact</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="about">
              <AboutMe />
            </TabsContent>
            <TabsContent value="projects" className="overflow-hidden">
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
