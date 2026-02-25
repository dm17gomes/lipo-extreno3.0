# Replit.md

## Overview

This is a high-conversion sales landing page for "Lipo Extremo," a weight loss supplement targeted at Brazilian Portuguese-speaking customers. The application is a single-page marketing site built with React on the frontend and Express on the backend. The primary goal is to drive conversions through persuasive copy, social proof, and clear CTAs that link to external payment processors. The backend provides a simple lead capture API endpoint, while the main conversion flow redirects users to external payment links (Logzz platform). The page supports two payment models: Cash on Delivery (COD) for selected regions and online payment nationwide.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript, bundled by Vite
- **Routing**: Wouter (lightweight client-side router) — only two routes: Home (`/`) and a 404 page
- **UI Components**: shadcn/ui (new-york style) with Radix UI primitives, Tailwind CSS for styling
- **Animations**: Framer Motion for scroll animations and transitions
- **Smooth Scrolling**: react-scroll for navigating between landing page sections
- **State Management**: TanStack React Query for server state (lead submission)
- **Design Theme**: Purple/Pink gradient palette targeting feminine/energetic aesthetics for weight loss products. Custom fonts: Montserrat (display) and Open Sans (body)
- **Path aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`, `@assets/` maps to `attached_assets/`
- **Static images**: Located in `client/public/images/`

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript, executed via tsx in development
- **API**: Single REST endpoint `POST /api/leads` for lead capture
- **API Contract**: Shared route definitions in `shared/routes.ts` using Zod schemas — both client and server reference the same types and validation
- **Build**: Custom build script using esbuild for server and Vite for client. Production output goes to `dist/` (server as `dist/index.cjs`, client as `dist/public/`)

### Data Storage
- **Database**: PostgreSQL (required via `DATABASE_URL` environment variable)
- **ORM**: Drizzle ORM with `drizzle-zod` for schema-to-validation integration
- **Schema**: Single `leads` table with fields: `id` (serial), `name` (text), `email` (text), `phone` (text, optional), `createdAt` (timestamp)
- **Migrations**: Managed via `drizzle-kit push` (`npm run db:push`)
- **Session Store**: connect-pg-simple is listed as a dependency (for potential session support)

### Key Design Decisions
1. **Shared schema pattern**: The `shared/` directory contains both the database schema and API route definitions, ensuring type safety between frontend and backend
2. **Minimal backend**: The server is intentionally simple — just lead capture. The actual purchase flow is handled by external payment links
3. **Landing page focus**: This is not a traditional web app but a conversion-optimized single-page marketing site with multiple sections (hero, problem/empathy, solution, pricing, testimonials, FAQ)
4. **Development vs Production**: In development, Vite dev server is used with HMR. In production, static files are served from the built `dist/public` directory

## External Dependencies

### Database
- **PostgreSQL**: Required. Connection via `DATABASE_URL` environment variable. Used for lead storage via Drizzle ORM.

### External Services
- **Logzz Payment Platform**: External payment processor linked from CTA buttons (COD and online payment options). These are external URLs, not integrated via API.
- **WhatsApp**: Floating CTA button links to WhatsApp for customer support (`wa.me/5591980215556`)
- **Phone Support**: Click-to-call button for direct phone contact

### Key npm Dependencies
- **Frontend**: react, wouter, @tanstack/react-query, framer-motion, react-scroll, shadcn/ui components (Radix UI primitives), tailwindcss, class-variance-authority
- **Backend**: express (v5), drizzle-orm, pg (node-postgres), zod, connect-pg-simple
- **Build Tools**: vite, esbuild, tsx, typescript, drizzle-kit
- **Replit-specific**: @replit/vite-plugin-runtime-error-modal, @replit/vite-plugin-cartographer, @replit/vite-plugin-dev-banner

### Google Fonts
- Montserrat (display headings)
- Open Sans (body text)
- DM Sans, Fira Code, Geist Mono (loaded in HTML head)