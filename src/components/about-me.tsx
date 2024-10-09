"use client";

import React, { useState, FC } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AboutMe: FC = () => {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const handleReveal = (): void => {
    setShowDetails(true);
  };

  return (
    <Card className="bg-card/50 backdrop-blur">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Avatar className="w-32 h-32">
            <AvatarImage src="https://avatars.githubusercontent.com/u/123526476?v=4" alt="Katia" />
            <AvatarFallback>KP</AvatarFallback>
          </Avatar>
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">Katia Nathaly Pujols Almanzar</h2>
            <p className="text-muted-foreground mb-4">Frontend Developer & UI/UX Enthusiast</p>
            {!showDetails && (
              <Button onClick={handleReveal}>Reveal My Story</Button>
            )}
          </div>
        </div>
        {showDetails && (
          <div className="mt-6 space-y-4 animate-fadeIn">
            <p>
              Hello! Im Katia, a passionate frontend developer with a keen eye for design and a love for creating
              intuitive user experiences. My journey in tech is driven by a desire to blend creativity with
              functionality, always striving to build applications that are not just visually appealing but also
              highly efficient.
            </p>
            <p>
              With expertise in Next.js, React, and TypeScript, I specialize in crafting responsive and dynamic web
              applications. My background in QA has instilled in me a deep appreciation for quality and attention to
              detail, which I bring to every project I undertake.
            </p>
            <p>
              When Im not coding, you can find me exploring new design trends, experimenting with UI/UX concepts in
              Figma, or contributing to open-source projects. I believe in continuous learning and am always excited
              to take on new challenges in the ever-evolving world of web development.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AboutMe;
