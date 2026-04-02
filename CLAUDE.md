# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite HMR)
npm run build     # Type-check with tsc then build for production
npm run lint      # Run ESLint
npm run preview   # Preview production build locally
```

There are no tests in this project.

## Architecture

Single-page portfolio built with **React 19 + TypeScript + Vite**, styled with **Tailwind CSS** (utility classes) and custom CSS in `src/index.css`. Animations are driven by **Motion** (`motion/react` and `framer-motion` — both are used; they're the same library, different import paths).

### Page structure

The app is a single scrollable page (`App.tsx`) divided into four full-screen sections rendered inside `Layout`:

- **Home** (`src/pages/Home.tsx`) — Scroll-driven animation using `useScroll`/`useMotionValueEvent`. As the user scrolls, role text cycles through `ROLES[]`, line numbers update, and a clipped color mask reveals over the h1.
- **Projects** (`src/pages/Projects.tsx`) — Sticky scroll section. Cards fan out horizontally as the user scrolls via `translateXValue`. Clicking a card expands it into a full-screen modal using Motion's shared `layoutId` system. Project data lives in `src/constants/index.ts`.
- **About** (`src/pages/About.tsx`) — Bio with a marquee of `HARD_SKILLS[]` animated via Motion's `x` keyframes based on measured `scrollWidth`.
- **Contact** (`src/pages/Contact.tsx`) — Static contact section.

### Key files

- `src/constants/index.ts` — `PROJECTS_INFO` array is the single source of truth for all project data (title, description, stack, image paths, links). Add/edit projects here.
- `src/components/Project.tsx` — Detail view rendered inside the Projects modal. Receives a spread `ProjectInfo` object.
- `src/components/Layout.tsx` — Fixed header with anchor nav links; wraps all sections.
- `src/index.css` — Section-level styles (gradients, masks, marquee pseudo-elements, typography). Tailwind utilities handle most layout; this file handles art-direction that Tailwind can't express cleanly.

### Static assets

Project images live in `public/` (referenced as absolute paths like `/recs-thumbnail.png`). Personal images (avatar, background textures) live in `src/assets/images/` and are imported directly.

## Code style

Use comments sparingly. Only comment complex code.

### Styling approach

Mix of Tailwind utility classes inline and semantic CSS classes in `src/index.css`. The font stack uses **Lexend Exa** as the primary face and **Lekton** (monospace) for code-style elements (`.stack`, `.code-lines-numbers`). These are expected to be loaded via a CDN/font service not shown in the repo.
