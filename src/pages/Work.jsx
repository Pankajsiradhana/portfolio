// ─── IMPORTS ────────────────────────────
import PageTransition from '../components/common/PageTransition';
import ScrollReveal from '../components/common/ScrollReveal';
import VybeHeroCard from '../components/work/VybeHeroCard';
import ProjectAccordion from '../components/work/ProjectAccordion';

// ─── TYPES / PROPS ───────────────────────

// ─── COMPONENT ───────────────────────────
export default function Work() {
    return (
        <PageTransition>
            {/* ════════ PAGE HEADER ════════ */}
            <section style={{ background: '#F5F0E8', paddingTop: 140, paddingBottom: 60 }}>
                <div className="container-main">
                    <ScrollReveal>
                        <div className="sr-item">
                            <p className="eyebrow" style={{ color: 'rgba(10,46,26,0.5)', marginBottom: 12 }}>
                                // things I've actually built
                            </p>
                            <h1
                                style={{
                                    fontFamily: '"Syne", sans-serif',
                                    fontWeight: 800,
                                    fontSize: 'clamp(48px, 8vw, 100px)',
                                    color: '#0A2E1A',
                                    lineHeight: 0.9,
                                }}
                            >
                                Selected Work
                            </h1>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <VybeHeroCard />
            <ProjectAccordion />
        </PageTransition>
    );
}

// ─── STYLES (if any) ─────────────────────
// ─── EXPORT ──────────────────────────────
