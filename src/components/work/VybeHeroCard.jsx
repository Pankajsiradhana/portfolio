// ─── IMPORTS ────────────────────────────
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../common/ScrollReveal';
import { projects } from '../../data/projects';

import vybeImage from '../../assets/VYBE.png';

// ─── TYPES / PROPS ───────────────────────

// ─── COMPONENT ───────────────────────────
export default function VybeHeroCard() {
    const navigate = useNavigate();
    const vybe = projects.find((p) => p.id === 'vybe');

    return (
        <section style={{ background: '#0A2E1A' }} className="section-padding">
            <div className="container-main">
                <ScrollReveal>
                    <div
                        className="sr-item card-hover"
                        style={{
                            background: '#0A2E1A',
                            border: '1px solid rgba(245,240,232,0.1)',
                            borderRadius: 22,
                            padding: 48,
                            cursor: 'pointer',
                        }}
                        onClick={() => navigate('/project/vybe')}
                    >
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: 40,
                            }}
                            className="vybe-grid"
                        >
                            {/* Left Column */}
                            <div>
                                {/* Chips */}
                                <div style={{ display: 'flex', gap: 6, marginBottom: 16, flexWrap: 'wrap' }}>
                                    <span
                                        style={{
                                            background: '#FCEE0A',
                                            color: '#0A2E1A',
                                            fontWeight: 700,
                                            fontSize: 9,
                                            textTransform: 'uppercase',
                                            letterSpacing: 1,
                                            padding: '4px 12px',
                                            borderRadius: 100,
                                        }}
                                    >
                                        Featured Project
                                    </span>
                                    {vybe.chips.map((c) => (
                                        <span
                                            key={c}
                                            style={{
                                                fontSize: 9,
                                                textTransform: 'uppercase',
                                                letterSpacing: 1,
                                                padding: '4px 12px',
                                                borderRadius: 100,
                                                border: '1px solid rgba(245,240,232,0.2)',
                                                color: 'rgba(245,240,232,0.5)',
                                            }}
                                        >
                                            {c}
                                        </span>
                                    ))}
                                </div>

                                <h2
                                    style={{
                                        fontFamily: '"Bebas Neue", cursive',
                                        fontSize: 96,
                                        color: '#F5F0E8',
                                        lineHeight: 0.85,
                                    }}
                                >
                                    {vybe.title}
                                </h2>
                                <p
                                    style={{
                                        fontSize: 9,
                                        textTransform: 'uppercase',
                                        letterSpacing: 3,
                                        color: '#FCEE0A',
                                        marginBottom: 16,
                                    }}
                                >
                                    {vybe.subtitle}
                                </p>
                                <p
                                    style={{
                                        fontSize: 14,
                                        color: 'rgba(245,240,232,0.65)',
                                        lineHeight: 1.65,
                                        marginBottom: 20,
                                    }}
                                >
                                    {vybe.description}
                                </p>

                                {/* Image Section */}
                                <div
                                    style={{
                                        borderRadius: 14,
                                        height: 200,
                                        background: '#0d2419',
                                        overflow: 'hidden',
                                        marginBottom: 20,
                                        position: 'relative',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <img 
                                        src={vybeImage} 
                                        alt="VYBE Project" 
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }} 
                                    />
                                    <div
                                        style={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            background: 'linear-gradient(transparent, rgba(13,36,25,0.9))',
                                            padding: '12px 0',
                                            display: 'flex',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: 8,
                                                textTransform: 'uppercase',
                                                color: 'rgba(252,238,10,0.7)',
                                                fontWeight: 600,
                                                letterSpacing: 1
                                            }}
                                        >
                                            AI Fashion Platform · Pre-Launch Product
                                        </span>
                                    </div>
                                </div>

                                {/* Buttons */}
                                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                                    <a
                                        href={vybe.links.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary"
                                        style={{ fontSize: 11, padding: '8px 18px' }}
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        Live Site ↗
                                    </a>
                                    {[
                                        { label: 'Case Study ↗', href: vybe.links.caseStudy },
                                        { label: 'PRD ↗', href: vybe.links.prd },
                                        { label: 'Teardown ↗', href: vybe.links.teardown },
                                        { label: 'Presentation ↗', href: vybe.links.ppt },
                                    ].map((b) => (
                                        <a
                                            key={b.label}
                                            href={b.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-outlined"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            {b.label}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Right Column */}
                            <div>
                                <div style={{ marginBottom: 20 }}>
                                    <p
                                        style={{
                                            fontSize: 9,
                                            textTransform: 'uppercase',
                                            letterSpacing: 2,
                                            color: '#FCEE0A',
                                            marginBottom: 10,
                                        }}
                                    >
                                        THE PROBLEM
                                    </p>
                                    <p
                                        style={{
                                            fontSize: 13,
                                            color: 'rgba(245,240,232,0.65)',
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        $550B fashion returns problem. Nobody knows how clothes fit on their
                                        body. Every competitor solves half. VYBE solves all of it —
                                        brand-independent.
                                    </p>
                                </div>

                                <div style={{ marginTop: 20 }}>
                                    <p
                                        style={{
                                            fontSize: 9,
                                            textTransform: 'uppercase',
                                            letterSpacing: 2,
                                            color: '#FCEE0A',
                                            marginBottom: 10,
                                        }}
                                    >
                                        MY ROLE — END TO END
                                    </p>
                                    {[
                                        'Product vision & full PRD (solo)',
                                        'Competitive teardown across 7 players',
                                        'Affiliate-first monetization strategy',
                                        'Pre-launch validation & live website',
                                        'Growth funnel & GTM planning',
                                    ].map((item) => (
                                        <div
                                            key={item}
                                            style={{
                                                display: 'flex',
                                                gap: 10,
                                                fontSize: 12,
                                                color: 'rgba(245,240,232,0.6)',
                                                marginBottom: 6,
                                                alignItems: 'flex-start',
                                            }}
                                        >
                                            <span style={{ color: '#FCEE0A', fontSize: 8, marginTop: 4 }}>●</span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
            {/* Responsive */}
            <style>{`
            @media (max-width: 1024px) {
                .vybe-grid { gap: 24px !important; }
            }
            @media (max-width: 768px) {
                .vybe-grid { grid-template-columns: 1fr !important; }
                .vybe-grid .sr-item.card-hover,
                .sr-item.card-hover {
                    padding: 28px !important;
                }
            }
            @media (max-width: 480px) {
                .vybe-grid .sr-item.card-hover,
                .sr-item.card-hover {
                    padding: 20px !important;
                }
            }
            `}</style>
        </section>
    );
}
// ─── STYLES (if any) ─────────────────────
// ─── EXPORT ──────────────────────────────
