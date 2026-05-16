<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind">
  <img src="https://img.shields.io/badge/Framer_Motion-12-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion">
  <br>
  <img src="https://img.shields.io/badge/Status-Live-success?style=flat-square" alt="Status">
  <img src="https://img.shields.io/badge/Version-0.1.0-blue?style=flat-square" alt="v0.1.0">
  <img src="https://img.shields.io/badge/Docker-✓-2496ED?style=flat-square&logo=docker&logoColor=white" alt="Docker">
</p>

# 👤 Adhil Asharaf — Portfolio

> **Linux System Administrator | Infrastructure Automation | Enterprise IT**  
> Personal portfolio showcasing experience, skills, projects, and certifications.

---

## ✨ Overview

Built with Next.js 16, React 19, and TypeScript 5. Features animated UI components including a 3D globe (Cobe), particle effects (tsParticles), and Framer Motion animations — all styled with Tailwind CSS 4.

---

## 🗂️ Project Structure

```
src/
├── app/
│   ├── layout.tsx               # Root layout, fonts (Inter Tight, JetBrains Mono), metadata
│   ├── page.tsx                 # Main page composition
│   └── globals.css              # Global Tailwind styles
├── components/
│   ├── sections/
│   │   ├── hero.tsx             # Hero section with intro
│   │   ├── stats.tsx            # Stats: 100+ VMs, 80% time reduction, 50+ clients, 99.9% SLA
│   │   ├── experience.tsx       # Work history: Hashroot, Synnefo Solutions
│   │   ├── skills.tsx           # 11 skill categories
│   │   ├── projects.tsx         # Projects: NIC automation, OnApp→Proxmox, Abuse Console, WHMCS...
│   │   ├── certifications.tsx   # Certifications
│   │   └── contact.tsx          # Contact form
│   └── ui/
│       ├── navbar.tsx           # Navigation bar
│       ├── footer.tsx           # Footer
│       ├── globe-pulse.tsx      # 3D globe (Cobe)
│       ├── lamp.tsx             # Ambient light effect
│       ├── sparkles.tsx         # Particle effects
│       └── animate.tsx          # Reusable animation wrapper
└── lib/
    ├── data.ts                  # All portfolio content
    └── utils.ts                 # Utilities
```

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗️ Stack

| Layer | Technology |
|-------|------------|
| **Framework** | Next.js 16.2.6 (Turbopack) |
| **UI Library** | React 19.2.4 |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 4, PostCSS |
| **Animation** | Framer Motion 12, tsParticles, Cobe |
| **Icons** | Lucide React |
| **Fonts** | Inter Tight (variable), JetBrains Mono |
| **Deployment** | Docker (standalone output) |

---

## 🐳 Docker Deploy

```bash
docker compose up -d --build
```

---

## 📄 Pages

| Route | Content |
|-------|---------|
| `/` | Hero, Stats, Experience, Skills, Projects, Certifications, Contact |

---

## 🔒 Security Headers

Configured via `next.config.ts`:
- **CSP**: `default-src 'self'` with Google Fonts, Gravatar, and S3 allowances
- **HSTS**: Strict-Transport-Security enforcement
- **X-Frame-Options**: DENY
- **Permissions-Policy**: Minimal feature allowances

---

<p align="center">
  <sub>Built with Next.js · React · TypeScript · Tailwind · Framer Motion</sub>
  <br>
  <sub><a href="https://github.com/iKKa-boop/adhil-asharaf-portfolio">GitHub</a></sub>
</p>
