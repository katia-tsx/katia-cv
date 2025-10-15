'use client'

import React from 'react'

const contactItems = [
  {
    icon: 'in',
    iconClass: 'linkedin', 
    text: 'https://www.linkedin.com/in/katia-pujols-983458311/',
    url: 'https://www.linkedin.com/in/katia-pujols-983458311/'
  },
  {
    icon: 'M',
    iconClass: 'email',
    text: 'nkatia.g3@gmail.com',
    url: 'mailto:nkatia.g3@gmail.com'
  },
  {
    icon: '📱',
    iconClass: 'phone',
    text: '+1 (809) 886-8788',
    url: 'tel:+18098868788'
  },
  {
    icon: '📍',
    iconClass: 'location',
    text: 'Santo Domingo, Dominican Republic',
    url: '#'
  }
]

const softwareItems = [
  { icon: 'Ps', iconClass: 'photoshop', name: 'Adobe Photoshop' },
  { icon: 'Xd', iconClass: 'xd', name: 'Adobe XD' },
  { icon: 'Ai', iconClass: 'illustrator', name: 'Adobe Illustrator' },
  { icon: 'Id', iconClass: 'indesign', name: 'Adobe InDesign' }
]

export const ContactSoftwareSection = () => {
  return (
    <div className="space-y-8">
      {/* Contact Section */}
      <div>
        <h3 className="text-xl font-bold text-black mb-6">CONTACT</h3>
        <div className="space-y-3">
          {contactItems.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div className={`software-icon ${item.iconClass}`}>
                {item.icon}
              </div>
              <span className="text-sm text-gray-700">{item.text}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Software Section */}
      <div>
        <h3 className="text-xl font-bold text-black mb-6">SOFTWARES</h3>
        <div className="flex flex-wrap gap-3">
          {softwareItems.map((software, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className={`software-icon ${software.iconClass}`}>
                {software.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
