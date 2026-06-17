import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollReveal from '../../components/common/ScrollReveal';
import { projects, saasMetadata, saasFindings, saasRecs } from '../../data/projects';

function Sparkle({ size = 20, color = '#F9A825' }) {
    return (
        <span className="sparkle-star" style={{ width: size, height: size }}>
            <svg viewBox="0 0 24 24" width={size} height={size}>
                <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4Z" fill={color} />
            </svg>
        </span>
    );
}

export default function SaasChurn() {
    const saasLinks = projects.find(p => p.id === 'saas-churn').links;
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
                        <div className="sr-item" style={{ height: 380, borderRadius: 4, background: '#1E352F', overflow: 'hidden', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div className="grid-overlay" style={{ position: 'absolute', inset: 0 }} />
                            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
                                <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
                                    <polyline points="10,60 30,50 50,55 70,30 90,35 110,15" stroke="#F9A825" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                    <polyline points="10,65 30,58 50,62 70,45 90,50 110,38" stroke="rgba(244,240,234,0.2)" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
                                    <line x1="10" y1="70" x2="110" y2="70" stroke="rgba(244,240,234,0.12)" strokeWidth="1" />
                                    <line x1="10" y1="10" x2="10" y2="70" stroke="rgba(244,240,234,0.12)" strokeWidth="1" />
                                </svg>
                                <span style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: 2, color: 'rgba(244,240,234,0.35)' }}>
                                    SaaS Churn Intelligence · Data Analysis
                                </span>
                            </div>
                            <div style={{ position: 'absolute', bottom: 20, right: 24 }}><Sparkle size={18} /></div>
                        </div>

                        <div className="sr-item" style={{ display: 'flex', gap: 24, marginTop: 24, flexWrap: 'wrap' }}>
                            {saasMetadata.map((m) => (
                                <span key={m} style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 2, color: 'rgba(30,53,47,0.4)' }}>{m}</span>
                            ))}
                        </div>

                        <h1 className="sr-item" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 900, fontSize: 'clamp(40px, 6vw, 80px)', color: '#1E352F', lineHeight: 0.9, marginTop: 24 }}>
                            SaaS Churn Intelligence
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
                                    SaaS churn is expensive but most teams track it without understanding it. Needed to find behavioural signals that predict churn before it happens.
                                </p>
                            </div>
                            <div className="sr-item">
                                <p style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: 2, color: 'rgba(30,53,47,0.4)', marginBottom: 12, fontWeight: 700 }}>METHODOLOGY</p>
                                <p style={{ fontSize: 15, color: 'rgba(30,53,47,0.65)', lineHeight: 1.65 }}>
                                    Python + SQL, 2,000 users, 18 months of data, cohort analysis, risk-scoring model. Built a full pipeline from raw data to actionable product recommendations.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ════════ SECTION 3: KEY FINDINGS ════════ */}
            <section style={{ background: '#1E352F' }} className="section-padding">
                <div className="container-main">
                    <ScrollReveal>
                        <h2 className="sr-item" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 900, fontSize: 'clamp(36px, 5vw, 64px)', color: '#F4F0EA', lineHeight: 0.9, marginBottom: 48 }}>
                            Key Findings
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="cards-grid">
                            {saasFindings.map((s) => (
                                <div key={s.value} className="sr-item card-hover" style={{ border: '1px solid rgba(244,240,234,0.08)', borderRadius: 4, padding: 28, textAlign: 'center' }}>
                                    <div style={{ fontFamily: '"Playfair Display", serif', fontSize: 64, color: '#F9A825', lineHeight: 1, fontWeight: 900 }}>{s.value}</div>
                                    <div style={{ fontSize: 14, fontWeight: 700, color: '#F4F0EA', marginTop: 4, marginBottom: 8 }}>{s.label}</div>
                                    <p style={{ fontSize: 12, color: 'rgba(244,240,234,0.5)', lineHeight: 1.6 }}>{s.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ════════ SECTION 4: RECOMMENDATIONS ════════ */}
            <section style={{ background: '#1E352F', paddingBottom: 120 }}>
                <div className="container-main">
                    <ScrollReveal>
                        <h2 className="sr-item" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 900, fontSize: 'clamp(24px, 4vw, 42px)', color: '#F4F0EA', lineHeight: 0.95, marginBottom: 32 }}>
                            5 Product Recommendations
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                            {saasRecs.map((rec, i) => (
                                <div key={i} className="sr-item" style={{ display: 'flex', gap: 16, alignItems: 'flex-start', border: '1px solid rgba(244,240,234,0.06)', borderRadius: 4, padding: '16px 20px' }}>
                                    <span style={{ fontFamily: '"Playfair Display", serif', fontSize: 28, color: '#F9A825', lineHeight: 1, flexShrink: 0, fontWeight: 900 }}>0{i + 1}</span>
                                    <p style={{ fontSize: 14, color: 'rgba(244,240,234,0.6)', lineHeight: 1.6 }}>{rec}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ════════ SECTION 5 ════════ */}
            <section style={{ background: '#F4F0EA' }} className="section-padding">
                <div className="container-main">
                    <ScrollReveal>
                        <div className="sr-item" style={{ background: '#1E352F', borderRadius: 4, padding: 32, textAlign: 'center', marginBottom: 40 }}>
                            <p style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 3vw, 28px)', color: '#F4F0EA' }}>
                                Projected to reduce churn 8–15% · Protect <span style={{ color: '#F9A825' }}>$144K+ ARR</span>
                            </p>
                        </div>

                        <div className="sr-item" style={{ display: 'flex', gap: 12, marginBottom: 60 }}>
                            <a href={saasLinks.github} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 13 }}>GitHub Repo ↗</a>
                        </div>

                        <div className="sr-item" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Link to="/project/ai-review" style={{ fontFamily: '"Playfair Display", serif', fontWeight: 700, fontSize: 'clamp(24px, 4vw, 48px)', color: '#1E352F', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12 }}>
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
                    .sr-item[style*="height: 380"] { height: 260px !important; }
                }
                @media (max-width: 480px) {
                    .cards-grid { grid-template-columns: 1fr !important; }
                    .sr-item[style*="height: 380"] { height: 180px !important; }
                }
            `}</style>
        </motion.div>
    );
}
