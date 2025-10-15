'use client'

import React, { useState, useEffect } from 'react'

interface GitHubStats {
  streak: number
  totalContributions: number
  currentStreak: number
  longestStreak: number
}

export const GitHubStreak = () => {
  const [stats, setStats] = useState<GitHubStats>({
    streak: 15,
    totalContributions: 1250,
    currentStreak: 15,
    longestStreak: 45
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simular carga de datos de GitHub
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg p-6 shadow-lg border">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="h-8 bg-gray-200 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-100 hover:border-gray-200 transition-colors duration-300">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">GitHub Activity</h3>
        <div className="flex items-center text-green-500">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-sm font-medium">Active</span>
        </div>
      </div>

      <div className="text-center mb-6">
        <div className="text-4xl font-bold text-gray-800 mb-2">
          {stats.streak}
        </div>
        <div className="text-sm text-gray-600 mb-1">day streak</div>
        <div className="text-xs text-gray-500">Current streak</div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600">
            {stats.totalContributions}
          </div>
          <div className="text-xs text-gray-600">Total Contributions</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-orange-600">
            {stats.longestStreak}
          </div>
          <div className="text-xs text-gray-600">Longest Streak</div>
        </div>
      </div>

      {/* GitHub Contribution Graph Placeholder */}
      <div className="bg-gray-50 rounded-lg p-4 mb-4">
        <div className="text-xs text-gray-600 mb-2">Recent Activity</div>
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: 28 }, (_, i) => {
            const intensity = Math.random()
            return (
              <div
                key={i}
                className={`w-3 h-3 rounded-sm ${
                  intensity > 0.7 ? 'bg-green-600' :
                  intensity > 0.4 ? 'bg-green-400' :
                  intensity > 0.2 ? 'bg-green-200' : 'bg-gray-200'
                }`}
              />
            )
          })}
        </div>
      </div>

      <div className="text-center">
        <a
          href="https://github.com/katia-tsx"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200"
        >
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
          </svg>
          View GitHub Profile
        </a>
      </div>
    </div>
  )
}
