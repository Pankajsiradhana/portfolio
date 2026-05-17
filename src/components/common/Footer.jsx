export default function Footer() {
    return (
        <footer
            style={{
                background: '#F5F0E8',
                borderTop: '1px solid rgba(10,46,26,0.1)',
                padding: '20px 52px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '8px',
            }}
        >
            <span style={{ fontSize: 11, color: 'rgba(10,46,26,0.4)' }}>
                © 2026 Pankaj Siradhana
            </span>
            <span style={{ fontSize: 11, fontStyle: 'italic', color: 'rgba(10,46,26,0.4)' }}>
                Built with intention. Shipped with speed. ✦
            </span>
        </footer>
    );
}
