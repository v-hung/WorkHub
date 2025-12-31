---
applyTo: "workhub.client/**/*"
---

# Frontend Development Instructions for WorkHub

## Overview

This is a React/TypeScript single-page application built with Vite, providing the user interface for the WorkHub timesheet management system.

## Technology Stack

- **Language**: TypeScript 5.x
- **Framework**: React 18.3.1 with Vite 6.x
- **UI Library**: Ant Design 5.24.2
- **State Management**: Zustand 5.0.3
- **Internationalization**: i18next 24.2.2 with support for Vietnamese, English, and Japanese
- **Routing**: React Router 7.2.0
- **Real-time**: SignalR 8.0.7 for notifications
- **Date Handling**: date-fns 4.1.0

## Project Structure

- `src/pages/`: Page components for routing (LoginPage, UserPage, TimesheetPage, etc.)
- `src/features/`: Feature-specific components and logic
- `src/ui/`: Reusable UI components (tables, forms, modals, etc.)
- `src/layouts/`: Layout components (DefaultLayout, AuthLayout, UserLayout)
- `src/stores/`: Zustand state management stores (auth, timesheet, notification)
- `src/services/`: API service functions and configurations
- `src/hooks/`: Custom React hooks
- `src/utils/`: Utility functions for dates, validation, etc.
- `src/types/`: TypeScript type definitions
- `src/contexts/`: React context providers
- `src/generate-api/`: Auto-generated API client from Swagger

## Development Workflow

1. Install dependencies: `npm install`
2. Start development server: `npm run dev` (runs on https://localhost:52045)
3. Build for production: `npm run build`
4. Lint code: `npm run lint`
5. Generate API client: `npm run generate-api` (requires backend running)

## Key Patterns and Conventions

- Use TypeScript for all new code
- Follow React functional components with hooks
- Use Zustand for global state management
- Implement proper error handling with try-catch blocks
- Use i18next for all user-facing text
- Follow Ant Design component patterns
- Use date-fns for date manipulation
- Implement proper loading states and error boundaries

## API Integration

- Backend API runs on http://localhost:5240
- Use generated API client from `src/generate-api/`
- Handle authentication tokens in requests
- Implement proper error responses
- Use SignalR for real-time features

## Code Quality

- ESLint configured with TypeScript and React rules
- Some rules disabled: @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-namespace
- Focus on React hooks and refresh patterns
- Auto-import configured for common utilities

## Validation Steps

- Build completes without TypeScript errors
- ESLint passes without critical errors
- Application loads without console errors
- API integration works correctly
- Internationalization loads properly
- Real-time features function (requires backend)

## Common Tasks

- Adding new pages: Create in `src/pages/`, add to router.tsx
- New features: Create directory in `src/features/`
- API calls: Add to `src/services/`, generate types if needed
- State management: Add to appropriate store in `src/stores/`
- UI components: Add to `src/ui/` for reusability
- Translations: Add keys to language files in `public/locales/`
