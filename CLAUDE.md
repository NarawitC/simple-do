# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SimpleDo is a modern, minimalist to-do list application built with Next.js 15, Tailwind CSS, and shadcn/ui components. The project emphasizes clean design, smooth animations, and user-friendly task management without complexity.

**Key Design Principles:**

- Simplified task management (no categories, local storage, or priorities by design choice)
- Modern glassmorphism design with Tailwind CSS
- Focus on core CRUD operations for tasks
- Due date functionality only
- Clean architecture with TypeScript

## Development Commands

```bash
# Development
pnpm dev                 # Start development server on localhost:3000
pnpm build              # Build production bundle
pnpm start              # Start production server
pnpm lint               # Run ESLint
pnpm format             # Format code with Prettier
pnpm format:check       # Check formatting
npx tsc --noEmit        # TypeScript type checking (no dedicated script)
```

## Architecture & State Management

### State Management (Zustand)

The application uses a single Zustand store for task management located at `src/store/task-store.ts`:

**Store Structure:**

- `tasks: Task[]` - Main state array
- CRUD operations: `addTask()`, `updateTask()`, `toggleTaskCompletion()`, `deleteTask()`
- Helper methods: `getTasks()`, `getTaskById()`
- All operations ensure immutable state updates
- Built-in validation (title cannot be empty, auto-trims text)
- Uses `crypto.randomUUID()` for unique task IDs

**Import Pattern:**

```typescript
import { useTaskStore } from '@/store';
import type { Task, TaskInput, TaskUpdate } from '@/store';
```

### TypeScript Configuration

- **Strict mode enabled** with enhanced type checking
- **Path aliases**: `@/*` maps to `src/*`
- **exactOptionalPropertyTypes**: true - requires explicit `undefined` for optional properties
- Additional strict rules: `noUnusedLocals`, `noUnusedParameters`, `noUncheckedIndexedAccess`

### Task Data Model

```typescript
interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}
```

**Note:** Categories, priorities, and local storage persistence were intentionally removed from the original design to keep the app simple.

## UI Architecture

### Component Library

- **shadcn/ui**: Pre-built accessible components in `src/components/ui/`
- **Styling**: "new-york" style variant with neutral base colors
- **Icons**: Lucide React icon library
- **Theme**: next-themes for dark/light mode switching

### Styling Approach

- **Primary**: Tailwind CSS utility classes
- **Custom styles**: `src/app/globals.css` for additional styling
- **Animation**: Framer Motion for smooth transitions and micro-interactions
- **Color system**: CSS custom properties for theme-aware colors

### Layout Structure

- **Root layout**: `src/app/layout.tsx` with ThemeProvider wrapper
- **Font**: Geist Sans and Geist Mono from `next/font/google`
- **Responsive**: Mobile-first design approach

## Key Libraries

**Core Dependencies:**

- **Next.js 15** with App Router
- **Zustand 5** for state management
- **Tailwind CSS 4** for styling
- **Framer Motion 12** for animations
- **React Hook Form 7** for form handling
- **Zod 4** for validation
- **date-fns 4** for date manipulation
- **Fuse.js 7** for search functionality

**Development Tools:**

- **ESLint** with Next.js config and additional strict rules
- **Prettier** with Tailwind plugin for class sorting
- **Husky** for git hooks with lint-staged
- **TypeScript** with strict configuration

## File Organization

```
src/
├── app/                 # Next.js App Router pages
├── components/
│   ├── ui/             # shadcn/ui components
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── lib/
│   └── utils.ts        # Utility functions (cn helper, etc.)
├── store/
│   ├── task-store.ts   # Main Zustand store
│   └── index.ts        # Store exports
└── types/
    └── task.ts         # Task-related TypeScript types
```

## Task Management Integration

This project uses TaskMaster AI for project management:

- Tasks and progress tracked in `.taskmaster/tasks/tasks.json`
- Project requirements documented in `.taskmaster/docs/prd.md`
- Use TaskMaster commands for updating task status and managing development workflow

## Development Notes

**When working with the store:**

- Always use the provided CRUD methods rather than direct state mutation
- Task validation happens automatically in `addTask()` and `updateTask()`
- All timestamps are managed automatically
- State updates are immutable using spread operators

**When adding new features:**

- Follow the existing TypeScript strict mode patterns
- Use shadcn/ui components when possible
- Maintain the clean, minimal design philosophy
- Test with both light and dark themes
- Ensure mobile responsiveness

**Code Quality:**

- Prettier auto-formats on commit via husky hooks
- ESLint enforces import organization and unused import removal
- TypeScript strict mode catches potential runtime errors
- All React components should be properly typed
