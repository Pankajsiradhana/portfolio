import { LINKS } from './links';

export const projects = [
    {
        id: "vybe",
        title: "VYBE",
        subtitle: "DRESS YOUR REALITY",
        description: "Built a brand-independent AI fashion platform from zero to live pre-launch product. No competitor offers what VYBE offers — not even Doji, who raised $14M for half the features.",
        chips: ['AI', 'Fashion Tech', 'Consumer SaaS', 'Growth'],
        links: LINKS.vybe
    },
    {
        id: "youtube-shorts",
        num: "02 — 2025",
        title: "YouTube Shorts Search",
        tags: ['Consumer', 'Retention'],
        description: "Diagnosed why YouTube Shorts search breaks after 5 videos and designed a 3-phase product fix with a defined north star metric.",
        links: LINKS.youtube
    },
    {
        id: "saas-churn",
        num: "03 — 2024",
        title: "SaaS Churn Intelligence",
        tags: ['Python', 'SQL'],
        description: "Cohort analysis on 2,000 users across 18 months. Built a risk-scoring model projecting 8–15% churn reduction and $144K+ ARR protection.",
        links: LINKS.saas
    },
    {
        id: "ai-review",
        num: "04 — 2024",
        title: "AI Smart Review System",
        tags: ['LLMs', 'NLP'],
        description: "Designed an AI pipeline processing 1,000+ e-commerce reviews per batch — categorising sentiment, flagging issues, surfacing merchant insights automatically.",
        links: LINKS.aiReview
    }
];

// VYBE DETAIL DATA
export const vybeMetadata = ['Founding Product Manager', 'Feb 2026', 'Fashion Tech', 'Consumer SaaS', 'Pre-Launch'];
export const vybeChips = ['AI', 'Fashion Tech', 'Consumer SaaS', 'Growth'];
export const vybeDecisions = [
    { title: 'Brand Independence as the Moat', text: 'Every competitor is locked to their own brand. VYBE lets users try on clothes from any brand — that\'s the differentiator nobody else has built.' },
    { title: 'Affiliate-First Monetization', text: 'Instead of inventory risk, VYBE monetizes through affiliate links. Users try on, click through, and buy from the brand. Zero inventory, pure margin.' },
    { title: 'Pre-Launch Validation First', text: 'Built a live website, collected waitlist signups, and validated demand before writing a single line of product code. De-risk early.' },
];
export const vybeMetrics = [
    { value: '$218B', label: 'Fashion returns market' },
    { value: '30–40%', label: 'Average fashion return rate' },
    { value: '$14M', label: 'Doji competitor funding (validation)' },
    { value: '5,000', label: 'Phase 0 waitlist target' },
];

// YOUTUBE SHORTS DETAIL DATA
export const ytMetadata = ['Product Improvement Case Study', '2025', 'Consumer', 'Retention'];
export const ytCauses = [
    'No search intent memory after video 4–5',
    'Recommendation engine optimised for browsing, not search',
    'No user control over search session continuation',
    'No topic clustering or session state management',
];
export const ytSolution = [
    { phase: 'Phase 1', time: '3–4 weeks', title: 'Keep Search Context Active', desc: 'Adjust algorithm weights to maintain search query context across the Shorts feed for at least 15 videos.' },
    { phase: 'Phase 2', time: '8–10 weeks', title: 'Give Users Control', desc: 'User toggle to stay in "search mode" vs "discovery mode". Let users decide when to leave their search session.' },
    { phase: 'Phase 3', time: '4–6 months', title: 'Smart Topic Clustering', desc: 'AI-driven topic session management that understands semantic relationships between content and user intent.' },
];

// SAAS CHURN DETAIL DATA
export const saasMetadata = ['Data', 'Analytics', 'Product Thinking', 'B2B SaaS', '2024'];
export const saasFindings = [
    { value: '2×', label: 'better retention', desc: 'Users completing onboarding retain at double the rate at Month 6' },
    { value: '40%', label: 'improvement', desc: 'Team invitation feature improves retention by 40%' },
    { value: '1,200', label: 'users', desc: 'Found sitting in At-Risk or Critical tier with no intervention' },
];
export const saasRecs = [
    'Redesign onboarding to ensure 100% completion of core setup steps',
    'Auto-prompt team invitations during first week — make collaboration the default',
    'Create intervention triggers for users entering At-Risk tier (usage drops, login gaps)',
    'Build a health-score dashboard visible to CS teams with real-time churn probability',
    'Launch re-engagement campaigns for the 1,200 users currently in silent churn risk',
];

// AI REVIEW DETAIL DATA
export const aiMetadata = ['AI Product', 'Automation', 'LLMs', 'NLP', '2024'];
export const aiTechStack = ['n8n', 'LLMs', 'NLP', 'Sentiment Analysis', 'API Integration', 'Automation Workflows'];
export const aiEval = [
    { title: 'Categorisation Accuracy', desc: 'How accurately the AI classifies reviews into correct sentiment and topic categories.' },
    { title: 'Hallucination Rate', desc: 'Percentage of generated insights that contain fabricated or unsupported information.' },
    { title: 'Cost per 1,000 Reviews', desc: 'Total API + compute cost to process one batch of 1,000 reviews end-to-end.' },
];
