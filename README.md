# 🛡️ KinKeeper

<p align="center">
  <img src="./src/assets/logo.png" alt="KinKeeper Logo" width="140px" onerror="this.style.display='none'"/>
</p>

<h3 align="center">KinKeeper</h3>

<p align="center">
  <strong>An elegant, data-driven personal relationship CRM engineered to cultivate, track, and sustain meaningful human connections before they slip away.</strong>
</p>

<p align="center">
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React%2019-v19.2.6-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19"/></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind%20v4-v4.3.0-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind 4"/></a>
  <a href="https://daisyui.com/"><img src="https://img.shields.io/badge/DaisyUI%20v5-v5.5.20-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white" alt="DaisyUI 5"/></a>
  <a href="https://vite.dev/"><img src="https://img.shields.io/badge/Vite%20v8-v8.0.12-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite 8"/></a>
</p>

---

## 🔮 The Philosophy

In a hyper-connected digital age, keeping track of genuine interactions with friends, family, and professionals can become overwhelming. **KinKeeper** provides a beautiful, minimalistic "personal shelf" of your connections, acting as an intentional social dashboard. By configuring communication frequencies, the platform alerts you when it's time to reach out—ensuring your valuable social bonds stay intact.

---

## ⚡ Core Pillars & Capabilities

### 🎛️ Intelligent Telemetry Dashboard
* **Dynamic Connection Counters:** Live calculation pipelines handling total cataloged network matrices, active tracking sync states, and interaction frequencies.
* **Proactive Warning Triggers:** Quick-glance counters filtering out down-to-the-minute statuses to ensure immediate awareness of neglected relationships.

### 🚦 Algorithmic Contact Cadence 
Contacts are monitored and dynamically streams across specialized threshold pipelines:
* 🔴 **Overdue** — The communication buffer zone has officially expired. Immediate outreach required.
* 🟡 **Need Attention** — Approaching the communication boundary line. Nearing overdue status.
* 🟢 **On-Track** — Active, fresh, and fully synchronized within your set relationship routine parameters.

### 🏷️ Intuitive Taxonomy Matrix
* **Custom Meta-Tagging:** Instantly organize and filter through your social layout utilizing localized categories (`college`, `close friend`, `family`).
* **Micro-Bios & Context Snapshots:** Stores highly personalized operational logs, target parameters, and essential contextual relationship notes.

---

## 🏗️ Architectural Blueprint

### 🔬 Core Foundations & Interface Engine
* `React 19` (`v19.2.6`) — Built over concurrent rendering trees utilizing fine-grained declarative state handling.
* `React DOM` (`v19.2.6`) — Sub-millisecond client-side interface document tree updates.

### 🎨 Design Engineering & Layout System
* `Tailwind CSS v4` (`v4.3.0`) — Blazing fast utility injection compilation run by the lightning-fast next-gen Oxide engine.
* `@tailwindcss/vite` (`v4.3.0`) — Zero-config native styling integration directly bundled via the compiler plugin layer.
* `DaisyUI v5` (`v5.5.20`) — Semantic component architecture supplying pristine interface controls, states, and global layouts.

### 🚦 Application Control & Alerts
* `React Router 7` (`v7.17.0`) — State-aware client routing managing dynamic page transitions and global layout outlets.
* `React Toastify` (`v11.1.0`) — Event-driven asynchronous telemetry feedback popups capturing transactional workflow states.

### 🧬 Asset & Iconography Suite
* `Lucide React` (`v1.3.0`) & `React Icons` (`v5.6.0`) — Razor-sharp, vector-based dashboard asset iconography systems that fluidly adapt across fluid viewpoints.

---

## 📁 File System Architecture

```
├── public/
│   └── friends.json         # Normalized mock-DB layout handling schema properties
├── src/
│   ├── assets/              # Creative assets, branding media, and logo designs
│   ├── components/
│   │   ├── friendcard/
│   │   │   ├── FriendCard.jsx     # Encapsulated card module for macro relationship summaries
│   │   │   └── FriendDetails.jsx  # Detailed, modal-driven view for connection profiles
│   │   └── navbar/
│   │       └── Navbar.jsx         # Persistent architectural header & navigation hub
│   ├── error/
│   │   └── Error.jsx        # Defensive 404 handler & application crash terminal
│   ├── layout/
│   │   └── MainLayout.jsx   # Core application blueprint skeleton handling shared views
│   ├── pages/
│   │   ├── Footer.jsx       # Standardized systemic footer module
│   │   ├── Home.jsx         # Primary grid view managing live contact tracking matrices
│   │   ├── Stats.jsx        # Data visualization dashboard handling relationship analytics
│   │   └── TimeLine.jsx     # Sequential chronological event log for past interactions
│   ├── routes/
│   │   └── Router.jsx       # Client-side multi-endpoint routing path definitions
│   ├── App.css              # Root cascading global layout enhancements
│   ├── App.jsx              # Global core application wrapper
│   ├── index.css            # Base Tailwind layers, utility overrides, and root configurations
│   └── main.jsx             # React Virtual DOM execution initialization engine
├── eslint.config.js         # Linter enforcement criteria rulesets
├── index.html               # SPA Document entry template container
└── package.json             # Manifest declaring workspace targets and package registries

```


### 📊 Structured Schema Signature
The UI elements are dynamically fed directly from the public/friends.json data layer using this exact data layout format:

```json
{
  "id": 1,
  "name": "Anik Rahman",
  "picture": "https://randomuser.me/api/portraits/men/1.jpg",
  "email": "anik.rahman@example.com",
  "days_since_contact": 12,
  "status": "Overdue",
  "tags": ["college", "close friend"],
  "bio": "Met in university. Love hiking together.",
  "goal": 14,
  "next_due_date": "2026-06-09"
}
```