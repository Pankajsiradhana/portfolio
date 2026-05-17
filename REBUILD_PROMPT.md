# PORTFOLIO RECONSTRUCTION PROMPT
> Use this prompt verbatim with any AI to recreate Pankaj Siradhana's portfolio exactly.

---

## TECH STACK
- React 18 + Vite
- Framer Motion (animations, page transitions)
- React Router DOM v6
- Tailwind CSS (utility classes only, mixed with inline styles)
- Lucide React (Menu, X icons in Navbar)
- Google Fonts: Bebas Neue, Syne (800), DM Sans

## DESIGN TOKENS (NEVER deviate)
- Background beige: `#F5F0E8`
- Dark green (primary): `#0A2E1A`
- Mid green: `#183324`
- Card green: `#0d2419`
- Accent yellow: `#FCEE0A`
- Body text on dark: `rgba(245,240,232,0.65)`
- Muted text on dark: `rgba(245,240,232,0.4)`
- Muted text on beige: `rgba(10,46,26,0.5)`

---

## FOLDER STRUCTURE
```
src/
├── assets/hero.jpg              ← user's portrait photo
├── components/
│   ├── common/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── CustomCursor.jsx
│   │   ├── ScrollReveal.jsx
│   │   └── PageTransition.jsx
│   ├── home/
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── SkillsSection.jsx
│   │   └── ContactSection.jsx
│   ├── work/
│   │   ├── VybeHeroCard.jsx
│   │   └── ProjectAccordion.jsx
│   ├── projects/
│   │   ├── ProjectHero.jsx
│   │   ├── MetricsRow.jsx
│   │   ├── ArtifactsRow.jsx
│   │   └── NextProject.jsx
│   └── RadarChart.jsx
├── data/
│   ├── skills.js
│   ├── links.js
│   └── projects.js
├── pages/
│   ├── Home.jsx
│   ├── Work.jsx
│   └── projects/
│       ├── Vybe.jsx
│       ├── YouTubeShorts.jsx
│       ├── SaasChurn.jsx
│       └── AIReview.jsx
├── styles/
│   ├── globals.css
│   ├── animations.css
│   └── components.css
├── App.jsx
└── main.jsx
```

---

## GLOBAL CSS (globals.css)
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --green: #0A2E1A;
  --green-mid: #183324;
  --beige: #F5F0E8;
  --yellow: #FCEE0A;
}

*, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
html { scroll-behavior: smooth; }
body { font-family: 'DM Sans', sans-serif; background: var(--beige); color: var(--green); cursor: none; overflow-x: hidden; -webkit-font-smoothing: antialiased; }
a, button, input, textarea, select { cursor: none; }

/* CURSOR */
.custom-cursor {
  position: fixed; top:0; left:0; width:14px; height:14px;
  background: #FCEE0A; border-radius: 50%; pointer-events: none;
  z-index: 99999; mix-blend-mode: normal; border: none;
  transition: width .15s ease, height .15s ease, transform .15s ease, background .15s ease, border .15s ease;
  transform: translate(-50%, -50%);
  display: flex; align-items: center; justify-content: center;
}
.custom-cursor.light-bg { border: 1.5px solid rgba(10,46,26,0.3); }
.custom-cursor.expanded { width: 44px; height: 44px; }
.custom-cursor .cursor-arrow { opacity:0; transition: opacity .15s ease; color: var(--green); font-size:16px; font-weight:700; }
.custom-cursor.expanded .cursor-arrow { opacity: 1; }

/* LAYOUT */
.container-main { max-width: 1280px; margin: 0 auto; padding: 0 52px; }
.section-padding { padding: 120px 0; }
@media (max-width:768px) { .container-main { padding: 0 20px; } .section-padding { padding: 80px 0; } }

/* TYPOGRAPHY */
.eyebrow { font-size:10px; text-transform:uppercase; letter-spacing:3px; opacity:0.5; }
.eyebrow-yellow { font-size:10px; text-transform:uppercase; letter-spacing:3px; color: var(--yellow); }

