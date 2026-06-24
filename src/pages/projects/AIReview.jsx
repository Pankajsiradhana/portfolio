import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollReveal from '../../components/common/ScrollReveal';
import { projects, aiMetadata, aiTechStack, aiEval } from '../../data/projects';

function Sparkle({ size = 20, color = '#F9A825' }) {
    return (
        <span className="sparkle-star" style={{ width: size, height: size }}>
            <svg viewBox="0 0 24 24" width={size} height={size}>
                <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4Z" fill={color} />
            </svg>
        </span>
    );
}

export default function AIReview() {
    const aiLinks = projects.find(p => p.id === 'ai-review').links;
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
            {/* ════════ SECTION 1: HERO ════════ */}
            <section style={{ background: '#F4F0EA', paddingTop: 120, paddingBottom: 60 }}>
                <div className="container-main">
                    <ScrollReveal>
                        {/* Status Banner */}
                        <div
                            className="sr-item"
                            style={{
                                background: 'rgba(30,53,47,0.06)',
                                border: '1px solid rgba(30,53,47,0.1)',
                                borderRadius: 100,
                                padding: '8px 20px',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 10,
                                marginBottom: 24,
                            }}
                        >
                            <span className="pulse-dot" style={{ width: 8, height: 8, borderRadius: '50%', background: '#F9A825', display: 'inline-block' }} />
                            <span style={{ fontSize: 12, fontWeight: 600, color: '#1E352F' }}>
                                Case study in progress — coming soon
                            </span>
                        </div>

                        <div className="sr-item" style={{ height: 360, borderRadius: 4, background: '#1E352F', overflow: 'hidden', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div className="grid-overlay" style={{ position: 'absolute', inset: 0 }} />
                            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
                                <svg width="120" height="100" viewBox="0 0 120 100" fill="none">
                                    <circle cx="30" cy="25" r="10" stroke="#F9A825" strokeWidth="1.5" fill="none" />
                                    <circle cx="90" cy="25" r="10" stroke="#F9A825" strokeWidth="1.5" fill="none" />
                                    <circle cx="60" cy="75" r="10" stroke="#F9A825" strokeWidth="1.5" fill="none" />
                                    <circle cx="20" cy="65" r="6" stroke="rgba(244,240,234,0.3)" strokeWidth="1" fill="none" />
                                    <circle cx="100" cy="65" r="6" stroke="rgba(244,240,234,0.3)" strokeWidth="1" fill="none" />
                                    <line x1="38" y1="30" x2="55" y2="68" stroke="rgba(244,240,234,0.2)" strokeWidth="1" />
                                    <line x1="82" y1="30" x2="65" y2="68" stroke="rgba(244,240,234,0.2)" strokeWidth="1" />
                                    <line x1="37" y1="25" x2="80" y2="25" stroke="rgba(244,240,234,0.15)" strokeWidth="1" />
                                </svg>
                                <span style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: 2, color: 'rgba(244,240,234,0.35)' }}>
                                    AI Smart Review Intelligence System
                                </span>
                            </div>
                            <div style={{ position: 'absolute', top: 20, right: 24 }}><Sparkle size={18} /></div>
                        </div>

                        <div className="sr-item" style={{ display: 'flex', gap: 24, marginTop: 24, flexWrap: 'wrap' }}>
                            {aiMetadata.map((m) => (
                                <span key={m} style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 2, color: 'rgba(30,53,47,0.4)' }}>{m}</span>
                            ))}
                        </div>

                        <h1 className="sr-item" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 900, fontSize: 'clamp(40px, 6vw, 80px)', color: '#1E352F', lineHeight: 0.9, marginTop: 24 }}>
                            AI Smart Review
                            <br />Intelligence System
                        </h1>
                    </ScrollReveal>
                </div>
            </section>

            {/* ════════ SECTION 2: WHAT WAS BUILT ════════ */}
            <section style={{ background: '#F4F0EA', paddingBottom: 80 }}>
                <div className="container-main">
                    <ScrollReveal>
                        <div className="sr-item" style={{ maxWidth: 700 }}>
                            <p style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: 2, color: 'rgba(30,53,47,0.4)', marginBottom: 12, fontWeight: 700 }}>WHAT WAS BUILT</p>
                            <p style={{ fontSize: 16, color: 'rgba(30,53,47,0.65)', lineHeight: 1.7 }}>
                                AI pipeline using n8n + LLMs processing 1,000+ e-commerce reviews per batch — categorising sentiment, flagging issues, surfacing merchant insights automatically. A fully automated intelligence system that turns raw customer feedback into actionable product decisions.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ════════ SECTION 3: TECH + EVALUATION ════════ */}
            <section style={{ background: '#1E352F' }} className="section-padding">
                <div className="container-main">
                    <ScrollReveal>
                        <div className="sr-item" style={{ marginBottom: 48 }}>
                            <p style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: 2, color: '#F9A825', marginBottom: 16, fontWeight: 700 }}>TECH STACK</p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                                {aiTechStack.map((t) => (
                                    <span key={t} className="pill-dark">{t}</span>
                                ))}
                            </div>
                        </div>

                        <div className="sr-item">
                            <p style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: 2, color: '#F9A825', marginBottom: 20, fontWeight: 700 }}>EVALUATION FRAMEWORK</p>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }} className="cards-grid">
                                {aiEval.map((e) => (
                                    <div key={e.title} className="sr-item card-hover" style={{ border: '1px solid rgba(244,240,234,0.08)', borderRadius: 4, padding: 24 }}>
                                        <h3 style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, fontSize: 16, color: '#F4F0EA', marginBottom: 10 }}>{e.title}</h3>
                                        <p style={{ fontSize: 13, color: 'rgba(244,240,234,0.5)', lineHeight: 1.6 }}>{e.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ════════ SECTION 4: ARTIFACTS ════════ */}
            <section style={{ background: '#F4F0EA' }} className="section-padding">
                <div className="container-main">
                    <ScrollReveal>
                        <div className="sr-item" style={{ marginBottom: 60 }}>
                            <div style={{ position: 'relative', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                                
                                <a 
                                    href="https://docs.google.com/document/d/1rjaWmWN1aFxuzVe95lfhRnTe1T68n91j/edit?usp=sharing&ouid=101428883712660753917&rtpof=true&sd=true" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="btn-outlined-dark"
                                >
                                    Case Study ↗
                                </a>
                                <a 
                                    href="https://docs.google.com/document/d/1rjaWmWN1aFxuzVe95lfhRnTe1T68n91j/edit?usp=sharing&ouid=101428883712660753917&rtpof=true&sd=true" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="btn-outlined-dark"
                                >
                                    Presentation (PPT) ↗
                                </a>
                            </div>
                        </div>

                        <div className="sr-item" style={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <Link to="/work" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 700, fontSize: 'clamp(24px, 4vw, 48px)', color: '#1E352F', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12 }}>
                                <span style={{ color: '#D85A38' }}>←</span> Back to Work
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <style>{`
                @media (max-width: 1024px) { .cards-grid { gap: 16px !important; } }
                @media (max-width: 768px) {
                    .cards-grid { grid-template-columns: 1fr !important; }
                    .sr-item[style*="height: 360"] { height: 240px !important; }
                }
                @media (max-width: 480px) {
                    .cards-grid { grid-template-columns: 1fr !important; }
                    .sr-item[style*="height: 360"] { height: 180px !important; }
                }
            `}</style>
        </motion.div>
    );
}
