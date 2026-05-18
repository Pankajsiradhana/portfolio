// ─── IMPORTS ────────────────────────────
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { heroWords, heroPills } from '../../data/skills';
import heroPhoto from '../../assets/hero.svg';

// ─── TYPES / PROPS ───────────────────────

// ─── COMPONENT ───────────────────────────
export default function HeroSection() {
    const [tilt, setTilt] = useState({ x: 0, y: 0, tx: 0, ty: 0, active: false });
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        // Relative coordinates from center of the card
        const mouseX = e.clientX - rect.left - width / 2;
        const mouseY = e.clientY - rect.top - height / 2;

        // Rotation angles (max 8 degrees tilt)
        const rX = -(mouseY / (height / 2)) * 8;
        const rY = (mouseX / (width / 2)) * 8;

        // Slight shift/translation offsets (max 12px glide)
        const tX = (mouseX / (width / 2)) * 12;
        const tY = (mouseY / (height / 2)) * 12;

        setTilt({ x: rX, y: rY, tx: tX, ty: tY, active: true });
    };

    const handleMouseLeave = () => {
        setTilt({ x: 0, y: 0, tx: 0, ty: 0, active: false });
    };

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

                    {/* Right Column — Morphing Blob Hero Image with Mouse Parallax */}
                    <div className="hero-image-col" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div 
                            className="morphing-blob-card"
                            ref={cardRef}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            style={{
                                cursor: 'pointer',
                                perspective: '1000px',
                            }}
                        >
                            {/* Slowly morphing background aura/glow (moves opposite to mouse and brightens slightly on hover) */}
                            <div 
                                className="morphing-blob-glow" 
                                style={{
                                    opacity: tilt.active ? 0.25 : 0.15,
                                    transform: tilt.active
                                        ? `translateX(${-tilt.tx * 2.5}px) translateY(${-tilt.ty * 2.5}px) scale(1.05)`
                                        : 'translateX(0px) translateY(0px) scale(1)',
                                    transition: tilt.active ? 'all 0.15s ease-out' : 'all 0.8s cubic-bezier(0.25, 1, 0.5, 1)',
                                }}
                            />
                            
                            {/* Main Morphing Image Container (remains perfectly stable) */}
                            <div className="morphing-blob-container">
                                <img
                                    src={heroPhoto}
                                    alt="Pankaj Siradhana"
                                    className="morphing-blob-img"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                
                                {/* Fallback SVG in case image doesn't load */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        display: 'none',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        background: '#EDE7DB'
                                    }}
                                >
                                    <svg
                                        width="64"
                                        height="64"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="rgba(10,46,26,0.25)"
                                        strokeWidth="1"
                                    >
                                        <circle cx="12" cy="8" r="4" />
                                        <path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" />
                                    </svg>
                                </div>
                            </div>
                            
                            {/* floating PM tag (remains stable) */}
                            <div
                                style={{
                                    position: 'absolute',
                                    bottom: -20,
                                    right: 20,
                                    background: '#0A2E1A',
                                    padding: '12px 24px',
                                    borderRadius: '100px',
                                    boxShadow: '0 8px 32px rgba(10, 46, 26, 0.15)',
                                    zIndex: 10,
                                    border: '1px solid rgba(245, 240, 232, 0.1)',
                                }}
                            >
                                <div style={{ fontSize: 13, fontWeight: 700, color: '#F5F0E8', lineHeight: 1.2 }}>
                                    Pankaj Siradhana
                                </div>
                                <div style={{ fontSize: 8, textTransform: 'uppercase', letterSpacing: 1.5, color: '#FCEE0A', marginTop: 2, fontWeight: 600 }}>
                                    Product Manager
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
