export default function Footer() {
    return (
        <>
            <footer className="site-footer">
                <span style={{ fontSize: 11, color: 'rgba(244,240,234,0.4)' }}>
                    © 2026 Pankaj Siradhana
                </span>
                <span style={{ fontSize: 11, fontStyle: 'italic', color: 'rgba(244,240,234,0.4)', display: 'flex', alignItems: 'center', gap: 6 }}>
                    Built with intention. Shipped with speed.
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#F9A825">
                        <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4Z" />
                    </svg>
                </span>
            </footer>
            <style>{`
                .site-footer {
                    background: #1E352F;
                    border-top: 1px solid rgba(244,240,234,0.08);
                    padding: 24px 52px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 8px;
                }
                @media (max-width: 768px) {
                    .site-footer {
                        padding: 16px 20px;
                        flex-direction: column;
                        text-align: center;
                        gap: 4px;
                    }
                }
                @media (max-width: 480px) {
                    .site-footer {
                        padding: 12px 16px;
                    }
                }
            `}</style>
        </>
    );
}
