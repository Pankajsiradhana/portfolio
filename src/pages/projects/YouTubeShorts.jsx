import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollReveal from '../../components/common/ScrollReveal';
import { projects, ytMetadata, ytCauses, ytSolution } from '../../data/projects';

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
            <section style={{ background: '#F5F0E8', paddingTop: 120, paddingBottom: 60 }}>
                <div className="container-main">
                    <ScrollReveal>
                        {/* Hero Placeholder */}
                        <div
                            className="sr-item"
                            style={{
                                height: 420,
                                borderRadius: 20,
                                background: '#183324',
                                overflow: 'hidden',
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <div className="grid-overlay" style={{ position: 'absolute', inset: 0 }} />
                            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
                                {/* Phone outline + play button */}
                                <svg width="80" height="120" viewBox="0 0 80 120" fill="none">
                                    <rect x="4" y="4" width="72" height="112" rx="12" stroke="rgba(252,238,10,0.25)" strokeWidth="1.5" />
                                    <circle cx="40" cy="55" r="16" stroke="rgba(252,238,10,0.3)" strokeWidth="1.5" />
                                    <polygon points="36,48 36,62 48,55" fill="rgba(252,238,10,0.3)" />
                                    <line x1="20" y1="92" x2="60" y2="92" stroke="rgba(252,238,10,0.15)" strokeWidth="1" />
                                    <line x1="20" y1="98" x2="50" y2="98" stroke="rgba(252,238,10,0.1)" strokeWidth="1" />
                                    <line x1="20" y1="104" x2="45" y2="104" stroke="rgba(252,238,10,0.08)" strokeWidth="1" />
                                </svg>
                                <span style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: 2, color: 'rgba(252,238,10,0.4)' }}>
                                    YouTube Shorts Search — Case Study
                                </span>
                            </div>
                        </div>

                        {/* Metadata */}
                        <div className="sr-item" style={{ display: 'flex', gap: 24, marginTop: 24, flexWrap: 'wrap' }}>
                            {ytMetadata.map((m) => (
                                <span key={m} style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 2, color: 'rgba(10,46,26,0.45)' }}>{m}</span>
                            ))}
                        </div>

                        {/* Headline */}
                        <h1 className="sr-item" style={{ fontFamily: '"Syne", sans-serif', fontWeight: 800, fontSize: 'clamp(40px, 6vw, 80px)', color: '#0A2E1A', lineHeight: 0.9, marginTop: 24 }}>
                            YouTube Shorts Search
                            <br />Why It Breaks &
                            <br />How To Fix It.
                        </h1>
                    </ScrollReveal>
                </div>
            </section>

            {/* ════════ SECTION 2: THE PROBLEM ════════ */}
            <section style={{ background: '#F5F0E8', paddingBottom: 80 }}>
                <div className="container-main">
                    <ScrollReveal>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60 }} className="two-col-grid">
                            <div className="sr-item">
                                <p style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: 2, color: 'rgba(10,46,26,0.4)', marginBottom: 12, fontWeight: 600 }}>THE PROBLEM</p>
                                <p style={{ fontSize: 15, color: 'rgba(10,46,26,0.7)', lineHeight: 1.65 }}>
                                    Priya searches "JEE prep tips", gets 4 perfect Shorts, then suddenly cricket, cooking, random content. Session dies. She leaves.
                                </p>
                            </div>
                            <div className="sr-item">
                                <p style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: 2, color: 'rgba(10,46,26,0.4)', marginBottom: 12, fontWeight: 600 }}>ROOT CAUSE</p>
                                <p style={{ fontSize: 15, color: 'rgba(10,46,26,0.7)', lineHeight: 1.65 }}>
                                    Shorts uses the main feed recommendation engine optimised for browsing, not searching. Search intent is ignored after the first few results.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ════════ SECTION 3: ROOT CAUSES ════════ */}
            <section style={{ background: '#0A2E1A' }} className="section-padding">
                <div className="container-main">
                    <ScrollReveal>
                        <h2 className="sr-item" style={{ fontFamily: '"Syne", sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 64px)', color: '#F5F0E8', lineHeight: 0.9, marginBottom: 48 }}>
                            Root Causes
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="cards-grid">
                            {ytCauses.map((cause, i) => (
                                <div key={i} className="sr-item card-hover" style={{ border: '1px solid rgba(245,240,232,0.1)', borderRadius: 16, padding: 28 }}>
                                    <span style={{ fontFamily: '"Bebas Neue", cursive', fontSize: 42, color: 'rgba(252,238,10,0.15)', lineHeight: 1 }}>0{i + 1}</span>
                                    <p style={{ fontSize: 14, color: 'rgba(245,240,232,0.7)', lineHeight: 1.6, marginTop: 12 }}>{cause}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ════════ SECTION 4: 3-PHASE SOLUTION ════════ */}
            <section style={{ background: '#0A2E1A', paddingBottom: 120 }}>
                <div className="container-main">
                    <ScrollReveal>
                        <h2 className="sr-item" style={{ fontFamily: '"Syne", sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 64px)', color: '#F5F0E8', lineHeight: 0.9, marginBottom: 48 }}>
                            3-Phase Solution
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="cards-grid">
                            {ytSolution.map((p) => (
                                <div key={p.phase} className="sr-item card-hover" style={{ border: '1px solid rgba(245,240,232,0.1)', borderRadius: 16, padding: 28 }}>
                                    <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
                                        <span style={{ background: '#FCEE0A', color: '#0A2E1A', fontWeight: 700, fontSize: 9, textTransform: 'uppercase', padding: '3px 10px', borderRadius: 100 }}>{p.phase}</span>
                                        <span style={{ fontSize: 9, textTransform: 'uppercase', color: 'rgba(245,240,232,0.4)', padding: '3px 10px', borderRadius: 100, border: '1px solid rgba(245,240,232,0.15)' }}>{p.time}</span>
                                    </div>
                                    <h3 style={{ fontFamily: '"Syne", sans-serif', fontWeight: 800, fontSize: 18, color: '#F5F0E8', marginBottom: 10 }}>{p.title}</h3>
                                    <p style={{ fontSize: 13, color: 'rgba(245,240,232,0.6)', lineHeight: 1.65 }}>{p.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ════════ SECTION 5: QUOTE + NORTH STAR ════════ */}
            <section style={{ background: '#F5F0E8' }} className="section-padding">
                <div className="container-main">
                    <ScrollReveal>
                        {/* Quote Card */}
                        <div className="sr-item" style={{ background: '#0A2E1A', borderRadius: 18, padding: 40, marginBottom: 32 }}>
                            <span style={{ fontFamily: '"Syne", sans-serif', fontSize: 64, color: '#FCEE0A', lineHeight: 0.5 }}>"</span>
                            <p style={{ fontFamily: '"Syne", sans-serif', fontSize: 22, fontStyle: 'italic', color: '#F5F0E8', lineHeight: 1.4, marginTop: 12 }}>
                                Search is not browsing. Users who search know what they want — and the product should respect that intent, not override it.
                            </p>
                        </div>

                        {/* North Star Metric */}
                        <div className="sr-item" style={{ border: '2px solid #FCEE0A', borderRadius: 14, padding: 24, marginBottom: 48 }}>
                            <p style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: 2, color: 'rgba(10,46,26,0.4)', fontWeight: 700, marginBottom: 8 }}>NORTH STAR METRIC</p>
                            <p style={{ fontSize: 18, fontWeight: 700, color: '#0A2E1A', marginBottom: 4 }}>% of search sessions where users find what they wanted</p>
                            <p style={{ fontSize: 14, color: 'rgba(10,46,26,0.6)' }}>Target: <strong>35% → 60%</strong> in 6 months</p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ════════ SECTION 6: ARTIFACTS ════════ */}
            <section style={{ background: '#F5F0E8', paddingBottom: 120 }}>
                <div className="container-main">
                    <ScrollReveal>
                        <div className="sr-item" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 60 }}>
                            <a href={ytLinks.caseStudy} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 13 }}>Full Case Study ↗</a>
                            <a href={ytLinks.ppt} target="_blank" rel="noopener noreferrer" className="btn-outlined-dark">Presentation ↗</a>
                        </div>

                        <div className="sr-item" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Link to="/project/saas-churn" style={{ fontFamily: '"Syne", sans-serif', fontWeight: 800, fontSize: 'clamp(24px, 4vw, 48px)', color: '#0A2E1A', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12 }}>
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
        }
      `}</style>
        </motion.div>
    );
}
