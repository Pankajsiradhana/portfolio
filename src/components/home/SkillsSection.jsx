// ─── IMPORTS ────────────────────────────
import ScrollReveal from '../common/ScrollReveal';
import RadarChart from '../RadarChart';
import { skillCharts } from '../../data/skills';

// ─── TYPES / PROPS ───────────────────────

// ─── COMPONENT ───────────────────────────
export default function SkillsSection() {
    return (
        <section id="skills" style={{ background: '#F5F0E8' }} className="section-padding">
            <div className="container-main">
                <ScrollReveal>
                    <div className="sr-item">
                        <p
                            className="eyebrow"
                            style={{ color: 'rgba(10,46,26,0.5)', marginBottom: 12 }}
                        >
                            // how I think & what I use
                        </p>
                        <h2
                            style={{
                                fontFamily: '"Syne", sans-serif',
                                fontWeight: 800,
                                fontSize: 'clamp(40px, 6vw, 80px)',
                                color: '#0A2E1A',
                                lineHeight: 0.9,
                                marginBottom: 16,
                            }}
                        >
                            Skills & Tools
                        </h2>
                        <p
                            style={{
                                fontFamily: '"DM Sans", sans-serif',
                                fontSize: 14,
                                color: 'rgba(10,46,26,0.5)',
                                marginBottom: 48,
                            }}
                        >
                            Hover over each chart to explore the skills.
                        </p>
                    </div>

                    {/* Radar Charts Grid */}
                    <div className="radar-grid-layout">
                        {skillCharts.map((chart, i) => (
                            <div key={chart.id} className="sr-item" style={{ transitionDelay: `${0.1 * (i + 1)}s` }}>
                                <RadarChart title={chart.title} data={chart.axes} pills={chart.pills} />
                            </div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
// ─── STYLES (if any) ─────────────────────
// ─── EXPORT ──────────────────────────────
