"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Definimos el tipo del evento como React.FormEvent<HTMLFormElement>
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Aquí normalmente enviarías los datos del formulario a un servidor
    console.log({ name, email, message });
    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Card className="bg-card/50 backdrop-blur">
      <CardHeader>
        <CardTitle>Contact Me</CardTitle>
        <CardDescription>Send me a message and lets connect!</CardDescription>
      </CardHeader>
      <CardContent>
        {submitted ? (
          <div className="text-center p-4 bg-green-100 text-green-700 rounded-md">
            Thank you for your message. Ill get back to you soon!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <Button type="submit">Send Message</Button>
          </form>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <a href="https://github.com/katia-tsx/" target="_blank" rel="noopener noreferrer">
          <Button variant="outline">GitHub</Button>
        </a>
        <a href="https://www.linkedin.com/in/katia-pujols-983458311/" target="_blank" rel="noopener noreferrer">
          <Button variant="outline">LinkedIn</Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default Contact;
