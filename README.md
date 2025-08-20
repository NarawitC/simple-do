# SimpleDo

A modern, minimalist to-do list application built with Next.js 15, emphasizing clean design and user-friendly task management.

## Features

- Clean, glassmorphism design with Tailwind CSS
- Add, edit, and delete tasks
- Mark tasks as complete/incomplete
- Due date functionality
- Dark/light theme toggle
- Responsive mobile design
- Search and filter tasks

## Tech Stack

- **Next.js 15** with App Router
- **TypeScript** with strict mode
- **Tailwind CSS** for styling
- **Zustand** for state management
- **Framer Motion** for animations
- **shadcn/ui** components
- **React Hook Form** + **Zod** for form validation

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Development Commands

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm format       # Format code with Prettier
pnpm format:check # Check code formatting
npx tsc --noEmit  # TypeScript type checking
```

## Project Structure

```
simple-do/
├── src/
│   ├── app/                     # Next.js App Router
│   │   ├── design-token/        # Design token examples
│   │   ├── example/             # Example pages
│   │   ├── re-render/           # Re-render testing
│   │   ├── test/                # Test pages
│   │   ├── favicon.ico          # App favicon
│   │   ├── globals.css          # Global styles
│   │   ├── layout.tsx           # Root layout component
│   │   └── page.tsx             # Main todo app page
│   ├── components/
│   │   ├── ui/                  # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   └── ...              # Other UI components
│   │   └── custom/              # Custom app components
│   │       ├── theme-provider.tsx
│   │       ├── theme-toggle.tsx
│   │       └── ...
│   ├── lib/
│   │   └── utils.ts             # Utility functions (cn helper)
│   ├── store/                   # Zustand state management
│   │   ├── index.ts             # Store exports
│   │   ├── slices/
│   │   │   └── task.ts          # Task store slice
│   │   └── types.ts             # Store types
│   └── types/
│       └── task.ts              # Task-related TypeScript types
├── public/                      # Static assets
│   ├── next.svg
│   ├── vercel.svg
│   └── ...                      # SVG icons
├── CLAUDE.md                    # Project instructions for Claude
├── components.json              # shadcn/ui configuration
├── eslint.config.mjs            # ESLint configuration
├── next.config.ts               # Next.js configuration
├── package.json                 # Dependencies and scripts
├── postcss.config.mjs           # PostCSS configuration
├── tsconfig.json                # TypeScript configuration
└── pnpm-lock.yaml               # Package lock file
```

## Design Philosophy

SimpleDo focuses on simplicity and ease of use. The application intentionally avoids complex features like categories, priorities, or cloud sync to maintain a clean, focused user experience.
