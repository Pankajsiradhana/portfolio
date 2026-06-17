import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../common/ScrollReveal';
import { projects } from '../../data/projects';
import vybeImage from '../../assets/VYBE.png';

// 4-pointed sparkle star
function Sparkle({ size = 20, color = '#1E352F' }) {
    return (
        <span className="sparkle-star" style={{ width: size, height: size }}>
            <svg viewBox="0 0 24 24" width={size} height={size}>
                <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4Z" fill={color} />
            </svg>
        </span>
    );
}

export default function VybeHeroCard() {
    const navigate = useNavigate();
    const vybe = projects.find((p) => p.id === 'vybe');

    return (
        <section style={{ background: '#F4F0EA' }} className="section-padding">
            <div className="container-main">
                <ScrollReveal>
                    <div
                        className="sr-item featured-card"
                        onClick={() => navigate('/project/vybe')}
                    >
                        {/* Sparkle accents */}
                        <div style={{ position: 'absolute', top: 20, right: 24 }}>
                            <Sparkle size={24} color="#1E352F" />
                        </div>
                        <div style={{ position: 'absolute', bottom: 32, left: 24 }}>
                            <Sparkle size={16} color="#D85A38" />
                        </div>

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
                                            background: '#1E352F',
                                            color: '#F4F0EA',
                                            fontWeight: 700,
                                            fontSize: 9,
                                            textTransform: 'uppercase',
                                            letterSpacing: 1,
                                            padding: '5px 14px',
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
                                                padding: '5px 14px',
                                                borderRadius: 100,
                                                border: '1px solid rgba(30,53,47,0.25)',
                                                color: 'rgba(30,53,47,0.7)',
                                            }}
                                        >
                                            {c}
                                        </span>
                                    ))}
                                </div>

                                <h2
                                    style={{
                                        fontFamily: '"Playfair Display", serif',
                                        fontSize: 'clamp(64px, 10vw, 96px)',
                                        color: '#1E352F',
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
                                        color: '#1E352F',
                                        marginBottom: 16,
                                        fontWeight: 600,
                                    }}
                                >
                                    {vybe.subtitle}
                                </p>
                                <p
                                    style={{
                                        fontSize: 14,
                                        color: 'rgba(30,53,47,0.7)',
                                        lineHeight: 1.65,
                                        marginBottom: 20,
                                    }}
                                >
                                    {vybe.description}
                                </p>

                                {/* Image */}
                                <div
                                    style={{
                                        borderRadius: 4,
                                        height: 180,
                                        background: '#1E352F',
                                        overflow: 'hidden',
                                        marginBottom: 20,
                                        position: 'relative',
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
                                            background: 'linear-gradient(transparent, rgba(30,53,47,0.9))',
                                            padding: '12px 16px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <span style={{ fontSize: 8, textTransform: 'uppercase', color: 'rgba(244,240,234,0.7)', fontWeight: 600, letterSpacing: 1 }}>
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
                                        style={{
                                            background: '#1E352F',
                                            color: '#F4F0EA',
                                            padding: '8px 18px',
                                            borderRadius: 100,
                                            fontSize: 11,
                                            fontWeight: 700,
                                            textDecoration: 'none',
                                            fontFamily: '"Space Grotesk", sans-serif',
                                            transition: 'all 0.2s ease',
                                        }}
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
                                            style={{
                                                padding: '8px 18px',
                                                borderRadius: 100,
                                                border: '1px solid rgba(30,53,47,0.2)',
                                                color: 'rgba(30,53,47,0.6)',
                                                fontSize: 11,
                                                fontWeight: 700,
                                                textDecoration: 'none',
                                                fontFamily: '"Space Grotesk", sans-serif',
                                                transition: 'all 0.2s ease',
                                            }}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            {b.label}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Right Column */}
                            <div>
                                <div style={{ marginBottom: 24 }}>
                                    <p style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: 2, color: '#1E352F', marginBottom: 10, fontWeight: 700 }}>
                                        THE PROBLEM
                                    </p>
                                    <p style={{ fontSize: 13, color: 'rgba(30,53,47,0.65)', lineHeight: 1.6 }}>
                                        $550B fashion returns problem. Nobody knows how clothes fit on their
                                        body. Every competitor solves half. VYBE solves all of it —
                                        brand-independent.
                                    </p>
                                </div>

                                <div style={{ marginTop: 24 }}>
                                    <p style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: 2, color: '#1E352F', marginBottom: 10, fontWeight: 700 }}>
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
                                                color: 'rgba(30,53,47,0.6)',
                                                marginBottom: 8,
                                                alignItems: 'flex-start',
                                            }}
                                        >
                                            <svg width="10" height="10" viewBox="0 0 24 24" style={{ marginTop: 3, flexShrink: 0 }}>
                                                <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4Z" fill="#D85A38" />
                                            </svg>
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
                .tag-desktop-vybe {
                    display: inline-block;
                }
                @media (max-width: 768px) {
                    .vybe-grid { grid-template-columns: 1fr !important; }
                    .featured-card { padding: 28px !important; }
                    .tag-desktop-vybe { display: none !important; }
                }
                @media (max-width: 480px) {
                    .featured-card { padding: 20px !important; }
                }
            `}</style>
        </section>
    );
}
