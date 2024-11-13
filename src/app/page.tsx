'use client'

import { useState, useEffect } from 'react'
import { Home, Search, Library, PlusSquare, Heart, ArrowRight, Play, SkipBack, SkipForward, Repeat, Shuffle, Volume2, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion, AnimatePresence } from 'framer-motion'

export default function CoquettePortfolioPage() {
  const [activeSection, setActiveSection] = useState('about')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const navItems = [
    { id: 'about', label: 'About', icon: Home },
    { id: 'projects', label: 'Projects', icon: Search },
    { id: 'experience', label: 'Experience', icon: Library },
    { id: 'skills', label: 'Skills', icon: PlusSquare },
    { id: 'contact', label: 'Contact', icon: Heart },
  ]

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  return (
    <div className="flex flex-col h-screen bg-pink-50 text-pink-900 font-sans overflow-hidden">
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <motion.nav 
          className={`fixed md:relative z-30 w-64 bg-white bg-opacity-20 backdrop-blur-lg p-6 flex flex-col h-full transition-all duration-100 ease-in-out ${
            isSidebarOpen || !isMobile ? 'left-0' : '-left-64'
          } md:left-0`}
          initial={false}
          animate={{ x: isSidebarOpen || !isMobile ? 0 : -250 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <div className="mb-6">
            <svg viewBox="0 0 1134 340" className="h-10 text-pink-600"><path fill="currentColor" d="M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z"></path></svg>
          </div>
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id)
                if (isMobile) setIsSidebarOpen(false)
              }}
              className={`flex items-center space-x-4 py-2 px-4 rounded-md transition-colors duration-100 ${
                activeSection === item.id ? 'bg-pink-200 text-pink-800' : 'text-gray-600 hover:text-pink-800 hover:bg-pink-100'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <item.icon className="h-6 w-6" />
              <span className="font-medium">{item.label}</span>
            </motion.button>
          ))}
        </motion.nav>

        {/* Main Content */}
        <main className="flex-1 overflow-auto bg-white p-4 md:p-8">
          <div className="md:hidden mb-4">
            <Button onClick={toggleSidebar} variant="outline" size="icon">
              <Menu className="h-4 w-4 flex items-center justify-center" />
            </Button>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-pink-800">¡Hola! 💖</h1>
            <div className="flex flex-wrap gap-2 mb-8">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="secondary"
                  className="bg-pink-100 hover:bg-pink-200 text-pink-800 transition-all duration-300"
                  onClick={() => setActiveSection(item.id)}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="min-h-[calc(100vh-16rem)]"
            >
              {activeSection === 'about' && <AboutSection />}
              {activeSection === 'projects' && <ProjectsSection />}
              {activeSection === 'experience' && <ExperienceSection />}
              {activeSection === 'skills' && <SkillsSection />}
              {activeSection === 'contact' && <ContactSection />}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* Player */}
      <div className="h-16 md:h-24 bg-pink-100 border-t border-pink-200 p-2 md:p-4 flex items-center">
        <div className="flex items-center flex-1">
          <img src="https://cdn.discordapp.com/attachments/1041499739436359771/1306045181530869891/image.png?ex=67353cdc&is=6733eb5c&hm=d34096bc6d211e3bc8f12f28f031d86e4e1445dfc867023e147d71b387fce756&" alt="Album cover" className="h-10 w-10 md:h-14 md:w-14 rounded-full mr-2 md:mr-4 border-2 border-pink-300" />
          <div>
            <h4 className="text-xs md:text-sm font-medium text-pink-800">Current Project</h4>
            <p className="text-xs text-pink-600">Portfolio Website</p>
          </div>
        </div>
        <div className="flex flex-col items-center flex-1">
          <div className="flex items-center space-x-2 md:space-x-4 mb-2">
            <Shuffle className="h-3 w-3 md:h-5 md:w-5 text-pink-400" />
            <SkipBack className="h-3 w-3 md:h-5 md:w-5 text-pink-400" />
            <Button size="sm" className="rounded-full bg-pink-500 text-white hover:bg-pink-600 transition-all duration-300">
              <Play className="h-3 w-3 md:h-4 md:w-4" />
            </Button>
            <SkipForward className="h-3 w-3 md:h-5 md:w-5 text-pink-400" />
            <Repeat className="h-3 w-3 md:h-5 md:w-5 text-pink-400" />
          </div>
          <Slider defaultValue={[33]} max={100} step={1} className="w-[100px] md:w-[200px] lg:w-[300px]" />
        </div>
        <div className="hidden md:flex items-center space-x-2 flex-1 justify-end">
          <Volume2 className="h-4 w-4 md:h-5 md:w-5 text-pink-400" />
          <Slider defaultValue={[66]} max={100} step={1} className="w-[80px] md:w-[100px]" />
        </div>
      </div>
    </div>
  )
}

function AboutSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="col-span-1 md:col-span-2 bg-pink-50 p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold mb-4 text-pink-800">About Me</h2>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mb-4">
          <Avatar className="h-24 w-24 border-4 border-pink-200">
            <AvatarImage src="https://avatars.githubusercontent.com/u/123526476?v=4" alt="Profile picture" />
            <AvatarFallback>KP</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-xl font-semibold text-pink-700">Katia Pujols</h3>
            <p className="text-pink-600">Frontend Developer & UI/UX Enthusiast</p>
          </div>
        </div>
        <p className="text-pink-800">
          Hello! I'm Katia, a passionate frontend developer with a keen eye for design and a love for creating intuitive user experiences. My journey in tech is driven by a desire to blend creativity with functionality, always striving to build applications that are not just visually appealing but also highly efficient.
        </p>
      </div>
      <div className="bg-pink-50 p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-bold mb-4 text-pink-800">Top Skills</h3>
        <ul className="space-y-2">
          <li className="flex items-center"><div className="w-2 h-2 bg-pink-500 rounded-full mr-2"></div> React</li>
          <li className="flex items-center"><div className="w-2 h-2 bg-pink-500 rounded-full mr-2"></div> Node.js</li>
          <li className="flex items-center"><div className="w-2 h-2 bg-pink-500 rounded-full mr-2"></div> TypeScript</li>
        </ul>
      </div>
      <div className="bg-pink-50 p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-bold mb-4 text-pink-800">Quick Stats</h3>
        <ul className="space-y-2">
          <li>2+ Years Experience</li>
          <li>10+ Projects Completed</li>
          <li>4+ Happy Clients</li>
        </ul>
      </div>
    </div>
  )
}

function ProjectsSection() {
  const projects = [
    { title: "Pomaray", desc: "Educational app developed using Next.js, Figma, Scrum, TypeScript, and NextUI.", tech: "Next.js, TypeScript, Figma, Scrum, Supabase", image: "https://raw.githubusercontent.com/pomaray/pomaray-app/main/public/images/docs/pomaray-app.png" },
    { title: "Gedeon Studios", desc: "Website built with HTML, CSS, and JavaScript, utilizing Locomotive Scroll.", tech: "HTML, CSS, JavaScript, Locomotive Scroll", image: "https://katia-tsx.vercel.app/gedeon.png" },
    { title: "Chatbot", desc: "Implemented using the GPT-3.5 Turbo API, Next.js, and Tailwind CSS.", tech: "Next.js, GPT 3.5, TailwindCSS", image: "https://media.discordapp.net/attachments/1041499739436359771/1306021256164020274/image.png?ex=67352694&is=6733d514&hm=053baccb944a18880fef31e5da23ddced4115935f0b47555530db7aaea711780&=&format=webp&quality=lossless&width=1193&height=671" },
    { title: "Blog", desc: "Developed with Astro, employing island architecture for optimal performance.", tech: "Astro, Island Architecture, Web Performance", image: "https://raw.githubusercontent.com/katia-tsx/Astro-Blog/master/public/inicio.png" },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4 text-pink-800">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="bg-pink-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-pink-700">{project.title}</h3>
            <p className="text-pink-800 mb-4">{project.desc}</p>
            <p className="text-sm text-pink-600">{project.tech}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function ExperienceSection() {
  const experiences = [
    { title: "Front End Developer", company: "G3deon, Inc", period: "2023" },
    { title: "Front End Developer", company: "TecnoUp", period: "2024" },
    { title: "Front End Developer", company: "Pomaray", period: "2023 - Present" },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4 text-pink-800">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            className="bg-pink-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold text-pink-700">{exp.title}</h3>
            <p className="text-pink-600">{exp.company}</p>
            <p className="text-sm text-pink-500">{exp.period}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function SkillsSection() {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "Typescript", "CSS", "Tailwind CSS"] },
    { category: "Backend", items: ["Supabase"] },
    { category: "Databases", items: ["PostgreSQL"] },
    { category: "DevOps", items: ["CI/CD"] },
    { category: "Tools", items: ["Git", "Jira", "vscode", "Jest"] },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4 text-pink-800">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skillSet, index) => (
          <motion.div 
            key={index} 
            className="bg-pink-50 p-6 rounded-lg shadow-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-pink-700">{skillSet.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skillSet.items.map((skill, skillIndex) => (
                <span key={skillIndex} className="px-3 py-1 bg-pink-200 text-pink-800 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function ContactSection() {
  return (
    <div className="space-y-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-pink-800">Contact</h2>
      <motion.div 
        className="bg-pink-50 p-6 rounded-lg shadow-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1 text-pink-700">Name</label>
            <input id="name" className="w-full px-3 py-2 bg-white border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="Your Name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1 text-pink-700">Email</label>
            <input id="email" type="email" className="w-full px-3 py-2 bg-white border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="your@email.com" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1 text-pink-700">Message</label>
            <textarea id="message" rows={4} className="w-full px-3 py-2 bg-white border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="Your message here..."></textarea>
          </div>
          <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white transition-all duration-300">Send Message</Button>
        </form>
      </motion.div>
      <motion.div 
        className="bg-pink-50 p-6 rounded-lg shadow-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-xl font-semibold mb-4 text-pink-700">Connect</h3>
        <div className="flex space-x-4">
          <a href="#" className="text-pink-600 hover:text-pink-800 transition-colors duration-300">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          <a href="#" className="text-pink-600 hover:text-pink-800 transition-colors duration-300">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
          </a>
          <a href="#" className="text-pink-600 hover:text-pink-800 transition-colors duration-300">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
        </div>
      </motion.div>
    </div>
  )
}