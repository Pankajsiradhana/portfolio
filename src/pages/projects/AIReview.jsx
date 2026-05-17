import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollReveal from '../../components/common/ScrollReveal';
import { projects, aiMetadata, aiTechStack, aiEval } from '../../data/projects';

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
            <section style={{ background: '#F5F0E8', paddingTop: 120, paddingBottom: 60 }}>
                <div className="container-main">
                    <ScrollReveal>
                        {/* Status Banner */}
                        <div
                            className="sr-item"
                            style={{
                                background: 'rgba(252,238,10,0.12)',
                                border: '1px solid rgba(252,238,10,0.3)',
                                borderRadius: 100,
                                padding: '8px 20px',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 10,
                                marginBottom: 24,
                            }}
                        >
                            <span
                                className="pulse-dot"
                                style={{
                                    width: 8,
                                    height: 8,
                                    borderRadius: '50%',
                                    background: '#FCEE0A',
                                    display: 'inline-block',
                                }}
                            />
                            <span style={{ fontSize: 12, fontWeight: 600, color: '#0A2E1A' }}>
                                Case study in progress — coming soon
                            </span>
                        </div>

                        {/* Hero Placeholder */}
                        <div
                            className="sr-item"
                            style={{
                                height: 360,
                                borderRadius: 20,
                                background: '#0A2E1A',
                                overflow: 'hidden',
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <div className="grid-overlay" style={{ position: 'absolute', inset: 0 }} />
                            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
                                {/* Node graph SVG */}
                                <svg width="120" height="100" viewBox="0 0 120 100" fill="none">
                                    <circle cx="30" cy="25" r="10" stroke="#FCEE0A" strokeWidth="1.5" fill="none" />
                                    <circle cx="90" cy="25" r="10" stroke="#FCEE0A" strokeWidth="1.5" fill="none" />
                                    <circle cx="60" cy="75" r="10" stroke="#FCEE0A" strokeWidth="1.5" fill="none" />
                                    <circle cx="20" cy="65" r="6" stroke="rgba(252,238,10,0.4)" strokeWidth="1" fill="none" />
                                    <circle cx="100" cy="65" r="6" stroke="rgba(252,238,10,0.4)" strokeWidth="1" fill="none" />
                                    <line x1="38" y1="30" x2="55" y2="68" stroke="rgba(252,238,10,0.3)" strokeWidth="1" />
                                    <line x1="82" y1="30" x2="65" y2="68" stroke="rgba(252,238,10,0.3)" strokeWidth="1" />
                                    <line x1="37" y1="25" x2="80" y2="25" stroke="rgba(252,238,10,0.2)" strokeWidth="1" />
                                    <line x1="25" y1="60" x2="53" y2="72" stroke="rgba(252,238,10,0.15)" strokeWidth="1" />
                                    <line x1="95" y1="60" x2="67" y2="72" stroke="rgba(252,238,10,0.15)" strokeWidth="1" />
                                </svg>
                                <span style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: 2, color: 'rgba(252,238,10,0.4)' }}>
                                    AI Smart Review Intelligence System
                                </span>
                            </div>
                        </div>

                        {/* Metadata */}
                        <div className="sr-item" style={{ display: 'flex', gap: 24, marginTop: 24, flexWrap: 'wrap' }}>
                            {aiMetadata.map((m) => (
                                <span key={m} style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 2, color: 'rgba(10,46,26,0.45)' }}>{m}</span>
                            ))}
                        </div>

                        <h1 className="sr-item" style={{ fontFamily: '"Syne", sans-serif', fontWeight: 800, fontSize: 'clamp(40px, 6vw, 80px)', color: '#0A2E1A', lineHeight: 0.9, marginTop: 24 }}>
                            AI Smart Review
                            <br />Intelligence System
                        </h1>
                    </ScrollReveal>
                </div>
            </section>

            {/* ════════ SECTION 2: WHAT WAS BUILT ════════ */}
            <section style={{ background: '#F5F0E8', paddingBottom: 80 }}>
                <div className="container-main">
                    <ScrollReveal>
                        <div className="sr-item" style={{ maxWidth: 700 }}>
                            <p style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: 2, color: 'rgba(10,46,26,0.4)', marginBottom: 12, fontWeight: 600 }}>WHAT WAS BUILT</p>
                            <p style={{ fontSize: 16, color: 'rgba(10,46,26,0.7)', lineHeight: 1.7 }}>
                                AI pipeline using n8n + LLMs processing 1,000+ e-commerce reviews per batch — categorising sentiment, flagging issues, surfacing merchant insights automatically. A fully automated intelligence system that turns raw customer feedback into actionable product decisions.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ════════ SECTION 3: TECH + EVALUATION ════════ */}
            <section style={{ background: '#0A2E1A' }} className="section-padding">
                <div className="container-main">
                    <ScrollReveal>
                        {/* Tech Stack Chips */}
                        <div className="sr-item" style={{ marginBottom: 48 }}>
                            <p style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: 2, color: '#FCEE0A', marginBottom: 16, fontWeight: 600 }}>TECH STACK</p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                                {aiTechStack.map((t) => (
                                    <span key={t} style={{ fontSize: 11, padding: '6px 16px', borderRadius: 100, border: '1px solid rgba(245,240,232,0.15)', color: 'rgba(245,240,232,0.6)' }}>{t}</span>
                                ))}
                            </div>
                        </div>

                        {/* Evaluation Framework */}
                        <div className="sr-item">
                            <p style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: 2, color: '#FCEE0A', marginBottom: 20, fontWeight: 600 }}>EVALUATION FRAMEWORK</p>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }} className="cards-grid">
                                {aiEval.map((e) => (
                                    <div key={e.title} className="sr-item card-hover" style={{ border: '1px solid rgba(245,240,232,0.1)', borderRadius: 16, padding: 24 }}>
                                        <h3 style={{ fontFamily: '"Syne", sans-serif', fontWeight: 800, fontSize: 16, color: '#F5F0E8', marginBottom: 10 }}>{e.title}</h3>
                                        <p style={{ fontSize: 13, color: 'rgba(245,240,232,0.55)', lineHeight: 1.6 }}>{e.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ════════ SECTION 4: ARTIFACTS ════════ */}
            <section style={{ background: '#F5F0E8' }} className="section-padding">
                <div className="container-main">
                    <ScrollReveal>
                        <div className="sr-item" style={{ marginBottom: 60 }}>
                            <div style={{ position: 'relative', display: 'inline-block' }}>
                                <a
                                    href={aiLinks.caseStudy}
                                    style={{
                                        opacity: 0.4,
                                        cursor: 'not-allowed',
                                        pointerEvents: 'none',
                                    }}
                                    className="btn-outlined-dark"
                                    title="Coming Soon"
                                >
                                    Case Study ↗
                                </a>
                            </div>
                        </div>

                        {/* Back to Work */}
                        <div className="sr-item" style={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <Link to="/work" style={{ fontFamily: '"Syne", sans-serif', fontWeight: 800, fontSize: 'clamp(24px, 4vw, 48px)', color: '#0A2E1A', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12 }}>
                                <span style={{ color: '#FCEE0A' }}>←</span> Back to Work
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <style>{`
        @media (max-width: 1024px) {
          .cards-grid { gap: 16px !important; }
        }
        @media (max-width: 768px) {
          .cards-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </motion.div>
    );
}
