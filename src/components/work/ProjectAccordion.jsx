// ─── IMPORTS ────────────────────────────
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';

// ─── TYPES / PROPS ───────────────────────

// ─── COMPONENT ───────────────────────────
export default function ProjectAccordion() {
    const [openIndex, setOpenIndex] = useState(-1);

    const accordionProjects = projects.filter(p => p.id !== 'vybe');

    const renderIcon = (id) => {
        switch (id) {
            case 'youtube-shorts':
                return (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(252,238,10,0.6)" strokeWidth="1.5">
                        <polygon points="10 8 16 12 10 16 10 8" />
                        <rect x="2" y="4" width="20" height="16" rx="3" />
                    </svg>
                );
            case 'saas-churn':
                return (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(252,238,10,0.6)" strokeWidth="1.5">
                        <polyline points="4 18 8 14 12 16 16 10 20 6" />
                        <line x1="4" y1="20" x2="20" y2="20" />
                        <line x1="4" y1="4" x2="4" y2="20" />
                    </svg>
                );
            case 'ai-review':
                return (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(252,238,10,0.6)" strokeWidth="1.5">
                        <circle cx="8" cy="8" r="3" />
                        <circle cx="16" cy="8" r="3" />
                        <circle cx="12" cy="16" r="3" />
                        <line x1="10.5" y1="9.5" x2="12" y2="13.5" />
                        <line x1="13.5" y1="9.5" x2="12" y2="13.5" />
                    </svg>
                );
            default: return null;
        }
    };

    return (
        <section style={{ background: '#F5F0E8' }} className="section-padding">
            <div className="container-main">
                <div style={{ borderTop: '1px solid rgba(10,46,26,0.12)' }}>
                    {accordionProjects.map((item, i) => (
                        <div
                            key={item.id}
                            className={`accordion-row ${openIndex === i ? 'expanded' : ''}`}
                            onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                        >
                            <div
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: '100px 1fr auto',
                                    alignItems: 'center',
                                    gap: 20,
                                }}
                                className="accordion-header"
                            >
                                {/* Number */}
                                <span
                                    style={{
                                        fontSize: 11,
                                        textTransform: 'uppercase',
                                        letterSpacing: 2,
                                        color: 'rgba(10,46,26,0.35)',
                                    }}
                                >
                                    {item.num}
                                </span>

                                {/* Title */}
                                <span
                                    style={{
                                        fontFamily: '"Syne", sans-serif',
                                        fontWeight: 800,
                                        fontSize: 'clamp(22px, 3vw, 36px)',
                                        color: '#0A2E1A',
                                    }}
                                >
                                    {item.title}
                                </span>

                                {/* Right side */}
                                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                                    {item.tags?.map((t) => (
                                        <span
                                            key={t}
                                            style={{
                                                fontSize: 9,
                                                textTransform: 'uppercase',
                                                padding: '3px 10px',
                                                borderRadius: 100,
                                                background: 'rgba(10,46,26,0.07)',
                                                color: 'rgba(10,46,26,0.5)',
                                            }}
                                            className="hidden md:inline-block"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                    <div
                                        className="hidden md:flex"
                                        style={{
                                            width: 64,
                                            height: 38,
                                            borderRadius: 10,
                                            overflow: 'hidden',
                                            background: '#0A2E1A',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {renderIcon(item.id)}
                                    </div>
                                    <div className="accordion-icon">+</div>
                                </div>
                            </div>

                            {/* Expanded Content */}
                            <div className="accordion-content">
                                <div className="accordion-inner" style={{ paddingTop: 12, paddingBottom: 8 }}>
                                    <p
                                        style={{
                                            fontSize: 14,
                                            color: 'rgba(10,46,26,0.65)',
                                            lineHeight: 1.65,
                                            maxWidth: 600,
                                            marginBottom: 14,
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
            @media (max-width: 768px) {
                .accordion-header {
                    grid-template-columns: 60px 1fr auto !important;
                    gap: 12px !important;
                }
            }
            `}</style>
        </section>
    );
}

// ─── STYLES (if any) ─────────────────────
// ─── EXPORT ──────────────────────────────