/* BUTTONS */
.btn-primary { background: #FCEE0A; color: #0A2E1A; padding:12px 28px; border-radius:100px; font-weight:700; font-size:14px; border:none; display:inline-flex; align-items:center; gap:6px; text-decoration:none; transition: transform .15s ease, box-shadow .15s ease; }
.btn-primary:hover { transform: scale(1.03); box-shadow: 0 8px 24px rgba(252,238,10,0.3); }
.btn-outlined { padding:8px 18px; border-radius:100px; border:1px solid rgba(245,240,232,0.25); color:rgba(245,240,232,0.7); font-size:11px; font-weight:600; text-decoration:none; display:inline-flex; align-items:center; gap:4px; transition: transform .15s ease, border-color .15s ease; background:transparent; }
.btn-outlined:hover { transform: scale(1.03); border-color: rgba(252,238,10,0.4); }
.btn-outlined-dark { padding:8px 20px; border-radius:100px; background: #0A2E1A; color: #F5F0E8; font-size:12px; font-weight:600; text-decoration:none; display:inline-flex; align-items:center; gap:4px; border:none; transition: transform .15s ease, box-shadow .15s ease; }
.btn-outlined-dark:hover { transform: scale(1.03); box-shadow: 0 6px 20px rgba(10,46,26,0.2); }

/* CARDS */
.card-hover { transition: transform .2s ease, box-shadow .2s ease; }
.card-hover:hover { transform: translateY(-3px); box-shadow: 0 12px 40px rgba(0,0,0,0.12); }
```

---

## COMPONENTS CSS (components.css)
Key classes:
- `.sr-hidden` → `opacity:0; transform:translateY(28px); transition: opacity .7s ease, transform .7s ease`
- `.sr-visible` → `opacity:1; transform:translateY(0)`
- `.pill-tag` → `font-size:9px; text-transform:uppercase; letter-spacing:1px; padding:4px 12px; border-radius:100px; border:1px solid rgba(10,46,26,0.25); color:rgba(10,46,26,0.55)`
- `.accordion-row` → bottom border, expands on click using `.expanded` class, max-height 0→500px transition
- `.accordion-icon` → circular +, rotates 45° on expand
- `.contact-row` → flex row with border, hover lifts + yellow border
- `.radar-card` → `background:#0A2E1A; border-radius:20px; padding:32px 28px; border:1px solid rgba(245,240,232,0.08)` — hover: `border-color rgba(252,238,10,0.2); translateY(-4px)`
- `.radar-axis-label` → `font-size:9px; text-transform:uppercase; letter-spacing:1.5px`; hover turns yellow
- `.radar-pill` → small dark bordered pill, hover turns yellow
- `.grid-overlay` → yellow dot grid background pattern `rgba(252,238,10,0.04)`, 24px grid

---

## DATA FILES

### src/data/skills.js
```js
export const heroWords = [
  { text: "I DON'T WAIT", delay: 0 },
  { text: "FOR THE TITLE.", delay: 0.1 },
  { text: "I BUILD.", delay: 0.2, highlight: true },
];
export const heroPills = ['Growth', 'AI Products', 'Data-Driven', 'Builder'];

export const skillCharts = [
  {
    id: "product", title: "Product Management",
    axes: [
      { label: 'Product Strategy', value: 0.9 },
      { label: 'Roadmapping', value: 0.9 },
      { label: 'Metrics Design', value: 0.8 },
      { label: 'User Research', value: 0.7 },
      { label: 'GTM Strategy', value: 0.7 },
    ],
    pills: ['Product Strategy','Roadmapping','PRDs & User Stories','Metrics Design','User Research','A/B Testing','Growth Loops','Stakeholder Management','Agile / Scrum','GTM Strategy']
  },
  {
    id: "data", title: "Data & AI",
    axes: [
      { label: 'SQL', value: 0.8 }, { label: 'Cohort Analysis', value: 0.8 },
      { label: 'Data Visualization', value: 0.7 }, { label: 'Python', value: 0.6 },
      { label: 'Statistical Analysis', value: 0.6 },
    ],
    pills: ['SQL','Cohort Analysis','Data Visualization','Python (Pandas · NumPy)','Statistical Analysis','Excel Advanced','Google Analytics','Forecasting']
  },
  {
    id: "growth", title: "Growth & Ops",
    axes: [
      { label: 'Agile / Jira', value: 0.9 }, { label: 'Figma', value: 0.8 },
      { label: 'LLMs & AI', value: 0.8 }, { label: 'GitHub', value: 0.6 },
      { label: 'n8n Automation', value: 0.5 },
    ],
    pills: ['Figma','Jira','Miro','LLMs & AI','Prompt Engineering','GitHub','n8n','API Integration','VS Code']
  }
];
```

### src/data/links.js
```js
export const LINKS = {
  resume: "https://docs.google.com/document/d/1pdh_3e6xpgclnz-jTAsIUkMI9RjC0oAh/edit?usp=sharing&ouid=101428883712660753917&rtpof=true&sd=true",
  vybe: {
    live: "https://vybe-flame.vercel.app/",
    caseStudy: "https://drive.google.com/file/d/1T3uXOY_oSrG_Y6sBV6C1IGeNqdi3GXBE/view?usp=sharing",
    prd: "https://drive.google.com/file/d/1_9F5PWhX2HGODbBQHh4CQIyb-9nzW5Hi/view?usp=sharing",
    teardown: "https://drive.google.com/file/d/1oqIT0b61ct5pfzFiFcU3-2D9Tdb9KID6/view?usp=drive_link",
    ppt: "https://docs.google.com/presentation/d/1aIG_L59pDxwatvzlaVlXo_5gonykrHwg/edit?usp=drive_link&ouid=101428883712660753917&rtpof=true&sd=true",
  },
  youtube: {
    caseStudy: "https://docs.google.com/document/d/1EyoO-GFphr5yGPnf0gTTL-pTV4GRUbNJ/edit?usp=drive_link&ouid=101428883712660753917&rtpof=true&sd=true",
    ppt: "https://docs.google.com/presentation/d/1-X-SJViDQHw6FR4u7Uhi3X9mGTLxae9H/edit?usp=drive_link&ouid=101428883712660753917&rtpof=true&sd=true"
  },
  saas: { github: "SAAS_GITHUB_LINK" },
  aiReview: { caseStudy: "AI_REVIEW_CASE_STUDY_LINK" },
  social: {
    linkedin: "http://www.linkedin.com/in/pankaj-siradhana-613a2a292",
    instagram: "https://www.instagram.com/pansorrr",
    email: "mailto:pankajsiradhana123@gmail.com",
    github: "YOUR_GITHUB_LINK",
  }
};
export const contactLinksData = [
  { icon:'✉', label:'EMAIL', value:'pankajsiradhana123@gmail.com', href:LINKS.social.email, external:false },
  { icon:'in', label:'LINKEDIN', value:'pankaj-siradhana', href:LINKS.social.linkedin, external:true },
  { icon:'IG', label:'INSTAGRAM', value:'@pansorrr', href:LINKS.social.instagram, external:true },
  { icon:'GH', label:'GITHUB', value:'Pankajsiradhana', href:LINKS.social.github, external:true },
];
```

### src/data/projects.js
```js
import { LINKS } from './links';

export const projects = [
  {
    id:"vybe", title:"VYBE", subtitle:"DRESS YOUR REALITY",
    description:"Built a brand-independent AI fashion platform from zero to live pre-launch product. No competitor offers what VYBE offers — not even Doji, who raised $14M for half the features.",
    chips:['AI','Fashion Tech','Consumer SaaS','Growth'],
    links: LINKS.vybe
  },
  {
    id:"youtube-shorts", num:"02 — 2025", title:"YouTube Shorts Search", tags:['Consumer','Retention'],
    description:"Diagnosed why YouTube Shorts search breaks after 5 videos and designed a 3-phase product fix with a defined north star metric.",
    links: LINKS.youtube
  },
  {
    id:"saas-churn", num:"03 — 2024", title:"SaaS Churn Intelligence", tags:['Python','SQL'],
    description:"Cohort analysis on 2,000 users across 18 months. Built a risk-scoring model projecting 8–15% churn reduction and $144K+ ARR protection.",
    links: LINKS.saas
  },
  {
    id:"ai-review", num:"04 — 2024", title:"AI Smart Review System", tags:['LLMs','NLP'],
    description:"Designed an AI pipeline processing 1,000+ e-commerce reviews per batch — categorising sentiment, flagging issues, surfacing merchant insights automatically.",
    links: LINKS.aiReview
  }
];
// VYBE detail data
export const vybeMetadata = ['Founding Product Manager','Feb 2026','Fashion Tech','Consumer SaaS','Pre-Launch'];
export const vybeChips = ['AI','Fashion Tech','Consumer SaaS','Growth'];
export const vybeDecisions = [
  { title:'Brand Independence as the Moat', text:'Every competitor is locked to their own brand. VYBE lets users try on clothes from any brand — that\'s the differentiator nobody else has built.' },
  { title:'Affiliate-First Monetization', text:'Instead of inventory risk, VYBE monetizes through affiliate links. Users try on, click through, and buy from the brand. Zero inventory, pure margin.' },
  { title:'Pre-Launch Validation First', text:'Built a live website, collected waitlist signups, and validated demand before writing a single line of product code. De-risk early.' },
];
export const vybeMetrics = [
  { value:'$550B', label:'Fashion returns market' },
  { value:'30–40%', label:'Average fashion return rate' },
  { value:'$14M', label:'Doji competitor funding (validation)' },
  { value:'5,000', label:'Phase 0 waitlist target' },
];
// YouTube Shorts detail
export const ytMetadata = ['Product Improvement Case Study','2025','Consumer','Retention'];
export const ytCauses = [
  'No search intent memory after video 4–5',
  'Recommendation engine optimised for browsing, not search',
  'No user control over search session continuation',
  'No topic clustering or session state management',
];
export const ytSolution = [
  { phase:'Phase 1', time:'3–4 weeks', title:'Keep Search Context Active', desc:'Adjust algorithm weights to maintain search query context across the Shorts feed for at least 15 videos.' },
  { phase:'Phase 2', time:'8–10 weeks', title:'Give Users Control', desc:'User toggle to stay in "search mode" vs "discovery mode".' },
  { phase:'Phase 3', time:'4–6 months', title:'Smart Topic Clustering', desc:'AI-driven topic session management that understands semantic relationships between content and user intent.' },
];
// SaaS Churn detail
export const saasMetadata = ['Data','Analytics','Product Thinking','B2B SaaS','2024'];
export const saasFindings = [
  { value:'2×', label:'better retention', desc:'Users completing onboarding retain at double the rate at Month 6' },
  { value:'40%', label:'improvement', desc:'Team invitation feature improves retention by 40%' },
  { value:'1,200', label:'users', desc:'Found sitting in At-Risk or Critical tier with no intervention' },
];
export const saasRecs = [
  'Redesign onboarding to ensure 100% completion of core setup steps',
  'Auto-prompt team invitations during first week — make collaboration the default',
  'Create intervention triggers for users entering At-Risk tier (usage drops, login gaps)',
  'Build a health-score dashboard visible to CS teams with real-time churn probability',
  'Launch re-engagement campaigns for the 1,200 users currently in silent churn risk',
];
// AI Review detail
export const aiMetadata = ['AI Product','Automation','LLMs','NLP','2024'];
export const aiTechStack = ['n8n','LLMs','NLP','Sentiment Analysis','API Integration','Automation Workflows'];
export const aiEval = [
  { title:'Categorisation Accuracy', desc:'How accurately the AI classifies reviews into correct sentiment and topic categories.' },
  { title:'Hallucination Rate', desc:'Percentage of generated insights that contain fabricated or unsupported information.' },
  { title:'Cost per 1,000 Reviews', desc:'Total API + compute cost to process one batch of 1,000 reviews end-to-end.' },
];
```

---

## ROUTING (App.jsx)
Routes: `/` → Home, `/work` → Work, `/project/vybe`, `/project/youtube-shorts`, `/project/saas-churn`, `/project/ai-review`. Wrap Routes in `<AnimatePresence mode="wait">`. Add ScrollToTop component (scrolls to 0,0 on pathname change). Render `<CustomCursor />`, `<Navbar />` above Routes, `<Footer />` below.

---

## NAVBAR
- Fixed pill floating at `top:20px`, centered horizontally
- Dark green background `#0A2E1A`, `border-radius:100px`, `padding:10px 12px`
- Logo: yellow circle with "PS" in Bebas Neue, links to `/`
- Nav items: About (scrolls to `#about`), Work (`/work`), Skills (scrolls to `#skills`), Contact (scrolls to `#contact`)
- Hover on nav item: background `#FCEE0A`, color `#0A2E1A`
- Active Work item stays highlighted yellow
- Mobile: hamburger icon (Lucide Menu/X), full-screen dark green overlay with large Syne 800 links at 32px

---

## HOME PAGE SECTIONS

### HERO SECTION (background: #F5F0E8)
- `minHeight: 100vh`, center vertically
- 2-col grid, `gap:60px`, `alignItems:center`
- **Left**: eyebrow "Product Manager · Bengaluru, India", pill tags (Growth, AI Products, Data-Driven, Builder), then animated `<h1>` using Framer Motion stagger — 3 lines in Bebas Neue `clamp(56px,10vw,120px)`, last line has yellow highlight on "BUILD.", body copy (16px, max-width 380px), two CTA buttons
- **Right** (`.hero-image-col`): card with `borderRadius:22px`, `aspectRatio:3/4`, `overflow:hidden`, `background:#183324` — contains `<img>` with `objectFit:cover; objectPosition:center top`, gradient overlay `rgba(10,46,26,0.55)` at bottom, bottom name strip ("Pankaj Siradhana / Product Manager · Builder")

### ABOUT SECTION (background: #0A2E1A, id="about")
- 2-col grid, `gap:60px`
- **Left**: eyebrow-yellow `// who is this guy`, headline "Curious. / Relentless. / Builder." in Syne 800 `clamp(40px,6vw,72px)` color `#F5F0E8`, 2 paragraphs of bio copy, yellow link "If that sounds like you — let's build something →"
- **Right**: aesthetic card (height 340, `#0d2419`), dot grid overlay, concentric SVG circles (decorative), 3 yellow glowing dot nodes, 2 connecting lines, 3 floating pill labels ("Product Thinking", "Data · Design", "Ship Fast"), bottom gradient with name/title

### SKILLS SECTION (background: #F5F0E8, id="skills")
- Eyebrow `// how I think & what I use`, h2 "Skills & Tools" Syne 800, subtext "Hover over each chart to explore the skills." (DM Sans 14px, `rgba(10,46,26,0.5)`)
- 3-column radar chart grid (class `radar-grid-layout`)
- Each column: `<RadarChart title data pills />`

### RADAR CHART (RadarChart.jsx)
- Pure SVG, pentagon shape (5 axes, 72° apart, starting at -90°)
- 5 concentric pentagon grid rings at 20/40/60/80/100% opacity `rgba(252,238,10,0.1)`
- 5 axis lines from center
- Axis label text pushed out from edge
- Data polygon: `fill rgba(252,238,10,0.15)`, `stroke #FCEE0A strokeWidth 2`, Framer Motion animate in (pathLength 0→1, fillOpacity 0→1)
- Per node: visible circle r=4 yellow with glow filter, invisible hit circle r=16 transparent for hover detection
- Hover shows yellow tooltip pill (Framer Motion AnimatePresence fade)
- Chart title in Syne 800 18px below SVG
- Skill pills row below title

### CONTACT SECTION (background: #0A2E1A, id="contact")
- 2-col grid `55% 45%`, `alignItems:start`, `gap:60px`
- **Left**: eyebrow-yellow `// let's build something`, h2 "Got a problem / worth solving? / Let's talk." Syne 800 `clamp(44px,7vw,88px)`, bio text, "Download Resume ↗" btn-primary, then contact link rows (Email, LinkedIn, Instagram, GitHub) each with icon box, label, value, and → arrow
- **Right**: CTA card `background:#183324`, `borderRadius:20px`, centered text "Let's Build / Something." Syne 800, subtitle "Bengaluru, India · Open to opportunities", full-width "Send it →" btn-primary

---

## WORK PAGE (background: #F5F0E8)
- Page header: `paddingTop:140px`, eyebrow `// things I've actually built`, h1 "Selected Work" Syne 800 `clamp(48px,8vw,100px)`
- **VYBE Hero Card** (VybeHeroCard.jsx): dark green section, large clickable card with `border:1px solid rgba(245,240,232,0.1)`, `borderRadius:22px`, `padding:48px`. 2-col layout inside: Left has chips, huge Bebas "VYBE" at 96px, subtitle "DRESS YOUR REALITY" in yellow, description, `VYBE.png` image with "AI Fashion Platform · Pre-Launch Product" label, action buttons. Right has "THE PROBLEM" and "MY ROLE — END TO END" with 5 bullet points.
- **Project Accordion** (ProjectAccordion.jsx): beige section, 3 expandable rows (YouTube Shorts, SaaS Churn, AI Review). Each row: number, title (Syne 800 `clamp(22px,3vw,36px)`), tags, small icon thumbnail, + icon. Expanded reveals description + "See Project →" button.

---

## PROJECT DETAIL PAGES

All pages use `<motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>` for page transition.

### Vybe.jsx
Sections:
1. **Hero** (beige): top metadata row, large "VYBE" Bebas Neue full-width, subtitle yellow, chips row
2. **Key Decisions** (dark green): 3-col card grid from `vybeDecisions`
3. **By the Numbers** (dark green): 4-col metric grid from `vybeMetrics` (Bebas Neue 52px yellow value)
4. **Artifacts** (beige): buttons (Live Site primary, Case Study/PRD/Teardown/Presentation outlined-dark), Next Project link

### YouTubeShorts.jsx
Sections:
1. Hero (beige): metadata, large title, description
2. Root Causes (dark green): 2-col grid of 4 causes with large Bebas number decorators
3. 3-Phase Solution (dark green): 3 cards each with phase badge + timeline badge
4. Artifacts (beige): buttons, Next Project link

### SaasChurn.jsx
Sections:
1. Hero (beige): metadata, title
2. Key Findings (dark green): 3 stat cards from `saasFindings` (Bebas 64px value)
3. 5 Product Recommendations (dark green): vertical list with number decorators
4. Artifacts (beige): GitHub Repo button, Next Project link

### AIReview.jsx
Sections:
1. Hero (dark green section then beige for metadata)
2. Tech Stack pills
3. Evaluation Framework: 3 cards from `aiEval`
4. Artifacts: Case Study button (disabled/greyed out, "Coming Soon")

---

## CUSTOM CURSOR
- `position:fixed`, yellow circle 14px, z-index 99999, `transform:translate(-50%,-50%)`
- Tracks `window.mousemove` for position
- Expands to 44px on hover over `a, button, .card-hover, .accordion-row, .contact-row, .skill-tag`
- Shows `↗` arrow when expanded
- Detects light background (#F5F0E8 sections) via `elementFromPoint` → adds thin dark border
- Uses MutationObserver to re-bind hover listeners as DOM changes

## SCROLL REVEAL
- IntersectionObserver wrapper component
- Adds `.sr-hidden` (opacity 0, translateY 28px) to all `.sr-item` children
- On intersection: stagger removes `.sr-hidden`, adds `.sr-visible` with setTimeout
- Default stagger: 0.1s per item

## FOOTER
- Background `#F5F0E8`, border-top `rgba(10,46,26,0.1)`, `padding:20px 52px`
- Left: "© 2026 Pankaj Siradhana"
- Right: italic "Built with intention. Shipped with speed. ✦"

---

## RESPONSIVE RULES
- `@media (max-width:768px)`: hero-grid, about-grid, contact-grid → 1 column. Hero image col goes to top (`order:-1`), max-width 320px. Radar grid → 1 col. Accordion header cols tighten.
- `@media (769px–1280px)`: hero-grid stays 2 col

---

## ANIMATIONS
- Hero h1 words: stagger y:30→0 opacity:0→1, each 0.6s delay 0/0.1/0.2s
- Radar data polygon: pathLength 1.2s easeOut, fillOpacity 0.8s delay 0.4s
- Radar nodes: scale 0→1 per node with delay 0.8+i*0.1s
- Scroll reveal: opacity + translateY stagger 0.1s per `.sr-item`
- Accordion: max-height 0→500px cubic-bezier(0.4,0,0.2,1) 0.4s
- Page transitions: opacity 0→1, 0.3s easeInOut via Framer Motion AnimatePresence

---

*Replace all placeholder links (VYBE_LIVE_SITE_LINK, etc.) with actual URLs before deployment.*
*Add hero.jpg to src/assets/ — portrait photo, will display with objectFit:cover objectPosition:center top.*
