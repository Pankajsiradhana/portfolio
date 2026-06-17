import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollReveal from '../../components/common/ScrollReveal';
import { projects, vybeMetadata, vybeChips, vybeDecisions, vybeMetrics } from '../../data/projects';


// 4-pointed sparkle star
function Sparkle({ size = 20, color = '#F9A825' }) {
    return (
        <span className="sparkle-star" style={{ width: size, height: size }}>
            <svg viewBox="0 0 24 24" width={size} height={size}>
                <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4Z" fill={color} />
            </svg>
        </span>
    );
}

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
            <section style={{ background: '#F4F0EA', paddingTop: 120, paddingBottom: 60 }}>
                <div className="container-main">
                    <ScrollReveal>
                        {/* Hero Image */}
                        <div
                            className="sr-item"
                            style={{
                                height: 520,
                                borderRadius: 4,
                                overflow: 'hidden',
                                background: '#1E352F',
                                position: 'relative',
                            }}
                        >

                            <div className="grid-overlay" style={{ position: 'absolute', inset: 0, zIndex: 1 }} />
                            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
                                <span style={{ fontFamily: '"Playfair Display", serif', fontSize: 180, color: 'rgba(244,240,234,0.05)', lineHeight: 1, fontWeight: 900 }}>
                                    VYBE
                                </span>
                            </div>
                            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(30,53,47,0.95))', padding: '40px 32px 24px', zIndex: 3 }}>
                                <span style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 2, color: 'rgba(244,240,234,0.8)' }}>
                                    AI Fashion Platform · Pre-Launch Product
                                </span>
                            </div>
                            {/* Sparkle decorations */}
                            <div style={{ position: 'absolute', top: 24, right: 32, zIndex: 3 }}>
                                <Sparkle size={24} />
                            </div>
                        </div>

                        {/* Metadata */}
                        <div className="sr-item" style={{ display: 'flex', gap: 24, marginTop: 24, flexWrap: 'wrap' }}>
                            {vybeMetadata.map((m) => (
                                <span key={m} style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 2, color: 'rgba(30,53,47,0.4)' }}>
                                    {m}
                                </span>
                            ))}
                        </div>

                        {/* Chips */}
                        <div className="sr-item" style={{ display: 'flex', gap: 6, marginTop: 16, flexWrap: 'wrap' }}>
                            <span style={{ background: '#1E352F', color: '#F4F0EA', fontWeight: 700, fontSize: 9, textTransform: 'uppercase', letterSpacing: 1, padding: '5px 14px', borderRadius: 100 }}>
                                Featured Project
                            </span>
                            {vybeChips.map((c) => (
                                <span key={c} style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: 1, padding: '5px 14px', borderRadius: 100, border: '1px solid rgba(30,53,47,0.15)', color: 'rgba(30,53,47,0.5)' }}>
                                    {c}
                                </span>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ════════ SECTION 2: PROBLEM / APPROACH ════════ */}
            <section style={{ background: '#F4F0EA', paddingBottom: 80 }}>
                <div className="container-main">
                    <ScrollReveal>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60 }} className="two-col-grid">
                            <div className="sr-item">
                                <p style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: 2, color: 'rgba(30,53,47,0.4)', marginBottom: 12, fontWeight: 700 }}>THE PROBLEM</p>
                                <p style={{ fontSize: 15, color: 'rgba(30,53,47,0.65)', lineHeight: 1.65 }}>
                                    $550B in fashion returns annually. Online shoppers can't know how clothes will actually fit their body before buying. Every competitor — Doji, Zara AR, Amazon virtual try-on — is brand-locked. You can only try on their products. VYBE is brand-independent.
                                </p>
                            </div>
                            <div className="sr-item">
                                <p style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: 2, color: 'rgba(30,53,47,0.4)', marginBottom: 12, fontWeight: 700 }}>MY APPROACH</p>
                                <p style={{ fontSize: 15, color: 'rgba(30,53,47,0.65)', lineHeight: 1.65 }}>
                                    I didn't start by building. I started by validating. PRD first, competitive teardown across 7 players, then monetization strategy, then pre-launch website. De-risk before you build.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ════════ SECTION 3: KEY DECISIONS ════════ */}
            <section style={{ background: '#1E352F' }} className="section-padding">
                <div className="container-main">
                    <ScrollReveal>
                        <h2 className="sr-item" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 900, fontSize: 'clamp(36px, 5vw, 64px)', color: '#F4F0EA', lineHeight: 0.9, marginBottom: 48 }}>
                            Key Decisions
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="cards-grid">
                            {vybeDecisions.map((card) => (
                                <div key={card.title} className="sr-item card-hover" style={{ border: '1px solid rgba(244,240,234,0.08)', borderRadius: 4, padding: 28 }}>
                                    <h3 style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, fontSize: 18, color: '#F4F0EA', marginBottom: 12 }}>{card.title}</h3>
                                    <p style={{ fontSize: 13, color: 'rgba(244,240,234,0.55)', lineHeight: 1.65 }}>{card.text}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ════════ SECTION 4: BY THE NUMBERS ════════ */}
            <section style={{ background: '#1E352F', paddingBottom: 120 }}>
                <div className="container-main">
                    <ScrollReveal>
                        <h2 className="sr-item" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 900, fontSize: 'clamp(36px, 5vw, 64px)', color: '#F4F0EA', lineHeight: 0.9, marginBottom: 48 }}>
                            By the Numbers
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }} className="metrics-grid">
                            {vybeMetrics.map((m) => (
                                <div key={m.value} className="sr-item" style={{ background: 'rgba(244,240,234,0.03)', border: '1px solid rgba(244,240,234,0.08)', borderRadius: 4, padding: 24, textAlign: 'center' }}>
                                    <div style={{ fontFamily: '"Playfair Display", serif', fontSize: 52, color: '#F9A825', lineHeight: 1, fontWeight: 700 }}>{m.value}</div>
                                    <div style={{ fontSize: 10, textTransform: 'uppercase', color: 'rgba(244,240,234,0.4)', marginTop: 8, letterSpacing: 1 }}>{m.label}</div>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ════════ SECTION 5: ARTIFACTS ════════ */}
            <section style={{ background: '#F4F0EA' }} className="section-padding">
                <div className="container-main">
                    <ScrollReveal>
                        <h2 className="sr-item" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 900, fontSize: 'clamp(36px, 5vw, 64px)', color: '#1E352F', lineHeight: 0.9, marginBottom: 32 }}>
                            Artifacts
                        </h2>
                        <div className="sr-item" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 60 }}>
                            <a href={vybeLinks.live} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 13 }}>Live Site ↗</a>
                            <a href={vybeLinks.caseStudy} target="_blank" rel="noopener noreferrer" className="btn-outlined-dark">Case Study ↗</a>
                            <a href={vybeLinks.prd} target="_blank" rel="noopener noreferrer" className="btn-outlined-dark">PRD ↗</a>
                            <a href={vybeLinks.teardown} target="_blank" rel="noopener noreferrer" className="btn-outlined-dark">Teardown Doc ↗</a>
                            <a href={vybeLinks.ppt} target="_blank" rel="noopener noreferrer" className="btn-outlined-dark">Presentation ↗</a>
                        </div>

                        <div className="sr-item" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Link to="/project/youtube-shorts" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 700, fontSize: 'clamp(24px, 4vw, 48px)', color: '#1E352F', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12 }}>
                                Next Project <span style={{ color: '#D85A38' }}>→</span>
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
                    .sr-item[style*="height: 520"] { height: 320px !important; }
                }
                @media (max-width: 480px) {
                    .metrics-grid { grid-template-columns: 1fr !important; }
                    .sr-item[style*="height: 520"] { height: 220px !important; }
                }
            `}</style>
        </motion.div>
    );
}
