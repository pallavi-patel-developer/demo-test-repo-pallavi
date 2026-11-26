# PulseFlow — Mini Website (React 18 + TypeScript + Tailwind CSS)

A responsive, high-performance product mini website built for **Assignment 3: Create a Simple Mini Website** using **React 18**, **TypeScript**, and **Tailwind CSS**.

---

## 🛠️ Technology Stack & Requirements Met

| Requirement | Implementation Details |
|---|---|
| **React 18** | React 18 (`^18.3.1`) with `createRoot`, functional components, hooks (`useState`, `useEffect`). |
| **TypeScript** | Strict type safety (`~5.6.2`), typed props, typed interfaces (`NavItem`, `Feature`, `PricingTier`, `Testimonial`, `FAQItem`). |
| **Tailwind CSS** | Utility-first styling (`^3.4.15`), dark mode class switching, custom brand tokens, responsive grid layouts. |
| **Vite** | Blazing-fast build tool and bundler (`^5.4.11`) configured with `@vitejs/plugin-react`. |
| **User Interactions** | Mobile drawer toggle, Dark/Light mode theme switch, Monthly/Annual pricing calculator, interactive code snippets, simulated live counter, FAQ accordion, lead capture form. |

---

## 🧩 Component Architecture

```text
src/
├── main.tsx                    # React 18 createRoot entry point
├── App.tsx                     # Main layout & theme management state
├── index.css                   # Tailwind directives & glassmorphic utility styles
├── types/
│   └── index.ts                # TypeScript interfaces & types
└── components/
    ├── Navbar.tsx              # Sticky blur nav, mobile hamburger drawer & theme switcher
    ├── Hero.tsx                # Catchy headline, CTA buttons, metrics badge & interactive dashboard preview
    ├── Features.tsx            # Responsive Tailwind CSS grid with interactive category filter pills
    ├── InteractiveDemo.tsx     # Code snippet language tabs (CLI / TypeScript / YAML) & live test run simulator
    ├── HowItWorks.tsx          # 3-step pipeline breakdown with icons & numbers
    ├── Pricing.tsx             # Dynamic Monthly vs Annual billing toggle with 20% discount calculation
    ├── Testimonials.tsx        # Customer review cards with 5-star ratings & user avatars
    ├── FAQ.tsx                 # Interactive accordion with smooth expandable answers
    ├── ContactCTA.tsx          # Free trial signup form with live client-side validation
    └── Footer.tsx              # Responsive 5-column footer with social links & copyright
```

---

## ⚡ User Interactions Included

1. **Dark / Light Mode Toggle**:
   - Persists state in `localStorage` and toggles `.dark` class on `<html>` with smooth transition animations.
2. **Responsive Mobile Navigation Drawer**:
   - Animated hamburger button, slide-in navigation drawer, and dismissible backdrop.
3. **Interactive Capability Filters (Features)**:
   - Filter capabilities by *All*, *Automation & Logic*, *Enterprise Security*, or *Edge Infrastructure*.
4. **Interactive Code & Simulator (InteractiveDemo)**:
   - Toggle between **CLI (Bash)**, **TypeScript SDK**, and **YAML Configuration**.
   - One-click copy snippet to clipboard with checkmark feedback.
   - "Test Run Pipeline" button that appends simulated real-time execution logs.
5. **Dynamic Pricing Calculator (Pricing)**:
   - Interactive Monthly vs Annual toggle updating the price from `$29` to `$23` (Save 20%).
6. **Expandable FAQ Accordion**:
   - Click to expand/collapse questions with animated rotating chevron indicator.
7. **Lead Capture / CTA Form**:
   - Email input with interactive instant confirmation state.

---

## 🚀 How to Run Locally

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```

### 3. Build for production
```bash
npm run build
```

---

## 🚢 Deployment

Configured for **Vercel** with `vercel.json`:
- **Framework**: `vite`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
