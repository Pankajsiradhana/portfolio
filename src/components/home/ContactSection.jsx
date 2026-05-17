// ─── IMPORTS ────────────────────────────
import ScrollReveal from '../common/ScrollReveal';
import { LINKS, contactLinksData } from '../../data/links';

// ─── TYPES / PROPS ───────────────────────

// ─── COMPONENT ───────────────────────────
export default function ContactSection() {
    return (
        <section id="contact" style={{ background: '#0A2E1A' }} className="section-padding">
            <div className="container-main">
                <ScrollReveal>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '55% 45%',
                            alignItems: 'start',
                            gap: 60,
                        }}
                        className="contact-grid"
                    >
                        {/* Left */}
                        <div className="sr-item">
                            <p className="eyebrow-yellow" style={{ marginBottom: 16 }}>
                                // let's build something
                            </p>
                            <h2
                                style={{
                                    fontFamily: '"Syne", sans-serif',
                                    fontWeight: 800,
                                    fontSize: 'clamp(44px, 7vw, 88px)',
                                    color: '#F5F0E8',
                                    lineHeight: 0.88,
                                    marginBottom: 20,
                                }}
                            >
                                Got a problem
                                <br />
                                worth solving?
                                <br />
                                Let's talk.
                            </h2>
                            <p
                                style={{
                                    fontSize: 15,
                                    color: 'rgba(245,240,232,0.6)',
                                    lineHeight: 1.65,
                                    marginBottom: 28,
                                }}
                            >
                                Whether you're building a team, need a product brain, or just want to
                                geek out about a case study — my inbox is open.
                            </p>

                            <a
                                href={LINKS.resume}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary"
                                style={{ marginBottom: 28, display: 'inline-flex' }}
                            >
                                Download Resume ↗
                            </a>

                            {/* Contact Rows */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                                {contactLinksData.map((c) => (
                                    <a
                                        key={c.label}
                                        href={c.href}
                                        target={c.external ? '_blank' : undefined}
                                        rel={c.external ? 'noopener noreferrer' : undefined}
                                        className="contact-row"
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                            <div
                                                style={{
                                                    width: 32,
                                                    height: 32,
                                                    background: 'rgba(245,240,232,0.06)',
                                                    borderRadius: 8,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontWeight: 700,
                                                    color: '#F5F0E8',
                                                    fontSize: 12,
                                                }}
                                            >
                                                {c.icon}
                                            </div>
                                            <div>
                                                <div
                                                    style={{
                                                        fontSize: 9,
                                                        textTransform: 'uppercase',
                                                        letterSpacing: 2,
                                                        color: 'rgba(245,240,232,0.4)',
                                                        marginBottom: 2,
                                                    }}
                                                >
                                                    {c.label}
                                                </div>
                                                <div style={{ fontSize: 13, color: '#F5F0E8' }}>{c.value}</div>
                                            </div>
                                        </div>
                                        <span style={{ color: 'rgba(245,240,232,0.4)', fontSize: 16 }}>→</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Right — CTA Card */}
                        <div
                            className="sr-item"
                            style={{
                                background: '#183324',
                                borderRadius: 20,
                                padding: 40,
                                textAlign: 'center',
                            }}
                        >
                            <h3
                                style={{
                                    fontFamily: '"Syne", sans-serif',
                                    fontWeight: 800,
                                    fontSize: 32,
                                    color: '#F5F0E8',
                                    lineHeight: 1,
                                    marginBottom: 0,
                                }}
                            >
                                Let's Build
                                <br />
                                Something.
                            </h3>
                            <p
                                style={{
                                    fontSize: 11,
                                    textTransform: 'uppercase',
                                    letterSpacing: 1.5,
                                    color: 'rgba(245,240,232,0.4)',
                                    margin: '16px 0 24px',
                                }}
                            >
                                Bengaluru, India · Open to opportunities
                            </p>
                            <a
                                href={LINKS.social.email}
                                className="btn-primary"
                                style={{
                                    width: '100%',
                                    justifyContent: 'center',
                                    padding: '14px',
                                    fontSize: 15,
                                }}
                            >
                                Send it →
                            </a>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
// ─── STYLES (if any) ─────────────────────
// ─── EXPORT ──────────────────────────────
