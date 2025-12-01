# Counter App

A simple yet elegant counter application built with React and TypeScript. This is a learning project demonstrating modern React patterns with Material-UI styling.

## 🎯 Features

- **Increment/Decrement**: Increase or decrease the counter value with intuitive buttons
- **Reset Functionality**: Quickly reset the counter back to zero
- **Beautiful UI**: Glassmorphism design with gradient background and smooth hover effects
- **Responsive Design**: Centered layout that works on various screen sizes
- **Type-Safe**: Built with TypeScript for improved code quality and developer experience

## 📁 Project Structure

```
counter/
├── src/
│   ├── App.tsx              # Main counter component
│   ├── main.tsx             # React entry point
│   ├── App.css              # Component styles
│   ├── index.css            # Global styles
│   └── assets/              # Static assets
│       └── video/
├── public/                  # Public assets
├── index.html               # HTML entry point
├── package.json             # Project dependencies and scripts
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # This file
```

## 🛠️ Tech Stack

- **React 19.2**: UI library with hooks
- **TypeScript 5.9**: Type-safe JavaScript
- **Vite 7.2**: Fast build tool and development server
- **Material-UI (MUI) 7.3**: Component library with Emotion styling
- **Emotion**: CSS-in-JS library for styling

## 📦 Dependencies

### Main Dependencies
- `react` & `react-dom`: React library
- `@mui/material`: Material Design component library
- `@emotion/react` & `@emotion/styled`: Styling solution

### Dev Dependencies
- `typescript`: Type checking
- `eslint`: Code linting with React plugins
- `vite`: Build tool and dev server
- TypeScript ESLint and type definitions

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The app will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Build

```bash
# Build for production
npm run build
```

This runs TypeScript compilation and creates an optimized production build.

### Preview

```bash
# Preview production build locally
npm run preview
```

### Linting

```bash
# Run ESLint to check code quality
npm run lint
```

## 💡 Component Overview

### App Component (`src/App.tsx`)

The main component implements a counter with the following features:

- **State Management**: Uses React's `useState` hook to manage the counter value
- **UI Elements**:
  - **Minus Button**: Decreases count by 1
  - **Counter Display**: Shows the current count value
  - **Plus Button**: Increases count by 1
  - **Reset Button**: Sets count back to 0

- **Styling**: Uses Material-UI's `sx` prop with:
  - Glassmorphism effect with backdrop blur
  - Gradient background
  - Smooth hover animations
  - Responsive flex layout

## 🎨 Design Highlights

- **Gradient Background**: `linear-gradient(135deg, #dfe9f3 0%, #ffffff 100%)`
- **Glassmorphic Card**: Semi-transparent background with blur effect
- **Color Scheme**:
  - Primary (Increment): Red (#EF4444)
  - Secondary (Decrement): Blue (#3B82F6)
  - Reset Button: Gray (#6B7280)

## 📝 Learning Objectives

This project demonstrates:

- React functional components and hooks (`useState`)
- TypeScript type safety in React components
- CSS-in-JS styling with Material-UI
- Component composition and reusability
- State management in React
- Modern build tools with Vite
- Code quality with ESLint

## 🔧 Scripts Summary

| Script | Purpose |
|--------|---------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run lint` | Check code quality |
| `npm run preview` | Preview production build |

## 📚 Resources

- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org)
- [Material-UI Documentation](https://mui.com)
- [Vite Documentation](https://vitejs.dev)

---

**Note**: This is a learning project created to practice React fundamentals with modern tooling and styling approaches.