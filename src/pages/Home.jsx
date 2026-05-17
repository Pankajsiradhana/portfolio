// ─── IMPORTS ────────────────────────────
import PageTransition from '../components/common/PageTransition';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import SkillsSection from '../components/home/SkillsSection';
import ContactSection from '../components/home/ContactSection';

// ─── TYPES / PROPS ───────────────────────

// ─── COMPONENT ───────────────────────────
export default function Home() {
    return (
        <PageTransition>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ContactSection />

            {/* Responsive style overrides */}
            <style>{`
                .radar-grid-layout {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 32px;
                }

                /* ── Tablets & Small Laptops (≤1024px) ── */
                @media (max-width: 1024px) {
                    .hero-grid {
                        gap: 40px !important;
                    }
                    .about-grid, .contact-grid {
                        gap: 40px !important;
                    }
                    .radar-grid-layout {
                        grid-template-columns: repeat(2, 1fr) !important;
                        gap: 24px;
                    }
                }

                /* ── Tablets (≤768px) ── */
                @media (max-width: 768px) {
                    .hero-grid, .about-grid, .contact-grid {
                        grid-template-columns: 1fr !important;
                        gap: 32px !important;
                    }
                    .radar-grid-layout {
                        grid-template-columns: 1fr 1fr !important;
                        gap: 20px;
                    }
                    .hero-image-col {
                        order: -1;
                        max-width: 320px;
                        margin: 0 auto;
                    }
                    .hero-image-col > div {
                        aspect-ratio: 3/4 !important;
                    }
                }

                /* ── Mobile Phones (≤480px) ── */
                @media (max-width: 480px) {
                    .hero-image-col {
                        max-width: 260px;
                    }
                    .radar-grid-layout {
                        grid-template-columns: 1fr !important;
                    }
                    .contact-grid {
                        gap: 24px !important;
                    }
                }
            `}</style>
        </PageTransition>
    );
}

// ─── STYLES (if any) ─────────────────────
// ─── EXPORT ──────────────────────────────
