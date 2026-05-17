// ─── IMPORTS ────────────────────────────

// ─── COMPONENT ───────────────────────────
export default function ArtifactsRow({ links, ctaKeys = [] }) {
    // links is an array of objects: { label, href, primary: boolean, disabled: boolean }
    return (
        <div className="sr-item" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 60 }}>
            {links.map((link, i) => {
                if (link.disabled) {
                    return (
                        <div key={i} style={{ position: 'relative', display: 'inline-block' }}>
                            <a
                                href={link.href}
                                style={{
                                    opacity: 0.4,
                                    cursor: 'not-allowed',
                                    pointerEvents: 'none',
                                }}
                                className="btn-outlined-dark"
                                title="Coming Soon"
                            >
                                {link.label}
                            </a>
                        </div>
                    );
                }

                return (
                    <a
                        key={i}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={link.primary ? "btn-primary" : "btn-outlined-dark"}
                        style={link.primary ? { fontSize: 13 } : {}}
                    >
                        {link.label}
                    </a>
                )
            })}
        </div>
    );
}
