import PageTransition from '../components/common/PageTransition';
import ScrollReveal from '../components/common/ScrollReveal';
import VybeHeroCard from '../components/work/VybeHeroCard';
import ProjectAccordion from '../components/work/ProjectAccordion';

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

export default function Work() {
    return (
        <PageTransition>
            {/* ════════ PAGE HEADER ════════ */}
            <section style={{ background: '#F4F0EA', paddingTop: 140, paddingBottom: 60 }}>
                <div className="container-main">
                    <ScrollReveal>
                        <div className="sr-item">
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                                <Sparkle size={14} color="#D85A38" />
                                <p className="eyebrow" style={{ color: 'rgba(30,53,47,0.4)', margin: 0 }}>
                                    // things I've actually built
                                </p>
                            </div>
                            <h1
                                style={{
                                    fontFamily: '"Playfair Display", serif',
                                    fontWeight: 900,
                                    fontSize: 'clamp(48px, 8vw, 100px)',
                                    color: '#1E352F',
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
