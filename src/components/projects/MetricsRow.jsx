// ─── IMPORTS ────────────────────────────

// ─── COMPONENT ───────────────────────────
export default function MetricsRow({ metrics, columns = 4, gap = 16, styleOverrides = {} }) {
    // If metrics has `desc` prop, it's like SaasChurn style.
    const hasDesc = metrics.some(m => m.desc);

    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
                gap,
                ...styleOverrides
            }}
            className="metrics-grid"
        >
            {metrics.map((m) => (
                <div
                    key={m.value}
                    className="sr-item card-hover"
                    style={{
                        background: hasDesc ? 'transparent' : 'rgba(245,240,204,0.04)',
                        border: '1px solid rgba(245,240,204,0.1)',
                        borderRadius: hasDesc ? 16 : 14,
                        padding: hasDesc ? 28 : 24,
                        textAlign: 'center',
                    }}
                >
                    <div style={{ fontFamily: '"Playfair Display", serif', fontSize: hasDesc ? 64 : 52, color: '#E8634A', lineHeight: 1 }}>
                        {m.value}
                    </div>

                    {hasDesc ? (
                        <>
                            <div style={{ fontSize: 14, fontWeight: 700, color: '#F5F0CC', marginTop: 4, marginBottom: 8 }}>
                                {m.label}
                            </div>
                            <p style={{ fontSize: 12, color: 'rgba(245,240,204,0.55)', lineHeight: 1.6 }}>
                                {m.desc}
                            </p>
                        </>
                    ) : (
                        <div style={{ fontSize: 10, textTransform: 'uppercase', color: 'rgba(245,240,204,0.45)', marginTop: 6, letterSpacing: 1 }}>
                            {m.label}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
