# FIU Rankings Dashboard

A responsive, single-page React app showcasing Florida International University’s highest-ever academic rankings and upward economic mobility metrics. Built with Create React App for zero-config setup and optimized performance.

---

## Tech Stack & Tools

| Layer                | Technology / Tool                    |
| -------------------- | ------------------------------------ |
| **UI Library**       | React (functional components)        |
| **Styling**          | Tailwind CSS (utility-first CSS)     |
| **Project Setup**    | Create React App (react-scripts)     |
| **Linting & Format** | ESLint , Prettier                    |
| **Version Control**  | Git & GitHub                         |
| **Hosting**          | Vercel                               |

---

## Features

- **Academic Value** section highlighting top ROI and university rankings
- **Economic Mobility** section showcasing minority-serving institution statistics
- Responsive
- Accessible markup (ARIA labels, proper semantic tags)

## Installation

---

1. **Clone the repo**
   ```bash
   git clone https://github.com/SowmithSripadi/Assessment2.git
   cd Assessment2
   ```
2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm start
   ```

4. **Build for production**

   ```bash
   npm run build
   ```

---

## Components Overview

- **`Hero`**
  Showcasing FIU’s tagline and #4 ranking by Wall Street Journal with decorative gradient overlay and responsive callout image
- **`AnchorNav`**
  “On this page” navigation for smooth scrol
- **`AcademicValue`**
  Displays university rankings grid
- **`EconomicMobility`**
  Highlights minority-serving institution stats
- **`SectionHeading`**
  Shared heading component with an anchored divider
- **`Footer`** with FIU logo, navigation links, and social media icons
