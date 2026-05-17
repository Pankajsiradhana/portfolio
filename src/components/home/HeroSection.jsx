// ─── IMPORTS ────────────────────────────
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { heroWords, heroPills } from '../../data/skills';
import heroPhoto from '../../assets/hero.svg';

// ─── TYPES / PROPS ───────────────────────

// ─── COMPONENT ───────────────────────────
export default function HeroSection() {
    return (
        <section style={{ background: '#F5F0E8', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
            <div className="container-main" style={{ paddingTop: 140, paddingBottom: 80 }}>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: 60,
                        alignItems: 'center'
                    }}
                    className="hero-grid"
                >
                    {/* Left Column */}
                    <div>
                        <p
                            style={{
                                fontSize: 10,
                                textTransform: 'uppercase',
                                letterSpacing: 3,
                                color: 'rgba(10,46,26,0.5)',
                                marginBottom: 14,
                            }}
                        >
                            Product Manager · Bengaluru, India
                        </p>

                        <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
                            {heroPills.map((tag) => (
                                <span key={tag} className="pill-tag">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h1>
                            {heroWords.map((word, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: word.delay, duration: 0.6, ease: 'easeOut' }}
                                    style={{
                                        fontFamily: '"Bebas Neue", cursive',
                                        fontSize: 'clamp(56px, 10vw, 120px)',
                                        lineHeight: 0.88,
                                        color: '#0A2E1A',
                                    }}
                                >
                                    {word.highlight ? (
                                        <>
                                            I{' '}
                                            <span
                                                style={{
                                                    background: '#FCEE0A',
                                                    padding: '0 8px',
                                                    display: 'inline-block',
                                                }}
                                            >
                                                BUILD.
                                            </span>
                                        </>
                                    ) : (
                                        word.text
                                    )}
                                </motion.div>
                            ))}
                        </h1>

                        <p
                            style={{
                                fontFamily: '"DM Sans", sans-serif',
                                fontSize: 16,
                                lineHeight: 1.65,
                                color: 'rgba(10,46,26,0.65)',
                                maxWidth: 380,
                                marginTop: 20,
                                marginBottom: 28,
                            }}
                        >
                            I think in systems, ship in sprints, and obsess over the why behind
                            every product decision. Currently building things that don't exist yet.
                        </p>

                        <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
                            <Link to="/work" className="btn-primary">
                                See My Work ↓
                            </Link>
                            <a
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                style={{
                                    color: 'rgba(10,46,26,0.55)',
                                    fontSize: 14,
                                    textDecoration: 'none',
                                    fontFamily: '"DM Sans", sans-serif',
                                }}
                            >
                                Let's Collab →
                            </a>
                        </div>
                    </div>

                    {/* Right Column — Hero Image Card */}
                    <div className="hero-image-col">
                        <div
                            style={{
                                borderRadius: 22,
                                overflow: 'hidden',
                                width: '100%',
                                aspectRatio: '3/4',
                                background: '#1a1a1a',
                                position: 'relative',
                            }}
                        >
                            {/* Actual Photo */}
                            <img
                                src={heroPhoto}
                                alt="Pankaj Siradhana"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    objectPosition: 'center top',
                                    display: 'block',
                                }}
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'none';
                                    e.target.nextSibling.nextSibling.style.display = 'flex';
                                }}
                            />
                            {/* Subtle bottom fade only — no green tint */}
                            <div
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(to bottom, transparent 0%, transparent 60%, rgba(0,0,0,0.45) 100%)',
                                    pointerEvents: 'none'
                                }}
                            />
                            {/* Fallback SVG */}
                            <div
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    display: 'none',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: '#1a1a1a'
                                }}
                            >
                                <svg
                                    width="80"
                                    height="80"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="rgba(252,238,10,0.35)"
                                    strokeWidth="1"
                                >
                                    <circle cx="12" cy="8" r="4" />
                                    <path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" />
                                </svg>
                                <span
                                    style={{
                                        fontSize: 9,
                                        textTransform: 'uppercase',
                                        letterSpacing: 2,
                                        color: 'rgba(252,238,10,0.35)',
                                        marginTop: 12,
                                    }}
                                >
                                    [Save hero.jpg in src/assets]
                                </span>
                            </div>

                            {/* Bottom Overlay — stays fixed at bottom */}
                            <div
                                style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    background: 'linear-gradient(transparent, rgba(0,0,0,0.75))',
                                    padding: 20,
                                    zIndex: 2,
                                }}
                            >
                                <div style={{ fontSize: 16, fontWeight: 700, color: '#F5F0E8' }}>
                                    Pankaj Siradhana
                                </div>
                                <div style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: 2, color: 'rgba(245,240,232,0.55)' }}>
                                    Product Manager · Builder
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
// ─── STYLES (if any) ─────────────────────
// ─── EXPORT ──────────────────────────────
