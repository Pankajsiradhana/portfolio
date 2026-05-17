import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollReveal from '../../components/common/ScrollReveal';
import { projects, vybeMetadata, vybeChips, vybeDecisions, vybeMetrics } from '../../data/projects';

export default function Vybe() {
    const vybeLinks = projects.find(p => p.id === 'vybe').links;
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
                        {/* Hero Image Placeholder */}
                        <div
                            className="sr-item"
                            style={{
                                height: 520,
                                borderRadius: 20,
                                overflow: 'hidden',
                                background: '#0d2419',
                                position: 'relative',
                            }}
                        >
                            <div className="grid-overlay" style={{ position: 'absolute', inset: 0 }} />
                            {/* Concentric circles */}
                            <svg style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} width="400" height="400" viewBox="0 0 400 400">
                                <circle cx="200" cy="200" r="180" fill="none" stroke="rgba(252,238,10,0.08)" strokeWidth="1" />
                                <circle cx="200" cy="200" r="120" fill="none" stroke="rgba(252,238,10,0.06)" strokeWidth="1" />
                                <circle cx="200" cy="200" r="60" fill="none" stroke="rgba(252,238,10,0.04)" strokeWidth="1" />
                            </svg>
                            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <span style={{ fontFamily: '"Bebas Neue", cursive', fontSize: 180, color: 'rgba(252,238,10,0.06)', lineHeight: 1 }}>
                                    VYBE
                                </span>
                            </div>
                            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(10,46,26,0.9))', padding: '40px 32px 24px' }}>
                                <span style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 2, color: 'rgba(245,240,232,0.5)' }}>
                                    AI Fashion Platform · Pre-Launch Product
                                </span>
                            </div>
                            {/* REPLACE: src="VYBE_HERO_IMAGE" */}
                        </div>

                        {/* Metadata */}
                        <div className="sr-item" style={{ display: 'flex', gap: 24, marginmarginTop: 24, flexWrap: 'wrap' }}>
                            {vybeMetadata.map((m) => (
                                <span key={m} style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 2, color: 'rgba(10,46,26,0.45)' }}>
                                    {m}
                                </span>
                            ))}
                        </div>

                        {/* Chips */}
                        <div className="sr-item" style={{ display: 'flex', gap: 6, marginTop: 16, flexWrap: 'wrap' }}>
                            <span style={{ background: '#FCEE0A', color: '#0A2E1A', fontWeight: 700, fontSize: 9, textTransform: 'uppercase', letterSpacing: 1, padding: '4px 12px', borderRadius: 100 }}>
                                Featured Project
                            </span>
                            {vybeChips.map((c) => (
                                <span key={c} style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: 1, padding: '4px 12px', borderRadius: 100, border: '1px solid rgba(10,46,26,0.2)', color: 'rgba(10,46,26,0.5)' }}>
                                    {c}
                                </span>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ════════ SECTION 2: PROBLEM / APPROACH ════════ */}
            <section style={{ background: '#F5F0E8', paddingBottom: 80 }}>
                <div className="container-main">
                    <ScrollReveal>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60 }} className="two-col-grid">
                            <div className="sr-item">
                                <p style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: 2, color: 'rgba(10,46,26,0.4)', marginBottom: 12, fontWeight: 600 }}>THE PROBLEM</p>
                                <p style={{ fontSize: 15, color: 'rgba(10,46,26,0.7)', lineHeight: 1.65 }}>
                                    $550B in fashion returns annually. Online shoppers can't know how clothes will actually fit their body before buying. Every competitor — Doji, Zara AR, Amazon virtual try-on — is brand-locked. You can only try on their products. VYBE is brand-independent.
                                </p>
                            </div>
                            <div className="sr-item">
                                <p style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: 2, color: 'rgba(10,46,26,0.4)', marginBottom: 12, fontWeight: 600 }}>MY APPROACH</p>
                                <p style={{ fontSize: 15, color: 'rgba(10,46,26,0.7)', lineHeight: 1.65 }}>
                                    I didn't start by building. I started by validating. PRD first, competitive teardown across 7 players, then monetization strategy, then pre-launch website. De-risk before you build.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ════════ SECTION 3: KEY DECISIONS ════════ */}
            <section style={{ background: '#0A2E1A' }} className="section-padding">
                <div className="container-main">
                    <ScrollReveal>
                        <h2 className="sr-item" style={{ fontFamily: '"Syne", sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 64px)', color: '#F5F0E8', lineHeight: 0.9, marginBottom: 48 }}>
                            Key Decisions
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="cards-grid">
                            {vybeDecisions.map((card) => (
                                <div key={card.title} className="sr-item card-hover" style={{ border: '1px solid rgba(245,240,232,0.1)', borderRadius: 16, padding: 28 }}>
                                    <h3 style={{ fontFamily: '"Syne", sans-serif', fontWeight: 800, fontSize: 18, color: '#F5F0E8', marginBottom: 12 }}>{card.title}</h3>
                                    <p style={{ fontSize: 13, color: 'rgba(245,240,232,0.6)', lineHeight: 1.65 }}>{card.text}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ════════ SECTION 4: BY THE NUMBERS ════════ */}
            <section style={{ background: '#0A2E1A', paddingBottom: 120 }}>
                <div className="container-main">
                    <ScrollReveal>
                        <h2 className="sr-item" style={{ fontFamily: '"Syne", sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 64px)', color: '#F5F0E8', lineHeight: 0.9, marginBottom: 48 }}>
                            By the Numbers
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }} className="metrics-grid">
                            {vybeMetrics.map((m) => (
                                <div key={m.value} className="sr-item" style={{ background: 'rgba(245,240,232,0.04)', border: '1px solid rgba(245,240,232,0.1)', borderRadius: 14, padding: 24, textAlign: 'center' }}>
                                    <div style={{ fontFamily: '"Bebas Neue", cursive', fontSize: 52, color: '#FCEE0A', lineHeight: 1 }}>{m.value}</div>
                                    <div style={{ fontSize: 10, textTransform: 'uppercase', color: 'rgba(245,240,232,0.45)', marginTop: 6, letterSpacing: 1 }}>{m.label}</div>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ════════ SECTION 5: ARTIFACTS ════════ */}
            <section style={{ background: '#F5F0E8' }} className="section-padding">
                <div className="container-main">
                    <ScrollReveal>
                        <h2 className="sr-item" style={{ fontFamily: '"Syne", sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 64px)', color: '#0A2E1A', lineHeight: 0.9, marginBottom: 32 }}>
                            Artifacts
                        </h2>
                        <div className="sr-item" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 60 }}>
                            <a href={vybeLinks.live} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 13 }}>Live Site ↗</a>
                            <a href={vybeLinks.caseStudy} target="_blank" rel="noopener noreferrer" className="btn-outlined-dark">Case Study ↗</a>
                            <a href={vybeLinks.prd} target="_blank" rel="noopener noreferrer" className="btn-outlined-dark">PRD ↗</a>
                            <a href={vybeLinks.teardown} target="_blank" rel="noopener noreferrer" className="btn-outlined-dark">Teardown Doc ↗</a>
                            <a href={vybeLinks.ppt} target="_blank" rel="noopener noreferrer" className="btn-outlined-dark">Presentation ↗</a>
                        </div>

                        {/* Next Project */}
                        <div className="sr-item" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Link to="/project/youtube-shorts" style={{ fontFamily: '"Syne", sans-serif', fontWeight: 800, fontSize: 'clamp(24px, 4vw, 48px)', color: '#0A2E1A', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12 }}>
                                Next Project <span style={{ color: '#FCEE0A' }}>→</span>
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <style>{`
        @media (max-width: 1024px) {
          .two-col-grid { gap: 36px !important; }
          .cards-grid { gap: 16px !important; }
        }
        @media (max-width: 768px) {
          .two-col-grid, .cards-grid { grid-template-columns: 1fr !important; }
          .metrics-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
        </motion.div >
    );
}
