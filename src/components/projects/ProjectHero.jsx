// ─── IMPORTS ────────────────────────────

// ─── COMPONENT ───────────────────────────
export default function ProjectHero({ height = 420, background = '#183324', children, containerStyle = {} }) {
    return (
        <div
            className="sr-item"
            style={{
                height,
                borderRadius: 20,
                background,
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                ...containerStyle
            }}
        >
            <div className="grid-overlay" style={{ position: 'absolute', inset: 0 }} />
            {children}
        </div>
    );
}
