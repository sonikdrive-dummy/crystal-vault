# Cloud Storage Platform - SonikDrive

## Overview

This is a Next.js-based cloud storage platform called "SonikDrive" that provides secure file storage and collaboration features. The application offers both personal and business plans with a modern, glassmorphic UI design. It features a comprehensive marketing website with pricing tiers, user authentication flows, blog functionality, and responsive design optimized for both desktop and mobile experiences.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application uses Next.js 15 with the App Router pattern for modern React development. The UI is built with shadcn/ui components providing a consistent design system with Radix UI primitives and Tailwind CSS for styling. The design follows a glassmorphic aesthetic with custom CSS variables for theming, including glass effects, gradients, and hover animations powered by Framer Motion.

### Component Structure
- **Page Components**: Located in `src/pages/` directory, containing major application views (Index, About, Pricing, Login, Signup, etc.)
- **Reusable Components**: Modular components in `src/components/` for features like FAQ, FeatureCard, Navigation, Footer, HeroSection
- **UI Components**: Complete shadcn/ui component library in `src/components/ui/` for consistent interface elements
- **Layout System**: App Router layout with client-side providers for React Query and tooltips

### State Management
Uses React Query (@tanstack/react-query) for server state management and caching. Local component state is managed with React hooks (useState, useEffect) for UI interactions and form handling.

### Styling Architecture
Tailwind CSS with custom design tokens defined in CSS variables for consistent theming. The design system includes:
- Glass morphism effects with backdrop blur and transparency
- Custom gradients and color schemes
- Responsive breakpoints and container systems
- Animation utilities with Framer Motion integration

### Routing & Navigation
Next.js App Router with file-based routing structure. Dynamic routing implemented for blog posts with slug-based URLs (`/blogs/[slug]`). Navigation includes both static pages and hash-based anchor links for single-page sections.

### Type Safety
Full TypeScript implementation with strict configuration disabled for development flexibility. Custom type definitions for blog posts, FAQ items, and component props ensure type safety across the application.

### Performance Optimizations
- Next.js automatic code splitting and optimization
- Framer Motion animations with viewport detection for performance
- Image optimization through Next.js built-in features
- Component lazy loading with React.forwardRef patterns

## External Dependencies

### Core Framework
- **Next.js**: React framework with App Router for SSR/SSG capabilities
- **React**: Component library with hooks for state management
- **TypeScript**: Type safety and developer experience

### UI & Styling
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **shadcn/ui**: Component library built on Radix UI primitives
- **Radix UI**: Headless UI components for accessibility and behavior
- **Framer Motion**: Animation library for smooth transitions and interactions

### Form Handling
- **React Hook Form**: Form state management and validation
- **@hookform/resolvers**: Validation schema resolvers

### Development Tools
- **ESLint**: Code linting with TypeScript and React rules
- **PostCSS**: CSS processing with Tailwind CSS integration

### Utility Libraries
- **clsx & class-variance-authority**: Conditional class name utilities
- **date-fns**: Date manipulation and formatting
- **lucide-react**: Icon library with consistent design

### Data Management
- **@tanstack/react-query**: Server state management and caching

The application is structured as a static marketing site with potential for backend integration through the established data patterns and state management setup.