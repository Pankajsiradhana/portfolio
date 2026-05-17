// ─── IMPORTS ────────────────────────────
import ScrollReveal from '../common/ScrollReveal';

// ─── TYPES / PROPS ───────────────────────

// ─── COMPONENT ───────────────────────────
export default function AboutSection() {
    return (
        <section id="about" style={{ background: '#0A2E1A' }} className="section-padding">
            <div className="container-main">
                <ScrollReveal>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            alignItems: 'center',
                            gap: 60,
                        }}
                        className="about-grid"
                    >
                        {/* Left Column */}
                        <div className="sr-item">
                            <p className="eyebrow-yellow" style={{ marginBottom: 16 }}>
                                // who is this guy
                            </p>
                            <h2
                                style={{
                                    fontFamily: '"Syne", sans-serif',
                                    fontWeight: 800,
                                    fontSize: 'clamp(40px, 6vw, 72px)',
                                    color: '#F5F0E8',
                                    lineHeight: 0.9,
                                    marginBottom: 24,
                                }}
                            >
                                Curious.
                                <br />
                                Relentless.
                                <br />
                                Builder.
                            </h2>
                            <p
                                style={{
                                    fontSize: 16,
                                    color: 'rgba(245,240,232,0.65)',
                                    lineHeight: 1.65,
                                    marginBottom: 16,
                                }}
                            >
                                I'm Pankaj — a product thinker from Bengaluru who got tired of waiting
                                for permission to do PM work and{' '}
                                <span style={{ fontStyle: 'italic', color: '#FCEE0A' }}>
                                    just started doing it.
                                </span>
                            </p>
                            <p
                                style={{
                                    fontSize: 16,
                                    color: 'rgba(245,240,232,0.65)',
                                    lineHeight: 1.65,
                                    marginBottom: 24,
                                }}
                            >
                                My brain lives at the intersection of data, design, and user obsession.
                                Looking for a team that builds fast, thinks deep, and doesn't take
                                themselves too seriously.
                            </p>
                            <a
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                style={{
                                    color: '#FCEE0A',
                                    fontWeight: 600,
                                    textDecoration: 'none',
                                    fontSize: 15,
                                }}
                            >
                                If that sounds like you — let's build something →
                            </a>
                        </div>

                        {/* Right Column — Aesthetic Card */}
                        <div
                            className="sr-item"
                            style={{
                                borderRadius: 18,
                                overflow: 'hidden',
                                height: 340,
                                background: '#0d2419',
                                position: 'relative',
                            }}
                        >
                            {/* Grid overlay */}
                            <div
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    backgroundImage:
                                        'linear-gradient(rgba(252,238,10,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(252,238,10,0.04) 1px, transparent 1px)',
                                    backgroundSize: '28px 28px',
                                }}
                            />

                            {/* Concentric circles */}
                            <svg
                                style={{ position: 'absolute', top: -40, right: -40 }}
                                width="280"
                                height="280"
                                viewBox="0 0 280 280"
                            >
                                <circle
                                    cx="140"
                                    cy="140"
                                    r="120"
                                    fill="none"
                                    stroke="rgba(252,238,10,0.12)"
                                    strokeWidth="1"
                                />
                                <circle
                                    cx="140"
                                    cy="140"
                                    r="75"
                                    fill="none"
                                    stroke="rgba(252,238,10,0.08)"
                                    strokeWidth="1"
                                />
                                <circle
                                    cx="140"
                                    cy="140"
                                    r="45"
                                    fill="none"
                                    stroke="rgba(252,238,10,0.05)"
                                    strokeWidth="1"
                                />
                            </svg>

                            {/* Glowing nodes */}
                            <div
                                style={{
                                    position: 'absolute',
                                    top: 40,
                                    left: '50%',
                                    width: 7,
                                    height: 7,
                                    background: '#FCEE0A',
                                    borderRadius: '50%',
                                    boxShadow: '0 0 12px #FCEE0A',
                                }}
                            />
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    right: 50,
                                    width: 6,
                                    height: 6,
                                    background: '#FCEE0A',
                                    borderRadius: '50%',
                                    boxShadow: '0 0 12px #FCEE0A',
                                }}
                            />
                            <div
                                style={{
                                    position: 'absolute',
                                    bottom: 80,
                                    left: 60,
                                    width: 8,
                                    height: 8,
                                    background: '#FCEE0A',
                                    borderRadius: '50%',
                                    boxShadow: '0 0 12px #FCEE0A',
                                }}
                            />

                            {/* Connecting lines */}
                            <svg
                                style={{ position: 'absolute', inset: 0 }}
                                width="100%"
                                height="100%"
                            >
                                <line
                                    x1="50%"
                                    y1="40"
                                    x2="calc(100% - 53px)"
                                    y2="50%"
                                    stroke="rgba(252,238,10,0.15)"
                                    strokeWidth="1"
                                />
                                <line
                                    x1="calc(100% - 53px)"
                                    y1="50%"
                                    x2="64px"
                                    y2="calc(100% - 80px)"
                                    stroke="rgba(252,238,10,0.15)"
                                    strokeWidth="1"
                                />
                            </svg>

                            {/* Floating pill tags */}
                            <div
                                style={{
                                    position: 'absolute',
                                    top: 28,
                                    left: 20,
                                    background: 'rgba(252,238,10,0.08)',
                                    border: '1px solid rgba(252,238,10,0.2)',
                                    borderRadius: 100,
                                    padding: '5px 14px',
                                    fontSize: 9,
                                    letterSpacing: 1.5,
                                    textTransform: 'uppercase',
                                    color: '#FCEE0A',
                                }}
                            >
                                Product Thinking
                            </div>
                            <div
                                style={{
                                    position: 'absolute',
                                    top: 70,
                                    right: 20,
                                    background: 'rgba(252,238,10,0.08)',
                                    border: '1px solid rgba(252,238,10,0.2)',
                                    borderRadius: 100,
                                    padding: '5px 14px',
                                    fontSize: 9,
                                    letterSpacing: 1.5,
                                    textTransform: 'uppercase',
                                    color: '#FCEE0A',
                                }}
                            >
                                Data · Design
                            </div>
                            <div
                                style={{
                                    position: 'absolute',
                                    bottom: 90,
                                    left: 24,
                                    background: 'rgba(252,238,10,0.08)',
                                    border: '1px solid rgba(252,238,10,0.2)',
                                    borderRadius: 100,
                                    padding: '5px 14px',
                                    fontSize: 9,
                                    letterSpacing: 1.5,
                                    textTransform: 'uppercase',
                                    color: '#FCEE0A',
                                }}
                            >
                                Ship Fast
                            </div>

                            {/* Bottom gradient overlay */}
                            <div
                                style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    background: 'linear-gradient(transparent, rgba(10,46,26,0.95))',
                                    padding: 20,
                                }}
                            >
                                <div
                                    style={{
                                        fontFamily: '"Syne", sans-serif',
                                        fontWeight: 800,
                                        fontSize: 22,
                                        color: '#F5F0E8',
                                    }}
                                >
                                    Pankaj Siradhana
                                </div>
                                <div
                                    style={{
                                        fontSize: 10,
                                        textTransform: 'uppercase',
                                        letterSpacing: 1.5,
                                        color: 'rgba(245,240,232,0.4)',
                                    }}
                                >
                                    Product Manager · Bengaluru, India
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
// ─── STYLES (if any) ─────────────────────
// ─── EXPORT ──────────────────────────────
