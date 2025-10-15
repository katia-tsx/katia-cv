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

interface TechItem {
  name: string
  icon: React.ReactNode
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools'
  level: number
  color: string
}

const techStack: TechItem[] = [
  // Frontend
  {
    name: 'React',
    icon: <SiReact className="w-6 h-6" />,
    category: 'frontend',
    level: 85,
    color: 'text-blue-500'
  },
  {
    name: 'Next.js',
    icon: <SiNextdotjs className="w-6 h-6" />,
    category: 'frontend',
    level: 80,
    color: 'text-black'
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript className="w-6 h-6" />,
    category: 'frontend',
    level: 75,
    color: 'text-blue-600'
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss className="w-6 h-6" />,
    category: 'frontend',
    level: 85,
    color: 'text-cyan-500'
  },
  {
    name: 'HTML5',
    icon: <FaHtml5 className="w-6 h-6" />,
    category: 'frontend',
    level: 90,
    color: 'text-orange-500'
  },
  {
    name: 'CSS3',
    icon: <FaCss3Alt className="w-6 h-6" />,
    category: 'frontend',
    level: 85,
    color: 'text-blue-500'
  },
  {
    name: 'JavaScript',
    icon: <FaJs className="w-6 h-6" />,
    category: 'frontend',
    level: 80,
    color: 'text-yellow-500'
  },
  
  // Backend
  {
    name: 'Node.js',
    icon: <SiNodedotjs className="w-6 h-6" />,
    category: 'backend',
    level: 70,
    color: 'text-green-600'
  },
  {
    name: 'Python',
    icon: <FaPython className="w-6 h-6" />,
    category: 'backend',
    level: 65,
    color: 'text-yellow-600'
  },

  // Database
  {
    name: 'MongoDB',
    icon: <SiMongodb className="w-6 h-6" />,
    category: 'database',
    level: 70,
    color: 'text-green-500'
  },
  {
    name: 'PostgreSQL',
    icon: <SiPostgresql className="w-6 h-6" />,
    category: 'database',
    level: 65,
    color: 'text-blue-700'
  },

  // DevOps
  {
    name: 'Docker',
    icon: <SiDocker className="w-6 h-6" />,
    category: 'devops',
    level: 60,
    color: 'text-blue-500'
  },
  {
    name: 'Vercel',
    icon: <SiVercel className="w-6 h-6" />,
    category: 'devops',
    level: 75,
    color: 'text-black'
  },

  // Tools
  {
    name: 'Figma',
    icon: <SiFigma className="w-6 h-6" />,
    category: 'tools',
    level: 75,
    color: 'text-purple-500'
  },
  {
    name: 'Git',
    icon: <FaGitAlt className="w-6 h-6" />,
    category: 'tools',
    level: 80,
    color: 'text-orange-600'
  },
  {
    name: 'GitHub',
    icon: <SiGithub className="w-6 h-6" />,
    category: 'tools',
    level: 85,
    color: 'text-gray-800'
  },
  {
    name: 'SAP Business One',
    icon: <SiSap className="w-6 h-6" />,
    category: 'tools',
    level: 65,
    color: 'text-blue-600'
  }
]

const categories = {
  frontend: { name: 'Frontend', color: 'bg-blue-100 text-blue-800' },
  backend: { name: 'Backend', color: 'bg-green-100 text-green-800' },
  database: { name: 'Database', color: 'bg-purple-100 text-purple-800' },
  devops: { name: 'DevOps', color: 'bg-orange-100 text-orange-800' },
  tools: { name: 'Tools', color: 'bg-gray-100 text-gray-800' }
}

export const TechStack = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<keyof typeof categories>('frontend')

  const filteredTech = techStack.filter(tech => tech.category === selectedCategory)

  const getLevelText = (level: number) => {
    if (level >= 80) return 'Expert'
    if (level >= 60) return 'Intermediate'
    return 'Beginner'
  }

  const getLevelColor = (level: number) => {
    if (level >= 80) return 'text-green-600 bg-green-100'
    if (level >= 60) return 'text-yellow-600 bg-yellow-100'
    return 'text-red-600 bg-red-100'
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg border">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-800">Tech Stack</h3>
        <div className="flex items-center text-sm text-gray-600">
          <span className="mr-2">Explore my technical skills and proficiencies</span>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {Object.entries(categories).map(([key, category]) => (
          <button
            key={key}
            onClick={() => setSelectedCategory(key as keyof typeof categories)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              selectedCategory === key
                ? category.color
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Tech Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTech.map((tech, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200"
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`${tech.color}`}>
                {tech.icon}
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(tech.level)}`}>
                {getLevelText(tech.level)}
              </span>
            </div>
            
            <div className="mb-2">
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="font-medium text-gray-800">{tech.name}</span>
                <span className="text-gray-600">{tech.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${
                    tech.level >= 80 ? 'bg-green-500' :
                    tech.level >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${tech.level}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600">
              {techStack.filter(t => t.level >= 80).length}
            </div>
            <div className="text-xs text-gray-600">Expert Level</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-yellow-600">
              {techStack.filter(t => t.level >= 60 && t.level < 80).length}
            </div>
            <div className="text-xs text-gray-600">Intermediate</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">
              {techStack.length}
            </div>
            <div className="text-xs text-gray-600">Total Technologies</div>
          </div>
        </div>
      </div>
    </div>
  )
}

