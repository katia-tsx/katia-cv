'use client'

import React, { useState, DragEvent } from 'react'

interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  priority: 'low' | 'medium' | 'high'
  date: string
  status: 'todo' | 'in-progress' | 'review' | 'completed'
}

const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'Building a modern e-commerce platform with Next.js and Stripe integration.',
    tags: ['Next.js', 'Stripe', 'E-commerce'],
    priority: 'medium',
    date: '6/29/2024',
    status: 'in-progress'
  },
  {
    id: '2',
    title: 'Chatbot',
    description: 'Implemented using the GPT-3.5 Turbo API, Next.js, and Tailwind CSS.',
    tags: ['Next.js', 'GPT 3.5', 'TailwindCSS'],
    priority: 'high',
    date: '4/29/2024',
    status: 'review'
  },
  {
    id: '3',
    title: 'Blog',
    description: 'Developed with Astro, employing island architecture for optimal performance.',
    tags: ['Astro', 'Island Architecture', 'Web Performance'],
    priority: 'low',
    date: '3/14/2024',
    status: 'completed'
  },
  {
    id: '4',
    title: 'Pomaray',
    description: 'Educational app developed using Next.js, Figma, Scrum, TypeScript, and NextUI.',
    tags: ['Next.js', 'TypeScript', 'Figma'],
    priority: 'high',
    date: '12/14/2023',
    status: 'completed'
  },
  {
    id: '5',
    title: 'Gedeon Studios',
    description: 'Website built with HTML, CSS, and JavaScript, utilizing Locomotive Scroll.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    priority: 'medium',
    date: '10/19/2023',
    status: 'completed'
  }
]

const statusConfig = {
  todo: { name: 'To Do', color: 'bg-gray-100', textColor: 'text-gray-800' },
  'in-progress': { name: 'In Progress', color: 'bg-blue-100', textColor: 'text-blue-800' },
  review: { name: 'Review', color: 'bg-yellow-100', textColor: 'text-yellow-800' },
  completed: { name: 'Completed', color: 'bg-green-100', textColor: 'text-green-800' }
}

const priorityConfig = {
  low: { color: 'bg-green-500', label: 'Low' },
  medium: { color: 'bg-yellow-500', label: 'Medium' },
  high: { color: 'bg-red-500', label: 'High' }
}

export const ProjectBoard = () => {
  const [viewMode, setViewMode] = useState<'board' | 'timeline' | 'gallery'>('board')
  const [projectData, setProjectData] = useState<Project[]>(projects)
  const [draggedProject, setDraggedProject] = useState<string | null>(null)

  const getProjectsByStatus = (status: Project['status']) => {
    return projectData.filter(project => project.status === status)
  }

  const handleDragStart = (e: DragEvent<HTMLDivElement>, projectId: string) => {
    setDraggedProject(projectId)
    e.dataTransfer.effectAllowed = 'move'
  }

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  }

  const handleDrop = (e: DragEvent<HTMLDivElement>, newStatus: Project['status']) => {
    e.preventDefault()
    
    if (!draggedProject) return

    setProjectData(prevData => 
      prevData.map(project => 
        project.id === draggedProject 
          ? { ...project, status: newStatus }
          : project
      )
    )
    
    setDraggedProject(null)
  }

  const renderProjectCard = (project: Project) => (
    <div
      key={project.id}
      draggable
      onDragStart={(e) => handleDragStart(e, project.id)}
      className={`bg-white rounded-lg p-4 border border-gray-100 hover:border-gray-200 transition-all duration-200 mb-4 cursor-move ${
        draggedProject === project.id ? 'opacity-50 scale-95' : 'hover:scale-105'
      }`}
    >
      <div className="flex items-start justify-between mb-3">
        <h4 className="font-semibold text-gray-800 text-sm">{project.title}</h4>
        <div className={`w-3 h-3 rounded-full ${priorityConfig[project.priority].color}`} 
             title={`${priorityConfig[project.priority].label} Priority`} />
      </div>
      
      <p className="text-xs text-gray-600 mb-3 leading-relaxed">{project.description}</p>
      
      <div className="flex flex-wrap gap-1 mb-3">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex items-center justify-between text-xs text-gray-500">
        <span>{project.date}</span>
        <span className="px-2 py-1 bg-gray-100 rounded-full">
          {priorityConfig[project.priority].label}
        </span>
      </div>
    </div>
  )

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-800">Project Management</h3>
          <p className="text-sm text-gray-600 mt-1">
            Track the progress of my projects in this Jira-inspired kanban board
          </p>
        </div>
        <div className="flex bg-gray-100 rounded-lg p-1">
          {(['board', 'timeline', 'gallery'] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setViewMode(mode)}
              className={`px-3 py-1 text-sm font-medium rounded-md transition-colors duration-200 capitalize ${
                viewMode === mode
                  ? 'bg-white text-gray-800 shadow-sm'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              {mode === 'board' ? 'Board' : mode === 'timeline' ? 'Timeline' : 'Gallery'}
            </button>
          ))}
        </div>
      </div>

      {viewMode === 'board' && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {Object.entries(statusConfig).map(([status, config]) => (
            <div 
              key={status} 
              className="min-h-[400px]"
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, status as Project['status'])}
            >
              <div className={`${config.color} ${config.textColor} px-3 py-2 rounded-lg mb-4 text-sm font-medium flex items-center justify-between`}>
                <span>{config.name}</span>
                <span className="bg-white bg-opacity-50 px-2 py-1 rounded-full text-xs">
                  {getProjectsByStatus(status as Project['status']).length}
                </span>
              </div>
              <div className="space-y-3">
                {getProjectsByStatus(status as Project['status']).map(renderProjectCard)}
                {status === 'todo' && (
                  <button className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-gray-400 hover:text-gray-600 transition-colors duration-200 text-sm">
                    + New Project
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {viewMode === 'timeline' && (
        <div className="space-y-4">
          {projectData
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .map((project) => (
              <div key={project.id} className="flex items-start space-x-4 p-4 border-l-4 border-blue-500 bg-gray-50 rounded-r-lg">
                <div className="flex-shrink-0">
                  <div className={`w-3 h-3 rounded-full ${priorityConfig[project.priority].color}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-800">{project.title}</h4>
                    <span className="text-sm text-gray-500">{project.date}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{project.description}</p>
                  <div className="flex items-center space-x-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${statusConfig[project.status].color} ${statusConfig[project.status].textColor}`}>
                      {statusConfig[project.status].name}
                    </span>
                    <div className="flex space-x-1">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-200 text-gray-600 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}

      {viewMode === 'gallery' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectData.map((project) => (
            <div key={project.id} className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-200">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-800">{project.title}</h4>
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${priorityConfig[project.priority].color}`} />
                  <span className={`px-2 py-1 rounded-full text-xs ${statusConfig[project.status].color} ${statusConfig[project.status].textColor}`}>
                    {statusConfig[project.status].name}
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span key={index} className="px-2 py-1 bg-white text-gray-600 text-xs rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="text-xs text-gray-500">{project.date}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
