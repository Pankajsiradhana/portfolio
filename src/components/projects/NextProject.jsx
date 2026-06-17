// ─── IMPORTS ────────────────────────────
import { Link } from 'react-router-dom';

// ─── COMPONENT ───────────────────────────
export default function NextProject({ link, text = "Next Project", direction = "right" }) {
    const isRight = direction === "right";

    return (
        <div className="sr-item" style={{ display: 'flex', justifyContent: isRight ? 'flex-end' : 'flex-start' }}>
            <Link
                to={link}
                style={{
                    fontFamily: '"Space Grotesk", sans-serif',
                    fontWeight: 800,
                    fontSize: 'clamp(24px, 4vw, 48px)',
                    color: '#0D7377',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                }}
            >
                {!isRight && <span style={{ color: '#E8634A' }}>←</span>}
                {text}
                {isRight && <span style={{ color: '#E8634A' }}>→</span>}
            </Link>
        </div>
    );
}
