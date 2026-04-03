# Framework Playground

## Overview

A monorepo-based micro frontend application for learning different frontend frameworks and practicing GitHub Copilot workflows. Each micro frontend is independently developed and deployed, tied together by a lightweight shell application.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Monorepo | Nx |
| Build tool | Vite |
| Module Federation | `@module-federation/vite` |
| Shell | TypeScript + Vite + Tailwind + DaisyUI |
| Micro frontend 1 | React + TypeScript |
| Micro frontend 2 | Angular + TypeScript |
| Micro frontend 3 | Lit (Web Components) + TypeScript |
| Dev environment | Dev Container (Docker) |

---

## Repository Structure

```
.devcontainer/
  devcontainer.json
  Dockerfile

apps/
  shell/              ← TypeScript + Vite + Tailwind + DaisyUI
  react-app/          ← React + TypeScript
  angular-app/        ← Angular + TypeScript
  wc-app/             ← Lit Web Components + TypeScript

libs/
  shared-types/       ← MicroFrontend interface + shared domain types
  shared-utils/       ← Framework-agnostic utility functions
  design-tokens/      ← Tailwind config + DaisyUI theme + CSS variables

.github/
  copilot-instructions.md
```

---