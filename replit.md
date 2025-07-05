# replit.md

## Overview

This is a full-stack web application built for Joe Mulligan's campaign for Middletown City Council. The application is a modern political campaign website featuring sections for candidate biography, experience, priorities, leadership, and contact forms. It uses a monorepo structure with TypeScript, React frontend, Express backend, and PostgreSQL database.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with hot module replacement
- **Styling**: Tailwind CSS with custom campaign color scheme
- **UI Components**: Radix UI primitives with shadcn/ui components
- **State Management**: React Query (TanStack Query) for server state
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ESM modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-based session store
- **API Design**: RESTful endpoints with JSON responses

### Build System
- **Development**: Vite dev server with Express API proxy
- **Production**: Bundled frontend with esbuild-compiled backend
- **TypeScript**: Shared type definitions between frontend and backend
- **Asset Management**: Vite handles static assets with path aliases

## Key Components

### Database Schema
- **Users Table**: Basic user authentication (id, username, password)
- **Contact Messages Table**: Campaign contact form submissions with volunteer preferences
- **Schema Management**: Drizzle ORM with PostgreSQL dialect
- **Migrations**: Generated to `./migrations` directory

### API Endpoints
- `POST /api/contact` - Submit campaign contact form
- `GET /api/contact-messages` - Retrieve all contact messages (admin)

### Frontend Components
- **Navigation**: Fixed header with smooth scrolling navigation
- **Hero Section**: Campaign banner with call-to-action buttons
- **About Section**: Candidate biography with education and experience
- **Experience Section**: Public service record and achievements
- **Priorities Section**: Campaign platform with six key areas
- **Leadership Section**: Community involvement and board positions
- **Contact Form**: Multi-field form with volunteer signup options
- **Footer**: Links and contact information

## Data Flow

1. **User Interaction**: Visitors navigate the single-page application
2. **Form Submission**: Contact form data is validated client-side with Zod
3. **API Request**: Form data sent to Express backend via fetch
4. **Database Storage**: Contact messages stored in PostgreSQL via Drizzle ORM
5. **Response Handling**: Success/error feedback displayed via toast notifications
6. **Admin Access**: Contact messages retrievable through admin endpoint

## External Dependencies

### Core Technologies
- **React Ecosystem**: React, React DOM, React Query
- **UI Framework**: Radix UI primitives, Lucide React icons
- **Database**: Neon Database, Drizzle ORM, PostgreSQL
- **Build Tools**: Vite, esbuild, TypeScript
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer

### Campaign-Specific Features
- **Image Assets**: Campaign photos stored in `attached_assets/`
- **Color Scheme**: Custom campaign colors (blue, yellow, light)
- **Typography**: Font customization for political branding
- **SEO**: Meta tags and structured data for search optimization

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server on frontend, tsx for backend
- **Hot Reload**: Both frontend and backend support live reloading
- **Environment Variables**: DATABASE_URL required for database connection

### Production Build
- **Frontend**: Vite builds to `dist/public/`
- **Backend**: esbuild bundles to `dist/index.js`
- **Static Assets**: Served from build directory
- **Database**: Neon Database for production PostgreSQL

### Scripts
- `npm run dev` - Development with hot reload
- `npm run build` - Production build
- `npm run start` - Production server
- `npm run db:push` - Push schema changes to database

## Changelog

```
Changelog:
- July 05, 2025. Initial setup with basic campaign structure
- July 05, 2025. Enhanced design inspired by nikemaforcongress.com:
  * Updated hero section with full-screen layout and circular profile image
  * Redesigned About section with enhanced visual hierarchy
  * Improved Experience section with statistics and dual-column images
  * Added campaign logo to navigation and footer
  * Enhanced typography and color scheme consistency
  * Added comprehensive SEO meta tags and structured data
  * Created netlify.toml for deployment configuration
  * Fixed TypeScript issues in storage layer
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```