# Bioldea – Computational Biotechnology Platform

A modern, animation-driven landing page built for a theoretical computational biology firm. 

## ⚙️ Setup Instructions

To run this project locally, ensure Node.js is installed on the machine.

1. **Clone the repository:**
   
       git clone <your-github-repo-url>
       cd biotech-landing

2. **Install dependencies:**
   
       npm install

3. **Start the development server:**
   
       npm run dev
   
   The application will be available at http://localhost:5173.

---

## 🎨 Design & Animation Approach

### Visual Identity & Custom Assets (Blender)

The objective was to create a site that feels premium and strictly data-driven, bypassing the cliché of stock photos featuring scientists holding test tubes. A strict design constraint was applied to the project: absolutely no living beings, humans, or animals are depicted. 

To achieve this, all abstract geometric background videos and particle network animations were rendered from scratch using **Blender**. This approach provided complete control over the visual identity, ensuring the assets perfectly matched the dark-mode aesthetic and the specific indigo/emerald color palette that I chose. 

### Layout Architecture

The structure transitions from a standard hero section into a "bento-box" grid layout for the Core Capabilities and Statistics sections. Tailwind CSS Grid (grid-cols-12 and auto-stacking columns) was heavily utilized because it handles complex responsive breakpoints (mobile, tablet, desktop) incredibly cleanly without the need to write custom media queries.

### Animation Strategy

Drawing from my experience of declarative UI and independent state management architectures, React and Framer Motion were selected to handle the component lifecycles and micro-interactions. 

* **Performance over WebGL:** Instead of forcing a heavy WebGL/Three.js canvas load for the 3D elements, the Blender renders were exported as standard HTML5 video loops. By applying the CSS mix-blend-screen property, the black backgrounds of the videos become completely transparent. This creates a complex 3D effect directly in the DOM with a fraction of the performance cost.
* **Scroll Reveals:** Framer Motion's whileInView and staggerChildren properties were utilized to create smooth, cascading entry animations that trigger naturally as the user scrolls down the page. 
* **Micro-Interactions:** The interactive feedback (such as the scaling capability cards and the sliding button arrows) relies purely on Tailwind's group-hover utilities. This keeps the state logic simple and the UI highly responsive.
