import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollReveal from '../../components/common/ScrollReveal';
import { projects, ytMetadata, ytCauses, ytSolution } from '../../data/projects';

function Sparkle({ size = 20, color = '#F9A825' }) {
    return (
        <span className="sparkle-star" style={{ width: size, height: size }}>
            <svg viewBox="0 0 24 24" width={size} height={size}>
                <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4Z" fill={color} />
            </svg>
        </span>
    );
}

export default function YouTubeShorts() {
    const ytLinks = projects.find(p => p.id === 'youtube-shorts').links;
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
                        <div className="sr-item" style={{ height: 420, borderRadius: 4, background: '#1E352F', overflow: 'hidden', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div className="grid-overlay" style={{ position: 'absolute', inset: 0 }} />
                            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
                                <svg width="80" height="120" viewBox="0 0 80 120" fill="none">
                                    <rect x="4" y="4" width="72" height="112" rx="12" stroke="rgba(244,240,234,0.2)" strokeWidth="1.5" />
                                    <circle cx="40" cy="55" r="16" stroke="rgba(244,240,234,0.25)" strokeWidth="1.5" />
                                    <polygon points="36,48 36,62 48,55" fill="rgba(244,240,234,0.25)" />
                                    <line x1="20" y1="92" x2="60" y2="92" stroke="rgba(244,240,234,0.12)" strokeWidth="1" />
                                    <line x1="20" y1="98" x2="50" y2="98" stroke="rgba(244,240,234,0.08)" strokeWidth="1" />
                                </svg>
                                <span style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: 2, color: 'rgba(244,240,234,0.35)' }}>
                                    YouTube Shorts Search — Case Study
                                </span>
                            </div>
                            <div style={{ position: 'absolute', top: 20, left: 24 }}><Sparkle size={18} /></div>
                        </div>

                        <div className="sr-item" style={{ display: 'flex', gap: 24, marginTop: 24, flexWrap: 'wrap' }}>
                            {ytMetadata.map((m) => (
                                <span key={m} style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 2, color: 'rgba(30,53,47,0.4)' }}>{m}</span>
                            ))}
                        </div>

                        <h1 className="sr-item" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 900, fontSize: 'clamp(40px, 6vw, 80px)', color: '#1E352F', lineHeight: 0.9, marginTop: 24 }}>
                            YouTube Shorts Search
                            <br />Why It Breaks &
                            <br />How To Fix It<span style={{ color: '#D85A38' }}>.</span>
                        </h1>
                    </ScrollReveal>
                </div>
            </section>

            {/* ════════ SECTION 2 ════════ */}
            <section style={{ background: '#F4F0EA', paddingBottom: 80 }}>
                <div className="container-main">
                    <ScrollReveal>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60 }} className="two-col-grid">
                            <div className="sr-item">
                                <p style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: 2, color: 'rgba(30,53,47,0.4)', marginBottom: 12, fontWeight: 700 }}>THE PROBLEM</p>
                                <p style={{ fontSize: 15, color: 'rgba(30,53,47,0.65)', lineHeight: 1.65 }}>
                                    Priya searches "JEE prep tips", gets 4 perfect Shorts, then suddenly cricket, cooking, random content. Session dies. She leaves.
                                </p>
                            </div>
                            <div className="sr-item">
                                <p style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: 2, color: 'rgba(30,53,47,0.4)', marginBottom: 12, fontWeight: 700 }}>ROOT CAUSE</p>
                                <p style={{ fontSize: 15, color: 'rgba(30,53,47,0.65)', lineHeight: 1.65 }}>
                                    Shorts uses the main feed recommendation engine optimised for browsing, not searching. Search intent is ignored after the first few results.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ════════ SECTION 3: ROOT CAUSES ════════ */}
            <section style={{ background: '#1E352F' }} className="section-padding">
                <div className="container-main">
                    <ScrollReveal>
                        <h2 className="sr-item" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 900, fontSize: 'clamp(36px, 5vw, 64px)', color: '#F4F0EA', lineHeight: 0.9, marginBottom: 48 }}>
                            Root Causes
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="cards-grid">
                            {ytCauses.map((cause, i) => (
                                <div key={i} className="sr-item card-hover" style={{ border: '1px solid rgba(244,240,234,0.08)', borderRadius: 4, padding: 28 }}>
                                    <span style={{ fontFamily: '"Playfair Display", serif', fontSize: 42, color: 'rgba(249,168,37,0.2)', lineHeight: 1, fontWeight: 900 }}>0{i + 1}</span>
                                    <p style={{ fontSize: 14, color: 'rgba(244,240,234,0.65)', lineHeight: 1.6, marginTop: 12 }}>{cause}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ════════ SECTION 4: 3-PHASE SOLUTION ════════ */}
            <section style={{ background: '#1E352F', paddingBottom: 120 }}>
                <div className="container-main">
                    <ScrollReveal>
                        <h2 className="sr-item" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 900, fontSize: 'clamp(36px, 5vw, 64px)', color: '#F4F0EA', lineHeight: 0.9, marginBottom: 48 }}>
                            3-Phase Solution
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="cards-grid">
                            {ytSolution.map((p) => (
                                <div key={p.phase} className="sr-item card-hover" style={{ border: '1px solid rgba(244,240,234,0.08)', borderRadius: 4, padding: 28 }}>
                                    <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
                                        <span style={{ background: '#F9A825', color: '#1E352F', fontWeight: 700, fontSize: 9, textTransform: 'uppercase', padding: '4px 12px', borderRadius: 100 }}>{p.phase}</span>
                                        <span style={{ fontSize: 9, textTransform: 'uppercase', color: 'rgba(244,240,234,0.35)', padding: '4px 12px', borderRadius: 100, border: '1px solid rgba(244,240,234,0.12)' }}>{p.time}</span>
                                    </div>
                                    <h3 style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, fontSize: 18, color: '#F4F0EA', marginBottom: 10 }}>{p.title}</h3>
                                    <p style={{ fontSize: 13, color: 'rgba(244,240,234,0.55)', lineHeight: 1.65 }}>{p.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ════════ SECTION 5: QUOTE + NORTH STAR ════════ */}
            <section style={{ background: '#F4F0EA' }} className="section-padding">
                <div className="container-main">
                    <ScrollReveal>
                        <div className="sr-item" style={{ background: '#1E352F', borderRadius: 4, padding: 40, marginBottom: 32 }}>
                            <span style={{ fontFamily: '"Playfair Display", serif', fontSize: 64, color: '#F9A825', lineHeight: 0.5, fontWeight: 900 }}>"</span>
                            <p style={{ fontFamily: '"Playfair Display", serif', fontSize: 22, fontStyle: 'italic', color: '#F4F0EA', lineHeight: 1.4, marginTop: 12 }}>
                                Search is not browsing. Users who search know what they want — and the product should respect that intent, not override it.
                            </p>
                        </div>

                        <div className="sr-item" style={{ border: '2px solid rgba(30,53,47,0.1)', borderRadius: 4, padding: 24, marginBottom: 48 }}>
                            <p style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: 2, color: 'rgba(30,53,47,0.35)', fontWeight: 700, marginBottom: 8 }}>NORTH STAR METRIC</p>
                            <p style={{ fontSize: 18, fontWeight: 700, color: '#1E352F', marginBottom: 4 }}>% of search sessions where users find what they wanted</p>
                            <p style={{ fontSize: 14, color: 'rgba(30,53,47,0.5)' }}>Target: <strong>35% → 60%</strong> in 6 months</p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ════════ SECTION 6: ARTIFACTS ════════ */}
            <section style={{ background: '#F4F0EA', paddingBottom: 120 }}>
                <div className="container-main">
                    <ScrollReveal>
                        <div className="sr-item" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 60 }}>
                            <a href={ytLinks.caseStudy} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 13 }}>Full Case Study ↗</a>
                            <a href={ytLinks.ppt} target="_blank" rel="noopener noreferrer" className="btn-outlined-dark">Presentation ↗</a>
                        </div>

                        <div className="sr-item" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Link to="/project/saas-churn" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 700, fontSize: 'clamp(24px, 4vw, 48px)', color: '#1E352F', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12 }}>
                                Next Project <span style={{ color: '#D85A38' }}>→</span>
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <style>{`
                @media (max-width: 1024px) { .two-col-grid { gap: 36px !important; } .cards-grid { gap: 16px !important; } }
                @media (max-width: 768px) {
                    .two-col-grid, .cards-grid { grid-template-columns: 1fr !important; }
                    .sr-item[style*="height: 420"] { height: 280px !important; }
                    .sr-item[style*="height: 380"] { height: 260px !important; }
                    .sr-item[style*="height: 360"] { height: 240px !important; }
                    .sr-item[style*="height: 520"] { height: 320px !important; }
                }
                @media (max-width: 480px) {
                    .cards-grid { grid-template-columns: 1fr !important; }
                    .sr-item[style*="height: 420"] { height: 200px !important; }
                    .sr-item[style*="height: 380"] { height: 180px !important; }
                    .sr-item[style*="height: 360"] { height: 180px !important; }
                    .sr-item[style*="height: 520"] { height: 240px !important; }
                }
            `}</style>
        </motion.div>
    );
}
