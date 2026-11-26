# Miguelángel Cabrera - Portfolio

Personal portfolio website showcasing my experience, projects, and skills as a Senior Software Engineer.

## 📋 Table of Contents
- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [License](#license)
- [Contact](#contact)

## Overview
This site is built with [Astro](https://astro.build) and Tailwind CSS, presenting a clean, responsive layout with sections for:
- About me
- Professional experience
- Selected open‑source and personal projects
- AI & agentic engineering experiments
- Expertise and toolkit
- Contact information

The content is driven from a single data file (`src/data/portfolio.js`) making it easy to maintain and extend.

## Tech Stack
| Category      | Technology               |
|---------------|--------------------------|
| Framework     | Astro ^7.4.13            |
| Styling       | Tailwind CSS ^4.3.5      |
| Fonts         | DM Sans, Space Grotesk (Google Fonts) |
| Language      | TypeScript (via .astro)  |
| Build Tool    | Vite (via Astro)         |
| Package Manager | Bun                     |
| Icons         | Custom favicons          |
| Animations    | CSS keyframes + IntersectionObserver |

## Features
- Fully static site (no backend required)
- Responsive design
- Dark‑aware accent themes (lime, purple, dark)
- Smooth scroll reveal animations
- SEO meta tags (title, description, og)
- Accessible skip‑to‑content link
- Easy content updates via `portfolio.js`

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/mcabreradev/mcabreradev-web.git
   cd mcabreradev-web
   ```
2. Install dependencies (Bun recommended):
   ```bash
   bun install
   ```
   *(If you don’t have Bun, you can use `npm install` – the lockfile is not committed.)*

## Usage
- **Development server**
  ```bash
  bun dev
  ```
  Opens at <http://localhost:4321>

- **Build for production**
  ```bash
  bun build
  ```
  Outputs static files to `./dist/`

- **Preview production build**
  ```bash
  bun preview
  ```

## Deployment
The repository is configured for GitHub Pages:
1. Push to `main` (already done).
2. In GitHub repo → Settings → Pages → Source: `main` branch `/root`.
3. Site will be published at `https://mcabreradev.github.io/mcabreradev-web/`.

Alternatively, deploy any static host (Netlify, Vercel, etc.) by pointing to the `dist/` folder.

## License
This project is open source and available under the [MIT License](LICENSE).

## Contact
- **Email**: mcabrera.dev@gmail.com
- **LinkedIn**: [mcabreradev](https://www.linkedin.com/in/mcabreradev/)
- **GitHub**: [mcabreradev](https://github.com/mcabreradev)

© 2026 Miguelángel Cabrera. Built with intention.
