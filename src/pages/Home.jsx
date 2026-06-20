import { useState, useEffect } from 'react';
import PageTransition from '../components/common/PageTransition';
import ScrollReveal from '../components/common/ScrollReveal';
import SlidePanel from '../components/common/SlidePanel';
import heroPhoto from '../assets/hero.svg'; // Or any available photo
import vybeImage from '../assets/VYBE.png';
import Vybe from './projects/Vybe';
import YouTubeShorts from './projects/YouTubeShorts';
import SaasChurn from './projects/SaasChurn';
import AIReview from './projects/AIReview';

// Reusable 4-pointed sparkle
function Sparkle({ size = 20, color = '#F9A825', className = '' }) {
    return (
        <span className={`sparkle-star ${className}`} style={{ width: size, height: size, display: 'inline-block' }}>
            <svg viewBox="0 0 24 24" width={size} height={size}>
                <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4Z" fill={color} />
            </svg>
        </span>
    );
}

// Reusable static radar chart visual inside the new dark card
function SkillCard({ title, radarLabels, tags }) {
    return (
        <div className="v2-skill-card hover-shift">
            {/* Top right spark/dot */}
            <div style={{ position: 'absolute', top: 20, left: 20, width: 8, height: 8, borderRadius: '50%', background: '#F9A825' }}></div>

            {/* Radar Chart */}
            <div style={{ position: 'relative', width: '100%', height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                {/* Labels */}
                <span className="radar-label" style={{ top: 0, left: '50%', transform: 'translateX(-50%)' }}>{radarLabels[0]}</span>
                <span className="radar-label" style={{ top: '35%', right: 10 }}>{radarLabels[1]}</span>
                <span className="radar-label" style={{ bottom: 20, right: 30 }}>{radarLabels[2]}</span>
                <span className="radar-label" style={{ bottom: 20, left: 30 }}>{radarLabels[3]}</span>
                <span className="radar-label" style={{ top: '35%', left: 10 }}>{radarLabels[4]}</span>

                <svg width="160" height="160" viewBox="0 0 100 100" style={{ transform: 'rotate(-18deg)' }}>
                    {/* Background rings */}
                    <polygon points="50,10 90,35 75,85 25,85 10,35" fill="none" stroke="rgba(244,240,234,0.1)" strokeWidth="1"/>
                    <polygon points="50,25 75,45 65,75 35,75 25,45" fill="none" stroke="rgba(244,240,234,0.1)" strokeWidth="1"/>
                    {/* Spoke lines */}
                    <line x1="50" y1="50" x2="50" y2="10" stroke="rgba(244,240,234,0.1)" strokeWidth="1" />
                    <line x1="50" y1="50" x2="90" y2="35" stroke="rgba(244,240,234,0.1)" strokeWidth="1" />
                    <line x1="50" y1="50" x2="75" y2="85" stroke="rgba(244,240,234,0.1)" strokeWidth="1" />
                    <line x1="50" y1="50" x2="25" y2="85" stroke="rgba(244,240,234,0.1)" strokeWidth="1" />
                    <line x1="50" y1="50" x2="10" y2="35" stroke="rgba(244,240,234,0.1)" strokeWidth="1" />
                    {/* Data Polygon */}
                    <polygon points="50,20 85,40 60,80 30,70 15,35" fill="rgba(249,168,37,0.15)" stroke="#F9A825" strokeWidth="1.5" strokeLinejoin="round"/>
                    {/* Data points */}
                    <circle cx="50" cy="20" r="2.5" fill="#F9A825" />
                    <circle cx="85" cy="40" r="2.5" fill="#F9A825" />
                    <circle cx="60" cy="80" r="2.5" fill="#F9A825" />
                    <circle cx="30" cy="70" r="2.5" fill="#F9A825" />
                    <circle cx="15" cy="35" r="2.5" fill="#F9A825" />
                </svg>
            </div>

            {/* Title */}
            <h3 className="v2-skill-title">{title}</h3>

            {/* Tags Grid */}
            <div className="v2-skill-tags">
                {tags.map(t => (
                    <span key={t} className="v2-skill-tag">{t}</span>
                ))}
            </div>
        </div>
    );
}

export default function Home() {
    const [panelOpen, setPanelOpen] = useState(false);
    const [panelContent, setPanelContent] = useState({ title: '', content: null });

    const openPanel = (title, content) => {
        setPanelContent({ title, content });
        setPanelOpen(true);
    };

    // Parallax logic for background outlined typography
    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll('.parallax-text');
            const scrolled = window.scrollY;
            elements.forEach((el, index) => {
                const speed = 0.15 + (index * 0.05);
                el.style.transform = `translateY(${scrolled * speed}px)`;
            });
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <PageTransition>
            {/* ════════ A. THE HERO BLOCK (Deep Green) ════════ */}
            <section className="v2-hero">
                <div className="v2-hero-bg">
                    {/* Background Layer: Outlined Typography Parallax */}
                    <div className="v2-hero-outline-stack">
                        <div className="v2-outline-word parallax-text">PRODUCT</div>
                        <div className="v2-outline-word parallax-text">PRODUCT</div>
                        <div className="v2-outline-word parallax-text">PRODUCT</div>
                        <div className="v2-outline-word parallax-text">PRODUCT</div>
                    </div>
                </div>

                <div className="container-main v2-hero-content">
                    <div className="v2-hero-grid">
                        {/* Visual Element: Orange Container */}
                        <div className="v2-hero-image-box">
                            <div className="v2-hero-image-inner">
                                <img src={heroPhoto} alt="Pankaj Siradhana" />
                            </div>
                            <div className="v2-hero-sparkle top-left">
                                <Sparkle size={32} color="#F9A825" className="twinkle-anim" />
                            </div>
                            <div className="v2-hero-sparkle bottom-right">
                                <Sparkle size={24} color="#F9A825" className="twinkle-anim" />
                            </div>
                        </div>

                        {/* Headline */}
                        <div className="v2-hero-headline-wrap">
                            <h1 className="v2-hero-headline">
                                PRODUCTS AREN'T BUILT BY CHANCE
                            </h1>
                        </div>
                    </div>

                    {/* Subtext Banner & Social Tags */}
                    <div className="v2-hero-bottom-row">
                        <div className="v2-subtext-banner">
                            <p>I combine data, user insights, and execution to build products people love.</p>
                        </div>
                        <div className="v2-hero-social">
                            <a href="https://linkedin.com/in/pankaj-siradhana" target="_blank" rel="noopener noreferrer">LI: /pankaj-siradhana</a>
                            <a href="https://github.com/Pankajsiradhana" target="_blank" rel="noopener noreferrer">GH: Pankajsiradhana</a>
                        </div>
                    </div>
                </div>

                {/* Circular Scroll Trigger */}
                <div className="v2-scroll-trigger hover-shift">
                    Scroll<br/>down
                </div>
            </section>

            {/* ════════ B. INTRO & FRAMEWORK BLOCK (Cream) ════════ */}
            <section id="about" className="v2-intro-section">
                <div className="container-main">
                    <div className="v2-intro-grid">
                        <ScrollReveal>
                            <div className="v2-intro-left">
                                <h2 className="v2-intro-title">Hello, I'm Pankaj!</h2>
                                <p className="v2-intro-bio">
                                    <strong>Curious. Relentless. Builder.</strong><br/>
                                    Based in Bengaluru, I'm a product thinker who got tired of waiting for permission to do PM work and just started doing it.
                                </p>
                                <div className="v2-intro-actions">
                                    <button className="v2-pill-btn orange hover-shift" onClick={() => document.getElementById('work-section').scrollIntoView({ behavior: 'smooth' })}>
                                        See My Work
                                    </button>
                                    <a href="mailto:Pankajsiradhana22@gmail.com" className="v2-pill-btn yellow hover-shift">
                                        Let's Collab
                                    </a>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            {/* Interactive Framework Chart (Dashboard style) */}
                            <div className="v2-framework-chart">
                                <div className="framework-header">
                                    <div className="dots"><span></span><span></span><span></span></div>
                                    <span className="title">System Architecture</span>
                                </div>
                                <div className="framework-body">
                                    <div className="fw-node main-node">Product Thinking</div>
                                    <div className="fw-lines">
                                        <svg width="100%" height="40">
                                            <path d="M 50%,0 L 25%,40 M 50%,0 L 75%,40" stroke="rgba(30,53,47,0.2)" strokeWidth="2" fill="none" />
                                        </svg>
                                    </div>
                                    <div className="fw-row">
                                        <div className="fw-node sub-node">Ship Fast</div>
                                        <div className="fw-node sub-node">Data & Design</div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* ════════ C. SELECTED WORK & PROJECT GRID (Cream) ════════ */}
            <section id="work-section" className="v2-work-section">
                <div className="container-main">
                    <ScrollReveal>
                        <h2 className="v2-section-heading">Projects</h2>
                    </ScrollReveal>
                    
                    <div className="v2-work-grid">
                        {/* Left Column: Featured Project VYBE (Amber Box) */}
                        <ScrollReveal>
                            <div className="v2-vybe-box">
                                <div className="vybe-label">FEATURED PROJECT</div>
                                <h3>VYBE</h3>
                                <h4>Dress Your Reality</h4>
                                
                                <div className="vybe-image-container" style={{ marginBottom: 24, borderRadius: 8, overflow: 'hidden', border: '1px solid rgba(30,53,47,0.1)' }}>
                                    <img src={vybeImage} alt="VYBE Project" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                
                                <div className="vybe-content-blocks">
                                    <div className="vybe-block white-block">
                                        <strong>Core Problem:</strong> $550B fashion return problem. Nobody knows how clothes fit on their body before buying.
                                    </div>
                                    <div className="vybe-block black-block">
                                        <strong>Product Vision:</strong> Brand-independent virtual try-on. Full PRD, competitive teardown, pre-launch validation.
                                    </div>
                                </div>

                                <div className="vybe-actions" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: 'auto' }}>
                                    <button className="v2-pill-btn dark hover-shift" style={{ background: '#0F2018', color: '#F9A825' }} onClick={() => window.open('https://vybe-flame.vercel.app/', '_blank')}>
                                        Live Site ↗
                                    </button>
                                    <button className="v2-pill-btn dark-outline hover-shift" onClick={() => openPanel('VYBE', <Vybe />)}>
                                        Case Study ↗
                                    </button>
                                    <button className="v2-pill-btn dark-outline hover-shift" onClick={() => openPanel('VYBE PRD', <Vybe />)}>
                                        PRD ↗
                                    </button>
                                    <button className="v2-pill-btn dark-outline hover-shift" onClick={() => openPanel('VYBE Teardown', <Vybe />)}>
                                        Teardown ↗
                                    </button>
                                    <button className="v2-pill-btn dark-outline hover-shift" onClick={() => openPanel('VYBE Presentation', <Vybe />)}>
                                        Presentation ↗
                                    </button>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Right Column: Timeline Rows */}
                        <ScrollReveal>
                            <div className="v2-projects-timeline">
                                {/* YouTube Shorts */}
                                <div className="v2-timeline-row">
                                    <div className="timeline-node"><Sparkle size={16} color="#D85A38" className="twinkle-anim" /></div>
                                    <div className="timeline-year">2026</div>
                                    <div className="timeline-info">
                                        <h4>YouTube Shorts Search</h4>
                                        <p>Diagnosed search breaking points after 5 videos. Proposed search intent preservation.</p>
                                    </div>
                                    <div className="timeline-action">
                                        <button className="v2-link-btn" onClick={() => openPanel('YouTube Shorts Search', <YouTubeShorts />)}>
                                            Teardown ↗
                                        </button>
                                    </div>
                                </div>

                                {/* SaaS Churn */}
                                <div className="v2-timeline-row">
                                    <div className="timeline-node"><Sparkle size={16} color="#D85A38" className="twinkle-anim" /></div>
                                    <div className="timeline-year">2026</div>
                                    <div className="timeline-info">
                                        <h4>SaaS Churn Intelligence</h4>
                                        <p>Cohort analysis on 2,000 users across 18 months to predict silent churn.</p>
                                    </div>
                                    <div className="timeline-action">
                                        <button className="v2-link-btn" onClick={() => openPanel('SaaS Churn Intelligence', <SaasChurn />)}>
                                            Case Study ↗
                                        </button>
                                    </div>
                                </div>

                                {/* AI Smart Review */}
                                <div className="v2-timeline-row">
                                    <div className="timeline-node"><Sparkle size={16} color="#D85A38" className="twinkle-anim" /></div>
                                    <div className="timeline-year">2026</div>
                                    <div className="timeline-info">
                                        <h4>AI Smart Review System</h4>
                                        <p>Automated n8n + LLM pipeline processing 1000+ e-commerce reviews.</p>
                                    </div>
                                    <div className="timeline-action">
                                        <button className="v2-link-btn" onClick={() => openPanel('AI Smart Review', <AIReview />)}>
                                            Case Study ↗
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* ════════ D. INTERACTIVE SKILLS & TOOLS (3-Card Layout) ════════ */}
            <section id="skills" className="v2-skills-section">
                <div className="container-main">
                    <ScrollReveal>
                        <h2 className="v2-section-heading">Skills & Tools</h2>
                        <p style={{ color: 'rgba(30,53,47,0.6)', marginBottom: 40, fontFamily: '"Space Grotesk", sans-serif', fontSize: 13 }}>
                            Hover over each chart to explore the skills.
                        </p>
                    </ScrollReveal>

                    <div className="v2-radar-grid">
                        <ScrollReveal>
                            <SkillCard 
                                title="Product Management"
                                radarLabels={['PRODUCT STRATEGY', 'ROADMAPPING', 'METRICS DESIGN', 'USER RESEARCH', 'GTM STRATEGY']}
                                tags={['PRODUCT STRATEGY', 'ROADMAPPING', 'PRDS & USER STORIES', 'METRICS DESIGN', 'USER RESEARCH', 'A/B TESTING', 'GROWTH LOOPS', 'STAKEHOLDER MANAGEMENT', 'AGILE / SCRUM', 'GTM STRATEGY']}
                            />
                        </ScrollReveal>
                        <ScrollReveal>
                            <SkillCard 
                                title="Data & AI"
                                radarLabels={['SQL', 'COHORT ANALYSIS', 'DATA VISUALIZATION', 'PYTHON', 'STATISTICAL ANALYSIS']}
                                tags={['SQL', 'COHORT ANALYSIS', 'DATA VISUALIZATION', 'PYTHON (PANDAS - NUMPY)', 'STATISTICAL ANALYSIS', 'EXCEL ADVANCED', 'GOOGLE ANALYTICS', 'FORECASTING']}
                            />
                        </ScrollReveal>
                        <ScrollReveal>
                            <SkillCard 
                                title="Growth & Ops"
                                radarLabels={['AGILE / JIRA', 'FIGMA', 'LLMS & AI', 'GITHUB', 'N8N AUTOMATION']}
                                tags={['FIGMA', 'JIRA', 'MIRO', 'LLMS & AI', 'PROMPT ENGINEERING', 'GITHUB', 'N8N', 'API INTEGRATION', 'VS CODE']}
                            />
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* ════════ E. FOOTER & CONTACT ════════ */}
            <section id="contact" className="v2-footer">
                <div className="container-main" style={{ textAlign: 'center' }}>
                    <ScrollReveal>
                        <h2 className="v2-footer-heading">Got a problem worth solving?<br/>Let's talk.</h2>
                        
                        <div className="v2-contact-rows">
                            <a href="mailto:Pankajsiradhana22@gmail.com" className="v2-contact-row hover-invert">
                                <span>Email</span>
                                <span className="arrow">→</span>
                            </a>
                            <a href="www.linkedin.com/in/pankaj-siradhana-613a2a292" target="_blank" rel="noopener noreferrer" className="v2-contact-row hover-invert">
                                <span>LinkedIn</span>
                                <span className="arrow">→</span>
                            </a>
                            <a href="https://www.instagram.com/pankajsiradhana__22" className="v2-contact-row hover-invert">
                                <span>Instagram</span>
                                <span className="arrow">→</span>
                            </a>
                            <a href="https://github.com/Pankajsiradhana" target="_blank" rel="noopener noreferrer" className="v2-contact-row hover-invert">
                                <span>GitHub</span>
                                <span className="arrow">→</span>
                            </a>
                        </div>

                        <div style={{ marginTop: '60px' }}>
                            <a href="/resume.pdf" download className="v2-pill-btn yellow hover-shift" style={{ padding: '16px 40px', fontSize: 16 }}>
                                Download Resume
                            </a>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Slide Panel for Interactive Modals */}
            <SlidePanel isOpen={panelOpen} onClose={() => setPanelOpen(false)} title={panelContent.title}>
                {panelContent.content}
            </SlidePanel>

            {/* ════════ V2 DESIGN SYSTEM CSS ════════ */}
            <style>{`
                /* Global Animations */
                @keyframes twinkleRotate {
                    0% { transform: rotate(0deg) scale(1); }
                    50% { transform: rotate(180deg) scale(1.2); }
                    100% { transform: rotate(360deg) scale(1); }
                }
                .twinkle-anim {
                    animation: twinkleRotate 8s linear infinite;
                }
                .hover-shift {
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                }
                .hover-shift:hover {
                    transform: translate(-4px, -4px);
                    box-shadow: 4px 4px 0 #0F0F0F;
                }
                .hover-invert {
                    transition: background 0.3s ease, color 0.3s ease;
                }
                .hover-invert:hover {
                    background: #0F0F0F;
                    color: #F4F0EA;
                }

                /* A. HERO */
                .v2-hero {
                    background: #1E352F;
                    position: relative;
                    min-height: 100vh;
                    overflow: hidden;
                    padding-top: 120px;
                }
                .v2-hero-bg {
                    position: absolute;
                    top: 0; left: 0; right: 0; bottom: 0;
                    overflow: hidden;
                    z-index: 0;
                }
                .v2-hero-outline-stack {
                    display: flex;
                    flex-direction: column;
                    padding-left: 5vw;
                }
                .v2-outline-word {
                    font-family: 'Playfair Display', serif;
                    font-weight: 900;
                    font-size: clamp(80px, 15vw, 200px);
                    color: transparent;
                    -webkit-text-stroke: 1px rgba(244,240,234,0.1);
                    line-height: 0.8;
                    white-space: nowrap;
                }

                .v2-hero-content {
                    position: relative;
                    z-index: 2;
                }
                .v2-hero-grid {
                    display: grid;
                    grid-template-columns: auto 1fr;
                    gap: 60px;
                    align-items: center;
                }
                .v2-hero-image-box {
                    width: 300px;
                    height: 420px;
                    background: #D85A38;
                    padding: 16px;
                    position: relative;
                    border-radius: 4px; /* Slightly asymmetric if wanted */
                    border-top-right-radius: 40px;
                    border-bottom-left-radius: 40px;
                }
                .v2-hero-image-inner {
                    width: 100%;
                    height: 100%;
                    background: #0F0F0F;
                    overflow: hidden;
                    border-radius: 2px;
                    border-top-right-radius: 30px;
                    border-bottom-left-radius: 30px;
                }
                .v2-hero-image-inner img {
                    width: 100%; height: 100%; object-fit: cover; opacity: 0.9; mix-blend-mode: luminosity;
                }
                .v2-hero-sparkle { position: absolute; }
                .v2-hero-sparkle.top-left { top: -20px; left: -30px; }
                .v2-hero-sparkle.bottom-right { bottom: -20px; right: -20px; }

                .v2-hero-headline {
                    font-family: 'Playfair Display', serif;
                    font-weight: 900;
                    font-size: clamp(52px, 8vw, 100px);
                    color: #F4F0EA;
                    line-height: 0.9;
                    text-transform: uppercase;
                }

                .v2-hero-bottom-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    margin-top: 40px;
                }
                .v2-subtext-banner {
                    background: #0F0F0F;
                    padding: 24px 32px;
                    max-width: 420px;
                    border-top-right-radius: 20px;
                }
                .v2-subtext-banner p {
                    color: #F4F0EA;
                    font-family: 'DM Sans', sans-serif;
                    font-size: 14px;
                    line-height: 1.6;
                }
                .v2-hero-social {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    font-family: 'Space Grotesk', sans-serif;
                    font-size: 14px;
                }
                .v2-hero-social a {
                    color: #F4F0EA;
                    text-decoration: none;
                }

                .v2-scroll-trigger {
                    position: absolute;
                    bottom: -50px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 120px;
                    height: 120px;
                    background: #F9A825;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    font-family: 'Space Grotesk', sans-serif;
                    font-weight: 700;
                    font-size: 12px;
                    color: #1E352F;
                    z-index: 10;
                    cursor: pointer;
                }

                /* B. INTRO & FRAMEWORK */
                .v2-intro-section {
                    background: #F4F0EA;
                    padding: 80px 0;
                }
                .v2-intro-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 60px;
                    align-items: center;
                }
                .v2-intro-title {
                    font-family: 'Playfair Display', serif;
                    font-weight: 900;
                    font-size: clamp(48px, 6vw, 72px);
                    color: #1E352F;
                    margin-bottom: 24px;
                }
                .v2-intro-bio {
                    font-size: 16px;
                    color: rgba(30,53,47,0.8);
                    line-height: 1.6;
                    margin-bottom: 40px;
                    max-width: 480px;
                }
                .v2-intro-bio strong { color: #1E352F; }
                .v2-intro-actions { display: flex; gap: 16px; }

                .v2-pill-btn {
                    padding: 12px 28px;
                    border-radius: 100px;
                    font-family: 'Space Grotesk', sans-serif;
                    font-weight: 700;
                    font-size: 13px;
                    text-decoration: none;
                    cursor: pointer;
                    border: none;
                }
                .v2-pill-btn.orange { background: #D85A38; color: #F4F0EA; }
                .v2-pill-btn.yellow { background: #F9A825; color: #1E352F; }
                .v2-pill-btn.dark { background: #1E352F; color: #F4F0EA; }
                .v2-pill-btn.dark-outline { background: transparent; border: 1px solid #1E352F; color: #1E352F; }

                /* Interactive Framework Dashboard */
                .v2-framework-chart {
                    background: #FDFBFC;
                    border: 2px solid #1E352F;
                    border-radius: 8px;
                    padding: 24px;
                    box-shadow: 8px 8px 0 #1E352F;
                }
                .framework-header {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    margin-bottom: 32px;
                    padding-bottom: 16px;
                    border-bottom: 1px solid rgba(30,53,47,0.1);
                }
                .framework-header .dots span {
                    display: inline-block; width: 10px; height: 10px; border-radius: 50%;
                    background: #1E352F; margin-right: 6px;
                }
                .framework-header .title {
                    font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 12px; text-transform: uppercase;
                }
                .fw-node {
                    background: #F4F0EA;
                    border: 2px solid #1E352F;
                    padding: 16px;
                    text-align: center;
                    font-family: 'Space Grotesk', sans-serif;
                    font-weight: 700;
                    color: #1E352F;
                    border-radius: 4px;
                }
                .main-node { background: #F9A825; }
                .fw-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }

                /* C. SELECTED WORK */
                .v2-work-section {
                    background: #F4F0EA;
                    padding: 40px 0 80px;
                }
                .v2-section-heading {
                    font-family: 'Playfair Display', serif;
                    font-weight: 900;
                    font-size: clamp(36px, 5vw, 56px);
                    color: #1E352F;
                    margin-bottom: 40px;
                }
                .v2-section-heading.light { color: #F4F0EA; }

                .v2-work-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 60px;
                    align-items: stretch;
                }
                .v2-work-grid > div {
                    height: 100%;
                }
                .v2-vybe-box {
                    background: #F9A825;
                    padding: 40px;
                    border-radius: 0;
                    border-bottom-right-radius: 60px; /* asymmetric mask */
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                }
                .vybe-label {
                    font-family: 'Space Grotesk', sans-serif;
                    font-weight: 700;
                    font-size: 11px;
                    color: #1E352F;
                    margin-bottom: 24px;
                    letter-spacing: 1px;
                }
                .v2-vybe-box h3 {
                    font-family: 'Playfair Display', serif; font-weight: 900; font-size: 48px; color: #1E352F; line-height: 1; margin-bottom: 8px;
                }
                .v2-vybe-box h4 {
                    font-family: 'Space Grotesk', sans-serif; font-size: 18px; color: #1E352F; margin-bottom: 32px;
                }
                .vybe-image-container {
                    height: 160px;
                }
                .vybe-content-blocks { display: flex; flex-direction: column; gap: 16px; margin-bottom: 32px; }
                .vybe-block { padding: 20px; font-size: 13px; line-height: 1.6; border-radius: 4px; }
                .white-block { background: #F4F0EA; color: #1E352F; }
                .black-block { background: #0F0F0F; color: #F4F0EA; }
                .vybe-actions { display: flex; gap: 12px; }

                .v2-projects-timeline {
                    position: relative;
                    padding-left: 24px;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                .v2-projects-timeline::before {
                    content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 2px; background: rgba(30,53,47,0.1);
                }
                .v2-timeline-row {
                    position: relative;
                    padding: 32px;
                    border: 1px solid rgba(30,53,47,0.1);
                    margin-bottom: 0;
                    background: #FDFBFC;
                    border-radius: 4px;
                    display: grid;
                    grid-template-columns: 80px 1fr auto;
                    gap: 20px;
                    align-items: center;
                    flex: 1;
                    margin-top: 24px;
                    transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
                }
                .v2-timeline-row:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 6px 20px rgba(30,53,47,0.08);
                    border-color: rgba(30,53,47,0.2);
                }
                .v2-timeline-row:first-child {
                    margin-top: 0;
                }
                .timeline-node {
                    position: absolute; left: -33px; top: 50%; transform: translateY(-50%); background: #F4F0EA; padding: 8px 0;
                }
                .timeline-year { font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 18px; color: #D85A38; }
                .timeline-info h4 { font-family: 'Playfair Display', serif; font-weight: 900; font-size: 24px; margin-bottom: 8px; }
                .timeline-info p { font-size: 13px; color: inherit; opacity: 0.8; }
                .v2-link-btn { background: transparent; border: none; font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 12px; cursor: pointer; color: inherit; text-decoration: underline; }

                /* D. SKILLS & TOOLS (New Card Layout) */
                .v2-skills-section {
                    background: #F4F0EA;
                    padding: 60px 0 80px;
                }
                .v2-radar-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 32px;
                }
                .v2-skill-card {
                    background: #0F2018; /* Dark green card */
                    border-radius: 20px;
                    padding: 32px 24px;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    min-height: 500px;
                    height: 100%;
                }
                .radar-label {
                    position: absolute;
                    font-family: 'Space Grotesk', sans-serif;
                    font-size: 8px;
                    font-weight: 700;
                    letter-spacing: 0.5px;
                    color: rgba(244,240,234,0.6);
                    text-transform: uppercase;
                    white-space: nowrap;
                }
                .v2-skill-title {
                    font-family: 'Space Grotesk', sans-serif;
                    font-size: 24px;
                    font-weight: 900;
                    color: #F4F0EA;
                    margin: 40px 0 20px;
                    /* Simulating the wide stretched font from image */
                    letter-spacing: -0.5px;
                    transform: scaleX(1.1);
                    transform-origin: left;
                }
                .v2-skill-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                    margin-top: auto;
                }
                .v2-skill-tag {
                    border: 1px solid rgba(244,240,234,0.15);
                    color: rgba(244,240,234,0.6);
                    padding: 6px 12px;
                    border-radius: 100px;
                    font-family: 'Space Grotesk', sans-serif;
                    font-size: 9px;
                    font-weight: 700;
                    letter-spacing: 0.5px;
                }

                /* E. FOOTER */
                .v2-footer {
                    background: #F4F0EA;
                    padding: 80px 0;
                }
                .v2-footer-heading {
                    font-family: 'Playfair Display', serif;
                    font-weight: 900;
                    font-size: clamp(36px, 6vw, 64px);
                    color: #1E352F;
                    margin-bottom: 40px;
                    line-height: 1.1;
                }
                .v2-contact-rows {
                    max-width: 600px;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                }
                .v2-contact-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 24px 0;
                    border-bottom: 2px solid rgba(30,53,47,0.1);
                    text-decoration: none;
                    color: #1E352F;
                    font-family: 'Space Grotesk', sans-serif;
                    font-weight: 700;
                    font-size: 24px;
                }
                .v2-contact-row:hover {
                    padding-left: 24px;
                    padding-right: 24px;
                }

                /* RESPONSIVE — TABLETS & SMALL LAPTOPS (≤1024px) */
                @media (max-width: 1024px) {
                    .v2-hero-grid, .v2-intro-grid, .v2-work-grid { grid-template-columns: 1fr; }
                    .v2-hero-bottom-row { flex-direction: column; align-items: flex-start; gap: 24px; }
                    .v2-radar-grid { grid-template-columns: 1fr 1fr; }
                    .v2-timeline-row { grid-template-columns: 60px 1fr auto; }
                    .v2-hero { padding-top: 100px; }
                    .v2-hero-image-box { width: 240px; height: 340px; margin: 0 auto; }
                    .v2-scroll-trigger { width: 100px; height: 100px; bottom: -40px; }
                    .v2-intro-section { padding: 60px 0; }
                    .v2-work-section { padding: 40px 0 60px; }
                    .v2-skills-section { padding: 40px 0 60px; }
                    .v2-footer { padding: 60px 0; }
                    .v2-vybe-box { padding: 32px; }
                    .v2-vybe-box h3 { font-size: 40px; }
                    .v2-contact-row { font-size: 20px; padding: 20px 0; }
                }

                /* RESPONSIVE — TABLETS (≤768px) */
                @media (max-width: 768px) {
                    .v2-hero { padding-top: 80px; min-height: auto; padding-bottom: 80px; }
                    .v2-hero-grid { gap: 32px; }
                    .v2-hero-image-box { width: 200px; height: 280px; }
                    .v2-hero-headline { font-size: clamp(36px, 10vw, 60px); }
                    .v2-outline-word { font-size: clamp(50px, 12vw, 100px); }
                    .v2-hero-bottom-row { margin-top: 24px; }
                    .v2-subtext-banner { max-width: 100%; }
                    .v2-scroll-trigger { width: 80px; height: 80px; bottom: -30px; font-size: 10px; }
                    .v2-intro-grid { gap: 32px; }
                    .v2-intro-title { font-size: clamp(32px, 8vw, 48px); margin-bottom: 16px; }
                    .v2-intro-bio { font-size: 14px; margin-bottom: 24px; }
                    .v2-intro-actions { flex-wrap: wrap; }
                    .v2-section-heading { font-size: clamp(28px, 7vw, 40px); margin-bottom: 24px; }
                    .v2-work-grid { gap: 32px; }
                    .v2-vybe-box { padding: 24px; border-bottom-right-radius: 40px; }
                    .v2-vybe-box h3 { font-size: 36px; }
                    .v2-vybe-box h4 { font-size: 15px; margin-bottom: 20px; }
                    .vybe-block { padding: 16px; font-size: 12px; }
                    .v2-projects-timeline { padding-left: 16px; }
                    .v2-timeline-row { padding: 20px; grid-template-columns: 1fr; gap: 8px; }
                    .timeline-node { display: none; }
                    .timeline-year { font-size: 14px; }
                    .timeline-info h4 { font-size: 20px; }
                    .timeline-info p { font-size: 12px; }
                    .v2-radar-grid { grid-template-columns: 1fr; gap: 24px; }
                    .v2-skill-card { min-height: 420px; padding: 24px 20px; border-radius: 16px; }
                    .v2-skill-title { font-size: 20px; margin: 24px 0 16px; }
                    .v2-skill-tag { font-size: 8px; padding: 5px 10px; }
                    .v2-footer-heading { font-size: clamp(28px, 7vw, 48px); }
                    .v2-contact-row { font-size: 18px; padding: 16px 0; }
                    .v2-framework-chart { padding: 20px; }
                    .fw-node { padding: 12px; font-size: 13px; }
                    .vybe-image-container { height: 140px; }
                }

                /* RESPONSIVE — MOBILE PHONES (≤480px) */
                @media (max-width: 480px) {
                    .v2-hero { padding-top: 70px; padding-bottom: 60px; }
                    .v2-hero-image-box { width: 160px; height: 220px; padding: 10px; border-top-right-radius: 28px; border-bottom-left-radius: 28px; }
                    .v2-hero-image-inner { border-top-right-radius: 20px; border-bottom-left-radius: 20px; }
                    .v2-hero-headline { font-size: clamp(28px, 9vw, 44px); }
                    .v2-outline-word { font-size: clamp(40px, 15vw, 80px); }
                    .v2-scroll-trigger { width: 64px; height: 64px; bottom: -24px; font-size: 9px; }
                    .v2-subtext-banner { padding: 16px 20px; }
                    .v2-subtext-banner p { font-size: 12px; }
                    .v2-hero-social { font-size: 12px; }
                    .v2-intro-section { padding: 48px 0; }
                    .v2-intro-title { font-size: clamp(28px, 8vw, 40px); }
                    .v2-pill-btn { padding: 10px 20px; font-size: 11px; }
                    .v2-section-heading { font-size: clamp(24px, 7vw, 36px); margin-bottom: 20px; }
                    .v2-vybe-box { padding: 20px; border-bottom-right-radius: 32px; }
                    .v2-vybe-box h3 { font-size: 32px; }
                    .v2-vybe-box h4 { font-size: 14px; margin-bottom: 16px; }
                    .vybe-label { font-size: 10px; margin-bottom: 16px; }
                    .vybe-content-blocks { gap: 10px; margin-bottom: 20px; }
                    .vybe-block { padding: 14px; font-size: 11px; }
                    .v2-timeline-row { padding: 16px; }
                    .timeline-info h4 { font-size: 18px; margin-bottom: 4px; }
                    .v2-skill-card { min-height: 380px; padding: 20px 16px; }
                    .v2-skill-title { font-size: 18px; transform: none; }
                    .radar-label { font-size: 7px; }
                    .v2-skills-section { padding: 40px 0 60px; }
                    .v2-footer { padding: 48px 0; }
                    .v2-footer-heading { font-size: clamp(24px, 7vw, 36px); margin-bottom: 24px; }
                    .v2-contact-row { font-size: 16px; padding: 14px 0; }
                    .v2-contact-rows { max-width: 100%; }
                    .v2-framework-chart { padding: 16px; box-shadow: 4px 4px 0 #1E352F; }
                    .fw-row { grid-template-columns: 1fr; gap: 12px; }
                    .fw-node { padding: 10px; font-size: 12px; }
                    .vybe-image-container { height: 120px; }
                }
            `}</style>
        </PageTransition>
    );
}

// Simple placeholder for project details until we route the real content
function ProjectDetail({ id }) {
    return (
        <div>
            <h3 style={{fontFamily: '"Space Grotesk", sans-serif', color: '#F9A825'}}>Loading details for {id}...</h3>
            <p style={{marginTop: 20, lineHeight: 1.6}}>
                The full editorial case study content will be rendered here.
                You can import and render the Vybe.jsx, YouTubeShorts.jsx, etc. content directly into this panel.
            </p>
        </div>
    );
}
