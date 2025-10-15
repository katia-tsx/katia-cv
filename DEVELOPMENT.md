# Portfolio Development Documentation

## 📋 Project Overview

Este portfolio recrea fielmente el diseño original de Shourya Khanna, adaptado para Katia Nathaly Pujols Almanzar. El proyecto utiliza Next.js 14 con App Router, TypeScript, y Tailwind CSS para crear una experiencia web moderna y responsive.

## 🏗️ Architecture

### Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + Custom Components
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Theme**: next-themes

### Project Structure
```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── portfolio/         # Portfolio-specific components
│   │   ├── header.tsx     # Hero section with stylized title
│   │   ├── about.tsx      # About me section with ID card
│   │   ├── experience.tsx # Professional & academic experience
│   │   ├── contact-software.tsx # Contact & software icons
│   │   └── projects.tsx   # Project showcase with colored cards
│   ├── ui/                # Reusable UI components
│   └── skills.tsx         # Skills component (legacy)
└── lib/
    └── utils.ts           # Utility functions
```

## 🎨 Design System

### Color Palette
```css
/* Portfolio Specific Colors */
portfolio: {
  blue: '#E3F2FD',      /* Project 1 & 5 backgrounds */
  beige: '#F5F5DC',     /* Project 2 background */
  green: '#E8F5E8',     /* Project 3 background */
  red: '#FFEBEE',       /* Project 4 background */
  lightBlue: '#E1F5FE'  /* Alternative blue */
}
```

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Handwritten**: Brush Script MT (for "free font" text)
- **Title Styling**: Custom rotated letters with CSS transforms

### Layout Principles
- **Desktop First**: Designed for desktop, responsive down to mobile
- **Grid System**: CSS Grid for complex layouts
- **Spacing**: Consistent spacing scale using Tailwind utilities
- **Breakpoints**: 
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

## 🧩 Component Architecture

### PortfolioHeader
- **Purpose**: Hero section with stylized "Portfolio" title
- **Features**: 
  - Rotated letter animations
  - Responsive typography
  - Illustration placement (uses katia.png)
  - Year indicator ('25)

### AboutSection
- **Purpose**: Personal introduction with ID card photo
- **Features**:
  - ID card styling with glassmorphism
  - Responsive image layout (uses katia.png)
  - Professional description

### GitHubStreak
- **Purpose**: Display GitHub activity and streak information
- **Features**:
  - Current streak display (15 days)
  - Total contributions counter
  - Recent activity graph visualization
  - Direct link to GitHub profile
  - Loading states and animations

### TechStack
- **Purpose**: Comprehensive technology showcase
- **Features**:
  - Categorized technology display (Frontend, Backend, Database, DevOps, Tools)
  - React Icons integration for technology logos
  - Skill level indicators with progress bars
  - Interactive category filtering
  - Summary statistics
  - Responsive grid layout

### ExperienceSection
- **Purpose**: Professional and academic experience
- **Features**:
  - Two-column layout
  - Timeline-style presentation
  - Clean typography hierarchy

### ContactSoftwareSection
- **Purpose**: Contact information and software skills
- **Features**:
  - Branded icon system
  - Hover interactions
  - Adobe software showcase

### ProjectsSection
- **Purpose**: Project portfolio showcase
- **Features**:
  - Colored project cards
  - Device mockups
  - Background text overlay
  - Responsive grid layout

## 📱 Responsive Design

### Breakpoint Strategy
```css
/* Mobile First Approach */
@media (max-width: 480px) {
  /* Single column layouts */
  /* Simplified typography */
  /* Hidden elements */
}

@media (max-width: 768px) {
  /* Two column layouts */
  /* Medium typography */
  /* Stacked components */
}

@media (max-width: 1024px) {
  /* Three column layouts */
  /* Full typography */
  /* Side-by-side components */
}
```

### Responsive Features
- **Typography**: Fluid typography using `clamp()`
- **Grid**: Adaptive grid columns based on screen size
- **Images**: Responsive image sizing with Next.js Image
- **Spacing**: Consistent spacing across all breakpoints

## 🎯 Key Features

### 1. Stylized Portfolio Title
- Individual letter rotation using CSS transforms
- Responsive font sizing
- Custom typography styling

### 2. ID Card Design
- Glassmorphism effect
- Realistic card styling
- Lanyard representation

### 3. Project Showcase
- Colored background cards
- Device mockup integration
- Background text overlay
- Hover animations

### 4. Software Icons
- Brand-accurate colors
- Consistent sizing
- Hover interactions

## 🔧 Development Guidelines

### Code Standards
- **TypeScript**: Strict typing for all components
- **Components**: Functional components with hooks
- **Styling**: Tailwind CSS with custom CSS for complex animations
- **Accessibility**: Semantic HTML and ARIA labels

### Performance Optimizations
- **Images**: Next.js Image optimization
- **Fonts**: Google Fonts optimization
- **Code Splitting**: Automatic with Next.js
- **CSS**: Purged unused styles

### Customization Points
1. **Colors**: Update `tailwind.config.ts` for color changes
2. **Typography**: Modify `globals.css` for font changes
3. **Content**: Update component data arrays
4. **Images**: Replace placeholder images in `/public`

## 📁 Asset Management

### Required Images
```
public/
├── illustration.png          # Hero illustration
├── id-card-photo.png         # About section photo
├── project1-mockup1.png      # Project 1 mockups
├── project1-mockup2.png
├── project2-tablet.png       # Project 2 mockups
├── project2-phone.png
├── project3-phone1.png       # Project 3 mockups
├── project3-phone2.png
├── project4-laptop.png       # Project 4 mockup
├── project5-phone1.png       # Project 5 mockups
└── project5-phone2.png
```

### Image Specifications
- **Hero Illustration**: 320x400px (SVG recommended)
- **ID Card Photo**: 192x128px
- **Project Mockups**: Various sizes, maintain aspect ratios
- **Format**: PNG or SVG for best quality

## 🚀 Deployment

### Build Process
```bash
npm run build    # Production build
npm run start    # Production server
npm run dev      # Development server
```

### Environment Requirements
- Node.js 18+
- npm/pnpm/yarn
- Modern browser support

## 🔄 Future Enhancements

### Planned Features
1. **Animations**: Enhanced scroll animations
2. **Dark Mode**: Theme switching capability
3. **CMS Integration**: Content management system
4. **Analytics**: User interaction tracking
5. **SEO**: Enhanced meta tags and structured data

### Customization Guide
1. **Brand Colors**: Update Tailwind config
2. **Content**: Modify component data
3. **Layout**: Adjust grid systems
4. **Typography**: Customize font families
5. **Images**: Replace with actual assets

## 📞 Support

For development questions or customization requests, refer to:
- Next.js Documentation
- Tailwind CSS Documentation
- Radix UI Documentation
- TypeScript Handbook

---

**Last Updated**: January 2025
**Version**: 1.0.0
**Maintainer**: Development Team
