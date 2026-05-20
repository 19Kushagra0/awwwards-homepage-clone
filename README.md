# 🏆 Awwwards Homepage Clone — Daydream Player SOTD

A highly polished, responsive, and pixel-perfect clone of the **Awwwards Site of the Day (SOTD)** detail page, showcasing the award-winning project **"Daydream Player"** by Bukvity Lorisz. 

This repository leverages modern **React (v19)** and modular **Vanilla CSS** to replicate the exact aesthetic, rich micro-interactions, responsive navigation drawer, and hover-triggered dynamic media elements characteristic of the premium Awwwards user experience.

---

## 🌟 Interactive Features

*   **⚡ Active Hover Video Showcases (`Elements.jsx`):** Interactive media grid showcasing highlights of the SOTD. Hovering (`onMouseEnter`) over any video element automatically triggers smooth video playback, and leaving (`onMouseLeave`) pauses it instantly.
*   **🧭 Dynamic Side Drawer Menu (`Header.jsx`):** A fully responsive hamburger navigation system featuring a side-drawer overlay and nested accordion menus (Awards, Categories, Technologies, and Collections) with smooth expand/collapse transitions.
*   **📜 Dynamic Scroll Header (`Scrollheader.jsx`):** A smart floating header that reveals itself dynamically after scrolling past `1000px` to keep critical actions (Bookmark, Share, External Link) and creator details readily accessible.
*   **🎨 Dynamic Brand Identification (`ColorPalette.jsx`):** Showcases the exact high-contrast primary hex color palette (#EE4137) of the featured project.
*   **📱 Fully Responsive Layout:** Graceful adaptation across ultra-wide desktops, standard laptops, tablets, and mobile screens.

---

## 📂 Codebase & Folder Structure

Below is the structured layout of the project, highlighting the role and purpose of each folder and source file:

```directory
awwwards-homepage-clone/
├── public/                     # Static assets, HTML shell, and manifest
│   ├── index.html              # Main HTML entry file
│   └── favicon.ico             # Application icon
├── src/                        # Core Application Source Code
│   ├── assets/                 # Local images, icons, and graphic assets
│   ├── myComponents/           # Modular React Functional Components
│   │   ├── Collections.jsx     # Visual showcase of related design collections
│   │   ├── ColorPalette.jsx    # Displays the color system used in the SOTD
│   │   ├── Description.jsx     # SOTD description card with retro nostalgia details
│   │   ├── Elements.jsx        # Video showcase grid with hover play/pause effects
│   │   ├── Footer.jsx          # Comprehensive, multi-column responsive footer
│   │   ├── Header.jsx          # Top navbar + slide-out interactive hamburger menu
│   │   ├── Inside.jsx          # Desktop & Mobile preview layout cards
│   │   ├── Latest.jsx          # Optional section for recent submissions
│   │   ├── Scrollheader.jsx    # Sticky floating header triggered on page scroll
│   │   ├── TechUsed.jsx        # Badges list showing technologies and category tags
│   │   ├── Title.jsx           # Hero banner featuring site title, creator profile, & cover
│   │   └── Toolbar.jsx         # Sticky score indicators and action controls
│   ├── styles/                 # Component-specific Vanilla CSS Stylesheets
│   │   ├── Collections.css     # Styling for grids, flex-wrappers, and user badges
│   │   ├── ColorPalette.css    # Layout for the HEX color sample and contrast texts
│   │   ├── Description.css     # Typography adjustments for readability
│   │   ├── Elements.css        # Interactive hover grid styling and video scaling
│   │   ├── Footer.css          # Multi-column grid, responsive layout blocks, and links
│   │   ├── Header.css          # Navigation bar, hamburger animation, & drawer accordions
│   │   ├── Inside.css          # Thumbnail boxes with zoom-on-hover card styles
│   │   ├── Latest.css          # Layout variables for the latest additions section
│   │   ├── Scrollheader.css    # Sticky bar styles with top slide-in transition
│   │   ├── TechUsed.css        # Flexible wraps, pill-shaped tags, and active states
│   │   ├── Title.css           # Hero section spacing, cover layouts, and overlays
│   │   └── Toolbar.css         # Rating score circle, absolute placement, and icons
│   ├── App.css                 # Global application layout wrappers
│   ├── App.jsx                 # Core orchestrator component mounting sections
│   ├── App.test.jsx            # Test suite for verifying component mounts
│   ├── index.css               # Base styles, typography imports, and custom resets
│   ├── index.jsx               # Entry-point rendering React component tree
│   ├── reportWebVitals.js      # Core web vitals performance monitoring
│   └── setupTests.js           # Configuration setting up Jest testing environments
├── package.json                # Project dependencies, scripts, and ESLint config
└── README.md                   # Project documentation (You are here!)
```

### 🧱 Functional Component Breakdown

1.  **`App.jsx`**: Act as the master template. It orchestrates the vertical layout by mounting sections in the exact logical order of the original Awwwards detail flow.
2.  **`Header.jsx`**: Handles the application's header and responsive navigation. It manages React state to toggle a beautiful slide-in drawer and nested accordions for categories and tools.
3.  **`Scrollheader.jsx`**: Listens to the window scroll event. It dynamically attaches and detaches based on scroll position (`> 1000px`), transitioning a clean action bar from the top of the viewport.
4.  **`Elements.jsx`**: Renders dynamic grid boxes containing high-definition screen captures of the SOTD in action. Features hover-activated video playback utilizing native HTML5 video handlers.
5.  **`ColorPalette.jsx`**: Graphically details the brand-accent color palette used by the designer, complete with quick copy values and typographical examples.
6.  **`TechUsed.jsx`**: Outlines the tags, categories, and frameworks (e.g., Next.js, Parallax, Storytelling) associated with the project in a modular pill format.

---

## 🛠️ Styling Strategy

The project employs **Vanilla CSS** with component-level division:
*   **Typography:** Leverages premium, high-readability sans-serif fonts imported inside `index.css`.
*   **Flexibility:** Uses standard CSS Flexbox and CSS Grid layout models to ensure a completely fluid responsive design without external libraries.
*   **Smooth Animations:** Integrates subtle keyframe-animations and property transitions for micro-interactions (e.g., hover effects, sliding drawers, and fading menus) to match Awwwards' premium UX standard.

---

## 🚀 Getting Started

Follow these instructions to set up the project locally on your machine.

### 📋 Prerequisites

Ensure you have **Node.js** (v18 or higher recommended) and **npm** installed.
```bash
node -v
npm -v
```

### 📥 Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/19Kushagra0/awwwards-homepage-clone.git
   ```
2. Navigate into the project folder:
   ```bash
   cd awwwards-homepage-clone
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```

### 🏃 Available Commands

In the project root, you can execute the following scripts:

#### `npm start`
Runs the application in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will hot-reload automatically when source files are modified.

#### `npm run build`
Builds the production-ready package inside the `build` directory.  
It correctly bundles React in production mode and optimizes the build structure for the absolute best performance, ready to be deployed to platforms like Vercel, Netlify, or GitHub Pages.

#### `npm test`
Launches the interactive test runner (Jest) in watch mode, making it simple to write and run component assertions.

---

## 💻 Tech Stack & Integrations

*   **Framework:** React 19 (Functional components, Hooks, and State Management)
*   **Styling:** Modern Vanilla CSS (Custom resets, CSS Custom Properties / Variables)
*   **Icons:** Google Material Symbols (Outlined)
*   **Build Engine:** React Scripts / Create React App

---

## 🌟 Acknowledgement

Inspired by the exceptional design standards of the **[Awwwards](https://www.awwwards.com)** platform. All assets, video clips, and designs remain the intellectual property of Awwwards and the respective designer, **Bukvity Lorisz**. Clone developed for educational, portfolio, and UI engineering demonstration purposes.
