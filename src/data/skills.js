export const heroWords = [
    { text: "I DON'T WAIT", delay: 0 },
    { text: "FOR THE TITLE.", delay: 0.1 },
    { text: "I BUILD.", delay: 0.2, highlight: true },
];

export const heroPills = ['Growth', 'AI Products', 'Data-Driven', 'Builder'];

export const skillCharts = [
    {
        id: "product",
        title: "Product Management",
        axes: [
            { label: 'Product Strategy', value: 0.9 },
            { label: 'Roadmapping', value: 0.9 },
            { label: 'Metrics Design', value: 0.8 },
            { label: 'User Research', value: 0.7 },
            { label: 'GTM Strategy', value: 0.7 },
        ],
        pills: [
            'Product Strategy', 'Roadmapping', 'PRDs & User Stories', 'Metrics Design',
            'User Research', 'A/B Testing', 'Growth Loops', 'Stakeholder Management',
            'Agile / Scrum', 'GTM Strategy'
        ]
    },
    {
        id: "data",
        title: "Data & AI",
        axes: [
            { label: 'SQL', value: 0.8 },
            { label: 'Cohort Analysis', value: 0.8 },
            { label: 'Data Visualization', value: 0.7 },
            { label: 'Python', value: 0.6 },
            { label: 'Statistical Analysis', value: 0.6 },
        ],
        pills: [
            'SQL', 'Cohort Analysis', 'Data Visualization',
            'Python (Pandas · NumPy)', 'Statistical Analysis',
            'Excel Advanced', 'Google Analytics', 'Forecasting'
        ]
    },
    {
        id: "growth",
        title: "Growth & Ops",
        axes: [
            { label: 'Agile / Jira', value: 0.9 },
            { label: 'Figma', value: 0.8 },
            { label: 'LLMs & AI', value: 0.8 },
            { label: 'GitHub', value: 0.6 },
            { label: 'n8n Automation', value: 0.5 },
        ],
        pills: [
            'Figma', 'Jira', 'Miro', 'LLMs & AI',
            'Prompt Engineering', 'GitHub', 'n8n',
            'API Integration', 'VS Code'
        ]
    }
];
