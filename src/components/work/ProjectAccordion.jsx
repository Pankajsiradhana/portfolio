import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';

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

export default function ProjectAccordion() {
    const [openIndex, setOpenIndex] = useState(-1);

    const accordionProjects = projects.filter(p => p.id !== 'vybe');

    return (
        <section style={{ background: '#F4F0EA' }} className="section-padding">
            <div className="container-main">
                {/* Timeline track with sparkle star nodes */}
                <div style={{ position: 'relative' }}>
                    {/* Vertical timeline line */}
                    <div
                        style={{
                            position: 'absolute',
                            left: 12,
                            top: 0,
                            bottom: 0,
                            width: 2,
                            background: 'rgba(30,53,47,0.1)',
                        }}
                    />

                    {accordionProjects.map((item, i) => (
                        <div
                            key={item.id}
                            className={`accordion-row ${openIndex === i ? 'expanded' : ''}`}
                            onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                            style={{
                                borderBottom: '1px solid rgba(30,53,47,0.08)',
                                paddingLeft: 48,
                                position: 'relative',
                            }}
                        >
                            {/* Timeline sparkle star node */}
                            <div
                                style={{
                                    position: 'absolute',
                                    left: 0,
                                    top: 32,
                                    width: 26,
                                    height: 26,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: '#F4F0EA',
                                    zIndex: 2,
                                }}
                            >
                                <Sparkle size={18} color={openIndex === i ? '#D85A38' : '#F9A825'} />
                            </div>

                            <div
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: '80px 1fr auto',
                                    alignItems: 'center',
                                    gap: 20,
                                }}
                                className="accordion-header"
                            >
                                {/* Year/Number */}
                                <span
                                    style={{
                                        fontSize: 11,
                                        textTransform: 'uppercase',
                                        letterSpacing: 2,
                                        color: 'rgba(30,53,47,0.35)',
                                        fontFamily: '"Space Grotesk", sans-serif',
                                        fontWeight: 600,
                                    }}
                                >
                                    {item.num}
                                </span>

                                {/* Title */}
                                <span
                                    style={{
                                        fontFamily: '"Playfair Display", serif',
                                        fontWeight: 700,
                                        fontSize: 'clamp(20px, 3vw, 32px)',
                                        color: '#1E352F',
                                    }}
                                >
                                    {item.title}
                                </span>

                                {/* Right side */}
                                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                                    {item.tags?.map((t) => (
                                        <span
                                            key={t}
                                            className="tag-desktop"
                                            style={{
                                                fontSize: 9,
                                                textTransform: 'uppercase',
                                                padding: '4px 12px',
                                                borderRadius: 100,
                                                background: 'rgba(30,53,47,0.06)',
                                                color: 'rgba(30,53,47,0.5)',
                                                fontFamily: '"Space Grotesk", sans-serif',
                                                fontWeight: 600,
                                            }}
                                        >
                                            {t}
                                        </span>
                                    ))}
                                    <div className="accordion-icon">+</div>
                                </div>
                            </div>

                            {/* Expanded Content */}
                            <div className="accordion-content">
                                <div className="accordion-inner" style={{ paddingTop: 12, paddingBottom: 8 }}>
                                    <p
                                        style={{
                                            fontSize: 14,
                                            color: 'rgba(30,53,47,0.6)',
                                            lineHeight: 1.65,
                                            maxWidth: 600,
                                            marginBottom: 16,
                                        }}
                                    >
                                        {item.description}
                                    </p>
                                    <Link
                                        to={`/project/${item.id}`}
                                        className="btn-outlined-dark"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        See Project →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Responsive */}
            <style>{`
                .tag-desktop {
                    display: inline-block;
                }
                @media (max-width: 768px) {
                    .tag-desktop {
                        display: none !important;
                    }
                    .accordion-header {
                        grid-template-columns: 50px 1fr auto !important;
                        gap: 12px !important;
                    }
                }
                @media (max-width: 480px) {
                    .accordion-header {
                        grid-template-columns: 40px 1fr auto !important;
                        gap: 8px !important;
                    }
                }
            `}</style>
        </section>
    );
}
