# 🚀 Bitint Website — Deployment Sprint Master Plan

## Overview
This document provides the complete roadmap for taking the Bitint website from its current state (AI Studio export, local-only) to a fully functional, production deployment at `https://bitint.io`.

**Total Sprints**: 8 (Sprint 0–7)  
**Estimated Timeline**: ~2-3 weeks  
**Target**: Ubuntu server, Nginx, SSL (Let's Encrypt), CI/CD via GitHub Actions

---

## Sprint Summary

| Sprint | Name | Type | Dependencies | Est. Effort |
|--------|------|------|-------------|-------------|
| **0** | [Project Audit](sprint-0-project-audit.md) | 📋 Documentation | None | 1 hour |
| **1** | [Build System Fixes](sprint-1-build-system-fixes.md) | 🔧 Code | Sprint 0 | 2-3 hours |
| **2** | [SEO & Production Polish](sprint-2-seo-and-routing.md) | 🔧 Code | Sprint 1 | 3-4 hours |
| **3** | [Contact Form Backend](sprint-3-contact-form-backend.md) | 🔧 Code | Sprint 1 | 1-2 hours |
| **4** | [Server Setup & Deployment](sprint-4-server-setup-deployment.md) | 🖥️ Infra | Sprint 1 | 2-3 hours |
| **5** | [Domain, SSL & Nginx](sprint-5-domain-ssl-nginx.md) | 🖥️ Infra | Sprint 4 | 1-2 hours |
| **6** | [CI/CD Pipeline](sprint-6-cicd-pipeline.md) | ⚙️ DevOps | Sprint 5 | 2-3 hours |
| **7** | [Monitoring & Hardening](sprint-7-monitoring-hardening.md) | 🛡️ Ops | Sprint 5 | 2-3 hours |

---

## Dependency Graph

```
Sprint 0 (Audit)
    └─→ Sprint 1 (Build Fixes)
            ├─→ Sprint 2 (SEO & Polish)
            ├─→ Sprint 3 (Contact Form)
            └─→ Sprint 4 (Server Setup)
                    └─→ Sprint 5 (Domain & SSL)
                            ├─→ Sprint 6 (CI/CD)
                            └─→ Sprint 7 (Monitoring)
```

> **Note**: Sprints 2 & 3 can be done in parallel with Sprint 4. Sprint 6 & 7 can be done in parallel with each other.

---

## Critical Issues Summary (from Sprint 0)

| Priority | Issue | Fixed In |
|----------|-------|----------|
| 🔴 P0 | CDN import maps in index.html | Sprint 1 |
| 🔴 P0 | Tailwind CDN script in production | Sprint 1 |
| 🔴 P0 | Missing postcss.config.js | Sprint 1 |
| 🔴 P0 | HashRouter (bad for SEO) | Sprint 1 |
| 🟡 P1 | No real form backend | Sprint 3 |
| 🟡 P1 | Placeholder content | Sprint 2 |
| 🟢 P2 | No sitemap/robots.txt | Sprint 2 |
| 🟢 P2 | No analytics | Sprint 7 |
| 🟢 P2 | Dead social links | Sprint 2 |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, TypeScript, Tailwind CSS 3 |
| Build | Vite 5 |
| Server | Ubuntu, Nginx |
| SSL | Let's Encrypt (Certbot) |
| CI/CD | GitHub Actions |
| Monitoring | UptimeRobot / Better Stack |
| Analytics | Google Analytics (GA4) |
| Forms | Formspree (or Resend API) |

---

## What Human Intervention is Needed

| Task | Sprint | Description |
|------|--------|-------------|
| 🧑 Server provisioning | 4 | Provision Ubuntu VPS (DigitalOcean, Hetzner, etc.) |
| 🧑 Domain DNS | 5 | Point bitint.io A records to server IP |
| 🧑 GitHub repo | 6 | Create GitHub repository & add SSH keys |
| 🧑 Analytics | 7 | Create GA4 property, provide Measurement ID |
| 🧑 Formspree | 3 | Create Formspree account & form ID |
| 🧑 Content review | 2 | Approve/edit placeholder content replacements |

---

## Agent Instructions

Each sprint file is self-contained with:
1. **Goal** — What this sprint achieves
2. **Prerequisites** — What must be done first
3. **Tasks** — Step-by-step instructions with exact commands and code
4. **Verification Checklist** — How to confirm it's done
5. **Agent Instructions** — AI-specific guidance

Execute sprints in dependency order. Each sprint can be picked up by a different AI agent. Always read the sprint file completely before starting work.
